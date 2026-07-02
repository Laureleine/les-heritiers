// scripts/migrate_poche_table_entries.js
// Crée la table poche_table_entries (RLS) et insère les objets canon —
// Générateur de Poche. Mirror de scripts/migrate_pnj_table_entries.js.
require('dotenv').config();
const { Client } = require('pg');

const SEED = [
  // --- fouille_ordinaire ---
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une boîte d'allumettes de contrebande en bois de peuplier (humides).", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un mouchoir en coton rêche maculé de suie ou de tabac.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une pipe en terre cuite culottée avec un reste de tabac gris (Caporal).", value_f: "Un flacon de sel de menthe pour les maux de tête ou les migraines." },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un couteau de poche usé de type 'Opinel'.", value_f: "Une paire de petits ciseaux de couture à broder en acier." },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un ticket froissé pour l'Exposition Universelle ou l'Omnibus.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un peigne en corne à qui il manque plusieurs dents.", value_f: "Deux épingles à chapeau longues et acérées en acier poli." },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un cure-oreille ou un cure-ongle artisanal en os poli.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une ficelle de chanvre poisseuse de plusieurs mètres enroulée.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un quignon de pain rassis enveloppé dans un vieux morceau de journal.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une clé en fer forgé banale (sans indication de serrure).", value_f: null },

  // --- fouille_mondaine ---
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un flacon de sels de pâmoison ou une fiole d'éther pur dans un étui de velours.", value_f: null },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Un étui à cigares en argent ciselé contenant trois Havanes parfumés.", value_f: "Un poudrier en vermeil ciselé avec une petite houpette en cygne." },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Un mouchoir en soie blanche brodé de ses initiales.", value_f: "Un flacon de sels ou de parfum de violette dissimulé dans un manchon." },
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un agenda de poche en maroquin avec son crayon de plomb.", value_f: "Un carnet de bal miniature en ivoire avec sa chaînette d'or." },
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un coupe-papier d'écaille de tortue.", value_f: "Un petit flacon de sels de vinaigre aromatique contre les étourdissements." },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Une tabatière en émail contenant du tabac à priser mentholé.", value_f: null },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Un flacon d'eau de Cologne fine de chez Guerlain.", value_f: null },
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un coupe-chou manche en nacre dans son étui.", value_f: "Une paire de gants de chevreau blanc à peine froissés." },

  // --- fouille_secrets ---
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Un billet doux très parfumé signé d'une actrice des Folies Bergère, fixant un rendez-vous secret.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Une fiole de laudanum frelaté ou d'arsenic dissimulée dans une fausse boîte de pastilles contre la toux.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Un mot d'ordre codé d'une bande d'Apaches ('Rendez-vous aux Fortifs à minuit sous la lune').", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Un tract anarchiste clandestin imprimé sur du papier rouge de mauvaise qualité.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 15, value_m: "Un pli cacheté à la cire noire contenant une menace de chantage financier.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 5, value_m: "Un petit morceau de parchemin portant un pentacle runique dessiné au sang éthérique.", value_f: null },

  // --- fouille_horreur ---
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un flacon d'Éther scellé au plomb, étiqueté pour des recherches 'médicales et spirituelles'.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un carnet de notes jauni décrivant les variations du fluide éthérique près des lignes du métropolitain.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un petit miroir de poche en obsidienne noire dont le tain semble légèrement déformé.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Une boîte de pilules de laudanum marquée du sceau d'un aliéniste de l'asile Sainte-Anne.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un fragment de roche cristalline étrange qui pulse d'une lueur invisible à l'œil nu.", value_f: null },

  // --- fouille_espionnage ---
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une grille de décryptage alphabétique (chiffre de Saint-Cyr) dissimulée dans un étui de montre.", value_f: null },
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une micro-dépêche sur papier pelure enroulée serrée, rédigée en allemand ou en cyrillique.", value_f: null },
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une fiole d'encre sympathique (invisible à l'œil nu) camouflée en flacon de parfum.", value_f: null },
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une liste nominative d'employés des postes et télégraphes avec des annotations de surveillance.", value_f: null },

  // --- fouille_pulp ---
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un poing américain en laiton massif poli par l'usage.", value_f: null },
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un plan griffonné à la hâte des galeries de ventilation de la Banque de France.", value_f: null },
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un couteau à cran d'arrêt (un 'Surin') avec une marque d'Apache gravée sur le manche.", value_f: null },
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un sifflet de police ou de cocher en métal argenté (idéal pour donner l'alerte).", value_f: null },

  // --- fouille_saisonniere / hiver ---
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Une chaufferette de poche métallique portative, tiède, fonctionnant au charbon.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Une boîte en fer blanc de pastilles de réglisse ou de menthol contre la toux.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Une petite flasque en étain contenant un reste de goutte (eau-de-vie forte).", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Un morceau de suif ou de cire pour imperméabiliser les coutures des bottines.", value_f: null },

  // --- fouille_saisonniere / printemps ---
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un flacon d'eau de mélisse des Carmes pour apaiser les migraines printanières.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un carnet de poésies ou de croquis de fleurs printanières à peine entamé.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un sachet de toile contenant de la lavande séchée pour masquer les odeurs de sueur.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un chiffon doux en flanelle pour essuyer la boue des bas de pantalons.", value_f: null },

  // --- fouille_saisonniere / ete ---
  { table_name: 'fouille_saisonniere', saison: 'ete', weight: 33, value_m: "Une paire de lunettes fumées primitives à monture d'acier contre la réverbération.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'ete', weight: 33, value_m: "Un canotier miniature en paille tressée replié ou une lanière de chapeau.", value_f: "Un petit éventail de poche pliable en bois de rose ou en dentelle." },
  { table_name: 'fouille_saisonniere', saison: 'ete', weight: 34, value_m: "Un flacon d'eau de Cologne légère de chez l'apothicaire pour se rafraîchir le cou.", value_f: null },

  // --- fouille_saisonniere / automne ---
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Une boîte d'allumettes parfaitement sèches gardée dans un étui étanche en cuir.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Un journal de la semaine passée utilisé comme doublure imperméable improvisée.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Quelques marrons d'Inde ramassés au pied des marronniers, glissés là comme porte-bonheur.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Une fiole d'huile camphrée pour frictionner les membres engourdis par l'humidité.", value_f: null },
];

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.poche_table_entries (
      id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      table_name    TEXT        NOT NULL CHECK (table_name IN (
                                  'fouille_ordinaire','fouille_mondaine','fouille_secrets',
                                  'fouille_horreur','fouille_espionnage','fouille_pulp','fouille_saisonniere')),
      saison        TEXT        CHECK (saison IN ('hiver','printemps','ete','automne') OR saison IS NULL),
      value_m       TEXT        NOT NULL,
      value_f       TEXT,
      weight        INTEGER     NOT NULL DEFAULT 1,
      is_official   BOOLEAN     NOT NULL DEFAULT false,
      status        TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
      reject_reason TEXT,
      created_by    UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      approved_by   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      approved_at   TIMESTAMPTZ,
      CONSTRAINT saisonniere_need_saison CHECK (table_name != 'fouille_saisonniere' OR saison IS NOT NULL),
      CONSTRAINT non_saisonniere_no_saison CHECK (table_name = 'fouille_saisonniere' OR saison IS NULL)
    );
  `);
  console.log('✓ Table poche_table_entries créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_poche_entries_status
    ON public.poche_table_entries(status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_poche_entries_table_status
    ON public.poche_table_entries(table_name, saison, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_poche_entries_creator
    ON public.poche_table_entries(created_by);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.poche_table_entries ENABLE ROW LEVEL SECURITY;`);

  const policies = [
    {
      name: 'poche_entries_select',
      sql: `CREATE POLICY "poche_entries_select"
            ON public.poche_table_entries FOR SELECT TO authenticated
            USING (status = 'approved' OR created_by = auth.uid());`,
    },
    {
      name: 'poche_entries_insert',
      sql: `CREATE POLICY "poche_entries_insert"
            ON public.poche_table_entries FOR INSERT TO authenticated
            WITH CHECK (created_by = auth.uid());`,
    },
    {
      name: 'poche_entries_update_admin',
      sql: `CREATE POLICY "poche_entries_update_admin"
            ON public.poche_table_entries FOR UPDATE TO authenticated
            USING (
              EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))
            );`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = 'poche_table_entries' AND policyname = $1`,
      [p.name]
    );
    if (rows.length === 0) {
      await client.query(p.sql);
      console.log(`✓ Policy ${p.name} créée`);
    } else {
      console.log(`  Policy ${p.name} déjà existante`);
    }
  }

  const { rows: existing } = await client.query(
    `SELECT count(*)::int AS n FROM public.poche_table_entries WHERE is_official = true`
  );
  if (existing[0].n === 0) {
    for (const row of SEED) {
      await client.query(
        `INSERT INTO public.poche_table_entries
           (table_name, saison, value_m, value_f, weight, is_official, status, created_by)
         VALUES ($1, $2, $3, $4, $5, true, 'approved', NULL)`,
        [row.table_name, row.saison, row.value_m, row.value_f, row.weight]
      );
    }
    console.log(`✓ ${SEED.length} entrées canon insérées`);
  } else {
    console.log(`  ${existing[0].n} entrées canon déjà présentes, seed ignoré`);
  }

  const { rows: counts } = await client.query(
    `SELECT table_name, saison, count(*)::int AS n FROM public.poche_table_entries
     GROUP BY table_name, saison ORDER BY table_name, saison`
  );
  console.table(counts);

  await client.end();
  console.log('\n✓ Migration poche_table_entries terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
