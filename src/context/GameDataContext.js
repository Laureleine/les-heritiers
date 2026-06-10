import React, { createContext, useContext, useMemo } from 'react';
import { useGameData } from '../hooks/useGameData';

const GameDataContext = createContext();

const defaultGameData = {
    profils: [], competences: {}, competencesParProfil: {}, competencesFutiles: [],
    fairyData: {}, fairyTypes: [], fairyTypesByAge: { enfoui: [], traditionnelles: [], modernes: [] },
    socialItems: [],
    encyclopediaRefs: { capacites: [], pouvoirs: [], atouts: [], fairies: [] }
};

export function GameDataProvider({ children }) {
    // Reads from React Query cache — actual fetch is triggered by useAppInit via useGameData(!!session)
    const { data: gameData = defaultGameData } = useGameData(false);
    const value = useMemo(() => ({ gameData }), [gameData]);
    return <GameDataContext.Provider value={value}>{children}</GameDataContext.Provider>;
}

export const useGameDataContext = () => useContext(GameDataContext);
