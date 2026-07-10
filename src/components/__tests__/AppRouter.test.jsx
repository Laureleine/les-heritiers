vi.mock('../../context/CharacterContext', () => ({
  useCharacter: () => ({
    character: null,
    dispatchCharacter: vi.fn(),
    setIsReadOnly: vi.fn(),
  }),
  initialCharacterState: {},
}));

vi.mock('../../context/GameDataContext', () => ({
  useGameDataContext: () => ({ gameData: { profils: [], fairyData: null } }),
}));

vi.mock('../../utils/authRoles', () => ({
  isAdmin: vi.fn(),
}));

vi.mock('../../utils/lockUtils', () => ({
  isCharacterScelle: vi.fn().mockReturnValue(false),
}));

vi.mock('../../config/supabase', () => ({
  supabase: { auth: { signOut: vi.fn() } },
}));

vi.mock('../CharacterList', () => ({
  default: () => <div data-testid="character-list" />,
}));

vi.mock('../PixieAssistant', () => ({ default: () => null }));

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../AppRouter';
import { UserContext } from '../../context/UserContext';
import { isAdmin } from '../../utils/authRoles';

function renderAt(path, userProfile) {
  return render(
    <UserContext.Provider value={{ session: { user: { id: 'user-1' } }, userProfile, refreshUserProfile: vi.fn() }}>
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
      </MemoryRouter>
    </UserContext.Provider>
  );
}

describe('AppRouter — route /admin_dashboard', () => {
  it('redirige vers / si isAdmin retourne false', async () => {
    isAdmin.mockReturnValue(false);
    renderAt('/admin_dashboard', { profile: { show_pixie: false } });
    expect(await screen.findByTestId('character-list')).toBeTruthy();
  });
});

describe('AppRouter — route /encyclopedia', () => {
  it("affiche l'écran verrou si is_docte est false", async () => {
    isAdmin.mockReturnValue(false);
    renderAt('/encyclopedia', { profile: { is_docte: false, show_pixie: false } });
    expect(await screen.findByText('Savoir sous le Sceau du Silence')).toBeTruthy();
  });
});
