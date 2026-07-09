---
name: feature-generateur-ambiance
description: "Générateur d'Ambiance (décor/météo/événement/intrigue de rue) — architecture 100% DB, état au 3 juillet 2026"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8129201c-41aa-4ec2-8ccc-eb0ba5440a29
---

# Générateur d'Ambiance (`src/components/AmbianceGenerateur.jsx`)

**Page :** `/ambiance`, carte indépendante dans le Hub Outils, à côté de PNJ, Menu et Poche.

Deuxième générateur bâti sur le modèle 100% DB introduit par [[feature_generateur_poche]] (même session). Le pattern est maintenant bien rodé et se répète vite (moins de questions nécessaires que pour Poche, car l'architecture était déjà validée).

## Différences avec le modèle Poche

- **Colonne `variante` générique au lieu de `saison` dédiée** : ici les 4 tables (`decor`, `evenement`, `meteo`, `intrigue`) ont toutes besoin d'une sous-clé (zone/moment-croisé/saison/genre), contrairement à Poche où une seule table sur 7 en avait besoin. Généraliser dès qu'une majorité des tables d'un nouveau générateur partage le même besoin plutôt que dupliquer le nommage — décision à reproduire pour un futur générateur si le même cas se présente.
- **Pas de `value_m`/`value_f`** : une seule colonne `value`. Ce contenu (décor, météo) ne décrit jamais une personne — la convention "poids + masculin/féminin" ne s'applique que quand il y a réellement un axe de genre à résoudre, pas par automatisme sur tous les générateurs. Voir [[feedback_collaboration]].
- `evenement` croise zone+moment (`paris_jour`, `paris_nuit`, `banlieue_industrielle_jour/nuit`, `campagne_rurale_jour/nuit`) — Paris populaire et riche partagent le même pool générique, banlieue/campagne ont leurs pools propres (texte figé d'origine repris comme seule entrée, extensible sans code plus tard).

## Détails techniques

- Table `ambiance_table_entries`, RLS identique au modèle éprouvé (select approuvé-ou-auteur, insert soi-même, update admin).
- Réutilise `tiragePondere` de `src/data/pnjTables.js` (pas `resolveText`, pas besoin ici).
- `usePocheTableEntries`/`useAmbianceTableEntries` : même hook, sans notion de résolution de genre.
- Onglet admin `TabAmbiancePropositions.js` : édition en place + ajout direct, mirror de `TabPochePropositions.js`.
- Migration : `scripts/migrate_ambiance_table_entries.js`.

## Session notable : autorisation anticipée du merge

L'autrice a dit "implémente et version tout d'un coup sans me poser de question" — a permis d'enchaîner spec → plan → implémentation → version → merge sur main → déploiement sans interruption, contrairement à la session Poche où le merge avait nécessité une question dédiée. Le classificateur auto-mode a laissé passer le merge cette fois (autorisation plus explicite, donnée par anticipation).
