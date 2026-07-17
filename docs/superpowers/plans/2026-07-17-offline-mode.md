# Mode Offline Complet — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rendre Les Héritiers entièrement utilisable sans connexion réseau dès lors que l'app a été visitée au moins une fois en ligne.

**Architecture:** PWA (Service Worker Workbox via `vite-plugin-pwa`) pour le cache statique + Dexie.js (IndexedDB) pour les données + couche `db` proxy qui route les appels selon `navigator.onLine` + `SyncQueue` qui rejoue les mutations offline au retour en ligne.

**Tech Stack:** `dexie` (IndexedDB), `dexie-react-hooks`, `vite-plugin-pwa` (Workbox generateSW), `workbox-window` (mise à jour SW), `fake-indexeddb` (tests).

## Global Constraints

- L'API Supabase côté serveur et la structure des tables ne changent pas — aucune migration SQL.
- Les composants existants migrent de `import { supabase }` vers `import { db }` ; l'API `db.from()` est identique à `supabase.from()` pour les opérations courantes.
- Télégraphe (`useTelegraphe`), espace admin (`components/admin/`), upload (`supabaseStorage.js`) restent sur `supabase` direct et affichent un message si hors ligne.
- Stratégie de conflit : last-write-wins côté joueur pour la fiche ; merge par `updated_at` pour les notes Grimoire.
- Tests : `npm test` = `vitest run` (jamais `jest`). Le SW (`pwa-sw.js`) ne remplace pas `public/sw.js` (notifs push).
- Compatible iOS Safari 16+ et Android Chrome.
- Icônes PWA : utiliser `logo192.png` et `logo512.png` déjà dans `public/`.

---

## Structure des fichiers

### Nouveaux fichiers

| Fichier | Rôle |
|---------|------|
| `src/config/localDb.js` | Schéma Dexie (6 tables IndexedDB) |
| `src/config/db.js` | Proxy Supabase/Dexie — API publique `db` |
| `src/utils/syncQueue.js` | File de mutations offline + replay |
| `src/context/OfflineStatusContext.js` | Contexte React : état réseau + erreurs sync |
| `src/components/OfflineBanner.jsx` | Bannière globale hors ligne / sync |
| `src/config/__tests__/localDb.test.js` | Tests du schéma Dexie |
| `src/config/__tests__/db.test.js` | Tests du proxy db |
| `src/utils/__tests__/syncQueue.test.js` | Tests de la sync queue |

### Fichiers modifiés

| Fichier | Changement |
|---------|------------|
| `package.json` | Ajout dexie, vite-plugin-pwa, workbox-window, fake-indexeddb |
| `vite.config.js` | Ajout VitePWA plugin |
| `public/manifest.json` | Ajout purpose maskable + background_color |
| `src/index.jsx` | Enregistrement pwa-sw.js via workbox-window |
| `src/App.js` | Ajout OfflineBanner + guards doux |
| `src/hooks/useGameData.js` | Remplissage Dexie.game_data après fetch |
| `src/hooks/useAppInit.js` | db.auth.getSession() + cache profile offline |
| `src/utils/supabaseStorage.js` | getUserCharacters + saveCharacterToSupabase via db |
| `src/hooks/useGrimoire.js` | db pour lecture + insertion en queue |
| `src/hooks/useMapPoints.js` | db pour lecture offline |
| `src/hooks/useChroniques.js` | db pour lecture offline |
| `src/hooks/useSessionsJeu.js` | db pour lecture offline |
| `src/components/BureauAnomalies.js` | db pour lecture + insert en queue |

---

## Task 1 — Dépendances + PWA Shell

**Files:**
- Modify: `package.json` (via npm)
- Modify: `vite.config.js`
- Modify: `public/manifest.json`
- Modify: `src/index.jsx`

**Interfaces:**
- Produit: `virtual:pwa-register` disponible dans toute l'app ; `public/pwa-sw.js` généré au build

- [ ] **Step 1 : Installer les dépendances**

```bash
npm install dexie dexie-react-hooks workbox-window
npm install --save-dev vite-plugin-pwa fake-indexeddb
```

Expected: `package.json` liste `dexie`, `workbox-window` dans `dependencies` et `vite-plugin-pwa`, `fake-indexeddb` dans `devDependencies`.

- [ ] **Step 2 : Modifier `vite.config.js`** — ajouter VitePWA

Ajouter l'import en tête du fichier et le plugin dans `plugins[]`. Le fichier existant a déjà un plugin custom `jsx-in-js` et `react()`. Insérer `VitePWA(...)` après `react()`.

```js
import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-js',
      enforce: 'pre',
      transform(code, id) {
        const normalized = id.replace(/\\/g, '/');
        if (/\/src\/.*\.[jt]sx?$/.test(normalized)) {
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
        }
      },
    },
    react(),
    VitePWA({
      registerType: 'prompt',
      filename: 'pwa-sw.js',
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/[^/]*\.supabase\.co\/rest\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-api',
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    jsx: 'automatic',
  },
  server: { port: 3000, open: false },
  build: {
    outDir: 'dist',
    rollupOptions: { external: ['pg'] },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**', '.claude/**'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  optimizeDeps: {
    exclude: ['@3d-dice/dice-box'],
    esbuildOptions: { loader: { '.js': 'jsx' } },
  },
});
```

- [ ] **Step 3 : Compléter `public/manifest.json`**

Ajouter `purpose: "maskable"` pour la grande icône et corriger `background_color` pour l'écran de démarrage.

```json
{
  "name": "Les Héritiers",
  "short_name": "Héritiers",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#d97706",
  "background_color": "#1c1917",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
    }
  ]
}
```

- [ ] **Step 4 : Modifier `src/index.jsx`** — enregistrer le SW PWA

Ajouter l'import et l'enregistrement avant `ReactDOM.createRoot`. Garder tout le reste inchangé.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { ForgeProvider } from './context/ForgeContext';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GameDataProvider } from './context/GameDataContext';
import { registerSW } from 'virtual:pwa-register';

// Enregistrement SW PWA (distinct de sw.js pour les notifs push)
registerSW({
  onNeedRefresh() {
    // Géré en Task 13 — stocker dans window pour que le composant le lise
    window.__pwaUpdateAvailable = true;
    window.dispatchEvent(new Event('pwa-update-available'));
  },
  onOfflineReady() {
    console.log('[PWA] Prête pour utilisation hors ligne');
  },
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10 * 60 * 1000, gcTime: 30 * 60 * 1000 } }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);
```

- [ ] **Step 5 : Vérifier le build**

```bash
npm run build
```

Expected: pas d'erreur, `dist/pwa-sw.js` est présent dans la sortie.

```bash
ls dist/pwa-sw.js
```

Expected: le fichier existe.

- [ ] **Step 6 : Lancer les tests**

```bash
npm test
```

Expected: 549 passed (aucun test cassé par l'ajout du plugin).

- [ ] **Step 7 : Commit**

```bash
git add vite.config.js public/manifest.json src/index.jsx package.json package-lock.json
git commit -m "feat(offline): PWA shell — vite-plugin-pwa + manifest"
```

---

## Task 2 — Schéma Dexie (`localDb.js`)

**Files:**
- Create: `src/config/localDb.js`
- Create: `src/config/__tests__/localDb.test.js`

**Interfaces:**
- Produit: `localDb` (instance Dexie exportée) avec tables `game_data`, `characters`, `user_data`, `sync_queue`, `auth_session`, `meta`

- [ ] **Step 1 : Écrire le test qui échoue**

```js
// src/config/__tests__/localDb.test.js
import 'fake-indexeddb/auto';

vi.mock('../supabase', () => ({ supabase: { from: vi.fn(), auth: { getSession: vi.fn() } } }));

import { localDb } from '../localDb';

describe('localDb — schéma Dexie', () => {
  beforeEach(async () => {
    await Promise.all([
      localDb.game_data.clear(),
      localDb.auth_session.clear(),
      localDb.sync_queue.clear(),
      localDb.meta.clear(),
    ]);
  });

  it('stocke et récupère un dataset game_data', async () => {
    await localDb.game_data.put({ key: 'fairy_types', data: [{ id: 1, name: 'Sylvaine' }] });
    const entry = await localDb.game_data.get('fairy_types');
    expect(entry).toEqual({ key: 'fairy_types', data: [{ id: 1, name: 'Sylvaine' }] });
  });

  it('stocke et récupère une session auth', async () => {
    await localDb.auth_session.put({ id: 'current', session: { access_token: 'tok-123' } });
    const entry = await localDb.auth_session.get('current');
    expect(entry.session.access_token).toBe('tok-123');
  });

  it('enqueue et lit depuis sync_queue', async () => {
    const id = await localDb.sync_queue.add({
      table_name: 'characters',
      operation: 'update',
      payload: { id: 'c1', nom: 'Mab' },
      timestamp: 1000,
      attempts: 0,
      status: 'pending',
    });
    const entry = await localDb.sync_queue.get(id);
    expect(entry.table_name).toBe('characters');
    expect(entry.status).toBe('pending');
  });

  it('stocke les métadonnées de sync', async () => {
    await localDb.meta.put({ key: 'fairy_types', lastSync: 9999 });
    const m = await localDb.meta.get('fairy_types');
    expect(m.lastSync).toBe(9999);
  });
});
```

- [ ] **Step 2 : Vérifier que le test échoue**

```bash
npm test -- --run src/config/__tests__/localDb.test.js
```

Expected: FAIL — "Cannot find module '../localDb'"

- [ ] **Step 3 : Créer `src/config/localDb.js`**

```js
// src/config/localDb.js
import Dexie from 'dexie';

export const localDb = new Dexie('heritiers_offline');

localDb.version(1).stores({
  // Données de jeu statiques — clé = nom du dataset
  game_data:    'key',
  // Fiches personnage — clé primaire id, index sur user_id et updated_at
  characters:   'id, user_id, updated_at',
  // Données utilisateur (notes, bug_reports, cercles, carte) — clé composite
  user_data:    '[key+user_id], key, user_id',
  // File d'attente des mutations offline
  sync_queue:   '++id, table_name, timestamp, attempts, status',
  // Session auth (entrée unique : id='current')
  auth_session: 'id',
  // Métadonnées de sync (horodatage dernière mise à jour par dataset)
  meta:         'key',
});
```

- [ ] **Step 4 : Vérifier que les tests passent**

```bash
npm test -- --run src/config/__tests__/localDb.test.js
```

Expected: 4 passed

- [ ] **Step 5 : Commit**

```bash
git add src/config/localDb.js src/config/__tests__/localDb.test.js
git commit -m "feat(offline): schéma Dexie (6 tables IndexedDB)"
```

---

## Task 3 — Couche `db` (proxy Supabase/Dexie)

**Files:**
- Create: `src/config/db.js`
- Create: `src/config/__tests__/db.test.js`

**Interfaces:**
- Consomme: `localDb` de `src/config/localDb.js` ; `supabase` de `src/config/supabase.js` ; `enqueueOperation` de `src/utils/syncQueue.js` (mocké en Task 3, réel en Task 4)
- Produit: `db` exporté depuis `src/config/db.js` — API : `db.from(table)`, `db.auth`, `db.rpc(fn, params)`, `db.setUserId(uid)`, `db.cacheUserData(key, userId, data)`

- [ ] **Step 1 : Écrire le test**

```js
// src/config/__tests__/db.test.js
import 'fake-indexeddb/auto';

vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn(),
    auth: { getSession: vi.fn(), onAuthStateChange: vi.fn(), signOut: vi.fn() },
    rpc: vi.fn(),
  },
}));

vi.mock('../../utils/syncQueue', () => ({
  enqueueOperation: vi.fn().mockResolvedValue(undefined),
}));

import { db } from '../db';
import { localDb } from '../localDb';
import { supabase } from '../supabase';
import { enqueueOperation } from '../../utils/syncQueue';

const mockChain = (result) => {
  const c = {};
  ['select','eq','or','in','order','filter','limit','single','upsert'].forEach(m => {
    c[m] = vi.fn().mockReturnValue(c);
  });
  c.then = (r) => Promise.resolve(result).then(r);
  return c;
};

describe('db — couche proxy', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    await localDb.game_data.clear();
    await localDb.user_data.clear();
    await localDb.auth_session.clear();
    // Simuler online par défaut
    Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
  });

  describe('en ligne', () => {
    it('délègue db.from() à supabase', async () => {
      const chain = mockChain({ data: [{ id: 1 }], error: null });
      supabase.from.mockReturnValue(chain);

      const result = await db.from('fairy_types').select('*');
      expect(supabase.from).toHaveBeenCalledWith('fairy_types');
    });

    it('db.rpc() délègue à supabase', async () => {
      supabase.rpc.mockResolvedValue({ data: [], error: null });
      await db.rpc('get_admin_users', {});
      expect(supabase.rpc).toHaveBeenCalledWith('get_admin_users', {});
    });

    it('db.auth.getSession() appelle supabase et met en cache dans Dexie', async () => {
      supabase.auth.getSession.mockResolvedValue({
        data: { session: { access_token: 'tok' } }, error: null
      });
      const result = await db.auth.getSession();
      expect(result.data.session.access_token).toBe('tok');
      const cached = await localDb.auth_session.get('current');
      expect(cached.session.access_token).toBe('tok');
    });
  });

  describe('hors ligne', () => {
    beforeEach(() => {
      Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
    });

    it('db.from(game_data table) lit depuis Dexie', async () => {
      await localDb.game_data.put({ key: 'fairy_types', data: [{ id: 1, name: 'Sylvaine' }] });
      const result = await db.from('fairy_types').select('*');
      expect(result.data).toEqual([{ id: 1, name: 'Sylvaine' }]);
      expect(supabase.from).not.toHaveBeenCalled();
    });

    it('db.from(user_data table) lit depuis Dexie', async () => {
      db.setUserId('user-1');
      await localDb.user_data.put({ key: 'heritier_notes', user_id: 'user-1', data: [{ id: 'n1', content: 'Note' }] });
      const result = await db.from('heritier_notes').select('*').eq('character_id', 'c1');
      expect(result.data).toEqual([{ id: 'n1', content: 'Note' }]);
    });

    it('db.auth.getSession() lit depuis Dexie.auth_session', async () => {
      await localDb.auth_session.put({ id: 'current', session: { access_token: 'cached-tok' } });
      const result = await db.auth.getSession();
      expect(result.data.session.access_token).toBe('cached-tok');
      expect(supabase.auth.getSession).not.toHaveBeenCalled();
    });

    it('db.rpc() retourne erreur offline', async () => {
      const result = await db.rpc('get_admin_users', {});
      expect(result.error.message).toMatch(/hors ligne/i);
    });

    it('insert sur table writable enqueue et stocke localement', async () => {
      db.setUserId('user-1');
      await db.from('bug_reports').insert([{ title: 'Bug test', user_id: 'user-1' }]);
      expect(enqueueOperation).toHaveBeenCalledWith('bug_reports', 'insert', expect.objectContaining({ title: 'Bug test' }));
    });
  });
});
```

- [ ] **Step 2 : Vérifier que les tests échouent**

```bash
npm test -- --run src/config/__tests__/db.test.js
```

Expected: FAIL — "Cannot find module '../db'"

- [ ] **Step 3 : Créer un stub `src/utils/syncQueue.js`**

`db.js` importe `enqueueOperation` de syncQueue, mais syncQueue n'est complet qu'en Task 4. Créer un stub minimal maintenant pour que les tests et imports fonctionnent :

```js
// src/utils/syncQueue.js (stub — sera complété en Task 4)
import { localDb } from '../config/localDb';

export async function enqueueOperation(table, operation, payload) {
  await localDb.sync_queue.add({
    table_name: table, operation, payload,
    timestamp: Date.now(), attempts: 0, status: 'pending',
  });
}

export async function syncAll() {}
export async function getSyncErrors() { return []; }
export async function retrySync() {}
```

- [ ] **Step 4 : Créer `src/config/db.js`**

```js
// src/config/db.js
import { supabase } from './supabase';
import { localDb } from './localDb';
import { enqueueOperation } from '../utils/syncQueue';

// Tables dont les données viennent de game_data (clé = nom de table Supabase)
const GAME_DATA_TABLES = new Set([
  'profils', 'badges', 'competences', 'competences_futiles',
  'social_items', 'sorts', 'encyclopedia_refs',
  'fairy_types',
]);

// Tables user-data (filtrées par user_id en Dexie)
const USER_DATA_TABLES = new Set([
  'map_points', 'chroniques_heritiers', 'ombre_consequences',
  'sessions_jeu', 'session_presents', 'heritier_notes',
  'bug_reports', 'indices_verites', 'correction_requests',
]);

// Tables avec écriture offline
const WRITABLE_TABLES = new Set([
  'characters', 'heritier_notes', 'bug_reports', 'xp_transactions',
]);

function isOnline() {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
}

// ────────────────────────────────────────────────────────────────────────────
// Builder offline : capture les filtres et exécute sur Dexie
// ────────────────────────────────────────────────────────────────────────────
class OfflineBuilder {
  constructor(table, userId) {
    this._table = table;
    this._userId = userId;
    this._eqFilters = {};
    this._op = 'select';
    this._payload = null;
    this._isSingle = false;
  }

  select() { return this; }
  eq(col, val) { this._eqFilters[col] = val; return this; }
  or() { return this; }
  in() { return this; }
  order() { return this; }
  filter() { return this; }
  limit() { return this; }

  single() { this._isSingle = true; return this; }

  insert(payload) {
    this._op = 'insert';
    this._payload = Array.isArray(payload) ? payload[0] : payload;
    return this;
  }

  update(payload) {
    this._op = 'update';
    this._payload = payload;
    return this;
  }

  delete() { this._op = 'delete'; return this; }

  // Pour les opérations chaînées après insert/update (ex: .insert({}).select().single())
  upsert(payload) {
    this._op = 'upsert';
    this._payload = payload;
    return this;
  }

  async _execute() {
    switch (this._op) {
      case 'select': return this._read();
      case 'insert': return this._insert();
      case 'update': return this._update();
      case 'upsert': return this._upsert();
      case 'delete': return { data: null, error: { message: 'Suppression non supportée hors ligne' } };
      default:       return { data: null, error: { message: 'Opération inconnue' } };
    }
  }

  async _read() {
    try {
      if (GAME_DATA_TABLES.has(this._table)) {
        const entry = await localDb.game_data.get(this._table);
        let data = entry?.data ?? [];
        // Appliquer les filtres eq simples côté client
        if (Object.keys(this._eqFilters).length > 0) {
          data = data.filter(row =>
            Object.entries(this._eqFilters).every(([col, val]) => row[col] === val)
          );
        }
        if (this._isSingle) return { data: data[0] ?? null, error: null };
        return { data, error: null };
      }

      if (USER_DATA_TABLES.has(this._table)) {
        const entry = await localDb.user_data.get({ key: this._table, user_id: this._userId || 'anonymous' });
        let data = entry?.data ?? [];
        if (Object.keys(this._eqFilters).length > 0) {
          data = data.filter(row =>
            Object.entries(this._eqFilters).every(([col, val]) => row[col] === val)
          );
        }
        if (this._isSingle) return { data: data[0] ?? null, error: null };
        return { data, error: null };
      }

      if (this._table === 'characters') {
        let data;
        if (this._eqFilters.id) {
          const char = await localDb.characters.get(this._eqFilters.id);
          if (this._isSingle) return { data: char ?? null, error: null };
          data = char ? [char] : [];
        } else if (this._eqFilters.user_id) {
          data = await localDb.characters.where('user_id').equals(this._eqFilters.user_id).toArray();
        } else {
          data = await localDb.characters.toArray();
        }
        return { data, error: null };
      }

      if (this._table === 'profiles') {
        const entry = await localDb.user_data.get({ key: 'profiles', user_id: this._userId || 'anonymous' });
        const data = entry?.data ?? null;
        if (this._isSingle) return { data, error: null };
        return { data: data ? [data] : [], error: null };
      }

      return { data: null, error: { message: `Table ${this._table} non disponible hors ligne` } };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  async _insert() {
    try {
      const payload = this._payload;
      if (WRITABLE_TABLES.has(this._table)) {
        await enqueueOperation(this._table, 'insert', payload);
        // Stocker localement pour lecture immédiate
        if (this._table === 'heritier_notes' || this._table === 'bug_reports') {
          const localItem = { ...payload, id: payload.id || crypto.randomUUID(), _offline: true };
          const existing = await localDb.user_data.get({ key: this._table, user_id: this._userId });
          const arr = existing?.data ?? [];
          await localDb.user_data.put({ key: this._table, user_id: this._userId, data: [localItem, ...arr] });
          if (this._isSingle) return { data: localItem, error: null };
          return { data: [localItem], error: null };
        }
        return { data: null, error: null };
      }
      return { data: null, error: { message: `Écriture offline non supportée pour ${this._table}` } };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  async _update() {
    try {
      if (!WRITABLE_TABLES.has(this._table)) {
        return { data: null, error: { message: `Écriture offline non supportée pour ${this._table}` } };
      }
      await enqueueOperation(this._table, 'update', { ...this._payload, _filters: this._eqFilters });
      // Mise à jour locale pour les fiches
      if (this._table === 'characters' && this._eqFilters.id) {
        const existing = await localDb.characters.get(this._eqFilters.id);
        if (existing) {
          await localDb.characters.put({ ...existing, ...this._payload, updated_at: new Date().toISOString() });
        }
      }
      if (this._table === 'heritier_notes' && this._eqFilters.id) {
        const entry = await localDb.user_data.get({ key: 'heritier_notes', user_id: this._userId });
        if (entry?.data) {
          const updated = entry.data.map(n => n.id === this._eqFilters.id ? { ...n, ...this._payload } : n);
          await localDb.user_data.put({ key: 'heritier_notes', user_id: this._userId, data: updated });
        }
      }
      return { data: null, error: null };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  async _upsert() {
    try {
      const payload = this._payload;
      if (this._table === 'characters') {
        await enqueueOperation('characters', 'upsert', payload);
        const localChar = { ...payload, updated_at: payload.updated_at || new Date().toISOString() };
        await localDb.characters.put(localChar);
        return { data: localChar, error: null };
      }
      return { data: null, error: { message: `Upsert offline non supporté pour ${this._table}` } };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  then(onFulfilled, onRejected) {
    return this._execute().then(onFulfilled, onRejected);
  }

  catch(fn) {
    return this._execute().catch(fn);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Proxy en ligne : délègue à Supabase + met Dexie à jour en background
// ────────────────────────────────────────────────────────────────────────────
function wrapOnlineQuery(table, supabaseQuery) {
  const originalThen = supabaseQuery.then.bind(supabaseQuery);
  supabaseQuery.then = (onFulfilled, onRejected) => {
    return originalThen(result => {
      if (!result?.error && result?.data && GAME_DATA_TABLES.has(table)) {
        localDb.game_data
          .put({ key: table, data: result.data })
          .then(() => localDb.meta.put({ key: table, lastSync: Date.now() }))
          .catch(() => {});
      }
      return onFulfilled ? onFulfilled(result) : result;
    }, onRejected);
  };
  return supabaseQuery;
}

// ────────────────────────────────────────────────────────────────────────────
// API publique
// ────────────────────────────────────────────────────────────────────────────
export const db = {
  _userId: null,

  setUserId(uid) {
    this._userId = uid;
  },

  // Stocke des données user_data dans Dexie (appelé par les hooks après fetch Supabase)
  async cacheUserData(key, userId, data) {
    try {
      await localDb.user_data.put({ key, user_id: userId, data });
    } catch (e) {
      console.warn(`[db] cacheUserData(${key}) échoué:`, e);
    }
  },

  // Stocke le profil utilisateur dans Dexie
  async cacheProfile(userId, profile) {
    try {
      await localDb.user_data.put({ key: 'profiles', user_id: userId, data: profile });
    } catch (e) {
      console.warn('[db] cacheProfile échoué:', e);
    }
  },

  from(table) {
    if (!isOnline()) {
      return new OfflineBuilder(table, this._userId);
    }
    return wrapOnlineQuery(table, supabase.from(table));
  },

  auth: {
    async getSession() {
      if (!isOnline()) {
        const entry = await localDb.auth_session.get('current');
        if (entry) return { data: { session: entry.session }, error: null };
        return { data: { session: null }, error: null };
      }
      const result = await supabase.auth.getSession();
      if (result.data?.session) {
        await localDb.auth_session.put({ id: 'current', session: result.data.session }).catch(() => {});
      }
      return result;
    },
    onAuthStateChange: (cb) => supabase.auth.onAuthStateChange(cb),
    signOut: async () => {
      await localDb.auth_session.delete('current').catch(() => {});
      return supabase.auth.signOut();
    },
    signInWithOtp: (opts) => supabase.auth.signInWithOtp(opts),
    verifyOtp: (opts) => supabase.auth.verifyOtp(opts),
    updateUser: (opts) => supabase.auth.updateUser(opts),
    resetPasswordForEmail: (email, opts) => supabase.auth.resetPasswordForEmail(email, opts),
    exchangeCodeForSession: (code) => supabase.auth.exchangeCodeForSession(code),
  },

  rpc(fn, params) {
    if (!isOnline()) {
      return Promise.resolve({ data: null, error: { message: 'Hors ligne — appel réseau impossible' } });
    }
    return supabase.rpc(fn, params);
  },
};
```

- [ ] **Step 5 : Vérifier que les tests passent**

```bash
npm test -- --run src/config/__tests__/db.test.js
```

Expected: 8 passed

- [ ] **Step 6 : Lancer la suite complète**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 7 : Commit**

```bash
git add src/config/db.js src/utils/syncQueue.js src/config/__tests__/db.test.js
git commit -m "feat(offline): couche db — proxy Supabase/Dexie + stub syncQueue"
```

---

## Task 4 — SyncQueue

**Files:**
- Create: `src/utils/syncQueue.js`
- Create: `src/utils/__tests__/syncQueue.test.js`

**Interfaces:**
- Consomme: `localDb` de `src/config/localDb.js` ; `supabase` de `src/config/supabase.js`
- Produit: `enqueueOperation(table, operation, payload)`, `syncAll()`, `getSyncErrors()`, `retrySync()`

- [ ] **Step 1 : Écrire le test**

```js
// src/utils/__tests__/syncQueue.test.js
import 'fake-indexeddb/auto';

vi.mock('../../config/supabase', () => ({
  supabase: { from: vi.fn(), rpc: vi.fn() },
}));
vi.mock('../../config/localDb', async () => {
  const { localDb } = await import('../../config/localDb');
  return { localDb };
});

import { enqueueOperation, syncAll, getSyncErrors } from '../syncQueue';
import { localDb } from '../../config/localDb';
import { supabase } from '../../config/supabase';

const makeUpsertChain = (result) => {
  const c = { upsert: vi.fn(), insert: vi.fn(), update: vi.fn(), eq: vi.fn() };
  c.upsert.mockReturnValue({ then: (r) => Promise.resolve(result).then(r) });
  c.insert.mockReturnValue({ then: (r) => Promise.resolve(result).then(r) });
  c.update.mockReturnValue({ eq: vi.fn().mockReturnValue({ then: (r) => Promise.resolve(result).then(r) }) });
  return c;
};

describe('SyncQueue', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    await localDb.sync_queue.clear();
  });

  it('enqueueOperation ajoute une entrée pending dans sync_queue', async () => {
    await enqueueOperation('characters', 'upsert', { id: 'c1', nom: 'Mab' });
    const all = await localDb.sync_queue.toArray();
    expect(all).toHaveLength(1);
    expect(all[0].table_name).toBe('characters');
    expect(all[0].status).toBe('pending');
  });

  it('syncAll rejoue les opérations pending et les supprime', async () => {
    supabase.from.mockReturnValue(makeUpsertChain({ data: { id: 'c1' }, error: null }));
    await localDb.sync_queue.add({
      table_name: 'characters', operation: 'upsert',
      payload: { id: 'c1', nom: 'Mab' },
      timestamp: Date.now(), attempts: 0, status: 'pending',
    });
    await syncAll();
    const remaining = await localDb.sync_queue.toArray();
    expect(remaining).toHaveLength(0);
    expect(supabase.from).toHaveBeenCalledWith('characters');
  });

  it('syncAll incrémente attempts en cas d\'échec', async () => {
    supabase.from.mockReturnValue(makeUpsertChain({ data: null, error: { message: 'Network error' } }));
    await localDb.sync_queue.add({
      table_name: 'characters', operation: 'upsert',
      payload: { id: 'c1' },
      timestamp: Date.now(), attempts: 0, status: 'pending',
    });
    await syncAll();
    const entries = await localDb.sync_queue.toArray();
    expect(entries[0].attempts).toBe(1);
    expect(entries[0].status).toBe('pending');
  });

  it('syncAll passe en failed après 3 tentatives', async () => {
    supabase.from.mockReturnValue(makeUpsertChain({ data: null, error: { message: 'error' } }));
    await localDb.sync_queue.add({
      table_name: 'bug_reports', operation: 'insert',
      payload: { title: 'Bug' },
      timestamp: Date.now(), attempts: 2, status: 'pending',
    });
    await syncAll();
    const entries = await localDb.sync_queue.toArray();
    expect(entries[0].status).toBe('failed');
  });

  it('getSyncErrors retourne les entrées failed', async () => {
    await localDb.sync_queue.add({
      table_name: 'characters', operation: 'upsert',
      payload: {}, timestamp: Date.now(), attempts: 3, status: 'failed',
    });
    const errors = await getSyncErrors();
    expect(errors).toHaveLength(1);
    expect(errors[0].status).toBe('failed');
  });
});
```

- [ ] **Step 2 : Vérifier que les tests échouent**

```bash
npm test -- --run src/utils/__tests__/syncQueue.test.js
```

Expected: FAIL — "Cannot find module '../syncQueue'"

- [ ] **Step 3 : Créer `src/utils/syncQueue.js`**

```js
// src/utils/syncQueue.js
import { supabase } from '../config/supabase';
import { localDb } from '../config/localDb';

const MAX_ATTEMPTS = 3;

export async function enqueueOperation(table, operation, payload) {
  await localDb.sync_queue.add({
    table_name: table,
    operation,
    payload,
    timestamp: Date.now(),
    attempts: 0,
    status: 'pending',
  });
}

async function executeOperation(entry) {
  const { table_name, operation, payload } = entry;
  const { _filters, ...data } = payload;

  switch (operation) {
    case 'upsert': {
      const { error } = await supabase.from(table_name).upsert(data);
      return error;
    }
    case 'insert': {
      const { error } = await supabase.from(table_name).insert([data]);
      return error;
    }
    case 'update': {
      if (!_filters || Object.keys(_filters).length === 0) {
        return { message: 'update sans filtre — opération ignorée' };
      }
      let query = supabase.from(table_name).update(data);
      for (const [col, val] of Object.entries(_filters)) {
        query = query.eq(col, val);
      }
      const { error } = await query;
      return error;
    }
    default:
      return { message: `Opération inconnue: ${operation}` };
  }
}

export async function syncAll() {
  const pending = await localDb.sync_queue
    .where('status').equals('pending')
    .sortBy('timestamp');

  for (const entry of pending) {
    const error = await executeOperation(entry);
    if (!error) {
      await localDb.sync_queue.delete(entry.id);
    } else {
      const newAttempts = (entry.attempts || 0) + 1;
      await localDb.sync_queue.update(entry.id, {
        attempts: newAttempts,
        status: newAttempts >= MAX_ATTEMPTS ? 'failed' : 'pending',
      });
    }
  }
}

export async function getSyncErrors() {
  return localDb.sync_queue.where('status').equals('failed').toArray();
}

export async function retrySync() {
  // Remettre les entrées failed en pending pour une nouvelle tentative
  await localDb.sync_queue.where('status').equals('failed').modify({ status: 'pending', attempts: 0 });
  return syncAll();
}

// Démarrer l'écoute du retour en ligne
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    syncAll().catch(e => console.warn('[syncQueue] syncAll échoué:', e));
  });
}
```

- [ ] **Step 4 : Vérifier que les tests passent**

```bash
npm test -- --run src/utils/__tests__/syncQueue.test.js
```

Expected: 5 passed

- [ ] **Step 5 : Lancer la suite complète**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 6 : Commit**

```bash
git add src/utils/syncQueue.js src/utils/__tests__/syncQueue.test.js
git commit -m "feat(offline): SyncQueue — file de mutations + replay au retour en ligne"
```

---

## Task 5 — OfflineStatusProvider + OfflineBanner

**Files:**
- Create: `src/context/OfflineStatusContext.js`
- Create: `src/components/OfflineBanner.jsx`
- Modify: `src/index.jsx` (wrapping)
- Modify: `src/App.js` (bannière + guards doux)

**Interfaces:**
- Consomme: `syncAll`, `getSyncErrors`, `retrySync` de `src/utils/syncQueue.js` ; `db.setUserId()` de `src/config/db.js`
- Produit: `useOfflineStatus()` → `{ isOnline, isSyncing, syncErrors, retrySync, hasCachedData }`

- [ ] **Step 1 : Créer `src/context/OfflineStatusContext.js`**

```js
// src/context/OfflineStatusContext.js
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { syncAll, getSyncErrors, retrySync as retrySyncFn } from '../utils/syncQueue';
import { localDb } from '../config/localDb';

const OfflineStatusContext = createContext({
  isOnline: true,
  isSyncing: false,
  syncErrors: [],
  retrySync: () => {},
  hasCachedData: false,
});

export function OfflineStatusProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncErrors, setSyncErrors] = useState([]);
  const [hasCachedData, setHasCachedData] = useState(false);

  // Vérifier si des données sont en cache (au moins un dataset game_data)
  useEffect(() => {
    localDb.game_data.count().then(n => setHasCachedData(n > 0)).catch(() => {});
  }, []);

  const handleOnline = useCallback(async () => {
    setIsOnline(true);
    setIsSyncing(true);
    try {
      await syncAll();
    } finally {
      const errors = await getSyncErrors();
      setSyncErrors(errors);
      setIsSyncing(false);
      setHasCachedData(true);
    }
  }, []);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
  }, []);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnline, handleOffline]);

  const retrySync = useCallback(async () => {
    setIsSyncing(true);
    try {
      await retrySyncFn();
      const errors = await getSyncErrors();
      setSyncErrors(errors);
    } finally {
      setIsSyncing(false);
    }
  }, []);

  return (
    <OfflineStatusContext.Provider value={{ isOnline, isSyncing, syncErrors, retrySync, hasCachedData }}>
      {children}
    </OfflineStatusContext.Provider>
  );
}

export function useOfflineStatus() {
  return useContext(OfflineStatusContext);
}
```

- [ ] **Step 2 : Créer `src/components/OfflineBanner.jsx`**

```jsx
// src/components/OfflineBanner.jsx
import React, { useEffect, useState } from 'react';
import { useOfflineStatus } from '../context/OfflineStatusContext';
import { Wifi, WifiOff, RefreshCw, AlertTriangle } from '../config/icons';

export default function OfflineBanner() {
  const { isOnline, isSyncing, syncErrors, retrySync } = useOfflineStatus();
  const [showSyncDone, setShowSyncDone] = useState(false);
  const prevSyncing = React.useRef(false);

  useEffect(() => {
    if (prevSyncing.current && !isSyncing && isOnline && syncErrors.length === 0) {
      setShowSyncDone(true);
      const t = setTimeout(() => setShowSyncDone(false), 3000);
      return () => clearTimeout(t);
    }
    prevSyncing.current = isSyncing;
  }, [isSyncing, isOnline, syncErrors.length]);

  if (isOnline && !isSyncing && !showSyncDone && syncErrors.length === 0) return null;

  if (syncErrors.length > 0) {
    return (
      <div className="bg-red-600 text-white text-sm px-4 py-2 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2">
          <AlertTriangle size={14} />
          {syncErrors.length} modification{syncErrors.length > 1 ? 's' : ''} n'ont pas pu être envoyées
        </span>
        <button onClick={retrySync} className="underline font-bold hover:no-underline">
          Réessayer
        </button>
      </div>
    );
  }

  if (isSyncing) {
    return (
      <div className="bg-blue-600 text-white text-sm px-4 py-2 flex items-center gap-2">
        <RefreshCw size={14} className="animate-spin" />
        Retour en ligne — synchronisation en cours…
      </div>
    );
  }

  if (!isOnline) {
    return (
      <div className="bg-amber-600 text-white text-sm px-4 py-2 flex items-center gap-2">
        <WifiOff size={14} />
        Hors ligne — vos modifications sont sauvegardées localement
      </div>
    );
  }

  // showSyncDone
  return (
    <div className="bg-green-600 text-white text-sm px-4 py-2 flex items-center gap-2">
      <Wifi size={14} />
      Synchronisation terminée
    </div>
  );
}
```

- [ ] **Step 3 : Envelopper l'app dans OfflineStatusProvider dans `src/index.jsx`**

Modifier `src/index.jsx` — ajouter l'import et le wrapper autour de `<App />` :

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { ForgeProvider } from './context/ForgeContext';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GameDataProvider } from './context/GameDataContext';
import { OfflineStatusProvider } from './context/OfflineStatusContext';
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    window.__pwaUpdateAvailable = true;
    window.dispatchEvent(new Event('pwa-update-available'));
  },
  onOfflineReady() {
    console.log('[PWA] Prête pour utilisation hors ligne');
  },
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10 * 60 * 1000, gcTime: 30 * 60 * 1000 } }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <OfflineStatusProvider>
        <GameDataProvider>
          <CharacterProvider>
            <ForgeProvider>
              <App />
            </ForgeProvider>
          </CharacterProvider>
        </GameDataProvider>
      </OfflineStatusProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
```

- [ ] **Step 4 : Ajouter `<OfflineBanner />` dans `src/App.js`**

Trouver le rendu principal (après les gardes `globalLoading` et `isRecoveryMode`) et ajouter la bannière en haut du JSX principal. Chercher le return qui commence après `if (isRecoveryMode)` et ajouter après la première balise racine :

```jsx
// En haut du fichier, ajouter :
import OfflineBanner from './components/OfflineBanner';

// Dans le JSX principal (après les guards), ajouter avant <BackgroundDecor> ou avant le header :
<>
  <OfflineBanner />
  {/* ... reste du JSX existant inchangé ... */}
</>
```

- [ ] **Step 5 : Vérifier visuellement**

Démarrer le dev server :

```bash
npm run dev
```

Dans les DevTools navigateur → onglet Network → cocher "Offline". La bannière ambre doit apparaître. Décocher → la bannière doit disparaître après 3s.

- [ ] **Step 6 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 7 : Commit**

```bash
git add src/context/OfflineStatusContext.js src/components/OfflineBanner.jsx src/index.jsx src/App.js
git commit -m "feat(offline): OfflineStatusProvider + bannière réseau"
```

---

## Task 6 — Cache du game data (`useGameData`)

**Files:**
- Modify: `src/hooks/useGameData.js`
- Modify: `src/utils/supabaseGameData.js` (ajouter cache Dexie en background)

**Interfaces:**
- Consomme: `localDb` de `src/config/localDb.js` ; `db` de `src/config/db.js`
- Produit: `useGameData` — même signature qu'avant, retourne données depuis Dexie si offline

- [ ] **Step 1 : Modifier `src/hooks/useGameData.js`**

La fonction `queryFn` doit : (1) si offline → lire depuis `localDb.game_data` pour chaque dataset, (2) si online → appeler Supabase comme avant, puis écrire dans Dexie en background.

```js
import { useQuery } from '@tanstack/react-query';
import { APP_VERSION } from '../version';
import {
    loadProfils, loadBadges, loadCompetences, loadFairyTypes,
    getCompetencesFutiles, loadSocialItems, loadEncyclopediaRefs, loadSorts
} from '../utils/supabaseGameData';
import { localDb } from '../config/localDb';

async function loadFromDexie() {
  const keys = ['profils', 'badges', 'competences', 'fairy_types', 'competences_futiles', 'social_items', 'encyclopedia_refs', 'sorts'];
  const entries = await Promise.all(keys.map(k => localDb.game_data.get(k)));
  const map = {};
  keys.forEach((k, i) => { map[k] = entries[i]?.data ?? []; });
  return map;
}

async function writeToLocalDb(data) {
  const { profils, badges, competences, competencesParProfil, competencesFutiles,
          fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs, sorts } = data;
  await Promise.all([
    localDb.game_data.put({ key: 'profils', data: profils }),
    localDb.game_data.put({ key: 'badges', data: badges }),
    localDb.game_data.put({ key: 'competences', data: { competences, competencesParProfil } }),
    localDb.game_data.put({ key: 'fairy_types', data: { fairyData, fairyTypes, fairyTypesByAge } }),
    localDb.game_data.put({ key: 'competences_futiles', data: competencesFutiles }),
    localDb.game_data.put({ key: 'social_items', data: socialItems }),
    localDb.game_data.put({ key: 'encyclopedia_refs', data: encyclopediaRefs }),
    localDb.game_data.put({ key: 'sorts', data: sorts }),
    localDb.meta.put({ key: 'game_data', lastSync: Date.now() }),
  ]);
}

export function useGameData(enabled = true) {
  return useQuery({
    queryKey: ['gameData', APP_VERSION],
    queryFn: async () => {
      if (!navigator.onLine) {
        const map = await loadFromDexie();
        const c = map['competences'] || {};
        const f = map['fairy_types'] || {};
        return {
          profils: map['profils'],
          badges: map['badges'],
          competences: c.competences ?? [],
          competencesParProfil: c.competencesParProfil ?? {},
          competencesFutiles: map['competences_futiles'],
          fairyData: f.fairyData ?? [],
          fairyTypes: f.fairyTypes ?? [],
          fairyTypesByAge: f.fairyTypesByAge ?? {},
          socialItems: map['social_items'],
          encyclopediaRefs: map['encyclopedia_refs'],
          sorts: map['sorts'],
        };
      }

      const t0 = performance.now();
      const [
        profils, badges,
        { competences, competencesParProfil },
        { fairyData, fairyTypes, fairyTypesByAge },
        competencesFutiles, socialItems, encyclopediaRefs, sorts
      ] = await Promise.all([
        loadProfils(), loadBadges(), loadCompetences(), loadFairyTypes(),
        getCompetencesFutiles(true), loadSocialItems(), loadEncyclopediaRefs(), loadSorts()
      ]);

      const result = {
        profils, badges, competences, competencesParProfil, competencesFutiles,
        fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs, sorts
      };

      // Remplissage Dexie en background (fire & forget)
      writeToLocalDb(result).catch(e => console.warn('[useGameData] cache Dexie échoué:', e));

      return result;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    enabled,
    retry: 2,
  });
}
```

- [ ] **Step 2 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed (useGameData n'a pas de test direct, mais les tests existants ne doivent pas casser)

- [ ] **Step 3 : Commit**

```bash
git add src/hooks/useGameData.js
git commit -m "feat(offline): useGameData — remplissage Dexie + lecture offline"
```

---

## Task 7 — Auth offline (`useAppInit`)

**Files:**
- Modify: `src/hooks/useAppInit.js`

**Interfaces:**
- Consomme: `db` de `src/config/db.js`
- Produit: `useAppInit()` — même signature, fonctionne offline via Dexie.auth_session

- [ ] **Step 1 : Modifier `src/hooks/useAppInit.js`**

Remplacer les 4 occurrences de `supabase` par `db` (sauf `onAuthStateChange` qui reste sur supabase car en ligne uniquement) :

```js
// src/hooks/useAppInit.js
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../config/supabase';
import { db } from '../config/db';
import { useAutoUpdate } from './useAutoUpdate';
import { useGameData } from './useGameData';

export function useAppInit() {
    const [session, setSession] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [globalLoading, setGlobalLoading] = useState(true);
    const [loadingStep, setLoadingStep] = useState('Démarrage...');
    const [profileLoaded, setProfileLoaded] = useState(false);
    const [initTrigger, setInitTrigger] = useState(0);
    const [isRecoveryMode, setIsRecoveryMode] = useState(false);
    const isInitializingRef = useRef(false);
    const sessionRef = useRef(null);

    const { updateAvailable, applyUpdate } = useAutoUpdate(60000);
    const { isSuccess: gameDataLoaded } = useGameData(!!session);

    useEffect(() => {
        if (!profileLoaded) return;
        if (!session || gameDataLoaded) setGlobalLoading(false);
    }, [profileLoaded, session, gameDataLoaded]);

    useEffect(() => {
        if (isInitializingRef.current) return;
        let mounted = true;
        isInitializingRef.current = true;

        const safetyTimer = setTimeout(() => {
            if (mounted) {
                setGlobalLoading(false);
                isInitializingRef.current = false;
            }
        }, 30000);

        const initializeApp = async () => {
            try {
                setLoadingStep("Vérification connexion...");
                // db.auth.getSession lit depuis Dexie si offline
                const { data: { session: activeSession } } = await db.auth.getSession();

                if (!activeSession) {
                    if (mounted) setProfileLoaded(true);
                    isInitializingRef.current = false;
                    return;
                }

                setLoadingStep("Allumage du Noyau...");
                // db.from('profiles') lit depuis Dexie si offline
                const { data: profileData } = await db.from('profiles')
                    .select('*')
                    .eq('id', activeSession.user.id)
                    .single();

                if (!mounted) { isInitializingRef.current = false; return; }

                if (profileData) {
                    setSession(activeSession);
                    sessionRef.current = activeSession;
                    setUserProfile(profileData);
                    db.setUserId(activeSession.user.id);
                    // Mettre en cache le profil pour les prochaines sessions offline
                    db.cacheProfile(activeSession.user.id, profileData).catch(() => {});
                }
                if (mounted) setProfileLoaded(true);
                isInitializingRef.current = false;
            } catch (e) {
                console.error('useAppInit error:', e);
                if (mounted) setProfileLoaded(true);
                isInitializingRef.current = false;
            } finally {
                clearTimeout(safetyTimer);
            }
        };

        initializeApp();

        // onAuthStateChange reste sur supabase direct (temps réel, non nécessaire offline)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
            if (!mounted) return;
            if (event === 'SIGNED_OUT') {
                setSession(null);
                setUserProfile(null);
                sessionRef.current = null;
                db.setUserId(null);
                return;
            }
            if (newSession && newSession.access_token !== sessionRef.current?.access_token) {
                sessionRef.current = newSession;
                setSession(newSession);
                // Rafraîchir le profil en ligne
                if (navigator.onLine) {
                    supabase.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', newSession.user.id).then();
                    const { data: profile } = await supabase.from('profiles').select('*').eq('id', newSession.user.id).single();
                    if (profile && mounted) {
                        setUserProfile(profile);
                        db.setUserId(newSession.user.id);
                        db.cacheProfile(newSession.user.id, profile).catch(() => {});
                    }
                }
            }
        });

        return () => {
            mounted = false;
            clearTimeout(safetyTimer);
            subscription?.unsubscribe();
        };
    }, [initTrigger]);

    const refreshUserProfile = async () => {
        if (!session || !navigator.onLine) return;
        const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        if (data) {
            setUserProfile(data);
            db.cacheProfile(session.user.id, data).catch(() => {});
        }
    };

    return { session, userProfile, refreshUserProfile, globalLoading, loadingStep, updateAvailable, applyUpdate, isRecoveryMode };
}
```

- [ ] **Step 2 : Lancer les tests**

```bash
npm test -- --run src/hooks/__tests__/useAppInit.test.js
```

Expected: tous passent (les tests mockent déjà `supabase` — vérifier qu'ils mockent aussi `db` si nécessaire ; si des tests échouent à cause de l'import `db`, ajouter `vi.mock('../../config/db', () => ({ db: { auth: { getSession: vi.fn(), onAuthStateChange: vi.fn() }, from: vi.fn(), setUserId: vi.fn(), cacheProfile: vi.fn() } }))` en tête du test)

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 3 : Commit**

```bash
git add src/hooks/useAppInit.js
git commit -m "feat(offline): useAppInit — auth depuis Dexie.auth_session si hors ligne"
```

---

## Task 8 — Fiches de personnage offline (`supabaseStorage`)

**Files:**
- Modify: `src/utils/supabaseStorage.js`

**Interfaces:**
- Consomme: `db` de `src/config/db.js` ; `localDb` de `src/config/localDb.js`
- Produit: `getUserCharacters(userId)` et `saveCharacterToSupabase(character, userId)` fonctionnent offline

- [ ] **Step 1 : Modifier `getUserCharacters` dans `src/utils/supabaseStorage.js`**

Trouver la fonction `getUserCharacters` et la remplacer pour lire depuis Dexie si offline. Ajouter l'import `db` et `localDb` en tête du fichier (après l'import `supabase` existant) :

```js
// Ajouter après les imports existants :
import { db } from '../config/db';
import { localDb } from '../config/localDb';
```

Remplacer `getUserCharacters` (trouver la définition et remplacer son corps) :

```js
export const getUserCharacters = async (userId) => {
    if (!navigator.onLine) {
        const chars = await localDb.characters.where('user_id').equals(userId).toArray();
        return chars;
    }
    try {
        const { data, error } = await supabase
            .from('characters')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        if (error) throw error;
        // Mettre en cache dans Dexie
        if (data) {
            await Promise.all(data.map(c => localDb.characters.put(c))).catch(() => {});
        }
        return data || [];
    } catch (error) {
        console.error('Erreur chargement personnages:', error);
        return [];
    }
};
```

- [ ] **Step 2 : Modifier `saveCharacterToSupabase`**

Trouver `saveCharacterToSupabase` et envelopper son body : si offline, utiliser `db.from('characters').upsert()` (qui enqueue). Ajouter juste avant la logique d'upsert existante :

```js
export const saveCharacterToSupabase = async (character, userId) => {
    // ... garder la logique existante de préparation du payload (computeXpDepense, etc.) ...
    
    // En bas, là où l'upsert Supabase est fait, remplacer par :
    if (!navigator.onLine) {
        // Upsert offline : Dexie + sync_queue
        const { data, error } = await db.from('characters').upsert(characterData);
        if (error) throw error;
        return data;
    }
    // En ligne : upsert Supabase + cache Dexie
    const { data, error } = await supabase.from('characters').upsert(characterData).select().single();
    if (error) throw error;
    await localDb.characters.put(data).catch(() => {});
    return data;
};
```

> **Note :** Lire `saveCharacterToSupabase` en entier avant de modifier — la fonction fait plusieurs opérations (calcul xp_depense, syncXpTransactionsTable, etc.). Seule la partie finale upsert doit changer ; le reste reste inchangé.

- [ ] **Step 3 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 4 : Commit**

```bash
git add src/utils/supabaseStorage.js
git commit -m "feat(offline): getUserCharacters + saveCharacterToSupabase via Dexie si hors ligne"
```

---

## Task 9 — Grimoire offline (`useGrimoire`)

**Files:**
- Modify: `src/hooks/useGrimoire.js`

**Interfaces:**
- Consomme: `db` de `src/config/db.js`
- Produit: `useGrimoire()` — lecture depuis Dexie.user_data si offline ; insertions en queue

- [ ] **Step 1 : Modifier `src/hooks/useGrimoire.js`**

Remplacer `import { supabase }` par `import { db }` et adapter `fetchGrimoire`, `addNote`, `updateNote`, `deleteNote`.

```js
// src/hooks/useGrimoire.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../config/db';
import { showInAppNotification } from '../utils/SystemeServices';

export function useGrimoire(characterId, cercleId, playerId, isAdmin = false) {
  const [notes, setNotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [possessions, setPossessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);
  useEffect(() => () => { mountedRef.current = false; }, []);

  const fetchGrimoire = useCallback(async () => {
    if (!characterId) return;
    setLoading(true);

    let query = db.from('heritier_notes')
      .select('id, type, is_shared, player_id, content, created_at, character_id, cercle_id');

    if (isAdmin) {
      query = query.eq('character_id', characterId);
    } else if (cercleId) {
      query = query.or(`character_id.eq.${characterId},cercle_id.eq.${cercleId}`);
    } else {
      query = query.eq('character_id', characterId);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (!mountedRef.current) return;
    if (error) {
      showInAppNotification("Les fluides éthérés refusent l'accès au Grimoire.", "error");
    } else if (data) {
      // Mettre en cache dans Dexie si online
      if (navigator.onLine && playerId) {
        db.cacheUserData('heritier_notes', playerId, data).catch(() => {});
      }
      setNotes(data.filter(n => n.type === 'note'));
      setContacts(data.filter(n => n.type === 'contact'));
      setPossessions(data.filter(n => n.type === 'possession'));
    }
    setLoading(false);
  }, [characterId, cercleId, isAdmin, playerId]);

  useEffect(() => { fetchGrimoire(); }, [fetchGrimoire]);

  const toggleShare = async (noteId, currentShareState) => {
    if (!cercleId) {
      showInAppNotification("Partage impossible : vous n'êtes rattaché à aucun Cercle.", "warning");
      return;
    }
    const { error } = await db.from('heritier_notes')
      .update({ is_shared: !currentShareState, cercle_id: !currentShareState ? cercleId : null })
      .eq('id', noteId);
    if (!error) fetchGrimoire();
  };

  const addNote = async (type, content, extraFields = {}) => {
    if (!characterId || !playerId) return;
    const newNote = { character_id: characterId, player_id: playerId, type, content, is_shared: false, ...extraFields };
    const { error } = await db.from('heritier_notes').insert([newNote]);
    if (error) {
      showInAppNotification("Erreur lors de l'ajout.", "error");
    } else {
      fetchGrimoire();
    }
  };

  const updateNote = async (noteId, updates) => {
    const { error } = await db.from('heritier_notes').update(updates).eq('id', noteId);
    if (!error) fetchGrimoire();
  };

  const deleteNote = async (noteId) => {
    // Les deletes ne sont pas supportés offline — garder supabase direct
    if (!navigator.onLine) {
      showInAppNotification("Suppression impossible hors ligne.", "warning");
      return;
    }
    const { supabase } = await import('../config/supabase');
    const { error } = await supabase.from('heritier_notes').delete().eq('id', noteId);
    if (!error) fetchGrimoire();
  };

  return { notes, contacts, possessions, loading, fetchGrimoire, toggleShare, addNote, updateNote, deleteNote };
}
```

- [ ] **Step 2 : Lancer les tests useGrimoire**

```bash
npm test -- --run src/hooks/__tests__/useGrimoire.test.js
```

Si des tests échouent car ils mockent `supabase` mais le hook importe maintenant `db`, ajouter en tête du test :

```js
vi.mock('../../config/db', () => ({
  db: {
    from: vi.fn(),
    cacheUserData: vi.fn().mockResolvedValue(undefined),
    setUserId: vi.fn(),
  },
}));
```

Et remplacer `supabase.from` par `db.from` dans les assertions du test.

- [ ] **Step 3 : Lancer la suite complète**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 4 : Commit**

```bash
git add src/hooks/useGrimoire.js
git commit -m "feat(offline): useGrimoire — lecture Dexie + insertions en queue"
```

---

## Task 10 — Données lecture-seule offline (carte, chroniques, sessions)

**Files:**
- Modify: `src/hooks/useMapPoints.js`
- Modify: `src/hooks/useChroniques.js`
- Modify: `src/hooks/useSessionsJeu.js`

**Interfaces:**
- Consomme: `db` de `src/config/db.js`
- Produit: les trois hooks lisent depuis Dexie si offline (lecture seule — pas d'écriture offline pour ces tables)

- [ ] **Step 1 : Modifier `src/hooks/useMapPoints.js`**

Remplacer `import { supabase }` par `import { db }` et adapter `fetch` :

```js
// src/hooks/useMapPoints.js
import { useState, useEffect, useCallback } from 'react';
import { db } from '../config/db';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export function useMapPoints() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await db.from('map_points')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      if (data && navigator.onLine) {
        // Mettre en cache
        db.cacheUserData('map_points', 'global', data).catch(() => {});
      }
      setPoints(data || []);
    } catch {
      showInAppNotification('Erreur de chargement de la carte', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  // Les mutations (addPoint, updatePoint, deletePoint) restent sur supabase direct
  // car map_points n'est pas dans WRITABLE_TABLES (admin only)
  const addPoint = useCallback(async (point) => {
    if (!navigator.onLine) {
      showInAppNotification('Ajout de point impossible hors ligne.', 'warning');
      return;
    }
    const { data, error } = await supabase.from('map_points').insert(point).select().single();
    if (error) throw error;
    setPoints(prev => [data, ...prev]);
    return data;
  }, []);

  const updatePoint = useCallback(async (id, updates) => {
    if (!navigator.onLine) {
      showInAppNotification('Modification impossible hors ligne.', 'warning');
      return;
    }
    const { data, error } = await supabase.from('map_points').update(updates).eq('id', id).select().single();
    if (error) throw error;
    setPoints(prev => prev.map(p => p.id === id ? data : p));
    return data;
  }, []);

  const deletePoint = useCallback(async (id) => {
    if (!navigator.onLine) {
      showInAppNotification('Suppression impossible hors ligne.', 'warning');
      return;
    }
    const { error } = await supabase.from('map_points').delete().eq('id', id);
    if (error) throw error;
    setPoints(prev => prev.filter(p => p.id !== id));
  }, []);

  return { points, loading, addPoint, updatePoint, deletePoint, refresh: fetch };
}
```

- [ ] **Step 2 : Modifier `src/hooks/useChroniques.js`**

Remplacer la lecture dans `load()` par `db.from()` et mettre en cache :

```js
// src/hooks/useChroniques.js — modifier uniquement la fonction load()
import { db } from '../config/db';
// garder l'import supabase pour les mutations (createChronique, etc.)
import { supabase } from '../config/supabase';

// Dans load() :
const load = useCallback(async () => {
  if (!characterId) return;
  setLoading(true);
  try {
    const [{ data: chron, error: e1 }, { data: ombs, error: e2 }] = await Promise.all([
      db.from('chroniques_heritiers')
        .select('*, sessions_jeu(id, titre, date_partie)')
        .eq('character_id', characterId)
        .order('date_session', { ascending: false }),
      db.from('ombre_consequences')
        .select('*, sessions_jeu(id, titre)')
        .eq('character_id', characterId)
        .order('created_at', { ascending: false }),
    ]);
    if (e1) throw e1;
    if (e2) throw e2;
    // Mise en cache si online
    if (navigator.onLine) {
      db.cacheUserData('chroniques_heritiers', characterId, chron || []).catch(() => {});
      db.cacheUserData('ombre_consequences', characterId, ombs || []).catch(() => {});
    }
    setChroniques(chron || []);
    setOmbres(ombs || []);
  } catch (err) {
    showInAppNotification('Erreur de chargement des Chroniques : ' + translateError(err), 'error');
  } finally {
    setLoading(false);
  }
}, [characterId]);
```

- [ ] **Step 3 : Modifier `src/hooks/useSessionsJeu.js`**

Même pattern — remplacer la lecture dans `load()` par `db.from()` :

```js
// src/hooks/useSessionsJeu.js — modifier uniquement load()
import { db } from '../config/db';
import { supabase } from '../config/supabase';

const load = useCallback(async () => {
  if (!cercleId) return;
  setLoading(true);
  try {
    const { data, error } = await db.from('sessions_jeu')
      .select('*, session_presents(character_id, present)')
      .eq('cercle_id', cercleId)
      .order('date_partie', { ascending: false });
    if (error) throw error;
    if (data && navigator.onLine) {
      db.cacheUserData('sessions_jeu', cercleId, data).catch(() => {});
    }
    setSessions(data || []);
  } catch (err) {
    showInAppNotification('Erreur chargement des parties : ' + err.message, 'error');
  } finally {
    setLoading(false);
  }
}, [cercleId]);
```

- [ ] **Step 4 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 5 : Commit**

```bash
git add src/hooks/useMapPoints.js src/hooks/useChroniques.js src/hooks/useSessionsJeu.js
git commit -m "feat(offline): carte + chroniques + sessions — lecture depuis Dexie si hors ligne"
```

---

## Task 11 — Bureau des Anomalies offline (`BureauAnomalies`)

**Files:**
- Modify: `src/components/BureauAnomalies.js`

**Interfaces:**
- Consomme: `db` de `src/config/db.js`
- Produit: `fetchReports` lit depuis Dexie ; `handleSubmit` enqueue si offline

- [ ] **Step 1 : Modifier `src/components/BureauAnomalies.js`**

Remplacer `import { supabase }` par `import { db }` et `import { supabase }`. Adapter `fetchReports` et `handleSubmit` :

```js
// BureauAnomalies.js — modifier ces deux fonctions seulement

import { db } from '../config/db';
import { supabase } from '../config/supabase';  // garder pour isSuperAdmin RPC

const fetchReports = async () => {
  const { data, error } = await db.from('bug_reports')
    .select('*, profiles(username)')
    .or(`is_confidential.eq.false,user_id.eq.${userProfile.id}`)
    .order('created_at', { ascending: false });

  if (error || !data) return;

  // Mise en cache
  if (navigator.onLine) {
    db.cacheUserData('bug_reports', userProfile.id, data).catch(() => {});
  }

  if (isSuperAdmin(userProfile) && navigator.onLine) {
    const { data: adminUsers } = await supabase.rpc('get_admin_users');
    if (adminUsers) {
      const emailMap = {};
      adminUsers.forEach(u => { emailMap[u.id] = u.email; });
      setReports(data.map(r => ({ ...r, _reporterEmail: emailMap[r.user_id] || null })));
      return;
    }
  }
  setReports(data);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!title.trim() || !description.trim()) return;
  setLoading(true);

  if (!navigator.onLine) {
    showInAppNotification("Anomalie mise en attente — elle sera transmise dès le retour en ligne.", "info");
  }

  const { error } = await db.from('bug_reports').insert([{
    user_id: userProfile.id,
    title,
    description,
    status: 'Signalé',
    is_confidential: isConfidential,
    version_app: '17.10.1',
    community_weight: []
  }]);

  setLoading(false);
  if (error && navigator.onLine) {
    showInAppNotification("Les Gardiens n'ont pas reçu le message.", "error");
  } else {
    showInAppNotification(
      navigator.onLine ? "Anomalie signalée ! Le Bureau enquête." : "Anomalie mise en file — sera envoyée en ligne.",
      "success"
    );
    setTitle('');
    setDescription('');
    setIsConfidential(false);
    fetchReports();
  }
};
```

- [ ] **Step 2 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 3 : Commit**

```bash
git add src/components/BureauAnomalies.js
git commit -m "feat(offline): Bureau des Anomalies — lecture Dexie + signalement en queue"
```

---

## Task 12 — Blocages doux + écran première visite

**Files:**
- Modify: `src/hooks/useTelegraphe.js`
- Modify: `src/App.js` (espace admin + écran première visite)
- Modify: `src/hooks/useFileUpload.js`

**Interfaces:**
- Consomme: `useOfflineStatus()` de `src/context/OfflineStatusContext.js`

- [ ] **Step 1 : Guard Télégraphe dans `src/hooks/useTelegraphe.js`**

Ajouter en tête de chaque fonction publique qui fait un appel réseau, avant tout await :

```js
// Ajouter cet import en tête :
import { useOfflineStatus } from '../context/OfflineStatusContext';

// Dans le hook, ajouter :
const { isOnline } = useOfflineStatus();

// Dans chaque fonction réseau (sendMessage, fetchMessages, etc.) :
if (!isOnline) {
  showInAppNotification('Le Télégraphe nécessite une connexion.', 'warning');
  return;
}
```

> **Note :** Lire `useTelegraphe.js` en entier pour identifier toutes les fonctions qui font des appels réseau. Adapter uniquement celles-là.

- [ ] **Step 2 : Écran "première visite hors ligne" dans `src/App.js`**

Ajouter ce guard juste avant le guard `globalLoading` (donc en premier) :

```jsx
// Ajouter cet import :
import { useOfflineStatus } from './context/OfflineStatusContext';

// Dans le composant App, ajouter après les hooks existants :
const { isOnline, hasCachedData } = useOfflineStatus();

// Premier guard — avant if (globalLoading) :
if (!isOnline && !hasCachedData) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-900 p-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">📜</div>
        <h1 className="text-2xl font-serif font-bold text-amber-200 mb-4">
          Le Grimoire n'est pas encore ouvert
        </h1>
        <p className="text-stone-300 leading-relaxed">
          Votre Grimoire n'a pas encore été chargé. Connectez-vous une première fois en ligne pour activer le mode hors ligne.
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 3 : Guard upload dans `src/hooks/useFileUpload.js`**

Trouver la fonction d'upload et ajouter au début :

```js
// Dans la fonction d'upload (avant tout await) :
if (!navigator.onLine) {
  showInAppNotification("Upload indisponible hors ligne.", "warning");
  return null;
}
```

- [ ] **Step 4 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 5 : Commit**

```bash
git add src/hooks/useTelegraphe.js src/App.js src/hooks/useFileUpload.js
git commit -m "feat(offline): blocages doux Télégraphe/upload + écran première visite sans cache"
```

---

## Task 13 — Prompt mise à jour Service Worker

**Files:**
- Modify: `src/App.js`

**Interfaces:**
- Consomme: événement `pwa-update-available` émis depuis `src/index.jsx` ; `showInAppNotification` de `src/utils/SystemeServices.js`

- [ ] **Step 1 : Ajouter le listener dans `src/App.js`**

Ajouter dans le composant `App`, dans un `useEffect` :

```jsx
// Ajouter après les imports existants :
import { showInAppNotification } from './utils/SystemeServices';

// Dans le composant App (après les hooks existants) :
useEffect(() => {
  const handler = () => {
    showInAppNotification(
      '✨ Nouvelle version disponible — rechargez la page pour l\'appliquer.',
      'info',
      8000  // 8 secondes
    );
  };
  window.addEventListener('pwa-update-available', handler);
  // Vérifier si une mise à jour était déjà disponible avant le montage
  if (window.__pwaUpdateAvailable) handler();
  return () => window.removeEventListener('pwa-update-available', handler);
}, []);
```

- [ ] **Step 2 : Lancer les tests**

```bash
npm test
```

Expected: 549+ passed

- [ ] **Step 3 : Build final et vérification**

```bash
npm run build
ls dist/pwa-sw.js dist/index.html
```

Expected: les deux fichiers existent.

- [ ] **Step 4 : Commit**

```bash
git add src/App.js
git commit -m "feat(offline): prompt mise à jour Service Worker"
```

---

## Vérification finale

Après les 13 tâches, tester les scénarios clés manuellement :

1. **En ligne → Offline :** ouvrir l'app, se connecter, naviguer (générateurs, fiche, grimoire), puis passer en mode Offline dans DevTools → la bannière ambre apparaît, les données restent accessibles.
2. **Offline → Online :** créer une note Grimoire hors ligne → banner bleu de sync → la note apparaît dans Supabase.
3. **Première visite offline :** vider le cache (DevTools > Application > Clear Storage), passer offline, recharger → l'écran "Grimoire non chargé" apparaît.
4. **iOS Safari / Android Chrome :** tester l'ajout à l'écran d'accueil (la bannière native du navigateur doit apparaître sur mobile).
