// src/utils/rulesEngine.js
import { calculateCharacterStats } from './bonusCalculator';

/**
 * Calcule le score final d'une compétence (Score S)
 */
export const calculateSkillScore = (nomComp, character, gameData) => {
    if (!nomComp || !character || !gameData) return 0;
    const feeData = gameData.fairyData?.[character.typeFee];
    const rangInvesti = character.competencesLibres?.rangs?.[nomComp] || 0;

    let bonusProfil = 0;
    const profilsMap = {
        'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
        'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
        'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
        'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
        'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
        'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
    };

    Object.entries(profilsMap).forEach(([pName, comps]) => {
        if (comps.includes(nomComp)) {
            if (character.profils?.majeur?.nom === pName) bonusProfil = 2;
            if (character.profils?.mineur?.nom === pName) bonusProfil = 1;
        }
    });

    const isPred = feeData?.competencesPredilection?.some(p => p.nom === nomComp) ||
        Object.values(character.competencesLibres?.choixPredilection || {}).includes(nomComp);
    const bonusPred = isPred ? 2 : 0;

    // ✨ INJECTION DU BONUS CALCULATOR : On aspire tous les modificateurs de Pouvoirs/Capacités/Atouts !
    const finalStats = calculateCharacterStats(character, gameData);
    const bonusMagique = finalStats.competences.bonus[nomComp]?.reduce((acc, b) => acc + b.value, 0) || 0;

    return rangInvesti + bonusProfil + bonusPred + bonusMagique;
};

/**
 * Calcule les statistiques de combat complètes
 */
export const calculateFullCombatStats = (character, gameData) => {
    if (!character || !gameData) return {};
    const feeData = gameData.fairyData?.[character.typeFee];
    
    // ✨ INJECTION DU BONUS CALCULATOR 
    const finalStats = calculateCharacterStats(character, gameData);

    const getCarac = (k) => {
        const base = character.caracteristiques?.[k] ||
                     character.data?.stats_scellees?.caracteristiques?.[k] ||
                     feeData?.caracteristiques?.[k]?.min || 1;
        const bonus = finalStats.caracteristiques.bonus[k]?.reduce((acc, b) => acc + b.value, 0) || 0;
        return base + bonus;
    };

    const agi = getCarac('agilite');
    const con = getCarac('constitution');
    const esp = getCarac('esprit');
    const masque = getCarac('masque');
    const sf = getCarac('sangFroid');

    // ✨ FIX : calculateSkillScore demande maintenant gameData !
    const sMouv = calculateSkillScore('Mouvement', character, gameData);
    const sMelee = calculateSkillScore('Mêlée', character, gameData);
    const sRes = calculateSkillScore('Ressort', character, gameData);
    const sFort = calculateSkillScore('Fortitude', character, gameData);
    const sArt = calculateSkillScore('Art de la guerre', character, gameData);

    const bonusMasque = Math.max(0, masque - 5);
    const taille = feeData?.taille || 'Moyenne';
    let modT = 0;
    if (taille === 'Petite') modT = 1;
    else if (taille === 'Grande') modT = -1;
    else if (taille === 'Très Grande') modT = -2;

    return {
        esquiveMasquee: sMouv + agi + 5,
        esquiveDemasquee: sMouv + agi + 5 + modT,
        parade: sMelee + agi + 5,
        resPhys: sRes + con + 5 + bonusMasque,
        resPsych: sFort + esp + 5 + bonusMasque,
        init: sArt + sf,
        pvMax: (3 * con) + 9,
        tricherie: Math.floor((getCarac('feerie') + masque) / 2)
    };
};
