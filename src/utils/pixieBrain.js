// src/utils/pixieBrain.js
// 9.4.0// 9.6.0

// ============================================================================
// 🧠 1. DICTIONNAIRES DE VOCABULAIRE GENRÉ
// ============================================================================
const dico = {
  exclamations: ["Oooh !", "Dis dis !", "Hihi !", "Regarde !", "Waouh !", "Psst !", "Eh oh !", "Bzzzt !", "Youpi !", "Sapristi !", "Misère !"],
  noms_M: ["grand dadais", "visage pâle", "marchand de cailloux", "chasseur d'ombres", "grand machin", "tête de pioche", "l'ami", "l'échalas"],
  noms_F: ["grande bringue", "visage pâle", "marchande de cailloux", "chasseuse d'ombres", "grande asperge", "la belle plante", "tête de pioche", "l'amie"],
  gadgets: ["rouage rouillé", "dé à coudre", "vieux bouton", "bout de ficelle", "caillou pointu", "clou tordu", "bille en verre", "plume de pigeon", "morceau de craie"],
  actions: ["tourner en rond", "voler à l'envers", "manger des miettes", "me cacher dans ton cou", "faire des grimaces", "chercher des trucs brillants"],
};

// ============================================================================
// 🧠 2. LA GRANDE BIBLIOTHÈQUE DES CARACTÉRISTIQUES (Avec balises genrées)
// ============================================================================
const statsDico = {
  force: {
    low: ["Tes bras ressemblent à des brindilles !", "Ne porte pas ce {gadget}, c'est bien trop lourd pour toi !", "Attention, un coup de vent et tu t'envoles !"],
    high: ["{excl} Tu es tellement musclé{e} !", "Tu es mon garde du corps officiel, {nom} !", "Tu as mangé de l'acier au petit-déjeuner ?"]
  },
  agilite: {
    low: ["Attention ! Tu trébuches tout le temps !", "Tu as la grâce gracieuse d'une brique qui tombe !", "Tu as deux pieds gauches, {nom} !"],
    high: ["Waouh, {un} vrai{e} félin{e} !", "Tu sautes tellement haut ! Prends-moi avec toi !", "Vif{ve} comme l'éclair, {nom} !"]
  },
  constitution: {
    low: ["Tu as mauvaise mine... Tu as l'air si fragile.", "Un simple rhume pourrait te terrasser !", "Tu es pâle comme un fantôme de l'Opéra !"],
    high: ["Tu es littéralement increvable !", "Même le poison a un goût de sirop à la fraise pour toi !", "Tu es un roc, {nom} !"]
  },
  precision: {
    low: ["Oups ! Tu as encore fait tomber quelque chose !", "C'est dangereux de te laisser des objets pointus entre les mains !", "Tu as du beurre sur les doigts ?"],
    high: ["Dans le mille ! Comme toujours !", "Tu pourrais attraper une mouche en vol avec tes deux doigts !", "Ton adresse me fascine, tu es magicien{ne} des mains ?"]
  },
  esprit: {
    low: ["C'est dur de réfléchir hein, {nom} ?", "Tu as oublié ton cerveau dans ton autre pantalon ?", "Ne force pas trop, tu vas avoir de la fumée qui sort des oreilles !"],
    high: ["{excl} Ton cerveau fait du bruit quand tu penses !", "Tu as lu tous les livres de la bibliothèque d'Avalon ou quoi ?", "Rien ne t'échappe, grand{e} savant{e} !"]
  },
  perception: {
    low: ["{excl} Eh oh ! Je suis là, juste sous ton nez !", "Tu as les sens d'un caillou mouillé !", "Ouvre les yeux, le monde est grand et rempli de couleurs !"],
    high: ["Rien ne t'échappe, tu vois même dans le noir comme une chouette ?", "Tu as un radar intégré dans la tête !", "Tu es {le} meilleur{e} détective de tout Paris !"]
  },
  prestance: {
    low: ["Pourquoi les gens s'enfuient quand on passe ?", "Tu as un charme... très intérieur on va dire !", "Je resterai ton amie, même si tu es atrocement laid{e} !"],
    high: ["{excl} Tu es absolument éblouissant{e} !", "Si tu clignes des yeux, des gens s'évanouissent de bonheur !", "Tu es le soleil de ma journée, {nom} !"]
  },
  sangFroid: {
    low: ["{excl} Tu as peur de ton ombre aujourd'hui !", "Tu es prêt{e} à fuir en permanence, ça doit être épuisant !", "Cache-toi derrière moi, je te protégerai avec ce {gadget} !"],
    high: ["Tu es un véritable bloc de glace !", "Rien ne te fait peur, même pas un troll enragé des cavernes !", "Moi je panique, mais toi tu ne bouges pas d'un seul cil !"]
  }
};

const nomStatsFormate = { force: 'Force', agilite: 'Agilité', constitution: 'Constitution', precision: 'Précision', esprit: 'Esprit', perception: 'Perception', prestance: 'Prestance', sangFroid: 'Sang-froid' };

// ============================================================================
// 🧠 3. GESTION DES NOMS DE FÉES GENRÉS
// ============================================================================
const getFairyName = (type, sexe) => {
  if (!type) return "fée";
  const isF = sexe === 'Femme';
  switch(type) {
      case 'Farfadet': return isF ? 'Farfadette' : 'Farfadet';
      case 'Gobelin': return isF ? 'Gobeline' : 'Gobelin';
      case 'Fouinard': return isF ? 'Fouinarde' : 'Fouinard';
      case 'Gremelin': return isF ? 'Gremeline' : 'Gremelin';
      case 'Korrigan': return isF ? 'Korrigane' : 'Korrigan';
      case 'Loup-Garou': return isF ? 'Louve-Garou' : 'Loup-Garou';
      case 'Ogre': return isF ? 'Ogresse' : 'Ogre';
      case 'Ondine': return isF ? 'Ondine' : 'Ondin';
      case 'Orc': return isF ? 'Orque' : 'Orc';
      case 'Succube/Incube': return isF ? 'Succube' : 'Incube';
      case 'Sylve': return isF ? 'Dryade' : 'Sylve';
      case 'Troll': return isF ? 'Trollesse' : 'Troll';
      case 'Vampyr': return isF ? 'Vampyre' : 'Vampyr';
      default: return type;
  }
};

// ============================================================================
// 🧠 4. MÉMOIRE ET MOTEUR GRAMMATICAL
// ============================================================================
const MEMORY_SIZE = 25;
let spokenMemory = [];

const addToMemory = (text) => {
  spokenMemory.unshift(text);
  if (spokenMemory.length > MEMORY_SIZE) spokenMemory.pop();
};
const isInMemory = (text) => spokenMemory.includes(text);
const tirer = (liste) => liste[Math.floor(Math.random() * liste.length)];

// Le Moteur Grammatical Infaillible
const parseTemplate = (template, char) => {
  const isF = char?.sexe === 'Femme';

  let result = template
    .replace(/{excl}/g, () => tirer(dico.exclamations))
    .replace(/{nom}/g, () => tirer(isF ? dico.noms_F : dico.noms_M))
    .replace(/{gadget}/g, () => tirer(dico.gadgets))
    .replace(/{action}/g, () => tirer(dico.actions));

  // Accords grammaticaux magiques
  result = result
    .replace(/{e}/g, isF ? 'e' : '')
    .replace(/{ne}/g, isF ? 'ne' : '')
    .replace(/{ve}/g, isF ? 've' : 'f')
    .replace(/{le}/g, isF ? 'la' : 'le')
    .replace(/{un}/g, isF ? 'une' : 'un')
    .replace(/{il}/g, isF ? 'elle' : 'il')
    .replace(/{Il}/g, isF ? 'Elle' : 'Il')
    .replace(/{eux}/g, isF ? 'euse' : 'eux')
    .replace(/{teur}/g, isF ? 'trice' : 'teur');

  // Identité féérique précise
  if (char && char.typeFee) {
    const nomFee = getFairyName(char.typeFee, char.sexe);
    result = result.replace(/{Type}/g, nomFee);
    result = result.replace(/{type}/g, nomFee.toLowerCase());
  }
  return result;
};

// ============================================================================
// 🧠 5. LE CERVEAU CENTRAL
// ============================================================================
export const getPixieAdvice = (character = {}, step, fairyData = {}) => {
  
  const generateUnique = (templates, mood = 'info') => {
    let attempts = 0;
    let finalPhrase = "";
    if (!templates || templates.length === 0) return { text: "...", mood: 'info' };

    do {
      const template = tirer(templates);
      finalPhrase = parseTemplate(template, character);
      attempts++;
    } while (isInMemory(finalPhrase) && attempts < 15);

    addToMemory(finalPhrase);
    return { text: finalPhrase, mood };
  };

  const c = character;
  const caracs = c.caracteristiques || {};

  // ---------------------------------------------------------
  // A. RÉACTIONS D'URGENCE (Progression & Erreurs)
  // ---------------------------------------------------------
  if (step === 1 && !c.typeFee) {
    return generateUnique([
      "{excl} Tu n'as pas encore choisi qui tu es ! C'est le plus important !",
      "{excl} Sans ton Héritage, tu n'es qu'un humain banal ! Choisis vite !"
    ], 'warning');
  }

  // ---------------------------------------------------------
  // B. ANALYSE RACIALE ET CARACTÉRISTIQUES (Le Cœur du Système)
  // ---------------------------------------------------------
  let pool = [];

  // Lecture de la base de données des Fées
  const typeData = fairyData[c.typeFee];

  if (typeData && typeData.caracteristiques) {
    // Boucle sur les 8 Caractéristiques
    Object.keys(nomStatsFormate).forEach(stat => {
      const score = caracs[stat];
      const min = typeData.caracteristiques[stat]?.min || 1;
      const max = typeData.caracteristiques[stat]?.max || 5;

      if (score !== undefined) {
        // 1. LIMITES RACIALES (Min/Max de l'espèce)
        if (score === min) {
          pool.push(`Dis donc, pour {un} {Type}, tu n'es vraiment pas très doué{e} en ${nomStatsFormate[stat]} !`);
          pool.push(`C'est le grand minimum syndical en ${nomStatsFormate[stat]} pour {un} {Type}, hein ?`);
          pool.push(`Même parmi les {type}s, tu fais pitié avec ta ${nomStatsFormate[stat]} si basse !`);
        }
        if (score === max) {
          pool.push(`Waouh ! Atteindre le maximum en ${nomStatsFormate[stat]} pour {un} {Type}, c'est exceptionnel !`);
          pool.push(`Les autres {type}s doivent être jal{eux} de ta ${nomStatsFormate[stat]} !`);
          pool.push(`{excl} Une ${nomStatsFormate[stat]} poussée à son maximum racial ! Quel talent !`);
        }

        // 2. LIMITES ABSOLUES (Les tares universelles et l'excellence)
        if (score === 1 && statsDico[stat]) pool.push(...statsDico[stat].low);
        if (score >= 4 && statsDico[stat]) pool.push(...statsDico[stat].high);
      }
    });
  }

  // La Fortune (Richesse)
  if (c.fortune >= 6) {
    pool.push("{excl} Tu as tellement d'argent ! Tu vas m'acheter une montagne de {gadget}s ?");
  } else if (c.fortune <= 2 && c.typeFee) {
    pool.push("On a les poches vides hein ? Je peux voler un {gadget} pour toi si tu veux !");
  }

  // LORE SPÉCIFIQUE (Accords genrés natifs)
  switch (c.typeFee) {
    case 'Ange': pool.push("Tes plumes sont toutes douces ! Je peux m'asseoir sur ton épaule ?"); break;
    case 'Bastet': pool.push("{excl} J'adore tes moustaches de chat ! Si je te lance un {gadget}, tu vas courir après ?"); break;
    case 'Fleur de métal': pool.push("{excl} Tu fais tic-tac quand tu respires ! Je peux utiliser un {gadget} pour te réparer ?"); break;
    case 'Fouinard': pool.push("Tu fabriques toujours des trucs super bizarres ! J'adore ton odeur de fumée !"); break;
    case 'Gobelin': pool.push("Pouah ! Tu sens le vieux chou et la boue ! Mais je t'aime bien quand même !"); break;
    case 'Léporide': pool.push("{excl} Tu as de grandes oreilles ! C'est pour mieux m'entendre voler ?"); break;
    case 'Ogre': pool.push("S'il te plaît, grand{e} {type}, ne me mange pas ! Je n'ai pas très bon goût !"); break;
    case 'Ondine': pool.push("Tu sens la pluie d'été ! Fais attention de ne pas mouiller mes ailes !"); break;
    case 'Orc': pool.push("{excl} Tes défenses sont pointues ! Tu as l'air grognon, {nom} !"); break;
    case 'Phénix': pool.push("Waouh ! T'es tout chaud ! Fais attention de ne pas brûler mes jolies ailes !"); break;
    case 'Protys': pool.push("Tu changes tout le temps de visage, j'ai le vertige en te regardant !"); break;
    case 'Troll': pool.push("Même si tu es {un} grand{e} {Type} brutal{e}, je sais que tu aimes les petits animaux... comme moi !"); break;
    case 'Succube/Incube': pool.push("Ton charme est démoniaque... Fais attention à qui tu croises avec ton Masque !"); break;
    case 'Vampyr': pool.push("Tes dents brillent dans le noir ! Tu as mangé des chauves-souris ?"); break;
  }

  if (c.atouts?.some(a => a && a.includes('Ami des pixies'))) {
    pool.push("{excl} Tu es {un} Ami{e} des Pixies ! C'est pour ça que je suis venue te voir !");
  }

  // Fallback si le pool est vide
  if (pool.length === 0) {
    pool.push("{excl} Je m'ennuie... Je vais {action} pour passer le temps !");
    pool.push("Dis, {nom}, tu crois qu'on aura bientôt fini de remplir tout ça ?");
  }

  return generateUnique(pool, 'info');
};