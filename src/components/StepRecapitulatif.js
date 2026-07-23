// src/components/StepRecapitulatif.js
import React, { useState, useCallback } from 'react';
import { Printer, ShieldAlert, Camera, Clock, RotateCcw, Sparkles } from '../config/icons';
import { useCerbere } from '../hooks/useCerbere';
import { useGameDataContext } from '../context/GameDataContext';
import { exportToPDF } from '../utils/pdfGenerator';
import ConfirmModal from './ConfirmModal';
import FicheParchemin from './recap/FicheParchemin';
import SongeRevelation from './SongeRevelation';
import { useProphetie } from '../hooks/useProphetie';

export default function StepRecapitulatif() {
    const {
        character,
        isScelle,
        showConfirmSeal,
        setShowConfirmSeal,
        sealErrors,
        sealWarnings,
        handleSealClick,
        executeSeal,
        showSongePostSeal,
        setShowSongePostSeal,
        snapshots,
        handleTakeSnapshot,
        handleCloneSnapshot
    } = useCerbere();

    const { gameData } = useGameDataContext();
    const [detailed, setDetailed] = useState(false);
    const [snapshotTitle, setSnapshotTitle] = useState('');
    const [showSnapshotModal, setShowSnapshotModal] = useState(false);

    const { showSonge, isGenerating, prophetieText, revelerSonge, fermerSonge } = useProphetie();

    // Déclenché après scellage → lance la cinématique avec génération
    const handleSongePostSeal = useCallback(() => {
        setShowSongePostSeal(false);
        revelerSonge(character.id, null);
    }, [character.id, revelerSonge, setShowSongePostSeal]);

    // Bouton manuel — prophetieText en priorité (même session), sinon depuis la DB
    const handleRevelerSonge = useCallback(() => {
        revelerSonge(character.id, prophetieText || character.prophetie);
    }, [character.id, character.prophetie, prophetieText, revelerSonge]);

    const handleFermerSonge = useCallback((prophetieGeneree) => {
        fermerSonge();
        // Mettre à jour l'état local si la prophétie vient d'être générée
        if (prophetieGeneree && !character.prophetie) {
            // Le CharacterContext sera mis à jour au prochain rechargement depuis Supabase
            character.prophetie = prophetieGeneree;
        }
    }, [fermerSonge, character]);

    return (
        <div className="max-w-[210mm] mx-auto pb-12 font-serif">

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
                    <span aria-hidden="true">🔍</span> {detailed ? 'Mode Détaillé — Actif' : 'Mode Détaillé'}
                </button>
            </div>

            {/* L'AFFICHEUR UNIVERSEL */}
            <FicheParchemin character={character} gameData={gameData} detailed={detailed} />

            {/* ALBUM PHOTO — ARCHIVES TEMPORELLES */}
            <div className="no-print mt-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-stone-700 text-lg flex items-center gap-2">
                        <Camera size={20} /> Album Photo de l'Héritier
                    </h2>
                    <button
                        onClick={() => setShowSnapshotModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-sm font-bold hover:bg-amber-200 transition-all shadow-sm"
                    >
                        <Camera size={16} /> Prendre une photo
                    </button>
                </div>

                {snapshots.length === 0 ? (
                    <p className="text-stone-400 italic text-sm text-center py-6 border border-dashed border-stone-300 rounded-xl">
                        Aucune archive temporelle pour l'instant. Immortalisez l'état actuel de votre Héritier&nbsp;!
                    </p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {snapshots.map(snap => (
                            <div key={snap.id} className="bg-white border border-stone-200 rounded-xl p-3 shadow-sm flex flex-col gap-2">
                                <div className="flex items-start justify-between">
                                    <span className="font-bold text-stone-800 text-sm leading-tight">{snap.titre}</span>
                                    <Clock size={14} className="text-stone-400 shrink-0 mt-0.5" />
                                </div>
                                <span className="text-xs text-stone-400">{new Date(snap.created_at).toLocaleDateString('fr-FR')}</span>
                                <button
                                    onClick={() => handleCloneSnapshot(snap.id, snap.titre, character.nom)}
                                    className="mt-auto flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 hover:bg-amber-100 transition-all"
                                >
                                    <RotateCcw size={12} /> Ressusciter
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* MODALE DE TITRE POUR LA PHOTO */}
            {showSnapshotModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setShowSnapshotModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-sm w-full p-6" onClick={e => e.stopPropagation()}>
                        <h3 className="font-serif font-bold text-lg text-stone-800 mb-2">Immortaliser cet instant</h3>
                        <p className="text-sm text-stone-500 mb-4">Donnez un nom à cette archive temporelle pour retrouver cet état plus tard.</p>
                        <input
                            type="text"
                            value={snapshotTitle}
                            onChange={e => setSnapshotTitle(e.target.value)}
                            placeholder="Ex: Avant le bal, Début de carrière..."
                            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm font-bold text-stone-700 outline-none focus:ring-2 focus:ring-amber-400 mb-4"
                            autoFocus
                            onKeyDown={e => { if (e.key === 'Enter') { handleTakeSnapshot(snapshotTitle, character); setShowSnapshotModal(false); setSnapshotTitle(''); } }}
                        />
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => { setShowSnapshotModal(false); setSnapshotTitle(''); }} className="px-4 py-2 text-sm font-bold text-stone-500 hover:text-stone-700 transition-all">Annuler</button>
                            <button
                                onClick={async () => { await handleTakeSnapshot(snapshotTitle, character); setShowSnapshotModal(false); setSnapshotTitle(''); }}
                                disabled={!snapshotTitle.trim()}
                                className="px-4 py-2 bg-amber-700 text-white rounded-lg text-sm font-bold hover:bg-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Camera size={16} className="inline mr-1.5" /> Prendre la photo
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* LES BOUTONS D'ACTION */}
            <div className="no-print flex gap-4 mt-8 justify-center flex-wrap">
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
                {isScelle && (
                    <button
                        onClick={handleRevelerSonge}
                        className="bg-indigo-950 text-amber-300 font-black py-4 px-10 rounded-xl flex items-center gap-3 shadow-lg hover:bg-indigo-900 border border-amber-700/40 transition-all"
                    >
                        <Sparkles size={24} />
                        {character.prophetie ? 'Revoir le Songe' : 'Révéler mon Songe'}
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

            {/* Proposition songe après scellage */}
            {showSongePostSeal && (
                <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowSongePostSeal(false)}>
                    <div className="bg-indigo-950 border border-amber-700/40 rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center" onClick={e => e.stopPropagation()}>
                        <div className="text-4xl mb-4">✨</div>
                        <h3 className="text-amber-200 font-serif font-bold text-xl mb-3">Le Songe du Scellage</h3>
                        <p className="text-amber-300/70 font-serif text-sm mb-6 leading-relaxed italic">
                            En cette nuit de Scellage, les brumes de Paris vous ont réservé un songe…
                        </p>
                        <div className="flex gap-3 justify-center">
                            <button
                                onClick={() => setShowSongePostSeal(false)}
                                className="px-5 py-2 text-sm text-amber-600/60 hover:text-amber-400 transition-all font-serif"
                            >
                                Plus tard
                            </button>
                            <button
                                onClick={handleSongePostSeal}
                                className="px-6 py-2.5 bg-amber-700 text-amber-100 rounded-xl text-sm font-bold font-serif hover:bg-amber-600 transition-all shadow-lg"
                            >
                                Recevoir le Songe
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cinématique du Songe */}
            {showSonge && (
                <SongeRevelation
                    characterId={character.id}
                    prophetie={prophetieText}
                    isGenerating={isGenerating}
                    onClose={handleFermerSonge}
                />
            )}
        </div>
    );
}