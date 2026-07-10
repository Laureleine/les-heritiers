// Migration : permet à un joueur d'avoir plusieurs personnages dans le même cercle
// - Supprime UNIQUE (cercle_id, user_id)
// - Ajoute UNIQUE (cercle_id, user_id, character_id) pour éviter le doublon même personnage

require('dotenv').config();
const { Client } = require('pg');

async function migrate() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  try {
    await client.query(`
      ALTER TABLE public.cercle_membres
      DROP CONSTRAINT IF EXISTS cercle_membres_cercle_id_user_id_key;
    `);
    console.log('✓ Contrainte UNIQUE (cercle_id, user_id) supprimée');

    await client.query(`
      ALTER TABLE public.cercle_membres
      ADD CONSTRAINT cercle_membres_cercle_id_user_id_character_id_key
      UNIQUE (cercle_id, user_id, character_id);
    `);
    console.log('✓ Contrainte UNIQUE (cercle_id, user_id, character_id) ajoutée');

    console.log('Migration terminée avec succès.');
  } catch (e) {
    console.error('Erreur :', e.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
