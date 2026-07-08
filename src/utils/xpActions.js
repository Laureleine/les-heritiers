// src/utils/xpActions.js
// Utilitaires DRY pour les opérations XP — centralisent les patterns répétés
// dans 6+ composants et hooks (StepAtouts, StepPouvoirs, StepCaracteristiques,
// StepCompetencesFutiles, useCompetencesLibres, AnomalieFeeriqueWidget, useVieSociale).

// ============================================================================
// 📚 CODES CANONIQUES DES TRANSACTIONS XP
// ============================================================================
// Chaque transaction LOG_XP_TRANSACTION doit porter un `code` issu de cette
// table pour permettre le filtrage programmatique sans matcher sur des strings.
// Le champ `type` (DEPENSE / REMBOURSEMENT / GAIN) indique la direction ;
// le `code` identifie l'objet de l'opération.
export const XP_CODES = {
    // --- Caractéristiques ---
    CARAC_AUGMENTATION:    'CARAC_AUGMENTATION',    // Caractéristique classique ↑↓
    MASQUE_EPAISSISSEMENT: 'MASQUE_EPAISSISSEMENT', // Masque ↑↓
    FEERIE_EVEIL:          'FEERIE_EVEIL',           // Féérie ↑↓
    // --- Atouts & Pouvoirs ---
    ATOUT_ACQUISITION:     'ATOUT_ACQUISITION',      // Atout acquis/désappris
    ANOMALIE_FEERIQUE:     'ANOMALIE_FEERIQUE',      // Anomalie Féérique activée/purgée
    ANOMALIE_SANG_MELE:    'ANOMALIE_SANG_MELE',     // Sang-mêlé activé/purgé
    ANOMALIE_HYBRIDE:      'ANOMALIE_HYBRIDE',       // Hybride activé/purgé
    // --- Compétences ---
    COMP_UTILE_RANG:         'COMP_UTILE_RANG',          // Compétence utile ↑↓
    COMP_UTILE_SPECIALITE:   'COMP_UTILE_SPECIALITE',    // Spécialité utile acquise/oubliée
    COMP_FUTILE_RANG:        'COMP_FUTILE_RANG',         // Loisir (compétence futile) ↑↓
    ESPRIT_BONUS_UTILE:      'ESPRIT_BONUS_UTILE',       // Rang gratuit Érudit/Savant (bonus Esprit, valeur=0)
    // --- Magies ---
    FAEOMANCIE_DEBLOCAGE:    'FAEOMANCIE_DEBLOCAGE',    // Faëomancie débloquée
    SOUFFLE_DEBLOCAGE:       'SOUFFLE_DEBLOCAGE',        // Souffle débloqué
    NECROMANCIE_DEBLOCAGE:   'NECROMANCIE_DEBLOCAGE',   // Nécromancie débloquée
    THEURGIE_DEBLOCAGE:      'THEURGIE_DEBLOCAGE',       // Théurgie débloquée
    GRAND_LANGAGE_DEBLOCAGE: 'GRAND_LANGAGE_DEBLOCAGE',  // Grand Langage débloqué
    // --- Vie Sociale ---
    FORTUNE_ELEVATION:     'FORTUNE_ELEVATION',      // Fortune ↑↓
    // --- Sessions de jeu ---
    SESSION_XP:            'SESSION_XP',            // XP attribué depuis une session de cercle
    SESSION_XP_CORRECTION: 'SESSION_XP_CORRECTION', // Correction delta suite à modification d'une session
    // --- Entrées Système ---
    XP_GAIN:               'XP_GAIN',               // Gain d'XP par le MJ ou ajustement
    XP_AJUSTEMENT:         'XP_AJUSTEMENT',         // Correction manuelle (retrait)
    XP_HISTORIQUE:         'XP_HISTORIQUE',         // Entrée reconstituée (passé)
    XP_SOLDE:              'XP_SOLDE',              // Solde de tout compte (arrondi archéologique)
};

// ============================================================================
// 💡 CALCUL DE L'ÉTAT XP
// ============================================================================

/**
 * Extrait l'état XP du personnage.
 *
 * 🏛️ SOURCE UNIQUE DE VÉRITÉ : Si `historique_xp` est disponible, le bilan
 * est calculé mathématiquement depuis le journal (DEPENSE − REMBOURSEMENT).
 * Le champ `xp_depense` stocké en base est un cache dérivé — jamais la vérité.
 *
 * Fallback sur `character.xp_depense` uniquement pour les personnages sans
 * journal (non encore chargés via LOAD_CHARACTER ou non scellés).
 *
 * @param {object} character - L'état du personnage
 * @returns {{ xpTotal: number, xpDepense: number, xpDispo: number }}
 */
export const getXpState = (character) => {
    const xpTotal = character.xp_total || 0;
    const historique = character.data?.historique_xp;

    let xpDepense;
    if (historique && historique.length > 0) {
        // Le journal fait foi : somme algébrique de toutes les lignes
        xpDepense = Math.max(0, historique.reduce((acc, tx) => {
            if (tx.type === 'DEPENSE')      return acc + tx.valeur;
            if (tx.type === 'REMBOURSEMENT') return acc - tx.valeur;
            return acc; // GAIN → ne touche pas aux dépenses
        }, 0));
    } else {
        // Fallback légacy : personnage sans journal (avant reconstruction)
        xpDepense = character.xp_depense || 0;
    }

    return { xpTotal, xpDepense, xpDispo: xpTotal - xpDepense };
};

/**
 * Calcule le nouveau montant de XP dépensés après un achat.
 * @deprecated Utiliser LOG_XP_TRANSACTION à la place.
 */
export const spendXp = (xpDepense, cost) => xpDepense + cost;

/**
 * Calcule le nouveau montant de XP dépensés après un remboursement.
 * @deprecated Utiliser LOG_XP_TRANSACTION à la place.
 */
export const refundXp = (xpDepense, refund) => Math.max(0, xpDepense - refund);
