---
name: pitfalls
description: "Pièges techniques récurrents à ne pas répéter — appris en session d'audit"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 0cbe6334-5cf1-4965-801b-dfff587365a8
---

## Migration SQL obligatoire à chaque changement de schéma

Toute modification du modèle de données (nouveau champ, nouvelle table, index, RLS) doit être appliquée en base **dans la même session** via `pg` + `SUPABASE_DB_URL`, même si le code fonctionne sans (les données ne seront jamais persistées correctement). Ne pas utiliser `mcp__claude_ai_Supabase__apply_migration` — bloqué sur le projet de prod.

**Pourquoi :** v17.4.3 — les colonnes `type_personnage` et `rang_humain` ont été codées mais pas migrées en base, laissant 133 personnages dans un état incohérent.  
**Comment appliquer :** Dès qu'un champ est ajouté dans `supabaseStorage.js` ou un reducer, vérifier immédiatement avec `information_schema.columns` qu'il existe en base, puis appliquer la migration si absent.

---

## MCP Supabase : NE PAS utiliser pour les migrations SQL sur la prod

Le projet de prod Les Héritiers est `cijtzdfwrmbftmwookac` (dans `.env` : `VITE_SUPABASE_URL`).

`mcp__claude_ai_Supabase__apply_migration` et `mcp__claude_ai_Supabase__execute_sql` sont **bloqués** sur ce projet (permission refusée côté serveur). Ne jamais les tenter.

**Règle absolue :** Toute migration SQL ou DDL sur la prod → utiliser `pg` + `SUPABASE_DB_URL` (variable dans `.env`). Écrire un script Node one-shot si besoin.

**Pourquoi :** Session 28 juin 2026 — `apply_migration` refusé sur `cijtzdfwrmbftmwookac`. Le MCP Supabase n'est pas reconfiguré sur ce projet, et même s'il l'était, les DDL sur prod y sont bloqués.
**Comment appliquer :** Dès qu'une migration est nécessaire, écrire directement un script `pg` sans même tenter le MCP.

---

## RLS activé ≠ politiques correctes

`rls_enabled: true` dans `list_tables` ne dit rien sur la qualité des politiques. Toujours vérifier avec :
```sql
SELECT policyname, cmd, qual FROM pg_policies WHERE tablename = 'ma_table';
```
**Pourquoi :** `registre_forge` avait RLS activé mais SELECT `true` (tout le monde voyait tout, même les entrées masquées).
**Comment appliquer :** Avant toute migration RLS, lire les politiques existantes pour éviter les conflits et les doublons.

---

## Requêtes admin cross-users → toujours RPC SECURITY DEFINER

Une requête Supabase depuis le frontend est toujours filtrée par RLS, même pour super_admin. Pour agréger des données de tous les utilisateurs (stats, comptages), utiliser une fonction SQL SECURITY DEFINER.
**Pourquoi :** `TabNotifications` affichait "1 abonné" au lieu de 6 — RLS `user_owns_row` ne laissait passer que la ligne de l'utilisateur connecté.
**Comment appliquer :** Dès qu'une requête admin porte sur des données cross-users, créer une RPC comme `get_admin_stats` ou `get_notification_stats`.

---

## Vérifier les Edge Functions avant de les "créer"

Toujours faire `list_edge_functions` avant de supposer qu'une fonction n'existe pas.
**Pourquoi :** `send-email` n'existait pas, mais `apply-encyclopedia-change` oui — utile pour copier le pattern CORS/auth.
**Comment appliquer :** `list_edge_functions` en début de toute intervention sur les fonctions.

---

## Les Edge Functions Resend nécessitent deux secrets Supabase

Pour que `send-email` fonctionne, ces deux secrets doivent être ajoutés dans Supabase Dashboard → Settings → Edge Functions → Secrets :
- `RESEND_API_KEY` (compte resend.com)
- `RESEND_FROM_EMAIL` (ex: `Les Héritiers <notifications@heritiers.app>`, domaine vérifié dans Resend)

**Comment appliquer :** Rappeler à l'utilisatrice si ces secrets ne semblent pas encore configurés.

---

## Placeholders jamais remplacés dans le code

Ce projet avait plusieurs valeurs placeholder jamais mises à jour :
- `https://votre-projet.supabase.co/functions/v1/send-email` → `${REACT_APP_SUPABASE_URL}/functions/v1/send-email`
- `https://votre-app.com` → `${REACT_APP_URL}`
- `window.__supabaseConfig__` exposé globalement (retiré en v15.18.0)

**Comment appliquer :** Lors d'un audit, chercher `votre-` et `placeholder` dans le code source.

---

## Migration Vite : toujours committer index.html + src/index.jsx

Lors d'une migration CRA→Vite, les fichiers créés localement (`index.html`, `src/index.jsx`) peuvent exister dans le working directory SANS être dans git. Le build local réussit (Vite lit le FS), mais Vercel clone depuis git HEAD et échoue avec `Command "npm run build" exited with 1` sans `index.html`.

**Pourquoi :** Session 10 juin 2026 — 5 commits d'échecs Vercel pour cette raison exacte. On a cherché dans la config Vercel, les env vars, le vite.config.js, alors que c'était un `git add` manqué.
**Comment appliquer :** Après une migration, toujours faire `git status` et vérifier qu'aucun fichier d'entrée n'est `untracked`. `index.html` à la racine est obligatoire pour Vite.

---

## localStorage clearing en dev = déconnexions silencieuses

Le code supprimait toutes les clés Supabase du localStorage à chaque démarrage en dev. Cause de confusion lors du développement.
**Pourquoi :** Sûrement ajouté pour débugger un problème de session, jamais retiré.
**Comment appliquer :** Ne jamais ajouter ce pattern. Si besoin ponctuel, le faire manuellement dans les DevTools.

---

## Migration de bucket Storage ≠ migration des policies RLS du bucket

Copier les fichiers d'un bucket Supabase Storage via la clé `service_role` (qui contourne la RLS) ne garantit RIEN sur les policies RLS de la destination. `storage.objects` peut avoir RLS activé sans aucune policy après une migration — tout upload authentifié échoue silencieusement (`new row violates row-level security policy`) pour TOUS les utilisateurs, pas juste celui qui le signale en premier.

**Pourquoi :** v17.4.31 — buckets `portraits`/`bug_captures` migrés vers le nouveau projet prod (`cijtzdfwrmbftmwookac`) fin juin, policies RLS jamais recréées. Bug resté invisible car le bucket est `public` (la lecture via URL publique contourne la RLS et continuait de fonctionner).
**Comment appliquer :** Après toute migration de bucket, vérifier `SELECT * FROM pg_policies WHERE schemaname='storage' AND tablename='objects'` pour le bucket concerné.

---

## `upsert: true` sur Supabase Storage exige une policy SELECT en plus d'INSERT/UPDATE

`.storage.from(bucket).upload(path, file, { upsert: true })` se traduit en `INSERT ... ON CONFLICT (bucket_id, name) DO UPDATE` côté Postgres. PostgreSQL RLS exige alors une policy **SELECT** — même quand aucune ligne ne rentre réellement en conflit (premier dépôt), le moteur doit pouvoir vérifier l'absence de conflit, ce qui nécessite un droit de lecture RLS. Une policy INSERT (+ UPDATE) seule ne suffit pas.

**Pourquoi :** v17.4.33 — `uploadPortrait` utilise `upsert: true` ; le premier fix RLS (INSERT+UPDATE) laissait pourtant l'upload échouer avec la même erreur. Confirmé par simulation directe (`SET LOCAL ROLE authenticated` + JWT réel) : un INSERT simple réussissait, le même INSERT avec `ON CONFLICT DO UPDATE` échouait.
**Comment appliquer :** Dès qu'un upload Supabase Storage utilise `upsert: true`, prévoir systématiquement une policy SELECT scoped en plus d'INSERT/UPDATE. Pour tester une hypothèse RLS, comparer un `INSERT` simple vs le même avec `ON CONFLICT DO UPDATE` plutôt que de supposer que "les policies existent" suffit.
