const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://uvckugcixiugysnsbekb.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2Y2t1Z2NpeGl1Z3lzbnNiZWtiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTUwMjUxNywiZXhwIjoyMDg1MDc4NTE3fQ.3dgePM4G81VSusOgn7-vvEyNSatSvwb5EQpv3V0dJ5k';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const TABLES = [
  'admin_settings', 'bug_reports', 'cercle_membres', 'cercles',
  'character_snapshots', 'characters', 'chat_channels', 'chat_messages',
  'encyclopedia_edits', 'encyclopedia_items', 'gifts', 'heritier_notes',
  'pending_invites', 'profiles', 'registre_forge', 'xp_summary',
  'xp_transactions'
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
