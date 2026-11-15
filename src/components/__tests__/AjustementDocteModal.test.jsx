import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

const rpc = vi.fn(() => Promise.resolve({ error: null }));
vi.mock('../../config/supabase', () => ({ supabase: { rpc: (...a) => rpc(...a) } }));
vi.mock('../../utils/SystemeServices', () => ({ showInAppNotification: vi.fn() }));

import AjustementDocteModal, { buildAjustables } from '../AjustementDocteModal';

const character = {
  id: 'c1', nom: 'Milo', typeFee: 'Fouinard', fortune: 5,
  caracteristiques: { agilite: 3 },
  competencesLibres: { rangs: { Mêlée: 2 } },
  competencesFutiles: { rangs: {} },
  computedStats: { competencesBase: { Mêlée: 1 }, competencesTotal: { Mêlée: 3 }, predFinales: [] },
  data: { stats_scellees: { fortune: 4 } },
};
const gameData = {
  fairyData: { Fouinard: { caracteristiques: { agilite: { min: 2, max: 5 } } } },
  competences: { Mêlée: {} },
  competencesFutiles: [{ nom: 'Musique' }],
};

describe('AjustementDocteModal', () => {
  it('borne les compétences au score de base et les caractéristiques au minimum d’espèce', () => {
    expect(buildAjustables('comp', character, gameData)[0]).toMatchObject({ nom: 'Mêlée', score: 3, min: 1 });
    expect(buildAjustables('carac', character, gameData)[0]).toMatchObject({ key: 'agilite', min: 2, max: 5 });
    expect(buildAjustables('fortune', character, gameData)[0]).toMatchObject({ min: 0, max: 15 });
  });

  it('exige un motif puis envoie la perte de Fortune à la fonction Docte', async () => {
    const onDone = vi.fn();
    render(<AjustementDocteModal character={character} gameData={gameData} onClose={() => {}} onDone={onDone} />);
    fireEvent.click(screen.getByLabelText('Diminuer'));
    fireEvent.click(screen.getByLabelText('Diminuer'));
    expect(screen.getByText(/ruine véritable/)).toBeInTheDocument();
    const apply = screen.getByText("Appliquer l'ajustement");
    expect(apply).toBeDisabled();
    fireEvent.change(screen.getByPlaceholderText(/Krach/), { target: { value: 'Krach de la Bourse' } });
    fireEvent.click(apply);
    await waitFor(() => expect(onDone).toHaveBeenCalled());
    expect(rpc).toHaveBeenCalledWith('docte_ajuster_fiche', expect.objectContaining({
      p_character_id: 'c1', p_kind: 'fortune', p_new_value: 3, p_motif: 'Krach de la Bourse',
      p_xp_mode: 'aucun', p_xp_valeur: 0, p_label: 'Fortune 5 → 3',
    }));
  });

  it('envoie le nombre de rangs (et non le score) pour une compétence', async () => {
    rpc.mockClear();
    render(<AjustementDocteModal character={character} gameData={gameData} onClose={() => {}} onDone={() => {}} />);
    fireEvent.click(screen.getByText('Compétence'));
    fireEvent.click(screen.getByLabelText('Diminuer'));
    fireEvent.change(screen.getByPlaceholderText(/Krach/), { target: { value: 'Amnésie' } });
    fireEvent.click(screen.getByText("Appliquer l'ajustement"));
    await waitFor(() => expect(rpc).toHaveBeenCalled());
    expect(rpc.mock.calls[0][1]).toMatchObject({ p_kind: 'comp', p_key: 'Mêlée', p_new_value: 1, p_label: 'Mêlée 3 → 2' });
  });
});
