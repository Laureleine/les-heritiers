// src/components/StepPouvoirs.js
import React from 'react';
import { Star, Check, Sparkles, Plus, Minus } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { getFeerieCost, getCaracCost } from '../utils/xpCalculator';
import AnomalieFeeriqueWidget from './AnomalieFeeriqueWidget';

// ✨ L'IMPORT DRY (Usine à Badges)
import { getMagicBadges } from '../data/DictionnaireJeu';

export default function StepPouvoirs() {
    const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();

    const fairyData = gameData.fairyData;
    const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

    // 🛡️ LE PLANCHER DE VERRE ET LES VARIABLES XP
    const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
    const innatePouvoirs = character.data?.stats_scellees?.pouvoirs || [];

    const baseFeerie = character.data?.stats_scellees?.caracteristiques?.feerie || 3;
    const baseMasque = character.data?.stats_scellees?.caracteristiques?.masque || 4;

    const currentFeerie = character.caracteristiques?.feerie || 3;
    const currentMasque = character.caracteristiques?.masque || 4;

    const xpTotal = character.xp_total || 0;
    const xpDepense = character.xp_depense || 0;
    const xpDispo = xpTotal - xpDepense;

    const maxPouvoirs = currentFeerie;
    const countSelected = character.pouvoirs?.length || 0;

    // ========================================================================
    // 🧠 GESTION DE LA FÉÉRIE ET DU MASQUE (Moteur XP)
    // ========================================================================
    const handleUpgradeStat = (stat) => {
        if (isReadOnly || !isScelle) return;
        const currentRank = stat === 'feerie' ? currentFeerie : currentMasque;
        const maxLimit = stat === 'feerie' ? 8 : 10;

        if (currentRank >= maxLimit) {
            showInAppNotification(`Votre ${stat === 'feerie' ? 'Féérie' : 'Masque'} a atteint le sommet de la puissance féérique !`, "warning");
            return;
        }

        const cost = stat === 'feerie' ? getFeerieCost(currentRank) : getCaracCost(currentRank);
        if (xpDispo < cost) {
            showInAppNotification(`Il vous faut ${cost} XP pour augmenter cette caractéristique !`, "error");
            return;
        }

        const newCaracs = { ...(character.caracteristiques || {}), [stat]: currentRank + 1 };

        dispatchCharacter({
            type: 'UPDATE_MULTIPLE',
            payload: { caracteristiques: newCaracs, xp_depense: xpDepense + cost },
            gameData
        });
        showInAppNotification(`${stat === 'feerie' ? 'Féérie' : 'Masque'} augmenté(e) pour ${cost} XP !`, "success");
    };

    const handleDowngradeStat = (stat) => {
        if (isReadOnly || !isScelle) return;
        const currentRank = stat === 'feerie' ? currentFeerie : currentMasque;
        const baseRank = stat === 'feerie' ? baseFeerie : baseMasque;

        if (currentRank <= baseRank) {
            showInAppNotification("Le Sceau Originel (Plancher de Verre) protège vos caractéristiques de naissance !", "warning");
            return;
        }

        if (stat === 'feerie' && countSelected > currentRank - 1) {
            showInAppNotification("Vous devez d'abord désapprendre un pouvoir avant de pouvoir réduire votre Féérie !", "error");
            return;
        }

        const refund = stat === 'feerie' ? getFeerieCost(currentRank - 1) : getCaracCost(currentRank - 1);
        const newCaracs = { ...(character.caracteristiques || {}), [stat]: currentRank - 1 };

        dispatchCharacter({
            type: 'UPDATE_MULTIPLE',
            payload: { caracteristiques: newCaracs, xp_depense: Math.max(0, xpDepense - refund) },
            gameData
        });
        showInAppNotification(`Niveau annulé : +${refund} XP récupérés !`, "success");
    };

    // ========================================================================
    // 🧠 SÉLECTION DES POUVOIRS
    // ========================================================================
    const handlePouvoirToggle = (pouvoir) => {
        if (isReadOnly) return;
        const isSelected = character.pouvoirs?.includes(pouvoir);

        if (isScelle && isSelected && innatePouvoirs.includes(pouvoir)) {
            showInAppNotification("Ce Pouvoir fait partie du Sceau originel de votre Héritier. Impossible de l'oublier !", "warning");
            return;
        }

        dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'pouvoirs', value: pouvoir, max: maxPouvoirs, gameData });
    };

    const getAvailablePowers = () => {
        if (!data?.pouvoirs) return [];
        return data.pouvoirs.filter(p => {
            const type = p.type_pouvoir || '';
            // Déblocage progressif selon la Féérie
            if (type.includes('profond')) return currentFeerie >= 7;
            if (type.includes('legendaire') || type.includes('légendaire')) return currentFeerie >= 8;
            return type === 'masque' || type === 'demasque';
        });
    };

    const availablePowers = getAvailablePowers();
    if (!data) return null;

    return (
        <div className="space-y-8 animate-fade-in">
            {/* EN-TÊTE : LA FÉÉRIE */}
            <div>
                <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full shadow-sm text-indigo-600">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="font-bold text-indigo-900 text-lg">Féérie</span>
                                <span className="text-xs text-indigo-500 font-medium">— Gouverne vos Pouvoirs</span>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-2xl font-black font-serif text-indigo-800">{currentFeerie}</span>
                                {!isReadOnly && isScelle && (
                                    <div className="flex gap-1">
                                        {currentFeerie > baseFeerie && (
                                            <button onClick={() => handleDowngradeStat('feerie')} className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors" title={`Récupérer ${getFeerieCost(currentFeerie - 1)} XP`}>
                                                <Minus size={16} />
                                            </button>
                                        )}
                                        {currentFeerie < 8 && (
                                            <button onClick={() => handleUpgradeStat('feerie')} className="flex items-center gap-1 px-2 py-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded transition-colors text-xs font-bold" title={`Améliorer pour ${getFeerieCost(currentFeerie)} XP`}>
                                                <Plus size={14} /> Améliorer ({getFeerieCost(currentFeerie)} XP)
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {isScelle && (
                    <p className="text-xs text-indigo-800 mt-4 italic text-center">
                        Améliorer vos Attributs Féériques consomme de l'Expérience. Augmenter la Féérie débloquera immédiatement un nouvel emplacement de Pouvoir.
                    </p>
                )}
            </div>

            {/* INFO POUVOIRS */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
                <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
                <div>
                    <h3 className="font-serif font-bold text-amber-900">Héritage Féérique</h3>
                    <p className="text-sm text-amber-800">
                        Votre niveau de Féérie (<strong>{maxPouvoirs}</strong>) détermine le nombre de pouvoirs que vous pouvez maîtriser. Vous pouvez choisir parmi les Pouvoirs Masqués et Démasqués.
                    </p>
                    <div className={`mt-3 inline-block px-3 py-1 bg-white rounded-full border text-sm font-bold ${countSelected > maxPouvoirs ? 'border-red-400 text-red-700 animate-pulse' : 'border-amber-200 text-amber-700'}`}>
                        {countSelected} / {maxPouvoirs} Pouvoirs sélectionnés
                    </div>
                </div>
            </div>

            {/* GRILLE DES POUVOIRS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availablePowers.map((pouvoir, index) => {
                    const isSelected = character.pouvoirs?.includes(pouvoir.nom);
                    const isInnate = isScelle && innatePouvoirs.includes(pouvoir.nom);
                    // Règle de l'Anomalie
                    const isAnomalie = pouvoir.nom === character.anomalieFeerique; 

                    return (
                        <div 
                            key={index}
                            onClick={() => handlePouvoirToggle(pouvoir.nom)}
                            className={`p-4 rounded-xl border-2 transition-all ${
                                isSelected
                                    ? 'border-indigo-400 bg-indigo-50 shadow-md'
                                    : isReadOnly || (countSelected >= maxPouvoirs && !isSelected)
                                        ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                        : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm cursor-pointer'
                            } ${isAnomalie && !isSelected ? 'opacity-80 cursor-not-allowed hover:border-gray-200' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="font-bold font-serif text-gray-800 flex items-center gap-2">
                                    {isSelected && <Check size={16} className="text-indigo-600" />}
                                    {pouvoir.nom}
                                </div>
                                <div className="flex items-center gap-2">
                                    {isInnate && !isAnomalie && (
                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création (Plancher de Verre)">
                                            🔒 Inné
                                        </span>
                                    )}
                                    
                                    {/* ✨ LE FIX DRY : Affichage dynamique des deux badges magiques ! */}
                                    {getMagicBadges(pouvoir.type_pouvoir).map((badge, idx) => (
                                        <span key={idx} className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm border ${badge.color}`}>
                                            {badge.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed mt-2">
                                {pouvoir.description || "Aucune description."}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ✨ WIDGET AUTONOME : L'ANOMALIE FÉÉRIQUE */}
            <AnomalieFeeriqueWidget />

        </div>
    );
}