# Plan de migration architecturale — Les Héritiers

## Contexte

La stack actuelle (CRA + cache custom + CharacterContext mixte) accumule trois dettes qui causent des bugs réels :
1. **CRA abandonné** (react-scripts 5.0.1) — builds lents, ESM bridé, pas de futur
2. **Pas de React Query** — 28 fichiers avec Supabase direct, cache TTL custom qu'on vient d'ajouter et qui est une réimplémentation pauvre de `staleTime`
3. **CharacterContext mélange gameData + character** — cause directe des "hallucinations" patchées en urgence (session 10 juin 2026)

Migration par phases indépendantes, chacune déployable sans casser l'app.

---

## Phase A — CRA → Vite ✅ TERMINÉE (10 juin 2026)

Vite + Vitest opérationnels. `npm test` lance Vitest. Variables d'environnement migrées vers `VITE_*`. Build Vercel fonctionnel.

---

## Phase B — React Query pour gameData (~1 journée)

**Prérequis : Phase A ✅**

### Dépendances

Ajouter : `@tanstack/react-query` (^5.x)

### Modifications

**`src/index.js`** — ajouter `QueryClientProvider` autour de l'arbre :
```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10 * 60 * 1000, gcTime: 30 * 60 * 1000 } }
});
// Wrapper : QueryClientProvider > BrowserRouter > CharacterProvider > ForgeProvider > App
```

**Créer `src/hooks/useGameData.js`** — remplace `loadCoreGameData` + `loadHeavyLoreData` + TTL localStorage :
```js
export function useGameData(enabled = true) {
  return useQuery({
    queryKey: ['gameData', APP_VERSION],
    queryFn: async () => {
      const [profils, badges, { competences, competencesParProfil },
             { fairyData, fairyTypes, fairyTypesByAge },
             competencesFutiles, socialItems, encyclopediaRefs] = await Promise.all([
        loadProfils(), loadBadges(), loadCompetences(), loadFairyTypes(),
        getCompetencesFutiles(true), loadSocialItems(), loadEncyclopediaRefs()
      ]);
      return { profils, badges, competences, competencesParProfil, competencesFutiles,
               fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs };
    },
    staleTime: 10 * 60 * 1000,  // = CACHE_TTL_MS exact
    enabled,
    retry: 2,
  });
}
```

**`src/hooks/useAppInit.js`** — simplifier :
```js
const { data: gameDataResult, isSuccess: gameDataLoaded } = useGameData(!!session);
useEffect(() => {
  if (gameDataLoaded && gameDataResult) setGameData(gameDataResult);
}, [gameDataLoaded, gameDataResult, setGameData]);
```
Retirer les imports `loadCoreGameData`, `loadHeavyLoreData`. Le `_cacheStatus` et la logique conditionnelle disparaissent.

**`src/utils/supabaseGameData.js`** — retirer :
- `LOCAL_CACHE_KEY`, `CACHE_TTL_MS`, `isCacheFresh`, `loadCoreGameData`, `loadHeavyLoreData`
- Les fetchers individuels (`loadProfils`, `loadFairyTypes`, etc.) restent — ils sont la `queryFn`

### Pièges

- **`enabled: !!session`** obligatoire — sinon les requêtes Supabase partent avant l'auth (erreur RLS)
- **`src/utils/__tests__/supabaseGameData.test.js`** : teste `isCacheFresh` qui disparaît → supprimer ce test
- **`invalidateCompetencesFutilesCache()`** dans `addCompetenceFutile` → remplacer par `queryClient.invalidateQueries(['gameData'])`

### Vérification

```bash
npm test   # Adapter/supprimer supabaseGameData.test.js
```
Test manuel : vider localStorage, recharger → chargement en une passe. Recharger → réseau silencieux pendant 10 min (valider via React Query DevTools en dev).

---

## Phase C — Séparer GameDataContext de CharacterContext (~1 journée)

**Prérequis : Phase B terminée**

### Problème

`CharacterContext` mélange `gameData` (référence statique Supabase) et `character` (état de création volatile). Le reducer `characterEngine.js` reçoit `gameData` dans 7 actions (~10 références) — source architecturale des hallucinations.

### Architecture cible

```
GameDataProvider (nouveau) → fournit gameData via useGameData()
CharacterProvider (allégé)  → fournit character + dispatchCharacter uniquement
```

### Modifications

**Créer `src/context/GameDataContext.js`** :
```js
const GameDataContext = createContext();
export function GameDataProvider({ children }) {
  const { data: gameData = defaultGameData, isLoading, isError } = useGameData();
  const value = useMemo(() => ({ gameData, isLoading, isError }), [gameData, isLoading, isError]);
  return <GameDataContext.Provider value={value}>{children}</GameDataContext.Provider>;
}
export const useGameDataContext = () => useContext(GameDataContext);
```

**`src/context/CharacterContext.js`** — retirer `gameData`, `setGameData` du state et de `ctxValue`.

**`src/index.js`** — ajouter `GameDataProvider` dans l'arbre :
```jsx
<QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <GameDataProvider>
      <CharacterProvider>
        <ForgeProvider>
          <App />
        </ForgeProvider>
      </CharacterProvider>
    </GameDataProvider>
  </BrowserRouter>
</QueryClientProvider>
```

**`src/hooks/useAppInit.js`** — retirer `setGameData` de `useCharacter()` (Phase B l'avait déjà réduit ; Phase C l'élimine complètement).

**~25 fichiers** qui font `const { ..., gameData } = useCharacter()` → remplacer par `const { gameData } = useGameDataContext()` + ajout d'import. Remplacement mécanique. Fichiers principaux :
- `src/AppRouter.jsx`, `src/hooks/useCerbere.js`, `src/utils/xpTransaction.js`
- `src/components/creator/CharacterCreator.jsx`
- `src/components/Step1.js`, `StepCapacites.js`, `StepAtouts.js`, `StepCompetencesFutiles.js`, `StepPersonnalisation.js`, `StepProfils.js`, `StepCaracteristiques.js`, `StepPouvoirs.js`
- `src/components/personnalisation/WidgetLangues.js`, `usePersonnalisation.js`
- `src/components/vieSociale/useVieSociale.js`
- `src/components/competencesLibres/useCompetencesLibres.js`
- `src/components/AnomalieFeeriqueWidget.jsx`

**Stratégie conservative** (recommandée) : les composants continuent de passer `gameData` aux actions du reducer, mais ils le récupèrent de `useGameDataContext()` au lieu de `useCharacter()`. `characterEngine.js` ne change pas.

### Vérification

```bash
npm test
```
Test manuel : créer un personnage de bout en bout. Charger un personnage existant scellé. Vérifier que `computedStats` est identique avant/après.

---

## Phase D — TypeScript (long terme, optionnel)

**Commencer quand Phase C est stable depuis 2 semaines minimum**

### Setup initial

Installer : `typescript`, `@types/react`, `@types/react-dom`, `@types/node`

`tsconfig.json` : `strict: false`, `allowJs: true`, `checkJs: false` — TypeScript coexiste avec les `.js` existants.

### Ordre de migration

1. **Utils pures** : `authRoles.js`, `json.js`, `lockUtils.js`, `xpActions.js`, `xpCalculator.js`
2. **Logique métier** : `characterEngine.js`, `bonusCalculator.js`, `historyReconstructor.js`
3. **Types Supabase auto** : `npx supabase gen types typescript --project-id <id> > src/types/supabase.ts`
4. **Hooks** : `useGameData`, `useAppInit`, puis les autres
5. **Composants** : en dernier, du plus simple au plus complexe

Activer `strict` progressivement après chaque vague : `noImplicitAny` → `strictNullChecks` → `strict: true`.

---

## Dépendances entre phases

```
A (Vite) ✅ → B (React Query) → C (Split Context) → D (TypeScript)
```

A est un prérequis strict de tout le reste (le toolchain conditionne la migration des tests). B et C sont dans l'ordre recommandé mais C peut théoriquement être fait avant B (plus difficile). D est entièrement optionnel et indépendant des autres une fois C stable.
