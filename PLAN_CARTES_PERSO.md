# Plan — Cartes Personnelles
> Suivi d'avancement session. Cocher chaque tâche dès qu'elle est terminée.

---

## Étape 1 — Migrations SQL
- [x] **T1.1** `creator_id UUID REFERENCES auth.users(id)` sur `fairy_assets`, `fairy_capacites`, `fairy_powers`, `social_items`
- [x] **T1.2** Créer la table `personal_card_grants` :
  - `id, card_id UUID, card_type TEXT`
  - `granted_by UUID, granted_to UUID, cercle_id UUID`
  - `status TEXT DEFAULT 'pending'` (pending / accepted / rejected)
  - `cost_xp INT DEFAULT 0, cost_fortune INT DEFAULT 0, cost_pp JSONB DEFAULT '{}'`
  - `hide_effects_until_accepted BOOLEAN DEFAULT FALSE`
  - `created_at TIMESTAMPTZ DEFAULT now(), responded_at TIMESTAMPTZ`
- [x] **T1.3** Vérification : colonnes présentes, table créée

---

## Étape 2 — Encyclopédie

### 2a — Badge 3 états
- [x] **T2.1** `EncyclopediaCard.js` : badge `creator_id != null` → `✦ Personnel` (violet), avant Officiel/Communautaire
- [x] **T2.2** `EncyclopediaViewModal.js` : même logique
- [x] **T2.3** `BonusBuilder.js` : optgroups `📚 Officielles / 👥 Communauté / ✦ Personnelles`

### 2b — Formulaire de création
- [x] **T2.4** Nouveau composant `PersonalCardCostFields.jsx` : champs XP + fortune + PP par profil
- [x] **T2.5** `EntityForm.js` : afficher `PersonalCardCostFields` quand `isPersonal` (toggle ✦ dans EncyclopediaModal)
- [x] **T2.6** `SocialItemForm.js` : idem
- [x] **T2.7** `FairyTypeForm.js` : N/A — les types de fées ne sont pas des cartes personnelles
- [x] **T2.8** `encyclopediaEngine.js` : sauvegarder `creator_id` à la création + auto-apply pour cartes perso dans EncyclopediaModal

### 2c — Filtrage et visibilité
- [x] **T2.9** `useEncyclopedia.js` : pas de changement nécessaire — les cartes perso apparaissent déjà dans les queries (pas de filtre WHERE)
- [x] **T2.10** `usePersonalCards.js` (nouveau hook) + filtre `creator_id IS NULL` dans `loadSocialItems` — grants acceptés accessibles par composant

### 2d — Liste distributions par carte
- [x] **T2.11** Nouveau composant `PersonalCardGrantsList.jsx` : liste des grants (username + statut), dans `EncyclopediaViewModal` pour le créateur
- [x] **T2.12** Fetch grants dans `PersonalCardGrantsList` (lazy, par card_id+type)

---

## Étape 3 — Distribution depuis le Cercle + Flow acceptation

### 3a — Interface Docte
- [x] **T3.1** Onglet "✦ Cartes Perso" dans `ActiveCercleView` (Docte uniquement) via `TabCartesPerso.jsx`
- [x] **T3.2** Bouton "Distribuer" sur chaque carte → modal `DistributeCardModal.jsx`
- [x] **T3.3** `DistributeCardModal.jsx` : sélection des membres cibles + coûts + toggle `hide_effects`
- [x] **T3.4** Insertion dans `personal_card_grants` (un grant par membre sélectionné)

### 3b — Notification membre
- [x] **T3.5** Hook `usePendingGrants(userProfile)` : charge les grants `status='pending'` pour `granted_to = moi`
- [x] **T3.6** Composant `PendingGrantsAlert.jsx` : popup au chargement si grants en attente
- [x] **T3.7** Branché dans `App.js`

### 3c — Modal d'acceptation
- [x] **T3.8** Composant `GrantAcceptanceModal.jsx` : affiche carte + coûts + Accepter/Refuser
- [x] **T3.9** Application des coûts au personnage (XP, Fortune, PP)
- [x] **T3.10** Grant → `accepted` ou `rejected` + `responded_at`
- [x] **T3.11** Notification Docte via `support_tickets`

---

## Étape 4 — Intégration fiche personnage

### 4a — Sélecteurs
- [x] **T4.1** `StepAtouts` : section "✦ Dons du Docte" → toggle → `character.atoutsPerso`
- [x] **T4.2** `StepPouvoirs` : section "✦ Dons du Docte" → toggle → `character.pouvoirsPerso`
- [x] **T4.3** `StepVieSociale` : section read-only "✦ Dons du Docte" dans la colonne Inventaire

### 4b — Affichage sur la fiche
- [x] **T4.4** `FicheParchemin.jsx` : atoutsPerso et pouvoirsPerso affichés en violet avec badge ✦
- [x] **T4.5** `useVieSociale.js` : ajouter `character.data?.pp_cartes_perso?.[pName] || 0` aux dépenses PP (commité en session précédente)

### 4c — Création de personnage
- [x] **T4.6** `CharacterCreator` : couvert automatiquement — charge les mêmes StepAtouts/StepPouvoirs/StepVieSociale déjà modifiés

---

## Tests & non-régression
- [ ] **T5.1** `npm test` vert après chaque étape
- [ ] `npm run build` vert avant le commit final

---

## Notes
- Fairy type offert par le Docte : **différé** (feature séparée)
- Refonte système PP : **différée** — on ajoute `pp_cartes_perso` en additif, pas de remplacement du calcul dynamique
- Visibilité "Docte voit les cartes perso des membres de son cercle" : app-layer uniquement (pas de RLS complexe), via query supplémentaire
