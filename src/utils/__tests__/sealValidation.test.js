vi.mock('../../components/competencesLibres/useCompetencesLibres', () => ({
  SKILLS_ESPRIT: ['Culture', 'Occultisme', 'Rhétorique', 'Sciences', 'Médecine', 'Observation'],
}));

import { validateBeforeSeal } from '../sealValidation';

const baseCharacter = {
  typeFee: 'Lutin',
  caracteristiques: {
    agilite: 3, constitution: 3, force: 3, precision: 3,
    esprit: 3, perception: 3, prestance: 3, sangFroid: 3,
    feerie: 4, masque: 5,
  },
  profils: { majeur: { nom: 'Aventurier' }, mineur: { nom: 'Combattant' } },
  atouts: ['atout-1', 'atout-2'],
  pouvoirs: ['pouvoir-1', 'pouvoir-2', 'pouvoir-3', 'pouvoir-4'],
  capaciteChoisie: 'Capacité test',
  competencesLibres: {
    rangs: { Mouvement: 2, Mêlée: 1, Ressort: 1, Survie: 1, Classe: 1, Conduite: 1 },
    choixPredilection: { 0: 'Survie' },
    choixSpecialiteUser: {},
  },
  competencesFutiles: { rangs: { Chant: 5, Danse: 5 } },
  computedStats: { competencesBase: {} },
  fortune: 1,
};

const baseFeeData = {
  competencesPredilection: [
    { nom: 'Mouvement' },
  ],
  competencesFutilesPredilection: [],
  capacites: { fixe1: null, fixe2: null, choix: [{ nom: 'Capacité test' }] },
};

describe('validateBeforeSeal', () => {
  it('retourne aucun error pour un personnage valide', () => {
    const result = validateBeforeSeal(baseCharacter, {}, baseFeeData);
    expect(result.errors).toEqual([]);
  });

  it('gère un personnage vide sans planter', () => {
    const result = validateBeforeSeal({}, {}, null);
    expect(Array.isArray(result.errors)).toBe(true);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('retourne warning pour points de compétences restants', () => {
    const result = validateBeforeSeal(
      { ...baseCharacter, competencesLibres: { ...baseCharacter.competencesLibres, rangs: {} } },
      {},
      baseFeeData
    );
    expect(result.warnings.length).toBeGreaterThanOrEqual(1);
  });

  describe('erreurs', () => {
    it('détecte feeData manquant', () => {
      const result = validateBeforeSeal(baseCharacter, {}, null);
      expect(result.errors).toContain('Le type féérique est manquant ou non reconnu. Le Plancher de Verre sera vide.');
    });

    it('détecte caractéristiques incomplètes', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, caracteristiques: { agilite: 3 } },
        {},
        baseFeeData
      );
      expect(result.errors.some(e => e.includes('Caractéristiques incomplètes'))).toBe(true);
    });

    it('détecte profil majeur manquant', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, profils: { majeur: null, mineur: { nom: 'Combattant' } } },
        {},
        baseFeeData
      );
      expect(result.errors).toContain('Profil majeur non défini.');
    });

    it('détecte profil mineur manquant', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, profils: { majeur: { nom: 'Aventurier' }, mineur: null } },
        {},
        baseFeeData
      );
      expect(result.errors).toContain('Profil mineur non défini.');
    });

    it('détecte atouts insuffisants', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, atouts: ['atout-1'] },
        {},
        baseFeeData
      );
      expect(result.errors.some(e => e.includes('Atouts'))).toBe(true);
    });

    it('détecte capacité au choix non sélectionnée', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, capaciteChoisie: null },
        {},
        baseFeeData
      );
      expect(result.errors.some(e => e.includes('Capacité féérique'))).toBe(true);
    });

    it('détecte pouvoirs insuffisants', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, pouvoirs: ['pouvoir-1'] },
        {},
        baseFeeData
      );
      expect(result.errors.some(e => e.includes('Pouvoirs'))).toBe(true);
    });

    it('détecte prédilection au choix non remplie', () => {
      const feeDataWithChoice = {
        ...baseFeeData,
        competencesPredilection: [
          { nom: 'Mouvement' },
          { isChoix: true, options: ['Survie', 'Conduite'] },
        ],
      };
      const result = validateBeforeSeal(
        { ...baseCharacter, competencesLibres: { ...baseCharacter.competencesLibres, choixPredilection: {} } },
        {},
        feeDataWithChoice
      );
      expect(result.errors.some(e => e.includes('Prédilection de compétence utile'))).toBe(true);
    });

    it('détecte spécialité innée au choix non remplie', () => {
      const feeDataWithSpec = {
        ...baseFeeData,
        competencesPredilection: [
          { nom: 'Mouvement' },
          { isSpecialiteChoix: true, options: ['Spécialité A'] },
        ],
      };
      const result = validateBeforeSeal(baseCharacter, {}, feeDataWithSpec);
      expect(result.errors.some(e => e.includes('Spécialité innée'))).toBe(true);
    });
  });

  describe('warnings', () => {
    it('avertit si points de compétences utiles restants', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, competencesLibres: { ...baseCharacter.competencesLibres, rangs: { Mouvement: 1 } } },
        {},
        baseFeeData
      );
      expect(result.warnings.some(w => w.includes('point(s) de compétences utiles'))).toBe(true);
    });

    it('avertit si points de loisirs futiles restants', () => {
      const result = validateBeforeSeal(
        { ...baseCharacter, competencesFutiles: { rangs: { Chant: 1 } } },
        {},
        baseFeeData
      );
      expect(result.warnings.some(w => w.includes('loisirs'))).toBe(true);
    });

    it('avertit si bonus Esprit non utilisé', () => {
      const result = validateBeforeSeal(
        {
          ...baseCharacter,
          caracteristiques: { ...baseCharacter.caracteristiques, esprit: 6 },
          competencesLibres: { ...baseCharacter.competencesLibres, rangs: { Mouvement: 2 } },
        },
        {},
        baseFeeData
      );
      expect(result.warnings.some(w => w.includes('Esprit'))).toBe(true);
    });
  });
});
