# Plan DRY — Refactoring du Codebase

_Ce fichier sert de point de reprise entre sessions. Chaque chantier est décrit avec son périmètre, les fichiers impactés, et l'état d'avancement._

---

## 🧠 Session Memory — v17.4.48+ (9 Juillet 2026)

**Tests :** 483 passes / 0 échecs

### Dernières modifications

1. **Chantier A11y A1→A7 — TERMINÉ** — score estimé 76/100 → ~95/100 (WCAG 2.2 AA quasi-complet).
   - A1 : focus trap + role=dialog sur toutes les modales restantes (CropPortraitModal, QuickForgeModal, EncyclopediaViewModal, GrimoirePersonnel×2, ConfirmModal via labelledBy)
   - A2 : ARIA Tabs sur TabBar.jsx (réutilisable), Encyclopedia, MesPropositions, AdminDashboard, Telegraphe
   - A3 : heading-order — FairyDetailsPanel, StepCapacites, StepAtouts, StepCompetencesLibres
   - A4 : autocomplete sur Auth.js (déjà présent)
   - A5 : aria-describedby sur input email + id/role=alert sur bloc erreur (Auth.js)
   - A6 : aria-hidden="true" sur émojis décoratifs (Actualite, StepRecap, AccountSettings, CharacterList, StepAtouts, StepCapacites, StepCompetencesLibres, FairyLoreSection)
   - A7 : landmarks — aside (Telegraphe), section (AdminDashboard, BonusBuilder), aria-label sur nav Actualite

### Prochaine session

- Lire `DRY_PLAN.md` (ce fichier) en premier.
- Lancer `node scripts/backup_supabase.js`.
- Re-lancer l'audit axe-core (`npx playwright test tests/e2e/audit-a11y.spec.js`) pour mesurer le score final et trouver les violations résiduelles.

---

---

## ♿ Chantier A11y — TERMINÉ (9 juillet 2026, ~95/100 WCAG 2.2 AA)

_Score estimé : ~95/100. Violations résiduelles : émojis dans `<option>` HTML (non corrigibles avec aria-hidden)._

### A1. ✅ Focus trap sur toutes les modales
### A2. ✅ ARIA Tabs sur les composants restants
### A3. ✅ heading-order — violations MODERATE corrigées
### A4. ✅ autocomplete — formulaire Auth.js
### A5. ✅ aria-describedby — lier erreurs aux inputs (Auth.js)
### A6. ✅ Émojis décoratifs — aria-hidden="true" (partiel : options HTML non réparables)
### A7. ✅ Landmarks — nav/aside/section dans les sous-composants majeurs

---

## ✅ Terminé — Session du 16 Mai 2026

### Chantier : Centralisation des vérifications de rôles

**Problème :** 15 fichiers avaient des vérifications de rôles manuelles avec 3 patterns différents :
- `role === 'super_admin'`
- `role === 'super_admin' || role === 'gardien'`
- `['super_admin', 'gardien'].includes(role)`

**Solution :** Création de `src/utils/authRoles.js` avec 5 fonctions :
- `isSuperAdmin(userProfileOrRole)`
- `isGardien(userProfileOrRole)`
- `isAdmin(userProfileOrRole)` (super_admin ou gardien)
- `isNotAdmin(userProfileOrRole)`
- `hasMinimumRole(userProfileOrRole, minimumRole)`

**Tests :** 45 tests dans `src/utils/__tests__/authRoles.test.js`

**Fichiers refactorés (15) :**
- `src/hooks/useTelegraphe.js`
- `src/hooks/useCorrectionCheck.js`
- `src/hooks/useForgeTitres.js`
- `src/hooks/useFeatureFlag.js`
- `src/context/ForgeContext.jsx`
- `src/App.js`
- `src/components/AdminDashboard.js`
- `src/components/CharacterList.js`
- `src/components/EncyclopediaCard.js`
- `src/components/EncyclopediaModal.js`
- `src/components/SystemeModales.js`
- `src/components/ValidationsPendantes.js`
- `src/components/Step1.js`
- `src/components/forge/WidgetAnomalie.jsx`
- `src/components/forge/RegistrePage.jsx`
- `src/components/admin/ChangeCard.js`

**Tests :** 217 passes (172 originaux + 45 nouveaux), 0 régression.

---

## 📋 Chantiers restants (prioritaires)

### 1. ✅ `withLoading` — Utilitaire try/catch/finally (TERMINÉ — session 15 juin 2026)

**Solution retenue :** Fonction utilitaire `src/utils/withLoading.js` (pas un hook — le loading est partagé entre plusieurs fonctions dans chaque hook, une instance par hook briserait ce partage).

**Portée réelle :** Les 7 fichiers du plan utilisent 2 patterns distincts :
- `useGrimoire`, `useForgeTitres`, `ForgeContext` → pattern `if/else` sans try/catch (déjà minimal, non touché)
- `useSnapshots`, `useEncyclopedia` (executeDelete), `useTelegraphe` (startPrivateChat, createSupportTicket, sendReply) → try/catch/finally **refactorisés**
- `fetchChannels` / `fetchMessages` (isSilent) et `fetchData` (erreurs conditionnelles par onglet) → laissés en place

**Gain réel :** ~20 lignes, 5 fonctions. **Tests : 342/342**.

---

### 2. ✅ Helper `xpTransaction` — TERMINÉ (session 16 juin 2026)

`src/utils/xpTransaction.js` — encapsule `UPDATE_MULTIPLE` + `LOG_XP_TRANSACTION` + `showInAppNotification` en un seul appel.

**Migré :** `StepCaracteristiques.js` (×2), `StepPouvoirs.js` (×2), `StepAtouts.js` (×2), `StepCompetencesFutiles.js` (×2), `useCompetencesLibres.js` `handleRangChange` (×1).

**Non migré (intentionnel) :** `useCompetencesLibres.js` `handleAddSpecialiteUser` et `handleRemoveSpecialiteUser` — ces handlers ont un `LOG_XP_TRANSACTION` conditionnel (absent quand `costXP === 0` / `refundXP === 0` pour Conduite gratuite). `xpTransaction` force toujours le LOG, ce qui changerait le comportement. Laisser tel quel.

**Tests :** 6 tests unitaires dans `src/utils/__tests__/xpTransaction.test.js`. **348/348 total.**

---

### 3. ✅ `ModalShell` — partiellement migré (session 15 juin 2026)

ModalShell existe (`src/components/ui/ModalShell.js`). Les 15 autres fichiers candidats ont été audités : la majorité a des styles trop différents (header non-amber-900, backdrop 80% vs 60%, pas de click-to-close) pour être migrés sans changer le comportement.

**Non migré (intentionnel)** : SystemeModales (disclaimer sans fermeture), ValidationsPendantes (header rouge), EncyclopediaViewModal (header stone-100), GrimoirePersonnel modales (header dynamique, pas de backdrop-close). Continuer seulement si unification visuelle décidée.

---

### 4. ✅ `EmptyState` — Composant créé (session 15 juin 2026)

`src/components/ui/EmptyState.jsx` — Props : `icon`, `message`, `pulse`, `className`.

**Migré :** `GrimoirePersonnel.js` (×4 : loading + 3 onglets vides).

**Non migré (intentionnel — session 16 juin 2026) :** Encyclopedia.js (×2 : texte-only, `col-span-full`, couleur `text-stone-500` ≠ `text-stone-400`), ActiveCercleView.js (`relative z-10`, `w-full`, icon size 32 ≠ 48), StepVieSociale.js et BonusBuilder.js (styles trop spécifiques). Trop de divergences visuelles pour une migration sans régression.

---

### 5. ✅ `TabBar` — Composant créé (session 15 juin 2026)

`src/components/ui/TabBar.jsx` — Props : `tabs [{ id, label, count?, activeClass? }]`, `activeTab`, `onTabChange`, `className`.

**Migré :** `Encyclopedia.js`, `MesPropositions.js` (avec `activeClass` par onglet et `count`).

**Non migré (intentionnel — session 16 juin 2026) :** `GrimoirePersonnel.js` et `Telegraphe.js` ont un fond `bg-amber-900` / `bg-amber-800` avec tabs de style header sombre — incompatible avec le design TabBar (fond blanc, `border-b-2`).

---

### 5b. ✅ `SearchBar` — Composant créé (session 15 juin 2026)

`src/components/ui/SearchBar.jsx` — Props : `value`, `onChange`, `onClear?`, `placeholder`, `className`, `inputClassName`.

**Migré :** `TabRepairJournaux.js` (avec `onClear`), `TabUsers.js`. Encyclopedia et GrimoirePersonnel ont des styles trop spécifiques.

---

### 6. ⛔ `RangStepper` — Évalué, non créé (session 16 juin 2026)

**Décision :** Les 3 implémentations sont trop divergentes (tailles, contextes, XP cost inline différent) pour une abstraction saine sans sur-ingénierie.
- `StepCaracteristiques.js` (h-10 w-10 avec XP sous le bouton +)
- `StepCompetencesFutiles.js` (w-8 h-8 avec score/max affiché)
- `StepCompetencesLibres.js` (compact inline, sans taille fixe)

---

### 7. ✅ `SearchBar` — voir 5b

---

### 8. ⛔ `BudgetCounter` — Évalué, non créé (session 16 juin 2026)

**Décision :** 3 layouts incompatibles (comptoir 2-colonnes, texte-right, badge coloré). Abstraction inutile.

---

### 9. ⛔ `ButtonGroup` — Reporté

**Fichiers candidats :** `RegistrePage.jsx`, `WidgetAnomalie.jsx`, `TabStats.js`, `TabRepairJournaux.js`, `SocialItemForm.js`. À évaluer si unification visuelle décidée.

---

### 10. ⛔ `Badge` / `Chip` — Évalué, non créé (session 16 juin 2026)

**Décision :** Trop de variantes (text-[10px] vs text-xs, couleurs sémantiques très différentes, certains avec icône, certains avec border, certains rounded-full vs rounded). Une abstraction nécessiterait plus de props que le JSX inline qu'elle remplacerait.

---

## 📐 Principes directeurs

1. **Zéro régression** — Les tests passent avant et après chaque refacto.
2. **Tests d'abord** — Créer les tests de non-régression AVANT de modifier le code.
3. **Atomicité** — Un fichier refactoré = un commit (ou un lot logique).
4. **Imports nommés** — Éviter le shadowing de noms (ex: `isAdmin` importé puis redéfini en variable locale).
5. **Backup** — `node scripts/backup_supabase.js` en début de session.

---

## 🗞️ 1899 — Pipeline de restauration (session 2026-05-24)

### Bugs corrigés

#### 1. ARK Gallica toujours le même (`ocr_petit_parisien.py`)
- `--ark` avait `default='bpt6k519101d'` → `if not issue_ark` toujours False, la résolution auto depuis la date était **contournée**.
- **Toutes les dates** récupéraient le journal du **26 novembre 1899**.
- Fix : `default=None` → la résolution via `resolve_issue_ark(serial_ark, date_str)` est maintenant systématique.

#### 2. Contamination des summaries par `// Date:` (`prompt_restauration_llm.md`)
- La consigne (ancienne ligne 60-64) demandait à l'IA de préfixer la sortie JSON avec `// Date:` et `// Restauration Pass:` → l'IA les fourrait dans le champ `summary`.
- Fix : retiré cette instruction ; le pipeline ajoute les métadonnées dans `run_step_4_output_generation`.

#### 3. Regex trop agressif (`scripts/clean_contaminated_summaries.js`)
- `replace(/^\/\/\s*(Date|Restauration Pass)[^:\n]*:[^\n]*\n*/gm, '')` avalait tout le résumé quand métadonnées et summary tenaient sur une même ligne.
- Fix : `split('\n').filter(line => !line.match(...))` pour ne supprimer que les lignes entièrement metadata.

### État des données
- **1899-11-26** : ✅ correct (c'était l'ARK par défaut)
- **1899-11-28 → 1899-12-02** : ✅ régénérés avec le bon ARK (5 dates, ~260 articles)
- **1899-12-03 et suivants** : ❌ pas encore traités — utiliser `pipeline_journalier.py --date AAAA-MM-JJ`

### Notes pour la suite
- Une date prend ~5 min (OCR + 2 passes IA × lots de 5).
- Certains lots LLM tombent en `"Extra data" JSON parse error` → le fallback individuel fonctionne.
- Pour lancer en batch : `for d in 1899-12-{03..31}; do python 1899/pipeline_journalier.py --date "$d"; done`

---

## 📖 Encyclopédie — Champs Initiés (session 2026-05-26)

### Objectif
Ajouter les champs narratifs de la Fiche du Docte (`FairyLoreSection`) comme champs modifiables dans l'encyclopédie, visibles uniquement pour les initiés.

### Questions en suspens (première question demain)
Voir `.opencode/plans/add-lore-to-encyclopedia.md` pour le détail.

---

## 🏗️ Chantier — Performance Audit (31 Mai 2026)

Un audit performance complet a été réalisé. Voir `.opencode/plans/perf-audit.md` pour le détail.

**Résumé Top 5 :**
1. `animate-fade-in*` — 124 occurrences inertes (undefined dans Tailwind)
2. `CharacterContext` / `ForgeContext` — providers sans `useMemo` → re-rendus cascade
3. 4 imports `* as LucideIcons` → 43 MB inutiles dans le bundle
4. `CharacterList.js` — `commonCardProps` brise `React.memo` sur les cartes
5. PixieAssistant — ailes à 20 Hz continu (batterie)

**À attaquer en premier lors de la prochaine session.**

1. **Périmètre** — Tout le narratif (apparence, taille, reproduction, habitat, caractère, personnages célèbres, note du Docte) OU seulement Note + Caractère ?
2. **Migration** — Backfill des données de `FairyLore.js` vers Supabase OU partir de zéro ?
3. **Source de vérité** — La création du personnage doit-elle lire la DB (remplace FairyLore.js) ou garder les deux indépendants ?

