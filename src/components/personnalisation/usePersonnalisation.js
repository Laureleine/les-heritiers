// src/components/personnalisation/usePersonnalisation.js
import { useCallback, useMemo } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { supabase } from '../../config/supabase';
import { requireCurrentUser } from '../../utils/authUtils';
import { parseIfString } from '../../utils/json';

export function usePersonnalisation() {
    const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
    const { competences, socialItems, fairyData } = gameData;
    const feeData = fairyData?.[character.typeFee];

    const usefulSkills = useMemo(() => Object.keys(competences || {}).sort(), [competences]);

    const boughtMetiers = useMemo(() => {
        const boughtIds = Object.values(character.vieSociale || {}).flat();
        return (socialItems || []).filter(item => boughtIds.includes(item.id) && item.categorie === 'metier');
    }, [character.vieSociale, socialItems]);

    // ✨ LE SCANNER D'ÉQUIPEMENT (La consigne de Marie Cha')
    const pendingEquipementChoices = useMemo(() => {
        const choices = [];
        const boughtIds = Object.values(character.vieSociale || {}).flat();
        const boughtItems = (socialItems || []).filter(item => boughtIds.includes(item.id));

        boughtItems.forEach(item => {
            if (item.effets_techniques) {
                try {
                    const tech = parseIfString(item.effets_techniques, {});
                    if (tech.predilections) {
                        tech.predilections.forEach((pred, idx) => {
                            if (pred.isChoix || pred.isSpecialiteChoix) {
                                choices.push({
                                    itemId: item.id,
                                    itemName: item.nom,
                                    index: idx,
                                    predKey: `${item.id}_${idx}`, // Identifiant unique du choix
                                    ...pred
                                });
                            }
                        });
                    }
                } catch(e) {}
            }
        });
        return choices;
    }, [character.vieSociale, socialItems]);

    const handleChoixEquipement = useCallback((key, value) => {
        if (isReadOnly) return;
        const currentData = character.data || {};
        const currentChoix = currentData.choixEquipement || {};
        dispatchCharacter({
            type: 'UPDATE_MULTIPLE',
            payload: { data: { ...currentData, choixEquipement: { ...currentChoix, [key]: value } } },
            gameData
        });
    }, [isReadOnly, character.data, dispatchCharacter, gameData]);

    // 📸 LE DAGUERRÉOTYPISTE : Upload d'un portrait vers Supabase Storage
    const uploadPortrait = useCallback(async (file, type) => {
        if (isReadOnly) return;
        const user = await requireCurrentUser('Personnage non sauvegardé — sauvegardez d\'abord votre Héritier.');
        if (!character.id) throw new Error('Personnage non sauvegardé — sauvegardez d\'abord votre Héritier.');

        const ext = file.name.split('.').pop().toLowerCase();
        const path = `${user.id}/${character.id}/${type}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from('portraits')
            .upload(path, file, { upsert: true, contentType: file.type });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage.from('portraits').getPublicUrl(path);
        const field = type === 'masked' ? 'portrait_masked_url' : 'portrait_unmasked_url';
        // Cache-busting : le chemin Supabase est identique après remplacement (upsert),
        // donc on force le navigateur à recharger la nouvelle image avec un timestamp.
        const bustUrl = `${publicUrl}?t=${Date.now()}`;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { [field]: bustUrl }, gameData });
        return publicUrl;
    }, [isReadOnly, character.id, dispatchCharacter, gameData]);

    const updateField = useCallback((field, value) => {
        if (isReadOnly) return;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { [field]: value }, gameData });
    }, [isReadOnly, dispatchCharacter, gameData]);

    const updateActiviteDomaine = useCallback((val) => {
        if (isReadOnly) return;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: { ...character.profils, activiteDomaine: val } } }, gameData);
    }, [isReadOnly, character.profils, dispatchCharacter, gameData]);

    const updateActivitePrecision = useCallback((val) => {
        if (isReadOnly) return;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: { ...character.profils, activite: val } } }, gameData);
    }, [isReadOnly, character.profils, dispatchCharacter, gameData]);

    const updateSpecialiteMetier = useCallback((comp, nom) => {
        if (isReadOnly) return;
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { competencesLibres: { ...character.competencesLibres, specialiteMetier: { comp, nom } } } }, gameData);
    }, [isReadOnly, character.competencesLibres, dispatchCharacter, gameData]);

    const getSpecsDisponiblesPourMetier = useCallback((compNom) => {
        if (!compNom || !competences[compNom]?.specialites) return [];
        const toutesLesSpecs = competences[compNom].specialites;
        const acquisesManuellement = character.competencesLibres?.choixSpecialiteUser?.[compNom] || [];
        
        let specInnee = null;
        if (feeData?.competencesPredilection) {
            const predIndex = feeData.competencesPredilection.findIndex(p => p.nom === compNom);
            if (predIndex !== -1) {
                const pred = feeData.competencesPredilection[predIndex];
                specInnee = pred.specialite || (pred.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[predIndex] : null);
            }
        }

        const specsAtouts = [];
        (character.atouts || []).forEach(atoutId => {
            const atoutDef = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
            if (atoutDef?.effets_techniques) {
                try {
                    const tech = parseIfString(atoutDef.effets_techniques, {});
                    if (tech.specialites) tech.specialites.forEach(s => { if (s.competence === compNom) specsAtouts.push(s.nom); });
                } catch(e) {}
            }
        });

        const toutesMesSpecs = [...acquisesManuellement, specInnee, ...specsAtouts].filter(Boolean);
        return toutesLesSpecs.filter(spec => !toutesMesSpecs.includes(spec.nom));
    }, [competences, character.competencesLibres, character.atouts, feeData]);

    return {
        character, dispatchCharacter, gameData, isReadOnly,
        usefulSkills, boughtMetiers,
        updateField, updateActiviteDomaine, updateActivitePrecision, updateSpecialiteMetier,
        getSpecsDisponiblesPourMetier,
        pendingEquipementChoices, handleChoixEquipement,
        uploadPortrait // 📸 LE DAGUERRÉOTYPISTE
    };
}
