// src/version.js
//

import buildInfo from './build-info.json'; 

export const APP_VERSION = buildInfo.version;
export const BUILD_DATE = buildInfo.buildDate;

export const VERSION_HISTORY = [
  {
    version: '10.2.0',
    date: '4 Mars 2026',
    changes: [
      '🎩 **Le Salon VIP "Mon Grimoire" :** Refonte totale de la page Compte transformée en un véritable tableau de bord (Identité, Immersion, Notifications, Mécénat).',
      '🎖️ **Titres Honorifiques :** Sélectionnez votre Badge favori comme "Titre Actif". Il s\'affichera désormais en grand au sommet de l\'application pour asseoir votre prestige !',
      '🎲 **Immersion 3D :** Personnalisez l\'esthétique de vos jets de dés (Laiton Steampunk, Ivoire Ancien, Améthyste, Sang) directement depuis vos préférences.',
      '💎 **Soutien & Mécénat :** Intégration d\'un encart dédié au soutien du projet (Ko-Fi) avec la possibilité de débloquer le titre exclusif de "Mécène".',
      '💾 **Sauvegarde Unifiée :** Les préférences de Profil et du Corbeau Messager (Notifications) sont désormais synchronisées de façon transparente sous un seul grand bouton de sauvegarde.',
      '🛡️ **Administration & Sécurité :** Mise en évidence du titre actif des joueurs dans le registre des Gardiens et sécurisation complète (RLS) des préférences de notifications en base de données.'
    ]
  },
 {
    version: '10.1.0',
    date: '4 Mars 2026',
    changes: [
      '📱 **Application Native (PWA) :** Intégration d\'une invitation intelligente et non-intrusive incitant les joueurs à installer le Grimoire sur leur appareil (PC, Android, iOS) pour une immersion hors-ligne optimale.',
      '📝 **Moteur Grammatical Universel :** L\'application accorde désormais magiquement les textes (Traits, Noms de Profils, Métiers) en fonction du sexe biologique de votre personnage grâce à une norme pragmatique côté base de données.',
      '🛡️ **Chirurgie SQL (Gardiens) :** L\'éditeur de l\'Encyclopédie ne réécrit plus tout l\'historique d\'une Fée. Il calcule désormais un "Delta" ultra-précis des relations (Ajouts/Retraits) pour une sécurité absolue de la base.',
      '👁️ **Audit Visuel :** Le Conseil des Gardiens profite d\'un nouvel encart générant des badges verts (+) et rouges (-) pour comprendre les intentions de requêtes communautaires en un clin d\'œil.',
      '✨ **Clarification du Flux :** L\'Étape du Masque (Identité) et l\'Étape du Bilan (Tableau de bord final en lecture seule) ont été proprement scindées pour rendre l\'expérience utilisateur encore plus limpide.'
    ]
  },
	  {
		version: '9.11.0',
		date: '3 Mars 2026',
		changes: [
		  '🧠 **Super-Calculateur (DRY) :** Centralisation absolue des mathématiques du jeu (Scores de compétences, Rangs, Budgets PP). Le moteur principal calcule tout, garantissant une cohérence parfaite sur tous les écrans.',
		  '🧚 **Le Cerveau de Pixie :** Pixie prend vie ! Elle possède désormais plus d\'une centaine de répliques intelligentes, réagit à vos erreurs, s\'émerveille de vos atouts et papote sur le lore de la Belle Époque.',
		  '📄 **Fiche PDF Intelligente :** Les statistiques de combat imprimées (Esquive, Parade, Initiative) prennent désormais en compte *tous* vos modificateurs magiques (Atouts, Prédilections, Profils).',
		  '🛠️ **Constructeur Universel :** Le puissant Constructeur Visuel de Bonus de l\'Encyclopédie a été modularisé et étendu aux Pouvoirs et aux Capacités.',
		  '✨ **Ergonomie :** Affichage immédiat des potentiels (Min/Max) lors de la répartition des caractéristiques, et utilisation de votre vrai pseudo dans l\'interface de compte.'
		]
	  },
	  {
		version: '9.10.0',
		date: '2 Mars 2026',
		changes: [
		  '🐛 **Correctifs (Hotfix) :** Résolution d\'erreurs de syntaxe, nettoyage de variables orphelines et correction de chevauchements lors de la navigation.',
		  '⚙️ **Stabilité :** Optimisation des imports et consolidation des composants React pour éviter les plantages d\'interface.'
		]
	  },
   {
      version: '9.7.0',
      date: '2 Mars 2026',
      changes: [
        ' La Lanterne de Pixie : Pour les Héritiers ayant besoin de calme et de concentration, il est désormais possible de renvoyer Pixie dormir dans sa lanterne ! Un bouton d\'action rapide a été ajouté sur sa bulle.',
        ' Accessibilité & Préférences : Ajout d\'une section dédiée dans les Paramètres du Compte pour réveiller ou rendormir Pixie. Votre choix est sauvegardé sur votre profil.',
        ' Nouveaux Honneurs : La société féérique s\'enrichit de nouveaux badges honorifiques et personnalisés (Tricheuse, Gardien de la Lanterne...) pour récompenser les faits d\'armes et l\'implication des joueurs.'
      ]
    },
    {
      version: '9.6.0',
      date: '2 Mars 2026',
      changes: [
        '🛡️ **Savoir Scellé (Grimoire) :** Les Gardiens du Savoir peuvent désormais "sceller" définitivement une entrée de l\'Encyclopédie, la protégeant ainsi contre toute proposition de modification future.',
        '📜 **Modales Immersives :** Éradication définitive des vilaines fenêtres de confirmation grises du navigateur ("localhost indique..."). Chaque demande critique s\'affiche désormais sur un élégant parchemin (Conseil, Réinitialisations, etc.).',
        '🪄 **Traducteur d\'Anomalies :** Fini les messages d\'erreur en anglais technique ! Les erreurs de la base de données et de connexion sont désormais traduites en alertes narratives intégrées à l\'univers.',
        '⚡ **Sécurité Absolue :** Le scellage des savoirs traverse le bouclier de sécurité (RLS) de manière invisible grâce à l\'intégration de fonctions RPC directement sur le serveur.'
      ]
    },
    {
      version: '9.5.0',
      date: '1er Mars 2026',
      changes: [
        '🎲 **Piste de Lancer 3D :** Intégration d\'un lanceur virtuel complet pour le Système 3D (D8 Prudent, D10 Aventureux, D12 Panache) avec calcul automatique des malus (-3 et -5).',
        '👑 **Mécaniques de Tricherie :** Dépensez 1 point pour lancer les 3 dés d\'un coup (avec détection instantanée des Suites et des Triples) !',
        '📐 **Topologie Réaliste :** La triche à 2 points permet de pivoter le dé. Le système utilise un moteur mathématique calqué sur les arêtes d\'un véritable set de dés physiques.',
        '🌟 **Barre de Progression Magique :** L\'austère numérotation des étapes a été remplacée par de superbes icônes thématiques, des infobulles et une jauge dorée dynamique.'
      ]
    },
    {
      version: '9.4.0',
      date: '1er Mars 2026',
      changes: [
        '🪄 **Constructeur Visuel d\'Atouts :** Refonte de l\'éditeur dans l\'Encyclopédie. Les Gardiens peuvent désormais configurer les bonus techniques (Caractéristiques, Compétences, Spécialités) via une interface intuitive sans taper de code JSON.',
        '📚 **Spécialités Globales :** Le constructeur d\'Atouts est connecté à la base de données. Il permet de sélectionner des spécialités existantes ou d\'en créer de nouvelles à la volée pour toute la communauté.',
        '⚙️ **Moteur de Jeu Amélioré :** Le calculateur intègre désormais de façon native les bonus de rangs bruts et de caractéristiques provenant des Atouts (ce qui ajuste automatiquement les Points de Vie maximums).',
        '🧚‍♀️ **Pixie Intelligente :** L\'assistante Pixie est désormais dotée d\'un véritable "cerveau" (pixieBrain). Elle scrute vos choix à chaque étape (aura d\'alerte colorée) et fournit des conseils contextuels dynamiques.',
        '🐛 **Stabilité :** Résolution de divers bugs de balisage JSX et optimisation du rendu de l\'Encyclopédie.'
      ]
    },
    {
      version: '9.3.0',
      date: '1er Mars 2026',
      changes: [
        '👑 **Titres & Statuts :** Création d\'une toute nouvelle catégorie dans la boutique de Vie Sociale (Étape 9) permettant d\'acquérir des titres de noblesse et d\'intégrer des factions secrètes (Monarchomaques, Sicaires, Technologues, etc.).',
        '✨ **Titres de Prestige :** Intégration des titres ultimes d\'archétypes (Légende vivante, Polémarque, Technarque, Hiérophante...) octroyant un bonus direct de +1 en Fortune.',
        '🛍️ **Inventaire Complet :** Ajout massif de tout l\'équipement avancé manquant (laboratoires, dirigeables, montgolfières, réseaux de contrebande) et des Contacts illustres de l\'univers (PNJs nommés).',
        '⏳ **Économie Temporelle :** Le coût d\'achat des familles féériques nobles et de certains statuts s\'ajuste désormais dynamiquement si votre Fée est "Moderne".',
        '🛠️ **Architecture :** Mise à jour des contraintes de la base de données Supabase pour supporter la nouvelle catégorie "titre".'
      ]
    },
	{
    version: '9.2.0',
    date: '28 Février 2026',
    changes: [
      '🧚 **Assistante Virtuelle :** Arrivée de Pixie, la petite fée interactive qui vole sur votre écran et réagit à vos choix de création de personnage !',
      '🎖️ **Nouveau Badge :** Ajout du titre de "Pionnier Pneumatique 📠" pour récompenser les premiers testeurs du Télégraphe.',
      '🎨 **Ergonomie :** Les boutons de navigation (Suivant/Précédent) ne flottent plus mais sont désormais élégamment intégrés au cœur du grimoire.',
      '📱 **Interface :** Optimisation de l\'en-tête principal pour compacter le titre et gagner un maximum d\'espace de lecture sur tous les écrans.'
    ]
  },
  {
    version: '9.0.0',
    date: '27 Février 2026',
    changes: [
      '📠 **Télégraphe Pneumatique :** Déploiement officiel du système de communication ! Échangez des dépêches avec les autres joueurs connectés et l\'équipe d\'administration.',
      '📡 **Traqueur d\'Activité :** Détection automatique des Héritiers en ligne et de leur dernière connexion pour faciliter les échanges.'
    ]
  },  
  {
    version: '8.33.0',
    date: '27 Février 2026',
    changes: [
      '📖 **Encyclopédie Dynamique :** Remplacement de l\'ancien format texte par un magnifique Constructeur Visuel pour les Compétences Utiles, directement branché sur la base de données.',
      '🛡️ **Conseil des Gardiens :** Réparation et sécurisation de la génération du code SQL pour les nouvelles tables relationnelles.',
      '♻️ **Création de Personnage :** Ajout d\'un bouton de Réinitialisation rapide pour l\'étape des Compétences Futiles.',
      '🎭 **Jokers Féériques :** Intégration transparente des compétences "Au choix" (ex: Compétence artistique) exclusives à certaines Fées avec champs de précision.',
      '🛠️ **Optimisation (Refactoring) :** Centralisation globale pour un code plus propre et robuste.',
      '🧹 **Nettoyage Sécurité :** Suppression définitive de vieilles données en dur.'
    ]
  },
 {
    version: '8.0.0',
    date: '21 Février 2026',
    changes: [
      '🛡️ **Conseil des Gardiens :** Nouvelle interface secrète permettant aux Gardiens du Savoir et Admins de valider ou rejeter les propositions de la communauté.',
      '🛍️ **Vie Sociale (Étape 9) :** Fin des données de test ! Le catalogue est désormais connecté en temps réel à la base de données.',
      '⚙️ **Métiers Intelligents :** Remplacement automatique de l\'ancien métier principal lors d\'un nouvel achat, et cumul possible pour les activités secondaires.',
      '💰 **Fortune Dynamique :** La jauge de Fortune se calcule toute seule en prenant la valeur la plus haute et en y additionnant les bonus d\'objets (limite de 15).',
      '📖 **Grimoire (Encyclopédie) :** Ajout des onglets Pouvoirs et Capacités. Possibilité d\'attacher/détacher ces éléments directement sur la fiche d\'une Fée.',
      '🛡️ **Administration :** Activation de l\'interface de Rôles pour permettre au Super Admin de nommer les "Gardiens du Savoir".',
      '🐛 **Stabilité Absolue :** Éradication des blocages de cache du navigateur et fluidité de connexion retrouvée.'
    ]
  },
    {
        version: '7.2.0',
        date: '18 Février 2026',
		changes: [
		  '🛍️ **Nouveau (Étape 9) :** "Vie Sociale & Équipement". Dépensez vos Points de Personnage (PP) dans des boutiques dédiées à chaque profil.',
		  '💰 **Fortune Dynamique :** Jauge de Fortune en temps réel.',
		  '✨ **Nouveau (Étape 8) :** "Atouts Féériques". Système complet avec gestion des atouts universels et spécifiques.',
		  '🎁 **Bonus Intelligents :** Les Atouts débloquent automatiquement des spécialités "dorées" gratuites dans les compétences.',
		  '⚡ **Pouvoirs :** Filtrage des pouvoirs accessibles à la création (Masqué/Démasqué uniquement).',
		  '🎨 **UI/UX :** Nouveau design "Magasin" pour l\'équipement et badges distinctifs pour les bonus.'
		]
    },
    {
        version: '7.1.0',
        date: '16 Février 2026',
		changes: [
		  '✨ Feat : Activation complète des Pouvoirs Féériques (Tri Masqué/Démasqué).',
		  '🌟 Feat : Ajout de l\'étape "Atouts Féériques" (Universels et Spécifiques).',
		  '🎨 UI : Amélioration visuelle des cartes de sélection avec badges dynamiques.'
		]
    },
    {
        version: '7.0.1',
        date: '16 Février 2026',
		changes: [
		  '🌍 UI : Ajout d\'une icône Globe pour identifier instantanément les personnages publics.',
		  '👁️ Feat : Possibilité de basculer le statut Public/Privé directement depuis la liste des personnages.'
		]
    },
    {
        version: '7.0.0',
        date: '16 Février 2026',
        changes: [
            "🎭 ROLEPLAY : Ajout de la sélection des Traits de Caractère dominants (1 ou 2) à la création.",
			"📏 RÈGLES : Intégration de la Taille (Petite/Grande/Très Grande) et application automatique du modificateur d'Esquive."
        ]
    },
    {
        version: '6.0.0',
        date: '14 Février 2026',
        changes: [
            "✨ VERSION 6.0.0 MAJEURE",
            "🛠 SYSTEME : La date de build est maintenant synchronisée automatiquement avec la date réelle du déploiement.",
            "🔄 UPDATE : Système de mise à jour automatique actif.",
            "👤 SOCIAL : Affichage du créateur sur les cartes publiques.",
            "🔒 SÉCURITÉ : Pseudo obligatoire et protection des routes."
        ]
    },
	{
        version: '5.1.0',
        date: '8 Février 2026',
        changes: [
            '🧠 Compétences (Step 4) : Gestion parallèle des budgets (Vert = Standard / Violet = Esprit).',
            '👤 Identité (Step 1) : Retour de la saisie Nom/Sexe et sélecteur de fées vertical.',
            '🔓 Navigation : Mode "Création Libre" activé (les étapes ne sont plus bloquantes).',
            '🔘 Ergonomie : Les cercles de la barre de progression sont maintenant cliquables.',
            '🎨 Caractéristiques : Correction de l\'alignement visuel des bonus.',
            '🛠️ Technique : Résolution du conflit lors des sauvegardes successives.'
        ]
    },
    {
        version: '5.0.0',
        date: '7 Février 2026',
        changes: [
            "Refonte majeure de l'interface (Design 'Livre').",
            "Intégration du système de notifications Push.",
            "Ajout de la gestion des préférences utilisateur."
        ]
    },	
    {
        version: '4.8.0',
        date: '7 Février 2026',
        changes: [
            '✨ Ajout du calcul automatique du bonus d\'Esprit pour les compétences de Savant/Érudit.',
            '🖼️ Amélioration visuelle du sélecteur de fées.'
        ]
    },
    {
        version: '4.7.2',
        date: '6 Février 2026',
        changes: [
            '📌 UI : Bandeau de score "Flottant" (Sticky) amélioré.',
            '🚗 Règles : Gestion automatique de la gratuité pour la compétence Conduite.',
            '🔒 Data : Séparation stricte des données masquées et démasquées.'
        ]
    },
    {
    version: '4.0.0',
    date: '2026-02-07',
    changes: [
      '✨ Nouveau Sélecteur de Fée (Étape 1) : Interface "A/B Testing" (Vue Liste vs Vue Catalogue).',
      '👤 Gestion de Compte : Ajout du "Nom d\'utilisateur" et modification de mot de passe.',
      '🛡️ Administration : Vue "Liste des Utilisateurs" pour suivre l\'activité des créateurs.',
      '🎨 Harmonisation Design : Refonte complète de la Liste des Personnages (CharacterList) selon le style "Ok.png".',
      '📖 Données : Intégration des descriptions riches et stats Min/Max dans la sélection de fée.'
    ]
  },
  {
    version: '3.9.9',
    date: '2026-02-07',
    changes: [
      '🎨 Design Final "Ok.png" : Stabilisation de la charte graphique (Titre centré > Actions > Contenu).',
      '🛠️ Navigation : Barre de progression hybride (Puces + Lignes) sans bug d\'affichage.',
      '🐛 Correctif Lisibilité : Résolution du problème "Blanc sur Blanc" des étapes futures.'
    ]
  },
  {
    version: '3.9.8',
    date: '2026-02-07',
    changes: [
      '🐛 Correctif Critique : Réparation du bug "-7" dans la barre de progression.',
      '🛠️ Syntaxe : Rétablissement du tableau explicite pour la navigation séquentielle.'
    ]
  },
  {
    version: '3.9.6',
    date: '2026-02-07',
    changes: [
      '🎨 Ergonomie : Suppression du "Sticky Header" intrusif au profit d\'un flux naturel.',
      '✨ Interface : Intégration des notifications de sauvegarde directement dans le contenu.',
      '🔙 Retour Design : Restauration de la structure validée par l\'utilisateur.'
    ]
  },
  {
    version: '3.9.5',
    date: '2026-02-07',
    changes: [
      '✨ Compétences Futiles : Chargement dynamique de la liste complète depuis la base de données.',
      '🛠️ Dépense de Points : Possibilité d\'investir les points restants dans n\'importe quelle compétence futile.',
      '➕ Création : Ajout de la fonctionnalité de création de compétence futile personnalisée ("Custom").',
      '✨ Ajout de la règle "Bonus Esprit" : Points gratuits pour les compétences Érudit/Savant si Esprit > 3.',
      '🛠️ Support complet des choix de prédilection complexes (Compétences au choix OU Spécialités au choix).'
    ]
  },
  {
    version: '3.9.1',
    date: '2026-02-05',
    changes: [
      '🎨 Refonte design Étape 4 (Compétences Libres) : En-têtes clairs avec calcul des PP.',
      '✨ Calcul automatique des Rangs de Profil (Moyenne des compétences).',
      '🐛 Correctif : Calcul des scores de base (+2 Majeur, +1 Mineur).'
    ]
  },
  {
    version: '3.9.0',
    date: '2026-02-07',
    changes: [
      '✨ Ajout de la règle "Bonus Esprit" : Points gratuits pour les compétences Érudit/Savant si Esprit > 3.',
      '🛠️ Support complet des choix de prédilection complexes (Compétences au choix OU Spécialités au choix).',
      '🐛 Correction : Affichage des menus déroulants pour l\'Ange (Mêlée/Tir) et la Gargouille (Occultisme).',
      '💾 Mise à jour de la structure de base de données pour gérer les IDs de choix multiples.',
      '🎨 Intégration visuelle des compteurs séparés (Budget Général vs Bonus Esprit) dans l\'étape 4.'
    ]
  },
  {
    version: '3.8.5',
    date: '2026-02-05',
    changes: [
      '🎨 Refonte design Étape 4 (Compétences Libres) : En-têtes clairs avec calcul des PP.',
      '✨ Calcul automatique des Rangs de Profil (Moyenne des compétences).',
      '🐛 Correctif : Calcul des scores de base (+2 Majeur, +1 Mineur).'
    ]
  },
  {
    version: '3.8.4',
    date: '2026-02-04',
    changes: [
      '✨ Nouvelle interface de liste des personnages avec onglets (Moi / Public / Admin).',
      '🔒 Sécurisation des accès et nettoyage des doublons.'
    ]
  },
  {
    version: "3.7.5",
    date: "2026-02-07",
    type: "patch",
    changes: [
      "Retour au style visuel v2.5 (Design épuré et clair)",
      "Suppression des bandeaux sombres et restauration des boutons outline",
      "Correction des conflits de style dans l'en-tête"
    ]
  },
  {
    version: "3.7.0",
    date: "2026-02-06",
    type: "minor",
    changes: [
      "Ajout du mode Lecture Seule pour les visiteurs",
      "Activation du Panel Admin pour la visualisation globale",
      "Activation du bouton 'Changements' vers le journal des versions"
    ]
  },
  {
    version: "3.6.5",
    date: "2026-02-06",
    type: "patch",
    changes: [
      "Blocage strict des caractéristiques à 5 maximum",
      "Ajout du calcul visuel des Points de Personnage (Rang + Bonus)"
    ]
  },
  {
    version: "3.6.0",
    date: "2026-02-05",
    type: "minor",
    changes: [
      "Ajout de l'équation visuelle pour les Points de Personnage (Rang + Bonus = Total)",
      "Calcul automatique des Rangs de Profil (Moyenne des compétences / 4)",
      "Restauration de l'achat de Spécialités manuelles",
      "Affichage automatique des Spécialités de Prédilection (ex: Bastet, Ondine)"
    ]
  },
  {
    version: "3.5.5",
    date: "2026-02-05",
    type: "patch",
    changes: [
      "Gestion des choix multiples pour les fées complexes (ex: Ange : choix Mêlée ou Tir)",
      "Correction des doublons dans le chargement des prédilections"
    ]
  },
  {
    version: "3.5.0",
    date: "2026-02-05",
    type: "major",
    changes: [
      "Retour au design 'Fiche Intégrée' (Style v2.15) pour une expérience type papier",
      "Intégration de la navigation et du header dans le flux principal",
      "Refonte de la gestion des données via Supabase pour les choix féériques"
    ]
  },
  {
    version: "3.4.0",
    date: "2026-02-04",
    type: "patch",
    changes: [
      "Correction de l'export de 'loadAllGameData' pour la compilation",
      "Renforcement de la validation de l'étape 4 (choix de prédilections)",
      "Optimisation du cache global pour le premier chargement"
    ]
  },
  {
    version: "3.3.0",
    date: "2026-02-04",
    type: "minor",
    changes: [
      "Implémentation du mode Hors-ligne (PWA) via LocalStorage",
      "Ajout du verrouillage optimiste (Optimistic Locking) contre les conflits de sauvegarde",
      "Nettoyage automatique des données (rangs à 0) avant enregistrement",
      "Gestion des alertes administrateur pour les identifiants orphelins"
    ]
  },
  {
    version: "3.2.0",
    date: "2026-02-04",
    type: "minor",
    changes: [
      "Gestion des spécialités au choix pour les prédilections (ex: Gnome, Gargouille)",
      "Intégration de la dualité Forme Humaine / Forme Démasquée (🎭) dans le moteur de stats",
      "Détection automatique des spécialités d'armes pour les bonus de Parade et d'Esquive",
      "Calcul dynamique du nombre de langues basées sur la Culture"
    ]
  },
  {
    version: "3.1.0",
    date: "2026-02-04",
    type: "minor",
    changes: [
      "Centralisation du moteur de règles Système 3D (dataHelpers.js)",
      "Calcul automatique des valeurs de Défense, Résistance et Initiative",
      "Calcul du budget de Points de Personnage (PP) pour l'étape de personnalisation",
      "Mise à jour de l'export PDF avec les statistiques de combat calculées"
    ]
  },
  {
    version: "3.0.0",
    date: "2026-02-03",
    type: "major",
    changes: [
      "Migration complète vers Supabase (PostgreSQL)",
      "Passage d'une structure de données statique vers une base dynamique",
      "Gestion des identifiants (UIDs) pour les compétences et types de fées",
      "Refonte de l'initialisation de l'état du personnage"
    ]
  },
  {
    version: "2.15.0",
    date: "2026-02-02",
    type: "patch",
    changes: [
      "Version initiale de transition avant la migration Supabase"
    ]
  }
];