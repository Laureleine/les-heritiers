# Spec — Générateur de Menu Belle Époque

_Session 30 Juin 2026_

---

## Objectif

Ajouter un outil `/menu` à la page hub Outils permettant de générer aléatoirement un menu de repas 1899, cohérent avec la saison, le type de repas, les moyens financiers, le nombre de convives et le niveau du cuisinier. Le menu inclut un texte d'ambiance cuisine et un système de résolution culinaire par dé.

---

## Critères de génération

| Paramètre | Valeurs |
|---|---|
| Saison | Printemps / Été / Automne / Hiver |
| Type de repas | Petit déjeuner / Déjeuner / Dîner / Souper / Goûter / Banquet |
| Niveau financier | Populaire / Bourgeois / Grande bourgeoisie / Aristocratie |
| Nombre de convives | Entier libre → détermine la tranche : Intime (1–4) / Tablée (5–12) / Banquet (13+) |
| Niveau du cuisinier | 1 à 14 |

---

## Architecture — Approche B (Corpus + Structures séparées)

### Table `menu_plats`

```sql
id                        uuid PK
nom                       text NOT NULL
categorie                 text NOT NULL  -- voir enum ci-dessous
niveaux                   text[]         -- ['populaire','bourgeois',...]
saisons                   text[]         -- ['hiver','automne',...]
nb_convives_min           int nullable
nb_convives_max           int nullable
difficulte                int            -- 1 à 5, seuil = 6 + difficulte × 2
accord_vin                text nullable
description_narrative     text nullable  -- phrase d'ambiance pour le mode Narratif
description_reussite_critique text nullable
description_echec_partiel text nullable
description_echec_critique text nullable
statut                    text           -- 'en_attente' | 'approuve' | 'refuse'
auteur_id                 uuid FK → auth.users
validateur_id             uuid nullable FK → auth.users
motif_refus               text nullable
created_at                timestamptz DEFAULT now()
```

**Catégories :** `boisson_chaude`, `viennoiserie`, `potage`, `hors_d_oeuvre`, `poisson`, `viande`, `volaille`, `gibier`, `abats`, `legume`, `entremets`, `fromage`, `dessert`, `patisserie`

### Table `menu_structures`

```sql
id                uuid PK
type_repas        text NOT NULL  -- 'petit_dejeuner' | 'dejeuner' | 'diner' | 'souper' | 'gouter' | 'banquet'
niveau_financier  text NOT NULL  -- 'populaire' | 'bourgeois' | 'grande_bourgeoisie' | 'aristocratie'
tranche_convives  text NOT NULL  -- 'intime' | 'tablee' | 'banquet'
services          jsonb NOT NULL -- tableau ordonné de services (voir format ci-dessous)
textes_intro      text[]         -- pool de phrases d'ambiance cuisine (tirage aléatoire)
created_at        timestamptz DEFAULT now()
```

Format d'un service dans `services` :
```json
{ "id": "potage", "label": "Potage", "categorie": "potage", "nb_plats": 1 }
```

### Table `menu_sauvegardes`

```sql
id               uuid PK
utilisateur_id   uuid FK → auth.users
titre            text
parametres       jsonb  -- {saison, type_repas, niveau_financier, nb_convives, niveau_cuisinier}
menu_genere      jsonb  -- menu complet tel que tiré
created_at       timestamptz DEFAULT now()
```

### RLS

- `menu_plats` : SELECT des `approuve` pour tout initié + SELECT de ses propres lignes ; INSERT libre (statut forcé `en_attente`) ; UPDATE statut réservé aux Gardiens
- `menu_structures` : SELECT pour tout initié ; INSERT/UPDATE réservés aux Gardiens
- `menu_sauvegardes` : accès uniquement à ses propres lignes

---

## Système de résolution culinaire

**Tirage :** 1d10 + niveau_cuisinier (1–14)  
**Seuil de difficulté :** 6 + difficulte × 2 (donne 8 à 16 pour difficulte 1 à 5)

| Niveau | Label | Seuil |
|---|---|---|
| 1 | Simple | 8 |
| 2 | Accessible | 10 |
| 3 | Technique | 12 |
| 4 | Difficile | 14 |
| 5 | Chef | 16 |

| Résultat du tirage | Issue |
|---|---|
| ≥ seuil + 7 | ✦ Réussite critique → `description_reussite_critique` |
| ≥ seuil | ✓ Réussite normale |
| < seuil | ✗ Échec → `description_echec_partiel` |
| ≤ seuil − 7 | ✦ Échec critique → `description_echec_critique` |

---

## Frontend

### Route et navigation

- Nouvelle route `/menu` dans `App.js`
- Nouvelle carte "Générateur de Menu" dans `OutilsHub.jsx`

### Composants

```
GenerateurMenu.jsx          ← page principale, layout 2 colonnes
├── MenuForm.jsx            ← panneau gauche : les 5 paramètres
│   ├── Saison              (4 boutons toggle)
│   ├── Type de repas       (6 boutons toggle)
│   ├── Niveau financier    (4 boutons toggle)
│   ├── Nb convives         (input numérique)
│   ├── Niveau cuisinier    (slider 1–14 avec label texte)
│   └── Bouton "Générer le menu"
│
└── MenuAffichage.jsx       ← panneau droit
    ├── 4 onglets de mode   (Liste / Carte / Vins / Narratif)
    ├── Texte d'ambiance    (tiré du pool textes_intro)
    ├── MenuService.jsx × N
    │   ├── Bouton reroll service 🎲
    │   └── MenuPlat.jsx × N
    │       ├── Badge difficulté (⚫×N sur 5)
    │       ├── Bouton reroll plat 🎲
    │       └── MenuDe.jsx (inline, déclenché par "Tenter le sort")
    └── Barre d'actions     (Copier / Imprimer / Sauvegarder)
```

### `MenuDe.jsx` — résolution inline

1. Animation d10 → résultat (1–10)
2. Total : résultat + niveau_cuisinier
3. Badge coloré selon l'issue (🟡 RC / 🟢 Réussite / 🟠 Échec / 🔴 EC)
4. Texte descriptif correspondant
5. Bouton "Retenter" (reroll du dé uniquement)

### 4 modes de présentation

| Mode | Description |
|---|---|
| Liste | Services titrés, plats listés, sobre |
| Carte Belle Époque | Typographie centrée, style carton de menu d'époque |
| Vins | Idem Liste + accord vin sous chaque plat |
| Narratif | 2–3 phrases d'ambiance + liste des plats avec `description_narrative` |

### 3 niveaux de reroll

- **Global** : nouveau tirage complet (texte intro + tous les plats)
- **Par service** : reroll d'un service, les autres conservés
- **Par plat** : reroll d'un plat dans son service

### 4 actions de sortie

- **Copier** : `navigator.clipboard.writeText()` du menu formaté en texte
- **Imprimer/PDF** : `window.print()` avec CSS `@media print` dédié (pas de dépendance)
- **Sauvegarder** : insert dans `menu_sauvegardes` avec un titre saisi par l'utilisateur
- **Jetable** : rien — le menu disparaît à la fermeture

### Hooks

| Hook | Responsabilité |
|---|---|
| `useMenuGenerateur.js` | Charge la structure, tire les plats, gère les 3 niveaux de reroll |
| `useMenuPlats.js` | Proposer, lister ses propositions, valider (Gardiens) |
| `useMenuSauvegardes.js` | Sauvegarder / charger / supprimer |

### Logique de génération dans `useMenuGenerateur`

1. Calculer la tranche :
   - Si `type_repas` = `petit_dejeuner` ou `gouter` → tranche = `intime` (ignoré, une seule structure par niveau)
   - Si `type_repas` = `banquet` → tranche = `banquet` (forcé, indépendamment du nb_convives)
   - Sinon : `nb_convives` 1–4 → `intime`, 5–12 → `tablee`, 13+ → `banquet`
2. Charger `menu_structures` pour `(type_repas, niveau_financier, tranche_convives)`
3. Tirer aléatoirement un texte dans `textes_intro[]`
4. Pour chaque service : filtrer `menu_plats` approuvés par `(categorie, niveau ∈ niveaux[], saison ∈ saisons[], nb_convives dans bornes si définies)` → tirer `nb_plats` au hasard
5. Assembler et afficher

---

## Admin — Validation des propositions

Nouvel onglet **"Menus"** dans `AdminDashboard.js`, même pattern que l'onglet Tables PNJ :
- Liste des propositions `en_attente`
- Valider ✓ / Refuser ✗ (avec motif)
- Ajouter directement ✎ (bypass, statut `approuve` immédiat) — réservé aux Gardiens

---

## Données de bootstrap

### Structures (~42 lignes)

Couverture :

| Type de repas | Populaire | Bourgeois | Gde bourg. | Aristocratie |
|---|---|---|---|---|
| Petit déjeuner | 1 | 1 | 1 | 1 |
| Déjeuner | 3 (×tranches) | 3 | 3 | 3 |
| Dîner | 3 | 3 | 3 | 3 |
| Souper | 2 | 2 | 2 | 2 |
| Goûter | 1 | 1 | 1 | 1 |
| Banquet | — | 1 | 1 | 1 |

### Corpus initial (~200 plats)

| Catégorie | Nb cible |
|---|---|
| boisson_chaude | 6 |
| viennoiserie | 10 |
| potage | 20 |
| hors_d_oeuvre | 15 |
| poisson | 20 |
| viande | 25 |
| volaille | 15 |
| gibier | 10 |
| abats | 8 |
| legume | 15 |
| entremets | 12 |
| fromage | 10 |
| dessert | 15 |
| patisserie | 12 |

Chaque plat seed : `niveaux[]`, `saisons[]`, `difficulte`, les 3 descriptions d'issue, `accord_vin`. Statut `approuve`, `auteur_id` = super admin.

### Textes d'ambiance

3 à 5 textes par structure (pool pour tirage aléatoire). Écrits dans le ton de la Belle Époque.

### Script de migration

`scripts/migrate_menu.js` (Node + `pg` + `SUPABASE_DB_URL`) :
1. Crée les 3 tables + RLS
2. Insère les ~42 structures
3. Insère le corpus de ~200 plats
4. Insère les textes d'ambiance

---

## Périmètre exclu (hors scope)

- Génération IA / LLM : aucun token, corpus statique uniquement
- Recettes détaillées (ingrédients, quantités) : les noms de plats suffisent
- Historique des tirages de dé : les résultats sont éphémères dans la session
