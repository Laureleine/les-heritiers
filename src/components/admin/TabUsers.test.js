vi.mock('../../config/supabase', () => ({
  supabase: {
    from: vi.fn(),
    rpc: vi.fn().mockResolvedValue({ data: [], error: null }),
  },
}));

vi.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: vi.fn(),
}));

vi.mock('lucide-react', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual };
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { supabase } from '../../config/supabase';
import TabUsers from './TabUsers';
import { UserContext } from '../../context/UserContext';

const mockSession = { user: { id: 'user-123' } };

function makeChain(role) {
  const chain = { then: undefined };
  chain.select = vi.fn(() => chain);
  chain.eq = vi.fn(() => chain);
  chain.single = vi.fn(() => Promise.resolve({ data: { role }, error: null }));
  chain.update = vi.fn(() => Promise.resolve({ data: null, error: null }));
  chain.order = vi.fn(() => chain);
  chain.then = vi.fn((res) => {
    res({ data: [], error: null });
    return Promise.resolve();
  });
  chain.catch = vi.fn();
  return chain;
}

function renderWithContext() {
  return render(
    <UserContext.Provider value={{ session: mockSession, userProfile: null }}>
      <TabUsers />
    </UserContext.Provider>
  );
}

describe('TabUsers role-based data fetching', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('appelle get_admin_users RPC quand le profil est super_admin', async () => {
    supabase.from.mockReturnValue(makeChain('super_admin'));
    renderWithContext();

    await waitFor(() => {
      expect(supabase.rpc).toHaveBeenCalledWith('get_admin_users');
    });
  });

  it('appelle profiles.select basique quand le profil est un simple user', async () => {
    supabase.from.mockReturnValue(makeChain('user'));
    renderWithContext();

    await waitFor(() => {
      const profileCalls = supabase.from.mock.calls
        .filter(([table]) => table === 'profiles');
      expect(profileCalls.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("n'appelle PAS get_admin_users RPC pour un simple user", async () => {
    supabase.from.mockReturnValue(makeChain('user'));
    renderWithContext();

    await waitFor(() => {
      expect(supabase.rpc).not.toHaveBeenCalledWith('get_admin_users');
    });
  });

  it("n'appelle PAS get_admin_users RPC pour un gardien (seulement super_admin)", async () => {
    supabase.from.mockReturnValue(makeChain('gardien'));
    renderWithContext();

    await waitFor(() => {
      expect(supabase.rpc).not.toHaveBeenCalledWith('get_admin_users');
    });
  });
});
