// src/components/StepCompetencesLibres.js
// Version: 2.0
// Description: Étape 4 (Step 4 dans la séquence) - Compétences libres (15 points)
// Dernière modification: 2025-01-30

import React, { useState } from 'react';
import { Plus, Minus, Star, Info } from 'lucide-react';
import { competences, competenceNames, profils } from '../data/data';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ character, onCompetencesLibresChange, fairyData }) {
  const [showInfo, setShowInfo] = useState(null);
  const feeData = fairyData[character.typeFee];
  
  // Calculer les compétences de base (avant points libres)
  const getCompetencesBase = () => {
    const competencesMap = new Map();
    
    // 1. Compétences de prédilection de la fée (+2)
    if (feeData?.competencesPredilection) {
      feeData.competencesPredilection.forEach(comp => {
        competencesMap.set(comp.nom, {
          nom: comp.nom,
          scoreBase: 2,
          predilection: true,
          specialiteBase: comp.specialite
        });
      });
    }
    
    // 2. Profil majeur (+2)
    if (character.profils?.majeur?.competences) {
      character.profils.majeur.competences.forEach(comp => {
        if (competencesMap.has(comp)) {
          competencesMap.get(comp).scoreBase += 2;
        } else {
          competencesMap.set(comp, {
            nom: comp,
            scoreBase: 2,
            predilection: false,
            specialiteBase: null
          });
        }
      });
    }
    
    // 3. Profil mineur (+1)
    if (character.profils?.mineur?.competences) {
      character.profils.mineur.competences.forEach(comp => {
        if (competencesMap.has(comp)) {
          competencesMap.get(comp).scoreBase += 1;
        } else {
          competencesMap.set(comp, {
            nom: comp,
            scoreBase: 1,
            predilection: false,
            specialiteBase: null
          });
        }
      });
    }
    
    return competencesMap;
  };
  
  const competencesBase = getCompetencesBase();
  const competencesLibres = character.competencesLibres || {};
  
  // Calculer les points dépensés
  const pointsDepenses = Object.entries(competencesLibres).reduce((sum, [comp, data]) => {
    let points = data.rangsSupplementaires || 0;
    if (data.specialites) {
      points += data.specialites.length;
    }
    return sum + points;
  }, 0);
  
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;
  
  // Obtenir le score total d'une compétence
  const getScoreTotal = (nomComp) => {
    const base = competencesBase.get(nomComp)?.scoreBase || 0;
    const supplementaire = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    return base + supplementaire;
  };
  
  // Vérifier si on peut ajouter un rang
  const canAddRang = (nomComp) => {
    if (pointsRestants <= 0) return false;
    const scoreTotal = getScoreTotal(nomComp);
    const isPredilection = competencesBase.get(nomComp)?.predilection || false;
    const maxRangs = isPredilection ? 5 : 4;
    return scoreTotal < maxRangs;
  };
  
  // Ajouter/retirer un rang
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
    
    // Nettoyer si 0 rangs et pas de spécialités
    if (newValue === 0 && (!newCompetences[nomComp].specialites || newCompetences[nomComp].specialites.length === 0)) {
      delete newCompetences[nomComp];
    }
    
    onCompetencesLibresChange(newCompetences);
  };
  
  // Ajouter une spécialité
  const handleAddSpecialite = (nomComp, specialite) => {
    if (pointsRestants <= 0) return;
    
    const current = competencesLibres[nomComp] || { rangsSupplementaires: 0, specialites: [] };
    const specialites = current.specialites || [];
    
    if (specialites.includes(specialite)) return; // Déjà ajoutée
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...current,
        specialites: [...specialites, specialite]
      }
    };
    
    onCompetencesLibresChange(newCompetences);
  };
  
  // Retirer une spécialité
  const handleRemoveSpecialite = (nomComp, specialite) => {
    const current = competencesLibres[nomComp];
    if (!current || !current.specialites) return;
    
    const newSpecialites = current.specialites.filter(s => s !== specialite);
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...current,
        specialites: newSpecialites
      }
    };
    
    // Nettoyer si plus de spécialités et 0 rangs
    if (newSpecialites.length === 0 && (current.rangsSupplementaires || 0) === 0) {
      delete newCompetences[nomComp];
    }
    
    onCompetencesLibresChange(newCompetences);
  };
  
  // Grouper les compétences par catégorie
  const competencesParCategorie = {};
  competenceNames.forEach(nom => {
    const cat = competences[nom].categorie;
    if (!competencesParCategorie[cat]) {
      competencesParCategorie[cat] = [];
    }
    competencesParCategorie[cat].push(nom);
  });
  
  const renderCompetence = (nomComp) => {
    const compData = competences[nomComp];
    const base = competencesBase.get(nomComp);
    const scoreBase = base?.scoreBase || 0;
    const isPredilection = base?.predilection || false;
    const specialiteBase = base?.specialiteBase;
    const rangsSupp = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    const specialitesSupp = competencesLibres[nomComp]?.specialites || [];
    const scoreTotal = scoreBase + rangsSupp;
    const maxRangs = isPredilection ? 5 : 4;
    
    return (
      <div key={nomComp} className="p-4 border-2 border-amber-200 rounded-lg bg-white">
        {/* En-tête */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-serif text-lg text-amber-900 font-semibold">
                {nomComp}
              </h4>
              {isPredilection && (
                <Star size={16} className="text-amber-600" fill="currentColor" title="Compétence de prédilection" />
              )}
            </div>
            <p className="text-xs text-amber-600">{compData.description}</p>
          </div>
          
          <button
            onClick={() => setShowInfo(showInfo === nomComp ? null : nomComp)}
            className="text-amber-600 hover:text-amber-800"
          >
            <Info size={18} />
          </button>
        </div>
        
        {/* Spécialités disponibles */}
        {showInfo === nomComp && (
          <div className="mb-3 p-3 bg-amber-50 rounded border border-amber-200 text-sm">
            <div className="font-semibold text-amber-900 mb-1">Spécialités disponibles :</div>
            <div className="text-amber-700">
              {compData.specialites.join(', ')}
            </div>
          </div>
        )}
        
        {/* Score */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-xs text-amber-600">Score actuel</div>
              <div className="text-3xl font-bold text-amber-900">
                {scoreTotal}
                <span className="text-sm text-amber-600 ml-1">/ {maxRangs}</span>
              </div>
              {scoreBase > 0 && (
                <div className="text-xs text-amber-600">
                  (Base: {scoreBase}{rangsSupp > 0 ? ` + ${rangsSupp}` : ''})
                </div>
              )}
            </div>
          </div>
          
          {/* Boutons +/- */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRangChange(nomComp, -1)}
              disabled={rangsSupp === 0}
              className={`p-2 rounded-lg transition-all ${
                rangsSupp > 0
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Minus size={16} />
            </button>
            
            <button
              onClick={() => handleRangChange(nomComp, 1)}
              disabled={!canAddRang(nomComp)}
              className={`p-2 rounded-lg transition-all ${
                canAddRang(nomComp)
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        {/* Spécialités */}
        <div className="border-t border-amber-200 pt-3">
          <div className="text-xs text-amber-600 font-semibold mb-2">
            Spécialités (1 point chacune) :
          </div>
          
          {/* Spécialité de base */}
          {specialiteBase && (
            <div className="inline-block px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm mr-2 mb-2 border-2 border-amber-400">
              {specialiteBase} (incluse)
            </div>
          )}
          
          {/* Spécialités achetées */}
          {specialitesSupp.map(spec => (
            <div key={spec} className="inline-block px-3 py-1 bg-green-100 text-green-900 rounded-full text-sm mr-2 mb-2 border-2 border-green-400 relative group">
              {spec}
              <button
                onClick={() => handleRemoveSpecialite(nomComp, spec)}
                className="ml-2 text-green-700 hover:text-red-700"
              >
                ×
              </button>
            </div>
          ))}
          
          {/* Sélecteur de nouvelles spécialités */}
          {pointsRestants > 0 && compData.specialites.length > 0 && (
            <select
              onChange={(e) => {
                if (e.target.value) {
                  handleAddSpecialite(nomComp, e.target.value);
                  e.target.value = '';
                }
              }}
              className="text-sm border-2 border-amber-300 rounded px-2 py-1 bg-white"
            >
              <option value="">+ Ajouter une spécialité</option>
              {compData.specialites
                .filter(s => s !== specialiteBase && !specialitesSupp.includes(s))
                .map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))
              }
            </select>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
        <h2 className="text-2xl font-serif text-amber-900 mb-3">
          Répartition Libre des Compétences
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-amber-800">
            Vous disposez de <span className="font-bold text-3xl text-amber-900">{pointsRestants}</span> points à répartir.
          </p>
        </div>
        <div className="mt-3 space-y-2 text-sm text-amber-700">
          <div className="flex items-center gap-2">
            <Info size={16} />
            <span>1 point = 1 rang de compétence</span>
          </div>
          <div className="flex items-center gap-2">
            <Info size={16} />
            <span>Maximum : 4 rangs (ou 5 pour les compétences de prédilection <Star size={14} className="inline text-amber-600" fill="currentColor" />)</span>
          </div>
          <div className="flex items-center gap-2">
            <Info size={16} />
            <span>1 point = 1 spécialité dans une compétence</span>
          </div>
        </div>
      </div>
      
      {/* Compétences par catégorie */}
      {Object.entries(competencesParCategorie).map(([categorie, comps]) => (
        <div key={categorie} className="border-2 border-amber-200 rounded-lg p-4 bg-gradient-to-br from-white to-amber-50">
          <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold border-b-2 border-amber-200 pb-2">
            {categorie}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comps.map(renderCompetence)}
          </div>
        </div>
      ))}
      
      {/* Validation */}
      {pointsRestants === 0 && (
        <div className="p-4 bg-green-100 border-2 border-green-400 rounded-lg text-center">
          <p className="text-green-800 font-serif text-lg">
            ✓ Tous les points ont été répartis !
          </p>
        </div>
      )}
    </div>
  );
}