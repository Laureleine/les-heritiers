---
name: feature-pnj-generateur
description: "Générateur aléatoire de PNJ — état actuel, décisions de design, pistes d'amélioration"
metadata: 
  node_type: memory
  type: project
  originSessionId: fc7b4064-0c49-43ac-b7fa-0bd5934e2381
---

# Générateur de PNJ (src/components/PnjGenerateur.jsx)

**Page :** `/generateur`, accessible à tous les utilisateurs connectés.

## État actuel (2026-06-29)

Tables dans `src/data/pnjTables.js` :
- **Traits** : 85 entrées, tirées en distribution cloche (neutres plus fréquents)
- **Apparences** : 40 entrées
- **Motivations** : 27 entrées
- **Secrets** : 27 entrées générales + chaînage par catégorie de métier
- **Phobies** : 30 entrées (nouveau)
- **Hobbies** : 25 entrées (nouveau)
- **Comportements distinctifs** : 25 entrées (nouveau)

## Mécaniques implémentées

- `tirageCloche()` : distribution triangulaire sur les traits (imite d4+d10 de Central Casting)
- `SECRETS_PAR_CATEGORIE` : 8 catégories (médical, juridique, presse, arts, occultisme, commerce, militaire, religion) — 60% chance de piocher dans le pool thématique selon le métier
- Cohérence âge/famille (jeune → pas d'enfants adultes)
- Pool motivations élargi pour les veufs
- Noms adaptés par nationalité (7 nationalités)
- Surcharges par type de fée (12 types)

## Piste d'amélioration identifiée (à tester à l'usage)

**Proportionnalité** : la remarque de la dev est que Central Casting a des entrées moins équiprobables que d'autres. `tirageCloche` a été implémenté pour les traits. Pour les autres tables (secrets, motivations, apparences), tout est encore plat (equiprobable). À affiner selon retour d'usage.

**Why:** La dev veut voir à l'usage si la distribution actuelle semble naturelle ou si certains résultats reviennent trop souvent / pas assez.
**How to apply:** Si elle signale un biais (ex: "les secrets sont tous du même registre"), proposer d'étendre `tirageCloche` aux autres tables ou d'ajuster la pondération 60/40 du chaînage secret/métier.

## Source d'inspiration

PDF : `pdfs/TFG8544 - Central Casting - Heroes Now! (OCR).pdf` (114 pages, Paul Jaquays, 1991)
Filtré pour la Belle Époque — anachronismes exclus (cybernétique, aviation moderne, TV, SF).
