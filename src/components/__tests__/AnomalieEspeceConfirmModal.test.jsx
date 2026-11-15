import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

const updateMock = vi.fn();
const listRows = [{
  id: 'c1', nom: 'Lathia',
  data: { anomalie_espece_seconde: 'Ange', anomalie_espece_a_confirmer: { pouvoir: 'Berserker', options: ['Ange', 'Troll'] } },
}];

vi.mock('../../config/supabase', () => ({
  supabase: {
    from: () => ({
      select: (cols) => cols === 'data'
        ? { eq: () => ({ single: () => Promise.resolve({ data: { data: listRows[0].data }, error: null }) }) }
        : { eq: () => ({ not: () => Promise.resolve({ data: listRows, error: null }) }) },
      update: (payload) => { updateMock(payload); return { eq: () => Promise.resolve({ error: null }) }; },
    }),
  },
}));
vi.mock('../../utils/SystemeServices', () => ({ showInAppNotification: vi.fn() }));

import AnomalieEspeceConfirmModal from '../AnomalieEspeceConfirmModal';

describe('AnomalieEspeceConfirmModal', () => {
  it("propose les espèces du pouvoir et enregistre l'espèce choisie", async () => {
    render(<AnomalieEspeceConfirmModal userProfile={{ id: 'u1' }} />);
    fireEvent.click(await screen.findByRole('button', { name: 'Troll' }));
    await waitFor(() => expect(updateMock).toHaveBeenCalledWith({ data: { anomalie_espece_seconde: 'Troll' } }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it("n'affiche rien sans personnage à confirmer", () => {
    const { container } = render(<AnomalieEspeceConfirmModal userProfile={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
