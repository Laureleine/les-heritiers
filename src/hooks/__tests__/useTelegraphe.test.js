vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    channel: vi.fn(),
    removeChannel: vi.fn(),
  },
}));

import { renderHook, waitFor, act } from '@testing-library/react';
import { useTelegraphe } from '../useTelegraphe';
import { supabase } from '../../config/supabase';

const USER_ID = 'user-abc';
const CHANNEL_ID = 'chan-1';
const T0 = '2026-07-01T10:00:00.000Z';

function setupSupabaseMock(channelRow) {
  supabase.from.mockImplementation((table) => {
    if (table === 'chat_channels') {
      return {
        select: () => ({ or: () => ({ order: () => Promise.resolve({ data: [{ ...channelRow }], error: null }) }) }),
        update: (patch) => ({
          eq: () => {
            Object.assign(channelRow, patch);
            return Promise.resolve({ error: null });
          },
        }),
      };
    }
    if (table === 'chat_messages') {
      return {
        insert: () => Promise.resolve({ error: null }),
        select: () => ({ eq: () => ({ order: () => Promise.resolve({ data: [], error: null }) }) }),
      };
    }
    // cercles, cercle_membres, etc.
    return { select: () => ({ eq: () => Promise.resolve({ data: [], error: null }) }) };
  });

  supabase.channel.mockReturnValue({
    on: vi.fn().mockReturnThis(),
    subscribe: vi.fn().mockReturnThis(),
  });
}

describe('useTelegraphe — badge non-lu sur ses propres messages', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
  });

  it("ne marque pas un canal privé comme non-lu après l'envoi de son propre message", async () => {
    const channelRow = {
      id: CHANNEL_ID, type: 'private', name: 'Correspondance',
      participant_1: USER_ID, participant_2: 'friend-id',
      status: 'open', last_message_at: T0,
    };
    setupSupabaseMock(channelRow);

    // Le canal a déjà été lu jusqu'à T0
    window.localStorage.setItem(
      `telegraphe_read_${USER_ID}_${CHANNEL_ID}`,
      new Date(new Date(T0).getTime() + 1).toISOString()
    );

    const session = { user: { id: USER_ID } };
    const userProfile = { profile: { role: 'user' } };

    const { result, unmount } = renderHook(() => useTelegraphe(session, userProfile));

    await waitFor(() => expect(result.current.channels).toHaveLength(1));
    expect(result.current.channels[0].has_unread).toBe(false);

    // On se place sur le canal, comme si on venait de l'ouvrir (copie indépendante,
    // comme un vrai objet React state — les mutations DB ne le modifient pas rétroactivement)
    act(() => { result.current.setActiveChannel({ ...channelRow }); });

    // On envoie son propre message
    await act(async () => {
      await result.current.sendReply('Bonjour !');
    });

    unmount();

    // Nouveau montage du hook (ex: rechargement de page) : ne doit pas
    // remarquer le canal comme non-lu à cause de son propre message.
    const { result: reloaded } = renderHook(() => useTelegraphe(session, userProfile));
    await waitFor(() => expect(reloaded.current.channels).toHaveLength(1));

    const updated = reloaded.current.channels.find(c => c.id === CHANNEL_ID);
    expect(updated.has_unread).toBe(false);
  });
});
