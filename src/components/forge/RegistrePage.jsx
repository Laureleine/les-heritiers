// src/components/forge/RegistrePage.jsx
import React, { useState } from 'react';
import { useForge } from '../../context/ForgeContext';
import { useCharacter } from '../../context/CharacterContext';
import { Filter, Archive, EyeOff, ArrowLeft, Plus, User, ThumbsUp, ThumbsDown, Key } from 'lucide-react'; // ✨ Ajout de Key

export default function RegistrePage({ onBack }) {
  const { entrees, loading, deplacerCarteKanban, toggleArchive, voterEntree, toggleInitieOnly } = useForge();
  const { userProfile } = useCharacter();
  
  const myUserId = userProfile?.id;
  // ✨ DÉTECTION DU VIP POUR LE FILTRE !
  const isInitiated = userProfile?.profile?.is_initiated === true || ['super_admin', 'gardien'].includes(userProfile?.profile?.role);

  const [filtreType, setFiltreType] = useState('Anomalie');
  const [tri, setTri] = useState('Manuel');
  const [voirArchives, setVoirArchives] = useState(false);
  const [dragOverId, setDragOverId] = useState(null);

  const colonnes = filtreType === 'Anomalie'
    ? ['Vu', 'En cours', 'Résolu']
    : ["À l'étude", 'Planifié', 'Intégré'];

  const getCouleurStatut = (statut) => {
    if (['Résolu', 'Intégré'].includes(statut)) return 'bg-green-100 text-green-800 border-green-300';
    if (['En cours', 'Planifié'].includes(statut)) return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-stone-100 text-stone-800 border-stone-300';
  };

  // ✨ LE CŒUR DU TRI
  let cartesAffichees = entrees.filter(e => e.type_entree === filtreType);
  if (!voirArchives) cartesAffichees = cartesAffichees.filter(e => !e.is_masque);
  
  // ✨ LE FILTRE ABSOLU : On cache les tickets secrets aux simples joueurs !
  if (!isInitiated) {
    cartesAffichees = cartesAffichees.filter(e => e.is_initie_only !== true);
  }

  if (tri === 'Recents') cartesAffichees.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (tri === 'Anciens') cartesAffichees.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  if (tri === 'Votes') cartesAffichees.sort((a, b) => ((b.votes?.up?.length || 0) - (b.votes?.down?.length || 0)) - ((a.votes?.up?.length || 0) - (a.votes?.down?.length || 0)));

  const onDragStart = (e, carteId) => { e.dataTransfer.setData('text/plain', carteId); };
  const onDragOver = (e, carteId) => {
    e.preventDefault();
    if (carteId !== dragOverId) setDragOverId(carteId);
  };
  const onDrop = (e, colonneCible) => {
    e.preventDefault();
    const carteId = e.dataTransfer.getData('text/plain');
    if (carteId) deplacerCarteKanban(carteId, colonneCible, dragOverId);
    setDragOverId(null);
  };

  if (loading) return <div className="p-8 text-center animate-pulse">Chargement de la Forge...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans text-stone-800 h-screen flex flex-col">
      {/* HEADER & FILTRES */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-stone-200 pb-4 gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 bg-stone-200 text-stone-600 hover:bg-stone-300 hover:text-stone-900 rounded-lg transition-colors shadow-sm">
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-3xl font-serif font-bold text-amber-900">Registre de la Forge</h1>
        </div>

        <div className="flex gap-4 items-center flex-wrap justify-end">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-forge-widget', { detail: { type: filtreType } }))}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <Plus size={18} /> Nouvelle Entrée
          </button>
          
          <button onClick={() => setVoirArchives(!voirArchives)} className={`px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 border ${voirArchives ? 'bg-stone-800 text-white' : 'bg-white text-stone-600'}`}>
            {voirArchives ? <EyeOff size={16}/> : <Archive size={16}/>} Archives
          </button>

          <div className="flex items-center bg-white border border-stone-300 rounded-lg p-1 shadow-sm">
            <button onClick={() => setFiltreType('Anomalie')} className={`px-4 py-1 text-sm font-bold rounded ${filtreType === 'Anomalie' ? 'bg-red-50 text-red-700' : 'text-stone-500'}`}>Bugs</button>
            <button onClick={() => setFiltreType('Inspiration')} className={`px-4 py-1 text-sm font-bold rounded ${filtreType === 'Inspiration' ? 'bg-emerald-50 text-emerald-700' : 'text-stone-500'}`}>Idées</button>
          </div>

          <div className="flex items-center gap-2 bg-white border border-stone-300 rounded-lg px-2 py-1 shadow-sm">
            <Filter size={14} className="text-stone-400" />
            <select value={tri} onChange={(e) => setTri(e.target.value)} className="bg-transparent text-sm font-bold text-stone-700 outline-none cursor-pointer">
              <option value="Manuel">Tri Manuel</option>
              <option value="Votes">Par Votes</option>
              <option value="Recents">Plus récents</option>
              <option value="Anciens">Plus anciens</option>
            </select>
          </div>
        </div>
      </div>

      {/* LE KANBAN */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {colonnes.map(colStatut => {
          const cartesDeLaColonne = cartesAffichees.filter(c => c.statut === colStatut);
          return (
            <div 
              key={colStatut} 
              onDragOver={(e) => onDragOver(e, null)} 
              onDrop={(e) => onDrop(e, colStatut)}
              className="bg-stone-100 rounded-2xl p-4 flex flex-col h-full border border-stone-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-stone-700 uppercase tracking-widest text-sm">{colStatut}</h3>
                <span className="text-xs font-bold bg-stone-200 text-stone-500 px-2 py-0.5 rounded-full">{cartesDeLaColonne.length}</span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 pb-10">
                {cartesDeLaColonne.map(carte => (
                  <div 
                    key={carte.id} 
                    draggable 
                    onDragStart={(e) => onDragStart(e, carte.id)}
                    onDragOver={(e) => onDragOver(e, carte.id)}
                    className={`bg-white p-4 rounded-xl border-2 shadow-sm cursor-grab active:cursor-grabbing transition-all relative group ${
                      dragOverId === carte.id ? 'border-t-4 border-t-amber-500' : 'border-stone-200 hover:border-amber-300'
                    } ${carte.is_masque ? 'opacity-60' : ''}`}
                  >
                    
					{/* ✨ LA CHECKBOX SECRÈTE DES INITIÉS */}
                    {isInitiated && (
                      <label className="absolute -top-3 -left-3 bg-purple-100 text-purple-800 px-2 py-1.5 rounded-full border border-purple-300 shadow-sm z-10 flex items-center gap-1.5 cursor-pointer hover:bg-purple-200 transition-colors" title="Restreindre l'accès aux seuls Initiés">
                        <input
                          type="checkbox"
                          checked={carte.is_initie_only || false}
                          onChange={() => toggleInitieOnly(carte.id, carte.is_initie_only)}
                          className="w-3.5 h-3.5 text-purple-600 rounded cursor-pointer"
                        />
                        <Key size={14} />
                      </label>
                    )}

                    <button onClick={() => toggleArchive(carte.id, carte.is_masque)} className="absolute top-2 right-2 p-1.5 bg-stone-50 text-stone-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {carte.is_masque ? <EyeOff size={14}/> : <Archive size={14}/>}
                    </button>

                    <div className="flex gap-2 mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${getCouleurStatut(carte.statut)}`}>{carte.statut}</span>
                      {carte.niveau_gravite && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${carte.niveau_gravite === 'Bloquant' ? 'bg-red-100 text-red-700' : carte.niveau_gravite === 'Gênant' ? 'bg-orange-100 text-orange-700' : 'bg-stone-100 text-stone-600'}`}>{carte.niveau_gravite}</span>}
                      {carte.benefice_creatif && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${carte.benefice_creatif === 'Nouveau Mécanisme' ? 'bg-emerald-100 text-emerald-700' : 'bg-teal-50 text-teal-600'}`}>{carte.benefice_creatif}</span>}
                    </div>

                    <h4 className="font-bold text-stone-900 mb-1 leading-tight">{carte.titre}</h4>
                    <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed whitespace-pre-wrap">{carte.description}</p>

                    {carte.capture_url && (
                      <div className="mt-2 h-24 rounded-lg bg-stone-100 bg-cover bg-center border border-stone-200" style={{ backgroundImage: `url(${carte.capture_url})` }} />
                    )}

                    <div className="mt-3 flex justify-between items-center text-[10px] font-bold text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span>v{carte.version_constatee}</span>
                        <span className="flex items-center gap-1 text-amber-700/80" title="Auteur du signalement">
                          <User size={10} /> {carte.profiles?.username || 'Anonyme'}
                        </span>
                      </div>

                      {/* 🗳️ La Zone de Vote Communautaire */}
                      <div className="flex items-center gap-2 bg-stone-50 px-2 py-1 rounded-lg border border-stone-200">
                        <button onClick={() => voterEntree(carte.id, 'up')} className="hover:scale-110 hover:text-emerald-600 transition-all cursor-pointer z-10" title="Voter Pour">
                          <ThumbsUp size={14} className={(carte.votes?.up || []).includes(myUserId) ? 'fill-emerald-500 text-emerald-600' : ''} />
                        </button>
                        <span className={`text-xs w-4 text-center ${((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0)) > 0 ? 'text-emerald-600' : ((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0)) < 0 ? 'text-red-600' : 'text-stone-500'}`}>
                          {((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0)) > 0 ? '+' : ''}{((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0))}
                        </span>
                        <button onClick={() => voterEntree(carte.id, 'down')} className="hover:scale-110 hover:text-red-600 transition-all cursor-pointer z-10" title="Voter Contre">
                          <ThumbsDown size={14} className={(carte.votes?.down || []).includes(myUserId) ? 'fill-red-500 text-red-600' : ''} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}