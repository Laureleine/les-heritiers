// src/components/StepRecapitulatif.js
import React, { useState } from 'react';
import { Printer, ShieldAlert } from '../config/icons';
import { useCerbere } from '../hooks/useCerbere';
import { useCharacter } from '../context/CharacterContext';
import { exportToPDF } from '../utils/pdfGenerator';
import ConfirmModal from './ConfirmModal';
import FicheParchemin from './recap/FicheParchemin';

export default function StepRecapitulatif() {
    const {
        character,
        isScelle,
        showConfirmSeal,
        setShowConfirmSeal,
        sealErrors,
        sealWarnings,
        handleSealClick,
        executeSeal
    } = useCerbere();

    const { gameData } = useCharacter();
    const [detailed, setDetailed] = useState(false);

    return (
        <div className="max-w-[210mm] mx-auto pb-12 animate-fade-in font-serif">

            {/* BARRE DE CONTRÔLE DU MODE D'AFFICHAGE */}
            <div className="no-print flex justify-end mb-3">
                <button
                    onClick={() => setDetailed(d => !d)}
                    title={detailed ? 'Passer en mode résumé (sans décomposition)' : 'Passer en mode détaillé (voir base / création / XP / bonus)'}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border transition-all shadow-sm ${
                        detailed
                            ? 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
                            : 'bg-stone-100 text-stone-600 border-stone-300 hover:bg-stone-200'
                    }`}
                >
                    {detailed ? '🔍 Mode Détaillé — Actif' : '🔍 Mode Détaillé'}
                </button>
            </div>

            {/* L'AFFICHEUR UNIVERSEL */}
            <FicheParchemin character={character} gameData={gameData} detailed={detailed} />

            {/* LES BOUTONS D'ACTION */}
            <div className="no-print flex gap-4 mt-8 justify-center">
                <button
                    onClick={() => exportToPDF(character, gameData, detailed)}
                    className="bg-stone-900 text-white font-black py-4 px-10 rounded-xl flex items-center gap-3 shadow-lg hover:bg-black transition-all"
                >
                    <Printer size={24} /> Exporter le PDF {detailed ? '(Détaillé)' : 'Final'}
                </button>
                {!isScelle && (
                    <button
                        onClick={handleSealClick}
                        className="bg-emerald-600 text-white font-black py-4 px-10 rounded-xl flex items-center gap-3 shadow-lg hover:bg-emerald-700 transition-all"
                    >
                        <ShieldAlert size={24} /> Apposer le Sceau
                    </button>
                )}
            </div>

            <ConfirmModal
                isOpen={showConfirmSeal}
                onConfirm={executeSeal}
                onCancel={() => setShowConfirmSeal(false)}
                title={sealErrors.length > 0 ? "Scellage impossible" : "Sceau Définitif"}
                message={sealErrors.length === 0 ? "Confirmer le scellage définitif ?" : null}
                errors={sealErrors}
                warnings={sealWarnings}
                confirmText="Apposer le Sceau"
                cancelText={sealErrors.length > 0 ? "Corriger" : "Annuler"}
            />
        </div>
    );
}