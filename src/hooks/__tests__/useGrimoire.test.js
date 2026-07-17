vi.mock('../../config/db', () => ({
  db: {
    from: vi.fn(),
    cacheUserData: vi.fn().mockResolvedValue(undefined),
    setUserId: vi.fn(),
  },
}));

vi.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: vi.fn(),
}));

import { renderHook, waitFor, act } from '@testing-library/react';
import { useGrimoire } from '../useGrimoire';
import { db } from '../../config/db';
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
  db.from.mockReturnValue(makeChain({ data: [], error: null }));
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

    expect(db.from).not.toHaveBeenCalled();
    expect(showInAppNotification).toHaveBeenCalledWith(
      expect.stringContaining('aucun Cercle'),
      'warning'
    );
  });
});

describe('useGrimoire — addNote', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('insère player_id dans le payload', async () => {
    const returnedNote = { id: 'note-new', type: 'note', player_id: PLAYER_ID, content: {}, character_id: CHAR_ID, cercle_id: null };
    const { result } = renderHook(() => useGrimoire(CHAR_ID, CERCLE_ID, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));

    // data must be an array: addNote() calls fetchGrimoire() on success,
    // which receives this same chain and runs data.filter(...)
    const actionChain = makeChain({ data: [returnedNote], error: null });
    db.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.addNote('note', { titre: 'Test' });
    });

    expect(actionChain.insert).toHaveBeenCalledWith([
      expect.objectContaining({ player_id: PLAYER_ID }),
    ]);
  });
});

describe('useGrimoire — updateNote', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('applique .eq("id", noteId) pour modifier la note', async () => {
    const { result } = renderHook(() => useGrimoire(CHAR_ID, CERCLE_ID, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const actionChain = makeChain({ data: null, error: null });
    db.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.updateNote('note-1', { content: { titre: 'Updated' } });
    });

    expect(actionChain.eq).toHaveBeenCalledWith('id', 'note-1');
    expect(actionChain.eq).toHaveBeenCalledWith('player_id', PLAYER_ID);
  });
});

describe('useGrimoire — deleteNote', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('refuse de supprimer hors ligne et notifie', async () => {
    Object.defineProperty(navigator, 'onLine', { value: false, writable: true, configurable: true });

    const { result } = renderHook(() => useGrimoire(CHAR_ID, CERCLE_ID, PLAYER_ID));
    await waitFor(() => expect(result.current.loading).toBe(false));
    vi.clearAllMocks();

    await act(async () => {
      await result.current.deleteNote('note-1');
    });

    expect(db.from).not.toHaveBeenCalled();
    expect(showInAppNotification).toHaveBeenCalledWith(
      expect.stringContaining('hors ligne'),
      'warning'
    );

    Object.defineProperty(navigator, 'onLine', { value: true, writable: true, configurable: true });
  });
});
