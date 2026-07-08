import React from 'react';

const ACTIVE_DEFAULT = 'text-amber-900 border-amber-600';
const INACTIVE = 'text-stone-400 border-transparent hover:text-stone-700 hover:border-stone-300';

/**
 * tabs: [{ id, label, count?, activeClass? }]
 * activeClass optionnel pour surcharger la couleur active d'un onglet spécifique.
 * label: aria-label du tablist (recommandé)
 * panelId: id du panneau contrôlé (pour aria-controls)
 * tabIdPrefix: préfixe des ids de bouton (défaut 'tabbar') — doit être unique par usage
 */
export function TabBar({ tabs, activeTab, onTabChange, className = '', label, panelId, tabIdPrefix = 'tabbar' }) {
  const handleKeyDown = (e) => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    let next = null;
    if (e.key === 'ArrowRight') { e.preventDefault(); next = tabs[(idx + 1) % tabs.length].id; }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); next = tabs[(idx - 1 + tabs.length) % tabs.length].id; }
    else if (e.key === 'Home') { e.preventDefault(); next = tabs[0].id; }
    else if (e.key === 'End') { e.preventDefault(); next = tabs[tabs.length - 1].id; }
    if (next !== null) {
      onTabChange(next);
      setTimeout(() => document.getElementById(`${tabIdPrefix}-${next}`)?.focus(), 0);
    }
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={`flex gap-6 border-b border-stone-200 overflow-x-auto${className ? ' ' + className : ''}`}
    >
      {tabs.map(t => (
        <button
          key={t.id}
          id={`${tabIdPrefix}-${t.id}`}
          role="tab"
          aria-selected={activeTab === t.id}
          aria-controls={panelId}
          tabIndex={activeTab === t.id ? 0 : -1}
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
