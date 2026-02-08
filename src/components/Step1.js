// src/components/Step1.js
// Version: 4.0.0
// Feature : A/B Testing intégré (Vue Liste vs Vue Catalogue)

import React, { useState, useEffect } from 'react';
import { Info, Shield, Zap, Activity, Crown, LayoutList, LayoutGrid, CheckCircle } from 'lucide-react';

export default function Step1({ character, onTypeFeeChange, fairyTypesByAge, fairyData = {} }) {
  // État pour basculer entre les deux designs ('list' ou 'grid')
  const [viewMode, setViewMode] = useState('list'); 
  
  // État local pour la prévisualisation (ne change pas encore le personnage)
  const [selectedPreview, setSelectedPreview] = useState(character.typeFee || null);

  // Si on a déjà un type, on le sélectionne au montage
  useEffect(() => {
    if (character.typeFee && !selectedPreview) {
      setSelectedPreview(character.typeFee);
    }
  }, [character.typeFee]);

  // Récupérer les données de la fée prévisualisée
  const previewData = selectedPreview ? fairyData[selectedPreview] : null;

  // --- RENDU DES DÉTAILS (Commun aux deux vues) ---
  const renderDetails = () => (
    <div className="animate-fade-in h-full flex flex-col">
        {/* En-tête de la fiche */}
        <div className="mb-6 border-b border-stone-200 pb-4">
            <div className="flex justify-between items-start">
            <h2 className="text-4xl font-serif text-amber-900 mb-1">{selectedPreview}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                previewData?.anciennete === 'traditionnelle' 
                ? 'bg-amber-100 text-amber-800 border-amber-200' 
                : 'bg-blue-100 text-blue-800 border-blue-200'
            }`}>
                {previewData?.anciennete || 'Type inconnu'}
            </span>
            </div>
            <p className="text-gray-600 italic mt-4 leading-relaxed font-serif text-lg">
            {previewData?.description || "Aucune description disponible pour ce type de fée."}
            </p>
        </div>

        {/* Statistiques clés (Min/Max) */}
        <div className="mb-6">
            <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2 uppercase text-xs tracking-widest">
            <Activity size={14}/> Potentiel Naturel
            </h4>
            <div className="grid grid-cols-4 gap-2">
            {Object.entries(previewData?.caracteristiques || {}).map(([key, range]) => (
                <div key={key} className="bg-white p-2 rounded border border-stone-200 text-center shadow-sm">
                <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">{key.substring(0, 3)}</div>
                <div className="font-serif text-lg text-amber-900 font-bold">
                    {range.min}-{range.max}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Capacités & Indices */}
        <div className="grid grid-cols-1 gap-3 mb-8">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-bold text-purple-900 text-sm mb-1 flex items-center gap-2">
                <Crown size={14}/> Spécificités
                </h4>
                <p className="text-xs text-purple-800">
                    Accès à des pouvoirs uniques et des compétences de prédilection (Bonus +2).
                </p>
            </div>
        </div>

        {/* BOUTON DE VALIDATION */}
        <div className="mt-auto pt-4">
            <button
            onClick={() => onTypeFeeChange(selectedPreview)}
            className={`w-full py-4 rounded-xl font-serif text-lg font-bold shadow-md transition-all flex justify-center items-center gap-2 ${
                character.typeFee === selectedPreview
                ? 'bg-green-600 text-white cursor-default ring-2 ring-green-200'
                : 'bg-amber-600 text-white hover:bg-amber-700 hover:-translate-y-1'
            }`}
            disabled={character.typeFee === selectedPreview}
            >
            {character.typeFee === selectedPreview ? (
                <><CheckCircle size={20}/> Sélectionné</>
            ) : (
                <>Choisir cet Héritage</>
            )}
            </button>
        </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full min-h-[600px]">
        
        {/* 1. SWITCHER DE VUE (Haut de page) */}
        <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg flex shadow-inner">
                <button 
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all font-bold text-sm ${
                        viewMode === 'list' ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    <LayoutList size={16}/> Vue Liste
                </button>
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all font-bold text-sm ${
                        viewMode === 'grid' ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    <LayoutGrid size={16}/> Vue Catalogue
                </button>
            </div>
        </div>

        {/* 2. CONTENU PRINCIPAL */}
        
        {/* === MODE LISTE (Split Screen) === */}
        {viewMode === 'list' && (
            <div className="flex flex-col lg:flex-row gap-6 h-full flex-1">
                {/* Colonne Gauche : Liste */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
                    {/* Traditionnelles */}
                    <div>
                        <h3 className="text-amber-800 font-serif font-bold mb-2 flex items-center gap-2 sticky top-0 bg-white/90 py-2 z-10 backdrop-blur-sm">
                            <Shield size={16}/> Traditionnelles
                        </h3>
                        <div className="space-y-1">
                            {fairyTypesByAge?.traditionnelles?.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedPreview(type)}
                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all flex justify-between items-center ${
                                selectedPreview === type
                                    ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold shadow-sm ring-1 ring-amber-200'
                                    : 'border-transparent hover:bg-gray-50 text-gray-600'
                                }`}
                            >
                                <span className="font-serif">{type}</span>
                                {character.typeFee === type && <CheckCircle size={14} className="text-green-600"/>}
                            </button>
                            ))}
                        </div>
                    </div>

                    {/* Modernes */}
                    <div>
                        <h3 className="text-blue-800 font-serif font-bold mb-2 flex items-center gap-2 sticky top-0 bg-white/90 py-2 z-10 backdrop-blur-sm">
                            <Zap size={16}/> Modernes
                        </h3>
                        <div className="space-y-1">
                            {fairyTypesByAge?.modernes?.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedPreview(type)}
                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all flex justify-between items-center ${
                                selectedPreview === type
                                    ? 'border-blue-500 bg-blue-50 text-blue-900 font-bold shadow-sm ring-1 ring-blue-200'
                                    : 'border-transparent hover:bg-gray-50 text-gray-600'
                                }`}
                            >
                                <span className="font-serif">{type}</span>
                                {character.typeFee === type && <CheckCircle size={14} className="text-green-600"/>}
                            </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colonne Droite : Détails */}
                <div className="w-full lg:w-2/3 bg-stone-50 rounded-2xl border-2 border-stone-100 p-8 shadow-inner flex flex-col relative min-h-[500px]">
                    {previewData ? renderDetails() : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-300">
                            <Info size={64} className="mb-4 opacity-20"/>
                            <p className="font-serif text-xl opacity-50">Sélectionnez une fée pour découvrir ses secrets.</p>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* === MODE CATALOGUE (Grille + Modal/Panel) === */}
        {viewMode === 'grid' && (
            <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* On fusionne les deux listes pour la grille */}
                    {[...(fairyTypesByAge?.traditionnelles || []), ...(fairyTypesByAge?.modernes || [])].map(type => {
                        const isSelected = selectedPreview === type;
                        const isValidated = character.typeFee === type;
                        const isTrad = fairyTypesByAge?.traditionnelles?.includes(type);

                        return (
                            <div 
                                key={type}
                                onClick={() => setSelectedPreview(type)}
                                className={`
                                    relative p-6 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center text-center gap-3 aspect-square justify-center group
                                    ${isSelected 
                                        ? (isTrad ? 'border-amber-500 bg-amber-50 shadow-md scale-105 z-10' : 'border-blue-500 bg-blue-50 shadow-md scale-105 z-10') 
                                        : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'
                                    }
                                `}
                            >
                                {isValidated && (
                                    <div className="absolute top-2 right-2 bg-green-100 text-green-600 rounded-full p-1">
                                        <CheckCircle size={14} />
                                    </div>
                                )}
                                
                                <div className={`p-3 rounded-full ${isTrad ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {isTrad ? <Shield size={24}/> : <Zap size={24}/>}
                                </div>
                                
                                <h3 className={`font-serif font-bold text-lg ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                                    {type}
                                </h3>
                                
                                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                                    {isTrad ? 'Tradition' : 'Moderne'}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Zone de détail en bas pour la grille */}
                {selectedPreview && (
                    <div className="mt-8 border-t-2 border-dashed border-gray-200 pt-8 animate-slide-up">
                        <div className="bg-white rounded-2xl border-2 border-amber-100 p-8 shadow-lg max-w-3xl mx-auto">
                            {renderDetails()}
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
  );
}