// src/utils/emailService.js
// Version: 2.5.0
// Build: 2026-01-31 19:40

import { supabase } from '../config/supabase';

/**
 * Détecte si une version est majeure ou mineure
 * Majeure: x.0.0 (changement premier chiffre)
 * Mineure: x.y.0 (changement deuxième chiffre)
 */
export const getVersionType = (version) => {
  const parts = version.split('.');
  if (parts[1] === '0' && parts[2] === '0') {
    return 'major';
  }
  return 'minor';
};

/**
 * Récupère tous les utilisateurs à notifier selon le type de version
 */
export const getUsersToNotify = async (versionType) => {
  try {
    let query = supabase
      .from('user_notification_preferences')
      .select('user_id, email, notify_major_versions, notify_minor_versions')
      .eq('subscribe_to_updates', true);

    if (versionType === 'major') {
      query = query.eq('notify_major_versions', true);
    } else if (versionType === 'minor') {
      query = query.or('notify_major_versions.eq.true,notify_minor_versions.eq.true');
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erreur récupération users:', error);
    return [];
  }
};

/**
 * Envoie un email de notification (via service externe)
 * À implémenter avec SendGrid, Resend, ou autre service SMTP
 */
export const sendNotificationEmail = async (email, version, changelog) => {
  // TODO: Implémenter avec votre service d'email préféré
  
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

  // Exemple avec fetch vers un endpoint Supabase Edge Function
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

/**
 * Enregistre l'envoi dans l'historique
 */
export const logNotification = async (userId, version, versionType, changelog, status) => {
  try {
    await supabase
      .from('notification_history')
      .insert({
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

/**
 * Fonction principale: notifie tous les utilisateurs concernés
 */
export const notifyUsers = async (version, changelog) => {
  const versionType = getVersionType(version);
  const users = await getUsersToNotify(versionType);

  console.log(`Envoi notifications ${versionType} v${version} à ${users.length} utilisateurs`);

  for (const user of users) {
    const success = await sendNotificationEmail(user.email, version, changelog);
    await logNotification(
      user.user_id,
      version,
      versionType,
      changelog,
      success ? 'sent' : 'failed'
    );
  }

  return users.length;
};
