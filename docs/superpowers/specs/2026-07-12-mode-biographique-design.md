# Mode Biographique — Générateur de PNJ

**Date :** 2026-07-12  
**Périmètre :** Troisième mode du générateur de PNJ (`'biographique'`), ajoutant un historique biographique complet en 9 étapes à la génération de personnalité existante.

---

## Contexte

Le générateur actuel produit des PNJ « instantanés » (état présent : identité, traits, secret, métier) en modes `'reel'` et `'merveilleux'`. Le mode Biographique ajoute une couche narrative : origines démographiques, culture, statut social, circonstances de naissance, parents, enfance, adolescence — puis enchaîne sur la génération de personnalité classique du mode réel.

---

## Architecture

### Fichiers créés

#### `src/data/pnjTablesBio.js`

Tables de données pour le pipeline biographique. Aucune référence externe dans les noms.

**Tables démographiques :**
- `DEMOGRAPHIE_PARIS_1899` — pool pondéré (Française 80%, Italienne 5%, Britannique 4%, Russe 3%, Austro-Hongroise 3%, Allemande 2%, Américaine 2%, Autre 1%). Chaque entrée porte un `TekMod` et une `langue`.
- `NATIONALITES_EXOTIQUES_1899` — pool simple (~15 nationalités) utilisé quand le tirage tombe dans "Autre" : Algérienne, Belge, Suisse, Espagnole, Japonaise, Ottomane, Scandinave, etc. Remplace le routage par sous-tables régionales.

**Tables de formation :**
- `TABLE_NIVEAU_TECH_BONUS` — seuils d100+année → bonus TekMod (0 à 7).
- `NIVEAUX_TECH` — correspondance TekMod final → `{ label, pointsDeBase, literacy }` (stone → engineering).
- `TABLE_TYPES_CULTURE` — seuils d100+TekMod → `{ id, label, cuMod, survie, edPointsRoll }`.

**Tables sociales :**
- `TABLE_STATUT_SOCIAL` — seuils d100+CuMod → `{ id, label, solMod, edModifier, moneyMod }`. Inclut la cascade "extrêmement riche" et la cascade noblesse.
- `TITRES_NOBLESSE` — 6 titres (`{ labelM, labelF, TiMod }`) : Duc/Duchesse, Marquis/Marquise, Comte/Comtesse, Vicomte/Vicomtesse, Baron/Baronne, Chevalier/Dame.

**Tables de naissance :**
- `TABLE_CONFIGURATION_FOYER` — seuils d20 → structure du foyer (parents, parent unique, orphelinat, rue, etc.).
- `LIEUX_NAISSANCE_INHABITUELS` — 14 lieux exotiques avec `biMod`.
- `TABLE_EVENEMENTS_NAISSANCE` — seuils d100+biMod → textes d'événements, flags (`aCurse`, `gmSecret`), bonus numériques (`Luck`, `Constitution`).

**Tables parents :**
- `TABLE_CONFIG_PARENTS` — seuils d20 → configuration de l'emploi dans le foyer.
- `TRAITS_NOTABLES_PARENTS` — pool de 10 traits notables (un tuteur peut en tirer 1d3).

**Tables jeunesse :**
- `TABLE_CHRONOLOGIE_JEUNESSE` — seuils d20+SolMod → événements d'enfance/adolescence avec bracket de personnalité `[L]`/`[D]`/`[N]`/`[R]`.
- `TABLE_EVENEMENTS_SPECIAL_JEUNESSE` — `{ enfance: [...], adolescence: [...] }` pour les cascades de la table spéciale.

---

#### `src/utils/pnjGeneratorBio.js`

Fonction principale : `genererHistorique()` → `{ sexeId, nationaliteId, historique }`.

Pipeline interne (fonctions privées préfixées `_`) :

| Fonction | Entrée | Sortie |
|---|---|---|
| `_resolveOrigines(state)` | état initial | nationalite, sexe, langues, maitriseFrancais |
| `_resolveCulture(state)` | TekMod | techLevel, culture, CuMod, education.points, survie |
| `_resolveStatutSocial(state)` | CuMod | statutSocial, titreNoble, SolMod, alphabétisation |
| `_resolveFamille(state)` | SolMod | legitime, structureFoyer, fratrie, rangNaissance |
| `_resolveNaissance(state)` | flags | lieuPrecis, biModTotal |
| `_resolveEvenementsNaissance(state)` | biModTotal | evenements[], flags.aCurse, flags.gmSecret |
| `_resolveParents(state)` | — | configurationMetier, faitsNotables[] |
| `_resolveJeunesse(state)` | SolMod | enfance[], adolescence[], bracketsPersonality[] |

Structure retournée dans `historique` :
```js
{
  origines: { nationalite, langue, maitriseFrancais, raisonPresence, estImmigre },
  formation: { techLevel, culture, estAlphabete, educationPoints, survie },
  milieu:    { statutSocial, titreNoble, legitime, structureFoyer,
               nombreFreresSoeurs, rangNaissance },
  naissance: { lieuPrecis, evenements },
  parents:   { configurationMetier, faitsNotables },
  jeunesse:  { enfance, adolescence },
  flags:     { aCurse, gmSecret },
}
```

---

### Fichiers modifiés

#### `src/utils/pnjGenerator.js`

Dans `genererPnj(options, dbEntries)` :
- Branche `mode === 'biographique'` : appelle `genererHistorique()`, écrase `options.sexe` et `options.nationalite` avec les valeurs dérivées, exécute ensuite le pipeline de personnalité classique (TABLES_REEL), attache `historique` au résultat.
- `rerollChamp()` : quand `mode === 'biographique'`, le reroll de `sexe` ou `nationalite` relance aussi `genererHistorique()` entièrement (ces deux champs sont couplés au pipeline biographique).
- `pnjVersPayloadFigure()` : inclut `historique` dans `data.historique`, et insère le résumé biographique en tête de `description`.

#### `src/components/PnjGenerateur.jsx`

- Troisième bouton de mode **"Biographique"** dans le sélecteur existant (à côté de "Réel" et "Merveilleux").
- Quand `mode === 'biographique'` et `pnj.historique` est présent : affiche `<SectionHistorique>` au-dessus des champs habituels.
- `<SectionHistorique>` : accordéon à 5 sections repliables (toutes fermées par défaut) — **Origines**, **Formation & milieu**, **Naissance**, **Parents**, **Jeunesse**.
- Les champs habituels (traits, apparence, secret, etc.) restent identiques au mode réel en dessous.
- Le reroll de `sexe` ou `nationalite` en mode biographique régénère l'historique entier (avec un avertissement visuel si nécessaire).

---

## Règles de cohérence

- En mode biographique, `nationalite` et `sexe` sont **toujours dérivés** du pipeline biographique, jamais tirés indépendamment.
- La maîtrise du français dépend du statut social : aisé/noble → français parfait ; classes laborieuses immigrées → baragouine ou aucun.
- L'alphabétisation dépend du tech level + modificateur de statut social, plafonnée à 5–95%.
- Le genre (`pnj.genre`) reste tiré indépendamment des origines biologiques, comme en mode réel.

## Bugs corrigés (code source)

- `pnj.刻印_BiMod` → `state.naissance.biModTotal`
- `type_vehicule` → `typeVehicule`
- Double définition de `DEMOGRAPHIE_PARIS_1899` → une seule occurrence dans `pnjTablesBio.js`
- Double définition `resoudreEtape3_StatutSocial` / `resoudreEtape3_SocialStatus` → fonctions `_resolveStatutSocial` et `_resolveFamille` séparées
- `SOUS_TABLES_CC` absent → remplacé par `NATIONALITES_EXOTIQUES_1899`
- Branche morte `tables.resolveText(metierEntre, ...)` → supprimée

---

## Périmètre exclu

- Aucune nouvelle table Supabase (historique stocké dans le champ `data` JSON existant de la table `figures`).
- Aucun admin panel pour les tables biographiques (les contenus sont hardcodés, pas en DB).
- Pas de modification du mode Merveilleux.
