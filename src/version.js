// src/version.js
// Fichier de version centralisé - mis à jour automatiquement
// Version: 2.13.1
// Build: 2026-01-31 21:50

export const APP_VERSION = '2.13.1';
export const BUILD_DATE = '2026-01-31 21:50';
export const BUILD_NUMBER = 45;

// Historique des versions avec changelogs
export const VERSION_HISTORY = [
  {
    version: '2.13.1',
    date: '2026-01-31 21:50',
    type: 'patch',
    changes: [
      'Remplacement "Fée Ancienne" → "Fée Traditionnelle" (3 fichiers)',
      'CharacterList.js, StepRecapitulatif.js, utils.js mis à jour'
    ]
  },
  {
    version: '2.13.0',
    date: '2026-01-31 21:45',
    type: 'minor',
    changes: [
      'Renommage "Fées Anciennes" → "Fées Traditionnelles"',
      'Mise à jour Step1.js (titre et indicateur)'
    ]
  },
  {
    version: '2.12.5',
    date: '2026-01-31 21:40',
    type: 'patch',
    changes: [
      'Fix définitif "permission denied for table users"',
      'Suppression références auth.users dans politiques RLS',
      'Politiques RLS simplifiées sans accès auth.users',
      'Admin géré côté application (pas RLS)',
      'Script database_fix_rls_v2.sql'
    ]
  },
  {
    version: '2.12.4',
    date: '2026-01-31 21:35',
    type: 'patch',
    changes: [
      'Fix erreur "permission denied for table users"',
      'Correction politiques RLS Supabase (database_fix_rls.sql)',
      'Politiques complètes: SELECT, INSERT, UPDATE, DELETE'
    ]
  },
  {
    version: '2.12.3',
    date: '2026-01-31 21:32',
    type: 'patch',
    changes: [
      'Correction import AlertTriangle inutilisé dans App.js',
      'Correction warning useEffect dans CharacterList.js'
    ]
  },
  {
    version: '2.12.2',
    date: '2026-01-31 21:30',
    type: 'patch',
    changes: [
      'Correction import getFairyAge manquant dans App.js'
    ]
  },
  {
    version: '2.12.1',
    date: '2026-01-31 21:25',
    type: 'patch',
    changes: [
      'Correction fermeture tags JSX dans affichage changelog'
    ]
  },
  {
    version: '2.12.0',
    date: '2026-01-31 21:20',
    type: 'minor',
    changes: [
      'Changelog intégré dans version.js',
      'Affichage changelog dynamique depuis VERSION_HISTORY',
      'Suppression CHANGELOG.md (remplacé par version.js)',
      'Couleurs par type: major (rouge), minor (violet), patch (bleu)',
      'Tous les changelogs depuis v2.0.0 intégrés'
    ]
  },
  {
    version: '2.11.0',
    date: '2026-01-31 21:10',
    type: 'minor',
    changes: [
      'Admin voit TOUS les personnages (publics + privés)',
      'Badge 🔒 PRIVÉ sur personnages non publics (visible admin uniquement)',
      'Onglet "Publics" devient "Tous" pour admin',
      'getPublicCharacters(isAdmin) modifié dans utils.js',
      'SQL policy optionnelle pour RLS Supabase (database_admin_access.sql)'
    ]
  },
  {
    version: '2.10.0',
    date: '2026-01-31 21:00',
    type: 'minor',
    changes: [
      'Page dédiée ValidationsPendantes pour admin',
      'Badge rouge avec compteur sur bouton Validations',
      'Polling automatique toutes les 30s des demandes en attente',
      'Onglets: En attente / Historique',
      'Bouton Validations visible uniquement pour admin',
      'Détection admin via email (configurable)'
    ]
  },
  {
    version: '2.9.4',
    date: '2026-01-31 20:52',
    type: 'patch',
    changes: ['Suppression derniers imports inutilisés StepRecapitulatif']
  },
  {
    version: '2.9.3',
    date: '2026-01-31 20:50',
    type: 'patch',
    changes: [
      'Correction imports App.js: suppression profils, competences, dataHelpers inutilisés',
      'Correction imports DataEditor.js: suppression profils, dataHelpers inutilisés',
      'Correction imports StepRecapitulatif.js: garde uniquement profils',
      'Migration complète vers data.js + dataHelpers.js terminée'
    ]
  },
  {
    version: '2.9.2',
    date: '2026-01-31 20:45',
    type: 'patch',
    changes: [
      'Correction imports StepCompetencesLibres: profils as profilsData',
      'Correction imports StepProfils: ajout profilNames depuis dataHelpers',
      'Correction imports StepCompetencesFutiles: competencesFutilesBase + parseCompetencesFutilesPredilection'
    ]
  },
  {
    version: '2.9.1',
    date: '2026-01-31 20:40',
    type: 'patch',
    changes: [
      'Correction imports Step1.js: ajout fairyTypesByAge depuis data.js',
      'Suppression imports inutilisés (fairyData, profils, competences, dataHelpers)'
    ]
  },
  {
    version: '2.9.0',
    date: '2026-01-31 20:30',
    type: 'minor',
    changes: [
      'Séparation data.js et dataHelpers.js',
      'data.js: uniquement les données (896 lignes vs 1073)',
      'dataHelpers.js: toutes les fonctions utilitaires',
      'Protection contre modifications accidentelles des données',
      'Import depuis dataHelpers: getFairyAge, getProfilNameBySexe, calculateProfilRang, etc.'
    ]
  },
  {
    version: '2.8.0',
    date: '2026-01-31 20:20',
    type: 'minor',
    changes: [
      'Calcul automatique du rang de profil (somme compétences / 4)',
      'Affichage du rang à côté du nom du profil',
      'Nom du profil adapté au sexe (masculin/féminin)',
      'Androgyne utilise le nom féminin par défaut',
      'Fonctions getProfilNameBySexe() et calculateProfilRang()'
    ]
  },
  {
    version: '2.7.2',
    date: '2026-01-31 20:10',
    type: 'patch',
    changes: [
      'Déplacement bloc création compétence personnalisée en bas de page',
      'Ordre: Prédilection → Personnalisées → Disponibles → Créer nouvelle'
    ]
  },
  {
    version: '2.7.1',
    date: '2026-01-31 20:05',
    type: 'patch',
    changes: [
      'Correction import Bell inutilisé (InAppNotification)',
      'Correction warning useEffect (NotificationPreferences)',
      'Correction import competenceNames inutilisé (StepCompetencesLibres)'
    ]
  },
  {
    version: '2.7.0',
    date: '2026-01-31 20:00',
    type: 'minor',
    changes: [
      'Création fichier version.js centralisé',
      'APP_VERSION et BUILD_DATE exportés depuis version.js',
      'Historique versions dans VERSION_HISTORY',
      'Fonction getVersionType() automatique',
      'App.js importe depuis version.js',
      'Facilite mises à jour futures (1 seul fichier à modifier)'
    ]
  },
  {
    version: '2.6.0',
    date: '2026-01-31 19:50',
    type: 'minor',
    changes: [
      'Notifications push navigateur via Service Worker',
      'Composant InAppNotification pour notifications dans l\'app',
      'Option notifications push dans préférences utilisateur',
      'Système checkForUpdates() au démarrage',
      'Service Worker sw.js pour notifications en arrière-plan',
      'Fichier version.json pour tracking versions',
      'Support notifications même app fermée'
    ]
  },
  {
    version: '2.5.0',
    date: '2026-01-31 19:40',
    type: 'minor',
    changes: [
      'Système d\'abonnement aux notifications lors de l\'inscription',
      'Choix notifications versions majeures et/ou mineures',
      'Table user_notification_preferences et notification_history',
      'Composant NotificationPreferences pour gérer préférences',
      'Service emailService.js pour envoi automatique emails',
      'Bouton Préférences dans CharacterList',
      'Auth.js intègre options notification à l\'inscription'
    ]
  },
  {
    version: '2.4.0',
    date: '2026-01-31 19:30',
    type: 'minor',
    changes: [
      'Affichage de toutes les compétences regroupées par profil (6 sections)',
      'Mise en évidence visuelle du profil Majeur (violet) et Mineur (bleu)',
      'Organisation complète: Aventurier, Combattant, Érudit, Gentleman, Roublard, Savant'
    ]
  },
  {
    version: '2.3.2',
    date: '2026-01-31 19:25',
    type: 'patch',
    changes: [
      'Correction imports inutilisés DataEditor.js (Plus, competencesFutilesBase, profils)',
      'Correction import inutilisé StepCompetencesLibres.js (profils)'
    ]
  },
  {
    version: '2.3.1',
    date: '2026-01-31 19:20',
    type: 'patch',
    changes: [
      'Correction: Changelog restauré dans App.js avec v2.3.0',
      'Ajout bouton "Données" dans CharacterList pour accès direct à l\'éditeur',
      'Import Database icon ajouté dans CharacterList'
    ]
  },
  {
    version: '2.3.0',
    date: '2026-01-31 19:15',
    type: 'minor',
    changes: [
      'Éditeur de données collaboratif (DataEditor.js)',
      'Système demandes de modification avec validation admin',
      'Table Supabase data_change_requests',
      'Nouvel onglet "Données" dans interface',
      'Modification uniquement par admin, suggestions pour les autres utilisateurs'
    ]
  },
  {
    version: '2.2.0',
    date: '2026-01-31 18:45',
    type: 'minor',
    changes: [
      'Regroupement compétences par profil majeur/mineur/autres dans StepCompetencesLibres',
      'Affichage compact: 4 colonnes, cartes réduites, texte optimisé',
      'Version et build date affichés dans en-tête application',
      'Nouvel onglet "Changements" avec historique des versions',
      'Système de versioning automatique dans tous les fichiers modifiés'
    ]
  },
  {
    version: '2.1.0',
    date: '2026-01-31 17:30',
    type: 'minor',
    changes: [
      'Support des choix entre compétences futiles de prédilection',
      'Fonctions utilitaires pour gérer les choix',
      'Guide complet sur la structure des choix'
    ]
  },
  {
    version: '2.0.0',
    date: '2026-01-30',
    type: 'major',
    changes: [
      'Consolidation de 19 fichiers en 6 fichiers (-68%)',
      'Versioning systématique (v2.0)',
      'Scripts SQL complets avec DROP TABLE IF EXISTS',
      'Suppression des catégories de compétences inutilisées',
      'Liste officielle des 44 compétences futiles',
      'Bastet complété selon la fiche PDF'
    ]
  }
];

// Type de version actuelle
export const getVersionType = () => {
  const parts = APP_VERSION.split('.');
  if (parts[0] !== '2') return 'major';
  if (parts[1] === '0' && parts[2] === '0') return 'major';
  if (parts[2] === '0') return 'minor';
  return 'patch';
};

export const CURRENT_VERSION_TYPE = getVersionType();
