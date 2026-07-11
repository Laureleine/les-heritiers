import 'dotenv/config';
import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

function getVersionType(version) {
  const parts = version.split('.');
  return parts[2] === '0' ? 'major' : 'minor';
}

function extractLastMessage(mdContent) {
  const startMatch = mdContent.match(/^## v[\d.]+/m);
  if (!startMatch) return '';
  const afterHeader = mdContent.slice(mdContent.indexOf(startMatch[0]) + startMatch[0].length);
  // Le message s'arrête au prochain séparateur ---
  const endIdx = afterHeader.search(/^---$/m);
  return (endIdx >= 0 ? afterHeader.slice(0, endIdx) : afterHeader).trim();
}

function formatMessageToHtml(text) {
  return text
    .split(/\n{2,}/)
    .filter(p => p.trim())
    .map(p => {
      const clean = p.trim()
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');
      return `<p style="margin:0 0 14px;color:#78350f;font-size:15px;line-height:1.6;">${clean}</p>`;
    })
    .join('');
}

function buildEmail(version, message) {
  const appUrl = process.env.VITE_APP_URL || 'https://heritiers.app';
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fef3c7;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#fef3c7;padding:30px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);max-width:600px;width:100%;">
      <tr><td style="background:linear-gradient(135deg,#92400e,#d97706);padding:32px 40px;text-align:center;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;font-family:Georgia,serif;">🎭 Les Héritiers</h1>
        <p style="margin:8px 0 0;color:#fde68a;font-size:14px;">Nouvelle mise à jour disponible</p>
      </td></tr>
      <tr><td style="padding:36px 40px;">
        <div style="background:#f0fdf4;border:2px solid #86efac;border-radius:8px;padding:12px 20px;margin:0 0 24px;text-align:center;">
          <span style="font-size:20px;font-weight:bold;color:#166534;font-family:Georgia,serif;">Version ${version}</span>
        </div>
        <div style="background:#fef3c7;border-left:4px solid #d97706;border-radius:0 8px 8px 0;padding:20px 24px;margin:0 0 28px;">
          ${formatMessageToHtml(message)}
        </div>
        <div style="text-align:center;">
          <a href="${appUrl}" style="display:inline-block;padding:14px 32px;background:#d97706;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:bold;font-family:Georgia,serif;font-size:15px;">
            Découvrir les nouveautés →
          </a>
        </div>
      </td></tr>
      <tr><td style="background:#fef9f0;border-top:1px solid #fde68a;padding:20px 40px;text-align:center;">
        <p style="margin:0;color:#a16207;font-size:12px;">Vous recevez cet email car vous êtes abonné aux notifications de mise à jour des Héritiers.</p>
        <p style="margin:8px 0 0;color:#a16207;font-size:12px;">Pour modifier vos préférences, rendez-vous dans <a href="${appUrl}" style="color:#d97706;">vos paramètres</a>.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

async function run() {
  const { version } = JSON.parse(readFileSync('public/version.json', 'utf-8'));
  const mdContent = readFileSync('messages_heritiers.md', 'utf-8');
  const message = extractLastMessage(mdContent);
  const versionType = getVersionType(version);

  const { data: users, error } = await supabase.rpc('get_users_to_notify', { version_type: versionType });
  if (error) { console.error('Erreur RPC get_users_to_notify:', error.message); process.exit(1); }
  if (!users || users.length === 0) {
    console.log(`Aucun abonné pour les versions ${versionType} — rien à envoyer.`);
    return;
  }

  console.log(`Envoi à ${users.length} abonné(s) [${versionType}] pour v${version}…`);

  await Promise.all(users.map(async (user) => {
    const html = buildEmail(version, message);
    const fnRes = await fetch(`${process.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
      },
      body: JSON.stringify({ to: user.email, subject: `Les Héritiers — Version ${version} disponible`, html }),
    });
    const fnOk = fnRes.ok;
    if (!fnOk) {
      const detail = await fnRes.text().catch(() => String(fnRes.status));
      console.error(`  ✗ ${user.email} : ${fnRes.status} ${detail}`);
    } else console.log(`  ✓ ${user.email}`);
    const status = fnOk ? 'sent' : 'failed';
    await supabase.from('notification_history').insert({
      user_id: user.user_id,
      version,
      version_type: versionType,
      changelog: message,
      email_status: status,
    });
  }));

  console.log('✅ Notifications envoyées.');
}

run().catch(e => { console.error(e); process.exit(1); });
