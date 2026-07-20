require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
    await client.connect();

    await client.query(`
        ALTER TABLE titres_honorifiques
        ADD COLUMN IF NOT EXISTS pixie_message TEXT
    `);
    console.log('✓ Colonne pixie_message ajoutée à titres_honorifiques');

    await client.query(`
        ALTER TABLE profiles
        ADD COLUMN IF NOT EXISTS badges_seen TEXT[] DEFAULT '{}'
    `);
    console.log('✓ Colonne badges_seen ajoutée à profiles');

    const { rows } = await client.query(`SELECT id, label FROM titres_honorifiques ORDER BY label`);
    console.log(`\n${rows.length} badge(s) à renseigner dans pixie_message :`);
    rows.forEach(r => console.log(`  - ${r.id} : "${r.label}"`));

    await client.end();
    console.log('\n✅ Migration badges_pixie terminée.');
}
main().catch(e => { console.error(e); process.exit(1); });
