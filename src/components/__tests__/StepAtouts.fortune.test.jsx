import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const dispatch = vi.fn();
let character;

vi.mock('../../context/CharacterContext', () => ({ useCharacter: () => ({ character, dispatchCharacter: dispatch, isReadOnly: false }) }));
vi.mock('../../context/GameDataContext', () => ({
  useGameDataContext: () => ({ gameData: { fairyData: { Fouinard: { atouts: [
    { id: 'a1', nom: 'Brevets', description: 'Bonus de +2 en Fortune', effets_techniques: { fortune: 2 } },
    { id: 'a2', nom: 'Laboratoire secret', description: 'Un labo', effets_techniques: {} },
  ] } } } }),
}));
vi.mock('../../context/UserContext', () => ({ useUserContext: () => ({ userProfile: { id: 'u1' } }) }));
vi.mock('../../hooks/usePersonalCards', () => ({ usePersonalCards: () => ({ data: { assets: [] } }) }));
vi.mock('../../utils/SystemeServices', () => ({ showInAppNotification: vi.fn() }));

import StepAtouts from '../StepAtouts';

const scelle = (atouts, fortune, socle) => ({
  id: 'c1', statut: 'scelle', typeFee: 'Fouinard', atouts, fortune, xp_total: 50, xp_depense: 0,
  caracteristiques: { feerie: 3 }, data: { stats_scellees: { fortune: socle, atouts: ['Laboratoire secret'] } },
});
const updatePayload = () => dispatch.mock.calls.find(([a]) => a.type === 'UPDATE_MULTIPLE')[0].payload;

describe('StepAtouts — Fortune des Atouts achetés après le scellement (ticket Brevets)', () => {
  beforeEach(() => dispatch.mockClear());

  it('acheter Brevets monte la Fortune et le socle de 2', () => {
    character = scelle(['Laboratoire secret'], 10, 10);
    render(<StepAtouts />);
    fireEvent.click(screen.getByText('Brevets'));
    const p = updatePayload();
    expect(p.atouts).toEqual(['Laboratoire secret', 'Brevets']);
    expect(p.fortune).toBe(12);
    expect(p.data.stats_scellees.fortune).toBe(12);
  });

  it('revendre Brevets redescend Fortune et socle', () => {
    character = scelle(['Laboratoire secret', 'Brevets'], 12, 12);
    render(<StepAtouts />);
    fireEvent.click(screen.getByText('Brevets'));
    const p = updatePayload();
    expect(p.fortune).toBe(10);
    expect(p.data.stats_scellees.fortune).toBe(10);
  });
});
