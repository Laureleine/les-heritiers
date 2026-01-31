// Version: 2.0
// Description: Étape 3 (Step 7 dans la séquence) - Choix de 3 pouvoirs
// Dernière modification: 2025-01-30

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export default function Step3({ character, onPouvoirToggle, fairyData }) {
  const [showInfo, setShowInfo] = useState(null);
  
  const data = fairyData[character.typeFee];
  
  if (!data || !data.pouvoirs.length) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les pouvoirs pour {character.typeFee} n'ont pas encore été définis.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
        <p className="text-amber-900 font-serif">
          Sélectionnez 3 pouvoirs parmi ceux disponibles ({character.pouvoirs.length}/3)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.pouvoirs.map((pouvoir, idx) => (
          <button
            key={idx}
            onClick={() => onPouvoirToggle(pouvoir.nom)}
            disabled={!character.pouvoirs.includes(pouvoir.nom) && character.pouvoirs.length >= 3}
            className={`p-4 rounded-lg border-2 transition-all ${
              character.pouvoirs.includes(pouvoir.nom)
                ? 'border-amber-600 bg-amber-50 shadow-md'
                : !character.pouvoirs.includes(pouvoir.nom) && character.pouvoirs.length >= 3
                ? 'border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed'
                : 'border-amber-200 bg-white hover:border-amber-400'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-serif text-amber-900">{pouvoir.nom || `Pouvoir ${idx + 1}`}</h4>
              {pouvoir.description && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowInfo(showInfo === `pouvoir${idx}` ? null : `pouvoir${idx}`);
                  }}
                  className="text-amber-600 hover:text-amber-800 cursor-pointer"
                >
                  <Info size={18} />
                </div>
              )}
            </div>
            {showInfo === `pouvoir${idx}` && pouvoir.description && (
              <p className="text-sm text-amber-800 text-left">{pouvoir.description}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}