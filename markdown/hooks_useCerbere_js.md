// src/hooks/useCerbere.js
import { useState, useCallback, useMemo } from 'react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { isCharacterScelle } from '../utils/lockUtils';
import { parseIfString } from '../utils/json';
import { useSnapshots } from './useSnapshots';
import { calculateFullCombatStats, calculateSkillScore } from '../utils/rulesEngine';
import { calculateCharacterStats } from '../utils/bonusCalculator';
import { validateBeforeSeal } from '../utils/sealValidation';

export function useCerbere() {
    const { character, gameData, dispatchCharacter } = useCharacter();
    const feeData = gameData?.fairyData?.[character.typeFee];
    const isScelle = isCharacterScelle(character);

    const { snapshots, handleTakeSnapshot, handleCloneSnapshot } = useSnapshots(character.id, character.userId || character.user_id);
    const [showConfirmSeal, setShowConfirmSeal] = useState(false);
    const [sealErrors,   setSealErrors]   = useState([]);
    const [sealWarnings, setSealWarnings] = useState([]);

    const handleSealClick = () => {
        // Garde 0 — personnage non sauvegardé
        if (!character.id || character.id.toString().startsWith('temp_')) {
            showInAppNotification("Veuillez sauvegarder avant de sceller.", "error");
            return;
        }

        // Validation complète pré-scellage
        const { errors, warnings } = validateBeforeSeal(character, gameData, feeData);
        setSealErrors(errors);
        setSealWarnings(warnings);
        setShowConfirmSeal(true);
    };

    const executeSeal = async () => {
        setShowConfirmSeal(false);
        dispatchCharacter({ type: 'SEAL_CHARACTER', gameData });
        showInAppNotification("Sceau apposé !", "success");
    };

    // ✨ LE CERVEAU SÉPARÉ ABSORBE TON MOTEUR !
    const finalStats = useMemo(() => calculateCharacterStats(character, gameData), [character, gameData]);

    const getCarac = useCallback((key) => {
        const base = character.caracteristiques?.[key] ||
                     character.data?.stats_scellees?.caracteristiques?.[key] ||
                     feeData?.caracteristiques?.[key]?.min || 1;
        const bonus = finalStats.caracteristiques.bonus[key]?.reduce((acc, b) => acc + b.value, 0) || 0;
        return base + bonus;
    }, [character.caracteristiques, character.data, feeData, finalStats]);

    // ✨ FIX : On envoie la bibliothèque entière (gameData) au rulesEngine !
    const liveCombatStats = useMemo(() => calculateFullCombatStats(character, gameData), [character, gameData]);

    const isPredilection = useCallback((nomComp) => {
        const inFee = feeData?.competencesPredilection?.some(p => p.nom === nomComp && !p.isOnlySpecialty);
        const inChoix = Object.values(character.competencesLibres?.choixPredilection || {}).includes(nomComp);
        return inFee || inChoix;
    }, [character.competencesLibres, feeData]);

    const specialtiesByComp = useMemo(() => {
        const map = {};
        const addSpec = (comp, nom, label) => {
            if (!comp || !nom) return;
            if (!map[comp]) map[comp] = [];
            const displayNom = label ? `${nom} (${label})` : nom;
            if (!map[comp].includes(displayNom)) map[comp].push(displayNom);
        };

        if (character.competencesLibres?.choixSpecialiteUser) {
            Object.entries(character.competencesLibres.choixSpecialiteUser).forEach(([comp, list]) => {
                list.forEach(s => addSpec(comp, s, null));
            });
        }

        if (character.competencesLibres?.specialiteMetier?.nom) {
            const sm = character.competencesLibres.specialiteMetier;
            addSpec(sm.comp, sm.nom, 'Métier');
        }

		if (feeData?.competencesPredilection) {
			feeData.competencesPredilection.forEach((p, idx) => {
				const nomSpec = p.specialite || character.competencesLibres?.choixSpecialite?.[idx];
				if (nomSpec) {
					// ✨ LECTURE DU NOUVEAU FORMAT UNIVERSEL
					if (p.isSpecialiteChoix && nomSpec.includes(':')) {
						const [pComp, pSpec] = nomSpec.split(':').map(s => s.trim());
						addSpec(pComp, pSpec, 'Inné');
					} else {
						addSpec(p.nom, nomSpec, 'Inné');
					}
				}
			});
		}

        (character.atouts || []).forEach(atoutId => {
            const def = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
            if (def?.effets_techniques) {
                try {
                    const tech = parseIfString(def.effets_techniques, {});
                    tech.specialites?.forEach(s => addSpec(s.competence, s.nom, 'Atout'));
                } catch(e) {}
            }
        });

		// ✨ INJECTION VIE SOCIALE (Spécialités pour Cerbère et PDF)
		const allBoughtIds = Object.values(character.vieSociale || {}).flat();
		const boughtItems = gameData.socialItems?.filter(item => allBoughtIds.includes(item.id)) || [];
		const choixEquipement = character.data?.choixEquipement || {};
		
		boughtItems.forEach(item => {
			if (item.effets_techniques) {
				try {
					const tech = parseIfString(item.effets_techniques, {});
					if (tech.predilections) {
						tech.predilections.forEach((pred, idx) => {
							const chosenVal = choixEquipement[`${item.id}_${idx}`];
							if (chosenVal && pred.isSpecialiteChoix) {
								if (chosenVal.includes(':')) {
									const [pComp, pSpec] = chosenVal.split(':').map(s => s.trim());
									addSpec(pComp, pSpec, item.nom);
								} else {
									addSpec(pred.nom, chosenVal, item.nom);
								}
							}
						});
					}
				} catch(e) {}
			}
		});
		
        // ✨ AJOUT DES SPÉCIALITÉS GRATUITES DÉTECTÉES PAR LE BONUS CALCULATOR !
        if (finalStats.specialites?.gratuites) {
            Object.entries(finalStats.specialites.gratuites).forEach(([comp, list]) => {
                list.forEach(s => addSpec(comp, s.specialite, s.source));
            });
        }

        return map;
	}, [character, feeData, finalStats, gameData.socialItems]); 
    
	const uniqueFutiles = useMemo(() => {
        if (!character.computedStats?.futilesTotal) return [];
        return Object.keys(character.computedStats.futilesTotal).sort((a, b) => a.localeCompare(b));
    }, [character.computedStats]);

    return {
        character, feeData, gameData, isScelle, getCarac, uniqueFutiles, specialtiesByComp, liveCombatStats, isPredilection,
        showConfirmSeal, setShowConfirmSeal, sealErrors, sealWarnings,
        snapshots, handleTakeSnapshot, handleCloneSnapshot, handleSealClick, executeSeal,
        calculateSkillScore: (nom) => calculateSkillScore(nom, character, gameData) // ✨ FIX: gameData !
    };
}
