# TODO — Tâches en suspens

_Référencé depuis `DRY_PLAN.md`. Mettre à jour au fur et à mesure._

---

## ✅ Accessibilité (chantier a11y) — TERMINÉ (16 juin 2026)

Audit axe-core 11 juin 2026 : CRITICAL et SERIOUS résolus à 100%.
6 violations MODERATE `heading-order` corrigées le 16 juin 2026 (h3 → h2, aucun changement visuel) :

| Écran | Fichier | Fix |
|---|---|---|
| Home | `CharacterCard.js` | nom du personnage h3 → h2 |
| Étape 1 | `Step1.js` | "Identité Scellée" h3 → h2 |
| Étape 2 | `StepCapacites.js` | "Capacités Naturelles" h3 → h2 |
| Étape 4 | `StepAtouts.js` | "Atouts Féériques" h3 → h2 |
| Étape 7 | `StepCompetencesLibres.js` | "L'Académie"/"Compétences Utiles" h3 → h2 |
| Étape 11 | `StepRecapitulatif.js` | "Album Photo de l'Héritier" h3 → h2 |

**Vérifier :** `npx playwright test tests/e2e/audit-a11y.spec.js --project=chromium`

---

## Compatibilité (audit-compat — 11 juin 2026)

Audit `tests/e2e/audit-compat.spec.js` lancé le 11 juin 2026. Rapport HTML dans `tests/e2e/reports/`.

### Contraste couleur — 13 violations SERIOUS (design à décider)

Ces violations touchent au rendu visuel. **Ne pas corriger sans validation.**

| Élément | Ratio actuel | Requis AA | Présent sur |
|---|---|---|---|
| `.bg-green-600` (nav étapes) + texte enfant | < 4.5:1 | 4.5:1 | Toutes les 11 étapes |
| `.bg-amber-600` bouton "Se connecter" (blanc sur amber) | 3.18:1 | 4.5:1 | Page Connexion |
| `text-gray-400` sur fonds clairs (`bg-amber-50`, `bg-gray-100`…) | < 4.5:1 | 4.5:1 | Connexion, Accueil, étapes |
| `text-indigo-500.text-xs` | < 4.5:1 | 4.5:1 | Étape 3 (Pouvoirs) |
| `text-amber-600` sur fond blanc (petits labels) | < 4.5:1 | 4.5:1 | Étapes 6, 10 |

**Fix possible sans changer le design :** remplacer `bg-green-600` → `bg-green-700`, `bg-amber-600` → `bg-amber-700`, `text-gray-400` → `text-gray-500` sur les textes porteurs d'info. Vérifier visuellement avant de valider.

### Navigation clavier — 2 éléments sans focus visible

Détails dans le rapport HTML. Fix = ajouter `focus:ring-2 focus:ring-amber-500/50` sur les éléments incriminés.

### Cibles tactiles — 2 cibles < 24px (WCAG 2.5.8 AA)

Informatif. Voir rapport HTML pour les éléments concernés. Fix uniquement si déploiement mobile envisagé.

### ✅ DiceRoller — corrigé le 11 juin 2026

- Esc ferme la modale ✅
- Focus trap (Tab cycle dans la modale) ✅
- Focus retourne au bouton déclencheur à la fermeture ✅
- `role="dialog"` + `aria-modal="true"` ✅

**Outil d'audit :** `npx playwright test tests/e2e/audit-compat.spec.js --project=chromium`
