---
name: feature-generateur-poche
description: "Générateur de Poche (inventaire d'objets fouillés) — architecture 100% DB, état au 2 juillet 2026"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8129201c-41aa-4ec2-8ccc-eb0ba5440a29
---

# Générateur de Poche (`src/components/PocheGenerateur.jsx`)

**Page :** `/poche`, carte indépendante dans le Hub Outils (`OutilsHub.jsx`), à côté de PNJ et Menu.

## Architecture (choix délibéré, différent de PNJ/Menu)

Contrairement au générateur de PNJ (tables hardcodées `src/data/pnjTables.js` + surcouche communautaire `pnj_table_entries`), la poche vit **entièrement** dans Supabase : canon et communautaire dans la même table `poche_table_entries`, distingués par `is_official` (même convention que `social_items.is_official`).

**Why:** L'autrice veut pouvoir ajuster poids/textes des objets depuis l'app (onglet admin), sans jamais éditer de code ni redéployer. Voir [[feedback_collaboration]] — cette préférence doit s'appliquer aux futurs générateurs aussi, sauf indication contraire.
**How to apply:** Pour un nouveau générateur futur, proposer d'emblée l'architecture 100% DB (comme poche) plutôt que hardcodé+surcouche (comme PNJ/Menu), sauf si l'autrice signale un besoin de résilience hors-ligne ou d'historique git sur le contenu.

## Détails techniques

- Table `poche_table_entries` : `table_name` (7 valeurs dont `fouille_saisonniere` avec sous-clé `saison`), `value_m`/`value_f`, `weight`, `is_official`, `status`/`reject_reason`/`created_by`/`approved_by` — RLS copiée à l'identique de `pnj_table_entries` (select approuvé-ou-auteur, insert soi-même, update admin).
- Réutilise `tirage`/`tiragePondere`/`resolveText` déjà exportés par `src/data/pnjTables.js` — pas de duplication de la logique de tirage pondéré/résolution genrée.
- Un seul fetch au montage (`usePocheTableEntries`), puis tirage en mémoire (`src/utils/pocheGenerator.js::genererInventaire`) — pas de requête réseau par tirage.
- Onglet admin `TabPochePropositions.js` : va au-delà du modèle PNJ/Menu existant (`TabPnjPropositions.js`/`TabMenuPropositions.js`) en ajoutant l'édition en place d'une entrée déjà approuvée et l'ajout direct d'un objet canon — ce socle (édition en place) est réutilisable si un futur générateur adopte l'architecture 100% DB.
- Migration : `scripts/migrate_poche_table_entries.js` (pg + `SUPABASE_DB_URL`, jamais les MCP `apply_migration`/`execute_sql` sur ce projet — cf. [[pitfalls]]).

## Hors périmètre (décision explicite de la session)

Les tables PNJ existantes (traits à tirage en cloche, secrets, apparences...) n'ont pas été migrées vers ce nouveau modèle — laissées inchangées, mécanique propre (tirageCloche + polarité) trop différente d'un simple poids par entrée pour un retrofit sûr en une session.
