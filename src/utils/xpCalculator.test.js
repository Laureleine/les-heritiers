import {
  getCaracCost,
  getFeerieCost,
  getUtileCost,
  getFutileCost,
  getFortuneCost,
  FIXED_XP_COSTS,
} from './xpCalculator';

describe('getCaracCost', () => {
  it('coût = max(12, rang suivant x 4)', () => {
    expect(getCaracCost(0)).toBe(12);   // next=1, cost=4, mais min=12
    expect(getCaracCost(1)).toBe(12);   // next=2, cost=8, mais min=12
    expect(getCaracCost(2)).toBe(12);   // next=3, cost=12
    expect(getCaracCost(3)).toBe(16);   // next=4, cost=16
    expect(getCaracCost(5)).toBe(24);   // next=6, cost=24
  });

  it('retourne null si le rang suivant dépasse 10', () => {
    expect(getCaracCost(10)).toBeNull();
    expect(getCaracCost(15)).toBeNull();
  });
});

describe('getFeerieCost', () => {
  it('coût = rang suivant x 5', () => {
    expect(getFeerieCost(0)).toBe(5);
    expect(getFeerieCost(1)).toBe(10);
    expect(getFeerieCost(3)).toBe(20);
  });

  it('retourne null si le rang suivant dépasse 10', () => {
    expect(getFeerieCost(10)).toBeNull();
  });
});

describe('getUtileCost', () => {
  it('coût = rang suivant x 3', () => {
    expect(getUtileCost(0)).toBe(3);
    expect(getUtileCost(1)).toBe(6);
    expect(getUtileCost(5)).toBe(18);
  });
});

describe('getFutileCost', () => {
  it('coût = rang suivant x 1', () => {
    expect(getFutileCost(0)).toBe(1);
    expect(getFutileCost(3)).toBe(4);
    expect(getFutileCost(10)).toBe(11);
  });
});

describe('getFortuneCost', () => {
  const baseStats = { competencesTotal: { Classe: 0, Sciences: 0 } };

  it('coût = max(5, (rang suivant x 2) - réduction)', () => {
    // next=1, raw=2-0=2, max(5,2)=5
    expect(getFortuneCost(0, baseStats)).toBe(5);
    // next=4, raw=8-0=8, max(5,8)=8
    expect(getFortuneCost(3, baseStats)).toBe(8);
  });

  it('applique la réduction de Classe ou Sciences', () => {
    const highClass = { competencesTotal: { Classe: 5, Sciences: 0 } };
    // next=5, raw=10-5=5, max(5,5)=5
    const cost5 = getFortuneCost(4, highClass);
    expect(cost5).toBe(5);

    const highSciences = { competencesTotal: { Classe: 0, Sciences: 3 } };
    // next=6, raw=12-3=9, max(5,9)=9
    expect(getFortuneCost(5, highSciences)).toBe(9);
  });

  it('utilise le meilleur entre Classe et Sciences', () => {
    const both = { competencesTotal: { Classe: 2, Sciences: 4 } };
    // next=5, raw=10-4=6, max(5,6)=6
    expect(getFortuneCost(4, both)).toBe(6);
  });

  it('retourne null si le rang suivant dépasse 15', () => {
    expect(getFortuneCost(15, baseStats)).toBeNull();
    expect(getFortuneCost(20, baseStats)).toBeNull();
  });

  it('gère characterStats manquant', () => {
    // next=1, raw=2-0=2, max(5,2)=5
    expect(getFortuneCost(0, null)).toBe(5);
    expect(getFortuneCost(0, {})).toBe(5);
  });
});

describe('FIXED_XP_COSTS', () => {
  it('définit les coûts fixes', () => {
    expect(FIXED_XP_COSTS.specialite_utile).toBe(8);
    expect(FIXED_XP_COSTS.specialite_futile).toBe(3);
    expect(FIXED_XP_COSTS.nouvel_atout).toBe(8);
  });
});
