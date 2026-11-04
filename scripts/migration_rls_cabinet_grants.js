// Migration RLS : cabinet_noms, cabinet_backgrounds, cabinet_pathologies, personal_card_grants
// Pattern : même logique que tracas_table_entries pour les 3 tables cabinet_*
//           logique propre pour personal_card_grants (octrois entre utilisateurs)
require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
  await client.connect();

  // ── Tables cabinet_* (contenu communautaire avec modération) ──────────────
  const cabinetTables = ['cabinet_noms', 'cabinet_backgrounds', 'cabinet_pathologies'];

  for (const t of cabinetTables) {
    const prefix = t.replace('cabinet_', 'cab_').replace('_', '_');
    console.log(`\n── ${t} ──`);

    await client.query(`ALTER TABLE ${t} ENABLE ROW LEVEL SECURITY`);
    console.log('✓ RLS activé');

    // SELECT : entrées approuvées OU créées par soi
    await client.query(`
      CREATE POLICY "${prefix}_select" ON ${t}
      FOR SELECT USING (
        (status = 'approved') OR (created_by = auth.uid())
      )
    `);
    console.log('✓ SELECT : approved OR own');

    // INSERT : authentifié, created_by = soi
    await client.query(`
      CREATE POLICY "${prefix}_insert" ON ${t}
      FOR INSERT WITH CHECK (created_by = auth.uid())
    `);
    console.log('✓ INSERT : created_by = auth.uid()');

    // UPDATE : admin uniquement (super_admin ou gardien)
    await client.query(`
      CREATE POLICY "${prefix}_update_admin" ON ${t}
      FOR UPDATE USING (
        EXISTS (
          SELECT 1 FROM profiles
          WHERE profiles.id = auth.uid()
            AND profiles.role = ANY(ARRAY['super_admin', 'gardien'])
        )
      )
    `);
    console.log('✓ UPDATE : admins seulement');
  }

  // ── personal_card_grants (octrois de cartes entre héritiers) ──────────────
  const t = 'personal_card_grants';
  console.log(`\n── ${t} ──`);

  await client.query(`ALTER TABLE ${t} ENABLE ROW LEVEL SECURITY`);
  console.log('✓ RLS activé');

  // SELECT : celui qui a accordé OU celui qui reçoit
  await client.query(`
    CREATE POLICY "pcg_select" ON ${t}
    FOR SELECT USING (
      granted_by = auth.uid() OR granted_to = auth.uid()
    )
  `);
  console.log('✓ SELECT : granted_by OR granted_to');

  // INSERT : granted_by = soi
  await client.query(`
    CREATE POLICY "pcg_insert" ON ${t}
    FOR INSERT WITH CHECK (granted_by = auth.uid())
  `);
  console.log('✓ INSERT : granted_by = auth.uid()');

  // UPDATE : celui qui reçoit (pour accepter/refuser) OU admins
  await client.query(`
    CREATE POLICY "pcg_update" ON ${t}
    FOR UPDATE USING (
      granted_to = auth.uid()
      OR EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
          AND profiles.role = ANY(ARRAY['super_admin', 'gardien'])
      )
    )
  `);
  console.log('✓ UPDATE : granted_to OU admins');

  await client.end();
  console.log('\nDone.');
}
main().catch(e => { console.error(e.message); process.exit(1); });
