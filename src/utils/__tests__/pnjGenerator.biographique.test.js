// src/utils/__tests__/pnjGenerator.biographique.test.js
import { genererPnj, rerollChamp, pnjVersPayloadFigure } from '../pnjGenerator';

describe('genererPnj({ mode: "biographique" })', () => {
  it('retourne mode = "biographique"', () => {
    expect(genererPnj({ mode: 'biographique' }).mode).toBe('biographique');
  });

  it('retourne un historique avec 7 sections', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    expect(pnj.historique).toBeDefined();
    ['origines','formation','milieu','naissance','parents','jeunesse','flags'].forEach(k =>
      expect(pnj.historique).toHaveProperty(k)
    );
  });

  it('retourne les champs de personnalité (traits, secret, apparence)', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    expect(Array.isArray(pnj.traits)).toBe(true);
    expect(typeof pnj.secret).toBe('string');
    expect(typeof pnj.apparence).toBe('string');
  });

  it('sexe est masculin ou feminin', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    expect(['masculin', 'feminin']).toContain(pnj.sexe);
  });
});

describe('rerollChamp mode biographique', () => {
  it('reroll de sexe régénère l\'historique (mode reste biographique)', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const pnjR = rerollChamp(pnj, 'sexe');
    expect(pnjR.mode).toBe('biographique');
    expect(pnjR.historique).toBeDefined();
  });

  it('reroll de nationalite régénère l\'historique', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const pnjR = rerollChamp(pnj, 'nationalite');
    expect(pnjR.mode).toBe('biographique');
    expect(pnjR.historique).toBeDefined();
  });

  it('reroll d\'apparence ne touche pas l\'historique (référence identique)', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const ref = pnj.historique;
    const pnjR = rerollChamp(pnj, 'apparence');
    expect(pnjR.historique).toBe(ref);
  });
});

describe('pnjVersPayloadFigure mode biographique', () => {
  it('data contient historique', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const payload = pnjVersPayloadFigure(pnj);
    expect(payload.data.historique).toBeDefined();
  });

  it('description contient la nationalité', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const payload = pnjVersPayloadFigure(pnj);
    expect(payload.description).toContain(pnj.historique.origines.nationalite);
  });
});
