// scripts/migrate_tracas_table_entries.js
// Crée la table tracas_table_entries (RLS) et insère les 60 tracas canon +
// les 7 pools d'exemples. Mirror du patron migrate_poche_table_entries.js.
require('dotenv').config();
const { Client } = require('pg');

const SEED = [
  // ── SANTÉ ──────────────────────────────────────────────────────────────
  { table_name: 'sante', weight: 50, titre: 'Migraine ophtalmique', description: 'Un mal de crâne foudroyant, accentué par la lumière.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Embarras gastrique', description: 'Une tourte douteuse la veille... Matinée près du vase de nuit.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Torticolis', description: 'Coincé au réveil à cause d\'un traversin trop dur.', exemple_key: null },
  { table_name: 'sante', weight: 25, titre: 'Rage de dents naissante', description: 'Douleur sourde qui s\'élance à chaque gorgée de café chaud.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Coupure de rasoir / Brûlure au fer', description: 'Un geste maladroit qui tache le col de chemise propre.', exemple_key: null },
  { table_name: 'sante', weight: 25, titre: 'Attaque de punaises de lit', description: 'Démangeaisons insupportables. La literie est infestée.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Ongle incarné ou cloque', description: 'La bottine neuve a fait des ravages sur le pavé parisien.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Rhume carabiné', description: 'Nez qui coule et éternuements. Impossible de rester discret.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Poussière dans l\'œil', description: 'Une escarbille de charbon s\'est logée sous la paupière.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Courbatures inexpliquées', description: 'On accuse l\'humidité de la Seine ou les miasmes de la saison.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Yeux irrités par le smog', description: 'L\'air chargé de suie de charbon fait pleurer les yeux.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Lèvre gercée / Bouton de fièvre', description: 'Ça pique et ça saigne dès qu\'on sourit.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Engourdissement d\'un membre', description: 'Se réveiller avec le bras totalement \'mort\' pour s\'être endormi dessus.', exemple_key: null },
  { table_name: 'sante', weight: 50, titre: 'Cheveux impossibles à coiffer', description: 'Mèche rebelle rebiquant malgré la gomina.', exemple_key: null },
  { table_name: 'sante', weight: 25, titre: 'Colique subite en public', description: 'Il faut trouver d\'urgence un Chalet de nécessité public (15 centimes).', exemple_key: null },
  { table_name: 'sante', weight: 25, titre: 'Extinction de voix', description: 'Le personnage ne peut plus parler que dans un murmure éraillé.', exemple_key: null },
  { table_name: 'sante', weight: 5,  titre: 'Entorse de la cheville', description: 'Le pied a tourné sur un pavé disjoint. Le personnage boite bas.', exemple_key: null },

  // ── LOGISTIQUE ─────────────────────────────────────────────────────────
  { table_name: 'logistique', weight: 50, titre: 'Col cassé récalcitrant', description: 'Le bouton de col s\'est glissé sous un meuble introuvable.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Accident de boue', description: 'Un fiacre éclabousse la redingote avec l\'eau de ruissellement et le crottin.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Rupture de stock de charbon', description: 'Le poêle s\'est éteint. Réveil dans une pièce glaciale.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Clé perdue', description: 'Impossible de remettre la main sur la clé de l\'appartement.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Semelle qui prend l\'eau', description: 'La doublure a lâché. Un \'floc-floc\' humide accompagne chaque pas.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Panne de gaz ou de pétrole', description: 'La soirée se fera à la bougie de suif qui pue et éclaire mal.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Déchirure de dernière minute', description: 'Le bas du vêtement s\'accroche dans un clou au moment de partir.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Montre à gousset arrêtée', description: 'Oubli de la remonter. Désorientation temporelle complète.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Invasion de souris', description: 'Des documents ou biscuits ont été grignotés pendant la nuit.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Linge mal séché', description: 'Une odeur de \'chien mouillé\' poursuit le personnage.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Pièce de monnaie factice', description: 'On vous a refilé une fausse pièce de 1 franc en plomb la veille.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Tache d\'encre', description: 'L\'encrier a fui. Doigts maculés et manchette bonne pour la blanchisseuse.', exemple_key: null },
  { table_name: 'logistique', weight: 50, titre: 'Omnibus complet', description: 'Trois voitures d\'affilée passent avec le panneau \'Complet\'. Retard assuré.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Lacet ou crochet qui lâche', description: 'Le lacet casse net au moment de serrer la bottine.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Odeur de naphtaline tenace', description: 'Le pardessus sort de la malle et empeste. Les gens se retournent au salon.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Cocher de fiacre hargneux', description: 'Le cocher refuse la course ou insulte le personnage.', exemple_key: null },
  { table_name: 'logistique', weight: 25, titre: 'Vol de parapluie / Canne', description: 'Quelqu\'un est parti avec votre canne au vestiaire, laissant une pérotte.', exemple_key: null },
  { table_name: 'logistique', weight: 5,  titre: 'Rupture de canalisation d\'eau', description: 'Pas de toilette ce matin, il faut aller à la fontaine Wallace.', exemple_key: null },

  // ── SOCIAL ─────────────────────────────────────────────────────────────
  { table_name: 'social', weight: 25, titre: 'Pneumatique urgent... mais cryptique', description: 'Un petit bleu arrive, mais l\'écriture est illisible ou non signée.', exemple_key: null },
  { table_name: 'social', weight: 25, titre: 'Créancier ou concierge au saut du lit', description: 'Ça réclame le terme ou une facture impayée à haute voix sur le palier.', exemple_key: null },
  { table_name: 'social', weight: 25, titre: 'Lettre anonyme', description: 'Un pli mystérieux déposé sous la porte.', exemple_key: 'lettre_anonyme' },
  { table_name: 'social', weight: 5,  titre: 'Télégramme d\'un parent éloigné', description: 'Un proche arrive par le train de l\'après-midi, bousculant l\'emploi du temps.', exemple_key: 'parent_eloigne' },
  { table_name: 'social', weight: 25, titre: 'Visite matinale d\'un fâcheux', description: 'Quelqu\'un s\'incruste pour bavarder et vider vos liqueurs.', exemple_key: 'facheur' },
  { table_name: 'social', weight: 25, titre: 'Invitation de dernière minute impérative', description: 'Un mot d\'une figure d\'autorité exige votre présence ce soir.', exemple_key: null },
  { table_name: 'social', weight: 5,  titre: 'Rumeur publique gênante', description: 'Le journal du matin contient un écho de salon piquant qui vous vise indirectement.', exemple_key: 'rumeur_journal' },
  { table_name: 'social', weight: 25, titre: 'Erreur de livraison', description: 'Un commissionnaire livre une caisse qui ne vous est pas destinée mais exige son pourboire.', exemple_key: 'erreur_livraison' },
  { table_name: 'social', weight: 5,  titre: 'Pli officiel scellé', description: 'Une convocation formelle qui génère de l\'anxiété.', exemple_key: 'pli_officiel' },
  { table_name: 'social', weight: 25, titre: 'Messager indiscret', description: 'Un gamin des rues a répété votre message secret à haute voix avant de vous trouver.', exemple_key: null },
  { table_name: 'social', weight: 50, titre: 'Colporteur insistant', description: 'Un vendeur à la sauvette vous suit sur 200 mètres pour des billets de loterie.', exemple_key: null },
  { table_name: 'social', weight: 50, titre: 'Salut manqué (Gaffe sociale)', description: 'Vous oubliez de soulever votre chapeau devant un contact clé, qui s\'en offusque.', exemple_key: null },
  { table_name: 'social', weight: 50, titre: 'Journal détrempé', description: 'Le journal du matin est arrivé sous la pluie, collé et illisible.', exemple_key: null },
  { table_name: 'social', weight: 25, titre: "Lettre 'Taxée'", description: 'Le facteur apporte une lettre insuffisamment affranchie. Il faut payer la taxe.', exemple_key: null },
  { table_name: 'social', weight: 25, titre: 'Quiproquo du rendez-vous', description: 'Confusion entre le Café de la Régence et le Café de la Paix. Une heure perdue.', exemple_key: null },
  { table_name: 'social', weight: 25, titre: 'Gamin des rues effronté (Gavroche)', description: 'Un gamin lance une moquerie à haute voix sur votre tenue.', exemple_key: 'gamin_rue' },
  { table_name: 'social', weight: 25, titre: 'Scène de ménage des voisins', description: 'Les cloisons sont minces, les bruits d\'assiettes brisées gâchent la matinée.', exemple_key: null },
  { table_name: 'social', weight: 5,  titre: 'Deuil dans l\'entourage', description: 'Lettre à bordure noire. Obligation d\'envoyer des condoléances.', exemple_key: null },

  // ── TECHNOLOGIE ────────────────────────────────────────────────────────
  { table_name: 'technologie', weight: 25, titre: 'Coupure des Demoiselles du Téléphone', description: 'L\'opératrice coupe ou parasite la ligne en plein appel crucial.', exemple_key: null },
  { table_name: 'technologie', weight: 25, titre: 'Pneumatique égaré', description: 'Le tube bleu est resté coincé dans les canalisations souterraines.', exemple_key: null },
  { table_name: 'technologie', weight: 25, titre: 'Ampoule électrique qui claque', description: 'La coûteuse ampoule à filament de carbone grille. Obscurité immédiate.', exemple_key: null },
  { table_name: 'technologie', weight: 5,  titre: 'Court-circuit', description: 'Étincelle derrière le tableau électrique, les plombs sautent. Ça sent le roussi.', exemple_key: null },
  { table_name: 'technologie', weight: 25, titre: 'Appareil photo voilé', description: 'Un soufflet percé a laissé passer le jour, gâchant les plaques de la veille.', exemple_key: null },
  { table_name: 'technologie', weight: 50, titre: 'Vélocipède qui déraille', description: 'La chaîne saute. Mains pleines de graisse noire indélébile.', exemple_key: null },
  { table_name: 'technologie', weight: 25, titre: 'Incident de Tramway', description: 'Panne du tramway électrique au milieu de la rue. Fin du trajet à pied sous la pluie.', exemple_key: null },

  // ── POOLS D'EXEMPLES ───────────────────────────────────────────────────
  { table_name: 'ex_lettre_anonyme', weight: 33, titre: '« On sait ce que vous manigancez le soir venu près des quais... à bon entendeur. »', description: null, exemple_key: null },
  { table_name: 'ex_lettre_anonyme', weight: 33, titre: '« Votre fortune n\'est faite que de mensonges. Le masque va bientôt tomber. »', description: null, exemple_key: null },
  { table_name: 'ex_lettre_anonyme', weight: 34, titre: '« Prenez garde à vos fréquentations actuelles, l\'ombre du scandale plane sur vous. »', description: null, exemple_key: null },

  { table_name: 'ex_parent_eloigne', weight: 25, titre: 'la tante Hortense', description: null, exemple_key: null },
  { table_name: 'ex_parent_eloigne', weight: 25, titre: 'le cousin Octave de Bourges', description: null, exemple_key: null },
  { table_name: 'ex_parent_eloigne', weight: 25, titre: "l'oncle Alphonse", description: null, exemple_key: null },
  { table_name: 'ex_parent_eloigne', weight: 25, titre: 'la jeune cousine Clotilde', description: null, exemple_key: null },

  { table_name: 'ex_facheur', weight: 33, titre: "le vieux Vicomte de Grand-Maison, sourd et obsédé par l'affaire Dreyfus", description: null, exemple_key: null },
  { table_name: 'ex_facheur', weight: 33, titre: 'Madame Pichon, la voisine du dessous, venue se plaindre des bruits de pas avant de raconter sa vie', description: null, exemple_key: null },
  { table_name: 'ex_facheur', weight: 34, titre: 'un collègue de bureau zélé venu partager ses théories sur la nouvelle ligne de métropolitain', description: null, exemple_key: null },

  { table_name: 'ex_rumeur_journal', weight: 33, titre: "une allusion à une dispute théâtrale lors d'un récent souper", description: null, exemple_key: null },
  { table_name: 'ex_rumeur_journal', weight: 33, titre: "un écho affirmant qu'un 'acteur bien connu des cercles parisiens' est au bord de la ruine", description: null, exemple_key: null },
  { table_name: 'ex_rumeur_journal', weight: 34, titre: "une note piquante sur une tenue jugée 'excentrique et de mauvais goût' portée lors d'un bal", description: null, exemple_key: null },

  { table_name: 'ex_erreur_livraison', weight: 33, titre: 'trois douzaines de corsets pour dames en soie rose', description: null, exemple_key: null },
  { table_name: 'ex_erreur_livraison', weight: 33, titre: "une caisse de douze bouteilles de 'Vin de piquette d'Algérie'", description: null, exemple_key: null },
  { table_name: 'ex_erreur_livraison', weight: 34, titre: "un ensemble de scalpels et d'outils de chirurgie d'occasion encore tachés", description: null, exemple_key: null },

  { table_name: 'ex_pli_officiel', weight: 33, titre: 'le Commissariat du quartier de la Place Vendôme (simple vérification d\'identité)', description: null, exemple_key: null },
  { table_name: 'ex_pli_officiel', weight: 33, titre: 'la Direction Générale de l\'Enregistrement et du Timbre (rectification de taxe)', description: null, exemple_key: null },
  { table_name: 'ex_pli_officiel', weight: 34, titre: 'l\'étude de Maître Cornet, notaire (histoire de succession lointaine)', description: null, exemple_key: null },

  { table_name: 'ex_gamin_rue', weight: 33, titre: "« Dites donc m'sieur/dame, vot' chapeau, on dirait une pie nicheuse ! »", description: null, exemple_key: null },
  { table_name: 'ex_gamin_rue', weight: 33, titre: '« Faut presser le pas, la patrie est en danger ! »', description: null, exemple_key: null },
  { table_name: 'ex_gamin_rue', weight: 34, titre: "« Regardez-moi cette démarche, on dirait qu'il/elle a peur de casser les pavés ! »", description: null, exemple_key: null },
];

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.tracas_table_entries (
      id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      table_name    TEXT        NOT NULL CHECK (table_name IN (
                                  'sante','logistique','social','technologie',
                                  'ex_lettre_anonyme','ex_parent_eloigne','ex_facheur',
                                  'ex_rumeur_journal','ex_erreur_livraison','ex_pli_officiel','ex_gamin_rue'
                                )),
      titre         TEXT        NOT NULL,
      description   TEXT,
      exemple_key   TEXT        CHECK (exemple_key IN (
                                  'lettre_anonyme','parent_eloigne','facheur',
                                  'rumeur_journal','erreur_livraison','pli_officiel','gamin_rue'
                                ) OR exemple_key IS NULL),
      weight        INTEGER     NOT NULL DEFAULT 10,
      is_official   BOOLEAN     NOT NULL DEFAULT false,
      status        TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
      reject_reason TEXT,
      created_by    UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      approved_by   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      approved_at   TIMESTAMPTZ
    );
  `);
  console.log('✓ Table tracas_table_entries créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_tracas_entries_status ON public.tracas_table_entries(status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_tracas_entries_table_status ON public.tracas_table_entries(table_name, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_tracas_entries_creator ON public.tracas_table_entries(created_by);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.tracas_table_entries ENABLE ROW LEVEL SECURITY;`);

  const policies = [
    {
      name: 'tracas_entries_select',
      sql: `CREATE POLICY "tracas_entries_select"
            ON public.tracas_table_entries FOR SELECT TO authenticated
            USING (status = 'approved' OR created_by = auth.uid());`,
    },
    {
      name: 'tracas_entries_insert',
      sql: `CREATE POLICY "tracas_entries_insert"
            ON public.tracas_table_entries FOR INSERT TO authenticated
            WITH CHECK (created_by = auth.uid());`,
    },
    {
      name: 'tracas_entries_update_admin',
      sql: `CREATE POLICY "tracas_entries_update_admin"
            ON public.tracas_table_entries FOR UPDATE TO authenticated
            USING (
              EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))
            );`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = 'tracas_table_entries' AND policyname = $1`,
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
    `SELECT count(*)::int AS n FROM public.tracas_table_entries WHERE is_official = true`
  );
  if (existing[0].n === 0) {
    for (const row of SEED) {
      await client.query(
        `INSERT INTO public.tracas_table_entries
           (table_name, titre, description, exemple_key, weight, is_official, status, created_by)
         VALUES ($1, $2, $3, $4, $5, true, 'approved', NULL)`,
        [row.table_name, row.titre, row.description, row.exemple_key, row.weight]
      );
    }
    console.log(`✓ ${SEED.length} entrées canon insérées (60 tracas + 22 exemples)`);
  } else {
    console.log(`  ${existing[0].n} entrées canon déjà présentes, seed ignoré`);
  }

  const { rows: counts } = await client.query(
    `SELECT table_name, count(*)::int AS n FROM public.tracas_table_entries
     GROUP BY table_name ORDER BY table_name`
  );
  console.table(counts);

  await client.end();
  console.log('\n✓ Migration tracas_table_entries terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
