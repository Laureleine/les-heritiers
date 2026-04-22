// src/components/encyclopedia/RelationSelector.js

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const RelationSelector = ({ 
  title, 
  items = [], 
  selectedIds = [], 
  onToggle, 
  colorTheme = "indigo" 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // 🧠 LE CERVEAU SÉPARÉ ET MÉMOÏSÉ
  // La recherche ne re-calcule que cette liste, sans alerter le composant parent !
  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    return items.filter(item => 
      (item.nom || item.name || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div className={`bg-white p-3 rounded border border-${colorTheme}-200 shadow-sm flex flex-col h-full`}>
      <label className={`block text-xs font-bold text-${colorTheme}-800 mb-2`}>
        {title}
      </label>
      
      <div className="relative mb-3 shrink-0">
        <Search size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 text-${colorTheme}-300`} />
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-9 pr-3 py-1.5 bg-${colorTheme}-50/30 border border-${colorTheme}-100 rounded text-sm focus:outline-none focus:border-${colorTheme}-400 text-stone-700`}
        />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-1 min-h-[120px] max-h-[200px]">
        {filteredItems.length === 0 ? (
          <div className="text-xs text-stone-400 italic text-center py-4">Aucun résultat...</div>
        ) : (
          filteredItems.map(item => (
            <label 
              key={item.id} 
              className={`flex items-start gap-2 p-1.5 hover:bg-${colorTheme}-50 rounded cursor-pointer transition-colors group`}
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={(e) => onToggle(item.id, e.target.checked)}
                className="mt-0.5 shrink-0 accent-stone-700"
              />
              <span className="line-clamp-2 leading-tight text-sm text-stone-700 group-hover:text-stone-900">
                {item.nom || item.name}
              </span>
            </label>
          ))
        )}
      </div>
    </div>
  );
};

// On exporte en React.memo pour bloquer les re-renders si le composant parent change pour une autre raison
export default React.memo(RelationSelector);