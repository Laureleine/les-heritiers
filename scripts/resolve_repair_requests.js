require('dotenv').config();
const { Client } = require('pg');

async function main() {
    const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
    await client.connect();

    const { rows } = await client.query(
        "SELECT id, character_nom, requested_at FROM journal_repair_requests WHERE resolved_at IS NULL ORDER BY requested_at"
    );
    console.log(`${rows.length} demandes en attente :`);
    rows.forEach(r => console.log(`  ${r.id} | ${r.character_nom} | ${new Date(r.requested_at).toLocaleDateString('fr-FR')}`));

    if (rows.length === 0) { await client.end(); return; }

    const { rowCount } = await client.query(
        "UPDATE journal_repair_requests SET resolved_at = NOW() WHERE resolved_at IS NULL"
    );
    console.log(`\n${rowCount} demandes marquées comme résolues.`);
    await client.end();
}
main().catch(e => { console.error(e); process.exit(1); });
