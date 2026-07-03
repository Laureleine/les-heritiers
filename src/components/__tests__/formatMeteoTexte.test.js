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

  it('ne contient plus le sous-titre "Reconstitution climatologique d\'époque"', () => {
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
    expect(texte).not.toContain("Reconstitution climatologique d'époque");
  });

  it('met chaque champ sur deux lignes : titre souligné puis valeur', () => {
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

    const paires = [
      ['__Condition__', 'Ciel couvert'],
      ['__Températures__', '5°C à 10°C'],
      ['__Précipitations__', '2 mm'],
      ['__Vents__', '15 km/h'],
      ['__Lever du soleil__', '07:45'],
      ['__Coucher du soleil__', '16:52'],
      ['__Chronique Météorologique Réduite__', "Un ciel gris et bas s'étend sur la capitale."],
    ];
    for (const [titre, valeur] of paires) {
      const iTitre = lignes.indexOf(titre);
      expect(iTitre).toBeGreaterThan(-1);
      expect(lignes[iTitre + 1]).toBe(valeur);
    }

    // Ordre : Condition avant Températures, qui est avant la Chronique
    expect(lignes.indexOf('__Condition__')).toBeLessThan(lignes.indexOf('__Températures__'));
    expect(lignes.indexOf('__Températures__')).toBeLessThan(lignes.indexOf('__Chronique Météorologique Réduite__'));
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
    expect(texte).toContain('?°C à ?°C');
    expect(texte).toContain('__Précipitations__\n—');
    expect(texte).toContain('__Vents__\n—');
  });
});
