# Anomalie féérique, Sang-mêlé et Hybride — Design

Date : 2026-07-06

## Contexte

L'atout **Anomalie féérique** (permet de remplacer un pouvoir standard par un
pouvoir d'une autre espèce féérique) est déjà implémenté
(`AnomalieFeeriqueWidget.jsx`, Étape 3 — Pouvoirs). Le manuel de règles
(`src/pdf/manuel_texte.txt`, lignes 2458-2539) décrit deux paliers avancés
qui n'existent pas encore dans le code ni en base :

- **Sang-mêlé** : un second pouvoir de la même espèce étrangère que
  l'Anomalie féérique. Requiert d'avoir déjà « Anomalie féérique ». Coûte 8
  points d'Expérience.
- **Hybride** : un troisième pouvoir de la même espèce étrangère, plus
  l'échange définitif d'une Capacité naturelle de l'espèce d'origine contre
  une de la seconde espèce. Requiert d'avoir déjà « Sang-mêlé ». Coûte 8
  points d'Expérience. À la Féérie rang 8, le personnage Hybride n'a jamais
  accès au Pouvoir légendaire (ni de son espèce d'origine, ni de la seconde) ;
  son 8e pouvoir est un Pouvoir profond de la seconde espèce.

Note importante tirée de l'encart « Notes » du manuel (absente de la citation
initiale fournie par l'utilisatrice, retrouvée dans `manuel_texte.txt`) :
le pouvoir alternatif remplace normalement un pouvoir de même type (masqué ou
démasqué) et ne s'ajoute jamais aux pouvoirs normaux — confirme que Sang-mêlé
et Hybride consomment aussi un emplacement de pouvoir existant (déterminé par
la Féérie), sans en ajouter.

## Décisions validées avec l'utilisatrice

1. **Disponibilité** : Sang-mêlé et Hybride ne sont achetables qu'en mode
   évolution (personnage scellé, via XP) — jamais à la création, contrairement
   à l'Anomalie féérique de base.
2. **UI** : on étend le widget existant `AnomalieFeeriqueWidget.jsx` plutôt que
   de créer des composants séparés. Avant le choix du pouvoir (palier 1), on
   insère un sélecteur d'espèce féérique étrangère ; ce choix est ensuite
   verrouillé pour les paliers suivants.
3. **Codes XP** : deux nouveaux codes distincts (`ANOMALIE_SANG_MELE`,
   `ANOMALIE_HYBRIDE`) plutôt que la réutilisation de `ANOMALIE_FEERIQUE`,
   pour la traçabilité dans l'historique XP.
4. **Échange de Capacité (Hybride)** : le choix se fait dans `StepCapacites.js`
   (et non dans le widget lui-même), débloqué uniquement quand Hybride est
   actif ; le widget affiche un message informant que cela a débloqué
   l'échange définitif d'une Capacité naturelle.
5. **Portée Féérie 8** : la règle du 8e pouvoir (Pouvoir profond de la seconde
   espèce à la place du Pouvoir légendaire) est incluse dans ce chantier.
6. **Modélisation** : Sang-mêlé et Hybride deviennent de vrais atouts en base
   (`fairy_assets` + `fairy_type_assets`), comme Anomalie féérique — pas
   d'atouts virtuels gérés uniquement côté client. L'espèce seconde verrouillée
   et l'échange de Capacité sont stockés dans la colonne `data` (jsonb) déjà
   existante sur `characters`, sans nouvelle colonne ni migration de schéma.
7. **Réversibilité** : purger Hybride annule l'échange de Capacité et
   rembourse les 8 XP (cohérent avec la réversibilité de tous les autres
   atouts de l'application), malgré le mot « définitivement » du manuel.
8. **Personnages existants** : aucun script de backfill séparé. L'espèce
   seconde est dérivée à la volée pour les personnages ayant déjà l'Anomalie
   féérique active, et persistée silencieusement au premier rendu du widget
   (voir « Compatibilité descendante » ci-dessous).

## Architecture

### Modèle de données

- `character.atouts` (jsonb, existant) : gagne les entrées `'Sang-mêlé'` et
  `'Hybride'` quand acquis (même mécanique que `'Anomalie féérique'`
  aujourd'hui).
- `character.pouvoirs` (jsonb, existant) : gagne jusqu'à 2 pouvoirs
  supplémentaires de l'espèce seconde (aucun nouveau champ — même tableau que
  pour l'Anomalie féérique de base, chaque pouvoir remplaçant un emplacement
  normal déterminé par la Féérie).
- `character.data.anomalie_espece_seconde` (nouveau, dans le jsonb `data`
  existant) : nom de l'espèce étrangère verrouillée dès le premier pouvoir
  choisi (palier 1).
- `character.data.hybride_capacite` (nouveau, dans le jsonb `data` existant) :
  `{ slot: 'fixe1' | 'fixe2' | 'choix', capacite: '<nom capacité 2e espèce>' }`.

Aucune migration sur la table `characters` : tout passe par la colonne `data`
déjà existante, sur le modèle de `stats_scellees` / `historique_xp`.

### Base de données de référence (fairy_assets)

Nouveau script ponctuel `scripts/seed_sang_mele_hybride.mjs` (calqué sur
`scripts/backfill_fairy_lore.mjs`, connexion `pg` + `SUPABASE_DB_URL`,
jamais via les outils MCP Supabase sur le projet de prod — règle absolue du
projet) :

- Insère 2 lignes dans `fairy_assets` : `Sang-mêlé`, `Hybride` (avec
  description reprise du manuel), `is_official = true`.
- Insère les liens `fairy_type_assets` vers les mêmes ~31 espèces déjà liées à
  `Anomalie féérique` (celles pour qui l'Anomalie féérique a du sens ; les
  espèces exclues aujourd'hui — ex. `enfoui` — le restent).

### Widget `AnomalieFeeriqueWidget.jsx`

Devient un widget à 3 paliers séquentiels :

- **Palier 1 (Anomalie féérique)** — comportement actuel, avec ajout du
  sélecteur d'espèce étrangère *avant* la liste de pouvoirs (au lieu d'un
  choix direct dans la liste combinée de toutes les espèces). Une fois un
  pouvoir choisi, `anomalie_espece_seconde` est écrit.
- **Palier 2 (Sang-mêlé)** — visible seulement si palier 1 actif. Bouton
  « Débloquer Sang-mêlé (8 XP) » → une fois acheté, sélection d'un second
  pouvoir dans la liste des pouvoirs de `anomalie_espece_seconde` (masqué ou
  démasqué), en excluant celui déjà pris. Code XP `ANOMALIE_SANG_MELE`.
- **Palier 3 (Hybride)** — visible seulement si palier 2 actif. Même
  mécanique pour un 3e pouvoir. Code XP `ANOMALIE_HYBRIDE`. Affiche un message
  indiquant que l'échange de Capacité naturelle est débloqué dans l'étape
  Capacités.

Gating des purges : impossible de purger un palier tant qu'un palier
supérieur est actif (ex. purger Sang-mêlé exige d'avoir d'abord purgé
Hybride) — notification d'erreur explicite sinon.

### Compatibilité descendante

Pour un personnage existant ayant déjà l'Anomalie féérique active mais sans
`data.anomalie_espece_seconde` :

```
especeSeconde = character.data?.anomalie_espece_seconde
  ?? exteriorPowers.find(p => p.nom === selectedExterior)?.origine
```

Dès que le widget est rendu pour un tel personnage (typiquement à l'ouverture
de l'Étape 3 en mode évolution), la valeur dérivée est persistée dans
`data.anomalie_espece_seconde` via un `dispatchCharacter` silencieux, pour que
les lectures suivantes soient directes. Aucun script de migration de données
n'est nécessaire.

### `StepAtouts.js`

Généralise le cas spécial (actuellement `atout.nom === 'Anomalie féérique'`)
en une liste `['Anomalie féérique', 'Sang-mêlé', 'Hybride']` : ces trois
atouts s'affichent dans la grille (lecture seule) mais redirigent vers
l'Étape 3 au clic, comme c'est déjà le cas pour l'Anomalie féérique.

### `StepCapacites.js`

Nouvelle section, visible uniquement si `character.atouts.includes('Hybride')` :

- Choix du slot à remplacer parmi les 3 Capacités naturelles actuelles
  (`fixe1`, `fixe2`, ou la `choix` sélectionnée).
- Choix de la Capacité de remplacement parmi les 3 Capacités naturelles de
  `anomalie_espece_seconde` (`fixe1`/`fixe2`/`choix` de cette espèce).
- Stocké dans `character.data.hybride_capacite = { slot, capacite }`.
- Le slot remplacé affiche la Capacité de substitution avec un badge
  « Hybride — origine : `<espèce>` » à la place de l'originale.
- Si Hybride est purgé (depuis le widget), `hybride_capacite` est effacé et le
  slot réaffiche la Capacité d'origine (voir « Réversibilité »).

### `StepPouvoirs.js` — règle Féérie 8

Dans `getAvailablePowers()`, si `character.atouts.includes('Hybride')` :

- Exclure tous les pouvoirs dont `type_pouvoir` contient `legendaire` (espèce
  d'origine) — un Hybride n'y a jamais accès.
- Quand `currentFeerie >= 8`, inclure les pouvoirs `profond_masque` /
  `profond_demasque` de `fairyData[anomalie_espece_seconde]` en plus de ceux
  de l'espèce d'origine déjà disponibles depuis la Féérie 7.

Le plafond `maxPouvoirs` (= Féérie courante) et le fonctionnement un-choix-par-
emplacement restent inchangés : seule la liste des pouvoirs proposés change.

### `xpActions.js`

Ajout de deux entrées à `XP_CODES` : `ANOMALIE_SANG_MELE`, `ANOMALIE_HYBRIDE`.
Aucun nouveau coût dans `xpCalculator.js` : réutilisation de
`FIXED_XP_COSTS.nouvel_atout` (8 XP), déjà utilisé pour l'Anomalie féérique.

## Gestion des erreurs / cas limites

- Boutons Sang-mêlé/Hybride masqués ou désactivés tant que le palier
  précédent n'est pas actif.
- Garde-fou XP habituel (`xpDispo < FIXED_XP_COSTS.nouvel_atout`).
- Uniquement disponible en mode évolution (`isCharacterScelle`) ; si un
  personnage n'est pas scellé, les paliers 2 et 3 restent masqués (l'Anomalie
  féérique de base reste, elle, disponible à la création comme aujourd'hui).
- Purge d'un palier intermédiaire bloquée si un palier supérieur est actif
  (message d'erreur invitant à purger dans l'ordre inverse).
- Purge de Hybride : rembourse l'XP et annule aussi l'échange de Capacité
  naturelle (réversible, voir décision validée ci-dessus).

## Tests

Le projet ne teste pas les composants React de ce type (les tests Vitest
existants couvrent `utils`/`hooks`, ex. `xpActions.test.js`,
`sealValidation.test.js`). On extrait donc la logique pure et testable dans
un nouveau module `src/utils/anomalieChaining.js` :

- `deriveEspeceSeconde(character, exteriorPowers)` — dérivation/fallback de
  l'espèce verrouillée.
- `canPurchaseSangMele(character)` / `canPurchaseHybride(character)` —
  vérification des prérequis de palier.
- `canPurgeAnomalie(character)` / `canPurgeSangMele(character)` — vérification
  qu'aucun palier supérieur n'est actif avant d'autoriser une purge.
- `getHybrideAvailablePowerTypes(currentFeerie)` — logique d'exclusion
  légendaire / inclusion profond seconde espèce à la Féérie 8, utilisée par
  `StepPouvoirs.js`.

Tests Vitest correspondants dans `src/utils/__tests__/anomalieChaining.test.js`
couvrant : dérivation avec/sans champ persisté, prérequis manquants/présents,
blocage de purge en cascade, filtrage des pouvoirs disponibles à Féérie 7 et 8
pour un Hybride.

## Hors périmètre

- Contenu narratif/exemples supplémentaires dans l'encyclopédie (au-delà des
  descriptions minimales des 2 nouveaux atouts) — pourra être enrichi
  séparément via l'onglet admin d'édition de l'encyclopédie déjà existant.
- Toute automatisation de la validation « vraisemblance » (le manuel laisse
  ça au jugement du Docte/MJ) — l'application reste permissive, comme elle
  l'est déjà pour le contenu communautaire (`is_official = false`).
