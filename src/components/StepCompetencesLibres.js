// src/components/StepCompetencesLibres.js
// Version: 3.6.0
// Correction: Retour au design "Source" complet (Spécialités manuelles incluses) + Gestion Choix Ange.

import React from 'react';
import { Plus, Minus, Star, Target, Info } from 'lucide-react';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  profils, 
  competences, // Requis pour lister les spécialités disponibles
  competencesParProfil, 
  fairyData 
}) {
  const feeData = fairyData[character.typeFee];
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {} };
  
  // --- 1. CALCULS DU BUDGET (Source Logic) ---
  const pointsDepenses = Object.entries(lib.rangs || {}).reduce((sum, [key, val]) => sum + val, 0) 
    + Object.values(lib.choixSpecialiteUser || {}).flat().length; // Ajout du coût des spécialités achetées
    
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  // --- 2. LOGIQUE PRÉDILECTION (V3.5 Logic) ---
  const getPredilectionsFinales = () => {
    if (!feeData?.competencesPredilection) return [];
    return feeData.competencesPredilection.map((p, i) => {
      if (p.isChoix) return lib.choixPredilection?.[i];
      return p.nom;
    }).filter(Boolean);
  };
  const predFinales = getPredilectionsFinales();

  // --- 3. HELPER SCORE BASE (Source Logic) ---
  const getScoreBase = (nomComp) => {
    let base = 0;
    if (predFinales.includes(nomComp)) base += 2;
    if (character.profils.majeur.competences?.includes(nomComp)) base += 2;
    if (character.profils.mineur.competences?.includes(nomComp)) base += 1;
    return base;
  };

  // --- 4. HANDLERS ---
  
  const handleRangChange = (nomComp, delta) => {
    const current = lib.rangs[nomComp] || 0;
    const isPred = predFinales.includes(nomComp);
    const max = isPred ? 5 : 4;
    const totalScore = getScoreBase(nomComp) + current;

    if (delta > 0 && (pointsRestants <= 0 || totalScore >= max)) return;
    if (delta < 0 && current <= 0) return;

    onCompetencesLibresChange({
      ...lib,
      rangs: { ...lib.rangs, [nomComp]: current + delta }
    });
  };

  // Gestion des choix féériques (Ange/Gnome)
  const handleChoixChange = (index, value, type) => {
    const target = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    onCompetencesLibresChange({
      ...lib,
      [target]: { ...lib[target], [index]: value }
    });
  };

  // Gestion des spécialités manuelles (SOURCE V3.0.4)
  const handleAddSpecialiteUser = (nomComp, specName) => {
    if (pointsRestants <= 0 || !specName) return;
    const currentSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    if (currentSpecs.includes(specName)) return;

    onCompetencesLibresChange({
      ...lib,
      choixSpecialiteUser: {
        ...lib.choixSpecialiteUser,
        [nomComp]: [...currentSpecs, specName]
      }
    });
  };

  const handleRemoveSpecialiteUser = (nomComp, specName) => {
    const currentSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    onCompetencesLibresChange({
      ...lib,
      choixSpecialiteUser: {
        ...lib.choixSpecialiteUser,
        [nomComp]: currentSpecs.filter(s => s !== specName)
      }
    });
  };

  // --- 5. RENDER ROW (Design Source V3.0.4 restauré) ---
  const renderCompRow = (nomComp) => {
    const scoreBase = getScoreBase(nomComp);
    const investis = lib.rangs[nomComp] || 0;
    const total = scoreBase + investis;
    const isPred = predFinales.includes(nomComp);
    
    // Spécialités achetées par l'utilisateur
    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    // Spécialités disponibles dans la base de données pour cette compétence
    const availableSpecs = competences[nomComp]?.specialites || [];

    return (
      <div key={nomComp} className="mb-2 p-3 bg-white rounded border border-amber-100 shadow-sm hover:border-amber-300 transition-all">
        {/* Ligne principale : Nom et Rangs */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-amber-900 font-bold">{nomComp}</span>
            {isPred && <Star size={14} className="fill-amber-400 text-amber-400" />}
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-amber-600 uppercase font-bold tracking-wider">Base {scoreBase}</span>
            <div className="flex items-center bg-amber-50 rounded border border-amber-200">
              <button 
                onClick={() => handleRangChange(nomComp, -1)}
                disabled={investis <= 0}
                className="px-2 py-1 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-amber-200"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-bold text-amber-900 text-lg">{total}</span>
              <button 
                onClick={() => handleRangChange(nomComp, 1)}
                disabled={pointsRestants <= 0 || total >= (isPred ? 5 : 4)}
                className="px-2 py-1 hover:bg-green-100 text-amber-800 disabled:opacity-30 border-l border-amber-200"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Section Spécialités (Restaurée) */}
        <div className="pl-2 border-l-2 border-amber-100 mt-2">
          {/* Liste des spécialités acquises */}
          <div className="flex flex-wrap gap-2 mb-2">
            {userSpecs.map(spec => (
              <span key={spec} className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full border border-amber-200">
                {spec}
                <button onClick={() => handleRemoveSpecialiteUser(nomComp, spec)} className="hover:text-red-600 font-bold">×</button>
              </span>
            ))}
          </div>

          {/* Sélecteur d'ajout */}
          {availableSpecs.length > 0 && (
            <div className="flex gap-2">
              <select 
                className="flex-1 text-xs p-1 border rounded bg-gray-50 font-serif"
                onChange={(e) => {
                  if(e.target.value) {
                    handleAddSpecialiteUser(nomComp, e.target.value);
                    e.target.value = "";
                  }
                }}
                disabled={pointsRestants <= 0}
              >
                <option value="">+ Ajouter une spécialité (1 pt)</option>
                {availableSpecs.filter(s => !userSpecs.includes(s)).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* HEADER AVEC SCORE */}
      <div className="flex justify-between items-end border-b-2 border-amber-100 pb-4">
        <div>
          <h2 className="text-2xl font-serif text-amber-900">Compétences Utiles</h2>
          <p className="text-sm text-amber-700 italic">Répartissez vos 15 points (Rangs ou Spécialités).</p>
        </div>
        <div className="text-right bg-amber-600 text-white px-4 py-2 rounded shadow-lg">
          <span className="block text-3xl font-bold leading-none">{pointsRestants}</span>
          <span className="text-[10px] uppercase tracking-widest opacity-80">Points Restants</span>
        </div>
      </div>

      {/* BLOC CHOIX HÉRITAGE (ANGE) - RESTE EN HAUT POUR LA VISIBILITÉ */}
      {feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <h3 className="font-serif text-amber-900 font-bold mb-3 flex items-center gap-2">
            <Target size={18}/> Héritage Féérique : Choix requis
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {feeData.competencesPredilection.map((p, i) => {
              if (p.isChoix) return (
                <div key={i}>
                  <label className="block text-xs font-bold uppercase text-amber-700 mb-1">Prédilection au choix :</label>
                  <select 
                    className="w-full p-2 border rounded font-serif"
                    value={lib.choixPredilection?.[i] || ''}
                    onChange={(e) => handleChoixChange(i, e.target.value, 'competence')}
                  >
                    <option value="">-- Sélectionner --</option>
                    {p.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              return null;
            })}
          </div>
        </div>
      )}

      {/* GRILLE PROFILS (DESIGN SOURCE) */}
      <div className="grid md:grid-cols-2 gap-6">
        {profils.map(profil => {
          const isMajeur = character.profils.majeur.nom === profil.nom;
          const isMineur = character.profils.mineur.nom === profil.nom;
          
          return (
            <div key={profil.id} className={`p-4 rounded-xl border-2 transition-all ${
              isMajeur ? 'border-amber-400 bg-amber-50/50' : 
              isMineur ? 'border-blue-300 bg-blue-50/30' : 
              'border-gray-200 bg-gray-50/50'
            }`}>
              <h4 className="font-serif text-lg mb-4 flex items-center gap-2 text-amber-950 border-b border-amber-100 pb-2">
                <span className="text-xl">{profil.icon}</span> {profil.nom}
                {isMajeur && <span className="ml-auto text-[10px] bg-amber-600 text-white px-2 py-1 rounded uppercase font-bold">Majeur (+2)</span>}
                {isMineur && <span className="ml-auto text-[10px] bg-blue-600 text-white px-2 py-1 rounded uppercase font-bold">Mineur (+1)</span>}
              </h4>
              
              <div className="space-y-1">
                {(competencesParProfil[profil.nom] || []).map(comp => renderCompRow(comp.nom))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
