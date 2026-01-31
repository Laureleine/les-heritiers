// Version: 2.0
// Description: Étape 2 (Step 6 dans la séquence) - Choix de capacité
// Dernière modification: 2025-01-30

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export default function Step2({ character, onCapaciteChoice, fairyData }) {
  const [showInfo, setShowInfo] = useState(null);
  
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

  return (
    <div className="space-y-8">
      <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
        <h2 className="text-2xl font-serif text-amber-900 mb-2">
          {character.typeFee}
        </h2>
		{data.description && (
		  <div className="text-amber-800 italic">
			{Array.isArray(data.description) 
			  ? data.description.map((line, i) => (
				  <p key={i} className="mb-1">{line}</p>
				))
			  : <p>{data.description}</p>
			}
		  </div>
		)}
      </div>

      <div>
        <h3 className="text-xl font-serif text-amber-900 mb-4">
          Capacités Naturelles Fixes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[data.capacites.fixe1, data.capacites.fixe2].map((cap, idx) => (
            <div key={idx} className="p-4 bg-amber-100 rounded-lg border-2 border-amber-300">
              <div className="flex items-start justify-between">
                <h4 className="font-serif text-lg text-amber-900">{cap.nom || `Capacité ${idx + 1}`}</h4>
                {cap.description && (
                  <div
                    onClick={() => setShowInfo(showInfo === `fixe${idx}` ? null : `fixe${idx}`)}
                    className="text-amber-600 hover:text-amber-800 cursor-pointer"
                  >
                    <Info size={20} />
                  </div>
                )}
              </div>
              {showInfo === `fixe${idx}` && cap.description && (
                <p className="mt-2 text-sm text-amber-800">{cap.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-serif text-amber-900 mb-4">
          Choisissez une Capacité
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.capacites.choix.map((cap, idx) => (
            <button
              key={idx}
              onClick={() => onCapaciteChoice(cap.nom)}
              className={`p-4 rounded-lg border-2 transition-all ${
                character.capaciteChoisie === cap.nom
                  ? 'border-amber-600 bg-amber-50 shadow-md'
                  : 'border-amber-200 bg-white hover:border-amber-400'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-serif text-amber-900">{cap.nom || `Option ${idx + 1}`}</h4>
                {cap.description && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInfo(showInfo === `choix${idx}` ? null : `choix${idx}`);
                    }}
                    className="text-amber-600 hover:text-amber-800 cursor-pointer"
                  >
                    <Info size={18} />
                  </div>
                )}
              </div>
              {showInfo === `choix${idx}` && cap.description && (
                <p className="text-sm text-amber-800 text-left">{cap.description}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}