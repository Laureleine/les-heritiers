import 'fake-indexeddb/auto';

vi.mock('../supabase', () => ({ supabase: { from: vi.fn(), auth: { getSession: vi.fn() } } }));

import { localDb } from '../localDb';

describe('localDb — schéma Dexie', () => {
  beforeEach(async () => {
    await Promise.all([
      localDb.game_data.clear(),
      localDb.auth_session.clear(),
      localDb.sync_queue.clear(),
      localDb.meta.clear(),
    ]);
  });

  it('stocke et récupère un dataset game_data', async () => {
    await localDb.game_data.put({ key: 'fairy_types', data: [{ id: 1, name: 'Sylvaine' }] });
    const entry = await localDb.game_data.get('fairy_types');
    expect(entry).toEqual({ key: 'fairy_types', data: [{ id: 1, name: 'Sylvaine' }] });
  });

  it('stocke et récupère une session auth', async () => {
    await localDb.auth_session.put({ id: 'current', session: { access_token: 'tok-123' } });
    const entry = await localDb.auth_session.get('current');
    expect(entry.session.access_token).toBe('tok-123');
  });

  it('enqueue et lit depuis sync_queue', async () => {
    const id = await localDb.sync_queue.add({
      table_name: 'characters',
      operation: 'update',
      payload: { id: 'c1', nom: 'Mab' },
      timestamp: 1000,
      attempts: 0,
      status: 'pending',
    });
    const entry = await localDb.sync_queue.get(id);
    expect(entry.table_name).toBe('characters');
    expect(entry.status).toBe('pending');
  });

  it('stocke les métadonnées de sync', async () => {
    await localDb.meta.put({ key: 'fairy_types', lastSync: 9999 });
    const m = await localDb.meta.get('fairy_types');
    expect(m.lastSync).toBe(9999);
  });
});
