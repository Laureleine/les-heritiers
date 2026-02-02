// src/utils/notificationSystem.js
// Version: 2.6.0
// Build: 2026-01-31 19:50

import { supabase } from '../config/supabase';

/**
 * Demande la permission pour les notifications push
 */
export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.log('Ce navigateur ne supporte pas les notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

/**
 * Enregistre le token de notification push dans Supabase
 */
export const saveNotificationToken = async (userId, token) => {
  try {
    await supabase
      .from('user_notification_preferences')
      .upsert({
        user_id: userId,
        push_notification_token: token,
        enable_push_notifications: true,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      });
    return true;
  } catch (error) {
    console.error('Erreur sauvegarde token:', error);
    return false;
  }
};

/**
 * Envoie une notification push locale (dans le navigateur)
 */
export const sendLocalNotification = (title, options = {}) => {
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      icon: '/logo192.png',
      badge: '/logo192.png',
      ...options
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };

    return notification;
  }
};

/**
 * Affiche une notification in-app (dans l'interface)
 */
export const showInAppNotification = (message, type = 'info') => {
  const event = new CustomEvent('app-notification', {
    detail: { message, type }
  });
  window.dispatchEvent(event);
};

/**
 * Créer une notification pour une nouvelle version
 */
export const notifyNewVersion = (version, changelog) => {
  // Notification push navigateur
  sendLocalNotification(
    '🎭 Les Héritiers - Nouvelle version !',
    {
      body: `Version ${version} disponible`,
      tag: `version-${version}`,
      requireInteraction: true,
      actions: [
        { action: 'view', title: 'Voir les changements' },
        { action: 'close', title: 'Plus tard' }
      ]
    }
  );

  // Notification in-app
  showInAppNotification(
    `Nouvelle version ${version} disponible ! Cliquez pour voir les changements.`,
    'success'
  );
};

/**
 * Vérifie s'il y a une nouvelle version (à appeler au démarrage)
 * Note: Désactivé car version.json n'est pas déployé en production
 */
export const checkForUpdates = async (currentVersion) => {
  try {
    // TODO: Implémenter vérification version avec API backend
    // Pour l'instant, désactivé pour éviter erreur 404
    return;
    
    // Récupérer la dernière version depuis une API ou fichier
    const response = await fetch('/version.json');
    const { version, changelog } = await response.json();

    if (version !== currentVersion) {
      // Vérifier si l'utilisateur veut être notifié
      const { data } = await supabase
        .from('user_notification_preferences')
        .select('enable_push_notifications')
        .single();

      if (data?.enable_push_notifications) {
        notifyNewVersion(version, changelog);
      }
    }
  } catch (error) {
    // Silencieux en cas d'erreur (fichier absent, etc.)
    console.debug('Vérification updates ignorée:', error.message);
  }
};
    console.error('Erreur vérification updates:', error);
  }
};

/**
 * Service Worker pour notifications en arrière-plan
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker enregistré:', registration);
      return registration;
    } catch (error) {
      console.error('Erreur Service Worker:', error);
    }
  }
};
