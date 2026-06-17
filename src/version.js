// src/version.js

export const VERSION_HISTORY = [
  {
    version: "17.4.21 - \"L'État-Major et le Secret du Docte 🗺️🔐\"",
    date: "17 Juin 2026",
    description: "La Carte de Paris s'enrichit de deux apports restés trop longtemps dans l'ombre. Un véritable fond historique IGN — la Carte de l'État-Major (1820-1866) — s'ajoute aux tuiles modernes, avec un curseur glissant pour comparer les deux époques d'un geste. Et les Doctes gagnent un secret bien gardé : une bascule entre la vue de leur Cercle (ce que voient leurs joueurs) et leur vue Privée, où ne s'affichent que leurs propres repères confidentiels.",
    changes: [
      "🗺️ **Fond historique IGN (Nouveau) :** La Carte de l'État-Major (~1820-1866) de l'IGN Géoportail vient compléter le fond moderne CartoDB — aucune clé API requise. Trois modes : Historique seul, Comparer (slider), Actuelle seule.",
      "↔️ **Slider de comparaison :** Une poignée glissable (souris et tactile) découpe l'écran entre les deux époques, avec des étiquettes flottantes indiquant chaque côté. Un léger filtre sépia habille le fond historique.",
      "🔐 **Vue du Docte — Cercle / Privée (Nouveau) :** Les Doctes (propriétaires d'au moins un cercle) disposent d'une bascule dans la barre latérale. Vue Cercle : les repères publics + ceux du cercle choisi — exactement ce que voient leurs joueurs. Vue Privée : uniquement leurs propres repères confidentiels.",
      "🎯 **Sélecteur de cercle :** Un Docte de plusieurs cercles peut choisir lequel afficher en vue Cercle.",
      "🧪 **359 Sentinelles (+11) — toujours en faction, aucune régression.**",
    ]
  },
  {
    version: "17.4.20 - \"La Fiche du Docte 📜🔮\"",
    date: "16 Juin 2026",
    description: "L'Encyclopédie révèle ses pages les plus secrètes. Chaque espèce féérique gagne désormais sa propre Fiche du Docte — apparence, taille, reproduction, habitat, caractère, personnages célèbres — rédigée dans le Nuage et consultable par les seuls Initiés. Ces savoirs ne dormaient plus dans un parchemin figé : ils vivent maintenant en base, modifiables comme toute autre entrée de l'Encyclopédie, avec leurs propres propositions de correction.",
    changes: [
      "📜 **Fiche du Docte par espèce :** Sept champs narratifs (apparence, taille, reproduction, habitat, caractère, personnages célèbres, note du Docte) rejoignent chaque type de fée. Visibles uniquement par les Héritiers Initiés, dans la fiche de consultation comme dans le formulaire d'édition.",
      "🗄️ **Migration et backfill :** Les 26 espèces déjà décrites dans l'ancien grimoire statique (`FairyLore.js`) sont basculées en base Supabase — plus aucune dépendance à un fichier figé dans le code.",
      "✍️ **Propositions de correction étendues :** Les sept nouveaux champs lore entrent dans le circuit habituel des propositions de modification de l'Encyclopédie — un Initié qui corrige une Fiche du Docte suit le même chemin de validation que pour les autres savoirs.",
      "🧪 **348 Sentinelles — toujours en faction, aucune régression.**",
    ]
  },
  {
    version: "17.4.19 - \"Le Soin du Détail ♿🧹\"",
    date: "16 Juin 2026",
    description: "Deux chantiers silencieux mais essentiels. L'Atelier referme le Chantier 2 de son grand plan de rangement : la formule alchimique des échanges d'XP est désormais partagée dans les Compétences Utiles. Côté accessibilité, quatre détails que les doigts et les touches perçoivent avant même les yeux — les boutons qui rétrécissaient jusqu'à l'imperceptible gagnent en substance, et les anneaux de focus reprennent leur place visible dans la navigation au clavier.",
    changes: [
      "🧹 **DRY Chantier 2 — xpTransaction clôturé :** `handleRangChange` dans les Compétences Utiles migré vers la formule commune. 6 tests unitaires dédiés. Les deux fonctions d'ajout/suppression de spécialité conservent leur LOG conditionnel — intentionnel, incompatible avec `xpTransaction`.",
      "⌨️ **A11y — Focus clavier (×2) :** Les boutons de navigation par date dans l'Actualité reçoivent un anneau de focus vert visible quel que soit leur état. Le sélecteur de tri des Compétences Utiles reçoit un anneau ambré.",
      "✋ **A11y — Cibles tactiles (×2) :** Le bouton « afficher/masquer mot de passe » passe de ~20×20px à ~28×28px (ajout de `p-1`). Les boutons « Mot de passe oublié » et « Retour à la connexion » gagnent `py-1` — hauteur minimale WCAG 2.5.8 respectée.",
      "🧪 **348 Sentinelles — toujours en faction, aucune régression.**",
    ]
  },
  {
    version: "17.4.18 - \"La Main de l'Artisan 🔧\"",
    date: "16 Juin 2026",
    description: "Session d'artisanat pur. Trois gabarits réutilisables voient le jour dans les ateliers du Manoir — une barre de recherche, un panneau 'vide' et une barre d'onglets — qui viennent remplacer plus d'une centaine de lignes de boiseries identiques éparpillées d'une pièce à l'autre. Six fautes de protocole dans la hiérarchie des titres sont corrigées : les Héritiers naviguant au lecteur d'écran peuvent désormais traverser le Manoir sans perdre le fil. Dix chantiers de refactoring ont été passés en revue ; sept sont clôturés, trois reportés faute d'une convergence suffisante entre les implémentations.",
    changes: [
      "🗃️ **Gabarits UI mutualisés :** Trois composants communs — `SearchBar`, `EmptyState`, `TabBar` — absorbent les duplicatas dans 7 fichiers. Les onglets de l'Encyclopédie et du Suivi de Propositions, les écrans vides du Grimoire et les barres de recherche de l'administration parlent désormais d'une même voix.",
      "♿ **Accessibilité — Hiérarchie des titres :** 6 violations MODERATE résolues dans CharacterCard, Step1, StepCapacites, StepAtouts, StepCompetencesLibres et StepRecapitulatif. Les balises h3 sans parent h2 sont promues h2 — zéro changement visuel, navigation lecteur d'écran réparée.",
      "📋 **Audit DRY complet :** Chantiers 1–10 évalués et documentés. RangStepper, BudgetCounter, Badge/Chip et ButtonGroup jugés 'trop divergents' après examen du code réel. Seul ch.2 (xpTransaction) reste actif.",
      "🧪 **342 Sentinelles — toujours en faction, aucune régression.**",
    ]
  },
  {
    version: "17.4.17 - \"L'Estampe Belle Époque 🗺️🎨\"",
    date: "15 Juin 2026",
    description: "La Carte de Paris revêt enfin les couleurs de son époque. Un filtre sépia enveloppe les tuiles cartographiques d'une patine Belle Époque — chaud, légèrement assombri, comme une photographie ancienne. Un bouton permet d'afficher les rues actuelles en surimpression, pour comparer le Paris de 1900 au tracé moderne. La navigation est libre, sans borne géographique. Sous le capot, le premier chantier DRY se referme : un utilitaire commun absorbe les blocs try/catch/finally disséminés dans les hooks de données.",
    changes: [
      "🗺️ **Carte Belle Époque :** Les tuiles cartographiques s'enveloppent d'un filtre sépia — l'effet d'une estampe ancienne plutôt que d'une carte en couleur.",
      "🔀 **Toggle rues actuelles :** Un bouton dans la barre latérale permet d'afficher ou de masquer les noms de rues contemporains en surimpression, pour comparer le Paris de 1900 au tracé d'aujourd'hui.",
      "🧭 **Navigation libre :** La carte ne se limite plus aux murs de Paris intra-muros — on peut explorer les faubourgs sans être bloqué par une frontière invisible.",
      "🧹 **DRY Chantier 1 — withLoading :** Utilitaire async partagé qui absorbe le pattern setLoading/try/catch/finally dans 5 fonctions (useSnapshots, useEncyclopedia, useTelegraphe). 5 tests dédiés. Zéro régression.",
      "🧪 **342 Sentinelles — toujours en faction, aucune régression.**",
    ]
  },
  {
    version: "17.4.16 - \"Le Regard de la Communauté 🌐\"",
    date: "15 Juin 2026",
    description: "La page Communauté & Métriques s'ouvre désormais à tous les Héritiers sans restriction. Les distributions de types de fées, de profils et l'activité de la communauté sont calculées sur l'ensemble du corpus — plus seulement sur ce que chacun peut voir. Une seule requête sécurisée côté serveur bypasse les règles de visibilité et renvoie l'image globale du Manoir. Par ailleurs, Vitest n'inspecte plus les chantiers temporaires ouverts en parallèle.",
    changes: [
      "🌐 **Métriques globales pour tous :** La page Communauté (types de fées, profils majeurs/mineurs, activité des 30 derniers jours) affiche désormais les données de l'ensemble du Manoir pour tout Héritier connecté — et non plus uniquement les personnages visibles selon les droits de chacun.",
      "⚙️ **Nouvelle RPC `get_community_stats_detail` :** Fonction SQL SECURITY DEFINER qui court-circuite la RLS et renvoie les statistiques agrégées en une seule passe serveur.",
      "🧪 **Vitest ne fouille plus les chantiers :** `.claude/**` est exclu de la découverte de tests — plus de faux échecs liés aux worktrees parallèles.",
      "🧪 **337 Sentinelles — toujours en faction, aucune régression.**",
    ]
  },
  {
    version: '17.4.15 - "Le Bon Pas 🚶"',
    date: '14 Juin 2026',
    description: 'Les itinéraires retrouvent leurs justes proportions. Le temps de marche était calculé depuis le serveur OSRM avec une vitesse aberrante (~29 km/h) ; il est désormais déduit de la distance route à 5 km/h — comme tous les autres modes. Un promeneur de 1900 met maintenant 2h 38min pour traverser 13 km de Paris, et non 27 minutes.',
    changes: [
      '🚶 **Temps à pied corrigé :** La durée de marche était calculée par l\'API OSRM à une vitesse incohérente (~29 km/h). Elle est maintenant calculée sur la distance route à 5 km/h, en cohérence avec les autres modes de transport. Les proportions entre la marche, le fiacre, le cheval et le vélo sont désormais sensées.',
      '🧪 **336 Sentinelles — toujours en faction, aucune régression.**',
    ]
  },
  {
    version: '17.4.14 - "La Clé Retrouvée 🗝️"',
    date: '14 Juin 2026',
    description: 'Un héritier ne peut plus se retrouver bloqué devant la porte du Manoir faute de se souvenir de sa clé. Le lien "mot de passe oublié" envoyé par courriel mène désormais directement à un formulaire sécurisé pour en choisir un nouveau — et non plus à la page d\'accueil silencieuse.',
    changes: [
      '🗝️ **Réinitialisation de mot de passe fonctionnelle :** Le lien reçu par courriel ouvre désormais un formulaire dédié permettant de saisir et confirmer un nouveau mot de passe. Une fois validé, la session est refermée proprement et l\'Héritier peut se reconnecter.',
      '🧪 **336 Sentinelles — toujours en faction, aucune régression.**',
    ]
  },
  {
    version: '17.4.13 - "La Carte Vivante 🗺️🎨"',
    date: '14 Juin 2026',
    description: 'La Carte de Paris s\'enrichit dans ses moindres détails. Les épingles parlent désormais d\'elles-mêmes : chaque type de lieu arbore son emoji, sa forme et sa couleur propres — que l\'on peut personnaliser à loisir. Les fiches affichent l\'adresse du lieu, modifiable directement pour déplacer l\'épingle sur la carte. Côté itinéraires, cinq modes de transport de l\'époque s\'offrent en onglets — du promeneur au cavalier, du vélocipédiste au motocycliste — avec la distance à vol d\'oiseau en regard, et la possibilité de définir son propre mode de déplacement.',
    changes: [
      '📍 **Épingles expressives :** Chaque type de POI affiche son emoji (🏛️ lieu, 🎭 événement, 👤 personnage, 🔮 cercle, ⭐ point d\'intérêt) dans une épingle dont on peut choisir la forme (goutte, cercle, étoile, diamant, bouclier) et la couleur librement.',
      '🏠 **Adresse dans la fiche POI :** L\'adresse est affichée dans la carte de détail de chaque lieu. En mode modification, un champ adresse permet de géocoder une nouvelle rue — le résultat déplace automatiquement l\'épingle sur la carte et centre la vue.',
      '🗺️ **Sélection POI depuis la liste en mode Itinéraire :** Les épingles dans la liste latérale agissent comme points de départ (🟢) ou d\'arrivée (🔴) sans avoir à cliquer sur la carte.',
      '🔍 **Résultats de recherche lisibles :** La liste des suggestions défile dans une zone contenue, et chaque adresse s\'affiche en entier (plus de troncature).',
      '🐎 **Cinq modes de transport en onglets :** 🚶 À pied (OSRM) · 🐎 Cheval (17 km/h) · 🐴 Fiacre (12 km/h) · 🚲 Vélo (14 km/h) · 🏍️ Moto (20 km/h, limite Paris 1900). Distance route et distance vol d\'oiseau affichées simultanément.',
      '⚙️ **Mode de déplacement personnalisé :** Chaque joueur peut définir son propre mode (nom, emoji, vitesse en km/h) avec option "En vol" — la durée est alors calculée sur la distance à vol d\'oiseau, pas sur les rues. Sauvegardé en base par utilisateur.',
      '🧪 **336 Sentinelles — toujours en faction, aucune régression.**',
    ]
  },
  {
    version: '17.4.12 - "L\'Arpenteur de Paris 📍🔍"',
    date: '14 Juin 2026',
    description: 'La Carte de Paris gagne en précision et en lisibilité. Le glissement du curseur temporel révèle enfin les rues de 1900 telles qu\'elles étaient — l\'image historique s\'impose tandis que les étiquettes modernes s\'effacent. Les Héritiers épinglent leurs lieux d\'un simple nom de rue, voient la liste s\'organiser en accordéons par catégorie et la filtrent en un mot. La modale de détail surgit devant la carte au lieu de se terrer derrière. Et les itinéraires s\'enchaînent en cliquant directement sur les épingles.',
    changes: [
      '🗺️ **Curseur temporel opérationnel :** Le glissement "Moderne → 1900" affiche désormais de vraies tuiles historiques OpenHistoricalMap (paramètre `date=1900-01-01` manquant corrigé). En parallèle, les noms de rues modernes s\'estompent proportionnellement — à fond "1900", seule la carte d\'époque reste visible.',
      '📍 **Placement POI par adresse :** En mode "Ajouter un lieu", la barre de recherche devient "Adresse du lieu". Taper "38 rue Madame" et cliquer sur le résultat pose l\'épingle aux coordonnées exactes et pré-remplit le nom — numéro + nom de rue extraits automatiquement.',
      '🔵 **Visibilité des POI :** Chaque lieu porte désormais un niveau de visibilité — Public (visible par tous), Cercle (membres du cercle choisi seulement), Privé (créateur seul), Admin (gardiens seuls). RLS Supabase mis à jour. Les POIs existants passent en Admin par précaution. Les doctes de cercle peuvent modifier les POIs de leur cercle.',
      '🪟 **Modale POI au premier plan :** La fenêtre de détail s\'affichait derrière les tuiles (z-index Leaflet > z-50 Tailwind). Rendue via `createPortal` directement dans `document.body` — elle passe désormais au-dessus de tout.',
      '🧭 **Itinéraire via épingles :** En mode Itinéraire, cliquer sur un marqueur existant l\'utilise directement comme point de départ ou d\'arrivée.',
      '🎯 **Centrage automatique :** Cliquer sur un lieu dans la liste ou sur un marqueur centre et zoome la carte sur ce point.',
      '📂 **Accordéons par type :** La liste s\'organise en groupes repliables — Lieux, Événements, Adresses personnages, Cercles, Points d\'intérêt — avec pastille colorée et compteur.',
      '🔍 **Filtre texte + type :** Barre de recherche temps réel sur le nom + sélecteur de type. Les deux filtres se combinent.',
      '🧪 **336 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.11 - "Le Plan de Paris 🗺️✨"',
    date: '14 Juin 2026',
    description: 'Paris 1900 s\'ouvre sous les yeux des Héritiers : une carte interactive superpose le tracé historique des rues à une lecture moderne, et permet de planter ses propres repères — lieux de rendez-vous, adresses de personnages, cercles secrets, événements marquants. Deux points posés, et un itinéraire à pied ou en fiacre se dessine, chronométré. En parallèle, les Héritiers qui portent un journal d\'XP incomplet peuvent désormais interpeller l\'Administrateur d\'un simple clic — la demande lui parvient aussitôt, signalée par un compteur orange sur le tableau de bord.',
    changes: [
      '🗺️ **Carte de Paris 1900 (Nouveau) :** Une page dédiée accessible depuis la barre de navigation. Elle superpose les tuiles historiques OpenHistoricalMap (rues de 1900) sur un fond CartoDB lisible, avec un curseur d\'opacité pour doser entre fidélité historique et repérage contemporain.',
      '📍 **Points d\'Intérêt (POI) :** Les Héritiers et les Gardiens peuvent placer des marqueurs sur la carte — Lieux (brun), Événements (rouge), Adresses de personnages (bleu), Cercles (violet), Points d\'intérêt (vert). Chaque POI s\'enregistre en base Supabase, avec nom, description, et liens optionnels vers un personnage ou un cercle.',
      '🧭 **Itinéraires rues à rues :** En mode Itinéraire, deux clics suffisent pour tracer un chemin réel le long des artères parisiennes (OSRM). Le panneau affiche la distance, le temps à pied et le temps en fiacre (12 km/h).',
      '🔍 **Recherche d\'adresse :** Une barre de recherche Nominatim permet de trouver n\'importe quelle adresse parisienne de 1900 et de centrer la carte dessus.',
      '🔴 **Badge "Journal à faire réparer par l\'admin" :** Le badge s\'est métamorphosé — plus grand, bordure épaisse, animation pulsante. Il s\'affiche désormais pour les joueurs non-administrateurs dont le journal XP est détecté incomplet, pas seulement pour les Gardiens.',
      '✉️ **Demande de réparation joueur :** Un clic sur le badge ouvre une modale de confirmation. La demande s\'enregistre en base (`journal_repair_requests`) et déclenche un compteur orange pulsant sur le bouton Communauté du Gardien.',
      '🔕 **Badge "Journal complet" supprimé :** Il ne s\'affichait que pour les admins et n\'apportait aucune valeur — retiré définitivement.',
      '⚙️ **Infrastructure :** Deux nouvelles tables Supabase — `map_points` (POIs de la carte) et `journal_repair_requests` (demandes de réparation joueur) — avec RLS en bonne et due forme. Le bouton "Nouveau" a quitté la barre de navigation surchargée pour rejoindre la rangée des onglets.',
      '🧪 **336 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.10 - "La Clé du Casino 🎲🗝️"',
    date: '11 Juin 2026',
    description: 'Le lanceur de dés apprend la politesse. Désormais, la touche Échap referme la table de jeu, le focus reste bien enfermé dans la salle tant qu\'on n\'a pas quitté, et retrouve sagement son chemin vers le bouton des dés une fois la séance terminée. Les oreilles électroniques des lecteurs d\'écran peuvent enfin jouer sans se perdre.',
    changes: [
      '🎲 **DiceRoller — Esc :** La touche Échap ferme maintenant la modale du lanceur de dés.',
      '⌨️ **DiceRoller — focus trap :** La navigation clavier (Tab / Shift+Tab) reste confinée dans la modale tant qu\'elle est ouverte.',
      '🎯 **DiceRoller — retour focus :** À la fermeture, le focus revient automatiquement sur le bouton flottant des dés.',
      '🏷️ **DiceRoller — sémantique :** La modale reçoit `role="dialog"` et `aria-modal="true"`.',
      '🔍 **Audit compatibilité :** Nouveau test Playwright `audit-compat.spec.js` — contraste couleur, simulation daltonisme, navigation clavier, zoom 320px, tailles cibles tactiles. Rapport HTML généré automatiquement.',
    ]
  },
  {
    version: '17.4.9 - "Le Grimoire Sonore 🔊✨"',
    date: '11 Juin 2026',
    description: 'Le Grimoire apprend à parler. Un grand chantier d\'accessibilité ouvre les portes de l\'Atelier aux Héritiers qui naviguent au son plutôt qu\'à la vue : balises ARIA sur tous les boutons d\'icône, noms accessibles sur tous les sélecteurs, landmarks HTML structurant la page, et méta-viewport autorisant enfin le zoom. Sur treize écrans audités, onze affichent désormais zéro violation critique — une réduction de 91 % des infractions relevées.',
    changes: [
      '🔊 **Accessibilité — boutons icône :** Plus de trente boutons ne portant qu\'une icône reçoivent un `aria-label` descriptif — PDF, JSON, visibilité, Grimoire, Dés, Télégraphe, Recadrage portrait, contrôles +/− des caractéristiques et compétences, actions de Vie Sociale.',
      '🏷️ **Accessibilité — sélecteurs nommés :** Neuf éléments `<select>` sans label formel (Compétences Utiles, Futiles, Personnalisation, Langues) reçoivent un `aria-label` contextualisé.',
      '🗺️ **Accessibilité — structure de page :** L\'en-tête devient `<header>`, le contenu principal devient `<main>`. La page de connexion obtient son propre `<main>`. Le `<main>` interne de la Forge est converti en `<section>` pour éviter les doublons.',
      '📐 **Accessibilité — meta-viewport :** Suppression de `maximum-scale=1, user-scalable=no` dans `index.html` — le zoom est désormais libre sur mobile.',
      '🧪 **Tests E2E smoke :** Un test Playwright crée une fée complète de zéro — héritage, capacités, pouvoirs, atouts, caractéristiques, profils, compétences, vie sociale, personnalisation — puis la scelle et la rend publique.',
    ]
  },
  {
    version: '17.4.8 - "L\'Archiviste du Nuage 📚⚡"',
    date: '10 Juin 2026',
    description: 'Le Nuage opère une grande séparation des charges : les Archives de Référence (types de fées, profils, compétences, items sociaux, encyclopédie) quittent le Contexte du Personnage pour rejoindre leur propre Greffe dédié. React Query devient l\'Archiviste officiel, mémorisant les données pendant dix minutes sans interroger Supabase — la première consultation reste la seule nécessaire. Le Contexte du Personnage, allégé de ce fardeau encyclopédique, ne gouverne plus désormais que l\'état mutable du Héritier en cours de forge.',
    changes: [
      '📚 **GameDataContext (Nouveau) :** Les données de jeu statiques — types de fées, profils, compétences, items sociaux, badges, encyclopédie — migrent du CharacterContext vers un contexte dédié. Vingt-six fichiers abandonnent `const { ..., gameData } = useCharacter()` au profit de `const { gameData } = useGameDataContext()` — responsabilités clairement séparées.',
      '⚡ **React Query remplace le cache localStorage artisanal :** Le système maison (`LOCAL_CACHE_KEY`, `CACHE_TTL_MS`, `isCacheFresh`, `loadCoreGameData`, `loadHeavyLoreData`) cède la place à `@tanstack/react-query`. Un seul `Promise.all` charge les sept sources en parallèle. `staleTime: 10 min`, `gcTime: 30 min` — plus besoin de touches manuelles au localStorage.',
      '🔒 **Chargement gardé par l\'authentification :** Le fetch des archives de jeu ne démarre qu\'après connexion. `GameDataProvider` lit le cache React Query sans déclencher de requête — aucun appel RLS avant que le Sceau d\'identité ne soit posé.',
      '🧹 **CharacterContext allégé :** `gameData` et `setGameData` disparaissent entièrement du Contexte du Personnage. Il ne gouverne plus que l\'état mutable : `character`, `dispatchCharacter`, `isReadOnly`.',
      '🧪 **336 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.7 - "Le Verrou des Archives 🔒📜"',
    date: '10 Juin 2026',
    description: 'L\'Atelier refusait obstinément de se laisser visiter avant d\'avoir tout rangé — mais ses portes s\'ouvraient trop tôt, laissant entrer les Héritiers alors que les grands registres féeriques n\'étaient pas encore déposés sur les pupitres. Désormais le portail reste clos jusqu\'à ce que la dernière archive soit en place. Un chronomètre discret sur l\'écran d\'attente mesure le temps de déchiffrage, pour que l\'on sache combien de secondes le Nuage a besoin de patience.',
    changes: [
      '🔒 **App verrouillée pendant le déchiffrage complet :** L\'écran de chargement reste affiché jusqu\'à ce que toutes les données féeriques soient prêtes (types, capacités, pouvoirs, compétences, items sociaux). Sur cache frais (< 10 min), l\'ouverture reste instantanée. Sur cache périmé ou premier démarrage, aucune interaction n\'est possible avant que les archives soient pleinement accessibles.',
      '⏱️ **Chronomètre de déchiffrage :** Un compteur en secondes s\'affiche sous le message d\'attente uniquement lors du chargement des données lourdes, pour mesurer le temps réel à l\'usage.',
      '🧪 **345 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.6 - "Les Comptes du Mortel 🧍📊"',
    date: '10 Juin 2026',
    description: 'Un double oubli rattrapé : le calculateur de l\'Humain pur écrasait en silence les rangs de compétences futiles qu\'on lui investissait — le bouton + décomptait bien les points, mais le score restait figé à zéro, comme si la dépense avait été avalée par un gouffre invisible. En parallèle, le tableau de bord des votes de numérisation se dépolluait enfin de ses vieilles demandes déjà honorées, et les portes du Nuage — longtemps verrouillées en production depuis la grande migration — ont été rouverts pour de bon.',
    changes: [
      '🧍 **Scores futiles des Humains purs réparés :** Investir des points dans une compétence futile se reflète maintenant dans le score affiché. Le calculateur humain pur écrasait `futilesTotal` avec un objet vide à chaque recalcul — les rangs investis sont désormais lus depuis `competencesFutiles.rangs` et retranscrits fidèlement.',
      '🗳️ **Demandes de vote filtrées automatiquement :** Les journées déjà numérisées disparaissent d\'elles-mêmes du tableau de bord des votes. À chaque rafraîchissement, les dates présentes dans les archives sont exclues de la liste — seules les demandes encore en attente de numérisation restent visibles.',
      '🏗️ **Build Vercel rétabli :** La migration CRA → Vite avait oublié de graver `index.html` et `src/index.jsx` dans le dépôt. Les builds locaux fonctionnaient (Vite lisait le disque), mais Vercel clonait depuis git HEAD et échouait silencieusement depuis cinq commits. Les fichiers d\'entrée sont désormais bien inscrits dans les archives.',
      '🧪 **345 Sentinelles — 3 nouvelles recrues pour les futiles des humains purs.',
    ]
  },
  {
    version: '17.4.5 - "Le Nuage Sans Mirage 🌫️⚡"',
    date: '10 Juin 2026',
    description: 'Le Nuage souffrait de mirages : au premier démarrage, un Héritier pouvait commencer à forger son identité alors même que les données féeriques n\'étaient pas encore déchiffrées, causant des incohérences spectrales. Le Nuage est désormais discipliné — il attend d\'avoir tout son savoir avant d\'ouvrir les portes du créateur, et les quatre grandes Consultations des types de fées partent maintenant en simultané, trois fois plus vite qu\'auparavant.',
    changes: [
      '🌫️ **Plus de mirages au chargement :** Le bouton "Nouveau Héritier" reste voilé tant que les archives féeriques ne sont pas entièrement déchiffrées. Un sceau temporel (TTL 10 min) empêche le Nuage de se re-télécharger inutilement en pleine création, évitant ainsi les perturbations spectrales mid-session.',
      '⚡ **Déchiffrage des fées 3× plus rapide :** Les quatre Consultations du Nuage (Types, Capacités, Pouvoirs, Prédilections) partent maintenant en simultané au lieu de se succéder patiemment. Le rideau se lève bien plus vite au premier démarrage.',
      '⚙️ **Rouages de la Chancellerie huilés :** Les envois de notifications aux Héritiers, la validation des archives en attente et les statistiques du tableau de bord fonctionnent désormais en parallèle — plus d\'attente séquentielle.',
      '🧹 **Ménage de printemps :** Deux parchemins inertes depuis la fondation du projet ont été remis aux archivistes.',
      '🧪 **342 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.4 - "Le Mortel a un Sexe 🧍⚤"',
    date: '9 Juin 2026',
    description: 'Un oubli de taille : le créateur de personnage humain ne proposait aucun moyen de choisir le sexe, alors même que le jeu l\'exige pour valider l\'étape. Le sélecteur Homme / Femme fait désormais son apparition dans le panneau de droite, au même style ambré que pour les fées.',
    changes: [
      '⚤ **Sélecteur de sexe pour les humains purs :** Le panneau de création d\'un personnage humain affiche maintenant les boutons Homme / Femme, identiques visuellement à ceux des fées — fond ambré à la sélection, survol ambré au repos. Impossible de passer à l\'étape suivante sans avoir fait son choix.',
      '🧪 **335 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.3 - "L\'Humain Parmi les Fées 🧍🌿"',
    date: '9 Juin 2026',
    description: 'Le créateur de personnage s\'ouvre aux mortels : un Héritier peut désormais incarner un Humain pur, sans héritage féérique. Quatre rangs déterminent ses capacités — du Larbin qui fait les courses au Cador qui tire les ficelles — et le créateur adapte automatiquement le parcours : les étapes féeriques sont escamotées, les budgets de points recalculés selon la condition humaine.',
    changes: [
      '🧍 **Humain pur (Nouveau type de personnage) :** Un bouton dédié à l\'Étape 1 permet de créer un personnage entièrement mortel. Le sélecteur de types de fées cède la place au choix du rang, et le panneau de droite affiche le récapitulatif des budgets.',
      '🎖️ **Quatre rangs de condition humaine :** Larbin (8/10/10), Acolyte (10/15/12), Pointure (12/20/14), Cador (14/25/16) — attributs / compétences utiles / compétences futiles. Les rangs croissent strictement, du menu fretin au notable influent.',
      '⏭️ **Étapes féeriques escamotées :** Capacités, Pouvoirs et Atouts sont automatiquement sautés pour les humains. Les boutons de navigation les enjambent, et les pastilles de la barre de progression sont grisées.',
      '📊 **Budgets adaptatifs :** Les attributs, compétences utiles et futiles sont calculés depuis le rang humain. Pas de Féerie, de Masque, ni de Tricherie — juste la chair et l\'ambition.',
      '🗄️ **Base de données enrichie :** Deux nouvelles colonnes — `type_personnage` (défaut `fee`) et `rang_humain` — enregistrent le choix pour chaque personnage.',
      '🧪 **327 Sentinelles (+ 14 nouvelles) — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.2 - "Le Millésime Exact 📅🔧"',
    date: '9 Juin 2026',
    description: 'Le panneau de contrôle affichait "15 Avril 1899" pour un vote sur "15 Avril 1900" — l\'année était codée en dur. Elle est maintenant lue depuis la date réelle du vote. Les tests E2E Playwright sont câblés : config, credentials sécurisés, fixture et script npm.',
    changes: [
      '📅 **Fix panneau admin — Année codée en dur :** La colonne des votes de numérisation affichait toujours 1899 comme millésime, quelle que soit l\'année réelle du vote. `dateObj.getFullYear()` remplace le `1899` figé — les votes de 1900 s\'affichent désormais avec le bon millésime.',
      '🎭 **Tests E2E Playwright câblés :** `playwright.config.js` converti en CommonJS, `baseURL` + `webServer` activés, script `test:e2e` ajouté. Credentials déplacés vers `.env` (`E2E_EMAIL`/`E2E_PASSWORD`). Bug `[#1#]` corrigé dans `clonageDeMasse.spec.js`. Fixture `echantillon_heritiers.json` peuplée avec Marie Josèphe Grobis.',
      '🧪 **335 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.1 - "Les Points Verts du Grimoire 🟢📆"',
    date: '5 Juin 2026',
    description: 'Le mini calendrier des Actualités retrouve tous ses points verts — la requête était limitée à 3000 lignes, ce qui excluait les 1849 articles les plus récents. Place à une fonction RPC dédiée qui retourne les dates distinctes en un éclair. Les Figures sont désormais opérationnelles avec leur table en base, les données périmées ne s\'affichent plus au changement d\'onglet, et les Gardiens peuvent sceller les entrées des onglets Vie Sociale, Spécialités et Figures.',
    changes: [
      '🟢 **Mini calendrier réparé :** Les points verts manquants (Oct–Dec 1900) réapparaissent — la limite de 3000 articles est remplacée par une fonction SQL `get_article_dates()` qui retourne directement les 129 dates distinctes.',
      '⚡ **Performance :** 4849 lignes chargées → 129 dates. La requête ne sélectionne plus que les dates, pas les articles.',
      '🎭 **Figures en ligne :** Table `figures` créée en base, onglet Encyclopédie pleinement fonctionnel.',
      '🧹 **Affichage nettoyé :** Les données de l\'onglet précédent ne persistent plus quand la requête échoue — `setData([])` au début de chaque chargement.',
      '🔓 **Sceau élargi :** Les Gardiens peuvent désormais sceller les entrées des tables `social_items`, `specialites` et `figures`.',
      '🧪 **335 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.4.0 - "Le Livre des Figures 🎭📜"',
    date: '5 Juin 2026',
    description: 'L\'Encyclopédie s\'enrichit d\'une nouvelle section : les Figures. Chaque personnage notable dispose désormais d\'une fiche dédiée avec son nom, son titre, son clan, son apparence masquée et démasquée, et la possibilité d\'un Faux-Semblant — un type de fée d\'emprunt qui voile sa véritable nature.',
    changes: [
      '🎭 **Figures (Nouvel onglet) :** Un septième onglet dans l\'Encyclopédie pour cataloguer les personnages et entités notables du monde des Héritiers.',
      '📜 **Fiche Figure enrichie :** Chaque Figure peut porter un nom, un titre, un clan, une description narrative, et deux apparences — masquée (publique) et démasquée (véritable).',
      '🐺 **Faux-Semblant intégré :** Une section dédiée permet d\'activer un Faux-Semblant sur une Figure et de choisir son type de fée (parmi les espèces connues ou en saisie libre), avec suggestion automatique.',
      '👁️ **Visibilité dans l\'Encyclopédie :** Comme les autres entités, les Figures sont visibles par tous, modifiables via le système de propositions, et scellables par les Gardiens.',
      '🧪 **335 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.3.0 - "Les Masques du Grimoire 🎭📖"',
    date: '5 Juin 2026',
    description: 'Le Grimoire apprend à percer les masques : les contacts peuvent désormais porter plusieurs relations (Allié, Neutre, Famille, Hostile), chacune avec ses sous-catégories libres et son niveau de visibilité (Privé, Cercle, Public). Les Faux-Semblants permettent d\'afficher une façade publique tout en enregistrant la vérité — seul le Docte voit à travers le voile. La localisation s\'enrichit (ville, pays), et une barre de recherche permet de filtrer les Visages Rencontrés par nom, lieu ou catégorie.',
    changes: [
      '🎭 **Système de Relations (Nouveau) :** Chaque contact peut avoir plusieurs relations avec des catégories libres (Allié, Neutre, Famille, Hostile) et des sous-catégories à profondeur libre (ex: « Cousin > Germain > Issu de germain »). Les catégories connues sont suggérées mais l\'Héritier peut taper librement.',
      '📖 **Faux-semblants :** Une section dédiée dans la fiche contact permet d\'activer un faux-semblant — choisir un type de fée (parmi les espèces connues ou en saisie libre), définir les catégories publiées (visibles par les autres) et les catégories réelles (visibles seulement par soi-même et le Docte). Un icône 🎭 signale subtilement les contacts masqués.',
      '👁️ **Œil du Docte :** Les Doctes disposent d\'un bouton « Voir la réalité » qui révèle les vraies catégories derrière les faux-semblants de tous les contacts du Grimoire.',
      '🛡️ **Visibilité par relation :** Chaque relation peut être marquée Privée (visible seulement par soi), Cercle (visible par les membres du Cercle), ou Publique (visible par tous via le partage du Grimoire).',
      '🗺️ **Localisation structurée :** Les contacts disposent désormais d\'une localisation enrichie avec texte libre, ville et pays — en plus du champ localisation simple existant.',
      '🔍 **Barre de recherche :** Un champ de filtrage en temps réel permet de chercher parmi les contacts par nom, lieu ou catégorie de relation.',
      '🔄 **Migration automatique :** Les 662 contacts existants avec l\'ancien champ `statut_relation` sont automatiquement convertis au nouveau format au chargement — aucune donnée perdue.',
      '🧪 **335 Sentinelles (+22) — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.11 - "Le Cache du Phénix 🔥📦"',
    date: '4 Juin 2026',
    description: 'Le Nuage Féérique renaît de ses cendres : les tris de données protégés contre les noms manquants, le cache localStorage refuse les données vides, et les Héritiers bloqués depuis deux jours retrouvent l\'accès à leurs personnages sans manipulation manuelle.',
    changes: [
      '🔥 **Crash du Nuage Féérique corrigé :** Le chargement des types de fées plantait silencieusement sur un `null` dans les tris alphabétiques (assets, pouvoirs, spécialités) — le `try/catch` avalait l\'erreur et retournait des données vides, mises en cache pour l\'éternité.',
      '📦 **Cache vide automatiquement purgé :** Si le cache localStorage contient `fairyTypes: []` (traces du bug), il est détecté et invalidé au démarrage. Le Nuage se recharge à partir de Supabase.',
      '🛡️ **Tris null-safe :** `a.nom || \'\'.localeCompare(b.nom || \'\')` dans les 3 comparateurs de `supabaseGameData.js` — plus aucun crash si une donnée a un nom manquant.',
      '🧪 **291 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.9 - "Le Savoir des Spécialistes 🎭💰"',
    date: '4 Juin 2026',
    description: 'Les points de Loisirs ne sont plus les mêmes pour toutes les fées : 10 pour les Révélés, 14 pour les Faux-Semblants enfouis. Le coût d\'élévation de Fortune reconnaît désormais les spécialités Argent (Classe) et Finance (Sciences) pour réduire la note. Un script Python enchaîne les dates manquantes du Petit Parisien sans surveillance, et un Héritier Golem a été rappelé à l\'ordre.',
    changes: [
      '🎭 **Points de Loisirs ajustés par espèce :** Chaque type de fée dispose désormais de son propre budget de Compétences Futiles — 10 points pour toutes, 14 pour le Faux-Semblant enfoui (constante `pointsFutiles` dans `supabaseGameData.js`). Les personnages existants ne perdent rien : seuls les rangs de création comptent.',
      '💰 **Spécialités Argent & Finance réduisent le coût de Fortune :** La formule `getFortuneCost` intègre désormais les spécialités Argent (Classe) et Finance (Sciences). Posséder l\'une d\'elles ajoute +1 au rang de la compétence pour le calcul de la réduction. La nouvelle helper `getFortuneSpecialites` fouille toutes les sources (achats, dons, métier).',
      '🤖 **Batch pipeline pour les dates manquantes :** `batch_missing_dates.py` trouve les 293 trous dans la Gazette et les traite du plus récent au plus ancien. En cas de crise de tokens Gemini, la date est nettoyée de la base et le script s\'arrête proprement pour reprise le lendemain.',
      '🧹 **Emet Elohit (Aimé Éloit) rappelé à l\'ordre :** Le double Golem sans XP a été supprimé de la base. Sa copie (13 pts futiles) a été renommée et conserve son état.',
      '🧪 **291 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.8 - "Le Flash-Info de la Belle Époque 📺🗞️"',
    date: '2 Juin 2026',
    description: 'Le Petit Parisien prend la parole : chaque édition se voit désormais dotée d\'un flash-info façon présentateur de journal télévisé 1899 — les gros titres de la une, les faits divers pittoresques, le tout dans la langue des soirées fin-de-siècle. Un nouvel onglet Résumé du Jour dans la Gazette lit le bulletin à la place des Héritiers. Le pipeline a été assaini (plus d\'OCR perdu après un "Tout refaire") et 9 dates de la base ont été nettoyées pour repartir sur des bases saines.',
    changes: [
      '📺 **Flash-info quotidien (Nouveau) :** Le pipeline génère désormais un résumé global façon JT Belle Époque pour chaque édition numérisée. Gemini reçoit la liste des articles (titre, rubrique, résumé) et pond un bulletin de 5 à 8 lignes — ton solennel, vocabulaire 1900, alternance grands sujets et faits divers, le tout gravé dans `journal_daily_info.daily_summary`.',
      '🗞️ **Nouvel onglet "Résumé du Jour" :** Dans le sommaire de la Gazette, entre Lune et Chronique, un bouton 📺 Résumé du Jour affiche le flash-info. Les titres en gras, les lignes en retrait, la signature "Résumé généré par l\'IA — Belle Époque" — comme un vrai téléscripteur.',
      '🔧 **Fix pipeline — OCR après "Tout refaire" :** L\'option 3 (Annuler et tout refaire) déclenchait `run_step_0_cleanup` qui supprimait les fichiers OCR fraîchement téléchargés à l\'étape 1, puis le pipeline tentait l\'étape 2 sans OCR et s\'effondrait. Désormais l\'étape 1 est relancée automatiquement après le nettoyage.',
      '🗄️ **Colonne daily_summary ajoutée :** `journal_daily_info` s\'enrichit d\'un champ `daily_summary text` pour accueillir le flash-info — accessible côté frontend en même temps que la météo et la lune.',
      '🧹 **9 dates purgées de Supabase :** Les articles des éditions 1899-11-27 à 1899-11-30, 1899-12-09, 1899-12-11, 1899-12-23, 1900-02-11 et 1890-01-01 ont été supprimés de la base — les pipelines de regénération peuvent repartir sur une ardoise propre.',
      '🧪 **280 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.7 - "Le Sac à Dos du Voyageur 🎒⚡"',
    date: '1 Juin 2026',
    description: 'Le Grimoire ne transporte plus de bagages inutiles : le Casino physique (11 Mo) ne se décharge que quand on lance les dés, le Registre des versions (103 Ko) ne s\'ouvre que quand on le consulte, la Porte des Personnages et Pixie ne lestent plus le chargement initial, la distribution d\'XP dans les Cercles se fait en un éclair, et le Veilleur de Mise à Jour ne réveille plus le Grimoire quand on range l\'écran. 280 Sentinelles, toujours en faction.',
    changes: [
      '🎲 **11 Mo économisés — DiceBox en import différé :** La bibliothèque `@3d-dice/dice-box` (11 Mo) n\'est plus téléchargée au démarrage de l\'application. Elle ne se charge que quand le Héritier ouvre le Casino — un `await import()` dans le `useEffect` d\'initialisation. Un onglet ouvert en arrière-plan ne pompe plus 11 Mo de bande passante.',
      '📜 **103 Ko économisés — Registre des versions différé :** L\'intégralité de l\'historique des mises à jour (`VERSION_HISTORY`, 103 Ko) n\'est plus importé statiquement dans `App.js`. Il se charge dynamiquement à l\'ouverture de la modale. Le bundle critique perd 103 Ko, le temps avant premier affichage diminue d\'autant.',
      '🚪 **CharacterList (42 Ko) + PixieAssistant (23 Ko) passent en React.lazy :** Ces deux composants étaient importés statiquement dans le routeur. Désormais comme tous les autres, ils sont découpés en chunks séparés et chargés uniquement quand la route `/` est visitée.',
      '⚡ **Distribution XP dans les Cercles parallélisée :** `executeDistributeXp` exécutait une RPC `award_xp` par membre en séquence — une file d\'attente de 10 Héritiers = 10 appels à la suite. Les appels sont désormais lancés en parallèle via `Promise.all` : 10 appels simultanés au lieu de 10 séquentiels.',
      '💤 **Veilleur de mise à jour assagi :** `useAutoUpdate` interrogeait `/version.json` toutes les 60 secondes, même quand l\'onglet était caché dans un coin du navigateur. Il met désormais l\'horloge en pause quand le document est masqué (`visibilitychange`), et la relance au retour — zéro requête inutile.',
      '🧪 **280 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.6 - "La File d\'Attente Domptée 🐉📦"',
    date: '1 Juin 2026',
    description: 'Le Grimoire cesse de supplier Supabase à chaque contact ajouté : la file de synchronisation parle désormais en un seul échange, et les missives du Télégraphe ne s\'effondrent plus sur les canaux bavards. 280 Sentinelles en faction.',
    changes: [
      '🐉 **N+1 terrassé dans la synchronisation du Grimoire :** `flushContactsToGrimoire` exécutait 2 requêtes `SELECT…INSERT` ou `SELECT…DELETE` par contact — une par item dans la file d\'attente. Ajouter 5 contacts à la fois déclenchait 10 requêtes. Désormais : un seul `SELECT … IN(noms)` pour détecter les doublons, un seul `INSERT` en rafale pour les ajouts, et une requête par type pour les suppressions — 2 à 4 requêtes au total, quel que soit le nombre d\'actions.',
      '📦 **100+ missives par canal ne font plus tomber le Télégraphe :** La requête `.in(\'message_id\', ids)` sur `chat_message_reads` passait tous les IDs en une seule clause URL. Pour un canal avec 500 messages, l\'URL dépassait la limite PostgREST et la requête échouait silencieusement. Les IDs sont désormais découpés en paquets de 100 et requêtés en parallèle via `Promise.all` — canaux bavards, canaux chargés d\'histoire, le Télégraphe ne bronche plus.',
      '🧪 **280 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.5 - "Le Souffle du Forgeron 🔥⚡"',
    date: '1 Juin 2026',
    description: 'Le Grimoire prend un bain de performance : animations réelles (plus de classes Tailwind fantômes), providers stabilisés (fin des re-rendus en cascade), 43 Mo de bundle envolés (imports wildcard Lucide remplacés), et le battement d\'ailes de Pixie ralenti pour ne plus vider les batteries. 280 Sentinelles veillent, aucune régression.',
    changes: [
      '🔥 **Animations `fade-in*` ressuscitées :** 124 classes Tailwind `animate-fade-in*` flottaient dans le vide — aucune keyframes définie. Les transitions d\'entrée de tous les composants sont désormais réelles : fondu, glissement vers le haut et vers le bas fonctionnent enfin.',
      '⚡ **Providers stabilisés (CharacterContext + ForgeContext) :** Les valeurs des providers sont désormais wrappées dans `useMemo`, et les 7 fonctions de la Forge dans `useCallback`. Fini les re-rendus en cascade qui redessinaient toute l\'arborescence au moindre changement.',
      '📦 **43 Mo retirés du bundle :** 4 fichiers (AccountSettings, ChangeCard, TabForgeTitres, TabUsers) importaient `* as LucideIcons` — la bibliothèque entière à chaque fois. Un `iconMap` centralisé dans `icons.js` ne référence que les icônes réellement utilisées (98 vs 1000+).',
      '🃏 **React.memo(CharacterCard) redevient efficace :** `commonCardProps` créait un nouvel objet à chaque render, brisant le memo. Désormais stabilisé par `useMemo`, et `onRepairRequest` n\'est plus une fonction inline par carte.',
      '🦋 **Ailes de Pixie ralenties :** Le battement passait de 0.05s (20 Hz — aussi rapide qu\'un ventilateur d\'ordinateur) à 0.3s (3 Hz). Ajout du respect de `prefers-reduced-motion` pour les utilisateurs sensibles.',
      '🧪 **280 Sentinelles — toujours en faction, aucune régression.',
    ]
  },
  {
    version: '17.2.4 - "Le Journal sans An 🗞️✂️"',
    date: '1 Juin 2026',
    description: 'Le Petit Parisien perd son millésime — le composant Actualite1899 devient simplement Actualite. Le Faux-Semblant enfoui était commité partiellement : ses capacités, ses 19 points de caractéristiques, son bonus de tricherie et son enregistrement encyclopedia sont maintenant au complet. Les tests Supabase ont leur MockChain unifiée, et le mode sombre peut être activé par classe CSS — prêt pour une future bascule nuit.',
    changes: [
      '✂️ **Actualite1899 → Actualite :** Le composant de la Gazette perd son millésime. Fichier renommé, imports, tests, et routage mis à jour — zéro occurrence de l\'ancien nom dans le code source.',
      '🎭 **Faux-Semblant enfoui au complet :** Capacités, caractéristiques (19 points au lieu de 10), bonus de Tricherie pour Féérie < 3, et enregistrement encyclopedia — tous les fichiers de support enfoui précédemment oubliés sont maintenant commités.',
      '🧪 **MockChain unifiée dans les tests :** Le mock Supabase utilise désormais une classe MockChain complète avec toutes les méthodes (neq, in, limit, gte, lte...) — fin des TypeError silencieux dans les tests.',
      '🌙 **darkMode: class dans Tailwind :** Le mode sombre peut être activé par la classe CSS `dark` sur un élément parent, au lieu du media query automatique — prêt pour le bouton de bascule.',
      '🧪 **280 Sentinelles — toujours en faction.',
    ]
  },
  {
    version: '17.2.2 - "L\'Almanach sans Doublon ✝️🌿🌑"',
    date: '31 Mai 2026',
    description: 'Le calendrier des fêtes perd ses doublons (fin des Immaculée Conception en double le 8 décembre !), le filtre Toutes/Chrétiennes/Celtiques migre dans le titre de Fêtes & Traditions où il est toujours visible. Quand on cherche une fête celtique et qu\'il n\'y en a pas ce jour-là, le Petit Parisien annonce la prochaine avec sa date. Et dans Influence Lunaire, les éclipses de 1899 à 1914 défilent — solaires et lunaires, avec leur visibilité géographique.',
    changes: [
      '✝️ **304 doublons supprimés du calendrier :** 19 fêtes chrétiennes fixes étaient en double avec les saints du jour (Épiphanie, Toussaint, Immaculée Conception, Noël, etc.). Le seed passe de 6 595 à 6 291 entrées — plus aucune redite, chaque fête apparaît une seule fois par an.',
      '🌿 **Filtre déplacé dans le titre :** Le sélecteur Toutes/Chrétiennes/Celtiques est désormais toujours visible, intégré à l\'en-tête de Fêtes & Traditions. Plus besoin d\'attendre qu\'il y ait plusieurs fêtes pour filtrer.',
      '📅 **Prochaine fête celtique :** Quand le filtre Celtiques est actif mais qu\'aucune fête n\'a lieu ce jour, le bloc affiche la prochaine fête celtique à venir — nom, date et description — dans un encart vert bien visible.',
      '🌑 **Éclipses 1899-1914 dans Influence Lunaire :** Les 48 éclipses (solaires et lunaires) de toute la période sont listées sous la chronique lunaire — nature (totale, partielle, annulaire, hybride) et visibilité géographique.',
      '🧪 **280 Sentinelles — toujours en faction.',
    ]
  },
  {
    version: '17.2.1 - "Les Saints du Calendrier ✝️📅"',
    date: '31 Mai 2026',
    description: 'Le Petit Parisien s\'enrichit d\'un véritable almanach : les 365 saints du calendrier romain (nom, domaine, petite histoire) accompagnent désormais chaque jour de l\'année, de 1899 à 1914. En ouvrant Fêtes & Traditions, les Héritiers découvrent le saint du jour — Sylvestre, Catherine, Nicolas, Éloi, et tous leurs compagnons — exactement comme dans les almanachs de la Belle Époque.',
    changes: [
      '✝️ **365 saints du calendrier romain :** Chaque jour de l\'année a désormais son saint — prénoms, domaines de patronage (abbés, évêques, martyrs, vierges, docteurs), et une courte notice biographique. Calendrier complet et historiquement fidèle au rit romain français de 1899.',
      '📅 **Almanach perpétuel :** Les saints sont générés pour chaque année de 1899 à 1914, y compris le 29 février pour les années bissextiles. Le saint du jour s\'affiche dans Fêtes & Traditions aux côtés des autres fêtes chrétiennes et celtiques.',
      '🗄️ **6 595 entrées en base :** Le seed passe de 752 à 6 595 fêtes dans `journal_holidays` — un almanach complet peuplé en une seule commande.',
      '🧪 **280 Sentinelles — toujours en faction, toujours vigilantes.',
    ]
  },
  {
    version: '17.2.0 - "Le Ciel Révélé ☀️🌙"',
    date: '30 Mai 2026',
    description: 'La météo déterministe à 4 options et la lune cyclique laissent place à de véritables données astronomiques : lever/coucher du soleil calculé par la librairie Astral, phase lunaire réelle, et conditions météo historiques. Un nouveau script Python, une table dédiée en base, et une étape 7 dans le pipeline automatisent le tout. 38 jours déjà peuplés, les suivants le seront à la création.',
    changes: [
      '☀️ **Soleil réel (Astral) :** Le lever et le coucher du soleil sont désormais calculés par la librairie Python `astral` pour les coordonnées de Paris en 1899. Fin du déterminisme — l\'astre du jour se lève et se couche aux vraies heures de l\'époque.',
      '🌙 **Lune réelle :** La phase lunaire n\'est plus une rotation sur 4 options. Le calcul astronomique (âge de la lune, cycle de 29.5 jours) donne la vraie phase pour chaque date de 1899 — Nouvelle Lune, Premier Croissant, Pleine Lune, etc.',
      '🌤️ **Météo historique :** Les conditions météo sont générées par `daily_info.py` avec scraping de données réelles (températures, précipitations, vent) et une description narrative enrichie.',
      '🗄️ **Nouvelle table `journal_daily_info` :** Les données météo, soleil et lune sont stockées dans une table Supabase dédiée avec upsert — levée du soleil, coucher, phase lunaire, icône, description, et toutes les données météo structurées.',
      '⚙️ **Pipeline étape 7 :** Le pipeline journalier intègre désormais une étape 7 qui génère et insère automatiquement les données de `journal_daily_info` après l\'upload des articles. Également nettoyée lors de l\'option "Annuler et tout refaire".',
      '📜 **Backfill 38 jours :** Les 38 dates déjà en base (26 novembre → 2 janvier) ont été rétroactivement peuplées avec leurs données météo, soleil et lune.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.1.2 - "Le Résumé Honnête 🗞️🩺"',
    date: '30 Mai 2026',
    description: 'Les jours sans résumé de la Gazette disparaissent au lieu d\'afficher un message trompeur. Le pipeline sait désormais tout effacer et recommencer une journée depuis zéro. Le max-rows PostgREST est passé de 1000 à 5000 — tout décembre verdit enfin.',
    changes: [
      '🩺 **Résumé masqué quand absent :** Fini le "Résumé en cours de chargement..." mensonger. Si un article n\'a pas de résumé en base, le bloc beige ne s\'affiche tout simplement pas. Si aucun article du jour n\'a de résumé, la journée est considérée comme non chargée — le bouton de vote réapparaît.',
      '🗑️ **Pipeline : option "Annuler et tout refaire" :** Nouvelle option 3 dans le menu des dates déjà traitées. Supprime les articles en base (`DELETE`), efface les fichiers générés (OCR, journal_data, events), puis relance le pipeline complet depuis l\'étape 1.',
      '🟢 **Limite PostgREST repoussée à 5000 :** Le `max-rows` du projet Supabase est passé de 1000 à 5000. Les 1554 articles sont désormais tous chargés. Tout décembre 1899 verdit dans le calendrier — fin du "trou" à partir du 17.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.1.1 - "L\'Article sans Page 🗞️✂️"',
    date: '30 Mai 2026',
    description: 'Le numéro de page qui alourdissait chaque article de la Gazette disparaît. Le titre rétrécit juste assez pour que le badge et le nom tiennent toujours sur une seule ligne, même sur les écrans les plus étroits.',
    changes: [
      '🗞️ **Page de l\'article supprimée :** Le petit "Page X" en italique à droite du titre a été retiré. L\'article respire mieux, le regard ne part plus en diagonale.',
      '🔤 **Titre réduit (`text-base md:text-lg`) :** Le titre passait de `text-lg` (18px) à `md:text-xl` (20px). Il est maintenant en `text-base` (16px) / `md:text-lg` (18px). Juste ce qu\'il faut pour que le badge catégorie et le titre restent côte à côte sans casser à la ligne.',
      '🧹 **Header simplifié :** Plus besoin du `flex sm:flex-row justify-between` qui alignait le titre à gauche et la page à droite. Le header est maintenant un simple `mb-4` — moins de layout, plus de lisibilité.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.1.0 - "La Gazette Apprivoisée 📰✨"',
    date: '30 Mai 2026',
    description: 'Les articles regagnent de l\'air : le badge catégorie monte sur la ligne du titre, le lourd "RÉSUMÉ RESTAURÉ" disparaît, le bouton s\'allège, le sélecteur en double est retiré. La lecture de la Gazette gagne en clarté et en compacité.',
    changes: [
      '📰 **Badge catégorie sur la ligne du titre :** Le badge "Politique", "Feuilleton", etc. remonte sur la même ligne que le titre de l\'article — `flex flex-wrap items-center gap-2`. Une ligne entière de gagnée par article.',
      '✂️ **"RÉSUMÉ RESTAURÉ" supprimé :** L\'en-tête `📝 RÉSUMÉ RESTAURÉ :` ne s\'affichait que par habitude technique — le résumé se suffit à lui-même. Une ligne de gagnée.',
      '📖 **Bouton allégé :** "Lire l\'article complet restauré" → "Lire l\'article complet". 3 mots de moins, même clarté.',
      '🗑️ **Sélecteur de date retiré :** La combo liste déroulante des dates doublonnait le calendrier popover. Supprimée.',
      '🧹 **Double icône calendrier retirée :** L\'icône Lucide `<Calendar>` doublonnait l\'emoji 📅 dans le texte "DATE ARCHIVÉE". L\'import a été nettoyé.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.0.9 - "Le Treizième au Grand Jour 🟢📅"',
    date: '30 Mai 2026',
    description: 'Le 13 décembre 1899 refusait obstinément de verdir. La cause : PostgREST limite les requêtes à 1000 lignes, et sans `ORDER BY`, le découpage aléatoire excluait certaines dates. Désormais le tri est déterministe et la limite repoussée à 3000.',
    changes: [
      '📅 **Fix racine — limite PostgREST 1000 lignes :** `fetchAvailableArticleDates()` appelait `.select(\'date, category\')` sans `.order()` ni `.limit()`. PostgREST impose une limite par défaut de 1000 lignes. Avec 1159 articles en base, les 159 dernières lignes étaient aléatoirement coupées. Le 13 décembre (43 articles) tombait parfois dans la partie tronquée. Ajout de `.order(\'date\', { ascending: true }).limit(3000)`.',
      '🔄 **Re-fetch sur dateStr supprimé :** Le `useEffect` qui re-déclenchait `fetchAvailableArticleDates()` à chaque changement de date créait une race condition avec l\'ajout atomique de `fetchArticlesForDate`. Le re-fetch replaçait le Set entier depuis Supabase, écrasant l\'ajout frais. Désormais seul l\'appel initial (avec order + limit) peuple le Set ; l\'ajout atomique le maintient à jour.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.0.8 - "Le Point Vert du Jour Actif 🟢🎯"',
    date: '30 Mai 2026',
    description: 'Quand on ouvrait le calendrier sur le 13 décembre, cette date était la sélectionnée — et le style brun de sélection écrasait tout signe vert. Le point vert est désormais visible même sur la date active.',
    changes: [
      '🎯 **Point vert sur la date sélectionnée :** Le point vert (`!isSelected`) était masqué pour la date active. Résultat : le 13 décembre — pourtant bien chargé — semblait gris dans le calendrier parce qu\'il était la date sélectionnée. Le point s\'affiche maintenant sur toutes les dates avec articles, sélectionnée ou non. La couleur s\'adapte : `bg-emerald-300` (plus clair) sur fond brun sélectionné, `bg-emerald-500` (vif) sur les autres.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.0.7 - "Le Vert Visible 🟢✨"',
    date: '30 Mai 2026',
    description: 'Le point vert était bien là, mais le fond des cases du calendrier restait désespérément pâle — `bg-emerald-50`, quasi blanc, noyait la couleur. Les dates archivées brillent désormais d\'un vert franc et lisible.',
    changes: [
      '🎨 **Vert visible (fix CSS calendrier) :** `bg-emerald-50` était si pâle (`#ecfdf5`) qu\'il se confondait avec le fond blanc. Et `border-emerald-250` n\'existant pas dans Tailwind standard, la bordure était absente. Remplacé par `bg-emerald-200/70` avec `border-emerald-400` — un vert soutenu mais élégant, visible au premier coup d\'œil. En mode sombre, le fond passe de `bg-emerald-950/45` à `/60` et la bordure à `emerald-700`.',
      '🧪 **272 Sentinelles** — toujours en faction.',
    ]
  },
  {
    version: '17.0.6 - "Le Point Vert Émeraude 🟢"',
    date: '30 Mai 2026',
    description: 'Les dates chargées dans la Gazette brillent désormais d\'un vert émeraude dans le calendrier, même si elles ont été insérées après l\'ouverture du journal. Plus aucune date ne reste grise alors qu\'elle recèle des articles.',
    changes: [
      '🟢 **Point vert enfin fidèle (fix calendrier) :** `fetchAvailableArticleDates()` n\'était appelée qu\'au montage du composant. Si un Héritier insérait des articles en base pendant sa consultation, le calendrier restait aveugle — la date apparaissait grise alors que la gazette était bien là. Désormais la liste des dates disponibles se rafraîchit à chaque changement de jour, et s\'enrichit instantanément dès que le chargement confirme la présence d\'articles.',
      '🔄 **Réactivité accrue :** Deux mécanismes se relaient : un `useEffect` sur `dateStr` relance la requête complète à chaque navigation, et un ajout atomique au Set dès que `fetchArticlesForDate` réussit. Le point vert et le badge "Gazette en base" apparaissent sans attendre le prochain rechargement.',
      '🏗️ **Code extrait du `useEffect` de montée :** La fonction `fetchAvailableArticleDates` a été promue au rang de `useCallback` au niveau du composant, libérée de son carcan initial. Elle peut désormais être invoquée depuis n\'importe quel effet.',
      '🧪 **272 Sentinelles** — toujours en faction, toujours vigilantes.',
    ]
  },
  {
    version: '17.0.4 - "Le Ciseau du Portraitiste ✂️"',
    date: '26 Mai 2026',
    description: 'Le Daguerréotype s\'affine : les Héritiers peuvent désormais recadrer leur portrait avant de le graver dans le Grimoire. Plus besoin d\'un logiciel externe — un simple coup de ciseau visuel, avec zoom et ajustement, directement dans la modale de personnalisation. Le résultat s\'applique aux deux masques comme au médaillon du Cercle.',
    changes: [
      '✂️ **Recadrage intégré (Nouveau) :** Après avoir choisi une photo, une modale de recadrage s\'ouvre avec un ratio 3:4 (format portrait). L\'utilisateur ajuste la zone visible et le zoom (×1 à ×3) avant de confirmer.',
      '🖼️ **Propagation automatique :** Le portrait recadré remplace l\'original dans le bucket `portraits`. Toutes les zones d\'affichage bénéficient du nouveau cadre — le masque humain, la forme féérique, et le petit médaillon rond du Cercle.',
      '🔧 **Moteur canvas pur :** Le recadrage utilise `react-easy-crop` pour l\'interface tactile, et un canvas natif (`getCroppedBlob`) pour produire le fichier final — zéro dépendance lourde, zéro envoi réseau inutile.',
      '🧪 **272 Sentinelles** veillent toujours au grain.',
    ]
  },
  {
    version: '17.0.3 - "La Fenêtre de la Forge 🖼️"',
    date: '26 Mai 2026',
    description: 'La Forge s\'ouvre sur le monde : plus besoin de glisser-déposer pour joindre une capture à son rapport — un simple clic suffit, depuis un téléphone comme depuis un ordinateur. Un aperçu s\'affiche avant la gravure, et le tout est gardé par les mêmes garde-fous que le Grimoire des portraits.',
    changes: [
      '🖼️ **Clic pour joindre (Mobile + Desktop) :** La zone de dépôt de la Forge est désormais cliquable. Un simple tap ouvre la galerie ou le dossier. Les Héritiers nomades ne sont plus condamnés au silence faute de glisser-déposer.',
      '👁️ **Aperçu avant gravure :** L\'image sélectionnée s\'affiche en direct dans la modale. On peut la retirer d\'un clic (corbeille) sans perdre le formulaire rempli.',
      '🛡️ **Garde-fous :** Mêmes règles que les portraits — validation taille (10 Mo max) et formats (JPEG, PNG, WebP, GIF) avec message d\'erreur clair.',
    ]
  },
  {
    version: '17.0.2 - "Le Sceau du Secret 🔐"',
    date: '26 Mai 2026',
    description: 'Le Grimoire renforce ses portes : les Héritiers peuvent désormais sceller leur propre accès d\'un mot de passe robuste, les curieux ne devinent plus si une adresse est déjà gravée dans nos registres, et un automate Turnstile veille à l\'entrée de l\'inscription. Le Grand Livre crée aussi un profil par défaut si l\'encre du nouveau venu venait à manquer.',
    changes: [
      '🔐 **Sceau d\'Argent (Nouveau) :** Chaque Héritier peut modifier son mot de passe depuis ses Préférences. Le formulaire vérifie l\'ancien sceau avant d\'en graver un nouveau, avec les mêmes exigences que l\'inscription : 8 caractères, une majuscule, un chiffre.',
      '🤫 **Anti-Énumération (Sécurité) :** Fini les "User already registered" qui trahissaient les adresses existantes. Qu\'un email soit nouveau ou déjà gravé dans nos registres, le Grimoire répond toujours d\'un seul message : "Missive expédiée !".',
      '🛡️ **Mot de passe renforcé :** Les nouveaux Héritiers doivent choisir un mot de passe d\'au moins 8 caractères, avec une majuscule et un chiffre — barrière supplémentaire contre les chasseurs d\'identités.',
      '🌀 **Automate Turnstile (Anti-Bot) :** Un gardien invisible (Cloudflare Turnstile) veille à la porte de l\'inscription et bloque les automates malveillants sans déranger les Héritiers légitimes.',
      '📜 **Profil de secours :** Si le déclencheur automatique de création de profil vient à faillir, le Grimoire crée lui-même un profil de base pour le nouvel arrivant — plus d\'Héritiers orphelins errant dans les limbes.',
      '🧪 **272 Sentinelles montent la garde (+29) :** 11 tests sur l\'inscription (validation, anti-énumération, connexion, mot de passe oublié), 3 tests sur le fallback de profil, et 3 tests sur le changement de mot de passe.',
    ]
  },
  {
    version: '17.0.0 - "La Gazette Mécanique 📰"',
    date: '24 Mai 2026',
    description: 'Le Petit Parisien s\'émancipe de son carcan de papier : toutes les archives quotidiennes sont migrées en base de données Supabase, et un magnifique calendrier interactif permet de naviguer de 1899 à 1914. Les Héritiers peuvent désormais voter pour numériser leurs journées préférées, et les Gardiens piloter la Forge.',
    changes: [
      '📰 **Migration vers Supabase :** Les articles et les événements historiques du sous-projet `/1899` ne dépendent plus de fichiers statiques volumineux. Ils sont récupérés de façon dynamique et optimale en base de données Supabase depuis les tables `journal_articles` et `historical_events`.',
      '📅 **Calendrier Interactif Popover (1899 - 1914) :** Remplacement du sélecteur de date natif du navigateur par un calendrier sur-mesure en pur React/CSS. Il permet de naviguer à travers un siècle naissant (de novembre 1899 à décembre 1914) et de visualiser l\'état des archives.',
      '💚 **Mise en surbrillance stricte des articles :** Le calendrier mensuel et l\'indicateur d\'état allument en vert *uniquement* les dates pour lesquelles de vrais articles de presse sont chargés en base. Les données de météo et d\'influence lunaire (générées à la volée côté client) sont sagement exclues du calcul.',
      '🗳️ **Démocratie Féérique & Votes :** Les Héritiers standards disposent désormais d\'un bouton de vote persistant dans le cache local (anti-double-vote) pour demander la numérisation des dates non encore archivées.',
      '👑 **Pupitre d\'Administration :** Les administrateurs visualisent les commandes exactes de génération (`python pipeline_journalier.py --date AAAA-MM-JJ`) et disposent d\'un onglet exclusif classant les requêtes des joueurs par popularité.',
      '⚙️ **Pipeline automatisé :** Le pipeline en Python et le script d\'importation Node (`insert_journal_day.js`) ont été harmonisés pour supporter l\'extraction et l\'insertion quotidienne unitaire par fichiers JSON de manière isolée.',
    ]
  },
  {
    version: '16.0.3 - "Le Tarif du Solitaire 🗡️"',
    date: '24 Mai 2026',
    description: 'Les remises accordées par les items de vie sociale prenaient la poussière — le moteur ne les lisait jamais. Le Membre solo des Sicaires peut enfin négocier ses contacts au juste prix.',
    changes: [
      '🗡️ **Fix — Réductions de prix des items de vie sociale ignorées :** Les `price_modifiers` définis dans les `effets_techniques` d\'un item de vie sociale (statut, titre, métier…) n\'étaient jamais lus par le moteur. `characterEngine.js` n\'extrayait ces modificateurs que depuis les atouts. Corrigé : les items de vis sociale achetés sont désormais parcourus de la même manière. Les 3 personnages portant "Membre solo des Sicaires" (Sicaire Ogre, Gabriel Sabran de Pontavès, Olivia Tradan) voient leurs réductions appliquées correctement.',
      '🧹 **Fix données — Tiburce Froidefond :** L\'espace parasite en tête du nom du contact `" Tiburce Froidefond"` a été retiré, ainsi que la clé correspondante dans les `price_modifiers` de "Membre solo des Sicaires".',
    ]
  },
  {
    version: '16.0.2 - "Le Puits Libéré 💧"',
    date: '24 Mai 2026',
    description: 'Les Âmes retrouvent leur chemin : le Puits des Âmes était scellé pour tous les Héritiers, même propriétaires. Un champ mal nommé retenait les XP prisonniers.',
    changes: [
      '💧 **Fix — Puits des Âmes bloqué pour tous :** Les boutons `−1`, `+1` et `+5` du Puits des Âmes étaient grisés en permanence, même pour le propriétaire du personnage. Cause racine : la vérification d\'appartenance utilisait `character.user_id` (snake_case, nom de colonne Supabase) alors que le mappage client transforme ce champ en `character.userId` (camelCase). Résultat : `character.user_id` était toujours `undefined`, la condition échouait toujours, et le Puits restait verrouillé pour tous les Héritiers. Corrigé sur les 4 occurrences dans `CharacterCreator.jsx`.',
      '🧪 **237 Sentinelles (dont 3 nouvelles) :** 3 tests de non-régression postés pour verrouiller le guard d\'appartenance : `userId` = propriétaire → autorisé, `user_id` (l\'ancien bug) → bloqué, `userId` différent → bloqué. 237 gardiens veillent.',
    ]
  },
  {
    version: '16.0.1 - "Le Soufflet du Forgeron 🔧"',
    date: '17 Mai 2026',
    description: 'La Forge ne s\'emballe plus : le Registre arrête de clignoter comme un feu follet par une nuit de tempête.',
    changes: [
      '🔧 **Fix — Boucle infinie du Registre de la Forge :** La page clignotait sans fin (loading → chargé → loading → ...). Cause : `fetchForge` n\'était pas stabilisée (`useCallback`), chaque render créait une nouvelle référence, ce qui redéclenchait le `useEffect` de `RegistrePage`. Le forgeron souffle désormais une seule fois sur le brasier, pas en continu.',
      '🧪 **243 Sentinelles — Toujours en faction :** Aucune régression.',
    ]
  },
  {
    version: '16.0.0 - "L\'Ère des Faux-Semblants 👥📚"',
    date: '17 Mai 2026',
    description: 'Le Grimoire entre dans une nouvelle ère : les archives officielles et les créations communautaires cohabitent désormais sous un même toit. Chaque fiche porte son sceau, chaque item s\'affiche, chaque Héritier choisit en connaissance de cause. 243 Gardiens veillent.',
    changes: [
      '👥 **Sceau d\'Officialité (Fonctionnalité Majeure) :** Badge 📚 Officiel / 👥 Communautaire sur chaque carte de l\'Encyclopédie, dans la vue détaillée, et dans le formulaire d\'édition. Les nouvelles fiches sont Communautaires par défaut. Un slider permet aux Gardiens de basculer le statut.',
      '🐛 **Fix création d\'items :** Le bug du UPDATE silencieux (INSERT jamais exécuté) est définitivement enterré. L\'ID est désormais injecté dans le diff chirurgical.',
      '🗺️ **Deux fiches ressuscitées :** "Architecte restaurateur" et "Ecrivain célèbre" repêchés dans les archives oubliées.',
      '🛒 **Boutique inclusive :** Les items Communautaires apparaissent dans la Vie Sociale aux côtés des officiels.',
      '⚠️ **Protection des Héritiers :** Confirmation obligatoire à la sélection de tout item non-officiel (spécialité, pouvoir, capacité, atout, item social) — 7 composants de sélection couverts.',
      '🧪 **243 Sentinelles — Aucune régression :** La couverture de tests est maintenue à 100% sur les 18 suites. Le socle est solide.',
    ]
  },
  {
    version: '15.19.9 - "Les Sceaux de la Communauté 👥📚"',
    date: '17 Mai 2026',
    description: 'Les Gardiens distinguent désormais les archives officielles des créations communautaires. Le Sceau d\'Officialité s\'affiche sur chaque fiche, se règle d\'un clic, et prévient les Héritiers qui sélectionnent un savoir non-officiel. Le bug de création d\'items est terrassé, deux fiches perdues ont été ressuscitées.',
    changes: [
      '👥 **Statut Officiel / Communautaire :** Chaque fiche de l\'Encyclopédie arbore désormais un badge 📚 Officiel ou 👥 Communautaire visible sur la carte et dans la consultation détaillée. Un nouveau slider dans le formulaire d\'édition permet aux Gardiens de basculer le statut. Les nouvelles créations sont par défaut Communautaires.',
      '🐛 **Fix — Les nouveaux items ne disparaissent plus :** Le moteur de proposition ne transmettait pas l\'ID dans les données chirurgicales pour les créations. La fonction Edge exécutait un UPDATE silencieux sur une ligne inexistante — rien n\'était jamais persistant. Corrigé : l\'ID est désormais injecté dans le diff, et l\'INSERT s\'exécute correctement.',
      '🗺️ **Résurrection de deux items sociaux :** "Architecte restaurateur" et "Ecrivain célèbre" ont été retrouvés dans les archives des `data_change_requests` et réinsérés dans la table `social_items`.',
      '🛒 **Tous les items visibles dans la boutique :** Le filtre `is_official = true` a été retiré du chargement des items sociaux. Les créations Communautaires apparaissent désormais aux côtés des archives Officielles.',
      '⚠️ **Avertissement à la sélection d\'un item Communautaire :** Quand un Héritier sélectionne une spécialité, un pouvoir, une capacité, un atout ou un item social non-officiel, une fenêtre de confirmation s\'affiche avec le nom et le type exact de l\'item — il choisit en connaissance de cause. Implémenté dans les 7 composants de sélection.',
      '🧪 **243 Sentinelles toujours en faction :** Aucune régression. Tous les Gardiens du Code veillent.',
    ]
  },
  {
    version: '15.19.8 - "Le Bureau des Correspondances 🕊️"',
    date: '17 Mai 2026',
    description: 'Les Gardiens peuvent désormais écrire aux Héritiers d\'un clic depuis l\'atelier de réparation XP. Les compteurs de la Vigie tiennent en une ligne, et les Sentinelles montent à 250.',
    changes: [
      '🕊️ **Bulle de Message Pneumatique :** Chaque personnage listé dans l\'onglet Réparation XP affiche désormais une petite icône MessageCircle. Un clic ouvre le Télégraphe en conversation privée avec le propriétaire — fini les allers-retours entre onglets pour prévenir un Héritier que son journal a été réparé ou que son plancher a besoin d\'attention.',
      '📋 **Compteurs de la Vigile sur une ligne :** Les 6 statuts (À réparer, Complet, Réparé, Sans plancher, Plancher restauré, Erreur) tiennent désormais en une seule rangée — plus de débordement sur deux lignes qui cassait la lecture.',
      '🔍 **Filtre par défaut « Tous » :** L\'onglet Réparation affiche désormais tous les personnages dès l\'ouverture, pas seulement ceux en attente. Le Gardien voit immédiatement l\'état complet de la flotte sans avoir à cliquer « Tous » à chaque visite.',
      '🕰️ **La Forge n\'oublie plus le passé :** Correction d\'un bug où le Registre de la Forge s\'affichait vide au premier clic sur le bouton Anomalies. La cause : le provider chargeait les données à l\'initialisation de l\'application, avant que le Sceau d\'authentification ne soit posé. Le registre appelle désormais la forge à chaque ouverture de page — les anomalies et les idées apparaissent sans nécessiter un F5.',
      '🧪 **250 Sentinelles (+7) :** 3 tests d\'intégration ajoutés pour la bulle de message et les compteurs sur une ligne. 250 gardiens veillent désormais sur le Grimoire.',
    ]
  },
  {
    version: '15.19.7 - "La Vigie Renforcée 🧪"',
    date: '17 Mai 2026',
    description: '243 Sentinelles montent désormais la garde : revue complète des 18 suites de tests, 19 nouveaux gardiens postés aux angles morts, et le Tribunal des Ombres juge désormais le vrai code plutôt que des pantins.',
    changes: [
      '🧪 **243 Sentinelles (contre 224) :** Revue systématique des 18 suites de tests — 19 nouveaux gardiens postés aux angles morts : chaîne vide `statut: ""`, personnage vide `{}` dans la validation, `caracteristiques` partielles, valeurs négatives dans les coûts XP, chaînes de version malformées, et réduction Fortune qui dépasse le coût brut.',
      '⚖️ **Le Tribunal des Ombres juge le vrai code :** `handleAdjustXP.test.js` ne teste plus une réimplémentation locale du reducer, mais le vrai `characterReducer` du moteur de jeu. Les transactions REMBOURSEMENT et GAIN négatif sont vérifiées sur la mécanique réelle, pas sur un simulacre.',
      '🧹 **Nettoyage des artéfacts :** Le test no-op `expect(true).toBe(true)` a été exhumé des catacombes et réduit en poussière. 7 tests `isSuperAdmin` redondants ont été fondus en un seul `it.each` élégant. Les badges de l\'onglet Réparation sont désormais sélectionnés par leur nom plutôt que par leur position fragile dans le DOM.',
      '🏷️ **« Communauté & Métriques » sur une seule ligne :** Le titre du tableau de bord ne se brise plus en deux sur les écrans étroits — un sort `whitespace-nowrap` maintient l\'unité du nom.',
    ]
  },
  {
    version: '15.19.5 - "Le Parchemin à l\'Épreuve du Vide 🛡️"',
    date: '17 Mai 2026',
    description: 'Les Gardiens du Nuage veillent désormais sur chaque fiche : plus aucun Héritier ne verra « null is not an object » en ouvrant son parchemin, même si les données féériques tardent à charger.',
    changes: [
      '🛡️ **4 Gardiens postés aux portes des Étapes :** `StepCapacites`, `StepCompetencesFutiles`, `useCompetencesLibres` et `pixieBrain.js` accédaient à `fairyData[typeFee]` sans vérifier que le Nuage féérique était bien arrivé. Si les données du Grimoire n\'étaient pas encore chargées, le parchemin explosait en « null is not an object ». Chaque accès est désormais protégé par une garde ternaire ou un optional chaining, comme `StepAtouts` et `StepPouvoirs` le faisaient déjà.',
      '🧪 **224 Sentinelles toujours en faction :** Aucune régression. Tous les sorts du moteur, du Cerbère et de la validation continuent de fonctionner.',
    ]
  },
  {
    version: '15.19.4 - "Le Sceau de l\'Architecte 🛡️"',
    date: '17 Mai 2026',
    description: 'Le Super Admin peut enfin restaurer durablement le Plancher de Verre : le Sceau d\'Architecte perce le voile du RLS, et le Scribe vérifie que l\'écriture tienne.',
    changes: [
      '🛡️ **RLS — Le Sceau de l\'Architecte perce le voile :** Nouvelle politique de sécurité (`Super admin can update all characters`) permettant au Super Admin de modifier les personnages de tous les Héritiers. Une fonction `get_user_role()` lit le rôle depuis le Grand Livre des Profils. Trois politiques couvrent UPDATE, DELETE et SELECT.',
      '🔧 **Onglet Réparation — Le Scribe vérifie son encre :** `executeRestoreFloor` et `executeRepair` utilisent désormais `.select(\'id\')` après chaque `.update()` pour s\'assurer que l\'écriture a bien touché le parchemin. Si le RLS bloque (0 lignes affectées), une erreur explicite « Aucune ligne modifiée » est levée au lieu d\'un silence trompeur.',
      '🧪 **7 nouvelles Sentinelles montent la garde :** Tests unitaires (chaîne update + select("id"), détection RLS bloqué) et tests d\'intégration (rendu, badges « Sans plancher », compteurs). 224 sentinelles veillent désormais.',
      '📜 **Procédure /version enrichie (étape 7) :** Un REX de session est désormais rédigé dans `REX.md` à chaque livraison, pour graver les leçons dans le marbre.',
    ]
  },
  {
    version: '15.19.2 - "Le Plancher sous le Sceau 🏗️"',
    date: '16 Mai 2026',
    description: 'Le Plancher de Verre n\'est plus un songe : les Héritiers scellés conservent désormais leur socle dans la Base de Données. Adieu le « Sans plancher ».',
    changes: [
      '🏗️ **Fix — Le Plancher enfin gravé dans le marbre :** Quand on apposait le Sceau, la sauvegarde partait bien vers Supabase… mais sans le socle scellé (`stats_scellees`). Le Plancher de Verre — caractéristiques, atouts, compétences, fortune, pouvoirs au moment du scellement — n\'était posé qu\'en mémoire locale. Résultat : au rechargement, Aristide Robelin et ses pairs apparaissaient « Sans plancher ». Cause racine : `executeSeal()` appelait `saveCharacterToSupabase` avant que `SEAL_CHARACTER` n\'ait figé le snapshot. Corrigé — le socle est désormais construit atomiquement avant la sauvegarde, et le Plancher est persistant dès l\'apposition du Sceau.',
      '🧪 **172 Sentinelles toujours en faction :** La Vigie du Code veille. Aucune sentinelle n\'a été blessée durant cette opération.',
    ]
  },
  {
    version: '15.19.1 - "Le Sceau Réparé 🔐"',
    date: '16 Mai 2026',
    description: 'Le Sceau d\'Aristide Robelin n\'est plus un vœu pieux : la sauvegarde vers Supabase précède désormais le verrouillage. 172 Sentinelles Automates montent la garde.',
    changes: [
      '🔐 **Fix Sceau — Aristide Robelin enfin protégé :** Quand on apposait le Sceau, le personnage passait bien en "scellé" en mémoire… mais la sauvegarde vers Supabase n\'était jamais déclenchée. Résultat : au prochain rechargement, le sceau s\'évanouissait comme une illusion. Cause racine : `executeSeal()` dispatchait `SEAL_CHARACTER` sans appeler `saveCharacterToSupabase`. Corrigé — la sauvegarde est désormais atomique et le Sceau est persistant.',
      '🧪 **172 Sentinelles Automates (Tests) :** La Vigie du Code compte désormais 172 gardiens (contre 167 précédemment). 5 nouvelles sentinelles veillent sur le mécanisme de scellement : validation pré-scellement, rejet des personnages temporaires (`temp_`), sauvegarde réussie, échec réseau avec fallback local, et mise à jour d\'identifiant.',
      '📦 **Couverture des Hooks :** Première vague de tests pour les Crochets Magiques (`useCerbere`) — les interactions entre le Cerveau Central, les notifications et la Base de Données sont désormais sous surveillance.',
    ]
  },
  {
    version: '15.18.3 - "La Lettre Scellée 📨"',
    date: '16 Mai 2026',
    description: 'Le système de notifications de mises à jour est pleinement opérationnel : emails envoyés via Mailjet, template redesigné, et corrections de parcours.',
    changes: [
      '📨 **Notifications opérationnelles :** Les emails de mise à jour partent réellement. Le blocage venait de clés Mailjet incorrectes côté serveur — corrigé.',
      '🎨 **Nouveau template email :** Mise en page responsive avec en-tête dégradé, bloc version en vert, changelog en liste propre. Les balises markdown (`**`, backticks) sont converties en HTML.',
      '🔐 **Auth Edge Function simplifiée :** La vérification JWT (`verify_jwt`) est incompatible avec les nouvelles clés `sb_publishable_` (ES256). Remplacée par une vérification de la clé anon côté fonction.',
    ]
  },
  {
    version: '15.18.2 - "Le Facteur des Ombres 📬"',
    date: '16 Mai 2026',
    description: 'L\'envoi d\'emails de notification passe par Gmail SMTP — aucun service tiers ni domaine personnalisé requis.',
    changes: [
      '📬 **Envoi d\'emails via Gmail :** La Edge Function abandonne Resend (qui exigeait un domaine vérifié) au profit de Gmail SMTP via nodemailer. Les notifications partent désormais depuis `azghal.les.heritiers@gmail.com`, sans aucun abonnement payant ni domaine à configurer.',
    ]
  },
  {
    version: '15.18.1 - "Le Recenseur Fidèle 📊"',
    date: '16 Mai 2026',
    description: 'Le système de notifications de mises à jour est désormais pleinement opérationnel : envoi d\'emails réels via Resend, onglet admin dédié, et statistiques d\'abonnement corrigées.',
    changes: [
      '📧 **Système d\'emails opérationnel :** L\'Edge Function `send-email` est déployée sur Supabase et utilise Resend pour l\'envoi réel. Seul le super_admin peut la déclencher. L\'URL de l\'application dans les emails et l\'endpoint appelé par le frontend étaient des placeholders — corrigés.',
      '🔔 **Onglet Notifications dans l\'admin :** Un nouvel onglet (super_admin uniquement) centralise les statistiques d\'abonnement, un formulaire d\'envoi avec détection majeure/mineure, et l\'historique des notifications envoyées.',
      '🐛 **Fix — `getVersionType()` :** La fonction retournait toujours "mineure" à cause d\'indices de tableau incorrects. Corrigé : une version en `.0` est désormais classée majeure, les autres mineures.',
      '📊 **Fix — Statistiques d\'abonnement :** Le panneau affichait "1 abonné" au lieu des vrais chiffres (6 abonnés réels). Le RLS bloquait la lecture — corrigé via une fonction SQL SECURITY DEFINER.',
    ]
  },
  {
    version: '15.18.0 - "Le Veilleur des Portes 🔐"',
    date: '16 Mai 2026',
    description: 'Audit de sécurité complet : les portes du Registre de la Forge et des Profils sont désormais gardées. Les artefacts de débogage ont été retirés des archives publiques.',
    changes: [
      '🔐 **RLS renforcé sur le Registre de la Forge :** Les entrées masquées et les missives réservées aux Initiés ne sont plus lisibles par les Héritiers non qualifiés — ni par les visiteurs anonymes. Les Gardiens et Super Admins conservent une vision complète.',
      '🔐 **RLS renforcé sur les Profils :** La lecture publique (sans authentification) a été révoquée. Seuls les Héritiers connectés peuvent consulter les profils.',
      '🛡️ **Contrôle de rôle côté application :** Les actions de rejet, d\'archivage et de restriction aux Initiés vérifient désormais explicitement que l\'opérateur est Gardien ou Super Admin avant d\'agir.',
      '🧹 **Nettoyage des traces de débogage :** Les empreintes de la clé API, l\'exposition globale du client Supabase (`window.__supabase__`), la purge automatique du localStorage en développement et une vingtaine de `console.log` intempestifs ont été supprimés.',
      '⚠️ **Alerte sauvegarde hors-ligne :** L\'application signale désormais explicitement quand une sauvegarde a échoué côté serveur et n\'existe qu\'en cache local — au lieu d\'afficher un faux succès.',
      '🔗 **URL de notification corrigée :** L\'endpoint d\'envoi d\'emails pointait vers un placeholder non résolu — il lit désormais la variable d\'environnement `REACT_APP_SUPABASE_URL`.',
    ]
  },
  {
    version: '15.17.9 - "Le Cabinet des Merveilles 📦"',
    date: '16 Mai 2026',
    description: 'Les Grimoires s\'enrichissent d\'un troisième registre : les Trésors & Possessions, alimentés directement depuis les achats de la Vie Sociale. Les doublons sont effacés, les badges intempestifs disparaissent.',
    changes: [
      '📦 **Trésors & Possessions (Nouveau) :** Un troisième onglet fait son entrée dans le Grimoire Personnel. Chaque objet acheté dans la Vie Sociale — arme ancestrale, fiacre personnel, bibliothèque occulte — y est désormais consigné automatiquement à la sauvegarde. Les 433 possessions des Héritiers existants ont été rétroactivement archivées.',
      '🔄 **Synchronisation en temps réel :** Acheter ou retirer un objet dans la Vie Sociale met à jour le Grimoire à la prochaine sauvegarde, sans doublon ni perte. La mécanique est identique à celle des Contacts.',
      '🧹 **Assainissement des Grimoires :** 210 contacts en double ont été supprimés. Un bug du contrôle anti-doublon (lecture du mauvais champ) était la cause — corrigé définitivement.',
      '🏷️ **Suppression du badge "Partagé par le Cercle" :** Cette mention apparaissait par erreur sur toutes les entrées des Grimoires consultés en mode Admin. Le Grimoire d\'un Héritier vous appartient — inutile de vous le rappeler à chaque ligne.',
    ]
  },
  {
    version: '15.17.8 - "L\'Œil Omniscient 👁️"',
    date: '15 Mai 2026',
    description: 'Le Super Admin accède à tous les Grimoires, les contacts s\'inscrivent automatiquement, et les entrées sont modifiables.',
    changes: [
      '👁️ **Vision du Super Admin :** Les administrateurs peuvent désormais consulter l\'intégralité des Grimoires Personnels de tous les Héritiers, sans restriction de propriété. L\'icône 📖 apparaît sur les cartes des autres joueurs (onglets Publics et Admin).',
      '📓 **Synchronisation Contacts → Grimoire :** Les contacts achetés dans la Vie Sociale sont automatiquement inscrits dans le Grimoire Personnel à la sauvegarde du personnage. Un système de file d\'attente évite les doublons et s\'efface si le joueur quitte sans sauvegarder.',
      '✏️ **Édition & Suppression des entrées :** Chaque note et contact du Grimoire peut désormais être modifié ou supprimé. Une confirmation est demandée, avec avertissement spécial pour les contacts liés à un achat de la Vie Sociale.',
    ]
  },
  {
    version: '15.17.7 - "La Fortune des Métiers 💰"',
    date: '15 Mai 2026',
    description: 'Les fiches de métiers de l\'Encyclopédie révèlent désormais leur influence sur la Fortune des Héritiers.',
    changes: [
      '💰 **Fortune visible dans l\'Encyclopédie :** Les fiches de métiers affichent désormais leur impact sur la Fortune — rang de base pour les métiers principaux, bonus pour les métiers secondaires. Ces informations apparaissent sous forme de badges élégants dans la vue détaillée.',
      '👑 **Distinction Principal / Secondaire :** Le formulaire d\'édition des métiers propose un sélecteur clair entre "Métier Principal" (qui définit un rang de Fortune de base) et "Métier Secondaire" (qui accorde un bonus à la Fortune existante).',
      '🔧 **Fix — Sauvegarde des champs Fortune :** Les modifications de `fortune_score`, `fortune_bonus` et `is_secondaire` sont désormais correctement capturées lors de la soumission d\'une proposition dans l\'Encyclopédie.',
    ]
  },
  {
    version: '15.17.6 - "Le Puits Visible 🔮"',
    date: '14 Mai 2026',
    description: 'Le Puits des Âmes est désormais visible en consultation mais verrouillé : les boutons +/− sont désactivés, seul le Registre reste accessible.',
    changes: [
      '🔮 **Puits des Âmes visible en lecture seule :** Le bandeau apparaît pour tous les observateurs d\'un personnage scellé, mais les boutons d\'ajustement (`−1`, `+1`, `+5`) sont désactivés avec un curseur "interdit" et une opacité réduite.',
      '📖 **Registre toujours accessible :** Le bouton "Registre" (Journal des Flux de l\'Âme) reste cliquable en consultation — chacun peut consulter l\'historique des XP.',
      '🛡️ **Double garde :** Les boutons sont protégés côté UI (`disabled`) et côté logique (`return` silencieux dans `handleAdjustXP`) pour empêcher toute modification en lecture seule.',
    ]
  },  {
    version: '15.17.5 - "Le Grand Livre des Comptes 📖"',
    date: '14 Mai 2026',
    description: 'Correction de deux bugs bloquants sur les boutons − XP : le retrait n\'atteignait jamais le négatif et le −1 dans l\'éditeur augmentait les XP disponibles.',
    changes: [
      '🐛 **Bug `||` vs `??` (Cercle) :** Le bouton `−` dans le panneau de distribution remontait à `xpDefault-1` au lieu de descendre sous zéro, rendant tout retrait d\'XP impossible. Corrigé par le remplacement de `||` par `??` (nullish coalescing).',
      '🐛 **Bug `REMBOURSEMENT` → `GAIN` négatif (Éditeur) :** Cliquer `−1` dans l\'éditeur de personnage créait un `REMBOURSEMENT` qui diminuait `xp_depense` au lieu de `xp_total`, ce qui **augmentait** les XP disponibles au lieu de les réduire. Désormais un `GAIN` avec valeur négative est émis, et `xp_total` diminue correctement.',
      '🧪 **Tests de non-régression :** 8 tests ajoutés pour verrouiller les deux corrections.',
    ]
  },  {
    version: '15.17.4 - "La Balance du Docte ⚖️"',
    date: '14 Mai 2026',
    description: 'Retrait d\'XP par le Docte, confirmation modale pour les montants négatifs, correction du compteur de Cercles dans les Métriques.',
    changes: [
      '⚖️ **Retrait d\'XP (Nouveau) :** Le Docte peut désormais retirer des XP à un Héritier en cliquant sur le bouton `−` pour passer en négatif. Une modale de confirmation s\'affiche avant validation.',
      '🔢 **Compteur de Cercles corrigé :** Les Métriques affichaient 3 Cercles au lieu de 14 à cause du RLS. Une nouvelle RPC `get_admin_stats` en `SECURITY DEFINER` contourne le filtrage et retourne le vrai total.',
    ]
  },  {
    version: '15.17.3 - "Le Sceau du Docte 🔍"',
    date: '14 Mai 2026',
    description: 'Visibilité du statut de scellement dans les Cercles, notification XP pour les non scellés.',
    changes: [
      '🔍 **Visibilité du statut dans les Cercles :** Le Docte voit désormais si un Héritier n\'est pas scellé (badge "Non scellé" dans le panneau XP et sur la carte), avec un avertissement clair : "XP reçus mais non dépensables".',
      '📡 **RPC `get_cercle_members` enrichi :** Retourne maintenant `statut`, `xp_total` et `xp_depense` pour chaque personnage, permettant à l\'interface d\'afficher ces informations sans requête supplémentaire.',
      '📢 **Notification de distribution :** Le toast de fin précise quels personnages ne pourront pas dépenser leurs XP tant qu\'ils ne sont pas scellés.',
    ]
  },  {
    version: '15.17.2 - "Le Nom Retrouvé 🏷️"',
    date: '13 Mai 2026',
    description: 'Correction de l\'affichage des UUIDs dans Capacités & Atouts, résolution des noms dans tout le moteur.',
    changes: [
      '🏷️ **Fix — UUIDs apparents dans Capacités & Atouts :** Les identifiants bruts (ex: `067035cc-...`) qui s\'affichaient par erreur dans la fiche bilan sont désormais résolus en noms lisibles via les données de l\'Encyclopédie. Le correctif couvre la fiche (`FicheParchemin`), le sélecteur d\'atouts (`StepAtouts` — qui ne stocke plus jamais d\'UUID), et le moteur de bonus (`bonusCalculator` — qui cherchait par nom uniquement).',
    ]
  },  {
    version: '15.17.1 - "Les Archives du Monde 📊"',
    date: '13 Mai 2026',
    description: 'Métriques publiques enrichies : types de fées, profils, graphiques et compteurs globaux.',
    changes: [
      '📊 **Métriques Publiques Enrichies (Communauté) :** L\'onglet "Métriques" a été entièrement réécrit avec 4 compteurs globaux (Héritiers, Personnages, Scellés, Cercles), la répartition des types de fées (tableau + barres horizontales), la répartition des profils majeurs et mineurs, et l\'activité quotidienne.',
      '🎚️ **Slider Tableau / Graphiques :** Chaque section peut être visualisée en tableau (chiffres précis) ou en graphique (barres CSS proportionnelles) via un sélecteur élégant.',
      '🗑️ **Période simplifiée :** Le sélecteur 30 jours / Globale a été retiré. Les métriques de répartition sont toujours globales, l\'activité reste sur 30 jours.',
    ]
  },  {
    version: '15.17.0 - "La Main du Docte 🎁"',
    date: '13 Mai 2026',
    description: 'Attribution d\'XP par le Docte dans les Cercles, avec traçabilité et sécurité.',
    changes: [
      '🎁 **Attribution d\'XP dans les Cercles (Nouvelle Fonctionnalité) :** Le Docte peut désormais distribuer des Points d\'Expérience depuis sa Table Virtuelle. Un panneau dédié lui permet de choisir un montant (presets 3/5/10/15/20 ou saisie libre), d\'ajuster individu chaque membre avec des boutons −/+, et de préciser un motif (ex: "Scénario : Le Secret du Lac").',
      '🛡️ **Sort `award_xp` inscrit dans le Grand Livre :** La fonction magique vérifie que seul le Docte du Cercle peut attribuer des XP à un Héritier de sa table. Les XP sont ajoutés au total du personnage et tracés dans le Registre des Transactions avec le code `REWARD`.',
      '📜 **Script SQL créé :** `scripts/create_rpc_award_xp.sql` documente la fonction pour toute réinstallation future.',
      '🔑 **Mot de passe de la Source Originelle mis à jour :** Le nouveau sceau d\'accès à la Base de Données et le port du connecteur (6543) ont été enregistrés dans le Coffre aux Archives (`.env`).',
    ]
  },  {
    version: '15.16.47 - "Les Sceaux Purifiés et la Vigie 🔐"',
    date: '13 Mai 2026',
    description: 'Secrets retirés du code, sauvegarde universelle, et fondations de test posées sous le moteur de jeu.',
    changes: [
      '🔐 **Secrets retirés du Grimoire :** La clé de service (service_role) et le mot de passe de la Base de Données ont été extraits des parchemins (`scripts/backup_supabase.js`, `db-schema-dump.sh`) et placés dans le Coffre aux Archives (`.env`). Les scripts lisent désormais les sceaux depuis l\'environnement.',
      '📚 **Sauvegarde Universelle :** Le Grand Archiviste recouvre désormais l\'intégralité des 39 tables du monde visible — des fiches des espèces féériques (`fairy_types`, `fairy_capacites`, `fairy_powers`, `fairy_assets`) aux registres de compétences (`competences`, `competences_futiles`, `specialites`, `profils`, `social_items`), en passant par les messageries du Télégraphe (`support_tickets`, `support_messages`, `chat_message_reads`). Plus rien n\'est laissé à la merci du temps.',
      '⚙️ **Fondations de la Vigie (Tests) :** 27 nouvelles Sentinelles Automates ont été postées pour surveiller le Moteur de Jeu : 12 gardent les formules de coûts XP (`xpCalculator`) et 15 veillent sur les calculs de combat et de compétences (`rulesEngine`). Chaque formule est vérifiée — coûts minimums, plafonds, bonus de profil, prédilections, bonus magiques, modificateurs de taille, bonus de Masque.',
      '📜 **Parchemin d\'exemple créé :** `.env.example` liste désormais toutes les variables requises, servant de guide aux nouveaux Archivistes qui voudraient déployer leur propre Grimoire.',
    ]
  },  {
    version: '15.16.46 - "L\'Album des Souvenirs 📸"',
    date: '13 Mai 2026',
    description: 'Album Photo restauré, résurrection des archives temporelles, et ménage des alertes automatiques.',
    changes: [
      '📸 **Album Photo de l\'Héritier restauré :** Le bouton "Prendre une photo" et la galerie des archives temporelles refont leur apparition sur la page Récapitulatif. On peut désormais immortaliser l\'état de son Héritier à tout moment et le ressusciter plus tard.',
      '🔧 **Fonction de Résurrection créée :** Le sort `clone_snapshot_to_character` a été inscrit dans le Grand Livre des Sortilèges. Il permet de cloner un personnage à partir d\'une archive temporelle, préservant l\'intégralité de ses caractéristiques, pouvoirs, atouts et biens.',
      '🐛 **Fix colonne d\'archivage :** Correction d\'un Sortilège défaillant — le hook écrivait dans `data_snapshot` (coline inexistante) au lieu de `character_data`. Les archives se gravent désormais dans le marbre sans erreur.',
      '🗑️ **Silence des Gardiens :** Le système d\'auto-détection des anomalies (FairyLore) a été désactivé. Les personnages dont l\'espèce féérique n\'est pas encore référencée dans la Bibliothèque des Espèces ne déclenchent plus d\'alerte intempestive. Le Docte conserve la main pour signaler manuellement ce qui doit l\'être.',
      '🩺 **Remède au "Sans plancher" :** Le socle scellé (`stats_scellees`) de Siobhan McTir, qui manquait à l\'appel, a été reconstruit depuis ses mémoires éparses. Son Héritier n\'est plus en errance.',
      '✏️ **Fix nom dans les alertes :** Les messages de correction utilisaient le type de fée ("Kelpie") au lieu du nom du personnage ("Siobhan McTir"). Le grimoire invoque désormais le bon prénom.',
    ]
  },  {
    version: '15.16.45 - "Le Grand Sceau des Gardiens 🛡️"',
    date: '13 Mai 2026',
    description: 'Rempart de sécurité : RLS activé, permissions verrouillées, rôle-checks ajoutés, et premières sentinelles de test.',
    changes: [
      '🛡️ **RLS activé sur 3 tables exposées :** Les Archives du Télégraphe (`chat_channels`, `chat_messages`) et le Registre des Anomalies (`bug_reports`) sont désormais protégés par la Loi du Silence. Seuls les Héritiers concernés peuvent lire leurs propres missives et signalements.',
      '🔒 **Permissions révoquées aux Égarés (anon) :** 11 sortilèges de la Bibliothèque Centrale ne sont plus accessibles aux simples visiteurs non-enregistrés. Les fonctions de don de personnage, de consultation des Cercles, de validation d\'identité et de gestion des Archives sont désormais réservées aux Faux-Semblants dûment inscrits au Grand Registre.',
      '⚔️ **Verrouillage de "Magie Noire" (`execute_dynamic_sql`) :** Le redoutable sort d\'exécution dynamique a été scellé sous plusieurs sceaux — plus aucun Héritier, même connecté, ne peut l\'invoquer. Seuls les Architectes du Monde (postgres, service_role) en conservent la clé.',
      '👑 **Rôle-checks sur les Sorts des Gardiens :** `purge_encyclopedia_entity` et `toggle_item_seal` vérifient désormais que l\'appelant est bien un Gardien du Savoir ou un Super Admin avant d\'exécuter leurs puissants effets. Les simples curieux essuieront un refus catégorique.',
      '🧪 **Premières Sentinelles de Test :** 10 gardiens automates ont été postés aux portes des Archives, du Registre des Héritiers et de la Console d\'Administration pour surveiller le bon fonctionnement des nouveaux sceaux.',
      '📜 **Nettoyage des Parchemins obsolètes :** Le sort `handle_new_user` (création de profil à l\'enrôlement) a été retiré de la vue publique — bien qu\'inaccessible par les artères classiques du Grimoire, sa simple évocation était signalée par les Gardiens de la Vigie.',
    ]
  },  {
    version: '15.16.44 - "La Duplicité Révélée 🔴"',
    date: '13 Mai 2026',
    description: 'Stats de combat démasquées : bonus capacité inclus, refonte du bloc Combat & Santé.',
    changes: [
      '🔴 **Esquive Démasquée (fix) :** L\'esquive sous forme démasquée inclut désormais le bonus de capacité féérique (le +1 vert de la feuille), qui était ignoré — elle prenait la même valeur que l\'esquive masquée.',
      '📊 **Moteur de combat (rulesEngine) :** `calculateFullCombatStats` distingue désormais les bonus permanents (atouts/pouvoirs) des bonus de capacité (uniquement actifs en forme démasquée). Tous les états de combat existent en deux versions : masquée et démasquée (parade, rés. phys., rés. psych., PV max).',
      '📜 **Refonte du bloc Combat & Santé (FicheParchemin) :** Le tableau de combat affiche désormais deux rangées complètes : masquée (haut) et démasquée (bas, en rouge). Passage de 6 à 5 colonnes pour une meilleure lisibilité.',
    ]
  },  {
    version: '15.16.43 - "Le Comptoir des Contacts Libres 🎯"',
    date: '13 Mai 2026',
    description: 'Contacts gratuits : allocation manuelle aux profils, budget réservé aux contacts.',
    changes: [
      '🎯 **Contacts Gratuits (Widget) :** Les points de contacts gratuits (Entregent/Prestance) s\'allouent désormais manuellement via un widget dédié. On peut les distribuer sur n\'importe quel profil, même avec 0 PP de budget de base.',
      '🔒 **Consacrés aux Contacts :** Ces points ne peuvent être dépensés que pour des contacts (pas pour métiers/objets/langues/titres). Ils s\'additionnent au budget du profil pour permettre d\'acheter des contacts plus chers que le PP disponible.',
      '🧮 **Budget séparé (useVieSociale) :** Le moteur de budget distingue désormais le budget de base (`budgetsBase`) du budget gonflé par les contacts gratuits (`budgets`), pour contrôler strictement leur usage.',
      '🐛 **Fix `rests` vs `restes` :** Correction d\'une faute de frappe de variable qui empêchait le rendu des catalogues de la Vie Sociale.',
    ]
  },  {
    version: '15.16.42 - "L\'Éclair Pneumatique ⚡"',
    date: '11 Mai 2026',
    description: 'Hotfix de la réactivité du Télégraphe (pastille rouge).',
    changes: [
      '⚡ **Réactivité Instantanée :** Correction d\'un conflit de vitesse (Race Condition) qui empêchait la pastille rouge de notification du Télégraphe de s\'allumer avant un rafraîchissement manuel de la page. Les nouveaux messages mettent désormais à jour la liste instantanément de manière "optimiste", sans attendre les validations de la base de données.'
    ]
  },  {
    version: '15.16.41 - "L\'Aiguilleur Précis 🧭"',
    date: '11 Mai 2026',
    description: 'Refonte intégrale de la mémoire des messages non-lus du Télégraphe.',
    changes: [
      '🧭 **Pastille Rouge par Canal (Télégraphe) :** Le système de notification a été entièrement réécrit pour mémoriser votre lecture *canal par canal*. Ouvrir l\'interface du Télégraphe n\'efface plus aveuglément les notifications de vos conversations privées si vous ne les avez pas consultées.',
      '🔴 **Indicateur Visuel Intra-Liste :** Une nouvelle puce rouge clignotante apparaît désormais directement sur l\'onglet et à côté du nom de la conversation qui contient les messages non lus.',
      '💾 **Curseur Temporel Multiples :** Le `localStorage` sauvegarde désormais la date précise de dernière ouverture de chaque salon de discussion individuellement, garantissant une remontée d\'information parfaite au redémarrage du Grimoire, sans alourdir les requêtes de la base de données.'
    ]
  },    {
    version: '15.16.40 - "Le Voyant Rouge 🔴"',
    date: '10 Mai 2026',
    description: 'Fix de la pastille de notification du Télégraphe.',
    changes: [
      '🔴 **Pastille de Notification (Télégraphe) :** Le voyant d\'alerte de l\'icône du Télégraphe signale désormais tous les messages privés ou de cercle en attente, et n\'est plus limité aux seuls tickets de support de l\'administration.',
      '💾 **Curseur Temporel Hors-Ligne :** Le système mémorise intelligemment le moment exact de votre dernière lecture (via `localStorage`) pour réafficher la pastille rouge lors de votre prochaine connexion si un message a été reçu pendant votre absence (sans surcharger Supabase).'
    ]
  },{
        version: '15.16.39 - "Le Daguerréotype Fidèle 📸"',
        date: '2026-05-08',
        description: 'Fix : changement de portrait impossible après 1er upload',
        changes: [
            '🐛 **Fix changement de portrait bloqué (La Nature Profonde & L\'Apparence Sociale) :** Une fois un portrait chargé, il était impossible d\'en sélectionner un nouveau — le premier restait figé. Deux causes combinées : le champ de fichier HTML conservait la valeur de la sélection précédente (empêchant le déclenchement de l\'événement si on re-sélectionnait le même fichier), et l\'URL Supabase étant identique après remplacement, le navigateur affichait son cache sans recharger. Corrigé via reset du champ après chaque sélection + cache-busting `?t=timestamp` sur l\'URL stockée.',
        ]
    },
    {
        version: '15.16.38 - "Le Filtre du Marchande 🪙"',
        date: '2026-05-08',
        description: 'Vie sociale : filtre par budget PP restant',
        changes: [
            '🪙 **Filtre "budget restant" dans la boutique :** Un bouton compact (≤ PP) s\'affiche désormais sur la même ligne que la barre de recherche dans chaque boutique de vie sociale. Actif, il masque tous les items que tu ne peux pas te payer avec tes PP restants. Le chiffre exact de PP disponibles s\'affiche dans le bouton quand le filtre est actif.',
        ]
    },
    {
        version: '15.16.37 - "La Brique Noire 🖤"',
        date: '2026-05-08',
        description: 'Brique noire : coût affiché, chargement effets, homonymes',
        changes: [
            '🏷️ **Coût affiché dans la liste déroulante :** La brique noire du constructeur affiche désormais le prix de base à côté de chaque item dans la liste déroulante (ex : "Capitaine d\'industrie (5 PP)"). Le prix proposé s\'initialise automatiquement avec ce coût de base dès la sélection.',
            '🔑 **Items homonymes avec prix différents :** Deux items portant le même nom mais avec des coûts différents sont maintenant distingués par leur prix dans la clé de stockage ("Nom (X PP)"). Le moteur de jeu supporte les deux formats (nouveau + legacy) pour la rétrocompatibilité.',
            '🐛 **Fix chargement des effets techniques :** Quand on revenait éditer un item existant dans l\'Encyclopédie, les effets compilés n\'apparaissaient plus dans le BonusBuilder. Le formulaire lisait `techData` (absent de la DB) au lieu de `effets_techniques`. Corrigé avec un fallback `techData ?? effets_techniques` dans `EncyclopediaModal`, `SocialItemForm` et `EntityForm`.',
        ]
    },
    {
        version: '15.16.36 - "La Plume du Docte 🖋️"',
        date: '2026-05-08',
        description: 'Fix notification correction joueur + CheckCheck icône',
        changes: [
            '🔔 **Notification de correction au joueur :** Quand le Docte marque un personnage comme "Corrigé", le joueur reçoit désormais un toast de succès au prochain login (✨ "Bonne nouvelle ! X a été corrigé par le Docte."). La notification est consommée automatiquement après affichage.',
            '🔁 **Fix re-détection après correction :** Un flag `correction_done` empêche l\'auto-détection de re-signaler indéfiniment les mêmes personnages après qu\'ils ont été traités par le Docte.',
            '🔧 **Fix icône CheckCheck manquante :** L\'icône de double coche du Télégraphe (`CheckCheck`) était absente du hub d\'icônes centralisé — ajoutée dans `config/icons.js`, la compilation ne plante plus.',
        ]
    },
    {
        version: '15.16.35 - "Le Sceau des Lectures ✉️"',
        date: '2026-05-08',
        description: 'Read receipts, corrections, filtres, bug XP repair',
        changes: [
            '✅ **Coches de lecture (Télégraphe) :** Les messages privés et de groupe affichent désormais des accusés de réception style WhatsApp — ✓ gris = envoyé, ✓✓ amber = lu. Pour les salons de groupe, un compteur indique combien de membres ont lu. Désactivé sur le salon public global.',
            '🛠️ **Système de correction de personnages :** Quand un personnage présente un problème (fée sans fiche Docte, données incohérentes), le joueur voit une modale au login demandant l\'autorisation de corriger. Le Docte reçoit une notification avec la liste des personnages autorisés à corriger.',
            '🔧 **Correction filtre Communauté & Métriques :** Les filtres par type d\'utilisateur (Super Admin, Gardien, Initié, Héritier) dans l\'onglet Utilisateurs fonctionnent à nouveau — le code traitait un ancien mode "staff" qui n\'existait plus dans le menu.',
            '⚡ **Fix crash réparation XP :** La reconstruction du journal ne plante plus avec l\'erreur `check_xp_coherence`. Quand les dépenses reconstruites dépassent le XP total enregistré, le total est automatiquement relevé — affiché clairement dans la modale de confirmation.',
            '✨ **Fiches Docte dans la Galerie des Fées :** Les Initiés voient maintenant la fiche complète (apparence, caractère, capacités, pouvoirs, atouts) de chaque type de fée directement dans l\'étape 1 de création.',
        ]
    },
    {
        version: '15.16.34 - "Le Grimoire du Docte 📖"',
        date: '2026-05-08',
        description: 'Indexation du Manuel du Joueur — lore & règles documentés',
        changes: [
            '📖 **Lecture complète du Manuel du Joueur (280 p.) :** Le PDF a été extrait et indexé en intégralité — 26 types de fées, 6 étapes de création, toutes les formules de jeu.',
            '📋 **REGLES_INDEX.md :** Fichier mémoire technique créé : types de fées, coûts XP, formules de combat, vérification de l\'implémentation code vs règles.',
            '🌿 **LORE_HERITIERS.md :** Fichier mémoire lore créé : univers Belle Époque, vocabulaire féérique, personnalités par type de fée, formules de messages suggérées.',
            '✅ **Vérification implémentation :** Toutes les formules XP, combat et stats ont été comparées au manuel — conformité 100% confirmée (xpCalculator.js, rulesEngine.js).',
        ]
    },
    {
        version: '15.16.33 - "La Vitrine de l\'Héritier 🃏"',
        date: '2026-05-08',
        description: 'Cartes personnages : réparation XP, télégraphe, filtre, XP lisibles',
        changes: [
            '🔧 **Badges réparation XP sur les cartes :** Le statut du journal XP (⏳ À réparer, ✅ Complet, ✨ Réparé…) est affiché directement sur chaque carte, visible uniquement par l\'admin. Le badge est cliquable pour lancer la reconstruction, avec modale de confirmation avant/après.',
            '🗑️ **Suppression du bouton "Reconstruire" redondant :** La puce de statut devient elle-même le déclencheur — plus économe en espace.',
            '💬 **Bouton Télégraphe dans le footer des cartes :** Une icône MessageCircle discrète apparaît à côté du pseudo du joueur sur les cartes qui ne m\'appartiennent pas, pour ouvrir une missive privée directement.',
            '🔍 **Filtre de recherche par onglet :** Un champ de recherche persiste entre les onglets (Mes personnages / Publics / Admin) et filtre par nom, nature féerique ou pseudo du joueur. Le compteur d\'onglet reflète les résultats filtrés.',
            '✨ **XP lisible sur les cartes :** Le badge XP affiche désormais `✨ restants / total XP` en un seul badge bicolore — les XP disponibles en amber, le total acquis en vert.',
        ]
    },
    {
        version: '15.16.32 - "L\'Œil du Docte 🔍"',
        date: '7 Mai 2026',
        changes: [
            '🐛 **Fix — Fiche inconnue dans les Cercles :** Un joueur qui crée un personnage après avoir rejoint un cercle voyait sa fiche affichée comme "Inconnue" pour le Docte, qui ne pouvait pas l\'ouvrir. Cause : `cercle_membres.character_id` pointait vers l\'ancien perso. Fix en deux volets : UI défensive (carte orange + badge "Fiche non liée" + bouton "En attente…" désactivé côté Docte) et nouvelle feature permettant au joueur de changer son Héritier directement depuis la table virtuelle via un sélecteur.',
            '✨ **Changer d\'Héritier dans un Cercle :** Sur sa propre carte, un joueur voit maintenant "Mon Héritier : [nom]" et un menu déroulant "Changer d\'Héritier…" qui met à jour `cercle_membres` en un clic et recharge la vue.',
            '📊 **Audit des index BDD :** Analyse complète des 32 tables — identification de 2 doublons d\'index (admin_settings, cercle_membres), 3 index GIN lourds inutiles sur characters (data, caracteristiques, competences_libres), et ~15 FK sans index (character_snapshots, chat_messages, chat_channels, heritier_notes, registre_forge…). Migration recommandée prête à appliquer.',
            '🚨 **Alerte sécurité identifiée :** RLS désactivé sur chat_channels, chat_messages et bug_reports — exposées publiquement. SQL de remédiation préparé, en attente de validation des politiques.',
        ]
    },
    {
        version: '15.16.31 - "Le Gardien du Seuil 🛡️"',
        date: '7 Mai 2026',
        changes: [
            '🛡️ **Validation pré-scellage complète :** `sealValidation.js` introduit un système de gardes multicouches avant l\'apposition du Sceau. Erreurs bloquantes (A→F) : type féérique reconnu, caractéristiques complètes, profils majeur ET mineur définis, 2 atouts féériques choisis, capacité féérique sélectionnée, pouvoirs = rang de Féérie (1 par rang), toutes les prédilections utiles/futiles au choix remplies.',
            '⚠️ **Avertissements non-bloquants (G) :** Si des points restent non dépensés à la création (utiles verts, rangs gratuits Esprit 🧠, loisirs futiles), le joueur en est averti dans la modale de confirmation — il peut quand même sceller en connaissance de cause.',
            '🎨 **ConfirmModal enrichie :** Nouvelle prop `errors[]` (liste rouge, bouton Confirmer masqué) et `warnings[]` (encart jaune, confirmation toujours possible). En-tête rouge si erreurs bloquantes, amber sinon. Rétrocompatible — aucun autre usage impacté.',
            '🔧 **Fix — Atouts indépendants de Féérie :** La validation atouts utilise le constant `MAX_ATOUTS = 2` (fixe), sans lien avec le rang de Féérie. La Féérie détermine uniquement le nombre de Pouvoirs.',
        ]
    },
    {
        version: '15.16.30 - "L\'Archiviste du Passé 🔧"',
        date: '7 Mai 2026',
        changes: [
            '🧠 **Bonus Esprit post-scellage :** Les points d\'Esprit achetés avec des XP après le scellage débloquent désormais des rangs gratuits dans les compétences d\'Érudit et de Savant (comme à la création). Le calcul compare `esprit_actuel` vs `esprit_scellé` et attribue les rangs via `bonusEspritXP` − `investPost`.',
            '📓 **Journalisation des rangs gratuits (Esprit) :** Chaque rang gratuit est tracé dans le journal avec le nouveau code `ESPRIT_BONUS_UTILE` et `valeur: 0`. Affichage "🧠 Gratuit" dans le Journal des Flux de l\'Âme au lieu d\'une valeur XP nulle invisible.',
            '👁️ **Fix — Journal incomplet en lecture seule :** Quand un personnage scellé est ouvert en lecture seule (par un autre joueur ou depuis les Cercles), le journal était tronqué si `historique_xp` en base était partiel (condition `length === 0` jamais déclenchée). On force désormais la reconstruction client-side avant le `LOAD_CHARACTER`, comme le fait `handleAppropriate`.',
            '📜 **Nouveau — `CHARACTER_SCHEMA.md` :** Document vivant décrivant l\'intégralité du schéma personnage : colonnes Supabase, structure JSONB `data{}`, sous-schémas (`caracteristiques`, `competencesLibres`, `vieSociale`, `stats_scellees`, `computedStats`), tableau des origines de spécialités, flow de chargement, pièges connus.',
            '🔒 **Refactor — Action `SEAL_CHARACTER` :** Le scellage est désormais une action dédiée dans `characterReducer` (remplace l\'intercept `UPDATE_FIELD`). Capture atomique et exhaustive de `stats_scellees` : caractéristiques, atouts, compétences libres, futiles, fortune, pouvoirs.',
            '🛠️ **Nouveau — Outil admin de reconstruction des journaux :** `TabRepairJournaux` (super_admin uniquement) liste tous les personnages scellés, détecte les journaux incomplets, et permet de reconstruire les `DEPENSE` depuis `stats_scellees` — tout en préservant les `GAIN` existants. Recherche par nom, filtre "À réparer / Tous", et modale de confirmation avec tableau avant/après.',
            '🔍 **Audit Supabase — 20 personnages identifiés :** Requête SQL d\'analyse sur l\'intégralité des personnages scellés : classification en "journal vide", "GAIN uniquement", "partiel" et "complet". Emet, Alafard, Louise Dubois, Maudierne, Una et ~15 autres bénéficieront de la reconstruction.',
        ]
    },
    {
        version: '15.16.29 - "Le Parchemin Complet 📜"',
        date: '7 Mai 2026',
        changes: [
            '🐛 **Fix critique — Fiches des autres joueurs incomplètes :** Les onglets "Public" et "Admin" de `CharacterList` passaient le personnage light (13 colonnes) à `onSelectCharacter` au lieu de charger la fiche complète via `getFullCharacter()`. Résultat : compétences, atouts, pouvoirs, data et stats manquaient dans le récap et le PDF. Corrigé en routant ces deux onglets via `handleSelectCharacter` comme l\'onglet "Mes personnages".',
            '✨ **Fix — Détail futiles (bonus magique) :** `getFutileBreakdown` ne comptabilisait pas les bonus magiques issus d\'atouts/pouvoirs sur les compétences futiles, causant un écart entre la valeur affichée et la somme de la décomposition. Ajout de `bonusMagique` et `bonusMagLabel` dans le breakdown.',
            '✨ **Fix — Origines des spécialités en mode détaillé :** `allSpecialties` stocke désormais des objets `{nom, origine}` au lieu de simples strings. Les spécialités sont taguées Créa / XP / Métier / Inné / magique avec les couleurs correspondantes dans la vue détaillée.',
            '🔒 **Fix — Snapshot scellage (futiles + fortune) :** Le reducer `UPDATE_FIELD` intercepte désormais le premier scellage pour capturer `competencesFutiles.rangs` et `fortune` dans `stats_scellees`. Les anciens personnages d\'Emet ont été corrigés rétroactivement en base.',
            '🔍 **Fix — Ressort:1 d\'Emet à la création :** Preuve mathématique via XP_SOLDE, puis correction SQL de `stats_scellees.competencesLibres.rangs.Ressort` pour les copies d\'Emet.',
            '🔙 **Fix — Retour aux Cercles :** Depuis un profil vu dans un Cercle, le bouton "Retour" ramène maintenant au Cercle (via `location.state.from`) au lieu des Archives. Le libellé s\'adapte dynamiquement.',
        ]
    },
    {
        version: '15.16.28 - "La Source Unique 🏛️"',
        date: '7 Mai 2026',
        changes: [
            '🏛️ **Refactor — Source unique de vérité (XP) :** `getXpState()` calcule désormais `xp_depense` depuis `historique_xp` (somme algébrique du journal) au lieu de lire le champ `xp_depense` en base. Le journal fait foi ; le champ DB n\'est plus qu\'un cache dérivé mis à jour à chaque sauvegarde.',
            '🔕 **Refactor — Fin de la double-écriture :** `LOG_XP_TRANSACTION` dans le moteur ne mute plus `xp_depense` en mémoire. Un seul save → un seul calcul → une valeur cohérente.',
            '🏷️ **Nouvelle fonctionnalité — Codes canoniques XP :** Chaque transaction possède désormais un champ `code` (ex: `CARAC_AUGMENTATION`, `FORTUNE_ELEVATION`, `ATOUT_ACQUISITION`…) permettant un filtrage programmatique sans fragile correspondance de strings. 15 codes définis dans `XP_CODES`.',
            '📊 **Nouveau — Table SQL `xp_transactions` :** Miroir queryable de `historique_xp` (JSONB) synchronisé à chaque sauvegarde. Permet analytics cross-personnages, filtrage SQL par code/type, vues de synthèse (`xp_summary`). Architecture write-to-both : le JSONB reste source primaire.',
            '🔧 **Nouveau — `adminMigration.js` :** Utilitaire one-shot `migrateXpHistories(gameData)` pour peupler `historique_xp` en base pour tous les anciens personnages scellés qui n\'en ont pas encore. Supporte mode `dryRun` et callbacks de progression.',
            '🧹 **Nettoyage — Consumers XP :** `CharacterCreator.jsx`, `FortuneController.js` et `pixieBrain.js` utilisent maintenant `getXpState()` au lieu de calculer `(xp_total - xp_depense)` manuellement.'
        ]
    },
    {
        version: '15.16.27 - "Le Grand Livre des Âmes 📒"',
        date: '7 Mai 2026',
        changes: [
            '🏗️ **Refactor majeur — Journal des Âmes (XP) :** Toutes les dépenses et remboursements d\'XP passent désormais par `LOG_XP_TRANSACTION` au lieu de muter `xp_depense` directement. 6 composants migrés : `StepPouvoirs`, `StepAtouts`, `AnomalieFeeriqueWidget`, `useCompetencesLibres`, `StepCompetencesFutiles`, `useVieSociale`. Le journal peut désormais reconstituer fidèlement l\'historique complet d\'un personnage.',
            '🐛 **Fix — historyReconstructor (Fortune fantôme) :** La Fortune accordée par le métier/la Vie Sociale ne génère plus de fausses entrées XP dans le journal. Le plancher de Fortune est maintenant calculé depuis les achats réels (`fortune_score` + `fortune_bonus` des items).',
            '🐛 **Fix — historyReconstructor (Fortune coût) :** Remplacement du coût fixe `10 XP` par la vraie formule `getFortuneCost()` (tenant compte des rangs Classe et Sciences).',
            '🐛 **Fix — historyReconstructor (Futiles .rangs) :** La reconstruction lisait `competencesFutiles` (objet parent) au lieu de `competencesFutiles.rangs`, ce qui produisait un écart d\'1 XP. Corrigé avec `?.rangs`.',
            '✨ **Fix — Journal des Âmes (Groupement) :** Les entrées consécutives de même nature dans le journal sont désormais fusionnées en une seule ligne avec un badge `×N`, pour une lecture plus claire.',
            '🔒 **Fix — Dupliquer / Adopter un héritage :** Ces deux actions préservent maintenant le statut `scellé` d\'un personnage si l\'original l\'était. L\'historique XP est également forcé en reconstruction complète pour garantir un journal cohérent.',
            '🎨 **Fix — Paramètres (Notifications) :** Suppression du décalage visuel (`ml-8`) sur les boîtes de réglages de notifications dans `AccountSettings.js`.'
        ]
    },
    {
        version: '15.16.26 - "Le Polyglotte Corrigé 🌍"',
        date: '6 Mai 2026',
        changes: [
            '🐛 **Fix — Érudition & Langues (PDF & Fiche) :** Correction d\'un bug dans `WidgetLangues.js` où la suppression de la langue maternelle stockait le tableau entier `["Français","Anglais","Italien"]` au lieu d\'une string. Résultat visible : `FrançaisAnglaisItalien (Maternelle) • Français • Anglais • Italien` sur la fiche et le PDF. Fix : `newLangues[0]` au lieu de `newLangues`. Requête SQL de migration fournie pour corriger les personnages déjà corrompus en base.'
        ]
    },
    {
        version: '15.16.25 - "Le Grand Ménage de Printemps 🧹"',
        date: '6 Mai 2026',
        changes: [
            '🗂️ **Refactoring — Extraction de sous-composants :** Trois composants enfants colocalisés avec leur parent ont été extraits dans leurs propres fichiers : `CharacterCard` (depuis `CharacterList`), `ChangeCard` (depuis `ValidationsPendantes`), `ActiveCercleView` (depuis `CerclesDashboard`). Les fichiers passent de 534–666 lignes à ~350–390 lignes chacun.',
            '📜 **Refactoring — Archivage du changelog :** Les entrées historiques de `version.js` (versions 2.x à 15.11.x) ont été déplacées dans `version.legacy.js`, non importé par l\'application. Le fichier principal passe de 1639 à 162 lignes — économie directe de tokens à chaque session.',
            '🗺️ **Infrastructure — Carte du projet :** Création de `PROJECT_MAP.md` dans le dossier mémoire de l\'assistant : architecture par zones, responsabilités des fichiers clés, et catalogue des pièges non-évidents. Mise à jour de `MEMORY.md` pour le référencer en premier.'
        ]
    },
    {
        version: '15.16.24 - "Le Grimoire Illustré 📖"',
        date: '6 Mai 2026',
        changes: [
            '🖼️ **Parchemin PDF — Portraits :** Les deux portraits du personnage (masqué et démasqué) apparaissent désormais sur le PDF exporté. Le portrait masqué orne l\'en-tête de la page 1, le portrait féérique s\'affiche en haut de la page 2.',
            '⚔️ **Parchemin PDF — Stats de combat :** Les statistiques de combat affichées sur le PDF sont maintenant calculées en temps réel via le moteur de règles, garantissant une cohérence parfaite avec le Bilan. Compétences futiles, équipement et contacts s\'affichent correctement (ils étaient vides auparavant).',
            '📐 **Parchemin PDF — Compression A4 :** La page 1 du PDF a été resserrée (tailles de police, marges, espacements) pour tenir confortablement sur une feuille A4 à l\'impression.',
            '🎛️ **Encyclopédie — Spécialités (UI) :** Le bouton "Vue groupée" est remplacé par un élégant slider CSS sans texte. Le bouton "Catalogue de référence" est remplacé par le bouton standard "Suggérer une modification".',
            '✏️ **Encyclopédie — Spécialités (Édition) :** Les spécialités sont désormais éditables ! La modale de proposition s\'ouvre correctement, avec un formulaire adapté : nom, description, et sélecteur de compétence parente (BonusBuilder et sélecteur de fées masqués, non pertinents ici).',
            '🔧 **Refactoring DRY — Icônes :** Migration de 39 fichiers depuis les imports directs `lucide-react` vers le hub centralisé `src/config/icons.js`. Correction des erreurs ESLint associées (icône `Print` inexistante, BOM Unicode, imports inutilisés).'
        ]
    },
    {
        version: '15.16.23 - "Le Daguerréotype Double 🖼️"',
        date: '5 Mai 2026',
        changes: [
            '🖼️ **Personnalisation du Masque (Nouvelle Fonctionnalité) :** L\'étape 10 de création de personnage dispose désormais d\'un encart "Le Daguerréotype Double". Deux zones d\'import d\'image distinctes permettent d\'associer un portrait humain (L\'Apparence Sociale) et un portrait féérique (La Nature Profonde) à chaque Héritier.',
            '👁️ **Loi du Silence :** Un bouton de bascule permet au joueur de choisir si sa véritable nature féérique est visible par les autres membres du Cercle, ou gardée secrète.',
            '🗄️ **Architecture (Migration DB) :** Trois nouvelles colonnes dédiées sur la table `characters` (`portrait_masked_url`, `portrait_unmasked_url`, `is_unmasked_revealed`) et un bucket Supabase Storage sécurisé (`portraits`) accueillent désormais les images. Les RLS protègent les uploads de chaque joueur.'
        ]
    },
    {
        version: '15.16.22 - "Le Notaire Réparé 📜"',
        date: '5 Mai 2026',
        changes: [
            '🐛 **Don de personnage (Bloquant) :** Correction d\'un bug introduit lors d\'une refonte antérieure — le code de don était écrit uniquement dans le JSONB `data`, alors que la RPC `claim_character_by_code` le cherche dans la colonne dédiée `transfer_code`. Le code est désormais écrit dans les deux emplacements simultanément. Les dons fonctionnent à nouveau normalement.'
        ]
    },
    {
        version: '15.16.21 - "Le Voile Levé 👁️"',
        date: '4 Mai 2026',
        changes: [
            '👁️ **Connexion (UX) :** Le formulaire d\'authentification dispose désormais d\'un bouton Œil permettant de révéler ou masquer le mot de passe saisi. Fonctionne en mode Connexion comme en mode Inscription.'
        ]
    },    {
        version: '15.16.20 - "Le Filtre du Marchand 🔍"',
        date: '4 Mai 2026',
        changes: [
            '🔍 **Vie Sociale & Équipement (UX) :** La boutique d\'équipement dispose désormais d\'un champ de recherche instantané. Tapez quelques lettres pour filtrer dynamiquement l\'ensemble du catalogue du profil actif, toutes catégories confondues. Une croix de réinitialisation apparaît dès qu\'un filtre est actif.'
        ]
    },    {
        version: '15.16.19 - "L\'Ombre des Sicaires 🗡️"',
        date: '2 Mai 2026',
        changes: [
            '🗡️ **Vie Sociale & Équipement (Hotfix) :** L\'algorithme de la boutique lit désormais parfaitement la nouvelle architecture de la base de données permettant à un Contact (ou un objet) d\'appartenir à de multiples Profils professionnels. Les réductions octroyées par vos statuts secrets (comme Membre des Sicaires) s\'appliquent désormais avec une tolérance intelligente, même si le nom de l\'objet diffère légèrement selon votre métier.',
            '🧠 **Forge (Constructeur Visuel) :** Le champ "Ajustement Prix Boutique" bénéficie dorénavant d\'un système d\'autocomplétion natif. Les Gardiens du Savoir peuvent désormais rechercher dynamiquement un objet ou un contact existant au fur et à mesure de leur frappe, éradiquant les erreurs d\'orthographe.'
        ]
    },    {
        version: '15.16.18 - "L\'Inquisiteur et le Masque 🎭"',
        date: '1 Mai 2026',
        changes: [
            '🎭 **Attributs & Parchemins (Évolution) :** Suite au signalement de Chninkel, la caractéristique "Masque" possède désormais son propre contrôleur d\'expérience à l\'Étape 3 (Pouvoirs). De plus, le triptyque magique sacré (Féérie, Masque, Tricherie) s\'imprime enfin fièrement au sommet de la deuxième page de vos fiches PDF.',
            '👻 **Purification du Code (Architecture) :** Une immense traque des fantômes algorithmiques a été menée par notre Inquisiteur syntaxique sur l\'ensemble du Grimoire. Les mémoires orphelines, imports inutilisés et dépendances asynchrones ont été purgés. Bonus : Le Grimoire Personnel profite désormais d\'un écran de déchiffrage fluide et immersif à son ouverture.'
        ]
    },    {
        version: '15.16.16 - "Le Sang Bleu Révélé 🩸"',
        date: '1 Mai 2026',
        changes: [
            '👑 **Parchemins (PDF & Bilan) :** L\'encart des titres honorifiques s\'intitule désormais "Familles, Titres & Statuts" pour correspondre scrupuleusement à la terminologie officielle du Livre de Base.',
            '🧠 **Cerveau Central (Filtre d\'Export) :** L\'algorithme de génération de la Bible Autonome capture désormais correctement les objets sociaux de catégorie "statut". Vos appartenances aux sociétés secrètes et vos ascendances nobles ne seront plus jamais noyées au milieu de l\'équipement matériel commun.'
        ]
    },    {
        version: '15.16.15 - "La Douane Linguistique 🌍"',
        date: '1 Mai 2026',
        changes: [
            '🌍 **Langues & Érudition (Hotfix) :** L\'Étape 10 de personnalisation scanne de nouveau correctement l\'intégralité des achats multiples effectués dans la boutique. Il est dorénavant possible de débloquer plusieurs dialectes rares ou européens sans que le système n\'en compte qu\'un seul.'
        ]
    },    {
        version: '15.16.14 - "La Diète de l\'Imprimeur 🖨️"',
        date: '30 Avril 2026',
        changes: [
            '🖨️ **Imprimerie (PDF) :** Résolution des sauts de page disgracieux sur la fiche de personnage exportée. Le bloc "Combat & Santé" a été rendu techniquement insécable, garantissant que son titre ne se retrouve plus jamais séparé de ses cercles de statistiques.',
            '📏 **Mise en page (CSS) :** Application d\'une cure d\'amaigrissement stricte sur les marges d\'impression de la première page. Cette récupération de quelques millimètres précieux permet d\'aspirer le bloc de combat vers le haut et d\'éviter la création intempestive d\'une page blanche.'
        ]
    },    {
        version: '15.16.13 - "L\'Inventaire Déployé 🎒"',
        date: '30 Avril 2026',
        changes: [
            '📄 **Parchemins (Bilan & PDF) :** Le bloc fourre-tout "Détails & Inventaire" a été entièrement démantelé. Les Compétences Futiles, l\'Équipement, les Contacts, les Langues et les Titres disposent désormais chacun de leur propre encart dédié.',
            '📏 **Mise en page (UX) :** Ces nouveaux encarts s\'étendent désormais sur toute la largeur de la feuille de personnage, offrant une bien meilleure lisibilité et résolvant les problèmes de textes tronqués pour les Héritiers possédant de vastes inventaires.'
        ]
    },    {
        version: '15.16.12 - "L\'Héritage Révélé 🧬"',
        date: '30 Avril 2026',
        changes: [
            '👁️ **Encyclopédie (Consultation) :** Résolution de l\'anomalie rendant invisible la Magie et l\'Héritage Inné des espèces féériques lors de leur simple consultation dans la base de données.',
            '🧠 **Cerveau Séparé (Hook) :** Alignement strict des alias de la requête SQL du composant `useEncyclopedia` sur ceux du moteur central (`supabaseGameData`). L\'interface visuelle parvient désormais à lire et afficher correctement les Capacités, Pouvoirs et Atouts de chaque fée explorée.'
        ]
    },    {
        version: '15.16.11 - "La Vitrine aux Trophées 🏆"',
        date: '30 Avril 2026',
        changes: [
            '🏆 **Communauté (Forge des Titres) :** La section d\'édition des badges honorifiques est dorénavant protégée par le sceau de l\'Architecte. Les joueurs peuvent y admirer l\'ensemble des trophées existants pour connaître les accomplissements à débloquer, mais l\'enclume de création et les pouvoirs de destruction restent l\'apanage exclusif du Super Administrateur.'
        ]
    },    {
        version: '15.16.10 - "L\'Échelle de l\'Évolution 🪜"',
        date: '30 Avril 2026',
        changes: [
            '📈 **Moteur de Jeu (Évolution) :** Application stricte de la règle du Livre de Base sur la progression des Profils. Lors d\'une dépense d\'expérience, l\'augmentation du Rang de Profil n\'octroie plus une simple addition linéaire, mais un cumul dynamique (le passage au Rang 3 offre 3 PP, et le passage ultérieur au Rang 4 offre 4 PP additionnels).',
            '🧠 **Cerveau Central (Conscience Temporelle) :** Le super-calculateur a été doté d\'une mémoire absolue. Il analyse la photographie de votre Héritier au moment exact de son scellage (`stats_scellees`), puis la compare avec son niveau de maîtrise actuel post-dépenses d\'XP pour calculer et distribuer les budgets de Points de Personnage sans la moindre erreur.'
        ]
    },    {
        version: '15.16.7 - "Le Carrefour des Spécialités 🛤️"',
        date: '29 Avril 2026',
        changes: [
            '🛤️ **Forge (BonusBuilder) :** La brique rose "Choix de Spécialité" a été totalement refondue. Les Gardiens peuvent désormais proposer un choix entre des spécialités appartenant à des compétences mères totalement différentes (ex: *Mêlée: Épée* OU *Tir: Pistolet*). La migration des anciennes briques vers le nouveau format se fait automatiquement à l\'ouverture de l\'outil.',
            '🧠 **Cerveau Central (Cerbère) :** Le moteur d\'analyse du personnage a appris à scinder dynamiquement les chaînes composites (grâce au séparateur `:`) pour affecter la spécialité choisie à la bonne compétence de base dans le Bilan.',
            '🖨️ **Parchemins (PDF & JSON) :** La Bible Autonome et le générateur PDF ont été recâblés sur ce nouveau format universel, garantissant que ces choix croisés s\'impriment correctement sur la feuille de personnage finale.'
        ]
    },    {
        version: '15.16.1 - "Le Tri Social 👔"',
        date: '29 Avril 2026',
        changes: [
            '👔 **Ergonomie (Vie Sociale) :** Remplacement intelligent du filtre de l\'Encyclopédie. L\'onglet de Vie Sociale et d\'Équipement ne propose plus de filtrer par Espèce Féérique, mais propose dorénavant un tri logique par "Profils Autorisés" (Aventurier, Savant, Gentleman...).',
            '🧠 **Cerveau Séparé :** Optimisation du hook `useEncyclopedia`. Le moteur de recherche (useMemo) englobe désormais la matrice de filtrage des profils, et nettoie automatiquement les listes affichées à l\'écran sans le moindre temps de latence.'
        ]
    },    {
        version: '15.15.0 - "La Fée Indépendante 🧚‍♀️"',
        date: '27 Avril 2026',
        changes: [
            '✂️ **Architecture (Découpage) :** Exorcisme majeur de l\'Étape 1. Le panneau des détails de la fée a été extrait vers un composant visuel autonome (`FairyDetailsPanel.js`), allégeant drastiquement le chef d\'orchestre principal.',
            '🧹 **Purification (Code Mort) :** Nettoyage par le vide des variables orphelines, des imports d\'icônes inutilisés et de l\'ancien code de bascule pour le sexe biologique de la fée.',
            '🧠 **Performances (React) :** Sécurisation absolue des Hooks (`useCallback`, `useEffect`) sur l\'assistant Pixie et sur la piste de dés tridimensionnelle pour éviter les re-rendus infinis et satisfaire les règles strictes de compilation.'
        ]
    },
    {
        version: '15.14.0 - "La Magie Décomposée 🔮"',
        date: '27 Avril 2026',
        changes: [
            '🔮 **Lisibilité (Magie) :** Le statut des Pouvoirs n\'est plus résumé sur une seule étiquette étouffante. Chaque pouvoir affiche désormais fièrement deux sceaux distincts : son Niveau (Standard, Profond, Légendaire) et sa Visibilité (Masqué, Démasqué).',
            '♻️ **Architecture (DRY) :** Centralisation du moteur de badges magiques dans le Dictionnaire du Jeu. Les composants de l\'Encyclopédie et de la Création de personnage se délestent de dizaines de lignes de code redondantes.',
            '🎨 **Design System :** Application d\'une charte colorimétrique claire pour les nouveaux doubles badges : Émeraude pour le Standard, Indigo pour le Profond, et Doré pour le Légendaire.'
        ]
    },    {
        version: '15.13.0 - "La Mémoire Intacte 🧠"',
        date: '27 Avril 2026',
        changes: [
            '🛡️ **Stabilité Temporelle (Anti-Amnésie) :** Vos brouillons de personnages et signalements de bugs sont désormais en sécurité. Le noyau du jeu ne se réinitialise plus inutilement lorsque vous basculez d\'un onglet à l\'autre (ex: pour lire vos PDF).',
            '🧠 **Architecture (Cerveau Séparé) :** Exorcisme majeur de la Modale de l\'Encyclopédie. Toute l\'énorme machinerie traduisant les données brutes de la base de données vers l\'interface visuelle a été isolée dans un Hook autonome (`useEncyclopediaModal`).',
            '🧲 **Ergonomie (Tri Magnétique) :** Lors de l\'édition d\'une Fée, les Atouts, Pouvoirs et Capacités déjà acquis sont dorénavant aimantés au sommet de la liste, classés par ordre alphabétique, évitant de longues recherches.',
            '✨ **Éditeur Narratif (Auto-Formateur) :** Finies les longues lignes condensées et illisibles ! Les Avantages et Désavantages s\'affichent sous forme de puces élégantes, et l\'éditeur ajoute dynamiquement la puce suivante via la touche Entrée.',
            '🧹 **Nettoyage (Console) :** Purge des fonctions génératrices de clés (UUID) obsolètes dans le moteur de l\'Encyclopédie pour apaiser le compilateur.'
        ]
    },    {
        version: '15.12.0 - "La Fontaine du DRY ⛲"',
        date: '26 Avril 2026',
        changes: [
            '🧠 **Architecture (Cerveau Centralisé) :** Éradication totale des calculs de combat en doublon. Le moteur central (Reducer) compile désormais de manière autonome l\'Esquive, la Parade et les Points de Vie dès qu\'une compétence évolue, devenant l\'unique dépositaire de la Vérité Absolue.',
            '☁️ **Base de Données (Purge) :** Le compacteur de sauvegarde vers Supabase a été allégé de ses redondances mathématiques. Il photographie dorénavant l\'état exact du Cerveau sans recalculer le combat, garantissant une intégrité absolue des données JSONB.',
            '📜 **Parchemin (Pureté Front-End) :** La page du Bilan Visuel a été délestée de son usine à gaz algorithmique. Elle redevient une interface React pure (JSX/Tailwind) qui se contente d\'afficher les statistiques pré-calculées, supprimant toute divergence entre l\'affichage à l\'écran et le PDF imprimé.'
        ]
    },
    // ============================================================================
    // 🧠 REX — Mémoire de l\'Assistant (ne pas supprimer, ne pas afficher dans l\'UI)
    // ============================================================================
    // Session du 16 Mai 2026 — Bug « Sans plancher » + Procédure admin
    //
    // Ce qui a été appris :
    //   1. Ne JAMAIS mocker `bonusCalculator` dans les tests hooks — `jest.mock`
    //      avec `jest.fn()` dans la factory produit silencieusement un mock cassé
    //      qui retourne `undefined`. Utiliser le module réel (pur, sans effets de bord).
    //
    //   2. Pour déboguer un mock suspect : ajouter un test `it('debug')` qui
    //      `require()` le module et appelle la fonction directement — ça évite
    //      de tourner en rond 30 minutes.
    //
    //   3. Message aux Héritiers : le rédiger AVANT le commit, il fait partie
    //      intégrante de la procédure `/version`.
    //
    //   4. Ne pas hésiter à lancer `node scripts/backup_supabase.js` dès l\'ouverture
    //      de session — déjà dans les règles, gratuit, 2 secondes.
    //
    //   5. Quand on ajoute une fonctionnalité admin (restauration de plancher),
    //      prévoir des tests de non-régression sur TabRepairJournaux pour couvrir
    //      les cas : validation échouée, restauration réussie, mise à jour du statut.
    //
    // Tests de non-régression à créer (TODO) :
    //   - TabRepairJournaux.restoreFloor : validation OK → stats_scellees en base
    //   - TabRepairJournaux.restoreFloor : validation échoue → rien n\'est persisté
    //   - TabRepairJournaux.restoreFloor : plancher restauré + journal OK → statut OK
    //   - TabRepairJournaux.restoreFloor : plancher restauré + journal incomplet → statut PENDING
    // ============================================================================
];

// ✨ EXTRACTION DYNAMIQUE (Le Parseur est sécurisé !)
// On coupe la chaîne sur le tiret pour récupérer juste le numéro pour l'UI,
// tout en conservant le nom complet dans la modale des archives.
export const APP_VERSION = VERSION_HISTORY[0].version.split(' - ')[0] || VERSION_HISTORY[0].version;
export const BUILD_DATE = VERSION_HISTORY[0].date;

