// src/components/StepCompetencesLibres.js
// Version: 3.0.0
// Build: 2026-02-04 01:00
// Migration: 100% Supabase - Plus de data.js !

import React from 'react';
import { Plus, Minus, Star, Info } from 'lucide-react';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ character, onCompetencesLibresChange, fairyData, competences, competencesParProfil }) {
  const feeData = fairyData[character.typeFee];
  
  const getCompetencesBase = () => {
    const competencesMap = new Map();
    
    // Compétences de prédilection de la fée
    if (feeData?.competencesPredilection) {
      feeData.competencesPredilection.forEach(comp => {
        competencesMap.set(comp.nom, {
          scoreBase: 2,
          predilection: true,
          specialiteBase: comp.specialite
        });
      });
    }
    
    // Profil majeur (rang 3 = +2)
    if (character.profils?.majeur?.nom) {
      const profilMajeurComps = competencesParProfil[character.profils.majeur.nom] || [];
      profilMajeurComps.forEach(comp => {
        const current = competencesMap.get(comp.nom) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp.nom, {
          ...current,
          scoreBase: current.scoreBase + 2
        });
      });
    }
    
    // Profil mineur (rang 2 = +1)
    if (character.profils?.mineur?.nom) {
      const profilMineurComps = competencesParProfil[character.profils.mineur.nom] || [];
      profilMineurComps.forEach(comp => {
        const current = competencesMap.get(comp.nom) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp.nom, {
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
  
  const handleRangChange = (competence, delta) => {
    const current = competencesLibres[competence] || { rangsSupplementaires: 0, specialites: [] };
    const newRangs = Math.max(0, (current.rangsSupplementaires || 0) + delta);
    
    if (delta > 0 && pointsRestants < 1) return;
    
    const updated = {
      ...competencesLibres,
      [competence]: {
        ...current,
        rangsSupplementaires: newRangs
      }
    };
    
    if (newRangs === 0 && (!current.specialites || current.specialites.length === 0)) {
      delete updated[competence];
    }
    
    onCompetencesLibresChange(updated);
  };
  
  const handleSpecialiteToggle = (competence, specialite) => {
    const current = competencesLibres[competence] || { rangsSupplementaires: 0, specialites: [] };
    const specialites = current.specialites || [];
    const hasSpecialite = specialites.includes(specialite);
    
    if (!hasSpecialite && pointsRestants < 1) return;
    
    const newSpecialites = hasSpecialite
      ? specialites.filter(s => s !== specialite)
      : [...specialites, specialite];
    
    const updated = {
      ...competencesLibres,
      [competence]: {
        ...current,
        specialites: newSpecialites
      }
    };
    
    if ((current.rangsSupplementaires || 0) === 0 && newSpecialites.length === 0) {
      delete updated[competence];
    }
    
    onCompetencesLibresChange(updated);
  };
  
  const getScoreTotal = (competence) => {
    const base = competencesBase.get(competence)?.scoreBase || 0;
    const supplementaire = competencesLibres[competence]?.rangsSupplementaires || 0;
    return base + supplementaire;
  };
  
  // Grouper les compétences par catégorie
  const toutesCompetences = Object.values(competences);
  const competencesAvecScore = Array.from(competencesBase.keys());
  const competencesSansScore = toutesCompetences
    .map(c => c.nom)
    .filter(nom => !competencesBase.has(nom));
  
  const renderCompetence = (nomCompetence) => {
    const competenceData = competences[nomCompetence];
    if (!competenceData) return null;
    
    const baseInfo = competencesBase.get(nomCompetence) || { scoreBase: 0, predilection: false };
    const scoreTotal = getScoreTotal(nomCompetence);
    const rangsSupp = competencesLibres[nomCompetence]?.rangsSupplementaires || 0;
    const specialitesChoisies = competencesLibres[nomCompetence]?.specialites || [];
    
    return (
      <div key={nomCompetence} className="p-4 bg-white rounded-lg border-2 border-amber-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-serif font-semibold text-amber-900">{nomCompetence}</h3>
              {baseInfo.predilection && (
                <Star size={16} className="text-yellow-500 fill-yellow-500" title="Prédilection" />
              )}
            </div>
            <p className="text-sm text-gray-600">{competenceData.description}</p>
          </div>
          
          <div className="flex items-center gap-3 ml-4">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Base</div>
              <div className="text-lg font-bold text-gray-700">{baseInfo.scoreBase}</div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleRangChange(nomCompetence, -1)}
                disabled={rangsSupp === 0}
                className="p-1 rounded bg-red-100 hover:bg-red-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Minus size={20} className="text-red-600" />
              </button>
              <div className="w-12 text-center">
                <div className="text-xs text-gray-500 mb-1">+</div>
                <div className="text-lg font-bold text-blue-600">{rangsSupp}</div>
              </div>
              <button
                onClick={() => handleRangChange(nomCompetence, 1)}
                disabled={pointsRestants === 0}
                className="p-1 rounded bg-green-100 hover:bg-green-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Plus size={20} className="text-green-600" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Total</div>
              <div className="text-2xl font-bold text-amber-600">{scoreTotal}</div>
            </div>
          </div>
        </div>
        
        {/* Spécialités */}
        {competenceData.hasSpecialites && competenceData.specialites?.length > 0 && (
          <div className="mt-3 pt-3 border-t border-amber-100">
            <div className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
              <Info size={14} />
              Spécialités (1 point chacune)
            </div>
            <div className="flex flex-wrap gap-2">
              {competenceData.specialites.map(spec => (
                <button
                  key={spec}
                  onClick={() => handleSpecialiteToggle(nomCompetence, spec)}
                  disabled={!specialitesChoisies.includes(spec) && pointsRestants === 0}
                  className={`px-3 py-1 rounded-full text-sm border-2 transition-all ${
                    specialitesChoisies.includes(spec)
                      ? 'border-amber-600 bg-amber-100 text-amber-900'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-amber-400 disabled:opacity-30 disabled:cursor-not-allowed'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
            {baseInfo.specialiteBase && (
              <div className="mt-2 text-xs text-green-700 flex items-center gap-1">
                <Star size={12} className="fill-green-600" />
                Spécialité de prédilection : {baseInfo.specialiteBase}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Header avec compteur de points */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg border-2 border-amber-300">
        <h2 className="text-2xl font-serif text-amber-900 mb-2">Compétences Libres</h2>
        <p className="text-gray-700 mb-4">
          Vous disposez de <strong>15 points</strong> à répartir librement parmi toutes les compétences.
          Chaque rang coûte 1 point, chaque spécialité coûte 1 point.
        </p>
        <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-lg border-2 border-amber-400">
          <div className="text-center">
            <div className="text-sm text-gray-600">Points dépensés</div>
            <div className="text-3xl font-bold text-amber-900">{pointsDepenses}</div>
          </div>
          <div className="text-3xl text-gray-400">/</div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Points restants</div>
            <div className={`text-3xl font-bold ${pointsRestants === 0 ? 'text-green-600' : 'text-blue-600'}`}>
              {pointsRestants}
            </div>
          </div>
        </div>
      </div>
      
      {/* Compétences avec score de base */}
      {competencesAvecScore.length > 0 && (
        <div>
          <h3 className="text-xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
            Vos compétences (profils + prédilections)
          </h3>
          <div className="space-y-3">
            {competencesAvecScore.map(renderCompetence)}
          </div>
        </div>
      )}
      
      {/* Autres compétences */}
      {competencesSansScore.length > 0 && (
        <div>
          <h3 className="text-xl font-serif text-gray-700 mb-4 border-b-2 border-gray-200 pb-2">
            Autres compétences disponibles
          </h3>
          <div className="space-y-3">
            {competencesSansScore.map(renderCompetence)}
          </div>
        </div>
      )}
    </div>
  );
}
