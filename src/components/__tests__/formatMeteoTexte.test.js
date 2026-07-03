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

describe('formatMeteoTexte', () => {
  it('retourne une chaîne vide si aucune donnée météo', () => {
    expect(formatMeteoTexte(null)).toBe('');
  });

  it('reproduit le titre, les champs et la chronique dans le même ordre que la carte', () => {
    const dailyInfo = {
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
    const texte = formatMeteoTexte(dailyInfo);
    const lignes = texte.split('\n');

    expect(lignes[0]).toBe('🌤️ Météo de Paris');
    expect(lignes[1]).toBe("Reconstitution climatologique d'époque");
    expect(texte).toContain('Condition : Ciel couvert');
    expect(texte).toContain('Températures : 5°C à 10°C');
    expect(texte).toContain('Précipitations : 2 mm');
    expect(texte).toContain('Vents : 15 km/h');
    expect(texte).toContain('Lever du soleil : 07:45');
    expect(texte).toContain('Coucher du soleil : 16:52');
    expect(texte).toContain('Chronique Météorologique Réduite :');
    expect(texte.endsWith("Un ciel gris et bas s'étend sur la capitale.")).toBe(true);

    // Ordre : Condition doit apparaître avant Températures, qui doit apparaître avant la Chronique
    const iCondition = texte.indexOf('Condition');
    const iTemp = texte.indexOf('Températures');
    const iChronique = texte.indexOf('Chronique');
    expect(iCondition).toBeLessThan(iTemp);
    expect(iTemp).toBeLessThan(iChronique);
  });

  it('affiche des tirets pour les précipitations et vents absents', () => {
    const dailyInfo = {
      weather_icon: '🌤️',
      weather_condition: 'Inconnu',
      weather_tmin: null,
      weather_tmax: null,
      weather_precip_mm: null,
      weather_wind_kmh: null,
      sunrise: null,
      sunset: null,
      weather_desc: '',
    };
    const texte = formatMeteoTexte(dailyInfo);
    expect(texte).toContain('Températures : ?°C à ?°C');
    expect(texte).toContain('Précipitations : —');
    expect(texte).toContain('Vents : —');
  });
});
