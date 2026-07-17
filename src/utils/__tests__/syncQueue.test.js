// src/utils/__tests__/syncQueue.test.js
import 'fake-indexeddb/auto';

vi.mock('../../config/supabase', () => ({
  supabase: { from: vi.fn(), rpc: vi.fn() },
}));
vi.mock('../../config/localDb', async () => {
  const { localDb } = await import('../../config/localDb');
  return { localDb };
});

import { enqueueOperation, syncAll, getSyncErrors } from '../syncQueue';
import { localDb } from '../../config/localDb';
import { supabase } from '../../config/supabase';

const makeUpsertChain = (result) => {
  const c = { upsert: vi.fn(), insert: vi.fn(), update: vi.fn(), eq: vi.fn() };
  c.upsert.mockReturnValue({ then: (r) => Promise.resolve(result).then(r) });
  c.insert.mockReturnValue({ then: (r) => Promise.resolve(result).then(r) });
  c.update.mockReturnValue({ eq: vi.fn().mockReturnValue({ then: (r) => Promise.resolve(result).then(r) }) });
  return c;
};

describe('SyncQueue', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    await localDb.sync_queue.clear();
  });

  it('enqueueOperation ajoute une entrée pending dans sync_queue', async () => {
    await enqueueOperation('characters', 'upsert', { id: 'c1', nom: 'Mab' });
    const all = await localDb.sync_queue.toArray();
    expect(all).toHaveLength(1);
    expect(all[0].table_name).toBe('characters');
    expect(all[0].status).toBe('pending');
  });

  it('syncAll rejoue les opérations pending et les supprime', async () => {
    supabase.from.mockReturnValue(makeUpsertChain({ data: { id: 'c1' }, error: null }));
    await localDb.sync_queue.add({
      table_name: 'characters', operation: 'upsert',
      payload: { id: 'c1', nom: 'Mab' },
      timestamp: Date.now(), attempts: 0, status: 'pending',
    });
    await syncAll();
    const remaining = await localDb.sync_queue.toArray();
    expect(remaining).toHaveLength(0);
    expect(supabase.from).toHaveBeenCalledWith('characters');
  });

  it('syncAll incrémente attempts en cas d\'échec', async () => {
    supabase.from.mockReturnValue(makeUpsertChain({ data: null, error: { message: 'Network error' } }));
    await localDb.sync_queue.add({
      table_name: 'characters', operation: 'upsert',
      payload: { id: 'c1' },
      timestamp: Date.now(), attempts: 0, status: 'pending',
    });
    await syncAll();
    const entries = await localDb.sync_queue.toArray();
    expect(entries[0].attempts).toBe(1);
    expect(entries[0].status).toBe('pending');
  });

  it('syncAll passe en failed après 3 tentatives', async () => {
    supabase.from.mockReturnValue(makeUpsertChain({ data: null, error: { message: 'error' } }));
    await localDb.sync_queue.add({
      table_name: 'bug_reports', operation: 'insert',
      payload: { title: 'Bug' },
      timestamp: Date.now(), attempts: 2, status: 'pending',
    });
    await syncAll();
    const entries = await localDb.sync_queue.toArray();
    expect(entries[0].status).toBe('failed');
  });

  it('getSyncErrors retourne les entrées failed', async () => {
    await localDb.sync_queue.add({
      table_name: 'characters', operation: 'upsert',
      payload: {}, timestamp: Date.now(), attempts: 3, status: 'failed',
    });
    const errors = await getSyncErrors();
    expect(errors).toHaveLength(1);
    expect(errors[0].status).toBe('failed');
  });
});
