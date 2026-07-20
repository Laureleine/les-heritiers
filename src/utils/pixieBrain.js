// src/utils/pixieBrain.js
import { getXpState } from './xpActions';

// ============================================================================
// 🧠 1. DICTIONNAIRES DE VOCABULAIRE GENRÉ ET ALÉATOIRE
// ============================================================================

const dico = {
  exclamations: ["Oooh !", "Dis dis !", "Hihi !", "Regarde !", "Waouh !", "Psst !", "Eh oh !", "Bzzzt !", "Youpi !", "Sapristi !", "Misère !", "Flûte !", "Nom d'un petit rouage !"],
  noms_M: ["grand dadais", "visage pâle", "marchand de cailloux", "chasseur d'ombres", "grand machin", "tête de pioche", "l'ami", "l'échalas", "monsieur le grand", "héros de pacotille"],
  noms_F: ["grande bringue", "visage pâle", "marchande de cailloux", "chasseuse d'ombres", "grande asperge", "la belle plante", "tête de pioche", "l'amie", "madame la grande", "héroïne de pacotille"],
  gadgets: ["rouage rouillé", "dé à coudre", "vieux bouton", "bout de ficelle", "caillou pointu", "clou tordu", "bille en verre", "plume de pigeon", "morceau de craie", "morceau de sucre"],
  actions: ["tourner en rond", "voler à l'envers", "manger des miettes", "me cacher dans ton cou", "faire des grimaces", "chercher des trucs brillants", "faire la course avec une mouche"],
};

// ============================================================================
// 🧠 2. HUMEURS DU MOMENT
// ============================================================================

export const HUMEURS = ['espiegle', 'pensive', 'excitee', 'somnolente'];

const humeurDico = {
  espiegle: [
    "{excl} Je m'ennuie... Tu ne veux pas me lancer un {gadget} à rattraper ?",
    "Hé hé ! J'ai fait une bêtise mais je te dirai pas laquelle !",
    "Tu sais que si tu fermes les yeux, je peux me glisser dans tes cheveux ? Hihi !",
    "Je me suis cachée dans un chapeau tout à l'heure. C'était sombre mais rigolo !",
    "Si j'avais un {gadget} pour chaque fois que tu as hésité, j'aurais une collection royale !",
    "{excl} J'ai inventé un nouveau jeu : compter les étoiles depuis ici. J'en suis à trois.",
  ],
  pensive: [
    "Tu crois vraiment que les Faux-Semblants ont une âme... comme nous ?",
    "J'ai rêvé d'Avalon cette nuit. C'était si calme que c'en était inquiétant.",
    "Parfois je me demande si les humains nous envient, ou si c'est nous qui les envions.",
    "Il y a des jours où la magie semble si fragile... Comme un fil de soie sous la pluie.",
    "...... Tu crois qu'on finira vraiment par comprendre ce monde, {nom} ?",
    "Je me souviens de la première fois que j'ai vu Paris. C'était bruyant. Ça l'est toujours.",
  ],
  excitee: [
    "{excl}{excl} Je suis TELLEMENT contente d'être là aujourd'hui, {nom} !",
    "J'ai avalé une étincelle ce matin et je suis PLEINE d'énergie ! Allez, on y va !",
    "Allez allez allez ! On y va ! C'est parti ! Vite vite vite !",
    "Je pourrais faire le tour de Paris en battant des ailes tellement je suis en forme !",
    "{excl} Rien ne peut m'arrêter aujourd'hui ! Surtout pas toi... enfin si, mais doucement !",
    "Tu vois ce {gadget} ? Je l'ai trouvé ce matin et depuis ça porte bonheur, je le jure !",
  ],
  somnolente: [
    "Hmm... *bâille* ...C'est déjà l'heure de tout ça ?",
    "Ne me demande pas d'être brillante aujourd'hui... j'ai les ailes lourdes.",
    "Je pourrais m'endormir sur ce {gadget}... zzz... Hein ? Non non, je dormais pas !",
    "*bâille* Si tu as besoin d'un conseil, reviens dans... dix minutes... ou vingt.",
    "Les ailes en plomb, les yeux qui piquent... C'est la vie des petites fées courageuses.",
    "Écoute... je te parle mais dans ma tête c'est déjà l'heure du nid.",
  ],
};

// ============================================================================
// 🧠 3. CYCLE JOUR / NUIT
// ============================================================================

const heureDico = {
  matin: [
    "Bonjour {nom} ! Le soleil se lève sur Paris ! Un bon chocolat chaud s'impose !",
    "Quelle belle matinée pour construire un Héritier ! Les Gardiens sont de bonne humeur tôt le matin.",
    "Du matin au soir, moi je brille ! Toi... tu as l'air d'avoir besoin d'un café.",
    "Les fées du matin sont les plus malicieuses, tu sais. Méfie-toi.",
  ],
  apres_midi: [
    "Après-midi studieuse ? Parfait pour les grandes décisions !",
    "L'après-midi à Paris, c'est le meilleur moment pour être une fée incognito.",
    "Les ateliers d'Avalon sont en pleine activité en ce moment. Pas de temps à perdre, {nom} !",
  ],
  soir: [
    "La nuit approche... L'heure des fées et des mystères, j'adore ça !",
    "Tu travailles encore à cette heure-ci ? Tu as oublié de manger, {nom} ?",
    "Le soir tombe sur Paris. Les lumières de la ville sont presque aussi jolies que moi.",
    "Le soir, les Faux-Semblants peuvent enfin sortir l'oreille hors du Masque... Profites-en !",
  ],
  nuit: [
    "*bâille* Minuit passé... Tu sais ce qu'on dit des pixies réveillées en pleine nuit ?",
    "Les étoiles sont belles cette nuit... mais toi tu devrais peut-être dormir ?",
    "Il est très tard ! Les Gobelins rôdent à cette heure-ci... et moi aussi.",
    "Chut... le reste du monde dort déjà. Rien que toi, moi, et ce Grimoire.",
  ],
};

// ============================================================================
// 🧠 4. COMPTEUR DE SESSIONS
// ============================================================================

const sessionDico = {
  2:  ["Oh, te revoilà ! J'ai gardé ta place... enfin, ma branche préférée juste au-dessus."],
  5:  ["Déjà notre 5ème rencontre ! On commence vraiment à se connaître, {nom} !"],
  10: ["10 visites ! Si t'étais une fée, tu aurais déjà une plume en or dans ton chapeau !"],
  25: ["25 fois que tu reviens ! Tu fais presque partie des meubles d'Avalon maintenant."],
  50: ["50 sessions ! Je devrais te tailler une étoile dans du cristal pour commémorer ça !"],
};

// ============================================================================
// 🧠 5. LA GRANDE BIBLIOTHÈQUE DES ÉTAPES (STEPS)
// ============================================================================

const stepDico = {
  1: [ // Héritage
    "On choisit qui on est ? J'espère que tu as des ailes !",
    "C'est important les origines ! Moi je viens d'une forêt magique...",
    "Un nouveau Faux-Semblant dans ce monde cruel ! C'est excitant !",
    "N'oublie pas de choisir un sexe et des traits de caractère, sinon je ne saurai pas comment t'appeler !",
  ],
  2: [ // Capacités
    "Ces petits talents innés... c'est ce qui fait tout ton charme !",
    "Moi ma capacité naturelle, c'est d'être adorable et de briller dans le noir !",
    "C'est de naissance ! Tu ne peux pas lutter contre ta propre magie.",
    "Une capacité innée, c'est comme un cadeau qu'on n'a pas demandé... mais qu'on garde quand même.",
    "Les Gardiens t'ont donné ça à la naissance. Pas pour rien, j'en suis sûre !",
    "Choisis bien... une capacité innée ne s'oublie jamais, même sous le Masque.",
  ],
  3: [ // Pouvoirs
    "De la vraie magie ! Attention à ne pas tout faire exploser...",
    "J'adore quand ça fait des étincelles ! Choisis un truc qui brille !",
    "Tu vas te démasquer pour l'utiliser ? Les humains vont avoir la frousse !",
    "Un pouvoir féerique dans Paris de 1899... tu es fou{folle} ou courageux{se} ?",
    "La magie, ça demande de l'entraînement. Ne le sors pas n'importe où !",
    "Certains pouvoirs sont beaux, d'autres sont utiles. Toi tu choisiras lequel ?",
  ],
  4: [ // Atouts
    "Un petit truc en plus ? C'est toujours utile pour tricher un peu !",
    "Oh, un avantage secret ! Je ne le dirai à personne, promis !",
    "Tout le monde aime avoir une botte secrète dans sa manche.",
    "Un atout bien choisi peut sauver une vie entière. Pèse le pour !",
    "Les atouts, c'est comme les {gadget}s que je collectionne : plus on en a, mieux c'est !",
    "{excl} Certains atouts sont rarissimes ! Prends le temps de bien lire.",
  ],
  5: [ // Caractéristiques
    "On répartit les points ! Mets tout en Agilité, c'est le plus drôle !",
    "Tu es plutôt fort{e} ou plutôt intelligent{e} ? Moi je suis surtout mignonne !",
    "Attention de ne pas dépasser le maximum de ton espèce, les Gardiens n'aiment pas ça !",
  ],
  6: [ // Profils
    "Quel est ton rôle dans le monde des grands ? Gentleman ? Aventurier{e} ?",
    "Un profil, c'est comme un beau costume, mais pour tous les jours !",
    "Choisis bien ton Profil Majeur, c'est lui qui va dicter ta façon de survivre à Paris !",
  ],
  7: [ // Utiles
    "Savoir se battre, savoir parler... Il faut de tout pour faire un monde !",
    "Tu sais conduire un aéronef ? Non ? Dommage...",
    "Concentre-toi sur tes Prédilections, c'est là que tu brilles le plus !",
  ],
  8: [ // Futiles
    "Ah ! L'art, la poésie, la jonglerie ! C'est MA partie préférée !",
    "On ne vit pas que pour se battre ! Apprends à danser, {nom} !",
    "Dis, tu pourras m'apprendre une compétence futile quand on aura fini ?",
    "Le futile d'aujourd'hui est l'essentiel de demain. Je le pense vraiment !",
    "La poésie, la musique, la peinture... Avalon tout entier t'en remerciera.",
    "{excl} Les compétences futiles sont celles qui font qu'on vous aime. N'en néglige aucune !",
  ],
  9: [ // Social & Richesse
    "On va faire les boutiques ! Tu m'achètes un {gadget} ?",
    "L'argent ne fait pas le bonheur, mais ça achète de la bonne liqueur de berthaniel !",
    "Regarde tout cet équipement ! Prends une belle arme, c'est dangereux dehors.",
  ],
  10: [ // Masque
    "Qui seras-tu chez les humains ? Il te faut un beau Masque !",
    "N'oublie pas de choisir une belle apparence sociale, c'est crucial pour passer inaperçu{e}.",
    "Trouve-toi un nom humain qui a de la classe, comme... Jean-Jacques ! C'est bien Jean-Jacques ?",
    "Le Masque, c'est le rôle que tu joues chaque matin en te levant. Joue-le bien.",
    "Un bon Masque, c'est assez solide pour tromper même les plus méfiants.",
    "{excl} Le nom de Masque que tu choisiras, les humains l'entendront chaque jour. Fais qu'il sonne bien !",
  ],
  11: [ // Bilan
    "Et voilà ! Ton Héritier est prêt pour la Belle Époque !",
    "Waouh ! Quelle fiche magnifique ! On part à l'aventure maintenant ?",
    "Je suis si fière de ce qu'on a construit ! Tu vas faire des ravages !",
    "Il est là, ton Héritier... né de tes mains et d'un peu de magie. C'est beau, non ?",
    "Tu sais, pas deux Héritiers ne se ressemblent. Celui-là est unique, comme toi.",
    "{excl} Paris attend ! Le Grimoire est ouvert, les aventures t'espèrent !",
  ],
};

// ============================================================================
// 🧠 6. LA GRANDE BIBLIOTHÈQUE DES CARACTÉRISTIQUES (1 à 5+)
// ============================================================================

const statsDico = {
  force: {
    1: ["Tes bras ressemblent à des brindilles !", "Ne porte pas ce {gadget}, c'est bien trop lourd pour toi !"],
    2: ["Tu es un peu faiblard{e}, non ? Laisse-moi t'aider... ah non, je suis trop petite.", "Ne te bagarre pas au corps-à-corps, c'est un conseil."],
    3: ["Une force dans la moyenne ! Ni trop, ni trop peu.", "Tu peux porter tes bagages tout{e} seul{e}, c'est déjà ça !"],
    4: ["Jolies poignes ! Tu peux soulever un fiacre avec ça ?", "Tu pourrais tordre du métal si tu essayais !"],
    5: ["{excl} Tu es tellement musclé{e} !", "Tu as mangé de l'acier au petit-déjeuner ?", "Tu es mon garde du corps officiel, {nom} !"]
  },
  agilite: {
    1: ["Tu as la grâce d'une brique qui tombe !", "Tu as deux pieds gauches, {nom} !"],
    2: ["Fais attention à la marche... Oh, trop tard.", "Tu es du genre à trébucher sur des tapis, n'est-ce pas ?"],
    3: ["Tu te débrouilles bien sur tes deux pattes !", "Tu peux esquiver les flaques d'eau, bravo !"],
    4: ["Vif{ve} comme l'éclair, {nom} !", "Jolis réflexes ! Tu ferais un{e} bon{ne} acrobate !"],
    5: ["Waouh, {un} vrai{e} félin{e} !", "Tu sautes tellement haut ! Prends-moi avec toi quand tu bondis !"]
  },
  constitution: {
    1: ["Tu as mauvaise mine... Tu as l'air si fragile.", "Un simple rhume pourrait te terrasser !"],
    2: ["Prends un bon thé chaud, tu as l'air de couver quelque chose.", "Ne sors pas sans ton écharpe !"],
    3: ["Une santé de fer... enfin, de fer-blanc. Ça va !", "Tu devrais survivre à l'hiver sans trop de problèmes."],
    4: ["Tu as beaucoup d'endurance ! On fait la course ?", "Même la grippe a peur de t'approcher !"],
    5: ["Tu es littéralement increvable !", "Même le poison a un goût de sirop à la fraise pour toi !"]
  },
  precision: {
    1: ["C'est dangereux de te laisser des objets pointus !", "Tu as du beurre sur les doigts ?"],
    2: ["Tu as encore visé à côté ! Heureusement que ce n'était pas un couteau...", "Ne touche pas au pendule, tu vas le casser !"],
    3: ["Une bonne coordination ! Mais tu ne battras pas un elfe à l'arc.", "Tu sais boutonner ta chemise du premier coup, c'est bien."],
    4: ["Dans le mille ! Comme toujours !", "Tu es un as avec tes doigts, tu triches aux cartes ?"],
    5: ["Ton adresse me fascine, tu es magicien{ne} des mains ?", "Tu pourrais attraper une mouche en vol avec tes deux doigts !"]
  },
  esprit: {
    1: ["C'est dur de réfléchir hein, {nom} ?", "Tu as oublié ton cerveau dans ton autre pantalon ?"],
    2: ["Tu as mis un peu de temps à comprendre ma blague, non ?", "Ne force pas trop, tu vas avoir de la fumée qui sort des oreilles !"],
    3: ["Une intelligence normale, c'est parfait pour un Faux-Semblant !", "Tu sais lire une carte, c'est l'essentiel."],
    4: ["Tu as lu tous les livres de la bibliothèque d'Avalon ou quoi ?", "Tu es un vrai petit dictionnaire ambulant !"],
    5: ["{excl} Ton cerveau fait du bruit quand tu penses !", "Rien ne t'échappe, grand{e} savant{e} ! Tu vas inventer le mouvement perpétuel ?"]
  },
  perception: {
    1: ["Tu as les sens d'un caillou mouillé !", "Ouvre les yeux, le monde est grand et rempli de couleurs !"],
    2: ["Tu n'avais pas vu ce lampadaire ? Aïe.", "Même moi je fais plus de bruit qu'un troll et tu ne m'entends pas !"],
    3: ["Tu as l'œil vif ! Mais moi je vois encore mieux depuis les airs.", "Tu as remarqué que j'avais changé de coiffure ? Non ? Dommage."],
    4: ["Tu as un radar intégré dans la tête !", "Rien ne passe inaperçu avec toi, même pas une miette de pain !"],
    5: ["Tu vois même dans le noir comme une chouette ?", "Tu es {le} meilleur{e} détective de tout Paris !"]
  },
  prestance: {
    1: ["Pourquoi les gens s'enfuient quand on passe ?", "Je resterai ton amie, même si tu es atrocement laid{e} !"],
    2: ["Tu as un charme... disons, atypique. Oui, atypique c'est bien.", "Mets un chapeau, ça ira mieux !"],
    3: ["Tu passes partout sans te faire remarquer, c'est pratique pour se cacher.", "Tu as un petit quelque chose, si on te regarde de loin !"],
    4: ["Tu as beaucoup de classe, j'adore ta façon de te tenir !", "Quand tu parles, les gens t'écoutent vraiment !"],
    5: ["{excl} Tu es absolument éblouissant{e} !", "Si tu clignes des yeux, des passants s'évanouissent de bonheur !"]
  },
  sangFroid: {
    1: ["Tu as peur de ton ombre aujourd'hui !", "Cache-toi derrière moi, je te protégerai avec ce {gadget} !"],
    2: ["Ne panique pas ! Respire un grand coup... Voilà.", "Tu as les mains moites quand il y a du danger, hein ?"],
    3: ["Tu gardes bien ton calme... La plupart du temps.", "Tant que personne ne tire, tu gères la situation."],
    4: ["Rien ne te fait peur, même pas un troll enragé des cavernes !", "Tu es toujours serein{e}, ça m'impressionne."],
    5: ["Tu es un véritable bloc de glace !", "Moi je panique et je vole partout, mais toi tu ne bouges pas d'un seul cil !"]
  }
};

const nomStatsFormate = { force: 'Force', agilite: 'Agilité', constitution: 'Constitution', precision: 'Précision', esprit: 'Esprit', perception: 'Perception', prestance: 'Prestance', sangFroid: 'Sang-froid' };

// ============================================================================
// 🧠 7. GESTION DES NOMS DE FÉES GENRÉS
// ============================================================================

const getFairyName = (type, sexe) => {
  if (!type) return "fée";
  const isF = sexe === 'Femme' || sexe === 'Féminin';
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
// 🧠 8. MÉMOIRE ET MOTEUR GRAMMATICAL
// ============================================================================

const MEMORY_SIZE = 30;
let spokenMemory = [];
let sessionGreetingDone = false; // La salutation de session ne s'affiche qu'une fois par session

const addToMemory = (text) => {
  spokenMemory.unshift(text);
  if (spokenMemory.length > MEMORY_SIZE) spokenMemory.pop();
};

const isInMemory = (text) => spokenMemory.includes(text);
const tirer = (liste) => liste[Math.floor(Math.random() * liste.length)];

const parseTemplate = (template, char) => {
  const isF = char?.genreHumain === 'Féminin' || char?.sexe === 'Femme';

  let result = template
    .replace(/{excl}/g, () => tirer(dico.exclamations))
    .replace(/{nom}/g, () => char?.nomFeerique || char?.nom || tirer(isF ? dico.noms_F : dico.noms_M))
    .replace(/{gadget}/g, () => tirer(dico.gadgets))
    .replace(/{action}/g, () => tirer(dico.actions));

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

  if (char && char.typeFee) {
    const nomFee = getFairyName(char.typeFee, char?.sexe);
    result = result.replace(/{Type}/g, nomFee);
    result = result.replace(/{type}/g, nomFee.toLowerCase());
  }

  return result;
};

// ============================================================================
// 🧠 9. LE CERVEAU CENTRAL
// ============================================================================
export const PIXIE_BUG_RESOLVED_MESSAGE = "Youpi ! Grâce à ton œil de lynx, l'anomalie a été chassée du Grimoire ! Les Gardiens te remercient !";

export const getPixieAdvice = (character = {}, step, fairyData = {}, context = {}) => {
  const { humeur = 'espiegle', sessionCount = 1 } = context;

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
  let pool = [];

  // ---------------------------------------------------------
  // A. SALUTATION DE SESSION (une seule fois par session)
  // ---------------------------------------------------------
  const sessionKeys = [2, 5, 10, 25, 50];
  const sessionKey = sessionKeys.find(k => sessionCount === k);
  if (sessionKey && !sessionGreetingDone && sessionDico[sessionKey]) {
    sessionGreetingDone = true;
    return generateUnique(sessionDico[sessionKey], 'info');
  }

  // ---------------------------------------------------------
  // B. RÉACTIONS D'URGENCE
  // ---------------------------------------------------------
  if (step === 1 && !c.typeFee) {
    return generateUnique([
      "{excl} Tu n'as pas encore choisi ton espèce ! C'est le plus important !",
      "{excl} Sans ton Héritage, tu n'es qu'un humain banal ! Choisis vite !"
    ], 'warning');
  }

  // ---------------------------------------------------------
  // C. HUMEUR DU MOMENT (20% de chance, double poids)
  // ---------------------------------------------------------
  if (Math.random() < 0.20 && humeurDico[humeur]) {
    pool.push(...humeurDico[humeur]);
    pool.push(...humeurDico[humeur]); // ×2 pour qu'elle l'emporte souvent
  }

  // ---------------------------------------------------------
  // D. CYCLE JOUR / NUIT (15% de chance)
  // ---------------------------------------------------------
  if (Math.random() < 0.15) {
    const h = new Date().getHours();
    const creneau = h >= 6 && h < 12 ? 'matin' : h >= 12 && h < 18 ? 'apres_midi' : h >= 18 && h < 22 ? 'soir' : 'nuit';
    pool.push(...(heureDico[creneau] || []));
  }

  // ---------------------------------------------------------
  // E. FORTUNE
  // ---------------------------------------------------------
  if (c.fortune >= 6) {
    pool.push("{excl} Tu as tellement d'argent ! Tu vas m'acheter une montagne de {gadget}s ?");
  } else if (c.fortune <= 2 && c.typeFee && step === 9) {
    pool.push("On a les poches vides hein ? Je peux voler un {gadget} pour toi si tu veux !");
  }

  // ---------------------------------------------------------
  // F. RADAR D'EXPÉRIENCE (mode scellé)
  // ---------------------------------------------------------
  if (c.statut === 'scelle' || c.statut === 'scellé') {
    const { xpDispo } = getXpState(c);
    const currentFeerie = c.caracteristiques?.feerie || 3;
    const currentMasque = c.caracteristiques?.masque || 4;
    const costFeerie = (currentFeerie + 1) * 5;
    const costMasque = Math.max(12, (currentMasque + 1) * 4);

    if (currentFeerie < 8 && xpDispo >= costFeerie) {
      pool.push("{excl} Ton Puits des Âmes déborde ! Tu as assez d'XP pour augmenter ta Féérie et briser un nouveau sceau !");
    } else if (currentMasque < 10 && xpDispo >= costMasque) {
      pool.push("{excl} Ton Puits des Âmes est bien rempli ! Tu as l'Expérience nécessaire pour épaissir ton Masque !");
    } else if (xpDispo === 0) {
      pool.push("{excl} Ton Puits des Âmes est à sec ! Il faut vivre des aventures pour le remplir !");
    }

    // Réactions aux pratiques magiques actives
    const magiesActives = Object.keys(c.data?.magies || {});
    if (magiesActives.length > 0) {
      const magie = tirer(magiesActives);
      pool.push(`Tu pratiques ${magie} ! Une magie rare... J'espère que tu sais ce que tu fais !`);
      pool.push(`Ton aura de ${magie} change de couleur quand tu te concentres. C'est magnifique et légèrement effrayant.`);
    }

    // Druidisme acquis à la création
    if (c.data?.druidismeCreationPP) {
      pool.push("Tu t'es initié{e} au Druidisme avant même le scellage ! Les chênes d'Avalon te regardent d'un autre œil.");
      pool.push("Un Druide de naissance ! Les anciens arbres ont murmuré ton nom avant que tu les connaisses.");
    }

    // Répliques générales sur l'évolution
    pool.push("Maintenant que ton Puits est scellé, ton Héritage est... différent. Je le sens dans l'air.");
    pool.push("Tu as survécu au scellage du Puits des Âmes ! Peu y arrivent sans perdre quelque chose...");
  }

  // ---------------------------------------------------------
  // G. PLACEMENT DE PRODUIT (étape 9, ton Belle Époque)
  // ---------------------------------------------------------
  if (step === 9 && Math.random() < 0.15) {
    pool.push("Dis, si tu avais quelques Francs en trop, le Tisserand du Grimoire accepte parfois les offrandes... Un lien mystérieux sommeille dans ton profil !");
  }

  // ---------------------------------------------------------
  // H. RÉPLIQUES SPÉCIFIQUES À L'ÉTAPE
  // ---------------------------------------------------------
  if (stepDico[step]) {
    pool.push(...stepDico[step]);
    pool.push(...stepDico[step]); // ×2 pour favoriser les répliques contextuelles
  }

  // ---------------------------------------------------------
  // I. LECTURE DES CARACTÉRISTIQUES
  // ---------------------------------------------------------
  const typeData = fairyData?.[c.typeFee];
  if (typeData && typeData.caracteristiques && Object.keys(caracs).length > 0) {
    const filledStats = Object.keys(nomStatsFormate).filter(s => caracs[s] !== undefined);
    if (filledStats.length > 0) {
      const statToCheck = tirer(filledStats);
      const score = caracs[statToCheck];
      const min = typeData.caracteristiques[statToCheck]?.min || 1;
      const max = typeData.caracteristiques[statToCheck]?.max || 5;

      if (score === min && score > 1) {
        pool.push(`Dis donc, pour {un} {Type}, tu n'es vraiment pas très doué{e} en ${nomStatsFormate[statToCheck]} !`);
        pool.push(`C'est le grand minimum syndical en ${nomStatsFormate[statToCheck]} pour {un} {Type}, hein ?`);
      }
      if (score >= max && score > 3) {
        pool.push(`Waouh ! Atteindre le maximum en ${nomStatsFormate[statToCheck]} pour {un} {Type}, c'est exceptionnel !`);
        pool.push(`Les autres {type}s doivent être jal{eux} de ta ${nomStatsFormate[statToCheck]} !`);
      }

      const tier = score >= 5 ? 5 : score;
      if (statsDico[statToCheck] && statsDico[statToCheck][tier]) {
        pool.push(...statsDico[statToCheck][tier]);
      }
    }
  }

  // ---------------------------------------------------------
  // J. RÉPLIQUES DE LORE, PROFILS ET ÉQUIPEMENT
  // ---------------------------------------------------------
  if (step >= 6 && c.profils?.majeur?.nom) {
    switch (c.profils.majeur.nom) {
      case 'Aventurier': pool.push("Un{e} Aventurier{e} ! J'espère qu'on va explorer des ruines secrètes pleines de {gadget}s !"); break;
      case 'Combattant': pool.push("Ouh là là, un{e} Combattant{e} ! Je me cacherai derrière toi au premier coup de feu !"); break;
      case 'Érudit': pool.push("Un{e} Érudit{e} ? Tu vas passer ton temps le nez dans les vieux bouquins d'Avalon ?"); break;
      case 'Gentleman': pool.push("Quelle classe ! N'oublie pas de lever le petit doigt quand tu bois le thé !"); break;
      case 'Roublard': pool.push("Un{e} Roublard{e}... Tu me promets de ne pas me voler mes trésors ?"); break;
      case 'Savant': pool.push("Un{e} Savant{e} ! Tu vas inventer une machine à fabriquer des {gadget}s à l'infini ?"); break;
      default: break;
    }
  }

  const feeAnciennete = typeData?.anciennete || fairyData[c.typeFee]?.anciennete;
  if (feeAnciennete === 'moderne') {
    pool.push("Une fée moderne ! Tu n'as pas peur de toutes ces grosses machines bruyantes ?");
  } else if (feeAnciennete === 'traditionnelle') {
    pool.push("Tu es de la vieille école, comme les arbres d'Avalon ! C'était mieux avant, pas vrai ?");
  }

  if (step >= 9 && c.vieSociale) {
    if (c.vieSociale['Combattant']?.length > 0 || c.vieSociale['Roublard']?.length > 0) {
      pool.push("{excl} Tu as fait des achats louches au marché noir ou chez l'armurier ? Ne tire pas sur mes ailes !");
    }
    if (c.vieSociale['Gentleman']?.length > 0) {
      pool.push("Quelle élégance dans tes achats ! On va aux soirées mondaines avec tout ça ?");
    }
    if (c.vieSociale['Savant']?.length > 0) {
      pool.push("Tu as acheté des trucs bizarres de savant ! C'est pour faire exploser un laboratoire ?");
    }
  }

  switch (c.typeFee) {
    case 'Ange': pool.push("Tes plumes sont toutes douces ! Je peux m'asseoir sur ton épaule ?"); break;
    case 'Bastet': pool.push("{excl} J'adore tes moustaches de chat ! Si je te lance un {gadget}, tu vas courir après ?"); break;
    case 'Fleur de métal': pool.push("{excl} Tu fais tic-tac quand tu respires ! Je peux utiliser un {gadget} pour te réparer ?"); break;
    case 'Fouinard': pool.push("Tu fabriques toujours des trucs super bizarres ! J'adore ton odeur d'huile de moteur !"); break;
    case 'Gargouille': pool.push("Tu es dur comme de la pierre ! C'est pratique pour casser des noix !"); break;
    case 'Gobelin': pool.push("Pouah ! Tu sens le vieux chou et la boue ! Mais je t'aime bien quand même !"); break;
    case 'Gremelin': pool.push("J'adore quand tu démontes des mécanismes ! Tu me donneras les petites vis ?"); break;
    case 'Korrigan': pool.push("Tu connais plein de secrets, toi ! Tu me raconteras une histoire d'Avalon ?"); break;
    case 'Léporide': pool.push("{excl} Tu as de grandes oreilles ! C'est pour mieux m'entendre voler ?"); break;
    case 'Ogre': pool.push("S'il te plaît, grand{e} {type}, ne me mange pas ! Je n'ai pas très bon goût !"); break;
    case 'Ondine': pool.push("Tu sens la pluie d'été ! Fais attention de ne pas mouiller mes ailes !"); break;
    case 'Orc': pool.push("{excl} Tes défenses sont pointues ! Tu as l'air grognon, {nom} !"); break;
    case 'Phénix': pool.push("Waouh ! T'es tout chaud ! Fais attention de ne pas brûler mes jolies ailes !"); break;
    case 'Protys': pool.push("Tu changes tout le temps de visage, j'ai le vertige en te regardant !"); break;
    case 'Succube/Incube': pool.push("Ton charme est démoniaque... Fais attention à qui tu croises avec ton Masque !"); break;
    case 'Sylve': pool.push("Tu sens bon la sève et l'écorce... C'est comme à la maison pour moi !"); break;
    case 'Troll': pool.push("Même si tu es {un} grand{e} {Type} brutal{e}, je sais que tu aimes les petites bêtes... comme moi !"); break;
    case 'Vampyr': pool.push("Tes dents brillent dans le noir ! Tu as mangé des chauves-souris ?"); break;
    default: break;
  }

  if (c.atouts?.some(a => typeof a === 'string' && a.includes('Ami des pixies'))) {
    pool.push("{excl} Tu es {un} Ami{e} des Pixies ! J'ai senti l'odeur de tes cadeaux, c'est pour ça que je suis là !");
  }
  if (c.atouts?.some(a => typeof a === 'string' && a.includes('Anomalie'))) {
    pool.push("Ouh... Je sens une anomalie dans ta magie. C'est mystérieux, j'adore ça !");
  }

  if (pool.length === 0) {
    pool.push("{excl} Je m'ennuie... Je vais {action} pour passer le temps !");
    pool.push("Dis, {nom}, tu crois qu'on aura bientôt fini de remplir tout ça ?");
  }

  return generateUnique(pool, 'info');
};
