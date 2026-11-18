import { getAtoutFortuneBonus, atoutFortuneUpdates } from '../atoutFortune';

const brevets = { nom: 'Brevets', effets_techniques: { fortune: 2 } };
const perso = (fortune, socle) => ({ fortune, data: { autre: 1, stats_scellees: { fortune: socle, atouts: ['X'] } } });

describe('Fortune apportée par un Atout acheté après le scellement', () => {
  it('lit fortune et fortune_bonus, objet ou chaîne JSON', () => {
    expect(getAtoutFortuneBonus(brevets)).toBe(2);
    expect(getAtoutFortuneBonus({ effets_techniques: '{"fortune_bonus":1}' })).toBe(1);
    expect(getAtoutFortuneBonus({ effets_techniques: null })).toBe(0);
    expect(getAtoutFortuneBonus(undefined)).toBe(0);
  });

  it("l'achat monte la Fortune ET le socle du même montant", () => {
    const u = atoutFortuneUpdates(perso(10, 10), brevets, +1);
    expect(u.fortune).toBe(12);
    expect(u.data.stats_scellees).toEqual({ fortune: 12, atouts: ['X'] });
    expect(u.data.autre).toBe(1);
  });

  it('la revente redescend Fortune et socle', () => {
    const u = atoutFortuneUpdates(perso(12, 12), brevets, -1);
    expect(u.fortune).toBe(10);
    expect(u.data.stats_scellees.fortune).toBe(10);
  });

  it('borne à 15 et à 0', () => {
    expect(atoutFortuneUpdates(perso(14, 14), brevets, +1).fortune).toBe(15);
    expect(atoutFortuneUpdates(perso(1, 1), brevets, -1).fortune).toBe(0);
  });

  it('ne touche à rien si l\'Atout ne donne pas de Fortune', () => {
    expect(atoutFortuneUpdates(perso(10, 10), { effets_techniques: {} }, +1)).toEqual({});
  });
});
