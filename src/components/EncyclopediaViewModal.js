
import React from 'react';
import { X, BookOpen, ShieldCheck, Sparkles, Star, Zap, Info, Activity, Briefcase, Coins, Crown, TrendingUp, Users, VenetianMask } from '../config/icons';
import { getMagicBadges } from '../data/DictionnaireJeu';

export default function EncyclopediaViewModal({ item, activeTab, isInitiated, onClose }) {
  if (!item) return null;

  const title = item.name || item.nom;
  const desc = item.description || item.desc;

  // Déterminer le type d'icône selon l'onglet
  let Icon = BookOpen;
  if (activeTab === 'fairy_types') Icon = Sparkles;
  if (activeTab === 'fairy_powers') Icon = Zap;
  if (activeTab === 'fairy_assets') Icon = Star;
  if (activeTab === 'fairy_capacites') Icon = Sparkles;
  if (activeTab === 'social_items') Icon = Briefcase;
  if (activeTab === 'figures') Icon = Users;

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
            {item.is_official === true && (
              <span className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 shadow-sm">
                📚 Archive Officielle
              </span>
            )}
            {item.is_official === false && (
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
            {/* Badges spécifiques aux éléments de Vie Sociale */}
            {activeTab === 'social_items' && item.categorie && (
              <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1 rounded-full border border-stone-200 uppercase tracking-wider shadow-sm">
                {item.categorie === 'metier' ? 'Métier' : item.categorie === 'statut' ? 'Statut' : item.categorie === 'objet' ? 'Équipement' : item.categorie === 'contact' ? 'Contact' : item.categorie === 'langue' ? 'Langue' : item.categorie}
              </span>
            )}
            {activeTab === 'social_items' && item.categorie === 'metier' && (
              <>
                {!item.is_secondaire ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 shadow-sm">
                    <Crown size={12} /> Métier Principal
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 shadow-sm">
                    <TrendingUp size={12} /> Métier Secondaire
                  </span>
                )}
                {item.fortune_score !== null && item.fortune_score !== undefined && !item.is_secondaire && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 shadow-sm">
                    <Coins size={12} /> Fortune {item.fortune_score}
                  </span>
                )}
                {item.fortune_bonus !== null && item.fortune_bonus !== undefined && item.is_secondaire && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 shadow-sm">
                    <Coins size={12} /> Fortune +{item.fortune_bonus}
                  </span>
                )}
              </>
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

              {/* 🗝️ FICHE DU DOCTE — Initiés seulement */}
              {isInitiated && (item.lore_apparence || item.lore_taille || item.lore_mode_reproduction || item.lore_habitat || item.lore_caractere || item.lore_note_docte || item.lore_personnages_celebres?.length > 0) && (
                <div className="bg-amber-100 border-2 border-amber-700 rounded-xl p-5 shadow-md space-y-4">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest flex items-center gap-2">
                    🗝️ Fiche du Docte — Cercle des Initiés
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.lore_apparence && (
                      <div>
                        <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Apparence</h5>
                        <p className="text-sm text-amber-950 font-serif whitespace-pre-wrap">{item.lore_apparence}</p>
                      </div>
                    )}
                    {item.lore_taille && (
                      <div>
                        <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Taille & Morphologie</h5>
                        <p className="text-sm text-amber-950 font-serif whitespace-pre-wrap">{item.lore_taille}</p>
                      </div>
                    )}
                    {item.lore_mode_reproduction && (
                      <div>
                        <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Mode de reproduction</h5>
                        <p className="text-sm text-amber-950 font-serif whitespace-pre-wrap">{item.lore_mode_reproduction}</p>
                      </div>
                    )}
                    {item.lore_habitat && (
                      <div>
                        <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Habitat</h5>
                        <p className="text-sm text-amber-950 font-serif whitespace-pre-wrap">{item.lore_habitat}</p>
                      </div>
                    )}
                  </div>
                  {item.lore_caractere && (
                    <div>
                      <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Caractère</h5>
                      <p className="text-sm text-amber-950 font-serif whitespace-pre-wrap">{item.lore_caractere}</p>
                    </div>
                  )}
                  {item.lore_personnages_celebres?.length > 0 && (
                    <div>
                      <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">Personnages célèbres</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.lore_personnages_celebres.map((p, idx) => (
                          <span key={idx} className="text-xs font-bold text-amber-900 bg-amber-200 px-2.5 py-1 rounded-md border border-amber-400">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.lore_note_docte && (
                    <div className="border-t border-amber-300 pt-3">
                      <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Note du Docte</h5>
                      <p className="text-sm text-amber-950 font-serif italic whitespace-pre-wrap">{item.lore_note_docte}</p>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* ✨ SPÉCIFIQUE AUX ÉLÉMENTS DE VIE SOCIALE */}
          {activeTab === 'social_items' && (
            <div className="space-y-4 animate-fade-in">
              {/* Coûts et Économie */}
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Coins size={14} /> Économie
                </h4>
                <div className="flex flex-wrap gap-4">
                  {(item.cout !== null && item.cout !== undefined) && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-600 uppercase">Coût Classique :</span>
                      <span className="text-sm font-bold text-emerald-900">{item.cout} PP</span>
                    </div>
                  )}
                  {(item.cout_moderne !== null && item.cout_moderne !== undefined) && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-600 uppercase">Coût Moderne :</span>
                      <span className="text-sm font-bold text-emerald-900">{item.cout_moderne} PP</span>
                    </div>
                  )}
                  {item.is_choix_multiple && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-200 px-2 py-1 rounded-md">
                      Achat Multiple
                    </span>
                  )}
                </div>
              </div>

              {/* Fortune (pour les métiers) */}
              {item.categorie === 'metier' && (
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Crown size={14} /> Fortune
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-600 uppercase">Type :</span>
                      <span className="text-sm font-bold text-amber-900">
                        {item.is_secondaire ? 'Métier Secondaire' : 'Métier Principal'}
                      </span>
                    </div>
                    {!item.is_secondaire && (item.fortune_score !== null && item.fortune_score !== undefined) && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-600 uppercase">Rang de Fortune :</span>
                        <span className="text-sm font-bold text-amber-900">{item.fortune_score}</span>
                      </div>
                    )}
                    {item.is_secondaire && (item.fortune_bonus !== null && item.fortune_bonus !== undefined) && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-600 uppercase">Bonus Fortune :</span>
                        <span className="text-sm font-bold text-amber-900">+{item.fortune_bonus}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Profils Autorisés */}
              {item.profils_autorises && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm">
                  <h4 className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Star size={14} /> Profils Autorisés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(item.profils_autorises) ? item.profils_autorises : JSON.parse(item.profils_autorises || '[]')).map((profil, idx) => (
                      <span key={idx} className="text-xs font-bold text-blue-700 bg-blue-200 px-2.5 py-1 rounded-md">
                        {profil}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 🎭 SPÉCIFIQUE AUX FIGURES */}
          {activeTab === 'figures' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.titre && (
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm">
                    <h4 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-1">Titre</h4>
                    <p className="text-sm font-bold text-amber-900 font-serif">{item.titre}</p>
                  </div>
                )}
                {item.clan && (
                  <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 shadow-sm">
                    <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-1">Clan</h4>
                    <p className="text-sm font-bold text-indigo-900 font-serif">{item.clan}</p>
                  </div>
                )}
              </div>

              {item.faux_semblant && (
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-sm">
                  <h4 className="text-xs font-bold text-purple-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <VenetianMask size={16} /> Faux-Semblant
                  </h4>
                  {item.faux_semblant_type_fee && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-purple-600 uppercase">Type de Fée :</span>
                      <span className="text-sm font-bold text-purple-900">{item.faux_semblant_type_fee}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.apparence_masquee && (
                      <div className="bg-white p-3 rounded-lg border border-purple-100">
                        <h5 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Users size={12} /> Apparence Masquée
                        </h5>
                        <p className="text-sm text-purple-900 font-serif whitespace-pre-wrap">{item.apparence_masquee}</p>
                      </div>
                    )}
                    {item.apparence_demasquee && (
                      <div className="bg-white p-3 rounded-lg border border-purple-100">
                        <h5 className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <VenetianMask size={12} /> Apparence Démasquée
                        </h5>
                        <p className="text-sm text-purple-900 font-serif whitespace-pre-wrap">{item.apparence_demasquee}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
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