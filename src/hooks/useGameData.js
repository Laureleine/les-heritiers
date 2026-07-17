import { useQuery } from '@tanstack/react-query';
import { APP_VERSION } from '../version';
import {
    loadProfils, loadBadges, loadCompetences, loadFairyTypes,
    getCompetencesFutiles, loadSocialItems, loadEncyclopediaRefs, loadSorts
} from '../utils/supabaseGameData';
import { localDb } from '../config/localDb';

async function loadFromDexie() {
  const keys = ['profils', 'badges', 'competences', 'fairy_types', 'competences_futiles', 'social_items', 'encyclopedia_refs', 'sorts'];
  const entries = await Promise.all(keys.map(k => localDb.game_data.get(k)));
  const map = {};
  keys.forEach((k, i) => { map[k] = entries[i]?.data ?? []; });
  return map;
}

async function writeToLocalDb(data) {
  const { profils, badges, competences, competencesParProfil, competencesFutiles,
          fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs, sorts } = data;
  await Promise.all([
    localDb.game_data.put({ key: 'profils', data: profils }),
    localDb.game_data.put({ key: 'badges', data: badges }),
    localDb.game_data.put({ key: 'competences', data: { competences, competencesParProfil } }),
    localDb.game_data.put({ key: 'fairy_types', data: { fairyData, fairyTypes, fairyTypesByAge } }),
    localDb.game_data.put({ key: 'competences_futiles', data: competencesFutiles }),
    localDb.game_data.put({ key: 'social_items', data: socialItems }),
    localDb.game_data.put({ key: 'encyclopedia_refs', data: encyclopediaRefs }),
    localDb.game_data.put({ key: 'sorts', data: sorts }),
    localDb.meta.put({ key: 'game_data', lastSync: Date.now() }),
  ]);
}

export function useGameData(enabled = true) {
  return useQuery({
    queryKey: ['gameData', APP_VERSION],
    queryFn: async () => {
      if (!navigator.onLine) {
        const map = await loadFromDexie();
        const c = map['competences'] || {};
        const f = map['fairy_types'] || {};
        return {
          profils: map['profils'],
          badges: map['badges'],
          competences: c.competences ?? [],
          competencesParProfil: c.competencesParProfil ?? {},
          competencesFutiles: map['competences_futiles'],
          fairyData: f.fairyData ?? [],
          fairyTypes: f.fairyTypes ?? [],
          fairyTypesByAge: f.fairyTypesByAge ?? {},
          socialItems: map['social_items'],
          encyclopediaRefs: map['encyclopedia_refs'],
          sorts: map['sorts'],
        };
      }

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

      const result = {
        profils, badges, competences, competencesParProfil, competencesFutiles,
        fairyData, fairyTypes, fairyTypesByAge, socialItems, encyclopediaRefs, sorts
      };

      // Remplissage Dexie en background (fire & forget)
      writeToLocalDb(result).catch(e => console.warn('[useGameData] cache Dexie échoué:', e));

      return result;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    enabled,
    retry: 2,
  });
}
