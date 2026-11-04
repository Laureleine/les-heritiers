require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
    await client.connect();

    // 1. Trouver l'id du type Phénix
    const { rows: fairyTypes } = await client.query(`
        SELECT id, name FROM fairy_types WHERE name ILIKE '%ph%nix%' OR name ILIKE '%phenix%'
    `);
    console.log('Types fées phénix :', fairyTypes);

    if (fairyTypes.length === 0) {
        console.log('Aucun type phénix trouvé. Cherchons tous les types...');
        const { rows: all } = await client.query(`SELECT id, name FROM fairy_types ORDER BY name`);
        all.forEach(r => console.log(' -', r.id, r.name));
        await client.end();
        return;
    }

    // 2. Lister tous les pouvoirs du phénix avec leur type_pouvoir
    for (const ft of fairyTypes) {
        console.log(`\n=== Pouvoirs de "${ft.name}" (id=${ft.id}) ===`);
        const { rows: powers } = await client.query(`
            SELECT p.id, p.nom, p.type_pouvoir
            FROM fairy_type_powers ftp
            JOIN fairy_powers p ON p.id = ftp.power_id
            WHERE ftp.fairy_type_id = $1
            ORDER BY p.type_pouvoir, p.nom
        `, [ft.id]);
        powers.forEach(p => console.log(`  [${p.type_pouvoir}] ${p.nom}`));

        // 3. Chercher les noms masque/demasque des phénix qui existent aussi dans d'autres espèces
        const phenixNames = powers.filter(p => p.type_pouvoir === 'masque' || p.type_pouvoir === 'demasque').map(p => p.nom);
        console.log('\n=== Vérification doublons cross-espèces (masque/demasque phénix) ===');
        for (const nom of phenixNames) {
            const { rows: others } = await client.query(`
                SELECT ft.name AS espece, p.type_pouvoir
                FROM fairy_type_powers ftp
                JOIN fairy_powers p ON p.id = ftp.power_id
                JOIN fairy_types ft ON ft.id = ftp.fairy_type_id
                WHERE p.nom = $1 AND ft.id != $2
                ORDER BY ft.name
            `, [nom, ft.id]);
            if (others.length > 0) {
                console.log(`  DOUBLON "${nom}" → aussi dans : ${others.map(o => o.espece + '[' + o.type_pouvoir + ']').join(', ')}`);
            }
        }
    }

    await client.end();
}
main().catch(e => { console.error(e); process.exit(1); });
