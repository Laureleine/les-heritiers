// src/components/Step1.js
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Crown, CheckCircle, Lock } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import FairyDetailsPanel from './FairyDetailsPanel'; // ✨ NOTRE NOUVELLE VUE AUTONOME

export default function Step1() {
    const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
    const [unlockedFairies, setUnlockedFairies] = useState([]);
    const [isUserDocte, setIsUserDocte] = useState(false);

    const { fairyData, fairyTypesByAge } = gameData;

    // ✨ LE BOUCLIER DE L'IDENTITÉ (Mode XP)
    const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
    const isLocked = isReadOnly || isScelle;

    useEffect(() => {
        const verifierInitiation = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) return;

                const { data: profile } = await supabase
                    .from('profiles')
                    .select('role, is_docte, unlocked_fairies')
                    .eq('id', user.id)
                    .single();

                if (profile) {
                    const hasAccess = profile.is_docte === true || ['super_admin', 'gardien'].includes(profile.role);
                    setIsUserDocte(hasAccess);
                    setUnlockedFairies(profile.unlocked_fairies || []);
                }
            } catch (error) {
                console.error("❌ Erreur de vérification des Sceaux :", error);
            }
        };

        if (!isLocked) {
            verifierInitiation();
        }
    }, [isLocked]);

    // --- HANDLERS BLINDÉS CONTRE LA TRICHE ---

    const onNomChange = (val) => {
        if (isLocked) {
            if (isScelle) showInAppNotification("Le Sceau Originel protège votre identité. Impossible de changer de nom !", "warning");
            return;
        }
        dispatchCharacter({ type: 'UPDATE_FIELD', field: 'nom', value: val, gameData });
    };

    const onSexeChange = useCallback((val) => {
        if (isLocked) {
            if (isScelle) showInAppNotification("Votre nature est figée. Impossible de changer de sexe en cours de jeu !", "warning");
            return;
        }
        dispatchCharacter({ type: 'UPDATE_FIELD', field: 'sexe', value: val, gameData });
    }, [isLocked, isScelle, dispatchCharacter, gameData]);

    const onTypeFeeChange = (val) => {
        if (isLocked) {
            if (isScelle) showInAppNotification("Votre Héritage féérique est scellé à tout jamais !", "warning");
            return;
        }
        dispatchCharacter({ type: 'UPDATE_FIELD', field: 'typeFee', value: val, gameData });
        dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: '', gameData });
    };

    const onCharacterChange = (payload) => {
        if (isLocked) return;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload, gameData });
    };

    const onTraitsFeeriquesChange = (v) => {
        if (isLocked) return;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { traitsFeeriques: v }, gameData });
    };

    const [activeCategory, setActiveCategory] = useState('traditionnelles');
    const [selectedPreview, setSelectedPreview] = useState(character.typeFee || null);

    useEffect(() => {
        if (character.typeFee) {
            setSelectedPreview(character.typeFee);
            const isModerne = fairyTypesByAge?.modernes?.includes(character.typeFee);
            if (isModerne) setActiveCategory('modernes');
        }
    }, [character.typeFee, fairyTypesByAge]);

    const previewData = useMemo(() => {
        if (!selectedPreview || !fairyData) return null;
        if (fairyData[selectedPreview]) return fairyData[selectedPreview];
        const keyMatch = Object.keys(fairyData).find(
            key => key.toLowerCase() === selectedPreview.toLowerCase()
        );
        if (keyMatch) return fairyData[keyMatch];
        return null;
    }, [selectedPreview, fairyData]);

    const categories = Object.keys(fairyTypesByAge || {});

    // ✨ Auto-correction du sexe si la fée est asynchrone / mono-genre
    useEffect(() => {
        if (previewData && character.sexe) {
            const allowed = previewData.allowedGenders || ['Homme', 'Femme'];
            if (!allowed.includes(character.sexe) && !isLocked) {
                // Pacte des Crochets : Protégé !
                onSexeChange(allowed[0]); 
            }
        }
    }, [previewData, character.sexe, isLocked, onSexeChange]);

    return (
        <div className="flex flex-col gap-6 h-full min-h-[600px] pb-12 animate-fade-in">

            {isScelle && (
                <div className="bg-amber-50 border border-amber-200 p-4 md:p-5 rounded-xl flex items-start gap-4 shadow-sm animate-fade-in-up">
                    <div className="bg-amber-200/50 p-2 rounded-lg shrink-0 text-amber-700 mt-0.5">
                        <Lock size={24} />
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-amber-900 text-lg">Identité Scellée</h3>
                        <p className="text-sm text-amber-800 leading-relaxed mt-1">
                            Cet Héritier est désormais actif dans l'univers. Ses attributs fondamentaux (Nom, Sexe, Espèce) constituent son Sceau Originel et sont définitivement gravés dans le marbre.
                        </p>
                    </div>
                </div>
            )}

            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
                <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-800">
                        <Crown size={24} />
                    </div>
                    <div className="flex-1 flex items-center gap-6">
                        <label className="text-xs font-bold text-gray-500 uppercase whitespace-nowrap">
                            Nom du Personnage
                        </label>
                        <input
                            type="text"
                            value={character.nom || ''}
                            onChange={(e) => onNomChange(e.target.value)}
                            disabled={isLocked}
                            className="w-full p-2 border-b-2 border-amber-200 focus:border-amber-600 outline-none font-serif text-2xl bg-transparent placeholder-gray-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            placeholder="Ex: Arthur Pendragon"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden">
                
                {/* PANNEAU DE GAUCHE : LE SÉLECTEUR */}
                <div className="lg:col-span-4 flex flex-col h-full bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="flex flex-col gap-2 p-2 bg-gray-100 rounded-xl border border-gray-200">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">Filtrer par origine</span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                disabled={isLocked}
                                className={`flex-1 py-2 rounded-md font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
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

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {!gameData.fairyTypes || gameData.fairyTypes.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full p-6 text-center animate-pulse">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-4"></div>
                                <p className="text-amber-900 font-serif font-bold text-sm">Déchiffrage du Nuage...</p>
                            </div>
                        ) : (
                            fairyTypesByAge[activeCategory]
                                ?.filter(fairyName => {
                                    const fData = fairyData[fairyName];
                                    if (!fData) return false;
                                    const isFairySecret = fData.isSecret === true || fData.is_secret === true;
                                    return !isFairySecret || isUserDocte || unlockedFairies.includes(fData.id);
                                })
                                .map((fairyName) => (
                                    <button
                                        key={fairyName}
                                        onClick={() => {
                                            if (selectedPreview !== fairyName) {
                                                setSelectedPreview(fairyName);
                                                if (character.traitsFeeriques && character.traitsFeeriques.length > 0) {
                                                    onCharacterChange({ traitsFeeriques: [] });
                                                }
                                            }
                                        }}
                                        disabled={isLocked}
                                        className={`w-full text-left px-4 py-3 border-b border-gray-50 transition-all flex items-center justify-between group disabled:opacity-60 disabled:cursor-not-allowed ${
                                            selectedPreview === fairyName
                                                ? 'bg-amber-100 text-amber-900 border-l-4 border-l-amber-600 pl-3'
                                                : 'hover:bg-stone-50 text-gray-600'
                                        }`}
                                    >
                                        <span className="font-serif font-medium">{fairyName}</span>
                                        {character.typeFee === fairyName && <CheckCircle size={16} className="text-green-600"/>}
                                    </button>
                                ))
                        )}
                    </div>
                </div>

                {/* PANNEAU DE DROITE : NOTRE NOUVELLE VUE SÉPARÉE ✨ */}
                <div className="lg:col-span-8 h-full">
                    <FairyDetailsPanel 
                        previewData={previewData}
                        selectedPreview={selectedPreview}
                        character={character}
                        isLocked={isLocked}
                        onSexeChange={onSexeChange}
                        onTraitsFeeriquesChange={onTraitsFeeriquesChange}
                        onTypeFeeChange={onTypeFeeChange}
                    />
                </div>
            </div>
        </div>
    );
}