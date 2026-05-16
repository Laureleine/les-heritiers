jest.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
  },
}));

import { getCurrentUser, requireCurrentUser } from '../authUtils';
import { supabase } from '../../config/supabase';

describe('getCurrentUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('retourne l\'utilisateur quand connecté', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: { id: 'user-1', email: 'test@test.com' } }, error: null });
    const user = await getCurrentUser();
    expect(user).toBeDefined();
    expect(user.id).toBe('user-1');
  });

  it('retourne null quand pas connecté', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: null }, error: null });
    const user = await getCurrentUser();
    expect(user).toBeNull();
  });

  it('retourne null en cas d\'erreur Supabase', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: null }, error: { message: 'Auth error' } });
    const user = await getCurrentUser();
    expect(user).toBeNull();
  });
});

describe('requireCurrentUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('retourne l\'utilisateur quand connecté', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: { id: 'user-1' } }, error: null });
    const user = await requireCurrentUser();
    expect(user.id).toBe('user-1');
  });

  it('lève une erreur quand pas connecté', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: null }, error: null });
    await expect(requireCurrentUser()).rejects.toThrow('Vous devez être connecté pour effectuer cette action.');
  });

  it('utilise le message d\'erreur personnalisé', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: null }, error: null });
    await expect(requireCurrentUser('Message custom')).rejects.toThrow('Message custom');
  });
});
