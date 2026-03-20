// src/components/StepCompetencesFutiles.js
// 8.23.0 // 8.31.0 // 8.32.0
// 9.11.0
// 10.4.0 // 10.6.0 // 10.9.0
// 11.1.0
// 14.4.0 // 14.5.0

import React, { useState, useEffect } from 'react';
import { Plus, Minus, Star, Sparkles, PlusCircle, AlertCircle, RotateCcw } from 'lucide-react';
import { getCompetencesFutiles, addCompetenceFutile, invalidateCompetencesFutilesCache } from '../utils/supabaseGameData';
import { parseCompetencesFutilesPredilection } from '../data/DictionnaireJeu';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { getFutileCost } from '../utils/xpCalculator'; 

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

  // ✨ NOUVEAU : Variables du Puits des Âmes et du Plancher de Verre
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const xpTotal = character.xp_total || 0;
  const xpDepense = character.xp_depense || 0;
  const xpDispo = xpTotal - xpDepense;
  
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
    // ✨ FIX : Blindage absolu contre le changement de vocation
    if (isReadOnly || isScelle) return;

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
    if (isReadOnly) return;

    const current = rangsInvestis[nomComp] || 0;
    const scoreTotal = character.computedStats?.futilesTotal?.[nomComp] || 0;
    const isPred = competencesPredilection.includes(nomComp);
    const evolutionMax = isPred ? 7 : 6;
    const maxAllowed = isScelle ? evolutionMax : (isPred ? 5 : 4);

    // 🛡️ MODE ÉVOLUTION (SCELLÉ)
    if (isScelle) {
      const plancher = character.data?.stats_scellees?.competencesFutiles?.rangs?.[nomComp] || 0;

      if (delta > 0) {
        if (scoreTotal >= evolutionMax) {
          showInAppNotification(`Excellence maximale atteinte (${evolutionMax}).`, "warning");
          return;
        }
        
        const costXP = getFutileCost(scoreTotal);

        if (xpDispo < costXP) {
          showInAppNotification(`Il vous faut ${costXP} XP pour atteindre ce rang.`, "error");
          return;
        }

        const newRangs = { ...rangsInvestis, [nomComp]: current + 1 };
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: {
            competencesFutiles: { ...character.competencesFutiles, rangs: newRangs },
            xp_depense: xpDepense + costXP
          },
          gameData
        });
        showInAppNotification(`Passion perfectionnée pour ${costXP} XP !`, "success");
        
      } else if (delta < 0) {
        if (current <= plancher) {
          showInAppNotification("Savoir originel scellé ! Impossible d'oublier ce loisir.", "warning");
          return;
        }
        
        const refundXP = getFutileCost(scoreTotal - 1);
        const newRangs = { ...rangsInvestis };
        
        if (current - 1 === 0) delete newRangs[nomComp];
        else newRangs[nomComp] = current - 1;

        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: {
            competencesFutiles: { ...character.competencesFutiles, rangs: newRangs },
            xp_depense: xpDepense - refundXP
          },
          gameData
        });
        showInAppNotification(`Dépense annulée. +${refundXP} XP récupérés.`, "info");
      }
      return;
    }

    // 🎨 MODE CRÉATION (Standard)
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
      showInAppNotification("Cette compétence existe déjà !", "warning");
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
      showInAppNotification("Erreur lors de l'ajout : " + error.message, "error");
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
    // 1. On lit l'état actuel de la compétence
    const isPredilection = competencesPredilection.includes(comp.nom);
    const scoreTotal = character.computedStats?.futilesTotal?.[comp.nom] || 0;
    const rangsInvestisComp = rangsInvestis[comp.nom] || 0;
    
    // ✨ FIX : 2. On calcule les limites (Création vs Évolution/Scellé)
    const evolutionMax = isPredilection ? 7 : 6;
    const maxAllowed = isScelle ? evolutionMax : (isPredilection ? 5 : 4);
    const plancher = character.data?.stats_scellees?.competencesFutiles?.rangs?.[comp.nom] || 0;
    
    // 3. On détermine si le bouton "Moins" doit être bloqué
    const isMinusDisabled = isScelle ? (rangsInvestisComp <= plancher) : (rangsInvestisComp <= 0);

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
          
          {/* ✨ PETIT BONUS : J'ai remplacé maxRangs par maxAllowed ici pour que l'affichage de la fraction (ex: 2/7) soit dynamique en XP ! */}
          <span className="font-serif font-bold text-lg w-8 text-center text-amber-900">
            {scoreTotal}<span className="text-gray-300 text-sm">/{maxAllowed}</span>
          </span>

          <button
            onClick={() => handleRangChange(comp.nom, -1)}
            // ✨ FIX : On applique notre fameux Plancher de Verre
            disabled={isMinusDisabled}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 disabled:opacity-30 transition-colors"
          >
            <Minus size={16}/>
          </button>

          <button
            onClick={() => handleRangChange(comp.nom, 1)}
            // ✨ FIX : L'hybride parfait !
            disabled={isScelle ? (scoreTotal >= maxAllowed) : (!canAddRang(comp.nom))}
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
          {isScelle ? (
            <p className="text-sm text-amber-700">Perfectionnez vos loisirs et passions (1 XP par rang visé).</p>
          ) : (
            <p className="text-sm text-amber-700">Loisirs, arts et passions (Max 4, ou 5 si prédilection)</p>
          )}
        </div>

        {/* ✨ On cache les points et le bouton Reset en mode Évolution */}
        {!isScelle && (
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <div className="text-right">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Points Restants</div>
              <div className={`text-2xl font-black font-serif ${pointsRestants === 0 ? 'text-amber-500' : pointsRestants < 0 ? 'text-red-600' : 'text-amber-700'}`}>
                {pointsRestants}
              </div>
            </div>
            <button onClick={handleReset} className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200" title="Réinitialiser">
              <RotateCcw size={20} />
            </button>
          </div>
        )}
      </div>
	  
      {/* 1. Sélection des Prédilections (Si choix requis) */}
      {/* ✨ FIX : On masque totalement la boîte de choix une fois le personnage scellé ! */}
      {!isScelle && parsedPredilection.some(item => item.isChoix) && (
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 mb-6">
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
              // ✨ FIX : Le Tri Magnétique ! 
              // Remonte les compétences investies en haut, triées par score puis par ordre alphabétique.
              .sort((a, b) => {
                // On récupère le score total (avec la sécurité habituelle au cas où la valeur est vide)
                const scoreA = character.computedStats?.futilesTotal?.[a.nom] || 0;
                const scoreB = character.computedStats?.futilesTotal?.[b.nom] || 0;
                
                // Règle 1 : Trier par score décroissant (les scores > 0 montent)
                if (scoreB !== scoreA) {
                  return scoreB - scoreA;
                }
                
                // Règle 2 : En cas d'égalité de score (ex: les deux à 0), on trie par alphabet
                return (a.nom || '').localeCompare(b.nom || '');
              })
              
              .map(renderCompetence)}
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