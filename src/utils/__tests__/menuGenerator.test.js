import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  tirage, tirageMultiple, calculerTranche, seuilDifficulte, resoudrePlat,
  filtrerPlatsPourService, genererMenu, rerollService, rerollPlat,
} from '../menuGenerator';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('calculerTranche', () => {
  it('force "intime" pour petit_dejeuner et gouter quel que soit le nombre de convives', () => {
    expect(calculerTranche('petit_dejeuner', 20)).toBe('intime');
    expect(calculerTranche('gouter', 20)).toBe('intime');
  });

  it('force "banquet" pour le type de repas banquet', () => {
    expect(calculerTranche('banquet', 2)).toBe('banquet');
  });

  it('calcule la tranche selon le nombre de convives pour les autres repas', () => {
    expect(calculerTranche('diner', 1)).toBe('intime');
    expect(calculerTranche('diner', 4)).toBe('intime');
    expect(calculerTranche('diner', 5)).toBe('tablee');
    expect(calculerTranche('diner', 12)).toBe('tablee');
    expect(calculerTranche('diner', 13)).toBe('banquet');
  });
});

describe('seuilDifficulte', () => {
  it('calcule le seuil 6 + difficulte x 2', () => {
    expect(seuilDifficulte(1)).toBe(8);
    expect(seuilDifficulte(5)).toBe(16);
  });
});

describe('resoudrePlat', () => {
  it('renvoie une réussite critique quand le total dépasse le seuil de 7 ou plus', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.99); // de = 10
    const resultat = resoudrePlat(1, 14); // seuil 8, total 24
    expect(resultat.issue).toBe('reussite_critique');
    expect(resultat.total).toBe(24);
  });

  it('renvoie une réussite simple quand le total atteint le seuil sans le dépasser de 7', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0); // de = 1
    const resultat = resoudrePlat(1, 7); // seuil 8, total 8
    expect(resultat.issue).toBe('reussite');
  });

  it('renvoie un échec quand le total est sous le seuil', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0); // de = 1
    const resultat = resoudrePlat(1, 1); // seuil 8, total 2
    expect(resultat.issue).toBe('echec');
  });

  it('renvoie un échec critique quand le total est sous le seuil de 7 ou plus', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0); // de = 1
    const resultat = resoudrePlat(5, 1); // seuil 16, total 2
    expect(resultat.issue).toBe('echec_critique');
  });
});

describe('tirage / tirageMultiple', () => {
  it('tirage renvoie null sur un tableau vide', () => {
    expect(tirage([])).toBeNull();
  });

  it('tirageMultiple renvoie des éléments distincts sans dépasser la taille du pool', () => {
    const pool = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
    const resultat = tirageMultiple(pool, 5);
    expect(resultat).toHaveLength(3);
    expect(new Set(resultat.map((p) => p.id)).size).toBe(3);
  });
});

describe('filtrerPlatsPourService', () => {
  const plats = [
    { id: '1', categorie: 'potage', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null },
    { id: '2', categorie: 'potage', niveaux: ['populaire'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null },
    { id: '3', categorie: 'viande', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null },
    { id: '4', categorie: 'potage', niveaux: ['bourgeois'], saisons: ['ete'], nb_convives_min: null, nb_convives_max: null },
    { id: '5', categorie: 'potage', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: 10, nb_convives_max: null },
  ];

  it('filtre par catégorie, niveau financier et saison', () => {
    const service = { categorie: 'potage' };
    const resultat = filtrerPlatsPourService(plats, service, { niveauFinancier: 'bourgeois', saison: 'hiver', nbConvives: 4 });
    expect(resultat.map((p) => p.id)).toEqual(['1']);
  });

  it('exclut les plats dont la borne de convives minimale n\'est pas atteinte', () => {
    const service = { categorie: 'potage' };
    const resultat = filtrerPlatsPourService(plats, service, { niveauFinancier: 'bourgeois', saison: 'hiver', nbConvives: 12 });
    expect(resultat.map((p) => p.id).sort()).toEqual(['1', '5']);
  });
});

describe('genererMenu / rerollService / rerollPlat', () => {
  const structure = {
    textes_intro: ['Une odeur de pain chaud emplit la cuisine.'],
    services: [
      { id: 'potage', label: 'Potage', categorie: 'potage', nb_plats: 1 },
      { id: 'plat', label: 'Plat', categorie: 'viande', nb_plats: 1 },
    ],
  };
  const plats = [
    { id: 'p1', categorie: 'potage', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null },
    { id: 'p2', categorie: 'potage', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null },
    { id: 'v1', categorie: 'viande', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null },
  ];
  const criteres = { niveauFinancier: 'bourgeois', saison: 'hiver', nbConvives: 4 };

  it('génère un menu avec un texte d\'intro et un plat par service', () => {
    const menu = genererMenu({ structure, plats, ...criteres });
    expect(menu.texteIntro).toBe('Une odeur de pain chaud emplit la cuisine.');
    expect(menu.services).toHaveLength(2);
    expect(menu.services[0].plats).toHaveLength(1);
    expect(menu.services[1].plats[0].id).toBe('v1');
  });

  it('rerollService ne change que le service ciblé', () => {
    const menu = genererMenu({ structure, plats, ...criteres });
    const rerolled = rerollService(menu, plats, structure, 'plat', criteres);
    expect(rerolled.services.find((s) => s.id === 'potage').plats).toEqual(menu.services.find((s) => s.id === 'potage').plats);
    expect(rerolled.services.find((s) => s.id === 'plat').plats[0].id).toBe('v1');
  });

  it('rerollPlat évite de retirer le même plat quand une alternative existe', () => {
    const menu = genererMenu({ structure, plats, ...criteres });
    const rerolled = rerollPlat(menu, plats, structure, 'potage', 0, criteres);
    const nouveauId = rerolled.services.find((s) => s.id === 'potage').plats[0].id;
    const ancienId = menu.services.find((s) => s.id === 'potage').plats[0].id;
    expect(['p1', 'p2']).toContain(nouveauId);
    expect(nouveauId).not.toBe(ancienId);
  });
});
