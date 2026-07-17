// src/config/__tests__/db.test.js
import 'fake-indexeddb/auto';

vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn(),
    auth: { getSession: vi.fn(), onAuthStateChange: vi.fn(), signOut: vi.fn() },
    rpc: vi.fn(),
  },
}));

vi.mock('../../utils/syncQueue', () => ({
  enqueueOperation: vi.fn().mockResolvedValue(undefined),
}));

import { db } from '../db';
import { localDb } from '../localDb';
import { supabase } from '../supabase';
import { enqueueOperation } from '../../utils/syncQueue';

const mockChain = (result) => {
  const c = {};
  ['select','eq','or','in','order','filter','limit','single','upsert'].forEach(m => {
    c[m] = vi.fn().mockReturnValue(c);
  });
  c.then = (r) => Promise.resolve(result).then(r);
  return c;
};

describe('db — couche proxy', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    await localDb.game_data.clear();
    await localDb.user_data.clear();
    await localDb.auth_session.clear();
    // Simuler online par défaut
    Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
  });

  describe('en ligne', () => {
    it('délègue db.from() à supabase', async () => {
      const chain = mockChain({ data: [{ id: 1 }], error: null });
      supabase.from.mockReturnValue(chain);

      const result = await db.from('fairy_types').select('*');
      expect(supabase.from).toHaveBeenCalledWith('fairy_types');
    });

    it('db.rpc() délègue à supabase', async () => {
      supabase.rpc.mockResolvedValue({ data: [], error: null });
      await db.rpc('get_admin_users', {});
      expect(supabase.rpc).toHaveBeenCalledWith('get_admin_users', {});
    });

    it('db.auth.getSession() appelle supabase et met en cache dans Dexie', async () => {
      supabase.auth.getSession.mockResolvedValue({
        data: { session: { access_token: 'tok' } }, error: null
      });
      const result = await db.auth.getSession();
      expect(result.data.session.access_token).toBe('tok');
      const cached = await localDb.auth_session.get('current');
      expect(cached.session.access_token).toBe('tok');
    });
  });

  describe('hors ligne', () => {
    beforeEach(() => {
      Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
    });

    it('db.from(game_data table) lit depuis Dexie', async () => {
      await localDb.game_data.put({ key: 'fairy_types', data: [{ id: 1, name: 'Sylvaine' }] });
      const result = await db.from('fairy_types').select('*');
      expect(result.data).toEqual([{ id: 1, name: 'Sylvaine' }]);
      expect(supabase.from).not.toHaveBeenCalled();
    });

    it('db.from(user_data table) lit depuis Dexie', async () => {
      db.setUserId('user-1');
      await localDb.user_data.put({ key: 'heritier_notes', user_id: 'user-1', data: [{ id: 'n1', content: 'Note' }] });
      const result = await db.from('heritier_notes').select('*').eq('character_id', 'c1');
      expect(result.data).toEqual([{ id: 'n1', content: 'Note' }]);
    });

    it('db.auth.getSession() lit depuis Dexie.auth_session', async () => {
      await localDb.auth_session.put({ id: 'current', session: { access_token: 'cached-tok' } });
      const result = await db.auth.getSession();
      expect(result.data.session.access_token).toBe('cached-tok');
      expect(supabase.auth.getSession).not.toHaveBeenCalled();
    });

    it('db.rpc() retourne erreur offline', async () => {
      const result = await db.rpc('get_admin_users', {});
      expect(result.error.message).toMatch(/hors ligne/i);
    });

    it('insert sur table writable enqueue et stocke localement', async () => {
      db.setUserId('user-1');
      await db.from('bug_reports').insert([{ title: 'Bug test', user_id: 'user-1' }]);
      expect(enqueueOperation).toHaveBeenCalledWith('bug_reports', 'insert', expect.objectContaining({ title: 'Bug test' }));
    });
  });
});
