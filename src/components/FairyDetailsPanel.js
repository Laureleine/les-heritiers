// src/components/FairyDetailsPanel.js
import React from 'react';
import { Crown, Activity, ThumbsUp, ThumbsDown, Scaling, Info, Heart, CheckCircle, Lock } from 'lucide-react';
import { accorderTexte } from '../data/DictionnaireJeu';

export default function FairyDetailsPanel({
    previewData,
    selectedPreview,
    character,
    isLocked,
    onSexeChange,
    onTraitsFeeriquesChange,
    onTypeFeeChange
}) {
    // Si aucune fée n'est sélectionnée (État initial)
    if (!previewData) return (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <Crown size={48} className="mb-4 opacity-50" />
            <p>Sélectionnez un héritage à gauche</p>
        </div>
    );

    // --- Utilitaires Locaux d'Affichage ---
    const getTailleDisplay = (taille) => {
        switch(taille) {
            case 'Petite': return { text: 'Petite Taille', mod: '+1 Esquive', color: 'text-green-600 bg-green-50 border-green-200' };
            case 'Grande': return { text: 'Grande Taille', mod: '-1 Esquive', color: 'text-orange-600 bg-orange-50 border-orange-200' };
            case 'Très Grande': return { text: 'Très Grande Taille', mod: '-2 Esquive', color: 'text-red-600 bg-red-50 border-red-200' };
            default: return { text: 'Taille Moyenne', mod: 'Aucun modificateur', color: 'text-gray-600 bg-gray-50 border-gray-200' };
        }
    };

    const isGenderAllowed = (gender) => {
        const allowed = previewData.allowedGenders || ['Homme', 'Femme'];
        return allowed.includes(gender);
    };

    const getDisplayName = () => {
        if (character.sexe === 'Homme') return previewData.nameMasculine || previewData.name || selectedPreview;
        if (character.sexe === 'Femme') return previewData.nameFeminine || previewData.name || selectedPreview;
        return previewData.name || selectedPreview;
    };

    // --- Variables calculées ---
    const tailleInfo = getTailleDisplay(previewData.taille);
    const availableTraits = previewData?.traits || [];
    const traitsPropres = Array.isArray(character.traitsFeeriques)
        ? character.traitsFeeriques.filter(t => availableTraits.includes(t))
        : [];
    const traitsCount = traitsPropres.length;
    const genreActuel = character.genreHumain || character.sexe;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-stone-200 h-full flex flex-col relative overflow-hidden">
            
            {/* EN-TÊTE : NOM ET ÈRE */}
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

            {/* CORPS : DESCRIPTION ET STATS */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar mb-4">
                
                <div className="h-24 overflow-y-auto text-gray-700 text-sm italic leading-relaxed border-l-4 border-amber-300 pl-4 py-2 bg-amber-50 rounded-r pr-2 custom-scrollbar">
                    {previewData.description || "Aucune description disponible."}
                </div>

                <div className="mt-4 mb-6">
                    <div className={`px-4 py-2 rounded-lg border inline-flex items-center gap-3 ${tailleInfo.color}`}>
                        <Scaling size={18} />
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider">{tailleInfo.text}</span>
                            <span className="text-sm font-serif font-bold opacity-80">• {tailleInfo.mod}</span>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-3 border-b border-amber-100 pb-1">
                        <Activity size={16} /> Potentiel Naturel
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(previewData?.caracteristiques || {}).map(([key, range]) => {
                            const min = typeof range === 'object' ? (range.min || 1) : 1;
                            const max = typeof range === 'object' ? (range.max || 6) : (range || 6);

                            return (
                                <div key={key} className="flex justify-between bg-stone-50 p-2 rounded border border-stone-100">
                                    <span className="capitalize text-stone-600">{key.substring(0, 3)}</span>
                                    <span className="font-bold text-amber-700">{min}-{max}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

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

            {/* PIED DE PAGE : CHOIX SEXE, TRAITS ET VALIDATION */}
            <div className="mt-6 pt-4 border-t border-gray-100 space-y-5">
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
                                    disabled={!allowed || isLocked}
                                    className={`flex-1 py-2 px-4 border rounded-lg font-bold text-sm transition-all ${
                                        character.sexe === g
                                            ? 'border-amber-600 bg-amber-600 text-white shadow-md'
                                            : allowed && !isLocked
                                                ? 'border-gray-300 text-gray-600 hover:border-amber-400 hover:bg-amber-50'
                                                : 'border-gray-100 text-gray-300 cursor-not-allowed bg-stone-50'
                                    }`}
                                >
                                    {g}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="font-bold text-xs uppercase text-gray-400 font-sans flex items-center gap-1">
                            <Heart size={12} /> Traits Dominants (1 ou 2 max)
                        </label>
                        <span className={`text-xs font-bold ${traitsCount > 0 ? 'text-green-600' : 'text-amber-600'}`}>
                            {traitsCount} / 2
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {availableTraits.map((traitBrut) => {
                            const smoothedTrait = accorderTexte(traitBrut, genreActuel);
                            const isSelected = traitsPropres.includes(traitBrut) || traitsPropres.includes(smoothedTrait);
                            const isDisabled = isLocked || (!isSelected && traitsCount >= 2);

                            const handleSafeToggle = () => {
                                let newTraits;
                                if (isSelected) {
                                    newTraits = traitsPropres.filter(t => t !== traitBrut && t !== smoothedTrait);
                                } else {
                                    if (traitsCount >= 2) return;
                                    newTraits = [...traitsPropres, traitBrut];
                                }
                                onTraitsFeeriquesChange(newTraits);
                            };

                            return (
                                <button
                                    key={traitBrut}
                                    onClick={handleSafeToggle}
                                    disabled={isDisabled}
                                    className={`p-2 rounded-lg border-2 text-sm text-left flex justify-between items-center transition-all font-serif ${
                                        isSelected
                                            ? 'border-purple-500 bg-purple-50 text-purple-900 font-bold shadow-sm'
                                            : isDisabled
                                                ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                                                : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
                                    }`}
                                >
                                    {smoothedTrait}
                                    {isSelected && <CheckCircle size={14} className="text-purple-600"/>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="font-sans">
                    <button
                        onClick={() => onTypeFeeChange(selectedPreview)}
                        disabled={isLocked || character.typeFee === selectedPreview || !character.sexe}
                        className={`w-full py-3 rounded-xl text-lg font-bold transition-all flex justify-center items-center gap-2 ${
                            character.typeFee === selectedPreview
                                ? 'bg-green-600 text-white cursor-default shadow-inner'
                                : character.sexe && !isLocked
                                    ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:-translate-y-0.5'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        {character.typeFee === selectedPreview ? (
                            <><CheckCircle size={20}/> Héritage sélectionné</>
                        ) : isLocked ? (
                            <><Lock size={20}/> Identité scellée</>
                        ) : (
                            <>Choisir : {getDisplayName()}</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
