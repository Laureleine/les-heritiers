vi.mock('../../config/supabase', () => ({
  supabase: { from: vi.fn() },
}));

import { renderHook, waitFor, act } from '@testing-library/react';
import { useMenuPlats } from '../useMenuPlats';
import { supabase } from '../../config/supabase';

const USER_ID = 'user-abc';

function setupSupabaseMock({ insertSpy, updateSpy, selectEqSpy } = {}) {
  supabase.from.mockImplementation((table) => {
    if (table === 'menu_plats') {
      return {
        select: () => ({
          eq: (column, value) => {
            selectEqSpy?.(column, value);
            return {
              neq: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
              // Query "platsApprouves" (un seul .eq, pas de chaînage supplémentaire)
              then: (resolve) => resolve({ data: [], error: null }),
            };
          },
        }),
        insert: (payload) => {
          insertSpy?.(payload);
          return Promise.resolve({ error: null });
        },
        update: (payload) => ({
          eq: (_column, id) => {
            updateSpy?.(payload, id);
            return Promise.resolve({ error: null });
          },
        }),
      };
    }
    return { select: () => ({ eq: () => Promise.resolve({ data: [], error: null }) }) };
  });
}

describe('useMenuPlats — schéma harmonisé (status/created_by/approved_by/reject_reason)', () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it('reload interroge menu_plats avec les colonnes status/created_by (plus statut/auteur_id)', async () => {
    const selectEqSpy = vi.fn();
    setupSupabaseMock({ selectEqSpy });
    const session = { user: { id: USER_ID } };

    renderHook(() => useMenuPlats(session));

    await waitFor(() => {
      expect(selectEqSpy).toHaveBeenCalledWith('status', 'approved');
      expect(selectEqSpy).toHaveBeenCalledWith('created_by', USER_ID);
    });
  });

  it('proposer insère avec created_by (pas auteur_id)', async () => {
    const insertSpy = vi.fn();
    setupSupabaseMock({ insertSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => useMenuPlats(session));
    await waitFor(() => expect(result.current).toBeDefined());

    await act(async () => {
      await result.current.proposer({ nom: 'Potage Crécy', categorie: 'potage' });
    });

    expect(insertSpy).toHaveBeenCalledWith(expect.objectContaining({ nom: 'Potage Crécy', created_by: USER_ID }));
  });

  it('ajouterDirectement (sans editingId) insère avec status=approved et approved_by', async () => {
    const insertSpy = vi.fn();
    setupSupabaseMock({ insertSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => useMenuPlats(session));
    await waitFor(() => expect(result.current).toBeDefined());

    await act(async () => {
      await result.current.ajouterDirectement({ nom: 'Canard aux navets', categorie: 'volaille' });
    });

    expect(insertSpy).toHaveBeenCalledWith(expect.objectContaining({
      nom: 'Canard aux navets', status: 'approved', approved_by: USER_ID, created_by: USER_ID,
    }));
  });

  it('ajouterDirectement (avec editingId) met à jour la ligne existante', async () => {
    const updateSpy = vi.fn();
    setupSupabaseMock({ updateSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => useMenuPlats(session));
    await waitFor(() => expect(result.current).toBeDefined());

    await act(async () => {
      await result.current.ajouterDirectement({ nom: 'Canard modifié' }, 'plat-42');
    });

    const [payload, id] = updateSpy.mock.calls[0];
    expect(id).toBe('plat-42');
    expect(payload.nom).toBe('Canard modifié');
    expect(payload.status).toBe('approved');
  });

  it('approuver et refuser utilisent status/approved_by/reject_reason', async () => {
    const updateSpy = vi.fn();
    setupSupabaseMock({ updateSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => useMenuPlats(session));
    await waitFor(() => expect(result.current).toBeDefined());

    await act(async () => { await result.current.approuver({ id: 'plat-1' }); });
    expect(updateSpy).toHaveBeenCalledWith({ status: 'approved', approved_by: USER_ID }, 'plat-1');

    await act(async () => { await result.current.refuser({ id: 'plat-2' }, 'Hors thème'); });
    expect(updateSpy).toHaveBeenCalledWith({ status: 'rejected', reject_reason: 'Hors thème' }, 'plat-2');
  });
});
