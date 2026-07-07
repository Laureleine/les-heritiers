# Schéma du personnage — Les Héritiers

> Document vivant. Mettre à jour dès qu'un nouveau champ est ajouté au personnage.  
> Référence rapide pour éviter de re-fouiller le code à chaque session.

---

## 1. Architecture générale

Le personnage vit à trois endroits simultanément :

```
Supabase (colonnes top-level)
  └─ data {}  ← JSONB flexible (tout ce qui ne mérite pas sa propre colonne)
       └─ stats_scellees {}  ← Snapshot immuable à la création (Plancher de Verre)

Client (état React, après mapDatabaseToCharacter + characterReducer)
  └─ computedStats {}  ← Calculé en live par le reducer, jamais sauvegardé directement
```

**Règle d'or :** `const source = { ...char.data, ...char }` — les colonnes Supabase top-level écrasent le JSONB. Ne jamais stocker dans `data` un champ qui a sa propre colonne.

---

## 2. Colonnes Supabase top-level

Fetchées par `LIGHT_SELECT` (liste des archives) ET par `SELECT *` (fiche complète).

| Colonne DB (snake_case) | Clé client (camelCase) | Type | Notes |
|---|---|---|---|
| `id` | `id` | uuid | |
| `user_id` | `userId` | uuid | |
| `nom` | `nom` | string | |
| `sexe` | `sexe` | string | `'Homme'` / `'Femme'` |
| `type_fee` | `typeFee` | string | Clé dans `gameData.fairyData` |
| `anciennete` | `anciennete` | string | `'traditionnelle'` / `'moderne'` |
| `statut` | `statut` | string | `'brouillon'` / `'scelle'` / `'scellé'` |
| `is_public` | `isPublic` | boolean | |
| `xp_total` | `xp_total` | number | XP gagnés au total |
| `xp_depense` | `xp_depense` | number | **Cache** — recalculé depuis `historique_xp` à chaque save |
| `profils` | `profils` | object | `{ majeur: {nom, trait, competences[]}, mineur: {...} }` |
| `caracteristiques` | `caracteristiques` | object | Voir §4 |
| `competences_libres` | `competencesLibres` | object | Voir §5 |
| `competences_futiles` | `competencesFutiles` | object | Voir §6 |
| `pouvoirs` | `pouvoirs` | array | Liste d'IDs ou noms |
| `atouts` | `atouts` | array | Liste d'IDs ou noms |
| `vie_sociale` | `vieSociale` | object | Voir §vieSociale |
| `fortune` | `fortune` | number | Rang de richesse 1–15 |
| `capacite_choisie` | `capaciteChoisie` | string | |
| `nom_feerique` | `nomFeerique` | string | |
| `genre_humain` | `genreHumain` | string | |
| `traits_feeriques` | `traitsFeeriques` | array | |
| `apparence` | `apparence` | string | |
| `taille` | `taille` | string | |
| `poids` | `poids` | string | |
| `portrait_masked_url` | `portrait_masked_url` | string | |
| `portrait_unmasked_url` | `portrait_unmasked_url` | string | |
| `is_unmasked_revealed` | `is_unmasked_revealed` | boolean | |
| `is_insolite` | `is_insolite` | boolean | |
| `species_ids` | `species_ids` | array | |
| `transfer_code` | `transfer_code` | string | Code cadeau DON-XXXX |
| `created_at` / `updated_at` | idem | ISO string | |

---

## 3. Le JSONB `data {}`

Tout ce qui n'a pas de colonne dédiée. Accès : `character.data.xxx`.

```js
data: {
  // Journal des flux d'XP — SOURCE UNIQUE DE VÉRITÉ pour xp_depense
  historique_xp: [
    {
      type:           'GAIN' | 'DEPENSE' | 'REMBOURSEMENT',
      code:           string,   // XP_CODES (ex: 'CARAC_AUGMENTATION', 'COMP_UTILE_RANG'...)
      label:          string,   // Description lisible
      valeur:         number,   // Toujours positif
      rang_final:     number | null,
      date_mouvement: ISO string
    }
  ],

  // Snapshot immuable au moment du scellage — voir §7
  stats_scellees: { ... },

  // Cache des stats calculées (sauvegardé pour lisibilité, recalculé par le reducer)
  computed_stats: { ... },

  // Choix d'équipement liés à la vie sociale
  choixEquipement: {
    '[itemId]_[idx]': string  // valeur choisie pour la prédilection idx de l'item itemId
  },

  // Initiation druidique (Eubage)
  // Posé par StepDruidisme ; exploité par characterEngine + bonusCalculator
  eubage: {
    actif:             boolean,  // true si l'item "Eubage (Druide novice)" a été acheté ET la comp source choisie
    source_competence: string,   // Nom de la compétence du profil majeur qui cède ses 2 rangs automatiques
    rangs_transferes:  number,   // Toujours 2 (la règle n'autorise pas d'autre valeur)
  },

  // Champs hérités (avant colonnes dédiées) — maintenus pour compatibilité
  avantages:              array,
  desavantages:           array,
  portrait_masked_url:    string,
  portrait_unmasked_url:  string,
  is_unmasked_revealed:   boolean,
  is_insolite:            boolean,
  species_ids:            array,
  transfer_code:          string,
}
```

---

## 4. `caracteristiques {}`

```js
caracteristiques: {
  agilite:      number,   // min selon fée
  constitution: number,
  force:        number,
  precision:    number,
  esprit:       number,
  perception:   number,
  prestance:    number,
  sangFroid:    number,
  feerie:       number,   // min 3
  masque:       number,   // min 4
  tricherie:    number,   // calculé : max(min_fee, floor((feerie+masque)/2))
}
```

---

## 5. `competencesLibres {}`

```js
competencesLibres: {
  rangs:               { [nomComp: string]: number },   // Rangs investis par le joueur

  // Prédilections (+2 à la compétence)
  choixPredilection:   { [index: number]: string },     // Comp choisie quand la préd est "isChoix"
                                                        // (les prédilections fixes viennent de feeData)

  // Spécialités — 5 origines possibles, jamais mélangées dans le même champ
  choixSpecialite:     { [index: number]: string },     // Spécialité innée de l'espèce fée, choisie
                                                        // Format possible : "NomComp:NomSpec"
  choixSpecialiteUser: { [nomComp: string]: string[] }, // Achetées à la création OU avec XP
                                                        // ⚠️ pas de distinction créa/XP dans ce champ —
                                                        //    c'est stats_scellees qui fait la différence
  specialiteMetier:    { nom: string, comp: string } | null, // Offerte par le Métier (vie sociale)
  // Spécialités d'atout/pouvoir → dans computedStats.specialites.gratuites (jamais stockées ici)
  // Spécialités d'item de vie sociale → dans computedStats.specialites.gratuites (idem)
}
```

**Récapitulatif des origines de spécialités** (tous types confondus) :

| Origine | Stockage | Plancher ? |
|---|---|---|
| Espèce fée (innée fixe) | `feeData.competencesPredilection[i].specialite` | Oui (immuable) |
| Espèce fée (à choix) | `choixSpecialite[i]` | Oui (immuable) |
| Achetée à la création | `choixSpecialiteUser[comp][]` | Oui (dans `stats_scellees`) |
| Achetée avec XP | `choixSpecialiteUser[comp][]` | Non (post-scellage) |
| Métier (vie sociale) | `specialiteMetier` | Selon métier |
| Atout ou Pouvoir | `computedStats.specialites.gratuites` | Non (calculé) |
| Item de vie sociale | `computedStats.specialites.gratuites` | Non (calculé) |

---

## 6. `competencesFutiles {}`

Comportement identique aux compétences **utiles (libres)** avec deux différences :
- Coûts XP différents (croissants par rang)
- **Pas de spécialités** (jamais)

```js
competencesFutiles: {
  rangs:             { [nomComp: string]: number },  // Rangs investis
  choixPredilection: { [index: number]: string },    // Prédilection choisie si isChoix (donne +2)
  personnalisees:    [],                             // Futiles custom ajoutées par le joueur
  precisions:        { [nomComp: string]: string },  // Note textuelle optionnelle
}
```

---

## 7. `vieSociale {}`

Les achats sont organisés par **profil** (les PP de chaque profil financent les achats).  
Clé spéciale `allocationsContacts` : répartition manuelle des contacts gratuits (offerts par Prestance/Entregent).

```js
vieSociale: {
  // Pour chaque profil actif du personnage :
  [profilNom: string]: string[],  // IDs des items achetés avec les PP de ce profil
                                   // ex: { 'Aventurier': ['uuid-metier', 'uuid-langue'], 'Roublard': [] }

  // Contacts gratuits répartis manuellement (issus de Prestance > 3 et/ou Entregent > 3)
  allocationsContacts: {
    [profilNom: string]: number   // Nombre de contacts gratuits alloués à ce profil
  }
}
```

**Catégories des items** (champ `categorie` dans `gameData.socialItems`) :

| Catégorie | Description |
|---|---|
| `'metier'` | Métier principal ou occupation (un seul non-secondaire à la fois) |
| `'objet'` | Possessions & équipement |
| `'contact'` | Personnes de confiance (peut être partiellement financé par contacts gratuits) |
| `'langue'` | Langues maîtrisées |
| `'titre'` | Titres, affiliations, statuts sociaux |

---

## 8. `stats_scellees {}` — Le Plancher de Verre

Snapshot écrit **une seule fois** par l'action `SEAL_CHARACTER`. Jamais modifié après.  
Sert de plancher minimal pour toutes les mécaniques post-scellage.

```js
stats_scellees: {
  // Caractéristiques à la création
  // → StepCaracteristiques (plancher), historyReconstructor, characterEngine (hydration)
  caracteristiques: { ...caracteristiques },

  // Atouts originels
  // → StepAtouts (Plancher de Verre visuel), calcul PP de base
  atouts: [ ...atouts ],

  // Compétences utiles à la création
  // → useCompetencesLibres (plancher rangs + spécialités), historyReconstructor
  competencesLibres: {
    rangs:               { ...competencesLibres.rangs },
    choixSpecialiteUser: { ...competencesLibres.choixSpecialiteUser },
    choixPredilection:   { ...competencesLibres.choixPredilection },
    specialiteMetier:    competencesLibres.specialiteMetier,
  },

  // Compétences futiles à la création
  // → FicheParchemin (getFutileBreakdown), historyReconstructor
  competencesFutiles: {
    rangs: { ...competencesFutiles.rangs },
  },

  // Fortune à la création
  // → FortuneController (plancher dégradation), historyReconstructor
  fortune: number,

  // Pouvoirs originels (plancher)
  // Règle : 1 pouvoir par rang de Féérie (Féérie 5 → 5 pouvoirs max).
  // La Féérie peut augmenter avec XP → nouveaux slots débloqués post-scellage.
  // stats_scellees.pouvoirs = pouvoirs à la création = plancher, ne peut pas descendre en-dessous.
  // ⚠️ historyReconstructor ne reconstruit pas encore les achats de pouvoirs — gap connu.
  pouvoirs: [ ...pouvoirs ],
}
```

> ⚠️ **Attention rétrocompatibilité :** Les personnages scellés avant la v15.16.29 peuvent avoir des champs manquants (notamment `competencesFutiles` et `fortune`). Les composants doivent toujours avoir un fallback `|| 0` / `|| []` / `|| {}`.

---

## 9. `computedStats {}` — Calculé, jamais source de vérité

Produit par `calculateCharacterStats()` (bonusCalculator) et injecté dans l'état par le reducer après chaque action. Sauvegardé dans `data.computed_stats` comme cache optionnel.

```js
computedStats: {
  // Totaux des compétences futiles (rang + pred + bonus magique)
  futilesTotal:        { [nomComp: string]: number },
  futilesPredFinales:  string[],   // Noms des futiles en prédilection

  // Bonus magiques issus d'atouts/pouvoirs
  competences: {
    bonus: {
      [nomComp: string]: [{ value: number, source: string }]
    }
  },

  // Spécialités gratuites offertes par atouts/pouvoirs
  specialites: {
    gratuites: { [nomComp: string]: [{ specialite: string, source: string }] }
  },

  // Stats de combat (calculées par rulesEngine)
  combat: { ... },

  // Profils PP (rang, budget)
  rangsProfils:  { [profilNom: string]: number },
  budgetsPP:     { [profilNom: string]: { depenseBase: number, depenseXP: number, total: number } },

  // Traits accordés grammaticalement
  traits_lisses: {
    feeriques: string[],
    majeur:    string,
    mineur:    string,
  },
}
```

---

## 10. Flow de chargement

```
Supabase SELECT *
  → mapDatabaseToCharacter()       [supabaseStorage.js]
      const source = { ...char.data, ...char }
      → Normalise camelCase, garantit les defaults
  → dispatchCharacter({ type: 'LOAD_CHARACTER', payload, gameData })
      → characterReducer             [characterEngine.js]
          → Reconstruit historique_xp si absent (vieux perso)
          → Hydrate depuis fairyData (anciennete, avantages, baseCaracs...)
          → calculateCharacterStats() → computedStats
  → character (état React, complet et hydraté)
```

---

## 11. Pièges connus

| Piège | Symptôme | Cause | Fix |
|---|---|---|---|
| Light vs Full character | Récap/PDF vide pour les autres joueurs | `getPublicCharacters()` utilise `LIGHT_SELECT` (13 colonnes) | Toujours passer par `handleSelectCharacter` → `getFullCharacter()` |
| `typeFee` absent dans `fairyData` | `computedStats` vide, recap blanc | Race condition gameData / clé incorrecte | Vérifier que `loadHeavyLoreData` est terminé avant de naviguer |
| `stats_scellees` incomplet | Breakdowns faux, planchers incorrects | Ancien code de scellage ne capturait pas tous les champs | `SEAL_CHARACTER` corrige pour les nouveaux ; SQL rétroactif pour les anciens |
| `xp_depense` stale | Solde XP erroné | Ancienne double-écriture dans le reducer | `getXpState()` recalcule depuis `historique_xp` — ne jamais lire `xp_depense` directement |
| Bonus Esprit ignoré en évolution | Rangs Érudit/Savant toujours payants même quand Esprit augmente | `handleRangChange` ne calculait pas `bonusEspritXP` en mode scellé | Corrigé : `bonusEspritXP = (esprit_actuel-3) - (esprit_scellé-3)`, `investPost` = delta rangs SKILLS_ESPRIT post-scellage |
| `historyReconstructor` + bonus Esprit | Reconstruction XP surévalue les dépenses Érudit/Savant | Le reconstructeur ne sait pas quels rangs étaient gratuits | Gap connu — à corriger quand on touche au reconstructeur |
| Retour vers `/` depuis Cercles | Mauvaise navigation retour | `navigate('/')` hardcodé | Passer `from: '/cercles'` dans `location.state` |
