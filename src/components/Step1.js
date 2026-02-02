// src/components/Step1.js
// Version: 2.9.1
// Build: 2026-01-31 20:40
// Description: Étape 1 - Nom, sexe et type de fée
// Dernière modification: 2026-01-31

import React from 'react';
import { fairyTypesByAge } from '../data/data';

export default function Step1({ character, onNomChange, onSexeChange, onTypeFeeChange }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
          Nom du personnage
        </h2>
        <input
          type="text"
          value={character.nom}
          onChange={(e) => onNomChange(e.target.value)}
          placeholder="Entrez le nom de votre personnage"
          className="w-full p-4 text-lg border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none font-serif"
        />
      </div>

      <div>
        <h2 className="text-2xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
          Sexe du personnage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Homme', 'Femme', 'Androgyne'].map(sexe => (
            <button
              key={sexe}
              onClick={() => onSexeChange(sexe)}
              className={`p-4 rounded-lg border-2 transition-all ${
                character.sexe === sexe
                  ? 'border-amber-600 bg-amber-50 shadow-md'
                  : 'border-amber-200 bg-white hover:border-amber-400'
              }`}
            >
              <span className="text-lg font-serif text-amber-900">{sexe}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
          Type de Fée
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Colonne Fées Traditionnelles */}
          <div className="border-2 border-amber-300 rounded-lg p-4 bg-amber-50">
            <h3 className="text-xl font-serif text-amber-800 mb-4 text-center font-semibold">
              🏛️ Fées Traditionnelles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fairyTypesByAge.anciennes.map(type => (
                <button
                  key={type}
                  onClick={() => onTypeFeeChange(type)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    character.typeFee === type
                      ? 'border-amber-600 bg-amber-100 shadow-md ring-2 ring-amber-400'
                      : 'border-amber-200 bg-white hover:border-amber-400'
                  }`}
                >
                  <span className="text-sm font-serif text-amber-900">{type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Colonne Fées Modernes */}
          <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
            <h3 className="text-xl font-serif text-blue-800 mb-4 text-center font-semibold">
              ⚡ Fées Modernes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fairyTypesByAge.modernes.map(type => (
                <button
                  key={type}
                  onClick={() => onTypeFeeChange(type)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    character.typeFee === type
                      ? 'border-blue-600 bg-blue-100 shadow-md ring-2 ring-blue-400'
                      : 'border-blue-200 bg-white hover:border-blue-400'
                  }`}
                >
                  <span className="text-sm font-serif text-blue-900">{type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Indicateur du type sélectionné */}
        {character.typeFee && (
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-100 to-blue-100 rounded-lg border-2 border-amber-300">
            <p className="text-center font-serif text-amber-900">
              <span className="font-semibold">Type sélectionné :</span> {character.typeFee}
              {fairyTypesByAge.anciennes.includes(character.typeFee) && (
                <span className="ml-2 text-amber-700">(Fée Traditionnelle 🏛️)</span>
              )}
              {fairyTypesByAge.modernes.includes(character.typeFee) && (
                <span className="ml-2 text-blue-700">(Fée Moderne ⚡)</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}