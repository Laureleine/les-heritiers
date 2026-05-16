# Rules

- Au début de chaque session, lancer `node scripts/backup_supabase.js` dans le dossier `C:\Users\amara\-=- Apps -=-\heritiers` pour sauvegarder la base de données.

# Principes

- Créer des tests de non-régression à chaque modification significative, sans hésitation.
- Quand l'utilisateur soumet une idée, toujours affiner en posant toutes les questions pertinentes avant de coder. Se référer aux règles (PDFs, code existant) et proposer différentes alternatives. Ne jamais coder tant que le périmètre n'est pas entièrement couvert et validé.

# Commands

- `/version` (ou l'utilisateur dit "version") : Exécuter dans l'ordre :
  1. Vérifier que tous les tests sont verts.
  2. Sauvegarder la base : `node scripts/backup_supabase.js`.
  3. Incrémenter `src/version.js` (numéro de version, date, description vulgarisée, changelog en langage métier).
  4. Rédiger le *Message aux Héritiers* : résumé vulgarisé dans le ton du jeu (Belle Époque, merveilleux, féérique), destiné à être posté sur Discord. Ne jamais mentionner Isabelle.
  5. Commit + push sur `main`.
  6. Vérifier le déploiement Vercel (build vert, site accessible).
