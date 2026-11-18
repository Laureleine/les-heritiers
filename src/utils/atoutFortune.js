// src/utils/atoutFortune.js
// Fortune apportée par un Atout (ex. Brevets : +2) acheté ou revendu après le
// scellement. La Fortune ET son socle (stats_scellees.fortune) bougent ensemble :
// ces rangs sont offerts par l'Atout, ils ne doivent jamais être revendus contre
// des XP via le bouton − de la Fortune.
import { parseIfString } from './json';

export function getAtoutFortuneBonus(atout) {
  const tech = parseIfString(atout?.effets_techniques, {}) || {};
  return (Number(tech.fortune) || 0) + (Number(tech.fortune_bonus) || 0);
}

const clamp = (v) => Math.max(0, Math.min(15, v));

/** Mises à jour à fusionner dans l'achat (sens = +1) ou la revente (sens = -1). */
export function atoutFortuneUpdates(character, atout, sens) {
  const bonus = getAtoutFortuneBonus(atout);
  if (!bonus) return {};
  const data = character.data || {};
  const scellees = data.stats_scellees || {};
  const socle = scellees.fortune;
  return {
    fortune: clamp((character.fortune || 0) + sens * bonus),
    data: {
      ...data,
      stats_scellees: { ...scellees, fortune: clamp((socle ?? character.fortune ?? 0) + sens * bonus) },
    },
  };
}
