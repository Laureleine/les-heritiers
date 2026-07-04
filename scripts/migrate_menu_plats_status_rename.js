// Harmonise le schéma de menu_plats avec pnj_table_entries / poche_table_entries /
// ambiance_table_entries : statut/motif_refus/auteur_id/validateur_id -> status/
// reject_reason/created_by/approved_by, valeurs en_attente/approuve/refuse -> pending/approved/rejected.
require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  const { rows: cols } = await client.query(`
    SELECT column_name FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'menu_plats'
  `);
  const colNames = new Set(cols.map(c => c.column_name));

  if (colNames.has('statut')) {
    await client.query(`ALTER TABLE public.menu_plats RENAME COLUMN statut TO status;`);
    console.log('✓ Colonne statut renommée en status');
  } else {
    console.log('  Colonne status déjà renommée');
  }

  if (colNames.has('motif_refus')) {
    await client.query(`ALTER TABLE public.menu_plats RENAME COLUMN motif_refus TO reject_reason;`);
    console.log('✓ Colonne motif_refus renommée en reject_reason');
  } else {
    console.log('  Colonne reject_reason déjà renommée');
  }

  if (colNames.has('auteur_id')) {
    await client.query(`ALTER TABLE public.menu_plats RENAME COLUMN auteur_id TO created_by;`);
    console.log('✓ Colonne auteur_id renommée en created_by');
  } else {
    console.log('  Colonne created_by déjà renommée');
  }

  if (colNames.has('validateur_id')) {
    await client.query(`ALTER TABLE public.menu_plats RENAME COLUMN validateur_id TO approved_by;`);
    console.log('✓ Colonne validateur_id renommée en approved_by');
  } else {
    console.log('  Colonne approved_by déjà renommée');
  }

  // La contrainte d'origine (valeurs FR) doit sauter AVANT la migration des valeurs,
  // sinon les nouvelles valeurs EN la violent (elle refuse tout ce qui n'est pas
  // en_attente/approuve/refuse).
  await client.query(`ALTER TABLE public.menu_plats DROP CONSTRAINT IF EXISTS menu_plats_statut_check;`);
  await client.query(`ALTER TABLE public.menu_plats DROP CONSTRAINT IF EXISTS menu_plats_status_check;`);

  // Migration des valeurs existantes (idempotent : UPDATE ... WHERE ne fait rien si déjà migré)
  const { rowCount: r1 } = await client.query(`UPDATE public.menu_plats SET status = 'pending' WHERE status = 'en_attente';`);
  const { rowCount: r2 } = await client.query(`UPDATE public.menu_plats SET status = 'approved' WHERE status = 'approuve';`);
  const { rowCount: r3 } = await client.query(`UPDATE public.menu_plats SET status = 'rejected' WHERE status = 'refuse';`);
  console.log(`✓ Valeurs migrées : ${r1} en_attente->pending, ${r2} approuve->approved, ${r3} refuse->rejected`);

  // Contrainte CHECK sur status posée après coup, une fois toutes les valeurs conformes
  await client.query(`
    ALTER TABLE public.menu_plats
    ADD CONSTRAINT menu_plats_status_check CHECK (status = ANY (ARRAY['pending', 'approved', 'rejected']));
  `);
  console.log('✓ Contrainte menu_plats_status_check (pending/approved/rejected) posée');

  await client.query(`ALTER TABLE public.menu_plats ALTER COLUMN status SET DEFAULT 'pending';`);

  // Policies RLS : recréées avec les nouveaux noms de colonnes
  await client.query(`DROP POLICY IF EXISTS menu_plats_select ON public.menu_plats;`);
  await client.query(`
    CREATE POLICY "menu_plats_select" ON public.menu_plats FOR SELECT TO authenticated
    USING (status = 'approved' OR created_by = auth.uid());
  `);

  await client.query(`DROP POLICY IF EXISTS menu_plats_insert ON public.menu_plats;`);
  await client.query(`
    CREATE POLICY "menu_plats_insert" ON public.menu_plats FOR INSERT TO authenticated
    WITH CHECK (
      created_by = auth.uid()
      AND (
        status = 'pending'
        OR EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('super_admin', 'gardien'))
      )
    );
  `);

  await client.query(`DROP POLICY IF EXISTS menu_plats_update_admin ON public.menu_plats;`);
  await client.query(`
    CREATE POLICY "menu_plats_update_admin" ON public.menu_plats FOR UPDATE TO authenticated
    USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.role IN ('super_admin', 'gardien')));
  `);
  console.log('✓ Policies RLS recréées avec les nouveaux noms de colonnes');

  // Index : renommés pour cohérence (pas obligatoire fonctionnellement, mais évite la confusion)
  await client.query(`ALTER INDEX IF EXISTS idx_menu_plats_statut RENAME TO idx_menu_plats_status;`);
  await client.query(`ALTER INDEX IF EXISTS idx_menu_plats_auteur RENAME TO idx_menu_plats_created_by;`);
  console.log('✓ Index renommés');

  const { rows: check } = await client.query(`SELECT status, count(*)::int AS n FROM public.menu_plats GROUP BY status`);
  console.log('  Répartition finale par status:', JSON.stringify(check));

  await client.end();
  console.log('\n✓ Migration menu_plats terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
