// 14.13.0
// Optimisé

import React from 'react';
import { Plus, Minus, Star, Brain, RotateCcw, Briefcase, Info, Lock } from 'lucide-react';
import { useCompetencesLibres } from './useCompetencesLibres';
import { getUtileCost } from '../../utils/xpCalculator';

// ============================================================================
// 🎨 WIDGET : COMPTOIRS DE BUDGET
// ============================================================================
const ComptoirsBudget = ({ budgetsInfo }) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 flex flex-col items-center justify-center shadow-sm">
      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Standard & Spécialités</span>
      <div className={`text-3xl font-black font-serif ${budgetsInfo.pointsRestantsVerts === 0 ? 'text-emerald-500' : budgetsInfo.pointsRestantsVerts < 0 ? 'text-red-600' : 'text-emerald-700'}`}>
        {budgetsInfo.pointsRestantsVerts}
      </div>
    </div>
    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex flex-col items-center justify-center shadow-sm">
      <span className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-1 flex items-center gap-1"><Brain size={14}/> Bonus d'Esprit</span>
      <div className={`text-3xl font-black font-serif ${budgetsInfo.pointsRestantsViolets === 0 ? 'text-purple-400' : 'text-purple-700'}`}>
        {budgetsInfo.pointsRestantsViolets}
      </div>
      {budgetsInfo.bonusEspritMax > 0 ? (
        <span className="text-[10px] text-purple-600 mt-1 font-bold text-center">Réservé aux compétences violettes</span>
      ) : (
        <span className="text-[10px] text-gray-400 mt-1 font-bold">Esprit insuffisant</span>
      )}
    </div>
  </div>
);

// ============================================================================
// 🎨 COMPOSANT RÉUTILISABLE : LIGNE DE COMPÉTENCE
// ============================================================================
const CompetenceRow = ({ data, handlers, isScelle, creatingSpecFor, setCreatingSpecFor, character }) => {
  const {
    nomComp, current, scoreBase, totalScore, isPred, isEspritEligible, maxAllowed, plancher,
    fairySpecActuelle, specsFromAtouts, userSpecs, hasJobSpecHere, jobSpec, nextSpecCost, availableSpecs,
    isMinusDisabled, isPlusDisabled, utileCost // ✨ NOUVEAU : On réceptionne le coût
  } = data;

  return (
    <div className="flex flex-col py-3 px-2 hover:bg-stone-50 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-stone-800 text-sm">{nomComp}</span>
          {isPred && <Star size={12} className="text-amber-500 fill-amber-500" />}
          {/* ✨ FIX 2 : Un booléen pur n'a pas besoin de "> 0" ! */}
          {isEspritEligible && !isScelle && <Brain size={12} className="text-purple-400" />}
        </div>
        <div className="flex items-center bg-white rounded border border-stone-300 shadow-sm">
          <div className="px-2 py-1 text-xs text-stone-400 border-r border-stone-200 bg-stone-50" title="Base calculée">{scoreBase}</div>
          <button onClick={() => handlers.handleRangChange(nomComp, -1)} disabled={isMinusDisabled} className="px-2 py-1 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-stone-300 font-bold">-</button>
          <div className="px-3 py-1 font-bold text-amber-900 min-w-[28px] text-center bg-amber-50">{totalScore}</div>
          <button onClick={() => handlers.handleRangChange(nomComp, 1)} disabled={isPlusDisabled} className="p-1 hover:bg-emerald-50 text-emerald-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <div className="flex items-center gap-1">
              <Plus size={16} />
              {/* ✨ FIX 1 : On se contente d'afficher la variable pré-calculée */}
              {isScelle && utileCost && <span className="text-[10px] font-bold text-emerald-700">({utileCost} XP)</span>}
            </div>
          </button>
        </div>
      </div>
      
      {/* Zone des Spécialités (On adapte aussi le rendu du prix de la Spé) */}
      <div className="flex flex-wrap items-center gap-2 pl-4 border-l-2 border-stone-200 ml-1">
        {fairySpecActuelle && <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded border border-amber-200 flex items-center" title="Héritage">🔒 {fairySpecActuelle}</span>}
        {specsFromAtouts.map((spec, idx) => (
          <span key={`atout-${idx}`} className="text-[10px] px-2 py-1 bg-yellow-100 text-yellow-900 border border-yellow-300 ring-1 ring-yellow-200 rounded flex items-center gap-1 shadow-sm">✨ {spec.nom}</span>
        ))}
        {hasJobSpecHere && (
          <span className="text-[10px] px-2 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 ring-1 ring-emerald-200 rounded flex items-center gap-1 shadow-sm">💼 {jobSpec.nom} {isScelle ? '🔒' : ''}</span>
        )}
        
        {userSpecs.map(spec => {
          const isPlancher = isScelle && (character.data?.stats_scellees?.competencesLibres?.choixSpecialiteUser?.[nomComp] || []).includes(spec);
          return (
            <span key={spec} className={`text-[10px] px-2 py-1 rounded flex items-center gap-1 shadow-sm border ${isPlancher ? 'bg-blue-50 text-blue-900 border-blue-200' : 'bg-blue-100 text-blue-800 border-blue-300'}`}>
              {spec} {isPlancher ? '🔒' : <button onClick={() => handlers.handleRemoveSpecialiteUser(nomComp, spec)} className="hover:text-red-500 ml-1">&times;</button>}
            </span>
          );
        })}

        {totalScore > 0 && creatingSpecFor !== nomComp && (
          <select onChange={(e) => { if (e.target.value === '__CREATE_NEW__') setCreatingSpecFor(nomComp); else handlers.handleAddSpecialiteUser(nomComp, e.target.value); e.target.value = ''; }} className="text-[10px] bg-transparent text-gray-400 hover:text-blue-600 outline-none cursor-pointer w-24">
            {/* ✨ NOUVEAU : On utilise nextSpecCost dynamiquement pour l'affichage de l'XP */}
            <option value="">+ Choisir ({nextSpecCost === 0 ? 'Gratuit' : (isScelle ? `${nextSpecCost} XP` : '1 pt')})</option>
            <option value="__CREATE_NEW__">✨ Créer une nouvelle...</option>
            <optgroup label="📚 Officielles">{availableSpecs.filter(s => s.is_official && !userSpecs.includes(s.nom) && s.nom !== fairySpecActuelle && !specsFromAtouts.some(a => a.nom === s.nom)).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}</optgroup>
            {availableSpecs.some(s => !s.is_official) && <optgroup label="👥 Communauté">{availableSpecs.filter(s => !s.is_official && !userSpecs.includes(s.nom) && s.nom !== fairySpecActuelle && !specsFromAtouts.some(a => a.nom === s.nom)).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}</optgroup>}
          </select>
        )}

        {creatingSpecFor === nomComp && (
          <div className="flex gap-1 items-center animate-fade-in">
            <input id={`input-spec-${nomComp}`} type="text" autoFocus placeholder="Nom..." className="flex-1 text-[11px] p-1 border border-blue-300 rounded focus:outline-none focus:border-blue-500" onKeyDown={(e) => { if (e.key === 'Enter' && e.currentTarget.value.trim()) handlers.handleCreateGlobalSpeciality(nomComp, e.currentTarget.value.trim()); if (e.key === 'Escape') setCreatingSpecFor(null); }}/>
            <button onClick={() => { const input = document.getElementById(`input-spec-${nomComp}`); if (input && input.value.trim()) handlers.handleCreateGlobalSpeciality(nomComp, input.value.trim()); }} className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-bold">Créer</button>
            <button onClick={() => setCreatingSpecFor(null)} className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-[10px] font-bold">X</button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 🏛️ L'ORCHESTRATEUR PRINCIPAL
// ============================================================================
export default function StepCompetencesLibres() {
  const {
    character, isScelle, feeData, profils, competencesParProfil, lib, budgetsInfo,
    creatingSpecFor, setCreatingSpecFor, rangsProfils, budgetsPP, handlers, getCompRowData
  } = useCompetencesLibres();

  return (
    <div className="space-y-6 animate-fade-in pb-20">
      {!isScelle && (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 flex items-start gap-3 shadow-sm animate-fade-in">
          <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Note :</strong> Vous pourrez choisir une Spécialité supplémentaire gratuite lors du choix d'un métier à l'étape de personnalisation.
          </p>
        </div>
      )}

      {/* HEADER HYBRIDE */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur shadow-sm p-4 rounded-b-xl border-b border-gray-200 flex justify-between items-center">
        {isScelle ? (
          <div className="flex flex-col gap-1">
            <h3 className="font-serif font-bold text-amber-900 text-lg flex items-center gap-2"><Lock size={18} className="text-amber-600"/> L'Académie de Magie</h3>
            <p className="text-xs text-amber-700">Améliorez un rang pour <strong>(Rang visé x 3) XP</strong>. Acquérez une spécialité pour <strong>8 XP</strong>.</p>
          </div>
        ) : (
          <div>
            <h3 className="font-serif font-bold text-amber-900 text-lg">Compétences Utiles</h3>
            <p className="text-xs text-gray-500">15 points à répartir. (Max 4, ou 5 en Prédilection).</p>
          </div>
        )}
        {!isScelle && (
          <button onClick={handlers.handleReset} className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 font-bold border border-red-200">
            <RotateCcw size={16} /> <span className="hidden sm:inline">Tout effacer</span>
          </button>
        )}
      </div>

      {!isScelle && <ComptoirsBudget budgetsInfo={budgetsInfo} />}

      {/* PRÉDILECTIONS AU CHOIX */}
      {!isScelle && feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6 shadow-sm">
          <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide"><Star size={16} className="fill-amber-600 text-amber-600"/> Héritage Féérique : Choix requis</h4>
          <div className="space-y-3">
            {feeData.competencesPredilection.map((p, i) => {
              if (p.isChoix) return (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-amber-100 pb-2 last:border-0">
                  <span className="text-sm font-serif text-amber-900 font-medium whitespace-nowrap">Prédilection au choix :</span>
                  <select className="w-full sm:flex-1 p-2 border border-amber-300 rounded font-serif shadow-sm bg-white text-sm" value={lib.choixPredilection?.[i] || ''} onChange={(e) => handlers.handleChoixChange(i, e.target.value, 'competence')}>
                    <option value="">-- Sélectionner --</option>{p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              if (p.isSpecialiteChoix) return (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-amber-100 pb-2 last:border-0">
                  <span className="text-sm font-serif text-amber-900 font-medium whitespace-nowrap">Spécialité en <strong className="text-amber-700">{p.nom}</strong> :</span>
                  <select className="w-full sm:flex-1 p-2 border border-amber-300 rounded font-serif shadow-sm bg-white text-sm" value={lib.choixSpecialite?.[i] || ''} onChange={(e) => handlers.handleChoixChange(i, e.target.value, 'specialite')}>
                    <option value="">-- Sélectionner --</option>{p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              );
              return null;
            })}
          </div>
        </div>
      )}

      {/* GRILLE DES PROFILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'].map(profilNom => {
          const profil = profils?.find(p => p.nom === profilNom) || { nom: profilNom };
          const nomAffiche = (character.genreHumain === 'Féminin' || character.sexe === 'Femme') && profil.nomFeminin ? profil.nomFeminin : profil.nom;
          
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
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Rang {rangsProfils?.[profil.nom] || 0}</div>
                  <div className="text-[10px] text-gray-400">
                    +{character.profils?.majeur?.nom === profil.nom ? 8 : character.profils?.mineur?.nom === profil.nom ? 4 : 0} = <span className="font-bold text-gray-600">{budgetsPP?.[profil.nom] || 0} PP</span>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                {(competencesParProfil[profil.nom] || []).map(comp => (
                  <CompetenceRow 
                    key={comp.nom} 
                    data={getCompRowData(comp.nom)} 
                    handlers={handlers} 
                    isScelle={isScelle} 
                    creatingSpecFor={creatingSpecFor} 
                    setCreatingSpecFor={setCreatingSpecFor} 
                    character={character} 
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
