// scripts/migrate_pnj_table_entries.js
// Crée la table pnj_table_entries avec RLS — entrées communautaires du générateur de PNJ.
require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.pnj_table_entries (
      id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      table_name   TEXT        NOT NULL CHECK (table_name IN (
                                 'traits','apparences','motivations','secrets',
                                 'phobies','hobbies','comportements','metiers')),
      tranche_age  TEXT        CHECK (tranche_age IN ('jeune','adulte','mur','age') OR tranche_age IS NULL),
      value_m      TEXT        NOT NULL,
      value_f      TEXT,
      status       TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
      reject_reason TEXT,
      created_by   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
      approved_by  UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      approved_at  TIMESTAMPTZ,
      CONSTRAINT metiers_need_tranche  CHECK (table_name != 'metiers' OR tranche_age IS NOT NULL),
      CONSTRAINT non_metiers_no_tranche CHECK (table_name = 'metiers' OR tranche_age IS NULL)
    );
  `);
  console.log('✓ Table pnj_table_entries créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_pnj_entries_status
    ON public.pnj_table_entries(status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_pnj_entries_table_status
    ON public.pnj_table_entries(table_name, tranche_age, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_pnj_entries_creator
    ON public.pnj_table_entries(created_by);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.pnj_table_entries ENABLE ROW LEVEL SECURITY;`);

  const policies = [
    {
      name: 'pnj_entries_select',
      sql: `CREATE POLICY "pnj_entries_select"
            ON public.pnj_table_entries FOR SELECT TO authenticated
            USING (status = 'approved' OR created_by = auth.uid());`,
    },
    {
      name: 'pnj_entries_insert',
      sql: `CREATE POLICY "pnj_entries_insert"
            ON public.pnj_table_entries FOR INSERT TO authenticated
            WITH CHECK (created_by = auth.uid());`,
    },
    {
      name: 'pnj_entries_update_admin',
      sql: `CREATE POLICY "pnj_entries_update_admin"
            ON public.pnj_table_entries FOR UPDATE TO authenticated
            USING (
              EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))
            );`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = 'pnj_table_entries' AND policyname = $1`,
      [p.name]
    );
    if (rows.length === 0) {
      await client.query(p.sql);
      console.log(`✓ Policy ${p.name} créée`);
    } else {
      console.log(`  Policy ${p.name} déjà existante`);
    }
  }

  await client.end();
  console.log('\n✓ Migration pnj_table_entries terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
