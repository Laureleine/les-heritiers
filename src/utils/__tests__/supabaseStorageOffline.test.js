vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    auth: { getUser: vi.fn() },
  },
}));

vi.mock('../../utils/authUtils', () => ({
  getCurrentUser: vi.fn(),
  requireCurrentUser: vi.fn(),
}));

vi.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: vi.fn(),
}));

import { getUserCharacters } from '../supabaseStorage';
import { supabase } from '../../config/supabase';
import { getCurrentUser } from '../../utils/authUtils';

const OFFLINE_KEY = 'heritiers_character_cache';

describe('supabaseStorage — getOfflineMirror (via getUserCharacters sans session)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    getCurrentUser.mockResolvedValue(null);
  });

  it('retourne [] si le localStorage contient du JSON invalide', async () => {
    localStorage.setItem(OFFLINE_KEY, '{ pas du json valide !!!');
    const result = await getUserCharacters();
    expect(result).toEqual([]);
  });

  it('retourne [] si le localStorage est vide', async () => {
    const result = await getUserCharacters();
    expect(result).toEqual([]);
  });

  it('retourne le cache si le localStorage contient des données valides', async () => {
    const cached = [{ id: 'char-1', nom: 'Maëlys' }];
    localStorage.setItem(OFFLINE_KEY, JSON.stringify(cached));
    const result = await getUserCharacters();
    expect(result).toEqual(cached);
  });
});

describe('supabaseStorage — mode offline (erreur réseau)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('retombe sur le cache local si Supabase rejette la requête', async () => {
    const cached = [{ id: 'char-1', nom: 'Fenryr' }];
    localStorage.setItem(OFFLINE_KEY, JSON.stringify(cached));

    getCurrentUser.mockResolvedValue({ id: 'user-1' });
    supabase.from.mockImplementation(() => { throw new Error('Network error'); });

    const result = await getUserCharacters();
    expect(result).toEqual(cached);
  });

  it('retombe sur [] si Supabase rejette et le cache est corrompu', async () => {
    localStorage.setItem(OFFLINE_KEY, 'json corrompu');

    getCurrentUser.mockResolvedValue({ id: 'user-1' });
    supabase.from.mockImplementation(() => { throw new Error('Network error'); });

    const result = await getUserCharacters();
    expect(result).toEqual([]);
  });
});
