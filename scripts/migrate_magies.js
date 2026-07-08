// scripts/migrate_magies.js
// Crée les 5 compétences de magie + leurs spécialités prérequises dans Occultisme.
// Usage : node scripts/migrate_magies.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const MAGIES = [
  {
    nom: 'Faëomancie',
    description: 'Art des fées et de la magie naturelle — manipulation des forces élémentaires et des esprits de la nature.',
    specOccultisme: 'Connaissance de la faëomancie',
  },
  {
    nom: 'Souffle',
    description: 'Maîtrise du souffle vital et des forces intérieures — contrôle de l\'énergie corporelle et mentale.',
    specOccultisme: 'Connaissance du Souffle',
  },
  {
    nom: 'Nécromancie',
    description: 'Art de communiquer avec les défunts et de manipuler les énergies mortifères.',
    specOccultisme: 'Connaissance de la nécromancie',
  },
  {
    nom: 'Théurgie',
    description: 'Magie divine — invocation et communication avec les entités supérieures.',
    specOccultisme: 'Connaissance de la théurgie',
  },
  {
    nom: 'Grand Langage',
    description: 'Langue primordiale de la création — manipulation des lois fondamentales de la réalité par la parole.',
    specOccultisme: 'Connaissance du Grand Langage',
  },
];

async function run() {
  await client.connect();
  console.log('Connecté à la base.\n');

  // Récupère l'id d'Occultisme (nécessaire pour rattacher les spécialités)
  const { rows: occ } = await client.query(
    `SELECT id FROM public.competences WHERE name = 'Occultisme'`
  );
  if (!occ.length) throw new Error('Compétence Occultisme introuvable.');
  const occultismeId = occ[0].id;
  console.log('✓ Occultisme id :', occultismeId);

  for (const magie of MAGIES) {
    // 1. Compétence magique (hors profil)
    const existing = await client.query(
      `SELECT id FROM public.competences WHERE name = $1`, [magie.nom]
    );
    if (existing.rows.length > 0) {
      console.log(`  ↩ Compétence "${magie.nom}" déjà présente (id: ${existing.rows[0].id})`);
    } else {
      const { rows } = await client.query(`
        INSERT INTO public.competences (name, description, has_specialites)
        VALUES ($1, $2, true)
        RETURNING id;
      `, [magie.nom, magie.description]);
      console.log(`  ✓ Compétence "${magie.nom}" créée (id: ${rows[0].id})`);
    }

    // 2. Spécialité dans Occultisme (prérequis à posséder avant déblocage)
    const existingSpec = await client.query(
      `SELECT id FROM public.specialites WHERE nom = $1 AND competence_id = $2`,
      [magie.specOccultisme, occultismeId]
    );
    if (existingSpec.rows.length > 0) {
      console.log(`  ↩ Spécialité "${magie.specOccultisme}" déjà présente dans Occultisme.`);
    } else {
      await client.query(`
        INSERT INTO public.specialites (nom, competence_id, is_official)
        VALUES ($1, $2, true);
      `, [magie.specOccultisme, occultismeId]);
      console.log(`  ✓ Spécialité "${magie.specOccultisme}" créée dans Occultisme.`);
    }

    console.log('');
  }

  await client.end();
  console.log('Migration des magies terminée avec succès.');
}

run().catch(err => { console.error(err); process.exit(1); });
