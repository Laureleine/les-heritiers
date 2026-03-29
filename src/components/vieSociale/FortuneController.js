// 14.13.0
// Optimisé 

import React from 'react';
import { Coins, Plus, Minus } from 'lucide-react';
import { getFortuneCost } from '../../utils/xpCalculator';

export default function FortuneController({ 
  character, 
  isScelle, 
  isReadOnly, 
  plancherFortune, 
  onUpgrade, 
  onDowngrade 
}) {
  const currentFortune = isScelle ? (character.fortune || 0) : plancherFortune;
  const xpDispo = (character.xp_total || 0) - (character.xp_depense || 0);

  return (
    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-lg mb-8">
      <div className="flex items-center justify-between mb-4 border-b border-emerald-200/50 pb-3">
        <h3 className="font-serif text-2xl font-black text-emerald-900 flex items-center gap-3">
          <Coins size={32} className="text-emerald-600" />
          Niveau de Fortune
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-emerald-700 font-medium">
          {isScelle 
            ? "Votre fortune est active. Évoluez via l'expérience en achetant de nouveaux rangs." 
            : "La synthèse mathématique de vos métiers et de votre héritage féérique."}
        </div>
        
        <div className="flex items-center gap-3">
          {isScelle && (
            <button
              onClick={onDowngrade}
              disabled={isReadOnly || currentFortune <= (character.data?.stats_scellees?.fortune || 0)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-emerald-200 text-emerald-600 hover:bg-red-50 hover:text-red-600 disabled:opacity-30 transition-colors font-bold shadow-sm"
              title="Récupérer les XP investis"
            >
              <Minus size={18} />
            </button>
          )}
          
          <div className="text-5xl font-black text-emerald-800 font-serif bg-white px-6 py-3 rounded-xl border-4 border-emerald-300 shadow-inner flex items-baseline gap-2">
            {currentFortune} <span className="text-lg font-bold text-emerald-500 uppercase tracking-widest">Rang</span>
          </div>
          
          {isScelle && (
            <button
              onClick={onUpgrade}
              disabled={isReadOnly || currentFortune >= 15 || xpDispo < getFortuneCost(currentFortune, character.computedStats)}
              className="h-10 px-3 flex flex-col items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-30 disabled:bg-gray-400 transition-colors shadow-md"
            >
              <Plus size={18} />
              {currentFortune < 15 && (
                <span className="text-[9px] font-bold -mt-1 tracking-wider">
                  ({getFortuneCost(currentFortune, character.computedStats)} XP)
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}