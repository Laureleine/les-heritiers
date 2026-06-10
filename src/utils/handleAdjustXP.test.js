vi.mock('./historyReconstructor', () => ({
  reconstructHistory: jest.fn(() => []),
}));

vi.mock('./bonusCalculator', () => ({
  calculateCharacterStats: jest.fn(() => ({
    caracteristiques: { bonus: {} },
    competences: { bonus: {} },
    specialites: { gratuites: {} },
  })),
}));

vi.mock('./lockUtils', () => ({
  isCharacterScelle: jest.fn(() => false),
}));

vi.mock('./json', () => ({
  parseIfString: jest.fn(() => ({})),
}));

vi.mock('./xpActions', () => {
  const getXpState = (character) => {
    const xpTotal = character.xp_total || 0;
    const historique = character.data?.historique_xp;
    let xpDepense;
    if (historique && historique.length > 0) {
      xpDepense = Math.max(0, historique.reduce((acc, tx) => {
        if (tx.type === 'DEPENSE')      return acc + tx.valeur;
        if (tx.type === 'REMBOURSEMENT') return acc - tx.valeur;
        return acc;
      }, 0));
    } else {
      xpDepense = character.xp_depense || 0;
    }
    return { xpTotal, xpDepense, xpDispo: xpTotal - xpDepense };
  };
  return {
    getXpState,
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
      XP_GAIN: 'XP_GAIN',
      XP_AJUSTEMENT: 'XP_AJUSTEMENT',
      XP_SOLDE: 'XP_SOLDE',
    },
  };
});

import { characterReducer } from './characterEngine';
import { getXpState } from './xpActions';

const makeBaseState = () => ({
  xp_total: 100,
  xp_depense: 30,
  data: {
    historique_xp: [
      { type: 'GAIN', valeur: 100, code: 'XP_HISTORIQUE', label: 'Initial' },
      { type: 'DEPENSE', valeur: 30, code: 'CARAC_AUGMENTATION', label: 'Force' },
    ],
  },
});

describe('handleAdjustXP — LOG_XP_TRANSACTION', () => {
  it('GAIN avec valeur négative diminue xp_total (FIX)', () => {
    const result = characterReducer(makeBaseState(), {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'GAIN', code: 'XP_AJUSTEMENT', label: 'Correction', valeur: -1 },
    });
    expect(result.xp_total).toBe(99);
    expect(result.data.historique_xp[0].type).toBe('GAIN');
    expect(result.data.historique_xp[0].valeur).toBe(-1);
  });

  it('GAIN avec valeur positive augmente xp_total', () => {
    const result = characterReducer(makeBaseState(), {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'GAIN', code: 'XP_GAIN', label: 'Ajustement', valeur: 5 },
    });
    expect(result.xp_total).toBe(105);
  });

  it('REMBOURSEMENT ne change pas xp_total', () => {
    const result = characterReducer(makeBaseState(), {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'REMBOURSEMENT', code: 'XP_AJUSTEMENT', label: 'Correction', valeur: 1 },
    });
    expect(result.xp_total).toBe(100);
  });

  it('REMBOURSEMENT diminue xp_depense recalculé par getXpState', () => {
    const result = characterReducer(makeBaseState(), {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'REMBOURSEMENT', code: 'XP_AJUSTEMENT', label: 'Correction', valeur: 1 },
    });
    const state = getXpState(result);
    expect(state.xpTotal).toBe(100);
    expect(state.xpDepense).toBe(29);
    expect(state.xpDispo).toBe(71);

    const result2 = characterReducer(makeBaseState(), {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'GAIN', code: 'XP_AJUSTEMENT', label: 'Correction', valeur: -1 },
    });
    const state2 = getXpState(result2);
    expect(state2.xpTotal).toBe(99);
    expect(state2.xpDepense).toBe(30);
    expect(state2.xpDispo).toBe(69);
  });

  it('ne fait rien si transaction est null', () => {
    const result = characterReducer(makeBaseState(), {
      type: 'LOG_XP_TRANSACTION',
      transaction: null,
    });
    expect(result.xp_total).toBe(100);
  });
});

describe('handleAdjustXP guard — userId vs user_id', () => {
  const makeSession = (id) => ({ user: { id } });

  it('character.userId correspond au propriétaire → guard autorise le passage', () => {
    const character = { userId: 'abc-123', xp_total: 100, xp_depense: 30 };
    const session = makeSession('abc-123');
    const blocked = character?.userId !== session?.user?.id;
    expect(blocked).toBe(false);
  });

  it('character.user_id est undefined après mapDatabaseToCharacter → guard bloque à tort (BUG)', () => {
    const character = { userId: 'abc-123', xp_total: 100, xp_depense: 30 };
    const session = makeSession('abc-123');
    const blocked = character?.user_id !== session?.user?.id;
    expect(blocked).toBe(true);
  });

  it('userId différent du propriétaire → guard bloque (legitime)', () => {
    const character = { userId: 'abc-123', xp_total: 100, xp_depense: 30 };
    const session = makeSession('other-user');
    const blocked = character?.userId !== session?.user?.id;
    expect(blocked).toBe(true);
  });
});
