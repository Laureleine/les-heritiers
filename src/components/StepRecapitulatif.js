// src/components/StepRecapitulatif.js
import React from 'react';
import { Printer, ShieldAlert } from 'lucide-react';
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
        handleSealClick,
        executeSeal
    } = useCerbere();

    const { gameData } = useCharacter();

    return (
        <div className="max-w-[210mm] mx-auto pb-12 animate-fade-in font-serif">
            
            {/* L'AFFICHEUR UNIVERSEL */}
            <FicheParchemin character={character} gameData={gameData} />

            {/* LES BOUTONS D'ACTION */}
            <div className="no-print flex gap-4 mt-8 justify-center">
                <button 
                    onClick={() => exportToPDF(character, gameData)} 
                    className="bg-stone-900 text-white font-black py-4 px-10 rounded-xl flex items-center gap-3 shadow-lg hover:bg-black transition-all"
                >
                    <Printer size={24} /> Exporter le PDF Final
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
                title="Sceau Définitif"
                message="Confirmer le scellage ?"
            />
        </div>
    );
}