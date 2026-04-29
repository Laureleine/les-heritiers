// src/components/personnalisation/usePersonnalisation.js
import { useCallback, useMemo } from 'react';
import { useCharacter } from '../../context/CharacterContext';

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
                    const tech = typeof item.effets_techniques === 'string' ? JSON.parse(item.effets_techniques) : item.effets_techniques;
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
                    const tech = typeof atoutDef.effets_techniques === 'string' ? JSON.parse(atoutDef.effets_techniques) : atoutDef.effets_techniques;
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
        pendingEquipementChoices, handleChoixEquipement // ✨ EXPORTÉS ICI
    };
}
