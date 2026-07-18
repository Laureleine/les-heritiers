// src/components/EncyclopediaModal.js
import React, { useState, useEffect, useRef } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { X, Sparkles, Save } from '../config/icons';

import QuickForgeModal from './QuickForgeModal';
import { safeParse } from '../utils/json';
import FairyTypeForm from './encyclopedia/FairyTypeForm';
import EntityForm from './encyclopedia/EntityForm';
import SocialItemForm from './encyclopedia/SocialItemForm';
import FigureForm from './encyclopedia/FigureForm';

import { logger, showInAppNotification, translateError } from '../utils/SystemeServices';
import { useGameDataContext } from '../context/GameDataContext';
import { submitEncyclopediaProposal } from '../utils/encyclopediaEngine';
import { supabase } from '../config/supabase';
import { isSuperAdmin as checkSuperAdmin } from '../utils/authRoles';

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
    const { gameData } = useGameDataContext();
    const isSuperAdmin = checkSuperAdmin(userProfile);
    const isInitiated = userProfile?.profile?.is_initiated === true || isSuperAdmin;
    const isDocte = userProfile?.profile?.is_docte === true || isSuperAdmin;
    const canBePersonal = isCreating && isDocte && !['specialites', 'figures', 'fairy_types'].includes(activeTab);
    const isPersonal = !!proposal.creator_id;

    // 🧠 ÉTATS LOCAUX PURIFIÉS (L'autonomie est de retour !)
    const [proposal, setProposal] = useState(() => {
        const base = editingItem || {};
        const isNew = Object.keys(base).length === 0;
        return {
            ...base,
            is_official: isNew ? false : (base.is_official ?? true),
            ...(isNew && activeTab === 'fairy_types' ? { era: 'traditionnelle', taille: 'moyenne' } : {}),
        };
    });
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
        // Fallback : techData (copie de travail) → effets_techniques (champ DB)
        const sourceData = proposal.techData ?? proposal.effets_techniques;
        parsedTech = safeParse(sourceData, {});
    }

    const updateTech = (newObj) => {
        if (activeTab === 'fairy_assets') {
            setProposal({ ...proposal, effets_techniques: JSON.stringify(newObj, null, 2) });
        } else {
            setProposal({ ...proposal, techData: JSON.stringify(newObj, null, 2) });
        }
    };

    const modalRef = useRef(null);
    useFocusTrap(modalRef, true);

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

        if (!isSuperAdmin && !justification.trim()) {
            showInAppNotification("Veuillez expliquer brièvement la raison de cette modification.", "warning");
            return;
        }

        const result = await submitEncyclopediaProposal({
            activeTab,
            isCreating,
            proposal,
            editingItem,
            justification: isSuperAdmin ? 'Modification directe Super Admin' : justification,
            userProfile,
            parsedTech,
            allCompFutiles,
            gameData
        });

        if (result.success) {
            if ((isSuperAdmin || isPersonal) && result.requestId) {
                const { data, error } = await supabase.functions.invoke('apply-encyclopedia-change', {
                    body: { requestId: result.requestId, sealRequested: false }
                });

                if (error || data?.error) {
                    logger.error("❌ Échec application directe :", error || data?.error);
                    showInAppNotification("La carte a été créée mais l'application directe a échoué. Le ticket reste disponible dans le Conseil.", "warning");
                } else {
                    logger.info("✅ Carte personnelle créée :", result.recordName);
                    showInAppNotification(isSuperAdmin && !isPersonal ? "Modification appliquée immédiatement (mode Super Admin)." : "✦ Carte personnelle créée et disponible dans vos archives !", "success");
                }
            } else {
                logger.info("✅ Proposition envoyée :", result.recordName);
                showInAppNotification("Votre proposition a été envoyée aux Gardiens du Savoir !", "success");
            }
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
            <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enc-modal-title"
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        >
                
                {/* EN-TÊTE */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-stone-50 shrink-0">
                    <div>
                        <h2 id="enc-modal-title" className="text-xl font-serif font-bold text-amber-900">
                            {isPersonal && isCreating ? '✦ Forger une Carte Personnelle' : isCreating ? 'Proposition de création' : 'Proposition de modification'}
                        </h2>
                        {!isCreating && <p className="text-sm text-gray-500 mt-1">Élément : <span className="font-bold text-gray-800">{editingItem?.name || editingItem?.nom}</span></p>}
                    </div>
                    <button onClick={handleClose} aria-label="Fermer" className="text-gray-500 hover:text-gray-600 transition-colors p-2 bg-white rounded-full shadow-sm">
                        <X size={20} />
                    </button>
                </div>

                {/* CORPS DE LA MODALE */}
                <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
                    {!isSuperAdmin && (
                        <div className="mb-6 p-4 bg-amber-50 text-amber-800 rounded-lg text-sm flex gap-3 items-start border border-amber-100 shadow-sm">
                            <Sparkles className="shrink-0 mt-0.5 text-amber-500" size={18} />
                            <p>Vos propositions ne seront pas immédiates. Elles seront soumises à la validation des <em>Gardiens du Savoir</em>.</p>
                        </div>
                    )}

                    {/* 🔀 LE ROUTEUR DE FORMULAIRES */}
                    {activeTab === 'social_items' ? (
                        <SocialItemForm
                            proposal={proposal} setProposal={setProposal} parsedTech={parsedTech} updateTech={updateTech}
                            competencesData={competencesData} usefulSkills={usefulSkills} allCompFutiles={allCompFutiles}
                            isPersonal={isPersonal}
                        />
                    ) : activeTab === 'fairy_types' ? (
                        <FairyTypeForm
                            proposal={proposal} setProposal={setProposal} parsedTech={parsedTech} updateTech={updateTech}
                            competencesData={competencesData} usefulSkills={usefulSkills} allCompFutiles={allCompFutiles}
                            localCapacites={localCapacites} localPouvoirs={localPouvoirs} localAtouts={localAtouts}
                            setHasPendingTech={setHasPendingTech} setQuickForge={setQuickForge}
                            isInitiated={isInitiated}
                        />
                    ) : activeTab === 'figures' ? (
                        <FigureForm
                            proposal={proposal} setProposal={setProposal}
                            allFairyTypes={allFairyTypes}
                        />
                    ) : (
                        <EntityForm
                            activeTab={activeTab} isCreating={isCreating} editingItem={editingItem}
                            proposal={proposal} setProposal={setProposal} parsedTech={parsedTech} updateTech={updateTech}
                            competencesData={competencesData} usefulSkills={usefulSkills} allCompFutiles={allCompFutiles}
                            allFairyTypes={allFairyTypes}
                            isPersonal={isPersonal}
                        />
                    )}

                    {/* SCEAU D'OFFICIALITÉ */}
                    <div className="mt-6 border-t border-gray-100 pt-6 space-y-4">
                        {canBePersonal && (
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="block text-sm font-bold text-violet-700">
                                        ✦ Carte Personnelle
                                    </label>
                                    <p className="text-xs text-stone-500 mt-0.5">
                                        {isPersonal
                                            ? 'Carte créée par vous, distribuable aux membres de votre cercle.'
                                            : 'Activer pour créer une carte personnelle non-officielle.'}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={isPersonal}
                                    onClick={() => {
                                        if (isPersonal) {
                                            setProposal({ ...proposal, creator_id: null, cost_xp: 0, cost_fortune: 0, cost_pp: {}, hide_effects_until_accepted: false });
                                        } else {
                                            setProposal({ ...proposal, creator_id: userProfile.id, is_official: false });
                                        }
                                    }}
                                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 ${
                                        isPersonal ? 'bg-violet-600 border-violet-700' : 'bg-stone-200 border-stone-300'
                                    }`}
                                >
                                    <span className={`inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                                        isPersonal ? 'translate-x-5' : 'translate-x-0.5'
                                    }`} />
                                </button>
                            </div>
                        )}
                        <div className="flex items-center justify-between">
                            <div>
                                <label className="block text-sm font-bold text-gray-700">
                                    📚 Statut Officiel
                                </label>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    {proposal.is_official
                                        ? 'Cette fiche fait partie des Archives Royales officielles.'
                                        : 'Cette fiche est un Faux-Semblant créé par la Communauté.'}
                                </p>
                            </div>
                            <button
                                type="button"
                                role="switch"
                                aria-checked={proposal.is_official}
                                disabled={isPersonal}
                                onClick={() => {
                                    if (proposal.is_official) {
                                        const confirmMsg = `Êtes-vous sûr de vouloir rétrograder "${proposal.name || proposal.nom}" au rang de Faux-Semblant Communautaire ? Cette fiche ne sera plus considérée comme officielle par le Grimoire.`;
                                        if (!window.confirm(confirmMsg)) return;
                                    }
                                    setProposal({ ...proposal, is_official: !proposal.is_official });
                                }}
                                className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                                    isPersonal ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                                } ${
                                    proposal.is_official ? 'bg-emerald-600 border-emerald-700' : 'bg-stone-200 border-stone-300'
                                }`}
                            >
                                <span className={`inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                                    proposal.is_official ? 'translate-x-5' : 'translate-x-0.5'
                                }`} />
                            </button>
                        </div>
                    </div>

                    {/* CHAMP DE JUSTIFICATION (Commun) */}
                    {!isSuperAdmin && (
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
                    )}
                </div>

                {/* PIED DE PAGE */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
                    <button onClick={handleClose} className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-200 rounded-lg transition-colors">
                        Annuler
                    </button>
                    <button onClick={handleSubmitProposal} className="px-6 py-2 bg-amber-700 hover:bg-amber-700 text-white font-bold rounded-lg shadow-md flex items-center gap-2 transition-all active:scale-95">
                        <Save size={18} /> {isSuperAdmin ? 'Appliquer' : 'Soumettre'}
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