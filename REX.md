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

## Session du 17 Mai 2026 (5e partie — Le Bureau des Correspondances)

### Règles ajoutées

18. **`open-telegraphe` CustomEvent pour ouvrir le Télégraphe hors du composant** — Le pattern `window.dispatchEvent(new CustomEvent('open-telegraphe', { detail: { targetUser: { id, username } } }))` fonctionne depuis n'importe quel bouton de l'application. Le Télégraphe écoute cet événement dans un `useEffect` avec `addEventListener`. Ce pattern évite d'importer le hook `useTelegraphe` partout.

19. **Toujours joindre `profiles(username)` quand on a besoin du nom du propriétaire** — `TabRepairJournaux` chargeait les personnages avec un simple `.select('*')`. Pour afficher le nom du propriétaire et ouvrir une conversation privée, il faut `.select('*, profiles(username)')` pour que le champ `profiles.username` soit disponible dans la réponse Supabase. Attention : RLS peut bloquer la jointure si l'utilisateur n'a pas les droits de lecture sur la table `profiles`.

20. **`getByText` échoue si le même texte apparaît plusieurs fois** — Le message d'erreur « Found multiple elements » apparaît quand un texte existe à la fois dans la stat box (label) et dans le badge du personnage. Solution : utiliser `container.querySelectorAll` + `Array.from().find()` plutôt que `getByText` quand on s'attend à des doublons.

### Patterns CSS

- **`grid-cols-6` pour 6 éléments sur une ligne** — Plus fiable que `flex flex-wrap` quand on veut exactement 6 colonnes. Combiner avec `gap-1.5`, `py-1.5 px-1`, `text-[9px] sm:text-[10px]` et `truncate` sur les labels pour que ça tienne.
- **Le changement de classe d'icône dans le mock `lucide-react`** — Quand on ajoute une icône (ex: `MessageCircle`), il faut l'ajouter AUX DEUX ENDROITS : l'import du composant ET le mock `lucide-react` dans le test. Sans ça, l'icône est `undefined` et le composant ne plante pas mais peut ne pas rendre le bouton attendu.

### Process à améliorer

- **Quand un test `getByText` rate avec "multiple elements"** : vérifier si le texte apparaît dans le badge ET dans la stat box. Utiliser `container.querySelector` avec un sélecteur plus précis ou `Array.from().find()`.
- **Backup automatique** : bien vérifié en début de session. Backup déjà fait dans la session précédente (15.19.7) donc backup clean pour 15.19.8.
- **Toujours lancer la suite complète après une modif de composant** : les changements de `TabRepairJournaux` impactent 7 tests, pas seulement les tests unitaires.

### Règle ajoutée

21. **`useEffect([], [])` dans un provider est un piège quand l'auth n'est pas prête** — `ForgeContext.jsx` chargeait les données au montage de l'application (`ForgeProvider` dans `index.js`), avant que Supabase ait restauré la session depuis le localStorage. RLS bloquait la requête → `entrees = []`. La page `RegistrePage` ne re-fetchait jamais. **Solution** : chaque page qui a besoin des données appelle `fetchForge()` dans son propre `useEffect` au montage. C'est le même pattern que les tabs de l'AdminDashboard.

### Points de vigilance

- **Ne pas se fier à l'ordre de montage des providers** : `ForgeProvider` est monté AVANT qu'App.js ait fini `useAppInit()`. Même si le provider avait un `useEffect` dépendant de `session`, il ne l'a pas dans son scope.
- **Les composants de page (routes) sont remontés à chaque navigation** : c'est le bon endroit pour les `useEffect` de chargement de données. Les providers au-dessus doivent exposer les fonctions de fetch, pas (ou pas seulement) les appeler automatiquement.

## Session du 17 Mai 2026 (6e partie — Les Sceaux de la Communauté)

### Règles ajoutées

22. **`apply-encyclopedia-change` ne fait pas d'INSERT sans `id` dans `surgicalData`** — La vérification `!!mainData.id` (ligne 43) décide INSERT vs UPDATE. Pour une création, `surgicalData` ne contient jamais `id` car le moteur ne le met que dans `request.record_id`. Résultat : UPDATE silencieux sur 0 lignes → rien n'est créé. **Solution** : injecter `surgicalData.id = recordId` quand `isCreating`.

23. **`window.confirm()` au point de sélection, pas dans le handler parent** — Pour les confirmations d'items non-officiels, chaque handler appelle directement `window.confirm()` au début de la fonction, avec un `return` si annulé. Le pattern `if (!window.confirm(msg)) return;` est cohérent avec le code existant et évite de devoir gérer un état `ConfirmModal` dans 7 composants différents.

24. **Supprimer un filtre Supabase n'est pas une régression si c'est le seul point de filtrage** — Retirer `.eq('is_official', true)` de `loadSocialItems()` ne casse rien car les autres filtres (profils, catégories) sont en client-side. Aucun test ne vérifiait ce filtre serveur.

25. **Toujours vérifier si l'item sélectionné est `is_official === false` AVANT l'ajout** — Ne pas vérifier après, car le dispatch a déjà muté l'état. Le `window.confirm()` doit précéder immédiatement l'appel au dispatch (ou à `updateBlock` / `onCompetencesLibresChange`).

### Process ajouté

- **Quand un item ne s'affiche pas dans l'UI** : vérifier d'abord si le filtre Supabase le bloque, puis si le filtre client-side est actif, puis si l'item a bien été créé (data_change_requests archivé sans INSERT).
- **Pour récupérer un item perdu** : chercher dans `data_change_requests` avec le nom exact, puis faire un INSERT manuel avec le `record_id` comme ID.
- **Ne pas demander la confirmation pour dé-sélectionner** : la confirmation `!isSelected` guarde : on ne confirme que pour l'ajout, pas pour le retrait.

## Session du 17 Mai 2026 (7e partie — 16.0.0 L'Ère des Faux-Semblants)

### Règles ajoutées

26. **Un saut de version majeure (16.0.0) se justifie par une fonctionnalité transverse** — Le Sceau d'Officialité touche 15+ fichiers, 7 composants de sélection, le moteur de proposition, le chargement des données et l'affichage. C'est un changement d'architecture info plutôt qu'une simple feature. Le passage en 16.0.0 marque que le Grimoire distingue désormais deux catégories de savoir.

### Points de vigilance

- **Vérifier le build CI avant de pousser** — ESLint a rattrapé une dépendance manquante (`competences` dans `useCompetencesLibres.js`). Un build local avec `CI=true` aurait évité le va-et-vient.
- **15.19.9 existe déjà dans le changelog et dans git** — La version 16.0.0 s'ajoute par-dessus, pas de remplacement. L'historique est préservé.

## Session du 17 Mai 2026 (8e partie — 16.0.1 Le Soufflet du Forgeron)

### Règles ajoutées

27. **Une fonction exposée dans un Context Provider DOIT être wrappée dans `useCallback`** — Sinon, tout consommateur qui met cette fonction dans un `useEffect` se retrouve en boucle infinie. C'est le piège numéro 1 des providers React.

28. **Le `useEffect([], [])` dans un provider + `useEffect([fonction])` dans un composant = piège absolu** — Si la fonction n'est pas stable, les deux effets s'alimentent mutuellement. La règle 21 disait déjà que `useEffect([], [])` dans un provider tôt dans l'arborescence est dangereux. Mais même si on le retire, le composant page seul avec `useEffect([fetchForge])` + `fetchForge` instable suffit à créer la boucle.

### Patterns CSS (session)

- **`grid-cols-6` pour 6 éléments sur une ligne** — Plus fiable que `flex flex-wrap` quand on veut exactement 6 colonnes. Combiner avec `gap-1.5`, `py-1.5 px-1`, `text-[9px] sm:text-[10px]` et `truncate` sur les labels pour que ça tienne.
- **Le changement de classe d'icône dans le mock `lucide-react`** — Quand on ajoute une icône (ex: `MessageCircle`), il faut l'ajouter AUX DEUX ENDROITS : l'import du composant ET le mock `lucide-react` dans le test. Sans ça, l'icône est `undefined` et le composant ne plante pas mais peut ne pas rendre le bouton attendu.

## Session du 24 Mai 2026 — 16.0.2 "Le Puits Libéré"

### Règles ajoutées

29. **`mapDatabaseToCharacter` transforme `user_id` → `userId` — toujours utiliser `character.userId` côté frontend** — La fonction de mappage Supabase→client dans `supabaseStorage.js:68` transforme systématiquement les champs snake_case en camelCase. Le champ d'origine `user_id` devient `userId`. Toute vérification d'appartenance doit utiliser `character.userId` et JAMAIS `character.user_id` (qui est `undefined` côté client). Cette règle s'applique à tous les champs passés par `mapDatabaseToCharacter`.

### Process à améliorer

- **Avant d'utiliser un champ venant de Supabase côté frontend : vérifier son nom dans `mapDatabaseToCharacter`** — Si une fonction `supabaseStorage.js` transforme `toto` → `tutu`, toute vérification côté React doit utiliser `character.tutu` et pas `character.toto`. Le snake_case n'existe que dans la DB et les requêtes SQL.
- **Tests de non-régression : toujours couvrir le guard condition lui-même** — Le bug venait d'une incohérence de nom de champ, pas d'une logique métier. Un test qui vérifie directement la valeur de la condition booléenne (`blocked = userId !== session.user.id`) est plus simple et plus direct qu'un test de composant complet.

## Session du 24 Mai 2026 (2e partie) — 17.0.0 "La Gazette Mécanique"

### Règles ajoutées

30. **Surbrillance stricte des dates d'articles dans le Date Picker** — Le surbrillance verte dans la grille calendaire et l'indicateur d'état doivent être liés de manière stricte et exclusive aux articles de presse réels. Les catégories générées dynamiquement côté client (comme la météo et l'influence lunaire, qui existent toujours) ou les simples entrées d'événements historiques (`historical_events`) ne doivent pas colorer indûment les dates en vert. Pour ce faire, il faut requérir le champ `category` lors du recensement des dates disponibles et filtrer explicitement pour exclure `"Météo"`, `"Lune"` et `"Meteo"`.
31. **O(1) Set pour les vérifications de dates dans le Calendrier** — Pour assurer une navigation fluide et des performances instantanées lors du défilement des mois et des années (de 1899 à 1914), stocker les dates chargées sous forme de `Set` et effectuer des vérifications en temps constant `Set.has(formattedDate)` dans le `useMemo` de rendu de la grille de jours.
32. **Zéro warning sous CI=true pour Vercel** — Sur Vercel, toute variable inutilisée, import orphelin ou avertissement ESLint provoque l'échec immédiat de la compilation. Tout objet d'erreur de transaction ou de requête (comme `{ data, error }`) dont l'objet `error` n'est pas utilisé doit être élidé ou préfixé (ex. `_error`) pour préserver un build vert.

### Process à améliorer

- **Nettoyage automatique du terminal et builds locaux avec CI=true** — Avant de pousser sur `main`, toujours s'assurer qu'un test unitaire non interactif (`npm.cmd test -- --watchAll=false`) et un build complet de production (`$env:CI="true"; npm.cmd run build`) ont été exécutés avec succès.
- **Sauvegarde systématique Supabase avant version** — Suivre scrupuleusement la règle consistant à exécuter `node scripts/backup_supabase.js` juste avant d'incrémenter le numéro de version et de committer les fichiers de version.
- **Rédaction féérique Discord (Belle Époque)** — Rédiger le message destiné à Discord de manière romancée dans le ton merveilleux du jeu en se gardant d'y mentionner Isabelle.

## Session du 24 Mai 2026 (3e partie) — 17.0.1 "Le Trait Révélé"

### Règles ajoutées

33. **Comparaison systématique de tous les champs éditables de l'Encyclopédie dans `submitEncyclopediaProposal`** — L'absence de comparaison de tout champ (comme les `traits` pour les espèces féériques) dans la fonction centrale de validation empêche le bouton « Appliquer » d'être activé si seul ce champ est modifié, et bloque sa persistance. Chaque champ éditable de l'interface doit obligatoirement avoir son bloc de comparaison dédié dans `submitEncyclopediaProposal`.
34. **Utilisation d'un nettoyeur de liste de chaînes séparées par des virgules (`normalizeCommaListField`)** — Pour les champs de texte libre où l'utilisateur sépare des mots par des virgules, utiliser un parser qui nettoie les espaces parasites de chaque élément et filtre les entrées vides. Cela garantit une comparaison d'équivalence de tableau propre (`arraysEqual`) et évite les détections de faux changements sémantiques.
35. **Contournement du hoisting de `jest.mock` en configurant les retours dans `beforeEach`** — Lors du mock complexe d'enchaînements de méthodes (comme l'insertion d'une proposition Supabase), déclarer les variables d'espion Jest au niveau du scope du fichier, mais ne configurer leurs retours (ex: `supabase.from.mockReturnValue(...)`) qu'à l'intérieur du bloc `beforeEach`. Cela évite que le hoisting de Jest n'évalue les variables de mock avant leur instanciation et ne jette des erreurs silencieuses de type `TypeError`.

### Process à améliorer

- **Vigilance sur les types de champs en base (Supabase) vs formulaires** : Les traits de fée sont stockés sous forme de tableau `text[]` en base de données, mais présentés et édités sous forme de chaîne simple séparée par des virgules dans l'interface utilisateur. Toujours s'assurer d'effectuer la conversion en tableau propre lors de la soumission de la proposition, plutôt que d'envoyer la chaîne brute.
- **Tests de non-régression ciblés** : Toujours créer un fichier de test dédié (`encyclopediaEngine.test.js`) pour isoler et valider à 100% le comportement de l'API de comparaison avant et après modification, ce qui accélère la détection de conflits et protège le socle.

## Session du 26 Mai 2026 — 17.0.2 "Le Sceau du Secret"

### Règles ajoutées

36. **`jest.clearAllMocks()` efface aussi les implémentations de `jest.fn(impl)`** — Contrairement à ce que la doc suggère, `clearAllMocks()` remet à `undefined` les implémentations fournies via `jest.fn(() => ...)`. Pour les fonctions mockées avec une implémentation par défaut (comme `translateError` dans Auth.test.js), utiliser `jest.requireActual` pour réimporter l'original dans le test, ou configurer les `mockReturnValue` dans `beforeEach` **après** le `clearAllMocks()`.

37. **Anti-énumération : ne jamais distinguer "email existant" de "email nouveau" dans la réponse** — Qu'un compte existe déjà ou non, la réponse au submit d'inscription doit être identique. Le message "Missive expédiée !" est renvoyé dans les deux cas, empêchant un attaquant de savoir si une adresse est déjà enregistrée.

38. **Vérification du mot de passe actuel via `signInWithPassword` avant `updateUser`** — Pour changer de mot de passe, le pattern sûr est : (1) `signInWithPassword(email, currentPassword)` pour vérifier l'identité avec le mot de passe actuel, (2) `updateUser({ password: newPassword })` si la vérification réussit. Ne pas se fier à `reauthenticate()` qui peut être bloqué par la config Supabase.

39. **Turnstile : `turnstile.render()` ne fonctionne pas si le conteneur est détruit puis recréé** — En SPA React, si le composant Auth se remonte (route change, état local), le conteneur DOM du captcha est détruit. Il faut appeler `turnstile.remove()` avant de quitter ou gérer l'ID retourné par `turnstile.render()` pour un nettoyage explicite.

### Process à améliorer

- **Ne pas modifier le comportement des appels Supabase dans les tests sans vérifier l'effet sur `jest.clearAllMocks()`** — Si le test utilise `clearAllMocks()` dans `beforeEach`, toute implémentation définie par `jest.fn(impl)` sera perdue. Préférer la configuration des valeurs de retour dans `beforeEach` plutôt qu'à la déclaration du mock.
- **Config Supabase (config.toml) au diapason du code frontend** — `minimum_password_length`, `password_requirements`, `enable_confirmations`, `secure_password_change`, et `captcha` doivent être modifiés en même temps que le code frontend d'inscription. Ces valeurs ne sont pas du "sugar" ; elles font partie intégrante de la sécurité.
- **Backup Supabase avant version** — Appliqué en début de session (vérifié).
- **Build CI=true avant de pousser** — Appliqué : `npx react-scripts build` réussi sans warning.

## Session du 26 Mai 2026 (2e partie) — 17.0.3 "La Fenêtre de la Forge"

### Règles ajoutées

40. **Zone de drop cliquable = `<input type="file">` caché + ref + `onClick` sur le parent** — Le pattern éprouvé dans `StepPersonnalisation.js` (clic → `fileInputRef.current.click()`) s'applique aussi à la Forge. Permet le support mobile là où le drag-and-drop est impossible.

41. **Preview et nettoyage `URL.createObjectURL`** — Générer l'aperçu via `URL.createObjectURL(file)` et le révoquer dans `removeFile()` avec `URL.revokeObjectURL(filePreview)` pour éviter les fuites mémoire. Stocker l'URL dans un état `filePreview` séparé du `file` lui-même.

42. **Icônes dans le hub central `icons.js`** — Chaque nouvelle icône Lucide utilisée par un composant doit être ajoutée dans `src/config/icons.js`. `FolderOpen` a été ajouté pour le texte "ou cliquez pour parcourir".

### Process à améliorer

- **Toujours vérifier les icônes avant build** — L'import d'une icône Lucide non exportée par `icons.js` cause une erreur silencieuse (rendu `undefined`) ou une regression visuelle. Vérifier systématiquement que l'icône est dans la liste des exports.
- **Tests + build avant version** — Appliqué : 272 tests verts, build réussi.
- **Backup Supabase répété** — Une deuxième backup a été faite pour cette sous-version.

## Session du 26 Mai 2026 (3e partie) — 17.0.4 "Le Ciseau du Portraitiste"

### Règles ajoutées

43. **Interception du fichier avant upload pour recadrage** — Ne jamais uploader le fichier brut. `handleFileSelected` remplace `handlePortraitChange` dans les `onChange` des inputs file : il stocke le fichier + le type dans un état `cropModal`, ce qui ouvre la modale de recadrage. Ce n'est qu'après confirmation du crop que `handlePortraitChange` est appelée avec le fichier recadré.

44. **`getCroppedBlob` : canvas natif pour le crop final** — `react-easy-crop` fournit l'UI tactile + les coordonnées du crop, mais le fichier final est produit par un canvas 2D natif : `Image()` → `ctx.drawImage(cropped)` → `canvas.toBlob()`. Pattern sans librairie lourde.

45. **`react-easy-crop` nécessite un wrapper modal avec `z-50`** — Le composant Cropper utilise un conteneur `position: relative` et des `div` absolues. Pour qu'il fonctionne dans une modale, le parent doit avoir une hauteur fixe (`h-80`) et la modale doit être en `fixed inset-0 z-50`.

46. **Ajout systématique des nouvelles icônes dans le hub** — `ZoomIn` et `ZoomOut` ont été ajoutés à `src/config/icons.js` avant utilisation. Oubli = icône `undefined` sans erreur.

### Process à améliorer

- **Nouvelles dépendances = `npm install` avant tout** — `react-easy-crop` a été installé en début d'implémentation. Toujours le faire immédiatement plutôt qu'après avoir écrit le code.
- **Tests du StepPersonnalisation** — Pas de test existant pour ce composant. À créer si une prochaine session touche à nouveau cette zone.
- **Backup Supabase avant version** — Appliqué.
- **Build CI avant push** — Appliqué (build réussi sans warning).

## Session du 26 Mai 2026 (4e partie) — 17.0.5 "Le Journal en Poche"

### Règle ajoutée

47. **`sticky` toujours conditionnel à la taille d'écran via `lg:` préfixe** — Un `sticky top-24 z-10` sans préfixe responsive s'applique sur mobile et fait chevaucher l'élément avec le contenu suivant. Le pattern sûr : `lg:sticky lg:top-24 lg:z-10` pour que le comportement sticky n'existe que dans la colonne dédiée.

### Process à améliorer

- **Vérifier les `sticky` non-responsifs dans chaque composant** — Une recherche `grep -rn "sticky\b" src/components/` montre 7 composants avec sticky. La plupart sont corrects (sticky dans leur propre section), mais un `sticky` positionné à `top-24` dans une colonne qui disparaît sur mobile provoque un chevauchement. La règle : si l'élément change de layout (colonne → ligne) entre breakpoints, le sticky doit aussi être responsive.
- **Backup Supabase** — Appliqué.
- **Build CI avant push** — Appliqué.

## Session du 30 Mai 2026 — 17.0.6 "Le Point Vert Émeraude"

### Règles ajoutées

48. **Données d'articles insérées après le montage du composant : le Set `availableArticleDates` devient obsolète** — `fetchAvailableArticleDates()` était défini à l'intérieur d'un `useEffect([], [])` et n'était appelé qu'au montage. Si les données sont insérées en base après (pipeline, autre session), le Set reste vide pour ces dates. Le correctif : (a) extraire la fonction en `useCallback` au niveau du composant, (b) ajouter un `useEffect` sur `dateStr` pour re-fetcher à chaque navigation, (c) ajouter un SET atomique dans `fetchArticlesForDate` pour le feedback immédiat.

49. **Extraction d'une fonction d'un `useEffect` vers `useCallback` : la rendre accessible depuis d'autres effets** — Quand une fonction async est déclarée dans un `useEffect([], [])`, elle est prisonnière de ce scope. Pour la réutiliser ailleurs (un second effet), il faut la promouvoir en `useCallback` au niveau du composant avec ses dépendances listées. La fonction initiale reste appelée au montage via le premier effet ; le second effet peut l'appeler sans duplication de code.

### Patterns

- **Triple mécanisme de rafraîchissement des dates** :
  1. `useEffect([fetchAvailableArticleDates], [])` au montage — Set initial complet.
  2. `useEffect([fetchAvailableArticleDates, dateStr], [dateStr])` — Re-fetch à chaque changement de jour.
  3. `setAvailableArticleDates(prev => new Set([...prev, targetDate]))` — Ajout immédiat sans attendre le fetch.
  Les trois mécanismes sont complémentaires : le fetch est une boucle de rapprochement, le SET atomique est un feedback instantané. Aucun ne dépend de l'autre, donc aucun risque de stale closure.

### Process à améliorer

- **Quand une date est chargée mais pas en vert dans le calendrier** : Debugger en premier `fetchAvailableArticleDates`. Vérifier que la date est bien dans le Set retourné. Vérifier que `.select('date, category')` n'est pas limité par PostgREST (max-rows).
- **Backup Supabase** — Appliqué (test + backup systématique avant version).
- **Build Vercel** — Vérifié après push : `● Ready` en < 2 min.
- **272 tests verts** avant ET après modification — Aucune régression.

## Session du 30 Mai 2026 (2e partie) — 17.0.7 "Le Vert Visible"

### Règles ajoutées

50. **`bg-emerald-50` est quasi invisible sur fond blanc (`#ecfdf5`)** — Toujours vérifier visuellement les classes Tailwind utilisées pour les états "actif/sélectionné". Une classe `bg-emerald-50` paraît vert pâle dans l'éditeur mais se confond avec le fond blanc de la popover. Préférer `bg-emerald-200/70` ou plus foncé pour un rendu perceptible. De même, `border-emerald-250` n'étant pas défini dans le thème Tailwind standard ni dans la config du projet, la bordure était absente silencieusement.

51. **Vérifier que les classes Tailwind non-standards existent dans `tailwind.config.js`** — `border-emerald-250` était utilisé sans être défini dans `theme.extend`. Tailwind ignore silencieusement les classes inconnues — aucun warning, aucune erreur. Si une classe non-standard est nécessaire, l'ajouter dans `tailwind.config.js` ; sinon, utiliser une classe standard (100, 200, 300...).

### Process à améliorer

- **Avant de déployer un changement visuel : toujours tester visuellement dans l'interface réelle** — La logique (`day.hasArticles`) était correcte, mais la classe CSS `bg-emerald-50` était trop subtile. Un coup d'œil sur la popover aurait immédiatement révélé le problème.
- **Backup Supabase** — Pas de changement DB, backup non requis pour cette sous-version.
- **Build Vercel** — Vérifié après push (build < 1 min).
- **272 tests verts** — inchangés.

## Session du 30 Mai 2026 (3e partie) — 17.0.8 "Le Point Vert du Jour Actif" + 17.0.9 "Le Treizième au Grand Jour"

### Règles ajoutées

52. **PostgREST impose un `max-rows` par défaut (généralement 1000)** — Toute requête Supabase sans `.limit()` explicite est limitée à ce nombre. Si les données dépassent ce seuil, les lignes excédentaires sont silencieusement tronquées. Sans `.order()`, le découpage est non-déterministe. **Toujours** ajouter `.order()` + `.limit(N)` avec N assez grand pour couvrir le volume attendu, surtout pour des requêtes d'inventaire (`.select('date')` sur toutes les lignes).

53. **Le mécanisme d'ajout atomique (`set(prev => ...)`) et le re-fetch intégral sont en conflit** — Si un `useEffect` re-fetch le Set complet depuis Supabase après l'ajout atomique, la seconde opération écrase la première. Résultat : la date fraîchement ajoutée disparaît si la requête complète ne la contient pas. Le correctif : un seul responsable du Set — soit le fetch initial (avec order + limit), soit l'ajout atomique. Pas les deux en concurrence.

### Process à améliorer

- **Pour déboguer un problème de données** : toujours reproduire EXACTEMENT la requête côté serveur (`node -e` avec le client Supabase), avec les mêmes `.select()`, `.order()`, `.filter()` que le code. La différence entre "avec order" et "sans order" a révélé le bug.
- **Tester avec un volume de données réaliste** — 272 tests passaient, mais le jeu de données réel (1223 articles) dépassait les limites implicites de l'infra. Ajouter un test d'intégration avec un volume proche du réel.

## Session du 30 Mai 2026 (4e partie) — 17.1.0 "La Gazette Apprivoisée"

### Règles ajoutées

54. **`import { Calendar }` non utilisé = erreur CI (Vercel)** — Quand on retire un composant du JSX (l'icône Lucide `<Calendar>`), il faut aussi le retirer de l'import. Vercel avec `CI=true` transforme les imports inutilisés en erreurs. Vérification rapide : `grep "Calendar" src/components/Actualite1899.jsx` pour confirmer qu'il n'y a plus d'occurrence.

55. **Badge + titre sur une ligne : `flex flex-wrap items-center gap-2`** — Quand un badge (catégorie) précède un titre, les mettre dans un conteneur `flex` avec `flex-wrap` permet de les afficher sur la même ligne, le badge passant au-dessus en cas de manque de place. `shrink-0` sur le badge empêche son rétrécissement.

### Patterns validés

- **Gagner des lignes dans l'UI** : trois économies — suppression de l'en-tête "RÉSUMÉ RESTAURÉ" (1 ligne), badge sur la ligne du titre (1 ligne), bouton allégé (3 mots). La lisibilité gagne en compacité.
- **Deux sélecteurs de date, un seul gardé** : le `<select>` liste des dates était redondant avec la popover calendrier. La règle : si deux éléments UI offrent la même fonction, garder le plus visuel (calendrier) et supprimer le plus textuel (liste).

## Session du 30 Mai 2026 (5e partie) — 17.1.1 "L'Article sans Page"

### Règles ajoutées

56. **Supprimer un élément d'information qui crée du bruit visuel** — Le "Page X" en italique à droite de chaque article apportait peu de valeur (la Gazette n'a qu'une page par article dans le contexte narratif). Sa suppression allège chaque carte et évite un mouvement oculaire inutile.

57. **Quand le badge + titre ne tiennent pas sur une ligne, réduire le titre avant de réduire le layout** — `text-lg md:text-xl` → `text-base md:text-lg` : le badge (10px) + titre (16→18px) tiennent sans `flex-wrap` sur la plupart des écrans. Moins de wrapping = meilleure lisibilité.

### Patterns validés

- **Header simplifié après suppression** : le `flex sm:flex-row justify-between` qui alignait titre à gauche et page à droite peut être remplacé par un simple `mb-4`. Moins de layout = moins de bugs responsive.

### Process à améliorer

- **Avant de déployer un changement UI** : vérifier à l'œil sur mobile et desktop que badge + titre tiennent sur une ligne. Un simple test responsive navigateur suffit.

## Session du 30 Mai 2026 (6e partie) — 17.2.0 "Le Ciel Révélé ☀️🌙"

### Règles ajoutées

58. **`phase()` d'Astral retourne l'âge de la lune en jours (0-29.5), pas un ratio [0-1)** — `astral.moon.phase(date)` retourne un nombre flottant correspondant au nombre de jours écoulés depuis la nouvelle lune. Pour obtenir un indice de phase (0-7), il faut d'abord faire `age = phase_num % 29.5`, puis `int(age / 29.5 * 8) % 8`. Multiplier directement par 8 (comme si `phase()` retournait un ratio) donne des résultats aberrants.

59. **`.single()` Supabase + code `PGRST116` pour gérer l'absence de ligne** — Quand on utilise `.single()` sur une requête Supabase qui peut ne retourner aucune ligne, le client Supabase jette une erreur avec `error.code === 'PGRST116'` (PostgREST: "The result contains 0 rows"). Il faut explicitement ignorer cette erreur : `if (error && error.code !== 'PGRST116') throw error;`. Sinon le `catch` traite l'absence de données comme une erreur.

### Patterns validés

- **Nouvelle table = nouvelle étape pipeline** : L'étape 7 a été ajoutée en suivant exactement le même pattern que l'étape 6 — une fonction dédiée, appelée après chaque `run_step_6_database_upload` dans les 4 branches du pipeline. La fonction de cleanup (step 0) a été mise à jour pour inclure la nouvelle table.
- **Backfill via psycopg2** : Utiliser `psycopg2` directement depuis le script Python plutôt que de passer par un subprocess Node par date. Beaucoup plus rapide (38 dates en quelques secondes au lieu de plusieurs minutes).
- **La météo/lune client-side était un fallback fragile** : Les 4 options cycliques en dur avec `dayNum % 4` donnaient la même météo tous les 4 jours du mois — totalement décorrélée de la réalité. Le passage à une table DB dédiée avec des données réelles améliore la crédibilité du monde.

### Process à améliorer

- **Vérifier les imports de fonctions depuis des librairies externes** : `astral.moon.phase()` a été testé rapidement mais le calcul de l'indice de phase était erroné. Ajouter un test de validation sur les fonctions astronomiques avant backfill.
- **Pipeline : toujours nettoyer les nouvelles tables dans `run_step_0_cleanup`** — L'étape 0 supprime les articles et événements d'une date, mais pas les `journal_daily_info`. Oubli corrigé dans cette session.

## Session du 31 Mai 2026 — 17.2.1

### Règle ajoutée
60. **Toujours lancer les tests avec `npm test` (ou `npx react-scripts test`), jamais `npx jest`** — Le projet utilise Create React App (`react-scripts`), qui embarque sa propre configuration Jest + Babel (transform des JSX et ESM). Lancer `npx jest` directement ne trouve pas cette config → 26 suites en échec pour "SyntaxError: Cannot use import statement outside a module" et "Support for the experimental syntax 'jsx' isn't currently enabled". Avec `npx react-scripts test --watchAll=false`, les 23 suites / 279 tests passent. La commande correcte est dans le `scripts.test` du `package.json` : `"test": "react-scripts test"`.

### Process à améliorer
- **Vérifier `package.json` → `scripts.test` avant de lancer les tests** — Le nom de la commande (`jest`, `vitest`, `react-scripts test`, `next test`, etc.) est toujours dans les scripts. Ne jamais deviner.

### Règle ajoutée (2e partie)

61. **Ajout de `.in()` et `.neq()` au MockChain des tests Supabase** — Quand on ajoute un nouveau filtre Supabase dans un composant (ex: `.neq('type', 'saint')`), le MockChain utilisé par les tests doit aussi supporter cette méthode, sinon le test jette `TypeError: chain.neq is not a function`. Les tests existants qui n'exercent pas ce chemin passent mais laissent un `console.error` dans le bloc `catch`. Solution : ajouter la méthode dans `makeChain()` retournant `this`.

### Patterns validés

- **Seed multi-années par script unique** : `scripts/seed_all_holidays.js` peuple 16 années, 6 595 lignes dans `journal_holidays`. Insertion par lots de 100 pour éviter les dépassements PostgreSQL. Beaucoup plus efficace que 16 scripts séparés.
- **Données des saints externalisées** : `scripts/saints_data.js` contient 365 entrées (nom, domaine, description) dans un fichier pur, séparé de la logique d'insertion. Facile à éditer ou corriger sans toucher au seed.
- **Pâques calculé algorithmiquement** : Méthode de Gauss pour les 16 années, vérifié contre l'histoire (Pâques 1899 = 2 avril). Aucune table en dur.

### Process à améliorer

- **Bruit `console.error` persistant dans les mocks partagés** : Le test `useCerbere.test.js` logge des erreurs car le MockChain global ne supporte pas `.neq()` et `.in()`. Une solution serait un mock centralisé exporté depuis `src/test/supabaseMock.js` partagé par tous les fichiers de test. À faire dans une session future si le bruit devient gênant.
- **Après création d'un script de seed** : l'exécuter immédiatement pour vérifier le résultat, puis ajouter un test qui compte les lignes en base (ou mocke le count) pour non-régression.
- **280 tests verts (23 suites)** avant ET après — inchangés pour cette version.

## Session du 1 Juin 2026 — Le Faux-Semblant à sa Place 🎭🔧

### Règles ajoutées

62. **`try/catch/finally` sur tout `handleSubmit` async** — Si `soumettreEntree` attrape ses erreurs mais qu'une erreur inattendue se produit avant (ex: au niveau du `JSON.stringify`), `setIsSubmitting(false)` ne s'exécute jamais et le bouton reste bloqué en "Transmission..." indéfiniment. Le pattern sûr : `try { ... } catch { notify } finally { setIsSubmitting(false) }` — le `finally` garantit le déblocage quoi qu'il arrive.

63. **AbortController + timeout sur les uploads Supabase Storage** — `supabase.storage.upload()` peut bloquer indéfiniment sur un fichier volumineux (pas de timeout par défaut). Toujours passer un `AbortSignal` avec un timeout (30s) pour éviter de laisser l'utilisateur avec un bouton bloqué sans retour. Bien catcher `AbortError` pour afficher un message clair ("L'envoi a pris trop de temps").

64. **Toujours ajouter `showInAppNotification` import manuellement** — Quand on utilise `showInAppNotification` dans un composant qui ne l'importait pas, ne pas compter sur le linter pour prévenir. Vérifier les imports manuellement après avoir ajouté un bloc `catch` qui notifie l'utilisateur.

### Problème résolu

- **Upload silencieux dans la Forge** : La combinaison `maxSizeMB: 10` + pas de timeout + pas de `try/catch` dans `handleSubmit` faisait que les images volumineuses bloquaient le formulaire sans aucun message d'erreur. Le fix ajoute un timeout 30s, un `try/catch/finally` et un message d'erreur explicite.

### Leçon

- **Demander la limite Supabase avant de réduire la taille client** : J'ai d'abord réduit `maxSizeMB` de 10 à 5 en supposant une limite Supabase à 5 Mo, mais l'utilisateur a fait remarquer que les photos téléphone sont souvent 3-5 Mo et 5 Mo aurait trop serré. Vérification faite : la limite Supabase est 50 Mo, pas besoin de réduire. Le timeout et le try/catch suffisent à régler le problème.

## Session du 1 Juin 2026 (soir) — Le Journal sans An 🗞️✂️

### Règles ajoutées

65. **Toujours vérifier `git status` pour les fichiers oubliés avant de versionner** — Quand on fait un commit de version, ne pas se limiter aux fichiers modifiés dans la session courante. Vérifier tous les fichiers modifiés (`git status`) et inclure ceux qui font partie du même lot de fonctionnalités, même s'ils datent d'une session précédente. Demander au développeur avant d'exclure quoi que ce soit.

66. **git mv pour les renommages de fichiers** — Utiliser `git mv` plutôt que `mv` + `git add` pour préserver l'historique git et le suivi de similarité. Vérifier les imports dans tous les fichiers (composant, test, routage) après un rename pour garantir zéro occurrence de l'ancien nom dans le code source.

### Problème résolu

- **Support enfoui incomplètement commité** : Les fichiers StepCapacites.js, StepCaracteristiques.js, characterEngine.js, encyclopediaEngine.js, CharacterContext.js contenaient des modifications du support enfoui qui n'avaient pas été commitées lors du version 17.2.3. Le `git status` montrait pourtant les modifications — l'IA s'est contentée des fichiers qu'elle venait d'éditer.

- **Actualite1899 → Actualite** : Renommage simple via `git mv` + 3 fichiers modifiés (composant, test, routeur). 280 tests verts avant et après.

### Leçon

- **Ne pas supposer que l'IA a tout commité** : Vérifier `git log --oneline` entre la dernière version et HEAD pour s'assurer que tous les changements associés ont été inclus. En cas de doute, demander au développeur.

