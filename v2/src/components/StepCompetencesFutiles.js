// src/components/StepCompetencesFutiles.js
// Version: 2.9.2
// Build: 2026-01-31 20:45
// Description: Étape 5 (Step 5 dans la séquence) - Compétences futiles (10 points)
// Dernière modification: 2026-01-31
// Ajout: Support des choix entre compétences futiles de prédilection

import React, { useState, useEffect } from 'react';
import { Plus, Minus, Star, Sparkles, PlusCircle, AlertCircle } from 'lucide-react';
import { competencesFutilesBase } from '../data/data';
import { parseCompetencesFutilesPredilection } from '../data/dataHelpers';

const POINTS_TOTAUX = 10;

export default function StepCompetencesFutiles({ character, onCompetencesFutilesChange, fairyData }) {
  const [newCompetenceName, setNewCompetenceName] = useState('');
  const [newCompetenceDesc, setNewCompetenceDesc] = useState('');
  const [choixPredilection, setChoixPredilection] = useState({});
  
  const feeData = fairyData[character.typeFee];
  
  // Parser les compétences de prédilection pour gérer les choix
  const parsedPredilection = parseCompetencesFutilesPredilection(
    feeData?.competencesFutilesPredilection || []
  );
  
  // Initialiser les choix de prédilection depuis le personnage sauvegardé
  useEffect(() => {
    if (character.competencesFutiles?.choixPredilection) {
      setChoixPredilection(character.competencesFutiles.choixPredilection);
    }
  }, [character.competencesFutiles?.choixPredilection]);
  
  // Obtenir la liste finale des compétences de prédilection
  // (en tenant compte des choix effectués)
  const getCompetencesPredilectionFinales = () => {
    const finales = [];
    
    parsedPredilection.forEach((item, index) => {
      if (item.isChoix) {
        // Si c'est un choix, prendre la sélection
        const selection = choixPredilection[index];
        if (selection) {
          finales.push(selection);
        }
      } else {
        // Si c'est fixe, l'ajouter directement
        finales.push(item.nom);
      }
    });
    
    return finales;
  };
  
  const competencesPredilection = getCompetencesPredilectionFinales();
  
  // Vérifier si tous les choix ont été faits
  const allChoicesMade = parsedPredilection.every((item, index) => {
    if (item.isChoix) {
      return choixPredilection[index] !== undefined;
    }
    return true;
  });
  
  // Obtenir les compétences personnalisées
  const competencesPersonnalisees = character.competencesFutiles?.personnalisees || [];
  
  // Obtenir toutes les compétences disponibles
  const toutesLesCompetences = [
    ...competencesFutilesBase,
    ...competencesPersonnalisees
  ];
  
  // Obtenir les rangs investis
  const rangsInvestis = character.competencesFutiles?.rangs || {};
  
  // Calculer les points dépensés
  const pointsDepenses = Object.values(rangsInvestis).reduce((sum, rangs) => sum + rangs, 0);
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;
  
  // Obtenir le score total d'une compétence
  const getScoreTotal = (nomComp) => {
    const isPredilection = competencesPredilection.includes(nomComp);
    const base = isPredilection ? 2 : 0;
    const investis = rangsInvestis[nomComp] || 0;
    return base + investis;
  };
  
  // Vérifier si on peut ajouter un rang
  const canAddRang = (nomComp) => {
    if (pointsRestants <= 0) return false;
    const scoreTotal = getScoreTotal(nomComp);
    const isPredilection = competencesPredilection.includes(nomComp);
    const maxRangs = isPredilection ? 5 : 4;
    return scoreTotal < maxRangs;
  };
  
  // Gérer le changement de choix pour une compétence de prédilection
  const handleChoixPredilectionChange = (index, value) => {
    const newChoix = {
      ...choixPredilection,
      [index]: value
    };
    setChoixPredilection(newChoix);
    
    // Sauvegarder dans le personnage
    onCompetencesFutilesChange({
      ...character.competencesFutiles,
      choixPredilection: newChoix
    });
  };
  
  // Ajouter/retirer un rang
  const handleRangChange = (nomComp, delta) => {
    const current = rangsInvestis[nomComp] || 0;
    const newValue = Math.max(0, current + delta);
    
    if (delta > 0 && !canAddRang(nomComp)) return;
    if (delta < 0 && current === 0) return;
    
    const newRangs = { ...rangsInvestis };
    
    if (newValue === 0) {
      delete newRangs[nomComp];
    } else {
      newRangs[nomComp] = newValue;
    }
    
    onCompetencesFutilesChange({
      ...character.competencesFutiles,
      rangs: newRangs,
      choixPredilection
    });
  };
  
  // Ajouter une compétence personnalisée
  const handleAddCustomCompetence = () => {
    if (!newCompetenceName.trim()) return;
    
    // Vérifier si elle existe déjà
    const exists = toutesLesCompetences.some(
      c => c.nom.toLowerCase() === newCompetenceName.trim().toLowerCase()
    );
    
    if (exists) {
      alert('Cette compétence existe déjà !');
      return;
    }
    
    const nouvelleCompetence = {
      nom: newCompetenceName.trim(),
      description: newCompetenceDesc.trim() || 'Compétence personnalisée'
    };
    
    const newPersonnalisees = [...competencesPersonnalisees, nouvelleCompetence];
    
    onCompetencesFutilesChange({
      ...character.competencesFutiles,
      personnalisees: newPersonnalisees,
      choixPredilection
    });
    
    setNewCompetenceName('');
    setNewCompetenceDesc('');
  };
  
  const renderCompetence = (comp) => {
    const isPredilection = competencesPredilection.includes(comp.nom);
    const scoreBase = isPredilection ? 2 : 0;
    const rangsInvestisComp = rangsInvestis[comp.nom] || 0;
    const scoreTotal = scoreBase + rangsInvestisComp;
    const maxRangs = isPredilection ? 5 : 4;
    const isCustom = competencesPersonnalisees.some(c => c.nom === comp.nom);
    
    return (
      <div key={comp.nom} className="p-4 border-2 border-purple-200 rounded-lg bg-white hover:border-purple-400 transition-all">
        {/* En-tête */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-serif text-lg text-purple-900 font-semibold">
                {comp.nom}
              </h4>
              {isPredilection && (
                <Star size={16} className="text-purple-600" fill="currentColor" title="Compétence de prédilection" />
              )}
              {isCustom && (
                <Sparkles size={16} className="text-blue-600" title="Compétence personnalisée" />
              )}
            </div>
            <p className="text-xs text-purple-600">{comp.description}</p>
          </div>
        </div>
        
        {/* Score et contrôles */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-purple-600">Score actuel</div>
            <div className="text-2xl font-bold text-purple-900">
              {scoreTotal}
              <span className="text-sm text-purple-600 ml-1">/ {maxRangs}</span>
            </div>
            {scoreBase > 0 && (
              <div className="text-xs text-purple-600">
                (Base: {scoreBase}{rangsInvestisComp > 0 ? ` + ${rangsInvestisComp}` : ''})
              </div>
            )}
          </div>
          
          {/* Boutons +/- */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRangChange(comp.nom, -1)}
              disabled={rangsInvestisComp === 0}
              className={`p-2 rounded-lg transition-all ${
                rangsInvestisComp > 0
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Minus size={16} />
            </button>
            
            <button
              onClick={() => handleRangChange(comp.nom, 1)}
              disabled={!canAddRang(comp.nom)}
              className={`p-2 rounded-lg transition-all ${
                canAddRang(comp.nom)
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
        <h2 className="text-2xl font-serif text-purple-900 mb-3 flex items-center gap-2">
          <Sparkles className="text-purple-600" />
          Compétences Futiles
        </h2>
        <div className="flex items-center justify-between mb-3">
          <p className="text-purple-800">
            Vous disposez de <span className="font-bold text-3xl text-purple-900">{pointsRestants}</span> points à répartir.
          </p>
        </div>
        <div className="mt-3 space-y-2 text-sm text-purple-700 bg-white p-4 rounded border border-purple-200">
          <p className="font-semibold text-purple-900 mb-2">
            Les compétences futiles représentent les loisirs, hobbies et talents personnels de votre personnage.
          </p>
          <div>• 1 point = 1 rang de compétence</div>
          <div>• Maximum : 4 rangs (ou 5 pour les compétences de prédilection <Star size={14} className="inline text-purple-600" fill="currentColor" />)</div>
          <div>• Ces compétences ne sont pas liées aux profils</div>
          <div>• Vous pouvez créer vos propres compétences futiles !</div>
        </div>
      </div>
      
      {/* Sélection des choix de prédilection */}
      {parsedPredilection.some(item => item.isChoix) && (
        <div className="border-2 border-amber-300 rounded-lg p-6 bg-gradient-to-r from-amber-50 to-yellow-50">
          <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold flex items-center gap-2">
            <AlertCircle className="text-amber-600" />
            Choisissez vos Compétences Futiles de Prédilection
          </h3>
          <p className="text-sm text-amber-800 mb-4">
            Votre type de fée vous permet de choisir entre certaines compétences futiles.
            Faites vos choix ci-dessous :
          </p>
          
          <div className="space-y-4">
            {parsedPredilection.map((item, index) => {
              if (!item.isChoix) {
                // Afficher les compétences fixes
                return (
                  <div key={index} className="p-4 bg-white rounded-lg border-2 border-purple-300">
                    <div className="flex items-center gap-2">
                      <Star className="text-purple-600" fill="currentColor" size={20} />
                      <span className="font-serif text-lg text-purple-900 font-semibold">
                        {item.displayText}
                      </span>
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        Rang 2 de base
                      </span>
                    </div>
                  </div>
                );
              }
              
              // Afficher un sélecteur pour les choix
              return (
                <div key={index} className="p-4 bg-white rounded-lg border-2 border-amber-300">
                  <label className="block">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-amber-600" fill="currentColor" size={20} />
                      <span className="font-serif text-base text-amber-900 font-semibold">
                        Au choix : {item.displayText}
                      </span>
                    </div>
                    <select
                      value={choixPredilection[index] || ''}
                      onChange={(e) => handleChoixPredilectionChange(index, e.target.value)}
                      className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none font-serif bg-amber-50"
                      required
                    >
                      <option value="">-- Sélectionnez une compétence --</option>
                      {item.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="text-xs text-amber-600 mt-1">
                      Cette compétence aura un rang de base de 2
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          
          {!allChoicesMade && (
            <div className="mt-4 p-3 bg-amber-100 border border-amber-400 rounded text-amber-800 text-sm">
              ⚠️ Veuillez faire tous vos choix avant de pouvoir répartir vos points.
            </div>
          )}
        </div>
      )}
      
      {/* Compétences de prédilection finales */}
      {allChoicesMade && competencesPredilection.length > 0 && (
        <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
          <h3 className="text-xl font-serif text-purple-900 mb-4 font-bold flex items-center gap-2">
            <Star className="text-purple-600" fill="currentColor" />
            Vos Compétences Futiles de Prédilection (Rang 2 de base)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencesPredilection.map(nomComp => {
              const comp = toutesLesCompetences.find(c => c.nom === nomComp);
              return comp ? renderCompetence(comp) : null;
            })}
          </div>
        </div>
      )}
      
      {/* Bloquer la suite si les choix ne sont pas faits */}
      {!allChoicesMade && (
        <div className="p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg text-center">
          <AlertCircle className="mx-auto text-yellow-600 mb-3" size={48} />
          <p className="text-yellow-900 font-serif text-lg font-semibold">
            Veuillez d'abord choisir vos compétences futiles de prédilection ci-dessus
          </p>
        </div>
      )}
      
      {/* Le reste du composant n'est visible que si tous les choix sont faits */}
      {allChoicesMade && (
        <>
          {/* Compétences personnalisées */}
          {competencesPersonnalisees.length > 0 && (
            <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
              <h3 className="text-xl font-serif text-blue-900 mb-4 font-bold flex items-center gap-2">
                <Sparkles className="text-blue-600" />
                Vos Compétences Personnalisées
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {competencesPersonnalisees.map(renderCompetence)}
              </div>
            </div>
          )}
          
          {/* Liste des compétences de base */}
          <div className="border-2 border-purple-200 rounded-lg p-4 bg-white">
            <h3 className="text-xl font-serif text-purple-900 mb-4 font-bold">
              Compétences Futiles Disponibles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {competencesFutilesBase
                .filter(comp => !competencesPredilection.includes(comp.nom))
                .map(renderCompetence)}
            </div>
          </div>
          
          {/* Validation */}
          {pointsRestants === 0 && (
            <div className="p-4 bg-green-100 border-2 border-green-400 rounded-lg text-center">
              <p className="text-green-800 font-serif text-lg">
                ✓ Tous les points ont été répartis !
              </p>
            </div>
          )}
          
          {/* Créer une compétence personnalisée - EN BAS */}
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
            <h3 className="text-xl font-serif text-blue-900 mb-4 font-bold flex items-center gap-2">
              <PlusCircle className="text-blue-600" />
              Créer une Compétence Futile Personnalisée
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-serif text-blue-900 mb-1">
                  Nom de la compétence *
                </label>
                <input
                  type="text"
                  value={newCompetenceName}
                  onChange={(e) => setNewCompetenceName(e.target.value)}
                  placeholder="Ex: Collection de papillons, Lecture de thé, etc."
                  className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none font-serif"
                />
              </div>
              <div>
                <label className="block text-sm font-serif text-blue-900 mb-1">
                  Description (optionnel)
                </label>
                <input
                  type="text"
                  value={newCompetenceDesc}
                  onChange={(e) => setNewCompetenceDesc(e.target.value)}
                  placeholder="Description courte de cette compétence"
                  className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none font-serif"
                />
              </div>
              <button
                onClick={handleAddCustomCompetence}
                disabled={!newCompetenceName.trim()}
                className={`w-full py-3 rounded-lg font-serif transition-all flex items-center justify-center gap-2 ${
                  newCompetenceName.trim()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <PlusCircle size={20} />
                Ajouter cette compétence
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
