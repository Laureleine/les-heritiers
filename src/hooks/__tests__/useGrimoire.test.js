vi.mock('../../config/supabase', () => ({
  supabase: { from: vi.fn() },
}));

vi.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: vi.fn(),
}));

import { renderHook, waitFor, act } from '@testing-library/react';
import { useGrimoire } from '../useGrimoire';
import { supabase } from '../../config/supabase';
import { showInAppNotification } from '../../utils/SystemeServices';

const CHAR_ID = 'char-1';
const PLAYER_ID = 'player-1';
const CERCLE_ID = 'cercle-1';

function makeChain(result = { data: null, error: null }) {
  const chain = {};
  ['select', 'eq', 'is', 'or', 'in', 'update', 'insert', 'delete', 'single', 'order', 'filter'].forEach(m => {
    chain[m] = vi.fn().mockReturnValue(chain);
  });
  chain.then = (res, rej) => Promise.resolve(result).then(res, rej);
  chain.catch = (fn) => Promise.resolve(result).catch(fn);
  return chain;
}

function setupInitMock() {
  supabase.from.mockReturnValue(makeChain({ data: [], error: null }));
}

describe('useGrimoire — toggleShare', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('refuse de partager et notifie quand cercleId est null', async () => {
    const { result } = renderHook(() => useGrimoire(CHAR_ID, null, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));
    vi.clearAllMocks();

    await act(async () => {
      await result.current.toggleShare('note-1', false);
    });

    expect(supabase.from).not.toHaveBeenCalled();
    expect(showInAppNotification).toHaveBeenCalledWith(
      expect.stringContaining('aucun Cercle'),
      'warning'
    );
  });
});

describe('useGrimoire — createEntry', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('insère player_id dans le payload', async () => {
    const returnedNote = { id: 'note-new', type: 'note', player_id: PLAYER_ID, content: {}, character_id: CHAR_ID, cercle_id: null };
    const { result } = renderHook(() => useGrimoire(CHAR_ID, CERCLE_ID, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const actionChain = makeChain({ data: returnedNote, error: null });
    supabase.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.createEntry('note', { titre: 'Test' });
    });

    expect(actionChain.insert).toHaveBeenCalledWith([
      expect.objectContaining({ player_id: PLAYER_ID }),
    ]);
  });
});

describe('useGrimoire — updateEntry', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('applique .eq("player_id", playerId) pour ne modifier que ses propres entrées', async () => {
    const returnedNote = { id: 'note-1', type: 'note', content: { titre: 'Updated' }, character_id: CHAR_ID };
    const { result } = renderHook(() => useGrimoire(CHAR_ID, CERCLE_ID, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const actionChain = makeChain({ data: returnedNote, error: null });
    supabase.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.updateEntry('note-1', 'note', { titre: 'Updated' });
    });

    expect(actionChain.eq).toHaveBeenCalledWith('player_id', PLAYER_ID);
  });
});

describe('useGrimoire — deleteEntry', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('applique .eq("player_id", playerId) pour ne supprimer que ses propres entrées', async () => {
    const { result } = renderHook(() => useGrimoire(CHAR_ID, CERCLE_ID, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const actionChain = makeChain({ error: null });
    supabase.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.deleteEntry('note-1', 'note');
    });

    expect(actionChain.eq).toHaveBeenCalledWith('player_id', PLAYER_ID);
  });
});
