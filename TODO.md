# TODO — Tâches en suspens

_Référencé depuis `DRY_PLAN.md`. Mettre à jour au fur et à mesure._

---

## Accessibilité (chantier a11y)

Audit axe-core du 11 juin 2026 : tous les CRITICAL et SERIOUS sont résolus.
Il reste **6 violations MODERATE** (`heading-order`) :

| Écran | Élément | Description |
|---|---|---|
| Home (liste personnages) | `h3[title="Vénéra"]` | Cartes personnage : h3 sans h2 parent |
| Étape 1 — Héritage | `h3` | Titre de section sans h2 au-dessus |
| Étape 2 — Capacités | `h3` | Titre de section sans h2 au-dessus |
| Étape 4 — Atouts | `h3` | Titre de section sans h2 au-dessus |
| Étape 7 — Compétences Utiles | `h3` | Titre de section sans h2 au-dessus |
| Étape 11 — Bilan | `h3` | Titre de section sans h2 au-dessus |

**Fix attendu :** soit promouvoir les h3 en h2, soit ajouter un h2 structurel invisible (sr-only) avant chaque bloc. Impact lecteur d'écran : navigation par titres seulement. Faible priorité.

**Outil d'audit :** `npx playwright test tests/e2e/audit-a11y.spec.js --project=chromium`

---

## Autres

_(ajouter ici les prochains chantiers)_
