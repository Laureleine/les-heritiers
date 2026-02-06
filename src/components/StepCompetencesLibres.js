// src/components/StepCompetencesLibres.js
// Version: 3.2.0
// Migration: Gestion des choix multiples de compétences et de spécialités de prédilection.

import React, { useMemo } from 'react';
import { Sparkles, Shield, Target, AlertCircle, Info, Plus, Minus } from 'lucide-react';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  fairyData, 
  competences 
}) {
  const feeData = fairyData[character.typeFee];

  // ============================================================================
  // GESTION DES CHOIX DE PRÉDILECTION
  // ============================================================================

  const choixPredilection = character.competencesLibres?.choixPredilection || {};
  const choixSpecialite = character.competencesLibres?.choixSpecialite || {};

  const handleChoixChange = (index, value) => {
    onCompetencesLibresChange({
      ...character.competencesLibres,
      choixPredilection: { ...choixPredilection, [index]: value }
    });
  };

  const handleSpecialiteChange = (index, value) => {
    onCompetencesLibresChange({
      ...character.competencesLibres,
      choixSpecialite: { ...choixSpecialite, [index]: value }
    });
  };

  // ============================================================================
  // LOGIQUE DE CALCUL DES RANGS DE BASE
  // ============================================================================

  const competencesBase = useMemo(() => {
    const map = new Map();

    if (feeData?.competencesPredilection) {
      feeData.competencesPredilection.forEach((comp, index) => {
        const nomFinal = comp.isChoix ? choixPredilection[index] : comp.nom;
        const specialiteFinale = comp.isSpecialiteChoix ? choixSpecialite[index] : comp.specialite;

        if (nomFinal) {
          map.set(nomFinal, {
            scoreBase: 2, // Les compétences de prédilection commencent au rang 2 [1]
            predilection: true,
            specialite: specialiteFinale
          });
        }
      });
    }

    // Bonus Profil Majeur (+2) [3]
    if (character.profils?.majeur?.nom) {
      const pData = character.profils.majeur;
      // Note: On assume que character.profils.majeur.competences est une liste de noms
      character.profils.majeur.competences?.forEach(nom => {
        const current = map.get(nom) || { scoreBase: 0, predilection: false };
        map.set(nom, { ...current, scoreBase: current.scoreBase + 2 });
      });
    }

    // Bonus Profil Mineur (+1) [3]
    if (character.profils?.mineur?.nom) {
      character.profils.mineur.competences?.forEach(nom => {
        const current = map.get(nom) || { scoreBase: 0, predilection: false };
        map.set(nom, { ...current, scoreBase: current.scoreBase + 1 });
      });
    }

    return map;
  }, [feeData, choixPredilection, choixSpecialite, character.profils]);

  // ============================================================================
  // GESTION DES POINTS ET RANGS
  // ============================================================================

  const rangsInvestis = character.competencesLibres?.rangs || {};

  const calculatePointsDepenses = () => {
    return Object.values(rangsInvestis).reduce((sum, val) => sum + val, 0);
  };

  const pointsRestants = POINTS_TOTAUX - calculatePointsDepenses();

  const getScoreTotal = (nomComp) => {
    const base = competencesBase.get(nomComp)?.scoreBase || 0;
    const investis = rangsInvestis[nomComp] || 0;
    return base + investis;
  };

  const handleAddRang = (nomComp) => {
    const currentTotal = getScoreTotal(nomComp);
    const isPred = competencesBase.get(nomComp)?.predilection;
    const max = isPred ? 5 : 4; // Max 5 pour prédilection, 4 sinon [1]

    if (pointsRestants > 0 && currentTotal < max) {
      onCompetencesLibresChange({
        ...character.competencesLibres,
        rangs: { ...rangsInvestis, [nomComp]: (rangsInvestis[nomComp] || 0) + 1 }
      });
    }
  };

  const handleRemoveRang = (nomComp) => {
    if (rangsInvestis[nomComp] > 0) {
      onCompetencesLibresChange({
        ...character.competencesLibres,
        rangs: { ...rangsInvestis, [nomComp]: rangsInvestis[nomComp] - 1 }
      });
    }
  };

  // Validation des choix
  const allChoicesMade = feeData?.competencesPredilection?.every((c, i) => {
    const compOK = !c.isChoix || choixPredilection[i];
    const specOK = !c.isSpecialiteChoix || choixSpecialite[i];
    return compOK && specOK;
  }) ?? true;

  // ============================================================================
  // RENDU
  // ============================================================================

  return (
    <div className="space-y-6">
      {/* SECTION CHOIX DES PRÉDILECTIONS */}
      {feeData?.competencesPredilection?.some(c => c.isChoix || c.isSpecialiteChoix) && (
        <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-xl space-y-4">
          <h3 className="font-serif text-xl text-amber-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-600" />
            Choix de Prédilection
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {feeData.competencesPredilection.map((comp, index) => (
              <div key={index} className="space-y-2">
                {/* Choix de la compétence (ex: Mêlée ou Tir) */}
                {comp.isChoix && (
                  <>
                    <label className="text-sm font-bold text-amber-800 uppercase tracking-wider">
                      Compétence au choix
                    </label>
                    <select
                      value={choixPredilection[index] || ''}
                      onChange={(e) => handleChoixChange(index, e.target.value)}
                      className="w-full p-2 border-2 border-amber-300 rounded-lg bg-white"
                    >
                      <option value="">-- Choisir --</option>
                      {comp.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </>
                )}

                {/* Choix de la spécialité (ex: Artisanat ou Explosifs) */}
                {comp.isSpecialiteChoix && (
                  <>
                    <label className="text-sm font-bold text-amber-800 uppercase tracking-wider">
                      Spécialité pour {comp.nom}
                    </label>
                    <select
                      value={choixSpecialite[index] || ''}
                      onChange={(e) => handleSpecialiteChange(index, e.target.value)}
                      className="w-full p-2 border-2 border-amber-300 rounded-lg bg-white"
                    >
                      <option value="">-- Choisir spécialité --</option>
                      {comp.specialiteOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!allChoicesMade ? (
        <div className="p-8 text-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 italic">
          Veuillez finaliser vos choix de prédilection pour répartir vos 15 points.
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-amber-600 text-white p-4 rounded-xl shadow-lg sticky top-0 z-10">
            <div>
              <p className="text-amber-100 text-sm font-serif">Points à répartir</p>
              <p className="text-3xl font-bold font-serif">{pointsRestants} / {POINTS_TOTAUX}</p>
            </div>
            <div className="text-right">
              <Info className="w-5 h-5 ml-auto mb-1 opacity-80" />
              <p className="text-xs max-w-[200px] leading-tight opacity-90">
                Max rang 5 pour vos prédilections féériques, rang 4 pour les autres.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.keys(competences).map(nomComp => {
              const infoBase = competencesBase.get(nomComp);
              const scoreTotal = getScoreTotal(nomComp);
              const investis = rangsInvestis[nomComp] || 0;
              const max = infoBase?.predilection ? 5 : 4;

              return (
                <div key={nomComp} className={`p-4 rounded-xl border-2 transition-all ${
                  scoreTotal > 0 ? 'border-amber-300 bg-white' : 'border-gray-100 bg-gray-50 opacity-60'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-amber-900 flex items-center gap-2">
                        {nomComp}
                        {infoBase?.predilection && <Sparkles className="w-4 h-4 text-amber-500" title="Prédilection" />}
                      </h4>
                      {infoBase?.specialite && (
                        <p className="text-xs text-amber-700 italic">Spécialité : {infoBase.specialite}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleRemoveRang(nomComp)}
                        disabled={investis === 0}
                        className={`p-1 rounded-md ${investis > 0 ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' : 'text-gray-300'}`}
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-xl font-bold font-serif w-6 text-center">{scoreTotal}</span>
                      <button
                        onClick={() => handleAddRang(nomComp)}
                        disabled={pointsRestants === 0 || scoreTotal >= max}
                        className={`p-1 rounded-md ${pointsRestants > 0 && scoreTotal < max ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' : 'text-gray-300'}`}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Visualisation des rangs */}
                  <div className="flex gap-1 mt-2">
                    {[4-8].map(i => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i > max ? 'hidden' :
                          i <= scoreTotal ? (i <= infoBase?.scoreBase ? 'bg-amber-400' : 'bg-green-500') : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}