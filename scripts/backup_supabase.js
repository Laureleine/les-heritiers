require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ Variables SUPABASE_SERVICE_KEY et REACT_APP_SUPABASE_URL requises dans .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const TABLES = [
  // Personnages & profils
  'characters', 'profiles', 'character_snapshots', 'xp_transactions',
  // Télégraphe & messagerie
  'chat_channels', 'chat_messages', 'chat_message_reads',
  // Cercles
  'cercles', 'cercle_membres',
  // Encyclopédie féérique
  'fairy_types', 'fairy_capacites', 'fairy_powers', 'fairy_assets',
  'fairy_type_capacites', 'fairy_type_powers', 'fairy_type_assets',
  'fairy_competences_predilection', 'fairy_competences_futiles_predilection',
  // Référentiels
  'competences', 'competences_futiles', 'specialites', 'profils', 'social_items',
  // Vie sociale & équipement
  'titres_honorifiques', 'heritier_notes', 'registre_forge',
  // Support & signalements
  'bug_reports', 'support_tickets', 'support_messages',
  // Encyclopédie — éditions & propositions
  'data_change_requests',
  // Administration
  'admin_settings',
  // Notifications
  'user_notification_preferences', 'notification_history',
  // Vues matérialisées
  'xp_summary'
];

async function backup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupDir = path.join(__dirname, '..', 'backups');
  fs.mkdirSync(backupDir, { recursive: true });

  const backupPath = path.join(backupDir, `backup_${timestamp}.json`);
  const dump = { timestamp, tables: {} };

  process.stdout.write(`Sauvegarde ${timestamp}...`);

  for (const table of TABLES) {
    try {
      const { data, error } = await supabase.from(table).select('*');
      if (error) {
        dump.tables[table] = { error: error.message };
        process.stdout.write(` [${table}: ERR]`);
      } else {
        dump.tables[table] = data || [];
        process.stdout.write(` [${table}: ${(data || []).length}]`);
      }
    } catch (e) {
      dump.tables[table] = { error: e.message };
      process.stdout.write(` [${table}: ERR]`);
    }
  }

  fs.writeFileSync(backupPath, JSON.stringify(dump, null, 2));
  console.log(`\n✓ Backup → ${backupPath}`);
  return backupPath;
}

if (require.main === module) {
  backup().catch(e => { console.error('Backup échoué:', e); process.exit(1); });
} else {
  module.exports = backup;
}
