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

## Session du 17 Mai 2026 (4e partie — La Vigie Renforcée)

### Règles ajoutées

13. **`makeBaseState()` factory pour éviter les mutations entre tests** — `characterReducer` fait `let newState = { ...state }` (shallow copy). `newState.data` partage la référence avec l'original. Si on passe une référence globale unique à chaque test, un test peut contaminer le suivant. La solution : une fonction factory `makeBaseState()` qui crée un état frais à chaque appel.

14. **Ne JAMAIS réimplémenter la fonction testée dans le test** — `handleAdjustXP.test.js` avait une copie locale de la réduction XP qui ne reflétait pas le vrai comportement du reducer. Les tests passaient mais ne testaient rien d'utile. Toujours importer et tester la vraie fonction.

15. **Préférer les sélecteurs textuels aux index de tableau pour querySelector** — `badges[1]` est cassé dès qu'un badge est ajouté/supprimé. `getByText('…').parentElement` (ou `.closest()`) est robuste. Attention : `.closest()` cherche dans les parents, pas les siblings — si l'élément est un sibling, utiliser `.parentElement.querySelector(...)` ou remonter d'abord au parent commun.

16. **Tests de hook : `jest.mock` avec module factory retourne des `undefined` si on utilise `jest.fn()` directement** — Dans les tests `useCerbere`, ne pas mocker `bonusCalculator` via `jest.mock` avec `jest.fn()` dans la factory. Utiliser le module réel (pur, sans effets de bord). Voir REX session précédente.

17. **Après chaque suite de tests timer : `afterEach(useRealTimers)`** — Si un test dans le fichier utilise `useFakeTimers`, les tests suivants peuvent hériter de faux timers. Ajouter systématiquement `afterEach` avec `jest.useRealTimers()` dans `characterEngine.test.js`.

### Patterns validés

- **`it.each` pour les tests paramétrés** — 7 tests `isSuperAdmin` redondants fondus en un seul bloc `it.each`. Plus lisible, plus facile à étendre.
- **Pas de backup si aucune migration DB** — Session purement tests + UI mineure. Backup pas nécessaire (règle AGENTS.md respectée).
- **243 tests / 18 suites / 0 failures** — La couverture continue de monter sans régression.

### Process à améliorer

- **Avant de modifier un test qui semble faux** : d'abord comprendre si c'est le test ou la spec qui a tort. Dans `useCerbere`, le test disait que `showConfirmSeal` devait être `false` en cas d'erreurs — mais le hook laisse toujours la modale s'ouvrir, les erreurs sont un feedback visuel. Le test a été corrigé pour refléter le comportement réel.
- **Après chaque session de tests** : lancer la suite complète, pas seulement les fichiers modifiés. Les mutations d'état entre tests (`characterReducer`) peuvent casser des tests ailleurs.
- **Ne pas oublier l'ordre UI** : `AdminDashboard.js` avait un titre qui se brisait en deux — un simple `whitespace-nowrap` a suffi. Les petits détails CSS comptent.
