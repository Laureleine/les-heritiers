// scripts/migrate_sorts_cout_xp.js
// Ajoute la colonne cout_xp sur sorts + insère les rituels Saronide (Adepte, gratuits).
// Usage : node scripts/migrate_sorts_cout_xp.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const RITUELS_SARONIDE = [
    { nom: 'Rituel des Portes d\'Avalon', magie: 'Druidisme', niveau: 'Adepte' },
    { nom: 'Rituel de malédiction',       magie: 'Druidisme', niveau: 'Adepte' },
];

async function run() {
    await client.connect();
    console.log('Connecté à la base.\n');

    // 1. Ajouter la colonne cout_xp si absente
    await client.query(`
        ALTER TABLE public.sorts
        ADD COLUMN IF NOT EXISTS cout_xp INTEGER;
    `);
    console.log('✓ Colonne cout_xp ajoutée (ou déjà présente).');

    // 2. Insérer les rituels Saronide avec cout_xp = 0
    for (const sort of RITUELS_SARONIDE) {
        const existing = await client.query(
            `SELECT id FROM public.sorts WHERE nom = $1 AND magie = $2`,
            [sort.nom, sort.magie]
        );
        if (existing.rows.length > 0) {
            await client.query(
                `UPDATE public.sorts SET cout_xp = 0 WHERE nom = $1 AND magie = $2`,
                [sort.nom, sort.magie]
            );
            console.log(`  ↩ "${sort.nom}" déjà présent — cout_xp mis à 0.`);
        } else {
            await client.query(`
                INSERT INTO public.sorts (nom, magie, niveau, details, is_official, cout_xp)
                VALUES ($1, $2, $3, '{}', true, 0)
            `, [sort.nom, sort.magie, sort.niveau]);
            console.log(`  ✓ "${sort.nom}" inséré (cout_xp = 0).`);
        }
    }

    await client.end();
    console.log('\nMigration terminée.');
}

run().catch(err => { console.error(err); process.exit(1); });
