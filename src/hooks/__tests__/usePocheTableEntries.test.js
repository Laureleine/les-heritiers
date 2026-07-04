vi.mock('../../config/supabase', () => ({
  supabase: { from: vi.fn() },
}));

import { renderHook, waitFor, act } from '@testing-library/react';
import { usePocheTableEntries } from '../usePocheTableEntries';
import { supabase } from '../../config/supabase';

const USER_ID = 'user-abc';

function setupSupabaseMock({ insertSpy, updateSpy } = {}) {
  supabase.from.mockImplementation((table) => {
    if (table === 'poche_table_entries') {
      return {
        select: () => ({
          eq: () => ({
            neq: () => ({ order: () => Promise.resolve({ data: [], error: null }) }),
          }),
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

describe('usePocheTableEntries — ajouterDirectement/approuver/refuser', () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it('ajouterDirectement sans editingId insère avec is_official=true et status=approved', async () => {
    const insertSpy = vi.fn();
    setupSupabaseMock({ insertSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => usePocheTableEntries(session));
    await waitFor(() => expect(result.current.loaded).toBe(true));

    await act(async () => {
      await result.current.ajouterDirectement({ tableName: 'fouille_ordinaire', valueM: 'Un mouchoir', valueF: '', weight: 5 });
    });

    expect(insertSpy).toHaveBeenCalledWith(expect.objectContaining({
      table_name: 'fouille_ordinaire',
      value_m: 'Un mouchoir',
      is_official: true,
      status: 'approved',
      created_by: USER_ID,
      approved_by: USER_ID,
    }));
  });

  it('ajouterDirectement avec editingId met à jour uniquement le contenu, sans toucher is_official/status', async () => {
    const updateSpy = vi.fn();
    setupSupabaseMock({ updateSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => usePocheTableEntries(session));
    await waitFor(() => expect(result.current.loaded).toBe(true));

    await act(async () => {
      await result.current.ajouterDirectement({ tableName: 'fouille_ordinaire', valueM: 'Corrigé', valueF: '', weight: 8 }, 'entry-42');
    });

    expect(updateSpy).toHaveBeenCalledWith(
      { value_m: 'Corrigé', value_f: null, weight: 8 },
      'entry-42',
    );
    const [payload] = updateSpy.mock.calls[0];
    expect(payload).not.toHaveProperty('is_official');
    expect(payload).not.toHaveProperty('status');
  });

  it('approuver passe le statut à approved avec approved_by', async () => {
    const updateSpy = vi.fn();
    setupSupabaseMock({ updateSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => usePocheTableEntries(session));
    await waitFor(() => expect(result.current.loaded).toBe(true));

    await act(async () => {
      await result.current.approuver({ id: 'entry-1' });
    });

    const [payload, id] = updateSpy.mock.calls[0];
    expect(id).toBe('entry-1');
    expect(payload.status).toBe('approved');
    expect(payload.approved_by).toBe(USER_ID);
  });

  it('refuser passe le statut à rejected avec le motif', async () => {
    const updateSpy = vi.fn();
    setupSupabaseMock({ updateSpy });
    const session = { user: { id: USER_ID } };

    const { result } = renderHook(() => usePocheTableEntries(session));
    await waitFor(() => expect(result.current.loaded).toBe(true));

    await act(async () => {
      await result.current.refuser({ id: 'entry-1' }, 'Doublon');
    });

    expect(updateSpy).toHaveBeenCalledWith({ status: 'rejected', reject_reason: 'Doublon' }, 'entry-1');
  });
});
