// src/components/Step1.js
// 10.4.0 // 10.6.0

import React, { useState, useEffect, useMemo } from 'react';
import { Crown, CheckCircle, Users, AlertCircle, Info, Feather, User, Activity, ThumbsUp, ThumbsDown, Heart, Scaling } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext'; // 👈 L'IMPORT (En haut du fichier)

export default function Step1() { // 👈 PLUS AUCUN PARAMÈTRE ICI !
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const { fairyData, fairyTypesByAge } = gameData;

  // Les remplaçants locaux :
  const onNomChange = (val) => { if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_FIELD', field: 'nom', value: val, gameData }); };
  const onSexeChange = (val) => { if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_FIELD', field: 'sexe', value: val, gameData }); };
  const onTypeFeeChange = (val) => { if (!isReadOnly) dispatchCharacter({ type: 'CHANGE_FAIRY_TYPE', typeFee: val, gameData }); };
  const onCharacterChange = (payload) => { if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload, gameData }); };
  const onTraitsFeeriquesChange = (v) => { if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { traitsFeeriques: v }, gameData }); };

  const [activeCategory, setActiveCategory] = useState('traditionnelles'); // 👈 VOUS GARDEZ CECI INTACT
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

	// Fonction utilitaire pour le texte du modificateur
	const getTailleDisplay = (taille) => {
		switch(taille) {
			case 'Petite': return { text: 'Petite Taille', mod: '+1 Esquive', color: 'text-green-600 bg-green-50 border-green-200' };
			case 'Grande': return { text: 'Grande Taille', mod: '-1 Esquive', color: 'text-orange-600 bg-orange-50 border-orange-200' };
			case 'Très Grande': return { text: 'Très Grande Taille', mod: '-2 Esquive', color: 'text-red-600 bg-red-50 border-red-200' };
			default: return { text: 'Taille Moyenne', mod: 'Aucun modificateur', color: 'text-gray-600 bg-gray-50 border-gray-200' };
		}
	};

    // Auto-correction du sexe si incompatible lors du changement de fée
    useEffect(() => {
        if (previewData && character.sexe && !isGenderAllowed(character.sexe)) {
            const allowed = previewData.allowedGenders || ['Homme', 'Femme'];
            if (allowed.length > 0) onSexeChange(allowed);
        }
    }, [selectedPreview, previewData]);

    // --- LOGIQUE DE SÉLECTION DES TRAITS ---
    const handleTraitToggle = (trait) => {
        const currentTraits = character.traitsFeeriques || [];
        
        if (currentTraits.includes(trait)) {
            // Désélectionner
            onTraitsFeeriquesChange(currentTraits.filter(t => t !== trait));
        } else {
            // Sélectionner (Max 2)
            if (currentTraits.length < 2) {
                onTraitsFeeriquesChange([...currentTraits, trait]);
            }
        }
    };
	
    // --- Rendu Panneau Détails (Droite) ---
    const renderDetails = () => {
        if (!previewData) return (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Crown size={48} className="mb-4 opacity-50" />
                <p>Sélectionnez un héritage à gauche</p>
            </div>
        );

        const tailleInfo = getTailleDisplay(previewData.taille);

        // Récupération sécurisée des traits (Fallback si pas encore en DB)
        const availableTraits = previewData.traits || ["Trait A", "Trait B", "Trait C", "Trait D"]; 

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
                    
                    {/* Description Textuelle - FIXE pour éviter le "saut" de mise en page */}
                    <div className="h-24 overflow-y-auto text-gray-700 text-sm italic leading-relaxed border-l-4 border-amber-300 pl-4 py-2 bg-amber-50 rounded-r pr-2 custom-scrollbar">
                        {previewData.description || "Aucune description disponible."}
                    </div>

					{/* --- NOUVEAU BLOC : INFO TAILLE --- */}
					<div className="mt-4 mb-6">
						<div className={`px-4 py-2 rounded-lg border inline-flex items-center gap-3 ${tailleInfo.color}`}>
							<Scaling size={18} /> 
							<div className="flex items-center gap-2">
								<span className="text-xs font-bold uppercase tracking-wider">{tailleInfo.text}</span>
								<span className="text-sm font-serif font-bold opacity-80">• {tailleInfo.mod}</span>
							</div>
						</div>
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

					{/* Avantages & Désavantages - BLOC FIXE SCROLLABLE (Agrandit à h-40) */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs">
						<div className="h-40 overflow-y-auto custom-scrollbar p-2 border border-green-100 rounded bg-green-50/30">
							<h4 className="font-bold text-green-700 mb-1 flex items-center gap-1 sticky top-0 bg-green-50/90 w-full pb-1 border-b border-green-200">
								<ThumbsUp size={12}/> Avantages
							</h4>
							<ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
								{previewData?.avantages && previewData.avantages.length > 0 ? (
									previewData.avantages.map((adv, i) => <li key={i}>{adv}</li>)
								) : ( <li>Aucun avantage listé</li> )}
							</ul>
						</div>
						<div className="h-40 overflow-y-auto custom-scrollbar p-2 border border-red-100 rounded bg-red-50/30">
							<h4 className="font-bold text-red-700 mb-1 flex items-center gap-1 sticky top-0 bg-red-50/90 w-full pb-1 border-b border-red-200">
								<ThumbsDown size={12}/> Désavantages
							</h4>
							<ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
								{previewData?.desavantages && previewData.desavantages.length > 0 ? (
									previewData.desavantages.map((dis, i) => <li key={i}>{dis}</li>)
								) : ( <li>Aucun désavantage listé</li> )}
							</ul>
						</div>
					</div>
					
                </div>

                {/* --- ZONE D'INTERACTION (BAS DE FICHE) --- */}
                <div className="mt-6 pt-4 border-t border-gray-100 space-y-5">
                    
                    {/* 1. Sélecteur Sexe Féérique */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="font-bold text-xs uppercase text-gray-400 font-sans">Sexe Féérique (Biologique)</label>
                            {!isGenderAllowed('Homme') && <span className="text-xs text-amber-600 italic flex items-center gap-1"><Info size={10}/> Femelle uniquement</span>}
                            {!isGenderAllowed('Femme') && <span className="text-xs text-amber-600 italic flex items-center gap-1"><Info size={10}/> Mâle uniquement</span>}
                        </div>
                        <div className="flex gap-3 font-sans">
                            {['Homme', 'Femme'].map((g) => {
                                const allowed = isGenderAllowed(g);
                                return (
                                    <button
                                        key={g}
                                        onClick={() => allowed && onSexeChange(g)}
                                        disabled={!allowed}
                                        className={`flex-1 py-2 px-4 border rounded-lg font-bold text-sm transition-all ${
                                            character.sexe === g
                                            ? 'border-amber-600 bg-amber-600 text-white shadow-md'
                                            : allowed
                                                ? 'border-gray-300 text-gray-600 hover:border-amber-400 hover:bg-amber-50'
                                                : 'border-gray-100 text-gray-200 cursor-not-allowed bg-stone-50'
                                        }`}
                                    >
                                        {g}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2. NOUVEAU : Traits de Caractère (Seulement si le type est validé ou sélectionné) */}
                    {/* On affiche les traits du type sélectionné (selectedPreview) */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="font-bold text-xs uppercase text-gray-400 font-sans flex items-center gap-1">
                                <Heart size={12} /> Traits Dominants (1 ou 2 max)
                            </label>
                            <span className={`text-xs font-bold ${character.traitsFeeriques?.length > 0 ? 'text-green-600' : 'text-amber-600'}`}>
                                {character.traitsFeeriques?.length || 0} / 2
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 font-sans">
                            {availableTraits.map((trait) => {
                                const isSelected = character.traitsFeeriques?.includes(trait);
                                // Désactivé si déjà 2 sélectionnés et que ce n'est pas celui-ci
                                const isDisabled = !isSelected && character.traitsFeeriques?.length >= 2;

                                return (
                                    <button
                                        key={trait}
                                        onClick={() => handleTraitToggle(trait)}
                                        disabled={isDisabled}
                                        className={`py-2 px-3 border rounded text-xs font-bold transition-all text-left flex justify-between items-center ${
                                            isSelected
                                            ? 'border-purple-500 bg-purple-50 text-purple-900 shadow-sm ring-1 ring-purple-200'
                                            : isDisabled
                                                ? 'border-gray-100 text-gray-300 bg-stone-50 cursor-not-allowed'
                                                : 'border-gray-200 text-gray-600 hover:border-purple-300 hover:bg-purple-50/50'
                                        }`}
                                    >
                                        {trait}
                                        {isSelected && <CheckCircle size={14} className="text-purple-600"/>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bouton Validation */}
                    <div className="font-sans">
                        <button 
                            onClick={() => onTypeFeeChange(selectedPreview)}
                            disabled={character.typeFee === selectedPreview || !character.sexe}
                            className={`w-full py-3 rounded-xl text-lg font-bold transition-all flex justify-center items-center gap-2 ${
                                character.typeFee === selectedPreview
                                ? 'bg-green-600 text-white cursor-default shadow-inner' 
                                : character.sexe 
                                    ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:-translate-y-0.5'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {character.typeFee === selectedPreview ? (
                                <><CheckCircle size={20}/> Héritage sélectionné</>
                            ) : (
                                <>Choisir : {getDisplayName()}</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    };
	
    return (
        <div className="flex flex-col gap-6 h-full min-h-[600px]">
            
			  {/* 1. NOM SEUL (Aligné sur une ligne) */}
			  <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 mb-6">
				 <div className="flex items-center gap-4">
					 <div className="bg-amber-100 p-3 rounded-full text-amber-800">
						 <Crown size={24} />
					 </div>
					 {/* Conteneur flex pour aligner Label et Input */}
					 <div className="flex-1 flex items-center gap-6">
						 <label className="text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
							Nom du Personnage
						 </label>
						 <input 
							type="text" 
							value={character.nom} 
							onChange={(e) => onNomChange(e.target.value)}
							className="w-full p-2 border-b-2 border-amber-200 focus:border-amber-600 outline-none font-serif text-2xl bg-transparent placeholder-gray-300 transition-colors"
							placeholder="Ex: Arthur Pendragon"
						 />
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
                                onClick={() => {
								  // Si le joueur clique sur une NOUVELLE fée dans le menu de gauche
								  if (selectedPreview !== fairyName) {
									setSelectedPreview(fairyName);
									
									// S'il avait déjà coché des traits pour l'ancienne fée, on donne un coup de balai !
									if (character.traitsFeeriques && character.traitsFeeriques.length > 0) {
									  onCharacterChange({ traitsFeeriques: [] });
									}
								  }
								}}
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