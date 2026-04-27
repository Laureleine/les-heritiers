// src/components/EncyclopediaModal.js
import React from 'react';
import { X, Sparkles, Save } from 'lucide-react';
import QuickForgeModal from './QuickForgeModal';
import FairyTypeForm from './encyclopedia/FairyTypeForm';
import EntityForm from './encyclopedia/EntityForm';
import { useCharacter } from '../context/CharacterContext';
import { useEncyclopediaModal } from '../hooks/useEncyclopediaModal';

export default function EncyclopediaModal(props) {
    const { gameData } = useCharacter();
    
    // 🧠 Connexion au Cerveau Séparé
    const { state, setters, handlers } = useEncyclopediaModal({ ...props, gameData });

    const { activeTab, isCreating, editingItem, allCompFutiles, allFairyTypes } = props;

    return (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
                {/* EN-TÊTE */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-stone-50 shrink-0">
                    <div>
                        <h2 className="text-xl font-serif font-bold text-amber-900">
                            {isCreating ? 'Proposition de création' : 'Proposition de modification'}
                        </h2>
                        {!isCreating && <p className="text-sm text-gray-500 mt-1">Élément : <span className="font-bold text-gray-800">{editingItem?.name || editingItem?.nom}</span></p>}
                    </div>
                    <button onClick={handlers.handleClose} className="text-gray-400 hover:text-gray-600 transition-colors p-2 bg-white rounded-full shadow-sm">
                        <X size={20} />
                    </button>
                </div>

                {/* CORPS DE LA MODALE */}
                <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
                    <div className="mb-6 p-4 bg-amber-50 text-amber-800 rounded-lg text-sm flex gap-3 items-start border border-amber-100 shadow-sm">
                        <Sparkles className="shrink-0 mt-0.5 text-amber-500" size={18} />
                        <p>Vos propositions ne seront pas immédiates. Elles seront soumises à la validation des <em>Gardiens du Savoir</em>.</p>
                    </div>

                    {/* 🔀 LE ROUTEUR DE FORMULAIRES */}
                    {activeTab === 'fairy_types' ? (
                        <FairyTypeForm
                            proposal={state.proposal} setProposal={setters.setProposal} parsedTech={state.parsedTech} updateTech={handlers.updateTech}
                            competencesData={state.competencesData} usefulSkills={state.usefulSkills} allCompFutiles={allCompFutiles}
                            localCapacites={state.localCapacites} localPouvoirs={state.localPouvoirs} localAtouts={state.localAtouts}
                            setHasPendingTech={setters.setHasPendingTech} setQuickForge={setters.setQuickForge}
                        />
                    ) : (
                        <EntityForm
                            activeTab={activeTab} isCreating={isCreating} editingItem={editingItem}
                            proposal={state.proposal} setProposal={setters.setProposal} parsedTech={state.parsedTech} updateTech={handlers.updateTech}
                            competencesData={state.competencesData} usefulSkills={state.usefulSkills} allCompFutiles={allCompFutiles}
                            allFairyTypes={allFairyTypes}
                        />
                    )}

                    {/* CHAMP DE JUSTIFICATION (Commun) */}
                    <div className="mt-6 border-t border-gray-100 pt-6">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Pourquoi cette modification ? <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text" value={state.justification} onChange={(e) => setters.setJustification(e.target.value)}
                            placeholder="Ex: Erreur de frappe, ajout du pouvoir manquant..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none shadow-sm"
                        />
                    </div>
                </div>

                {/* PIED DE PAGE */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
                    <button onClick={handlers.handleClose} className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-200 rounded-lg transition-colors">
                        Annuler
                    </button>
                    <button onClick={handlers.handleSubmitProposal} className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md flex items-center gap-2 transition-all active:scale-95">
                        <Save size={18} /> Soumettre
                    </button>
                </div>
            </div>

            {/* LA FORGE RAPIDE (POUPÉE RUSSE) */}
            <QuickForgeModal
                isOpen={state.quickForge.isOpen} type={state.quickForge.type}
                onClose={() => setters.setQuickForge({ isOpen: false, type: null })}
                onSuccess={handlers.handleQuickForgeSuccess}
            />
        </div>
    );
}
