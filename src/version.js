// src/version.js
// Moteur : 3.6.x (Logique de calculs v3.6)
// Design : 2.15 (Intégré/Papier)

// Historique des versions

export const APP_VERSION = '3.7.5';
export const BUILD_DATE = '2026-02-07 12:00';

export const VERSION_HISTORY = [
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