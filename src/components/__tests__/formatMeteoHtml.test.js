vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    rpc: vi.fn().mockResolvedValue({ data: null, error: null }),
    channel: vi.fn(() => ({ on: vi.fn().mockReturnThis(), subscribe: vi.fn().mockResolvedValue({}) })),
    removeChannel: vi.fn(),
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
  },
}));

import { formatMeteoHtml } from '../Actualite';

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

describe('formatMeteoHtml', () => {
  it('retourne une chaîne vide si aucune donnée météo', () => {
    expect(formatMeteoHtml(null)).toBe('');
  });

  it('produit une table HTML', () => {
    const html = formatMeteoHtml(DAILY_INFO);
    expect(html).toContain('<table');
    expect(html).toContain('</table>');
  });

  it("n'affiche aucune bordure de table, sur la table et sur chaque cellule", () => {
    const html = formatMeteoHtml(DAILY_INFO);
    expect(html).toMatch(/<table[^>]*border="0"/);
    // Chaque <td> doit porter explicitement border:none, pas seulement la table
    const tdMatches = html.match(/<td[^>]*>/g) || [];
    expect(tdMatches.length).toBeGreaterThan(0);
    for (const td of tdMatches) {
      expect(td).toContain('border:none');
    }
  });

  it('souligne les titres des champs avec <u>', () => {
    const html = formatMeteoHtml(DAILY_INFO);
    for (const titre of ['Condition', 'Températures', 'Précipitations', 'Vents', 'Lever du soleil', 'Coucher du soleil', 'Chronique Météorologique Réduite']) {
      expect(html).toContain(`<u>${titre}</u>`);
    }
  });

  it('place chaque valeur juste après le titre correspondant, dans la même rangée de la table', () => {
    const html = formatMeteoHtml(DAILY_INFO);

    // La rangée Condition/Températures/Précipitations doit précéder immédiatement
    // la rangée de valeurs correspondante (Ciel couvert / 5°C à 10°C / 2 mm)
    const iTitresRangee1 = html.indexOf('<u>Condition</u>');
    const iValeursRangee1 = html.indexOf('Ciel couvert');
    expect(iTitresRangee1).toBeGreaterThan(-1);
    expect(iValeursRangee1).toBeGreaterThan(iTitresRangee1);

    // Aucune autre rangée de titres ne doit s'intercaler entre les deux
    const iTitresRangee2 = html.indexOf('<u>Vents</u>');
    expect(iValeursRangee1).toBeLessThan(iTitresRangee2);
  });

  it("ne contient pas le sous-titre \"Reconstitution climatologique d'époque\"", () => {
    expect(formatMeteoHtml(DAILY_INFO)).not.toContain("Reconstitution climatologique d'époque");
  });

  it('échappe le HTML dans la description pour éviter toute injection', () => {
    const dailyInfo = { ...DAILY_INFO, weather_desc: '<script>alert(1)</script>' };
    const html = formatMeteoHtml(dailyInfo);
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });
});
