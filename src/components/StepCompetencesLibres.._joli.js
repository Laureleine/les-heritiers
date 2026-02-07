// src/components/StepCompetencesLibres.js
// Version: 3.1.0 (Règle Bonus Esprit > 3)
// Règle: Chaque point d'Esprit au-dessus de 3 donne 1 pt gratuit pour Érudit ou Savant.

import React, { useState } from 'react';

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  fairyData, 
  competences, 
  profils, 
  competencesParProfil 
}) {
  const [showInfo, setShowInfo] = useState(null);

  // 1. DÉFINITION DES COMPÉTENCES ÉLIGIBLES AU BONUS ESPRIT
  // Érudit (Scholar) et Savant (Scientist)
  const COMPETENCES_BONUS = [
    'Culture', 'Fortitude', 'Occultisme', 'Rhétorique', // Érudit
    'Habiletés', 'Médecine', 'Observation', 'Sciences'  // Savant
  ];

  // 2. CALCUL DES RÉSERVES DE POINTS
  const scoreEsprit = character.caracteristiques?.esprit || 0;
  const POINTS_BONUS_MAX = Math.max(0, scoreEsprit - 3);
  const POINTS_GENERAL_MAX = 15;

  const competencesLibres = character.competencesLibres || { 
    rangs: {}, 
    choixPredilection: {}, 
    choixSpecialite: {}, 
    choixSpecialiteUser: {} 
  };

  // Récupération des compétences de prédilection (max 5 au lieu de 4)
  const typeFeeData = fairyData[character.typeFee] || {};
  const competencesPredilection = (typeFeeData.competencesPredilection || []).map(c => c.nom);

  // 3. CALCUL DES DÉPENSES (Logique de répartition intelligente)
  let coutBonusUtilise = 0;
  let coutGeneralUtilise = 0;

  Object.entries(competencesLibres.rangs || {}).forEach(([nomComp, rangsAjoutes]) => {
    // Coût des rangs
    let coutLigne = rangsAjoutes;

    // Coût des spécialités achetées (1 pt par spé)
    const speAchetees = (competencesLibres.choixSpecialiteUser?.[nomComp] || []).length;
    coutLigne += speAchetees;

    if (COMPETENCES_BONUS.includes(nomComp)) {
      // Si éligible au bonus, on tape d'abord dedans
      const resteBonus = POINTS_BONUS_MAX - coutBonusUtilise;
      const partBonus = Math.min(coutLigne, resteBonus);
      
      coutBonusUtilise += partBonus;
      coutGeneralUtilise += (coutLigne - partBonus);
    } else {
      // Sinon, tout va dans le général
      coutGeneralUtilise += coutLigne;
    }
  });

  const pointsRestantsGeneral = POINTS_GENERAL_MAX - coutGeneralUtilise;
  const pointsRestantsBonus = POINTS_BONUS_MAX - coutBonusUtilise;

  // Helpers de calcul de rang
  const getScoreBase = (nomComp) => {
    let score = 0;
    // Base du profil majeur
    const compMajeur = character.profils?.majeur?.competences?.find(c => c.nom === nomComp);
    if (compMajeur) score = Math.max(score, compMajeur.valeur || 0); // Devrait être 3
    
    // Base du profil mineur (si applicable)
    const compMineur = character.profils?.mineur?.competences?.find(c => c.nom === nomComp);
    if (compMineur) score = Math.max(score, compMineur.valeur || 0); // Devrait être 2

    return score;
  };

  const getScoreTotal = (nomComp) => {
    return getScoreBase(nomComp) + (competencesLibres.rangs?.[nomComp] || 0);
  };

  // --- HANDLERS ---

  const handleRangChange = (nomComp, delta) => {
    const currentRangs = competencesLibres.rangs?.[nomComp] || 0;
    const newRangs = Math.max(0, currentRangs + delta);

    const newCompetencesLibres = {
      ...competencesLibres,
      rangs: {
        ...competencesLibres.rangs,
        [nomComp]: newRangs
      }
    };
    
    // Nettoyage si 0
    if (newRangs === 0) delete newCompetencesLibres.rangs[nomComp];
    
    onCompetencesLibresChange(newCompetencesLibres);
  };

  const handleSpecialiteUserToggle = (nomComp, spe) => {
    const currentList = competencesLibres.choixSpecialiteUser?.[nomComp] || [];
    let newList;
    
    if (currentList.includes(spe)) {
      newList = currentList.filter(s => s !== spe); // Retrait = Remboursement
    } else {
      // Achat : On vérifie si on a le budget (Général OU Bonus si éligible)
      const isEligible = COMPETENCES_BONUS.includes(nomComp);
      const aDuBudget = pointsRestantsGeneral > 0 || (isEligible && pointsRestantsBonus > 0);
      
      if (!aDuBudget) return; // Pas de sous, pas de spé
      newList = [...currentList, spe];
    }

    onCompetencesLibresChange({
      ...competencesLibres,
      choixSpecialiteUser: {
        ...competencesLibres.choixSpecialiteUser,
        [nomComp]: newList
      }
    });
  };

  // --- VALIDATION ---

  const canAddRang = (nomComp) => {
    // 1. Vérification du budget (General ou Bonus)
    const isEligible = COMPETENCES_BONUS.includes(nomComp);
    const aDuBudget = pointsRestantsGeneral > 0 || (isEligible && pointsRestantsBonus > 0);
    
    if (!aDuBudget) return false;

    // 2. Vérification du plafond (Max 4 ou 5)
    const scoreTotal = getScoreTotal(nomComp);
    const isPredilection = competencesPredilection.includes(nomComp);
    const maxRangs = isPredilection ? 5 : 4;

    return scoreTotal < maxRangs;
  };

  // --- RENDERERS ---

  const renderCompetence = (nomComp) => {
    const compData = competences[nomComp] || {};
    const scoreBase = getScoreBase(nomComp);
    const rangsSupp = competencesLibres.rangs?.[nomComp] || 0;
    const scoreTotal = scoreBase + rangsSupp;
    const isPredilection = competencesPredilection.includes(nomComp);
    const maxRangs = isPredilection ? 5 : 4;
    const isEligibleBonus = COMPETENCES_BONUS.includes(nomComp);

    // Spécialités acquises via Profil
    const specialiteBase = character.profils?.majeur?.competences?.find(c => c.nom === nomComp)?.specialite 
                        || character.profils?.mineur?.competences?.find(c => c.nom === nomComp)?.specialite;
    
    // Spécialités achetées
    const specialitesAchetees = competencesLibres.choixSpecialiteUser?.[nomComp] || [];

    return (
      <div key={nomComp} className={`p-3 rounded-lg border flex flex-col gap-2 transition-all ${
        rangsSupp > 0 || specialitesAchetees.length > 0
          ? isEligibleBonus && pointsRestantsBonus >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-300' 
          : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800">{nomComp}</span>
            {isPredilection && <span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200" title="Prédilection : Max 5">★</span>}
            {isEligibleBonus && POINTS_BONUS_MAX > 0 && <span className="text-xs text-blue-600" title="Éligible au Bonus Esprit">🧠</span>}
            
            <button onClick={() => setShowInfo(showInfo === nomComp ? null : nomComp)} className="text-gray-400 hover:text-amber-600">
              ℹ
            </button>
          </div>

          <div className="flex items-center gap-3">
            {scoreBase > 0 && <span className="text-xs text-gray-500 font-mono">Base:{scoreBase}</span>}
            
            <div className="flex items-center gap-1 bg-white rounded border border-gray-300 px-1">
              <button 
                onClick={() => handleRangChange(nomComp, -1)}
                disabled={rangsSupp === 0}
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded disabled:opacity-30"
              >
                -
              </button>
              <span className={`w-6 text-center font-bold ${rangsSupp > 0 ? 'text-amber-700' : 'text-gray-400'}`}>
                {scoreTotal}
              </span>
              <button 
                onClick={() => handleRangChange(nomComp, 1)}
                disabled={!canAddRang(nomComp)}
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded disabled:opacity-30"
              >
                +
              </button>
            </div>
            <span className="text-xs text-gray-400">/ {maxRangs}</span>
          </div>
        </div>

        {showInfo === nomComp && (
          <div className="text-xs text-gray-600 italic bg-white p-2 rounded border border-gray-100">
            {compData.description}
          </div>
        )}

        {/* Section Spécialités */}
        <div className="mt-1">
            {specialiteBase && (
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1 border border-gray-300">
                    {specialiteBase} (Profil)
                </span>
            )}
            
            {/* Achat de spécialités */}
            {scoreTotal >= 1 && compData.specialites && (
                <div className="flex flex-wrap gap-1 mt-1">
                    {compData.specialites
                        .filter(s => s !== specialiteBase) // On ne propose pas celle qu'on a déjà
                        .map(spec => {
                            const isBought = specialitesAchetees.includes(spec);
                            return (
                                <button
                                    key={spec}
                                    onClick={() => handleSpecialiteUserToggle(nomComp, spec)}
                                    disabled={!isBought && !(pointsRestantsGeneral > 0 || (isEligibleBonus && pointsRestantsBonus > 0))}
                                    className={`text-xs px-2 py-1 rounded border transition-all ${
                                        isBought
                                        ? 'bg-amber-200 text-amber-900 border-amber-400 font-bold shadow-sm'
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                                    }`}
                                >
                                    {spec} {isBought ? '✓' : '+1pt'}
                                </button>
                            );
                        })
                    }
                </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm">
        <h2 className="text-2xl font-serif text-amber-900 mb-2">Compétences Libres</h2>
        <p className="text-gray-600 mb-4">
          Renforcez vos acquis ou développez de nouveaux talents.
        </p>

        {/* BARRE DE BUDGETS (LE CŒUR DE LA NOUVELLE FONCTIONNALITÉ) */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            
            {/* Budget Général */}
            <div className={`flex-1 p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                pointsRestantsGeneral < 0 ? 'bg-red-50 border-red-300' : 'bg-white border-amber-300'
            }`}>
                <div>
                    <h3 className="font-bold text-amber-900 uppercase text-xs tracking-wider">Points Libres</h3>
                    <p className="text-xs text-gray-500">Pour toutes les compétences</p>
                </div>
                <div className={`text-3xl font-serif font-bold ${pointsRestantsGeneral < 0 ? 'text-red-600' : 'text-amber-600'}`}>
                    {pointsRestantsGeneral} <span className="text-sm font-sans text-gray-400">/ 15</span>
                </div>
            </div>

            {/* Budget Bonus Esprit (Conditionnel) */}
            {POINTS_BONUS_MAX > 0 && (
                <div className={`flex-1 p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                    pointsRestantsBonus < 0 ? 'bg-red-50 border-red-300' : 'bg-blue-50 border-blue-200'
                }`}>
                    <div>
                        <h3 className="font-bold text-blue-900 uppercase text-xs tracking-wider flex items-center gap-1">
                            <span className="text-lg">🧠</span> Bonus Esprit
                        </h3>
                        <p className="text-xs text-blue-600">Pour Érudit & Savant uniquement</p>
                    </div>
                    <div className={`text-3xl font-serif font-bold ${pointsRestantsBonus < 0 ? 'text-red-600' : 'text-blue-600'}`}>
                        {pointsRestantsBonus} <span className="text-sm font-sans text-blue-300">/ {POINTS_BONUS_MAX}</span>
                    </div>
                </div>
            )}
        </div>

        {/* Liste des Compétences par Profil */}
        <div className="space-y-8">
          {profils.map(profil => {
            const profilNom = profil.nom;
            const liste = competencesParProfil[profilNom] || [];
            
            // On ne montre que les profils qui ont des compétences associées
            if (liste.length === 0) return null;

            return (
              <div key={profilNom} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-serif text-lg text-gray-700 mb-4 border-b pb-2 flex items-center gap-2">
                    {profil.icon || '🔹'} {profilNom}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {liste.map(comp => renderCompetence(comp.nom))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}