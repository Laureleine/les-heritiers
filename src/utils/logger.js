// src/utils/logger.js

// 1. Variable interne qui stockera le rôle de l'utilisateur actif
let currentUserRole = 'user';

// 2. Fonction pour mettre à jour le rôle (sera appelée depuis App.js)
export const setLoggerRole = (role) => {
  currentUserRole = role;
};

// 3. Fonction de vérification globale
const shouldLog = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const isSuperAdmin = currentUserRole === 'super_admin';
  // L'astuce "Porte dérobée" (voir explication plus bas)
  const isForced = localStorage.getItem('FORCE_DEBUG') === 'true';

  return isDev || isSuperAdmin || isForced;
};

export const logger = {
  info: (...args) => {
    if (shouldLog()) {
      // On ajoute un petit badge visuel en production pour les admins
      if (process.env.NODE_ENV === 'production') {
        console.log('🛡️ [ADMIN LOG]', ...args);
      } else {
        console.log(...args);
      }
    }
  },

  warn: (...args) => {
    if (shouldLog()) {
      console.warn(...args);
    }
  },

  error: (...args) => {
    // Les erreurs graves devraient toujours s'afficher (même en prod) pour pouvoir
    // être lues si un utilisateur vous envoie une capture d'écran de sa console.
    console.error(...args); 
  }
};