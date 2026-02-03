// src/version.js
// Version: 3.0.0
// Build: 2026-02-04 01:00

export const APP_VERSION = '3.0.0';
export const BUILD_DATE = '2026-02-04 01:00';
export const BUILD_NUMBER = 100;

export const VERSION_HISTORY = [
  {
    version: '3.0.0',
    date: '2026-02-04 01:00',
    type: 'major',
    changes: [
      '🚀 MIGRATION MAJEURE v3.0 - 100% Supabase !',
      '🗑️ data.js complètement supprimé',
      '✅ Tous les composants migrés vers Supabase',
      '✅ Step1: fairyTypesByAge depuis props',
      '✅ StepProfils: profils depuis props',
      '✅ StepCompetencesLibres: competences depuis props',
      '✅ StepRecapitulatif: données depuis props',
      '📦 Chargement unique au démarrage avec cache',
      '⚡ Performance optimisée (1 seul fetch)',
      '🎯 Architecture propre et maintenable'
    ]
  },
  {
    version: '2.15.0',
    date: '2026-02-04 00:50',
    type: 'minor',
    changes: [
      'Migration partielle: données du jeu vers Supabase',
      'App.js charge profils, compétences, fées au démarrage',
      'Module supabaseGameData.js complet',
      'Scripts SQL: insert profils, compétences, fées',
      'Cache intelligent évite requêtes multiples',
      'StepCompetencesFutiles 100% Supabase'
    ]
  },
  {
    version: '2.14.3',
    date: '2026-02-01 00:00',
    type: 'patch',
    changes: [
      'Script SQL complet consolidé',
      'Application automatique data_change_requests',
      'Scripts inspection change requests'
    ]
  }
];

export const getVersionType = () => {
  const parts = APP_VERSION.split('.');
  if (parts[0] !== '2' && parts[0] !== '3') return 'major';
  if (parts[0] === '3' && parts[1] === '0' && parts[2] === '0') return 'major';
  if (parts[2] === '0') return 'minor';
  return 'patch';
};

export const CURRENT_VERSION_TYPE = getVersionType();
