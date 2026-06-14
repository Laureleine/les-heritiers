import {
  getCaracCost,
  getFeerieCost,
  getUtileCost,
  getFutileCost,
  getFortuneCost,
  getFortuneSpecialites,
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

  it('coût = max(5, (rang suivant x 2))', () => {
    // next=1, raw=2, max(5,2)=5
    expect(getFortuneCost(0, baseStats)).toBe(5);
    // next=4, raw=8, max(5,8)=8
    expect(getFortuneCost(3, baseStats)).toBe(8);
  });

  it('sans spécialité Argent/Finance, le rang ne réduit pas le coût', () => {
    const highClass = { competencesTotal: { Classe: 5, Sciences: 0 } };
    // next=5, aucune spé → réduction=0, raw=10
    expect(getFortuneCost(4, highClass)).toBe(10);

    const highSciences = { competencesTotal: { Classe: 0, Sciences: 3 } };
    // next=6, aucune spé → réduction=0, raw=12
    expect(getFortuneCost(5, highSciences)).toBe(12);
  });

  it('ne descend pas sous 5', () => {
    // next=1, raw=2, max(5,2)=5
    expect(getFortuneCost(0, baseStats)).toBe(5);
  });

  it('retourne null si le rang suivant dépasse 15', () => {
    expect(getFortuneCost(15, baseStats)).toBeNull();
    expect(getFortuneCost(20, baseStats)).toBeNull();
  });

  it('gère characterStats manquant', () => {
    expect(getFortuneCost(0, null)).toBe(5);
    expect(getFortuneCost(0, {})).toBe(5);
  });
});

describe('getFortuneCost — spécialités', () => {
  const baseStats = { competencesTotal: { Classe: 0, Sciences: 0 } };

  it('Argent active la réduction par le rang Classe — sans rang, toujours 0', () => {
    // Classe=0 avec Argent : réduction=0, next=5, raw=10
    expect(getFortuneCost(4, baseStats, { Classe: ['Argent'] })).toBe(10);
  });

  it('Finance active la réduction par le rang Sciences — sans rang, toujours 0', () => {
    // Sciences=0 avec Finance : réduction=0, next=5, raw=10
    expect(getFortuneCost(4, baseStats, { Sciences: ['Finance'] })).toBe(10);
  });

  it('Argent avec rang Classe réduit le coût', () => {
    const stats = { competencesTotal: { Classe: 3, Sciences: 0 } };
    // next=5, hasArgent → réduction=3, raw=10-3=7
    expect(getFortuneCost(4, stats, { Classe: ['Argent'] })).toBe(7);
  });

  it('Finance avec rang Sciences réduit le coût', () => {
    const stats = { competencesTotal: { Classe: 0, Sciences: 4 } };
    // next=5, hasFinance → réduction=4, raw=10-4=6
    expect(getFortuneCost(4, stats, { Sciences: ['Finance'] })).toBe(6);
  });

  it('utilise le meilleur rang actif (Argent vs Finance)', () => {
    const stats = { competencesTotal: { Classe: 2, Sciences: 4 } };
    // next=5, Argent→2, Finance→4, réduction=max(2,4)=4, raw=10-4=6
    expect(getFortuneCost(4, stats, { Classe: ['Argent'], Sciences: ['Finance'] })).toBe(6);
  });

  it('ne descend pas sous 5 même avec forte réduction', () => {
    const stats = { competencesTotal: { Classe: 10, Sciences: 0 } };
    // next=1, hasArgent → réduction=10, raw=2-10=-8, max(5,-8)=5
    expect(getFortuneCost(0, stats, { Classe: ['Argent'] })).toBe(5);
  });

  it('specialites null/undefined ne plante pas', () => {
    expect(getFortuneCost(4, baseStats, null)).toBe(10);
    expect(getFortuneCost(4, baseStats, {})).toBe(10);
    expect(getFortuneCost(4, baseStats, { Classe: [] })).toBe(10);
  });
});

describe('getFortuneSpecialites', () => {
  it('détecte Argent dans choixSpecialiteUser.Classe', () => {
    const char = { competencesLibres: { choixSpecialiteUser: { Classe: ['Argent'] } } };
    const result = getFortuneSpecialites(char);
    expect(result).toEqual({ Classe: ['Argent'] });
  });

  it('détecte Finance dans choixSpecialiteUser.Sciences', () => {
    const char = { competencesLibres: { choixSpecialiteUser: { Sciences: ['Finance'] } } };
    const result = getFortuneSpecialites(char);
    expect(result).toEqual({ Sciences: ['Finance'] });
  });

  it('retourne vide si aucune spécialité pertinente', () => {
    const char = { competencesLibres: { choixSpecialiteUser: { Classe: ['Crochetage'] } } };
    expect(getFortuneSpecialites(char)).toEqual({});
  });

  it('retourne vide si pas de competencesLibres', () => {
    expect(getFortuneSpecialites({})).toEqual({});
  });

  it('détecte les spécialités gratuites', () => {
    const char = {
      competencesLibres: { choixSpecialiteUser: {} },
      computedStats: {
        specialites: { gratuites: { Classe: [{ specialite: 'Argent' }] } }
      }
    };
    expect(getFortuneSpecialites(char)).toEqual({ Classe: ['Argent'] });
  });

  it('détecte la spécialité métier', () => {
    const char = {
      competencesLibres: { specialiteMetier: { comp: 'Classe', nom: 'Argent' } }
    };
    expect(getFortuneSpecialites(char)).toEqual({ Classe: ['Argent'] });
  });
});

describe('FIXED_XP_COSTS', () => {
  it('définit les coûts fixes', () => {
    expect(FIXED_XP_COSTS.specialite_utile).toBe(8);
    expect(FIXED_XP_COSTS.specialite_futile).toBe(3);
    expect(FIXED_XP_COSTS.nouvel_atout).toBe(8);
  });
});
