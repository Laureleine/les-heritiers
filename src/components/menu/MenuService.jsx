import React from 'react';
import { Dices } from '../../config/icons';
import MenuPlat from './MenuPlat';

export default function MenuService({ service, mode, onRerollService, onRerollPlat, resoudre }) {
  return (
    <div className={`py-3 ${mode === 'carte' ? 'text-center' : 'border-b border-stone-100 last:border-0'}`}>
      <div className={`flex items-center gap-1.5 mb-1.5 ${mode === 'carte' ? 'justify-center' : ''}`}>
        <h3 className={`font-serif font-bold text-amber-900 uppercase tracking-widest ${mode === 'carte' ? 'text-xs' : 'text-[11px]'}`}>
          {service.label}
        </h3>
        {onRerollService && (
          <button
            onClick={onRerollService}
            title="Retirer ce service"
            className="text-stone-300 hover:text-amber-600 transition-colors"
          >
            <Dices size={12} />
          </button>
        )}
      </div>

      <div className={mode === 'carte' ? 'space-y-1' : 'space-y-1.5'}>
        {service.plats.length === 0 && (
          <p className="text-xs text-stone-400 italic">Aucun plat disponible pour ces critères.</p>
        )}
        {service.plats.map((plat, index) => (
          <MenuPlat
            key={plat.id}
            plat={plat}
            mode={mode}
            resoudre={resoudre}
            onRerollPlat={onRerollPlat}
            onReroll={onRerollPlat ? () => onRerollPlat(index) : null}
          />
        ))}
      </div>
    </div>
  );
}
