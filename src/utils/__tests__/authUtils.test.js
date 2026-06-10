vi.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
    },
  },
}));

import { getCurrentUser, requireCurrentUser } from '../authUtils';
import { supabase } from '../../config/supabase';

describe('getCurrentUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
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

  it('propage l\'exception si Supabase jette une erreur', async () => {
    supabase.auth.getUser.mockRejectedValue(new Error('Network failure'));
    await expect(getCurrentUser()).rejects.toThrow('Network failure');
  });
});

describe('requireCurrentUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retourne l\'utilisateur quand connecté', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: { id: 'user-1' } }, error: null });
    const user = await requireCurrentUser();
    expect(user.id).toBe('user-1');
  });

  it('lève une erreur avec le message par défaut', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: null }, error: null });
    await expect(requireCurrentUser()).rejects.toThrow('Vous devez être connecté pour effectuer cette action.');
  });

  it('utilise le message d\'erreur personnalisé', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: null }, error: null });
    await expect(requireCurrentUser('Message custom')).rejects.toThrow('Message custom');
  });
});
