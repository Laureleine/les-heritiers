# REX Essentiels — Règles à relire en début de session

Condensé des leçons les plus récurrentes et les plus coûteuses tirées du REX complet.
Mis à jour au fil des sessions — la version longue reste dans `REX.md`.

---

## 1. Reprise après compaction : Read avant Edit, git log avant tout

Après une compaction de contexte, `Edit` refuse tout fichier non lu dans la nouvelle fenêtre. Toujours faire un `Read` (même `limit: 5`) avant le premier `Edit`.

Et avant de toucher quoi que ce soit : `git log --oneline -5` pour savoir ce qui est déjà commité. Le résumé décrit l'intention, pas forcément ce qui est en base.

## 2. Bumper la version : git fetch d'abord

Avant d'éditer `src/version.js` ou `public/version.json`, toujours `git fetch && git log origin/main --oneline -3`. D'autres sessions peuvent avoir avancé `main` pendant qu'on travaille — les fichiers de version sont la ressource la plus disputée.

## 3. public/version.json : ne jamais l'oublier

Ce fichier pilote la détection de mise à jour côté client (`useAutoUpdate.js`). Il a été oublié plusieurs releases de suite. Toujours le mettre à jour **en même temps** que `src/version.js`.

## 4. git status après git add

Après un `git add`, toujours vérifier `git status` avant de commiter — un fichier modifié peut rester non stagé silencieusement (ex : `DictionnaireJeu.js` oublié → build Vercel cassé en prod).

## 5. MCP Supabase officiel != projet de prod

`mcp__claude_ai_Supabase__*` est authentifié sur un autre compte que `cijtzdfwrmbftmwookac`. Il ne voit pas ce projet. Pour toute opération Supabase (deploy Edge Function, secrets, migrations) : `npx supabase <cmd> --project-ref cijtzdfwrmbftmwookac` avec `SUPABASE_ACCESS_TOKEN` du `.env`.

## 6. fetch() direct pour les appels Node → Edge Function avec service role

`supabase.functions.invoke()` ajoute un header `apikey` en conflit avec le `Authorization: Bearer SERVICE_KEY`. Toujours utiliser `fetch()` brut depuis les scripts Node qui appellent les Edge Functions avec service role.

## 7. Edge Function appelée par un script serveur : bypass service role

`auth.getUser(jwt)` renvoie 401 si le token est la `SUPABASE_SERVICE_ROLE_KEY`. Comparer d'abord :
```typescript
const isServiceRole = jwt === Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
if (!isServiceRole) { /* vérification user normale */ }
```

## 8. Scripts Node : toujours dans scripts/, lancés depuis la racine

`require('pg')` et `dotenv` cherchent `node_modules/` depuis le `cwd`. Un script lancé depuis le scratchpad ou un worktree sans `node_modules/` échoue silencieusement ou avec une erreur trompeuse.

## 9. Migrations SQL : migrer les données avant de contraindre

Poser un `CHECK` (nouvelles valeurs) AVANT de migrer les données existantes → `constraint violated`. Toujours dans l'ordre : `UPDATE` les valeurs, puis `ALTER TABLE ADD CONSTRAINT`.

## 10. Vérifier la table en base avant de chercher un bug de rendu

Si des données n'apparaissent pas à l'écran, vérifier d'abord que la table existe et contient des lignes. `loadSorts()` retourne `[]` silencieusement si la table n'existe pas — aucune erreur.

## 11. Backup JSON pour déboguer les données joueurs

`backups/backup_*.json` contient toutes les données en prod. PowerShell `ConvertFrom-Json` + filtre par `user_id` ou `fairy_type_id` pour inspecter sans passer par Supabase Studio. Réflexe pour tout bug « le joueur dit X mais le code dit Y ».

## 12. dotenvx pollue stdout dans $(...) — filtrer avec grep

`$(node -e "...process.env.TOKEN")` capture aussi la bannière dotenvx (`◇ injected env...`) qui s'ajoute aléatoirement sur stdout. La valeur capturée semble correcte mais échoue les validations de format. Toujours extraire avec `grep -oE 'sbp_[0-9a-f]{40}'` (ou le pattern attendu).

## 13. Vite sur chemin avec -=- : --force si le watcher semble bloqué

Le file watcher Vite peut rater les changements sur les chemins avec caractères spéciaux (`-=-`). Si une modif de code ne se répercute pas : `npm run dev -- --force`.

## 14. JSX : compter les divs de fermeture après injection d'un fragment

Quand on enveloppe un bloc existant dans `{condition && <> ... </>}`, un `</div>` peut se retrouver à l'intérieur du fragment — compile sans erreur, DOM invalide. Relire les 10-15 dernières lignes du fichier après l'edit.

## 15. Lire le code avant de proposer une architecture

Avant de concevoir une solution (nouveau champ, nouveau composant, nouvelle RPC), lire le code existant. La vraie solution est souvent déjà à 80% présente et ne demande que 10 lignes, pas une refonte.

---

*Pour le détail et le contexte de chaque règle, voir `REX.md`.*
