jest.mock('../xpCalculator', () => ({
  getCaracCost: jest.fn((i) => Math.max(12, (i + 1) * 4)),
  getUtileCost: jest.fn((i) => (i + 1) * 3),
  getFutileCost: jest.fn((i) => i + 1),
  getFortuneCost: jest.fn((i, stats) => Math.max(5, (i + 1) * 2)),
  FIXED_XP_COSTS: { nouvel_atout: 8, specialite_utile: 8 },
}));

jest.mock('../xpActions', () => ({
  XP_CODES: {
    CARAC_AUGMENTATION: 'CARAC_AUGMENTATION',
    MASQUE_EPAISSISSEMENT: 'MASQUE_EPAISSISSEMENT',
    FEERIE_EVEIL: 'FEERIE_EVEIL',
    ATOUT_ACQUISITION: 'ATOUT_ACQUISITION',
    COMP_UTILE_RANG: 'COMP_UTILE_RANG',
    COMP_UTILE_SPECIALITE: 'COMP_UTILE_SPECIALITE',
    COMP_FUTILE_RANG: 'COMP_FUTILE_RANG',
    FORTUNE_ELEVATION: 'FORTUNE_ELEVATION',
    XP_HISTORIQUE: 'XP_HISTORIQUE',
  },
}));

jest.mock('../json', () => ({
  parseIfString: jest.fn((v) => (typeof v === 'string' ? JSON.parse(v) : v)),
}));

import { reconstructHistory } from '../historyReconstructor';
import { getCaracCost, getUtileCost, getFutileCost, getFortuneCost, FIXED_XP_COSTS } from '../xpCalculator';

const baseGameData = {
  fairyData: {
    Lutin: {
      caracteristiques: {
        agilite: { min: 2 }, constitution: { min: 2 }, force: { min: 1 },
        precision: { min: 1 }, esprit: { min: 1 }, perception: { min: 1 },
        prestance: { min: 1 }, sangFroid: { min: 1 },
      },
      fortune_min: 1,
    },
  },
  socialItems: [],
};

describe('reconstructHistory', () => {
  it('retourne un tableau vide si rien n\'a changé depuis le scellement', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };
    const result = reconstructHistory(character, baseGameData);
    expect(result).toEqual([]);
  });

  it('reconstruit les augmentations de caractéristiques', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 5, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    getCaracCost.mockImplementation((i) => Math.max(12, (i + 1) * 4));
    const result = reconstructHistory(character, baseGameData);

    const agiTxs = result.filter(tx => tx.label.includes('Agilité'));
    expect(agiTxs.length).toBe(3);
    expect(agiTxs[0].code).toBe('CARAC_AUGMENTATION');
  });

  it('reconstruit l\'épaississement du Masque', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 7, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    const result = reconstructHistory(character, baseGameData);
    const masqueTxs = result.filter(tx => tx.label.includes('Masque'));
    expect(masqueTxs.length).toBe(3);
  });

  it('reconstruit l\'Éveil de la Féérie', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 6 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    const result = reconstructHistory(character, baseGameData);
    const feerieTxs = result.filter(tx => tx.label.includes('Féérie'));
    expect(feerieTxs.length).toBe(3);
  });

  it('reconstruit les nouveaux atouts', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: ['Noble', 'Guerrier'],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: ['Noble'],
        },
      },
    };

    const result = reconstructHistory(character, baseGameData);
    const atoutTxs = result.filter(tx => tx.label.includes('Atout'));
    expect(atoutTxs).toHaveLength(1);
    expect(atoutTxs[0].valeur).toBe(FIXED_XP_COSTS.nouvel_atout);
  });

  it('reconstruit les rangs de compétences utiles', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: { Mouvement: 3 }, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: { Mouvement: 1 }, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    getUtileCost.mockImplementation((i) => (i + 1) * 3);
    const result = reconstructHistory(character, baseGameData);
    const utileTxs = result.filter(tx => tx.label.includes('Perfectionnement'));
    expect(utileTxs).toHaveLength(2);
    expect(utileTxs[0].label).toContain('Mouvement');
  });

  it('reconstruit les spécialités acquises', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: {
        rangs: {},
        choixSpecialiteUser: { Conduite: ['Carrosse'] },
      },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    const result = reconstructHistory(character, baseGameData);
    const specTxs = result.filter(tx => tx.label.includes('Spécialité'));
    expect(specTxs).toHaveLength(1);
    expect(specTxs[0].valeur).toBe(FIXED_XP_COSTS.specialite_utile);
  });

  it('reconstruit les rangs de compétences futiles', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: { Chant: 3, Danse: 1 } },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: { Chant: 1 } },
          fortune: 1,
          atouts: [],
        },
      },
    };

    getFutileCost.mockImplementation((i) => i + 1);
    const result = reconstructHistory(character, baseGameData);
    const futileTxs = result.filter(tx => tx.label.includes('Loisir'));
    expect(futileTxs).toHaveLength(3);
    expect(futileTxs[0].label).toContain('Chant');
  });

  it('reconstruit l\'élévation de Fortune', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 5,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    getFortuneCost.mockImplementation((i) => Math.max(5, (i + 1) * 2));
    const result = reconstructHistory(character, baseGameData);
    const fortuneTxs = result.filter(tx => tx.label.includes('Fortune'));
    expect(fortuneTxs).toHaveLength(4);
  });

  it('ne crée pas de transaction de valeur <= 0', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 2, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    const result = reconstructHistory(character, baseGameData);
    const nonPositive = result.filter(tx => tx.valeur <= 0);
    expect(nonPositive).toEqual([]);
  });

  it('gère le cas où stats_scellees est vide', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 3, masque: 5, feerie: 4 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 2,
      atouts: [],
      data: {},
    };

    const result = reconstructHistory(character, baseGameData);
    expect(Array.isArray(result)).toBe(true);
  });

  it('produit des transactions triées par date croissante (plus ancien en premier)', () => {
    const character = {
      typeFee: 'Lutin',
      caracteristiques: { agilite: 4, constitution: 2, force: 1, precision: 1, esprit: 1, perception: 1, prestance: 1, sangFroid: 1, masque: 4, feerie: 3 },
      competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {} },
      fortune: 1,
      atouts: [],
      data: {
        stats_scellees: {
          caracteristiques: { agilite: 2, masque: 4, feerie: 3 },
          competencesLibres: { rangs: {}, choixSpecialiteUser: {} },
          competencesFutiles: { rangs: {} },
          fortune: 1,
          atouts: [],
        },
      },
    };

    const result = reconstructHistory(character, baseGameData);
    for (let i = 1; i < result.length; i++) {
      expect(new Date(result[i].date_mouvement).getTime())
        .toBeGreaterThanOrEqual(new Date(result[i - 1].date_mouvement).getTime());
    }
  });
});
