# REX — Session 14 Juin 2026 — v17.4.11 "Le Plan de Paris 🗺️✨"

## Ce qui a été livré

- Carte de Paris 1900 interactive (Leaflet + OHM + CartoDB)
- POIs Supabase (`map_points`) avec 5 catégories et liaison personnages/cercles
- Routing OSRM (pied + fiacre 12 km/h) + recherche Nominatim
- Badge journal redesigné : plus grand, pulsant, texte "Journal à faire réparer par l'admin"
- Flux de demande de réparation joueur (modale + `journal_repair_requests`)
- Badge compteur admin sur nav (demandes en attente)
- Badge "Journal complet" supprimé
- Bouton "Nouveau" déplacé de la nav vers les onglets

---

## Règles et astuces à retenir

### Worktree

- **Ne jamais oublier l'`.env`** : à la création d'un worktree, le `.env` et `.env.local` du repo principal ne sont pas copiés. Le serveur démarre sans erreur visible mais toutes les requêtes Supabase échouent ("Les fluides éthérés sont perturbés"). Copier les deux fichiers avant le premier `npm start`.
- **Chemin absolu dans les éditions** : tous les outils d'édition doivent cibler `.claude/worktrees/<nom>/src/...`, jamais le repo principal.

### PostCSS / Tailwind

- **`@import` avant `@tailwind`** : si un `@import url(...)` Google Fonts se retrouve après les directives `@tailwind base/components/utilities`, PostCSS lève une erreur bloquante. Toujours mettre les `@import` en tête du fichier CSS.

### Cartes Leaflet dans React

- **`react-leaflet` exige un conteneur avec hauteur explicite** : sans `height: 100%` ou classe Tailwind `h-full` sur le wrapper ET le `MapContainer`, la carte n'apparaît pas (div de hauteur 0).
- **Icônes Leaflet cassées sous Vite** : les chemins d'images des marqueurs par défaut sont résolus par webpack mais pas par Vite. Toujours redéfinir `L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })` avec les imports explicites depuis `leaflet/dist/images/`.
- **`useMap()` et `useMapEvents()` doivent être dans un enfant du `MapContainer`** : ces hooks lancent une erreur si appelés au niveau du composant parent. Créer des sous-composants dédiés (`MapClickHandler`, `FlyToLocation`).

### Tiles historiques

- **IGN État-Major (data.geopf.fr WMTS)** ne rend pas aux zooms > 12 en milieu urbain — fond noir, zéro rues. Abandonné au profit de OpenHistoricalMap (OHM) + CartoDB Positron.
- **OHM + CartoDB** : OHM donne les tracés de rues de 1900 (fond historique), CartoDB `light_nolabels` donne la géométrie moderne lisible, CartoDB `light_only_labels` superpose les noms de rues actuels. Les trois ensemble donnent la meilleure expérience.

### Supabase

- **RLS + table `journal_repair_requests`** : la politique INSERT doit vérifier que `character_id` appartient bien à `auth.uid()` via un EXISTS sur `characters`. Sans ça, n'importe quel joueur peut insérer une demande pour n'importe quel personnage.
- **`select('*', { count: 'exact', head: true })`** pour un comptage sans charger les données — évite de tirer toutes les lignes juste pour un badge de compteur.

### Détection `journalNeedsRepair` côté joueur

- `LIGHT_SELECT` dans `supabaseStorage.js` n'inclut pas la colonne `data`. La fonction `journalNeedsRepair` a besoin de `data.stats_scellees` et `data.historique_xp`. Pour les joueurs non-admin, il faut une requête séparée sur les personnages scellés avec `.select('id, xp_depense, statut, data')`.
- Déclencher ce fetch dans un `useEffect` qui dépend de `myCharacters` ET `isAdmin` (skip si admin, qui a déjà `repairRows`).

### PowerShell + git commit avec accents

- `git commit -m @'...'@` (here-string PowerShell) échoue si le message contient des apostrophes ou des caractères spéciaux. **Solution** : passer par Bash (`git commit -m "$(cat <<'EOF' ... EOF)"`) pour les messages avec caractères non-ASCII.

### Tests

- Les tests Vitest (`npm test`) sont le filet de sécurité. Les lancer avant et après chaque modification significative. Sur ce projet : 336 tests, ~3.5 s.
- Les nouveaux composants de carte (Leaflet) ne nécessitent pas de tests unitaires car ils dépendent du DOM et de l'API géo — les tester manuellement dans le navigateur suffit.

---

## Ce qui reste à faire (non livré cette session)

- **Affichage des demandes joueurs dans l'onglet Admin** : la table `journal_repair_requests` existe, mais TabRepairJournaux ne la consulte pas encore. Prévoir un bloc "Demandes joueurs" avec bouton "Marquer comme résolu".
- **`public/assets/ammo/`** : dossier non tracké présent dans le worktree. À vérifier et nettoyer si inutile.
