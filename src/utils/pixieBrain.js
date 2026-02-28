// src/utils/pixieBrain.js

const dico = {
  exclamations: ["Oooh !", "Dis dis !", "Hihi !", "Regarde !", "Waouh !"],
  noms: ["humain grand et chauve", "gros singe habillé", "marchand de cailloux"],
  // 🟢 CORRECTION : On retire les "un" du dictionnaire !
  gadgets: ["rouage rouillé", "dé à coudre", "vieux bouton", "bout de ficelle", "caillou pointu"] 
};

const tirer = (liste) => liste[Math.floor(Math.random() * liste.length)];

// Mémoire locale de la fée
let pixieMemory = {
  hasGadget: false,
  gadgetName: "",
  introductionsDone: false
};

export const getPixieAdvice = (character, step) => {
  let advices = [];

  // 1. LA PREMIÈRE RENCONTRE
  if (!pixieMemory.hasGadget) {
    pixieMemory.hasGadget = true;
    pixieMemory.gadgetName = tirer(dico.gadgets);
    // 🟢 CORRECTION : On ajoute le "un" ici
    return `Hihi ! Tu cherches quoi ? Oh ! Tu me donnes un ${pixieMemory.gadgetName} ? C'est super rigolo ! Je vais le mettre sur ma tête. Je m'appelle Pixie !`;
  }

  // 2. ANALYSE SELON L'ÉTAPE DU CRÉATEUR
  if (step === 1 && character.typeFee) {
     if (character.typeFee === 'Gobelin') advices.push(`Un Gobelin ? Pouah ! Fais attention, ils mangent n'importe quoi et ils sentent les vieux choux !`);
     if (character.typeFee === 'Phénix') advices.push(`Waouh, un gros oiseau tout chaud ! S'il te plaît, ne brûle pas mes jolies ailes !`);
  }
  
  if (step === 5) {
     const totalCaracs = Object.values(character.caracteristiques || {}).reduce((a, b) => a + b, 0);
     if (totalCaracs > 0 && totalCaracs < 26) advices.push(`Tu as fait tomber tes petits points brillants par terre ? Tu n'as pas tout dépensé !`);
     if (character.caracteristiques?.force >= 4) advices.push(`Tu es drôlement musclé ! Tu pourrais soulever un gros caillou sans transpirer !`);
     if (character.caracteristiques?.sangFroid === 1) advices.push(`Hihi, tu as peur de tout ! Si un méchant arrive, je volerai me cacher dans tes cheveux !`);
  }

  // 3. REMARQUES GÉNÉRIQUES
  if (advices.length === 0) {
      advices.push(`${tirer(dico.exclamations)} Qu'est-ce que tu fais de beau, le ${tirer(dico.noms)} ?`);
      // 🟢 CORRECTION : Ici, "mon rouage rouillé" sonnera parfaitement français !
      advices.push(`J'aime bien mon ${pixieMemory.gadgetName}. Tu veux que je te le prête ? Non, c'est une blague !`);
  }

  return advices[Math.floor(Math.random() * advices.length)];
};