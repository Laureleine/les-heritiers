// src/utils/sealValidation.js
// Validation pré-scellage — retourne des erreurs bloquantes et des avertissements.
//
// ERREURS (bloquantes) : le scellage est impossible, le personnage est incomplet.
// AVERTISSEMENTS : le scellage est possible mais le joueur laisse des ressources inutilisées.
//
// Appelé dans useCerbere.handleSealClick avant d'ouvrir la modale de confirmation.

import { SKILLS_ESPRIT } from '../components/competencesLibres/useCompetencesLibres';

const POINTS_UTILES_TOTAUX  = 15;
const MAX_ATOUTS             = 2;

/**
 * @param {object} character  - État React du personnage
 * @param {object} gameData   - Données de jeu (fairyData, etc.)
 * @param {object} feeData    - fairyData[character.typeFee]
 * @returns {{ errors: string[], warnings: string[] }}
 */
export function validateBeforeSeal(character, gameData, feeData) {
    const errors   = [];
    const warnings = [];

    // =========================================================================
    // A — Type féérique reconnu
    // =========================================================================
    if (!feeData) {
        errors.push("Le type féérique est manquant ou non reconnu. Le Plancher de Verre sera vide.");
    }

    // =========================================================================
    // B — Caractéristiques complètes
    // =========================================================================
    const caracs = character.caracteristiques || {};
    const CARAC_KEYS = ['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid', 'feerie', 'masque'];
    const missingCaracs = CARAC_KEYS.filter(k => caracs[k] == null);
    if (missingCaracs.length > 0) {
        errors.push(`Caractéristiques incomplètes (${missingCaracs.join(', ')}).`);
    }

    // =========================================================================
    // C — Profil majeur
    // =========================================================================
    if (!character.profils?.majeur?.nom) {
        errors.push("Profil majeur non défini.");
    }

    // =========================================================================
    // C+ — Profil mineur
    // =========================================================================
    if (!character.profils?.mineur?.nom) {
        errors.push("Profil mineur non défini.");
    }

    // =========================================================================
    // Atouts — 2 atouts féériques toujours requis (fixe, indépendant de Féérie)
    // =========================================================================
    const nbAtoutsChoisis = character.atouts?.length || 0;
    if (nbAtoutsChoisis < MAX_ATOUTS) {
        errors.push(`Atouts féériques : ${nbAtoutsChoisis}/${MAX_ATOUTS} sélectionné(s).`);
    }

    // =========================================================================
    // D — Capacité féérique au choix
    // =========================================================================
    if (feeData?.capacites?.choix?.length > 0 && !character.capaciteChoisie) {
        errors.push("Capacité féérique (au choix) non sélectionnée.");
    }

    // =========================================================================
    // E — Pouvoirs (1 par rang de Féérie)
    // =========================================================================
    const feerie = caracs.feerie || 3;
    const nbPouvoirs = character.pouvoirs?.length || 0;
    if (nbPouvoirs < feerie) {
        errors.push(`Pouvoirs : ${nbPouvoirs}/${feerie} sélectionné(s) (1 par rang de Féérie).`);
    }

    // =========================================================================
    // F — Prédilections utiles au choix non remplies
    // =========================================================================
    const lib = character.competencesLibres || {};
    (feeData?.competencesPredilection || []).forEach((p, i) => {
        if (p.isChoix && !lib.choixPredilection?.[i]) {
            errors.push(`Prédilection de compétence utile n°${i + 1} (au choix) non sélectionnée.`);
        }
        if (p.isSpecialiteChoix && !lib.choixSpecialite?.[i]) {
            errors.push(`Spécialité innée n°${i + 1} (au choix) non sélectionnée.`);
        }
    });

    // =========================================================================
    // F futiles — Prédilections futiles au choix non remplies
    // =========================================================================
    (feeData?.competencesFutilesPredilection || []).forEach((p, i) => {
        if (typeof p === 'object' && p.isChoix && !character.competencesFutiles?.choixPredilection?.[i]) {
            errors.push(`Prédilection de loisir n°${i + 1} (au choix) non sélectionnée.`);
        }
    });

    // =========================================================================
    // G — Points de compétences utiles restants (budget vert)
    // =========================================================================
    const bonusEspritMax = Math.max(0, (caracs.esprit || 1) - 3);
    const competencesBase = character.computedStats?.competencesBase || {};

    let std = 0, eligible = 0;
    Object.entries(lib.rangs || {}).forEach(([nom, val]) => {
        if (SKILLS_ESPRIT.includes(nom)) eligible += val;
        else std += val;
    });
    Object.entries(lib.choixSpecialiteUser || {}).forEach(([nom, specs]) => {
        let count = specs.length;
        const baseScore = competencesBase[nom] || 0;
        // Première spécialité de Conduite gratuite si rang > 0
        if (nom === 'Conduite' && count > 0 && (baseScore + (lib.rangs?.['Conduite'] || 0)) > 0) count -= 1;
        if (SKILLS_ESPRIT.includes(nom)) eligible += count;
        else std += count;
    });

    const pointsVioletsUtilises = Math.min(eligible, bonusEspritMax);
    const pointsRestantsVerts   = POINTS_UTILES_TOTAUX - (std + (eligible - pointsVioletsUtilises));
    const pointsRestantsViolets = bonusEspritMax - pointsVioletsUtilises;

    if (pointsRestantsVerts > 0) {
        warnings.push(`Il vous reste ${pointsRestantsVerts} point(s) de compétences utiles non dépensé(s).`);
    }
    if (bonusEspritMax > 0 && pointsRestantsViolets > 0) {
        warnings.push(`Il vous reste ${pointsRestantsViolets} rang(s) gratuit(s) Esprit 🧠 non attribué(s) (Érudit / Savant).`);
    }

    // =========================================================================
    // G futiles — Points de loisirs restants
    // =========================================================================
    const maxPointsFutiles = feeData?.pointsFutiles ?? 10;
    const pointsFutilesDepenses = Object.values(character.competencesFutiles?.rangs || {})
        .reduce((s, v) => s + v, 0);
    const pointsRestantsFutiles = maxPointsFutiles - pointsFutilesDepenses;
    if (pointsRestantsFutiles > 0) {
        warnings.push(`Il vous reste ${pointsRestantsFutiles} point(s) de loisirs (futiles) non dépensé(s).`);
    }

    return { errors, warnings };
}
