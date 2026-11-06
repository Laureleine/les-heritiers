require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ Variables SUPABASE_SERVICE_KEY et VITE_SUPABASE_URL requises dans .env');
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
  'xp_summary',
  // Cartes personnelles & Cercles (suite)
  'personal_card_grants', 'cercle_revelations', 'sessions_jeu', 'session_presents',
  'chroniques_heritiers', 'indices_verites', 'ombre_consequences',
  // Générateurs & outils du Docte
  'pnj_table_entries', 'poche_table_entries', 'ambiance_table_entries', 'tracas_table_entries',
  'cabinet_noms', 'cabinet_backgrounds', 'cabinet_pathologies',
  'menu_plats', 'menu_structures', 'menu_sauvegardes', 'itineraire_modes_perso',
  'sorts', 'figures', 'map_points', 'outil_usage',
  // Gazette & Anna Chronique
  'journal_daily_info', 'journal_holidays', 'journal_repair_requests', 'journal_votes',
  'historical_events', 'courrier_lecteurs',
  'anna_chronique_dialogues', '_archive_copies_dialogues', 'anna_membres', 'anna_votes',
  // Journaux techniques
  'error_logs', 'llm_usage_log'
];

// Tables volontairement exclues (volumineuses et régénérables par le pipeline 1899 OCR Gallica).
// Toute table de la base absente de TABLES et de EXCLUDED déclenche un avertissement.
const EXCLUDED = ['editions', 'journal_articles'];

async function warnUncoveredTables() {
  if (!process.env.SUPABASE_DB_URL) return;
  const { Client } = require('pg');
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  try {
    await client.connect();
    const { rows } = await client.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'"
    );
    const missing = rows.map(r => r.table_name).filter(t => !TABLES.includes(t) && !EXCLUDED.includes(t));
    if (missing.length) {
      console.warn(`\n⚠️  Tables NON sauvegardées (à ajouter dans TABLES ou EXCLUDED) : ${missing.join(', ')}`);
    }
  } catch (e) {
    console.warn(`\n⚠️  Vérification de couverture des tables impossible : ${e.message}`);
  } finally {
    await client.end().catch(() => {});
  }
}

async function backup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupDir = path.join(__dirname, '..', 'backups');
  fs.mkdirSync(backupDir, { recursive: true });

  const backupPath = path.join(backupDir, `backup_${timestamp}.json`);
  const dump = { timestamp, tables: {} };

  process.stdout.write(`Sauvegarde ${timestamp}...`);

  for (const table of TABLES) {
    try {
      const PAGE = 1000;
      let all = [];
      let from = 0;
      while (true) {
        const { data, error } = await supabase.from(table).select('*').range(from, from + PAGE - 1);
        if (error) { all = { error: error.message }; break; }
        all = all.concat(data || []);
        if ((data || []).length < PAGE) break;
        from += PAGE;
      }
      if (all.error) {
        dump.tables[table] = all;
        process.stdout.write(` [${table}: ERR]`);
      } else {
        dump.tables[table] = all;
        process.stdout.write(` [${table}: ${all.length}]`);
      }
    } catch (e) {
      dump.tables[table] = { error: e.message };
      process.stdout.write(` [${table}: ERR]`);
    }
  }

  fs.writeFileSync(backupPath, JSON.stringify(dump, null, 2));
  console.log(`\n✓ Backup → ${backupPath}`);
  await warnUncoveredTables();
  return backupPath;
}

if (require.main === module) {
  backup().catch(e => { console.error('Backup échoué:', e); process.exit(1); });
} else {
  module.exports = backup;
}
