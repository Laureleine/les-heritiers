require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
    await client.connect();
    const charId = 'a737c1ce-f8dd-4293-93fb-85537a422473';

    const { rows } = await client.query(
        `SELECT id, fortune, data->'atoutsPerso' as atouts_perso FROM characters WHERE id = $1`,
        [charId]
    );
    console.log('État actuel :', JSON.stringify(rows[0], null, 2));

    // Injecter "Bon investissement !" dans atoutsPerso
    await client.query(
        `UPDATE characters SET data = jsonb_set(data, '{atoutsPerso}', '["Bon investissement !"]'::jsonb) WHERE id = $1`,
        [charId]
    );

    const { rows: after } = await client.query(
        `SELECT id, fortune, data->'atoutsPerso' as atouts_perso FROM characters WHERE id = $1`,
        [charId]
    );
    console.log('Après correction :', JSON.stringify(after[0], null, 2));

    await client.end();
}
main().catch(e => { console.error(e); process.exit(1); });
