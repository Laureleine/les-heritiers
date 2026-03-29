// 14.13.0
// Optimisé

import { useState, useCallback, useMemo } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { addGlobalSpeciality } from '../../utils/supabaseGameData';
import { showInAppNotification } from '../../utils/SystemeServices';
import { getUtileCost, FIXED_XP_COSTS } from '../../utils/xpCalculator';

export const POINTS_TOTAUX = 15;
export const SKILLS_ESPRIT = [
  'Culture', 'Occultisme', 'Fortitude', 'Rhétorique',
  'Habiletés', 'Médecine', 'Observation', 'Sciences'
];

export function useCompetencesLibres() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const { profils, competences, competencesParProfil, fairyData } = gameData;
  
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const xpTotal = character.xp_total || 0;
  const xpDepense = character.xp_depense || 0;
  const xpDispo = xpTotal - xpDepense;
  
  const [creatingSpecFor, setCreatingSpecFor] = useState(null);
  const feeData = fairyData[character.typeFee];
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} };

  const onCompetencesLibresChange = useCallback((newLib) => {
    if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_FIELD', field: 'competencesLibres', value: newLib, gameData });
  }, [dispatchCharacter, gameData, isReadOnly]);

  // 1. EXTRACTION DES BONUS D'ATOUTS
  const atoutsBonuses = useMemo(() => {
    const activeAtoutsNames = character.atouts || [];
    const allFairyAtouts = feeData?.atouts || [];
    const specs = [];
    allFairyAtouts.forEach(atout => {
      if (activeAtoutsNames.includes(atout.nom)) {
        const tech = typeof atout.effets_techniques === 'string' ? JSON.parse(atout.effets_techniques || '{}') : atout.effets_techniques;
        if (tech?.specialites) {
          tech.specialites.forEach(s => specs.push({ nom: s.nom, competences: [s.competence], source: atout.nom }));
        }
      }
    });
    return specs;
  }, [character.atouts, feeData]);

  // 2. SCORES CALCULÉS PAR LE MOTEUR CENTRAL
  const { predFinales, competencesBase, rangsProfils, budgetsPP } = character.computedStats || {};
  const getScoreBase = useCallback((nomComp) => competencesBase?.[nomComp] || 0, [competencesBase]);
  const bonusEspritMax = Math.max(0, (character.caracteristiques?.esprit || 1) - 3);

  // 3. MOTEUR DE BUDGETS (Points Verts & Violets)
  const budgetsInfo = useMemo(() => {
    let std = 0; let eligible = 0;
    
    Object.entries(lib.rangs || {}).forEach(([nom, val]) => {
      if (SKILLS_ESPRIT.includes(nom)) eligible += val;
      else std += val;
    });
    
    Object.entries(lib.choixSpecialiteUser || {}).forEach(([nom, specs]) => {
      let count = specs.length;
      if (nom === 'Conduite' && count > 0 && (getScoreBase('Conduite') + (lib.rangs['Conduite']||0)) > 0) count -= 1;
      if (SKILLS_ESPRIT.includes(nom)) eligible += count;
      else std += count;
    });

    const pointsVioletsUtilises = Math.min(eligible, bonusEspritMax);
    const debordementEsprit = eligible - pointsVioletsUtilises;
    const totalVertUtilise = std + debordementEsprit;
    
    return {
      pointsRestantsVerts: POINTS_TOTAUX - totalVertUtilise,
      pointsRestantsViolets: bonusEspritMax - pointsVioletsUtilises,
      bonusEspritMax
    };
  }, [lib.rangs, lib.choixSpecialiteUser, getScoreBase, bonusEspritMax]);

  // 4. HANDLERS D'ACTION (Mutations)
  const handleRangChange = useCallback((nomComp, delta) => {
    if (isReadOnly) return;
    const current = lib.rangs[nomComp] || 0;
    const totalScore = getScoreBase(nomComp) + current;
    const isPred = predFinales?.includes(nomComp);
    const evolutionMax = isPred ? 7 : 6;
    const maxAllowed = isScelle ? evolutionMax : (isPred ? 5 : 4);

    if (isScelle) {
      const plancher = character.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0;
      if (delta > 0) {
        if (totalScore >= evolutionMax) { showInAppNotification(`Excellence maximale atteinte (${evolutionMax}).`, "warning"); return; }
        const costXP = getUtileCost(totalScore);
        if (xpDispo < costXP) { showInAppNotification(`Il vous faut ${costXP} XP.`, "error"); return; }
        
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: { competencesLibres: { ...lib, rangs: { ...lib.rangs, [nomComp]: current + 1 } }, xp_depense: xpDepense + costXP },
          gameData
        });
        showInAppNotification(`Compétence améliorée pour ${costXP} XP !`, "success");
      } else if (delta < 0) {
        if (current <= plancher) { showInAppNotification("Savoir originel scellé !", "warning"); return; }
        const refundXP = getUtileCost(totalScore - 1);
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: { competencesLibres: { ...lib, rangs: { ...lib.rangs, [nomComp]: current - 1 } }, xp_depense: xpDepense - refundXP },
          gameData
        });
        showInAppNotification(`Amélioration annulée. +${refundXP} XP récupérés.`, "info");
      }
      return;
    }

    if (delta > 0) {
      if (totalScore >= maxAllowed) return;
      const isEsprit = SKILLS_ESPRIT.includes(nomComp);
      if (!(budgetsInfo.pointsRestantsVerts > 0 || (isEsprit && budgetsInfo.pointsRestantsViolets > 0))) return;
    }
    if (delta < 0 && current <= 0) return;
    onCompetencesLibresChange({ ...lib, rangs: { ...lib.rangs, [nomComp]: current + delta } });
  }, [lib, getScoreBase, predFinales, budgetsInfo, onCompetencesLibresChange, isScelle, isReadOnly, xpDispo, xpDepense, character.data, dispatchCharacter, gameData]);

  const handleAddSpecialiteUser = useCallback((nomComp, specName) => {
    if (!specName || isReadOnly) return;
    const currentSpecs = lib.choixSpecialiteUser[nomComp] || [];
    if (currentSpecs.includes(specName)) return;

    const isFreeConduite = nomComp === 'Conduite' && (getScoreBase(nomComp) + (lib.rangs[nomComp] || 0)) > 0 && currentSpecs.length === 0;
    const costXP = isFreeConduite ? 0 : FIXED_XP_COSTS.specialite_utile;

    if (isScelle) {
      if (xpDispo < costXP) { showInAppNotification(`Il vous faut ${costXP} XP.`, "error"); return; }
      dispatchCharacter({
        type: 'UPDATE_MULTIPLE',
        payload: { competencesLibres: { ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] } }, xp_depense: xpDepense + costXP },
        gameData
      });
      if (costXP > 0) showInAppNotification(`Spécialité acquise pour ${costXP} XP !`, "success");
      else showInAppNotification("Spécialité de Conduite gratuite acquise !", "success");
      return;
    }

    if (!isFreeConduite) {
      const isEsprit = SKILLS_ESPRIT.includes(nomComp);
      if (!(budgetsInfo.pointsRestantsVerts > 0 || (isEsprit && budgetsInfo.pointsRestantsViolets > 0))) { showInAppNotification("Fonds insuffisants.", "error"); return; }
    }
    onCompetencesLibresChange({ ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] } });
  }, [lib, isReadOnly, isScelle, xpDispo, xpDepense, getScoreBase, budgetsInfo, onCompetencesLibresChange, dispatchCharacter, gameData]);

  const handleRemoveSpecialiteUser = useCallback((nomComp, specToRemove) => {
    if (isReadOnly) return;
    const currentSpecs = lib.choixSpecialiteUser[nomComp] || [];
    const isRefundingFreeConduite = nomComp === 'Conduite' && currentSpecs.length === 1 && specToRemove === currentSpecs.at(0);
    const refundXP = isRefundingFreeConduite ? 0 : FIXED_XP_COSTS.specialite_utile;

    if (isScelle) {
      const plancherSpecs = character.data?.stats_scellees?.competencesLibres?.choixSpecialiteUser?.[nomComp] || [];
      if (plancherSpecs.includes(specToRemove)) { showInAppNotification("Savoir originel scellé !", "warning"); return; }
      dispatchCharacter({
        type: 'UPDATE_MULTIPLE',
        payload: { competencesLibres: { ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: currentSpecs.filter(s => s !== specToRemove) } }, xp_depense: xpDepense - refundXP },
        gameData
      });
      if (refundXP > 0) showInAppNotification(`Spécialité oubliée. +${refundXP} XP récupérés.`, "info");
      return;
    }
    onCompetencesLibresChange({ ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: currentSpecs.filter(s => s !== specToRemove) } });
  }, [lib, isReadOnly, isScelle, xpDepense, character.data, onCompetencesLibresChange, dispatchCharacter, gameData]);

  const handleCreateGlobalSpeciality = useCallback(async (nomComp, specName) => {
    const compData = competences[nomComp];
    if (!compData || !compData.id) return;
    try {
      const newSpecObj = await addGlobalSpeciality(compData.id, specName);
      if (competences[nomComp]) competences[nomComp].specialites = [...(competences[nomComp].specialites || []), newSpecObj];
      handleAddSpecialiteUser(nomComp, specName);
      setCreatingSpecFor(null);
    } catch (e) { showInAppNotification("Erreur : " + e.message, "error"); }
  }, [competences, handleAddSpecialiteUser]);

  const handleChoixChange = useCallback((index, value, type) => {
    if (isReadOnly || isScelle) return;
    const field = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    onCompetencesLibresChange({ ...lib, [field]: { ...lib[field], [index]: value } });
  }, [lib, onCompetencesLibresChange, isReadOnly, isScelle]);

  const handleReset = () => {
    if (isReadOnly || isScelle) return;
    if (window.confirm("Voulez-vous réinitialiser TOUS vos points et spécialités utiles ?")) {
      onCompetencesLibresChange({ rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} });
    }
  };

  // 5. EXTRACTEUR DE DONNÉES PAR LIGNE (Pour le composant CompetenceRow)
  const getCompRowData = useCallback((nomComp) => {
    const current = lib.rangs?.[nomComp] || 0;
    const scoreBase = getScoreBase(nomComp);
    const totalScore = scoreBase + current;
    const isPred = predFinales?.includes(nomComp);
    const isEspritEligible = SKILLS_ESPRIT.includes(nomComp);
    const evolutionMax = isPred ? 7 : 6;
    const maxAllowed = isScelle ? evolutionMax : (isPred ? 5 : 4);
    const plancher = character.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0;

    const getFairySpec = () => {
      if (!feeData?.competencesPredilection) return null;
      const predIndex = feeData.competencesPredilection.findIndex(p => p.nom === nomComp);
      if (predIndex === -1) return null;
      const pred = feeData.competencesPredilection[predIndex];
      return pred.specialite || (pred.isSpecialiteChoix ? lib.choixSpecialite?.[predIndex] : null);
    };

    const fairySpecActuelle = getFairySpec();
    const specsForAtouts = atoutsBonuses.filter(a => a.competences.includes(nomComp));
    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    
    const jobSpec = character.competencesLibres?.specialiteMetier;
    const hasJobSpecHere = jobSpec && jobSpec.comp === nomComp && jobSpec.nom;
    const isFirstConduite = nomComp === 'Conduite' && totalScore > 0 && userSpecs.length === 0;
    // ✨ FIX 3 : Utilisation de la constante officielle pour la robustesse
    const nextSpecCost = isScelle ? (isFirstConduite ? 0 : FIXED_XP_COSTS.specialite_utile) : (isFirstConduite ? 0 : 1);
    
    // ✨ FIX 1 : On pré-calcule le coût en XP directement dans le Cerveau
    const utileCost = isScelle && totalScore < maxAllowed ? getUtileCost(totalScore) : null;
    
    return {
      nomComp, current, scoreBase, totalScore, isPred, isEspritEligible, maxAllowed, plancher,
      fairySpecActuelle, specsFromAtouts: specsForAtouts, userSpecs, hasJobSpecHere, jobSpec, nextSpecCost,
      utileCost, // 👈 On expose la donnée pré-calculée
      availableSpecs: competences[nomComp]?.specialites || [],
      isMinusDisabled: isScelle ? (current <= plancher) : (current <= 0),
      isPlusDisabled: isReadOnly || totalScore >= maxAllowed || (!isScelle && budgetsInfo.pointsRestantsVerts <= 0 && (!isEspritEligible || budgetsInfo.pointsRestantsViolets <= 0))
    };
  }, [lib, getScoreBase, predFinales, isScelle, character.data, feeData, atoutsBonuses, character.competencesLibres, competences, isReadOnly, budgetsInfo]);

  return {
    character, isScelle, isReadOnly, feeData, profils, competencesParProfil,
    lib, budgetsInfo, creatingSpecFor, setCreatingSpecFor,
    rangsProfils, budgetsPP,
    handlers: { handleRangChange, handleAddSpecialiteUser, handleRemoveSpecialiteUser, handleCreateGlobalSpeciality, handleChoixChange, handleReset },
    getCompRowData
  };
}
