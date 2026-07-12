function d(n) { return Math.floor(Math.random() * n) + 1; }

// ─── DÉMOGRAPHIE ─────────────────────────────────────────────────────────────

export const DEMOGRAPHIE_PARIS_1899 = [
  { id: 'francaise',        label: 'Française',        weight: 80, TekMod: 3, langue: 'Français' },
  { id: 'italienne',        label: 'Italienne',        weight: 5,  TekMod: 3, langue: 'Italien' },
  { id: 'britannique',      label: 'Britannique',      weight: 4,  TekMod: 4, langue: 'Anglais' },
  { id: 'russe',            label: 'Russe',            weight: 3,  TekMod: 2, langue: 'Russe' },
  { id: 'austro_hongroise', label: 'Austro-Hongroise', weight: 3,  TekMod: 3, langue: 'Allemand' },
  { id: 'allemande',        label: 'Allemande',        weight: 2,  TekMod: 4, langue: 'Allemand' },
  { id: 'americaine',       label: 'Américaine',       weight: 2,  TekMod: 4, langue: 'Anglais' },
  { id: 'autre',            label: 'Autre',            weight: 1,  TekMod: 2, langue: null },
];

export const NATIONALITES_EXOTIQUES_1899 = [
  { id: 'algerienne',  label: 'Algérienne',  TekMod: 1, langue: 'Arabe' },
  { id: 'belge',       label: 'Belge',       TekMod: 3, langue: 'Français' },
  { id: 'suisse',      label: 'Suisse',      TekMod: 4, langue: 'Français' },
  { id: 'espagnole',   label: 'Espagnole',   TekMod: 2, langue: 'Espagnol' },
  { id: 'portugaise',  label: 'Portugaise',  TekMod: 2, langue: 'Portugais' },
  { id: 'polonaise',   label: 'Polonaise',   TekMod: 2, langue: 'Polonais' },
  { id: 'grecque',     label: 'Grecque',     TekMod: 2, langue: 'Grec' },
  { id: 'ottomane',    label: 'Ottomane',    TekMod: 2, langue: 'Turc' },
  { id: 'japonaise',   label: 'Japonaise',   TekMod: 3, langue: 'Japonais' },
  { id: 'chinoise',    label: 'Chinoise',    TekMod: 2, langue: 'Mandarin' },
  { id: 'indienne',    label: 'Indienne',    TekMod: 2, langue: 'Hindi' },
  { id: 'marocaine',   label: 'Marocaine',   TekMod: 1, langue: 'Arabe' },
  { id: 'bresilienne', label: 'Brésilienne', TekMod: 2, langue: 'Portugais' },
  { id: 'roumaine',    label: 'Roumaine',    TekMod: 2, langue: 'Roumain' },
  { id: 'scandinave',  label: 'Scandinave',  TekMod: 3, langue: 'Suédois' },
];

// ─── TABLE 102A : BONUS TECH ──────────────────────────────────────────────────

export function bonusNiveauTech(roll) {
  if (roll <= 30)  return 0;
  if (roll <= 50)  return 1;
  if (roll <= 65)  return 2;
  if (roll <= 80)  return 3;
  if (roll <= 130) return 4;
  if (roll <= 198) return 5;
  if (roll <= 210) return 6;
  return 7;
}

// ─── TABLE 102B : TECH LEVEL ──────────────────────────────────────────────────

export const NIVEAUX_TECH = {
  stone:       { label: 'Âge de Pierre',       pointsDeBase: 4,  literacy: 5  },
  bronze:      { label: 'Âge du Bronze',       pointsDeBase: 6,  literacy: 20 },
  iron:        { label: 'Âge du Fer',          pointsDeBase: 8,  literacy: 30 },
  medieval:    { label: 'Moyen Âge',           pointsDeBase: 4,  literacy: 10 },
  renaissance: { label: 'Renaissance',         pointsDeBase: 10, literacy: 35 },
  industrial:  { label: 'Ère industrielle',    pointsDeBase: 10, literacy: 40 },
  engineering: { label: "Ère de l'ingénierie", pointsDeBase: 12, literacy: 60 },
};

export function techLevelFromMod(tekMod) {
  if (tekMod <= 1) return 'stone';
  if (tekMod === 2) return 'bronze';
  if (tekMod === 3) return 'iron';
  if (tekMod === 4) return 'medieval';
  if (tekMod === 5) return 'renaissance';
  if (tekMod === 6) return 'industrial';
  return 'engineering';
}

// ─── TABLE 102C : TYPES DE CULTURE ────────────────────────────────────────────

export const TABLE_TYPES_CULTURE = [
  { max: 5,        id: 'degenerate',    label: 'Dégénérée',        cuMod: 0,  survieTotal: 6, edDice: () => d(4) },
  { max: 12,       id: 'primitive',     label: 'Primitive',        cuMod: 0,  survieTotal: 7, edDice: () => d(4) },
  { max: 15,       id: 'retrogressive', label: 'Rétrograde',       cuMod: 2,  survieTotal: 6, edDice: () => d(4) },
  { max: 20,       id: 'nomadic',       label: 'Nomade',           cuMod: 6,  survieTotal: 7, edDice: () => d(4) + d(4) },
  { max: 30,       id: 'barbaric',      label: 'Barbare',          cuMod: 2,  survieTotal: 6, edDice: () => d(4) },
  { max: 60,       id: 'developing',    label: 'En développement', cuMod: 6,  survieTotal: 6, edDice: () => d(4) + d(4) + d(4) },
  { max: 101,      id: 'dynamic',       label: 'Dynamique',        cuMod: 10, survieTotal: 7, edDice: () => d(4) + d(4) + d(4) + d(4) },
  { max: 105,      id: 'stagnant',      label: 'Stagnante',        cuMod: 4,  survieTotal: 4, edDice: () => d(6) },
  { max: Infinity, id: 'decadent',      label: 'Décadente',        cuMod: 8,  survieTotal: 5, edDice: () => d(6) + d(6) },
];

export function typeCultureFromScore(score) {
  return TABLE_TYPES_CULTURE.find(r => score <= r.max) ?? TABLE_TYPES_CULTURE[TABLE_TYPES_CULTURE.length - 1];
}

// ─── TABLE 103 : STATUT SOCIAL ────────────────────────────────────────────────

export const TABLE_STATUT_SOCIAL = [
  { max: 5,        id: 'destitute',  label: 'Misérable',  solMod: 0, edMod: -10, moneyMod: 0.1 },
  { max: 15,       id: 'poor',       label: 'Pauvre',     solMod: 2, edMod: -4,  moneyMod: 0.5 },
  { max: 70,       id: 'comfortable',label: 'Confortable',solMod: 4, edMod: 0,   moneyMod: 1.0 },
  { max: 90,       id: 'well_to_do', label: 'Aisé',       solMod: 5, edMod: 4,   moneyMod: 1.5 },
  { max: 98,       id: 'wealthy',    label: 'Fortune',    solMod: 7, edMod: 8,   moneyMod: 3.0 },
  { max: Infinity, id: 'nobility',   label: 'Noblesse',   solMod: 5, edMod: 6,   moneyMod: 1.5 },
];

export function statutSocialFromScore(score) {
  return TABLE_STATUT_SOCIAL.find(r => score <= r.max) ?? TABLE_STATUT_SOCIAL[TABLE_STATUT_SOCIAL.length - 1];
}

export const TITRES_NOBLESSE = [
  { labelM: 'Duc',       labelF: 'Duchesse',    TiMod: 30 },
  { labelM: 'Marquis',   labelF: 'Marquise',    TiMod: 20 },
  { labelM: 'Comte',     labelF: 'Comtesse',    TiMod: 15 },
  { labelM: 'Vicomte',   labelF: 'Vicomtesse',  TiMod: 10 },
  { labelM: 'Baron',     labelF: 'Baronne',     TiMod: 5  },
  { labelM: 'Chevalier', labelF: 'Dame',        TiMod: 0  },
];

// ─── TABLE 104B : CONFIGURATION DU FOYER ─────────────────────────────────────

export const TABLE_CONFIGURATION_FOYER = [
  { max: 7,        resoudre: () => 'Élevé par ses deux parents' },
  { max: 10,       resoudre: () => `Élevé par un parent unique (${Math.random() < 0.5 ? 'la mère' : 'le père'})` },
  { max: 11,       resoudre: () => 'Élevé dans une crèche communautaire' },
  { max: 12,       resoudre: () => "Élevé dans un établissement d'État" },
  { max: 13,       resoudre: () => "Élevé par un oncle et une tante" },
  { max: 14,       resoudre: () => `Élevé par la fratrie (${Math.random() < 0.5 ? 'un frère aîné' : 'une sœur aînée'})` },
  { max: 15,       resoudre: () => 'Élevé par ses grands-parents' },
  { max: 16,       resoudre: () => 'Élevé par un tuteur légal' },
  { max: 17,       resoudre: () => 'Aucun proche connu — livré à lui-même dans la rue', flagRue: true },
  { max: 18,       resoudre: () => 'Élevé dans un orphelinat public ou religieux', flagOrphelinat: true },
  { max: Infinity, resoudre: () => 'Famille élargie ou tuteurs multiples' },
];

export function configFoyerFromDe(de20) {
  return TABLE_CONFIGURATION_FOYER.find(r => de20 <= r.max) ?? TABLE_CONFIGURATION_FOYER[TABLE_CONFIGURATION_FOYER.length - 1];
}

// ─── TABLE 105B : LIEUX DE NAISSANCE INHABITUELS ──────────────────────────────

export const LIEUX_NAISSANCE_INHABITUELS = [
  { label: 'Dans une cellule de la Sûreté',                              biMod: 10 },
  { label: "Dans le laboratoire secret d'un savant excentrique",         biMod: 20 },
  { label: "Dans l'enceinte d'une église honorable",                     biMod: 15 },
  { label: "Dans les bureaux d'une grande manufacture",                  biMod: 5  },
  { label: "Sur les pavés d'une ruelle sombre de Paris",                 biMod: 5  },
  { label: "Dans les salons discrets d'une maison close",                biMod: 5  },
  { label: "Dans un palais d'apparat ou une ambassade",                  biMod: 5  },
  { label: "Derrière les rideaux d'un théâtre de boulevard",             biMod: 10 },
  { label: "Dans un lieu d'intense activité éthérique réputée",          biMod: 10 },
  { label: "Dans l'arrière-salle d'un cabaret montmartrois",             biMod: 5  },
  { label: "Au fond des galeries des égouts de Paris",                   biMod: 10 },
  { label: "Dans le repaire clandestin d'une bande de malfrats",         biMod: 5  },
  { label: "En présence fortuite d'une créature indicible",              biMod: 15 },
  { label: "Dans le sanctuaire secret d'un culte interdit",              biMod: 20 },
];

// ─── TABLE 106 : ÉVÉNEMENTS DE NAISSANCE ─────────────────────────────────────

export const TABLE_EVENEMENTS_NAISSANCE = [
  { max: 4,        texte: "Le père biologique est convaincu que l'enfant n'est pas le sien." },
  { max: 7,        texte: "Phénomène météorologique impossible pour la saison le jour de la naissance." },
  { max: 8,        texte: "Éclipse totale ou assombrissement mystérieux au moment exact de l'accouchement." },
  { max: 10,       texte: "Un fonds anonyme a été ouvert pour l'enfant — l'argent de départ est doublé.", moneyModMult: 2 },
  { max: 16,       texte: "Une personnalité notable meurt au moment de la naissance. Certains murmurent une réincarnation." },
  { max: 20,       texte: "La naissance fait grand bruit dans la presse locale." },
  { max: 21,       texte: "Accouchement supervisé par un chirurgien de génie. (+5 en Chance)", bonusLuck: 5 },
  { max: 23,       texte: "La mère biologique meurt pendant l'accouchement." },
  { max: 28,       texte: "Complications graves — l'enfant frôle la mort mais survit. (+1 Constitution)", bonusCon: 1 },
  { max: 29,       texte: "Mort tragique d'un jumeau pendant le travail." },
  { max: 34,       texte: "Naissance d'un jumeau identique, immédiatement séparé pour des motifs obscurs." },
  { max: 48,       texte: "Un occultiste déclare l'enfant frappé d'une ancienne malédiction familiale.", flagCurse: true },
  { max: 49,       texte: "Secret de naissance majeur — réservé au MJ.", flagGmSecret: true },
  { max: 62,       texte: "Aucun registre officiel n'a consigné la naissance. Le PNJ n'existe pas administrativement." },
  { max: 81,       texte: "Né avec une marque de naissance mystérieuse évoquant un symbole occulte." },
  { max: 82,       pool: [
    "Empreintes de pas qui ne coïncident pas avec la direction marchée.",
    "Peau qui reflète la lumière à l'envers selon l'inclinaison du soleil.",
    "Ombre portée qui ne correspond jamais tout à fait à la silhouette réelle.",
    "Yeux de couleurs changeantes selon ce qu'ils fixent.",
  ]},
  { max: 120,      texte: "Un mystérieux étranger dépose un présent de grande valeur dans le berceau avant de disparaître." },
  { max: Infinity, pool: [
    "Avait un jumeau à la naissance, mais celui-ci s'est enfui par la fenêtre dès les premières minutes de vie.",
    "Les animaux à un kilomètre à la ronde ont péri d'effroi le jour de sa naissance.",
    "Des spectres ont entouré le berceau le soir de l'accouchement.",
    "Seul survivant inexpliqué d'un désastre ayant rasé son lieu de naissance.",
    "Reçoit une lettre anonyme prédisant un drame à chacun de ses anniversaires.",
  ]},
];

export function evenementNaissanceFromScore(score) {
  return TABLE_EVENEMENTS_NAISSANCE.find(r => score <= r.max) ?? TABLE_EVENEMENTS_NAISSANCE[TABLE_EVENEMENTS_NAISSANCE.length - 1];
}

// ─── TABLE 107 : PARENTS ──────────────────────────────────────────────────────

export const TABLE_CONFIG_PARENTS = [
  { max: 12,       label: 'Le chef de famille possède une seule occupation à plein temps.' },
  { max: 14,       label: 'Le chef de famille cumule un emploi principal et un emploi secondaire.' },
  { max: 16,       label: "Le chef de famille ne travaille pas — c'est l'autre parent qui subvient aux besoins." },
  { max: 18,       label: 'Les deux parents travaillent à plein temps.' },
  { max: 19,       label: "Le chef de famille était un aventurier ou franc-tireur de l'ombre." },
  { max: Infinity, label: "Pas d'occupation apparente — l'argent semble mystérieusement disponible." },
];

export function configParentsFromDe(de20) {
  return TABLE_CONFIG_PARENTS.find(r => de20 <= r.max) ?? TABLE_CONFIG_PARENTS[TABLE_CONFIG_PARENTS.length - 1];
}

export const TRAITS_NOTABLES_PARENTS = [
  "Marqué par un trait de tempérament extrême ou une excentricité notable.",
  "A lui-même connu une naissance entourée de mystère.",
  "Voue son existence à une collection ou un passe-temps dévorant.",
  "Détient un artefact ou un héritage ancien jalousement gardé.",
  "A survécu autrefois à un événement métaphysique inexpliqué.",
  "Frappé par une névrose ou une obsession psychologique lourde.",
  "Dissimule une double identité dans les salons de Paris.",
  "Rend des comptes en secret à un puissant commanditaire clandestin.",
  "Vétéran des campagnes coloniales ou de la guerre de 1870.",
  "Poursuivi par la rancune d'un ennemi mortel.",
];

// ─── TABLE 208 : CHRONOLOGIE DE LA JEUNESSE ───────────────────────────────────

export const TABLE_CHRONOLOGIE_JEUNESSE = [
  { max: 2,        bracket: 'R', texte: "Conflit politique impactant le foyer — la famille s'implique dans des soulèvements parisiens." },
  { max: 3,        bracket: 'L', texte: "Trouve un objet étrange ou une relique oubliée dans des ruines de la capitale." },
  { max: 4,        bracket: 'D', texte: "Manque l'école de façon répétée. Perte d'opportunités intellectuelles.", penaliteEd: 2 },
  { max: 7,        bracket: null, fn: 'drame_ou_miracle' },
  { max: 8,        bracket: 'N', fn: 'table_speciale' },
  { max: 9,        bracket: 'N', texte: "Entre en apprentissage précoce — apprend le métier de ses tuteurs." },
  { max: 10,       bracket: 'R', texte: "Fugue du domicile familial, vit d'expédients pendant plusieurs mois." },
  { max: 11,       bracket: 'R', texte: "Rencontre ou expérience mystique lors d'une veillée ésotérique clandestine." },
  { max: 13,       bracket: 'L', texte: "Dynamique de foyer stricte mais aimante — les tuteurs soutiennent ses ambitions." },
  { max: 15,       bracket: 'L', texte: "Reçoit une dotation financière anticipée (+25% argent de départ)." },
  { max: 18,       bracket: 'R', texte: "Bouleversement économique — la famille déménage et change de quartier à Paris." },
  { max: Infinity, bracket: 'L', texte: "Éducation mondaine — fréquente les salons littéraires et scientifiques de la rive gauche." },
];

export function chronologieJeunesseFromScore(score) {
  return TABLE_CHRONOLOGIE_JEUNESSE.find(r => score <= r.max) ?? TABLE_CHRONOLOGIE_JEUNESSE[TABLE_CHRONOLOGIE_JEUNESSE.length - 1];
}

export const TABLE_EVENEMENTS_SPECIAL_JEUNESSE = {
  enfance: [
    "Développe un attachement maladif envers une vieille relique d'enfance qu'il ne quitte jamais.",
    "Amitié fusionnelle avec un animal de gouttière parisien qui semble le guider.",
    "Témoin direct d'un incident mystérieux lié aux forces secrètes de l'univers.",
  ],
  adolescence: [
    "Décroche une bourse d'excellence académique grâce à des dispositions mémorielles précoces.",
    "S'éprend d'un amour de jeunesse secret qui influencera sa philosophie future.",
    "Se fait embrigader temporairement dans un club politique clandestin ou une faction d'étudiants radicaux.",
  ],
};
