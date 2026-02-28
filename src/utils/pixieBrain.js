// src/utils/pixieBrain.js

const dico = {
  exclamations: ["Oooh !", "Dis dis !", "Hihi !", "Regarde !", "Waouh !"],
  noms: ["humain grand et chauve", "gros singe habillé", "marchand de cailloux"],
  gadgets: ["rouage rouillé", "dé à coudre", "vieux bouton", "bout de ficelle", "caillou pointu"] 
};

const tirer = (liste) => liste[Math.floor(Math.random() * liste.length)];

let pixieMemory = {
  hasGadget: false,
  gadgetName: "",
};

export const getPixieAdvice = (character = {}, step) => {
  let advices = [];

  // 1. LA PREMIÈRE RENCONTRE
  if (!pixieMemory.hasGadget) {
    pixieMemory.hasGadget = true;
    pixieMemory.gadgetName = tirer(dico.gadgets);
    return `Hihi ! Tu cherches quoi ? Oh ! Tu me donnes un ${pixieMemory.gadgetName} ? C'est super rigolo ! Je vais le mettre sur ma tête. Je m'appelle Pixie !`;
  }

  // 2. ANALYSE SELON LE LORE (Nouvelles règles !)
  if (character.typeFee) {
     if (character.typeFee === 'Gobelin') advices.push(`Un Gobelin ? Pouah ! Fais attention, ils mangent n'importe quoi et ils sentent les vieux choux !`);
     if (character.typeFee === 'Phénix') advices.push(`Waouh, un gros oiseau tout chaud ! S'il te plaît, ne brûle pas mes jolies ailes !`);
     if (character.typeFee === 'Bastet') advices.push(`Oh un gros minou ! Tu as des moustaches rigolotes ! Tu veux jouer avec mon ${pixieMemory.gadgetName} ?`);
     if (character.typeFee === 'Fleur de métal') advices.push(`Tu es toute en métal ? Tu ressembles à une grosse horloge qui marche toute seule ! Ça fait tic-tac dedans ?`);
  }
  
  if (character.caracteristiques) {
     const totalCaracs = Object.values(character.caracteristiques).reduce((a, b) => a + b, 0);
     if (totalCaracs > 0 && totalCaracs < 26) advices.push(`Tu as fait tomber tes petits points brillants par terre ? Tu n'as pas tout dépensé !`);
     if (character.caracteristiques.force >= 4) advices.push(`Tu es drôlement musclé ! Tu pourrais soulever un gros caillou sans transpirer !`);
     if (character.caracteristiques.sangFroid === 1) advices.push(`Hihi, tu as peur de tout ! Si un méchant arrive, je volerai me cacher dans tes cheveux !`);
  }

  // L'Atout spécial "Ami des pixies"
  if (character.atouts && character.atouts.some(a => a && a.includes('Ami des pixies'))) {
     advices.push(`Waouh ! Tu es un 'Ami des pixies' ! Ça veut dire que tu as plein de petits rouages cachés dans tes poches pour nous ?`);
  }

  // La Fortune (Richesse)
  if (character.fortune >= 7) {
     advices.push(`Dis dis, tu as plein de belles pièces d'or ! Tu pourrais m'acheter une montagne de vieux boutons avec tout ça ?`);
  }

  // 3. REMARQUES GÉNÉRIQUES
  if (advices.length === 0) {
      advices.push(`${tirer(dico.exclamations)} Qu'est-ce que tu fais de beau, le ${tirer(dico.noms)} ?`);
      advices.push(`J'aime bien mon ${pixieMemory.gadgetName}. Tu veux que je te le prête ? Non, c'est une blague !`);
  }

  return advices[Math.floor(Math.random() * advices.length)];
};