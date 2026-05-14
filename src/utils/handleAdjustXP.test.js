describe('handleAdjustXP — bug REMBOURSEMENT vs GAIN négatif', () => {
  const reducer = (state, action) => {
    if (action.type !== 'LOG_XP_TRANSACTION') return state;
    const { transaction } = action;
    if (!transaction) return state;
    const newState = { ...state, data: { ...(state.data || {}), historique_xp: [...(state.data?.historique_xp || [])] } };
    const newTx = { ...transaction, date_mouvement: new Date().toISOString() };
    newState.data.historique_xp = [newTx, ...newState.data.historique_xp];
    if (transaction.type === 'GAIN') {
      newState.xp_total = (newState.xp_total || 0) + transaction.valeur;
    }
    return newState;
  };

  const baseState = {
    xp_total: 100,
    xp_depense: 30,
    data: {
      historique_xp: [
        { type: 'GAIN', valeur: 100, code: 'XP_HISTORIQUE', label: 'Initial' },
        { type: 'DEPENSE', valeur: 30, code: 'CARAC_AUGMENTATION', label: 'Force' },
      ],
    },
  };

  it('GAIN avec valeur négative diminue xp_total (FIX après session du 14 Mai)', () => {
    const result = reducer(baseState, {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'GAIN', code: 'XP_AJUSTEMENT', label: 'Correction Manuelle', valeur: -1 },
    });
    expect(result.xp_total).toBe(99);
    expect(result.data.historique_xp[0].type).toBe('GAIN');
    expect(result.data.historique_xp[0].valeur).toBe(-1);
  });

  it('GAIN avec valeur positive augmente xp_total', () => {
    const result = reducer(baseState, {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'GAIN', code: 'XP_GAIN', label: 'Ajustement Manuel', valeur: 5 },
    });
    expect(result.xp_total).toBe(105);
  });

  it('REMBOURSEMENT ne change pas xp_total (ancien comportement = bug)', () => {
    const result = reducer(baseState, {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'REMBOURSEMENT', code: 'XP_AJUSTEMENT', label: 'Correction Manuelle', valeur: 1 },
    });
    expect(result.xp_total).toBe(100);
  });

  it('REMBOURSEMENT diminue xp_depense recalculé par getXpState', () => {
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

    // REMBOURSEMENT: xp_total inchangé, depense diminue → xpDispo augmente (bug !)
    const result = reducer(baseState, {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'REMBOURSEMENT', code: 'XP_AJUSTEMENT', label: 'Correction Manuelle', valeur: 1 },
    });
    const state = getXpState(result);
    expect(state.xpTotal).toBe(100);
    expect(state.xpDepense).toBe(29);
    expect(state.xpDispo).toBe(71); // augmenté au lieu de diminuer → bug

    // GAIN négatif: xp_total diminue, depense inchangé → xpDispo diminue (fix !)
    const result2 = reducer(baseState, {
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'GAIN', code: 'XP_AJUSTEMENT', label: 'Correction Manuelle', valeur: -1 },
    });
    const state2 = getXpState(result2);
    expect(state2.xpTotal).toBe(99);
    expect(state2.xpDepense).toBe(30);
    expect(state2.xpDispo).toBe(69); // correctement diminué
  });
});
