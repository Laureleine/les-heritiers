// Migration : ajoute la catégorie 'campagne' à la contrainte CHECK de tracas_table_entries
// puis insère les 6 entrées officielles.
require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const ENTREES = [
  { titre: 'Train manqué',              description: "Le train de banlieue part sous votre nez ; le suivant dans une heure." },
  { titre: 'Chemin défoncé',            description: "La carriole s'embourbe dans l'ornière de la côte ; il faut pousser, dans la boue jusqu'aux chevilles." },
  { titre: 'Le renard au poulailler',   description: "Trois poules égorgées au matin, et la cuisinière furieuse." },
  { titre: 'Pompe gelée',               description: "Pas d'eau avant d'avoir dégelé la pompe à l'eau bouillante." },
  { titre: 'Commérages du bourg',       description: "À l'épicerie, les conversations s'arrêtent quand vous entrez." },
  { titre: 'Livreur qui refuse de monter', description: "Le charbonnier (ou le laitier) ne veut plus venir jusqu'à la propriété : on raconte des choses sur l'endroit." },
];

async function main() {
  await client.connect();

  // 1. Trouver le nom de la contrainte CHECK sur table_name
  const { rows: constraints } = await client.query(`
    SELECT conname
    FROM pg_constraint
    WHERE conrelid = 'tracas_table_entries'::regclass
      AND contype = 'c'
      AND pg_get_constraintdef(oid) LIKE '%table_name%'
  `);
  if (!constraints.length) throw new Error('Contrainte table_name introuvable');
  const constraintName = constraints[0].conname;
  console.log('Contrainte trouvée :', constraintName);

  // 2. Remplacer la contrainte pour y ajouter 'campagne'
  await client.query(`
    ALTER TABLE tracas_table_entries
      DROP CONSTRAINT "${constraintName}",
      ADD CONSTRAINT "${constraintName}" CHECK (
        table_name = ANY (ARRAY[
          'sante', 'logistique', 'social', 'technologie', 'campagne',
          'ex_lettre_anonyme', 'ex_parent_eloigne', 'ex_facheur',
          'ex_rumeur_journal', 'ex_erreur_livraison', 'ex_pli_officiel',
          'ex_gamin_rue'
        ])
      )
  `);
  console.log('✓ contrainte mise à jour');

  // 3. Insérer les 6 entrées
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
