// src/components/competencesLibres/useCompetencesLibres.js

import { useState, useCallback, useMemo } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { addGlobalSpeciality } from '../../utils/supabaseGameData';
import { showInAppNotification } from '../../utils/SystemeServices';
import { getUtileCost, FIXED_XP_COSTS } from '../../utils/xpCalculator';
import { isCharacterScelle } from '../../utils/lockUtils';
import { parseIfString } from '../../utils/json';
import { getXpState, XP_CODES } from '../../utils/xpActions';
import { HUMAIN_RANGS } from '../../data/DictionnaireJeu';

export const POINTS_TOTAUX = 15;
export const SKILLS_ESPRIT = [
    'Culture', 'Occultisme', 'Fortitude', 'Rhétorique',
    'Habiletés', 'Médecine', 'Observation', 'Sciences'
];

export function useCompetencesLibres() {
    const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
    const { profils, competences, competencesParProfil, fairyData, socialItems } = gameData || {};

    const isScelle = isCharacterScelle(character);
    const { xpDispo } = getXpState(character);

    const [creatingSpecFor, setCreatingSpecFor] = useState(null);

    const feeData = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

    // ✨ LE FIX ABSOLU EST ICI : On stabilise la référence mémoire de "lib" !
    const lib = useMemo(() => {
        return character.competencesLibres || { 
            rangs: {}, 
            choixPredilection: {}, 
            choixSpecialite: {}, 
            choixSpecialiteUser: {} 
        };
    }, [character.competencesLibres]);

    const onCompetencesLibresChange = useCallback((newLib) => {
        if (!isReadOnly) dispatchCharacter({ type: 'UPDATE_FIELD', field: 'competencesLibres', value: newLib, gameData });
    }, [dispatchCharacter, gameData, isReadOnly]);

    // 1. EXTRACTION DES BONUS D'ATOUTS ET D'ÉQUIPEMENT (VIE SOCIALE)
    const atoutsBonuses = useMemo(() => {
        const activeAtoutsNames = character.atouts || [];
        const allFairyAtouts = feeData?.atouts || [];
        const specs = [];
        
        // A. Lecture des Atouts
        allFairyAtouts.forEach(atout => {
            if (activeAtoutsNames.includes(atout.nom)) {
                const tech = parseIfString(atout.effets_techniques, {});
                if (tech?.specialites) {
                    tech.specialites.forEach(s => specs.push({ nom: s.nom, competences: [s.competence], source: atout.nom }));
                }
            }
        });

        // B. Lecture de la Vie Sociale (Le Guichet des Bénéfices)
        const choixEquipement = character.data?.choixEquipement || {};
        const allBoughtIds = Object.values(character.vieSociale || {}).flat();
        const boughtItems = socialItems?.filter(item => allBoughtIds.includes(item.id)) || [];

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
                                    specs.push({ nom: pSpec, competences: [pComp], source: item.nom });
                                } else {
                                    specs.push({ nom: chosenVal, competences: [pred.nom], source: item.nom });
                                }
                            }
                        });
                    }
                } catch(e) {}
            }
        });
        
        return specs;
    }, [character.atouts, feeData, character.data?.choixEquipement, character.vieSociale, socialItems]);

    // 2. SCORES CALCULÉS PAR LE MOTEUR CENTRAL
    const { predFinales, competencesBase, rangsProfils, budgetsPP } = character.computedStats || {};
    const getScoreBase = useCallback((nomComp) => competencesBase?.[nomComp] || 0, [competencesBase]);
    const bonusEspritMax = Math.max(0, (character.caracteristiques?.esprit || 1) - 3);

    // 3. MOTEUR DE BUDGETS (Points Verts & Violets)
    const pointsTotauxUtiles = character.typePersonnage === 'humain'
        ? (HUMAIN_RANGS[character.rangHumain]?.utiles ?? POINTS_TOTAUX)
        : POINTS_TOTAUX;

    const budgetsInfo = useMemo(() => {
        let std = 0; let eligible = 0;
        Object.entries(lib.rangs || {}).forEach(([nom, val]) => {
            if (SKILLS_ESPRIT.includes(nom)) eligible += val;
            else std += val;
        });
        Object.entries(lib.choixSpecialiteUser || {}).forEach(([nom, specs]) => {
            let count = specs.length;
            if (nom === 'Conduite' && count > 0 && (getScoreBase('Conduite') + (lib.rangs['Conduite']||0)) > 0) count -= 1;
            if (SKILLS_ESPRIT.includes(nom)) eligible += count;
            else std += count;
        });

        const pointsVioletsUtilises = Math.min(eligible, bonusEspritMax);
        const debordementEsprit = eligible - pointsVioletsUtilises;
        const totalVertUtilise = std + debordementEsprit;

        return {
            pointsRestantsVerts: pointsTotauxUtiles - totalVertUtilise,
            pointsRestantsViolets: bonusEspritMax - pointsVioletsUtilises,
            bonusEspritMax
        };
    }, [lib.rangs, lib.choixSpecialiteUser, getScoreBase, bonusEspritMax, pointsTotauxUtiles]);

    // 4. HANDLERS D'ACTION (Mutations)
    const handleRangChange = useCallback((nomComp, delta) => {
        if (isReadOnly) return;
        const current = lib.rangs[nomComp] || 0;
        const totalScore = getScoreBase(nomComp) + current;
        const isPred = predFinales?.includes(nomComp);
        
        const evolutionMax = isPred ? 7 : 6;
        const maxAllowed = isScelle ? evolutionMax : (isPred ? 5 : 4);

        if (isScelle) {
            const plancher = character.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0;

            // Guards préliminaires
            if (delta > 0 && totalScore >= evolutionMax) { showInAppNotification(`Excellence maximale atteinte (${evolutionMax}).`, "warning"); return; }
            if (delta < 0 && current <= plancher) { showInAppNotification("Savoir originel scellé !", "warning"); return; }

            // ✨ BONUS ESPRIT : chaque rang d'Esprit au-dessus de 3 débloque 1 rang gratuit
            //    dans les compétences d'Érudit et Savant, même acquis avec des XP post-scellage.
            let estGratuit = false;
            if (SKILLS_ESPRIT.includes(nomComp)) {
                const espritScelle  = character.data?.stats_scellees?.caracteristiques?.esprit || 3;
                const bonusEspritXP = Math.max(0,
                    Math.max(0, (character.caracteristiques?.esprit || 3) - 3) -
                    Math.max(0, espritScelle - 3)
                );
                if (bonusEspritXP > 0) {
                    const scelleeRangs = character.data?.stats_scellees?.competencesLibres?.rangs || {};
                    const investPost   = SKILLS_ESPRIT.reduce((acc, c) =>
                        acc + Math.max(0, (lib.rangs[c] || 0) - (scelleeRangs[c] || 0)), 0);
                    // Hausse : gratuit si points disponibles
                    // Baisse : était gratuit si, une fois retiré, on est encore sous le seuil
                    estGratuit = delta > 0 ? investPost < bonusEspritXP : (investPost - 1) < bonusEspritXP;
                }
            }

            // Vérification XP (seulement pour un rang payant en hausse)
            const costXP = getUtileCost(delta > 0 ? totalScore : totalScore - 1);
            if (delta > 0 && !estGratuit && xpDispo < costXP) {
                showInAppNotification(`Il vous faut ${costXP} XP.`, "error");
                return;
            }

            // Mutation
            dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { competencesLibres: { ...lib, rangs: { ...lib.rangs, [nomComp]: current + delta } } }, gameData });

            // Journal XP (seulement si rang payant)
            if (!estGratuit) {
                dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: {
                    type: delta > 0 ? 'DEPENSE' : 'REMBOURSEMENT',
                    code: XP_CODES.COMP_UTILE_RANG,
                    label: `Perfectionnement : ${nomComp}`,
                    valeur: costXP, rang_final: totalScore + delta
                }, gameData });
                showInAppNotification(
                    delta > 0 ? `Compétence améliorée pour ${costXP} XP !` : `Amélioration annulée. +${costXP} XP récupérés.`,
                    delta > 0 ? "success" : "info"
                );
            } else {
                // Rang gratuit — journalisé à valeur 0 pour traçabilité
                dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: {
                    type: delta > 0 ? 'DEPENSE' : 'REMBOURSEMENT',
                    code: XP_CODES.ESPRIT_BONUS_UTILE,
                    label: `Rang gratuit (bonus Esprit) : ${nomComp}`,
                    valeur: 0, rang_final: totalScore + delta
                }, gameData });
                showInAppNotification(
                    delta > 0 ? `Rang gratuit ! (bonus Esprit 🧠)` : `Rang gratuit (Esprit) oublié.`,
                    delta > 0 ? "success" : "info"
                );
            }
            return;
        }

        if (delta > 0) {
            if (totalScore >= maxAllowed) return;
            const isEsprit = SKILLS_ESPRIT.includes(nomComp);
            if (!(budgetsInfo.pointsRestantsVerts > 0 || (isEsprit && budgetsInfo.pointsRestantsViolets > 0))) return;
        }
        if (delta < 0 && current <= 0) return;

        onCompetencesLibresChange({ ...lib, rangs: { ...lib.rangs, [nomComp]: current + delta } });
    }, [lib, getScoreBase, predFinales, budgetsInfo, onCompetencesLibresChange, isScelle, isReadOnly, xpDispo, character.data, character.caracteristiques?.esprit, dispatchCharacter, gameData]);

    const handleAddSpecialiteUser = useCallback((nomComp, specName) => {
        if (!specName || isReadOnly) return;
        const currentSpecs = lib.choixSpecialiteUser[nomComp] || [];
        if (currentSpecs.includes(specName)) return;

        const foundSpec = (competences[nomComp]?.specialites || []).find(s => s.nom === specName);
        if (foundSpec && foundSpec.is_official === false) {
            if (!window.confirm(`⚠️ "${specName}" est une spécialité non-officielle, créée par la Communauté.\n\nSouhaitez-vous vraiment l'utiliser ?`)) return;
        }

        const isFreeConduite = nomComp === 'Conduite' && (getScoreBase(nomComp) + (lib.rangs[nomComp] || 0)) > 0 && currentSpecs.length === 0;
        const costXP = isFreeConduite ? 0 : FIXED_XP_COSTS.specialite_utile;

        if (isScelle) {
            if (xpDispo < costXP) { showInAppNotification(`Il vous faut ${costXP} XP.`, "error"); return; }
            dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { competencesLibres: { ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] } } }, gameData });
            if (costXP > 0) {
                dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: { type: 'DEPENSE', code: XP_CODES.COMP_UTILE_SPECIALITE, label: `Spécialité acquise : ${nomComp} (${specName})`, valeur: costXP }, gameData });
                showInAppNotification(`Spécialité acquise pour ${costXP} XP !`, "success");
            } else {
                showInAppNotification("Spécialité de Conduite gratuite acquise !", "success");
            }
            return;
        }

        if (!isFreeConduite) {
            const isEsprit = SKILLS_ESPRIT.includes(nomComp);
            if (!(budgetsInfo.pointsRestantsVerts > 0 || (isEsprit && budgetsInfo.pointsRestantsViolets > 0))) { showInAppNotification("Fonds insuffisants.", "error"); return; }
        }
        onCompetencesLibresChange({ ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: [...currentSpecs, specName] } });
    }, [lib, isReadOnly, isScelle, xpDispo, getScoreBase, budgetsInfo, onCompetencesLibresChange, dispatchCharacter, gameData, competences]);

    const handleRemoveSpecialiteUser = useCallback((nomComp, specToRemove) => {
        if (isReadOnly) return;
        const currentSpecs = lib.choixSpecialiteUser[nomComp] || [];
        const isRefundingFreeConduite = nomComp === 'Conduite' && currentSpecs.length === 1 && specToRemove === currentSpecs.at(0);
        const refundXP = isRefundingFreeConduite ? 0 : FIXED_XP_COSTS.specialite_utile;

        if (isScelle) {
            const plancherSpecs = character.data?.stats_scellees?.competencesLibres?.choixSpecialiteUser?.[nomComp] || [];
            if (plancherSpecs.includes(specToRemove)) { showInAppNotification("Savoir originel scellé !", "warning"); return; }
            dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { competencesLibres: { ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: currentSpecs.filter(s => s !== specToRemove) } } }, gameData });
            if (refundXP > 0) {
                dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: { type: 'REMBOURSEMENT', code: XP_CODES.COMP_UTILE_SPECIALITE, label: `Spécialité acquise : ${nomComp} (${specToRemove})`, valeur: refundXP }, gameData });
                showInAppNotification(`Spécialité oubliée. +${refundXP} XP récupérés.`, "info");
            }
            return;
        }
        onCompetencesLibresChange({ ...lib, choixSpecialiteUser: { ...lib.choixSpecialiteUser, [nomComp]: currentSpecs.filter(s => s !== specToRemove) } });
    }, [lib, isReadOnly, isScelle, character.data, onCompetencesLibresChange, dispatchCharacter, gameData]);

    const handleCreateGlobalSpeciality = useCallback(async (nomComp, specName) => {
        const compData = competences[nomComp];
        if (!compData || !compData.id) return;
        try {
            const newSpecObj = await addGlobalSpeciality(compData.id, specName);
            if (competences[nomComp]) competences[nomComp].specialites = [...(competences[nomComp].specialites || []), newSpecObj];
            handleAddSpecialiteUser(nomComp, specName);
            setCreatingSpecFor(null);
        } catch (e) { showInAppNotification("Erreur : " + e.message, "error"); }
    }, [competences, handleAddSpecialiteUser]);

    const handleChoixChange = useCallback((index, value, type) => {
        if (isReadOnly || isScelle) return;
        const field = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
        onCompetencesLibresChange({ ...lib, [field]: { ...lib[field], [index]: value } });
    }, [lib, onCompetencesLibresChange, isReadOnly, isScelle]);

    const handleReset = () => {
        if (isReadOnly || isScelle) return;
        if (window.confirm("Voulez-vous réinitialiser TOUS vos points et spécialités utiles ?")) {
            onCompetencesLibresChange({ rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} });
        }
    };

    // 5. EXTRACTEUR DE DONNÉES PAR LIGNE (Pour le composant CompetenceRow)
    const getCompRowData = useCallback((nomComp) => {
        const current = lib.rangs?.[nomComp] || 0;
        const scoreBase = getScoreBase(nomComp);
        const totalScore = scoreBase + current;
        const isPred = predFinales?.includes(nomComp);
        const isEspritEligible = SKILLS_ESPRIT.includes(nomComp);
        
        const evolutionMax = isPred ? 7 : 6;
        const maxAllowed = isScelle ? evolutionMax : (isPred ? 5 : 4);
        const plancher = character.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0;

        const getFairySpec = () => {
            if (!feeData?.competencesPredilection) return null;
            let foundSpec = null;
            feeData.competencesPredilection.forEach((p, idx) => {
                if (p.isSpecialiteChoix) {
                    const choix = lib.choixSpecialite?.[idx];
                    if (choix && choix.includes(':')) {
                        const [pComp, pSpec] = choix.split(':').map(s => s.trim());
                        if (pComp === nomComp) foundSpec = pSpec;
                    } else if (p.nom === nomComp) {
                        foundSpec = choix; // Rétrocompatibilité ancien format
                    }
                } else if (p.nom === nomComp) {
                    foundSpec = p.specialite;
                }
            });
            return foundSpec;
        };

        const fairySpecActuelle = getFairySpec();
        const specsForAtouts = atoutsBonuses.filter(a => a.competences.includes(nomComp));
        const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
        
        const jobSpec = character.competencesLibres?.specialiteMetier;
        const hasJobSpecHere = jobSpec && jobSpec.comp === nomComp && jobSpec.nom;
        const isFirstConduite = nomComp === 'Conduite' && totalScore > 0 && userSpecs.length === 0;
        
        const nextSpecCost = isScelle ? (isFirstConduite ? 0 : FIXED_XP_COSTS.specialite_utile) : (isFirstConduite ? 0 : 1);

        // ✨ BONUS ESPRIT : calcul du rang gratuit pour l'affichage
        let rangEspritGratuitDispo = false;
        if (isScelle && isEspritEligible) {
            const espritScelle  = character.data?.stats_scellees?.caracteristiques?.esprit || 3;
            const bonusEspritXP = Math.max(0,
                Math.max(0, (character.caracteristiques?.esprit || 3) - 3) -
                Math.max(0, espritScelle - 3)
            );
            if (bonusEspritXP > 0) {
                const scelleeRangs = character.data?.stats_scellees?.competencesLibres?.rangs || {};
                const investPost   = SKILLS_ESPRIT.reduce((acc, c) =>
                    acc + Math.max(0, (lib.rangs[c] || 0) - (scelleeRangs[c] || 0)), 0);
                rangEspritGratuitDispo = investPost < bonusEspritXP;
            }
        }

        const utileCost = isScelle && totalScore < maxAllowed
            ? (rangEspritGratuitDispo ? 0 : getUtileCost(totalScore))
            : null;

        return {
            nomComp, current, scoreBase, totalScore, isPred, isEspritEligible, maxAllowed, plancher,
            fairySpecActuelle, specsFromAtouts: specsForAtouts, userSpecs, hasJobSpecHere, jobSpec, nextSpecCost,
            utileCost, rangEspritGratuitDispo,
            availableSpecs: competences[nomComp]?.specialites || [],
            isMinusDisabled: isScelle ? (current <= plancher) : (current <= 0),
            isPlusDisabled: isReadOnly || totalScore >= maxAllowed || (!isScelle && budgetsInfo.pointsRestantsVerts <= 0 && (!isEspritEligible || budgetsInfo.pointsRestantsViolets <= 0))
        };
    }, [lib, getScoreBase, predFinales, isScelle, character.data, character.caracteristiques?.esprit, feeData, atoutsBonuses, character.competencesLibres, competences, isReadOnly, budgetsInfo]);

    return {
        character, isScelle, isReadOnly, feeData, profils, competencesParProfil,
        lib, budgetsInfo, creatingSpecFor, setCreatingSpecFor,
        rangsProfils, budgetsPP,
        handlers: { handleRangChange, handleAddSpecialiteUser, handleRemoveSpecialiteUser, handleCreateGlobalSpeciality, handleChoixChange, handleReset },
        getCompRowData
    };
}