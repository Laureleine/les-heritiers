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

    const isPred = feeData?.competencesPredilection?.some(p => p.nom === nomComp && !p.isOnlySpecialty) ||
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
    
    const finalStats = calculateCharacterStats(character, gameData);

    const isCapacite = (sourceName) => {
        if (!sourceName) return false;
        const s = sourceName.toLowerCase().trim();
        if (s.includes('accru')) return true;
        const caps = [
            character.capaciteChoisie,
            feeData?.capacites?.fixe1?.nom,
            feeData?.capacites?.fixe2?.nom
        ].filter(Boolean).map(c => c.toLowerCase().trim());
        return caps.some(cap => s.includes(cap));
    };

    const getCarac = (k) => {
        const base = character.caracteristiques?.[k] ||
                     character.data?.stats_scellees?.caracteristiques?.[k] ||
                     feeData?.caracteristiques?.[k]?.min || 1;
        const sources = finalStats.caracteristiques.bonus[k] || [];
        const permanent = sources.filter(b => !isCapacite(b.source)).reduce((acc, b) => acc + Number(b.value), 0);
        return base + permanent;
    };

    const getCaracDemasquee = (k) => {
        const base = character.caracteristiques?.[k] ||
                     character.data?.stats_scellees?.caracteristiques?.[k] ||
                     feeData?.caracteristiques?.[k]?.min || 1;
        const sources = finalStats.caracteristiques.bonus[k] || [];
        const total = sources.reduce((acc, b) => acc + Number(b.value), 0);
        return base + total;
    };

    const agi = getCarac('agilite');
    const agiD = getCaracDemasquee('agilite');
    const con = getCarac('constitution');
    const conD = getCaracDemasquee('constitution');
    const esp = getCarac('esprit');
    const espD = getCaracDemasquee('esprit');
    const masque = getCarac('masque');
    const sf = getCarac('sangFroid');
    const sfD = getCaracDemasquee('sangFroid');

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

    const hasSpecialite = (comp, specName) => {
        if (character.competencesLibres?.choixSpecialiteUser?.[comp]?.includes(specName)) return true;
        const metier = character.competencesLibres?.specialiteMetier;
        if (metier?.comp === comp && metier?.nom === specName) return true;
        if (finalStats.specialites.gratuites?.[comp]?.some(s => s.specialite === specName)) return true;
        if (feeData?.competencesPredilection) {
            for (let idx = 0; idx < feeData.competencesPredilection.length; idx++) {
                const pred = feeData.competencesPredilection[idx];
                if (pred.nom !== comp) continue;
                const feeSpec = pred.specialite || (pred.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[idx] : null);
                if (feeSpec === specName) return true;
            }
        }
        return false;
    };
    const bonusEsquive = hasSpecialite('Mouvement', 'Esquive') ? 1 : 0;

    return {
        esquiveMasquee: sMouv + agi + 5 + bonusEsquive,
        esquiveDemasquee: sMouv + agiD + 5 + modT + bonusEsquive,
        parade: sMelee + agi + 5,
        paradeDemasquee: sMelee + agiD + 5 + modT,
        resPhys: sRes + con + 5 + bonusMasque,
        resPhysDemasquee: sRes + conD + 5,
        resPsych: sFort + esp + 5 + bonusMasque,
        resPsychDemasquee: sFort + espD + 5,
        init: sArt + sf,
        initDemasquee: sArt + sfD,
        pvMax: (3 * con) + 9,
        pvMaxDemasquee: (3 * conD) + 9,
        tricherie: Math.floor((getCarac('feerie') + masque) / 2)
    };
};
