// src/components/StepCompetencesLibres.js
// Version: 3.0.4
// Build: 2026-02-04 05:15
// Migration: Données depuis Supabase via props - Interface préservée avec organisation par profil

import React from 'react';
import { Plus, Minus, Star, Info } from 'lucide-react';

const POINTS_TOTAUX = 15;

export default function StepCompetencesLibres({ character, onCompetencesLibresChange, profils, competences, competencesParProfil, fairyData }) {
  const feeData = fairyData[character.typeFee];
  
  // Construire la map des compétences de base
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
    
    // Compétences du profil majeur
    if (character.profils?.majeur?.competences) {
      character.profils.majeur.competences.forEach(comp => {
        const current = competencesMap.get(comp) || { scoreBase: 0, predilection: false };
        competencesMap.set(comp, {
          ...current,
          scoreBase: current.scoreBase + 2
        });
      });
    }
    
    // Compétences du profil mineur
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
  
  // Calculer points dépensés
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
  
  // Gérer changement de rang
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
  
  // Ajouter spécialité
  const handleAddSpecialite = (nomComp, specialite) => {
    if (pointsRestants <= 0) return;
    
    const specialitesExistantes = competencesLibres[nomComp]?.specialites || [];
    if (specialitesExistantes.includes(specialite)) return;
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...competencesLibres[nomComp],
        specialites: [...specialitesExistantes, specialite]
      }
    };
    
    onCompetencesLibresChange(newCompetences);
  };
  
  // Retirer spécialité
  const handleRemoveSpecialite = (nomComp, specialite) => {
    const specialitesExistantes = competencesLibres[nomComp]?.specialites || [];
    const newSpecialites = specialitesExistantes.filter(s => s !== specialite);
    
    const newCompetences = {
      ...competencesLibres,
      [nomComp]: {
        ...competencesLibres[nomComp],
        specialites: newSpecialites
      }
    };
    
    if (newSpecialites.length === 0 && (!newCompetences[nomComp].rangsSupplementaires || newCompetences[nomComp].rangsSupplementaires === 0)) {
      delete newCompetences[nomComp];
    }
    
    onCompetencesLibresChange(newCompetences);
  };
  
  // Fonction pour obtenir le nom adapté au sexe
  const getProfilDisplayName = (profilNom) => {
    const profil = profils.find(p => p.nom === profilNom);
    if (!profil) return profilNom;
    
    if (character.sexe === 'Femme') {
      return profil.nomFeminin || profilNom;
    }
    return profil.nom || profilNom;
  };
  
  // Calculer le rang d'un profil
  const calculateProfilRang = (profilNom) => {
    const isMajeur = character.profils?.majeur?.nom === profilNom;
    const isMineur = character.profils?.mineur?.nom === profilNom;
    
    // Base : 8 pour majeur, 4 pour mineur, 0 pour les autres
    const base = isMajeur ? 8 : isMineur ? 4 : 0;
    
    // Calculer les points investis dans les compétences de ce profil
    const competencesDuProfil = competencesParProfil[profilNom] || [];
    const nomsCompetencesDuProfil = competencesDuProfil.map(c => c.nom);
    
    const pointsInvestis = Object.entries(competencesLibres).reduce((sum, [nomComp, data]) => {
      if (nomsCompetencesDuProfil.includes(nomComp)) {
        return sum + (data.rangsSupplementaires || 0);
      }
      return sum;
    }, 0);
    
    // Bonus = pointsInvestis / 4 arrondi à l'entier inférieur
    const bonus = Math.floor(pointsInvestis / 4);
    
    return {
      total: base + bonus,
      base,
      bonus
    };
  };
  
  // Render d'une compétence
  const renderCompetence = (nomComp) => {
    const compData = competences[nomComp];
    if (!compData) return null;
    
    const scoreBase = competencesBase.get(nomComp)?.scoreBase || 0;
    const rangsSupp = competencesLibres[nomComp]?.rangsSupplementaires || 0;
    const scoreTotal = scoreBase + rangsSupp;
    const isPredilection = competencesBase.get(nomComp)?.predilection || false;
    const maxRangs = isPredilection ? 5 : 4;
    
    const specialiteBase = competencesBase.get(nomComp)?.specialiteBase;
    const specialitesSupp = competencesLibres[nomComp]?.specialites || [];
    
    return (
      <div key={nomComp} className="bg-white p-2 rounded border border-amber-200">
        <div className="flex items-center justify-between mb-1">
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
        
        {(specialiteBase || specialitesSupp.length > 0 || compData.specialites) && (
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
            {compData.specialites && compData.specialites.length > 0 && (
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
      
      {profils.map(profil => {
        const profilNom = profil.nom;
        const profilCompetences = competencesParProfil[profilNom] || [];
        const isMajeur = character.profils?.majeur?.nom === profilNom;
        const isMineur = character.profils?.mineur?.nom === profilNom;
        
        // Calculer le rang du profil
        const rangData = calculateProfilRang(profilNom);
        
        // Adapter le nom au sexe
        const profilNameAdapted = getProfilDisplayName(profilNom);
        
        const borderColor = isMajeur ? 'border-purple-300' : isMineur ? 'border-blue-300' : 'border-gray-300';
        const bgColor = isMajeur ? 'bg-purple-50' : isMineur ? 'bg-blue-50' : 'bg-gray-50';
        const textColor = isMajeur ? 'text-purple-900' : isMineur ? 'text-blue-900' : 'text-gray-700';
        const badge = isMajeur ? 'Majeur' : isMineur ? 'Mineur' : '';
        
        return (
          <div key={profilNom} className={`border-2 ${borderColor} rounded-lg p-3 ${bgColor}`}>
            <h3 className={`text-lg font-serif ${textColor} mb-2 font-bold flex items-center gap-2`}>
              <span className="text-2xl">{profil.icon || '👤'}</span>
              {profilNameAdapted}
              {badge && <span className="text-sm px-2 py-0.5 rounded bg-opacity-50 bg-white">{badge}</span>}
              <span className="ml-auto text-xl font-bold">
                Rang {rangData.total} ({rangData.base} + {rangData.bonus})
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {profilCompetences.map(comp => renderCompetence(comp.nom))}
            </div>
          </div>
        );
      })}
      
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
