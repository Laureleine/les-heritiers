// src/components/EncyclopediaCard.js
// 8.20.0 
// 9.6.0
// 10.8.0

import React from 'react';
import { Feather, Sparkles, Star, Lock, ShieldCheck, ShieldAlert, Unlock } from 'lucide-react';

export default function EncyclopediaCard({ item, activeTab, onOpenEdit, isLocked, onToggleSeal, userProfile }) {
  const title = item.name || item.nom;
  const desc = item.description || item.desc;
  const isRestricted = item.is_official === false;
  
  // Détection si c'est un pouvoir
  let typeBadge = null;
  if (activeTab === 'fairy_powers' && item.type_pouvoir) {
    // Détection corrigée pour éviter que "demasque" ne valide "masque"
    const isDemasque = item.type_pouvoir.includes('demasque');
    const isMasque = !isDemasque;
    
    const isProfond = item.type_pouvoir.includes('profond');
    const isLegendaire = item.type_pouvoir.includes('legendaire');
    
    let label = isProfond ? '🔮 Profond' : isLegendaire ? '👑 Légendaire' : 'Standard';
    label += isMasque ? ' (🎭 Masqué)' : ' (🔥 Démasqué)';
    
    const colorClass = isMasque 
      ? 'bg-purple-100 text-purple-800 border-purple-200' 
      : 'bg-rose-100 text-rose-800 border-rose-200';

    typeBadge = (
      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${colorClass}`}>
        {label}
      </span>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group flex flex-col h-full">
      {/* LE SCEAU VISUEL EN HAUT DE LA CARTE */}
      {item.is_sealed && (
        <div className="absolute top-3 right-3 text-amber-700/80 z-10" title="Savoir cristallisé par les Gardiens">
           <ShieldCheck size={28} className="drop-shadow-md" />
        </div>
      )}
	  
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

      {/* 🌟 LISTE DES FÉES COMPATIBLES (Onglet Atouts) */}
      {activeTab === 'fairy_assets' && item.fairy_type_assets && item.fairy_type_assets.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
           <div className="flex items-center gap-1 text-xs font-bold text-amber-800 mb-2">
              <Star size={12} /> Fées possédant cet atout :
           </div>
           <div className="flex flex-wrap gap-1">
             {item.fairy_type_assets
               .map(link => link.fairy_types?.name)
               .filter(Boolean)
               .sort()
               .map((fairyName, idx) => (
                 <span key={idx} className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200 font-medium shadow-sm">
                   {fairyName}
                 </span>
             ))}
           </div>
        </div>
      )}
	  
      {/* GESTION DES ÉTATS (Scellé / En révision / Éditable) */}
      <div className="mt-6">
        {item.is_sealed ? (
          <div className="text-sm font-serif font-bold text-amber-900/70 flex items-center justify-center gap-2 py-3 rounded-lg border border-amber-900/20 bg-gradient-to-r from-amber-50 to-orange-50 shadow-inner">
            <ShieldCheck size={18} className="text-amber-700" /> Savoir scellé par le Conseil
          </div>
        ) : isLocked ? (
          <div className="text-sm font-serif italic text-stone-500 flex items-center justify-center gap-2 py-3 rounded-lg border border-stone-200 bg-stone-50">
            <Lock size={16} /> En cours de révision par un Héritier
          </div>
        ) : (
          <button 
            onClick={() => onOpenEdit(item)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-stone-100 text-stone-700 border-2 border-stone-200 rounded-lg hover:bg-stone-200 hover:border-stone-300 transition-all font-serif font-bold text-sm shadow-sm"
          >
            <Feather size={16} /> Suggérer une modification
          </button>
        )}
      </div>

      {/* 3. LE PRIVILÈGE DES GARDIENS (Pour Briser ou Apposer le sceau manuellement) */}
      {(userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien') && (
        <button
          onClick={() => onToggleSeal(item, activeTab)} /* 👈 LA MAGIE OPÈRE ICI */
          className={`flex items-center gap-2 px-4 py-2 mt-3 text-xs font-bold font-serif uppercase tracking-wider rounded-lg transition-all border w-full justify-center
            ${item.is_sealed 
              ? 'bg-stone-900 text-amber-400 border-amber-700 hover:bg-stone-800' 
              : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'}`}
        >
          {item.is_sealed ? <Unlock size={14}/> : <Lock size={14}/>}
          {item.is_sealed ? 'Briser le Sceau' : 'Apposer le Sceau'}
        </button>
      )}	  
	  
    </div>
  );
}