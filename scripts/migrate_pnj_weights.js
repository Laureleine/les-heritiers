// scripts/migrate_pnj_weights.js
// Ajoute la colonne weight + étend la contrainte table_name aux tables d'identité.
require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  // 1. Ajouter la colonne weight
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    ADD COLUMN IF NOT EXISTS weight INTEGER NOT NULL DEFAULT 1;
  `);
  console.log('✓ Colonne weight ajoutée');

  // 2. Supprimer l'ancienne contrainte CHECK sur table_name
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    DROP CONSTRAINT IF EXISTS pnj_table_entries_table_name_check;
  `);
  console.log('✓ Ancienne contrainte table_name supprimée');

  // 3. Supprimer les contraintes liées aux métiers
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    DROP CONSTRAINT IF EXISTS metiers_need_tranche;
  `);
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    DROP CONSTRAINT IF EXISTS non_metiers_no_tranche;
  `);
  console.log('✓ Anciennes contraintes métier supprimées');

  // 4. Nouvelle contrainte table_name avec les tables d'identité
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    ADD CONSTRAINT pnj_table_entries_table_name_check
    CHECK (table_name IN (
      'traits','apparences','motivations','secrets',
      'phobies','hobbies','comportements','metiers',
      'tranches_age','sexes','genres','nationalites',
      'situations_matrimoniales','situations_familiales'
    ));
  `);
  console.log('✓ Nouvelle contrainte table_name créée (avec tables d\'identité)');

  // 5. Nouvelle contrainte : seule la table metiers peut avoir une tranche_age
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    ADD CONSTRAINT metiers_need_tranche
    CHECK (table_name != 'metiers' OR tranche_age IS NOT NULL);
  `);
  await client.query(`
    ALTER TABLE public.pnj_table_entries
    ADD CONSTRAINT non_metiers_no_tranche
    CHECK (table_name = 'metiers' OR tranche_age IS NULL);
  `);
  console.log('✓ Nouvelles contraintes métier créées');

  // 6. Mettre à jour les poids par défaut des entrées existantes
  const { rowCount } = await client.query(`
    UPDATE public.pnj_table_entries SET weight = 1 WHERE weight IS NULL;
  `);
  console.log(`✓ ${rowCount} entrées mises à jour avec weight=1`);

  await client.end();
  console.log('\n✓ Migration pnj_weights terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
