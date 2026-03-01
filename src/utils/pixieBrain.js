// src/utils/pixieBrain.js
// 9.4.0

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
  // 1. LA PREMIÈRE RENCONTRE
  if (!pixieMemory.hasGadget) {
    pixieMemory.hasGadget = true;
    pixieMemory.gadgetName = tirer(dico.gadgets);
    return { 
      text: `Hihi ! Tu cherches quoi ? Oh ! Tu me donnes un ${pixieMemory.gadgetName} ? C'est super rigolo ! Je m'appelle Pixie !`, 
      mood: 'info' 
    };
  }

  // 2. ANALYSE CONTEXTUELLE (Par Étape)
  // (Adaptez les numéros de 'case' si votre ordre d'étapes dans App.js est différent)
  switch (step) {
    case 1: // Identité & Type de Fée
      if (!character.typeFee) return { text: "Coucou ! Il faut choisir ton type de fée pour commencer. C'est magique !", mood: 'warning' };
      if (!character.traitsFeeriques || character.traitsFeeriques.length === 0) return { text: `Un(e) ${character.typeFee} ! Super choix ! N'oublie pas de cocher 1 ou 2 traits de caractère en bas.`, mood: 'warning' };
      return { text: "Ton identité est parfaite ! On passe à la suite ?", mood: 'success' };

    case 3: // Caractéristiques (en supposant que c'est l'étape 3)
      const baseInvestie = Object.values(character.caracteristiques || {}).reduce((a, b) => a + b, 0);
      if (baseInvestie > 0 && baseInvestie < 26) return { text: "Tu as fait tomber des points par terre ! Il t'en reste à distribuer dans tes caractéristiques !", mood: 'warning' };
      if (character.caracteristiques?.sangFroid === 1) return { text: "Hihi, tu as 1 en Sang-froid ! Tu vas avoir peur de ton ombre !", mood: 'info' };
      if (baseInvestie >= 26) return { text: "Parfait ! N'oublie pas que chaque point au-dessus de 3 en Esprit te donne des compétences gratuites !", mood: 'success' };
      break;

    case 7: // Pouvoirs (Step3.js dans votre code correspond souvent à l'étape 7 visuelle)
      const maxPouvoirs = character.caracteristiques?.feerie || 3;
      const currentPouvoirs = character.pouvoirs?.length || 0;
      if (currentPouvoirs < maxPouvoirs) return { text: `Ta Féérie te donne droit à ${maxPouvoirs} pouvoirs. Il t'en manque ${maxPouvoirs - currentPouvoirs} !`, mood: 'warning' };
      if (currentPouvoirs > maxPouvoirs) return { text: `Oups ! Tu as pris trop de pouvoirs (${currentPouvoirs}/${maxPouvoirs}) ! Range-en un dans ta poche.`, mood: 'error' };
      return { text: "Tes pouvoirs sont prêts ! Ça va faire des étincelles !", mood: 'success' };

    case 8: // Atouts
      const atoutsCount = character.atouts?.length || 0;
      if (atoutsCount < 2) return { text: `Les Héritiers ont droit à 2 Atouts ! Choisis bien !`, mood: 'warning' };
      if (atoutsCount > 2) return { text: `Tricheur ! Tu ne peux avoir que 2 Atouts maximum !`, mood: 'error' };
      return { text: "Super Atouts ! Tu es paré !", mood: 'success' };

    case 9: // Vie Sociale / Boutique
      if (character.fortune >= 7) return { text: `Dis dis, tu as plein de belles pièces d'or ! Tu pourrais m'acheter une montagne de vieux boutons avec tout ça ?`, mood: 'info' };
      return { text: "C'est l'heure des emplettes ! Utilise tes PP pour acheter de l'équipement ou un réseau.", mood: 'info' };
      
    default:
      break;
  }

  // 3. REMARQUES LORE & GÉNÉRIQUES (Si tout va bien sur l'étape en cours)
  let advices = [];
  
  if (character.typeFee === 'Gobelin') advices.push(`Un Gobelin ? Pouah ! Fais attention, ils mangent n'importe quoi et ils sentent les vieux choux !`);
  if (character.typeFee === 'Phénix') advices.push(`Waouh, un gros oiseau tout chaud ! S'il te plaît, ne brûle pas mes jolies ailes !`);
  if (character.typeFee === 'Bastet') advices.push(`Oh un gros minou ! Tu as des moustaches rigolotes ! Tu veux jouer avec mon ${pixieMemory.gadgetName} ?`);
  if (character.typeFee === 'Fleur de métal') advices.push(`Tu es toute en métal ? Tu ressembles à une grosse horloge qui marche toute seule ! Ça fait tic-tac dedans ?`);

  if (character.caracteristiques?.force >= 4) advices.push(`Tu es drôlement musclé ! Tu pourrais soulever un gros caillou sans transpirer !`);
  if (character.caracteristiques.sangFroid === 1) advices.push(`Hihi, tu as peur de tout ! Si un méchant arrive, je volerai me cacher dans tes cheveux !`);

  // La Fortune (Richesse)
  if (character.fortune >= 7) {
     advices.push(`Dis dis, tu as plein de belles pièces d'or ! Tu pourrais m'acheter une montagne de vieux boutons avec tout ça ?`);
  }

  if (character.atouts?.some(a => a && a.includes('Ami des pixies'))) advices.push(`Waouh ! Tu es un 'Ami des pixies' ! Tu as des rouages cachés dans tes poches pour nous ?`);

  if (advices.length === 0) {
    advices.push(`${tirer(dico.exclamations)} Qu'est-ce que tu fais de beau, le ${tirer(dico.noms)} ?`);
    advices.push(`J'aime bien mon ${pixieMemory.gadgetName}. Tu veux que je te le prête ? Non, c'est une blague !`);
  }

  return { 
    text: advices[Math.floor(Math.random() * advices.length)], 
    mood: 'info' 
  };
};