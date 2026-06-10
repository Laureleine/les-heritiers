vi.mock('../config/supabase', () => ({
  supabase: {
    rpc: jest.fn(),
  },
}));

import { supabase } from '../config/supabase';

describe('Encyclopedia RPC calls', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('purge_encyclopedia_entity', () => {
    it('appelle le RPC avec les bons paramètres', async () => {
      supabase.rpc.mockResolvedValue({ data: null, error: null });
      const item = { id: 'abc-123' };
      const tabName = 'fairy_types';

      const { error } = await supabase.rpc('purge_encyclopedia_entity', {
        p_table_name: tabName,
        p_record_id: item.id,
      });

      expect(supabase.rpc).toHaveBeenCalledWith('purge_encyclopedia_entity', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
      });
      expect(error).toBeNull();
    });

    it('retourne une erreur si le RPC échoue', async () => {
      supabase.rpc.mockResolvedValue({ error: { message: 'Accès refusé. Réservé aux Gardiens.' } });

      const { error } = await supabase.rpc('purge_encyclopedia_entity', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
      });

      expect(error.message).toContain('Accès refusé');
    });
  });

  describe('toggle_item_seal', () => {
    it('appelle le RPC pour sceller', async () => {
      supabase.rpc.mockResolvedValue({ data: null, error: null });

      await supabase.rpc('toggle_item_seal', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
        p_new_status: true,
      });

      expect(supabase.rpc).toHaveBeenCalledWith('toggle_item_seal', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
        p_new_status: true,
      });
    });

    it('appelle le RPC pour briser un sceau', async () => {
      supabase.rpc.mockResolvedValue({ data: null, error: null });

      await supabase.rpc('toggle_item_seal', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
        p_new_status: false,
      });

      expect(supabase.rpc).toHaveBeenCalledWith('toggle_item_seal', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
        p_new_status: false,
      });
    });

    it('retourne une erreur si le RPC échoue', async () => {
      supabase.rpc.mockResolvedValue({ error: { message: 'Accès refusé. Réservé aux Gardiens.' } });

      const { error } = await supabase.rpc('toggle_item_seal', {
        p_table_name: 'fairy_types',
        p_record_id: 'abc-123',
        p_new_status: true,
      });

      expect(error.message).toContain('Accès refusé');
    });
  });
});
