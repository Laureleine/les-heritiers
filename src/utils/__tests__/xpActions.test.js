import { getXpState, spendXp, refundXp, XP_CODES } from '../xpActions';

describe('getXpState', () => {
  it('calcule xpDepense depuis historique_xp (DEPENSE)', () => {
    const state = getXpState({
      xp_total: 100,
      data: {
        historique_xp: [
          { type: 'GAIN', valeur: 100 },
          { type: 'DEPENSE', valeur: 30 },
          { type: 'DEPENSE', valeur: 12 },
        ],
      },
    });
    expect(state.xpTotal).toBe(100);
    expect(state.xpDepense).toBe(42);
    expect(state.xpDispo).toBe(58);
  });

  it('soustrait les REMBOURSEMENT du total des dépenses', () => {
    const state = getXpState({
      xp_total: 100,
      data: {
        historique_xp: [
          { type: 'DEPENSE', valeur: 30 },
          { type: 'REMBOURSEMENT', valeur: 5 },
          { type: 'DEPENSE', valeur: 12 },
        ],
      },
    });
    expect(state.xpDepense).toBe(37);
    expect(state.xpDispo).toBe(63);
  });

  it('ignore les GAIN dans le calcul des dépenses', () => {
    const state = getXpState({
      xp_total: 100,
      data: {
        historique_xp: [
          { type: 'GAIN', valeur: 1000 },
          { type: 'DEPENSE', valeur: 20 },
        ],
      },
    });
    expect(state.xpDepense).toBe(20);
  });

  it('retourne 0 si historique_xp est vide', () => {
    const state = getXpState({
      xp_total: 100,
      data: { historique_xp: [] },
    });
    expect(state.xpDepense).toBe(0);
    expect(state.xpDispo).toBe(100);
  });

  it('fallback sur xp_depense si pas d\'historique', () => {
    const state = getXpState({
      xp_total: 100,
      xp_depense: 30,
      data: {},
    });
    expect(state.xpDepense).toBe(30);
    expect(state.xpDispo).toBe(70);
  });

  it('fallback sur 0 si pas d\'historique ni xp_depense', () => {
    const state = getXpState({ xp_total: 50 });
    expect(state.xpDepense).toBe(0);
    expect(state.xpDispo).toBe(50);
  });

  it('ne descend pas sous 0 pour xpDepense', () => {
    const state = getXpState({
      xp_total: 100,
      data: {
        historique_xp: [
          { type: 'REMBOURSEMENT', valeur: 999 },
        ],
      },
    });
    expect(state.xpDepense).toBe(0);
  });

  it('gère xp_total à 0', () => {
    const state = getXpState({ xp_total: 0, data: { historique_xp: [] } });
    expect(state.xpTotal).toBe(0);
    expect(state.xpDispo).toBe(0);
  });
});

describe('spendXp', () => {
  it('additionne le coût aux dépenses', () => {
    expect(spendXp(30, 12)).toBe(42);
  });

  it('gère un coût négatif', () => {
    expect(spendXp(30, -5)).toBe(25);
  });
});

describe('refundXp', () => {
  it('soustrait le remboursement sans descendre sous 0', () => {
    expect(refundXp(30, 5)).toBe(25);
    expect(refundXp(3, 10)).toBe(0);
  });

  it('gère un remboursement négatif', () => {
    expect(refundXp(30, -5)).toBe(35);
  });
});

describe('XP_CODES', () => {
  it('définit toutes les constantes canoniques sans doublon de valeur', () => {
    const codes = Object.values(XP_CODES);
    const uniques = new Set(codes);
    expect(uniques.size).toBe(codes.length);
    expect(XP_CODES.CARAC_AUGMENTATION).toBe('CARAC_AUGMENTATION');
    expect(XP_CODES.MASQUE_EPAISSISSEMENT).toBe('MASQUE_EPAISSISSEMENT');
    expect(XP_CODES.FEERIE_EVEIL).toBe('FEERIE_EVEIL');
    expect(XP_CODES.ATOUT_ACQUISITION).toBe('ATOUT_ACQUISITION');
    expect(XP_CODES.ANOMALIE_FEERIQUE).toBe('ANOMALIE_FEERIQUE');
    expect(XP_CODES.COMP_UTILE_RANG).toBe('COMP_UTILE_RANG');
    expect(XP_CODES.COMP_UTILE_SPECIALITE).toBe('COMP_UTILE_SPECIALITE');
    expect(XP_CODES.COMP_FUTILE_RANG).toBe('COMP_FUTILE_RANG');
    expect(XP_CODES.ESPRIT_BONUS_UTILE).toBe('ESPRIT_BONUS_UTILE');
    expect(XP_CODES.FORTUNE_ELEVATION).toBe('FORTUNE_ELEVATION');
    expect(XP_CODES.XP_GAIN).toBe('XP_GAIN');
    expect(XP_CODES.XP_AJUSTEMENT).toBe('XP_AJUSTEMENT');
    expect(XP_CODES.XP_HISTORIQUE).toBe('XP_HISTORIQUE');
    expect(XP_CODES.XP_SOLDE).toBe('XP_SOLDE');
  });
});
