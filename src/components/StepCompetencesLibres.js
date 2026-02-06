// src/components/StepCompetencesLibres.js
// Version: 3.5.0
// Build: 2026-02-05 12:30
// Description: Interface fidèle aux sources v3.0 avec intégration des choix de prédilection.

import React from 'react';
import { Plus, Minus, Star, Target } from 'lucide-react';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  profils, 
  competencesParProfil, 
  fairyData 
}) {
  const feeData = fairyData[character.typeFee];
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {} };

  // 1. Calcul du budget restant (1 point = 1 rang) [Source 181]
  const pointsDepenses = Object.values(lib.rangs || {}).reduce((sum, v) => sum + v, 0);
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  // 2. Détermination des compétences de prédilection finales (fixes + choix)
  const getPredilectionsFinales = () => {
    if (!feeData?.competencesPredilection) return [];
    return feeData.competencesPredilection.map((p, i) => {
      if (p.isChoix) return lib.choixPredilection[i];
      return p.nom;
    }).filter(Boolean);
  };

  const predFinales = getPredilectionsFinales();

  // 3. Calcul du score de base selon p.111 et p.182 des sources
  const getScoreBase = (nomComp) => {
    let base = 0;
    if (predFinales.includes(nomComp)) base += 2; // Bonus de fée
    if (character.profils.majeur.competences?.includes(nomComp)) base += 2; // Profil Majeur
    if (character.profils.mineur.competences?.includes(nomComp)) base += 1; // Profil Mineur
    return base;
  };

  const handleRangChange = (nomComp, delta) => {
    const currentInvested = lib.rangs[nomComp] || 0;
    const isPred = predFinales.includes(nomComp);
    const maxRank = isPred ? 5 : 4; // Règle p.110
    const totalScore = getScoreBase(nomComp) + currentInvested;

    if (delta > 0 && (pointsRestants <= 0 || totalScore >= maxRank)) return;
    if (delta < 0 && currentInvested <= 0) return;

    onCompetencesLibresChange({
      ...lib,
      rangs: { ...lib.rangs, [nomComp]: currentInvested + delta }
    });
  };

  const renderCompRow = (nomComp) => {
    const scoreBase = getScoreBase(nomComp);
    const investis = lib.rangs[nomComp] || 0;
    const total = scoreBase + investis;
    const isPred = predFinales.includes(nomComp);

    return (
      <div key={nomComp} className="flex items-center justify-between p-2 bg-white rounded border border-amber-100 shadow-sm">
        <div className="flex items-center gap-2 flex-1">
          <span className="font-serif text-amber-900 text-sm">{nomComp}</span>
          {isPred && <Star size={12} className="fill-amber-400 text-amber-400" />}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-[10px] text-amber-600 font-bold">BASE {scoreBase}</div>
          <div className="flex items-center gap-2 bg-amber-50 rounded border border-amber-200 p-0.5">
            <button onClick={() => handleRangChange(nomComp, -1)} className="p-0.5 text-amber-700 hover:text-red-600"><Minus size={14} /></button>
            <span className="w-5 text-center font-bold text-amber-900">{total}</span>
            <button onClick={() => handleRangChange(nomComp, 1)} className="p-0.5 text-amber-700 hover:text-green-600"><Plus size={14} /></button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* HEADER ÉTAPE */}
      <div className="flex justify-between items-center border-b-2 border-amber-100 pb-4">
        <h2 className="text-2xl font-serif text-amber-900">Compétences Utiles</h2>
        <div className="bg-amber-600 text-white px-4 py-2 rounded-lg font-serif shadow-inner">
          {pointsRestants} points restants
        </div>
      </div>

      {/* SECTION CHOIX FÉÉRIQUES (Conditionnelle) */}
      {feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-xl space-y-4">
          <h3 className="font-serif text-amber-900 flex items-center gap-2"><Target size={18}/> Vos choix d'héritage</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {feeData.competencesPredilection.map((p, i) => {
              if (p.isChoix) return (
                <div key={`c-${i}`} className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-amber-700">Compétence au choix :</label>
                  <select 
                    value={lib.choixPredilection[i] || ''} 
                    onChange={(e) => onCompetencesLibresChange({...lib, choixPredilection: {...lib.choixPredilection, [i]: e.target.value}})}
                    className="w-full p-2 border rounded font-serif text-sm bg-white"
                  >
                    <option value="">-- Sélectionner --</option>
                    {p.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              if (p.isSpecialiteChoix) return (
                <div key={`s-${i}`} className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-amber-700">Spécialité ({p.nom}) :</label>
                  <select 
                    value={lib.choixSpecialite[i] || ''} 
                    onChange={(e) => onCompetencesLibresChange({...lib, choixSpecialite: {...lib.choixSpecialite, [i]: e.target.value}})}
                    className="w-full p-2 border rounded font-serif text-sm bg-white"
                  >
                    <option value="">-- Sélectionner --</option>
                    {p.specialiteOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              return null;
            })}
          </div>
        </div>
      )}

      {/* GRILLE DES PROFILS (Identique à la source) */}
      <div className="grid md:grid-cols-2 gap-6">
        {profils.map(profil => {
          const isMajeur = character.profils.majeur.nom === profil.nom;
          const isMineur = character.profils.mineur.nom === profil.nom;
          return (
            <div key={profil.id} className={`p-5 rounded-2xl border-2 ${isMajeur ? 'bg-amber-50/50 border-amber-300' : isMineur ? 'bg-blue-50/30 border-blue-200' : 'bg-gray-50 border-gray-100'}`}>
              <h4 className="font-serif text-lg flex items-center gap-2 mb-4">
                {profil.icon} {profil.nom}
                {isMajeur && <span className="text-[9px] bg-amber-600 text-white px-2 py-0.5 rounded-full uppercase ml-auto">Majeur</span>}
              </h4>
              <div className="space-y-2">
                {(competencesParProfil[profil.nom] || []).map(comp => renderCompRow(comp.nom))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}