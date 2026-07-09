---
name: chantier-a11y
description: "Chantier accessibilité WCAG 2.2 AA — A1→A7 complétés (9 juillet 2026), score estimé ~95/100"
metadata: 
  node_type: memory
  type: project
  originSessionId: 5a57f0ca-6a8f-485e-ac34-f397a978ab8a
---

Chantier d'accessibilité lancé le 2026-06-11 (audit axe-core), étendu le 2026-07-08 (audit WCAG 2.2 AA complet).

**Why:** Rendre l'app utilisable par des non-voyants (NVDA/VoiceOver) et conforme WCAG 2.2 AA.
**How to apply:** Consulter ce fichier avant tout travail a11y. Chantier A1→A7 terminé.

---

## Score courant : ~95/100 (estimé, session 9 juil. 2026)

Objectif : 100% WCAG 2.2 AA.

---

## Ce qui a été corrigé (toutes sessions confondues)

### Session 11 juin 2026 (axe-core, ~68 → 6 violations)
- meta-viewport corrigé (`index.html` racine)
- `<header>` + `<main>` structurels dans `App.js`
- `aria-label` sur 30+ boutons icône
- `aria-label` sur 9 selects sans nom
- Boutons +/− avec `aria-label` dynamique

### Session 8 juillet 2026 (WCAG 2.2 AA, score 52 → 76)
- `public/index.html` : skip link + région `aria-live#a11y-live` + classes `sr-only`
- `src/hooks/useFocusTrap.js` : hook créé (focus trap, WCAG 2.1.1)
- `src/utils/SystemeServices.js` : `showInAppNotification` → `#a11y-live` (WCAG 4.1.3)
- `src/components/SystemeModales.js` : `role="alert"` toasts + `aria-label` Fermer
- `src/App.js` : `id="main-content"` sur `<main>`
- `src/AppRouter.jsx` : `RouteAnnouncer` (WCAG 2.4.2)
- `src/components/EncyclopediaModal.js` : `role="dialog"` + `aria-modal` + `useFocusTrap`
- `src/components/cercle/GrimoirePersonnel.js` : ARIA Tabs (4 onglets + navigation flèches)
- `src/components/cercle/ActiveCercleView.js` : ARIA Tabs (2 onglets)

### Session 8–9 juillet 2026 (A1→A7 complétés)

**A1 ✅ Focus trap — toutes les modales**
- `CropPortraitModal.jsx`, `QuickForgeModal.jsx`, `EncyclopediaViewModal.js` : role="dialog" + aria-modal + useFocusTrap
- `GrimoirePersonnel.js` (edit + delete modales inline)
- `ConfirmModal.js` : labelledBy="modal-title" → connecté à ModalShell

**A2 ✅ ARIA Tabs — composants restants**
- `TabBar.jsx` : role tablist/tab, aria-selected, roving tabIndex, navigation flèches
- `Encyclopedia.js`, `MesPropositions.js` : panelId + tabpanel wrapper
- `AdminDashboard.js`, `Telegraphe.js` : keyboard handler + tabpanel (querySelectorAll pour onglets conditionnels)

**A3 ✅ Heading-order — violations MODERATE**
- `FairyDetailsPanel.js` : h3→h2 nom, h4→h3 (Potentiel, Avantages, Désavantages)
- `StepCapacites.js`, `StepAtouts.js` : h3→h2 titre principal
- `StepCompetencesLibres.js` : h4→h3 (Héritage Féérique, noms profil)

**A4 ✅ Autocomplete** (session précédente — Auth.js avait déjà autoComplete)

**A5 ✅ aria-describedby — erreurs liées aux inputs**
- `Auth.js` : aria-describedby={error?"auth-error":undefined} sur input email
- `Auth.js` : id="auth-error" role="alert" sur le bloc d'erreur

**A6 ✅ Émojis décoratifs — aria-hidden="true"** (partiel — options non réparables)
- `Actualite.jsx` (6 spans menu), `StepRecapitulatif.js` (🔍 bouton)
- `AccountSettings.js` (👁️ ⚠️), `CharacterList.js` (✉️)
- `StepCompetencesLibres.js` (✨), `StepAtouts.js` (🔒), `StepCapacites.js` (🧬 🔒)
- `FairyLoreSection.jsx` (🗝️)
- Note : émojis dans `<option>` (QuickForgeModal, EntityForm, FairyTypeForm) non corrigibles avec aria-hidden

**A7 ✅ Landmarks — nav/aside/section**
- `Telegraphe.js` : div→`<aside aria-label="Télégraphe — messagerie">`
- `AdminDashboard.js` : div→`<section aria-label="Tableau de bord administrateur">`
- `BonusBuilder.js` : div→`<section aria-label="Forge de personnage">`
- `Actualite.jsx` : aria-label="Sections de l'Actualité" sur nav existant

---

## Reste potentiel (hors scope A1→A7)

- Émojis dans `<option>` HTML (QuickForgeModal.jsx, EntityForm.js, FairyTypeForm.js, FicheParchemin.jsx) — pas corrigibles avec aria-hidden, limites du HTML
- `WidgetLangues.js` (1 émoji)
- Re-passer un audit axe-core pour identifier les violations résiduelles

---

## Outil d'audit

`tests/e2e/audit-a11y.spec.js` — Playwright + axe-core.
Lancer : `npx playwright test tests/e2e/audit-a11y.spec.js --project=chromium`

---

## Pièges connus

- `public/index.html` est distinct de `index.html` (racine). Vite utilise `index.html` à la racine — ne pas confondre les deux.
- Lucide React >= v0.293 inclut déjà `aria-hidden="true"` sur toutes ses SVG — pas besoin de l'ajouter manuellement.
- `useFocusTrap(ref, condition)` doit être appelé APRÈS la déclaration des states dont dépend `condition` (sinon ReferenceError: can't access before initialization).
- Onglets conditionnels (Telegraphe, AdminDashboard) : utiliser `querySelectorAll('[role=tab]')` plutôt qu'un tableau statique.

[[project-architecture]]
[[pitfalls]]
