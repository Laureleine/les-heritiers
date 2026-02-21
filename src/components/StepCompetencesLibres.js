// src/components/StepCompetencesLibres.js

import React, { useState, useCallback, useMemo } from 'react';
import { Plus, Minus, Star, Target, ShieldCheck, Coins, UploadCloud, X, Users, Brain, RotateCcw } from 'lucide-react';
import { addGlobalSpeciality } from '../utils/supabaseGameData';

const POINTS_TOTAUX = 15;
const SKILLS_ESPRIT = [
  'Culture', 'Occultisme', 'Fortitude', 'Rhétorique',
  'Habiletés', 'Médecine', 'Observation', 'Sciences'
];

export default function StepCompetencesLibres({
  character,
  onCompetencesLibresChange,
  profils,
  competences,
  competencesParProfil,
  fairyData
}) {
  const [creatingSpecFor, setCreatingSpecFor] = useState(null);
  const [selectValue, setSelectValue] = useState('');

  const feeData = fairyData[character.typeFee];
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} };

  // --- 1. CALCUL DES BONUS D'ATOUTS (Nouvelle logique DB) ---
  const atoutsBonuses = useMemo(() => {
    const activeAtoutsNames = character.atouts || [];
    const allFairyAtouts = feeData?.atouts || [];
    
    const bonuses = [];
    
    allFairyAtouts.forEach(atout => {
      // Si l'atout est sélectionné par le joueur
      if (activeAtoutsNames.includes(atout.nom)) {
        // Lecture du champ JSONB "effets_techniques"
        const tech = atout.effets_techniques; 
        if (tech && tech.specialites) {
          tech.specialites.forEach(spec => {
            bonuses.push({
              comp: spec.competence, // ex: "Entregent"
              nom: spec.nom,         // ex: "Politique"
              source: atout.nom      // ex: "Vilain petit canard"
            });
          });
        }
      }
    });
    
    return bonuses;
  }, [character.atouts, feeData]);

  // --- Logique Existant (Prédilections) ---
  const predFinales = useMemo(() => {
    if (!feeData?.competencesPredilection) return [];
    return feeData.competencesPredilection.map((p, i) => {
      if (p.isChoix) return lib.choixPredilection?.[i];
      return p.nom;
    }).filter(Boolean);
  }, [feeData?.competencesPredilection, lib.choixPredilection]);

  const getScoreBase = useCallback((nomComp) => {
    let base = 0;
    if (predFinales.includes(nomComp)) base += 2;
    if (character.profils.majeur.competences?.includes(nomComp)) base += 2;
    if (character.profils.mineur.competences?.includes(nomComp)) base += 1;
    return base;
  }, [predFinales, character.profils]);

  // --- Budget (Esprit / Libre) ---
  const budgetData = useMemo(() => {
    const esprit = Number(character.caracteristiques?.esprit || 0);
    const bonusEspritMax = Math.max(0, esprit - 3);
    let investissementEligibleEsprit = 0;
    let investissementStandard = 0;

    Object.entries(lib.rangs || {}).forEach(([nom, val]) => {
      if (SKILLS_ESPRIT.includes(nom)) investissementEligibleEsprit += val;
      else investissementStandard += val;
    });

    Object.entries(lib.choixSpecialiteUser || {}).forEach(([nom, specs]) => {
      let count = specs.length;
      if (nom === 'Conduite' && count > 0) {
        const rangTotal = getScoreBase('Conduite') + (lib.rangs['Conduite'] || 0);
        if (rangTotal > 0) count -= 1; // Slot gratuit Conduite
      }
      if (SKILLS_ESPRIT.includes(nom)) investissementEligibleEsprit += count;
      else investissementStandard += count;
    });

    const pointsVioletsUtilises = Math.min(investissementEligibleEsprit, bonusEspritMax);
    const pointsRestantsViolets = bonusEspritMax - pointsVioletsUtilises;
    const debordementEspritVersVert = investissementEligibleEsprit - pointsVioletsUtilises;
    const totalVertUtilise = investissementStandard + debordementEspritVersVert;
    const pointsRestantsVerts = POINTS_TOTAUX - totalVertUtilise;

    return { bonusEspritMax, pointsRestantsViolets, pointsRestantsVerts, nextSpecCost: 1 };
  }, [character.caracteristiques, lib, getScoreBase]);

  const { bonusEspritMax, pointsRestantsViolets, pointsRestantsVerts, nextSpecCost } = budgetData;

  // --- Handlers ---
  const handleRangChange = useCallback((nomComp, delta) => {
    const current = lib.rangs[nomComp] || 0;
    const totalScore = getScoreBase(nomComp) + current;
    const isPred = predFinales.includes(nomComp);
    const max = isPred ? 5 : 4;

    if (delta > 0) {
      if (totalScore >= max) return;
      const isEsprit = SKILLS_ESPRIT.includes(nomComp);
      if (!(pointsRestantsVerts > 0 || (isEsprit && pointsRestantsViolets > 0))) return;
    }
    if (delta < 0 && current <= 0) return;

    onCompetencesLibresChange({ ...lib, rangs: { ...lib.rangs, [nomComp]: current + delta } });
  }, [lib, getScoreBase, predFinales, pointsRestantsVerts, pointsRestantsViolets, onCompetencesLibresChange]);

  const handleChoixChange = useCallback((index, value, type) => {
    const target = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    onCompetencesLibresChange({ ...lib, [target]: { ...lib[target], [index]: value } });
  }, [lib, onCompetencesLibresChange]);

  const handleAddSpecialiteUser = useCallback((nomComp, specName) => {
    if (!specName) return;
    
    // Vérification Budget
    const isConduite = nomComp === 'Conduite';
    const conduitePayee = isConduite && (getScoreBase('Conduite') + (lib.rangs['Conduite']||0) > 0);
    const slotGratuitDispo = conduitePayee && (!lib.choixSpecialiteUser?.['Conduite']?.length);

    if (!slotGratuitDispo) {
      const isEsprit = SKILLS_ESPRIT.includes(nomComp);
      if (!((isEsprit && pointsRestantsViolets > 0) || pointsRestantsVerts > 0)) return;
    }

    const currentSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    if (currentSpecs.includes(specName)) return;

    onCompetencesLibresChange({
      ...lib,
      choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] }
    });
    setSelectValue(''); 
  }, [lib, getScoreBase, pointsRestantsViolets, pointsRestantsVerts, onCompetencesLibresChange]);

  const handleRemoveSpecialiteUser = useCallback((nomComp, specName) => {
    const currentSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    onCompetencesLibresChange({
      ...lib,
      choixSpecialiteUser: {
        ...lib.choixSpecialiteUser,
        [nomComp]: currentSpecs.filter(s => s !== specName)
      }
    });
  }, [lib, onCompetencesLibresChange]);

  const handleCreateGlobalSpeciality = useCallback(async (nomComp, specName) => {
    const compData = competences[nomComp];
    if (!compData || !compData.id) return;
    try {
      const newSpecObj = await addGlobalSpeciality(compData.id, specName);
      if (competences[nomComp]) {
        const currentSpecs = competences[nomComp].specialites || [];
        competences[nomComp].specialites = [...currentSpecs, newSpecObj];
      }
      handleAddSpecialiteUser(nomComp, specName);
      setCreatingSpecFor(null);
    } catch (e) { alert("Erreur : " + e.message); }
  }, [competences, handleAddSpecialiteUser]);

  // --- RENDU D'UNE LIGNE DE COMPÉTENCE (Avec Badges Dorés) ---
  const renderCompRow = useCallback((nomComp) => {
    const scoreBase = getScoreBase(nomComp);
    const investis = lib.rangs[nomComp] || 0;
    const total = scoreBase + investis;
    const isPred = predFinales.includes(nomComp);
    const isEspritEligible = SKILLS_ESPRIT.includes(nomComp);
    const canAfford = pointsRestantsVerts > 0 || (isEspritEligible && pointsRestantsViolets > 0);

    // Spécialité Héritage (via Fée)
    const getFairySpec = () => {
      if (!feeData?.competencesPredilection) return null;
      const predIndex = feeData.competencesPredilection.findIndex(p => p.nom === nomComp);
      if (predIndex === -1) return null;
      const pred = feeData.competencesPredilection[predIndex];
      return pred.specialite || (pred.isSpecialiteChoix ? lib.choixSpecialite?.[predIndex] : null);
    };
    const fairySpecActuelle = getFairySpec();

    // Spécialités Utilisateur & Atouts
    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    const availableSpecs = competences[nomComp]?.specialites || [];
    const isCreating = creatingSpecFor === nomComp;
    const isConduite = nomComp === 'Conduite';
    const isFreeEligible = isConduite && total > 0;

    // Récupération des spécialités d'atouts pour cette compétence
    const specsFromAtouts = atoutsBonuses.filter(b => b.comp === nomComp);

    // Calcul si le slot gratuit de conduite est utilisé par userSpecs
    // (Note: Les specs d'atouts ne consomment PAS le slot gratuit conduite)
    const hasFreeSpecUsed = isFreeEligible && userSpecs.length > 0;
    const effectiveCanAffordSpec = canAfford || (isFreeEligible && !hasFreeSpecUsed);

    const onSelectChange = (e) => {
      const val = e.target.value;
      if (val === '__CREATE_NEW__') setCreatingSpecFor(nomComp);
      else if (val) handleAddSpecialiteUser(nomComp, val);
      setSelectValue('');
    };

    return (
      <div key={nomComp} className={`p-2 border-b border-gray-100 last:border-0 ${isPred ? 'bg-amber-50/30' : ''}`}>
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <span className={`font-serif font-bold text-sm ${isPred ? 'text-amber-700' : 'text-gray-700'}`}>
              {nomComp}
            </span>
            {isPred && <Star size={12} className="text-amber-500 fill-amber-500" />}
            {isEspritEligible && bonusEspritMax > 0 && <Brain size={12} className="text-purple-400" />}
          </div>
          
          <div className="flex items-center bg-white rounded border border-stone-300 shadow-sm">
             <div className="px-2 py-1 text-xs text-stone-400 border-r border-stone-200 bg-stone-50" title="Base">
               {scoreBase}
             </div>
             <button onClick={() => handleRangChange(nomComp, -1)} disabled={investis <= 0} className="px-2 py-1 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-stone-300 font-bold">-</button>
             <span className={`w-8 text-center font-bold text-sm ${total >= (isPred ? 5 : 4) ? 'text-green-600' : ''}`}>{total}</span>
             <button onClick={() => handleRangChange(nomComp, 1)} disabled={total >= (isPred ? 5 : 4) || !canAfford} className="px-2 py-1 hover:bg-green-100 text-amber-800 disabled:opacity-30 border-l border-stone-300 font-bold">+</button>
          </div>
        </div>

        {/* ZONE DES BADGES (Héritage + Atouts + Utilisateur) */}
        <div className="pl-2 border-l-2 border-amber-100 mt-1">
            <div className="flex flex-wrap gap-1 mb-1">
                {/* 1. Spécialité d'Héritage (Fée) */}
                {fairySpecActuelle && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded border border-amber-200 flex items-center" title="Héritage">
                        🔒 {fairySpecActuelle}
                    </span>
                )}

                {/* 2. Spécialités issues des Atouts (Dorées) */}
                {specsFromAtouts.map((spec, idx) => (
                    <span 
                        key={`atout-${idx}`} 
                        className="text-[10px] px-2 py-1 bg-yellow-100 text-yellow-900 border border-yellow-300 ring-1 ring-yellow-200 rounded flex items-center gap-1 shadow-sm"
                        title={`Offert par l'atout : ${spec.source}`}
                    >
                        <Star size={10} className="fill-yellow-600 text-yellow-700" />
                        <span className="font-medium font-serif">{spec.nom}</span>
                    </span>
                ))}

                {/* 3. Spécialités achetées par le joueur */}
                {userSpecs.map((specName, index) => {
                    // Si l'atout donne déjà la spé, on ne l'affiche pas en double ici (sauf si on veut montrer le doublon)
                    // Ici on masque pour éviter la confusion
                    if (specsFromAtouts.some(a => a.nom === specName)) return null;

                    const specData = availableSpecs.find(s => s.nom === specName);
                    const isCommunity = specData ? !specData.is_official : false;
                    const isFreeSlot = isFreeEligible && index === 0;
                    let badgeStyle = "bg-blue-50 text-blue-800 border-blue-200";
                    if (isFreeSlot) badgeStyle = "bg-green-50 text-green-800 border-green-200";
                    else if (isCommunity) badgeStyle = "bg-purple-100 text-purple-900 border-purple-300 ring-1 ring-purple-200";

                    return (
                        <span key={specName} className={`text-[10px] px-2 py-1 rounded border flex items-center gap-1 group transition-all ${badgeStyle}`}>
                            {isCommunity && !isFreeSlot && <Users size={10} className="opacity-70" />}
                            <span className="font-medium font-serif">{specName}</span>
                            {isFreeSlot && <span className="text-[8px] uppercase font-bold ml-0.5 opacity-80">(Gratuit)</span>}
                            <button onClick={() => handleRemoveSpecialiteUser(nomComp, specName)} 
                                    className="font-bold ml-1.5 focus:outline-none hover:text-red-600">×</button>
                        </span>
                    );
                })}
            </div>

            {/* Sélecteur d'ajout de spécialité */}
            <div className="mt-1">
                {!isCreating ? (
                    <select value={selectValue} onChange={onSelectChange} 
                            disabled={!effectiveCanAffordSpec}
                            className="w-full text-[11px] p-1 border rounded bg-gray-50 font-serif text-gray-700 outline-none focus:border-amber-400 disabled:opacity-50 disabled:cursor-not-allowed">
                        <option value="">+ Choisir ({nextSpecCost === 0 ? 'Gratuit' : '1 pt'})</option>
                        <option value="__CREATE_NEW__">✨ Créer une nouvelle...</option>
                        <optgroup label="📚 Officielles">
                            {availableSpecs.filter(s => s.is_official && !userSpecs.includes(s.nom) && s.nom !== fairySpecActuelle && !specsFromAtouts.some(a => a.nom === s.nom))
                                .map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}
                        </optgroup>
                        {availableSpecs.some(s => !s.is_official) && (
                            <optgroup label="👥 Communauté">
                                {availableSpecs.filter(s => !s.is_official && !userSpecs.includes(s.nom) && s.nom !== fairySpecActuelle && !specsFromAtouts.some(a => a.nom === s.nom))
                                    .map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}
                            </optgroup>
                        )}
                    </select>
                ) : (
                    <div className="flex gap-1 items-center animate-fade-in">
                        <input id={`input-spec-${nomComp}`} type="text" autoFocus
                               placeholder="Nom de la spécialité..."
                               className="flex-1 text-[11px] p-1 border border-blue-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                               onKeyDown={(e) => {
                                   if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                                       handleCreateGlobalSpeciality(nomComp, e.currentTarget.value.trim());
                                   }
                                   if (e.key === 'Escape') setCreatingSpecFor(null);
                               }}/>
                        <button onClick={() => {
                            const input = document.getElementById(`input-spec-${nomComp}`);
                            const val = input?.value?.trim();
                            if (val) handleCreateGlobalSpeciality(nomComp, val);
                        }} className="bg-blue-600 hover:bg-blue-700 text-white rounded px-2 py-1 transition-colors flex items-center gap-1 text-xs">
                            Créer
                        </button>
                        <button onClick={() => setCreatingSpecFor(null)} 
                                className="bg-gray-200 hover:bg-gray-300 text-gray-600 rounded px-2 py-1 transition-colors flex items-center gap-1 text-xs">
                            Annuler
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    );
  }, [selectValue, creatingSpecFor, lib, getScoreBase, predFinales, pointsRestantsVerts, pointsRestantsViolets, bonusEspritMax, nextSpecCost, feeData, competences, atoutsBonuses, handleRangChange, handleAddSpecialiteUser, handleRemoveSpecialiteUser, handleCreateGlobalSpeciality]);

  // --- Fonction de Réinitialisation ---
  const handleReset = useCallback(() => {
    if (window.confirm("Voulez-vous vraiment réinitialiser tous vos points investis et spécialités achetées ?")) {
      onCompetencesLibresChange({
        ...lib,
        rangs: {}, // On vide les rangs investis
        choixSpecialiteUser: {} // On vide les spécialités achetées
      });
    }
  }, [lib, onCompetencesLibresChange]);

  return (
    <div className="space-y-6 animate-fade-in pb-20">

	  {/* Header Sticky */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur shadow-sm p-4 rounded-b-xl border-b border-gray-200 flex justify-between items-center">
        <div>
            <h3 className="font-serif font-bold text-amber-900 text-lg">Compétences Utiles</h3>
            <p className="text-xs text-gray-500">15 points à répartir. (Max 4, ou 5 en Prédilection).</p>
        </div>
		
		<button 
		  onClick={handleReset}
		  className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors text-sm font-bold border border-red-200"
		  title="Réinitialiser les dépenses"
		>
		  <RotateCcw size={16} />
		  <span className="hidden sm:inline">Réinitialiser</span>
		</button>		
		
        <div className="flex gap-2">
            {bonusEspritMax > 0 && (
                <div className={`flex flex-col items-center px-3 py-1 rounded border ${
                    pointsRestantsViolets > 0 ? 'bg-purple-100 border-purple-300 text-purple-900' : 'bg-gray-50 border-gray-200 text-gray-400 opacity-60'
                }`}>
                    <span className="text-lg font-bold leading-none">{pointsRestantsViolets}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider">Bonus Esprit</span>
                </div>
            )}
            <div className={`flex flex-col items-center px-3 py-1 rounded border ${
                pointsRestantsVerts === 0 ? 'bg-green-100 text-green-800 border-green-300' :
                pointsRestantsVerts < 0 ? 'bg-red-100 text-red-800 border-red-300' :
                'bg-amber-100 text-amber-900 border-amber-300'
            }`}>
                <span className="text-lg font-bold leading-none">{pointsRestantsVerts}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider">Points Libres</span>
            </div>
        </div>
      </div>

      {/* Section Héritage (Choix de l'utilisateur) */}
      {feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6 shadow-sm">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Star size={16} className="fill-amber-600 text-amber-600"/> Héritage Féérique : Choix requis
            </h4>
            <div className="space-y-3">
                {feeData.competencesPredilection.map((p, i) => {
                    if (p.isChoix) return (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-amber-100 pb-2 last:border-0">
                            <span className="text-sm font-serif text-amber-900 font-medium whitespace-nowrap">Prédilection au choix :</span>
                            <select className="w-full sm:flex-1 p-2 border border-amber-300 rounded font-serif shadow-sm bg-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none cursor-pointer"
                                    value={lib.choixPredilection?.[i] || ''}
                                    onChange={(e) => handleChoixChange(i, e.target.value, 'competence')}>
                                <option value="">-- Sélectionner --</option>
                                {p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                        </div>
                    );
                    if (p.isSpecialiteChoix) return (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-amber-100 pb-2 last:border-0">
                            <span className="text-sm font-serif text-amber-900 font-medium whitespace-nowrap">{p.nom} (Spécialité) :</span>
                            <select className="w-full sm:flex-1 p-2 border border-amber-300 rounded font-serif shadow-sm bg-white text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none cursor-pointer"
                                    value={lib.choixSpecialite?.[i] || ''}
                                    onChange={(e) => handleChoixChange(i, e.target.value, 'specialite')}>
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

      {/* Grille des Profils et Compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profils.map(profil => {
            const isMajeur = character.profils.majeur.nom === profil.nom;
            const isMineur = character.profils.mineur.nom === profil.nom;
            
            // Calcul stats profil (pour affichage PP)
            const compsDuProfil = competencesParProfil[profil.nom] || [];
            let sommeScores = 0;
            compsDuProfil.forEach(c => {
                sommeScores += (getScoreBase(c.nom) + (lib.rangs[c.nom] || 0));
            });
            const rang = Math.floor(sommeScores / 4);
            const bonusFixe = isMajeur ? 8 : isMineur ? 4 : 0;
            const totalPP = rang + bonusFixe;

            const headerColor = isMajeur ? 'text-amber-900' : isMineur ? 'text-blue-900' : 'text-gray-500';
            const borderColor = isMajeur ? 'border-amber-400' : isMineur ? 'border-blue-300' : 'border-gray-200';
            const bgColor = isMajeur ? 'bg-amber-50/50' : isMineur ? 'bg-blue-50/30' : 'bg-gray-50/50';

            return (
                <div key={profil.nom} className={`rounded-xl border-2 overflow-hidden ${borderColor} bg-white shadow-sm hover:shadow-md transition-all`}>
                    {/* Header Profil */}
                    <div className={`p-3 border-b ${borderColor} ${bgColor} flex justify-between items-center`}>
                        <div className="flex items-center gap-2">
                            <span className="text-xl">{profil.icon || '👤'}</span>
                            <div>
                                <h4 className={`font-bold font-serif leading-none ${headerColor}`}>{profil.nom}</h4>
                                <div className="flex gap-1 mt-1">
                                    {isMajeur && <span className="text-[10px] bg-amber-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Majeur (+2)</span>}
                                    {isMineur && <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Mineur (+1)</span>}
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Rang {rang}</div>
                            <div className="text-[10px] text-gray-400">
                                +{bonusFixe} = <span className="font-bold text-gray-600">{totalPP} PP</span>
                            </div>
                        </div>
                    </div>

                    {/* Liste des Compétences du Profil */}
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