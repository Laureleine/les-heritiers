# Rules

- **RÈGLE ABSOLUE — worktrees interdits :** Ne jamais utiliser `isolation: "worktree"` dans l'outil Agent. Ne jamais créer de worktree git sous quelque forme que ce soit. Tout le travail se fait dans le répertoire principal `C:\Users\amara\-=- Apps -=-\heritiers`.
- Sauvegarder la base de données (`node scripts/backup_supabase.js`) uniquement juste avant d'effectuer des modifications sur icelle (migration, script Node d'insertion/mise à jour). Pas au démarrage de session par défaut.
- Lire `DRY_PLAN.md` entièrement (session memory + chantiers) pour le contexte de reprise.
- Lire `REX_ESSENTIELS.md` (condensé des 15 règles les plus importantes tirées du REX complet).
- Toute modification du modèle de données (nouveau champ, nouvelle table, index, RLS) **doit** être accompagnée d'une migration SQL dans la même session. Ne jamais laisser du code qui dépend d'une colonne non encore créée en base.
- **RÈGLE ABSOLUE — migrations SQL :** Ne jamais utiliser `mcp__claude_ai_Supabase__apply_migration` ni `mcp__claude_ai_Supabase__execute_sql` sur le projet de prod (`cijtzdfwrmbftmwookac`). Ces outils sont bloqués sur ce projet. Toujours passer par `pg` + `SUPABASE_DB_URL` (variable dans `.env`). Écrire un script Node si besoin.

# Principes

- Créer des tests de non-régression à chaque modification significative, sans hésitation.
- Quand l'utilisateur soumet une idée, toujours affiner en posant toutes les questions pertinentes avant de coder. Se référer aux règles (PDFs, code existant) et proposer différentes alternatives. Ne jamais coder tant que le périmètre n'est pas entièrement couvert et validé.

# Plan DRY

- Un plan DRY détaillé est maintenu dans `DRY_PLAN.md`. Le lire au début de chaque session pour connaître l'avancement des chantiers de refactoring.
- Avant chaque refacto significatif, créer d'abord les tests de non-régression.
- Ne pas toucher au code sans avoir les tests verts avant ET après.

# Tests

- Le projet utilise **Vite + Vitest** (migration CRA → Vite terminée). Lancer les tests avec `npm test` (`vitest run`). Ne jamais utiliser `npx jest` ni `react-scripts test`.

# Commands

- `/version` (ou l'utilisateur dit "version") : Exécuter dans l'ordre :
  1. Vérifier que tous les tests sont verts.
  2. Sauvegarder la base : `node scripts/backup_supabase.js`.
  3. Incrémenter `src/version.js` (numéro de version, date, description vulgarisée, changelog en langage métier) **et** `public/version.json` (`version` + `buildDate`) — ce second fichier pilote la détection de mise à jour côté client (`useAutoUpdate.js`) et a déjà été oublié plusieurs releases de suite.
  4. Rédiger le *Message aux Héritiers* : résumé vulgarisé dans le ton du jeu (Belle Époque, merveilleux, féérique), destiné à être posté sur Discord. Ne jamais mentionner Isabelle. Le consigner **aussi** dans `messages_heritiers.md` à la racine du projet (le plus récent en haut), en plus de l'afficher en chat — l'autrice ne peut pas toujours copier depuis le chat.
  5. Commit + push sur `main`.
  6. Vérifier le déploiement Vercel (build vert, site accessible).
  7. Envoyer les notifications de mise à jour aux abonnés : `node scripts/notify_version.js`. Le script lit la version dans `public/version.json` et le message dans `messages_heritiers.md` (le plus récent). Il envoie à tous les abonnés correspondant au type de version (majeure/mineure).
  8. Rédiger un REX (Retour d'EXpérience) de la session dans un fichier dédié (`REX.md` à la racine) : lister les règles, astuces et enseignements pour gagner du temps et être plus efficace lors de la prochaine session.
