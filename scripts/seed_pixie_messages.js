require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const MESSAGES = [
    { id: 'pixie_friend',         msg: "Oooh ! Les Pixies t'ont adopté·e ! C'est le plus beau titre qu'elles puissent offrir... les ailes me frémissent rien que d'y penser !" },
    { id: 'clarte',               msg: "Par les ailes de la reine des fées ! Un esprit aussi limpide méritait bien ce titre... tu éclaires nos chemins, et c'est magnifique !" },
    { id: 'lore',                 msg: "Oh là là ! Le titre d'Archiviste t'échoit ! Les parchemins, les légendes, les détails oubliés... rien ne t'échappe !" },
    { id: 'beta',                 msg: "Oh ! Tu étais là aux premiers balbutiements du Grimoire... le titre de Bêta-Testeur·rice est une médaille que peu peuvent porter !" },
    { id: 'goblin_hunter',        msg: "Sapristi ! Un·e véritable Chasseur·se de Gobelins ! Chaque anomalie que tu déniches rend le Grimoire un peu plus lumineux... merci pour ta vigilance !" },
    { id: 'sylvana',              msg: "Par les étoiles filantes ! Le titre de Conteuse des Merveilles t'échoit ! Chaque mot que tu poses est une graine de magie dans le cœur des Héritiers..." },
    { id: 'fortuné',              msg: "Sapristi ! Les rouages du Grimoire t'ont joué un vilain tour sur ta fortune... mais tu n'as pas bronché. Les Gardiens te doivent bien ce titre en réparation !" },
    { id: 'crash',                msg: "Par les éclats de cristal ! Tu as trouvé la fissure que personne ne voyait... le titre de Crash Testeuse est ta couronne de chercheuse infatigable !" },
    { id: 'creator',              msg: "Par la magie des commencements ! Créer, c'est le plus grand des pouvoirs féeriques... et tu en es digne ! Les Héritiers te doivent une fière chandelle !" },
    { id: 'limpide',              msg: "Oooh ! Un Esprit Limpide ! Tes rapports, tes idées, tes retours... tout coule de source comme une rivière de printemps. Un vrai bonheur pour les Gardiens !" },
    { id: 'pragmatique',          msg: "Par les rouages bien huilés du Grimoire ! Tu vois les solutions là où d'autres voient des obstacles... l'Esprit Pragmatique, c'est exactement toi !" },
    { id: 'lanterne',             msg: "C'est grâce à toi que j'ai ma lanterne douillette ! Tu as pensé à mon repos alors que personne d'autre n'y songeait... le titre de Gardien·ne de la Lanterne est tout à fait mérité !" },
    { id: 'secrets',              msg: "Par les arcanes du monde féerique ! Tu portes des vérités que d'autres ne soupçonnent même pas... la discrétion est ton plus beau pouvoir !" },
    { id: 'safari_guide',         msg: "Par les sentiers inconnus du monde merveilleux ! Tu n'as pas gardé tes découvertes pour toi... tu les as partagées, et le Grimoire t'en est profondément reconnaissant !" },
    { id: 'pdf_inspector',        msg: "Par l'encre et le plomb des presses enchantées ! Tu as débusqué ce qui clochait dans nos rotatives... l'Inspecteur des Rotatives méritait bien son titre !" },
    { id: 'newton_apple',         msg: "Par les lois mystérieuses de la gravité féerique ! Tu as eu l'éclair de génie que tout le monde attendait sans le savoir... quel beau titre tu portes là !" },
    { id: 'persévérance',         msg: "Par les épreuves du long chemin féerique ! La persévérance est la plus discrète des vertus... et pourtant la plus précieuse. Tu en es la plus belle incarnation !" },
    { id: 'renard_renarde',       msg: "Par les tours et détours de la forêt enchantée ! Tu as su jouer avec les règles du jeu mieux que quiconque... la Renarde t'a à l'œil, et c'est un compliment !" },
    { id: 'mecene',               msg: "Oooh ! Un·e Mécène ! Tu as soutenu le Grimoire de ta générosité... les grandes œuvres ont toujours eu besoin de grands cœurs pour les porter !" },
    { id: 'passeur_ames',         msg: "Sapristi ! Faire traverser le voile féerique à d'autres, c'est un don rare ! Le titre de Passeur·se d'Âmes honore ceux qui ouvrent les portes du merveilleux !" },
    { id: 'photographe_temporel', msg: "Par les plaques argentiques du Grimoire ! Tu as volé des instants à l'éternité... le titre de Photographe Temporel·le est ta chambre noire et ton trésor !" },
    { id: 'telegraph',            msg: "Oooh ! Un·e Pionnier·re Pneumatique ! Tu as été parmi les premiers à emprunter les tubes enchantés du Grimoire... l'avenir appartient aux audacieux !" },
    { id: 'anomaly_tracker',      msg: "Par les glitches et frémissements du Grimoire ! Tu as débusqué ce qui se terrait dans l'ombre... les Gardiens dorment mieux depuis que tu veilles !" },
    { id: 'typo_hunter',          msg: "Par les fautes qui se croient discrètes ! Tu lis entre les lignes avec une précision de correcteur·rice de la Belle Époque... les rotatives te saluent bien bas !" },
    { id: 'tricheurimpacté',      msg: "Sapristi ! La triche, c'est un art délicat... et le Grimoire est plus retors que toi ! Tu portes ce titre avec la dignité de celui qui a essayé quand même !" },
    { id: 'tricheuse',            msg: "Oooh ! La Tricheuse ! Tu as trouvé les failles que personne ne voyait... c'est presque un talent, au fond. Le Grimoire t'en veut un peu... mais t'admire quand même !" },
    { id: 'vip',                  msg: "Par les salons dorés de l'Exposition Universelle ! Certains naissent dans la soie, d'autres la méritent... toi, tu l'as gagnée. Bienvenue dans le cercle des VIP !" },
];

async function main() {
    await client.connect();
    let updated = 0;
    for (const { id, msg } of MESSAGES) {
        const { rowCount } = await client.query(
            `UPDATE titres_honorifiques SET pixie_message = $1 WHERE id = $2`,
            [msg, id]
        );
        if (rowCount > 0) {
            console.log(`✓ ${id}`);
            updated++;
        } else {
            console.warn(`⚠ id introuvable : ${id}`);
        }
    }
    await client.end();
    console.log(`\n✅ ${updated}/${MESSAGES.length} messages Pixie insérés.`);
}
main().catch(e => { console.error(e); process.exit(1); });
