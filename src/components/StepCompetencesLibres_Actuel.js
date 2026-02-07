// Version: 3.1.5 (Correction : Restauration de la logique v3.0.4 + Règle Esprit)
// Source: Basé sur StepCompetencesLibres.txt (Source 164) + Livre de Base p.44

import React from 'react';
import { Plus, Minus, Star, Info, Brain } from 'lucide-react';

const POINTS_TOTAUX = 15;

// Listes définies selon le Livre de Base p.91
const COMPETENCES_BONUS_LIST = [
  'Culture', 'Fortitude', 'Occultisme', 'Rhétorique', // Érudit
  'Habiletés', 'Médecine', 'Observation', 'Sciences'  // Savant
];

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  profils, 
  competences, 
  competencesParProfil, 
  fairyData 
}) {
  const feeData = fairyData[character.typeFee] || {};

  // 1. CALCUL DU BONUS D'ESPRIT (Livre de Base p.44)
  const scoreEsprit = character.caracteristiques?.esprit || 0;
  const POINTS_BONUS_ESPRIT = Math.max(0, scoreEsprit - 3);

  // 2. RECONSTRUCTION DE LA MAP DES BASES (Logique Source 165 restaurée)
  // Cette fonction est cruciale pour savoir si on commence à 0, 1, 2, 3 ou 4.
  const getCompetencesBase = () => {
    const competencesMap = new Map();

    // A. Compétences de prédilection de la fée (+2)
    if (feeData?.competencesPredilection) {
      feeData.competencesPredilection.forEach(comp => {
        competencesMap.set(comp.nom, {
          scoreBase: 2,
          predilection: true,
          specialiteBase: comp.specialite
        });
      });
    }

    // B. Profil Majeur (+2)
    if (character.profils?.majeur?.competences) {
      character.profils.majeur.competences.forEach(comp => {
        const current = competencesMap.get(comp) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp, { ...current, scoreBase: current.scoreBase + 2 });
      });
    }

    // C. Profil Mineur (+1)
    if (character.profils?.mineur?.competences) {
      character.profils.mineur.competences.forEach(comp => {
        const current = competencesMap.get(comp) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp, { ...current, scoreBase: current.scoreBase + 1 });
      });
    }
    return competencesMap;
  };

  const competencesBase = getCompetencesBase();
  const competencesLibres = character.competencesLibres || {};

  // 3. CALCUL INTELLIGENT DES DÉPENSES (Général vs Bonus Esprit)
  let coutBonusUtilise = 0;
  let coutGeneralUtilise = 0;

  Object.entries(competencesLibres).forEach(([compNom, data]) => {
    const rangs = data.rangsSupplementaires || 0;
    const nbSpecialites = (data.specialites || []).length;
    const coutLigne = rangs + nbSpecialites;

    if (coutLigne > 0) {
      // Est-ce une compétence éligible au bonus Esprit (Érudit ou Savant) ?
      if (COMPETENCES_BONUS_LIST.includes(compNom)) {
        const resteBonus = POINTS_BONUS_ESPRIT - coutBonusUtilise;
        const partBonus = Math.min(coutLigne, resteBonus);
        coutBonusUtilise += partBonus;
        coutGeneralUtilise += (coutLigne - partBonus);
      } else {
        coutGeneralUtilise += coutLigne;
      }
    }
  });

  const pointsRestantsGeneral = POINTS_TOTAUX - coutGeneralUtilise;
  const pointsRestantsBonus = POINTS_BONUS_ESPRIT - coutBonusUtilise;

  // Helpers de calcul (Source 167 restaurée)
  const getScoreTotal = (nomComp) => {
    const base = competencesBase.get(nomComp)?.scoreBase || 0;
    const supplementaire = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    return base + supplementaire;
  };

  // Validation d'ajout (Source 168 + Règle Esprit)
  const canAddRang = (nomComp) => {
    // 1. Vérification du budget
    const isEligibleBonus = COMPETENCES_BONUS_LIST.includes(nomComp);
    const aDuBudget = pointsRestantsGeneral > 0 || (isEligibleBonus && pointsRestantsBonus > 0);
    
    if (!aDuBudget) return false;

    // 2. Vérification du plafond (4 ou 5)
    const scoreTotal = getScoreTotal(nomComp);
    const isPredilection = competencesBase.get(nomComp)?.predilection || false;
    const maxRangs = isPredilection ? 5 : 4;

    return scoreTotal < maxRangs;
  };

  // --- HANDLERS (Source 169 restaurée) ---

  const handleRangChange = (nomComp, delta) => {
    const current = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    const newValue = Math.max(0, current + delta);

    if (delta > 0 && !canAddRang(nomComp)) return;
    if (delta < 0 && current === 0) return;

    updateCompetence(nomComp, { rangsSupplementaires: newValue });
  };

  const handleAddSpecialite = (nomComp, specialite) => {
    // Vérif budget pour spécialité
    const isEligibleBonus = COMPETENCES_BONUS_LIST.includes(nomComp);
    const aDuBudget = pointsRestantsGeneral > 0 || (isEligibleBonus && pointsRestantsBonus > 0);
    if (!aDuBudget) return;

    const currentSpecs = competencesLibres[nomComp]?.specialites || [];
    if (!currentSpecs.includes(specialite)) {
      updateCompetence(nomComp, { specialites: [...currentSpecs, specialite] });
    }
  };

  const handleRemoveSpecialite = (nomComp, specialite) => {
    const currentSpecs = competencesLibres[nomComp]?.specialites || [];
    updateCompetence(nomComp, { specialites: currentSpecs.filter(s => s !== specialite) });
  };

  const updateCompetence = (nomComp, updates) => {
    const currentData = competencesLibres[nomComp] || {};
    const newData = { ...currentData, ...updates };

    // Nettoyage si vide
    const isEmpty = (newData.rangsSupplementaires || 0) === 0 && (!newData.specialites || newData.specialites.length === 0);
    
    const newCompetencesLibres = { ...competencesLibres };
    if (isEmpty) {
      delete newCompetencesLibres[nomComp];
    } else {
      newCompetencesLibres[nomComp] = newData;
    }
    
    onCompetencesLibresChange(newCompetencesLibres);
  };

  // --- RENDU (Source 174 restaurée et adaptée) ---

  const renderCompetence = (nomComp) => {
    const compData = competences[nomComp];
    if (!compData) return null;

    const baseData = competencesBase.get(nomComp) || { scoreBase: 0, predilection: false };
    const libreData = competencesLibres[nomComp] || { rangsSupplementaires: 0, specialites: [] };
    
    const scoreTotal = baseData.scoreBase + libreData.rangsSupplementaires;
    const maxRangs = baseData.predilection ? 5 : 4;
    
    // Identification visuelle pour le joueur
    const isEligibleBonus = COMPETENCES_BONUS_LIST.includes(nomComp);
    const isBoostedByBonus = isEligibleBonus && (libreData.rangsSupplementaires > 0 || libreData.specialites.length > 0);

    return (
      <div key={nomComp} className={`p-3 rounded-lg border transition-all ${
        libreData.rangsSupplementaires > 0 ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200'
      } ${isBoostedByBonus && pointsRestantsBonus >= 0 ? 'ring-1 ring-blue-300' : ''}`}>
        
        {/* En-tête de la compétence */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1">
            <span className="font-bold text-gray-800">{nomComp}</span>
            {baseData.predilection && <Star size={12} className="text-purple-600 fill-purple-600" />}
            {isEligibleBonus && POINTS_BONUS_ESPRIT > 0 && <Brain size={12} className="text-blue-500" title="Éligible au Bonus Esprit" />}
          </div>
          
          <div className="flex items-center gap-2">
            {/* Score de base affiché discrètement */}
            {baseData.scoreBase > 0 && <span className="text-xs text-gray-400 font-mono">Base {baseData.scoreBase}</span>}
            
            <div className="flex items-center bg-gray-100 rounded p-0.5">
              <button 
                onClick={() => handleRangChange(nomComp, -1)}
                disabled={libreData.rangsSupplementaires === 0}
                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-white rounded disabled:opacity-30"
              >
                <Minus size={14} />
              </button>
              <span className={`w-8 text-center font-bold ${libreData.rangsSupplementaires > 0 ? 'text-amber-700' : 'text-gray-500'}`}>
                {scoreTotal}
              </span>
              <button 
                onClick={() => handleRangChange(nomComp, 1)}
                disabled={!canAddRang(nomComp)}
                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-white rounded disabled:opacity-30"
              >
                <Plus size={14} />
              </button>
            </div>
            <span className="text-xs text-gray-400 w-4">/{maxRangs}</span>
          </div>
        </div>

        {/* Zone des Spécialités */}
        <div className="text-xs space-y-1">
          {/* Spécialité de base (Prédilection) */}
          {baseData.specialiteBase && (
            <span className="inline-block bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded border border-purple-200 mr-1">
              {baseData.specialiteBase} (Base)
            </span>
          )}
          
          {/* Spécialités achetées */}
          {libreData.specialites.map(spec => (
            <span key={spec} className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded border border-amber-200 mr-1">
              {spec}
              <button onClick={() => handleRemoveSpecialite(nomComp, spec)} className="hover:text-red-600">×</button>
            </span>
          ))}

          {/* Ajout de spécialité */}
          {compData.specialites && compData.specialites.length > 0 && (
            <select 
              className="mt-1 w-full bg-transparent border-b border-gray-300 text-gray-500 focus:outline-none focus:border-amber-500"
              onChange={(e) => {
                if(e.target.value) { handleAddSpecialite(nomComp, e.target.value); e.target.value = ""; }
              }}
              value=""
            >
              <option value="">+ Ajouter spécialité (1 pt)</option>
              {compData.specialites
                .filter(s => s !== baseData.specialiteBase && !libreData.specialites.includes(s))
                .map(s => <option key={s} value={s}>{s}</option>)
              }
            </select>
          )}
        </div>
      </div>
    );
  };

  // --- STRUCTURE PRINCIPALE ---

  return (
    <div className="space-y-6">
      
      {/* Panneau des Scores (Le cœur de la nouvelle fonctionnalité) */}
      <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center gap-4">
          
          {/* Compteur Principal */}
          <div className="flex-1 text-center">
            <div className="text-xs uppercase tracking-wider text-amber-800 font-bold mb-1">Points Libres</div>
            <div className={`text-3xl font-serif font-bold ${pointsRestantsGeneral < 0 ? 'text-red-600' : 'text-amber-600'}`}>
              {pointsRestantsGeneral} <span className="text-sm text-gray-400 font-sans">/ 15</span>
            </div>
          </div>

          {/* Compteur Bonus Esprit (Visible uniquement si Esprit > 3) */}
          {POINTS_BONUS_ESPRIT > 0 && (
            <div className="flex-1 text-center border-l border-gray-200 pl-4">
              <div className="text-xs uppercase tracking-wider text-blue-800 font-bold mb-1 flex items-center justify-center gap-1">
                <Brain size={14} /> Bonus Esprit
              </div>
              <div className={`text-3xl font-serif font-bold ${pointsRestantsBonus < 0 ? 'text-red-600' : 'text-blue-600'}`}>
                {pointsRestantsBonus} <span className="text-sm text-gray-400 font-sans">/ {POINTS_BONUS_ESPRIT}</span>
              </div>
              <p className="text-[10px] text-blue-400 mt-1 leading-tight">
                Pour Érudit & Savant
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Liste des Profils (Design Source 178 conservé) */}
      <div className="grid gap-6">
        {profils.map(profil => {
          const profilNom = profil.nom;
          const competencesDuProfil = competencesParProfil[profilNom] || [];
          
          // Calcul du rang de profil (Source 173)
          // Note : on réimplémente le calcul ici pour l'affichage dynamique
          const nomsCompetences = competencesDuProfil.map(c => c.nom);
          const sommeTotale = nomsCompetences.reduce((sum, nom) => sum + getScoreTotal(nom), 0);
          const baseProfil = (character.profils?.majeur?.nom === profilNom ? 8 : (character.profils?.mineur?.nom === profilNom ? 4 : 0));
          const bonusProfil = Math.floor(sommeTotale / 4);
          const rangProfil = baseProfil + bonusProfil;

          const isMajeur = character.profils?.majeur?.nom === profilNom;
          const isMineur = character.profils?.mineur?.nom === profilNom;

          if (competencesDuProfil.length === 0) return null;

          return (
            <div key={profilNom} className={`rounded-xl border overflow-hidden ${isMajeur ? 'border-amber-300 bg-amber-50/50' : isMineur ? 'border-amber-200 bg-amber-50/30' : 'border-gray-200 bg-white'}`}>
              <div className="px-4 py-3 bg-white/50 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-serif font-bold text-gray-800 flex items-center gap-2">
                  {profil.icon || '🔹'} {profilNom}
                  {isMajeur && <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Majeur</span>}
                  {isMineur && <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Mineur</span>}
                </h3>
                <div className="text-xs text-gray-500 font-mono" title={`Base ${baseProfil} + Bonus ${bonusProfil} (Moyenne des compétences / 4)`}>
                  Rang de Profil : <strong className="text-gray-800 text-sm">{rangProfil}</strong>
                </div>
              </div>
              
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {competencesDuProfil.map(comp => renderCompetence(comp.nom))}
              </div>
            </div>
          );
        })}
      </div>

      {pointsRestantsGeneral === 0 && (
        <div className="text-center p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 animate-in fade-in">
          ✨ Tous les points libres ont été répartis !
        </div>
      )}
    </div>
  );
}