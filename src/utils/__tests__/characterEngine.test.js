vi.mock('../historyReconstructor', () => ({
  reconstructHistory: vi.fn(() => []),
}));

vi.mock('../bonusCalculator', () => ({
  calculateCharacterStats: vi.fn(() => ({
    caracteristiques: { bonus: {} },
    competences: { bonus: {} },
    specialites: { gratuites: {} },
  })),
}));

vi.mock('../lockUtils', () => ({
  isCharacterScelle: vi.fn(() => false),
}));

vi.mock('../json', () => ({
  parseIfString: vi.fn(() => ({})),
}));

vi.mock('../xpActions', () => ({
  XP_CODES: {
    XP_HISTORIQUE: 'XP_HISTORIQUE',
    XP_SOLDE: 'XP_SOLDE',
    CARAC_AUGMENTATION: 'CARAC_AUGMENTATION',
    MASQUE_EPAISSISSEMENT: 'MASQUE_EPAISSISSEMENT',
    FEERIE_EVEIL: 'FEERIE_EVEIL',
    COMP_UTILE_RANG: 'COMP_UTILE_RANG',
    COMP_FUTILE_RANG: 'COMP_FUTILE_RANG',
  },
}));

import { characterReducer } from '../characterEngine';
import { reconstructHistory } from '../historyReconstructor';
import { isCharacterScelle } from '../lockUtils';
import { calculateCharacterStats } from '../bonusCalculator';
import { parseIfString } from '../json';

const mockFeeData = {
  anciennete: 'traditionnelle',
  avantages: ['Noble'],
  desavantages: ['Fierté'],
  caracteristiques: {
    agilite: { min: 2, max: 8 },
    constitution: { min: 2, max: 8 },
    force: { min: 1, max: 7 },
    precision: { min: 1, max: 7 },
    esprit: { min: 1, max: 7 },
    perception: { min: 1, max: 7 },
    prestance: { min: 1, max: 7 },
    sangFroid: { min: 1, max: 7 },
    feerie: { min: 3, max: 10 },
    masque: { min: 4, max: 10 },
    tricherie: { min: 3 },
  },
  taille: 'Petite',
  competencesPredilection: [
    { nom: 'Mouvement' },
  ],
  competencesFutilesPredilection: [],
  capacites: { fixe1: null, fixe2: null, choix: [] },
  pouvoirs: [],
  atouts: [],
};

const baseGameData = {
  fairyData: { Lutin: mockFeeData },
  socialItems: [],
};

const baseCharacter = {
  id: 'char-1',
  typeFee: 'Lutin',
  statut: 'brouillon',
  nom: 'Test',
  xp_total: 100,
  xp_depense: 30,
  caracteristiques: { agilite: 3, constitution: 3, force: 3, precision: 3, esprit: 3, perception: 3, prestance: 3, sangFroid: 3, feerie: 4, masque: 5 },
  competencesLibres: { rangs: { Mouvement: 1 }, choixPredilection: {}, choixSpecialiteUser: {} },
  competencesFutiles: { rangs: {} },
  profils: { majeur: { nom: 'Aventurier' }, mineur: { nom: 'Combattant' } },
  atouts: [],
  pouvoirs: [],
  fortune: 1,
  data: {},
};

describe('characterReducer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('LOAD_CHARACTER', () => {
    function setScelle(value) {
      isCharacterScelle.mockReturnValue(value);
    }

    it('charge un personnage non scellé sans modification', () => {
      setScelle(false);
      const result = characterReducer({}, {
        type: 'LOAD_CHARACTER',
        payload: { id: 'char-1', nom: 'Test' },
        gameData: baseGameData,
      });
      expect(result.id).toBe('char-1');
      expect(result.nom).toBe('Test');
    });

    it('reconstruit historique_xp pour un personnage scellé sans historique', () => {
      setScelle(true);
      reconstructHistory.mockReturnValue([
        { type: 'DEPENSE', code: 'CARAC_AUGMENTATION', valeur: 12, label: 'Augmentation : Agilité' },
      ]);

      const result = characterReducer({}, {
        type: 'LOAD_CHARACTER',
        payload: { id: 'char-1', xp_total: 100, xp_depense: 12, data: {} },
        gameData: baseGameData,
      });

      expect(result.data.historique_xp).toBeDefined();
      expect(result.data.historique_xp.length).toBeGreaterThanOrEqual(2);
      expect(result.data.historique_xp.some(tx => tx.type === 'GAIN')).toBe(true);
      expect(reconstructHistory).toHaveBeenCalled();
    });

    it('ne crée pas d\'historique si déjà présent', () => {
      setScelle(true);
      const existingHistory = [{ type: 'GAIN', valeur: 100, code: 'XP_HISTORIQUE', label: 'Initial' }];

      const result = characterReducer({}, {
        type: 'LOAD_CHARACTER',
        payload: { id: 'char-1', xp_total: 100, xp_depense: 30, data: { historique_xp: existingHistory } },
        gameData: baseGameData,
      });

      expect(result.data.historique_xp).toBe(existingHistory);
      expect(reconstructHistory).not.toHaveBeenCalled();
    });

    it('ne crée pas d\'entrée GAIN si xp_total et xp_depense sont 0', () => {
      setScelle(true);

      const result = characterReducer({}, {
        type: 'LOAD_CHARACTER',
        payload: { id: 'char-1', xp_total: 0, xp_depense: 0, data: {} },
        gameData: baseGameData,
      });

      expect(result.data?.historique_xp).toBeUndefined();
    });

    it('gère le solde mathématique si reconstruction != depense', () => {
      setScelle(true);
      reconstructHistory.mockReturnValue([
        { type: 'DEPENSE', valeur: 10, code: 'CARAC_AUGMENTATION' },
      ]);

      const result = characterReducer({}, {
        type: 'LOAD_CHARACTER',
        payload: { id: 'char-1', xp_total: 100, xp_depense: 15, data: {} },
        gameData: baseGameData,
      });

      const solde = result.data.historique_xp.find(tx => tx.code === 'XP_SOLDE');
      expect(solde).toBeDefined();
      expect(solde.valeur).toBe(5);
    });

    it('ne fait rien pour un personnage non scellé', () => {
      setScelle(false);

      const result = characterReducer({}, {
        type: 'LOAD_CHARACTER',
        payload: { id: 'char-1', xp_total: 100, xp_depense: 30, data: {} },
        gameData: baseGameData,
      });

      expect(result.data?.historique_xp).toBeUndefined();
    });
  });

  describe('UPDATE_FIELD', () => {
    it('met à jour un champ simple', () => {
      const result = characterReducer({ nom: 'Ancien' }, {
        type: 'UPDATE_FIELD',
        field: 'nom',
        value: 'Nouveau',
      });
      expect(result.nom).toBe('Nouveau');
    });

    it('met à jour sans gameData (pas de recalcul computedStats)', () => {
      const result = characterReducer({ ...baseCharacter, nom: 'Ancien' }, {
        type: 'UPDATE_FIELD',
        field: 'nom',
        value: 'Nouveau',
      });
      expect(result.nom).toBe('Nouveau');
      expect(result.computedStats).toBeUndefined();
    });

    it('crée computedStats pour les champs texte seulement si gameData existe', () => {
      calculateCharacterStats.mockReturnValue({
        caracteristiques: { bonus: {} },
        competences: { bonus: {} },
        specialites: { gratuites: {} },
      });

      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin' },
        {
          type: 'UPDATE_FIELD',
          field: 'nom',
          value: 'NouveauNom',
          gameData: baseGameData,
        }
      );

      expect(result.nom).toBe('NouveauNom');
      expect(result.computedStats).toBeDefined();
    });
  });

  describe('SEAL_CHARACTER', () => {
    it('met le statut à scelle et capture stats_scellees', () => {
      calculateCharacterStats.mockReturnValue({
        caracteristiques: { bonus: {} },
        competences: { bonus: {} },
        specialites: { gratuites: {} },
      });

      const character = {
        ...baseCharacter,
        caracteristiques: { agilite: 3, constitution: 3, force: 3, precision: 3, esprit: 3, perception: 3, prestance: 3, sangFroid: 3, feerie: 4, masque: 5 },
        atouts: ['atout-1'],
        fortune: 2,
        pouvoirs: ['pouvoir-1'],
      };

      const result = characterReducer(character, {
        type: 'SEAL_CHARACTER',
        gameData: baseGameData,
      });

      expect(result.statut).toBe('scelle');
      expect(result.data.stats_scellees).toBeDefined();
      expect(result.data.stats_scellees.caracteristiques.agilite).toBe(3);
      expect(result.data.stats_scellees.atouts).toEqual(['atout-1']);
      expect(result.data.stats_scellees.fortune).toBe(2);
      expect(result.data.stats_scellees.pouvoirs).toEqual(['pouvoir-1']);
    });

    it('ne crée pas data si absent', () => {
      const result = characterReducer({ id: 'char-1' }, {
        type: 'SEAL_CHARACTER',
      });
      expect(result.statut).toBe('scelle');
      expect(result.data.stats_scellees).toBeDefined();
    });
  });

  describe('UPDATE_MULTIPLE', () => {
    it('fusionne le payload dans le state', () => {
      const result = characterReducer({ nom: 'Test' }, {
        type: 'UPDATE_MULTIPLE',
        payload: { nom: 'Modifié', fortune: 5 },
      });
      expect(result.nom).toBe('Modifié');
      expect(result.fortune).toBe(5);
    });
  });

  describe('TOGGLE_ARRAY_ITEM', () => {
    it('ajoute un élément si absent', () => {
      const result = characterReducer({ atouts: ['A'] }, {
        type: 'TOGGLE_ARRAY_ITEM',
        field: 'atouts',
        value: 'B',
        max: 3,
      });
      expect(result.atouts).toEqual(['A', 'B']);
    });

    it('retire un élément si présent', () => {
      const result = characterReducer({ atouts: ['A', 'B'] }, {
        type: 'TOGGLE_ARRAY_ITEM',
        field: 'atouts',
        value: 'A',
        max: 3,
      });
      expect(result.atouts).toEqual(['B']);
    });

    it('n\'ajoute pas si max atteint', () => {
      const result = characterReducer({ atouts: ['A', 'B'] }, {
        type: 'TOGGLE_ARRAY_ITEM',
        field: 'atouts',
        value: 'C',
        max: 2,
      });
      expect(result.atouts).toEqual(['A', 'B']);
    });

    it('gère un champ inexistant comme tableau vide', () => {
      const result = characterReducer({}, {
        type: 'TOGGLE_ARRAY_ITEM',
        field: 'pouvoirs',
        value: 'P1',
        max: 5,
      });
      expect(result.pouvoirs).toEqual(['P1']);
    });
  });

  describe('LOG_XP_TRANSACTION', () => {
    it('ajoute une transaction GAIN et met à jour xp_total', () => {
      jest.useFakeTimers().setSystemTime(new Date('2026-05-16'));

      const result = characterReducer({ xp_total: 100, data: {} }, {
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'GAIN', code: 'XP_GAIN', valeur: 50, label: 'Gain' },
      });

      expect(result.xp_total).toBe(150);
      expect(result.data.historique_xp).toHaveLength(1);
      expect(result.data.historique_xp[0].type).toBe('GAIN');
      expect(result.data.historique_xp[0].valeur).toBe(50);
      expect(result.data.historique_xp[0].date_mouvement).toBeDefined();

      jest.useRealTimers();
    });

    it('ajoute une transaction DEPENSE sans modifier xp_total', () => {
      const result = characterReducer({ xp_total: 100, data: { historique_xp: [] } }, {
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'DEPENSE', code: 'CARAC_AUGMENTATION', valeur: 12, label: 'Force' },
      });

      expect(result.xp_total).toBe(100);
      expect(result.data.historique_xp).toHaveLength(1);
    });

    it('ajoute une transaction REMBOURSEMENT sans modifier xp_total', () => {
      const result = characterReducer({ xp_total: 100, data: { historique_xp: [] } }, {
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'REMBOURSEMENT', code: 'CARAC_AUGMENTATION', valeur: 5, label: 'Remboursement' },
      });

      expect(result.xp_total).toBe(100);
      expect(result.data.historique_xp).toHaveLength(1);
    });

    it('crée data.historique_xp si absent', () => {
      const result = characterReducer({ xp_total: 100 }, {
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'GAIN', valeur: 10 },
      });

      expect(result.data.historique_xp).toBeDefined();
      expect(result.data.historique_xp).toHaveLength(1);
    });

    it('ne fait rien si transaction est null', () => {
      const result = characterReducer({ xp_total: 100 }, {
        type: 'LOG_XP_TRANSACTION',
        transaction: null,
      });

      expect(result.xp_total).toBe(100);
    });

    it('gère GAIN avec valeur négative (correction)', () => {
      const result = characterReducer({ xp_total: 100, data: {} }, {
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'GAIN', code: 'XP_AJUSTEMENT', valeur: -5, label: 'Correction' },
      });

      expect(result.xp_total).toBe(95);
    });
  });

  describe('RESET_CHARACTER', () => {
    it('remplace le state par le payload', () => {
      const result = characterReducer({ nom: 'Ancien' }, {
        type: 'RESET_CHARACTER',
        payload: { nom: 'Nouveau', id: 'char-2' },
      });
      expect(result).toEqual({ nom: 'Nouveau', id: 'char-2' });
    });

    it('gère un payload vide', () => {
      const result = characterReducer({ nom: 'Test' }, {
        type: 'RESET_CHARACTER',
        payload: {},
      });
      expect(result).toEqual({});
    });
  });

  describe('default', () => {
    it('retourne le state inchangé pour un type inconnu', () => {
      const state = { nom: 'Test' };
      const result = characterReducer(state, { type: 'UNKNOWN' });
      expect(result).toEqual(state);
    });
  });

  describe('Hydratation automatique (computedStats)', () => {
    beforeEach(() => {
      calculateCharacterStats.mockReturnValue({
        caracteristiques: { bonus: {} },
        competences: { bonus: {} },
        specialites: { gratuites: {} },
      });
    });

    it('calcule computedStats avec gameData.fairyData et typeFee', () => {
      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin' },
        {
          type: 'UPDATE_FIELD',
          field: 'force',
          value: 4,
          gameData: baseGameData,
        }
      );

      expect(result.computedStats).toBeDefined();
      expect(result.computedStats.competencesTotal.Mouvement).toBeDefined();
      expect(result.computedStats.combat).toBeDefined();
      expect(result.computedStats.entregentTotal).toBe(0);
    });

    it('ne calcule pas computedStats si gameData.fairyData manque', () => {
      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin' },
        { type: 'UPDATE_FIELD', field: 'force', value: 4 }
      );

      expect(result.computedStats).toBeUndefined();
    });

    it('hydrate anciennete, avantages, desavantages depuis feeData', () => {
      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin' },
        {
          type: 'UPDATE_MULTIPLE',
          payload: { force: 4 },
          gameData: baseGameData,
        }
      );

      expect(result.anciennete).toBe('traditionnelle');
      expect(result.avantages).toEqual(['Noble']);
      expect(result.desavantages).toEqual(['Fierté']);
    });

    it('calcule les caractéristiques de base depuis feeData', () => {
      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin', caracteristiques: {} },
        {
          type: 'UPDATE_MULTIPLE',
          payload: {},
          gameData: baseGameData,
        }
      );

      expect(result.caracteristiques.agilite).toBe(2);
      expect(result.caracteristiques.feerie).toBe(3);
      expect(result.caracteristiques.masque).toBe(4);
    });

    it('calcule la tricherie', () => {
      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin' },
        {
          type: 'UPDATE_MULTIPLE',
          payload: {},
          gameData: baseGameData,
        }
      );

      const tricherie = Math.floor((result.caracteristiques.feerie + result.caracteristiques.masque) / 2);
      expect(result.caracteristiques.tricherie).toBe(tricherie);
    });

    it('calcule esquive masquée dans combat', () => {
      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin' },
        {
          type: 'UPDATE_MULTIPLE',
          payload: {},
          gameData: baseGameData,
        }
      );

      expect(result.computedStats.combat.esquiveMasquee).toBeGreaterThan(0);
    });

    it('short-circuit les champs texte (UPDATE_FIELD) si gameData présent', () => {
      calculateCharacterStats.mockReturnValue({
        caracteristiques: { bonus: {} },
        competences: { bonus: {} },
        specialites: { gratuites: {} },
      });

      const result = characterReducer(
        { ...baseCharacter, typeFee: 'Lutin', caracteristiques: { agilite: 3 } },
        {
          type: 'UPDATE_FIELD',
          field: 'nom',
          value: 'NouveauNom',
          gameData: baseGameData,
        }
      );

      expect(result.computedStats).toBeDefined();
    });
  });

  describe('Humain pur — calcul des bonus de profils', () => {
    const minimalGameData = { fairyData: {}, socialItems: [] };

    const humainAvecProfils = {
      typePersonnage: 'humain',
      typeFee: '',
      rangHumain: 'larbin',
      profils: {
        majeur: { nom: 'Gentleman', trait: 'Élégant', competences: ['Classe', 'Entregent', 'Séduction', 'Sensibilité'] },
        mineur: { nom: 'Savant', trait: 'Cérébral', competences: ['Habiletés', 'Médecine', 'Observation', 'Sciences'] },
      },
      competencesLibres: { rangs: { Classe: 1 }, choixPredilection: {}, choixSpecialiteUser: {} },
      caracteristiques: {},
      atouts: [],
      data: {},
      statut: 'brouillon',
    };

    it('popule computedStats pour un humain pur', () => {
      const result = characterReducer(humainAvecProfils, {
        type: 'UPDATE_MULTIPLE',
        payload: {},
        gameData: minimalGameData,
      });

      expect(result.computedStats).toBeDefined();
      expect(result.computedStats.competencesBase).toBeDefined();
    });

    it('donne +2 aux compétences du profil majeur', () => {
      const result = characterReducer(humainAvecProfils, {
        type: 'UPDATE_MULTIPLE',
        payload: {},
        gameData: minimalGameData,
      });

      expect(result.computedStats.competencesBase['Classe']).toBe(2);
      expect(result.computedStats.competencesBase['Entregent']).toBe(2);
      expect(result.computedStats.competencesBase['Séduction']).toBe(2);
      expect(result.computedStats.competencesBase['Sensibilité']).toBe(2);
    });

    it('donne +1 aux compétences du profil mineur', () => {
      const result = characterReducer(humainAvecProfils, {
        type: 'UPDATE_MULTIPLE',
        payload: {},
        gameData: minimalGameData,
      });

      expect(result.computedStats.competencesBase['Habiletés']).toBe(1);
      expect(result.computedStats.competencesBase['Médecine']).toBe(1);
      expect(result.computedStats.competencesBase['Observation']).toBe(1);
      expect(result.computedStats.competencesBase['Sciences']).toBe(1);
    });

    it('donne 0 aux compétences hors profil', () => {
      const result = characterReducer(humainAvecProfils, {
        type: 'UPDATE_MULTIPLE',
        payload: {},
        gameData: minimalGameData,
      });

      expect(result.computedStats.competencesBase['Conduite']).toBe(0);
      expect(result.computedStats.competencesBase['Mêlée']).toBe(0);
    });

    it('totalScore = bonusProfil + rangs investis', () => {
      const result = characterReducer(humainAvecProfils, {
        type: 'UPDATE_MULTIPLE',
        payload: {},
        gameData: minimalGameData,
      });

      // Classe : bonusProfil=2, investis=1 → total=3
      expect(result.computedStats.competencesTotal['Classe']).toBe(3);
      // Entregent : bonusProfil=2, investis=0 → total=2
      expect(result.computedStats.competencesTotal['Entregent']).toBe(2);
    });

    it('ne calcule pas computedStats humain sans gameData', () => {
      const result = characterReducer(humainAvecProfils, {
        type: 'UPDATE_MULTIPLE',
        payload: {},
      });

      expect(result.computedStats).toBeUndefined();
    });
  });
});
