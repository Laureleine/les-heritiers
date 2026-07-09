---
name: feature-docte-cercle
description: "Rôles Docte et Cercle — définitions, droits et features liées"
metadata: 
  node_type: memory
  type: project
  originSessionId: e70f1425-b8fc-411c-9e93-41de5a3efc91
---

## Docte
Le **Docte** est le **propriétaire du cercle**. C'est un rôle fonctionnel (pas un rôle Supabase auth), dérivé de la table cercles : le joueur dont l'ID correspond au champ `owner_id` (ou équivalent) d'un cercle est le Docte de ce cercle.

## Cercle
Un **cercle** est un groupe de joueurs. La notion existe déjà en base de données (tables dédiées). Chaque personnage peut appartenir à un cercle ; le Docte est le propriétaire du cercle.

## Feature : ajustement XP par le Docte
- **Où :** dans le Registre des âmes, accessible depuis la carte de chaque personnage du cercle (bouton/lien dans le Grimoire)
- **Qui peut :** le Docte peut ajuster **n'importe quel** personnage de son cercle
- **Quoi :** ajouter une ligne dans `historique_xp` avec justification libre — augmente ou réduit `xp_depense`
- **Type de transaction :** nouveau code `DOCTE` (distinct de DEPENSE/REMBOURSEMENT/GAIN)
- **Contraintes :** `xp_depense` ∈ [0, xp_total] après ajustement

**Why:** Gérer des situations hors-règles (corrections, pénalités narratives, récompenses spéciales) que le système automatique ne couvre pas.

**How to apply:** Ne jamais re-demander "qui est le docte" ni "qu'est-ce qu'un cercle" — réponses ici.
