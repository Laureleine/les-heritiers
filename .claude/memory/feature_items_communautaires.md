---
name: feature-items-communautaires
description: "Fonctionnalité en réflexion : visibilité des items communautaires pour le Docte"
metadata: 
  node_type: memory
  type: project
  originSessionId: 43c6f2bf-8a5a-4b43-ac72-3fd09ed008fb
---

## Contexte

Les `social_items` ont un flag `is_official`. Un item communautaire = `is_official = false`, créé par un Docte et partagé à toute la communauté. N'importe quel joueur peut l'acquérir. Le Docte d'un Cercle doit savoir quand ses joueurs possèdent de tels items — **transparence, pas contrôle**.

Quand un personnage acquiert un item social, une entrée `type = 'possession'` est créée dans `heritier_notes` avec `content.source_social_item_id` liant à l'item social d'origine.

**Why:** Le Docte n'a pas validé ces items lui-même — il doit être au courant sans avoir à chercher.  
**How to apply:** Garder le ton informatif, pas alarmiste (pas de rouge, pas de badge d'alerte).

---

## Décisions UX prises

- **Pas de notification** : consultation sur demande suffit (transparence, pas urgence)
- **Pas d'écran dédié** : la provenance vit sur l'item lui-même et sur la fiche personnage
- **Popover au clic/tap** (pas tooltip hover) : fonctionne mobile + reste ouvert pendant la lecture
- **Ton visuel neutre/positif** : item communautaire n'est pas inférieur, juste différent

## Contenu du popover (mode détaillé)

```
┌─────────────────────────────────┐
│ ⚒ Nom de l'item          [tag] │
│ ─────────────────────────────── │
│ Description de l'item...        │
│ Statistiques / effets           │
│                                 │
│ ✦ Communautaire                 │
│   Créé par Docte X · Cercle Y  │
└─────────────────────────────────┘
```

Items officiels : même popover, sans section provenance.

---

## Plan technique (à implémenter quand prêt)

**Étape 1 — `useGrimoire.js`**  
Au chargement des possessions avec `source_social_item_id`, joindre `social_items` pour récupérer `is_official` et l'auteur/cercle d'origine.

**Étape 2 — `GrimoirePersonnel.js` onglet "Trésors & Possessions"**  
Badge discret "Communautaire" sur la carte + popover au clic avec provenance.

**Étape 3 — `ActiveCercleView.js`**  
Compteur agrégé en tête de liste membres (ex: "3 items communautaires en circulation") + filtre optionnel.

## Question ouverte avant de coder

Est-ce que `social_items` stocke l'auteur (`created_by` / `author_id`) et le cercle d'origine ? Noms exacts des colonnes à vérifier avant d'écrire la requête.
