/**
 * Migration : finalisation de la suppression de historique_xp du JSONB.
 *
 * Étapes :
 *   1. Ajoute la contrainte UNIQUE (character_id, date_mouvement) sur xp_transactions
 *      si elle n'existe pas encore (nécessaire pour l'upsert ignoreDuplicates).
 *   2. Pour chaque personnage qui a des lignes dans xp_transactions, retire le champ
 *      historique_xp du JSONB data (il ne doit plus y vivre).
 *   3. Affiche un résumé.
 *
 * Pré-requis : SUPABASE_DB_URL dans .env
 * Lancer : node scripts/migrate_drop_historique_xp.js
 */

require('dotenv').config();
const { Client } = require('pg');

const DB_URL = process.env.SUPABASE_DB_URL;
if (!DB_URL) {
  console.error('❌ SUPABASE_DB_URL manquante dans .env');
  process.exit(1);
}

async function run() {
  const client = new Client({ connectionString: DB_URL });
  await client.connect();
  console.log('✅ Connecté à la base');

  try {
    // ─── Étape 1 : contrainte UNIQUE ────────────────────────────────────────
    const { rows: existingConstraint } = await client.query(`
      SELECT constraint_name
      FROM information_schema.table_constraints
      WHERE table_name = 'xp_transactions'
        AND constraint_type = 'UNIQUE'
        AND constraint_name = 'xp_tx_unique_per_char_date'
    `);

    if (existingConstraint.length > 0) {
      console.log('ℹ️  Contrainte UNIQUE déjà présente — étape 1 ignorée');
    } else {
      // Vérifier d'abord s'il existe des doublons
      const { rows: dupes } = await client.query(`
        SELECT character_id, date_mouvement, COUNT(*) AS cnt
        FROM xp_transactions
        GROUP BY character_id, date_mouvement
        HAVING COUNT(*) > 1
      `);

      if (dupes.length > 0) {
        console.log(`⚠️  ${dupes.length} paire(s) en doublon — suppression des doublons (conservation de la ligne avec l'id le plus bas)`);
        // Supprimer les doublons en gardant la ligne avec le plus petit id
        const { rowCount: deleted } = await client.query(`
          DELETE FROM xp_transactions
          WHERE id IN (
            SELECT id FROM (
              SELECT id,
                     ROW_NUMBER() OVER (
                       PARTITION BY character_id, date_mouvement
                       ORDER BY id
                     ) AS rn
              FROM xp_transactions
            ) ranked
            WHERE rn > 1
          )
        `);
        console.log(`   ${deleted} ligne(s) en doublon supprimées`);
      }

      await client.query(`
        ALTER TABLE xp_transactions
        ADD CONSTRAINT xp_tx_unique_per_char_date
        UNIQUE (character_id, date_mouvement)
      `);
      console.log('✅ Étape 1 : contrainte UNIQUE ajoutée sur (character_id, date_mouvement)');
    }

    // ─── Étape 2 : identifier les personnages concernés ─────────────────────
    // On retire historique_xp seulement pour les personnages qui ont
    // au moins une ligne dans xp_transactions (i.e. leur historique est en sécurité).
    const { rows: candidates } = await client.query(`
      SELECT DISTINCT c.id, c.nom
      FROM characters c
      INNER JOIN xp_transactions tx ON tx.character_id = c.id
      WHERE c.data ? 'historique_xp'
    `);

    if (candidates.length === 0) {
      console.log('ℹ️  Aucun personnage avec historique_xp en base — étape 2 ignorée');
    } else {
      console.log(`ℹ️  ${candidates.length} personnage(s) à traiter :`);
      for (const row of candidates) {
        console.log(`   - ${row.nom} (${row.id})`);
      }

      // Retirer le champ historique_xp du JSONB pour chacun
      const ids = candidates.map(r => r.id);
      const { rowCount } = await client.query(`
        UPDATE characters
        SET data = data - 'historique_xp'
        WHERE id = ANY($1::uuid[])
          AND data ? 'historique_xp'
      `, [ids]);

      console.log(`✅ Étape 2 : historique_xp retiré du JSONB pour ${rowCount} personnage(s)`);
    }

    // ─── Résumé ──────────────────────────────────────────────────────────────
    const { rows: remaining } = await client.query(`
      SELECT COUNT(*) AS cnt FROM characters WHERE data ? 'historique_xp'
    `);
    console.log(`\n📊 Personnages avec historique_xp encore en base : ${remaining[0].cnt}`);
    if (Number(remaining[0].cnt) > 0) {
      console.log('   (Ces personnages n\'ont pas encore de lignes dans xp_transactions — ils seront traités après leur prochaine sauvegarde.)');
    }

    console.log('\n✨ Migration terminée.');
  } finally {
    await client.end();
  }
}

run().catch(err => {
  console.error('❌ Erreur :', err.message);
  process.exit(1);
});
