# REX — Session 14 Juin 2026 (suite) — v17.4.12 "L'Arpenteur de Paris 📍🔍"

## Ce qui a été livré

- Fix curseur temporel carte : paramètre `?date=1900-01-01` sur les tuiles OHM + labels inversement proportionnels à l'opacité OHM
- Fix modale POI derrière la carte : `createPortal` vers `document.body` pour passer au-dessus de Leaflet
- Visibilité des POI : Public / Cercle / Privé / Admin + migration SQL + RLS + canEdit docte
- Placement POI par adresse Nominatim (geocoding exact, pré-remplissage du nom)
- Centrage carte au clic sur un POI (liste ou marqueur)
- Marqueurs POI utilisables comme points d'itinéraire en mode Itinéraire
- Accordéons par type + filtre texte + filtre type dans la liste POI

---

## Règles et astuces à retenir

### Isolation worktree en session background

- **Après compression de contexte, l'isolation worktree est réinitialisée.** Si les premières éditions passent puis les suivantes échouent avec "This background session hasn't isolated its changes yet", c'est que le contexte a été compressé et l'état d'isolation perdu. Solution : relancer `EnterWorktree` avec le chemin du worktree existant — cela re-satisfait le garde sans créer de nouveau worktree.
- **L'erreur "is the current working directory" est trompeuse** : elle survient quand on est DÉJÀ dans le worktree à l'ouverture de session. Relancer EnterWorktree après compression fonctionne car la condition de garde change.

### Read avant Edit obligatoire après EnterWorktree

- Après un `EnterWorktree`, le système considère que les fichiers ne sont pas encore "lus" dans le nouveau contexte. Toujours faire un `Read` (même d'une ligne) avant un `Edit`, même si le fichier a été lu plus tôt dans la session.

### Leaflet et z-index

- **Le z-50 de Tailwind (z-index: 50) est insuffisant** face aux couches Leaflet (tiles: 200, markers: 600, controls: 800-1000). Une modale `fixed` à l'intérieur d'un ancêtre avec `transform` (comme le pane Leaflet) est capturée dans son contexte de stacking.
- **Solution propre : `createPortal(jsx, document.body)`** dans le composant React. La modale est rendue hors de l'arbre Leaflet, dans le body, sans conflit de z-index.

### OHM (OpenHistoricalMap)

- **Le paramètre `?date=YYYY-MM-DD` est requis** pour obtenir les tuiles historiques. Sans lui, OHM renvoie des tuiles vides ou un état "actuel" (quasi-vide dans OHM). Le slider ne faisait rien parce qu'il changeait l'opacité de tuiles transparentes.
- **Les labels CartoDB doivent être inversés** : `opacity={0.75 * (1 - ohmOpacity)}` — quand la carte 1900 est à fond, les noms de rues modernes disparaissent.

### Nominatim + adressdetails

- Ajouter `&addressdetails=1` à la requête Nominatim pour obtenir `r.address.house_number` et `r.address.road` — permet de construire un nom propre ("38 Rue Madame") au lieu d'utiliser le `display_name` complet qui contient arrondissement, ville, pays…
- La construction : `[a.house_number, a.road].filter(Boolean).join(' ')` avec fallback sur `label.split(',')[0].trim()` si address est incomplet.

### React-leaflet eventHandlers et state closures

- Les `eventHandlers` des `<Marker>` capturent le state au moment du rendu. Si `tool` change, les handlers des marqueurs déjà rendus ont l'ancienne valeur de `tool`. Pour éviter les closures périmées, utiliser une ref sur `tool` ou s'assurer que le state utilisé dans le handler est bien capturé à chaque re-render.

### RLS avec conditions multi-tables

- Pour les politiques SELECT impliquant plusieurs tables (ex: `cercle_membres` + `cercles`), chaque branche d'un EXISTS doit être un sous-SELECT indépendant et complet — pas de JOIN dans la clause USING de la politique.
- Tester les politiques avec `execute_sql` depuis MCP Supabase avant d'appliquer la migration.

---

## Ce qui reste à faire

- **Affichage des demandes joueurs dans TabRepairJournaux** (laissé de côté en v17.4.11) : la table `journal_repair_requests` existe, mais l'onglet ne la consulte pas encore.
- **Tests de la carte** : les composants Leaflet ne sont pas testés (dépendance DOM + API géo). Acceptable — tester manuellement dans le navigateur reste la bonne approche.
- **Vérifier OHM en prod** : confirmer visuellement que les tuiles 1900 apparaissent bien avec `?date=1900-01-01` sur le déploiement Vercel (possible rate-limiting ou CORS à surveiller).
