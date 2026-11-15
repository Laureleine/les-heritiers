import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

const updateMock = vi.fn();
const row = {
  id: 'c1', nom: 'Milo',
  data: { foo: 1, ajustements_docte_non_vus: [
    { label: 'Fortune 6 → 4', motif: 'Krach de la Bourse', xp_mode: 'aucun', xp: 0 },
    { label: 'Agilité 4 → 3', motif: 'Commotion', xp_mode: 'rembourse', xp: 16 },
  ] },
};

vi.mock('../../config/supabase', () => ({
  supabase: {
    from: () => ({
      select: (cols) => cols === 'data'
        ? { eq: () => ({ single: () => Promise.resolve({ data: { data: row.data }, error: null }) }) }
        : { eq: () => ({ not: () => Promise.resolve({ data: [row], error: null }) }) },
      update: (payload) => { updateMock(payload); return { eq: () => Promise.resolve({ error: null }) }; },
    }),
  },
}));
vi.mock('../../utils/SystemeServices', () => ({ showInAppNotification: vi.fn() }));

import AjustementsDocteNotice, { markAjustementsVus } from '../AjustementsDocteNotice';

describe('AjustementsDocteNotice', () => {
  it('affiche les ajustements avec motif et XP, puis les marque comme vus', async () => {
    render(<AjustementsDocteNotice userProfile={{ id: 'u1' }} />);
    expect(await screen.findByText('Fortune 6 → 4')).toBeInTheDocument();
    expect(screen.getByText('« Krach de la Bourse »')).toBeInTheDocument();
    expect(screen.getByText(/\+16 XP rendus/)).toBeInTheDocument();
    fireEvent.click(screen.getByText("J'ai compris"));
    await waitFor(() => expect(updateMock).toHaveBeenCalledWith({ data: { foo: 1 } }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it('retire uniquement la liste des ajustements', () => {
    expect(markAjustementsVus({ a: 1, ajustements_docte_non_vus: [] })).toEqual({ a: 1 });
  });
});
