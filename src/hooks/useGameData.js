import { useQuery } from '@tanstack/react-query';
import { APP_VERSION } from '../version';
import {
    loadProfils, loadBadges, loadCompetences, loadFairyTypes,
    getCompetencesFutiles, loadSocialItems, loadEncyclopediaRefs
} from '../utils/supabaseGameData';

export function useGameData(enabled = true) {
    return useQuery({
        queryKey: ['gameData', APP_VERSION],
        queryFn: async () => {
            const t0 = performance.now();
            const [
                profils, badges,
                { competences, competencesParProfil },
                { fairyData, fairyTypes, fairyTypesByAge },
                competencesFutiles, socialItems, encyclopediaRefs
            ] = await Promise.all([
                loadProfils(), loadBadges(), loadCompetences(), loadFairyTypes(),
                getCompetencesFutiles(true), loadSocialItems(), loadEncyclopediaRefs()
            ]);
            console.log(`⏱️ useGameData: ${Math.round((performance.now() - t0) / 10) / 100}s`);
            return {
                profils, badges, competences, competencesParProfil, competencesFutiles,
                fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs
            };
        },
        staleTime: 10 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        enabled,
        retry: 2,
    });
}
