// src/components/StepDruidisme.jsx
import React from 'react';
import { Wand2, CheckCircle, AlertCircle, Info } from '../config/icons';
import { useCharacter } from '../context/CharacterContext';
import { useGameDataContext } from '../context/GameDataContext';
import { isCharacterScelle } from '../utils/lockUtils';
import { showInAppNotification } from '../utils/SystemeServices';

const COMPS_PAR_PROFIL = {
    'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
    'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    'Érudit':    ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    'Roublard':  ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
    'Savant':    ['Habiletés', 'Médecine', 'Observation', 'Sciences'],
};

export default function StepDruidisme() {
    const { character, dispatchCharacter, isReadOnly } = useCharacter();
    const { gameData } = useGameDataContext();
    const isScelle = isCharacterScelle(character);

    const profilMajeur = character.profils?.majeur?.nom;
    const compsDisponibles = COMPS_PAR_PROFIL[profilMajeur] || [];
    const eubage = character.data?.eubage || {};
    const sourceChoisie = eubage.source_competence || null;

    if (!character.data?.magies?.['Druidisme']?.actif) {
        return (
            <div className="space-y-4">
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
                    <Wand2 size={32} className="mx-auto text-stone-400 mb-3" />
                    <p className="text-stone-600 font-serif">
                        Cette étape est réservée aux personnages ayant acquis le Druidisme.<br />
                        <span className="text-sm text-stone-500">Débloquez le <strong>Druidisme</strong> à l'étape Magies pour y accéder.</span>
                    </p>
                </div>
            </div>
        );
    }

    const handleChoisirSource = (nomComp) => {
        if (isReadOnly || isScelle) return;

        const nouvelEubage = {
            source_competence: nomComp,
            rangs_transferes: 2,
        };

        dispatchCharacter({
            type: 'UPDATE_FIELD',
            field: 'data',
            value: { ...(character.data || {}), eubage: nouvelEubage },
            gameData,
        });

        showInAppNotification(
            `Les 2 rangs automatiques de ${nomComp} sont transférés à Druidisme.`,
            'success'
        );
    };

    const scoreActuelSource = sourceChoisie
        ? (character.computedStats?.competencesBase?.[sourceChoisie] || 0) +
          (character.competencesLibres?.rangs?.[sourceChoisie] || 0) + 2 // +2 car le transfer n'est pas encore visible ici
        : null;

    return (
        <div className="space-y-6">

            {/* EN-TÊTE */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                <Wand2 size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                <div>
                    <h2 className="font-serif font-bold text-emerald-900 text-base">Initiation Druidique — Eubage</h2>
                    <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
                        Choisissez l'une des 4 compétences de votre profil majeur <strong>{profilMajeur}</strong> qui cède ses 2 rangs automatiques à votre Compétence Druidisme.
                    </p>
                </div>
            </div>

            {/* AVERTISSEMENT SCELLÉ */}
            {isScelle && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-2 text-sm text-amber-800">
                    <AlertCircle size={16} className="shrink-0" />
                    Ce choix est figé au scellage et ne peut plus être modifié.
                </div>
            )}

            {/* CHOIX DE LA COMPÉTENCE SOURCE */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="bg-stone-50 px-4 py-2.5 border-b border-stone-200">
                    <h3 className="font-bold text-stone-700 text-sm uppercase tracking-wide">
                        Compétence qui cède ses 2 rangs automatiques
                    </h3>
                </div>
                <div className="divide-y divide-stone-100">
                    {compsDisponibles.map(nomComp => {
                        const isChoisie = sourceChoisie === nomComp;
                        const scoreAvant = (character.computedStats?.competencesBase?.[nomComp] || 0) +
                            (character.competencesLibres?.rangs?.[nomComp] || 0);
                        const scoreApres = isChoisie
                            ? scoreAvant  // déjà calculé sans les 2 rangs par characterEngine
                            : scoreAvant;

                        return (
                            <button
                                key={nomComp}
                                onClick={() => handleChoisirSource(nomComp)}
                                disabled={isReadOnly || (isScelle && !isChoisie)}
                                className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors
                                    ${isChoisie
                                        ? 'bg-emerald-50 border-l-4 border-emerald-500'
                                        : 'hover:bg-stone-50 border-l-4 border-transparent'
                                    }
                                    ${(isReadOnly || (isScelle && !isChoisie)) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    {isChoisie
                                        ? <CheckCircle size={18} className="text-emerald-600" />
                                        : <div className="w-[18px] h-[18px] rounded-full border-2 border-stone-300" />
                                    }
                                    <span className={`font-medium ${isChoisie ? 'text-emerald-900' : 'text-stone-700'}`}>
                                        {nomComp}
                                    </span>
                                </div>
                                {isChoisie && (
                                    <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                                        Source du transfert
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* RÉSULTAT : DRUIDISME */}
            {sourceChoisie && (
                <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="bg-stone-50 px-4 py-2.5 border-b border-stone-200">
                        <h3 className="font-bold text-stone-700 text-sm uppercase tracking-wide">
                            Résultat — Compétence Druidisme
                        </h3>
                    </div>
                    <div className="p-4 space-y-3">

                        {/* Score Druidisme */}
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold text-stone-800">Druidisme</span>
                                <span className="text-xs text-stone-500 ml-2">
                                    2 rangs (transférés depuis {sourceChoisie})
                                </span>
                            </div>
                            <div className="flex items-center bg-white rounded border border-stone-300 shadow-sm">
                                <div className="px-2 py-1 text-xs text-stone-400 border-r border-stone-200 bg-stone-50">base</div>
                                <div className="px-3 py-1 font-bold text-amber-900 text-lg bg-amber-50">
                                    {(character.computedStats?.competencesBase?.['Druidisme'] || 0) +
                                     (character.competencesLibres?.rangs?.['Druidisme'] || 0)}
                                </div>
                            </div>
                        </div>

                        {/* Spécialité offerte */}
                        <div className="flex items-center gap-2 bg-emerald-50 rounded-lg px-3 py-2 border border-emerald-200">
                            <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                            <span className="text-sm text-emerald-800">
                                <strong>Spécialité d'Occultisme gratuite :</strong> Connaissance du druidisme
                            </span>
                        </div>

                        {/* Info post-scellage */}
                        <div className="flex items-start gap-2 text-xs text-stone-500 pt-1">
                            <Info size={12} className="shrink-0 mt-0.5" />
                            <span>Des rangs supplémentaires en Druidisme pourront être achetés avec des XP après le scellage.</span>
                        </div>
                    </div>
                </div>
            )}

            {/* RAPPEL RÈGLES — création uniquement */}
            {!isScelle && (
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs text-stone-600 leading-relaxed">
                    <strong>Rappel :</strong> L'initiation a coûté 5 PP (Profil {profilMajeur}).
                    Les sorts du 1<sup>er</sup> cercle coûteront 1 PP à la création et 5 XP par la suite.
                </div>
            )}
        </div>
    );
}
