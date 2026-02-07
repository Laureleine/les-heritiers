// src/components/StepCompetencesLibres.js
// Version: 3.6.3
// Build: 2026-02-05 21:00
// Description: Ajout de l'équation de calcul des PP (Rang + Bonus = Total) dans les en-têtes.

import React from 'react';
import { Plus, Minus, Star, Target, ShieldCheck, Coins } from 'lucide-react';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  profils, 
  competences, 
  competencesParProfil, 
  fairyData 
}) {
  const feeData = fairyData[character.typeFee];
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} };
  
  // 1. Calcul du budget global (15 points)
  const pointsDepenses = Object.entries(lib.rangs || {}).reduce((sum, [key, val]) => sum + val, 0) 
    + Object.values(lib.choixSpecialiteUser || {}).flat().length;
    
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  // 2. Prédilections (Fixes + Choix)
  const getPredilectionsFinales = () => {
    if (!feeData?.competencesPredilection) return [];
    return feeData.competencesPredilection.map((p, i) => {
      if (p.isChoix) return lib.choixPredilection?.[i];
      return p.nom;
    }).filter(Boolean);
  };
  const predFinales = getPredilectionsFinales();

  // 3. Score de base par compétence
  const getScoreBase = (nomComp) => {
    let base = 0;
    if (predFinales.includes(nomComp)) base += 2;
    if (character.profils.majeur.competences?.includes(nomComp)) base += 2;
    if (character.profils.mineur.competences?.includes(nomComp)) base += 1;
    return base;
  };

  // 4. Calcul du RANG DE PROFIL
  const calculateProfilStats = (profilNom, isMajeur, isMineur) => {
    const compsDuProfil = competencesParProfil[profilNom] || [];
    let sommeScores = 0;

    compsDuProfil.forEach(c => {
      const base = getScoreBase(c.nom);
      const investi = lib.rangs[c.nom] || 0;
      sommeScores += (base + investi);
    });

    const rang = Math.floor(sommeScores / 4); // Règle : Moyenne arrondie à l'inférieur
    const bonusFixe = isMajeur ? 8 : isMineur ? 4 : 0;
    const totalPP = rang + bonusFixe;

    return { rang, bonusFixe, totalPP };
  };

  // --- HANDLERS ---

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

  const handleChoixChange = (index, value, type) => {
    const target = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    onCompetencesLibresChange({
      ...lib,
      [target]: { ...lib[target], [index]: value }
    });
  };

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

  // --- RENDER ROW ---
  const renderCompRow = (nomComp) => {
    const scoreBase = getScoreBase(nomComp);
    const investis = lib.rangs[nomComp] || 0;
    const total = scoreBase + investis;
    const isPred = predFinales.includes(nomComp);
    const fairySpecFixe = feeData?.competencesPredilection?.find(
      p => p.nom === nomComp && !p.isChoix && p.specialite
    )?.specialite;
    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    const availableSpecs = competences[nomComp]?.specialites || [];

    return (
      <div key={nomComp} className="mb-2 p-2 bg-white rounded border border-amber-100 shadow-sm hover:border-amber-300 transition-all">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-amber-900 font-bold text-sm">{nomComp}</span>
            {isPred && <Star size={12} className="fill-amber-400 text-amber-400" />}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[9px] text-amber-700 uppercase tracking-tighter flex flex-col items-end leading-none mr-1">
              <span>Base {scoreBase}</span>
              {investis > 0 && <span className="text-green-600 font-bold">+{investis} pts</span>}
            </div>
            <div className="flex items-center bg-amber-50 rounded border border-amber-200 shadow-inner">
              <button onClick={() => handleRangChange(nomComp, -1)} disabled={investis <= 0} className="px-1.5 py-0.5 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-amber-200"><Minus size={12} /></button>
              <div className="w-8 text-center flex flex-col justify-center">
                <span className="font-bold text-amber-900 text-base leading-none">{total}</span>
              </div>
              <button onClick={() => handleRangChange(nomComp, 1)} disabled={pointsRestants <= 0 || total >= (isPred ? 5 : 4)} className="px-1.5 py-0.5 hover:bg-green-100 text-amber-800 disabled:opacity-30 border-l border-amber-200"><Plus size={12} /></button>
            </div>
          </div>
        </div>
        <div className="pl-2 border-l-2 border-amber-100 mt-1 space-y-1">
          <div className="flex flex-wrap gap-1">
            {fairySpecFixe && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-purple-100 text-purple-900 text-[10px] rounded border border-purple-200">
                <ShieldCheck size={10} /> {fairySpecFixe}
              </span>
            )}
            {userSpecs.map(spec => (
              <span key={spec} className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] rounded border border-amber-200">
                {spec}
                <button onClick={() => handleRemoveSpecialiteUser(nomComp, spec)} className="hover:text-red-600 font-bold ml-1">×</button>
              </span>
            ))}
          </div>
          {availableSpecs.length > 0 && (
            <select 
              className="w-full text-[10px] p-1 border rounded bg-gray-50 font-serif text-gray-500 outline-none focus:border-amber-400 mt-1"
              onChange={(e) => { if(e.target.value) { handleAddSpecialiteUser(nomComp, e.target.value); e.target.value = ""; }}}
              disabled={pointsRestants <= 0}
            >
              <option value="">+ Acheter spécialité (1 pt)</option>
              {availableSpecs.filter(s => !userSpecs.includes(s) && s !== fairySpecFixe).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Sticky */}
      <div className="flex justify-between items-end border-b-2 border-amber-100 pb-4 sticky top-0 bg-white/95 z-10 backdrop-blur-sm pt-2">
        <div>
          <h2 className="text-2xl font-serif text-amber-900">Compétences Utiles</h2>
          <p className="text-xs text-amber-700 italic">15 points à répartir. (Max 4, ou 5 en Prédilection).</p>
        </div>
        <div className="bg-amber-600 text-white px-4 py-2 rounded shadow-lg flex flex-col items-center min-w-[80px]">
          <span className="text-2xl font-bold leading-none">{pointsRestants}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-90">Points</span>
        </div>
      </div>

      {/* Choix Héritage */}
      {feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm">
          <h3 className="font-serif text-amber-900 font-bold mb-3 flex items-center gap-2">
            <Target size={18} className="text-amber-600"/> Héritage Féérique : Choix requis
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {feeData.competencesPredilection.map((p, i) => {
              if (p.isChoix) return (
                <div key={i}>
                  <label className="block text-xs font-bold uppercase text-amber-700 mb-1">Prédilection au choix :</label>
                  <select 
                    className="w-full p-2 border rounded font-serif shadow-sm"
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

      {/* Grille Profils */}
      <div className="grid md:grid-cols-2 gap-6">
        {profils.map(profil => {
          const isMajeur = character.profils.majeur.nom === profil.nom;
          const isMineur = character.profils.mineur.nom === profil.nom;
          const stats = calculateProfilStats(profil.nom, isMajeur, isMineur);
          
          const headerColor = isMajeur ? 'text-amber-900' : isMineur ? 'text-blue-900' : 'text-gray-500';
          const borderColor = isMajeur ? 'border-amber-400' : isMineur ? 'border-blue-300' : 'border-gray-200';
          const bgColor = isMajeur ? 'bg-amber-50/50' : isMineur ? 'bg-blue-50/30' : 'bg-gray-50/50';

          return (
            <div key={profil.id} className={`p-3 rounded-xl border-2 transition-all ${borderColor} ${bgColor}`}>
              
              {/* EN-TÊTE AVEC L'ÉQUATION VISUELLE */}
              <div className="flex flex-col gap-2 mb-3 border-b border-black/5 pb-2">
                <div className="flex justify-between items-center">
                  <h4 className={`font-serif text-lg flex items-center gap-2 ${headerColor}`}>
                    <span className="text-xl">{profil.icon}</span> {profil.nom}
                  </h4>
                  {isMajeur && <span className="text-[9px] bg-amber-600 text-white px-2 py-0.5 rounded font-bold uppercase">Majeur (+2)</span>}
                  {isMineur && <span className="text-[9px] bg-blue-600 text-white px-2 py-0.5 rounded font-bold uppercase">Mineur (+1)</span>}
                </div>

                {/* BARRE DE CALCUL PP */}
                <div className="flex items-center justify-end gap-1 text-xs font-serif opacity-90">
                  <div className="bg-white border border-gray-300 px-2 py-1 rounded text-gray-600 shadow-sm" title="Moyenne des compétences / 4">
                    Rang {stats.rang}
                  </div>
                  <span className="text-gray-400 font-bold">+</span>
                  <div className={`px-2 py-1 rounded border shadow-sm ${isMajeur ? 'bg-amber-100 text-amber-800 border-amber-200' : isMineur ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                    {isMajeur ? 'Majeur +8' : isMineur ? 'Mineur +4' : 'Neutre +0'}
                  </div>
                  <span className="text-gray-400 font-bold">=</span>
                  <div className="bg-gray-800 text-white px-2 py-1 rounded font-bold shadow-sm flex items-center gap-1">
                    <Coins size={10} className="text-yellow-400 fill-yellow-400" />
                    <span>{stats.totalPP} PP</span>
                  </div>
                </div>
              </div>

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
