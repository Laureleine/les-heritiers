vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    rpc: vi.fn().mockResolvedValue({ data: null, error: null }),
    channel: vi.fn(() => ({ on: vi.fn().mockReturnThis(), subscribe: vi.fn().mockResolvedValue({}) })),
    removeChannel: vi.fn(),
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
  },
}));

import { formatMeteoTexte } from '../Actualite';

const DAILY_INFO = {
  weather_icon: '🌤️',
  weather_condition: 'Ciel couvert',
  weather_tmin: 5,
  weather_tmax: 10,
  weather_precip_mm: 2,
  weather_wind_kmh: 15,
  sunrise: '07:45',
  sunset: '16:52',
  weather_desc: "Un ciel gris et bas s'étend sur la capitale.",
};

describe('formatMeteoTexte', () => {
  it('retourne une chaîne vide si aucune donnée météo', () => {
    expect(formatMeteoTexte(null)).toBe('');
  });

  it('ne contient plus le sous-titre "Reconstitution climatologique d\'époque"', () => {
    expect(formatMeteoTexte(DAILY_INFO)).not.toContain("Reconstitution climatologique d'époque");
  });

  it('regroupe Condition, Températures et Précipitations sur la même ligne (titres puis valeurs), comme la grille à l\'écran', () => {
    const lignes = formatMeteoTexte(DAILY_INFO).split('\n');

    expect(lignes[0]).toBe('🌤️ Météo de Paris');

    const iTitresRangee1 = lignes.indexOf('__Condition__ · __Températures__ · __Précipitations__');
    expect(iTitresRangee1).toBeGreaterThan(-1);
    expect(lignes[iTitresRangee1 + 1]).toBe('Ciel couvert · 5°C à 10°C · 2 mm');
  });

  it('regroupe Vents, Lever du soleil et Coucher du soleil sur la même ligne, juste après la première rangée', () => {
    const lignes = formatMeteoTexte(DAILY_INFO).split('\n');

    const iTitresRangee2 = lignes.indexOf('__Vents__ · __Lever du soleil__ · __Coucher du soleil__');
    expect(iTitresRangee2).toBeGreaterThan(-1);
    expect(lignes[iTitresRangee2 + 1]).toBe('15 km/h · 07:45 · 16:52');

    // La deuxième rangée doit venir après la première
    const iTitresRangee1 = lignes.indexOf('__Condition__ · __Températures__ · __Précipitations__');
    expect(iTitresRangee1).toBeLessThan(iTitresRangee2);
  });

  it('garde la Chronique Météorologique Réduite en titre + valeur sur deux lignes, après les deux rangées', () => {
    const lignes = formatMeteoTexte(DAILY_INFO).split('\n');
    const iChronique = lignes.indexOf('__Chronique Météorologique Réduite__');
    expect(iChronique).toBeGreaterThan(-1);
    expect(lignes[iChronique + 1]).toBe("Un ciel gris et bas s'étend sur la capitale.");

    const iTitresRangee2 = lignes.indexOf('__Vents__ · __Lever du soleil__ · __Coucher du soleil__');
    expect(iTitresRangee2).toBeLessThan(iChronique);
  });

  it('affiche des tirets pour les précipitations et vents absents', () => {
    const dailyInfo = { ...DAILY_INFO, weather_tmin: null, weather_tmax: null, weather_precip_mm: null, weather_wind_kmh: null };
    const texte = formatMeteoTexte(dailyInfo);
    expect(texte).toContain('?°C à ?°C');
    expect(texte).toContain('Ciel couvert · ?°C à ?°C · —');
    expect(texte).toContain('— · 07:45 · 16:52');
  });
});
