import { calculateCharacterStats, formatCaracteristique, getCompetenceBonus, getSpecialitesGratuites } from '../bonusCalculator';

const baseGameData = {
  fairyData: {
    Lutin: {
      capacites: {
        fixe1: { nom: 'Célérité', bonus: { caracteristiques: { agilite: { value: 1, masque: false } } } },
        fixe2: null,
        choix: [
          { nom: 'Vue perçante', bonus: { caracteristiques: { perception: { value: 2, masque: false } } } },
        ],
      },
      pouvoirs: [
        { nom: 'Aura féérique', bonus: { caracteristiques: { prestance: { value: 1, masque: true } } } },
      ],
      atouts: [
        { id: 'atout-1', nom: 'Noble', effets_techniques: { competences: { Classe: 2 } } },
        { id: 'atout-2', nom: 'Guerrier', effets_techniques: { competences: { Mêlée: 1 }, caracteristiques: { force: { value: 1, masque: false } } } },
      ],
    },
  },
};

const baseCharacter = {
  typeFee: 'Lutin',
  caracteristiques: { agilite: 3, perception: 3, prestance: 4, force: 3 },
  capaciteChoisie: 'Célérité',
  pouvoirs: ['Aura féérique'],
  atouts: ['atout-1'],
};

describe('calculateCharacterStats', () => {
  it('retourne la structure de base avec des bonus vides', () => {
    const result = calculateCharacterStats(
      { typeFee: 'Lutin', caracteristiques: { agilite: 3 } },
      baseGameData
    );
    expect(result.caracteristiques.base.agilite).toBe(3);
    expect(result.caracteristiques.bonus).toEqual({});
    expect(result.competences.bonus).toEqual({});
  });

  it('applique les bonus de capacité fixe', () => {
    const result = calculateCharacterStats(baseCharacter, baseGameData);
    expect(result.caracteristiques.bonus.agilite).toBeDefined();
    expect(result.caracteristiques.bonus.agilite[0].source).toBe('Célérité');
    expect(result.caracteristiques.bonus.agilite[0].value).toBe(1);
  });

  it('applique les bonus de pouvoir', () => {
    const result = calculateCharacterStats(baseCharacter, baseGameData);
    expect(result.caracteristiques.bonus.prestance).toBeDefined();
    expect(result.caracteristiques.bonus.prestance[0].masque).toBe(true);
  });

  it('applique les bonus d\'atout (effets_techniques.competences)', () => {
    const result = calculateCharacterStats(baseCharacter, baseGameData);
    expect(result.competences.bonus.Classe).toBeDefined();
    expect(result.competences.bonus.Classe[0].value).toBe(2);
    expect(result.competences.bonus.Classe[0].source).toBe('Noble');
  });

  it('accumule les bonus de compétences de plusieurs sources', () => {
    const char = { ...baseCharacter, atouts: ['atout-1', 'atout-2'] };
    const result = calculateCharacterStats(char, baseGameData);
    expect(result.competences.bonus.Classe).toHaveLength(1);
    expect(result.competences.bonus.Mêlée).toHaveLength(1);
    expect(result.competences.bonus.Mêlée[0].value).toBe(1);
  });

  it('calcule les stats finales (base + bonus)', () => {
    const result = calculateCharacterStats(baseCharacter, baseGameData);
    expect(result.caracteristiques.final.agilite).toBe(4);
    expect(result.caracteristiques.final.perception).toBe(3);
    expect(result.caracteristiques.final.prestance).toBe(5);
  });

  it('sépare bonus masqués et visibles', () => {
    const result = calculateCharacterStats(baseCharacter, baseGameData);
    expect(result.caracteristiques.visibles.agilite).toBe(1);
    expect(result.caracteristiques.masques.prestance).toBe(1);
  });

  it('extrait les spécialités des atouts', () => {
    const gameDataWithSpec = {
      fairyData: {
        Lutin: {
          ...baseGameData.fairyData.Lutin,
          atouts: [
            { id: 'atout-spec', nom: 'Érudit', effets_techniques: { specialites: [{ competence: 'Sciences', nom: 'Alchimie' }] } },
          ],
        },
      },
    };
    const result = calculateCharacterStats(
      { typeFee: 'Lutin', caracteristiques: { agilite: 3 }, atouts: ['atout-spec'] },
      gameDataWithSpec
    );
    expect(result.specialites.gratuites.Sciences).toBeDefined();
    expect(result.specialites.gratuites.Sciences[0].specialite).toBe('Alchimie');
  });

  it('ignore les effets_techniques en string (non parsés — géré par characterEngine)', () => {
    const gameDataWithString = {
      fairyData: {
        Lutin: {
          ...baseGameData.fairyData.Lutin,
          atouts: [
            { id: 'atout-str', nom: 'Test', effets_techniques: '{"competences":{"TestComp":1}}' },
          ],
        },
      },
    };
    const result = calculateCharacterStats(
      { typeFee: 'Lutin', caracteristiques: {}, atouts: ['atout-str'] },
      gameDataWithString
    );
    expect(result.competences.bonus.TestComp).toBeUndefined();
  });

  it('ne crashe pas si bonus est null/undefined', () => {
    const result = calculateCharacterStats(
      { typeFee: 'Lutin', caracteristiques: {}, capaciteChoisie: 'Inexistante' },
      baseGameData
    );
    expect(result.caracteristiques.bonus).toEqual({});
  });

  it('gère un personnage sans typeFee', () => {
    const result = calculateCharacterStats(
      { caracteristiques: { agilite: 3 } },
      baseGameData
    );
    expect(result.caracteristiques.base.agilite).toBe(3);
  });

  it('gère gameData sans fairyData', () => {
    const result = calculateCharacterStats(
      { typeFee: 'Lutin', caracteristiques: { agilite: 3 } },
      {}
    );
    expect(result.caracteristiques.base.agilite).toBe(3);
  });
});

describe('formatCaracteristique', () => {
  it('affiche la valeur seule si pas de bonus', () => {
    const stats = {
      caracteristiques: {
        base: { force: 5 },
        final: { force: 5 },
        bonus: {},
        masques: {},
        visibles: {},
      },
    };
    expect(formatCaracteristique('force', stats)).toBe('5');
  });

  it('affiche avec bonus visible', () => {
    const stats = {
      caracteristiques: {
        base: { force: 3 },
        final: { force: 5 },
        bonus: { force: [{ value: 2, source: 'Test' }] },
        masques: {},
        visibles: { force: 2 },
      },
    };
    expect(formatCaracteristique('force', stats)).toBe('5 (+2 Test)');
  });

  it('affiche avec bonus masqué', () => {
    const stats = {
      caracteristiques: {
        base: { force: 3 },
        final: { force: 5 },
        bonus: { force: [{ value: 2, source: 'Masqué', masque: true }] },
        masques: { force: 2 },
        visibles: {},
      },
    };
    expect(formatCaracteristique('force', stats)).toBe('3 / 5 (+2 Masqué)');
  });
});

describe('getCompetenceBonus', () => {
  it('retourne null si pas de bonus', () => {
    expect(getCompetenceBonus('Mouvement', { competences: { bonus: {} } })).toBeNull();
  });

  it('retourne le total et les sources', () => {
    const stats = {
      competences: {
        bonus: {
          Classe: [
            { value: 2, source: 'Noble' },
            { value: 1, source: 'Atout' },
          ],
        },
      },
    };
    const result = getCompetenceBonus('Classe', stats);
    expect(result.total).toBe(3);
    expect(result.sources).toEqual(['Noble', 'Atout']);
  });
});

describe('getSpecialitesGratuites', () => {
  it('retourne un tableau vide si pas de spécialités', () => {
    expect(getSpecialitesGratuites('Sciences', { specialites: { gratuites: {} } })).toEqual([]);
  });

  it('retourne un tableau vide si la compétence n\'a pas de spécialité gratuite', () => {
    expect(getSpecialitesGratuites('Inexistant', { specialites: { gratuites: {} } })).toEqual([]);
  });

  it('retourne les spécialités gratuites', () => {
    const stats = {
      specialites: {
        gratuites: {
          Sciences: [{ source: 'Érudit', specialite: 'Alchimie' }],
        },
      },
    };
    expect(getSpecialitesGratuites('Sciences', stats)).toHaveLength(1);
    expect(getSpecialitesGratuites('Sciences', stats)[0].specialite).toBe('Alchimie');
  });
});
