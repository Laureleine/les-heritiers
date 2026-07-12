// src/utils/__tests__/pnjGeneratorBio.test.js
import { genererHistorique } from '../pnjGeneratorBio';

describe('genererHistorique', () => {
  it('retourne { sexeId, nationaliteId, historique }', () => {
    const result = genererHistorique();
    expect(result).toHaveProperty('sexeId');
    expect(result).toHaveProperty('nationaliteId');
    expect(result).toHaveProperty('historique');
  });

  it('sexeId est masculin ou feminin', () => {
    for (let i = 0; i < 20; i++) {
      expect(['masculin', 'feminin']).toContain(genererHistorique().sexeId);
    }
  });

  it('historique contient les 7 sections', () => {
    const { historique } = genererHistorique();
    ['origines', 'formation', 'milieu', 'naissance', 'parents', 'jeunesse', 'flags'].forEach(k =>
      expect(historique).toHaveProperty(k)
    );
  });

  it('origines.nationalite est une chaîne non vide', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.origines.nationalite).toBe('string');
    expect(historique.origines.nationalite.length).toBeGreaterThan(0);
  });

  it('formation.techLevel est une chaîne non vide', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.formation.techLevel).toBe('string');
    expect(historique.formation.techLevel.length).toBeGreaterThan(0);
  });

  it('naissance.evenements est un tableau', () => {
    const { historique } = genererHistorique();
    expect(Array.isArray(historique.naissance.evenements)).toBe(true);
  });

  it('jeunesse.enfance et adolescence sont des tableaux', () => {
    const { historique } = genererHistorique();
    expect(Array.isArray(historique.jeunesse.enfance)).toBe(true);
    expect(Array.isArray(historique.jeunesse.adolescence)).toBe(true);
  });

  it('flags est un objet avec aCurse et gmSecret', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.flags.aCurse).toBe('boolean');
    expect(typeof historique.flags.gmSecret).toBe('boolean');
  });

  it('génère des PNJ Français dans ~80% des cas (tolérance ±20%)', () => {
    const results = Array.from({ length: 100 }, () => genererHistorique());
    const frCount = results.filter(r => r.nationaliteId === 'francaise').length;
    expect(frCount).toBeGreaterThan(50);
    expect(frCount).toBeLessThan(98);
  });

  it('milieu.structureFoyer est une chaîne non vide', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.milieu.structureFoyer).toBe('string');
    expect(historique.milieu.structureFoyer.length).toBeGreaterThan(0);
  });
});
