// 10.6.0 // 10.9.0

import React, { createContext, useContext, useReducer, useState } from 'react';
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
  isPublic: false
};

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  // L'état global du jeu (Données Supabase)
  const [gameData, setGameData] = useState({
    profils: [], competences: {}, competencesParProfil: {}, competencesFutiles: [],
    fairyData: {}, fairyTypes: [], fairyTypesByAge: { traditionnelles: [], modernes: [] },
    socialItems: [],
    encyclopediaRefs: { capacites: [], pouvoirs: [], atouts: [], fairies: [] } // ✨ NOUVEAU
  });
  
  // L'état global du personnage en cours de création
  const [character, dispatchCharacter] = useReducer(characterReducer, initialCharacterState);
  
  // L'état global de sécurité (Mode vue seule)
  const [isReadOnly, setIsReadOnly] = useState(false);

  return (
    <CharacterContext.Provider value={{
      character, dispatchCharacter,
      gameData, setGameData,
      isReadOnly, setIsReadOnly,
      initialCharacterState
    }}>
      {children}
    </CharacterContext.Provider>
  );
}

// Le Hook magique que n'importe quel composant pourra appeler !
export const useCharacter = () => useContext(CharacterContext);