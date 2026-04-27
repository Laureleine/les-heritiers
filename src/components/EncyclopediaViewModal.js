
import React from 'react';
import { X, BookOpen, ShieldCheck, Sparkles, Star, Zap, Info, Activity } from 'lucide-react';
import { getMagicBadges } from '../data/DictionnaireJeu';

export default function EncyclopediaViewModal({ item, activeTab, onClose }) {
  if (!item) return null;

  const title = item.name || item.nom;
  const desc = item.description || item.desc;

  // Déterminer le type d'icône selon l'onglet
  let Icon = BookOpen;
  if (activeTab === 'fairy_types') Icon = Sparkles;
  if (activeTab === 'fairy_powers') Icon = Zap;
  if (activeTab === 'fairy_assets') Icon = Star;
  if (activeTab === 'fairy_capacites') Icon = Sparkles;

  // Extraction des Fées compatibles (si l'on regarde un atout, un pouvoir ou une capacité)
  let linkedFairies = [];
  if (activeTab === 'fairy_capacites') linkedFairies = item.fairy_type_capacites?.map(link => link.fairy_types?.name).filter(Boolean) || [];
  if (activeTab === 'fairy_powers') linkedFairies = item.fairy_type_powers?.map(link => link.fairy_types?.name).filter(Boolean) || [];
  if (activeTab === 'fairy_assets') linkedFairies = item.fairy_type_assets?.map(link => link.fairy_types?.name).filter(Boolean) || [];
  linkedFairies.sort();

  // Helper pour afficher proprement les listes (Avantages/Désavantages) venant de Supabase
  const renderList = (data) => {
    if (!data) return null;
    const arr = Array.isArray(data) ? data : data.split('\n');
    return arr.filter(Boolean).map((line, index) => <li key={index} className="mb-1">{line}</li>);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-[#fdfbf7] max-w-3xl w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-amber-900/20 flex flex-col overflow-hidden animate-fade-in-up" onClick={e => e.stopPropagation()}>
        
        {/* HEADER */}
        <div className="bg-stone-100 p-4 border-b border-stone-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-serif font-bold text-stone-800 flex items-center gap-3">
            <Icon className="text-amber-600" size={24} />
            {title}
          </h2>
          <button onClick={onClose} className="text-stone-400 hover:text-red-500 bg-white p-2 rounded-full shadow-sm transition-all hover:scale-110">
            <X size={20} />
          </button>
        </div>

        {/* CORPS DE L'ARCHIVE */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          {/* Étiquettes et Sceaux (Communs à tous) */}
          <div className="flex flex-wrap gap-2 items-center pb-4 border-b border-stone-100">
            {item.is_sealed && (
              <span className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 shadow-sm">
                <ShieldCheck size={14} /> Savoir Scellé
              </span>
            )}
            {!item.is_official && (
              <span className="flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 shadow-sm">
                <Info size={14} /> Faux-Semblant Communautaire
              </span>
            )}
            {item.era && (
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider shadow-sm">
                Ère : {item.era}
              </span>
            )}
            {item.taille_categorie && (
              <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1 rounded-full border border-stone-200 uppercase tracking-wider shadow-sm">
                Taille : {item.taille_categorie}
              </span>
            )}
			{item.type_pouvoir && (
				<div className="flex gap-2">
					{getMagicBadges(item.type_pouvoir).map((badge, idx) => (
						<span key={idx} className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider shadow-sm ${badge.color}`}>
							{badge.label}
						</span>
					))}
				</div>
			)}
		  </div>
          {/* Description Narrative (Commune à tous) */}
          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Savoir & Lore</h4>
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-inner">
              <p className="text-stone-700 leading-relaxed font-serif whitespace-pre-wrap text-base md:text-lg">
                {desc || <span className="italic text-stone-400">Les archives sont muettes à ce sujet...</span>}
              </p>
            </div>
          </div>

          {/* ✨ SPÉCIFIQUE AUX FÉES : Le scanner biométrique et magique */}
          {activeTab === 'fairy_types' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Le Potentiel Naturel (Statistiques) */}
              <div>
                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Activity size={16}/> Potentiel Naturel (Min / Max)
                </h4>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {[
                    { id: 'agilite', label: 'Agilité' },
                    { id: 'constitution', label: 'Const.' },
                    { id: 'force', label: 'Force' },
                    { id: 'precision', label: 'Précis.' },
                    { id: 'esprit', label: 'Esprit' },
                    { id: 'perception', label: 'Percept.' },
                    { id: 'prestance', label: 'Prestance' },
                    { id: 'sang_froid', label: 'S-Froid' }
                  ].map(stat => (
                    <div key={stat.id} className="bg-stone-50 border border-stone-200 rounded-lg p-2 flex flex-col items-center justify-center shadow-sm">
                      <span className="text-[9px] font-bold text-stone-500 uppercase truncate w-full text-center">{stat.label}</span>
                      <span className="text-sm font-serif font-bold text-amber-900 mt-1">
                        {item[`${stat.id}_min`] || 1} - {item[`${stat.id}_max`] || 6}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traits, Avantages & Désavantages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Traits, Avantages & Désavantages */}
                {item.traits && item.traits.length > 0 && (
                  <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 shadow-sm flex flex-col">
                    <h5 className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">Traits Typiques</h5>
                    {/* ✨ FIX : flex-col s'occupe de forcer le retour à la ligne pour chaque élément */}
                    <div className="text-sm font-serif font-bold text-sky-900 capitalize flex flex-col gap-1">
                      {Array.isArray(item.traits) 
                        ? item.traits.map((trait, index) => (
                            <span key={index} className="block">{trait}</span>
                          ))
                        : <span className="block">{item.traits}</span>
                      }
                    </div>
                  </div>
                )}
                
                {item.avantages && item.avantages.length > 0 && (
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-sm flex flex-col">
                    <h5 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Avantages</h5>
                    <ul className="text-sm text-emerald-900 list-disc list-inside">
                      {renderList(item.avantages)}
                    </ul>
                  </div>
                )}

                {item.desavantages && item.desavantages.length > 0 && (
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-sm flex flex-col">
                    <h5 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">Désavantages</h5>
                    <ul className="text-sm text-red-900 list-disc list-inside">
                      {renderList(item.desavantages)}
                    </ul>
                  </div>
                )}
              </div>

              {/* Héritage Féérique (Relations) */}
              <div className="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-sm">
                <h4 className="text-xs font-bold text-purple-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles size={16}/> Magie & Héritage Inné
                </h4>
                <div className="space-y-3">
                  
                  {item.fairy_type_capacites && item.fairy_type_capacites.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <span className="text-xs font-bold text-purple-900 uppercase w-24 shrink-0">Capacités :</span>
                      <span className="text-sm font-medium text-purple-800 flex-1">
                        {item.fairy_type_capacites.map(l => l.capacite?.nom).filter(Boolean).join(', ')}
                      </span>
                    </div>
                  )}

                  {item.fairy_type_powers && item.fairy_type_powers.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-purple-100">
                      <span className="text-xs font-bold text-rose-900 uppercase w-24 shrink-0">Pouvoirs :</span>
                      <span className="text-sm font-medium text-rose-800 flex-1">
                        {item.fairy_type_powers.map(l => l.power?.nom).filter(Boolean).join(', ')}
                      </span>
                    </div>
                  )}

                  {item.fairy_type_assets && item.fairy_type_assets.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-purple-100">
                      <span className="text-xs font-bold text-amber-900 uppercase w-24 shrink-0">Atouts :</span>
                      <span className="text-sm font-medium text-amber-800 flex-1">
                        {item.fairy_type_assets.map(l => l.asset?.nom).filter(Boolean).join(', ')}
                      </span>
                    </div>
                  )}

                </div>
              </div>

            </div>
          )}

          {/* ✨ Effets Mécaniques (Spécifique aux Atouts / Capacités / Pouvoirs) */}
          {item.effets && activeTab !== 'fairy_types' && (
            <div>
               <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">Effets en jeu</h4>
               <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm">
                 <p className="text-amber-900 leading-relaxed text-sm font-bold whitespace-pre-wrap">
                   {item.effets}
                 </p>
               </div>
            </div>
          )}

          {/* ✨ Réseau de compatibilité (Quelles fées possèdent tel Atout/Pouvoir ?) */}
          {linkedFairies.length > 0 && activeTab !== 'fairy_types' && (
            <div>
              <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">Fées possédant cette particularité</h4>
              <div className="flex flex-wrap gap-2 bg-stone-50 p-4 rounded-xl border border-stone-200 shadow-inner">
                {linkedFairies.map((f, idx) => (
                  <span key={idx} className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md border border-indigo-200 shadow-sm">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}