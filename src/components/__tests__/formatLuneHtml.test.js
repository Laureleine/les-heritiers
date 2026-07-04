vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    rpc: vi.fn().mockResolvedValue({ data: null, error: null }),
    channel: vi.fn(() => ({ on: vi.fn().mockReturnThis(), subscribe: vi.fn().mockResolvedValue({}) })),
    removeChannel: vi.fn(),
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
  },
}));

import { formatLuneHtml } from '../Actualite';

const DAILY_INFO = {
  moon_icon: '🌙',
  moon_phase: 'Premier croissant',
  moon_visible: '23%',
  moon_aspect: 'Conjonction avec Vénus',
  moon_desc: "Un fin croissant éclaire les toits de la capitale.",
};

describe('formatLuneHtml', () => {
  it('retourne une chaîne vide si aucune donnée lunaire', () => {
    expect(formatLuneHtml(null)).toBe('');
  });

  it('produit une table HTML', () => {
    const html = formatLuneHtml(DAILY_INFO);
    expect(html).toContain('<table');
    expect(html).toContain('</table>');
  });

  it("n'affiche aucune bordure de table, sur la table et sur chaque cellule", () => {
    const html = formatLuneHtml(DAILY_INFO);
    expect(html).toMatch(/<table[^>]*border="0"/);
    const tdMatches = html.match(/<td[^>]*>/g) || [];
    expect(tdMatches.length).toBeGreaterThan(0);
    for (const td of tdMatches) {
      expect(td).toContain('border:none');
    }
  });

  it('souligne les titres des champs avec <u>', () => {
    const html = formatLuneHtml(DAILY_INFO);
    for (const titre of ['Phase Lunaire', 'Surface Visible', 'Aspect Céleste', 'Chronique Lunaire & Influence']) {
      expect(html).toContain(`<u>${titre}</u>`);
    }
  });

  it('place chaque valeur juste après le titre correspondant, dans la même rangée de la table', () => {
    const html = formatLuneHtml(DAILY_INFO);

    const iTitres = html.indexOf('<u>Phase Lunaire</u>');
    const iValeurs = html.indexOf('Premier croissant');
    expect(iTitres).toBeGreaterThan(-1);
    expect(iValeurs).toBeGreaterThan(iTitres);
  });

  it('ne contient pas le sous-titre "Calcul astronomique réel pour le bassin céleste parisien"', () => {
    expect(formatLuneHtml(DAILY_INFO)).not.toContain('Calcul astronomique réel pour le bassin céleste parisien');
  });

  it('échappe le HTML dans la description pour éviter toute injection', () => {
    const dailyInfo = { ...DAILY_INFO, moon_desc: '<script>alert(1)</script>' };
    const html = formatLuneHtml(dailyInfo);
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });
});
