vi.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
    from: vi.fn(),
  },
}));

vi.mock('../useGameData', () => ({
  useGameData: vi.fn(),
}));

vi.mock('../../context/CharacterContext', () => ({
  useCharacter: vi.fn(),
}));

vi.mock('../useAutoUpdate', () => ({
  useAutoUpdate: vi.fn(),
}));

import { renderHook, waitFor } from '@testing-library/react';
import { useAppInit } from '../useAppInit';
import { supabase } from '../../config/supabase';
import { useGameData } from '../useGameData';
import { useCharacter } from '../../context/CharacterContext';
import { useAutoUpdate } from '../useAutoUpdate';

const mockSetGameData = vi.fn();

const fakeSession = {
  access_token: 'tok',
  user: { id: 'user-123', user_metadata: { username: 'TestHeritier' } },
};

const fakeGameData = { profils: [], fairyTypes: [], competences: {} };

beforeEach(() => {
  vi.clearAllMocks();

  useCharacter.mockReturnValue({ setGameData: mockSetGameData });
  useAutoUpdate.mockReturnValue({ updateAvailable: false, applyUpdate: vi.fn() });
  useGameData.mockReturnValue({ data: fakeGameData, isSuccess: true, isLoading: false });

  const chain = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn(),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
  };
  supabase.from.mockReturnValue(chain);

  supabase.auth.onAuthStateChange.mockReturnValue({
    data: { subscription: { unsubscribe: vi.fn() } },
  });
});

describe('useAppInit — Fallback profil', () => {
  it('crée un profil par fallback si session sans profil', async () => {
    supabase.auth.getSession.mockResolvedValue({
      data: { session: fakeSession },
      error: null,
    });

    supabase.from().single
      .mockResolvedValueOnce({ data: null, error: null })
      .mockResolvedValueOnce({
        data: { id: 'user-123', username: 'TestHeritier', role: 'user' },
        error: null,
      });

    const { result } = renderHook(() => useAppInit());

    await waitFor(() => {
      expect(result.current.userProfile).toBeTruthy();
    });

    expect(result.current.userProfile).toEqual({
      ...fakeSession.user,
      profile: { id: 'user-123', username: 'TestHeritier', role: 'user' },
    });

    expect(supabase.from).toHaveBeenCalledWith('profiles');
    expect(supabase.from().insert).toHaveBeenCalledWith({
      id: 'user-123',
      username: 'TestHeritier',
      role: 'user',
    });
  });

  it('utilise le profil existant si présent', async () => {
    const existingProfile = {
      id: 'user-123',
      username: 'Aristide',
      role: 'user',
    };

    supabase.auth.getSession.mockResolvedValue({
      data: { session: fakeSession },
      error: null,
    });

    supabase.from().single.mockResolvedValue({ data: existingProfile, error: null });

    const { result } = renderHook(() => useAppInit());

    await waitFor(() => {
      expect(result.current.userProfile).toBeTruthy();
    });

    expect(result.current.userProfile).toEqual({
      ...fakeSession.user,
      profile: existingProfile,
    });

    expect(supabase.from().insert).not.toHaveBeenCalled();
  });
});

describe('useAppInit — Pas de session', () => {
  it('ne crée pas de profil si pas de session active', async () => {
    supabase.auth.getSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });

    const { result } = renderHook(() => useAppInit());

    await waitFor(() => {
      expect(result.current.globalLoading).toBe(false);
    });

    expect(result.current.userProfile).toBeNull();
    expect(result.current.session).toBeNull();
    expect(supabase.from).not.toHaveBeenCalled();
  });
});
