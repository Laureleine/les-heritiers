// src/utils/bonusCalculator.js

/**
 * Trouve une capacité par son nom dans les données du jeu
 */
const findCapacite = (nom, gameData, typeFee) => {
    const feeData = gameData.fairyData?.[typeFee];
    if (!feeData?.capacites) return null;

    if (feeData.capacites.fixe1?.nom === nom) return feeData.capacites.fixe1;
    if (feeData.capacites.fixe2?.nom === nom) return feeData.capacites.fixe2;
    
    const capaciteChoix = feeData.capacites.choix?.find(c => c.nom === nom);
    if (capaciteChoix) return capaciteChoix;
    
    return null;
};

/**
 * Trouve un pouvoir par son nom dans les données du jeu
 */
const findPouvoir = (nom, gameData, typeFee) => {
    const feeData = gameData.fairyData?.[typeFee];
    if (!feeData?.pouvoirs) return null;
    return feeData.pouvoirs.find(p => p.nom === nom);
};

/**
 * Calcule tous les bonus actifs d'un personnage
 * @param {Object} character - Le personnage
 * @param {Object} gameData - Les données du jeu
 * @returns {Object} Statistiques avec bonus appliqués
 */
export const calculateCharacterStats = (character, gameData) => {
    // Initialiser les résultats
    const result = {
        caracteristiques: {
            base: { ...character.caracteristiques },
            bonus: {},        
            masques: {},      
            visibles: {},     
            final: { ...character.caracteristiques }
        },
        competences: {
            bonus: {}         
        },
        specialites: {
            gratuites: {}     
        }
    };

    const activeBonusSources = [];

    if (character.capaciteChoisie) {
        const capacite = findCapacite(character.capaciteChoisie, gameData, character.typeFee);
        if (capacite?.bonus) activeBonusSources.push({ source: capacite.nom, bonus: capacite.bonus });
    }

    if (character.pouvoirs && Array.isArray(character.pouvoirs)) {
        character.pouvoirs.forEach(pouvoirNom => {
            const pouvoir = findPouvoir(pouvoirNom, gameData, character.typeFee);
            if (pouvoir?.bonus) activeBonusSources.push({ source: pouvoir.nom, bonus: pouvoir.bonus });
        });
    }

    if (character.atouts && Array.isArray(character.atouts)) {
        const feeData = gameData.fairyData?.[character.typeFee];
        if (feeData && feeData.atouts) {
            character.atouts.forEach(atoutNom => {
                const atoutData = feeData.atouts.find(a => a.nom === atoutNom);
                if (atoutData && atoutData.effets_techniques) {
                    activeBonusSources.push({ source: atoutData.nom, bonus: atoutData.effets_techniques });
                }
            });
        }
    }

    activeBonusSources.forEach(({ source, bonus }) => {
        // 1. BONUS CARACTÉRISTIQUES
        if (bonus.caracteristiques) {
            Object.entries(bonus.caracteristiques).forEach(([stat, bonusData]) => {
                const value = typeof bonusData === 'number' ? bonusData : bonusData.value;
                const masque = typeof bonusData === 'object' ? bonusData.masque : false;
                if (!result.caracteristiques.bonus[stat]) result.caracteristiques.bonus[stat] = [];
                
                result.caracteristiques.bonus[stat].push({ source, value, masque });
                result.caracteristiques.final[stat] = (result.caracteristiques.final[stat] || 0) + value;
                
                if (masque) result.caracteristiques.masques[stat] = (result.caracteristiques.masques[stat] || 0) + value;
                else result.caracteristiques.visibles[stat] = (result.caracteristiques.visibles[stat] || 0) + value;
            });
        }

        // 2. BONUS COMPÉTENCES
        if (bonus.competences) {
            Object.entries(bonus.competences).forEach(([comp, value]) => {
                if (!result.competences.bonus[comp]) result.competences.bonus[comp] = [];
                result.competences.bonus[comp].push({ source, value });
            });
        }

        // ✨ 3. LE FIX EST ICI : On lit le tableau de spécialités proprement !
        if (bonus.specialites && Array.isArray(bonus.specialites)) {
            bonus.specialites.forEach(s => {
                const comp = s.competence;
                const specName = s.nom || s.specialite;
                
                if (comp && specName) {
                    if (!result.specialites.gratuites[comp]) {
                        result.specialites.gratuites[comp] = [];
                    }
                    result.specialites.gratuites[comp].push({ source, specialite: specName });
                }
            });
        }
    });

    return result;
};

export const formatCaracteristique = (nom, stats) => {
    const base = stats.caracteristiques.base[nom] || 0;
    const final = stats.caracteristiques.final[nom] || 0;
    const bonus = stats.caracteristiques.bonus[nom] || [];
    const masque = stats.caracteristiques.masques[nom] || 0;

    if (bonus.length === 0) return `${final}`;

    const bonusText = bonus.map(b => `${b.value > 0 ? '+' : ''}${b.value} ${b.source}`).join(', ');

    if (masque > 0) return `${base} / ${final} (${bonusText})`;
    return `${final} (${bonusText})`;
};

export const getCompetenceBonus = (competence, stats) => {
    const bonus = stats.competences.bonus[competence];
    if (!bonus || bonus.length === 0) return null;
    const total = bonus.reduce((sum, b) => sum + b.value, 0);
    const sources = bonus.map(b => b.source);
    return { total, sources };
};

export const getSpecialitesGratuites = (competence, stats) => {
    return stats.specialites.gratuites[competence] || [];
};