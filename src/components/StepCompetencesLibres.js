// src/components/StepCompetencesLibres.js
// 9.0.4 // 9.11.0
// 11.1.0
// 13.0.0 // 13.3.0
// 14.9.0 // 14.10.0

import React, { useState, useCallback, useMemo } from 'react';
import { Plus, Minus, Star, Brain, RotateCcw, Briefcase, Info, Lock } from 'lucide-react';
import { addGlobalSpeciality } from '../utils/supabaseGameData';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { getUtileCost, FIXED_XP_COSTS } from '../utils/xpCalculator';

const POINTS_TOTAUX = 15;
const SKILLS_ESPRIT = [
  'Culture', 'Occultisme', 'Fortitude', 'Rhétorique', 
  'Habiletés', 'Médecine', 'Observation', 'Sciences'
];

export default function StepCompetencesLibres() {
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

  // Extraction des bonus d'Atouts
  const atoutsBonuses = useMemo(() => {
    const activeAtoutsNames = character.atouts || [];
    const allFairyAtouts = feeData?.atouts || [];
    const specs = [];
    allFairyAtouts.forEach(atout => {
      if (activeAtoutsNames.includes(atout.nom)) {
        const tech = typeof atout.effets_techniques === 'string' ? JSON.parse(atout.effets_techniques || '{}') : atout.effets_techniques;
        if (tech?.specialites) {
          tech.specialites.forEach(s => {
            specs.push({ nom: s.nom, competences: [s.competence], source: atout.nom });
          });
        }
      }
    });
    return specs;
  }, [character.atouts, feeData]);

  // Scores calculés par le Moteur (App.js)
  const { predFinales, competencesBase, rangsProfils, budgetsPP } = character.computedStats || {};
  const getScoreBase = useCallback((nomComp) => competencesBase?.[nomComp] || 0, [competencesBase]);
  
  const bonusEspritMax = Math.max(0, (character.caracteristiques?.esprit || 1) - 3);

  // === CALCUL DES FONDS (Mode Création) ===
  const { investissementStandard, investissementEligibleEsprit } = useMemo(() => {
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
    return { investissementStandard: std, investissementEligibleEsprit: eligible };
  }, [lib.rangs, lib.choixSpecialiteUser, getScoreBase]);

  const pointsVioletsUtilises = Math.min(investissementEligibleEsprit, bonusEspritMax);
  const debordementEsprit = investissementEligibleEsprit - pointsVioletsUtilises;
  const totalVertUtilise = investissementStandard + debordementEsprit;
  
  const pointsRestantsVerts = POINTS_TOTAUX - totalVertUtilise;
  const pointsRestantsViolets = bonusEspritMax - pointsVioletsUtilises;

  // ========================================================================
  // ✨ LES HANDLERS HYBRIDES (Création & XP)
  // ========================================================================
  const handleRangChange = useCallback((nomComp, delta) => {
    if (isReadOnly) return;

    const current = lib.rangs[nomComp] || 0;
    const totalScore = getScoreBase(nomComp) + current;
    const isPred = predFinales?.includes(nomComp);
    const evolutionMax = isPred ? 7 : 6;
    const maxAllowed = isScelle ? evolutionMax : (isPred ? 5 : 4);

    if (isScelle) {
      // 🛡️ PLANCHER DE VERRE
      const plancher = character.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0;

      if (delta > 0) {
        if (totalScore >= evolutionMax) {
          showInAppNotification(`Excellence maximale atteinte (${evolutionMax}).`, "warning");
          return;
        }
        const costXP = getUtileCost(totalScore);
        if (xpDispo < costXP) {
          showInAppNotification(`Il vous faut ${costXP} XP pour atteindre le rang ${totalScore + 1}.`, "error");
          return;
        }
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: { competencesLibres: { ...lib, rangs: { ...lib.rangs, [nomComp]: current + 1 } }, xp_depense: xpDepense + costXP },
          gameData
        });
        showInAppNotification(`Compétence améliorée pour ${costXP} XP !`, "success");
      } else if (delta < 0) {
        if (current <= plancher) {
          showInAppNotification("Savoir originel scellé ! Impossible d'oublier cette compétence.", "warning");
          return;
        }
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

    // MODE CRÉATION
    if (delta > 0) {
      if (totalScore >= maxAllowed) return;
      const isEsprit = SKILLS_ESPRIT.includes(nomComp);
      if (!(pointsRestantsVerts > 0 || (isEsprit && pointsRestantsViolets > 0))) return;
    }
    if (delta < 0 && current <= 0) return;

    onCompetencesLibresChange({ ...lib, rangs: { ...lib.rangs, [nomComp]: current + delta } });
  }, [lib, getScoreBase, predFinales, pointsRestantsVerts, pointsRestantsViolets, onCompetencesLibresChange, isScelle, isReadOnly, xpDispo, xpDepense, character.data, dispatchCharacter, gameData]);

  const handleAddSpecialiteUser = useCallback((nomComp, specName) => {
    if (!specName || isReadOnly) return;
    const currentSpecs = lib.choixSpecialiteUser[nomComp] || [];
    if (currentSpecs.includes(specName)) return;

    const isFreeConduite = nomComp === 'Conduite' && (getScoreBase(nomComp) + (lib.rangs[nomComp] || 0)) > 0 && currentSpecs.length === 0;
    const costXP = isFreeConduite ? 0 : FIXED_XP_COSTS.specialite_utile;

    if (isScelle) {
      if (xpDispo < costXP) {
        showInAppNotification(`Il vous faut ${costXP} XP pour acquérir cette spécialité.`, "error");
        return;
      }
      dispatchCharacter({
        type: 'UPDATE_MULTIPLE',
        payload: { competencesLibres: { ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] } }, xp_depense: xpDepense + costXP },
        gameData
      });
      if (costXP > 0) showInAppNotification(`Spécialité acquise pour ${costXP} XP !`, "success");
      else showInAppNotification("Spécialité de Conduite gratuite acquise !", "success");
      return;
    }

    // MODE CRÉATION
    if (!isFreeConduite) {
      const isEsprit = SKILLS_ESPRIT.includes(nomComp);
      if (!(pointsRestantsVerts > 0 || (isEsprit && pointsRestantsViolets > 0))) {
        showInAppNotification("Fonds insuffisants.", "error");
        return;
      }
    }
    onCompetencesLibresChange({ ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] } });
  }, [lib, isReadOnly, isScelle, xpDispo, xpDepense, getScoreBase, pointsRestantsVerts, pointsRestantsViolets, onCompetencesLibresChange, dispatchCharacter, gameData]);

  const handleRemoveSpecialiteUser = useCallback((nomComp, specToRemove) => {
    if (isReadOnly) return;

    const currentSpecs = lib.choixSpecialiteUser[nomComp] || [];
    const isRefundingFreeConduite = nomComp === 'Conduite' && currentSpecs.length === 1 && specToRemove === currentSpecs.at(0);
    const refundXP = isRefundingFreeConduite ? 0 : FIXED_XP_COSTS.specialite_utile;

    if (isScelle) {
      const plancherSpecs = character.data?.stats_scellees?.competencesLibres?.choixSpecialiteUser?.[nomComp] || [];
      if (plancherSpecs.includes(specToRemove)) {
        showInAppNotification("Savoir originel scellé ! Impossible d'oublier cette spécialité.", "warning");
        return;
      }
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
    if (isReadOnly || isScelle) {
      if (isScelle) showInAppNotification("Les prédilections sont inscrites dans votre génétique. Inaltérable !", "warning");
      return;
    }
    const field = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    onCompetencesLibresChange({ ...lib, [field]: { ...lib[field], [index]: value } });
  }, [lib, onCompetencesLibresChange, isReadOnly, isScelle]);

  const handleReset = () => {
    if (isReadOnly || isScelle) return;
    if (window.confirm("Voulez-vous réinitialiser TOUS vos points et spécialités utiles ?")) {
      onCompetencesLibresChange({ rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} });
    }
  };

  // ========================================================================
  // 🎨 LE MOTEUR DE RENDU
  // ========================================================================
  const renderCompRow = (nomComp) => {
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
    const specsFromAtouts = atoutsBonuses.filter(a => a.competences.includes(nomComp));
    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    
    // ✨ L'AFFICHEUR DU MÉTIER ACQUIS À L'ÉTAPE 10 !
    const jobSpec = character.competencesLibres?.specialiteMetier;
    const hasJobSpecHere = jobSpec && jobSpec.comp === nomComp && jobSpec.nom;

    const isFirstConduite = nomComp === 'Conduite' && totalScore > 0 && userSpecs.length === 0;
    const nextSpecCost = isScelle ? (isFirstConduite ? 0 : 8) : (isFirstConduite ? 0 : 1);
    const availableSpecs = competences[nomComp]?.specialites || [];

    const isMinusDisabled = isScelle ? (current <= plancher) : (current <= 0);

    return (
      <div key={nomComp} className="flex flex-col py-3 px-2 hover:bg-stone-50 transition-colors">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-800 text-sm">{nomComp}</span>
            {isPred && <Star size={12} className="text-amber-500 fill-amber-500" />}
            {isEspritEligible && bonusEspritMax > 0 && !isScelle && <Brain size={12} className="text-purple-400" />}
          </div>
          <div className="flex items-center bg-white rounded border border-stone-300 shadow-sm">
            <div className="px-2 py-1 text-xs text-stone-400 border-r border-stone-200 bg-stone-50" title="Base calculée">{scoreBase}</div>
				<button onClick={() => handleRangChange(nomComp, -1)} disabled={isMinusDisabled} className="px-2 py-1 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-stone-300 font-bold" title={isScelle && current > plancher ? 'Récupérer les XP investis' : ''}>-</button>
            <div className="px-3 py-1 font-bold text-amber-900 min-w-[28px] text-center bg-amber-50">{totalScore}</div>
				<button
				  onClick={() => handleRangChange(nomComp, 1)}
				  disabled={isReadOnly || totalScore >= maxAllowed || (!isScelle && pointsRestantsVerts <= 0 && (!isEspritEligible || pointsRestantsViolets <= 0))}
				  className="p-1 hover:bg-emerald-50 text-emerald-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
				  <div className="flex items-center gap-1">
					<Plus size={16} />
						{isScelle && totalScore < maxAllowed && (
						  <span className="text-[10px] font-bold text-emerald-700">({getUtileCost(totalScore)} XP)</span>
						)}
				  </div>
				</button>          
			</div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pl-4 border-l-2 border-stone-200 ml-1">
          {/* Spécialité issue de l'héritage Fée */}
          {fairySpecActuelle && (
            <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded border border-amber-200 flex items-center" title="Héritage">🔒 {fairySpecActuelle}</span>
          )}
          
          {/* Spécialité issue des Atouts */}
          {specsFromAtouts.map((spec, idx) => (
            <span key={`atout-${idx}`} className="text-[10px] px-2 py-1 bg-yellow-100 text-yellow-900 border border-yellow-300 ring-1 ring-yellow-200 rounded flex items-center gap-1 shadow-sm" title={`Offert par l'atout : ${spec.source}`}>
              ✨ {spec.nom}
            </span>
          ))}

          {/* ✨ Spécialité offerte par le Métier (Étape 10) */}
          {hasJobSpecHere && (
            <span className="text-[10px] px-2 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 ring-1 ring-emerald-200 rounded flex items-center gap-1 shadow-sm" title="Spécialité acquise par votre Métier">
              💼 {jobSpec.nom} {isScelle ? '🔒' : ''}
            </span>
          )}

          {/* Spécialités Achetées (Avec vérification Plancher de Verre) */}
          {userSpecs.map(spec => {
             const isPlancher = isScelle && (character.data?.stats_scellees?.competencesLibres?.choixSpecialiteUser?.[nomComp] || []).includes(spec);
             return (
              <span key={spec} className={`text-[10px] px-2 py-1 rounded flex items-center gap-1 shadow-sm border ${isPlancher ? 'bg-blue-50 text-blue-900 border-blue-200' : 'bg-blue-100 text-blue-800 border-blue-300'}`}>
                {spec} {isPlancher ? '🔒' : <button onClick={() => handleRemoveSpecialiteUser(nomComp, spec)} className="hover:text-red-500 ml-1" title={isScelle ? "Oublier (Récupérer 8 XP)" : "Retirer"}>&times;</button>}
              </span>
             );
          })}

          {/* Achat de nouvelle Spécialité */}
          {totalScore > 0 && creatingSpecFor !== nomComp && (
            <select 
			  onChange={(e) => { if (e.target.value === '__CREATE_NEW__') setCreatingSpecFor(nomComp); else handleAddSpecialiteUser(nomComp, e.target.value); e.target.value = ''; }} 
			  disabled={isReadOnly} // ✨ FIX
              className="text-[10px] bg-transparent text-gray-400 hover:text-blue-600 outline-none cursor-pointer w-24 disabled:opacity-50 disabled:cursor-not-allowed"
			>
              <option value="">+ Choisir ({nextSpecCost === 0 ? 'Gratuit' : (isScelle ? '8 XP' : '1 pt')})</option>
              <option value="__CREATE_NEW__">✨ Créer une nouvelle...</option>
              <optgroup label="📚 Officielles">
                {availableSpecs.filter(s => s.is_official && !userSpecs.includes(s.nom) && s.nom !== fairySpecActuelle && !specsFromAtouts.some(a => a.nom === s.nom)).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}
              </optgroup>
              {availableSpecs.some(s => !s.is_official) && (
                <optgroup label="👥 Communauté">
                  {availableSpecs.filter(s => !s.is_official && !userSpecs.includes(s.nom) && s.nom !== fairySpecActuelle && !specsFromAtouts.some(a => a.nom === s.nom)).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}
                </optgroup>
              )}
            </select>
          )}

          {/* Créateur Custom */}
          {creatingSpecFor === nomComp && (
            <div className="flex gap-1 items-center animate-fade-in">
              <input id={`input-spec-${nomComp}`} type="text" autoFocus placeholder="Nom..." className="flex-1 text-[11px] p-1 border border-blue-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200" onKeyDown={(e) => { if (e.key === 'Enter' && e.currentTarget.value.trim()) handleCreateGlobalSpeciality(nomComp, e.currentTarget.value.trim()); if (e.key === 'Escape') setCreatingSpecFor(null); }}/>
              <button onClick={() => { const input = document.getElementById(`input-spec-${nomComp}`); if (input && input.value.trim()) handleCreateGlobalSpeciality(nomComp, input.value.trim()); }} className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-bold">Créer</button>
              <button onClick={() => setCreatingSpecFor(null)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-[10px] font-bold">X</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in pb-20">
      
      {/* ✨ LE MESSAGE INFORMATIF (CACHÉ EN XP) ✨ */}
      {!isScelle && (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 flex items-start gap-3 shadow-sm animate-fade-in">
          <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Note :</strong> Vous pourrez choisir une Spécialité supplémentaire gratuite lors du choix d'un métier à l'étape de personnalisation.
          </p>
        </div>
      )}

      {/* ✨ L'EN-TÊTE HYBRIDE ✨ */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur shadow-sm p-4 rounded-b-xl border-b border-gray-200 flex justify-between items-center">
        {isScelle ? (
           <div className="flex flex-col gap-1">
             <h3 className="font-serif font-bold text-amber-900 text-lg flex items-center gap-2">
                 <Lock size={18} className="text-amber-600"/> L'Académie de Magie
             </h3>
             <p className="text-xs text-amber-700">Améliorez un rang pour <strong>(Rang visé x 3) XP</strong>. Acquérez une spécialité pour <strong>8 XP</strong>.</p>
         </div>
        ) : (
           <div>
             <h3 className="font-serif font-bold text-amber-900 text-lg">Compétences Utiles</h3>
             <p className="text-xs text-gray-500">15 points à répartir. (Max 4, ou 5 en Prédilection).</p>
           </div>
        )}
        
        {!isScelle && (
          <button onClick={handleReset} className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors text-sm font-bold border border-red-200" title="Réinitialiser">
            <RotateCcw size={16} /> <span className="hidden sm:inline">Tout effacer</span>
          </button>
        )}
      </div>

      {/* ✨ LES COMPTEURS DE CRÉATION (CACHÉS EN XP) ✨ */}
      {!isScelle && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 flex flex-col items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Standard & Spécialités</span>
            <div className={`text-3xl font-black font-serif ${pointsRestantsVerts === 0 ? 'text-emerald-500' : pointsRestantsVerts < 0 ? 'text-red-600' : 'text-emerald-700'}`}>
              {pointsRestantsVerts}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex flex-col items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-1 flex items-center gap-1"><Brain size={14}/> Bonus d'Esprit</span>
            <div className={`text-3xl font-black font-serif ${pointsRestantsViolets === 0 ? 'text-purple-400' : 'text-purple-700'}`}>
              {pointsRestantsViolets}
            </div>
            {bonusEspritMax > 0 ? (
              <span className="text-[10px] text-purple-600 mt-1 font-bold text-center">Réservé aux compétences violettes</span>
            ) : (
              <span className="text-[10px] text-gray-400 mt-1 font-bold">Esprit insuffisant</span>
            )}
          </div>
        </div>
      )}

      {/* ✨ PRÉDILECTIONS AU CHOIX (CACHÉES EN XP) ✨ */}
      {!isScelle && feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6 shadow-sm">
          <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Star size={16} className="fill-amber-600 text-amber-600"/> Héritage Féérique : Choix requis
          </h4>
          <div className="space-y-3">
            {feeData.competencesPredilection.map((p, i) => {
              if (p.isChoix) return (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-amber-100 pb-2 last:border-0">
                  <span className="text-sm font-serif text-amber-900 font-medium whitespace-nowrap">Prédilection au choix :</span>
                  <select className="w-full sm:flex-1 p-2 border border-amber-300 rounded font-serif shadow-sm bg-white text-sm focus:border-amber-500 outline-none cursor-pointer" value={lib.choixPredilection?.[i] || ''} onChange={(e) => handleChoixChange(i, e.target.value, 'competence')} disabled={isScelle}>
                    <option value="">-- Sélectionner --</option>
                    {p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              if (p.isSpecialiteChoix) return (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-amber-100 pb-2 last:border-0">
                  <span className="text-sm font-serif text-amber-900 font-medium whitespace-nowrap">Spécialité en <strong className="text-amber-700">{p.nom}</strong> :</span>
                  <select className="w-full sm:flex-1 p-2 border border-amber-300 rounded font-serif shadow-sm bg-white text-sm focus:border-amber-500 outline-none cursor-pointer" value={lib.choixSpecialite?.[i] || ''} onChange={(e) => handleChoixChange(i, e.target.value, 'specialite')} disabled={isScelle}>
                    <option value="">-- Sélectionner --</option>
                    {p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              return null;
            })}
          </div>
        </div>
      )}

      {/* LA GRILLE DES PROFILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'].map(profilNom => {
          const profil = profils?.find(p => p.nom === profilNom) || { nom: profilNom };
          const isFemme = character.genreHumain === 'Féminin' || character.sexe === 'Femme';
          const nomAffiche = isFemme && profil.nomFeminin ? profil.nomFeminin : profil.nom;
          
          const rang = rangsProfils?.[profil.nom] || 0;
          const totalPP = budgetsPP?.[profil.nom] || 0;
          const bonusFixe = character.profils?.majeur?.nom === profil.nom ? 8 : character.profils?.mineur?.nom === profil.nom ? 4 : 0;

          return (
            <div key={profil.nom} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-stone-100 p-3 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" title={profil.nom}>{profil.icon || '👤'}</span>
                  <div>
                    <h4 className="font-serif font-bold text-amber-900">{nomAffiche}</h4>
                    <div className="flex gap-2 mt-1">
                      {character.profils?.majeur?.nom === profil.nom && <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Majeur</span>}
                      {character.profils?.mineur?.nom === profil.nom && <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Mineur</span>}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Rang {rang}</div>
                  <div className="text-[10px] text-gray-400">+{bonusFixe} = <span className="font-bold text-gray-600">{totalPP} PP</span></div>
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                {(competencesParProfil[profil.nom] || []).map(comp => renderCompRow(comp.nom))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}