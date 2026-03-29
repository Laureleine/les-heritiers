// 10.4.0 // 10.6.0 // 10.8.0 // 10.9.0
// 11.1.0 // 12.5.0
// 13.1.0 // 13.10.0 // 13.11.0
// 14.2.0 // 14.9.0 // 14.10.0
// Optimisé

import React, { useState, useMemo } from 'react';
import { Star, Info, Check, Sparkles, AlertCircle, Plus, Minus } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { getFeerieCost, getCaracCost, FIXED_XP_COSTS } from '../utils/xpCalculator';

// 🧠 LES CONSTANTES CENTRALISÉES
const MAX_ATOUTS_GLOBAL = 2;

// ============================================================================
// --- ÉTAPE 2 : CAPACITÉS ---
// ============================================================================

export function Step2() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;
  const data = fairyData[character.typeFee];

  // 🛡️ LE PLANCHER DE VERRE
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';

  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les capacités pour {character.typeFee} n'ont pas encore été définies.
        </p>
      </div>
    );
  }

  const handleCapaciteChoice = (c) => {
    if (isReadOnly) return;
    if (isScelle) {
      showInAppNotification("Votre Capacité a été scellée à la création. Impossible d'en changer !", "warning");
      return;
    }
    dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: c, gameData });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Capacités Naturelles</h3>
          <p className="text-sm text-amber-800">
            Voici les capacités inhérentes à votre nature. Vous devez choisir une 3ème capacité spécifique.
            {isScelle && " (Choix scellé)"}
          </p>
        </div>
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacités Innées (Acquises)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[data.capacites?.fixe1, data.capacites?.fixe2].filter(c => c && c.nom && c.nom !== 'Inconnu').map((cap, idx) => (
          <div key={`fixe-${idx}`} className="p-4 rounded-xl border-2 border-amber-200 bg-amber-100/50">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold font-serif text-amber-900 flex items-center gap-2">
                <Check size={16} className="text-amber-600" />
                {cap.nom}
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/50 text-amber-800 uppercase">
                Fixe
              </span>
            </div>
            <p className="text-sm text-amber-800 text-left mt-2 leading-relaxed">
              {cap.description || "Aucune description."}
            </p>
          </div>
        ))}
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacité Optionnelle (À choisir)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.capacites?.choix?.map((cap, idx) => {
          const isSelected = character.capaciteChoisie === cap.nom;
          // Si le personnage est scellé, les options non choisies sont grisées
          const isDisabled = (isReadOnly || isScelle) && !isSelected;

          return (
            <div key={idx} className="flex flex-col gap-2">
              <button
                disabled={isReadOnly || isScelle}
                onClick={() => handleCapaciteChoice(cap.nom)}
                className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-200 ring-offset-2'
                    : isDisabled
                    ? 'border-stone-200 bg-stone-50 opacity-50 cursor-not-allowed'
                    : 'border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className={`font-bold font-serif flex items-center gap-2 ${isSelected ? 'text-amber-900' : 'text-gray-800'}`}>
                    {isSelected && <Check size={16} className="text-amber-600" />}
                    {cap.nom}
                  </div>
                  {isSelected && isScelle && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">
                      🔒 Inné
                    </span>
                  )}
                </div>
                <p className={`text-sm text-left mt-2 leading-relaxed ${isSelected ? 'text-amber-800' : 'text-gray-600'}`}>
                  {cap.description || "Aucune description."}
                </p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// --- ÉTAPE 3 : POUVOIRS ---
// ============================================================================

export function Step3() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const [showAnomalie, setShowAnomalie] = useState(false);

  // 🛡️ LE PLANCHER DE VERRE ET LES VARIABLES XP
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const innatePouvoirs = character.data?.stats_scellees?.pouvoirs || [];
  
  const baseFeerie = character.data?.stats_scellees?.caracteristiques?.feerie || 3;
  const baseMasque = character.data?.stats_scellees?.caracteristiques?.masque || 4;

  const currentFeerie = character.caracteristiques?.feerie || 3;
  const currentMasque = character.caracteristiques?.masque || 4;

  const xpTotal = character.xp_total || 0;
  const xpDepense = character.xp_depense || 0;
  const xpDispo = xpTotal - xpDepense;

  // Limites et compteurs
  const maxPouvoirs = currentFeerie;
  const countSelected = character.pouvoirs?.length || 0;
  const countAtouts = character.atouts?.length || 0;

  const anomalieAtout = data?.atouts?.find(a => a.nom === 'Anomalie féérique');
  const anomalieId = anomalieAtout ? anomalieAtout.id : 'Anomalie féérique';
  const hasAnomalie = character.atouts?.includes(anomalieId) || character.atouts?.includes('Anomalie féérique');

  const handleUpgradeStat = (stat) => {
    if (isReadOnly || !isScelle) return;
    const currentRank = stat === 'feerie' ? currentFeerie : currentMasque;
    const maxLimit = stat === 'feerie' ? 8 : 10;

    if (currentRank >= maxLimit) {
      showInAppNotification(`Votre ${stat === 'feerie' ? 'Féérie' : 'Masque'} a atteint le sommet de la puissance féérique !`, "warning");
      return;
    }

    const cost = stat === 'feerie' ? getFeerieCost(currentRank) : getCaracCost(currentRank);

    if (xpDispo < cost) {
      showInAppNotification(`Il vous faut ${cost} XP pour augmenter cette caractéristique !`, "error");
      return;
    }

    const newCaracs = { ...(character.caracteristiques || {}), [stat]: currentRank + 1 };
    const newTricherie = Math.floor((newCaracs.feerie + newCaracs.masque) / 2);

    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: {
        caracteristiques: newCaracs,
        tricherie: newTricherie,
        xp_depense: xpDepense + cost
      },
      gameData
    });
    showInAppNotification(`${stat === 'feerie' ? 'Féérie' : 'Masque'} augmenté(e) à ${currentRank + 1} pour ${cost} XP !`, "success");
  };

  const handleDowngradeStat = (stat) => {
    if (isReadOnly || !isScelle) return; // 🔒 FIX DU SIÈCLE
    const currentRank = stat === 'feerie' ? currentFeerie : currentMasque;
    const baseRank = stat === 'feerie' ? baseFeerie : baseMasque;

    if (currentRank <= baseRank) {
      showInAppNotification("Le Sceau Originel (Plancher de Verre) protège vos caractéristiques de naissance !", "warning");
      return;
    }

    if (stat === 'feerie' && countSelected > currentRank - 1) {
      showInAppNotification("Vous devez d'abord désapprendre un pouvoir avant de pouvoir réduire votre Féérie !", "error");
      return;
    }

    const refund = stat === 'feerie' ? getFeerieCost(currentRank - 1) : getCaracCost(currentRank - 1);
    const newCaracs = { ...(character.caracteristiques || {}), [stat]: currentRank - 1 };
    const newTricherie = Math.floor((newCaracs.feerie + newCaracs.masque) / 2);

    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: {
        caracteristiques: newCaracs,
        tricherie: newTricherie,
        xp_depense: Math.max(0, xpDepense - refund)
      },
      gameData
    });
    showInAppNotification(`Niveau annulé : +${refund} XP récupérés !`, "success");
  };

  const exteriorPowers = useMemo(() => {
    if (!fairyData || !character.typeFee) return [];
    const others = [];
    const myFairyPowers = fairyData[character.typeFee]?.pouvoirs?.map(p => p.nom) || [];

    Object.keys(fairyData).forEach(fName => {
      if (fName !== character.typeFee) {
        const fData = fairyData[fName];
        if (fData && fData.pouvoirs) {
          fData.pouvoirs.forEach(p => {
            const isStandard = p.type_pouvoir === 'masque' || p.type_pouvoir === 'demasque';
            if (isStandard && !myFairyPowers.includes(p.nom) && !others.some(ex => ex.nom === p.nom)) {
              others.push({ ...p, origine: fName });
            }
          });
        }
      }
    });
    return others.sort((a, b) => a.nom.localeCompare(b.nom));
  }, [fairyData, character.typeFee]);

  const selectedExterior = character.pouvoirs?.find(pNom => exteriorPowers.some(ep => ep.nom === pNom));

  const handlePouvoirToggle = (pouvoir) => {
    if (isReadOnly) return;
    const isSelected = character.pouvoirs?.includes(pouvoir);

    if (isScelle && isSelected && innatePouvoirs.includes(pouvoir)) {
      showInAppNotification("Ce Pouvoir fait partie du Sceau originel de votre Héritier. Impossible de l'oublier !", "warning");
      return;
    }

    dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'pouvoirs', value: pouvoir, max: maxPouvoirs, gameData });
  };

  // ✨ LE MOTEUR RÉPARÉ DE L'ANOMALIE
  const handleAnomalieToggle = (pouvoirNom) => {
    if (isReadOnly) return;

    const isSelected = selectedExterior === pouvoirNom;

    if (isScelle && isSelected && innatePouvoirs.includes(pouvoirNom)) {
      showInAppNotification("Cette Anomalie fait partie de votre Sceau originel. Impossible de la purger !", "warning");
      return;
    }

    let newPouvoirs = character.pouvoirs ? [...character.pouvoirs] : [];
    let newAtouts = character.atouts ? [...character.atouts] : [];
    let newXpDepense = xpDepense; // 💰 On trace la dépense

    if (isSelected) {
      // ♻️ PURGE ET REVENTE
      newPouvoirs = newPouvoirs.filter(p => p !== pouvoirNom);
      newAtouts = newAtouts.filter(a => a !== anomalieId && a !== 'Anomalie féérique');

      // Remboursement XP de l'atout si on est Scellé (et que ce n'est pas un atout inné)
      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isAtoutInnate = innateAtouts.includes(anomalieId) || innateAtouts.includes('Anomalie féérique');

      if (isScelle && !isAtoutInnate) {
        newXpDepense = Math.max(0, xpDepense - FIXED_XP_COSTS.nouvel_atout);
        showInAppNotification(`Anomalie purgée : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, "success");
      }
    } else {
      // 🛒 SÉLECTION ET ACHAT
      if (selectedExterior) {
        // Changement de pouvoir extérieur (gratuit car l'Atout est déjà possédé)
        newPouvoirs = newPouvoirs.filter(p => p !== selectedExterior);
      } else {
        if (newPouvoirs.length >= maxPouvoirs) {
          showInAppNotification("Vous avez atteint votre limite de pouvoirs maîtrisés.", "error");
          return;
        }
        
        // C'est une NOUVELLE anomalie
        if (!hasAnomalie) {
          if (isScelle) {
            // 🌟 COMPORTEMENT ÉVOLUTION : On vérifie les finances
            if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
              showInAppNotification(`L'Anomalie consomme un emplacement d'Atout. Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP !`, "error");
              return;
            }
            newXpDepense = xpDepense + FIXED_XP_COSTS.nouvel_atout.nouvel_atoutCOST;
            showInAppNotification(`Anomalie activée pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
          } else {
            // 🌟 COMPORTEMENT CRÉATION : On vérifie la limite de 2
            if (countAtouts >= MAX_ATOUTS_GLOBAL) {
              showInAppNotification(`Vous avez déjà ${MAX_ATOUTS_GLOBAL} Atouts.`, "error");
              return;
            }
          }
        }
      }
      
      newPouvoirs.push(pouvoirNom);
      if (!newAtouts.includes(anomalieId)) newAtouts.push(anomalieId);
      setShowAnomalie(false);
    }

    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { pouvoirs: newPouvoirs, atouts: newAtouts, xp_depense: newXpDepense },
      gameData
    });
  };

  // ✨ FIX : LE FILTRE INTELLIGENT (Les Sceaux des Légendes)
  const getAvailablePowers = () => {
    if (!data?.pouvoirs) return [];
    
    return data.pouvoirs.filter(p => {
      // Sécurité : on s'assure de lire le type officiel de la base de données
      const type = p.type_pouvoir || '';
      
      // Les Pouvoirs Profonds s'éveillent à 7 de Féérie
      if (type.includes('profond')) {
        return currentFeerie >= 7;
      }
      
      // Les Pouvoirs Légendaires s'éveillent à 8 de Féérie
      if (type.includes('legendaire') || type.includes('légendaire')) {
        return currentFeerie >= 8;
      }
      
      // Les pouvoirs standards ('masque' ou 'demasque') sont toujours là
      return type === 'masque' || type === 'demasque';
    });
  };

  // On stocke le résultat dans une variable prête à être affichée
  const availablePowers = getAvailablePowers();
  
  if (!data) return null;

  return (
    <div className="space-y-8 animate-fade-in">
      
	  {/* FÉÉRIE & MASQUE */}
	  <div className="bg-indigo-50 border border-indigo-200 p-4 md:p-5 rounded-xl shadow-sm">
		<h3 className="font-serif font-bold text-indigo-900 mb-4 flex items-center gap-2 text-lg">
		  <Star className="text-indigo-600" size={22} />
		  Attributs Féériques
		</h3>

		<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
		  
		  {/* --- 1. CARTE FÉÉRIE --- */}
		  <div className="bg-white p-3 rounded-lg border border-indigo-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 shadow-sm">
			<div className="flex items-baseline gap-2">
			  <span className="font-bold text-indigo-900 text-lg">Féérie</span>
			  <span className="text-xs text-indigo-500 font-medium">— Gouverne vos Pouvoirs</span>
			</div>
			
			<div className="flex items-center gap-3 self-end sm:self-auto">
			  {/* BOUTON MOINS FÉÉRIE */}
			  {!isReadOnly && isScelle && currentFeerie > baseFeerie && (
				<button onClick={() => handleDowngradeStat('feerie')} className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors" title={`Récupérer ${getFeerieCost(currentFeerie - 1)} XP`}>
				  <Minus size={18} />
				</button>
			  )}

			  <span className="text-2xl font-serif font-bold text-indigo-900 w-8 text-center">{currentFeerie}</span>

			  {/* BOUTON PLUS FÉÉRIE */}
			  {!isReadOnly && isScelle && currentFeerie < 8 && (
				<button onClick={() => handleUpgradeStat('feerie')} className="p-1 text-emerald-600 hover:bg-emerald-50 rounded flex flex-col items-center transition-colors" title={`Coûte ${getFeerieCost(currentFeerie)} XP`}>
				  <Plus size={18} />
				  <span className="text-[9px] font-bold mt-0.5">{getFeerieCost(currentFeerie)} XP</span>
				</button>
			  )}
			</div>
		  </div>

		  {/* --- 2. CARTE MASQUE --- */}
		  <div className="bg-white p-3 rounded-lg border border-indigo-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 shadow-sm">
			<div className="flex items-baseline gap-2">
			  <span className="font-bold text-indigo-900 text-lg">Masque</span>
			  <span className="text-xs text-indigo-500 font-medium">— Illusion & dissimulation</span>
			</div>
			
			<div className="flex items-center gap-3 self-end sm:self-auto">
			  {/* BOUTON MOINS MASQUE */}
			  {!isReadOnly && isScelle && currentMasque > baseMasque && (
				<button onClick={() => handleDowngradeStat('masque')} className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors" title={`Récupérer ${getCaracCost(currentMasque - 1)} XP`}>
				  <Minus size={18} />
				</button>
			  )}

			  <span className="text-2xl font-serif font-bold text-indigo-900 w-8 text-center">{currentMasque}</span>

			  {/* BOUTON PLUS MASQUE */}
			  {!isReadOnly && isScelle && currentMasque < 10 && (
				<button onClick={() => handleUpgradeStat('masque')} className="p-1 text-emerald-600 hover:bg-emerald-50 rounded flex flex-col items-center transition-colors" title={`Coûte ${getCaracCost(currentMasque)} XP`}>
				  <Plus size={18} />
				  <span className="text-[9px] font-bold mt-0.5">{getCaracCost(currentMasque)} XP</span>
				</button>
			  )}
			</div>
		  </div>
		</div>

		{isScelle && (
		  <p className="text-xs text-indigo-800 mt-4 italic text-center">
			Améliorer vos Attributs Féériques consomme de l'Expérience. Augmenter la Féérie débloquera immédiatement un nouvel emplacement de Pouvoir.
		  </p>
		)}
	  </div>
      {/* POUVOIRS */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Héritage Féérique</h3>
          <p className="text-sm text-amber-800">
            Votre niveau de Féérie (<strong>{maxPouvoirs}</strong>) détermine le nombre de pouvoirs que vous pouvez maîtriser. Vous pouvez choisir parmi les Pouvoirs Masqués et Démasqués.
          </p>
          <div className={`mt-3 inline-block px-3 py-1 bg-white rounded-full border text-sm font-bold ${countSelected > maxPouvoirs ? 'border-red-400 text-red-700 animate-pulse' : 'border-amber-200 text-amber-700'}`}>
            Sélectionnés : {countSelected} / {maxPouvoirs}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {availablePowers.map((pouvoir, idx) => {
          const isSelected = character.pouvoirs?.includes(pouvoir.nom);
          const isDisabled = isReadOnly || (!isSelected && countSelected >= maxPouvoirs);
          const isInnate = isScelle && innatePouvoirs.includes(pouvoir.nom);

          return (
            <div
              key={idx}
              onClick={() => !isDisabled && handlePouvoirToggle(pouvoir.nom)}
              disabled={isReadOnly}
              className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden cursor-pointer ${
                isSelected ? 'border-indigo-600 bg-indigo-50 shadow-md ring-2 ring-indigo-400' :
                isDisabled ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' :
                'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold font-serif text-gray-800 flex items-center gap-2">
                  {isSelected && <Check size={16} className="text-indigo-600" />}
                  {pouvoir.nom}
                </div>
                <div className="flex items-center gap-2">
                  {isInnate && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création (Plancher de Verre)">
                      🔒 Inné
                    </span>
                  )}
                {(() => {
                  const typeStr = pouvoir.type_pouvoir?.toLowerCase() || '';
                  const isDemasque = typeStr.includes('demasque');
                  const isMasque = !isDemasque;
                  
                  // ✨ FIX : Détection des Sceaux de Puissance
                  const isProfond = typeStr.includes('profond');
                  const isLegendaire = typeStr.includes('legendaire') || typeStr.includes('légendaire');

                  // On compose le texte de l'étiquette
                  let label = isProfond ? '🔮 Profond' : isLegendaire ? '👑 Légendaire' : (isMasque ? '🎭 Masqué' : '🔥 Démasqué');
                  if (isProfond || isLegendaire) {
                    label += isMasque ? ' (🎭 Masqué)' : ' (🔥 Démasqué)';
                  }

                  // On garde tes belles couleurs (Violet pour Masqué, Rose pour Démasqué)
                  const colorClass = isMasque 
                    ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                    : 'bg-rose-100 text-rose-700 border border-rose-200';

                  return (
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm ${colorClass}`}>
                      {label}
                    </span>
                  );
                })()}
                </div>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed mt-2">
                {pouvoir.description || "Aucune description."}
              </div>
            </div>
          );
        })}
      </div>

      {/* ANOMALIE FÉÉRIQUE */}
      <div className="mt-8 border-t-2 border-dashed border-amber-200 pt-6">
        <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
                <Sparkles size={20} className="text-fuchsia-600" />
                Anomalie Féérique
              </h4>
              <p className="text-sm text-fuchsia-800 mt-1">
                Permet d'assimiler un pouvoir appartenant à une autre espèce. <br/>
                <span className="font-bold text-fuchsia-900">(Coûte 1 emplacement d'Atout)</span>
              </p>
            </div>

            {(() => {
              const isAnomalieInnate = isScelle && innatePouvoirs.includes(selectedExterior);
              
              if (selectedExterior) {
                return (
                  <button
                    onClick={() => handleAnomalieToggle(selectedExterior)}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors border shrink-0 ${isAnomalieInnate ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed' : 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200'}`}
                  >
                    {isAnomalieInnate ? '🔒 Purge Impossible' : 'Purger l\'Anomalie'}
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={() => setShowAnomalie(!showAnomalie)}
                    // ✨ FIX : En mode XP, on ne bloque plus sur le nombre d'atouts !
                    disabled={countSelected >= maxPouvoirs || (!isScelle && !hasAnomalie && countAtouts >= MAX_ATOUTS_GLOBAL)}
                    className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
                  >
                    {showAnomalie ? 'Refermer le catalogue' : 'Déclencher l\'Anomalie'}
                  </button>
                );
              }
            })()}
          </div>

          {!selectedExterior && !hasAnomalie && !isScelle && countAtouts >= MAX_ATOUTS_GLOBAL && (
            <div className="text-xs text-red-600 font-bold mt-3 bg-red-50 p-2 rounded border border-red-100 animate-fade-in">
              Vous avez déjà sélectionné tous vos Atouts ({MAX_ATOUTS_GLOBAL}/{MAX_ATOUTS_GLOBAL}) à l'étape suivante. Libérez de la place pour pouvoir déclencher cette anomalie !
            </div>
          )}

          {/* ✨ FIX : Message indicatif pour le joueur en mode Évolution */}
          {!selectedExterior && !hasAnomalie && isScelle && (
            <div className="text-xs text-fuchsia-800 font-bold mt-3 bg-fuchsia-50 p-2 rounded border border-fuchsia-200 animate-fade-in">
              🪄 L'activation de l'Anomalie consommera un nouvel emplacement d'Atout et coûtera {FIXED_XP_COSTS.nouvel_atout} XP.
            </div>
          )}

          {selectedExterior && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3 animate-fade-in">
              <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20}/></div>
              <div>
                <div className="font-bold text-fuchsia-900 text-lg flex items-center gap-2">
                  {selectedExterior}
                  {isScelle && innatePouvoirs.includes(selectedExterior) && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">🔒 Inné</span>
                  )}
                </div>
                <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé par Anomalie</div>
                <div className="text-sm text-stone-600 leading-relaxed">
                  {exteriorPowers.find(p => p.nom === selectedExterior)?.description}
                </div>
              </div>
            </div>
          )}

          {showAnomalie && !selectedExterior && (
            <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar bg-white/60 rounded-xl border border-fuchsia-200 p-2 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-inner animate-fade-in-up">
              {exteriorPowers.map((pow, idx) => (
                <div
                  key={idx}
                  onClick={() => handleAnomalieToggle(pow.nom)}
                  className="p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-fuchsia-400 hover:shadow-md transition-all"
                >
                  <div className="font-bold font-serif text-gray-800">{pow.nom}</div>
                  <div className="text-[10px] uppercase font-bold text-fuchsia-600 mt-1 mb-1 bg-fuchsia-50 inline-block px-2 py-0.5 rounded">
                    Origine : {pow.origine}
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {pow.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// --- ÉTAPE 4 : ATOUTS --- (Garder ton code actuel pour StepAtouts ci-dessous !)
// ============================================================================

export function StepAtouts() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const countSelected = character.atouts?.length || 0;
  
  // Variables XP
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const xpTotal = character.xp_total || 0;
  const xpDepense = character.xp_depense || 0;
  const xpDispo = xpTotal - xpDepense;

  const handleAtoutToggle = (atout) => {
    if (isReadOnly) return; // 🔒 FIX
    const isSelectedByName = character.atouts?.includes(atout.nom);
    const isSelectedById = character.atouts?.includes(atout.id);
    const isCurrentlySelected = isSelectedByName || isSelectedById;
    
    const valueToToggle = isSelectedById ? atout.id : atout.nom;

    // 🌟 COMPORTEMENT EN MODE ÉVOLUTION (XP)
    if (isScelle) {
      // 🛡️ LE PLANCHER DE VERRE (Lecture depuis le 'data' de Supabase)
      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isInnate = innateAtouts.includes(atout.nom) || innateAtouts.includes(atout.id);

      if (isCurrentlySelected) {
        if (isInnate) {
          showInAppNotification("Cet Atout fait partie du Sceau originel de votre Héritier. Impossible de l'oublier !", "warning");
          return;
        }
        
        // ✨ REVENTE DIRECTE ET INSTANTANÉE
        const newAtouts = character.atouts.filter(a => a !== valueToToggle);
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: {
            atouts: newAtouts,
            xp_depense: Math.max(0, xpDepense - FIXED_XP_COSTS.nouvel_atout)
          },
          gameData
        });
        showInAppNotification(`Atout désappris : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, "success");
        return;
      } else {
        // ✨ ACHAT DIRECT ET INSTANTANÉ
        if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
          showInAppNotification(`Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP pour débloquer cet Atout !`, "error");
          return;
        }
        const newAtouts = [...(character.atouts || []), atout.nom];
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: {
            atouts: newAtouts,
            xp_depense: xpDepense + FIXED_XP_COSTS.nouvel_atout
          },
          gameData
        });
        showInAppNotification(`L'Atout "${atout.nom}" a été acquis pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
        return;
      }
    }

    // 🌟 COMPORTEMENT NORMAL (CRÉATION)
    if (!isReadOnly) {
      dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atouts', value: valueToToggle, max: MAX_ATOUTS_GLOBAL, gameData });
    }
  };

  if (!data || !data.atouts) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Atouts Féériques</h3>
          {isScelle ? (
            <p className="text-sm text-amber-800">
              Dépensez votre Expérience ({FIXED_XP_COSTS.nouvel_atout} XP) pour acquérir de nouveaux Atouts. Vous pouvez librement cliquer sur un Atout acquis pour le désapprendre et récupérer vos points.
            </p>
          ) : (
            <p className="text-sm text-amber-800">
              Votre nature vous octroie des avantages particuliers. Choisissez {MAX_ATOUTS_GLOBAL} atouts parmi la liste ci-dessous.
            </p>
          )}
          {!isScelle && (
            <div className="mt-3 inline-block px-3 py-1 bg-white rounded-full border border-amber-200 text-sm font-bold text-amber-700">
              Sélectionnés : {countSelected} / {MAX_ATOUTS_GLOBAL}
            </div>
          )}
        </div>
      </div>

      {/* LA GRILLE DES ATOUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.atouts.map((atout, idx) => {
          const isSelected = character.atouts?.includes(atout.nom) || character.atouts?.includes(atout.id);
          const isDisabled = isReadOnly || (!isScelle && !isSelected && countSelected >= MAX_ATOUTS_GLOBAL);
          const isAnomalie = atout.nom === 'Anomalie féérique';
          
          // 🛡️ Détection visuelle du Plancher de Verre
          const innateAtouts = character.data?.stats_scellees?.atouts || [];
          const isInnate = isScelle && (innateAtouts.includes(atout.nom) || innateAtouts.includes(atout.id));

          return (
            <div
              key={idx}
              onClick={() => {
                if (isAnomalie) {
                  showInAppNotification("🪄 Le pouvoir lié à l'Anomalie doit être modifié ou retiré depuis l'Étape 3 (Pouvoirs).", "warning");
                  return;
                }
                if (!isDisabled) handleAtoutToggle(atout);
              }}
              className={`relative p-4 rounded-xl border-2 text-left transition-all overflow-hidden ${
                isSelected
                  ? (isAnomalie ? 'border-fuchsia-600 bg-fuchsia-50 shadow-md ring-2 ring-fuchsia-400 cursor-pointer' : 'border-indigo-600 bg-indigo-50 shadow-md ring-2 ring-indigo-400 cursor-pointer')
                  : isDisabled
                  ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm cursor-pointer'
              } ${isAnomalie && !isSelected ? 'opacity-80 cursor-not-allowed hover:border-gray-200' : ''}`}
            >
              {/* Le prix en XP */}
              {isScelle && !isSelected && !isAnomalie && (
                <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[10px] uppercase font-bold px-2 py-1 rounded border border-amber-300 shadow-sm">
                  {FIXED_XP_COSTS.nouvel_atout} XP
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <div className={`font-bold font-serif flex items-center gap-2 ${isAnomalie ? 'text-fuchsia-900' : 'text-gray-800'}`}>
                  {isSelected && <Check size={16} className={isAnomalie ? "text-fuchsia-600" : "text-indigo-600"} />}
                  {atout.nom}
                </div>
                {isAnomalie && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase flex items-center gap-1">
                    🔒 Géré à l'Étape 3
                  </span>
                )}
                {isInnate && !isAnomalie && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création (Plancher de Verre)">
                    🔒 Inné
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed mt-2">
                {atout.description || "Aucune description."}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
