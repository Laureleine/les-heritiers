import React from 'react';
import { Search, X } from '../../config/icons';

export function SearchBar({ value, onChange, onClear, placeholder = 'Rechercher...', className = '', inputClassName = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full pl-9 ${onClear ? 'pr-8' : 'pr-4'} py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 ${inputClassName}`}
      />
      {onClear && value && (
        <button
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
          aria-label="Effacer la recherche"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
