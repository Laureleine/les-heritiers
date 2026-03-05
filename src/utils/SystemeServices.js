import { supabase } from '../config/supabase';

// ============================================================================
// --- 1. GESTIONNAIRE D'ERREURS ---
// ============================================================================
export const translateError = (error) => {
  if (!error) return "Une perturbation magique inconnue s'est produite.";
  
  const msg = error.message || '';
  const code = error.code || '';

  if (msg.includes('Invalid login credentials')) return "Les Docteurs refusent cet accès. Vos identifiants sont erronés.";
  if (msg.includes('User already registered')) return "Ce nom est déjà gravé dans nos registres. Veuillez vous connecter.";
  if (msg.includes('Rate limit exceeded') || msg.includes('Too many requests')) return "Les rouages du Télégraphe surchauffent ! Attendez quelques instants avant de réessayer.";
  if (msg.includes('Password should be at least')) return "Votre mot de passe est trop faible pour repousser les chasseurs (6 caractères minimum).";
  if (msg.includes('JWT') || msg.includes('expired')) return "Votre sceau de protection a expiré. Veuillez refermer et rouvrir le grimoire (Reconnexion).";
  if (code === '23505') return "Une anomalie temporelle : cet élément existe déjà dans nos archives !";
  if (code === '23503') return "Cette action briserait un lien sacré dans la base de données (Violation de clé étrangère).";
  if (code === '42601') return "La formule incantatoire est imparfaite (Erreur de syntaxe SQL). Les Gardiens ont été prévenus.";
  if (code === 'PGRST116') return "L'archive que vous cherchez s'est évaporée dans les limbes (Élément introuvable).";
  if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) return "Les fluides éthérés sont perturbés. Impossible de contacter les archives centrales (Erreur réseau).";

  return `Anomalie détectée : ${msg}`;
};


// ============================================================================
// --- 2. SYSTÈME DE NOTIFICATIONS (PUSH & IN-APP) ---
// ============================================================================
export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.log('Ce navigateur ne supporte pas les notifications');
    return false;
  }
  if (Notification.permission === 'granted') return true;
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  return false;
};

export const saveNotificationToken = async (userId, token) => {
  try {
    await supabase.from('user_notification_preferences').upsert({
      user_id: userId,
      push_notification_token: token,
      enable_push_notifications: true,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    return true;
  } catch (error) {
    console.error('Erreur sauvegarde token:', error);
    return false;
  }
};

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

// Déclencheur du composant InAppNotification
export const showInAppNotification = (message, type = 'info') => {
  const event = new CustomEvent('app-notification', { detail: { message, type } });
  window.dispatchEvent(event);
};

export const notifyNewVersion = (version, changelog) => {
  sendLocalNotification('🎭 Les Héritiers - Nouvelle version !', {
    body: `Version ${version} disponible`,
    tag: `version-${version}`,
    requireInteraction: true,
    actions: [
      { action: 'view', title: 'Voir les changements' },
      { action: 'close', title: 'Plus tard' }
    ]
  });
  showInAppNotification(`Nouvelle version ${version} disponible ! Cliquez pour voir les changements.`, 'success');
};

export const checkForUpdates = async (currentVersion) => {
  return;
};

export const registerServiceWorker = async () => {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🚧 Mode Local détecté : Service Worker désactivé pour faciliter le développement.');
    return;
  }
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('✅ Service Worker enregistré:', registration);
      return registration;
    } catch (error) {
      console.error('❌ Erreur Service Worker:', error);
    }
  }
};


// ============================================================================
// --- 3. SERVICE EMAIL (MAILING API) ---
// ============================================================================
export const getVersionType = (version) => {
  const parts = version.split('.');
  if (parts[6] === '0' && parts[9] === '0') return 'major';
  return 'minor';
};

export const getUsersToNotify = async (versionType) => {
  try {
    let query = supabase.from('user_notification_preferences')
      .select('user_id, email')
      .eq('subscribe_to_updates', true)
      .not('email', 'is', null);

    if (versionType === 'major') query = query.eq('notify_major_versions', true);
    if (versionType === 'minor') query = query.eq('notify_minor_versions', true);

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erreur récupération users:', error);
    return [];
  }
};

export const sendNotificationEmail = async (email, version, changelog) => {
  const emailBody = `
  <!DOCTYPE html>
  <html>
  <head>
  <style>
  body { font-family: Georgia, serif; color: #78350f; background: #fef3c7; }
  .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; }
  h1 { color: #92400e; border-bottom: 3px solid #d97706; padding-bottom: 10px; }
  .version { font-size: 24px; color: #059669; font-weight: bold; }
  .changelog { background: #fef3c7; padding: 15px; border-left: 4px solid #d97706; margin: 20px 0; }
  .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #d97706; font-size: 12px; color: #92400e; }
  </style>
  </head>
  <body>
  <div class="container">
  <h1>🎭 Les Héritiers - Nouvelle mise à jour !</h1>
  <p>Bonjour,</p>
  <p>Une nouvelle version de <strong>Les Héritiers</strong> vient d'être déployée !</p>
  <p class="version">Version ${version}</p>
  <div class="changelog">
  <h3>📋 Changements :</h3>
  <pre>${changelog}</pre>
  </div>
  <p>
  <a href="https://votre-app.com" style="display: inline-block; padding: 12px 24px; background: #d97706; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
  Découvrir les nouveautés
  </a>
  </p>
  <div class="footer">
  <p>Vous recevez cet email car vous êtes abonné aux notifications de mise à jour.</p>
  <p>Pour modifier vos préférences, rendez-vous dans les paramètres de l'application.</p>
  </div>
  </div>
  </body>
  </html>
  `;

  try {
    const response = await fetch('https://votre-projet.supabase.co/functions/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({
        to: email,
        subject: `Les Héritiers - Version ${version} disponible`,
        html: emailBody
      })
    });
    return response.ok;
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return false;
  }
};

export const logNotification = async (userId, version, versionType, changelog, status) => {
  try {
    await supabase.from('notification_history').insert({
      user_id: userId,
      version,
      version_type: versionType,
      changelog,
      email_status: status
    });
  } catch (error) {
    console.error('Erreur log notification:', error);
  }
};

export const notifyUsers = async (version, changelog) => {
  const versionType = getVersionType(version);
  const users = await getUsersToNotify(versionType);
  console.log(`Envoi notifications ${versionType} v${version} à ${users.length} utilisateurs`);

  for (const user of users) {
    const success = await sendNotificationEmail(user.email, version, changelog);
    await logNotification(user.user_id, version, versionType, changelog, success ? 'sent' : 'failed');
  }
  return users.length;
};

// ============================================================================
// --- 4. GESTIONNAIRE DE LOGS (Ancien logger.js) ---
// ============================================================================
let currentUserRole = 'user';
export const setLoggerRole = (role) => { currentUserRole = role; };

const shouldLog = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const isSuperAdmin = currentUserRole === 'super_admin';
  const isForced = localStorage.getItem('FORCE_DEBUG') === 'true';
  return isDev || isSuperAdmin || isForced;
};

export const logger = {
  info: (...args) => {
    if (shouldLog()) {
      if (process.env.NODE_ENV === 'production') console.log('🛡️ [ADMIN LOG]', ...args);
      else console.log(...args);
    }
  },
  warn: (...args) => { if (shouldLog()) console.warn(...args); },
  error: (...args) => console.error(...args)
};

// ============================================================================
// --- 5. AIDES À L'AUTHENTIFICATION (Ancien authHelpers.js) ---
// ============================================================================
export const getCurrentUserFast = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (session?.user) {
      console.log('✅ User connecté:', session.user.id, session.user.email);
      return session.user;
    }
  } catch (error) { console.error('❌ getCurrentUserFast:', error); }
  console.log('❌ Aucun user trouvé');
  return null;
};
