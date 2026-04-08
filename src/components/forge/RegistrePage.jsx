// src/components/forge/RegistrePage.jsx

import React, { useState } from 'react';
import { useForge } from '../../context/ForgeContext';
import { Filter, Archive, EyeOff, ArrowLeft, Plus } from 'lucide-react';

export default function RegistrePage({ onBack }) {
  const { entrees, loading, deplacerCarteKanban, toggleArchive } = useForge();
  const [filtreType, setFiltreType] = useState('Anomalie');
  const [tri, setTri] = useState('Manuel');
  const [voirArchives, setVoirArchives] = useState(false);
  
  // État local pour le Drag & Drop Visuel
  const [dragOverId, setDragOverId] = useState(null);

  const colonnes = filtreType === 'Anomalie' 
    ? ['Vu', 'En cours', 'Résolu'] 
    : ["À l'étude", 'Planifié', 'Intégré'];

  const getCouleurStatut = (statut) => {
    if (['Résolu', 'Intégré'].includes(statut)) return 'bg-green-100 text-green-800 border-green-300';
    if (['En cours', 'Planifié'].includes(statut)) return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-stone-100 text-stone-800 border-stone-300';
  };

  // Traitement des données
  let cartesAffichees = entrees.filter(e => e.type_entree === filtreType);
  if (!voirArchives) cartesAffichees = cartesAffichees.filter(e => !e.is_masque);

  if (tri === 'Recents') cartesAffichees.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (tri === 'Anciens') cartesAffichees.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  if (tri === 'Gravite') {
    const poids = { 'Bloquant': 3, 'Gênant': 2, 'Esthétique': 1 };
    cartesAffichees.sort((a, b) => (poids[b.niveau_gravite] || 0) - (poids[a.niveau_gravite] || 0));
  }

  // --- HANDLERS DND HTML5 ---
  const onDragStart = (e, carteId) => {
    if (tri !== 'Manuel') {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text/plain', carteId);
  };

  const onDragOver = (e, carteId) => {
    e.preventDefault();
    if (carteId !== dragOverId) setDragOverId(carteId);
  };

  const onDrop = (e, colonneCible) => {
    e.preventDefault();
    const carteId = e.dataTransfer.getData('text/plain');
    if (carteId) {
      deplacerCarteKanban(carteId, colonneCible, dragOverId);
    }
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
          
          {/* ✨ LA MAGIE EST ICI : Le Bouton d'Invocation */}
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
            <Filter size={16} className="text-stone-400" />
            <select value={tri} onChange={e => setTri(e.target.value)} className="text-sm outline-none bg-transparent font-bold text-stone-700">
              <option value="Manuel">Tri Manuel (Kanban)</option>
              <option value="Recents">Plus Récents</option>
              <option value="Anciens">Plus Anciens</option>
              <option value="Gravite">Plus Graves</option>
            </select>
          </div>
        </div>
      </div>

      {/* COLONNES KANBAN */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {colonnes.map(colNom => {
          const cartesColonne = cartesAffichees.filter(c => c.statut === colNom);
          
          return (
            <div 
              key={colNom}
              onDragOver={(e) => { e.preventDefault(); setDragOverId(null); }}
              onDrop={(e) => onDrop(e, colNom)}
              className="bg-stone-100/50 rounded-xl border border-stone-200 p-4 flex flex-col h-full"
            >
              <h3 className="font-bold text-stone-600 mb-4 flex items-center justify-between uppercase tracking-widest text-xs">
                {colNom} <span className="bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full">{cartesColonne.length}</span>
              </h3>

              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pb-12">
                {cartesColonne.map(carte => (
                  <div
                    key={carte.id}
                    draggable={tri === 'Manuel'}
                    onDragStart={(e) => onDragStart(e, carte.id)}
                    onDragOver={(e) => onDragOver(e, carte.id)}
                    className={`bg-white p-4 rounded-xl border-2 shadow-sm cursor-grab active:cursor-grabbing transition-all relative group ${
                      dragOverId === carte.id ? 'border-t-4 border-t-amber-500' : 'border-stone-200 hover:border-amber-300'
                    } ${carte.is_masque ? 'opacity-60' : ''}`}
                  >
                    {/* Bouton d'archivage caché par défaut */}
                    <button onClick={() => toggleArchive(carte.id, carte.is_masque)} className="absolute top-2 right-2 p-1.5 bg-stone-50 text-stone-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {carte.is_masque ? <EyeOff size={14}/> : <Archive size={14}/>}
                    </button>

                    <div className="flex gap-2 mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${getCouleurStatut(carte.statut)}`}>{carte.statut}</span>
                      {carte.niveau_gravite && <span className="text-[10px] bg-red-50 text-red-800 border border-red-200 px-2 py-0.5 rounded-full font-bold">{carte.niveau_gravite}</span>}
                    </div>
                    
                    <h4 className="font-serif font-bold text-stone-800 mb-2 pr-6">{carte.titre}</h4>
                    <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed mb-3">{carte.description}</p>
                    
                    {carte.capture_url && (
                      <div className="mt-2 h-24 rounded-lg bg-stone-100 bg-cover bg-center border border-stone-200" style={{ backgroundImage: `url(${carte.capture_url})` }} />
                    )}
                    
                    <div className="mt-3 text-[10px] font-bold text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-2">
                      v{carte.version_constatee}
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
