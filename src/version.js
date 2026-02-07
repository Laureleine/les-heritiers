// src/version.js
// Moteur : 3.6.x (Logique de calculs v3.6)
// Design : 2.15 (Intégré/Papier)

export const APP_VERSION = '3.6.5';
export const BUILD_DATE = '2026-02-06 20:30';

export const CHANGELOG = [
  '3.6.5 : Blocage strict des caractéristiques à 5 (Règle p.44).',
  '3.6.3 : Ajout de l\'équation visuelle pour les Points de Personnage (Rang + Bonus = Total).',
  '3.6.2 : Calcul automatique des Rangs de Profil (Moyenne/4).',
  '3.6.1 : Restauration des Spécialités manuelles et affichage des Spécialités de Prédilection (ex: Bastet).',
  '3.5.5 : Gestion des choix multiples pour les fées complexes (Ange : Mêlée ou Tir).',
  '3.5.0 : Retour au design "Fiche Intégrée" (v2.15).'
];

export const VERSION_HISTORY = [
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