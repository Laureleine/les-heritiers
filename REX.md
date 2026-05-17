# Retour d'EXpérience — Session du 17 Mai 2026

## Règles gravées dans le marbre

### RLS & Supabase

1. **`.select('id')` après chaque `.update()`** — Si le RLS bloque une écriture, Supabase ne jette pas d'erreur, il retourne simplement `{ data: null, error: null }`. Le seul moyen de détecter un échec silencieux est d'enchaîner `.select('id')` et de vérifier que le retour n'est pas vide. Cette règle s'applique à **toute** mutation Supabase où l'on veut s'assurer de la persistence.

2. **Politiques RLS avec `get_user_role()`** — Pour des règles conditionnelles par rôle, une fonction SQL `get_user_role()` qui interroge la table `profiles` est plus fiable que de se baser sur les métadonnées JWT (qui peuvent être statiques et non à jour).

### Tests

3. **Tester le comportement attendu du code, pas le comportement des libs** — Dans les tests de `TabRepairJournaux`, mocker Supabase pour vérifier l'enchaînement `update().eq().select("id")` plutôt que de faire un vrai appel. Vérifier que `rows.length === 0` jette bien une erreur.

4. **Nommer les tests en français métier** — Les `it()` doivent se lire comme des specs fonctionnelles : `it('lance une erreur si RLS bloque (0 lignes))`.

### Déploiement

5. **CI = true sur Vercel** — Le build Vercel tourne avec `process.env.CI = true`, ce qui transforme les warnings ESLint en erreurs. Toujours vérifier avec `npx react-scripts build` en local avec `CI=true` avant de pousser, ou mieux : avoir un hook pre-commit qui le fait.

6. **Trois lint errors préexistantes** — `CerclesDashboard.js` (Gift unused), `CharacterList.js` (userProfile dans les deps), `SystemeServices.js` (data unused). Elles sont corrigées dans cette session. Les surveiller : un `git diff` entre la prod et la branche avant build.

### Workflow

7. **REX.md** — Première rédaction de ce fichier. À tenir à jour à chaque version. Sert de mémoire durable pour les leçons opérationnelles.

### DRY Plan

8. **DRY_PLAN.md** — Créé dans cette session. Centralise le suivi des chantiers de refactoring. À consulter en début de chaque session avant de toucher au code.

## Session du 17 Mai 2026 (2e partie)

### Règles ajoutées

9. **Pattern `fairyData[typeFee]` toujours protégé** — 4 composants accédaient à `fairyData[character.typeFee]` sans vérifier que `fairyData` n'est pas null. Résultat : "null is not an object" si le chargement du Nuage féérique tarde ou échoue. Le pattern sûr est `fairyData && character.typeFee ? fairyData[character.typeFee] : null` (ternaire) ou `fairyData?.[character.typeFee]` (optional chaining). On trouve déjà ce pattern dans `StepAtouts.js` et `StepPouvoirs.js`.

10. **`gameData?.fairyData` plutôt que `gameData.fairyData`** — Même si `gameData` est initialisé comme objet dans le Context, des `setGameData(null)` peuvent survenir (ex: erreur de `loadCoreGameData`). Toujours préférer l'optional chaining pour traverser `gameData`.

11. **Chercher les patterns fragiles AVANT qu'un bug ne soit remonté** — `grep -r "fairyData\[" src/` aurait trouvé les 4 crash points en 2 secondes. Ajouter une vérification systématique des accès non protégés aux objets potentiellement null (gameData, fairyData, character.typeFee) dans la checklist de revue.

### Process à améliorer

- **Avant déploiement** : build local avec `CI=true` pour catcher les erreurs lint Vercel.
- **Après migration SQL** : toujours ajouter le fichier SQL dans le commit + le backup, et le documenter dans le CHANGELOG.
- **Revue de code défensive** : avant chaque version, lancer `grep -rn "\[character\." src/ --include="*.js"` pour repérer les accès non protégés aux propriétés du personnage.
- **FairyData null check** : faire une passe `grep -rn "fairyData\[" src/` dans la checklist de pre-commit.

## Session du 17 Mai 2026 (3e partie — Grimoire Personnel)

### Règle ajoutée

12. **`onClick={handler}` vs `onClick={() => handler()}`** — Quand un handler attend un argument optionnel, ne jamais le passer directement à `onClick`. React injecte l'objet événement `SyntheticEvent` comme premier argument, qui est truthy. Le handler croit recevoir une donnée valide au lieu de `null`. Toujours wrapper avec `() => handler()` quand le handler a un paramètre optionnel.

### Process à améliorer

- **Review des handlers onClick** : chercher les `onClick={fonction}` où la fonction a un paramètre optionnel — c'est un piège React classique et silencieux.
