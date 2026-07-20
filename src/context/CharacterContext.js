import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { characterReducer } from '../utils/characterEngine';

// L'état vierge d'un personnage (Transféré depuis App.js)
export const initialCharacterState = {
  id: null,
  nom: '', sexe: '', typeFee: '', anciennete: null,
  nomFeerique: '', genreHumain: '', taille: '', poids: '', apparence: '',
  traitsFeeriques: [],
  caracteristiques: {},
  profils: { majeur: { nom: '', trait: '', competences: [] }, mineur: { nom: '', trait: '', competences: [] } },
  competencesLibres: { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} },
  competencesFutiles: { rangs: {}, choixPredilection: {}, personnalisees: [] },
  capaciteChoisie: '',
  pouvoirs: [],
  vieSociale: {}, fortune: 0,
  atouts: [],
  data: { choixEquipement: {} },
  isPublic: false
};

// Deux contextes distincts : lecture seule vs actions
// Les composants qui ne lisent pas character ne re-rendent pas sur chaque frappe
const CharacterStateContext = createContext();
const CharacterActionsContext = createContext();

export function CharacterProvider({ children }) {
  const [character, dispatchCharacter] = useReducer(characterReducer, initialCharacterState);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const stateValue = useMemo(() => ({ character, isReadOnly }), [character, isReadOnly]);

  // Expose le contexte courant pour errorLogger (enrichit les logs d'erreur)
  useEffect(() => {
    window.__heritiers_error_context__ = {
      characterId: character.id || null,
      extra: character.id ? {
        nom: character.nom,
        typeFee: character.typeFee,
        statut: character.statut,
        xp_total: character.xp_total,
        xp_depense: character.xp_depense,
      } : null,
    };
  }, [character.id, character.nom, character.typeFee, character.statut, character.xp_total, character.xp_depense]);

  // Les actions (callbacks) ne changent jamais → pas de re-render superflu
  const actionsValue = useMemo(() => ({
    dispatchCharacter, setIsReadOnly, initialCharacterState
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), []);

  return (
    <CharacterStateContext.Provider value={stateValue}>
      <CharacterActionsContext.Provider value={actionsValue}>
        {children}
      </CharacterActionsContext.Provider>
    </CharacterStateContext.Provider>
  );
}

// Hook unifié — backward compatible, consomme les deux contextes
export const useCharacter = () => ({
  ...useContext(CharacterStateContext),
  ...useContext(CharacterActionsContext),
});

// Hooks granulaires pour les composants qui n'ont besoin que d'une moitié
export const useCharacterState = () => useContext(CharacterStateContext);
export const useCharacterActions = () => useContext(CharacterActionsContext);
