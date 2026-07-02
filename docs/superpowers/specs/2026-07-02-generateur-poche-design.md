# Générateur de Poche — Design

_Date : 2 juillet 2026_

## Objectif

Ajouter un nouvel outil au Hub Outils du Maître de Jeu : un générateur d'inventaire de poche (objets trouvés sur un PNJ fouillé), Paris 1899. Nouvelle carte indépendante dans `OutilsHub.jsx`, route `/poche`.

## Convention réutilisée

Le générateur de PNJ possède déjà les briques nécessaires dans `src/data/pnjTables.js`, réutilisées telles quelles (aucune modification de ce fichier) :
- `tirage(tableau)` — tirage uniforme
- `tiragePondere(tableau)` — tirage pondéré via un champ `weight` (défaut 1)
- `resolveText(entree, sexe)` — résout `{m, f}` → forme genrée, fallback masculin

## Stockage — tout en base (pas de fichier de données statique)

Contrairement au générateur de PNJ (tables hardcodées + surcouche communautaire), la poche vit **entièrement** dans Supabase — canon et communautaire dans la même table, distingués par `is_official` (même convention que `social_items.is_official`). Décision explicite de l'autrice : elle veut pouvoir ajuster poids/textes depuis l'app sans toucher au code ni redéployer.

Compromis assumé : le générateur dépend de Supabase (pas de repli hors-ligne, contrairement à PNJ). Cohérent avec le reste de l'app qui suppose déjà une session active.

### Table `poche_table_entries`

```sql
CREATE TABLE public.poche_table_entries (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name   TEXT NOT NULL CHECK (table_name IN (
                 'fouille_ordinaire','fouille_mondaine','fouille_secrets',
                 'fouille_horreur','fouille_espionnage','fouille_pulp','fouille_saisonniere')),
  saison       TEXT CHECK (saison IN ('hiver','printemps','ete','automne') OR saison IS NULL),
  value_m      TEXT NOT NULL,
  value_f      TEXT,
  weight       INTEGER NOT NULL DEFAULT 1,
  is_official  BOOLEAN NOT NULL DEFAULT false,
  status       TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  reject_reason TEXT,
  created_by   UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  approved_by  UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  approved_at  TIMESTAMPTZ,
  CONSTRAINT saisonniere_need_saison CHECK (table_name != 'fouille_saisonniere' OR saison IS NOT NULL),
  CONSTRAINT non_saisonniere_no_saison CHECK (table_name = 'fouille_saisonniere' OR saison IS NULL)
);
```

RLS — copié à l'identique du modèle éprouvé `pnj_table_entries` (cf. `scripts/migrate_pnj_table_entries.js`) :
- SELECT (authenticated) : `status = 'approved' OR created_by = auth.uid()`
- INSERT (authenticated) : `created_by = auth.uid()`
- UPDATE (authenticated) : admin uniquement (`profiles.role IN ('super_admin','gardien')`)

Index : `(status)`, `(table_name, saison, status)`, `(created_by)`.

### Migration + seed

`scripts/migrate_poche_table_entries.js` (pg + `SUPABASE_DB_URL`, jamais les outils MCP bloqués sur le projet prod) :
1. Crée la table, les index, active RLS, crée les 3 policies (idempotent comme les scripts PNJ existants).
2. Insère les ~50 entrées canon fournies par l'autrice (converties de `{min,max,nom}` vers `{weight,value_m,value_f}`, `weight` = largeur de l'intervalle d'origine) avec `is_official = true, status = 'approved', created_by = NULL`.

## Génération

### `src/hooks/usePocheTableEntries.js`

Mirror de `usePnjTableEntries.js` mais sans notion de tables hardcodées à fusionner — `dbEntries` EST la source complète :
- `reload()` : fetch des entrées `approved` (groupées par `table_name`, ou `${table_name}_${saison}` pour `fouille_saisonniere`) + fetch de "mes propositions" (`created_by = session.user.id`, statut ≠ approved).
- `proposer({ tableName, saison, valueM, valueF, weight })` : insert `status='pending'`.
- `updateEntry(id, champs)` : update direct (admin uniquement, RLS l'impose) — texte/poids d'une entrée déjà approuvée.
- `approuver(entry)`, `refuser(entry, motif)` : identiques au pattern PNJ/Menu.

### `src/utils/pocheGenerator.js`

Adaptation de la fonction fournie (`genererInventaireAutonome`) :
- Remplace `findRow` (min/max) par `tiragePondere` sur les tableaux issus de `dbEntries`.
- Remplace `entry.nom[sexe]` par `resolveText(entry, sexe)`.
- Même logique de config (`sexe`, `classeSociale`, `moralite`, `genre`, `saison`, `forceSecret`), même calcul de bourse, même déclenchement de secret.
- Si `dbEntries[cle]` est vide/absent (page pas encore chargée), retourne un tableau vide pour cette catégorie plutôt que de planter.

## UI

### `src/components/PocheGenerateur.jsx`

Nouvelle page, route `/poche`, carte indépendante dans `OutilsHub.jsx` (icône à choisir dans `config/icons`, ex. `Package` ou `Wallet`).
- Contrôles : sexe, classe sociale, moralité, genre littéraire, saison, case "forcer un secret".
- Bouton "Fouiller les poches" désactivé tant que `dbEntries` n'est pas chargé (garde-fou lié à la dépendance DB totale).
- Résultat : liste des objets tirés.
- Section "Proposer un objet" (repli/dépli), même UX que PNJ : table cible, texte masculin/féminin, poids, historique de mes propositions avec statut.

### `src/components/admin/TabPochePropositions.js`

Étend le modèle `TabPnjPropositions.js` / `TabMenuPropositions.js` :
- Onglets En attente / Approuvés / Refusés (approuver/refuser inchangé).
- **Nouveau** : bouton "Éditer" sur une entrée approuvée → formulaire inline (texte m/f, poids) → `updateEntry`.
- **Nouveau** : bouton "+ Ajouter un objet" → insertion directe `is_official=true, status='approved'`.
- Enregistré dans `AdminDashboard.js` à côté des onglets `pnj` et `menu`.

### Routing (`src/AppRouter.jsx`)

- `const PocheGenerateur = lazy(() => import('./components/PocheGenerateur'));`
- `onOpenPoche={() => navigate('/poche')}` sur `OutilsHub`
- `<Route path="/poche" element={<PocheGenerateur onBack={() => navigate('/outils')} userProfile={userProfile} session={session} />} />`

## Tests de non-régression

Tests unitaires sur `pocheGenerator.js` (fonctions pures, faciles à isoler) :
- Respect des poids dans `tiragePondere` réutilisé (déjà implicite, mais vérifier l'intégration avec des tables mock).
- Résolution genrée correcte (masculin/féminin/indéterminé → fallback masculin).
- Injection systématique de l'objet saisonnier.
- Déclenchement du secret selon `moralite`/`forceSecret` (probabilités).
- Calcul de la bourse selon la classe sociale.
- Comportement gracieux quand une table `dbEntries` est vide (pas de crash).

## Hors périmètre (décidé explicitement)

- Pas de migration des tables PNJ existantes (traits/secrets/apparences/...) vers ce nouveau modèle — restent hardcodées avec leur mécanique propre (tirageCloche + polarité pour les traits).
- Pas de bouton "Fouiller ses poches" sur la fiche PNJ (carte indépendante uniquement, pas d'intégration contextuelle).
