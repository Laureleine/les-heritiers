// scripts/migrate_sorts_adepte_semences.js
// Insère les 5 semences Adepte du Druidisme.
// Usage : node scripts/migrate_sorts_adepte_semences.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

const SEMENCES = [
    {
        nom: 'Semence de lierre rouge',
        magie: 'Druidisme',
        niveau: 'Adepte',
        details: {
            reussite_critique: 'Les points de vie du lierre sont doublés pour déterminer combien de coups d\'armes tranchantes sont nécessaires afin de le couper.',
            ingredients: 'Une graine de lierre avalonien et du crottin d\'hippogriffe',
            fabrication: 'Enduire la graine de lierre avec du crottin d\'hippogriffe et attendre trois jours. Après cela, une pousse sortira de la graine et il faudra chanter une strophe d\'épopée en celte transformant la graine germée en arme.',
            effets: 'Lorsque la semence touchera le sol à proximité d\'un ennemi, des lianes de lierre rouge enchevêtreront ses pieds jusqu\'aux genoux et conféreront un malus de -1 aux actions impliquant un mouvement. À chaque tour, le lierre monte davantage ; le malus maximum est -5 quand la cible est presque immobilisée. Il faudra trancher ou brûler le lierre en causant 10 points de dégâts (arme tranchante ou jet de flamme SD 13 ; un échec critique signifie que le coup touche la cible). Sans arme tranchante ou flamme, le lierre se flétrira au bout de 15 minutes.',
        },
    },
    {
        nom: 'Semence de ronce curatrice',
        magie: 'Druidisme',
        niveau: 'Adepte',
        details: {
            reussite_critique: 'La semence rend directement 8 points de vie au lieu d\'1d8.',
            ingredients: 'Ronce du pays d\'hiver et pollen d\'églantine avalonienne',
            fabrication: 'Cracher sur la ronce et l\'enduire de pollen d\'églantine avalonien. L\'enterrer en récitant le poème consacré et attendre trois jours. Le troisième jour, à l\'aube, déterrer la ronce qui émet une très légère aura verte et pulsatile.',
            effets: 'Le druide applique la ronce sur la blessure. Ses épines s\'enfoncent dans la peau du blessé afin de la refermer : le blessé regagne instantanément 1d8 points de vie. Lorsque la cicatrisation est terminée, la ronce sèche et tombe d\'elle-même. Permet aussi d\'ôter les corps étrangers (comme les balles) : la ronce s\'introduit jusqu\'au matériau et le repousse, non sans causer une douleur extrême sans anesthésiant (test Ressort + CON SD 14 pour ne pas s\'évanouir pendant ME minutes).',
        },
    },
    {
        nom: 'Semence de force',
        magie: 'Druidisme',
        niveau: 'Adepte',
        details: {
            duree: 'Jusqu\'au prochain lever de soleil',
            reussite_critique: 'Bonus de +3 au lieu de +2.',
            ingredients: 'Feuille de chêne avalonien et fleurs de trèfle rouge',
            fabrication: 'Faire bouillir une poignée de fleurs de trèfle rouge pendant une journée, puis faire macérer la feuille de chêne avalonien dans le liquide obtenu. Faire sécher la feuille au soleil jusqu\'à ce que des petits piquants poussent sur cette dernière.',
            effets: 'L\'utilisateur pose la feuille de chêne enchantée sur son plexus solaire et appuie jusqu\'à ce que les piquants lui rentrent dans la peau. La feuille s\'intègre temporairement au corps et confère un bonus de +2 en Force. Ce bonus est cumulable avec la Capacité naturelle Force accrue (aucune créature naturelle ne peut avoir plus de 10 en Force). Au prochain lever de soleil, la feuille tombe d\'elle-même, jaunie et racornie.',
        },
    },
    {
        nom: 'Semence de chêne',
        magie: 'Druidisme',
        niveau: 'Adepte',
        details: {
            reussite_critique: 'Le chêne généré est sage et prodiguera des conseils avisés à ceux qui peuvent communiquer avec lui. C\'est un miracle de la Grande Mère qui deviendra objet de soin des druides et des fées proches de la nature.',
            ingredients: 'Gland et gui avalonien',
            fabrication: 'Écraser les baies du gui avalonien et recouvrir le gland de la substance obtenue. Exposer le gland sur un lit de gui avalonien au soleil pendant sept jours, puis réciter le poème consacré et cracher sur le gland.',
            effets: 'Lorsque la semence de chêne touche la terre, elle se met à pousser à une vitesse fulgurante. En cinq tours, la plante a atteint sa pleine maturité. Elle suit ensuite son cycle naturel.',
            note: 'Pour utiliser la semence de chêne dans le rituel des Portes d\'Avalon, il suffit d\'en planter deux à trois mètres de distance l\'une de l\'autre et d\'attendre sept jours.',
        },
    },
    {
        nom: 'Semence de haricot magique',
        magie: 'Druidisme',
        niveau: 'Adepte',
        details: {
            reussite_critique: 'La hauteur du haricot est augmentée de 10 mètres.',
            ingredients: 'Haricot avalonien du pays d\'été et salive de licorne',
            fabrication: 'Le druide cueille lui-même des haricots, les écusse et fait sécher les semences pendant deux jours. Il demande ensuite à une licorne de cracher dessus et récite les paroles rituelles.',
            effets: 'Au contact de la terre, le haricot pousse à une vitesse prodigieuse et atteint une hauteur de 12 mètres en 3 minutes. On peut grimper aux branches comme à une échelle ou se placer au-dessus pour être hissé. Le haricot supporte 500 kg. Le Pouvoir Main verte du sylve divise par 3 le temps de croissance, multiplie par 3 la capacité de charge et la hauteur (jusqu\'à 36 m, 46 m avec réussite critique).',
            note: 'La durée de vie est limitée : au bout de 6 heures, la plante se flétrira puis pourrira.',
        },
    },
];

async function run() {
    await client.connect();
    console.log('Connecté à la base.\n');

    for (const sort of SEMENCES) {
        const existing = await client.query(
            `SELECT id FROM public.sorts WHERE nom = $1 AND magie = $2`,
            [sort.nom, sort.magie]
        );
        if (existing.rows.length > 0) {
            console.log(`  ↩ "${sort.nom}" déjà présent, ignoré.`);
        } else {
            await client.query(`
                INSERT INTO public.sorts (nom, magie, niveau, details, is_official)
                VALUES ($1, $2, $3, $4, true)
            `, [sort.nom, sort.magie, sort.niveau, JSON.stringify(sort.details)]);
            console.log(`  ✓ "${sort.nom}" inséré.`);
        }
    }

    await client.end();
    console.log('\nMigration semences Adepte terminée.');
}

run().catch(err => { console.error(err); process.exit(1); });
