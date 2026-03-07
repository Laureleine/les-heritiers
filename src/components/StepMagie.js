// 10.4.0 // 10.6.0 // 10.8.0 // 10.9.0
// 11.1.0

import React, { useState } from 'react';
import { Star, Info, Check, Sparkles } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext'; // 👈 Le Nuage !

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

  if (!data || !data.pouvoirs || data.pouvoirs.length === 0) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
        <Sparkles className="mx-auto h-12 w-12 text-gray-400 mb-3" />
        <h3 className="text-lg font-serif font-bold text-gray-500">Aucun pouvoir disponible</h3>
        <p className="text-sm text-gray-400">Les pouvoirs pour {character.typeFee || 'cette fée'} n'ont pas encore été encodés.</p>
      </div>
    );
  }

  const maxPouvoirs = character.caracteristiques?.feerie || 3;
  const countSelected = character.pouvoirs?.length || 0;

  const handlePouvoirToggle = (pouvoir) => {
    if (!isReadOnly) {
      dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'pouvoirs', value: pouvoir, max: maxPouvoirs, gameData });
    }
  };

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.pouvoirs.map((pouvoir, idx) => {
          const isSelected = character.pouvoirs?.includes(pouvoir.nom);
          const isDisabled = !isSelected && countSelected >= maxPouvoirs;

          return (
            <div
              key={idx}
              onClick={() => !isDisabled && handlePouvoirToggle(pouvoir.nom)}
              className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50 shadow-md ring-2 ring-indigo-200 ring-offset-2 cursor-pointer'
                  : isDisabled
                    ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                    : 'border-stone-200 bg-white hover:border-indigo-300 hover:bg-stone-50 cursor-pointer'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold font-serif text-gray-800 flex items-center gap-2">
                  {isSelected && <Check size={16} className="text-indigo-600" />}
                  {pouvoir.nom}
                </div>
                  {/* ✨ Détection corrigée (Le mot démasqué contient "masque" !) */}
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
  const MAX_ATOUTS = 2;
  const countSelected = character.atouts?.length || 0;

  const handleAtoutToggle = (atout) => {
    if (!isReadOnly) {
      dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atouts', value: atout, max: MAX_ATOUTS, gameData });
    }
  };

  if (!data || !data.atouts || data.atouts.length === 0) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
        <Star className="mx-auto h-12 w-12 text-gray-400 mb-3" />
        <h3 className="text-lg font-serif font-bold text-gray-500">Aucun atout disponible</h3>
        <p className="text-sm text-gray-400">Les atouts pour {character.typeFee || 'cette fée'} n'ont pas encore été encodés.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
        <Star className="text-yellow-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-yellow-900">Atouts Féériques</h3>
          <p className="text-sm text-yellow-800">
            Votre nature vous octroie des avantages particuliers. Choisissez <strong>{MAX_ATOUTS} atouts</strong> parmi la liste ci-dessous.
          </p>
          <div className="mt-3 inline-block px-3 py-1 bg-white rounded-full border border-yellow-200 text-sm font-bold text-yellow-700">
            Sélectionnés : {countSelected} / {MAX_ATOUTS}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.atouts.map((atout, idx) => {
          // ✨ CORRECTION : On utilise le Nom de l'atout (et non son identifiant technique)
          const isSelected = character.atouts?.includes(atout.nom);
          const isDisabled = !isSelected && countSelected >= MAX_ATOUTS;

          return (
            <div
              key={idx}
              onClick={() => !isDisabled && handleAtoutToggle(atout.nom)}
              className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'border-yellow-500 bg-yellow-50 shadow-md ring-2 ring-yellow-200 ring-offset-2 cursor-pointer'
                  : isDisabled
                    ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                    : 'border-stone-200 bg-white hover:border-yellow-300 hover:bg-stone-50 cursor-pointer'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold font-serif text-gray-800 flex items-center gap-2">
                  {isSelected && <Check size={16} className="text-yellow-600" />}
                  {atout.nom}
                </div>
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
