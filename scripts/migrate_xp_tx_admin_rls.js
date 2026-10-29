// Migration : ajouter les policies RLS INSERT + DELETE super_admin sur xp_transactions
// Problème : xp_tx_insert_own et xp_tx_delete_own ne couvrent que le propriétaire du personnage,
// donc la reconstruction XP par un admin pour un personnage tiers échoue silencieusement.
require("dotenv").config();
const { Client } = require("pg");
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
client.connect().then(async () => {
  await client.query("BEGIN");
  try {
    await client.query(`
      CREATE POLICY "Super admin can insert all xp_transactions"
      ON xp_transactions FOR INSERT
      WITH CHECK (
        get_user_role(auth.uid()) = 'super_admin'
        OR auth.email() = 'amaranthe@free.fr'
      )
    `);
    console.log("✓ Policy INSERT super_admin créée");

    await client.query(`
      CREATE POLICY "Super admin can delete all xp_transactions"
      ON xp_transactions FOR DELETE
      USING (
        get_user_role(auth.uid()) = 'super_admin'
        OR auth.email() = 'amaranthe@free.fr'
      )
    `);
    console.log("✓ Policy DELETE super_admin créée");

    await client.query("COMMIT");
    console.log("\n✅ Migration appliquée avec succès.");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  }
  client.end();
}).catch(e => { console.error("❌ Erreur :", e.message); process.exit(1); });
