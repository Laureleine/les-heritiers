# REX — Session 11 Juin 2026 — v17.4.10 "La Clé du Casino 🎲🗝️"

## Ce qui a été fait

- Audit de compatibilité multi-typologies (`audit-compat.spec.js`) : contraste, daltonisme, clavier, zoom 320px, touch targets.
- DiceRoller : Esc, focus trap, retour focus, `role="dialog"`.
- TODO.md enrichi avec toutes les violations restantes et les pistes de fix.

---

## Enseignements

### 1. `mode: 'serial'` + `expect()` dans des tests d'audit = blocage immédiat

Quand les tests tournent en serial et que le premier échoue avec `expect().toHaveLength(0)`, les tests suivants ne s'exécutent pas. Pour un AUDIT (qui doit toujours aller au bout), ne jamais mettre `expect()` dans les tests de collecte. Mettre les assertions globales dans un test dédié ou en `afterAll`.

### 2. `isHidden()` Playwright ≠ fiable pour les éléments masqués par `opacity-0`

`isHidden()` de Playwright ne détecte pas forcément un parent avec `opacity-0` si la transition CSS est en cours (300ms). Préférer une vérification directe du state CSS synchrone : `classList.contains('pointer-events-none')` ou `classList.contains('opacity-0')`.

### 3. Pattern focus trap dans une modale React

```js
useEffect(() => {
  if (!isOpen) return;
  const getFocusable = () => Array.from(ref.current?.querySelectorAll(SELECTOR) ?? []);
  getFocusable()[0]?.focus();
  const onKeyDown = (e) => {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    // cycle Tab/Shift+Tab
  };
  document.addEventListener('keydown', onKeyDown);
  return () => document.removeEventListener('keydown', onKeyDown);
}, [isOpen, close]); // close doit être useCallback([])
```
- `close` **doit** être `useCallback` avec `[]` deps pour être stable en dépendance d'effet.
- Le `ref` va sur l'**overlay** (pas sur le bouton), pour que `querySelectorAll` trouve tous les focusables dedans.
- Le retour du focus après fermeture → second `useEffect([isOpen])` qui focus le `triggerRef`.

### 4. Violations de contraste récurrentes dans Les Héritiers

- `bg-green-600` (boutons navigation étapes) → remplacer par `bg-green-700` pour passer AA sans changer l'esthétique.
- `bg-amber-600` (bouton "Se connecter") → `bg-amber-700`.
- `text-gray-400` porteur d'info → `text-gray-500` ou `text-gray-600`.
- Ces corrections sont dans `TODO.md` — à valider visuellement avant d'appliquer.

### 5. Rapport HTML auto-généré pour les audits

`generateReport(data)` dans `tests/e2e/helpers/compat-report.js` écrit un fichier HTML autonome (CSS inline, screenshots base64). La sortie va dans `tests/e2e/reports/` (gitignored par `/tests`). Pour commiter de nouveaux fichiers dans `tests/`, utiliser `git add -f`.

---

# REX — Session 11 Juin 2026 — v17.4.9 "Le Grimoire Sonore 🔊✨"

## Ce qui a été fait

Chantier accessibilité complet (axe-core) : de ~68 violations à 6 (-91%).
Plus aucune violation CRITICAL ni SERIOUS sur les 13 écrans audités.

---

## Enseignements

### 1. Vite utilise `index.html` à la racine, pas `public/index.html`

`public/` est un résidu CRA qui ne passe PAS dans le build Vite.
Pour modifier le `<meta viewport>` ou n'importe quelle balise HTML racine → **toujours éditer `index.html` à la racine du projet**.

**Symptôme du piège :** l'audit axe-core signale `meta-viewport` même après correction → c'est que le mauvais fichier a été modifié.

---

### 2. Un composant toujours rendu = violation sur toutes les pages

Le bouton flottant `Telegraphe.js` est rendu dans `App.js` sur tous les écrans.
Une violation `button-name` sur ce bouton apparaissait donc sur les **11 étapes**.
Réflexe : si une violation se répète sur chaque écran → chercher un composant global (header, footer, overlay permanent).

---

### 3. Un seul `<main>` par document

En ajoutant `<main>` dans `App.js`, le `<main>` interne de `CharacterCreator.jsx` créait `landmark-no-duplicate-main`.
Fix : convertir le `<main>` interne en `<section aria-label="...">`.

**À surveiller :** `Actualite.jsx` a peut-être le même problème (non audité cette session).

---

### 4. Fichiers avec tabulations → l'outil Edit échoue silencieusement

`GrimoirePersonnel.js` utilise des `\t` (tabulations réelles) au lieu d'espaces.
`Edit` ne peut pas matcher les chaînes multi-lignes avec tabulations.
**Fix :** utiliser PowerShell avec `Get-Content` + `[System.Collections.Generic.List]` + `.Insert()` pour les insertions de lignes, et `-replace` regex pour les remplacements inline.

Détecter les tabs avant d'éditer : `Format-Hex fichier.js | Select-String "09"`.

---

### 5. L'outil Edit exige un Read préalable

Tenter d'éditer un fichier sans l'avoir lu dans la session courante → `"File has not been read yet"`.
Toujours lire le fichier avant la première Edit, même si on connaît le contenu.

---

### 6. Localiser la source d'une violation CSS

Pour trouver quel composant correspond à `.border-blue-300.text-blue-900` (violation select-name étape 10) :
utiliser `Grep` avec `border-blue-300` sur `src/components/**/*.{js,jsx}`.
Ne pas supposer que la violation vient du composant parent — elle peut venir d'un enfant.

---

### 7. `aria-label` dynamique avec nom du personnage/item

Pattern recommandé : `aria-label={\`Supprimer ${char.nom}\`}` pour les boutons dont l'action porte sur un élément nommé.
Nettement plus utile pour les lecteurs d'écran que `aria-label="Supprimer"` seul.

---

### 8. Stratégie d'audit par vagues

Première passe : corriger toutes les violations CRITICAL et SERIOUS.
Deuxième passe : relancer l'audit, observer ce qui reste.
Garder les MODERATE (`heading-order`) pour une session dédiée — leur impact réel est faible.

---

## Score final de la session

| Métrique | Avant | Après |
|---|---|---|
| Violations axe-core | ~68 | 6 |
| Violations CRITICAL | 3 | 0 |
| Violations SERIOUS | ~40 | 0 |
| Violations MODERATE | ~25 | 6 |
| Tests Vitest | 336 | 336 |

---

## Reste pour la prochaine session

- `heading-order` MODERATE : 6 occurrences → voir `TODO.md`
- Vérifier si `Actualite.jsx` a un `<main>` interne (risque `landmark-no-duplicate-main`)

---

# REX — Session 10 Juin 2026 (v17.4.8 — L'Archiviste du Nuage)

## Ce qui a été fait

- **Phase B — React Query** : remplacement complet du cache localStorage artisanal (`LOCAL_CACHE_KEY`, `CACHE_TTL_MS`, `isCacheFresh`, `loadCoreGameData`, `loadHeavyLoreData`) par `@tanstack/react-query`. Nouveau hook `useGameData` avec un `Promise.all` unique pour 7 sources. `staleTime: 10 min`, `gcTime: 30 min`. Auth guard : `enabled: !!session`.
- **Phase C — GameDataContext** : `gameData`/`setGameData` extraits de `CharacterContext` vers un nouveau `GameDataContext`. 26 fichiers migrés de `useCharacter()` vers `useGameDataContext()`. `CharacterContext` ne contient plus que l'état mutable.
- **Tests** : 336 verts tout au long des deux phases. Suppression de 9 tests `isCacheFresh` (fonction disparue). Mise à jour des mocks `useCerbere.test.js` et `useAppInit.test.js`.

## Règles & enseignements

### Architecture
- **`GameDataProvider` avec `enabled: false`** est le pattern correct pour "abonner un provider à un cache React Query sans déclencher de fetch". Le fetch reste dans `useAppInit` avec `enabled: !!session`. C'est le seul endroit auth-gatekept.
- **Deux abonnés React Query au même `queryKey`** partagent automatiquement le cache — pas besoin de prop drilling.
- Quand on extrait un context, l'ordre des providers dans `index.jsx` compte : `GameDataProvider` doit envelopper `CharacterProvider` si ce dernier en a besoin.

### Mécanique de migration (20+ fichiers)
- **Lire avant d'éditer** : le tool Edit refuse d'écrire dans un fichier non lu dans la session. Sur une grande migration, lire d'abord tous les fichiers en parallèle (batch de 10), puis éditer en parallèle.
- **Deux passes** : (1) ajouter l'import `useGameDataContext`, (2) splitter la destructuration `useCharacter()`. Ne pas chercher à faire les deux en une seule Edit — l'old_string doit être unique.
- **Grep de vérification** après la migration : `pattern: "useCharacter.*gameData|gameData.*useCharacter"` pour s'assurer qu'il ne reste aucun résidu.

### Tests
- Quand un hook perd une dépendance (`useAppInit` perd `useCharacter`), supprimer proprement le mock, l'import ET la variable associée (`mockSetGameData`) — sinon vitest peut planter silencieusement.
- Pour un hook splitté (`useCerbere`), les mocks inline `useCharacter.mockReturnValue({ gameData: ... })` doivent aussi être nettoyés.

### Vercel
- Le bon `teamId` est `team_2JcB6zm6EoWn2MVJjuHA3ORH` (laureleine's projects).
- Le `projectId` correct est `prj_ubXFEuYEU4TqZGQZYPg5xpeZSRki` (les-heritiers).

---

# REX — Session 10 Juin 2026 (v17.4.7)

## Ce qui s'est passé

Le bouton "Nouveau Héritier" était déjà désactivé pendant le chargement (`fairyTypes.length === 0`), mais toutes les autres interactions restaient accessibles — modifier un personnage existant, toucher des items, n'importe quoi — pendant que les archives féeriques se déchiffraient en arrière-plan. Le risque : un `setGameData(heavyData)` qui arrive après une interaction et déclenche des useEffects d'auto-correction avec des données fraîches, potentiellement incohérentes avec ce que l'utilisateur venait de faire.

---

## Analyse du problème

Dans `useAppInit.js`, `setGlobalLoading(false)` était appelé **avant** `loadHeavyLoreData`. Celui-ci partait en `.then()` fire-and-forget. L'app était visible mais incomplète.

Trois cas :
- **Cache fresh** (< 10 min) : tout est en localStorage, aucun problème.
- **Cache stale** (> 10 min) : localStorage retourne les données périmées, et `loadHeavyLoreData` recharge en arrière-plan → `setGameData` frappe l'app en pleine session.
- **Cache miss** (premier chargement) : `loadCoreGameData` ne retourne que profils + badges (`fairyTypes: []`), tout le reste arrive ensuite.

## Fix

`loadHeavyLoreData` est maintenant `await`é dans la séquence d'init, **avant** `setGlobalLoading(false)`. Sur cache fresh, le code ne passe même pas par là — instantané.

Un timer `setInterval` / `performance.now()` met à jour un état `loadingElapsed` toutes les 100ms, affiché à l'écran pendant le chargement pour mesurer le temps réel.

## Leçon clé

**"Fire-and-forget qui appelle `setGameData` = hallucination potentielle."** Même règle que les hallucinations de v17.4.5. La différence ici : on ne voulait pas juste éviter le re-render, on voulait aussi bloquer toute interaction utilisateur le temps que les données soient prêtes. La solution correcte est `await`, pas un flag de garde en aval.

---

# REX — Session 10 Juin 2026 (v17.4.6)

## Ce qui s'est passé

Trois bugs corriger dans une même passe : l'infrastructure Vercel était en panne depuis la migration Vite (5 commits d'erreurs), un humain pur ne voyait jamais ses scores de compétences futiles bouger, et les demandes de vote affichaient des journées déjà numérisées.

---

## Bug 1 — Build Vercel en panne depuis la migration Vite

### Cause racine

La migration CRA→Vite (commit `162de80`) avait créé `index.html` et `src/index.jsx` **localement mais sans les committer**. `git status` montrait ces fichiers comme "untracked". Le build local passait (Vite lit le filesystem), Vercel échouait (clone git HEAD, fichiers absents).

### Symptôme trompeur

Le diagnostic initial cherchait dans `vite.config.js`, les variables d'environnement, les settings Vercel — alors que la cause était un simple `git add` manqué. Les logs Vercel étaient expirés, ce qui a ralenti le diagnostic.

### Fix

`git add index.html src/index.jsx && git commit`. Rien d'autre à changer.

### Leçon clé

**Après toute migration, `git status` est la première vérification à faire.** Un fichier présent sur disque mais absent de git = build Vercel mort. Si les logs Vercel sont expirés et qu'on ne comprend pas pourquoi ça échoue, inspecter `git status` avant de toucher quoi que ce soit à la config.

---

## Bug 2 — Humain pur : scores futiles toujours à zéro

### Cause racine

Dans `characterEngine.js`, le bloc de calcul spécifique aux humains purs construisait `computedStats` avec `futilesBase: {}` et `futilesTotal: {}` codés en dur — ignorant complètement `newState.competencesFutiles.rangs`.

### Tromperie

Le bouton + décomptait bien les points (la logique de budget fonctionnait), mais le score affiché venait de `computedStats.futilesTotal` qui était toujours vide. Deux systèmes distincts : le budget (correct) et le score affiché (écrasé).

### Fix

Ajout avant l'affectation de `computedStats` :
```js
const futilesBase = {};
const futilesTotal = {};
Object.entries(newState.competencesFutiles?.rangs || {}).forEach(([nom, investis]) => {
  futilesBase[nom] = 0;
  futilesTotal[nom] = investis;
});
```

### Leçon clé

**Chercher les `{}` hardcodés dans les objets de résultat.** Quand un champ reste toujours vide malgré des données en entrée, chercher où ce champ est construit — c'est souvent une copie d'un bloc fée où on a oublié de brancher les données humaines.

---

## Bug 3 — Demandes de vote : journées déjà chargées toujours visibles

### Cause racine

`fetchVotesList()` retournait toutes les demandes de vote. L'affichage utilisait `votesList` directement sans filtrer les dates déjà présentes dans `availableArticleDates`.

### Fix

Un `useMemo` qui calcule `pendingVotes = votesList.filter(vote => !availableArticleDates.has(vote.date))` — la liste filtrée à chaque rafraîchissement de la page (ou changement des articles chargés).

### Leçon clé

**Derived state → `useMemo`, pas un `useEffect` + `setState`.** La liste filtrée se recalcule automatiquement quand ses dépendances changent, sans risque de boucle ni de désynchronisation.

---

## Piège critique : version.js commité ≠ fix déployé

### Ce qui s'est passé

Après la compaction du contexte, le commit `17.4.6` a incrémenté `version.js` mais les vrais fichiers de fix (`Actualite.jsx`, `characterEngine.js`, `characterEngine.test.js`) n'avaient jamais été committés — ils étaient dans le working tree uniquement. Le build Vercel était READY mais servait l'ancienne version.

### Leçon clé

**`git status` avant tout commit de version.** Si des fichiers modifiés apparaissent comme "not staged", le fix n'existe pas en production. `version.js` ne prouve rien — c'est `git log --stat` qui prouve ce qui est réellement parti.

**Séquence correcte :**
1. `git status` → vérifier que tous les fichiers du fix sont staged
2. `git add <fichiers de fix>` → puis commit du fix
3. `git add src/version.js` → puis commit de version séparé (ou groupé)

Ne jamais commiter `version.js` avant d'avoir commité les fichiers qu'il décrit.

---

## Méthode générale de cette session

1. Identifier le symptôme précis (score ne change pas / build mort / dates fantômes)
2. Tracer le flux depuis l'événement utilisateur jusqu'au rendu
3. Chercher l'endroit où la donnée attendue est produite (ou écrasée)
4. Écrire un test rouge qui fixe le comportement attendu
5. Appliquer le fix minimal
6. Vérifier que le test est vert + aucune régression

---

# REX — Session 10 Juin 2026 (v17.4.5)

## Ce qui s'est passé

Session entièrement dédiée aux performances. Deux chantiers successifs :
1. Diagnostic et correction des "hallucinations" lors de la création de personnage.
2. Passe de performance globale sur les requêtes Supabase et le nettoyage du code.

---

## Chantier 1 — Les Hallucinations

### Cause racine

`useAppInit.js` appelait `loadHeavyLoreData(coreData)` **sans `await` et sans condition**, y compris quand le cache localStorage était valide et complet. Résultat : à chaque chargement de l'app (même sur cache frais), 7+ requêtes Supabase partaient en arrière-plan 1 à 3 secondes après l'affichage de l'UI, et le `setGameData(heavyData)` résultant frappait CharacterContext en pleine session de création — déclenchant des `useEffect` d'auto-correction (`sexe`, `previewData`) avec des données potentiellement différentes du cache.

### Fix

- **TTL 10 min** : `isCacheFresh()` exportée depuis `supabaseGameData.js`. Cache tamponné avec `_loadedAt`. `loadCoreGameData` retourne `_cacheStatus: 'fresh' | 'stale' | 'miss'`.
- **Skip conditionnel** : `loadHeavyLoreData` n'est appelé que si `_cacheStatus !== 'fresh'`.
- **Gate UI** : bouton "Nouveau Héritier" `disabled` tant que `fairyTypes.length === 0`.

### Leçon clé

**Un `fire-and-forget` qui appelle `setState` est toujours dangereux.** Avant d'écrire `someAsyncFn().then(setState)`, se demander : "Est-ce que ce `setState` peut frapper l'UI pendant qu'un utilisateur est en train d'interagir ?" Si oui, il faut une condition ou un verrou.

---

## Chantier 2 — Performance globale

### Analyse préalable

L'audit existant (31 Mai 2026) était presque entièrement résolu. Nouveau scan ciblé sur :
- Requêtes Supabase séquentielles dans des boucles
- Requêtes séquentielles avant des `Promise.all` existants
- Fichiers morts

### Fixes

| Fichier | Problème | Fix |
|---|---|---|
| `supabaseGameData.js` | `loadFairyTypes` : 4 requêtes séquentielles | `Promise.all` simultané → ~3× plus rapide |
| `SystemeServices.js` | `notifyUsers` : boucle `for...of` avec `await` | `Promise.all(users.map(...))` |
| `ValidationsPendantes.js` | Fetch par table séquentiel | `Promise.all(tableEntries.map(...))` |
| `TabStats.js` | `feeData` + `profilData` awaités avant le `Promise.all` existant | Fusionnés dans le `Promise.all` (5 requêtes en 1 vague) |
| `src/logo.svg`, `src/App.css` | Artefacts CRA orphelins, zéro import | Supprimés |

### Leçon clé

**`for...of` + `await` dans une boucle est un N+1 systématique.** Le pattern correct est toujours `Promise.all(items.map(async item => ...))` quand les itérations sont indépendantes. Grep systématique pour `for.*of` dans les fichiers de fetch en début d'audit.

### Faux positif de l'audit

L'agent a signalé `TabStats` comme faisant des requêtes sans `.limit()` — mais les requêtes `type_fee` et `profils` sont des stats qui ont besoin de toutes les lignes par définition. Le bon fix était la parallélisation, pas le limit.

---

## Méthode de diagnostic des hallucinations

La séquence qui a permis de trouver rapidement la cause racine :
1. Lire `useAppInit.js` en entier → voir le `loadHeavyLoreData` non conditionné
2. Tracer le flux : cache hit → setGameData(cache) → UI visible → loadHeavyLoreData → setGameData(fresh) → re-render
3. Identifier quels `useEffect` de Step1 se déclenchent sur `gameData` change
4. Confirmer avec l'utilisateur que ça arrive "surtout au démarrage"

Le pattern "hallucination = state mis à jour sous les pieds de l'utilisateur" est récurrent dans les apps avec background fetch.
