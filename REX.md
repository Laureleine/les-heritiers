# REX — Session 14 Juin 2026 (suite 3) — v17.4.14 "La Clé Retrouvée 🗝️"

## Ce qui a été livré

- Fix bug "mot de passe oublié" : l'événement `PASSWORD_RECOVERY` de Supabase n'était pas intercepté, ce qui renvoyait l'utilisateur à l'accueil au lieu d'un formulaire de reset.
- `useAppInit.js` : nouveau state `isRecoveryMode`, géré dans `onAuthStateChange` (événement `PASSWORD_RECOVERY` → `setIsRecoveryMode(true)`, `SIGNED_OUT` → `setIsRecoveryMode(false)`).
- `App.js` : condition `if (isRecoveryMode)` avant le test `!session || !userProfile`, affiche `<ResetPasswordForm />`.
- Nouveau composant `src/components/ResetPasswordForm.jsx` : champs nouveau mdp + confirmation, `supabase.auth.updateUser({ password })`, puis `signOut()` automatique après 2 s.

---

## Règles et astuces à retenir

### Supabase Auth — événement PASSWORD_RECOVERY

- **L'événement `PASSWORD_RECOVERY` est distinct de `SIGNED_IN`.** Quand un utilisateur clique le lien de reset, Supabase émet `PASSWORD_RECOVERY` (pas `SIGNED_IN`), avec une session temporaire. Si ce cas n'est pas géré dans `onAuthStateChange`, l'app se comporte comme si rien ne s'était passé et charge l'interface normale.
- **Flux correct :** `PASSWORD_RECOVERY` → afficher formulaire dédié → `updateUser({ password })` → `signOut()`. Le `SIGNED_OUT` résultant nettoie proprement la session et désactive `isRecoveryMode`.
- **`detectSessionInUrl: true`** doit être actif dans la config Supabase (c'est le défaut) pour que le token du lien email soit consommé automatiquement.

### Vercel MCP — list_deployments fonctionne en session background

- Le bug 403 observé lors de la session précédente n'était peut-être qu'un aléa. Dans cette session, `list_teams` puis `list_deployments` ont fonctionné sans 403. Tenter d'abord avant de conclure à un problème de scope.

---

## Ce qui reste à faire

- **Affichage des demandes joueurs dans TabRepairJournaux** (laissé de côté en v17.4.11) : la table `journal_repair_requests` existe, mais l'onglet ne la consulte pas encore.
- **Tests de la carte** : les composants Leaflet ne sont pas testés (dépendance DOM + API géo). Tester manuellement dans le navigateur.
- **Vérifier OHM en prod** : confirmer visuellement que les tuiles 1900 apparaissent bien.

---

# REX — Session 14 Juin 2026 (suite 2) — v17.4.13 "La Carte Vivante 🗺️🎨"

## Ce qui a été livré

- Sélection des POI depuis la liste latérale en mode Itinéraire (indicateurs 🟢🔴↺)
- Résultats de recherche scrollables (max-h + whitespace-normal, plus de troncature)
- Épingles POI : emoji par type + 5 formes CSS (goutte, cercle, étoile, diamant, bouclier) + color picker
- Adresse stockée en base, affichée dans la fiche, modifiable avec géocodage (déplace l'épingle)
- 5 modes de transport en onglets + vol d'oiseau (Haversine) + mode perso Supabase
- 3 migrations Supabase : `map_points.forme`, `map_points.adresse`, table `itineraire_modes_perso`

---

## Règles et astuces à retenir

### Isolation worktree en session background

- **Après compression de contexte, l'isolation worktree est réinitialisée.** Si les premières éditions passent puis les suivantes échouent avec "This background session hasn't isolated its changes yet", c'est que le contexte a été compressé et l'état d'isolation perdu. Solution : relancer `EnterWorktree` avec le chemin du worktree existant — cela re-satisfait le garde sans créer de nouveau worktree.
- **L'erreur "is the current working directory" est trompeuse** : elle survient quand on est DÉJÀ dans le worktree à l'ouverture de session. La même erreur survient si on est dans le worktree ET que le contexte a été compressé — dans ce cas, relancer EnterWorktree avec le chemin échoue sur "is the current working directory" mais les éditions passent quand même (le garde est satisfait par la position courante).

### Read avant Edit obligatoire après EnterWorktree

- Après un `EnterWorktree`, le système considère que les fichiers ne sont pas encore "lus" dans le nouveau contexte. Toujours faire un `Read` (même d'une ligne) avant un `Edit`, même si le fichier a été lu plus tôt dans la session.

### Leaflet et z-index

- **Le z-50 de Tailwind (z-index: 50) est insuffisant** face aux couches Leaflet (tiles: 200, markers: 600, controls: 800-1000). Une modale `fixed` à l'intérieur d'un ancêtre avec `transform` (comme le pane Leaflet) est capturée dans son contexte de stacking.
- **Solution propre : `createPortal(jsx, document.body)`** dans le composant React. La modale est rendue hors de l'arbre Leaflet, dans le body, sans conflit de z-index.

### OHM (OpenHistoricalMap)

- **Le paramètre `?date=YYYY-MM-DD` est requis** pour obtenir les tuiles historiques. Sans lui, OHM renvoie des tuiles vides ou un état "actuel" (quasi-vide dans OHM).
- **Les labels CartoDB doivent être inversés** : `opacity={0.75 * (1 - ohmOpacity)}` — quand la carte 1900 est à fond, les noms de rues modernes disparaissent.

### Nominatim + adressdetails

- Ajouter `&addressdetails=1` à la requête Nominatim pour obtenir `r.address.house_number` et `r.address.road`.
- La construction : `[a.house_number, a.road].filter(Boolean).join(' ')` avec fallback sur `label.split(',')[0].trim()`.

### React-leaflet eventHandlers et state closures

- Les `eventHandlers` des `<Marker>` capturent le state au moment du rendu. Si `tool` change, les handlers des marqueurs déjà rendus ont l'ancienne valeur de `tool`.

### RLS avec conditions multi-tables

- Pour les politiques SELECT impliquant plusieurs tables, chaque branche d'un EXISTS doit être un sous-SELECT indépendant et complet.
- Tester les politiques avec `execute_sql` depuis MCP Supabase avant d'appliquer la migration.

### Haversine vs OSRM

- **Distance OSRM** : suit le réseau routier. Pour la marche, OSRM foot donne la durée native (~5 km/h + pénalités intersection). Pour les autres modes, appliquer `distanceM / (vitesse * 1000 / 3600)`.
- **Distance Haversine** : droite géographique entre deux points. Formule pure, pas d'appel réseau. Utile pour "vol d'oiseau" ou pour les modes qui ignorent le relief (fées, êtres volants…).
- Le ratio route/vol d'oiseau à Paris est typiquement 1.1–1.4× (rues ≠ ligne droite).

### Hooks React dans des sous-composants

- `useState` et `useCallback` sont utilisables dans n'importe quel composant fonction React, pas seulement dans le composant principal. `PoiForm` utilise son propre state pour le géocodage d'adresse sans polluer le parent.

### Supabase upsert avec clé primaire

- Pour les tables avec `user_id` en PRIMARY KEY (une ligne par user), utiliser `supabase.from('table').upsert(payload, { onConflict: 'user_id' })` pour créer ou mettre à jour en une seule opération.

### Formes CSS pour icônes Leaflet (divIcon)

- `border-radius: 50% 50% 50% 0; transform: rotate(-45deg)` → goutte (teardrop). L'emoji intérieur doit être `transform: rotate(45deg)` pour rester lisible.
- `clip-path: polygon(50% 0%, 61% 35%, ...)` → étoile à 5 branches. Pas de box-shadow possible sur clip-path.
- `clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)` → bouclier/pentagone.
- Pour chaque forme, l'`iconAnchor` doit pointer le bas de la forme (tip géographique), pas le centre de la bounding box.

---

## Ce qui reste à faire

- **Affichage des demandes joueurs dans TabRepairJournaux** (laissé de côté en v17.4.11) : la table `journal_repair_requests` existe, mais l'onglet ne la consulte pas encore.
- **Tests de la carte** : les composants Leaflet ne sont pas testés (dépendance DOM + API géo). Tester manuellement dans le navigateur.
- **Vérifier OHM en prod** : confirmer visuellement que les tuiles 1900 apparaissent bien.
- **Vercel MCP 403** : le token Vercel en session background n'a pas accès au scope team. Vérifier le déploiement directement dans l'interface Vercel ou via le navigateur.
