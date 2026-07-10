/**
 * Migration : eubage.actif → magies.Druidisme.actif + druidismeCreationPP
 *
 * Avant :
 *   character.data.eubage = { actif: true, source_competence: '...', rangs_transferes: 2 }
 *   character.viaSociale[profil] = [..., <id_eubage_item>, ...]
 *
 * Après :
 *   character.data.eubage = { source_competence: '...', rangs_transferes: 2 }  (actif supprimé)
 *   character.data.magies.Druidisme = { actif: true }
 *   character.data.druidismeCreationPP = 5  (pour refléter la dépense dans le budget PP)
 *   character.viaSociale = nettoyé de l'item Eubage
 *
 * Usage : node scripts/migrate_druidisme_to_magies.js
 */

import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL });

async function migrate() {
    const client = await pool.connect();
    try {
        // 1. Récupérer les IDs des items Eubage dans la table social_items
        const { rows: eubageItems } = await client.query(`
            SELECT id FROM social_items WHERE nom ILIKE '%Eubage%'
        `);
        const eubageItemIds = new Set(eubageItems.map(r => r.id));
        console.log(`Items Eubage en base : ${eubageItemIds.size} (IDs: ${[...eubageItemIds].join(', ')})`);

        // 2. Sélectionner tous les personnages avec eubage.actif = true
        const { rows } = await client.query(`
            SELECT id, data, via_sociale
            FROM characters
            WHERE (data->'eubage'->>'actif')::boolean = true
        `);

        console.log(`${rows.length} personnage(s) à migrer.`);
        if (rows.length === 0) return;

        let migres = 0;
        for (const row of rows) {
            const data = row.data || {};
            const eubage = data.eubage || {};

            // Préparer le nouvel objet eubage sans la clé actif
            const nouvelEubage = { ...eubage };
            delete nouvelEubage.actif;

            // Préparer magies.Druidisme en préservant les données existantes
            const magiesActuelles = data.magies || {};
            const druidismeActuel = magiesActuelles['Druidisme'] || {};
            const nouveauDruidisme = { actif: true, ...druidismeActuel };

            const nouvelleData = {
                ...data,
                eubage: nouvelEubage,
                magies: { ...magiesActuelles, Druidisme: nouveauDruidisme },
                druidismeCreationPP: 5,
            };

            // Nettoyer l'item Eubage de viaSociale
            const viaSociale = row.via_sociale || {};
            let viaSocialeModifiee = false;
            const nouvelleViaSociale = {};
            for (const [profil, ids] of Object.entries(viaSociale)) {
                if (Array.isArray(ids)) {
                    const idsNettoyes = ids.filter(id => !eubageItemIds.has(id));
                    if (idsNettoyes.length !== ids.length) viaSocialeModifiee = true;
                    nouvelleViaSociale[profil] = idsNettoyes;
                } else {
                    nouvelleViaSociale[profil] = ids;
                }
            }

            await client.query(
                viaSocialeModifiee
                    ? 'UPDATE characters SET data = $1, via_sociale = $2 WHERE id = $3'
                    : 'UPDATE characters SET data = $1 WHERE id = $2',
                viaSocialeModifiee
                    ? [JSON.stringify(nouvelleData), JSON.stringify(nouvelleViaSociale), row.id]
                    : [JSON.stringify(nouvelleData), row.id]
            );
            migres++;
            console.log(`  ✓ Personnage ${row.id} migré${viaSocialeModifiee ? ' (item Eubage retiré de viaSociale)' : ''}`);
        }

        console.log(`\nMigration terminée : ${migres}/${rows.length} personnage(s) mis à jour.`);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate().catch(err => {
    console.error('Erreur de migration :', err);
    process.exit(1);
});
