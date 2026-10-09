import { getXpState, spendXp, refundXp, XP_CODES } from '../xpActions';

describe('getXpState', () => {
  it('lit xp_depense directement depuis le personnage', () => {
    const state = getXpState({ xp_total: 100, xp_depense: 42 });
    expect(state.xpTotal).toBe(100);
    expect(state.xpDepense).toBe(42);
    expect(state.xpDispo).toBe(58);
  });

  it('retourne 0 si xp_depense absent', () => {
    const state = getXpState({ xp_total: 100 });
    expect(state.xpDepense).toBe(0);
    expect(state.xpDispo).toBe(100);
  });

  it('gère xp_total à 0', () => {
    const state = getXpState({ xp_total: 0, xp_depense: 0 });
    expect(state.xpTotal).toBe(0);
    expect(state.xpDispo).toBe(0);
  });

  it('calcule xpDispo correctement', () => {
    const state = getXpState({ xp_total: 80, xp_depense: 37 });
    expect(state.xpDispo).toBe(43);
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

describe('XP_CODES — paliers Anomalie féérique', () => {
  it('expose des codes distincts pour Anomalie féérique, Sang-mêlé et Hybride', () => {
    expect(XP_CODES.ANOMALIE_FEERIQUE).toBe('ANOMALIE_FEERIQUE');
    expect(XP_CODES.ANOMALIE_SANG_MELE).toBe('ANOMALIE_SANG_MELE');
    expect(XP_CODES.ANOMALIE_HYBRIDE).toBe('ANOMALIE_HYBRIDE');
    const codes = [XP_CODES.ANOMALIE_FEERIQUE, XP_CODES.ANOMALIE_SANG_MELE, XP_CODES.ANOMALIE_HYBRIDE];
    expect(new Set(codes).size).toBe(3);
  });
});
