// src/components/EncyclopediaModal.js
import React, { useState, useEffect } from 'react';
import { X, Sparkles, Save } from 'lucide-react';

import QuickForgeModal from './QuickForgeModal';
import FairyTypeForm from './encyclopedia/FairyTypeForm';
import EntityForm from './encyclopedia/EntityForm';
import SocialItemForm from './encyclopedia/SocialItemForm';

import { logger, showInAppNotification, translateError } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';
import { submitEncyclopediaProposal } from '../utils/encyclopediaEngine';

export default function EncyclopediaModal({
    activeTab,
    editingItem,
    setEditingItem,
    isCreating,
    userProfile,
    allCapacites,
    allPouvoirs,
    allAtouts,
    allCompFutiles,
    allFairyTypes,
    onSuccess,
    onClose
}) {
    const { gameData } = useCharacter();

    // 🧠 ÉTATS LOCAUX PURIFIÉS (L'autonomie est de retour !)
    const [proposal, setProposal] = useState(editingItem || {});
    const [justification, setJustification] = useState('');
    const [hasPendingTech, setHasPendingTech] = useState(false);
    
    const [localPouvoirs, setLocalPouvoirs] = useState(allPouvoirs || []);
    const [localAtouts, setLocalAtouts] = useState(allAtouts || []);
    const [localCapacites, setLocalCapacites] = useState(allCapacites || []);
    const [quickForge, setQuickForge] = useState({ isOpen: false, type: null });

    // Maintien de la synchronisation avec le Nuage
    useEffect(() => { setLocalPouvoirs(allPouvoirs || []); }, [allPouvoirs]);
    useEffect(() => { setLocalAtouts(allAtouts || []); }, [allAtouts]);
    useEffect(() => { setLocalCapacites(allCapacites || []); }, [allCapacites]);

    // ✨ GESTIONNAIRE DE FORGE RAPIDE
    const handleQuickForgeSuccess = (newItem, type) => {
        if (type === 'fairy_powers') {
            setLocalPouvoirs(prev => [...prev, newItem]);
            setProposal(prev => ({ ...prev, pouvoirsIds: [...(prev.pouvoirsIds || []), newItem.id] }));
        } else if (type === 'fairy_assets') {
            setLocalAtouts(prev => [...prev, newItem]);
            setProposal(prev => ({ ...prev, assetsIds: [...(prev.assetsIds || []), newItem.id] }));
        } else if (type === 'fairy_capacites') {
            setLocalCapacites(prev => [...prev, newItem]);
            setProposal(prev => ({ ...prev, capacitesChoixIds: [...(prev.capacitesChoixIds || []), newItem.id] }));
        }
    };

    // 🧠 DONNÉES DU DICTIONNAIRE
    const competencesData = Object.values(gameData.competences || {}).map(c => ({
        id: c.id,
        name: c.nom,
        specialites: c.specialites
    }));
    const usefulSkills = Object.keys(gameData.competences || {});

    // 🧠 PARSEUR D'ADN TECHNIQUE (JSON)
    let parsedTech = {};
    if (['fairy_assets', 'fairy_powers', 'fairy_capacites', 'fairy_types', 'social_items'].includes(activeTab)) {
        try {
            const sourceData = activeTab === 'fairy_assets' ? proposal.effets_techniques : proposal.techData;
            parsedTech = JSON.parse(sourceData || '{}');
        } catch(e) { parsedTech = {}; }
    }

    const updateTech = (newObj) => {
        if (activeTab === 'fairy_assets') {
            setProposal({ ...proposal, effets_techniques: JSON.stringify(newObj, null, 2) });
        } else {
            setProposal({ ...proposal, techData: JSON.stringify(newObj, null, 2) });
        }
    };

    const handleClose = () => {
        if (onClose) onClose();
        else setEditingItem(null);
    };

    // 🚀 SOUMISSION AU CONSEIL
    const handleSubmitProposal = async () => {
        if (hasPendingTech) {
            showInAppNotification("⚠️ Modifications en attente : Veuillez cliquer sur 'Compiler les Effets' dans les règles techniques avant de valider votre proposition !", "error");
            return;
        }

        if (!justification.trim()) {
            showInAppNotification("Veuillez expliquer brièvement la raison de cette modification.", "warning");
            return;
        }

        const result = await submitEncyclopediaProposal({
            activeTab, isCreating, proposal, editingItem, justification, userProfile, parsedTech, allCompFutiles, gameData
        });

        if (result.success) {
            logger.info("✅ Proposition envoyée :", result.recordName);
            showInAppNotification("Votre proposition a été envoyée aux Gardiens du Savoir !", "success");
            if (onSuccess) onSuccess();
            else handleClose();
        } else if (result.warning) {
            showInAppNotification(result.message, "warning");
        } else {
            logger.error("❌ Erreur envoi proposition :", result.error);
            showInAppNotification(translateError(result.error), "error");
        }
    };

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
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors p-2 bg-white rounded-full shadow-sm">
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
                    {activeTab === 'social_items' ? (
                        <SocialItemForm
                            proposal={proposal} setProposal={setProposal} parsedTech={parsedTech} updateTech={updateTech}
                            competencesData={competencesData} usefulSkills={usefulSkills} allCompFutiles={allCompFutiles}
                        />
                    ) : activeTab === 'fairy_types' ? (
                        <FairyTypeForm
                            proposal={proposal} setProposal={setProposal} parsedTech={parsedTech} updateTech={updateTech}
                            competencesData={competencesData} usefulSkills={usefulSkills} allCompFutiles={allCompFutiles}
                            localCapacites={localCapacites} localPouvoirs={localPouvoirs} localAtouts={localAtouts}
                            setHasPendingTech={setHasPendingTech} setQuickForge={setQuickForge}
                        />
                    ) : (
                        <EntityForm
                            activeTab={activeTab} isCreating={isCreating} editingItem={editingItem}
                            proposal={proposal} setProposal={setProposal} parsedTech={parsedTech} updateTech={updateTech}
                            competencesData={competencesData} usefulSkills={usefulSkills} allCompFutiles={allCompFutiles}
                            allFairyTypes={allFairyTypes}
                        />
                    )}

                    {/* CHAMP DE JUSTIFICATION (Commun) */}
                    <div className="mt-6 border-t border-gray-100 pt-6">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Pourquoi cette modification ? <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text" value={justification} onChange={(e) => setJustification(e.target.value)}
                            placeholder="Ex: Erreur de frappe, ajout du pouvoir manquant..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none shadow-sm"
                        />
                    </div>
                </div>

                {/* PIED DE PAGE */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
                    <button onClick={handleClose} className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-200 rounded-lg transition-colors">
                        Annuler
                    </button>
                    <button onClick={handleSubmitProposal} className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md flex items-center gap-2 transition-all active:scale-95">
                        <Save size={18} /> Soumettre
                    </button>
                </div>
            </div>

            {/* LA FORGE RAPIDE (POUPÉE RUSSE) */}
            <QuickForgeModal
                isOpen={quickForge.isOpen} type={quickForge.type}
                onClose={() => setQuickForge({ isOpen: false, type: null })}
                onSuccess={handleQuickForgeSuccess}
            />
        </div>
    );
}