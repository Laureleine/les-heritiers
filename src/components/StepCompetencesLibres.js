// src/components/StepCompetencesLibres.js
// Version: 2.2.0
// Build: 2026-01-31 18:45
import React from 'react';
import { Plus, Minus, Star, Info } from 'lucide-react';
import { competences, competenceNames, profils } from "../data/data";

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ character, onCompetencesLibresChange, fairyData }) {
  const feeData = fairyData[character.typeFee];
  
  const getCompetencesBase = () => {
    const competencesMap = new Map();
    
    if (feeData?.competencesPredilection) {
      feeData.competencesPredilection.forEach(comp => {
        competencesMap.set(comp.nom, {
          scoreBase: 2,
          predilection: true,
          specialiteBase: comp.specialite
        });
      });
    }
    
    if (character.profils?.majeur?.competences) {
      character.profils.majeur.competences.forEach(comp => {
        const current = competencesMap.get(comp) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp, {
          ...current,
          scoreBase: current.scoreBase + 2
        });
      });
    }
    
    if (character.profils?.mineur?.competences) {
      character.profils.mineur.competences.forEach(comp => {
        const current = competencesMap.get(comp) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp, {
          ...current,
          scoreBase: current.scoreBase + 1
        });
      });
    }
    
    return competencesMap;
  };
  
  const competencesBase = getCompetencesBase();
  const competencesLibres = character.competencesLibres || {};
  
  const pointsDepenses = Object.entries(competencesLibres).reduce((sum, [comp, data]) => {
    let points = data.rangsSupplementaires || 0;
    if (data.specialites) {
      points += data.specialites.length;
    }
    return sum + points;
  }, 0);
  
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;
  
  const getScoreTotal = (nomComp) => {
    const base = competencesBase.get(nomComp)?.scoreBase || 0;
    const supplementaire = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    return base + supplementaire;
  };
  
  const canAddRang = (nomComp) => {
    if (pointsRestants <= 0) return false;
    const scoreTotal = getScoreTotal(nomComp);
    const isPredilection = competencesBase.get(nomComp)?.predilection || false;
    const maxRangs = isPredilection ? 5 : 4;
    return scoreTotal < maxRangs;
  };
  
  const handleRangChange = (nomComp, delta) => {
    const current = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    const newValue = Math.max(0, current + delta);
    
    if (delta > 0 && !canAddRang(nomComp)) return;
    if (delta < 0 && current === 0) return;
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...competencesLibres[nomComp],
        rangsSupplementaires: newValue
      }
    };
    
    if (newValue === 0 && (!newCompetences[nomComp].specialites || newCompetences[nomComp].specialites.length === 0)) {
      delete newCompetences[nomComp];
    }
    
    onCompetencesLibresChange(newCompetences);
  };
  
  const handleAddSpecialite = (nomComp, specialite) => {
    if (pointsRestants <= 0) return;
    
    const current = competencesLibres[nomComp]?.specialites || [];
    if (current.includes(specialite)) return;
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...competencesLibres[nomComp],
        rangsSupplementaires: competencesLibres[nomComp]?.rangsSupplementaires || 0,
        specialites: [...current, specialite]
      }
    };
    
    onCompetencesLibresChange(newCompetences);
  };
  
  const handleRemoveSpecialite = (nomComp, specialite) => {
    const current = competencesLibres[nomComp]?.specialites || [];
    const newSpecialites = current.filter(s => s !== specialite);
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...competencesLibres[nomComp],
        specialites: newSpecialites
      }
    };
    
    if (newCompetences[nomComp].rangsSupplementaires === 0 && newSpecialites.length === 0) {
      delete newCompetences[nomComp];
    }
    
    onCompetencesLibresChange(newCompetences);
  };
  
  const renderCompetence = (nomComp) => {
    const compData = competences[nomComp];
    const base = competencesBase.get(nomComp);
    const scoreBase = base?.scoreBase || 0;
    const isPredilection = base?.predilection || false;
    const specialiteBase = base?.specialiteBase;
    const rangsSupp = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    const scoreTotal = scoreBase + rangsSupp;
    const maxRangs = isPredilection ? 5 : 4;
    const specialitesSupp = competencesLibres[nomComp]?.specialites || [];
    
    return (
      <div key={nomComp} className="p-2 border border-amber-200 rounded bg-white hover:border-amber-400 transition-all">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <h4 className="font-serif text-sm text-amber-900 font-semibold truncate">
                {nomComp}
              </h4>
              {isPredilection && <Star size={12} className="text-amber-600 flex-shrink-0" fill="currentColor" />}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="text-lg font-bold text-amber-900">
                {scoreTotal}<span className="text-xs text-amber-600">/{maxRangs}</span>
              </div>
              {scoreBase > 0 && (
                <span className="text-xs text-amber-600">
                  ({scoreBase}{rangsSupp > 0 ? `+${rangsSupp}` : ''})
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleRangChange(nomComp, -1)}
              disabled={rangsSupp === 0}
              className={`p-1 rounded ${rangsSupp > 0 ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-gray-100 text-gray-400'}`}
            >
              <Minus size={14} />
            </button>
            <button
              onClick={() => handleRangChange(nomComp, 1)}
              disabled={!canAddRang(nomComp)}
              className={`p-1 rounded ${canAddRang(nomComp) ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-400'}`}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
        
        {(specialiteBase || specialitesSupp.length > 0 || (scoreTotal > 0 && compData.specialites)) && (
          <div className="mt-2 pt-2 border-t border-amber-100">
            <div className="flex flex-wrap gap-1 text-xs">
              {specialiteBase && (
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded">
                  {specialiteBase}
                </span>
              )}
              {specialitesSupp.map(spec => (
                <span key={spec} className="px-2 py-0.5 bg-green-100 text-green-800 rounded flex items-center gap-1">
                  {spec}
                  <button onClick={() => handleRemoveSpecialite(nomComp, spec)} className="hover:text-red-600">×</button>
                </span>
              ))}
            </div>
            {scoreTotal > 0 && compData.specialites && (
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    handleAddSpecialite(nomComp, e.target.value);
                    e.target.value = '';
                  }
                }}
                className="text-xs border border-amber-300 rounded px-1 py-0.5 bg-white mt-1 w-full"
              >
                <option value="">+ Spécialité</option>
                {compData.specialites.filter(s => s !== specialiteBase && !specialitesSupp.includes(s)).map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            )}
          </div>
        )}
      </div>
    );
  };
  
  const competencesByProfil = {
    majeur: character.profils?.majeur?.competences || [],
    mineur: character.profils?.mineur?.competences || [],
    autres: competenceNames.filter(nom => {
      const inMajeur = character.profils?.majeur?.competences?.includes(nom);
      const inMineur = character.profils?.mineur?.competences?.includes(nom);
      return !inMajeur && !inMineur;
    })
  };
  
  return (
    <div className="space-y-4">
      <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
        <h2 className="text-2xl font-serif text-amber-900 mb-2">
          Répartition Libre des Compétences
        </h2>
        <div className="flex items-center justify-between mb-2">
          <p className="text-amber-800">
            Vous disposez de <span className="font-bold text-2xl text-amber-900">{pointsRestants}</span> points à répartir.
          </p>
        </div>
        <div className="space-y-1 text-xs text-amber-700">
          <div className="flex items-center gap-2">
            <Info size={14} />
            <span>1 point = 1 rang | Max: 4 rangs (5 pour prédilection <Star size={12} className="inline text-amber-600" fill="currentColor" />)</span>
          </div>
          <div className="flex items-center gap-2">
            <Info size={14} />
            <span>1 point = 1 spécialité</span>
          </div>
        </div>
      </div>
      
      {character.profils?.majeur?.nom && (
        <div className="border-2 border-purple-300 rounded-lg p-3 bg-purple-50">
          <h3 className="text-lg font-serif text-purple-900 mb-2 font-bold flex items-center gap-2">
            Profil Majeur: {character.profils.majeur.nom}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {competencesByProfil.majeur.map(renderCompetence)}
          </div>
        </div>
      )}
      
      {character.profils?.mineur?.nom && (
        <div className="border-2 border-blue-300 rounded-lg p-3 bg-blue-50">
          <h3 className="text-lg font-serif text-blue-900 mb-2 font-bold flex items-center gap-2">
            Profil Mineur: {character.profils.mineur.nom}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {competencesByProfil.mineur.map(renderCompetence)}
          </div>
        </div>
      )}
      
      <div className="border-2 border-amber-200 rounded-lg p-3 bg-white">
        <h3 className="text-lg font-serif text-amber-900 mb-2 font-bold">
          Autres Compétences
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {competencesByProfil.autres.map(renderCompetence)}
        </div>
      </div>
      
      {pointsRestants === 0 && (
        <div className="p-3 bg-green-100 border-2 border-green-400 rounded-lg text-center">
          <p className="text-green-800 font-serif">
            ✓ Tous les points ont été répartis !
          </p>
        </div>
      )}
    </div>
  );
}