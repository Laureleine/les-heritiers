jest.mock('../config/supabase', () => ({
  supabase: {
    from: jest.fn(),
    rpc: jest.fn().mockResolvedValue({ data: null, error: null }),
    channel: jest.fn(() => ({
      on: jest.fn().mockReturnThis(),
      subscribe: jest.fn().mockResolvedValue({}),
    })),
    removeChannel: jest.fn(),
    getSession: jest.fn().mockResolvedValue({ data: { session: null }, error: null }),
  },
}));

jest.mock('../utils/supabaseStorage', () => ({
  getUserCharacters: jest.fn().mockResolvedValue([]),
  getPublicCharacters: jest.fn().mockResolvedValue([]),
  getAllCharactersAdmin: jest.fn().mockResolvedValue([]),
  deleteCharacterFromSupabase: jest.fn(),
  toggleCharacterVisibility: jest.fn(),
  saveCharacterToSupabase: jest.fn(),
  getFullCharacter: jest.fn(),
}));

jest.mock('../utils/SystemeServices', () => ({
  showInAppNotification: jest.fn(),
  translateError: jest.fn((e) => e?.message || 'Erreur'),
}));

jest.mock('../utils/pdfGenerator', () => ({ exportToPDF: jest.fn() }));
jest.mock('../utils/utils', () => ({ exportCharacter: jest.fn() }));
jest.mock('../utils/lockUtils', () => ({ isCharacterScelle: jest.fn() }));
jest.mock('../utils/characterEngine', () => ({ characterReducer: jest.fn() }));
jest.mock('../utils/repairJournaux', () => ({
  mapDbCharForReconstruction: jest.fn(),
  journalNeedsRepair: jest.fn(),
  buildRepairedJournal: jest.fn(),
  computeXpDepenseFromJournal: jest.fn(),
}));
jest.mock('../utils/supabaseGameData', () => ({
  loadFairyTypes: jest.fn(),
  loadSocialItems: jest.fn(),
}));
jest.mock('./ConfirmModal', () => () => null);
jest.mock('./cercle/GrimoirePersonnel', () => () => null);
jest.mock('./CharacterCard', () => () => null);
jest.mock('../config/icons', () => ({
  Bug: 'i', Info: 'i', User: 'i', Users: 'i', LogOut: 'i',
  Globe: 'i', Book: 'i', Crown: 'i', Gift: 'i', Plus: 'i',
  X: 'i', BarChart2: 'i', Eye: 'i', Search: 'i',
  AlertTriangle: 'i', CheckCircle: 'i',
}));

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { supabase } from '../config/supabase';
import CharacterList from './CharacterList';

const mockSession = { user: { id: 'user-1' }, access_token: 'token' };
const mockProfile = { profile: { role: 'user' } };

function makeChain() {
  const chain = { then: undefined };
  chain.select = jest.fn(() => chain);
  chain.eq = jest.fn(() => chain);
  chain.single = jest.fn(() => chain);
  chain.order = jest.fn(() => chain);
  chain.insert = jest.fn(() => chain);
  chain.delete = jest.fn(() => chain);
  chain.gte = jest.fn(() => chain);
  chain.limit = jest.fn(() => chain);
  chain.update = jest.fn(() => Promise.resolve({ data: null, error: null }));
  chain.then = jest.fn((res) => {
    res({ data: [], error: null });
    return Promise.resolve();
  });
  chain.catch = jest.fn();
  return chain;
}

describe('CharacterList RPC calls', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    supabase.from.mockReturnValue(makeChain());
  });

  it('appelle check_pending_gifts RPC au chargement', async () => {
    render(<CharacterList
      session={mockSession}
      userProfile={mockProfile}
      onSignOut={() => {}}
    />);

    await waitFor(() => {
      expect(supabase.rpc).toHaveBeenCalledWith('check_pending_gifts');
    });
  });

  it("n'appelle PAS getAllCharactersAdmin pour un simple user", async () => {
    const { getAllCharactersAdmin } = require('../utils/supabaseStorage');

    render(<CharacterList
      session={mockSession}
      userProfile={mockProfile}
      onSignOut={() => {}}
    />);

    await waitFor(() => {
      expect(getAllCharactersAdmin).not.toHaveBeenCalled();
    });
  });
});
