// src/components/Step1.js
import React, { useState, useEffect, useMemo } from 'react';
import { Crown, CheckCircle, Users, AlertCircle, Info, Feather, User, Activity, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Step1({ 
    character, 
    onNomChange, 
    onNomFeeriqueChange, 
    onGenreHumainChange, 
    onSexeChange,        
    onTypeFeeChange, 
    fairyTypesByAge, 
    fairyData = {} 
}) {
    
    const [activeCategory, setActiveCategory] = useState('traditionnelles');
    const [selectedPreview, setSelectedPreview] = useState(character.typeFee || null);

    // Synchronisation initiale
    useEffect(() => {
        if (character.typeFee) {
            setSelectedPreview(character.typeFee);
            const isModerne = fairyTypesByAge.modernes.includes(character.typeFee);
            if (isModerne) setActiveCategory('modernes');
        }
    }, [character.typeFee, fairyTypesByAge]);

    // --- Récupération des données (Mémoïsée et insensible à la casse) ---
    const previewData = useMemo(() => {
        if (!selectedPreview || !fairyData) return null;
        if (fairyData[selectedPreview]) return fairyData[selectedPreview];
        
        const keyMatch = Object.keys(fairyData).find(
            key => key.toLowerCase() === selectedPreview.toLowerCase()
        );
        if (keyMatch) return fairyData[keyMatch];
        return null;
    }, [selectedPreview, fairyData]);

    const categories = Object.keys(fairyTypesByAge);

    // --- Logique Sexe Féérique (Biologique) ---
    const isGenderAllowed = (gender) => {
        if (!previewData) return true;
        const allowed = previewData.allowedGenders || ['Homme', 'Femme'];
        return allowed.includes(gender);
    };

    const getDisplayName = () => {
        if (!previewData) return selectedPreview;
        // Le nom change selon le sexe biologique (Incube/Succube)
        if (character.sexe === 'Homme') return previewData.nameMasculine || previewData.name || selectedPreview;
        if (character.sexe === 'Femme') return previewData.nameFeminine || previewData.name || selectedPreview;
        return previewData.name || selectedPreview;
    };

    // Auto-correction du sexe si incompatible lors du changement de fée
    useEffect(() => {
        if (previewData && character.sexe && !isGenderAllowed(character.sexe)) {
            const allowed = previewData.allowedGenders || ['Homme', 'Femme'];
            if (allowed.length > 0) onSexeChange(allowed);
        }
    }, [selectedPreview, previewData]);

    // --- Rendu Panneau Détails (Droite) ---
    const renderDetails = () => {
        if (!previewData) return (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Crown size={48} className="mb-4 opacity-50" />
                <p>Sélectionnez un héritage à gauche</p>
            </div>
        );

        return (
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-stone-200 h-full flex flex-col relative overflow-hidden">
                
                {/* En-tête : Nom et Ancienneté */}
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

                {/* Corps du texte (Scrollable) */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar mb-4">
                    
                    {/* Description Textuelle */}
                    <div className="text-gray-600 italic text-sm leading-relaxed border-l-4 border-amber-200 pl-4">
                        {previewData.description || "Aucune description disponible."}
                    </div>

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
					
                </div>

                {/* SÉLECTEUR SEXE BIOLOGIQUE (FÉÉRIQUE) */}
                <div className="mb-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2">
                        <Users size={14} /> Sexe Féérique (Biologique)
                    </h3>
                    <div className="flex gap-3">
                        {['Homme', 'Femme'].map((g) => {
                            const allowed = isGenderAllowed(g);
                            const isSelected = character.sexe === g;
                            return (
                                <button
                                    key={g}
                                    onClick={() => allowed && onSexeChange(g)}
                                    disabled={!allowed}
                                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold border transition-all flex items-center justify-center gap-2 ${
                                        isSelected
                                        ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                                        : allowed
                                            ? 'bg-white text-gray-600 border-gray-300 hover:border-amber-400 hover:bg-amber-50'
                                            : 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed opacity-60'
                                    }`}
                                >
                                    <span>{g === 'Homme' ? '♂️' : '♀️'}</span>
                                    {g}
                                </button>
                            );
                        })}
                    </div>
                    {/* Messages d'erreur si restriction */}
                    {!isGenderAllowed('Homme') && <div className="mt-2 text-xs text-amber-600 flex items-center gap-1"><Info size={12}/> Exclusivement féminin.</div>}
                    {!isGenderAllowed('Femme') && <div className="mt-2 text-xs text-amber-600 flex items-center gap-1"><Info size={12}/> Exclusivement masculin.</div>}
                </div>

                {/* Bouton Validation */}
                <button 
                    onClick={() => onTypeFeeChange(selectedPreview)}
                    disabled={character.typeFee === selectedPreview || !character.sexe}
                    className={`w-full py-4 rounded-xl font-serif text-lg font-bold shadow-md transition-all flex justify-center items-center gap-2 ${
                        character.typeFee === selectedPreview
                        ? 'bg-green-600 text-white cursor-default ring-2 ring-green-200' 
                        : character.sexe 
                            ? 'bg-amber-600 text-white hover:bg-amber-700 hover:-translate-y-1'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    {character.typeFee === selectedPreview ? (
                        <><CheckCircle /> Héritage sélectionné</>
                    ) : !character.sexe ? (
                        <><AlertCircle size={18} /> Choisir sexe féérique</>
                    ) : (
                        <><Crown /> Choisir : {getDisplayName()}</>
                    )}
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-6 h-full min-h-[600px]">
            
            {/* === 1. BLOC IDENTITÉ SOCIALE (PLEINE LARGEUR) === */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    
                    {/* Nom Humain */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-1">
                            <User size={12}/> Nom Humain (Masque)
                        </label>
                        <input 
                            type="text" 
                            value={character.nom} 
                            onChange={(e) => onNomChange(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 outline-none font-serif text-lg bg-white shadow-inner"
                            placeholder="Arthur Pendragon"
                        />
                    </div>

                    {/* Nom Féérique */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-1">
                            <Feather size={12}/> Nom Féérique (Optionnel)
                        </label>
                        <input 
                            type="text" 
                            value={character.nomFeerique || ''} 
                            onChange={(e) => onNomFeeriqueChange(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 outline-none font-serif text-lg bg-white text-purple-900 shadow-inner"
                            placeholder="Oan Pervallon"
                        />
                    </div>

                    {/* Genre Humain (Apparence sociale) */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Genre Humain (Apparence)</label>
                        <div className="flex rounded-lg overflow-hidden border border-gray-300 h-[46px] shadow-sm">
                            {['Masculin', 'Féminin', 'Androgyne'].map(genre => (
                                <button
                                    key={genre}
                                    onClick={() => onGenreHumainChange(genre)}
                                    className={`flex-1 text-xs font-bold transition-colors ${
                                        character.genreHumain === genre
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border-l first:border-l-0 border-gray-200'
                                    }`}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* === 2. GRILLE BASSE (LISTE + DÉTAILS) === */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden">
                
                {/* COLONNE GAUCHE : LISTE */}
                <div className="lg:col-span-4 flex flex-col h-full bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                    
                    {/* Onglets Catégories */}
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

                    {/* Liste des Fées */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {fairyTypesByAge[activeCategory]?.map((fairyName) => (
                            <button
                                key={fairyName}
                                onClick={() => setSelectedPreview(fairyName)}
                                className={`w-full text-left px-4 py-3 border-b border-gray-50 transition-all flex items-center justify-between group ${
                                    selectedPreview === fairyName 
                                    ? 'bg-amber-100 text-amber-900 border-l-4 border-l-amber-600 pl-3' 
                                    : 'hover:bg-stone-50 text-gray-600'
                                }`}
                            >
                                <span className="font-serif font-medium">{fairyName}</span>
                                {character.typeFee === fairyName && <CheckCircle size={16} className="text-green-600"/>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* COLONNE DROITE : DÉTAILS */}
                <div className="lg:col-span-8 h-full">
                    {renderDetails()}
                </div>
            </div>
        </div>
    );
}