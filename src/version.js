// src/version.js

export const VERSION_HISTORY = [
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
    }
];

// ✨ EXTRACTION DYNAMIQUE (Le Parseur est sécurisé !)
// On coupe la chaîne sur le tiret pour récupérer juste le numéro pour l'UI,
// tout en conservant le nom complet dans la modale des archives.
export const APP_VERSION = VERSION_HISTORY[0].version.split(' - ')[0] || VERSION_HISTORY[0].version;
export const BUILD_DATE = VERSION_HISTORY[0].date;
