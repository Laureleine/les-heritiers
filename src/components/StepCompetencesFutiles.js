// src/components/StepCompetencesFutiles.js
// 8.23.0 // 8.31.0 // 8.32.0
// 9.11.0
// 10.4.0 // 10.6.0 // 10.9.0

import React, { useState, useEffect } from 'react';
import { Plus, Minus, Star, Sparkles, PlusCircle, AlertCircle, RotateCcw } from 'lucide-react';
import { getCompetencesFutiles, addCompetenceFutile, invalidateCompetencesFutilesCache } from '../utils/supabaseGameData';
import { parseCompetencesFutilesPredilection } from '../data/DictionnaireJeu';
import { useCharacter } from '../context/CharacterContext'; // 👈 L'IMPORT (En haut du fichier)

const POINTS_TOTAUX = 10;

export default function StepCompetencesFutiles() { // 👈 PLUS DE PARAMÈTRES
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;

  // Le remplaçant local :
  const onCompetencesFutilesChange = (c) => {
    if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { competencesFutiles: c }, gameData });
  };

  const [competencesFutilesBase, setCompetencesFutilesBase] = useState(gameData.competencesFutiles || []);
  
  const [newCompetenceName, setNewCompetenceName] = useState('');
  const [newCompetenceDesc, setNewCompetenceDesc] = useState('');
  const [choixPredilection, setChoixPredilection] = useState({});

  const feeData = fairyData[character.typeFee];

  // 2. Gérer les compétences de prédilection
  const parsedPredilection = parseCompetencesFutilesPredilection(feeData?.competencesFutilesPredilection || []);

  useEffect(() => {
    if (character.competencesFutiles?.choixPredilection) {
      setChoixPredilection(character.competencesFutiles.choixPredilection);
    }
  }, [character.competencesFutiles]);

  // ✨ DRY ABSOLU : On lit la liste des prédilections depuis App.js !
  const competencesPredilection = character.computedStats?.futilesPredFinales || [];

  // Vérifier si tous les menus déroulants ont été répondus
  const allChoicesMade = parsedPredilection.every((item, index) => {
    if (item.isChoix) return choixPredilection[index] !== undefined;
    return true;
  });

  // Calcul des points
  const rangsInvestis = character.competencesFutiles?.rangs || {};
  const pointsDepenses = Object.values(rangsInvestis).reduce((sum, rangs) => sum + rangs, 0);
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  // Helper de limite (Utilise le score total calculé par App.js)
  const canAddRang = (nomComp) => {
    if (pointsRestants <= 0) return false;
    const scoreTotal = character.computedStats?.futilesTotal?.[nomComp] || 0;
    const isPredilection = competencesPredilection.includes(nomComp);
    const maxRangs = isPredilection ? 5 : 4;
    return scoreTotal < maxRangs;
  };

  // Handlers
  const handleChoixPredilectionChange = (index, value) => {
    const newChoix = { ...choixPredilection, [index]: value };
    setChoixPredilection(newChoix);
    onCompetencesFutilesChange({
      ...character.competencesFutiles,
      choixPredilection: newChoix
    });
  };

  const handlePrecisionChange = (nomComp, value) => {
    onCompetencesFutilesChange({
      ...character.competencesFutiles,
      precisions: {
        ...(character.competencesFutiles?.precisions || {}),
        [nomComp]: value
      }
    });
  };

  const handleRangChange = (nomComp, delta) => {
    const current = rangsInvestis[nomComp] || 0;
    const newValue = Math.max(0, current + delta);

    if (delta > 0 && !canAddRang(nomComp)) return;
    if (delta < 0 && current === 0) return;

    const newRangs = { ...rangsInvestis };
    if (newValue === 0) delete newRangs[nomComp];
    else newRangs[nomComp] = newValue;

    onCompetencesFutilesChange({
      ...character.competencesFutiles,
      rangs: newRangs,
      choixPredilection
    });
  };

  const handleAddCustomCompetence = async () => {
    if (!newCompetenceName.trim()) return;
    if (competencesFutilesBase.some(c => c.nom.toLowerCase() === newCompetenceName.trim().toLowerCase())) {
      alert('Cette compétence existe déjà !');
      return;
    }
    try {
      const newComp = await addCompetenceFutile(
        newCompetenceName.trim(),
        newCompetenceDesc.trim() || 'Compétence personnalisée'
      );
      if (newComp) {
        // ✨ Plus de requête redondante, on l'ajoute directement à la liste visuelle !
        setCompetencesFutilesBase(prev => {
          const newList = [...prev, newComp];
          return newList.sort((a, b) => a.nom.localeCompare(b.nom));
        });
        setNewCompetenceName('');
        setNewCompetenceDesc('');
      }
    } catch (error) {
      alert("Erreur lors de l'ajout : " + error.message);
    }
  };

  const handleReset = () => {
    if (window.confirm("Voulez-vous vraiment réinitialiser tous vos points investis et vos choix ?")) {
      setChoixPredilection({});
      onCompetencesFutilesChange({
        ...character.competencesFutiles,
        rangs: {},
        choixPredilection: {},
        precisions: {}
      });
    }
  };

  // Rendu d'une ligne de compétence
  const renderCompetence = (comp) => {
    const isPredilection = competencesPredilection.includes(comp.nom);
    const scoreTotal = character.computedStats?.futilesTotal?.[comp.nom] || 0;
    const rangsInvestisComp = rangsInvestis[comp.nom] || 0;
    const maxRangs = isPredilection ? 5 : 4;

    return (
      <div key={comp.nom} className={`p-3 rounded-lg border flex justify-between items-center transition-all ${
        isPredilection ? 'bg-purple-50 border-purple-200' :
        rangsInvestisComp > 0 ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-200'
      }`}>
        <div className="flex-1">
          <div className="font-bold text-gray-800 flex items-center gap-2">
            {comp.nom}
            {isPredilection && <Star size={14} className="text-purple-600 fill-purple-600"/>}
          </div>
          <div className="text-xs text-gray-500">{comp.description}</div>
        </div>
        <div className="flex items-center gap-3 bg-white px-2 py-1 rounded border border-gray-100 shadow-sm ml-2">
          <span className="font-serif font-bold text-lg w-8 text-center text-amber-900">
            {scoreTotal}<span className="text-gray-300 text-sm">/{maxRangs}</span>
          </span>
          <button
            onClick={() => handleRangChange(comp.nom, -1)}
            disabled={rangsInvestisComp === 0}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 disabled:opacity-30 transition-colors"
          >
            <Minus size={16}/>
          </button>
          <button
            onClick={() => handleRangChange(comp.nom, 1)}
            disabled={!canAddRang(comp.nom)}
            className="w-8 h-8 flex items-center justify-center rounded bg-amber-100 hover:bg-amber-200 text-amber-800 disabled:opacity-30 disabled:bg-gray-100 transition-colors"
          >
            <Plus size={16}/>
          </button>
        </div>
        
        {comp.nom.toLowerCase().includes('au choix') && (isPredilection || (rangsInvestis[comp.nom] > 0)) && (
          <div className="mt-3 pl-3 ml-1 border-l-2 border-amber-400 animate-fade-in w-full">
            <label className="block text-xs font-bold text-amber-800 mb-1">
              Précisez votre compétence (ex: Peinture, Danse, Sculpture...) :
            </label>
            <input
              type="text"
              value={character.competencesFutiles?.precisions?.[comp.nom] || ''}
              onChange={(e) => handlePrecisionChange(comp.nom, e.target.value)}
              placeholder="Écrivez votre art..."
              className="w-full p-2 text-sm border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none bg-amber-50/30"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* En-tête Sticky */}
      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex flex-col md:flex-row justify-between items-center sticky top-20 z-20 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-amber-900 font-serif flex items-center gap-2">
            <Sparkles className="text-amber-600"/> Compétences Futiles
          </h2>
          <p className="text-sm text-amber-700">Loisirs, arts et passions (Max 4, ou 5 si prédilection)</p>
        </div>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors text-sm font-bold border border-red-200"
            title="Réinitialiser les dépenses et les choix"
          >
            <RotateCcw size={16} />
            <span className="hidden sm:inline">Réinitialiser</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-amber-800 font-bold uppercase tracking-wider">Points restants:</span>
            <div className={`text-2xl font-bold font-serif w-12 h-12 flex items-center justify-center rounded-full border-2 ${
              pointsRestants === 0 ? 'bg-green-100 text-green-700 border-green-300' :
              pointsRestants < 0 ? 'bg-red-100 text-red-700 border-red-300' :
              'bg-white text-amber-600 border-amber-300'
            }`}>
              {pointsRestants}
            </div>
          </div>
        </div>
      </div>

      {/* 1. Sélection des Prédilections (Si choix requis) */}
      {parsedPredilection.some(item => item.isChoix) && (
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
          <h3 className="font-serif text-lg text-purple-900 mb-4 flex items-center gap-2">
            <AlertCircle size={20}/> Héritage Féérique : Choix requis
          </h3>
          <div className="space-y-4">
            {parsedPredilection.map((item, index) => {
              if (!item.isChoix) return null;
              return (
                <div key={index} className="space-y-2">
                  <label className="block text-sm font-bold text-purple-800">
                    Prédilection au choix {index + 1} :
                  </label>
                  <select
                    value={choixPredilection[index] || ''}
                    onChange={(e) => handleChoixPredilectionChange(index, e.target.value)}
                    className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none font-serif bg-white"
                  >
                    <option value="">-- Sélectionner une compétence --</option>
                    {item.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Liste des Prédilections Actives */}
      {allChoicesMade && competencesPredilection.length > 0 && (
        <div>
          <h3 className="font-serif text-lg text-amber-800 mb-4 border-b border-amber-200 pb-2">
            Vos Compétences de Prédilection (Base 2 gratuite)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {competencesPredilection.map(nomComp => {
              const comp = competencesFutilesBase.find(c => c.nom === nomComp) || { nom: nomComp, description: "Compétence spécifique" };
              return renderCompetence(comp);
            })}
          </div>
        </div>
      )}

        {/* 3. Liste Complète des Compétences Disponibles */}
        {allChoicesMade ? (
          <>
            <div className="mt-8">
              <h3 className="font-serif text-lg text-amber-800 mb-4 border-b border-amber-200 pb-2 flex justify-between items-end">
                <span>Compétences Disponibles</span>
                <span className="text-xs font-sans text-gray-400 font-normal">Classées par ordre alphabétique</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {competencesFutilesBase
                  .filter(comp => !competencesPredilection.includes(comp.nom))
                  /* ✨ Sécurité anti-crash iOS avec (comp.nom || '') */
                  .filter(comp => !(comp.nom || '').toLowerCase().includes('au choix'))
                  .map(renderCompetence)}
              </div>
            </div>

          {/* 4. Création Custom */}
          <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-serif text-lg text-gray-700 mb-4 flex items-center gap-2">
              <PlusCircle size={20}/> Créer une compétence sur mesure
            </h3>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                value={newCompetenceName}
                onChange={(e) => setNewCompetenceName(e.target.value)}
                placeholder="Nom (ex: Collection de timbres)"
                className="flex-1 p-3 border rounded-lg"
              />
              <input
                type="text"
                value={newCompetenceDesc}
                onChange={(e) => setNewCompetenceDesc(e.target.value)}
                placeholder="Description courte"
                className="flex-1 p-3 border rounded-lg"
              />
              <button
                onClick={handleAddCustomCompetence}
                disabled={!newCompetenceName.trim()}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 font-bold"
              >
                Ajouter
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          Veuillez faire vos choix de prédilection ci-dessus pour débloquer la suite.
        </div>
      )}

      {/* Validation Finale */}
      {pointsRestants === 0 && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center font-bold border border-green-200 animate-pulse">
          ✓ Tous les points ont été répartis ! Vous pouvez passer à l'étape suivante.
        </div>
      )}
    </div>
  );
}