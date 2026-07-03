// scripts/migrate_llm_usage_log.js
// Crée la table llm_usage_log (RLS) — suivi de consommation de tokens LLM,
// générique pour tout futur outil IA (call_type distingue chaque usage).
require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.llm_usage_log (
      id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      call_type         TEXT        NOT NULL,
      model             TEXT        NOT NULL,
      prompt_tokens     INTEGER     NOT NULL,
      completion_tokens INTEGER     NOT NULL,
      total_tokens      INTEGER     NOT NULL,
      user_id           UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('✓ Table llm_usage_log créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_llm_usage_log_created_at
    ON public.llm_usage_log(created_at);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_llm_usage_log_call_type
    ON public.llm_usage_log(call_type);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.llm_usage_log ENABLE ROW LEVEL SECURITY;`);

  const { rows } = await client.query(
    `SELECT 1 FROM pg_policies WHERE tablename = 'llm_usage_log' AND policyname = 'llm_usage_log_select_super_admin'`
  );
  if (rows.length === 0) {
    await client.query(`
      CREATE POLICY "llm_usage_log_select_super_admin"
      ON public.llm_usage_log FOR SELECT TO authenticated
      USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'super_admin')
      );
    `);
    console.log('✓ Policy llm_usage_log_select_super_admin créée');
  } else {
    console.log('  Policy llm_usage_log_select_super_admin déjà existante');
  }
  // Volontairement aucune policy INSERT/UPDATE/DELETE : seule la fonction Edge
  // (clé service role, qui contourne RLS) doit pouvoir écrire dans cette table.

  const { rows: count } = await client.query(`SELECT count(*)::int AS n FROM public.llm_usage_log`);
  console.log(`  ${count[0].n} lignes existantes dans llm_usage_log`);

  await client.end();
  console.log('\n✓ Migration llm_usage_log terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
