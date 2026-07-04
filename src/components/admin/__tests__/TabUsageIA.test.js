import { coutEstime } from '../TabUsageIA';

describe('coutEstime', () => {
  it('calcule un coût nul pour zéro token', () => {
    expect(coutEstime('gemini-2.5-flash', 0, 0)).toBe(0);
  });

  it('calcule un coût positif proportionnel aux tokens prompt et completion', () => {
    const petit = coutEstime('gemini-2.5-flash', 1000, 1000);
    const grand = coutEstime('gemini-2.5-flash', 10000, 10000);
    expect(petit).toBeGreaterThan(0);
    expect(grand).toBeGreaterThan(petit);
  });

  it('retourne 0 pour un modèle inconnu plutôt que de planter', () => {
    expect(coutEstime('modele-inexistant', 1000, 1000)).toBe(0);
  });
});
