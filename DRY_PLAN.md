# Plan DRY — Refactoring du Codebase

_Ce fichier sert de point de reprise entre sessions. Chaque chantier est décrit avec son périmètre, les fichiers impactés, et l'état d'avancement._

---

## 🧠 Session Memory — 16.0.1 "Le Soufflet du Forgeron" (17 Mai 2026)

**Tests :** 243 passes / 18 suites / 0 échecs

### Dernières modifications

1. **Sceau d'Officialité (16.0.0)** — `is_official` badge/toggle/engine/confirmations sur toute l'Encyclopédie.
2. **Fix INSERT (16.0.0)** — `surgicalData.id = recordId` dans le moteur de proposition.
3. **Fix ForgeContext (16.0.1)** — `fetchForge` wrappée dans `useCallback([])` pour stopper la boucle infinie.
4. **Items récupérés (16.0.0)** — "Architecte restaurateur" et "Ecrivain célèbre" réinsérés manuellement.

### Prochaine session

- Lire `DRY_PLAN.md` (ce fichier) en premier.
- Lancer `node scripts/backup_supabase.js`.
- Les chantiers de refactoring sont listés ci-dessous (#1-10).
- Toujours `git pull` avant de commencer.
- **🔔 Point agenda** : Discuter **Skills**, **Agents**, et **DRY** (chantiers de refactoring DRY_PLAN.md).

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

### 1. 🔴 `useSupabaseQuery` — Hook générique de fetch Supabase

**Problème :** 7 hooks réimplémentent le même pattern try/catch/finally avec loading state :
- `useGrimoire.js`
- `useSnapshots.js`
- `useForgeTitres.js`
- `useEncyclopedia.js` (×2 : fetchData + fetchPendingLocks)
- `ForgeContext.jsx` (fetchForge)
- `useTelegraphe.js` (×2 : fetchChannels + fetchMessages)

**Pattern commun :**
```js
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

const fetch = useCallback(async () => {
  setLoading(true);
  try {
    let query = supabase.from(table).select('*');
    query = queryBuilder(query);
    const { data: result, error } = await query;
    if (error) throw error;
    setData(result || []);
  } catch (err) {
    showInAppNotification("Erreur de chargement", "error");
  } finally {
    setLoading(false);
  }
}, [table, ...deps]);

useEffect(() => { fetch(); }, [fetch]);
```

**Gain estimé :** ~80 lignes économisées.

---

### 2. 🔴 Helper `xpTransaction` — Dispatch + LOG_XP + notify

**Problème :** Le combo `dispatchCharacter(UPDATE_MULTIPLE)` + `dispatchCharacter(LOG_XP_TRANSACTION)` + `showInAppNotification()` est dupliqué **11 fois** dans 5 fichiers :
- `StepCaracteristiques.js` (×2 : increase, decrease)
- `StepPouvoirs.js` (×2 : feerie up/down)
- `StepAtouts.js` (×2 : acheter/rembourser)
- `StepCompetencesFutiles.js` (×2 : rang up/down)
- `useCompetencesLibres.js` (×3 : rang, spec achat, spec removal)

**Gain estimé :** ~80 lignes économisées.

---

### 3. 🟡 `ModalShell` — Composant modal unifié

**Problème :** 7+ instances du même overlay modal avec des variations mineures (opacité, border-radius, backdrop-blur) :
- `ConfirmModal.js`
- `App.js` (version history)
- `SystemeModales.js` (disclaimer)
- `EncyclopediaModal.js`
- `EncyclopediaViewModal.js`
- `GrimoirePersonnel.js` (×2 : create, delete)
- `RegistrePage.jsx` (detail modal)

**Sous-composants à extraire :**
- `ModalHeader` — bandeau amber-900 avec titre + bouton X (4+ occurrences)
- `ModalFooter` — boutons Annuler/Confirmer (4 occurrences)

---

### 4. 🟡 `EmptyState` — Composant d'état vide

**Problème :** 9 instances du même pattern icône + texte centré :
```jsx
<div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4">
  <SomeIcon size={48} className="opacity-20" />
  <p className="font-serif italic text-lg">...</p>
</div>
```

**Fichiers impactés :** `GrimoirePersonnel.js` (×3), `Encyclopedia.js` (×2), `MesPropositions.js`, `ActiveCercleView.js`, `StepVieSociale.js`, `BonusBuilder.js`

---

### 5. 🟡 `TabBar` — Composant d'onglets

**Problème :** 4 tab bars avec le même pattern actif/inactif :
```jsx
<button className={`pb-3 font-bold whitespace-nowrap transition-colors border-b-2
  ${active === x ? 'text-amber-900 border-amber-600' : 'text-stone-400 border-transparent'}`}>
```

**Fichiers impactés :** `Encyclopedia.js`, `MesPropositions.js`, `GrimoirePersonnel.js`, `Telegraphe.js`

---

### 6. 🟡 `RangStepper` — Ajusteur +/- de rang

**Problème :** 3 implémentations différentes du même pattern +/- pour les rangs de compétences :
- `StepCaracteristiques.js` (h-10 w-10)
- `StepCompetencesFutiles.js` (bg-white px-2 py-1)
- `StepCompetencesLibres.js` (CompetenceRow : bg-white rounded border)

---

### 7. 🟡 `SearchBar` — Barre de recherche standardisée

**Problème :** 3 search bars avec icône Search + clear button :
- `TabUsers.js` (pas de clear button)
- `TabRepairJournaux.js` (avec X)
- `RelationSelector.js` (pas de clear button)

---

### 8. 🟢 `BudgetCounter` — Affichage de budget restant

**Fichiers :** `StepCompetencesLibres.js` (ComptoirsBudget), `StepCompetencesFutiles.js` (sticky header), `StepCaracteristiques.js` (header)

---

### 9. 🟢 `ButtonGroup` — Groupes de boutons toggle

**Fichiers :** `RegistrePage.jsx`, `WidgetAnomalie.jsx`, `TabStats.js`, `TabRepairJournaux.js`, `SocialItemForm.js`

---

### 10. 🟢 `Badge` / `Chip` — Badges colorés

**Fichiers :** `EncyclopediaCard.js`, `EncyclopediaViewModal.js`, `MesPropositions.js`, `CharacterCard.js`, `Encyclopedia.js`

---

## 📐 Principes directeurs

1. **Zéro régression** — Les tests passent avant et après chaque refacto.
2. **Tests d'abord** — Créer les tests de non-régression AVANT de modifier le code.
3. **Atomicité** — Un fichier refactoré = un commit (ou un lot logique).
4. **Imports nommés** — Éviter le shadowing de noms (ex: `isAdmin` importé puis redéfini en variable locale).
5. **Backup** — `node scripts/backup_supabase.js` en début de session.
