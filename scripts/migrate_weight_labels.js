// scripts/migrate_weight_labels.js
// Migre la colonne `weight` de INTEGER → TEXT dans les 4 tables de générateurs communautaires.
// Toutes les valeurs existantes sont converties vers 'frequent'.
// Ajoute un CHECK constraint sur les 5 valeurs autorisées.
require('dotenv').config();
const { Client } = require('pg');

const TABLES = [
  'poche_table_entries',
  'ambiance_table_entries',
  'tracas_table_entries',
  'pnj_table_entries',
];

const VALID_WEIGHTS = ['extremement_rare', 'rare', 'peu_frequent', 'frequent', 'tres_frequent'];
const CONSTRAINT_CHECK = `(weight IN ('${VALID_WEIGHTS.join("','")}'))`;

async function run() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  try {
    await client.query('BEGIN');

    for (const table of TABLES) {
      console.log(`\n→ Table : ${table}`);

      // 1. Changer le type INTEGER → TEXT, toutes les valeurs converties en 'frequent'
      await client.query(`ALTER TABLE ${table} ALTER COLUMN weight TYPE TEXT USING 'frequent'`);
      console.log(`  ✓ Colonne weight convertie en TEXT (toutes valeurs → 'frequent')`);

      // 2. Mettre la valeur par défaut
      await client.query(`ALTER TABLE ${table} ALTER COLUMN weight SET DEFAULT 'frequent'`);
      console.log(`  ✓ DEFAULT 'frequent' posé`);

      // 5. Supprimer l'ancien constraint s'il existe, puis ajouter le nouveau
      const constraintName = `${table}_weight_check`;
      await client.query(
        `ALTER TABLE ${table} DROP CONSTRAINT IF EXISTS ${constraintName}`
      );
      await client.query(
        `ALTER TABLE ${table} ADD CONSTRAINT ${constraintName} CHECK ${CONSTRAINT_CHECK}`
      );
      console.log(`  ✓ CHECK constraint ajouté`);
    }

    await client.query('COMMIT');
    console.log('\n✅ Migration terminée avec succès.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('\n❌ Erreur — ROLLBACK effectué :', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

run();
