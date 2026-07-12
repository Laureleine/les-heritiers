import {
  bonusNiveauTech, techLevelFromMod,
  typeCultureFromScore, statutSocialFromScore,
  configFoyerFromDe, evenementNaissanceFromScore,
  configParentsFromDe, chronologieJeunesseFromScore,
  DEMOGRAPHIE_PARIS_1899, NATIONALITES_EXOTIQUES_1899,
  NIVEAUX_TECH, TITRES_NOBLESSE, TRAITS_NOTABLES_PARENTS,
  TABLE_EVENEMENTS_SPECIAL_JEUNESSE,
} from '../pnjTablesBio';

describe('bonusNiveauTech', () => {
  it('retourne 0 pour un jet ≤ 30', () => expect(bonusNiveauTech(15)).toBe(0));
  it('retourne 1 pour un jet de 31', () => expect(bonusNiveauTech(31)).toBe(1));
  it('retourne 4 pour un jet de 130', () => expect(bonusNiveauTech(130)).toBe(4));
  it('retourne 7 pour un jet > 210', () => expect(bonusNiveauTech(250)).toBe(7));
});

describe('techLevelFromMod', () => {
  it('retourne "stone" pour TekMod ≤ 1', () => {
    expect(techLevelFromMod(0)).toBe('stone');
    expect(techLevelFromMod(1)).toBe('stone');
  });
  it('retourne "industrial" pour TekMod 6', () => expect(techLevelFromMod(6)).toBe('industrial'));
  it('retourne "engineering" pour TekMod ≥ 7', () => {
    expect(techLevelFromMod(7)).toBe('engineering');
    expect(techLevelFromMod(10)).toBe('engineering');
  });
});

describe('typeCultureFromScore', () => {
  it('retourne "developing" pour score 50', () => expect(typeCultureFromScore(50).id).toBe('developing'));
  it('retourne "dynamic" pour score 80', () => expect(typeCultureFromScore(80).id).toBe('dynamic'));
  it('retourne "decadent" pour score 200', () => expect(typeCultureFromScore(200).id).toBe('decadent'));
  it('chaque entrée a cuMod, survieTotal, edDice()', () => {
    const e = typeCultureFromScore(50);
    expect(typeof e.cuMod).toBe('number');
    expect(typeof e.survieTotal).toBe('number');
    expect(typeof e.edDice()).toBe('number');
  });
});

describe('statutSocialFromScore', () => {
  it('retourne "comfortable" pour score 40', () => expect(statutSocialFromScore(40).id).toBe('comfortable'));
  it('retourne "nobility" pour score 99', () => expect(statutSocialFromScore(99).id).toBe('nobility'));
  it('retourne "destitute" pour score 5', () => expect(statutSocialFromScore(5).id).toBe('destitute'));
});

describe('configFoyerFromDe', () => {
  it('retourne une string non vide pour tout d20', () => {
    for (let i = 1; i <= 20; i++) {
      expect(typeof configFoyerFromDe(i).resoudre()).toBe('string');
    }
  });
  it('entrée 17 a flagRue', () => expect(configFoyerFromDe(17).flagRue).toBe(true));
  it('entrée 18 a flagOrphelinat', () => expect(configFoyerFromDe(18).flagOrphelinat).toBe(true));
});

describe('evenementNaissanceFromScore', () => {
  it('score 10 a moneyModMult', () => expect(evenementNaissanceFromScore(10).moneyModMult).toBe(2));
  it('score 48 a flagCurse', () => expect(evenementNaissanceFromScore(48).flagCurse).toBe(true));
  it('score 82 a pool (tableau)', () => expect(Array.isArray(evenementNaissanceFromScore(82).pool)).toBe(true));
  it('score > 120 a pool (tableau)', () => expect(Array.isArray(evenementNaissanceFromScore(150).pool)).toBe(true));
});

describe('configParentsFromDe', () => {
  it('retourne une string label pour tout d20', () => {
    for (let i = 1; i <= 20; i++) {
      expect(typeof configParentsFromDe(i).label).toBe('string');
    }
  });
});

describe('chronologieJeunesseFromScore', () => {
  it('score 5 a fn drame_ou_miracle', () => expect(chronologieJeunesseFromScore(5).fn).toBe('drame_ou_miracle'));
  it('score 8 a fn table_speciale', () => expect(chronologieJeunesseFromScore(8).fn).toBe('table_speciale'));
  it('score 20 a texte non vide', () => expect(chronologieJeunesseFromScore(20).texte.length).toBeGreaterThan(0));
});

describe('DEMOGRAPHIE_PARIS_1899', () => {
  it('a 8 entrées', () => expect(DEMOGRAPHIE_PARIS_1899).toHaveLength(8));
  it('Française a poids 80', () => {
    const fr = DEMOGRAPHIE_PARIS_1899.find(n => n.id === 'francaise');
    expect(fr.weight).toBe(80);
    expect(fr.TekMod).toBe(3);
  });
  it('chaque entrée a weight et TekMod', () => {
    DEMOGRAPHIE_PARIS_1899.forEach(n => {
      expect(typeof n.weight).toBe('number');
      expect(typeof n.TekMod).toBe('number');
    });
  });
});

describe('NATIONALITES_EXOTIQUES_1899', () => {
  it('a au moins 10 entrées', () => expect(NATIONALITES_EXOTIQUES_1899.length).toBeGreaterThanOrEqual(10));
  it('chaque entrée a id, label, TekMod, langue', () => {
    NATIONALITES_EXOTIQUES_1899.forEach(n => {
      expect(n).toHaveProperty('id');
      expect(n).toHaveProperty('label');
      expect(typeof n.TekMod).toBe('number');
      expect(typeof n.langue).toBe('string');
    });
  });
});

describe('NIVEAUX_TECH', () => {
  it('contient les 7 niveaux attendus', () => {
    const ids = ['stone','bronze','iron','medieval','renaissance','industrial','engineering'];
    ids.forEach(id => expect(NIVEAUX_TECH).toHaveProperty(id));
  });
  it('engineering a les plus hauts pointsDeBase', () => {
    expect(NIVEAUX_TECH.engineering.pointsDeBase).toBeGreaterThan(NIVEAUX_TECH.stone.pointsDeBase);
  });
});

describe('TABLE_EVENEMENTS_SPECIAL_JEUNESSE', () => {
  it('a les clés enfance et adolescence', () => {
    expect(Array.isArray(TABLE_EVENEMENTS_SPECIAL_JEUNESSE.enfance)).toBe(true);
    expect(Array.isArray(TABLE_EVENEMENTS_SPECIAL_JEUNESSE.adolescence)).toBe(true);
  });
});
