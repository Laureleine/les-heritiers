const { Client } = require('pg');
require('dotenv').config();

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();
  console.log('Connecté à Supabase.');

  // ── CRITIQUE 1 : profiles UPDATE sans WITH CHECK ────────────────────────
  // La politique actuelle permet à tout user de modifier sa propre ligne,
  // y compris la colonne `role`. Le WITH CHECK explicite bloque ça.
  await client.query(`
    DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
    CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (
      auth.uid() = id
      AND role = (SELECT role FROM public.profiles WHERE id = auth.uid())
    );
  `);
  console.log('✅ CRITIQUE 1 : profiles UPDATE — WITH CHECK sur role ajouté.');

  // ── HAUTE 1 : data_change_requests SELECT = true ────────────────────────
  // Supprimer toutes les politiques SELECT existantes avant de recréer.
  const { rows: selectPolicies } = await client.query(`
    SELECT policyname FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'data_change_requests' AND cmd = 'SELECT'
  `);
  for (const p of selectPolicies) {
    await client.query(`DROP POLICY IF EXISTS "${p.policyname}" ON public.data_change_requests`);
    console.log(`  Supprimé: "${p.policyname}"`);
  }
  await client.query(`
    CREATE POLICY "select_own_or_admin"
    ON public.data_change_requests FOR SELECT TO authenticated
    USING (
      user_id = auth.uid()
      OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = ANY(ARRAY['gardien', 'super_admin'])
    );
  `);
  console.log('✅ HAUTE 1 : data_change_requests SELECT — restreint à l\'auteur ou admin.');

  // ── MOYENNE 1 : figures INSERT WITH CHECK (true) ────────────────────────
  const { rows: figPolicies } = await client.query(`
    SELECT policyname FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'figures' AND cmd = 'INSERT'
  `);
  for (const p of figPolicies) {
    await client.query(`DROP POLICY IF EXISTS "${p.policyname}" ON public.figures`);
    console.log(`  Supprimé: "${p.policyname}"`);
  }
  await client.query(`
    CREATE POLICY "figures_insert_authenticated"
    ON public.figures FOR INSERT TO authenticated
    WITH CHECK (is_official = false AND is_sealed = false);
  `);
  console.log('✅ MOYENNE 1 : figures INSERT — is_official et is_sealed bloqués.');

  // ── MOYENNE 4 : bug_captures — MIME types + taille max ─────────────────
  const { rowCount } = await client.query(`
    UPDATE storage.buckets
    SET
      allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif'],
      file_size_limit = 5242880
    WHERE id = 'bug_captures'
  `);
  if (rowCount > 0) {
    console.log('✅ MOYENNE 4 : bug_captures — MIME limités à images, taille max 5 MiB.');
  } else {
    console.log('⚠️  MOYENNE 4 : bucket bug_captures introuvable (vérifier le nom dans le dashboard).');
  }

  await client.end();
  console.log('\nMigration terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
