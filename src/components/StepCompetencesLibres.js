// src/components/StepCompetencesLibres.js
// Version: 3.5.5
// Build: 2026-02-05 18:00
// Correction: Ajout du sélecteur "Héritage" pour l'Ange (Mêlée/Tir) sans changer le design.

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
  // Sécurisation de l'objet pour éviter les crashs si les champs n'existent pas encore
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {} };
  const rangs = lib.rangs || {};
  const choixPred = lib.choixPredilection || {};
  const choixSpec = lib.choixSpecialite || {};

  // 1. Calcul du budget restant
  const pointsDepenses = Object.values(rangs).reduce((sum, v) => sum + v, 0);
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  // 2. Logique pour identifier les prédilections actives (fixes + choix)
  const getPredilectionsFinales = () => {
    if (!feeData?.competencesPredilection) return [];
    return feeData.competencesPredilection.map((p, i) => {
      // Si c'est un choix (ex: Ange), on regarde ce que l'utilisateur a sélectionné
      if (p.isChoix) return choixPred[i];
      return p.nom;
    }).filter(Boolean);
  };

  const predFinales = getPredilectionsFinales();

  // 3. Calcul du score de base (Prédilection + Profils)
  const getScoreBase = (nomComp) => {
    let base = 0;
    // +2 si c'est une compétence de fée (fixe ou choisie)
    if (predFinales.includes(nomComp)) base += 2;
    // +2 si Profil Majeur
    if (character.profils.majeur.competences?.includes(nomComp)) base += 2;
    // +1 si Profil Mineur
    if (character.profils.mineur.competences?.includes(nomComp)) base += 1;
    return base;
  };

  const handleRangChange = (nomComp, delta) => {
    const currentInvested = rangs[nomComp] || 0;
    const isPred = predFinales.includes(nomComp);
    const maxRank = isPred ? 5 : 4; // Règle: 5 pour prédilection, 4 sinon
    const totalScore = getScoreBase(nomComp) + currentInvested;

    // Bloquer si plus de points ou max atteint
    if (delta > 0 && (pointsRestants <= 0 || totalScore >= maxRank)) return;
    if (delta < 0 && currentInvested <= 0) return;

    onCompetencesLibresChange({
      ...lib,
      rangs: { ...rangs, [nomComp]: currentInvested + delta }
    });
  };

  // Mise à jour des choix (ex: Ange choisissant "Tir")
  const handleChoixChange = (index, value, type) => {
    const target = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    const currentChoix = lib[target] || {};
    
    onCompetencesLibresChange({
      ...lib,
      [target]: { ...currentChoix, [index]: value }
    });
  };

  const renderCompRow = (nomComp) => {
    const scoreBase = getScoreBase(nomComp);
    const investis = rangs[nomComp] || 0;
    const total = scoreBase + investis;
    const isPred = predFinales.includes(nomComp);

    return (
      <div key={nomComp} className="flex items-center justify-between p-2 mb-1 bg-white rounded border border-amber-100 shadow-sm">
        <div className="flex items-center gap-2 flex-1">
          <span className="font-serif text-amber-900 text-sm">{nomComp}</span>
          {isPred && <Star size={12} className="fill-amber-400 text-amber-400" title="Compétence de prédilection" />}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-[9px] text-amber-600 font-bold uppercase tracking-tighter">
            Base {scoreBase}
          </div>
          <div className="flex items-center gap-2 bg-amber-50 rounded border border-amber-200 p-0.5">
            <button 
              onClick={() => handleRangChange(nomComp, -1)} 
              className="p-0.5 text-amber-700 hover:text-red-600 disabled:opacity-30"
              disabled={investis <= 0}
            >
              <Minus size={14} />
            </button>
            <span className="w-5 text-center font-bold text-amber-900">{total}</span>
            <button 
              onClick={() => handleRangChange(nomComp, 1)} 
              className="p-0.5 text-amber-700 hover:text-green-600 disabled:opacity-30"
              disabled={pointsRestants <= 0}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* En-tête "intégré" style papier */}
      <div className="flex justify-between items-center border-b-2 border-amber-100 pb-4">
        <div>
          <h2 className="text-2xl font-serif text-amber-900">Compétences Utiles</h2>
          <p className="text-xs text-amber-700 italic">Répartissez vos 15 points (Max 4, ou 5 en Prédilection).</p>
        </div>
        <div className="bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded font-serif">
          <span className="text-xl font-bold">{pointsRestants}</span> <span className="text-xs uppercase">pts restants</span>
        </div>
      </div>

      {/* BLOC DE CHOIX FÉÉRIQUE (S'affiche uniquement si nécessaire) */}
      {/* C'est ce bloc qui manquait pour l'Ange */}
      {feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <h3 className="font-serif text-amber-900 flex items-center gap-2 text-md mb-3">
            <Target size={16} className="text-amber-600" /> Héritage Féérique : Faites vos choix
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {feeData.competencesPredilection.map((p, i) => {
              // Cas 1: Choix de compétence (ex: Mêlée ou Tir)
              if (p.isChoix) return (
                <div key={`c-${i}`}>
                  <label className="block text-xs font-bold text-amber-800 uppercase mb-1">
                    Prédilection au choix :
                  </label>
                  <select 
                    value={choixPred[i] || ''} 
                    onChange={(e) => handleChoixChange(i, e.target.value, 'competence')}
                    className="w-full p-2 border border-amber-300 rounded font-serif text-sm bg-white"
                  >
                    <option value="">-- Choisir --</option>
                    {p.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              // Cas 2: Choix de spécialité (ex: Gnome)
              if (p.isSpecialiteChoix) return (
                <div key={`s-${i}`}>
                  <label className="block text-xs font-bold text-amber-800 uppercase mb-1">
                    Spécialité ({p.nom}) :
                  </label>
                  <select 
                    value={choixSpec[i] || ''} 
                    onChange={(e) => handleChoixChange(i, e.target.value, 'specialite')}
                    className="w-full p-2 border border-amber-300 rounded font-serif text-sm bg-white"
                  >
                    <option value="">-- Choisir --</option>
                    {p.specialiteOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              return null;
            })}
          </div>
        </div>
      )}

      {/* Grille des compétences par profil (Design existant conservé) */}
      <div className="grid md:grid-cols-2 gap-6">
        {profils.map(profil => {
          const isMajeur = character.profils.majeur.nom === profil.nom;
          const isMineur = character.profils.mineur.nom === profil.nom;
          return (
            <div key={profil.id} className={`p-4 rounded-lg border-2 ${isMajeur ? 'bg-amber-50/50 border-amber-300' : isMineur ? 'bg-blue-50/30 border-blue-200' : 'bg-gray-50 border-gray-100'}`}>
              <h4 className="font-serif text-lg flex items-center gap-2 mb-3 text-amber-950">
                <span>{profil.icon}</span> {profil.nom}
                {isMajeur && <span className="text-[9px] bg-amber-600 text-white px-2 py-0.5 rounded uppercase">Majeur</span>}
                {isMineur && <span className="text-[9px] bg-blue-600 text-white px-2 py-0.5 rounded uppercase">Mineur</span>}
              </h4>
              <div>
                {(competencesParProfil[profil.nom] || []).map(comp => renderCompRow(comp.nom))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}