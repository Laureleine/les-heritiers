import React from 'react';
import { Dices } from '../../config/icons';
import MenuDe from './MenuDe';

export default function MenuPlat({ plat, mode, onReroll, resoudre }) {
  if (!plat) return null;

  return (
    <div className={`group ${mode === 'carte' ? 'text-center' : 'flex items-start justify-between gap-2'}`}>
      <div className="flex-1 min-w-0">
        <div className={`flex items-center gap-1.5 ${mode === 'carte' ? 'justify-center' : ''}`}>
          <span className={`font-serif text-stone-800 ${mode === 'carte' ? 'text-base tracking-wide' : 'text-sm'}`}>
            {plat.nom}
          </span>
          <span className="text-[10px] text-amber-600 tracking-tighter select-none" title={`Difficulté ${plat.difficulte}/5`}>
            {'⚫'.repeat(plat.difficulte)}{'⚪'.repeat(5 - plat.difficulte)}
          </span>
          {onReroll && (
            <button
              onClick={onReroll}
              title="Retirer ce plat"
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded text-stone-300 hover:text-amber-600"
            >
              <Dices size={12} />
            </button>
          )}
        </div>

        {mode === 'vins' && plat.accord_vin && (
          <p className="text-xs text-rose-700 font-serif italic mt-0.5">🍷 {plat.accord_vin}</p>
        )}

        {mode === 'narratif' && plat.description_narrative && (
          <p className="text-xs text-stone-500 font-serif italic mt-0.5">{plat.description_narrative}</p>
        )}

        {resoudre && <MenuDe plat={plat} resoudre={resoudre} />}
      </div>
    </div>
  );
}
