# Mode Offline Complet — Design Spec

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rendre Les Héritiers entièrement utilisable sans connexion réseau, dès lors que l'app a été ouverte au moins une fois en ligne.

**Architecture:** PWA (Service Worker + Manifest) + Dexie.js (IndexedDB) + couche d'abstraction `db` qui proxy les appels Supabase selon l'état réseau + SyncQueue pour rejouer les mutations offline au retour en ligne.

**Tech Stack:** `vite-plugin-pwa`, `dexie`, `dexie-react-hooks`, React context pour l'état offline, Supabase (inchangé côté serveur).

---

## Global Constraints

- L'API Supabase côté serveur et la structure des tables ne changent pas.
- Aucune migration SQL n'est nécessaire pour ce chantier.
- Les composants existants migrent de `import { supabase }` vers `import { db }` — aucune autre signature ne change.
- La règle absolue worktrees interdits reste en vigueur (AGENTS.md).
- Télégraphe (`useTelegraphe`), espace admin, et upload de fichiers (`supabaseStorage`) sont **exclus** du mode offline — ils restent des appels Supabase directs et affichent un message d'indisponibilité si hors ligne.
- Stratégie de conflit : last-write-wins côté joueur pour la fiche ; merge par `updated_at` pour les notes Grimoire.
- Compatible iOS Safari 16+ et Android Chrome.

---

## Périmètre offline

| Fonctionnalité | Mode offline |
|---|---|
| Fiche de personnage | ✅ Lecture + écriture + sync |
| Générateurs (Poche, Ambiance, Tracas, PNJ, Cabinet, Menu) | ✅ Utilisation complète |
| Encyclopédie | ✅ Lecture |
| Carte de Paris | ✅ Lecture |
| Notes Grimoire personnel | ✅ Lecture + écriture + sync |
| Bureau des Anomalies | ✅ Lecture + soumission en file |
| Cercles (sessions, chroniques) | ✅ Lecture seule |
| Télégraphe / Chat | 🔴 Message "hors ligne" |
| Espace Admin | 🔴 Message "hors ligne" |
| Paramètres de compte | ⏳ Hors scope (chantier futur) |
| Upload de fichiers | 🔴 Bouton grisé offline |

---

## Architecture — 5 couches

```
┌─────────────────────────────────────────┐
│  1. PWA Shell (Service Worker + Manifest)│  ← Cache statique : HTML/JS/CSS/assets
├─────────────────────────────────────────┤
│  2. Dexie.js (IndexedDB)                │  ← Base locale : données de jeu + user data
├─────────────────────────────────────────┤
│  3. db — couche d'abstraction           │  ← Route : Supabase (en ligne) / Dexie (hors ligne)
├─────────────────────────────────────────┤
│  4. SyncQueue                           │  ← File des mutations à rejouer au retour en ligne
├─────────────────────────────────────────┤
│  5. OfflineStatusProvider               │  ← Contexte React : état réseau + sync
└─────────────────────────────────────────┘
```

---

## Couche 1 — PWA Shell

**Paquet :** `vite-plugin-pwa` (intégration native Vite, zéro config supplémentaire).

**Service Worker en mode `generateSW`** : Workbox génère automatiquement le SW à partir du build Vite. Il met en cache :
- Le shell React (index.html, chunks JS/CSS)
- Les assets statiques (images, fonts, icônes)
- Les workers bundlés (@3d-dice/dice-box)

**Stratégie de cache :** `CacheFirst` pour les assets statiques (immutables par hash de build) ; `NetworkFirst` avec fallback cache pour les requêtes de navigation.

**Manifest PWA** (`public/manifest.json`) :
```json
{
  "name": "Les Héritiers",
  "short_name": "Héritiers",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1c1917",
  "theme_color": "#b45309",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

**Icônes à créer :** `public/icon-192.png` et `public/icon-512.png` (logo du jeu aux bonnes dimensions).

---

## Couche 2 — Dexie.js (base locale)

**Fichier :** `src/config/localDb.js`

**6 tables IndexedDB :**

```js
const db = new Dexie('heritiers_offline');
db.version(1).stores({
  game_data:    'key',             // clé = nom du dataset ('fairy_types', 'competences', etc.)
  characters:   'id, user_id, updated_at',
  user_data:    'key, user_id',    // notes Grimoire, bug_reports, cercles, carte
  sync_queue:   '++id, table_name, timestamp, attempts, status',
  auth_session: 'id',             // entrée unique : 'current'
  meta:         'key',            // dernière sync par dataset
});
```

**Contenu de `game_data` :** chaque entrée est un blob JSON correspondant à un dataset de `useGameData` :
- `fairy_types` → résultat de `loadFairyTypes()`
- `competences` → résultat de `loadCompetences()`
- `competences_futiles` → résultat de `getCompetencesFutiles()`
- `social_items` → résultat de `loadSocialItems()`
- `sorts` → résultat de `loadSorts()`
- `profils` → résultat de `loadProfils()`
- `badges` → résultat de `loadBadges()`
- `encyclopedia_refs` → résultat de `loadEncyclopediaRefs()`
- `map_points` → résultat de `useMapPoints` (points carte)

**Contenu de `user_data` :** entrées par `key` composite `{type}_{user_id}` :
- `bug_reports_{uid}` → liste des rapports publics + les siens
- `grimoire_{uid}` → notes personnelles
- `cercles_{uid}` → sessions, chroniques, parties (lecture seule)

**Remplissage :** à chaque démarrage en ligne, `useGameData` écrit en parallèle dans Dexie après avoir reçu les données de Supabase. L'entrée `meta` enregistre le timestamp de la dernière sync pour chaque dataset.

---

## Couche 3 — `db` (couche d'abstraction)

**Fichier :** `src/config/db.js`

`db` est un proxy objet qui expose la même API que `supabase` pour les opérations courantes. Les composants remplacent :

```js
// AVANT
import { supabase } from '../config/supabase';
const { data } = await supabase.from('fairy_types').select('*');

// APRÈS
import { db } from '../config/db';
const { data } = await db.from('fairy_types').select('*');
```

**Routing interne de `db.from(table)` :**

```
db.from(table)
  │
  ├─ navigator.onLine = true
  │    └─ retourne supabase.from(table)  [comportement identique à aujourd'hui]
  │       + après réponse : met à jour Dexie en background (fire & forget)
  │
  └─ navigator.onLine = false
       ├─ table dans READONLY_TABLES  →  lit depuis Dexie.game_data ou Dexie.user_data
       └─ table dans WRITABLE_TABLES  →  lit/écrit dans Dexie + enqueue dans sync_queue
```

**Tables en lecture seule offline** (`READONLY_TABLES`) : toutes les tables de `game_data`, `map_points`, `cercles`, `encyclopedia_refs`.

**Tables en écriture offline** (`WRITABLE_TABLES`) : `characters`, `heritier_notes`, `bug_reports`, `xp_transactions`.

**Tables exclues** (toujours Supabase direct, jamais via `db`) : `chat_channels`, `chat_messages`, tout l'espace admin, `supabaseStorage`. Ces appels restent dans leurs fichiers respectifs avec `supabase` directement — pas de migration.

**`db.auth`** : proxy de `supabase.auth`. En offline, `db.auth.getSession()` lit depuis `Dexie.auth_session` au lieu de faire un appel réseau.

**`db.rpc(fn, params)`** : si en ligne → `supabase.rpc()` ; si hors ligne → résultat depuis Dexie si la RPC est cacheable (ex: `get_admin_users` → `user_data`), sinon retourne `{ data: null, error: { message: 'Hors ligne' } }`.

---

## Couche 4 — SyncQueue

**Fichier :** `src/utils/syncQueue.js`

**Structure d'une entrée :**
```js
{
  id,           // auto-increment Dexie
  table_name,   // 'characters' | 'heritier_notes' | 'bug_reports' | 'xp_transactions'
  operation,    // 'insert' | 'update' | 'upsert' | 'delete'
  payload,      // objet à envoyer à Supabase
  timestamp,    // Date.now() au moment de l'action offline
  attempts,     // nombre de tentatives (max 3)
  status,       // 'pending' | 'failed'
}
```

**Déclenchement de la sync :** écoute de `window.addEventListener('online', syncAll)`. La fonction `syncAll` :
1. Lit toutes les entrées `status: 'pending'` dans l'ordre chronologique
2. Pour chaque entrée, rejoue l'opération sur Supabase
3. Succès → supprime l'entrée de `sync_queue`, rafraîchit Dexie depuis Supabase
4. Échec → incrémente `attempts`. Si `attempts >= 3` → passe à `status: 'failed'`
5. Émet un événement React via `OfflineStatusProvider` pour mettre à jour l'UI

**Résolution de conflits :**

- **Fiche de personnage (`characters`)** : last-write-wins côté joueur. Si Supabase a un `updated_at` plus récent que le payload offline, on applique quand même la version offline et on affiche un toast : *"Ta fiche a été synchronisée. Vérifie les dernières modifications."*
- **Notes Grimoire (`heritier_notes`)** : merge par `updated_at` — la version la plus récente gagne.
- **Anomalies (`bug_reports`)** : insert uniquement (pas d'update offline), pas de conflit possible.
- **Transactions XP (`xp_transactions`)** : insert uniquement, rejouées dans l'ordre chronologique. Si une transaction échoue (solde insuffisant côté serveur), elle passe en `failed` et l'utilisateur est notifié.

**Entrées non-rejouables :** les opérations sur les tables exclues ne sont jamais enqueued — elles sont simplement bloquées avec un retour d'erreur immédiat.

---

## Couche 5 — OfflineStatusProvider

**Fichier :** `src/context/OfflineStatusContext.js`

**Interface exposée :**
```js
const { isOnline, isSyncing, syncErrors, retrySync } = useOfflineStatus();
```

**Bannière globale** (`src/components/OfflineBanner.jsx`) affichée en haut de l'app, sous le header :

| État | Couleur | Message |
|---|---|---|
| Hors ligne | 🟠 Ambre | *"Hors ligne — vos modifications sont sauvegardées localement"* |
| Retour en ligne, sync en cours | 🔵 Bleu | *"Retour en ligne — synchronisation en cours…"* |
| Sync terminée | (disparaît après 3s) | — |
| Erreurs de sync | 🔴 Rouge | *"2 modifications n'ont pas pu être envoyées"* + bouton **Réessayer** |

**Blocage doux des zones offline-incompatibles :**
- `useTelegraphe` → si hors ligne, retourne immédiatement `{ error: 'offline' }` ; l'UI affiche un overlay *"Le Télégraphe nécessite une connexion"*
- Espace admin → `isAdmin && !isOnline` → overlay *"L'espace Gardien nécessite une connexion"*
- `supabaseStorage` → bouton d'upload grisé + tooltip *"Upload indisponible hors ligne"*

**Écran "première visite hors ligne"** : si `Dexie.meta` est vide (aucun cache) et `!isOnline` → remplace le chargement normal par un écran dédié :
> *"Votre Grimoire n'a pas encore été chargé. Connectez-vous une première fois en ligne pour activer le mode hors ligne."*

---

## Migrations de code existant

Les fichiers suivants migrent de `supabase` vers `db` :

**Hooks (lecture + écriture) :**
- `useAppInit.js` — auth + profil
- `useGameData.js` — données de jeu statiques (+ écriture dans Dexie après fetch)
- `useCharacterRepair.js`, `CharacterContext.js` (via `CharacterList`) — fiches
- `useGrimoire.js` — notes
- `useMapPoints.js` — carte
- `useChroniques.js`, `useSessionsJeu.js` — cercles (lecture seule)
- `useCorrectionCheck.js` — lecture seule
- `useIndicesVerites.js` — lecture seule
- Tous les hooks `use*TableEntries.js` (PNJ, Poche, Ambiance, Tracas, Cabinet) — lecture seule offline (les propositions de la communauté nécessitent en ligne)

**Composants :**
- `BureauAnomalies.js` — lecture + insert en queue
- `CharacterList.js` — lecture
- `CarteDeParisPage.jsx` — lecture

**Fichiers qui restent sur `supabase` direct (exclus du mode offline) :**
- `useTelegraphe.js`
- `supabaseStorage.js`
- Tous les fichiers dans `components/admin/`
- `useAccountSettings.js` (chantier futur)
- `useEncyclopedia.js` (édition encyclopédie = admin, hors scope)

---

## Installation de l'app

Aucune installation n'est requise. Le Service Worker s'installe automatiquement à la première visite en ligne. Les navigateurs proposeront optionnellement "Ajouter à l'écran d'accueil" pour une expérience app native (plein écran, icône dédiée). Un toast discret peut suggérer l'installation après la 3e visite.

---

## Dépendances à ajouter

```bash
npm install dexie dexie-react-hooks vite-plugin-pwa workbox-window
```

`vite-plugin-pwa` est ajouté à `vite.config.js`. `dexie` et `dexie-react-hooks` sont importés dans les fichiers concernés. `workbox-window` gère les mises à jour du Service Worker (prompt "Nouvelle version disponible").

---

## Ordre d'implémentation recommandé

1. **PWA Shell** — vite-plugin-pwa + manifest + icônes → app installable, cache statique opérationnel
2. **Dexie schema** — créer `localDb.js` avec les 6 tables
3. **Couche `db`** — proxy Supabase/Dexie, routing, `db.auth`
4. **Remplissage du cache** — modifier `useGameData` pour écrire dans Dexie après chaque fetch Supabase
5. **SyncQueue** — `syncQueue.js` + listener `online`
6. **OfflineStatusProvider + bannière** — contexte React + `OfflineBanner`
7. **Migration hooks lecture seule** — remplacer `supabase` par `db` dans les hooks de lecture
8. **Migration fiches de personnage** — `useCharacterRepair`, `CharacterList` + enqueue XP transactions
9. **Migration notes Grimoire** — `useGrimoire`
10. **Migration Bureau des Anomalies** — `BureauAnomalies`
11. **Migration cercles** — `useChroniques`, `useSessionsJeu`
12. **Blocages doux** — Télégraphe, admin, upload
13. **Écran première visite** — guard si aucun cache + hors ligne
14. **Tests** — couverture des cas online/offline/sync pour les modules critiques
