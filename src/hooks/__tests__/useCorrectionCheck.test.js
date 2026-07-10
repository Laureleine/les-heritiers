vi.mock('../../config/supabase', () => ({
  supabase: { from: vi.fn() },
}));

vi.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: vi.fn(),
}));

vi.mock('../../utils/authRoles', () => ({
  isSuperAdmin: vi.fn(),
}));

import { renderHook, waitFor, act } from '@testing-library/react';
import { useCorrectionCheck } from '../useCorrectionCheck';
import { supabase } from '../../config/supabase';
import { isSuperAdmin } from '../../utils/authRoles';

const USER_ID = 'user-42';

function makeChain(result = { data: null, error: null }) {
  const chain = {};
  ['select', 'eq', 'is', 'in', 'update', 'insert', 'delete', 'filter', 'order'].forEach(m => {
    chain[m] = vi.fn().mockReturnValue(chain);
  });
  chain.then = (res, rej) => Promise.resolve(result).then(res, rej);
  chain.catch = (fn) => Promise.resolve(result).catch(fn);
  return chain;
}

function setupInitMock() {
  supabase.from.mockReturnValue(makeChain({ data: [], error: null }));
}

const userProfile = { id: USER_ID };

describe('useCorrectionCheck — respondToCorrection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    isSuperAdmin.mockReturnValue(false);
    setupInitMock();
  });

  it('applique .eq("user_id", userId) pour ne modifier que ses propres personnages', async () => {
    const { result } = renderHook(() => useCorrectionCheck(userProfile));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const actionChain = makeChain({ error: null });
    supabase.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.respondToCorrection('char-1', true);
    });

    expect(actionChain.eq).toHaveBeenCalledWith('user_id', USER_ID);
  });
});

describe('useCorrectionCheck — markCorrected', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    setupInitMock();
  });

  it('ne fait aucun appel Supabase si isAdmin est false', async () => {
    isSuperAdmin.mockReturnValue(false);
    const { result } = renderHook(() => useCorrectionCheck(userProfile));
    await waitFor(() => expect(result.current.loading).toBe(false));

    vi.clearAllMocks();

    await act(async () => {
      await result.current.markCorrected('char-1');
    });

    expect(supabase.from).not.toHaveBeenCalled();
  });

  it('appelle Supabase avec .eq("id", characterId) si isAdmin est true', async () => {
    isSuperAdmin.mockReturnValue(true);
    setupInitMock();
    const { result } = renderHook(() => useCorrectionCheck(userProfile));
    await waitFor(() => expect(result.current.loading).toBe(false));

    const actionChain = makeChain({ error: null });
    supabase.from.mockReturnValue(actionChain);

    await act(async () => {
      await result.current.markCorrected('char-1');
    });

    expect(supabase.from).toHaveBeenCalledWith('characters');
    expect(actionChain.eq).toHaveBeenCalledWith('id', 'char-1');
  });
});
