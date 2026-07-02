// scripts/migrate_ambiance_table_entries.js
// Crée la table ambiance_table_entries (RLS) et insère les éléments canon —
// Générateur d'Ambiance. Mirror de scripts/migrate_poche_table_entries.js.
require('dotenv').config();
const { Client } = require('pg');

const SEED = [
  // --- decor / paris_populaire ---
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Une ruelle pavée étroite où s'alignent des façades sombres aux fenêtres chargées de linge qui sèche." },
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Un carrefour bruyant près d'un chantier, dominé par l'odeur de purin, de charbon et de poussière de plâtre." },
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Une place de faubourg ceinturée de fortifications en ruine, de cabanes de chiffonniers et d'estaminets borgnes." },
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Un quai de Seine encombré de péniches de charbon, où l'eau claque contre les pontons sous les sifflets des usines." },

  // --- decor / paris_riche ---
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Un large boulevard haussmannien bordé d'arbres majestueux et de grilles en fer forgé étincelantes." },
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Une place feutrée aux arcades de pierre, où les vitrines des grands magasins exposent des tissus précieux." },
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Une avenue résidentielle ou une allée verdoyante, bordée de belles propriétés privées ou d'hôtels particuliers aux lourdes portes cochères." },
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Les abords d'un grand théâtre, d'un opéra ou d'un pavillon de villégiature, éclairés par les reflets blancs et froids des premières lampes électriques." },

  // --- decor / banlieue_industrielle ---
  { table_name: 'decor', variante: 'banlieue_industrielle', weight: 33, value: "Une plaine désolée où de gigantesques cheminées d'usines en briques rouges crachent un panache noir continu sur le ciel." },
  { table_name: 'decor', variante: 'banlieue_industrielle', weight: 33, value: "Un chemin boueux longeant des voies ferrées de triage, bordé d'entrepôts de tôle et de terrains vagues jonchés de ferraille." },
  { table_name: 'decor', variante: 'banlieue_industrielle', weight: 34, value: "Une rue ouvrière aux petites maisons identiques en brique, écrasée par le bourdonnement mécanique des ateliers de mécanique." },

  // --- decor / campagne_rurale ---
  { table_name: 'decor', variante: 'campagne_rurale', weight: 33, value: "Un chemin de terre battue bordé de haies vives et de vieux saules, serpentant entre des champs de blé à perte de vue." },
  { table_name: 'decor', variante: 'campagne_rurale', weight: 33, value: "La place principale d'un petit village endormi, articulée autour d'un vieux puits en pierre, d'une église romane et d'un abreuvoir." },
  { table_name: 'decor', variante: 'campagne_rurale', weight: 34, value: "Un sous-bois brumeux aux arbres séculaires, où l'épais tapis de mousse étouffe le moindre bruit de pas." },

  // --- evenement / paris_jour ---
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un marchand ambulant crie à plein poumons pour vendre ses journaux du matin ('Le Petit Journal !')." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un embouteillage de fiacres et d'omnibus à chevaux crée un vacarme de jurons et de sabots sur le pavé." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un gamin de Paris (un titi) court entre les jambes des passants en sifflant, poursuivi par un cocher en colère." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un rémouleur ambulant fait crisser sa meule sur le trottoir, projetant des gerbes d'étincelles en affûtant un couteau." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Une colonne de grévistes en blouses de travail défile en chantant des refrains révolutionnaires, encadrée de loin par des sergents de ville." },

  // --- evenement / paris_nuit ---
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Un allumeur de réverbères termine sa tournée, laissant une lueur vacillante et jaunâtre percer la brume." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Une silhouette pressée s'engouffre dans un porche sombre en jetant un regard nerveux derrière elle." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Des rires étouffés et des éclats de musique s'échappent de l'arrière-salle close d'un estaminet." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Une patrouille de nuit de la Sûreté en pèlerine noire scrute les angles morts des rues, le sifflet au poing." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Un chiffonnier courbe l'échine sous sa hotte, fouillant les tas d'ordures à la lueur d'une lanterne aveugle." },

  // --- evenement / banlieue_industrielle (surcharge fixe d'origine) ---
  { table_name: 'evenement', variante: 'banlieue_industrielle_jour', weight: 1, value: "La chaussée tremble au passage d'un fardier lourdement chargé de poutrelles d'acier, tandis que retentit la sirène stridente d'une filature textile." },
  { table_name: 'evenement', variante: 'banlieue_industrielle_nuit', weight: 1, value: "Les équipes de nuit des usines sortent de leur faction, le visage noirci par la suie de charbon, croisant les silhouettes louches des rôdeurs de terrains vagues." },

  // --- evenement / campagne_rurale (surcharge fixe d'origine) ---
  { table_name: 'evenement', variante: 'campagne_rurale_jour', weight: 1, value: "Un paysan guidant une lourde charrette à foin avance au pas de ses bœufs, saluant lentement les rares voyageurs." },
  { table_name: 'evenement', variante: 'campagne_rurale_nuit', weight: 1, value: "Au loin, le hurlement des chiens de garde brise le silence total de la nuit rurale, tandis qu'aucune lueur ne filtre des fermes isolées." },

  // --- meteo (une entrée par saison) ---
  { table_name: 'meteo', variante: 'hiver', weight: 1, value: "Les passants marchent tête baissée, emmitouflés dans de lourds pardessus, fuyant un vent glacial qui fait grincer les enseignes en tôle." },
  { table_name: 'meteo', variante: 'printemps', weight: 1, value: "Une pluie fine et soudaine fait briller les pavés comme des miroirs, obligeant la foule à déployer un océan de parapluies noirs." },
  { table_name: 'meteo', variante: 'ete', weight: 1, value: "L'air est lourd, imprégné d'une odeur de poussière chaude et d'asphalte qui fond, tandis que les terrasses des cafés affichent complet." },
  { table_name: 'meteo', variante: 'automne', weight: 1, value: "Des feuilles mortes tourbillonnent dans les courants d'air sous un ciel bas couleur plomb, alors que la nuit tombe de façon précoce." },

  // --- intrigue / horror ---
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Un attroupement muet entoure une flaque de sang noir sur le trottoir. Les policiers semblent terrifiés par la forme des morsures." },
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Les becs de gaz vacillent tous en même temps et s'éteignent pendant quelques secondes, laissant planer une fraîcheur surnaturelle." },
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Un chat de gouttière hurle de terreur en fixant une zone vide, ses poils hérissés par une présence invisible que l'on devine dans l'ombre." },
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Une rumeur court parmi les locaux : les rats fuiraient en masse les sous-sols ou les granges, comme pour échapper à un réveil souterrain." },

  // --- intrigue / espionage ---
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Un homme en redingote feint de lire son journal contre un arbre, mais ses yeux suivent précisément les moindres mouvements du groupe." },
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Une vitre s'entrouvre brusquement au premier étage d'un immeuble, et un pli de papier froissé tombe sur le sol juste devant vous." },
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Un télégramme diplomatique codé glisse du sac d'un coursier cycliste pressé qui bouscule un passant sans s'arrêter." },
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Dans le brouhaha du lieu, deux voix feutrées échangent des chiffres secrets en allemand avant de se taire net à votre approche." },

  // --- intrigue / pulp ---
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Une violente altercation éclate : deux Apaches armés de surins encerclent un bourgeois qui appelle désespérément à l'aide." },
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Un prototype de machine ou omnibus à vapeur pétarade et lâche une immense colonne de fumée noire en frôlant de peu les étals." },
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Un pickpocket vif comme l'éclair détrousse un passant et s'enfuit en bondissant par-dessus les tonneaux d'une charrette renversée." },
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Une course-poursuite rocambolesque traverse la rue : un individu s'accroche à l'arrière d'un fiacre lancé au galop." },
];

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.ambiance_table_entries (
      id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      table_name    TEXT        NOT NULL CHECK (table_name IN ('decor','evenement','meteo','intrigue')),
      variante      TEXT        NOT NULL,
      value         TEXT        NOT NULL,
      weight        INTEGER     NOT NULL DEFAULT 1,
      is_official   BOOLEAN     NOT NULL DEFAULT false,
      status        TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
      reject_reason TEXT,
      created_by    UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      approved_by   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      approved_at   TIMESTAMPTZ,
      CONSTRAINT variante_valide CHECK (
        (table_name = 'decor'     AND variante IN ('paris_populaire','paris_riche','banlieue_industrielle','campagne_rurale')) OR
        (table_name = 'evenement' AND variante IN ('paris_jour','paris_nuit','banlieue_industrielle_jour','banlieue_industrielle_nuit','campagne_rurale_jour','campagne_rurale_nuit')) OR
        (table_name = 'meteo'     AND variante IN ('hiver','printemps','ete','automne')) OR
        (table_name = 'intrigue'  AND variante IN ('horror','espionage','pulp'))
      )
    );
  `);
  console.log('✓ Table ambiance_table_entries créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_ambiance_entries_status
    ON public.ambiance_table_entries(status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_ambiance_entries_table_status
    ON public.ambiance_table_entries(table_name, variante, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_ambiance_entries_creator
    ON public.ambiance_table_entries(created_by);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.ambiance_table_entries ENABLE ROW LEVEL SECURITY;`);

  const policies = [
    {
      name: 'ambiance_entries_select',
      sql: `CREATE POLICY "ambiance_entries_select"
            ON public.ambiance_table_entries FOR SELECT TO authenticated
            USING (status = 'approved' OR created_by = auth.uid());`,
    },
    {
      name: 'ambiance_entries_insert',
      sql: `CREATE POLICY "ambiance_entries_insert"
            ON public.ambiance_table_entries FOR INSERT TO authenticated
            WITH CHECK (created_by = auth.uid());`,
    },
    {
      name: 'ambiance_entries_update_admin',
      sql: `CREATE POLICY "ambiance_entries_update_admin"
            ON public.ambiance_table_entries FOR UPDATE TO authenticated
            USING (
              EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))
            );`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = 'ambiance_table_entries' AND policyname = $1`,
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
    `SELECT count(*)::int AS n FROM public.ambiance_table_entries WHERE is_official = true`
  );
  if (existing[0].n === 0) {
    for (const row of SEED) {
      await client.query(
        `INSERT INTO public.ambiance_table_entries
           (table_name, variante, value, weight, is_official, status, created_by)
         VALUES ($1, $2, $3, $4, true, 'approved', NULL)`,
        [row.table_name, row.variante, row.value, row.weight]
      );
    }
    console.log(`✓ ${SEED.length} entrées canon insérées`);
  } else {
    console.log(`  ${existing[0].n} entrées canon déjà présentes, seed ignoré`);
  }

  const { rows: counts } = await client.query(
    `SELECT table_name, variante, count(*)::int AS n FROM public.ambiance_table_entries
     GROUP BY table_name, variante ORDER BY table_name, variante`
  );
  console.table(counts);

  await client.end();
  console.log('\n✓ Migration ambiance_table_entries terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
