import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  tirage, tirageMultiple, calculerTranche, seuilDifficulte, resoudrePlat,
  filtrerPlatsPourService, genererMenu, rerollService, rerollPlat, appliquerStandingSocial,
  determinerNiveauEffectif,
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

describe('appliquerStandingSocial', () => {
  const plats = [
    { id: 'jambon', nom: 'Jambon de Bayonne', categorie: 'hors_d_oeuvre', niveaux: ['bourgeois', 'grande_bourgeoisie'], saisons: ['hiver'] },
    { id: 'escargots', nom: 'Escargots de Bourgogne', categorie: 'hors_d_oeuvre', niveaux: ['grande_bourgeoisie', 'aristocratie'], saisons: ['hiver'] },
    { id: 'dauphinois', nom: 'Gratin dauphinois', categorie: 'legume', niveaux: ['bourgeois', 'grande_bourgeoisie'], saisons: ['hiver'] },
    { id: 'asperges', nom: 'Asperges sauce mousseline', categorie: 'legume', niveaux: ['grande_bourgeoisie', 'aristocratie'], saisons: ['hiver'] },
    { id: 'munster', nom: 'Munster', categorie: 'fromage', niveaux: ['bourgeois', 'grande_bourgeoisie'], saisons: ['hiver'] },
    { id: 'comte', nom: 'Comté vieux', categorie: 'fromage', niveaux: ['grande_bourgeoisie', 'aristocratie'], saisons: ['hiver'] },
    { id: 'roquefort', nom: 'Roquefort', categorie: 'fromage', niveaux: ['grande_bourgeoisie', 'aristocratie'], saisons: ['hiver'] },
    { id: 'camembert', nom: 'Camembert affiné', categorie: 'fromage', niveaux: ['populaire', 'bourgeois'], saisons: ['hiver'] },
  ];

  it("exclut les hors-d'œuvre trop simples pour un dîner de grande bourgeoisie", () => {
    const candidats = plats.filter((p) => p.categorie === 'hors_d_oeuvre');
    const resultat = appliquerStandingSocial(candidats, plats, { categorie: 'hors_d_oeuvre' }, {
      niveauFinancier: 'grande_bourgeoisie', typeRepas: 'diner', saison: 'hiver',
    });
    expect(resultat.map((p) => p.id)).toEqual(['escargots']);
  });

  it("n'exclut pas les hors-d'œuvre simples pour un déjeuner (seuls diner/banquet sont concernés)", () => {
    const candidats = plats.filter((p) => p.categorie === 'hors_d_oeuvre');
    const resultat = appliquerStandingSocial(candidats, plats, { categorie: 'hors_d_oeuvre' }, {
      niveauFinancier: 'grande_bourgeoisie', typeRepas: 'dejeuner', saison: 'hiver',
    });
    expect(resultat.map((p) => p.id).sort()).toEqual(['escargots', 'jambon']);
  });

  it("n'exclut rien pour un niveau financier populaire ou bourgeois", () => {
    const candidats = plats.filter((p) => p.categorie === 'hors_d_oeuvre');
    const resultat = appliquerStandingSocial(candidats, plats, { categorie: 'hors_d_oeuvre' }, {
      niveauFinancier: 'bourgeois', typeRepas: 'diner', saison: 'hiver',
    });
    expect(resultat.map((p) => p.id).sort()).toEqual(['escargots', 'jambon']);
  });

  it('exclut les légumes trop rustiques (gratin dauphinois) pour la grande bourgeoisie', () => {
    const candidats = plats.filter((p) => p.categorie === 'legume');
    const resultat = appliquerStandingSocial(candidats, plats, { categorie: 'legume' }, {
      niveauFinancier: 'grande_bourgeoisie', typeRepas: 'dejeuner', saison: 'hiver',
    });
    expect(resultat.map((p) => p.id)).toEqual(['asperges']);
  });

  it('exclut les fromages trop rustiques (Munster, Comté) et force les classiques des salons parisiens', () => {
    const candidats = plats.filter((p) => p.categorie === 'fromage' && p.niveaux.includes('grande_bourgeoisie'));
    const resultat = appliquerStandingSocial(candidats, plats, { categorie: 'fromage' }, {
      niveauFinancier: 'grande_bourgeoisie', typeRepas: 'diner', saison: 'hiver',
    });
    const ids = resultat.map((p) => p.id).sort();
    expect(ids).not.toContain('munster');
    expect(ids).not.toContain('comte');
    expect(ids).toContain('roquefort');
    // Le camembert est forcé dans le pool bien que son tag `niveaux` ne couvre pas grande_bourgeoisie.
    expect(ids).toContain('camembert');
  });

  it('ne casse jamais le tirage si l\'exclusion viderait le pool (garde-fou)', () => {
    const candidatsUniques = [{ id: 'jambon', nom: 'Jambon de Bayonne', categorie: 'hors_d_oeuvre', niveaux: ['grande_bourgeoisie'], saisons: ['hiver'] }];
    const resultat = appliquerStandingSocial(candidatsUniques, candidatsUniques, { categorie: 'hors_d_oeuvre' }, {
      niveauFinancier: 'grande_bourgeoisie', typeRepas: 'diner', saison: 'hiver',
    });
    expect(resultat).toEqual(candidatsUniques);
  });
});

describe('genererMenu — règle du doublon entremets/dessert', () => {
  const structure = {
    textes_intro: ['Le festin commence.'],
    services: [
      { id: 'entremets', label: 'Entremets', categorie: 'entremets', nb_plats: 1 },
      { id: 'dessert', label: 'Dessert', categorie: 'dessert', nb_plats: 1 },
    ],
  };
  const criteres = { niveauFinancier: 'aristocratie', saison: 'hiver', nbConvives: 10, typeRepas: 'banquet' };

  it('restreint le dessert à une proposition légère si l\'entremets est une pâtisserie lourde', () => {
    const plats = [
      { id: 'charlotte', nom: 'Charlotte aux poires', categorie: 'entremets', niveaux: ['aristocratie'], saisons: ['hiver'] },
      { id: 'religieuse', nom: 'Religieuse au chocolat', categorie: 'dessert', niveaux: ['aristocratie'], saisons: ['hiver'] },
      { id: 'sorbet', nom: 'Sorbet au cassis', categorie: 'dessert', niveaux: ['aristocratie'], saisons: ['hiver'] },
    ];
    const menu = genererMenu({ structure, plats, ...criteres });
    expect(menu.services.find((s) => s.id === 'entremets').plats[0].id).toBe('charlotte');
    expect(menu.services.find((s) => s.id === 'dessert').plats[0].id).toBe('sorbet');
  });

  it('laisse le dessert libre si l\'entremets tiré est déjà léger', () => {
    const plats = [
      { id: 'fruits', nom: 'Salade de fruits confits', categorie: 'entremets', niveaux: ['aristocratie'], saisons: ['hiver'] },
      { id: 'religieuse', nom: 'Religieuse au chocolat', categorie: 'dessert', niveaux: ['aristocratie'], saisons: ['hiver'] },
    ];
    const menu = genererMenu({ structure, plats, ...criteres });
    expect(menu.services.find((s) => s.id === 'dessert').plats[0].id).toBe('religieuse');
  });

  it('exclut explicitement Religieuse et Éclair quand l\'entremets (ex: Pudding) est lourd', () => {
    const plats = [
      { id: 'pudding', nom: 'Pudding de Noël', categorie: 'entremets', niveaux: ['aristocratie'], saisons: ['hiver'] },
      { id: 'religieuse', nom: 'Religieuse au chocolat', categorie: 'dessert', niveaux: ['aristocratie'], saisons: ['hiver'] },
      { id: 'eclair', nom: 'Éclair au café', categorie: 'dessert', niveaux: ['aristocratie'], saisons: ['hiver'] },
      { id: 'fours', nom: 'Petits fours secs', categorie: 'dessert', niveaux: ['aristocratie'], saisons: ['hiver'] },
    ];
    const menu = genererMenu({ structure, plats, ...criteres });
    expect(menu.services.find((s) => s.id === 'dessert').plats[0].id).toBe('fours');
  });
});

describe('genererMenu — garde-fou légume jamais vide', () => {
  const structure = {
    textes_intro: ['Le festin commence.'],
    services: [{ id: 'legume', label: 'Légume', categorie: 'legume', nb_plats: 1 }],
  };

  it('relâche la saison si aucun légume ne correspond exactement, en gardant le niveau financier', () => {
    const plats = [
      { id: 'asperges-ete', nom: 'Asperges sauce mousseline', categorie: 'legume', niveaux: ['grande_bourgeoisie'], saisons: ['ete'] },
      { id: 'navets-pop', nom: 'Navets glacés', categorie: 'legume', niveaux: ['populaire'], saisons: ['hiver'] },
    ];
    const menu = genererMenu({
      structure, plats, niveauFinancier: 'grande_bourgeoisie', saison: 'hiver', nbConvives: 4, typeRepas: 'diner',
    });
    expect(menu.services[0].plats).toHaveLength(1);
    expect(menu.services[0].plats[0].id).toBe('asperges-ete');
  });

  it('ne renvoie jamais un service légume vide, même en dernier recours', () => {
    const plats = [
      { id: 'navets-pop', nom: 'Navets glacés', categorie: 'legume', niveaux: ['populaire'], saisons: ['hiver'] },
    ];
    const menu = genererMenu({
      structure, plats, niveauFinancier: 'aristocratie', saison: 'ete', nbConvives: 4, typeRepas: 'diner',
    });
    expect(menu.services[0].plats).toHaveLength(1);
    expect(menu.services[0].plats[0].id).toBe('navets-pop');
  });
});

describe('determinerNiveauEffectif — verrouillage aristocratie via le texte d\'intro', () => {
  it('verrouille sur aristocratie quand le texte évoque les armoiries/l\'ancienneté de la maison', () => {
    expect(determinerNiveauEffectif("Les armoiries brodées sur les serviettes rappellent l'ancienneté de la maison.", 'grande_bourgeoisie')).toBe('aristocratie');
  });

  it('laisse le niveau financier inchangé pour un texte neutre', () => {
    expect(determinerNiveauEffectif('Le déjeuner se prend en famille.', 'grande_bourgeoisie')).toBe('grande_bourgeoisie');
  });

  it('genererMenu utilise le niveau effectif pour sélectionner les plats, pas le niveau demandé', () => {
    const structure = {
      textes_intro: ["Les armoiries brodées sur les serviettes rappellent l'ancienneté de la maison."],
      services: [{ id: 'fromage', label: 'Fromage', categorie: 'fromage', nb_plats: 1 }],
    };
    const plats = [
      { id: 'roquefort', nom: 'Roquefort', categorie: 'fromage', niveaux: ['aristocratie'], saisons: ['hiver'] },
    ];
    const menu = genererMenu({
      structure, plats, niveauFinancier: 'grande_bourgeoisie', saison: 'hiver', nbConvives: 4, typeRepas: 'diner',
    });
    expect(menu.niveauFinancierEffectif).toBe('aristocratie');
    expect(menu.services[0].plats[0].id).toBe('roquefort');
  });
});
