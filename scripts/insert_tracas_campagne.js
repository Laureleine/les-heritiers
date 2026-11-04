require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const ENTREES = [
  {
    titre: 'Train manqué',
    description: 'Le train de banlieue part sous votre nez ; le suivant dans une heure.',
  },
  {
    titre: 'Chemin défoncé',
    description: "La carriole s'embourbe dans l'ornière de la côte ; il faut pousser, dans la boue jusqu'aux chevilles.",
  },
  {
    titre: 'Le renard au poulailler',
    description: 'Trois poules égorgées au matin, et la cuisinière furieuse.',
  },
  {
    titre: 'Pompe gelée',
    description: "Pas d'eau avant d'avoir dégelé la pompe à l'eau bouillante.",
  },
  {
    titre: 'Commérages du bourg',
    description: "À l'épicerie, les conversations s'arrêtent quand vous entrez.",
  },
  {
    titre: 'Livreur qui refuse de monter',
    description: "Le charbonnier (ou le laitier) ne veut plus venir jusqu'à la propriété : on raconte des choses sur l'endroit.",
  },
];

async function main() {
  await client.connect();

  for (const e of ENTREES) {
    const { rows } = await client.query(
      `INSERT INTO tracas_table_entries
         (table_name, titre, description, weight, is_official, status)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT DO NOTHING
       RETURNING id, titre`,
      ['campagne', e.titre, e.description, 'frequent', true, 'approved']
    );
    if (rows.length) console.log('✓ inséré :', rows[0].titre);
    else console.log('~ déjà présent :', e.titre);
  }

  await client.end();
  console.log('Done.');
}
main().catch(e => { console.error(e.message); process.exit(1); });
