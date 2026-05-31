# Audit Performance — Session du 31 Mai 2026

## 🔴 Critique (bugs performance réels)

### 1. `animate-fade-in*` — 124 occurrences inertes
`animate-fade-in`, `animate-fade-in-up`, `animate-fade-in-down` sont utilisés dans 30+ fichiers mais **définis nulle part**. Tailwind v3 ne les inclut pas, et `tailwind.config.js` a `extend: {}`. Ces classes produisent zéro CSS.

**Fix** : Ajouter dans `tailwind.config.js` :
```js
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.3s ease-out',
      'fade-in-up': 'fadeInUp 0.3s ease-out',
      'fade-in-down': 'fadeInDown 0.3s ease-out',
    },
    keyframes: {
      fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      fadeInUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      fadeInDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
    }
  }
}
```

### 2. PixieAssistant — ailes à 20 Hz en continu
`src/components/PixieAssistant.js:147-153` : `animation: battementGauche 0.05s infinite alternate` — 20 cycles/seconde, même quand Pixie ne parle pas. Drain batterie.

**Fix** : passer à `0.3s` (3 Hz), ajouter `@media (prefers-reduced-motion)`.

### 3. `transition-all` — 140+ occurrences
Partout dans le code. Le navigateur ne peut pas optimiser `transition-all` — il calcule le layout à chaque frame même si seule la couleur change.

**Fix** : remplacer par `transition-colors`, `transition-transform`, `transition-opacity` selon le contexte.

---

## 🟡 Sévère (re-rendus cascades)

### 4. `CharacterContext.js` — Provider sans `useMemo`
Nouvel objet value à chaque render → **tous les consommateurs re-render** même si seules des données non-lues changent.
Même problème dans `ForgeContext.jsx` (6 fonctions non wrappées en `useCallback`).

**Files** : `src/context/CharacterContext.js:40-45`, `src/context/ForgeContext.jsx:196-200`

### 5. `CharacterList.js:446-457` — `commonCardProps` brise `React.memo`
```jsx
const commonCardProps = { ... };  // nouvel objet à chaque render
<CharacterCard {...commonCardProps} onRepairRequest={() => requestRepairOne(char.id)} />
```
3 boucles `.map()` avec fonctions inline + spread d'objet → `React.memo` sur `CharacterCard` inefficace.

### 6. `Actualite1899.jsx` — 1143 lignes, aucune optimisation
- 0 `React.memo`
- 5 `useEffect` séquentiels sans abort controller (race condition si l'utilisateur change de date)
- 15+ fonctions inline dans le JSX
- `calYear`/`calMonth` synchronisés via `useEffect` au lieu d'être dérivés par `useMemo`

---

## 🔶 Modéré (bundle & réseau)

### 7. Imports `* as LucideIcons` — 4 fichiers
`AccountSettings.js`, `TabForgeTitres.js`, `TabUsers.js`, `ChangeCard.js` importent **tout** lucide-react (43 MB dépaqueté, ~40 KB gzipped) pour 3-4 icônes dynamiques chacuns.

**Fix** : créer une map nom→composant dans `icons.js`, importer seulement les icônes utilisées.

### 8. `select('*')` — 21 occurrences
`Actualite1899.jsx` (6×), `useTelegraphe.js` (2×), `useGrimoire.js`, `useSnapshots.js`, etc. — chargent toutes les colonnes pour 2-3 utilisées.

### 9. `contactSyncQueue.js` — N+1 en boucle (`for...of` avec requêtes individuelles)
**File** : `src/utils/contactSyncQueue.js:40-96`

### 10. `useTelegraphe.js:176` — `.in()` avec potentiellement 1000+ IDs
PostgREST limite 8 KB par URL. Un canal chargé explosera silencieusement.

### 11. Queries sans `.limit()` — 16+ occurrences
`supabaseStorage.js:289-294` (`getAllCharactersAdmin` sans limit), `TabStats.js` (scan complet de `characters` ×3), etc.

---

## 🟢 Léger (ménage)

- `src/pdf/Manuel Du Joueur.pdf` → **49 MB**, jamais importé
- `public/Capture d'ecran 2026-02-12 211801.png` → 154 KB servis en prod
- `src/version.legacy.js` → 1485 lignes inutilisées
- `src/logo.svg`, `src/App.css` → relics CRA
- `pg`, `@testing-library/*` dans `dependencies` → devDependencies

---

## Top 5 à attaquer demain

| # | Problème | Impact | Effort estimé | Fichiers |
|---|----------|--------|---------------|----------|
| 1 | `animate-fade-in*` undefined | Toutes les animations d'entrée mortes | 10 min | `tailwind.config.js` |
| 2 | `CharacterContext` sans `useMemo` | Re-rendus cascade dans toute l'app | 15 min | `CharacterContext.js`, `ForgeContext.jsx` |
| 3 | Wildcard `LucideIcons` | 43 MB inutiles dans le bundle | 30 min | 4 fichiers + `icons.js` |
| 4 | `commonCardProps` (CharacterList) | `React.memo` inefficace | 15 min | `CharacterList.js` |
| 5 | PixieAssistant 20 Hz | Batterie mobile | 5 min | `PixieAssistant.js` |
