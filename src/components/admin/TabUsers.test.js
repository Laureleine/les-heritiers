jest.mock('../../config/supabase', () => ({
  supabase: {
    from: jest.fn(),
    rpc: jest.fn().mockResolvedValue({ data: [], error: null }),
  },
}));

jest.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: jest.fn(),
}));

jest.mock('lucide-react', () => {
  const I = () => null;
  I.displayName = 'LucideIcon';
  return {
    Search: I, Mail: I, Filter: I, CheckCircle: I,
    MessageCircle: I, Shield: I, User: I, Crown: I, Award: I,
  };
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { supabase } from '../../config/supabase';
import TabUsers from './TabUsers';

const mockSession = { user: { id: 'user-123' } };

function makeChain(role) {
  const chain = { then: undefined };
  chain.select = jest.fn(() => chain);
  chain.eq = jest.fn(() => chain);
  chain.single = jest.fn(() => Promise.resolve({ data: { role }, error: null }));
  chain.update = jest.fn(() => Promise.resolve({ data: null, error: null }));
  chain.order = jest.fn(() => chain);
  chain.then = jest.fn((res) => {
    res({ data: [], error: null });
    return Promise.resolve();
  });
  chain.catch = jest.fn();
  return chain;
}

describe('TabUsers role-based data fetching', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('appelle get_admin_users RPC quand le profil est super_admin', async () => {
    supabase.from.mockReturnValue(makeChain('super_admin'));
    render(<TabUsers session={mockSession} />);

    await waitFor(() => {
      expect(supabase.rpc).toHaveBeenCalledWith('get_admin_users');
    });
  });

  it('appelle profiles.select basique quand le profil est un simple user', async () => {
    supabase.from.mockReturnValue(makeChain('user'));
    render(<TabUsers session={mockSession} />);

    await waitFor(() => {
      const profileCalls = supabase.from.mock.calls
        .filter(([table]) => table === 'profiles');
      expect(profileCalls.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("n'appelle PAS get_admin_users RPC pour un simple user", async () => {
    supabase.from.mockReturnValue(makeChain('user'));
    render(<TabUsers session={mockSession} />);

    await waitFor(() => {
      expect(supabase.rpc).not.toHaveBeenCalledWith('get_admin_users');
    });
  });

  it("n'appelle PAS get_admin_users RPC pour un gardien (seulement super_admin)", async () => {
    supabase.from.mockReturnValue(makeChain('gardien'));
    render(<TabUsers session={mockSession} />);

    await waitFor(() => {
      expect(supabase.rpc).not.toHaveBeenCalledWith('get_admin_users');
    });
  });
});
