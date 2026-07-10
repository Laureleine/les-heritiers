import { useQuery } from '@tanstack/react-query';
import { APP_VERSION } from '../version';
import {
    loadProfils, loadBadges, loadCompetences, loadFairyTypes,
    getCompetencesFutiles, loadSocialItems, loadEncyclopediaRefs, loadSorts
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
                competencesFutiles, socialItems, encyclopediaRefs, sorts
            ] = await Promise.all([
                loadProfils(), loadBadges(), loadCompetences(), loadFairyTypes(),
                getCompetencesFutiles(true), loadSocialItems(), loadEncyclopediaRefs(), loadSorts()
            ]);

            return {
                profils, badges, competences, competencesParProfil, competencesFutiles,
                fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs, sorts
            };
        },
        staleTime: 10 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        enabled,
        retry: 2,
    });
}
