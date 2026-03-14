// 10.4.0 // 10.6.0 // 10.8.0 // 10.9.0
// 11.1.0 // 12.5.0
// 13.1.0

import React, { useState } from 'react';
import { Star, Info, Check, Sparkles, AlertCircle } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';

// ============================================================================
// --- ÉTAPE 2 : CAPACITÉS ---
// ============================================================================
export function Step2() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;

  const data = fairyData[character.typeFee];

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
    if (!isReadOnly) {
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: c, gameData });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Capacités Naturelles</h3>
          <p className="text-sm text-amber-800">
            Voici les capacités inhérentes à votre nature. Vous devez choisir une 3ème capacité spécifique.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      </div>

      {/* ✨ NOUVEAU : AFFICHAGE DES CAPACITÉS FIXES (INNÉES) */}
      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacités Innées (Acquises)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[data.capacites?.fixe1, data.capacites?.fixe2].filter(c => c && c.nom && c.nom !== 'Inconnu').map((cap, idx) => (
          <div key={`fixe-${idx}`} className="p-4 rounded-xl border-2 border-amber-200 bg-amber-100/50">
            <div className="font-bold font-serif text-amber-900 flex items-center gap-2">
              <Check size={16} className="text-amber-600" />
              {cap.nom}
            </div>
            <p className="text-sm text-amber-800 text-left mt-2 leading-relaxed">
              {cap.description || "Aucune description."}
            </p>
          </div>
        ))}
      </div>
	  
      {/* 🎯 SÉPARATEUR POUR LES CAPACITÉS AU CHOIX */}
      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacité Optionnelle (À choisir)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.capacites?.choix?.map((cap, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <button
              disabled={isReadOnly}
              onClick={() => handleCapaciteChoice(cap.nom)}
              className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group ${
                character.capaciteChoisie === cap.nom
                  ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-200 ring-offset-2'
                  : 'border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50'
              }`}
            >
              <div className="font-bold font-serif text-gray-800 mb-1 flex items-center gap-2">
                {character.capaciteChoisie === cap.nom && <Check size={16} className="text-amber-600" />}
                {cap.nom}
              </div>
              <p className={`text-sm text-left mt-2 leading-relaxed ${character.capaciteChoisie === cap.nom ? 'text-amber-800' : 'text-gray-600'}`}>
                {cap.description || "Aucune description."}
              </p>
            </button>
          </div>
        ))}
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

  // ✨ NOUVEAU : Les états pour l'Anomalie
  const [showAnomalie, setShowAnomalie] = React.useState(false);
  const MAX_ATOUTS = 3;

  const maxPouvoirs = character.caracteristiques?.feerie || 3;
  const countSelected = character.pouvoirs?.length || 0;
  const countAtouts = character.atouts?.length || 0;
  const anomalieAtout = data?.atouts?.find(a => a.nom === 'Anomalie féérique');
  const anomalieId = anomalieAtout ? anomalieAtout.id : 'Anomalie féérique';
  const hasAnomalie = character.atouts?.includes(anomalieId) || character.atouts?.includes('Anomalie féérique');

  const handlePouvoirToggle = (pouvoir) => {
    if (!isReadOnly) {
      dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'pouvoirs', value: pouvoir, max: maxPouvoirs, gameData });
    }
  };

  // ✨ NOUVEAU : Calculer le catalogue de TOUS les autres pouvoirs (Mémoïsé pour la fluidité)
  const exteriorPowers = React.useMemo(() => {
    if (!fairyData || !character.typeFee) return [];
    const others = [];

    // 🛡️ L'ANTI-BUG EST ICI : On liste les pouvoirs INNÉS de notre fée pour les exclure !
    const myFairyPowers = fairyData[character.typeFee]?.pouvoirs?.map(p => p.nom) || [];

    Object.keys(fairyData).forEach(fName => {
      if (fName !== character.typeFee) {
        const fData = fairyData[fName];
        if (fData && fData.pouvoirs) {
          fData.pouvoirs.forEach(p => {
            
            // ✨ LE BOUCLIER DE L'ARCHITECTE EST ICI ✨
            // On vérifie que le pouvoir est strictement standard (pas profond ni légendaire)
            const isStandard = p.type_pouvoir === 'masque' || p.type_pouvoir === 'demasque';

            // 🛡️ On s'assure que :
            // 1. C'est un pouvoir standard
            // 2. Ce n'est pas un pouvoir que l'on possède déjà naturellement
            // 3. On ne l'a pas déjà ajouté
            if (isStandard && !myFairyPowers.includes(p.nom) && !others.some(ex => ex.nom === p.nom)) {
              others.push({ ...p, origine: fName });
            }
          });
        }
      }
    });

    // On trie alphabétiquement pour que ce soit beau
    return others.sort((a, b) => a.nom.localeCompare(b.nom));
  }, [fairyData, character.typeFee]); 

  // ✨ NOUVEAU : Trouver si un pouvoir extérieur est déjà sélectionné par le joueur
  const selectedExterior = character.pouvoirs?.find(pNom => exteriorPowers.some(ep => ep.nom === pNom));

  // ✨ NOUVEAU : La fonction Chirurgienne pour l'Anomalie
  const handleAnomalieToggle = (pouvoirNom) => {
    if (isReadOnly) return;

    let newPouvoirs = character.pouvoirs ? [...character.pouvoirs] : [];
    let newAtouts = character.atouts ? [...character.atouts] : [];

    if (selectedExterior === pouvoirNom) {
      // 1. DÉSÉLECTION : On enlève le pouvoir ET le vrai Atout
      newPouvoirs = newPouvoirs.filter(p => p !== pouvoirNom);
      newAtouts = newAtouts.filter(a => a !== anomalieId && a !== 'Anomalie féérique');
    } else {
      // 2. SÉLECTION
      if (selectedExterior) {
        newPouvoirs = newPouvoirs.filter(p => p !== selectedExterior);
      } else {
        if (newPouvoirs.length >= maxPouvoirs) return; 
        if (!hasAnomalie && countAtouts >= MAX_ATOUTS) return; 
      }

      newPouvoirs.push(pouvoirNom);
      // ✨ On insère le véritable identifiant SQL !
      if (!newAtouts.includes(anomalieId)) {
        newAtouts.push(anomalieId);
      }
      setShowAnomalie(false); 
    }

    // On expédie les deux modifications d'un coup dans le Nuage !
    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { pouvoirs: newPouvoirs, atouts: newAtouts },
      gameData
    });
  };

  if (!data) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Héritage Féérique</h3>
          <p className="text-sm text-amber-800">
            Votre niveau de Féérie ({maxPouvoirs}) détermine le nombre de pouvoirs que vous pouvez maîtriser. Vous pouvez choisir parmi les Pouvoirs <strong>Masqués</strong> (utilisables sous forme masquée) et les Pouvoirs <strong>Démasqués</strong> (utilisables uniquement sous forme de Fée).
          </p>
          <div className="mt-3 inline-block px-3 py-1 bg-white rounded-full border border-amber-200 text-sm font-bold text-amber-700">
            Sélectionnés : {countSelected} / {maxPouvoirs}
          </div>
        </div>
      </div>

      {/* RENDU DES POUVOIRS STANDARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.pouvoirs.map((pouvoir, idx) => {
          const isSelected = character.pouvoirs?.includes(pouvoir.nom);
          const isDisabled = !isSelected && countSelected >= maxPouvoirs;

          return (
            <div
              key={idx}
              onClick={() => !isDisabled && handlePouvoirToggle(pouvoir.nom)}
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
                {(() => {
                  const isDemasque = pouvoir.type_pouvoir?.includes('demasque');
                  const isMasque = !isDemasque;
                  return (
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      isMasque ? 'bg-purple-100 text-purple-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {isMasque ? '🎭 Masqué' : '🔥 Démasqué'}
                    </span>
                  );
                })()}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed mt-2">
                {pouvoir.description || "Aucune description."}
              </div>
            </div>
          );
        })}
      </div>

      {/* ✨ NOUVEAU : LE BOUTON MAGIQUE (ANOMALIE) ✨ */}
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

            {selectedExterior ? (
              <button
                onClick={() => handleAnomalieToggle(selectedExterior)}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-bold text-sm hover:bg-red-200 transition-colors border border-red-200 shrink-0"
              >
                Purger l'Anomalie
              </button>
            ) : (
              <button
                onClick={() => setShowAnomalie(!showAnomalie)}
                disabled={countSelected >= maxPouvoirs || (!hasAnomalie && countAtouts >= MAX_ATOUTS)}
                className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
              >
                {showAnomalie ? 'Refermer le catalogue' : 'Déclencher l\'Anomalie'}
              </button>
            )}
          </div>

          {/* L'alerte silencieuse si le joueur n'a plus de place d'Atout */}
          {!selectedExterior && !hasAnomalie && countAtouts >= MAX_ATOUTS && (
            <div className="text-xs text-red-600 font-bold mt-3 bg-red-50 p-2 rounded border border-red-100">
              Vous avez déjà sélectionné tous vos Atouts ({MAX_ATOUTS}/{MAX_ATOUTS}) à l'étape suivante. Libérez de la place pour pouvoir déclencher cette anomalie !
            </div>
          )}

          {/* Le pouvoir extérieur fièrement sélectionné */}
          {selectedExterior && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3 animate-fade-in">
              <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20}/></div>
              <div>
                <div className="font-bold text-fuchsia-900 text-lg">{selectedExterior}</div>
                <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé par Anomalie</div>
                <div className="text-sm text-stone-600 leading-relaxed">
                  {exteriorPowers.find(p => p.nom === selectedExterior)?.description}
                </div>
              </div>
            </div>
          )}

          {/* Le Tiroir Secret des Pouvoirs Extérieurs */}
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
// --- ÉTAPE 4 : ATOUTS ---
// ============================================================================

export function StepAtouts() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const MAX_ATOUTS = 2; // Le maximum légal
  const countSelected = character.atouts?.length || 0;

  const handleAtoutToggle = (atoutId) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atouts', value: atoutId, max: MAX_ATOUTS, gameData });
  };

  if (!data || !data.atouts) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* ✨ L'EN-TÊTE COMPACT DES ATOUTS (ADAPTATIF XP) ✨ */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center bg-amber-50 px-4 py-2.5 rounded-lg border border-amber-200 shadow-sm gap-3">
        
        {/* LA GAUCHE : Titre et Description */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded border border-amber-200 shadow-sm">
            <Sparkles className="text-amber-600 shrink-0" size={18} />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-amber-900 leading-none mb-1">
              Atouts Féériques
            </h3>
            {/* ✨ LE TEXTE S'ADAPTE SI LE PERSONNAGE EST SCELLÉ (XP) */}
            {isReadOnly ? (
              <p className="text-xs text-amber-700 font-bold">
                Les avantages liés à votre nature sont définitivement scellés.
              </p>
            ) : (
              <p className="text-xs text-amber-700">
                Votre nature vous octroie des avantages particuliers. Choisissez {MAX_ATOUTS} atouts.
              </p>
            )}
          </div>
        </div>

        {/* LA DROITE : Le Compteur Intelligent (Masqué si Scellé !) */}
        {!isReadOnly && (
          <div className={`px-3 py-1 rounded-md text-sm font-bold border-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            countSelected >= MAX_ATOUTS
              ? 'bg-green-100 text-green-700 border-green-300'
              : 'bg-white text-amber-700 border-amber-300'
          }`}>
            <span>Sélectionnés :</span>
            {/* ✨ ON UTILISE BIEN countSelected ICI ! */}
            <span className="text-lg leading-none">{countSelected} / {MAX_ATOUTS}</span>
          </div>
        )}

      </div>
	  
      {/* LA GRILLE DES ATOUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.atouts.map((atout, idx) => {
          const isSelected = character.atouts?.includes(atout.id) || character.atouts?.includes(atout.nom);
          const isDisabled = !isSelected && countSelected >= MAX_ATOUTS;
          
          // ✨ NOTRE CIBLE : L'ANOMALIE
          const isAnomalie = atout.nom === 'Anomalie féérique';

          return (
            <div
              key={idx}
              onClick={() => {
                if (isAnomalie) {
                  // ✨ LE CADENAS : On bloque l'action et on prévient le joueur !
                  showInAppNotification("🪄 Le pouvoir lié à l'Anomalie doit être modifié ou retiré depuis l'Étape 3 (Pouvoirs).", "warning");
                  return;
                }
                if (!isDisabled) handleAtoutToggle(atout.id);
              }}
              className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                isSelected 
                  ? (isAnomalie ? 'border-fuchsia-600 bg-fuchsia-50 shadow-md ring-2 ring-fuchsia-400' : 'border-indigo-600 bg-indigo-50 shadow-md ring-2 ring-indigo-400') 
                  : isDisabled 
                    ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed' 
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm cursor-pointer'
              } ${isAnomalie && !isSelected ? 'opacity-80 cursor-not-allowed hover:border-gray-200' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`font-bold font-serif flex items-center gap-2 ${isAnomalie ? 'text-fuchsia-900' : 'text-gray-800'}`}>
                  {isSelected && <Check size={16} className={isAnomalie ? "text-fuchsia-600" : "text-indigo-600"} />}
                  {atout.nom}
                </div>
                
                {/* L'ÉTIQUETTE DE VERROUILLAGE */}
                {isAnomalie && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase flex items-center gap-1">
                    🔒 Géré à l'Étape 3
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