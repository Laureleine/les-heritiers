// src/components/Step1.js
// Version: 4.6.0
// Design : Sélecteur de catégories vertical (boutons empilés) + Liste filtrée

import React, { useState, useEffect } from 'react';
import { Info, Activity, Crown, CheckCircle, ThumbsUp, ThumbsDown, User } from 'lucide-react';

export default function Step1({ 
    character, 
    onNomChange, 
    onSexeChange, 
    onTypeFeeChange, 
    fairyTypesByAge, 
    fairyData = {} 
}) {
    // Catégorie active par défaut
    const [activeCategory, setActiveCategory] = useState('traditionnelles');
    const [selectedPreview, setSelectedPreview] = useState(character.typeFee || null);

    // Synchronisation au chargement
    useEffect(() => {
        if (character.typeFee) {
            if (!selectedPreview) setSelectedPreview(character.typeFee);
            
            const category = Object.keys(fairyTypesByAge).find(key => 
                fairyTypesByAge[key].includes(character.typeFee)
            );
            if (category) setActiveCategory(category);
        }
    }, [character.typeFee, fairyTypesByAge]);

    // Récupération des données de la fée sélectionnée
    const previewData = React.useMemo(() => {
        if (!selectedPreview || !fairyData) return null;
        if (fairyData[selectedPreview]) return fairyData[selectedPreview];
        
        const keyMatch = Object.keys(fairyData).find(
            key => key.toLowerCase() === selectedPreview.toLowerCase()
        );
        if (keyMatch) return fairyData[keyMatch];

        return null;
    }, [selectedPreview, fairyData]);

    const categories = Object.keys(fairyTypesByAge);

    // --- RENDU DES DÉTAILS (Panneau Droite) ---
    const renderDetails = () => (
        <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm sticky top-4 animate-fade-in">
            {/* En-tête */}
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-amber-900">{selectedPreview}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    previewData?.anciennete === 'traditionnelle' 
                    ? 'bg-amber-100 text-amber-800 border-amber-200' 
                    : 'bg-blue-100 text-blue-800 border-blue-200'
                }`}>
                    {previewData?.anciennete || 'Type inconnu'}
                </span>
            </div>

            <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">
                {previewData?.description || "Aucune description disponible."}
            </p>

            {/* Statistiques */}
            <div className="mb-6">
                <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-3 border-b border-amber-100 pb-1">
                    <Activity size={16} /> Potentiel Naturel
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(previewData?.caracteristiques || {}).map(([key, range]) => (
                        <div key={key} className="flex justify-between bg-stone-50 p-2 rounded border border-stone-100">
                            <span className="capitalize text-stone-600">{key.substring(0, 3)}</span>
                            <span className="font-bold text-amber-700">{range.min}-{range.max}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Avantages & Désavantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <h4 className="flex items-center gap-2 font-bold text-green-700 mb-2 text-sm">
                        <ThumbsUp size={14} /> Avantages
                    </h4>
                    <ul className="text-xs space-y-1 text-gray-600">
                        {previewData?.avantages && previewData.avantages.length > 0 ? (
                            previewData.avantages.map((adv, i) => <li key={i}>- {adv}</li>)
                        ) : (
                            <li>- Aucun avantage listé</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h4 className="flex items-center gap-2 font-bold text-red-700 mb-2 text-sm">
                        <ThumbsDown size={14} /> Désavantages
                    </h4>
                    <ul className="text-xs space-y-1 text-gray-600">
                        {previewData?.desavantages && previewData.desavantages.length > 0 ? (
                            previewData.desavantages.map((dis, i) => <li key={i}>- {dis}</li>)
                        ) : (
                            <li>- Aucun désavantage listé</li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Bouton Validation */}
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
                    <><CheckCircle /> Héritage sélectionné</>
                ) : (
                    <><Crown /> Choisir : {selectedPreview}</>
                )}
            </button>
        </div>
    );

    return (
        <div className="space-y-8">
            
            {/* === 1. BLOC IDENTITÉ === */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-4 flex items-center gap-2">
                    <User size={20} /> Identité du Faux-Semblant
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Champ NOM */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nom du personnage</label>
                        <input
                            type="text"
                            value={character.nom}
                            onChange={(e) => onNomChange(e.target.value)}
                            placeholder="Ex: Arthur Pendragon"
                            className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none font-serif text-lg bg-white"
                        />
                    </div>

                    {/* Champ SEXE */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Sexe</label>
                        <div className="flex gap-4">
                            <button
                                onClick={() => onSexeChange('Homme')}
                                className={`flex-1 py-3 rounded-lg border font-serif font-bold transition-all ${
                                    character.sexe === 'Homme'
                                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-amber-400'
                                }`}
                            >
                                Homme
                            </button>
                            <button
                                onClick={() => onSexeChange('Femme')}
                                className={`flex-1 py-3 rounded-lg border font-serif font-bold transition-all ${
                                    character.sexe === 'Femme'
                                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-amber-400'
                                }`}
                            >
                                Femme
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* === 2. SÉLECTION DU TYPE DE FÉE === */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* COLONNE GAUCHE : SÉLECTEUR VERTICAL + LISTE (Largeur 4/12) */}
                <div className="lg:col-span-4 flex flex-col gap-4 h-[600px]">
                    
                    {/* A. Boutons de Catégories (Empilés verticalement) */}
                    <div className="flex flex-col gap-2 p-2 bg-gray-100 rounded-xl border border-gray-200">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">Filtrer par origine</span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`w-full px-4 py-3 rounded-lg text-left font-bold capitalize transition-all flex items-center justify-between ${
                                    activeCategory === cat 
                                    ? 'bg-white text-amber-900 shadow-md ring-1 ring-amber-200 border-l-4 border-amber-500' 
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    {cat === 'traditionnelles' && "🏛️"}
                                    {cat === 'modernes' && "⚡"}
                                    {cat}
                                </span>
                                {activeCategory === cat && <div className="w-2 h-2 rounded-full bg-amber-500"></div>}
                            </button>
                        ))}
                    </div>

                    {/* B. Liste des Fées (Filtrée) */}
                    <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar border-t border-gray-100 pt-2">
                        {fairyTypesByAge[activeCategory]?.map(type => {
                            const isSelected = selectedPreview === type;
                            const isValidated = character.typeFee === type;
                            return (
                                <button
                                    key={type}
                                    onClick={() => setSelectedPreview(type)}
                                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all flex justify-between items-center ${
                                        isSelected 
                                        ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold shadow-sm ring-1 ring-amber-200' 
                                        : 'border-transparent bg-white hover:bg-white hover:border-gray-300 text-gray-600 shadow-sm'
                                    }`}
                                >
                                    <span>{type}</span>
                                    {isValidated && <CheckCircle size={16} className="text-green-600" />}
                                </button>
                            );
                        })}
                        {(!fairyTypesByAge[activeCategory] || fairyTypesByAge[activeCategory].length === 0) && (
                            <div className="text-center text-gray-400 italic p-4">Aucune fée dans cette catégorie.</div>
                        )}
                    </div>
                </div>

                {/* COLONNE DROITE : DÉTAILS (Largeur 8/12) */}
                <div className="lg:col-span-8">
                    {previewData ? renderDetails() : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 p-8">
                            <Info size={48} className="mb-4 opacity-50" />
                            <p>Cliquez sur une catégorie (ex: Traditionnelles)</p>
                            <p>puis sélectionnez une fée pour voir sa fiche.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}