// src/version.js
// Fichier de version centralisé - mis à jour automatiquement
// Version: 2.7.1
// Build: 2026-01-31 20:05

export const APP_VERSION = '2.7.1';
export const BUILD_DATE = '2026-01-31 20:05';
export const BUILD_NUMBER = 28;

// Historique des versions
export const VERSION_HISTORY = [
  { version: '2.7.1', date: '2026-01-31 20:05', type: 'patch' },
  { version: '2.7.0', date: '2026-01-31 20:00', type: 'minor' },
  { version: '2.6.0', date: '2026-01-31 19:50', type: 'minor' },
  { version: '2.5.0', date: '2026-01-31 19:40', type: 'minor' },
  { version: '2.4.0', date: '2026-01-31 19:30', type: 'minor' },
  { version: '2.3.2', date: '2026-01-31 19:25', type: 'patch' },
  { version: '2.3.1', date: '2026-01-31 19:20', type: 'patch' },
  { version: '2.3.0', date: '2026-01-31 19:15', type: 'minor' },
  { version: '2.2.0', date: '2026-01-31 18:45', type: 'minor' },
  { version: '2.1.0', date: '2026-01-31 17:30', type: 'minor' },
  { version: '2.0.0', date: '2026-01-30', type: 'major' }
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
