// src/utils/SystemeServices.js
import { supabase } from '../config/supabase';

// ============================================================================
// --- 1. GESTIONNAIRE D'ERREURS ---
// ============================================================================
export const translateError = (error) => {
  if (!error) return "Une perturbation magique inconnue s'est produite.";
  
  const msg = error.message || '';
  const code = error.code || '';
  const msgLower = msg.toLowerCase();

  // ✨ LA NOUVELLE INCISION : Interception du délai de sécurité anti-spam
  if (msgLower.includes('for security purposes') || msgLower.includes('request this after')) return "Les Gardiens du Silence surveillent ce canal. Par sécurité, faites profil bas et patientez une minute avant d'envoyer une nouvelle missive.";
  if (msgLower.includes('email') && msgLower.includes('invalid')) return "Les pigeons voyageurs tournent en rond ! L'adresse électronique fournie semble invalide.";
  if (msgLower.includes('invalid login credentials')) return "Les Docteurs refusent cet accès. Vos identifiants sont erronés.";
  if (msgLower.includes('user already registered')) return "Ce nom est déjà gravé dans nos registres. Veuillez vous connecter.";
  if (msgLower.includes('rate limit exceeded') || msg.includes('Too many requests')) return "Les rouages du Télégraphe surchauffent ! Attendez quelques instants avant de réessayer.";
  if (msgLower.includes('password should be at least')) return "Votre mot de passe est trop faible pour repousser les chasseurs (6 caractères minimum).";
  if (msgLower.includes('jwt') || msg.includes('expired')) return "Votre sceau de protection a expiré. Veuillez refermer et rouvrir le grimoire (Reconnexion).";
  if (code === '23505') return "Une anomalie temporelle : cet élément existe déjà dans nos archives !";
  if (code === '23503') return "Cette action briserait un lien sacré dans la base de données (Violation de clé étrangère).";
  if (code === '42601') return "La formule incantatoire est imparfaite (Erreur de syntaxe SQL). Les Gardiens ont été prévenus.";
  if (code === 'PGRST116') return "L'archive que vous cherchez s'est évaporée dans les limbes (Élément introuvable).";
  if (msgLower.includes('failed to fetch') || msg.includes('NetworkError')) return "Les fluides éthérés sont perturbés. Impossible de contacter les archives centrales (Erreur réseau).";
  if (msgLower.includes('row-level security')) return "Les Gardiens vous refusent l'accès. Votre session a expiré en arrière-plan, veuillez vous déconnecter puis vous reconnecter.";

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
  // Majeure = première version d'un nouveau cycle (ex: 15.18.0) ; mineure = patch (15.18.1+)
  return parts[2] === '0' ? 'major' : 'minor';
};

export const getUsersToNotify = async (versionType) => {
  try {
    const { data, error } = await supabase.rpc('get_users_to_notify', { version_type: versionType });
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erreur récupération users:', error);
    return [];
  }
};

export const sendNotificationEmail = async (email, version, changelog) => {
  // Convertit le texte brut en lignes HTML propres (supprime le markdown basique)
  const formatChangelog = (text) => {
    return text
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        // Nettoie le markdown : **gras**, `code`
        const clean = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/`(.*?)`/g, '<em>$1</em>');
        return `<li style="margin-bottom:8px;line-height:1.5;">${clean}</li>`;
      })
      .join('');
  };

  const appUrl = process.env.REACT_APP_URL || 'https://heritiers.app';

  const emailBody = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#fef3c7;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#fef3c7;padding:30px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);max-width:600px;width:100%;">

      <!-- En-tête -->
      <tr><td style="background:linear-gradient(135deg,#92400e,#d97706);padding:32px 40px;text-align:center;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;font-family:Georgia,serif;">🎭 Les Héritiers</h1>
        <p style="margin:8px 0 0;color:#fde68a;font-size:14px;">Nouvelle mise à jour disponible</p>
      </td></tr>

      <!-- Corps -->
      <tr><td style="padding:36px 40px;">
        <p style="margin:0 0 16px;color:#78350f;font-size:15px;">Bonjour,</p>
        <p style="margin:0 0 24px;color:#78350f;font-size:15px;">Une nouvelle version de <strong>Les Héritiers</strong> vient d'être déployée !</p>

        <!-- Version -->
        <div style="background:#f0fdf4;border:2px solid #86efac;border-radius:8px;padding:16px 20px;margin:0 0 24px;text-align:center;">
          <span style="font-size:22px;font-weight:bold;color:#166534;font-family:Georgia,serif;">Version ${version}</span>
        </div>

        <!-- Changelog -->
        <div style="background:#fef3c7;border-left:4px solid #d97706;border-radius:0 8px 8px 0;padding:20px 24px;margin:0 0 28px;">
          <p style="margin:0 0 12px;font-weight:bold;color:#92400e;font-size:14px;text-transform:uppercase;letter-spacing:0.05em;">📋 Changements</p>
          <ul style="margin:0;padding-left:20px;color:#78350f;font-size:14px;">
            ${formatChangelog(changelog)}
          </ul>
        </div>

        <!-- Bouton -->
        <div style="text-align:center;">
          <a href="${appUrl}" style="display:inline-block;padding:14px 32px;background:#d97706;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:bold;font-family:Georgia,serif;font-size:15px;">
            Découvrir les nouveautés →
          </a>
        </div>
      </td></tr>

      <!-- Pied de page -->
      <tr><td style="background:#fef9f0;border-top:1px solid #fde68a;padding:20px 40px;text-align:center;">
        <p style="margin:0;color:#a16207;font-size:12px;">Vous recevez cet email car vous êtes abonné aux notifications de mise à jour des Héritiers.</p>
        <p style="margin:8px 0 0;color:#a16207;font-size:12px;">Pour modifier vos préférences, rendez-vous dans <a href="${appUrl}" style="color:#d97706;">vos paramètres</a>.</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

  try {
    const { error } = await supabase.functions.invoke('send-email', {
      body: {
        to: email,
        subject: `Les Héritiers - Version ${version} disponible`,
        html: emailBody
      }
    });
    if (error) throw error;
    return true;
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
    if (session?.user) return session.user;
  } catch (error) { console.error('getCurrentUserFast:', error); }
  return null;
};
