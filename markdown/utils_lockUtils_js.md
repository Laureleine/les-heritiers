// src/utils/lockUtils.js
// Utilitaires DRY pour l'état de verrouillage des personnages — centralisent
// le pattern `character.statut === 'scelle' || character.statut === 'scellé'`
// répété dans 12 fichiers (components, hooks, reducer).
//
// ⚠️  Ce fichier est intentionnellement une pure fonction JS (pas un hook React)
// afin de rester utilisable dans le reducer (characterEngine.js) qui n'est pas
// un composant.

/**
 * Retourne true si le personnage est scellé (statut 'scelle' ou 'scellé').
 * Gère les deux orthographes pour la rétrocompatibilité avec les anciennes fiches.
 *
 * @param {object} character - L'état du personnage
 * @returns {boolean}
 */
export const isCharacterScelle = (character) =>
    character?.statut === 'scelle' || character?.statut === 'scellé';

/**
 * Retourne true si le personnage est verrouillé en édition.
 * Un personnage est verrouillé s'il est en lecture seule (vue partagée/admin)
 * OU s'il est scellé (en mode évolution XP).
 *
 * @param {object} character - L'état du personnage
 * @param {boolean} isReadOnly - Provient du contexte CharacterContext
 * @returns {boolean}
 */
export const isCharacterLocked = (character, isReadOnly) =>
    isReadOnly || isCharacterScelle(character);
