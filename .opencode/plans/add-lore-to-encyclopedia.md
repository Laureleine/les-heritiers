# Plan : Ajouter les champs Initiés dans l'Encyclopédie

## Contexte

Les initiés voient une **Fiche du Docte** (`FairyLoreSection`) quand ils créent une fée dans `Step1` → `FairyDetailsPanel`. Cette fiche contient des données narrativo-ludiques chargées depuis **`src/data/FairyLore.js`** (fichier hardcodé).

Ces données ne sont **pas dans l'encyclopédie** — ni visibles, ni modifiables. Les initiés ne peuvent donc pas les consulter ou les modifier via l'Encyclopédie (`Encyclopedia.js` + `FairyTypeForm.js`).

## Objectif

Rendre ces champs visibles ET modifiables dans l'encyclopédie, **uniquement pour les initiés**. Les non-initiés ne voient aucun changement.

## Questions en suspens (à trancher à la prochaine session)

### 1. Périmètre des champs

Quels champs exactement ajouter à l'encyclopédie ?

**Option A — Tout le narratif (recommandé)**
Apparence, Taille, Reproduction, Habitat, Caractère, Personnages célèbres, Note du Docte.

**Option B — Note du Docte + Caractère seulement**
Seulement les plus importants pour le jeu.

### 2. Migration des données existantes

Faut-il migrer les données de `FairyLore.js` vers Supabase ?

**Option A — Oui, migration + backfill (recommandé)**
Créer les colonnes DB + script de backfill pour copier les 15+ entrées de FairyLore.js. Les futures modifications passent par l'encyclopédie.

**Option B — Non, on part de zéro**
Les champs sont ajoutés vides, les initiés remplissent au fur et à mesure.

### 3. Source de vérité pour la Création

La Fiche du Docte dans la création doit-elle utiliser la DB ou garder FairyLore.js ?

**Option A — Remplacer par la DB (cohérent)**
`FairyLoreSection` lit les données depuis la table `fairy_types` au lieu de `FairyLore.js`.

**Option B — Garder les deux indépendants**
`FairyLoreSection` continue d'utiliser `FairyLore.js`. L'encyclopédie a ses propres champs séparés.

## Travail estimé

1. **Migration SQL** : Ajouter les colonnes (`lore_apparence`, `lore_caractere`, `lore_habitat`, `lore_reproduction`, `lore_personnages_celebres`, `lore_note_docte`, etc.) à `fairy_types`
2. **Backfill script** (si option A) : Copier les données de `FairyLore.js` vers les nouvelles colonnes
3. **FairyTypeForm.js** : Ajouter les nouveaux champs dans un bloc "Fiche du Docte" gated par `isInitiated`
4. **encyclopediaEngine.js** : Ajouter les blocs de comparaison pour les nouveaux champs dans `submitEncyclopediaProposal`
5. **EncyclopediaViewModal.js** : Ajouter l'affichage des champs pour initiés
6. **FairyLoreSection.jsx** (si option A pour Q3) : Remplacer `getFairyLore()` par une requête Supabase
7. **Tests** : Ajouter des tests pour les nouveaux champs
8. **Versionning** : Incrémenter version.js, commit, déploiement

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `src/data/FairyLore.js` | Données hardcodées actuelles (15+ types de fées) |
| `src/components/FairyLoreSection.jsx` | Composant d'affichage initié en création |
| `src/components/FairyDetailsPanel.js` | Panneau qui affiche FairyLoreSection si isInitiated |
| `src/components/encyclopedie/FairyTypeForm.js` | Formulaire d'édition à enrichir |
| `src/components/encyclopedie/EncyclopediaViewModal.js` | Modale de consultation à enrichir |
| `src/utils/encyclopediaEngine.js` | Moteur de soumission (submitEncyclopediaProposal) à compléter |
| `src/utils/__tests__/encyclopediaEngine.test.js` | Tests existants (3 cas) |
