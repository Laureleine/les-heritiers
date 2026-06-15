import React from 'react';

const ACTIVE_DEFAULT = 'text-amber-900 border-amber-600';
const INACTIVE = 'text-stone-400 border-transparent hover:text-stone-700 hover:border-stone-300';

/**
 * tabs: [{ id, label, count?, activeClass? }]
 * activeClass optionnel pour surcharger la couleur active d'un onglet spécifique.
 */
export function TabBar({ tabs, activeTab, onTabChange, className = '' }) {
  return (
    <div className={`flex gap-6 border-b border-stone-200 overflow-x-auto${className ? ' ' + className : ''}`}>
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onTabChange(t.id)}
          className={`pb-3 font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
            activeTab === t.id ? (t.activeClass || ACTIVE_DEFAULT) : INACTIVE
          }`}
        >
          {t.label}
          {t.count !== undefined && (
            <span className="ml-1.5 text-xs font-normal opacity-70">({t.count})</span>
          )}
        </button>
      ))}
    </div>
  );
}
