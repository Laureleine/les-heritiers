// src/utils/historyReconstructor.js
import { CARAC_LIST } from '../data/DictionnaireJeu';
import { getCaracCost, getUtileCost, getFutileCost, FIXED_XP_COSTS } from './xpCalculator';

export const reconstructHistory = (character, gameData) => {
  const transactions = [];
  let timeOffset = 100000; // On recule dans le temps (en millisecondes) pour l'ordre d'affichage

  const addTx = (label, valeur, rang_final = null) => {
    if (valeur <= 0) return;
    transactions.push({
      type: 'DEPENSE',
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
        addTx(`Augmentation : ${c.label}`, cost, i + 1);
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
    addTx(`Épaississement du Masque`, cost, i + 1);
  }

  const baseFeerie = baseCaracs.feerie || 3;
  const curFeerie = curCaracs.feerie || baseFeerie;
  for (let i = baseFeerie; i < curFeerie; i++) {
    const cost = (i + 1) * 5; // Règle : Rang visé x 5
    addTx(`Éveil de la Féérie`, cost, i + 1);
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
      addTx(`Acquisition : Atout ${label}`, FIXED_XP_COSTS?.nouvel_atout || 8);
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
        addTx(`Perfectionnement : ${comp}`, cost, i + 1);
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
        addTx(`Spécialité acquise : ${comp} (${spec})`, FIXED_XP_COSTS?.specialite_utile || 8);
      }
    });
  });

  // =========================================================
  // 4. FOUILLE DES COMPÉTENCES FUTILES
  // =========================================================
  const baseFutiles = scellees.competencesFutiles || {};
  const curFutiles = character.competencesFutiles || {};

  Object.keys(curFutiles).forEach(comp => {
    const min = baseFutiles[comp] || 0;
    const cur = curFutiles[comp];
    for (let i = min; i < cur; i++) {
      try {
        const cost = getFutileCost ? getFutileCost(i) : (i + 1); 
        addTx(`Loisir : ${comp}`, cost, i + 1);
      } catch(e) { console.warn("Erreur archéologique (Futile):", e); }
    }
  });

  // =========================================================
  // 5. FOUILLE DE LA FORTUNE
  // =========================================================
  const baseFortune = scellees.fortune || feeData?.fortune_min || 1;
  const curFortune = character.fortune || baseFortune;
  for (let i = baseFortune; i < curFortune; i++) {
    addTx(`Élévation Sociale : Fortune`, FIXED_XP_COSTS?.fortune || 10, i + 1);
  }

  return transactions;
};