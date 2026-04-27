// src/hooks/useEncyclopediaModal.js
import { useState, useEffect } from 'react';
import { logger, showInAppNotification, translateError } from '../utils/SystemeServices';
import { submitEncyclopediaProposal } from '../utils/encyclopediaEngine';

export function useEncyclopediaModal({
    activeTab, editingItem, isCreating, userProfile, 
    allCapacites, allPouvoirs, allAtouts, allCompFutiles, gameData,
    onSuccess, onClose, setEditingItem
}) {
    // 🧠 1. LE TRADUCTEUR (Décodage des données brutes SQL)
    const [proposal, setProposal] = useState(() => {
        if (!editingItem) return {};
        const init = { ...editingItem };
        
        const rawTech = init.effets_techniques || {};
        init.techData = typeof rawTech === 'string' ? rawTech : JSON.stringify(rawTech, null, 2);

        if (activeTab === 'fairy_types') {
            const fairyCloudData = gameData?.fairyData?.[init.name || init.nom] || {};
            
            const techObj = typeof init.effets_techniques === 'string' 
                ? JSON.parse(init.effets_techniques || '{}') 
                : { ...(init.effets_techniques || {}) };
            
            techObj.predilections = fairyCloudData.competencesPredilection || [];
            techObj.futiles = fairyCloudData.competencesFutilesPredilection || [];
            init.techData = JSON.stringify(techObj, null, 2);

            init.caracteristiques = {
                agilite: { min: init.agilite_min || 1, max: init.agilite_max || 6 },
                constitution: { min: init.constitution_min || 1, max: init.constitution_max || 6 },
                force: { min: init.force_min || 1, max: init.force_max || 6 },
                precision: { min: init.precision_min || 1, max: init.precision_max || 6 },
                esprit: { min: init.esprit_min || 1, max: init.esprit_max || 6 },
                perception: { min: init.perception_min || 1, max: init.perception_max || 6 },
                prestance: { min: init.prestance_min || 1, max: init.prestance_max || 6 },
                sangFroid: { min: init.sang_froid_min || 1, max: init.sang_froid_max || 6 },
                feerie: { min: init.feerie_min || 1, max: init.feerie_max || 8 },
                masque: { min: init.masque_min || 1, max: init.masque_max || 10 }
            };

            init.nameMasculine = init.name_masculine || init.name;
            init.nameFeminine = init.name_feminine || init.name;
            init.allowedGenders = init.allowed_genders || ['Homme', 'Femme'];

            // ✨ LE TRADUCTEUR ESTHÉTIQUE (Tableaux -> Lignes avec puces)
            const parseToList = (arr) => {
                if (!arr) return '';
                const list = Array.isArray(arr) ? arr : [arr];
                return list.map(item => `• ${item.replace(/^[•\-*]\s*/, '').trim()}`).join('\n');
            };

            init.avantages = parseToList(init.avantages);
            init.desavantages = parseToList(init.desavantages);
            if (Array.isArray(init.traits)) {
                init.traits = init.traits.join(', ');
            }

            init.pouvoirsIds = (editingItem.fairy_type_powers || []).map(link => link.power?.id || link.power_id).filter(Boolean);
            if (init.pouvoirsIds.length === 0 && fairyCloudData.pouvoirs) {
                init.pouvoirsIds = fairyCloudData.pouvoirs.map(p => p.id || p.nom).filter(Boolean);
            }

            init.assetsIds = (editingItem.fairy_type_assets || []).map(link => link.asset?.id || link.asset_id).filter(Boolean);
            if (init.assetsIds.length === 0 && fairyCloudData.atouts) {
                init.assetsIds = fairyCloudData.atouts.map(a => a.id || a.nom).filter(Boolean);
            }

            const fixe1 = (editingItem.fairy_type_capacites || []).find(l => l.capacite_type === 'fixe1');
            init.capaciteFixe1 = fixe1?.capacite?.id || fixe1?.capacite_id || fairyCloudData.capacites?.fixe1?.id;

            const fixe2 = (editingItem.fairy_type_capacites || []).find(l => l.capacite_type === 'fixe2');
            init.capaciteFixe2 = fixe2?.capacite?.id || fixe2?.capacite_id || fairyCloudData.capacites?.fixe2?.id;

            init.capacitesChoixIds = (editingItem.fairy_type_capacites || [])
                .filter(link => link.capacite_type === 'choix')
                .map(link => link.capacite?.id || link.capacite_id).filter(Boolean);
            if (init.capacitesChoixIds.length === 0 && fairyCloudData.capacites?.choix) {
                init.capacitesChoixIds = fairyCloudData.capacites.choix.map(c => c.id || c.nom).filter(Boolean);
            }

        } else {
            init.fairyIds = [];
            if (activeTab === 'fairy_powers') init.fairyIds = (editingItem.fairy_type_powers || []).map(l => l.fairy_types?.id || l.fairy_type_id).filter(Boolean);
            if (activeTab === 'fairy_assets') init.fairyIds = (editingItem.fairy_type_assets || []).map(l => l.fairy_types?.id || l.fairy_type_id).filter(Boolean);
            if (activeTab === 'fairy_capacites') init.fairyIds = (editingItem.fairy_type_capacites || []).map(l => l.fairy_types?.id || l.fairy_type_id).filter(Boolean);
        }
        return init;
    });

    const [justification, setJustification] = useState('');
    const [hasPendingTech, setHasPendingTech] = useState(false);
    const [localPouvoirs, setLocalPouvoirs] = useState(allPouvoirs || []);
    const [localAtouts, setLocalAtouts] = useState(allAtouts || []);
    const [localCapacites, setLocalCapacites] = useState(allCapacites || []);
    const [quickForge, setQuickForge] = useState({ isOpen: false, type: null });

    useEffect(() => { setLocalPouvoirs(allPouvoirs || []); }, [allPouvoirs]);
    useEffect(() => { setLocalAtouts(allAtouts || []); }, [allAtouts]);
    useEffect(() => { setLocalCapacites(allCapacites || []); }, [allCapacites]);

    const competencesData = Object.values(gameData.competences || {}).map(c => ({
        id: c.id, name: c.nom, specialites: c.specialites
    }));
    const usefulSkills = Object.keys(gameData.competences || {});

    let parsedTech = {};
    if (['fairy_assets', 'fairy_powers', 'fairy_capacites', 'fairy_types'].includes(activeTab)) {
        try { parsedTech = JSON.parse(proposal.techData || '{}'); } catch(e) { parsedTech = {}; }
    }

    const handleClose = () => {
        if (onClose) onClose();
        else if (setEditingItem) setEditingItem(null);
    };

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

    const updateTech = (newObj) => {
        const jsonStr = JSON.stringify(newObj, null, 2);
        setProposal({ ...proposal, techData: jsonStr, effets_techniques: jsonStr });
    };

    const handleSubmitProposal = async () => {
        if (hasPendingTech) {
            showInAppNotification("⚠️ Modifications en attente : Veuillez cliquer sur 'Compiler les Effets' dans les règles techniques avant de valider !", "error");
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

    return {
        state: { proposal, justification, hasPendingTech, quickForge, localPouvoirs, localAtouts, localCapacites, competencesData, usefulSkills, parsedTech },
        setters: { setProposal, setJustification, setHasPendingTech, setQuickForge },
        handlers: { handleClose, handleQuickForgeSuccess, updateTech, handleSubmitProposal }
    };
}