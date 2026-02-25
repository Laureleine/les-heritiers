// src/components/EncyclopediaCard.js
import React from 'react';
import { Feather, Sparkles } from 'lucide-react';

export default function EncyclopediaCard({ item, activeTab, onOpenEdit }) {
  const title = item.name || item.nom;
  const desc = item.description || item.desc;
  const isRestricted = item.is_official === false;
  
  // Détection si c'est un pouvoir
  const typeBadge = item.type_pouvoir 
    ? (item.type_pouvoir === 'masque' ? '🎭 Masqué' : item.type_pouvoir === 'demasque' ? '🔥 Démasqué' : `✨ ${item.type_pouvoir}`)
    : null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-serif font-bold text-lg text-amber-900">{title}</h3>
        <div className="flex gap-2">
          {typeBadge && <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-1 rounded-full uppercase font-bold tracking-wider">{typeBadge}</span>}
          {isRestricted && <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase font-bold tracking-wider">Community</span>}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-4 flex-1 whitespace-pre-wrap">
        {desc || <span className="italic text-gray-400">Aucune description disponible.</span>}
      </p>

      {/* 🌟 LISTE DES FÉES COMPATIBLES (Onglet Capacités) */}
      {activeTab === 'fairy_capacites' && item.fairy_type_capacites && item.fairy_type_capacites.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
           <div className="flex items-center gap-1 text-xs font-bold text-indigo-800 mb-2">
              <Sparkles size={12} /> Fées possédant cette capacité :
           </div>
           <div className="flex flex-wrap gap-1">
             {item.fairy_type_capacites
               .map(link => link.fairy_types?.name)
               .filter(Boolean)
               .sort()
               .map((fairyName, idx) => (
                 <span key={idx} className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-100 font-medium">
                   {fairyName}
                 </span>
             ))}
           </div>
        </div>
      )}

      {/* 🌟 LISTE DES FÉES COMPATIBLES (Onglet Pouvoirs) */}
      {activeTab === 'fairy_powers' && item.fairy_type_powers && item.fairy_type_powers.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
           <div className="flex items-center gap-1 text-xs font-bold text-rose-800 mb-2">
              <Sparkles size={12} /> Fées possédant ce pouvoir :
           </div>
           <div className="flex flex-wrap gap-1">
             {item.fairy_type_powers
               .map(link => link.fairy_types?.name)
               .filter(Boolean)
               .sort()
               .map((fairyName, idx) => (
                 <span key={idx} className="text-[10px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full border border-rose-100 font-medium">
                   {fairyName}
                 </span>
             ))}
           </div>
        </div>
      )}

      {/* BOUTON D'ÉDITION (Visible au survol) */}
      <div className="mt-4 pt-4 border-t border-gray-50 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onOpenEdit(item)}
          className="text-xs font-bold text-amber-600 hover:text-amber-800 flex items-center gap-1"
        >
          <Feather size={14} /> Suggérer une modification
        </button>
      </div>
    </div>
  );
}