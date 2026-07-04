vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    rpc: vi.fn().mockResolvedValue({ data: null, error: null }),
    channel: vi.fn(() => ({ on: vi.fn().mockReturnThis(), subscribe: vi.fn().mockResolvedValue({}) })),
    removeChannel: vi.fn(),
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
  },
}));

import { formatLuneTexte } from '../Actualite';

const DAILY_INFO = {
  moon_icon: '🌙',
  moon_phase: 'Premier croissant',
  moon_visible: '23%',
  moon_aspect: 'Conjonction avec Vénus',
  moon_desc: "Un fin croissant éclaire les toits de la capitale.",
};

describe('formatLuneTexte', () => {
  it('retourne une chaîne vide si aucune donnée lunaire', () => {
    expect(formatLuneTexte(null)).toBe('');
  });

  it('ne contient plus le sous-titre "Calcul astronomique réel pour le bassin céleste parisien"', () => {
    expect(formatLuneTexte(DAILY_INFO)).not.toContain('Calcul astronomique réel pour le bassin céleste parisien');
  });

  it('regroupe Phase Lunaire, Surface Visible et Aspect Céleste sur la même ligne (titres puis valeurs), comme la grille à l\'écran', () => {
    const lignes = formatLuneTexte(DAILY_INFO).split('\n');

    expect(lignes[0]).toBe('🌙 Influence Lunaire');

    const iTitres = lignes.indexOf('__Phase Lunaire__ · __Surface Visible__ · __Aspect Céleste__');
    expect(iTitres).toBeGreaterThan(-1);
    expect(lignes[iTitres + 1]).toBe('Premier croissant · 23% · Conjonction avec Vénus');
  });

  it('garde la Chronique Lunaire & Influence en titre + valeur sur deux lignes, après la rangée de champs', () => {
    const lignes = formatLuneTexte(DAILY_INFO).split('\n');
    const iChronique = lignes.indexOf('__Chronique Lunaire & Influence__');
    expect(iChronique).toBeGreaterThan(-1);
    expect(lignes[iChronique + 1]).toBe("Un fin croissant éclaire les toits de la capitale.");

    const iTitres = lignes.indexOf('__Phase Lunaire__ · __Surface Visible__ · __Aspect Céleste__');
    expect(iTitres).toBeLessThan(iChronique);
  });
});
