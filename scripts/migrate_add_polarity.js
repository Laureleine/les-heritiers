// scripts/migrate_add_polarity.js
// Ajoute la colonne polarity à pnj_table_entries
// Usage : node scripts/migrate_add_polarity.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function run() {
  await client.connect();
  console.log('Connecté à la base.');

  await client.query(`
    ALTER TABLE public.pnj_table_entries
    ADD COLUMN IF NOT EXISTS polarity TEXT NOT NULL DEFAULT 'n'
    CHECK (polarity IN ('l2', 'l1', 'n', 'd1', 'd2'));
  `);
  console.log('✓ Colonne polarity ajoutée (ou déjà présente).');

  await client.end();
}

run().catch(err => { console.error(err); process.exit(1); });
