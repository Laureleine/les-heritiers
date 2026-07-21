require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const BADGES = [
    {
        id: 'eclaireur_tsf',
        label: 'Éclaireur de la TSF',
        icon_name: 'Radio',
        color_classes: 'bg-blue-50 text-blue-700 border-blue-200',
        description: 'Pour avoir brisé l\'isolement et diffusé le savoir sur les ondes du Cercle.',
        pixie_message: null, // à renseigner
    },
    {
        id: 'memorialiste_royal',
        label: 'Mémorialiste Royal',
        icon_name: 'History',
        color_classes: 'bg-amber-50 text-amber-800 border-amber-200',
        description: 'Votre plume grave l\'histoire des Héritiers dans le marbre du temps.',
        pixie_message: null,
    },
    {
        id: 'l_eveille',
        label: 'L\'Éveillé',
        icon_name: 'Eye',
        color_classes: 'bg-purple-50 text-purple-700 border-purple-200',
        description: 'Le brouillard s\'est dissipé. Vous savez enfin qui vous êtes vraiment.',
        pixie_message: null,
    },
    {
        id: 'patron_ombre',
        label: 'Patron de l\'Ombre',
        icon_name: 'Gift',
        color_classes: 'bg-rose-50 text-rose-700 border-rose-200',
        description: 'Protecteur occulte de votre Cercle, vous savez récompenser le mérite.',
        pixie_message: null,
    },
];

async function main() {
    await client.connect();
    let inserted = 0;
    for (const b of BADGES) {
        const { rowCount } = await client.query(`
            INSERT INTO titres_honorifiques (id, label, icon_name, color_classes, description, pixie_message)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (id) DO NOTHING
        `, [b.id, b.label, b.icon_name, b.color_classes, b.description, b.pixie_message]);
        if (rowCount > 0) { console.log(`✓ ${b.id}`); inserted++; }
        else console.log(`⚠ déjà présent : ${b.id}`);
    }
    await client.end();
    console.log(`\n✅ ${inserted}/4 badges insérés.`);
}
main().catch(e => { console.error(e); process.exit(1); });
