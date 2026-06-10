vi.mock('../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    rpc: vi.fn().mockResolvedValue({ data: null, error: null }),
    channel: vi.fn(() => ({
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockResolvedValue({}),
    })),
    removeChannel: vi.fn(),
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
  },
}));

vi.mock('../utils/supabaseStorage', () => ({
  getUserCharacters: vi.fn().mockResolvedValue([]),
  getPublicCharacters: vi.fn().mockResolvedValue([]),
  getAllCharactersAdmin: vi.fn().mockResolvedValue([]),
  deleteCharacterFromSupabase: vi.fn(),
  toggleCharacterVisibility: vi.fn(),
  saveCharacterToSupabase: vi.fn(),
  getFullCharacter: vi.fn(),
}));

vi.mock('../utils/SystemeServices', () => ({
  showInAppNotification: vi.fn(),
  translateError: vi.fn((e) => e?.message || 'Erreur'),
}));

vi.mock('../utils/pdfGenerator', () => ({ exportToPDF: vi.fn() }));
vi.mock('../utils/utils', () => ({ exportCharacter: vi.fn() }));
vi.mock('../utils/lockUtils', () => ({ isCharacterScelle: vi.fn() }));
vi.mock('../utils/characterEngine', () => ({ characterReducer: vi.fn() }));
vi.mock('../utils/repairJournaux', () => ({
  mapDbCharForReconstruction: vi.fn(),
  journalNeedsRepair: vi.fn(),
  buildRepairedJournal: vi.fn(),
  computeXpDepenseFromJournal: vi.fn(),
}));
vi.mock('../utils/supabaseGameData', () => ({
  loadFairyTypes: vi.fn(),
  loadSocialItems: vi.fn(),
}));
vi.mock('./ConfirmModal', () => ({ default: () => null }));
vi.mock('./cercle/GrimoirePersonnel', () => ({ default: () => null }));
vi.mock('./CharacterCard', () => ({ default: () => null }));
vi.mock('../config/icons', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual };
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { supabase } from '../config/supabase';
import { getAllCharactersAdmin } from '../utils/supabaseStorage';
import CharacterList from './CharacterList';

const mockSession = { user: { id: 'user-1' }, access_token: 'token' };
const mockProfile = { profile: { role: 'user' } };

function makeChain() {
  const chain = { then: undefined };
  chain.select = vi.fn(() => chain);
  chain.eq = vi.fn(() => chain);
  chain.single = vi.fn(() => chain);
  chain.order = vi.fn(() => chain);
  chain.insert = vi.fn(() => chain);
  chain.delete = vi.fn(() => chain);
  chain.gte = vi.fn(() => chain);
  chain.limit = vi.fn(() => chain);
  chain.update = vi.fn(() => Promise.resolve({ data: null, error: null }));
  chain.then = vi.fn((res) => {
    res({ data: [], error: null });
    return Promise.resolve();
  });
  chain.catch = vi.fn();
  return chain;
}

describe('CharacterList RPC calls', () => {
  beforeEach(() => {
    vi.clearAllMocks();
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
    render(<CharacterList
      session={mockSession}
      userProfile={mockProfile}
      onSignOut={() => {}}
    />);

    await waitFor(() => {
      expect(getAllCharactersAdmin).not.toHaveBeenCalled();
    });
  });

  it('appelle getAllCharactersAdmin pour un super_admin', async () => {
    render(<CharacterList
      session={mockSession}
      userProfile={{ profile: { role: 'super_admin' } }}
      onSignOut={() => {}}
    />);

    await waitFor(() => {
      expect(getAllCharactersAdmin).toHaveBeenCalled();
    });
  });

  it('rend sans planter avec le profil admin', async () => {
    const { container } = render(<CharacterList
      session={mockSession}
      userProfile={{ profile: { role: 'super_admin' } }}
      onSignOut={() => {}}
    />);

    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });

  it('rend sans planter avec un profil gardien', async () => {
    const { container } = render(<CharacterList
      session={mockSession}
      userProfile={{ profile: { role: 'gardien' } }}
      onSignOut={() => {}}
    />);

    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });
});
