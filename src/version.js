// src/version.js
// 8.33.0

import buildInfo from './build-info.json'; 

export const APP_VERSION = buildInfo.version;
export const BUILD_DATE = buildInfo.buildDate;

export const VERSION_HISTORY = [
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