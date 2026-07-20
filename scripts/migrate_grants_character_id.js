require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
    await client.connect();

    await client.query(`
        ALTER TABLE personal_card_grants
        ADD COLUMN IF NOT EXISTS character_id UUID REFERENCES characters(id) ON DELETE SET NULL
    `);
    console.log('✓ Colonne character_id ajoutée');

    // Rattacher le grant accepté de Marie-Josèphe à son personnage
    const MARIE_JOSEPHE_ID = 'a737c1ce-f8dd-4293-93fb-85537a422473';
    const MARIE_JOSEPHE_USER_ID = '04ae6db4-ab6d-4d33-9001-3b6419c85d37';

    const { rowCount } = await client.query(`
        UPDATE personal_card_grants
        SET character_id = $1
        WHERE granted_to = $2
          AND status = 'accepted'
          AND character_id IS NULL
    `, [MARIE_JOSEPHE_ID, MARIE_JOSEPHE_USER_ID]);
    console.log(`✓ ${rowCount} grant(s) rattaché(s) à Marie-Josèphe`);

    // Vérification
    const { rows } = await client.query(`
        SELECT id, card_id, granted_to, character_id, status
        FROM personal_card_grants
        WHERE granted_to = $1
    `, [MARIE_JOSEPHE_USER_ID]);
    rows.forEach(r => console.log('  ', JSON.stringify(r)));

    await client.end();
    console.log('\n✅ Migration character_id terminée.');
}
main().catch(e => { console.error(e); process.exit(1); });
