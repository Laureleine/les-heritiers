export function resoudreEtape1_OriginesCC() {
  let pnj = {
    identite: {
      prenom: '',
      nom: '',
      nationalite: null, // Contiendrait l'objet pays final exact
      paysResidence: 'France',
      raisonPresence: 'Natif',
      languesParlees: [],
      maitriseFrancais: 'natif' // Modifié dynamiquement par le Statut/Éducation plus loin
    },
    flags: {
      estImmigre: false,
      estEnfantImmigre: false,
      estPeupleOpprime: false
    },
    modificateurs: { TekMod: 3, SolMod: 0 },
    evenements: []
  };

  // 1. Initialisation Sexe / Sexe Grammatical
  pnj.identite.sexe = tables.tirage(tables.SEXES);
  let sexeGrammatical = pnj.identite.sexe.id === 'indetermine' ? tables.tirage(['masculin', 'feminin']) : pnj.identite.sexe.id;

  // 2. Tirage de la Catégorie Démographique Parisienne (Pondérée)
  const categorieInitiale = tables.tiragePondere(tables.DEMOGRAPHIE_PARIS_1899);

  if (categorieInitiale.id === 'autre') {
    // Équivalent du d20 de la table 101A globale du livre : on choisit une sous-table au hasard
    const listeSousTables = [
      'afrique_ouest', 'afrique_est', 'afrique_centrale', 'afrique_sud',
      'amerique_centrale', 'europe_est', 'mediterranee', 'moyen_orient',
      'scandinavie', 'asie_sud_est', 'amerique_sud', 'pacifique_sud', 'europe_ouest'
    ];
    const sousTableChoisie = tables.tirage(listeSousTables);
    
    // Tirage exact du pays au sein de cette sous-table !
    pnj.identite.nationalite = tables.tirage(SOUS_TABLES_CC[sousTableChoisie]);
  } else {
    // Si c'est une nationalité majeure directe (ex: Italienne, Russe), on la cherche dans nos structures
    // En vérifiant d'abord dans l'Europe de l'Est (URSS/Russe), la Méditerranée (Italie) ou l'Europe de l'Ouest
    let trouve = SOUS_TABLES_CC.europe_ouest.find(n => n.id.includes(categorieInitiale.id))
              || SOUS_TABLES_CC.mediterranee.find(n => n.id.includes(categorieInitiale.id))
              || SOUS_TABLES_CC.europe_est.find(n => n.id === 'urss' && categorieInitiale.id === 'russe');
              
    // Fallback de sécurité ou assignation directe
    pnj.identite.nationalite = trouve || { id: 'francaise', label: 'Française', TekMod: 3, langue: 'Français' };
  }

  // Injecter le TekMod exact calculé par le livre
  pnj.modificateurs.TekMod = pnj.identite.nationalite.TekMod;

  // 3. Gestion initiale des Langues (Avant recalcul Culture/Éducation)
  if (pnj.identite.nationalite.id === 'france_cc' || pnj.identite.nationalite.id === 'francaise') {
    pnj.identite.languesParlees.push('Français');
    pnj.identite.nationalite.label = 'Française'; // Uniformisation
  } else {
    pnj.flags.estImmigre = true;
    pnj.identite.languesParlees.push(pnj.identite.nationalite.langue);
    
    // On pose un état de base : s'il vient d'ailleurs, il ne parle pas encore nativement le français.
    // Cet état sera lu et mis à jour lors de l'évaluation sociale et intellectuelle.
    pnj.identite.maitriseFrancais = 'en_attente_evaluation'; 

    const poolRaisons = tables.NOMS_PAR_NATIONALITE[categorieInitiale.id]?.raisonsPresence;
    pnj.identite.raisonPresence = poolRaisons ? tables.tirage(poolRaisons) : 'Visiteur pour l\'Exposition Universelle de 1900';
  }

  // 4. Attribution des Noms via ton fichier pnjTables.js
  const finalId = pnj.identite.nationalite.id === 'france_cc' ? 'francaise' : pnj.identite.nationalite.id;
  const poolNoms = tables.NOMS_PAR_NATIONALITE[finalId] || tables.NOMS_PAR_NATIONALITE.francaise;

  pnj.identite.prenom = sexeGrammatical === 'feminin' 
    ? tables.tirage(poolNoms.prenomsFeminins) 
    : tables.tirage(poolNoms.prenomsMasculins);
    
  pnj.identite.nom = tables.tirage(poolNoms.noms);

  return pnj;
}

export function resoudreEtape2_Culture(pnj, currentYear = 99) { // 99 pour 1899
  // Initialisation des variables d'éducation et de survie exigées par le livre
  pnj.education = {
    pointsDeBase: 0,
    pointsBonus: 0,
    totalPoints: 0
  };
  pnj.competences = {
    survieWilderness: 0,
    survieRural: 0,
    survieUrban: 0
  };

  // ─── TABLE 102A : TECH LEVEL ───
  let deTech = Math.floor(Math.random() * 100) + 1;
  deTech += currentYear; // On ajoute l'année (+99)

  let tmPlus = 0;
  if (deTech <= 30) tmPlus = 0;
  else if (deTech <= 50) tmPlus = 1;
  else if (deTech <= 65) tmPlus = 2;
  else if (deTech <= 80) tmPlus = 3;
  else if (deTech <= 130) tmPlus = 4;
  else if (deTech <= 198) tmPlus = 5;
  else if (deTech <= 210) tmPlus = 6;
  else tmPlus = 7;

  // On applique le bonus au TekMod hérité de la nationalité à l'Étape 1
  pnj.modificateurs.TekMod += tmPlus;

  // Résolution du Tech Level final (Correspondance avec les ID de ton pnjTables.js)
  // En 1899, le TekMod maximum d'origine (3) + le jet max de l'époque (4) plafonne à 7 (Engineering Age)
  let techLevelId = 'industrial'; // Sécurité par défaut
  let baseChanceLiteracy = 40; // Base % pour l'alphabétisation

  if (pnj.modificateurs.TekMod <= 1) {
    techLevelId = 'stone';
    pnj.education.pointsDeBase = 4;
    baseChanceLiteracy = 5;
  } else if (pnj.modificateurs.TekMod === 2) {
    techLevelId = 'bronze';
    pnj.education.pointsDeBase = 6;
    baseChanceLiteracy = 20;
  } else if (pnj.modificateurs.TekMod === 3) {
    techLevelId = 'iron';
    pnj.education.pointsDeBase = 8;
    baseChanceLiteracy = 30;
  } else if (pnj.modificateurs.TekMod === 4) {
    techLevelId = 'medieval';
    pnj.education.pointsDeBase = 4;
    baseChanceLiteracy = 10;
  } else if (pnj.modificateurs.TekMod === 5) {
    techLevelId = 'renaissance';
    pnj.education.pointsDeBase = 10;
    baseChanceLiteracy = 35;
  } else if (pnj.modificateurs.TekMod === 6) {
    techLevelId = 'industrial';
    pnj.education.pointsDeBase = 10;
    baseChanceLiteracy = 40;
  } else if (pnj.modificateurs.TekMod >= 7) {
    techLevelId = 'engineering';
    pnj.education.pointsDeBase = 12;
    baseChanceLiteracy = 60;
  }

  pnj.identite.techLevelGrown = techLevelId;
  pnj.identite.chanceAlphabetisationBase = baseChanceLiteracy;

  // ─── TABLE 102B : CULTURE ───
  let deCulture = Math.floor(Math.random() * 100) + 1;
  deCulture += pnj.modificateurs.TekMod; // Modifié par le TekMod selon la règle du livre

  let cultureTiree = null;
  let pointsSurvieARepartir = 6;

  // Cartographie du d100 + TekMod sur ton objet tables.TABLE_102B
  if (deCulture <= 5) {
    cultureTiree = { id: 'degenerate', label: 'Dégénérée', cuMod: 0, edPointsRoll: () => Math.floor(Math.random() * 4) + 1 };
    pointsSurvieARepartir = 6;
  } else if (deCulture <= 12) {
    cultureTiree = { id: 'primitive', label: 'Primitive', cuMod: 0, edPointsRoll: () => Math.floor(Math.random() * 4) + 1 };
    pointsSurvieARepartir = 7;
  } else if (deCulture <= 15) {
    cultureTiree = { id: 'retrogressive', label: 'Rétrograde', cuMod: 2, edPointsRoll: () => Math.floor(Math.random() * 4) + 1 };
    pointsSurvieARepartir = 6;
  } else if (deCulture <= 20) {
    cultureTiree = { id: 'nomadic', label: 'Nomade', cuMod: 6, edPointsRoll: () => (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) };
    pointsSurvieARepartir = 7;
  } else if (deCulture <= 30) {
    cultureTiree = { id: 'barbaric', label: 'Barbare', cuMod: 2, edPointsRoll: () => Math.floor(Math.random() * 4) + 1 };
    pointsSurvieARepartir = 6;
  } else if (deCulture <= 60) {
    cultureTiree = { id: 'developing', label: 'En développement', cuMod: 6, edPointsRoll: () => (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) };
    pointsSurvieARepartir = 6;
  } else if (deCulture <= 101) {
    cultureTiree = { id: 'dynamic', label: 'Dynamique', cuMod: 10, edPointsRoll: () => (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) };
    pointsSurvieARepartir = 7;
  } else if (deCulture <= 105) {
    cultureTiree = { id: 'stagnant', label: 'Stagnante', cuMod: 4, edPointsRoll: () => Math.floor(Math.random() * 6) + 1 };
    pointsSurvieARepartir = 4;
  } else {
    cultureTiree = { id: 'decadent', label: 'Décadente', cuMod: 8, edPointsRoll: () => (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) };
    pointsSurvieARepartir = 5;
  }

  pnj.identite.culture = cultureTiree.label;
  pnj.modificateurs.CuMod = cultureTiree.cuMod;
  pnj.education.pointsBonus = cultureTiree.edPointsRoll();
  pnj.education.totalPoints = pnj.education.pointsDeBase + pnj.education.pointsBonus;

  // ─── LOGIQUE DE REPARTITION AUTOMATIQUE DE LA SURVIE ───
  // Central Casting dit : distribuez selon l'environnement de croissance.
  if (pnj.flags.estImmigre && (cultureTiree.id === 'primitive' || cultureTiree.id === 'nomadic')) {
    // Un PNJ primitif ou nomade étranger a grandi dans le Wilderness
    pnj.competences.survieWilderness = Math.floor(pointsSurvieARepartir * 0.6);
    pnj.competences.survieRural = pointsSurvieARepartir - pnj.competences.survieWilderness;
  } else {
    // Un natif parisien ou citadin moderne investit massivement en Survie Urbaine
    pnj.competences.survieUrban = Math.floor(pointsSurvieARepartir * 0.7);
    pnj.competences.survieRural = pointsSurvieARepartir - pnj.competences.survieUrban;
  }

  return pnj;
}

export function resoudreEtape3_StatutSocial(pnj) {
  // ─── TABLE 103 : SOCIAL STATUS ───
  let deSocial = Math.floor(Math.random() * 100) + 1;
  deSocial += pnj.modificateurs.CuMod; // On applique le modificateur de culture (Step 2)

  let statut = { id: 'comfortable', label: 'Confortable', solMod: 4, edModifier: 0, moneyMod: 1.0 };
  let estNoble = false;

  if (deSocial <= 5) {
    statut = { id: 'destitute', label: 'Misérable / SDF', solMod: 0, edModifier: -10, moneyMod: 0.1 };
  } else if (deSocial <= 15) {
    statut = { id: 'poor', label: 'Pauvre', solMod: 2, edModifier: -4, moneyMod: 0.5 };
  } else if (deSocial <= 70) {
    statut = { id: 'comfortable', label: 'Confortable', solMod: 4, edModifier: 0, moneyMod: 1.0 };
  } else if (deSocial <= 90) {
    statut = { id: 'well_to_do', label: 'Aisé', solMod: 5, edModifier: 4, moneyMod: 1.5 };
  } else if (deSocial <= 98) {
    // Règle du livre : Les très riches (Wealthy) peuvent être extrêmement riches
    let deRich = Math.floor(Math.random() * 100) + 1;
    if (deRich <= 15) {
      statut = { id: 'extremely_wealthy', label: 'Extrêmement Riche', solMod: 10, edModifier: 12, moneyMod: 20.0 };
    } else {
      statut = { id: 'wealthy', label: 'Fortune / Riche', solMod: 7, edModifier: 8, moneyMod: 3.0 };
    }
  } else {
    // Option 100-110 du livre : NOBILITÉ
    estNoble = true;
    statut = { id: 'nobility', label: 'Noblesse', solMod: 5, edModifier: 6, moneyMod: 1.5 }; 
  }

  // Enregistrement du statut
  pnj.identite.statutSocial = statut.label;
  pnj.modificateurs.SolMod = statut.solMod;
  
  // Application des modificateurs d'éducation sur les points accumulés à l'Étape 2
  pnj.education.totalPoints = Math.max(0, pnj.education.totalPoints + statut.edModifier);
  pnj.identite.moneyModifier = statut.moneyMod;

  // ─── CASCADE : GESTION DE LA NOBLESSE (Table 746) ───
  if (estNoble) {
    // Sexe grammatical déterminé à l'Étape 1 pour accorder le titre (Duc vs Duchesse)
    let sexeId = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;
    
    // Tirage du titre dans notre sous-table
    let titreTire = tables.tirage(TITRES_NOBLESSE_1899);
    pnj.identite.titreNoble = sexeId === 'feminin' ? titreTire.labelF : titreTire.labelM;
    
    // Central Casting : On recalcule la richesse réelle de la famille noble (TiMod)
    let deSocialNoble = Math.floor(Math.random() * 100) + 1;
    deSocialNoble += titreTire.TiMod; // Plus le titre est haut, plus il y a de chances d'être riche

    let fortuneNoble = { label: 'Confortable', solModBonus: 5 };
    if (deSocialNoble <= 20) fortuneNoble = { label: 'Pauvre (Titre ruiné)', solModBonus: 2 };
    else if (deSocialNoble <= 70) fortuneNoble = { label: 'Confortable / Rentes', solModBonus: 5 };
    else fortuneNoble = { label: 'Fortune Immense', solModBonus: 10 };

    pnj.identite.statutSocial = `Noblesse (${pnj.identite.titreNoble} - ${fortuneNoble.label})`;
    pnj.modificateurs.SolMod = Math.min(15, statut.solMod + fortuneNoble.solModBonus); // Capé à 15 selon le livre
  }

  // ─── LOGIQUE DE RECALCUL DE L'ALPHABÉTISATION ET DU FRANÇAIS ───
  // Calcul du pourcentage final d'alphabétisation influencé par la classe sociale
  let chanceAlphabetisationFinale = pnj.identite.chanceAlphabetisationBase;
  if (statut.id === 'destitute') chanceAlphabetisationFinale -= 30;
  if (statut.id === 'poor') chanceAlphabetisationFinale -= 15;
  if (statut.id === 'well_to_do') chanceAlphabetisationFinale += 30;
  if (statut.id === 'wealthy' || statut.id === 'extremely_wealthy') chanceAlphabetisationFinale += 50;
  if (estNoble) chanceAlphabetisationFinale += 20;

  pnj.identite.chanceAlphabetisationFinale = Math.min(95, Math.max(5, chanceAlphabetisationFinale));
  pnj.identite.estAlphabete = (Math.random() * 100) <= pnj.identite.chanceAlphabetisationFinale;

  // Ajustement de la maîtrise du Français pour les immigrés (Table 101) basé sur la classe sociale
  if (pnj.flags.estImmigre && pnj.identite.maitriseFrancais === 'en_attente_evaluation') {
    // Si le PNJ est un noble ou est très riche, il a appris le français dans les salons ou les académies
    if (estNoble || statut.id === 'wealthy' || statut.id === 'extremely_wealthy' || statut.id === 'well_to_do') {
      pnj.identite.maitriseFrancais = 'parfait';
      if (!pnj.identite.languesParlees.includes('Français')) pnj.identite.languesParlees.push('Français');
    } else {
      // Pour les classes laborieuses ou pauvres, on applique le baragouinage ou l'absence totale de maîtrise
      pnj.identite.maitriseFrancais = Math.random() < 0.60 ? 'baragouine' : 'aucun';
    }
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreEtape3_SocialStatus(pnj) { // Note : Ta fonction d'étape précédente s'appelait ainsi
  // (Ce code s'exécute directement à la suite du calcul d'alphabétisation de l'étape 3)
  
  pnj.famille = {
    legitime: true,
    structureFoyer: '',
    nombreFreresSoeurs: 0,
    rangNaissance: 'Unique',
    notesFratrie: ''
  };

  // ─── TABLE 104A : BIRTH LEGITIMACY ───
  let deLegitg = Math.floor(Math.random() * 20) + 1;
  if (deLegitg >= 19) {
    pnj.famille.legitime = false;
    // Tirage du LegitMod (1d4) selon le livre
    let legitMod = Math.floor(Math.random() * 4) + 1;
    pnj.modificateurs.SolMod = Math.max(0, pnj.modificateurs.SolMod - legitMod);
    
    // Cascade sur la Noblesse de l'Étape 3
    if (pnj.identite.titreNoble) {
      pnj.famille.noteLegitg = "Enfant illégitime. N'a pas le droit de porter publiquement le titre familial à moins d'un événement de légitimation tardif.";
    } else {
      pnj.famille.noteLegitg = "Naissance hors mariage. Marquise sociale difficile pour l'époque.";
    }
  }

  // ─── TABLE 104B : THE FAMILY (Qui l'a élevé ?) ───
  let deFoyer = Math.floor(Math.random() * 20) + 1;
  
  if (deFoyer <= 7) {
    pnj.famille.structureFoyer = "Élevé par ses deux parents";
  } else if (deFoyer <= 10) {
    let parentUnique = Math.random() < 0.5 ? "la Mère" : "le Père";
    pnj.famille.structureFoyer = `Élevé par un parent unique (${parentUnique})`;
  } else if (deFoyer === 11) {
    pnj.famille.structureFoyer = "Élevé dans une crèche communautaire";
  } else if (deFoyer === 12) {
    pnj.famille.structureFoyer = "Élevé dans un centre d'État";
  } else if (deFoyer === 13) {
    pnj.famille.structureFoyer = "Élevé par un Oncle et une Tante";
  } else if (deFoyer === 14) {
    let sora = Math.random() < 0.5 ? "un Frère aîné" : "une Sœur aînée";
    pnj.famille.structureFoyer = `Élevé par sa fratrie (${sora})`;
  } else if (deFoyer === 15) {
    pnj.famille.structureFoyer = "Élevé par ses Grands-parents";
  } else if (deFoyer === 16) {
    pnj.famille.structureFoyer = "Élevé par un Tuteur ou Gardien légal";
  } else if (deFoyer === 17) {
    // Cas extrême Central Casting : Livré à lui-même dans la rue !
    pnj.famille.structureFoyer = "Aucun proche connu. Livré à lui-même dans les rues dès l'enfance.";
    pnj.identite.statutSocial = "Misérable / SDF";
    pnj.modificateurs.SolMod = 0;
    // Cascade immédiate sur les compétences de Survie Urbaine (+3 rangs)
    pnj.competences.survieUrban += 3;
  } else if (deFoyer === 18) {
    pnj.famille.structureFoyer = "Élevé dans un Orphelinat public ou religieux";
    pnj.identite.statutSocial = "Pauvre";
    pnj.modificateurs.SolMod = Math.min(pnj.modificateurs.SolMod, 2);
  } else {
    pnj.famille.structureFoyer = "Famille élargie ou situation complexe avec tuteurs multiples";
  }

  // ─── TABLE 104C : SIBLINGS & BIRTH ORDER (Fratrie) ───
  // Si le PNJ n'a pas été abandonné à lui-même ou élevé en isolement total
  if (deFoyer !== 17) {
    let nSiblings = (Math.floor(Math.random() * 6) + 1) - 1; // 1d6 - 1
    pnj.famille.nombreFreresSoeurs = nSiblings;

    if (nSiblings > 0) {
      let deRang = Math.floor(Math.random() * 6) + 1; // 1d6
      
      if (deRang < nSiblings) {
        // Le dé est inférieur au nombre de frères/sœurs, il est au milieu
        pnj.famille.rangNaissance = "Enfant du milieu";
      } else {
        // Pile ou face pour savoir s'il est l'Aîné ou le Dernier
        if (Math.random() < 0.5) {
          pnj.famille.rangNaissance = "Premier-né (Aîné)";
          if (pnj.identite.titreNoble) {
            pnj.famille.notesFratrie = "Héritier direct du titre et des prérogatives de la famille noble.";
          }
        } else {
          pnj.famille.rangNaissance = "Dernier-né (Cadet)";
          if (pnj.identite.titreNoble) {
            pnj.famille.notesFratrie = "Cadet de la famille. Doit s'orienter vers l'armée, le clergé ou les arts pour faire fortune.";
          }
        }
      }
    }
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreEtape5_LieuNaissance(pnj, rpgGenre = 'espionage') { // 'superhero', 'horror', 'espionage', 'pulp'
  pnj.naissance = {
    lieuPrecis: '',
    biModTotal: 0
  };

  // Règle du livre : Les personnages de Super-héros ou d'Horreur ajoutent +5 au jet de base
  let modificateurGenre = (rpgGenre === 'superhero' || rpgGenre === 'horror') ? 5 : 0;
  
  let deLieu = Math.floor(Math.random() * 20) + 1; // 1d20
  deLieu += modificateurGenre;

  // Application de la table 105A du livre
  if (deLieu === 1) {
    pnj.naissance.lieuPrecis = "En plein champ, à découvert";
    pnj.naissance.biModTotal = 5;
  } else if (deLieu === 2) {
    pnj.naissance.lieuPrecis = "Au cœur d'une forêt sauvage";
    pnj.naissance.biModTotal = 5;
  } else if (deLieu <= 4) {
    pnj.naissance.lieuPrecis = "Dans une grange ou un bâtiment agricole";
    pnj.naissance.biModTotal = 5;
  } else if (deLieu <= 7) {
    pnj.naissance.lieuPrecis = "Au domicile de la famille";
    pnj.naissance.biModTotal = 0;
  } else if (deLieu === 8) {
    // Lieu exotique combiné (Tirage de deux lieux exotiques)
    let loc1 = tables.tirage(LIEUX_EXOTIQUES_1899);
    let loc2 = tables.tirage(LIEUX_EXOTIQUES_1899.filter(l => l.id !== loc1.id));
    pnj.naissance.lieuPrecis = `Lieu combiné étrange : ${loc1.label} ET ${loc2.label}`;
    pnj.naissance.biModTotal = loc1.biMod + loc2.biMod;
  } else if (deLieu === 9) {
    pnj.naissance.lieuPrecis = "Dans un bassin ou une piscine (accouchement naturel)";
    pnj.naissance.biModTotal = 5;
  } else if (deLieu <= 11) {
    // Déjà géré à l'Étape 1 pour la cohérence, mais validé ici narrativement
    pnj.naissance.lieuPrecis = `En terre étrangère (${pnj.identite.nationalite.label})`;
    pnj.刻印_BiMod = 5;
  } else if (tables.resolveText(metierEntre, 'masculin').includes('prostitu')) {
    // Logique Central Casting : Un PNJ né dans un milieu spécifique hérite d'un lieu lié
    pnj.nav = true;
  } else if (de20 <= 17) {
    pnj.identite.lieuNaissance = "Dans un hôpital civil ordinaire";
    pnj.attributes_modifiers.Luck += 0; // Pas de modificateur
  } else if (de20 === 18 || de20 === 19) {
    // Né dans un véhicule en mouvement
    let typeVehicule = tables.tirage(['une calèche / un fiacre', 'un omnibus motorisé', 'un navire ou une péniche', 'un ballon dirigeable']);
    pnj.identite.lieuNaissance = `Dans un véhicule en mouvement (${type_vehicule})`;
    pnj.attributes_modifiers.Luck += 5; // Le livre donne un bonus pour la naissance en voyage
  } else {
    // Jet élevé ou bonus de genre -> Passage direct sur les lieux exotiques de Central Casting (105B)
    let exotique = tables.tirage(LIEUX_EXOTIQUES_1899);
    pnj.identite.lieuNaissance = exotique.label;
    pnj.naissance.biModTotal = exotique.biMod;
  }

  // Si le personnage est un enfant des rues (Table 104B case 17), on force la ruelle s'il n'est pas né dans un lieu encore plus bizarre
  if (pnj.famille.structureFoyer.includes("rues") && pnj.naissance.biModTotal < 5) {
    pnj.identite.lieuNaissance = "Abandonné dans une ruelle sombre immédiatement après l'accouchement";
    pnj.naissance.biModTotal = 5;
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreEtape6_EvenementsNaissance(pnj, rpgGenre = 'espionage') {
  pnj.naissance.evenementsInhabituels = [];
  pnj.flags.aCurse = false;
  pnj.flags.gmSecret = false;
  pnj.flags.doubleVie = false;

  // Modificateurs de Central Casting : +20 pour l'horreur et les super-héros
  let bonusGenre = (rpgGenre === 'superhero' || rpgGenre === 'horror') ? 20 : 0;
  let score106A = Math.floor(Math.random() * 100) + 1 + pnj.naissance.biModTotal + bonusGenre;

  let nombreEvenements = 0;
  let forceBonusPlus20 = false;

  // Table 106A : Détermination du nombre d'événements
  if (score106A <= 50) nombreEvenements = 0;
  else if (score106A <= 75) nombreEvenements = 1;
  else if (score106A === 76) { nombreEvenements = 1; forceBonusPlus20 = true; }
  else if (score106A <= 82) nombreEvenements = 2;
  else if (score106A <= 90) nombreEvenements = 2; // Équivalent GM Selects 1
  else if (score106A === 91) { nombreEvenements = 2; forceBonusPlus20 = true; }
  else if (score106A <= 94) nombreEvenements = 2;
  else if (score106A <= 98) nombreEvenements = 3;
  else if (score106A === 99) nombreEvenements = 3;
  else if (score106A === 100) { nombreEvenements = 3; forceBonusPlus20 = true; }
  else if (score106A <= 109) nombreEvenements = 4;
  else if (score106A <= 116) nombreEvenements = 4;
  else if (score106A <= 124) { nombreEvenements = 4; forceBonusPlus20 = true; }
  else nombreEvenements = 5;

  if (nombreEvenements === 0) return pnj;

  // Sexe grammatical pour l'accord des chaînes textuelles (Step 1)
  let sexeId = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;

  // Table 106B : Boucle de tirage des événements
  for (let i = 0; i < nombreEvenements; i++) {
    let deEvent = Math.floor(Math.random() * 100) + 1 + pnj.naissance.biModTotal + bonusGenre;
    if (forceBonusPlus20) deEvent += 20;

    let evtTexte = "";

    // Simulation de la table 106B de ton fichier pnjTables.js
    if (deEvent <= 4) {
      evtTexte = "Le père biologique est convaincu que l'enfant n'est pas le sien et rejette la naissance.";
    } else if (deEvent <= 7) {
      evtTexte = "Phénomène météo saisonnièrement impossible le jour de la naissance (ex: tempête de neige en plein mois de juillet).";
    } else if (deEvent === 8) {
      evtTexte = "Éclipse totale ou assombrissement mystérieux du ciel et des étoiles au moment exact de l'accouchement.";
    } else if (deEvent <= 10) {
      evtTexte = "Une rente ou un fonds d'épargne a été ouvert par un proche anonyme. L'argent de départ est doublé.";
      pnj.identite.moneyModifier *= 2;
    } else if (deEvent <= 16) {
      evtTexte = "Une personnalité notable de la région meurt au moment de la naissance. Certains murmurent qu'il s'agit d'une réincarnation.";
    } else if (deEvent <= 20) {
      evtTexte = "La naissance fait grand bruit dans la presse locale en raison de ses conditions rocambolesques.";
    } else if (deEvent === 21) {
      evtTexte = "Accouchement supervisé par un chirurgien de génie. Reçoit un bonus permanent de +5 en Chance.";
      pnj.attributes_modifiers.Luck += 5;
    } else if (deEvent <= 23) {
      evtTexte = "La mère biologique meurt pendant l'accouchement. Marque profondément l'histoire du foyer.";
    } else if (deEvent <= 25) {
      evtTexte = "Des déchets chimiques ou industriels expérimentaux ont été déversés à proximité immédiate de la couche.";
    } else if (deEvent <= 28) {
      evtTexte = "Complications graves. L'enfant frôle la mort mais survit miraculeusement. Bonus de +1 en Constitution.";
      pnj.attributes_modifiers.Constitution += 1;
    } else if (deEvent === 29) {
      evtTexte = "Mort tragique d'un jumeau pendant le travail. Un secret lourd à porter.";
    } else if (deEvent <= 34) {
      evtTexte = "Naissance d'un jumeau identique. Il y a 20% de chances d'avoir été séparés à la naissance avec un alignement opposé.";
    } else if (deEvent <= 45) {
      evtTexte = "L'enfant est dissimulé aux yeux du monde pendant ses premières années pour des raisons inavouables.";
    } else if (deEvent <= 48) {
      evtTexte = "Un occultiste ou un médium déclare l'enfant frappé par une malédiction familiale occulte réveillée.";
      pnj.flags.aCurse = true;
    } else if (deEvent === 49) {
      evtTexte = "Secret de naissance majeur gardé sous clé par le MJ.";
      pnj.flags.gmSecret = true;
    } else if (deEvent <= 60) {
      evtTexte = "Placé à l'adoption dès la naissance à la suite d'un abandon ou d'une tragédie.";
    } else if (deEvent <= 62) {
      evtTexte = "Aucun registre officiel n'a consigné la naissance. Le PNJ n'existe pas pour l'administration française.";
    } else if (deEvent <= 81) {
      evtTexte = "Né avec une marque de naissance distinctive et mystérieuse sur le corps.";
    } else if (deEvent === 82) {
      // Les fameuses anomalies physiques (ex: empreintes inversées du mode merveilleux ou anomalies réelles)
      let anomaliePool = [
        "Empreintes de pas qui ne coïncident pas avec la direction marchée (Anomalie du continuum).",
        "Peau qui reflète la lumière à l'envers selon l'heure du jour.",
        "Yeux de couleurs changeantes selon ce qu'ils fixent.",
        "Ombre portée qui ne correspond jamais tout à fait à la silhouette réelle."
      ];
      evtTexte = tables.tirage(anomaliePool);
    } else if (deEvent <= 93) {
      evtTexte = "Né pendant un événement historique mondial majeur (Guerre, peste, émeute politique).";
    } else if (deEvent === 94) {
      evtTexte = "Manifestation innée de capacités psychiques subtiles dès les premiers vagissements.";
    } else if (deEvent <= 120) {
      evtTexte = "Un mystérieux étranger dépose un présent ou un artefact de valeur dans le berceau avant de disparaître.";
    } else {
      // ÉTAPE EXTRÊME : TABLE 106C - HORROR BIRTH EVENTS
      let deHorreur = Math.floor(Math.random() * 6) + 1;
      if (deHorreur === 1) evtTexte = "Avait un jumeau à la naissance, mais celui-ci a mordu le médecin et s'est enfui par la fenêtre.";
      else if (deHorreur === 2) evtTexte = "Grossièreté occulte : les animaux à un kilomètre à la ronde ont péri d'effroi le jour de sa naissance.";
      else if (deHorreur === 3) pnj.flags.gmSecret = true;
      else if (deHorreur === 4) evtTexte = "Des spectres ou des esprits errants ont entouré le berceau le soir de l'accouchement.";
      else if (deHorreur === 5) evtTexte = "Seul survivant inexpliqué d'un désastre mystique ayant rasé son lieu de naissance.";
      else evtTexte = "Reçoit une lettre cachetée à son nom le jour de sa naissance, prédisant un drame à chaque anniversaire.";
    }

    if (evtTexte !== "" && !pnj.naissance.evenementsInhabituels.includes(evtTexte)) {
      pnj.naissance.evenementsInhabituels.push(evtTexte);
    }
  }

  return pnj;
}

import * as tables from './pnjTables.js';

// ─────────────────────────────────────────────────────────────────────────────
// ÉTAPE 7 : TABLE 107 - PARENTS & CONFIGURATION DU FOYER
// ─────────────────────────────────────────────────────────────────────────────
export function resoudreEtape7_ConfigurationParents(pnj) {
  pnj.parents = {
    configurationMetier: '',
    noteworthiness: []
  };

  // Table 107A : Répartition des emplois dans le foyer
  let de107A = Math.floor(Math.random() * 20) + 1;
  let categorieMetier = 'industrial'; // Fallback par défaut

  if (de107A <= 12) {
    pnj.parents.configurationMetier = "Le chef de famille possède une seule occupation à plein temps.";
  } else if (de107A <= 14) {
    pnj.parents.configurationMetier = "Le chef de famille cumule un emploi principal et un emploi secondaire.";
  } else if (de107A <= 16) {
    pnj.parents.configurationMetier = "Le chef de famille ne travaille pas, c'est l'autre parent qui subvient aux besoins.";
  } else if (de107A <= 18) {
    pnj.parents.configurationMetier = "Les deux parents travaillent activement à plein temps.";
  } else if (de107A === 19) {
    pnj.parents.configurationMetier = "Le chef de famille était un Aventurier / Franc-tireur de l'ombre.";
  } else {
    pnj.parents.configurationMetier = "Pas d'occupation apparente. L'argent semble mystérieusement disponible.";
  }

  // Table 107B : Événements notables de la vie des parents (1d3 roulements)
  let nNoteworthyItems = Math.floor(Math.random() * 3) + 1; // 1d3
  for (let i = 0; i < nNoteworthyItems; i++) {
    let item = tables.tirage(SECRETS_PARENTS_CC);
    let cibleParent = Math.random() < 0.66 ? "le Chef de famille" : "l'autre parent/tuteur";
    pnj.parents.noteworthiness.push(`${cibleParent} : ${item.label}`);
    
    // Cascade immédiate vers les flags globaux du PNJ
    if (item.id === 'enemy') pnj.flags.heriteRival = true;
    if (item.id === 'curse') pnj.flags.aCurse = true;
  }

  return pnj;
}

// ─────────────────────────────────────────────────────────────────────────────
// ÉTAPE 8 & 9 : TABLES 208 & 209 - CHRONOLOGIE DE LA JEUNESSE (ENFANCE & ADOLESCENCE)
// ─────────────────────────────────────────────────────────────────────────────
export function resoudreEtapes8Et9_Jeunesse(pnj, rpgGenre = 'espionage') {
  pnj.jeunesse = {
    evenementsEnfance: [],
    evenementsAdolescence: []
  };
  pnj.bracketsPersonality = []; // Stocke les symboles [L], [D], [N], [R] pour l'alignement futur

  // Central Casting : 1d3 événements pour l'enfance, 1d3 pour l'adolescence
  let nEvtsEnfance = Math.floor(Math.random() * 3) + 1;
  let nEvtsAdolescence = Math.floor(Math.random() * 3) + 1;

  // Sexe grammatical pour l'accord des textes (Step 1)
  let sexeId = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;

  // --- BOUCLE 1 : L'ENFANCE (Âges 1 à 12) ---
  for (let i = 0; i < nEvtsEnfance; i++) {
    let age = Math.floor(Math.random() * 12) + 1; // 1d12
    let deEvt = Math.floor(Math.random() * 20) + 1 + pnj.modificateurs.SolMod; // d20 + SolMod

    let logEvt = runTable208Logic(deEvt, 'enfance', age, pnj, rpgGenre, sexeId);
    pnj.jeunesse.evenementsEnfance.push(logEvt.texte);
    if (logEvt.bracket) pnj.bracketsPersonality.push(logEvt.bracket);
  }

  // --- BOUCLE 2 : L'ADOLESCENCE (Âges 13 à 18) ---
  for (let i = 0; i < nEvtsAdolescence; i++) {
    let age = (Math.floor(Math.random() * 6) + 1) + 12; // 1d6 + 12
    let deEvt = Math.floor(Math.random() * 20) + 1 + pnj.modificateurs.SolMod;

    let logEvt = runTable208Logic(deEvt, 'adolescence', age, pnj, rpgGenre, sexeId);
    pnj.jeunesse.evenementsAdolescence.push(logEvt.texte);
    if (logEvt.bracket) pnj.bracketsPersonality.push(logEvt.bracket);
  }

  return pnj;
}

// Moteur interne de résolution de la Table 208 & 209 (Cascade d'événements)
function runTable208Logic(score, periode, age, pnj, rpgGenre, sex) {
  let res = { texte: "", bracket: null };

  if (score <= 2) {
    res.texte = `[Âge ${age}] Conflit ou guerre internationale impactant le foyer. La famille est impliquée dans des soulèvements populaires.`;
    res.bracket = 'R';
  } else if (score === 3) {
    res.texte = `[Âge ${age}] Trouve un objet mystérieux ou un artefact ancien oublié dans une décharge ou des ruines.`;
    res.bracket = 'L';
  } else if (score === 4) {
    res.texte = `[Âge ${age}] Manque l'école de façon répétée. Perte d'opportunités intellectuelles (Malus éducation).`;
    pnj.education.totalPoints = Math.max(0, pnj.education.totalPoints - 2);
    res.bracket = 'D';
  } else if (score === 5) {
    // Cascade Table 526 : Underworld
    res.texte = `[Âge ${age}] Entraîné par des camarades dans des activités criminelles ou de contrebande à Paris.`;
    res.bracket = 'D';
  } else if (score <= 7) {
    // Événement du destin (Fateful Event) : Pile ou face Tragédie / Merveilleux
    if (Math.random() < 0.5) {
      res.texte = `[Âge ${age}] Tragédie familiale : Un accident ou incendie frappe un proche.`;
      res.bracket = 'R';
    } else {
      res.texte = `[Âge ${age}] Événement merveilleux : Un coup de chance ou une bénédiction inattendue change son regard sur le monde.`;
      res.bracket = 'L';
    }
  } else if (score === 8) {
    // LOGIQUE DE LA TABLE 209 : SPECIAL EVENTS OF YOUTH
    res.texte = `[Âge ${age}] ` + resolveTable209Special(periode, pnj, rpgGenre);
    res.bracket = 'N';
  } else if (score === 9) {
    // Apprend le métier de ses parents de manière précoce (Lien direct Step 7)
    res.texte = `[Âge ${age}] Devient l'apprenti du foyer et apprend les rudiments professionnels de ses tuteurs.`;
    res.bracket = 'N';
  } else if (score === 10) {
    res.texte = `[Âge ${age}] Fugue ou s'enfuit du domicile familial pour vivre d'expédients pendant plusieurs mois.`;
    res.bracket = 'R';
  } else if (score === 11) {
    res.texte = `[Âge ${age}] Rencontre ou expérience mystique marquante lors d'une messe ou d'une veillée occulte.`;
    res.bracket = 'R';
  } else if (score <= 13) {
    res.texte = `[Âge ${age}] La dynamique du foyer est stricte mais aimante. Les parents soutiennent ses choix.`;
    res.bracket = 'L';
  } else if (score <= 15) {
    res.texte = `[Âge ${age}] Reçoit un héritage anticipé ou une dotation financière (Argent de départ augmenté de +25%).`;
    pnj.identite.moneyModifier += 0.25;
    res.bracket = 'L';
  } else if (score <= 18) {
    // Changement de classe sociale ou de lieu de vie
    res.texte = `[Âge ${age}] Bouleversement ou déménagement. La famille change de quartier à Paris pour s'adapter à l'économie.`;
    res.bracket = 'R';
  } else {
    // Jet de haute classe sociale (SolMod élevé) -> Accès aux privilèges
    res.texte = `[Âge ${age}] Entourage de haute société. Fréquente les salons littéraires et artistiques parisiens.`;
    res.bracket = 'L';
  }

  return res;
}

// Résolution des tables spécifiques 209A (Enfance) et 209B (Adolescence)
function resolveTable209Special(periode, pnj, rpgGenre) {
  if (periode === 'enfance') {
    let de209A = Math.floor(Math.random() * 6) + 1;
    if (de209A <= 2) return "S'attache de façon maladive à un vieux jouet ou une relique d'enfance qu'il refuse de quitter.";
    if (de209A <= 4) return "Se découvre une amitié fusionnelle avec un animal de compagnie qui ne le quitte jamais.";
    return `Traumatisme ou témoin direct d'un incident typé par le genre du jeu (${rpgGenre}).`;
  } else {
    let de209B = Math.floor(Math.random() * 6) + 1;
    if (de209B <= 2) return "Obtient une bourse d'études ou d'excellence grâce à des aptitudes intellectuelles précoces.";
    if (de209B <= 4) return "S'éprend d'un amour de jeunesse secret qui influencera ses choix futurs.";
    return "Se fait enrôler temporairement dans un club politique clandestin ou une faction de la pègre parisienne.";
  }
}

import * as tables from './pnjTables.js';

// ─────────────────────────────────────────────────────────────────────────────
// ÉTAPE 10 : TABLE 210 - EDUCATION & INSCRIPTION PROFESSIONNELLE
// ─────────────────────────────────────────────────────────────────────────────
export function resoudreEtape10_EducationEtMetier(pnj) {
  // Lancement du dé d4 / d10 combiné du livre (+ SolMod + CuMod)
  let de10's = (Math.floor(Math.random() * 4) + 1) * 10; // d4 * 10
  let de1's = Math.floor(Math.random() * 10); // d10 (0 à 9)
  let score210 = de10's + de1's + pnj.modificateurs.SolMod + pnj.modificateurs.CuMod;

  let niveauEtudes = "";
  let multiplicateurCout = 1;

  if (score210 <= 22) {
    niveauEtudes = "Pas d'éducation formelle / Autodidacte";
    multiplicateurCout = 1;
  } else if (score210 <= 25) {
    niveauEtudes = "École des métiers / Apprentissage technique";
    pnj.education.totalPoints += Math.floor(Math.random() * 4) + 1; // +1d4 points
    multiplicateurCout = 1;
  } else if (score210 <= 33) {
    niveauEtudes = "Éducation typique / Certificat d'études";
    pnj.education.totalPoints += (Math.floor(Math.random() * 4) + 1) * 2; // +2d4 points
    multiplicateurCout = 2;
  } else if (score210 === 34) {
    niveauEtudes = "Académie Militaire (Saint-Cyr / Navale)";
    pnj.education.totalPoints += Math.floor(Math.random() * 4) + 5; // +1d4+4 points
    multiplicateurCout = 2;
    pnj.identite.titreNoble = pnj.identite.titreNoble ? pnj.identite.titreNoble : "Officier";
  } else {
    // Éducation supérieure et universités prestigieuses (Sorbonne, Sciences Po...)
    niveauEtudes = "Éducation supérieure d'excellence / Doctorat";
    pnj.education.totalPoints += (Math.floor(Math.random() * 6) + 1) * 3; // +3d6 points
    multiplicateurCout = 3;
  }

  pnj.identite.cursusEducation = niveauEtudes;

  // Calcul du niveau de maîtrise du métier (Rank) basé sur les points d'éducation
  // Règle Central Casting : Acheter des paliers de maîtrise (Ranks de 1 à 6)
  let pointsDisponibles = pnj.education.totalPoints;
  let rankMetier = 1;

  // Barème officiel du livre indexé sur le multiplicateur de coût
  if (pointsDisponibles >= 63 * multiplicateurCout) { rankMetier = 6; pointsDisponibles -= 63 * multiplicateurCout; }
  else if (pointsDisponibles >= 31 * multiplicateurCout) { rankMetier = 5; pointsDisponibles -= 31 * multiplicateurCout; }
  else if (pointsDisponibles >= 15 * multiplicateurCout) { rankMetier = 4; pointsDisponibles -= 15 * multiplicateurCout; }
  else if (pointsDisponibles >= 7 * multiplicateurCout) { rankMetier = 3; pointsDisponibles -= 7 * multiplicateurCout; }
  else if (pointsDisponibles >= 3 * multiplicateurCout) { rankMetier = 2; pointsDisponibles -= 3 * multiplicateurCout; }

  pnj.identite.rankMetier = rankMetier;
  pnj.education.pointsRestants = pointsDisponibles; // Les restants iront dans les Hobbies/Unusual Skills

  return pnj;
}

// ─────────────────────────────────────────────────────────────────────────────
// ÉTAPE 11 : TABLE 211 - SIGNIFICANT EVENTS OF ADULTHOOD
// ─────────────────────────────────────────────────────────────────────────────
export function resoudreEtape11_EvenementAdulte(pnj, rpgGenre = 'espionage') {
  pnj.adulte = {
    evenementDeclencheur: ""
  };

  // Lecture combinée d4/d10 pour la table 211
  let de10's = (Math.floor(Math.random() * 4) + 1) * 10;
  let de1's = Math.floor(Math.random() * 10);
  let score211 = de10's + de1's;

  let sexeId = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;

  if (score211 <= 11) {
    pnj.adulte.evenementDeclencheur = "Incapable de vivre de sa carrière principale, il a dû apprendre un second métier d'expédients à Paris.";
    pnj.bracketsPersonality.push('N');
  } else if (score211 === 12) {
    pnj.adulte.evenementDeclencheur = "Mariage brisé ou tragédie sentimentale le jour des noces à la suite d'un événement inattendu.";
    pnj.bracketsPersonality.push('R');
  } else if (score211 <= 14) {
    pnj.adulte.evenementDeclencheur = "Enrôlement ou conscription dans l'armée française (ou forces coloniales) à la suite d'un coup de tête ou d'un décret.";
    resoudreEvenementMilitaire(pnj);
    pnj.bracketsPersonality.push('R');
  } else if (score211 === 15) {
    pnj.adulte.evenementDeclencheur = "Rencontre fortuite ou confrontation de témoin avec un grand criminel ou une figure occulte majeure de la capitale.";
    pnj.bracketsPersonality.push('R');
  } else if (score211 <= 17) {
    pnj.adulte.evenementDeclencheur = "Pris de wanderlust, il plaque tout pour voyager à l'étranger avant de revenir s'ancrer à Paris.";
    pnj.bracketsPersonality.push('N');
  } else if (score211 === 18) {
    pnj.adulte.evenementDeclencheur = "S'implique activement dans une manifestation violente, une grève ouvrière ou un complot anarchiste secret.";
    pnj.bracketsPersonality.push('R');
  } else if (score211 <= 22) {
    pnj.adulte.evenementDeclencheur = "Sauve héroïquement la vie d'un inconnu dans les rues de Paris, s'en faisant un allié indéfectible.";
    pnj.bracketsPersonality.push('L');
  } else if (score211 <= 26) {
    // Événement spécifique au genre du JDR (Horreur, Espionnage, Pulp...)
    pnj.adulte.evenementDeclencheur = `Événement majeur lié directement aux intrigues de type [${rpgGenre.toUpperCase()}]. Sa vie bascule.`;
    pnj.bracketsPersonality.push('R');
  } else if (score211 <= 30) {
    pnj.adulte.evenementDeclencheur = "Drame ou accident du travail majeur lui infligeant une blessure mémorable.";
    pnj.bracketsPersonality.push('D');
  } else {
    pnj.adulte.evenementDeclencheur = "Hérite de parts d'action d'une puissante manufacture ou d'un consortium industriel d'armement ou de télégraphie.";
    pnj.bracketsPersonality.push('N');
  }

  return pnj;
}

// ─────────────────────────────────────────────────────────────────────────────
// ÉTAPE 12 : TABLE 312 - ALIGNMENT & ATTITUDE (CALCUL MATHÉMATIQUE FINAL)
// ─────────────────────────────────────────────────────────────────────────────
export function resoudreEtape12_AlignementFinal(pnj) {
  let lightside = 0;
  let darkside = 0;
  let neutral = 0;

  // 1. Dépouillement des polarités accumulées au fil de la vie du PNJ
  pnj.bracketsPersonality.forEach(b => {
    if (b === 'L') lightside++;
    if (b === 'D') darkside++;
    if (b === 'N') neutral++;
    if (b === 'R') {
      // Résolution du jet aléatoire [R] (Table 312A)
      let roll = Math.random();
      if (roll < 0.33) lightside++;
      else if (roll < 0.66) darkside++;
      else neutral++;
    }
  });

  // 2. Application de la règle d'alignement du livre (Écart de 2 points minimum)
  let alignementFinal = "Neutre";
  let attitudeFinale = "Conformiste";

  if (lightside >= darkside + 2) {
    alignementFinal = "Lightside (Bon)";
    // Choix de l'attitude de lumière
    let attitudes = ["Éthique", "Consciencieux", "Chevaleresque"];
    attitudeFinale = tables.tirage(attitudes);
  } else if (darkside >= lightside + 2) {
    alignementFinal = "Darkside (Floué / Mauvais)";
    // Choix de l'attitude d'ombre
    let attitudes = ["Dépravé", "Déviant", "Diabolique"];
    attitudeFinale = tables.tirage(attitudes);
  } else {
    alignementFinal = "Neutre";
    // Choix de l'attitude neutre
    let attitudes = ["Égoïste", "Apathique", "Matérialiste", "Anarchique", "Conformiste"];
    attitudeFinale = tables.tirage(attitudes);
  }

  pnj.psychisme = {
    alignement: alignementFinal,
    attitude: attitudeFinale,
    scoresInternes: { lightside, darkside, neutral }
  };

  // Nettoyage final des structures temporaires
  delete pnj.bracketsPersonality;

  return pnj;
}

// Fonction utilitaire pour la conscription militaire
function resoudreEvenementMilitaire(pnj) {
  pnj.identite.metier = "Militaire / Soldat";
  pnj.identite.rankMetier = Math.max(pnj.identite.rankMetier, 2);
}

import * as tables from './pnjTables.js';

export function resoudreEtapes13Et14_DetailsPNJ(pnj) {
  pnj.diversions = {
    hobbyPrincipal: "",
    rankHobby: 1,
    phobie: "Aucune phobie notable",
    comportementDistinctif: ""
  };

  let sexeGrammatical = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;

  // ─── TABLE 419 : HOBBIES (Utilisation des points d'Éducation restants) ───
  let hobbyTire = tables.tirage(tables.TABLES_REEL.hobbies);
  pnj.diversions.hobbyPrincipal = hobbyTire;

  // Calcul du niveau du Hobby basé sur les points restants de l'Étape 10
  let pointsPourHobby = pnj.education.pointsRestants || 0;
  let rankHobbyBonus = 1;
  
  if (pointsPourHobby >= 15) rankHobbyBonus = 3;
  else if (pointsPourHobby >= 7) rankHobbyBonus = 2;
  
  pnj.diversions.rankHobby = rankHobbyBonus;

  // ─── GESTION DES PHOBIES (Séquence Aléatoire) ───
  // 15% de chances de base d'avoir une phobie selon Central Casting
  if (Math.random() <= 0.15 || pnj.flags.aCurse) {
    pnj.diversions.phobie = tables.tirage(PHOBIES_CC);
  }

  // ─── GESTION DU COMPORTEMENT DISTINCTIF & FILTRAGE ───
  let comportementValide = false;
  let tentatives = 0;

  while (!comportementValide && tentatives < 10) {
    tentatives++;
    let compTire = tables.tirage(COMPORTEMENTS_CC);
    let texteComp = compTire.m;

    // LOGIQUE DE SÉCURITÉ CENTRAL CASTING : Filtrage des frictions narratives
    // Règle 1 : Un espion ou agent double ne peut pas être un "distrait chronique" (Question de survie)
    const estEspion = pnj.adulte.evenementDeclencheur.includes("spy") || pnj.adulte.evenementDeclencheur.includes("Espionnage") || (pnj.secret && pnj.secret.includes("agent double"));
    if (estEspion && (texteComp.includes("distrait") || texteComp.includes("maladroit"))) {
      continue; // Rejeté, on relance le dé
    }

    // Règle 2 : Cohérenence Phobie / Comportement
    // Si sa phobie concerne les animaux, son comportement ne peut pas être "amoureux des animaux"
    if (pnj.diversions.phobie.includes("animaux") && texteComp.includes("animaux")) {
      continue; // Rejeté
    }

    // Si on passe les filtres, le comportement est validé
    pnj.diversions.comportementDistinctif = texteComp;
    comportementValide = true;
  }

  // Fallback si la boucle s'est bloquée
  if (!pnj.diversions.comportementDistinctif) {
    pnj.diversions.comportementDistinctif = "Possède un maintien excessivement droit, une parfaite maîtrise de soi.";
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreEtape13_MetierSpecifique(pnj, rpgGenre = 'horror') {
  // Si l'étape 10 a déterminé que le personnage a un métier classique, on ne force pas la table 414
  // Sauf si le PNJ a un flag d'adulte ou d'événement spécial qui l'y pousse.
  
  let sexeId = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;
  
  // Choix du pool selon le genre de ta campagne (Horreur, Espionnage...)
  const poolGenre = TABLES_414_GENRES_1899[rpgGenre] || TABLES_414_GENRES_1899.horror;
  const metierChoisi = tables.tirage(poolGenre);

  // Application des accords grammaticaux de ton utilitaire resolveText
  if (metierChoisi.nom) {
    pnj.identite.metier = metierChoisi.nom;
  } else {
    pnj.identite.metier = sexeId === 'feminin' ? (metierChoisi.labelF ?? metierChoisi.labelM) : metierChoisi.labelM;
  }

  // L'attribution d'un métier de genre augmente la polarité neutre ou d'ombre de sa vie
  pnj.identite.categorieCarriere = `Spéciale [${rpgGenre.toUpperCase()}]`;

  return pnj;
}

export function resoudreEtape14_HobbiesEtPassions(pnj) {
  pnj.hobby = {
    type: '',
    degreInteret: 'Casual',
    modificateurRank: 0
  };

  // 1. Tirage du degré d'intérêt (Table 419B)
  const deInteret = Math.floor(Math.random() * 20) + 1; // Simulation d'un d20
  
  if (deInteret <= 4) {
    pnj.hobby.degreInteret = 'Casual (Occasionnel)';
    pnj.hobby.modificateurRank = -1;
  } else if (deInteret <= 12) {
    pnj.hobby.degreInteret = 'Sporadique';
    pnj.hobby.modificateurRank = 0;
  } else if (deInteret <= 19) {
    pnj.hobby.degreInteret = 'Dévoué';
    pnj.hobby.modificateurRank = 1;
  } else {
    pnj.hobby.degreInteret = 'Passion Obsessive (Consuming Passion)';
    pnj.hobby.modificateurRank = 2;
    // L'obsession du Central Casting impacte les finances de départ !
    pnj.identite.moneyModifier *= 0.5; // Il claque tout dedans
    pnj.flags.estObsessionnel = true;
  }

  // 2. Sélection du Hobby (Table 419A - Tiré de ton pnjTables.js)
  // On utilise le pool de ton fichier pour rester raccord avec ton univers
  const hobbyTire = tables.tirage(tables.TABLES_REEL.hobbies); 
  pnj.hobby.type = typeof hobbyTire === 'string' ? hobbyTire : hobbyTire.nom;

  // Calcul du niveau final du Hobby basé sur tes dés d'intérêt (Table 419C)
  let baseRankHobby = Math.floor(Math.random() * 4) + 1; // 1d4 base
  let finalRankHobby = baseRankHobby + pnj.hobby.modificateurRank;
  
  pnj.hobby.rank = finalRankHobby < 1 ? 1 : finalRankHobby;

  return pnj;
}

import * as tables from './pnjTables.js';

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 520 : TRAGEDIES
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable520_Tragedie(pnj) {
  let de10's = (Math.floor(Math.random() * 4) + 1) * 10; // d4 * 10
  let de1's = Math.floor(Math.random() * 10); // d10
  let score520 = de10's + de1's;

  let cause = tables.tirage(CAUSES_TRAGIQUES_1899).label;
  let rapportDrame = "";

  if (score520 <= 12) {
    rapportDrame = `Injustement emprisonné à Paris pour un crime qu'il n'a pas commis, à la suite de : ${cause}.`;
    pnj.modificateurs.SolMod = Math.max(0, pnj.modificateurs.SolMod - 1); // La prison tache le statut social
  } else if (score520 <= 15) {
    rapporter = `Un grave accident industriel ou d'atelier à vapeur détruit son gagne-pain et lui inflige une blessure mémorable, causée par : ${cause}.`;
    pnj.identite.moneyModifier *= 0.5; // Frais médicaux de l'époque
  } else if (score520 === 16) {
    rapportDrame = `Son animal de compagnie ou sa monture fidèle meurt de façon suspecte, liée à : ${cause}.`;
  } else if (score520 <= 18) {
    rapportDrame = `Orphelinat ou perte d'un protecteur clé à la suite de : ${cause}.`;
    pnj.modificateurs.SolMod = Math.max(0, pnj.modificateurs.SolMod - 2);
  } else if (score520 <= 23) {
    rapportDrame = `Un de ses biens les plus précieux ou un héritage familial disparaît mystérieusement (vol ou perte).`;
    pnj.identite.moneyModifier *= 0.8;
  } else if (score520 <= 28) {
    rapportDrame = `Reçoit une grave blessure physique qui guérit mal, séquelle directe de : ${cause}.`;
    // Séquelle esthétique Belle Époque
    if(pnj.attributes_modifiers.Appearance) pnj.attributes_modifiers.Appearance -= 2;
  } else if (score520 <= 35) {
    // Le drame sentimental classique du Central Casting
    let dramesAmour = [
      "Son grand amour le quitte pour son pire rival, lui laissant le cœur brisé.",
      "Son amant/épouse est interné de force dans un asile d'aliénés à la suite d'une folie soudaine.",
      "Son partenaire disparaît du jour au lendemain sans laisser la moindre trace à Paris."
    ];
    rapportDrame = tables.tirage(dramesAmour);
  } else if (score520 <= 40) {
    // La fameuse tragédie avec un "Silver Lining" (Nuage avec une doublure d'argent)
    rapportDrame = `Un terrible désastre frappe son quotidien à cause de : ${cause}... MAIS cet événement cache une bénédiction inattendue !`;
    // Cascade instantanée vers la table des miracles !
    let bienfait = executerTable521_Miracle(pnj);
    rapportDrame += ` (Bénédiction résultante : ${bienfait})`;
  } else if (score520 <= 45) {
    rapportDrame = "Ruine financière totale. La famille ou le PNJ perd l'intégralité de ses économies et de ses investissements.";
    pnj.identite.moneyModifier = 0.1; // Il ne reste que 10% de l'argent de poche
    pnj.modificateurs.SolMod = Math.max(0, pnj.modificateurs.SolMod - 3);
  } else {
    // Score 46-50 : Mariage forcé ou rupture de ban familial
    rapportDrame = "Contraint par sa famille ou par les dettes d'accepter un mariage arrangé et malheureux avec un être tyrannique.";
    pnj.flags.mariageForce = true;
  }

  return rapportDrame;
}

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 521 : SOMETHING WONDERFUL... (LES MIRACLES)
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable521_Miracle(pnj) {
  let score521 = Math.floor(Math.random() * 20) + 1; // d20
  let rapportMiracle = "";

  if (score521 <= 3) {
    rapportMiracle = "Béni par la naissance d'un enfant vigoureux et sain ou par la réunion inattendue d'un foyer brisé.";
  } else if (score521 <= 5) {
    rapportMiracle = "En inspectant ou en réparant les murs de sa demeure, il découvre une cache secrète contenant un objet de grande valeur.";
    pnj.identite.moneyModifier *= 1.5; // Plus d'argent au départ
  } else if (score521 <= 7) {
    rapportMiracle = "Sauve la vie d'un notable aisé ou d'un aristocrate à Paris. Reçoit une récompense financière immédiate et une dette d'honneur.";
    pnj.identite.moneyModifier += 0.5;
    pnj.flags.aUnContactBienPlace = true;
  } else if (score521 <= 10) {
    rapportMiracle = "Une opportunité économique ou une spéculation boursière inattendue augmente la fortune de son secteur.";
    pnj.identite.moneyModifier *= 2.0;
  } else if (score521 <= 12) {
    // Le miracle amer (Bittersweet blessing)
    rapportMiracle = "Une immense opportunité se présente... MAIS elle s'accompagne d'une ombre tragique imediate.";
    let ombre = executerTable520_Tragedie(pnj);
    rapportMiracle += ` (Ombre associée : ${ombre})`;
  } else if (score521 <= 15) {
    rapportMiracle = "Une promotion ou une distinction honorifique publique lui est décernée à Paris. Son Charisme augmente de +1.";
    if (pnj.attributes_modifiers.Charisma) pnj.attributes_modifiers.Charisma += 1;
    pnj.modificateurs.SolMod = Math.min(15, pnj.modificateurs.SolMod + 1);
  } else if (score521 <= 18) {
    rapportMiracle = "Rencontre l'amour absolu de sa vie. Cette relation lui apporte un équilibre mental parfait (Immunité aux futurs traumatismes de folie).";
    pnj.flags.immuniteFolie = true;
  } else {
    // Score 19-20 : Guérison miraculeuse ou constitution d'acier
    rapportMiracle = "Survit à une terrible contagion ou affliction médicale. Son corps développe des défenses exceptionnelles : Immunité totale aux maladies.";
    pnj.attributes_modifiers.Constitution += 1;
    pnj.flags.immuniteMaladie = true;
  }

  return rapportMiracle;
}

import * as tables from './pnjTables.js';

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 532 : IMPRISONED! (LA DETENTION EN 1899)
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable532_Prison(pnj) {
  let de532 = Math.floor(Math.random() * 20) + 1; // 1d20
  let rapportPrison = "";

  // Compteur d'années perdues (1d4 ans par défaut selon le livre pour les peines moyennes)
  let anneesPerdues = Math.floor(Math.random() * 4) + 1;
  
  if (de532 <= 4) {
    rapportPrison = `Incarcéré à la prison de la Santé à Paris pour une courte peine (${anneesPerdues} ans). Conditions dures mais gérables.`;
    pnj.competences.survieUrban = Math.min(10, pnj.competences.survieUrban + 1);
  } else if (de532 <= 8) {
    // Isolement total ou cellule des condamnés
    rapportPrison = `Placé au secret ou en isolement total pendant ${anneesPerdues} ans. Le silence a forgé sa résistance mentale (Immunité à la panique).`;
    pnj.flags.immunitePanique = true;
    pnj.bracketsPersonality.push('N');
  } else if (de532 <= 12) {
    rapportPrison = "Tente une évasion spectaculaire des geôles parisiennes. C'est un échec, mais il gagne le respect des autres détenus (Rank 2 en Bagarre).";
    pnj.bracketsPersonality.push('D');
  } else if (de532 <= 16) {
    // Le mentor de cellule (Classique Central Casting)
    rapportPrison = "Partage sa cellule avec un vieil érudit politique ou un vieux cambrioleur de coffres-forts. L'homme lui enseigne ses secrets avant de mourir.";
    pnj.education.totalPoints += 5; // Bonus d'apprentissage de l'ombre
    pnj.bracketsPersonality.push('L');
  } else {
    // LE CAS EXTRÊME : Déportation / Bagne de Cayenne
    anneesPerdues = (Math.floor(Math.random() * 6) + 1) + 4; // 1d6 + 4 ans
    rapportPrison = `Condamné à la déportation politique ou aux travaux forcés au bagne de Cayenne (${anneesPerdues} ans) avant d'être gracié. Sa Constitution augmente de +1 face à l'enfer tropical.`;
    if (pnj.attributes_modifiers.Constitution) pnj.attributes_modifiers.Constitution += 1;
    pnj.modificateurs.SolMod = 0; // Statut social détruit par le bagne
    pnj.bracketsPersonality.push('D');
  }

  // Vieillissement forcé du PNJ à cause des années passées derrière les barreaux
  if (pnj.identite.ageReel) pnj.identite.ageReel += anneesPerdues;

  return rapportPrison;
}

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 533 : RELIGION & CULTES SECRETS
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable533_Religion(pnj) {
  let de533 = Math.floor(Math.random() * 20) + 1; // 1d20
  let rapportReligion = "";

  if (de533 <= 8) {
    rapportReligion = "Foi traditionnelle et sincère (Catholicisme / Protestantisme / Judaïsme selon origine). Pratique régulière sans fanatisme.";
    pnj.bracketsPersonality.push('L');
  } else if (de533 <= 12) {
    rapportReligion = "Agnostique ou farouchement anticlérical. Refuse l'influence de l'Église dans la vie publique parisienne.";
    pnj.bracketsPersonality.push('N');
  } else if (de533 <= 15) {
    // Fanatisme de faction (Religieux ou Politique)
    rapportReligion = "Dévotion fanatique et dogmatique envers une faction ou un idéal. Prêt à faire primer sa cause sur la vie d'autrui.";
    pnj.bracketsPersonality.push('D');
    pnj.flags.estFanatique = true;
  } else if (de533 <= 18) {
    // Introduction à une société ésotérique (Idéal pour Les Héritiers)
    let cercles = ["une loge maçonnique discrète de la capitale", "l'Ordre Martiniste Papus", "un salon théosophique de la rive gauche", "un cercle d'études des fluides magnétiques"];
    let ordre = tables.tirage(cercles);
    rapportReligion = `Initié secrètement au sein de : ${ordre}. Reçoit Rank 2 en Occultisme / Histoire ancienne.`;
    pnj.education.totalPoints += 3;
    pnj.bracketsPersonality.push('N');
  } else {
    // Culte interdit / Secte obscure
    rapportReligion = "Inféodé à une secte secrète ou un culte interdit qui adore des puissances anciennes sous Paris. Il possède un mot de passe ou un signe de reconnaissance occulte.";
    pnj.bracketsPersonality.push('D');
    pnj.flags.membreCulteMaudit = true;
  }

  return rapportReligion;
}


// =============================================================================
// MOTEUR DE RÉSOLUTION UNIQUE
// À appeler dès que la chronologie de jeunesse ou d'adulte exige un événement de genre.
// =============================================================================
export function executerTable_EvenementGenreCentralCasting(pnj) {
  // Tirage d100 strict pour préserver la proportionnalité des plages définies
  const deD100 = Math.floor(Math.random() * 100) + 1; 
  
  // Recherche de l'événement correspondant au score
  let evenementTire = TABLE_EVENEMENTS_GENRE_UNIFIEE_1899.find(
    evt => deD100 >= evt.min && deD100 <= evt.max
  );

  // Sécurité anti-crash
  if (!evenementTire) evenementTire = TABLE_EVENEMENTS_GENRE_UNIFIEE_1899[0];

  let texteFinal = evenementTire.texte;

  // Injection de la polarité dans le tableau des traits psychiques (pour l'étape 12)
  if (evenementTire.bracket) {
    if (!pnj.bracketsPersonality) pnj.bracketsPersonality = [];
    pnj.bracketsPersonality.push(evenementTire.bracket);
  }

  // --- Cascades mécaniques secondaires sur le PNJ ---
  if (evenementTire.id === 'apache_gang') {
    pnj.competences.survieUrban = Math.min(10, (pnj.competences.survieUrban || 0) + 2);
    pnj.identite.moneyModifier = (pnj.identite.moneyModifier || 1.0) * 1.2; 
  }

  if (evenementTire.id === 'mystic_tattoo') {
    if (!pnj.flags) pnj.flags = {};
    pnj.flags.aMarquePhysique = true;
    pnj.identite.noteApparence = "Porte une marque ésotérique d'outre-mer sur le corps (tatouage ou cicatrice).";
  }

  if (evenementTire.id === 'lost_world') {
    if (!pnj.flags) pnj.flags = {};
    pnj.flags.rechercheVeriteBibliotheque = true;
  }

  return texteFinal;
}

import * as tables from './pnjTables.js';

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 534 : AH, LOVE! (HISTORIQUE SENTIMENTAL)
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable534_Romance(pnj) {
  let de534 = Math.floor(Math.random() * 20) + 1; // 1d20
  // Les classes aisées ont des destins amoureux plus codifiés socialement
  if (pnj.modificateurs.SolMod >= 6) de534 += 2; 

  let rapportAmour = "";

  if (de534 <= 5) {
    rapportAmour = "Célibataire endurci. Préfère la liberté des boulevards parisiens à la vie conjugale.";
  } else if (de534 <= 10) {
    rapportAmour = "Marié à son amour de jeunesse. Un foyer stable qui offre un ancrage moral au quotidien.";
  } else if (de534 <= 14) {
    rapportAmour = "Fiancé à une union arrangée par la famille pour consolider une dot ou un rang social. L'affection y est absente.";
  } else if (de534 <= 18) {
    rapportAmour = "Au cœur d'un scandale amoureux majeur à Paris (liaison illicite, adultère affiché). Son statut social subit un malus de -1.";
    pnj.modificateurs.SolMod = Math.max(0, pnj.modificateurs.SolMod - 1);
    pnj.bracketsPersonality.push('D');
  } else {
    // Veuvage tragique
    rapportAmour = "Veuf / Veuve. Son grand amour a péri dans des circonstances douloureuses, laissant un souvenir impérissable.";
    pnj.bracketsPersonality.push('R');
    pnj.flags.traumaDeuil = true;
  }

  pnj.identite.situationAmoureuse = rapportAmour;
  return pnj;
}

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 538 : DEATH SITUATIONS
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable538_Mort(pnj) {
  let de538 = Math.floor(Math.random() * 20) + 1; // 1d20
  let rapportMort = "";

  if (de538 <= 6) {
    rapportMort = "Déclaré cliniquement mort à l'hôpital après un étouffement ou une noyade dans la Seine, avant de se réveiller miraculeusement à la morgue.";
    pnj.flags.reveilMorgue = true;
  } else if (de538 <= 12) {
    rapportMort = "A vu son plus proche compagnon d'armes ou de route expirer dans ses bras lors d'un guet-apens. Développe une peur sourde de l'abandon.";
    pnj.flags.traumaMort = true;
  } else if (de538 <= 17) {
    rapportMort = "Condamné à mort lors d'une insurrection politique coloniale ou anarchiste, il a échappé au peloton de l'exécution ou à la guillotine in extremis grâce à une grâce présidentielle de dernière minute.";
    pnj.modificateurs.SolMod = Math.max(0, pnj.modificateurs.SolMod - 2);
  } else {
    rapportMort = "Frôle la mort par empoisonnement lent (arsenic ou laudanum frelaté). Son métabolisme a survécu mais ses traits restent marqués d'une pâleur spectrale.";
    if (pnj.attributes_modifiers.Appearance) pnj.attributes_modifiers.Appearance -= 1;
  }

  if (!pnj.jeunesse.notesTraumatismes) pnj.jeunesse.notesTraumatismes = [];
  pnj.jeunesse.notesTraumatismes.push(rapportMort);
  return pnj;
}

// ─────────────────────────────────────────────────────────────────────────────
// TABLE 540 : SECRET ORIGINS (LE MERVEILLEUX)
// ─────────────────────────────────────────────────────────────────────────────
export function executerTable540_OrigineSecrete(pnj) {
  let de540 = Math.floor(Math.random() * 20) + 1; // 1d20
  let secretFinal = "";

  if (de540 <= 7) {
    secretFinal = "Héritier d'une lignée clandestine : découvre qu'il descend en ligne directe d'une ancienne dynastie royale ou d'un ordre ésotérique éteint.";
    pnj.flags.heritageClandestin = true;
  } else if (de540 <= 14) {
    secretFinal = "Touché par le Merveilleux : sa naissance a été catalysée par l'influence subtile d'un fluide éthérique ou d'une relique occulte ancienne.";
    pnj.flags.eveilleParleMerveilleux = true;
    pnj.education.totalPoints += 4; // Sensibilité accrue aux mystères
  } else {
    secretFinal = "Double nature métaphysique : cache un secret biologique ou spirituel majeur que la science de 1899 ne peut expliquer. Des marques physiques discrètes s'éveillent sous sa peau.";
    pnj.flags.doubleNatureOcculte = true;
    pnj.flags.gmSecret = true; // Le MJ doit définir l'impact exact selon la campagne
  }

  pnj.naissance.secretOrigine = secretFinal;
  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreMorphologiePhysique(pnj) {
  pnj.physique = {
    tailleCm: 0,
    poidsKg: 0,
    yeux: '',
    cheveux: { couleur: '', style: '', pilositeFaciale: 'Aucune' }
  };

  let sexeId = pnj.identite.sexe.id === 'indetermine' ? 'masculin' : pnj.identite.sexe.id;

  // ─────────────────────────────────────────────────────────────────────────────
  // TABLE 601 : HEIGHT & WEIGHT (TAILLE & POIDS AJUSTÉS 1899)
  // ─────────────────────────────────────────────────────────────────────────────
  let deTaille = Math.floor(Math.random() * 20) + 1; // 1d20
  let baseTaille = sexeId === 'feminin' ? 152 : 162;
  
  // Distribution en cloche simplifiée pour la taille
  if (deTaille <= 3) baseTaille -= 8;
  else if (deTaille <= 8) baseTaille -= 3;
  else if (deTaille <= 14) baseTaille += 2;
  else if (deTaille <= 18) baseTaille += 6;
  else baseTaille += 12;

  pnj.physique.tailleCm = baseTaille;

  // Calcul du poids indexé sur la taille et le gabarit (1d20)
  let dePoids = Math.floor(Math.random() * 20) + 1;
  let basePoids = sexeId === 'feminin' ? (baseTaille - 105) : (baseTaille - 100);

  if (dePoids <= 3) { pnj.physique.gabarit = "Tranchant / Maigre"; basePoids -= 10; }
  else if (dePoids <= 7) { pnj.physique.gabarit = "Svelte / Mince"; basePoids -= 4; }
  else if (dePoids <= 14) { pnj.physique.gabarit = "Moyen / Proportionné"; }
  else if (dePoids <= 18) { pnj.physique.gabarit = "Robuste / Trapu"; basePoids += 8; }
  else { pnj.physique.gabarit = "Corpulent / Fort"; basePoids += 18; }

  pnj.physique.poidsKg = Math.max(40, basePoids);

  // ─────────────────────────────────────────────────────────────────────────────
  // TABLE 602 : EYE COLOR (COULEUR DES YEUX)
  // ─────────────────────────────────────────────────────────────────────────────
  let deYeux = Math.floor(Math.random() * 100) + 1;
  if (deYeux <= 40) pnj.physique.yeux = "Marron foncé";
  else if (deYeux <= 65) pnj.physique.yeux = "Bleu azur";
  else if (deYeux <= 85) pnj.physique.yeux = "Vert noisette";
  else if (deYeux <= 95) pnj.physique.yeux = "Gris acier";
  else {
    // Si un flag d'anomalie de naissance (Table 106) existe, on peut forcer l'hétérochromie
    pnj.physique.yeux = "Vairons (Un œil bleu, un œil marron)";
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // TABLE 603 : HAIR COLOR & STYLE (STYLE SPECIFIQUE 1899)
  // ─────────────────────────────────────────────────────────────────────────────
  let deCheveux = Math.floor(Math.random() * 100) + 1;
  if (deCheveux <= 50) pnj.physique.cheveux.couleur = "Châtain ou Brun";
  else if (deCheveux <= 75) pnj.physique.cheveux.couleur = "Noir jais";
  else if (deCheveux <= 90) pnj.physique.cheveux.couleur = "Blond cendré";
  else if (deCheveux <= 97) pnj.physique.cheveux.couleur = "Roux flamboyant";
  else pnj.physique.cheveux.couleur = "Blanc précoce / Poivre et sel";

  // Styles capillaires d'époque
  let stylesFemmes = ["Cheveux longs relevés en chignon haut bouffant (Style Gibson Girl)", "Coupe à la garçonne précoce (marginal)", "Tresses complexes en couronne mondaine"];
  let stylesHommes = ["Courts avec raie stricte au milieu, gominés à la brillantine", "Chevelure d'artiste, légèrement longue et désordonnée", "Rasés de près / Coupe militaire épurée"];

  pnj.physique.cheveux.style = sexeId === 'feminin' ? tables.tirage(stylesFemmes) : tables.tirage(stylesHommes);

  // Pilosité faciale spécifique pour les hommes de la Belle Époque
  if (sexeId === 'masculin') {
    let deBarbe = Math.floor(Math.random() * 20) + 1;
    if (deBarbe <= 5) pnj.physique.cheveux.pilositeFaciale = "Moustache en guidon impérial (cirée aux pointes)";
    else if (deBarbe <= 9) pnj.physique.cheveux.pilositeFaciale = "Favoris épais et rouflaquettes d'aristocrate";
    else if (deBarbe <= 13) pnj.physique.cheveux.pilositeFaciale = "Barbe pointue taillée en bouc (style fin de siècle)";
    else if (deBarbe <= 16) pnj.physique.cheveux.pilositeFaciale = "Barbe complète et dense de patriarche ou d'ouvrier";
    else pnj.physique.cheveux.pilositeFaciale = "Imberbe / Rasé de près chaque matin au coupe-chou";
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreEtape16_TraitsParticuliers(pnj) {
  if (!pnj.physique.traitsParticuliers) {
    pnj.physique.traitsParticuliers = [];
  }

  // Table 605A : Nombre de tics ou marques physiques (1d20 modifié par l'historique)
  let deNombre = Math.floor(Math.random() * 20) + 1;
  let quantiteTraits = 0;

  if (deNombre <= 10) quantiteTraits = 0;
  else if (deNombre <= 16) quantiteTraits = 1;
  else if (deNombre <= 19) quantiteTraits = 2;
  else quantiteTraits = 3;

  // Si des traumatismes ou des accidents majeurs ont eu lieu avant, on force au moins une marque
  if ((pnj.flags.traumaMort || pnj.flags.aMarquePhysique) && quantiteTraits === 0) {
    quantiteTraits = 1;
  }

  // Pool de tics, cicatrices et excentricités physiques calibrées pour 1899
  const poolTraits1899 = [
    { id: 'cicatrice_duel', texte: "Une fine cicatrice linéaire sur la joue droite, souvenir d'un duel d'honneur à l'épée au bois de Boulogne." },
    { id: 'boiterie', texte: "Une légère boiterie à la jambe gauche, l'obligeant à s'appuyer sur une canne à pommeau d'argent." },
    { id: 'tic_monocle', texte: "Un tic nerveux à l'œil droit, qu'il masque en ajustant fréquemment un monocle en écaille." },
    { id: 'gousset', texte: "Manipule de façon obsessionnelle et compulsive la chaîne de sa montre à gousset quand il est nerveux." },
    { id: 'regard_fixe', texte: "Un regard fixe et dérangeant, clignant très rarement des yeux (séquelle d'une exposition à l'occulte)." },
    { id: 'teint_pale', texte: "Un teint d'une pâleur d'albâtre spectrale, typique des consommateurs d'opium des salons clandestins." },
    { id: 'voix_rauque', texte: "Une voix sourde et éraillée, causée par une ancienne blessure à la gorge ou l'abus de cigares de caporal." },
    { id: 'tatouage_bataillon', texte: "Un tatouage usé sur l'avant-bras représentant les insignes des Bataillons d'Afrique (les 'Joyeux')." },
    { id: 'doigt_manquant', texte: "La dernière phalange de l'auriculaire gauche manquante, sectionnée net lors d'un accident ou d'un conflit." },
    { id: 'odeur_laudanum', texte: "Exhale une subtile mais constante odeur d'éther ou de laudanum, trahissant une dépendance médicale." }
  ];

  // Tirage des traits uniques
  let traitsDisponibles = [...poolTraits1899];
  
  for (let i = 0; i < quantiteTraits; i++) {
    if (traitsDisponibles.length === 0) break;
    
    let index = Math.floor(Math.random() * traitsDisponibles.length);
    let traitTire = traitsDisponibles.splice(index, 1)[0];
    
    pnj.physique.traitsParticuliers.push(traitTire.texte);
  }

  // Injection forcée du texte lié aux flags si nécessaire
  if (pnj.flags.aMarquePhysique && pnj.identite.noteApparence) {
    pnj.physique.traitsParticuliers.push(pnj.identite.noteApparence);
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function resoudreEtape17_Personnalite(pnj) {
  pnj.psychologie = {
    traitsDominants: [],
    troubleMental: "Aucun trouble majeur apparent"
  };

  // 1. Détermination du nombre de traits (Table 701)
  let deNombre = Math.floor(Math.random() * 20) + 1;
  let nTraits = deNombre <= 12 ? 1 : (deNombre <= 18 ? 2 : 3);

  // Lecture de l'alignement calculé à la Table 312
  let alignement = pnj.psychisme?.alignement || "Neutre";

  // Attribution des traits en fonction de l'alignement
  for (let i = 0; i < nTraits; i++) {
    let traitTire = "";
    if (alignement.includes("Lightside")) {
      traitTire = tables.tirage(TRAITS_PSYCHOLOGIQUES_1899.vertus);
    } else if (alignement.includes("Darkside")) {
      traitTire = tables.tirage(TRAITS_PSYCHOLOGIQUES_1899.vices);
    } else {
      // Les neutres piochent dans les deux pools
      traitTire = Math.random() < 0.5 
        ? tables.tirage(TRAITS_PSYCHOLOGIQUES_1899.vices) 
        : tables.tirage(TRAITS_PSYCHOLOGIQUES_1899.vertus);
    }
    if (!pnj.psychologie.traitsDominants.includes(traitTire)) {
      pnj.psychologie.traitsDominants.push(traitTire);
    }
  }

  // 2. Traitement de la Table 702 : Mental Quirks (Névroses et Phobies)
  // On force le tirage si le PNJ a le flag de trauma ou d'internement de l'asile
  let deTrouble = Math.floor(Math.random() * 20) + 1;
  
  if (deTrouble >= 18 || pnj.flags.forceTraitExotique || pnj.flags.reveilMorgue) {
    let anomalieMentale = tables.tirage(TRAITS_PSYCHOLOGIQUES_1899.exotiques);
    pnj.psychologie.troubleMental = anomalieMentale;
    
    // Si le trouble est l'obsession du temps, on fait un clin d'œil à son comportement physique
    if (anomalieMentale.includes("montre à gousset") && !pnj.physique.traitsParticuliers.includes("gousset")) {
      pnj.physique.traitsParticuliers.push("Manipule de façon compulsive la chaîne de sa montre à gousset.");
    }
  }

  return pnj;
}

import * as tables from './pnjTables.js';

export function finaliserPNJ_Etape800(pnj) {
  pnj.financesEtEquipement = {
    argentLiquideFrancs: 0,
    objetsSpeciaux: [],
    reseauSocial: []
  };

  // 1. Calcul de l'Argent de Départ (Table 862 - Fin de siècle)
  // Base de calcul indexée sur le Rang de Métier obtenu à l'étape 10
  let baseArgent = 150; // Base ouvrière / classe moyenne basse
  let rank = pnj.identite.rankMetier || 1;

  if (rank === 2) baseArgent = 300;
  else if (rank === 3) baseArgent = 600;
  else if (rank === 4) baseArgent = 1200;
  else if (rank === 5) baseArgent = 2500;
  else if (rank === 6) baseArgent = 6000; // Fortune de départ majeure

  // Application du modificateur cumulatif de sa vie (Step 3, 4, 6, 11, 14, 520)
  let argentFinal = Math.floor(baseArgent * (pnj.identite.moneyModifier || 1.0));
  pnj.financesEtEquipement.argentLiquideFrancs = Math.max(5, argentFinal); // Jamais moins de 5 francs de poche

  // 2. Attribution de l'Équipement Spécial (Table 864)
  // Si le personnage a un métier ou un hobby occulte, ou un flag obsessionnel, il reçoit un objet signature
  let deObjet = Math.floor(Math.random() * 20) + 1;
  if (deObjet >= 12 || pnj.flags.estObsessionnel || pnj.flags.doubleNatureOcculte) {
    let objetTire = tables.tirage(EQUIPEMENTS_SIGNATURE_1899);
    pnj.financesEtEquipement.objetsSpeciaux.push(objetTire.nom);
  } else {
    pnj.financesEtEquipement.objetsSpeciaux.push("Un nécessaire de voyage classique (montre ordinare, carnet, pardessus).");
  }

  // 3. Consolidation du Réseau de PNJ (Table 752 : Contacts & Ennemis)
  if (pnj.flags.heriteRival) {
    pnj.financesEtEquipement.reseauSocial.push("Rival : Un ancien associé ou ennemi familial qui cherche à faire chanter le PNJ à Paris.");
  }
  if (pnj.flags.aUnContactBienPlace) {
    pnj.financesEtEquipement.reseauSocial.push("Allié : Un haut fonctionnaire de la préfecture de police qui lui doit une dette d'honneur.");
  }
  if (pnj.flags.membreCulteMaudit) {
    pnj.financesEtEquipement.reseauSocial.push("Contact Clandestin : Un supérieur au sein de la secte obscure qui lui transmet ses ordres.");
  }
  
  if (pnj.financesEtEquipement.reseauSocial.length === 0) {
    pnj.financesEtEquipement.reseauSocial.push("Connaissances : Un réseau de camarades de comptoir ou de collègues de bureau sans allégeance stricte.");
  }

  // Nettoyage final des flags techniques intermédiaires devenus inutiles
  delete pnj.flags.forceTraitExotique;
  delete pnj.identite.moneyModifier;
  delete pnj.identite.chanceAlphabetisationBase;

  return pnj;
}