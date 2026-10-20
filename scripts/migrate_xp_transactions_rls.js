/**
 * Migration : policies RLS admin/docte/public sur xp_transactions
 *
 * xp_tx_select_own ne couvre que le propriétaire du personnage.
 * L'admin qui consulte les persos des joueurs obtenait [] → journal vierge.
 * On reproduit les patterns de la table characters.
 *
 * Lancer : node scripts/migrate_xp_transactions_rls.js
 */
require('dotenv').config();
const { Client } = require('pg');

const DB_URL = process.env.SUPABASE_DB_URL;
if (!DB_URL) { console.error('❌ SUPABASE_DB_URL manquante dans .env'); process.exit(1); }

async function run() {
  const client = new Client({ connectionString: DB_URL });
  await client.connect();
  console.log('✅ Connecté');

  const policies = [
    {
      name: 'xp_tx_select_admin_email',
      def: `auth.email() = 'amaranthe@free.fr'`,
    },
    {
      name: 'xp_tx_select_admin_roles',
      def: `(SELECT profiles.role FROM profiles WHERE profiles.id = auth.uid()) IN ('gardien', 'super_admin')`,
    },
    {
      name: 'xp_tx_select_docte_cercle',
      def: `character_id IN (
        SELECT cm.character_id FROM cercle_membres cm
        JOIN cercles c ON cm.cercle_id = c.id
        WHERE c.docte_id = auth.uid() AND cm.character_id IS NOT NULL
      )`,
    },
    {
      name: 'xp_tx_select_public_char',
      def: `character_id IN (SELECT id FROM characters WHERE is_public = true)`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      'SELECT 1 FROM pg_policies WHERE tablename = $1 AND policyname = $2',
      ['xp_transactions', p.name]
    );
    if (rows.length > 0) { console.log(`ℹ️  Déjà présente : ${p.name}`); continue; }
    await client.query(`CREATE POLICY "${p.name}" ON xp_transactions FOR SELECT USING (${p.def})`);
    console.log(`✅ Créée : ${p.name}`);
  }

  console.log('\n✨ Migration RLS terminée.');
  await client.end();
}

run().catch(e => { console.error('❌', e.message); process.exit(1); });
