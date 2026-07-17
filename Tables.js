// =============================================================================
// TABLES DE DONNÉES ET DE TEXTE (PARIS 1899)
// Fichier : pnjTables.js
// =============================================================================

// --- FONCTIONS UTILITAIRES DE TIRAGE ---

// Tirage simple dans un tableau
export function tirage(tableau) {
  if (!tableau || tableau.length === 0) return null;
  return tableau[Math.floor(Math.random() * tableau.length)];
}

// Tirage pondéré basé sur une propriété "weight"
export function tiragePondere(tableau) {
  let totalWeight = tableau.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  for (let item of tableau) {
    if (random < item.weight) return item;
    random -= item.weight;
  }
  return tableau[tableau.length - 1];
}

// --- DONNÉES DE BASE (SEXES & GENRES) ---

export const SEXES = [
  { id: 'masculin', label: 'Masculin' },
  { id: 'feminin', label: 'Féminin' }
];

export const GENRES = [
  { id: 'conformiste', label: 'Conformiste' },
  { id: 'non_conforme_masc', label: 'Non-conforme (Masculin)' },
  { id: 'non_conforme_fem', label: 'Non-conforme (Féminin)' },
  { id: 'androgyne', label: 'Androgyne' }
];

// Pool Principal : Démographie parisienne de 1899
export const DEMOGRAPHIE_PARIS_1899 = [
  { id: 'francaise',        label: 'Française',        weight: 80 }, 
  { id: 'italienne',        label: 'Italienne',        weight: 5 },  
  { id: 'britannique',      label: 'Britannique',      weight: 4 },
  { id: 'russe',            label: 'Russe',            weight: 3 },  
  { id: 'austro_hongroise', label: 'Austro-Hongroise', weight: 3 },
  { id: 'allemande',        label: 'Allemande',        weight: 2 },
  { id: 'americaine',       label: 'Américaine',       weight: 2 },  
  { id: 'autre',            label: 'Reste du monde (Central Casting)', weight: 1 }
];

// Table 102A : Modificateurs de Tech Level basés sur d100 + Year (+99)
export const TABLE_102A_TM_PLUS = [
  { min: 0,   max: 30,  plus: 0 },
  { min: 31,  max: 50,  plus: 1 },
  { min: 51,  max: 65,  plus: 2 },
  { min: 66,  max: 80,  plus: 3 },
  { min: 81,  max: 130, plus: 4 },
  { min: 131, max: 198, plus: 5 },
  { min: 199, max: 210, plus: 6 },
  { min: 211, max: 999, plus: 7 }
];

// Table 102B : Correspondances Tech Level Final et Données d'Éducation
export const TABLE_102B_TECH_LEVELS = {
  stone:       { id: 'stone',       label: 'Âge de Pierre',      points: 4,  literacy: 5 },
  bronze:      { id: 'bronze',      label: 'Âge du Bronze',      points: 6,  literacy: 20 },
  iron:        { id: 'iron',        label: 'Âge du Fer',         points: 8,  literacy: 30 },
  medieval:    { id: 'medieval',    label: 'Moyen-Âge',          points: 4,  literacy: 10 },
  renaissance: { id: 'renaissance', label: 'Renaissance',        points: 10, literacy: 35 },
  industrial:  { id: 'industrial',  label: 'Ère Industrielle',   points: 10, literacy: 40 },
  engineering: { id: 'engineering', label: 'Ère de l\'Ingénierie',points: 12, literacy: 60 }
};

// Table 102C : Cultures basées sur d100 + TekMod
export const TABLE_102C_CULTURES = [
  { min: 0,   max: 5,   id: 'degenerate',   label: 'Dégénérée',       cuMod: 0,  survie: 6, rollBonus: () => Math.floor(Math.random() * 4) + 1 },
  { min: 6,   max: 12,  id: 'primitive',    label: 'Primitive',        cuMod: 0,  survie: 7, rollBonus: () => Math.floor(Math.random() * 4) + 1 },
  { min: 13,  max: 15,  id: 'retrogressive',label: 'Rétrograde',       cuMod: 2,  survie: 6, rollBonus: () => Math.floor(Math.random() * 4) + 1 },
  { min: 16,  max: 20,  id: 'nomadic',      label: 'Nomade',           cuMod: 6,  survie: 7, rollBonus: () => (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) },
  { min: 21,  max: 30,  id: 'barbaric',     label: 'Barbare',          cuMod: 2,  survie: 6, rollBonus: () => Math.floor(Math.random() * 4) + 1 },
  { min: 31,  max: 60,  id: 'developing',   label: 'En développement',  cuMod: 6,  survie: 6, rollBonus: () => (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) },
  { min: 61,  max: 101, id: 'dynamic',      label: 'Dynamique',         cuMod: 10, survie: 7, rollBonus: () => (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) },
  { min: 102, max: 105, id: 'stagnant',     label: 'Stagnante',         cuMod: 4,  survie: 4, rollBonus: () => Math.floor(Math.random() * 6) + 1 },
  { min: 106, max: 999, id: 'decadent',     label: 'Décadente',         cuMod: 8,  survie: 5, rollBonus: () => (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) }
];

// Table 103 : Statut Social familial basé sur d100 + CuMod
export const TABLE_103_SOCIAL = [
  { min: 0,   max: 5,   id: 'destitute',   label: 'Misérable / SDF', solMod: 0, edModifier: -10, moneyMod: 0.1 },
  { min: 6,   max: 15,  id: 'poor',        label: 'Pauvre',           solMod: 2, edModifier: -4,  moneyMod: 0.5 },
  { min: 16,  max: 70,  id: 'comfortable', label: 'Confortable',      solMod: 4, edModifier: 0,   moneyMod: 1.0 },
  { min: 71,  max: 90,  id: 'well_to_do',  label: 'Aisé',              solMod: 5, edModifier: 4,   moneyMod: 1.5 },
  { min: 91,  max: 98,  id: 'wealthy',     label: 'Fortune / Riche',  solMod: 7, edModifier: 8,   moneyMod: 3.0 }, // Cascade interne gérée
  { min: 99,  max: 999, id: 'nobility',    label: 'Noblesse',         solMod: 5, edModifier: 6,   moneyMod: 1.5 }
];

// --- TABLE 101 : DÉMOGRAPHIE PARISIENNE ET CENTRAL CASTING ---

export const DEMOGRAPHIE_PARIS_1899 = [
  { id: 'francaise',        label: 'Française',        weight: 80 }, 
  { id: 'italienne',        label: 'Italienne',        weight: 5 },  
  { id: 'britannique',      label: 'Britannique',      weight: 4 },
  { id: 'russe',            label: 'Russe',            weight: 3 },  
  { id: 'austro_hongroise', label: 'Austro-Hongroise', weight: 3 },
  { id: 'allemande',        label: 'Allemande',        weight: 2 },
  { id: 'americaine',       label: 'Américaine',       weight: 2 },  
  { id: 'autre',            label: 'Reste du monde (Central Casting)', weight: 1 }
];


// --- TABLE 105B : LIEUX DE NAISSANCE EXOTIQUES ---

export const LIEUX_EXOTIQUES_1899 = [
  { id: 'prison',        label: 'Dans une cellule de prison de la Sûreté', biMod: 10 },
  { id: 'labo',          label: 'Dans le laboratoire secret d\'un savant excentrique', biMod: 20 },
  { id: 'temple_bon',    label: 'Dans l\'enceinte sacrée d\'une église honorable', biMod: 15 },
  { id: 'entreprise',    label: 'Dans les bureaux feutrés d\'une grande manufacture', biMod: 5 },
  { id: 'ruelle',        label: 'Sur les pavés d\'une ruelle sombre de Paris', biMod: 5 },
  { id: 'lupanar',       label: 'Dans les salons discrets d\'une maison close', biMod: 5 },
  { id: 'palais',        label: 'Dans un palais d\'apparat ou une ambassade', biMod: 5 },
  { id: 'theatre',       label: 'Derrière les rideaux d\'un théâtre de boulevard', biMod: 10 },
  { id: 'mystique',      label: 'Dans un lieu réputé pour sa haute activité éthérique', biMod: 10 },
  { id: 'cabaret',       label: 'Dans l\'arrière-salle d\'un cabaret montmartrois', biMod: 5 },
  { id: 'egouts',        label: 'Au fond des galeries des égouts de Paris', biMod: 10 },
  { id: 'repaire',       label: 'Dans le repaire clandestin d\'une bande de malfrats', biMod: 5 },
  { id: 'monstres',      label: 'En présence fortuite d\'une créature indicible', biMod: 15 },
  { id: 'temple_maudit', label: 'Dans le sanctuaire secret d\'un culte interdit', biMod: 20 }
];

// Table 106A & 106B : Quantité d'événements inhabituels à la naissance
export const TABLE_106_QUANTITE = [
  { min: 0,   max: 50,  nombre: 0, forceBonus20: false },
  { min: 51,  max: 75,  nombre: 1, forceBonus20: false },
  { min: 76,  max: 76,  nombre: 1, forceBonus20: true },
  { min: 77,  max: 94,  nombre: 2, forceBonus20: false },
  { min: 95,  max: 100, nombre: 3, forceBonus20: true },
  { min: 101, max: 124, nombre: 4, forceBonus20: true },
  { min: 125, max: 999, nombre: 5, forceBonus20: true }
];

// Table 106B & 106C : Les Événements de Naissance Inhabituels
export const TABLE_106_EVENEMENTS_TEXTES = [
  { min: 0,   max: 4,   id: 'doute_paternalite', texte: "Le père biologique est convaincu que l'enfant n'est pas le sien." },
  { min: 5,   max: 7,   id: 'meteo_impossible',  texte: "Phénomène météo saisonnièrement impossible le jour de la naissance (ex: tempête de neige en plein juillet)." },
  { min: 8,   max: 8,   id: 'eclipse',           texte: "Éclipse totale ou assombrissement mystérieux du ciel au moment exact de l'accouchement." },
  { min: 9,   max: 10,  id: 'fonds_anonyme',     texte: "Un fonds d'épargne anonyme a été ouvert pour le bébé. L'argent de départ est doublé.", moneyModMult: 2.0 },
  { min: 11,  max: 16,  id: 'deces_notable',     texte: "Une personnalité notable meurt au moment exact de la naissance. Certains murmurent une réincarnation." },
  { min: 17,  max: 20,  id: 'presse_locale',     texte: "La naissance fait grand bruit dans la presse locale en raison de ses conditions rocambolesques." },
  { min: 21,  max: 21,  id: 'chirurgien_genie',  texte: "Accouchement supervisé par un chirurgien de génie. (+5 en Chance)", bonusLuck: 5 },
  { min: 22,  max: 23,  id: 'mort_mere',         texte: "La mère biologique meurt pendant l'accouchement. Marque profondément la dynamique du foyer." },
  { min: 24,  max: 28,  id: 'complications',     texte: "Complications graves lors de la délivrance. L'enfant frôle la mort mais survit. (+1 en Constitution)", bonusCon: 1 },
  { min: 29,  max: 29,  id: 'mort_jumeau',       texte: "Mort tragique d'un jumeau pendant le travail. Un secret de famille très lourd." },
  { min: 30,  max: 34,  id: 'jumeau_separe',     texte: "Naissance d'un jumeau identique secret, immédiatement séparé à la naissance pour des motifs obscurs." },
  { min: 35,  max: 48,  id: 'malediction',       texte: "Un vieil occultiste déclare le nouveau-né frappé par une ancienne malédiction familiale.", flagCurse: true },
  { min: 49,  max: 49,  id: 'secret_mj',         texte: "Secret de naissance majeur concernant la nature métaphysique du bébé, gardé sous clé par le MJ.", flagGmSecret: true },
  { min: 50,  max: 62,  id: 'sans_registre',     texte: "Aucun registre paroissial ou d'état civil n'a consigné la naissance. Le PNJ n'existe pas administrativement." },
  { min: 63,  max: 81,  id: 'marque_distinctive',texte: "Né avec une marque de naissance distinctive et mystérieuse évoquant un symbole occulte sur le corps." },
  { min: 82,  max: 82,  id: 'anomalie_physique', texte: "", poolAnomalies: [
    "Empreintes de pas qui ne coïncident pas avec la direction marchée (glitch éthérique).",
    "Peau qui reflète la lumière à l'envers selon l'inclinaison des rayons solaires.",
    "Ombre portée qui ne correspond jamais tout à fait à la silhouette réelle du PNJ."
  ]},
  { min: 83,  max: 120, id: 'cadeau_etranger',   texte: "Un mystérieux étranger dépose un présent de grande valeur dans le berceau avant de s'évanouir dans la nature." },
  { min: 121, max: 999, id: 'horror_birth',      texte: "", poolHorreur: [
    "Avait un jumeau à la naissance, mais celui-ci s'est enfui par la fenêtre dès les premières minutes de vie.",
    "Les animaux domestiques et les chevaux à un kilomètre à la ronde ont péri d'effroi le jour de sa naissance.",
    "Des spectres ou esprits errants invisibles ont entouré le berceau le soir de l'accouchement.",
    "Seul survivant inexpliqué d'un désastre mystique ou d'un incendie ayant rasé sa clinique de naissance.",
    "Reçoit une lettre anonyme cachetée prédisant un drame à chacun de ses futurs anniversaires."
  ]}
];

// Table 107A : Répartition et configuration professionnelle des parents
export const TABLE_107A_PARENTS_METIER = [
  { min: 1,  max: 12, label: "Le chef de famille possède une seule occupation professionnelle à plein temps." },
  { min: 13, max: 14, label: "Le chef de famille cumule un emploi principal et un emploi de secours secondaire." },
  { min: 15, max: 16, label: "Le chef de famille ne travaille pas, c'est l'autre parent qui subvient aux besoins." },
  { min: 17, max: 18, label: "Les deux parents travaillent activement à plein temps pour subvenir aux besoins." },
  { min: 19, max: 999, label: "Pas d'occupation apparente. L'argent semble pourtant mystérieusement disponible." }
];

// --- TABLE 107B : SECRETS ET NOTABILITÉ DES PARENTS ---
export const SECRETS_PARENTS_CC = [
  { id: 'trait',    label: "Marqué par un trait de tempérament extrême ou une excentricité." },
  { id: 'birth',    label: "A connu lui-même une naissance entourée de mystère." },
  { id: 'hobby',    label: "Voue son existence à une collection ou un passe-temps dévorant." },
  { id: 'item',     label: "Détient un artefact ou un héritage ancien jalousement gardé." },
  { id: 'exotic',   label: "A survécu autrefois à un événement métaphysique inexpliqué." },
  { id: 'curse',    label: "Frappé par une névrose ou une obsession psychologique lourde." },
  { id: 'identity', label: "Dissimule une double identité secrète dans les salons de Paris." },
  { id: 'patron',   label: "Rend des comptes en secret à un puissant commanditaire clandestin." },
  { id: 'veteran',  label: "Vétéran des campagnes coloniales ou de la guerre de 1870." },
  { id: 'enemy',    label: "Poursuivi par la rancune d'un ennemi mortel ou d'un rival." }
];

// Table 208 : Chronologie de la Jeunesse (Commune Enfance / Adolescence)
export const TABLE_208_CHRONO_JEUNESSE = [
  { min: 0,  max: 2,  bracket: 'R', label: "Conflit ou troubles politiques impactant le foyer. La famille s'implique dans des soulèvements parisiens.", typeAction: 'guerre_civile' },
  { min: 3,  max: 3,  bracket: 'L', label: "Trouve un objet étrange ou une relique oubliée dans des ruines de la capitale.", typeAction: 'relique' },
  { min: 4,  max: 4,  bracket: 'D', label: "Manque l'école de façon répétée. Perte d'opportunités intellectuelles.", typeAction: 'ecole_buissonniere' },
  { min: 5,  max: 5,  bracket: 'D', label: "Glisse vers le milieu criminel.", typeAction: 'evenement_genre' },
  { min: 6,  max: 7,  bracket: null, label: "", typeAction: 'drame_ou_miracle' }, // Aiguillage 50/50
  { min: 8,  max: 8,  bracket: 'N', label: "", typeAction: 'table_209_specifique' }, // Cascade vers la table 209
  { min: 9,  max: 9,  bracket: 'N', label: "Entre en apprentissage précoce pour assimiler le gagne-pain professionnel de ses parents.", typeAction: 'apprentissage' },
  { min: 10, max: 10, bracket: 'R', label: "Fugue du domicile familial et vit d'expédients dans Paris pendant plusieurs mois.", typeAction: 'fugue' },
  { min: 11, max: 11, bracket: 'R', label: "Rencontre ou expérience spirituelle marquante lors d'une veillée ésotérique clandestine.", typeAction: 'spiritisme' },
  { min: 12, max: 13, bracket: 'L', label: "Dynamique de foyer stricte mais saine. Les tuteurs soutiennent ses ambitions.", typeAction: 'foyer_sain' },
  { min: 14, max: 15, bracket: 'L', label: "Reçoit une dotation financière anticipée (Argent de poche augmenté de +25%).", typeAction: 'dotation' },
  { min: 16, max: 18, bracket: 'R', label: "Bouleversement économique. La famille doit déménager et changer de quartier à Paris.", typeAction: 'demenagement' },
  { min: 19, max: 999, bracket: 'L', label: "Éducation mondaine. Fréquente les grands salons littéraires ou scientifiques de la rive gauche.", typeAction: 'salons' }
];

// Table 209 : Les Jets Spécifiques de Période (Enfance vs Adolescence)
export const TABLE_209_SPECIALE = {
  enfance: [
    { min: 1, max: 2, label: "Développe un attachement maladif envers une vieille relique d'enfance mécanique qu'il ne quitte jamais." },
    { min: 3, max: 4, label: "Amitié fusionnelle avec un animal de gouttière parisien qui semble le guider." },
    { min: 5, max: 6, label: "Témoin direct d'un incident mystérieux et inattendu lié aux forces secrètes de l'univers." }
  ],
  adolescence: [
    { min: 1, max: 2, label: "Décroche une bourse d'excellence académique grâce à des dispositions mémorielles précoces." },
    { min: 3, max: 4, label: "S'éprend d'un amour de jeunesse secret qui influencera sa philosophie future." },
    { min: 5, max: 6, label: "Se fait embrigader temporairement dans un club politique clandestin ou une faction d'étudiants radicaux." }
  ]
};

// --- TABLE 414 : SPÉCIALISATIONS PROFESSIONNELLES DE GENRE ---

export const TABLES_414_GENRES_1899 = {
  horror: [
    { id: 'occult_investigator', labelM: 'Enquêteur occulte', labelF: 'Enquêteuse occulte' },
    { id: 'psychic',            labelM: 'Médium professionnel', labelF: 'Voyante en vogue' },
    { id: 'cult_leader',        labelM: 'Meneur de cercle ésotérique', labelF: 'Grande prêtresse de coven' },
    { id: 'horror_writer',      labelM: 'Écrivain de romans d\'épouvante', labelF: 'Autrice de feuilletons d\'épouvante' },
    { id: 'weird_scientist',    labelM: 'Savant aliéniste (sciences éthériques)', labelF: 'Savante neurologue' },
    { id: 'exterminator',       labelM: 'Exterminateur de nuisibles insolites', labelF: 'Exterminatrice de nuisibles' }
  ],
  espionage: [
    { id: 'secret_agent',      nom: 'Agent du Cabinet Noir / Services de renseignement' },
    { id: 'private_detective',  nom: 'Détective privé (Cabinet de filatures et de moeurs)' },
    { id: 'company_man',        nom: 'Officier de liaison du Deuxième Bureau' },
    { id: 'cryptographe',       nom: 'Chiffreur diplomatique des Ambassades' }
  ],
  pulp: [
    { id: 'explorateur',     nom: 'Explorateur de contrées lointaines et de ruines' },
    { id: 'aviateur',        nom: 'Aéronaute / Pilote de ballon dirigeable' },
    { id: 'justicier_ombre', nom: 'Franc-tireur de l\'ombre / Justicier masqué' },
    { id: 'ingenieur_vapeur',nom: 'Ingénieur mécanicien de prototypes à vapeur' }
  ]
};


// --- TABLES 520 & 521 : CAUSES TRAGIQUES & MIRACLES ---

export const CAUSES_TRAGIQUES_1899 = [
  { id: 1, label: "un accident d'atelier totalement inexplicable" },
  { id: 2, label: "un terrible incendie de quartier" },
  { id: 3, label: "une maladie virulente (phtisie, variole ou choléra)" },
  { id: 4, label: "les machinations d'un ancien associé malveillant" },
  { id: 5, label: "les plans machiavéliques d'une figure de l'ombre" },
  { id: 6, label: "une explosion accidentelle de chaudière ou d'usine à gaz" },
  { id: 7, label: "une escarmouche lors d'une émeute ouvrière" },
  { id: 8, label: "un accident de transport (fiacre, omnibus ou déraillement)" }
];


// --- TABLE 523 SUBTABLES : ARBORESCENCE DE L'HORREUR ---

export const SUBTABLES_HORREUR_1899 = {
  lieux: [
    "un sous-sol condamné de l'Opéra", "les combles poussiéreux d'un vieux théâtre", 
    "un hôtel particulier abandonné de la rive gauche", "un entrepôt désaffecté près de la Seine", 
    "un terrain vague brumeux de Montmartre", "une catacombe oubliée sous les égouts"
  ],
  situations: [
    "Une silhouette dérangeante et mouvante était gravée à même la pierre.",
    "Une odeur persistante d'éther et de décomposition s'exhalait du sol.",
    "Des murmures et des voix désincarnées résonnaient dans les courants d'air.",
    "La température a chuté sous le point de congélation en quelques instants.",
    "L'ombre du personnage ne correspondait plus du tout à sa posture physique.",
    "Les chevaux et les animaux refusaient catégoriquement d'approcher de la zone."
  ],
  objetsPossedes: [
    "un phonographe d'Edison qui s'active seul", "un vieux miroir au tain terni", 
    "un automate en étain au regard fixe", "une montre à gousset qui tourne à l'envers", 
    "un journal intime rédigé dans une langue inconnue"
  ],
  secretsVoisins: [
    "expérimentait secrètement sur le galvanisme et la réanimation.",
    "était en réalité une entité ancienne dissimulée sous des traits humains.",
    "dirigeait une société ésotérique menant des sacrifices clandestins.",
    "cherchait à ouvrir une brèche vers un continuum éthérique instable."
  ]
};


// --- TABLE 605 : MARQUES ET TICS PHYSIQUES ---

export const POOL_TRAITS_PHYSIQUES_1899 = [
  { id: 'cicatrice_duel', texte: "Une fine cicatrice sur la joue, souvenir d'un duel à l'épée au bois de Boulogne." },
  { id: 'boiterie',        texte: "Une boiterie légère, l'obligeant à s'appuyer sur une canne à pommeau ciselé." },
  { id: 'tic_monocle',     texte: "Un tic à l'œil droit, qu'il masque en ajustant fréquemment son monocle." },
  { id: 'gousset',         texte: "Manipule machinalement la chaîne de sa montre à gousset lorsqu'il est nerveux." },
  { id: 'regard_fixe',     texte: "Un regard fixe et perçant, clignant très rarement des yeux." },
  { id: 'teint_pale',      texte: "Un teint d'une pâleur d'albâtre, typique des habitués des salons d'opium." },
  { id: 'voix_rauque',     texte: "Une voix sourde et éraillée, causée par l'abus de cigares de caporal." },
  { id: 'doigt_manquant',  texte: "La dernière phalange de l'auriculaire manquante suite à un accident mécanique." }
];


// --- TABLES 701 & 702 : PSYCHOLOGIE (VICES, VERTUS, TROUBLES) ---

export const TRAITS_PSYCHOLOGIQUES_1899 = {
  vertus: [
    "Altruiste : Prêt à risquer son rang pour défendre les miséreux des bas-fonds.",
    "Stoïque : Fait preuve d'un sang-froid imperturbable en toutes circonstances.",
    "Code d'honneur : Respect absolu de la parole donnée et des règles de bienséance."
  ],
  vices: [
    "Arrogant : Méprise ouvertement les classes sociales laborieuses et la plèbe.",
    "Vénal : Prêt à vendre un secret d'État ou une sentence pour quelques louis d'or.",
    "Joueur : Fréquente les tripots de Montmartre et accumule les dettes d'honneur.",
    "Suspicieux : Convaincu que la Sûreté ou des espions surveillent ses moindres faits et gestes."
  ],
  exotiques: [
    "Phobie des Miroirs : Refuse de croiser son reflet de peur d'y déceler une anomalie.",
    "Obsession du Temps : Vérifie compulsivement l'heure à sa montre toutes les deux minutes.",
    "Amnésie partielle : Des pans entiers de son séjour à l'asile ont été gommés de sa mémoire.",
    "Monomanie : Persuadé qu'un réseau ésotérique clandestin guide le tracé du métropolitain."
  ]
};


// --- TABLES 800's : ÉQUIPEMENTS SIGNATURES ---

export const EQUIPEMENTS_SIGNATURE_1899 = [
  { id: 'canne_epee',       nom: "Une canne-épée en bois de malacca avec pommeau d'argent." },
  { id: 'revolver',         nom: "Un revolver de poche de type Saint-Étienne 8mm dissimulé sous la veste." },
  { id: 'laissez_passer',   nom: "Un sauf-conduit officiel portant le sceau de la Préfecture de Police." },
  { id: 'trousse_medicale', nom: "Une trousse d'aliéniste contenant des fioles d'éther et du laudanum." },
  { id: 'grimoire',         nom: "Un carnet de cuir noir contenant des notes cryptées sur les fluides éthériques." },
  { id: 'monocle_optique',  nom: "Un monocle à lentille de quartz taillée pour filtrer les manifestations invisibles." }
];

// --- HOBBIES GÉNÉRIQUES (FALLBACKS) ---
export const TABLES_REEL = {
  hobbies: [
    "La collection de papillons ou d'insectes rares.",
    "L'écriture de poèmes ou de pièces de boulevard.",
    "L'étude de l'archéologie et des civilisations disparues.",
    "La pratique de l'escrime ou de la canne de combat.",
    "Le spiritisme et la manipulation des tables tournantes.",
    "La photographie amateur au gélatino-bromure d'argent."
  ]
};

// =============================================================================
// TOUTES LES TABLES DE CONFIGURATION CENTRAL CASTING (PARIS 1899)
// Fichier : pnjTables.js
// =============================================================================

export const TABLE_104A_LEGITIMACY = [
  { min: 1,  max: 18, legitime: true,  note: "" },
  { min: 19, max: 20, legitime: false, note: "Naissance hors mariage. Marquise sociale difficile pour l'époque." }
];

export const TABLE_104B_FOYER = [
  { min: 1,  max: 7,  type: "parents",     label: "Élevé par ses deux parents" },
  { min: 8,  max: 10, type: "solo",        label: "Élevé par un parent unique" },
  { min: 11, max: 11, type: "creche",      label: "Élevé dans une crèche communautaire" },
  { min: 12, max: 12, type: "etat",        label: "Élevé dans un centre d'État" },
  { min: 13, max: 13, type: "oncle_tante", label: "Élevé par un Oncle et une Tante" },
  { min: 14, max: 14, type: "fratrie",     label: "Élevé par sa fratrie" },
  { min: 15, max: 15, type: "grands_parents", label: "Élevé par ses Grands-parents" },
  { min: 16, max: 16, type: "tuteur",      label: "Élevé par un Tuteur ou Gardien légal" },
  { min: 17, max: 17, type: "rue",         label: "Aucun proche connu. Livré à lui-même dans les rues dès l'enfance.", solMod: 0, statut: "Misérable / SDF", bonusSurvieUrban: 3 },
  { min: 18, max: 18, type: "orphelinat",  label: "Élevé dans un Orphelinat public ou religieux", solModLimit: 2, statut: "Pauvre" },
  { min: 19, max: 20, type: "complexe",    label: "Famille élargie ou situation complexe avec tuteurs multiples" }
];

export const TABLE_105A_LIEU_BASE = [
  { min: 1,  max: 1,  id: 'champ',     label: "En plein champ, à découvert", biMod: 5 },
  { min: 2,  max: 2,  id: 'foret',     label: "Au cœur d'une forêt sauvage", biMod: 5 },
  { min: 3,  max: 4,  id: 'grange',    label: "Dans une grange ou un bâtiment agricole", biMod: 5 },
  { min: 5,  max: 7,  id: 'domicile',  label: "Au domicile de la famille", biMod: 0 },
  { min: 8,  max: 8,  id: 'combine',   label: "Lieu combiné étrange", biMod: 0 }, // Géré par cascade
  { min: 9,  max: 9,  id: 'bassin',    label: "Dans un bassin (accouchement naturel)", biMod: 5 },
  { min: 10, max: 11, id: 'etranger',  label: "En terre étrangère", biMod: 5 },
  { min: 12, max: 17, id: 'hopital',   label: "Dans un hôpital civil ordinaire de la ville", biMod: 0 },
  { min: 18, max: 19, id: 'vehicule',  label: "Dans un véhicule en mouvement", biMod: 5 },
  { min: 20, max: 999, id: 'exotique', label: "Lieu exotique de Central Casting", biMod: 0 } // Géré par cascade
];

export const TABLE_210_EDUCATION = [
  { min: 0,   max: 22, label: "Pas d'éducation formelle / Autodidacte complet", cout: 1, bonusEd: 0 },
  { min: 23,  max: 25, label: "École des métiers / Apprentissage technique de terrain", cout: 1, bonusEd: () => Math.floor(Math.random() * 4) + 1 },
  { min: 26,  max: 33, label: "Éducation typique / Obtention du Certificat d'études", cout: 2, bonusEd: () => (Math.floor(Math.random() * 4) + 1) * 2 },
  { min: 34,  max: 34, label: "Académie Militaire Nationale (Saint-Cyr ou Navale)", cout: 2, bonusEd: () => Math.floor(Math.random() * 4) + 5, forceMilitaire: true },
  { min: 35,  max: 999, label: "Éducation supérieure de prestige (Sorbonne, Sciences Po...)", cout: 3, bonusEd: () => (Math.floor(Math.random() * 6) + 1) * 3 }
];

export const TABLE_211_ADULTHOOD = [
  { min: 0,  max: 11, bracket: 'N', label: "Incapable de vivre de sa carrière initiale, il a dû développer un second métier d'expédients dans Paris." },
  { min: 12, max: 12, bracket: 'R', label: "Drame passionnel d'envergure ou rupture brutale des fiançailles le soir des noces." },
  { min: 13, max: 14, bracket: 'R', label: "Enrôlement forcé ou conscription volontaire dans l'armée française face aux tensions coloniales.", forceSoldat: true },
  { min: 15, max: 15, bracket: 'R', label: "Rencontre impromptue ou face-à-face de témoin avec un grand criminel ou une figure occulte de la capitale." },
  { min: 16, max: 17, bracket: 'N', label: "Pris d'une crise de wanderlust, il plaque son quotidien pour voyager à l'étranger avant de revenir s'ancrer à Paris." },
  { min: 18, max: 18, bracket: 'R', label: "Prend fait et cause dans une manifestation d'envergure, une grève ouvrière ouvrant sur des heurts avec la troupe." },
  { min: 19, max: 22, bracket: 'L', label: "Sauve héroïquement la vie d'un notable ou d'un inconnu influent au milieu des boulevards." },
  { min: 23, max: 26, bracket: 'R', label: "Événement charnière lié aux intrigues de l'ombre.", declencheGenre: true },
  { min: 27, max: 30, bracket: 'D', label: "Grave accident industriel ou de transport lui laissant une séquelle mémorable." },
  { min: 31, max: 999, bracket: 'N', label: "Hérite de titres d'action ou de dividendes d'une puissante manufacture industrielle (télégraphie ou chemins de fer)." }
];

// Table 419B : Degré d'intérêt du Hobby
export const TABLE_419B_INTERET_HOBBY = [
  { min: 1,  max: 4,  label: 'Casual (Occasionnel)', mod: -1, obsession: false },
  { min: 5,  max: 12, label: 'Sporadique',           mod: 0,  obobsession: false },
  { min: 13, max: 19, label: 'Dévoué',               mod: 1,  obobsession: false },
  { min: 20, max: 999,label: 'Passion Obsessive (Consuming Passion)', mod: 2, obsession: true }
];

// Table 601A : Éclatement des tailles par genre en 1899
export const TABLE_601A_TAILLES = [
  { min: 1,  max: 3,  feminin: 144, masculin: 154 },
  { min: 4,  max: 8,  feminin: 149, masculin: 159 },
  { min: 9,  max: 14, feminin: 154, masculin: 164 },
  { min: 15, max: 18, feminin: 158, masculin: 168 },
  { min: 19, max: 999,feminin: 164, masculin: 174 }
];

// Table 601B : Gabarits et modificateurs de poids
export const TABLE_601B_GABARITS = [
  { min: 1,  max: 3,  label: "Tranchant / Maigre", poidsMod: -10 },
  { min: 4,  max: 7,  label: "Svelte / Mince",     poidsMod: -4 },
  { min: 8,  max: 14, label: "Moyen / Proportionné",poidsMod: 0 },
  { min: 15, max: 18, label: "Robuste / Trapu",    poidsMod: 8 },
  { min: 19, max: 999,label: "Corpulent / Fort",   poidsMod: 18 }
];

// Table 602 : Couleur des yeux
export const TABLE_602_YEUX = [
  { min: 1,  max: 40, label: "Marron foncé" },
  { min: 41, max: 65, label: "Bleu azur" },
  { min: 66, max: 85, label: "Vert noisette" },
  { min: 86, max: 95, label: "Gris acier" },
  { min: 96, max: 999,label: "Vairons (Hétérochromie complète)" }
];

// Table 603A : Couleur des cheveux
export const TABLE_603A_CHEVEUX_COULEUR = [
  { min: 1,  max: 50, label: "Châtain ou Brun" },
  { min: 51, max: 75, label: "Noir jais" },
  { min: 86, max: 90, label: "Blond cendré" },
  { min: 91, max: 97, label: "Roux flamboyant" },
  { min: 98, max: 999,label: "Poivre et sel / Blanc précoce" }
];

// Table 605A : Quantité de marques physiques
export const TABLE_605A_QUANTITE_MARQUES = [
  { min: 1,  max: 10, quantite: 0 },
  { min: 11, max: 16, quantite: 1 },
  { min: 17, max: 19, quantite: 2 },
  { min: 20, max: 999,quantite: 3 }
];

// Table 701A : Quantité de traits de tempérament
export const TABLE_701A_QUANTITE_TRAITS = [
  { min: 1,  max: 12, quantite: 1 },
  { min: 13, max: 18, quantite: 2 },
  { min: 19, max: 999,quantite: 3 }
];

// Table 862 : Tranches de budgets de départ par palier de Rang
export const TABLE_862_BUDGETS_BASE = [
  { rank: 1, baseArgent: 150 },
  { rank: 2, baseArgent: 300 },
  { rank: 3, baseArgent: 600 },
  { rank: 4, baseArgent: 1200 },
  { rank: 5, baseArgent: 2500 },
  { rank: 6, baseArgent: 6000 }
];