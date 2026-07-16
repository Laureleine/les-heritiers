require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  const tables = ['cabinet_noms', 'cabinet_backgrounds', 'cabinet_pathologies'];

  for (const table of tables) {
    await client.query(`
      ALTER TABLE ${table}
        ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'approved',
        ADD COLUMN IF NOT EXISTS is_official BOOLEAN NOT NULL DEFAULT TRUE,
        ADD COLUMN IF NOT EXISTS reject_reason TEXT,
        ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
        ADD COLUMN IF NOT EXISTS approved_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
        ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ,
        ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    `);
    console.log(`✅ ${table} : colonnes ajoutées`);
  }

  await client.end();
  console.log('✅ Migration terminée');
}

main().catch(e => { console.error(e); process.exit(1); });
