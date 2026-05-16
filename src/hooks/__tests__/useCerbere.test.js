jest.mock('../../config/supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockResolvedValue({ data: [], error: null }),
      insert: jest.fn().mockResolvedValue({ data: null, error: null }),
    })),
    rpc: jest.fn().mockResolvedValue({ data: null, error: null }),
  },
}));

jest.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: jest.fn(),
}));

jest.mock('../../utils/supabaseStorage', () => ({
  saveCharacterToSupabase: jest.fn(),
}));

jest.mock('../../utils/lockUtils', () => ({
  isCharacterScelle: jest.fn(() => false),
}));

jest.mock('../../utils/json', () => ({
  parseIfString: jest.fn(() => ({})),
}));

jest.mock('../../utils/rulesEngine', () => ({
  calculateFullCombatStats: jest.fn(() => ({})),
  calculateSkillScore: jest.fn(() => 0),
}));

jest.mock('../../utils/sealValidation', () => ({
  validateBeforeSeal: jest.fn(() => ({ errors: [], warnings: [] })),
}));

jest.mock('../../context/CharacterContext', () => ({
  useCharacter: jest.fn(),
}));

import { renderHook, act } from '@testing-library/react';
import { useCerbere } from '../useCerbere';

const mockDispatch = jest.fn();

const mockCharacter = {
  id: 'char-123',
  nom: 'Aristide Robelin',
  typeFee: 'Lutin',
  statut: 'brouillon',
  xp_total: 100,
  xp_depense: 30,
  caracteristiques: { agilite: 3, feerie: 4, masque: 5 },
  atouts: ['atout-1', 'atout-2'],
  pouvoirs: ['pouvoir-1', 'pouvoir-2', 'pouvoir-3'],
  competencesLibres: { rangs: {}, choixPredilection: {} },
  competencesFutiles: { rangs: {} },
  profils: { majeur: { nom: 'Aventurier' }, mineur: { nom: 'Combattant' } },
  fortune: 1,
  data: {},
  vieSociale: {},
};

const mockGameData = {
  fairyData: {
    Lutin: {
      anciennete: 'traditionnelle',
      avantages: [],
      desavantages: [],
      caracteristiques: {
        agilite: { min: 2 }, constitution: { min: 2 }, force: { min: 1 },
        precision: { min: 1 }, esprit: { min: 1 }, perception: { min: 1 },
        prestance: { min: 1 }, sangFroid: { min: 1 },
      },
      competencesPredilection: [],
      competencesFutilesPredilection: [],
      capacites: { fixe1: null, fixe2: null, choix: [] },
      pouvoirs: [],
      atouts: [],
    },
  },
  socialItems: [],
};

function mockSave() { return require('../../utils/supabaseStorage').saveCharacterToSupabase; }
function mockNotif() { return require('../../utils/SystemeServices').showInAppNotification; }
function mockValidate() { return require('../../utils/sealValidation').validateBeforeSeal; }

describe('useCerbere', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require('../../context/CharacterContext').useCharacter.mockReturnValue({
      character: mockCharacter,
      gameData: mockGameData,
      dispatchCharacter: mockDispatch,
    });
  });

  describe('handleSealClick', () => {
    it('valide le personnage avant d\'ouvrir la modale', () => {
      mockValidate().mockReturnValue({ errors: [], warnings: ['Points restants'] });

      const { result } = renderHook(() => useCerbere());

      act(() => {
        result.current.handleSealClick();
      });

      expect(mockValidate()).toHaveBeenCalledWith(mockCharacter, mockGameData, mockGameData.fairyData.Lutin);
      expect(result.current.sealErrors).toEqual([]);
      expect(result.current.sealWarnings).toEqual(['Points restants']);
      expect(result.current.showConfirmSeal).toBe(true);
    });

    it('refuse de sceller un personnage sans id (temp_)', () => {
      require('../../context/CharacterContext').useCharacter.mockReturnValue({
        character: { ...mockCharacter, id: 'temp_12345' },
        gameData: mockGameData,
        dispatchCharacter: mockDispatch,
      });

      const { result } = renderHook(() => useCerbere());

      act(() => {
        result.current.handleSealClick();
      });

      expect(mockNotif()).toHaveBeenCalledWith('Veuillez sauvegarder avant de sceller.', 'error');
      expect(result.current.showConfirmSeal).toBe(false);
    });
  });

  describe('executeSeal', () => {
    it('sauvegarde le personnage avec statut scelle puis dispatch SEAL_CHARACTER', async () => {
      mockSave().mockResolvedValue({ id: 'char-123' });

      const { result } = renderHook(() => useCerbere());

      await act(async () => {
        await result.current.executeSeal();
      });

      expect(mockSave()).toHaveBeenCalledWith(expect.objectContaining({ statut: 'scelle' }));
      expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'SEAL_CHARACTER' }));
      expect(mockNotif()).toHaveBeenCalledWith('Sceau apposé !', 'success');
    });

    it('sauvegarde échoue → dispatch local + avertissement', async () => {
      mockSave().mockRejectedValue(new Error('Réseau indisponible'));

      const { result } = renderHook(() => useCerbere());

      await act(async () => {
        await result.current.executeSeal();
      });

      expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'SEAL_CHARACTER' }));
      expect(mockNotif()).toHaveBeenCalledWith(expect.stringContaining('Sceau local uniquement'), 'warning');
    });

    it('met à jour l\'id si le retour Supabase a un nouvel id', async () => {
      mockSave().mockResolvedValue({ id: 'new-id-456' });

      const { result } = renderHook(() => useCerbere());

      await act(async () => {
        await result.current.executeSeal();
      });

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'UPDATE_FIELD', field: 'id', value: 'new-id-456' })
      );
    });
  });
});
