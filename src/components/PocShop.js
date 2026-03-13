// 13.7.0

import React from 'react';
import { ArrowUpCircle, Sparkles } from 'lucide-react';
import { getCaracCost } from '../utils/xpCalculator';
import { showInAppNotification } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';

export default function PocShop() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  
  const xpDispo = (character.xp_total || 0) - (character.xp_depense || 0);

  const handleBuy = (key, currentRank, cost) => {
    const feeData = gameData.fairyData?.[character.typeFee];
    const maxRacial = feeData?.caracteristiques?.[key]?.max || 6;

    if (currentRank >= maxRacial) {
       showInAppNotification("Limite physiologique atteinte.", "warning");
       return;
    }

    const newCaracs = { ...character.caracteristiques, [key]: currentRank + 1 };
    
    dispatchCharacter({ 
      type: 'UPDATE_MULTIPLE', 
      payload: { 
        caracteristiques: newCaracs,
        xp_depense: (character.xp_depense || 0) + cost
      }, 
      gameData 
    });
    showInAppNotification(`Achat validé pour ${cost} XP !`, "success");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 p-4 border-4 border-amber-900 rounded-lg bg-amber-50">
      <div className="flex justify-between items-center border-b-2 border-amber-800 pb-2">
        <h2 className="text-2xl font-serif text-amber-900 flex items-center gap-2"><Sparkles/> Boutique d'XP</h2>
        <div className="bg-amber-800 text-white px-4 py-2 rounded-full font-bold">
          {xpDispo} XP Disponibles
        </div>
      </div>

      <div className="space-y-2">
        {['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid'].map(key => {
          const currentRank = character.caracteristiques?.[key] || 1;
          const cost = getCaracCost(currentRank);
          const canAfford = xpDispo >= cost;

          return (
            <div key={key} className="flex justify-between items-center p-3 bg-white rounded shadow-sm border border-amber-200">
              <span className="font-bold text-amber-900 capitalize">{key} (Niv. {currentRank})</span>
              <button 
                onClick={() => handleBuy(key, currentRank, cost)}
                disabled={!canAfford}
                className={`flex items-center gap-2 px-3 py-1 rounded font-bold transition-all ${canAfford ? 'bg-green-100 text-green-800 border border-green-300 hover:bg-green-200' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                Améliorer ({cost} XP) <ArrowUpCircle size={16}/>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}