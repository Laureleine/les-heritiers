---
name: feedback-collaboration
description: Règles de collaboration apprises en session — à appliquer systématiquement
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 0cbe6334-5cf1-4965-801b-dfff587365a8
---

## Changelog de version

Quand l'utilisatrice tape "version", créer une nouvelle entrée dans `src/version.js` qui couvre **TOUS** les changements depuis la version précédente — y compris ceux de plusieurs commits.
**Pourquoi :** La 15.18.1 n'avait d'abord qu'une seule ligne alors qu'elle couvrait aussi toute la feature email. Erreur corrigée après rappel.
**Comment appliquer :** Avant d'écrire le changelog, relire `git log` depuis le dernier tag de version pour lister tous les commits inclus.

---

## Commandes courtes = actions immédiates

"version" → bump + changelog complet + commit + push. "push" → commit + push si pas encore fait.
**Pourquoi :** L'utilisatrice ne veut pas confirmer des étapes évidentes.
**Comment appliquer :** Exécuter sans demander "tu veux que je...".

---

## Ne jamais fusionner/supprimer des entrées de version existantes

Quand on corrige une version (ex: compléter 15.18.1), mettre à jour l'entrée existante — ne pas fusionner avec la précédente ni la supprimer.
**Pourquoi :** Réponse "NON !!!" immédiate quand j'ai proposé de fusionner 15.18.0 et 15.18.1.
**Comment appliquer :** Toujours éditer l'entrée en place, jamais restructurer l'historique.

---

## Aller jusqu'au bout sans s'arrêter

Déployer, commiter, pousser font partie de la tâche — ne pas s'arrêter après avoir écrit le code.
**Pourquoi :** L'utilisatrice attend un travail livré, pas à moitié fait.
**Comment appliquer :** Chaque tâche se termine par git push ou deploy MCP selon le cas.

---

## Suppression de branches non mergées : confirmation isolée, pas groupée

Quand un nettoyage de worktrees/branches mélange des branches "sans risque" (déjà mergées, rien à perdre) et une branche avec des commits jamais mergés (même jugés superflus après analyse), ne pas les faire valider par un seul "oui" groupé — même si l'utilisatrice répond globalement. Isoler la question sur la branche à commits uniques.
**Pourquoi :** Session 1 juillet 2026 — le classificateur auto-mode a bloqué a posteriori la suppression groupée de `worktree-carte-1900-fix` (6 commits non mergés, bien que superflus) avec 4 autres branches sans risque, jugeant la confirmation insuffisamment explicite pour ce cas précis.
**Comment appliquer :** Pour toute suppression de branche avec des commits non mergés, poser une question dédiée à cette branche seule, même si le reste du lot est évident. Garder le hash du dernier commit à portée (`git branch <nom> <hash>` permet de restaurer si le SHA n'a pas encore été garbage-collecté).

---

## Message aux Héritiers : toujours le consigner dans messages_heritiers.md

Depuis le 4 juillet 2026, chaque *Message aux Héritiers* (étape 4 du rituel `/version`) doit être écrit **à la fois** en chat **et** ajouté (le plus récent en haut) dans `messages_heritiers.md` à la racine du projet — déjà codifié dans `AGENTS.md`.
**Pourquoi :** L'autrice n'arrive plus à copier les messages depuis le chat.
**Comment appliquer :** Après avoir rédigé le message en chat, l'ajouter aussi dans le fichier avant de commit/push. Ne pas attendre qu'elle le redemande.

---

## Sessions en arrière-plan / worktree isolé : l'autrice veut du bout-en-bout, pas un mode dégradé — le signaler ne suffit pas

Une session lancée en mode "background job" isole le travail dans un worktree (`EnterWorktree` imposé par le harnais dès la première édition) et interdit tout push/merge direct sur `main`, même sur demande explicite. Le 7 juillet 2026, ça a créé de la friction (« c'est toi qui m'emmerde à travailler en arrière-plan ! »), puis, après une première tentative de correction (« je te préviendrai tôt la prochaine fois »), l'autrice a explicitement rejeté ce compromis : elle ne veut **pas** d'un avertissement précoce sur une limite acceptée, elle veut que je sois capable d'aller jusqu'au bout (commit + push + **merge**) dans toutes les sessions.
**Pourquoi :** [[Aller jusqu'au bout sans s'arrêter]] est un principe déjà établi et non négociable pour elle — un mode de session qui m'empêche structurellement de merger le contredit, peu importe à quel moment je le signale.
**Comment appliquer :** Le mode "background job" est déterminé au lancement de la session (mécanisme externe : job/scheduler), pas par un choix que je fais en cours de conversation — je n'ai aucun outil pour le désactiver depuis l'intérieur d'une session déjà lancée ainsi. Ne pas proposer "je préviendrai plus tôt" comme solution : expliquer une seule fois que c'est une caractéristique de lancement hors de mon contrôle, et que la solution côté autrice est de démarrer la tâche dans une session Claude Code normale/interactive (pas via le mode arrière-plan) si elle veut que je puisse merger moi-même sans intervention de sa part.

---

## Nouveaux générateurs (tables aléatoires) : proposer d'emblée l'architecture 100% DB

Pour un nouvel outil de type « générateur aléatoire » (comme [[feature_generateur_poche]]), proposer par défaut que les tables (canon + communautaires) vivent entièrement dans Supabase avec un flag `is_official`, plutôt que le modèle hardcodé + surcouche communautaire utilisé par PNJ/Menu.
**Pourquoi :** Face au choix, l'autrice a explicitement préféré pouvoir "tout modifier sans toucher au code" (poids, textes) via une interface d'édition en place dans l'app — pas seulement Supabase Studio. Elle a aussi demandé que l'édition en place (pas seulement approuver/refuser) devienne partie de l'onglet admin.
**Comment appliquer :** Pour un nouveau générateur, prévoir dès le design : table dédiée avec `is_official`, un onglet admin avec bouton "Éditer" sur les entrées approuvées (pas seulement approuver/refuser), et ne pas dupliquer la logique déjà partagée (`tirage`/`tiragePondere`/`resolveText` dans `pnjTables.js`). Ne pas retrofit les tables PNJ existantes sans qu'elle le demande explicitement — leur mécanique (tirageCloche + polarité) est différente et déjà calibrée.
