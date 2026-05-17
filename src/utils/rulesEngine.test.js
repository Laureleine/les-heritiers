jest.mock('./bonusCalculator', () => ({
  calculateCharacterStats: jest.fn(() => ({
    competences: { bonus: {} },
    caracteristiques: { bonus: {} },
  })),
}));

import { calculateSkillScore, calculateFullCombatStats } from './rulesEngine';
import { calculateCharacterStats } from './bonusCalculator';

const baseCharacter = {
  id: 'char-1',
  typeFee: 'Lutin',
  caracteristiques: { agilite: 3, constitution: 3, esprit: 3, feerie: 3, masque: 4, sangFroid: 3, force: 3, precision: 3, prestance: 3, perception: 3 },
  competencesLibres: {
    rangs: { Mouvement: 2, Mêlée: 1, Ressort: 0, Fortitude: 0, 'Art de la guerre': 1 },
    choixPredilection: {},
  },
  profils: { majeur: { nom: 'Aventurier' }, mineur: { nom: 'Combattant' } },
  data: {},
};

const baseGameData = {
  fairyData: {
    Lutin: {
      competencesPredilection: [{ nom: 'Mouvement' }],
      capacites: { fixe1: null, fixe2: null },
      taille: 'Petite',
      caracteristiques: { agilite: { min: 2 }, constitution: { min: 2 } },
    },
  },
};

describe('calculateSkillScore', () => {
  beforeEach(() => {
    calculateCharacterStats.mockReturnValue({
      competences: { bonus: {} },
      caracteristiques: { bonus: {} },
    });
  });

  it('retourne 0 si paramètres manquants', () => {
    expect(calculateSkillScore(null, {}, {})).toBe(0);
    expect(calculateSkillScore('Mouvement', null, {})).toBe(0);
  });

  it('retourne le rang investi seul sans bonus', () => {
    const score = calculateSkillScore('Conduite', baseCharacter, baseGameData);
    // Conduite est dans Aventurier (majeur) : rang 0 + majeur 2 = 2
    // Pour vraiment tester "sans bonus", utilisons une compétence sans profil ni prédilection
    const char = {
      ...baseCharacter,
      profils: { majeur: { nom: 'Aventurier' }, mineur: { nom: 'Combattant' } },
      competencesLibres: { rangs: { 'Escalade': 1 }, choixPredilection: {} },
    };
    const score2 = calculateSkillScore('Escalade', char, baseGameData);
    // rang 1 seulement, pas dans profil ni predilection → 1
    expect(score2).toBe(1);
  });

  it('ajoute +2 pour compétence de profil majeur', () => {
    // Mouvement est dans Aventurier (majeur), ET prédilection Lutin
    // On utilise une compétence de profil sans prédilection
    const score = calculateSkillScore('Survie', baseCharacter, baseGameData);
    // rang 0 + majeur 2 = 2
    expect(score).toBe(2);
  });

  it('ajoute +2 pour compétence de prédilection', () => {
    const char = {
      ...baseCharacter,
      profils: { majeur: null, mineur: null },
      competencesLibres: {
        ...baseCharacter.competencesLibres,
        choixPredilection: { aventurier: 'Survie' },
      },
    };
    const score = calculateSkillScore('Survie', char, baseGameData);
    // rang 0 + pred 2 = 2, pas de bonus profil
    expect(score).toBe(2);
  });

  it('cumule profil majeur + prédilection', () => {
    const score = calculateSkillScore('Mouvement', baseCharacter, baseGameData);
    // rang 2 + majeur Aventurier 2 + pred Lutin 2 = 6
    expect(score).toBe(6);
  });

  it('inclut les bonus magiques du calculateCharacterStats', () => {
    calculateCharacterStats.mockReturnValue({
      competences: {
        bonus: { Mouvement: [{ value: 3, source: 'Pouvoir féérique' }] },
      },
      caracteristiques: { bonus: {} },
    });
    const score = calculateSkillScore('Mouvement', baseCharacter, baseGameData);
    // rang 2 + majeur 2 + pred 2 + magique 3 = 9
    expect(score).toBe(9);
  });
});

describe('calculateFullCombatStats', () => {
  beforeEach(() => {
    calculateCharacterStats.mockReturnValue({
      competences: { bonus: {} },
      caracteristiques: { bonus: {} },
    });
  });

  const char = {
    ...baseCharacter,
    competencesLibres: {
      rangs: {
        Mouvement: 2, Mêlée: 1, Ressort: 1, Fortitude: 1, 'Art de la guerre': 1,
      },
      choixPredilection: {},
    },
  };

  it('calcule esquive masquée', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // sMouv = rang 2 + majeur 2 + pred 2 = 6, agi = 3
    // esquive = 6 + 3 + 5 = 14
    expect(stats.esquiveMasquee).toBe(14);
  });

  it('calcule parade', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // sMelee = rang 1 + mineur 1 = 2, agi = 3
    // parade = 2 + 3 + 5 = 10
    expect(stats.parade).toBe(10);
  });

  it('calcule résistance physique', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // sRes = rang 1 + majeur 2 = 3, con = 3
    // resPhys = 3 + 3 + 5 = 11
    expect(stats.resPhys).toBe(11);
  });

  it('calcule résistance psychique', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // sFort = rang 1, esp = 3
    // resPsych = 1 + 3 + 5 = 9
    expect(stats.resPsych).toBe(9);
  });

  it('calcule PV max', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // (3 * 3) + 9 = 18
    expect(stats.pvMax).toBe(18);
  });

  it('applique modificateur de taille Petite (+1 esquive démasquée)', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // Petite → modT = +1
    // EsquiveMasquée = sMouv + agi + 5 = 14
    // EsquiveDémasquée = sMouv + agiD + 5 + modT = 14 + 1 = 15
    expect(stats.esquiveDemasquee).toBe(15);
  });

  it('inclut le bonusMasque quand masque > 5', () => {
    const charHighMask = {
      ...char,
      caracteristiques: { ...char.caracteristiques, masque: 7 },
    };
    const stats = calculateFullCombatStats(charHighMask, baseGameData);
    // bonusMasque = max(0, 7-5) = 2
    // resPhys = sRes(3) + con(3) + 5 + 2 = 13
    // resPsych = sFort(1) + esp(3) + 5 + 2 = 11
    expect(stats.resPhys).toBe(13);
    expect(stats.resPsych).toBe(11);
  });

  it('calcule la tricherie', () => {
    const stats = calculateFullCombatStats(char, baseGameData);
    // floor((3 + 4) / 2) = 3
    expect(stats.tricherie).toBe(3);
  });

  it('gère des caracteristiques partielles', () => {
    const partialChar = {
      ...char,
      caracteristiques: { agilite: 3 },
    };
    const stats = calculateFullCombatStats(partialChar, baseGameData);
    expect(stats.esquiveMasquee).toBeDefined();
    expect(typeof stats.esquiveMasquee).toBe('number');
  });

  it('retourne un objet vide si character est null', () => {
    expect(calculateFullCombatStats(null, baseGameData)).toEqual({});
  });
});
