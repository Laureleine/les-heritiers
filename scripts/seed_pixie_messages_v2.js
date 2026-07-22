require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const MESSAGES = [
    { id: 'eclaireur_tsf',    msg: "Sapristi ! La TSF capte tes pensées ! Ta première note partagée a traversé l'éther féerique... Éclaireur de la TSF, c'est maintenant officiel !" },
    { id: 'memorialiste_royal', msg: "Par les archives féeriques ! Cinq Chroniques déjà ! Tu tisses la grande tapisserie de l'histoire du Cercle... Mémorialiste Royal, c'est exactement ce que tu es !" },
    { id: 'l_eveille',        msg: "Par les voiles qui se déchirent ! Tu n'es plus un Enfoui — tu es un Éveillé ! Ce que tu pressentais sans pouvoir le nommer... tu peux désormais le voir en face !" },
    { id: 'patron_ombre',     msg: "Sapristi ! Cinq offrandes secrètes tissées dans l'ombre pour tes joueurs... Tu protèges et tu récompenses sans jamais te montrer. Le titre de Patron de l'Ombre est ta couronne invisible !" },
];

async function main() {
    await client.connect();
    let updated = 0;
    for (const { id, msg } of MESSAGES) {
        const { rowCount } = await client.query(
            `UPDATE titres_honorifiques SET pixie_message = $1 WHERE id = $2`,
            [msg, id]
        );
        if (rowCount > 0) { console.log(`✓ ${id}`); updated++; }
        else console.warn(`⚠ id introuvable : ${id}`);
    }
    await client.end();
    console.log(`\n✅ ${updated}/4 messages Pixie insérés.`);
}
main().catch(e => { console.error(e); process.exit(1); });
