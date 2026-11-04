// Inspecte la structure et les politiques RLS des 4 tables ciblées
require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
  await client.connect();

  const tables = ['cabinet_noms', 'cabinet_backgrounds', 'cabinet_pathologies', 'personal_card_grants'];

  for (const t of tables) {
    console.log('\n=== ' + t + ' ===');

    const cols = await client.query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
      ORDER BY ordinal_position
    `, [t]);
    cols.rows.forEach(r =>
      console.log('  ' + r.column_name + ' : ' + r.data_type + (r.is_nullable === 'NO' ? ' NOT NULL' : ''))
    );

    const cnt = await client.query('SELECT COUNT(*) FROM ' + t);
    console.log('  => ' + cnt.rows[0].count + ' lignes');

    const rls = await client.query(`
      SELECT relrowsecurity AS rls_on
      FROM pg_class
      WHERE relname = $1 AND relnamespace = 'public'::regnamespace
    `, [t]);
    console.log('  => RLS activé :', rls.rows[0]?.rls_on ?? 'table introuvable');

    const pols = await client.query(`
      SELECT policyname, cmd, roles, qual
      FROM pg_policies
      WHERE schemaname = 'public' AND tablename = $1
    `, [t]);
    if (pols.rows.length === 0) {
      console.log('  => Politiques : aucune');
    } else {
      pols.rows.forEach(p =>
        console.log('  => Politique:', p.policyname, '|', p.cmd, '| roles:', p.roles)
      );
    }
  }

  await client.end();
  console.log('\nDone.');
}
main().catch(e => { console.error(e.message); process.exit(1); });
