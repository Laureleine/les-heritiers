// scripts/migrate_indices_verites.js
// Crée les tables indices_verites et cercle_revelations avec RLS.
import 'dotenv/config';
import pg from 'pg';

const client = new pg.Client({ connectionString: process.env.SUPABASE_DB_URL });
await client.connect();

const run = async (label, sql) => {
  try {
    await client.query(sql);
    console.log('✓', label);
  } catch (e) {
    console.error('✗', label, e.message);
  }
};

// ── Tables ────────────────────────────────────────────────────────────────────

await run('CREATE indices_verites', `
  CREATE TABLE IF NOT EXISTS public.indices_verites (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    element_nom  TEXT NOT NULL,
    element_type TEXT NOT NULL CHECK (element_type IN ('concept','lieu','personnage','événement')),
    type         TEXT NOT NULL CHECK (type IN ('indice','verite_mineure','verite_majeure','dit_du_marcheur')),
    texte        TEXT NOT NULL,
    ordre        INT  NOT NULL DEFAULT 0
  );
`);

await run('CREATE cercle_revelations', `
  CREATE TABLE IF NOT EXISTS public.cercle_revelations (
    id                        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cercle_id                 UUID NOT NULL REFERENCES public.cercles(id) ON DELETE CASCADE,
    item_id                   UUID NOT NULL REFERENCES public.indices_verites(id) ON DELETE CASCADE,
    revealed_at               TIMESTAMPTZ DEFAULT NOW(),
    revealed_by               UUID REFERENCES public.profiles(id),
    xp_distributed            BOOLEAN DEFAULT FALSE,
    bonus_element_distribue   BOOLEAN DEFAULT FALSE,
    UNIQUE(cercle_id, item_id)
  );
`);

// ── RLS indices_verites ──────────────────────────────────────────────────────

await run('RLS indices_verites ENABLE', `ALTER TABLE public.indices_verites ENABLE ROW LEVEL SECURITY;`);

for (const [name, sql] of [
  ['iv_select_all',    `CREATE POLICY "iv_select_all" ON public.indices_verites FOR SELECT USING (true);`],
  ['iv_insert_admin',  `CREATE POLICY "iv_insert_admin" ON public.indices_verites FOR INSERT TO authenticated
    WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien')));`],
  ['iv_update_admin',  `CREATE POLICY "iv_update_admin" ON public.indices_verites FOR UPDATE TO authenticated
    USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien')));`],
  ['iv_delete_admin',  `CREATE POLICY "iv_delete_admin" ON public.indices_verites FOR DELETE TO authenticated
    USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien')));`],
]) {
  const exists = await client.query(
    `SELECT 1 FROM pg_policies WHERE policyname = $1 AND tablename = 'indices_verites'`, [name]
  );
  if (exists.rows.length) { console.log('skip (exists)', name); continue; }
  await run(`POLICY ${name}`, sql);
}

// ── RLS cercle_revelations ───────────────────────────────────────────────────

await run('RLS cercle_revelations ENABLE', `ALTER TABLE public.cercle_revelations ENABLE ROW LEVEL SECURITY;`);

for (const [name, sql] of [
  ['cr_select_cercle', `CREATE POLICY "cr_select_cercle" ON public.cercle_revelations FOR SELECT TO authenticated
    USING (
      EXISTS (SELECT 1 FROM public.cercles WHERE id = cercle_id AND docte_id = auth.uid())
      OR EXISTS (SELECT 1 FROM public.cercle_membres WHERE cercle_id = cercle_revelations.cercle_id AND user_id = auth.uid())
    );`],
  ['cr_insert_docte',  `CREATE POLICY "cr_insert_docte" ON public.cercle_revelations FOR INSERT TO authenticated
    WITH CHECK (EXISTS (SELECT 1 FROM public.cercles WHERE id = cercle_id AND docte_id = auth.uid()));`],
  ['cr_update_docte',  `CREATE POLICY "cr_update_docte" ON public.cercle_revelations FOR UPDATE TO authenticated
    USING (EXISTS (SELECT 1 FROM public.cercles WHERE id = cercle_id AND docte_id = auth.uid()));`],
  ['cr_delete_docte',  `CREATE POLICY "cr_delete_docte" ON public.cercle_revelations FOR DELETE TO authenticated
    USING (EXISTS (SELECT 1 FROM public.cercles WHERE id = cercle_id AND docte_id = auth.uid()));`],
]) {
  const exists = await client.query(
    `SELECT 1 FROM pg_policies WHERE policyname = $1 AND tablename = 'cercle_revelations'`, [name]
  );
  if (exists.rows.length) { console.log('skip (exists)', name); continue; }
  await run(`POLICY ${name}`, sql);
}

await client.end();
console.log('\nMigration terminée.');
