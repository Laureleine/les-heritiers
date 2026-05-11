// src/utils/json.js
// Utilitaires DRY pour le parsing JSON sécurisé — centralisent les patterns
// éparpillés dans 12+ fichiers du projet.

/**
 * Parse une chaîne JSON avec un fallback en cas d'erreur.
 * Utiliser quand la valeur est toujours une string (ex: données de formulaire,
 * localStorage, champs SQL TEXT non typés).
 *
 * @param {string} value - La chaîne JSON à parser
 * @param {*} fallback - Valeur retournée si le parsing échoue (défaut : null)
 * @returns {*} L'objet parsé ou le fallback
 */
export const safeParse = (value, fallback = null) => {
    if (value === null || value === undefined) return fallback;
    if (typeof value !== 'string') return value; // Déjà un objet, on retourne tel quel
    try { return JSON.parse(value); } catch { return fallback; }
};

/**
 * Parse si c'est une string, retourne tel quel si c'est déjà un objet/tableau.
 * Utiliser pour les champs JSONB Supabase (effets_techniques, etc.) qui arrivent
 * parfois déjà parsés par le driver, parfois en string selon le contexte.
 *
 * @param {string|object|null} value - La valeur à normaliser
 * @param {*} fallback - Valeur retournée si null/undefined ou si le parsing échoue
 * @returns {*} L'objet normalisé ou le fallback
 */
export const parseIfString = (value, fallback = null) => {
    if (value === null || value === undefined) return fallback;
    if (typeof value !== 'string') return value; // Déjà un objet, parfait
    try { return JSON.parse(value); } catch { return fallback; }
};

/**
 * Parse une valeur en tableau.
 * Gère : null → [], tableau → tel quel, string → JSON.parse avec fallback [string].
 * Utiliser pour les champs `profils_autorises` et similaires.
 *
 * @param {string|Array|null} value - La valeur à parser en tableau
 * @returns {Array} Un tableau (jamais null)
 */
export const safeParseArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
        try { return JSON.parse(value); } catch { return [value]; }
    }
    return [];
};
