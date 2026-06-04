// src/utils/historyReconstructor.js
import { CARAC_LIST } from '../data/DictionnaireJeu';
import { getCaracCost, getUtileCost, getFutileCost, getFortuneCost, getFortuneSpecialites, FIXED_XP_COSTS } from './xpCalculator';
import { XP_CODES } from './xpActions';

export const reconstructHistory = (character, gameData) => {
  const transactions = [];
  let timeOffset = 100000; // On recule dans le temps (en millisecondes) pour l'ordre d'affichage

  const addTx = (label, valeur, rang_final = null, code = XP_CODES.XP_HISTORIQUE) => {
    if (valeur <= 0) return;
    transactions.push({
      type: 'DEPENSE',
      code,
      label,
      valeur,
      rang_final,
      // Chaque transaction est espacée d'une seconde pour garantir un ordre chronologique propre
      date_mouvement: new Date(Date.now() - timeOffset).toISOString()
    });
    timeOffset -= 1000;
  };

  const scellees = character.data?.stats_scellees || {};
  const feeData = gameData?.fairyData?.[character.typeFee] || {};

  // =========================================================
  // 1. FOUILLE DES CARACTÉRISTIQUES CLASSIQUES
  // =========================================================
  const baseCaracs = scellees.caracteristiques || {};
  const curCaracs = character.caracteristiques || {};

  CARAC_LIST.forEach(c => {
    const min = baseCaracs[c.key] || feeData?.caracteristiques?.[c.key]?.min || 1;
    const cur = curCaracs[c.key] || min;

    for (let i = min; i < cur; i++) {
      try {
        const cost = getCaracCost ? getCaracCost(i) : 15; // Fallback de sécurité
        addTx(`Augmentation : ${c.label}`, cost, i + 1, XP_CODES.CARAC_AUGMENTATION);
      } catch(e) { console.warn("Erreur archéologique (Carac):", e); }
    }
  });

  // =========================================================
  // ✨ 1.bis. FOUILLE DE LA NATURE PROFONDE (MASQUE & FÉÉRIE)
  // =========================================================
  const baseMasque = baseCaracs.masque || 4;
  const curMasque = curCaracs.masque || baseMasque;
  for (let i = baseMasque; i < curMasque; i++) {
    const cost = Math.max(12, (i + 1) * 4); // Règle : Max(12, Rang visé x 4)
    addTx(`Épaississement du Masque`, cost, i + 1, XP_CODES.MASQUE_EPAISSISSEMENT);
  }

  const baseFeerie = baseCaracs.feerie || 3;
  const curFeerie = curCaracs.feerie || baseFeerie;
  for (let i = baseFeerie; i < curFeerie; i++) {
    const cost = (i + 1) * 5; // Règle : Rang visé x 5
    addTx(`Éveil de la Féérie`, cost, i + 1, XP_CODES.FEERIE_EVEIL);
  }

  // =========================================================
  // 2. FOUILLE DES ATOUTS
  // =========================================================
  const baseAtouts = scellees.atouts || [];
  const curAtouts = character.atouts || [];
  
  curAtouts.forEach(a => {
    if (!baseAtouts.includes(a)) {
      const atoutObj = gameData?.atouts?.find(ref => ref.id === a || ref.nom === a);
      const label = atoutObj ? atoutObj.nom : a;
      addTx(`Acquisition : Atout ${label}`, FIXED_XP_COSTS?.nouvel_atout || 8, null, XP_CODES.ATOUT_ACQUISITION);
    }
  });

  // =========================================================
  // 3. FOUILLE DES COMPÉTENCES UTILES (RANGS)
  // =========================================================
  const baseUtiles = scellees.competencesLibres?.rangs || {};
  const curUtiles = character.competencesLibres?.rangs || {};

  Object.keys(curUtiles).forEach(comp => {
    const min = baseUtiles[comp] || 0;
    const cur = curUtiles[comp];
    for (let i = min; i < cur; i++) {
      try {
        const cost = getUtileCost ? getUtileCost(i) : 5;
        addTx(`Perfectionnement : ${comp}`, cost, i + 1, XP_CODES.COMP_UTILE_RANG);
      } catch(e) { console.warn("Erreur archéologique (Utile):", e); }
    }
  });

  // =========================================================
  // ✨ 3.bis. FOUILLE DES SPÉCIALITÉS UTILES (ACHATS UNIQUES)
  // =========================================================
  const baseSpecs = scellees.competencesLibres?.choixSpecialiteUser || {};
  const curSpecs = character.competencesLibres?.choixSpecialiteUser || {};

  Object.keys(curSpecs).forEach(comp => {
    const specsAvant = baseSpecs[comp] || [];
    const specsApres = curSpecs[comp] || [];
    
    specsApres.forEach(spec => {
      // Si la spécialité n'était pas dans le Plancher de Verre, c'est un achat !
      if (!specsAvant.includes(spec)) {
        addTx(`Spécialité acquise : ${comp} (${spec})`, FIXED_XP_COSTS?.specialite_utile || 8, null, XP_CODES.COMP_UTILE_SPECIALITE);
      }
    });
  });

  // =========================================================
  // 4. FOUILLE DES COMPÉTENCES FUTILES
  // =========================================================
  // ⚠️ competencesFutiles est stocké sous { rangs: {...} } — il faut accéder à .rangs
  const baseFutiles = scellees.competencesFutiles?.rangs || {};
  const curFutiles = character.competencesFutiles?.rangs || {};

  Object.keys(curFutiles).forEach(comp => {
    const min = baseFutiles[comp] || 0;
    const cur = curFutiles[comp];
    for (let i = min; i < cur; i++) {
      try {
        const cost = getFutileCost ? getFutileCost(i) : (i + 1);
        addTx(`Loisir : ${comp}`, cost, i + 1, XP_CODES.COMP_FUTILE_RANG);
      } catch(e) { console.warn("Erreur archéologique (Futile):", e); }
    }
  });

  // =========================================================
  // 5. FOUILLE DE LA FORTUNE
  // =========================================================
  // Fallback renforcé : si stats_scellees.fortune est absent (vieux perso),
  // on reconstitue le plancher de Fortune en tenant compte des social items
  // (fortune_score du métier, fortune_bonus des achats) — sans quoi on
  // invente de faux achats XP pour une Fortune offerte par le métier.
  let plancherFortune = feeData?.fortune_min || 1;
  if (!scellees.fortune) {
    const vieSocialeAchats = character.vieSociale || {};
    const socialItemsRef = gameData?.socialItems || [];
    let fBase = 0, fBonus = 0;
    Object.entries(vieSocialeAchats).forEach(([key, values]) => {
      if (key !== 'allocationsContacts' && Array.isArray(values)) {
        values.forEach(id => {
          const item = socialItemsRef.find(x => x.id === id);
          if (item) {
            if (item.fortune_score != null) fBase = Math.max(fBase, item.fortune_score);
            if (item.fortune_bonus != null) fBonus += item.fortune_bonus;
          }
        });
      }
    });
    if (fBase > 0 || fBonus > 0) {
      plancherFortune = Math.max(plancherFortune, Math.min(15, fBase + fBonus));
    }
  }
  const baseFortune = scellees.fortune || plancherFortune;
  const curFortune = character.fortune || baseFortune;
  // Réduction issue des rangs Classe / Sciences (même règle que useVieSociale.js)
  const rangClasse = character.competencesLibres?.rangs?.['Classe'] || 0;
  const rangSciences = character.competencesLibres?.rangs?.['Sciences'] || 0;
  const fortuneStats = { competencesTotal: { Classe: rangClasse, Sciences: rangSciences } };
  const fortuneSpecialites = getFortuneSpecialites(character);
  for (let i = baseFortune; i < curFortune; i++) {
    addTx(`Élévation Sociale : Fortune`, getFortuneCost(i, fortuneStats, fortuneSpecialites), i + 1, XP_CODES.FORTUNE_ELEVATION);
  }

  return transactions;
};