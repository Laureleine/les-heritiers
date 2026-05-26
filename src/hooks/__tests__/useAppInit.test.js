jest.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(),
      onAuthStateChange: jest.fn(),
    },
    from: jest.fn(),
  },
}));

jest.mock('../../utils/supabaseGameData', () => ({
  loadCoreGameData: jest.fn(),
  loadHeavyLoreData: jest.fn(),
}));

jest.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: jest.fn(),
}));

jest.mock('../../context/CharacterContext', () => ({
  useCharacter: jest.fn(),
}));

jest.mock('../useAutoUpdate', () => ({
  useAutoUpdate: jest.fn(),
}));

import { renderHook, waitFor } from '@testing-library/react';
import { useAppInit } from '../useAppInit';
import { supabase } from '../../config/supabase';
import { loadCoreGameData, loadHeavyLoreData } from '../../utils/supabaseGameData';
import { useCharacter } from '../../context/CharacterContext';
import { useAutoUpdate } from '../useAutoUpdate';

const mockSetGameData = jest.fn();

const fakeSession = {
  access_token: 'tok',
  user: { id: 'user-123', user_metadata: { username: 'TestHeritier' } },
};

beforeEach(() => {
  jest.clearAllMocks();

  useCharacter.mockReturnValue({ setGameData: mockSetGameData });
  useAutoUpdate.mockReturnValue({ updateAvailable: false, applyUpdate: jest.fn() });

  const chain = {
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
  };
  supabase.from.mockReturnValue(chain);

  supabase.auth.onAuthStateChange.mockReturnValue({
    data: { subscription: { unsubscribe: jest.fn() } },
  });
});

describe('useAppInit — Fallback profil', () => {
  it('crée un profil par fallback si session sans profil', async () => {
    supabase.auth.getSession.mockResolvedValue({
      data: { session: fakeSession },
      error: null,
    });

    loadCoreGameData.mockResolvedValue({ some: 'data' });
    loadHeavyLoreData.mockResolvedValue(Promise.resolve({ some: 'heavy' }));

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

    loadCoreGameData.mockResolvedValue({ some: 'data' });
    loadHeavyLoreData.mockResolvedValue(Promise.resolve({ some: 'heavy' }));

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
