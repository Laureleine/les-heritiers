import { describe, it, expect } from 'vitest';
import { sumStepCosts, computeAjustementXp, xpModesFor, ajustementWarnings } from '../docteAjustement';

describe('docteAjustement', () => {
  it('additionne les coûts des rangs franchis, dans les deux sens', () => {
    const cost = r => (r + 1) * 3;
    expect(sumStepCosts(cost, 2, 4)).toBe(9 + 12);
    expect(sumStepCosts(cost, 4, 2)).toBe(9 + 12);
    expect(sumStepCosts(cost, 3, 3)).toBe(0);
  });

  it('calcule le coût par type de valeur', () => {
    expect(computeAjustementXp('carac', 3, 4)).toBe(16); // max(12, 4×4)
    expect(computeAjustementXp('comp', 4, 2)).toBe(9 + 12);
    expect(computeAjustementXp('futile', 0, 2)).toBe(1 + 2);
    expect(computeAjustementXp('fortune', 5, 4, { computedStats: {} })).toBeGreaterThan(0);
  });

  it('propose les modes XP selon le sens', () => {
    expect(xpModesFor(true).map(m => m.id)).toEqual(['aucun', 'rembourse']);
    expect(xpModesFor(false).map(m => m.id)).toEqual(['aucun', 'paye']);
  });

  it('avertit pour la ruine et la baisse d’Esprit, pas pour une hausse', () => {
    expect(ajustementWarnings({ kind: 'fortune', from: 5, to: 2, plancherFortune: 3 })[0]).toMatch(/ruine véritable/);
    expect(ajustementWarnings({ kind: 'fortune', from: 5, to: 3, plancherFortune: 3 })).toEqual([]);
    expect(ajustementWarnings({ kind: 'carac', key: 'esprit', from: 4, to: 3 })).toHaveLength(1);
    expect(ajustementWarnings({ kind: 'carac', key: 'esprit', from: 3, to: 4 })).toEqual([]);
  });
});
