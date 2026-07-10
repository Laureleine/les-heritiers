// scripts/migrate_sorts.js
// Crée la table `sorts` et insère les sorts de Druidisme niveau Novice.
// Usage : node scripts/migrate_sorts.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const SORTS_DRUIDISME_NOVICE = [
    {
        nom: 'Philtre de veille',
        magie: 'Druidisme',
        niveau: 'Novice',
        details: {
            duree: "jusqu'au prochain coucher de soleil",
            reussite_critique: "le philtre dure une journée de plus",
            ingredients: "ronces et orties",
            fabrication: "Faire macérer des poignées de ronces et d'orties dans de l'eau salée du lever jusqu'au coucher de soleil. Pour chaque poignée macérée est produite une dose de philtre. Égoutter les ronces et les orties, les calciner et réduire le charbon ainsi obtenu en une fine poudre. Incorporer celle-ci au liquide issu de la macération ; faire chauffer jusqu'à ébullition. Réciter les paroles propitiatoires.",
            effets: "Ce philtre doit être bu à la nuit tombée. Son utilisateur ne ressent pas les effets de la fatigue pendant la nuit et le jour qui suit, et il ne subit pas les désagréments du manque de sommeil (battements de cœur, troubles de la perception, somnolence…). En revanche, il s'effondrera de sommeil au prochain coucher de soleil.",
        },
    },
    {
        nom: 'Philtre de sommeil',
        magie: 'Druidisme',
        niveau: 'Novice',
        details: {
            duree: "6 heures, sauf si le dormeur est réveillé de manière active par autrui",
            reussite_critique: "la durée est doublée",
            ingredients: "belladone, passiflore et miel",
            resistance: "physique contre le résultat du sort (ou SD 14) pour ne pas s'assoupir",
            fabrication: "Faire bouillir les fleurs de belladone et de passiflore ensemble. Ajouter à la décoction une pointe de miel pour le goût. Renforce le pouvoir soporifique et apaisant des plantes par les paroles rituelles. Le goût sucré rend ce philtre facile à dissimuler dans une pâtisserie ou dans un fruit qui en serait imbibé pendant une nuit.",
            effets: "Celui qui absorbe ce philtre commencera à s'assoupir une minute après, et dormira sur ses deux oreilles dans les trois minutes qui suivent.",
        },
    },
    {
        nom: "Philtre d'amour",
        magie: 'Druidisme',
        niveau: 'Novice',
        details: {
            duree: "jusqu'à ce que l'utilisateur se lave",
            reussite_critique: "l'utilisateur bénéficie non plus d'un bonus de +2, mais d'un bonus de +3 à toutes ses tentatives de séduction",
            ingredients: "mandragore et rose",
            fabrication: "Faire macérer les pétales d'une rose dans de l'eau. Piler les racines d'une mandragore et les incorporer à la macération. Intégrer au mélange trois larmes en prononçant le poème rituel, puis filtrer le tout.",
            effets: "Boire ce philtre rend surnaturellement attirant : il fait bénéficier d'un bonus de +2 à toute tentative de séduction. Ce bonus est cumulable avec d'autres de même nature (par exemple issus d'avantages ou d'atouts féériques).",
        },
    },
    {
        nom: 'Philtre de descendance féérique',
        magie: 'Druidisme',
        niveau: 'Novice',
        details: {
            duree: "2 heures",
            reussite_critique: "le philtre accroît considérablement les chances de fécondation",
            ingredients: "fleurs d'acacia, clous de girofle, larmes de pixie ou d'humain",
            note: "Pour obtenir des larmes de pixie, la meilleure manière est de leur raconter une histoire d'amour à fendre le cœur.",
            fabrication: "Réduire les fleurs d'acacia et clous de girofle en poudre, mélanger aux larmes et réciter les paroles sacrées au moment d'une pleine lune.",
            effets: "Quelques gouttes de ce philtre bues par une femme ou une fée avant de faire l'amour garantiront que, si elle conçoit un enfant avec un Faux-Semblant, celui-ci sera également un Faux-Semblant (de l'espèce du père ou de la mère). Un philtre équivalent élaboré avec des larmes humaines garantit que l'enfant éventuel sera humain.",
        },
    },
    {
        nom: 'Philtre de bienveillance végétale',
        magie: 'Druidisme',
        niveau: 'Novice',
        details: {
            duree: "6 heures",
            reussite_critique: "la durée est doublée",
            ingredients: "feuilles de lierre, baies de sureau",
            fabrication: "Écraser les feuilles de lierre et en retirer le jus. Mélanger celui-ci à du jus de sureau. Le mélange doit être exposé pendant une nuit à la lueur de la pleine lune, au cours de laquelle le druide répétera le poème consacré.",
            effets: "La préparation rendra la présence de la personne qui la boit très agréable à la végétation environnante. Celle-ci s'écartera sur son passage, même s'il s'agit de ronciers inextricables, et se refermera derrière elle comme si personne n'était passé, facilitant les trajets à travers les broussailles, sous-bois ou jungles comme si elle marchait sur un chemin pédestre. Si un test de Survie est requis, un bonus reflétant cette collaboration des plantes sera fixé par le Docte.",
        },
    },
    {
        nom: 'Philtre tord-boyaux',
        magie: 'Druidisme',
        niveau: 'Novice',
        details: {
            duree: "4 heures",
            reussite_critique: "la Signature est augmentée de 2",
            ingredients: "baies de houx et feuilles d'hortensia",
            voies_administration: "ingestion",
            toxicite: 5,
            virulence: 15,
            signature: 15,
            temps_fabrication: "une heure avant l'aube",
            complexite: "n.a.",
            fabrication: "Envelopper les baies de houx dans les feuilles d'hortensia, écraser le tout et en extraire le jus. Diluer le liquide dans sept gouttes de rosée et réciter les paroles consacrées afin que le philtre soit presque indétectable et que son goût normalement très amer devienne douceâtre.",
            effets: "Le philtre tord-boyaux est un liquide translucide au goût douceâtre, aisément dissimulé dans un plat à la saveur prononcée. La substance ne perd pas ses effets lors d'une éventuelle cuisson. Ingéré, le poison commence à faire effet au cours de la digestion (deux heures). Il cause des maux de ventre, des vomissements et des diarrhées si aigus que celui qui l'ingère se tordra de douleur pendant 4 heures. En cas d'échec à un test de Ressort (Endurer) + CON SD 15, la victime perdra Toxicité + ME points de vie en plus d'un malus de -5 à toutes ses actions. En cas de réussite, ce malus est réduit à -2.",
        },
    },
];

async function run() {
    await client.connect();
    console.log('Connecté à la base.\n');

    // 1. Créer la table
    await client.query(`
        CREATE TABLE IF NOT EXISTS public.sorts (
            id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nom         TEXT NOT NULL,
            magie       TEXT NOT NULL,
            niveau      TEXT NOT NULL CHECK (niveau IN ('Novice', 'Adepte', 'Maître', 'Grand Maître')),
            branche     TEXT,
            details     JSONB NOT NULL DEFAULT '{}',
            is_official BOOLEAN NOT NULL DEFAULT true,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
            UNIQUE (nom, magie)
        );
    `);
    console.log('✓ Table sorts créée (ou déjà existante).');

    // 2. RLS
    await client.query(`ALTER TABLE public.sorts ENABLE ROW LEVEL SECURITY;`);
    await client.query(`
        DO $$ BEGIN
            IF NOT EXISTS (
                SELECT 1 FROM pg_policies WHERE tablename = 'sorts' AND policyname = 'Lecture publique sorts'
            ) THEN
                CREATE POLICY "Lecture publique sorts" ON public.sorts
                    FOR SELECT TO authenticated USING (true);
            END IF;
        END $$;
    `);
    console.log('✓ RLS activé — lecture authentifiée.');

    // 3. Insérer les sorts
    for (const sort of SORTS_DRUIDISME_NOVICE) {
        const existing = await client.query(
            `SELECT id FROM public.sorts WHERE nom = $1 AND magie = $2`,
            [sort.nom, sort.magie]
        );
        if (existing.rows.length > 0) {
            console.log(`  ↩ "${sort.nom}" déjà présent.`);
        } else {
            await client.query(`
                INSERT INTO public.sorts (nom, magie, niveau, details, is_official)
                VALUES ($1, $2, $3, $4, true)
            `, [sort.nom, sort.magie, sort.niveau, JSON.stringify(sort.details)]);
            console.log(`  ✓ "${sort.nom}" inséré.`);
        }
    }

    await client.end();
    console.log('\nMigration sorts terminée.');
}

run().catch(err => { console.error(err); process.exit(1); });
