# REX — Session 16 Juin 2026 — v17.4.18 "La Main de l'Artisan 🔧"

## Ce qui a été fait

- **DRY chantiers 3-5** : Création de `SearchBar.jsx`, `EmptyState.jsx`, `TabBar.jsx` dans `src/components/ui/`. Migration dans 7 fichiers. Pattern : créer le composant, migrer un fichier à la fois, tester après chaque migration.
- **a11y heading-order** : 6 violations MODERATE résolues en changeant h3 → h2. Avec Tailwind, le changement de tag est visuellement neutre (styles entièrement class-based, Preflight reset les headings). Pas besoin de sr-only si le heading est déjà le premier de la section sémantiquement.
- **Audit DRY chantiers 6-10** : Les patterns "évidents" sur papier (RangStepper, BudgetCounter, Badge) sont trop divergents dans le code réel. Décisions documentées dans DRY_PLAN.md.

## Règles apprises

1. **Lire avant de décider** : un chantier DRY ne se juge pas sur son nom dans le plan, mais sur la divergence réelle entre les implémentations. Toujours lire les 3+ fichiers avant de créer le composant.
2. **La couleur du texte compte** : `text-stone-400` vs `text-stone-500` dans EmptyState est une régression visuelle. Ne pas migrer si la différence est visible même minime.
3. **col-span-full est un piège** : EmptyState ne peut pas être utilisé dans une CSS grid sans passer `col-span-full` en className — vérifier la structure parente avant de migrer.
4. **heading-order : h3 → h2 est safe avec Tailwind** : Tailwind Preflight reset tous les headings. Changer le tag ne change rien visuellement si les classes sont identiques.
5. **Fond sombre incompatible avec TabBar** : GrimoirePersonnel et Telegraphe ont `bg-amber-900` — ne pas forcer la migration TabBar qui changerait le visuel.
6. **Session sur un worktree en cours** : La prochaine session continue dans le même worktree (`carte-1900-fix`). Il faut pusher et merger depuis la branche principale.

---

# REX — Session 15 Juin 2026 — v17.4.16 "Le Regard de la Communauté 🌐"

## Ce qui a été fait

- **Métriques globales pour tous les Héritiers** : la page Communauté & Métriques affichait des données filtrées par la RLS Supabase (chaque utilisateur ne voyait que les personnages accessibles). Désormais, une RPC `get_community_stats_detail()` avec `SECURITY DEFINER` renvoie les statistiques de l'ensemble du corpus à tous les Héritiers connectés.
- **Correctif Vitest/worktrees** : Vitest découvrait et exécutait les tests des worktrees parallèles (`.claude/worktrees/`), produisant de faux échecs. Ajout de `.claude/**` dans l'`exclude` de `vite.config.js`.

---

## Règles et enseignements

### 1. La RLS Supabase filtre TOUT, y compris les stats
Les requêtes directes `supabase.from('characters').select(...)` respectent la RLS — un utilisateur ordinaire ne voit que les personnages publics ou les siens. Pour des métriques globales (distributions, totaux), il faut systématiquement une RPC `SECURITY DEFINER`.

**Règle :** Toute requête de stats/métriques censée être globale = RPC SECURITY DEFINER obligatoire.

### 2. Vitest découvre les tests des worktrees si `.claude/` n'est pas exclu
Les worktrees créés sous `.claude/worktrees/` sont dans le dossier du projet. Vitest les parcourt par défaut. Résultat : des tests d'un autre chantier peuvent échouer dans la session principale.

**Règle :** Ajouter `.claude/**` à `test.exclude` dans `vite.config.js` dès la création du projet (ou dès qu'un premier worktree est créé).

### 3. `version.js` a des fins de ligne CRLF sur Windows — gérer l'insertion en conséquence
Le marker de remplacement `'export const VERSION_HISTORY = [\n'` ne trouve rien si le fichier utilise `\r\n`. Toujours détecter le séparateur de ligne avant d'insérer.

**Règle :** Pour modifier `version.js` par script Node.js, détecter `\r\n` vs `\n` et adapter le marker. Ou utiliser PowerShell avec des here-strings qui gèrent les CRLF natifs.

### 4. Les apostrophes dans les strings JS single-quote doivent être échappées `\'`
Quand on génère du contenu JS programmatiquement, les apostrophes français (`s'ouvre`, `l'activité`) brisent les single-quoted strings. Préférer les **double-quotes** pour les valeurs de `version.js` qui contiennent du texte français naturel.

**Règle :** Dans `version.js`, utiliser des double-quotes pour `description` et les entrées `changes[]` (le français est plein d'apostrophes). Réserver les single-quotes aux identifiants/noms sans apostrophes.

### 5. Merger un worktree depuis le repo principal quand main y est aussi en use
Git interdit `git checkout main` depuis un worktree quand la branche `main` est déjà checkoutée dans le repo principal. Utiliser `cd <repo-principal> && git merge <branche-worktree>` depuis le répertoire principal, pas depuis le worktree.

### 6. Vérifier `git stash pop` après un merge : des conflits peuvent apparaître
Le stash pop après un merge peut produire des conflits (ex: `public/version.json` modifié des deux côtés). Toujours vérifier le statut git après un `stash pop` et résoudre avant de continuer.

---

## État en fin de session

- **337 tests verts** (25 fichiers)
- **Vercel** : READY en production (build ~23s)
- **Supabase** : migration `get_community_stats_detail` appliquée
- **Aucune modification non commitée** dans le repo principal

