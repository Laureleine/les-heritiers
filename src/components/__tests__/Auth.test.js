vi.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      resetPasswordForEmail: vi.fn(),
    },
  },
}));

vi.mock('../../utils/SystemeServices', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    showInAppNotification: vi.fn(),
  };
});

vi.mock('../../version', () => ({
  APP_VERSION: '0.1.0',
  BUILD_DATE: '2026-05-25',
}));

vi.mock('lucide-react', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual };
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Auth from '../Auth';
import { supabase } from '../../config/supabase';

const switchToSignUp = () => {
  fireEvent.click(screen.getByText('Inscription'));
};

describe('Auth — Validation mot de passe', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Auth />);
    switchToSignUp();
  });

  it('rejette un mot de passe de moins de 8 caractères', async () => {
    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Abc1' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    const errorText = await screen.findByText(/8 caractères/);
    expect(errorText).toBeInTheDocument();
    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });

  it('rejette un mot de passe sans majuscule', async () => {
    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'longpass1' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    const errorText = await screen.findByText(/majuscule/);
    expect(errorText).toBeInTheDocument();
    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });

  it('rejette un mot de passe sans chiffre', async () => {
    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Longpasss' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    const errorText = await screen.findByText(/chiffre/);
    expect(errorText).toBeInTheDocument();
    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });

  it('accepte un mot de passe valide (8+, majuscule, chiffre)', async () => {
    supabase.auth.signUp.mockResolvedValue({
      data: { user: { id: 'new-user' }, session: { access_token: 'tok' } },
      error: null,
    });

    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP4ss' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalledWith(
        expect.objectContaining({ password: 'ValidP4ss' })
      );
    });
  });
});

describe('Auth — Anti-énumération', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Auth />);
    switchToSignUp();
  });

  it('affiche Missive expédiée si email existe déjà (identities.length === 0)', async () => {
    supabase.auth.signUp.mockResolvedValue({
      data: { user: { id: 'existing', identities: [] }, session: null },
      error: null,
    });

    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'exists@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP4ss' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    expect(await screen.findByText('Missive expédiée !')).toBeInTheDocument();
    expect(screen.queryByText(/Avertissement/)).not.toBeInTheDocument();
  });

  it('affiche Missive expédiée si pas de session (confirmations activées)', async () => {
    supabase.auth.signUp.mockResolvedValue({
      data: { user: { id: 'new', identities: [{ id: 'id1' }] }, session: null },
      error: null,
    });

    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'new@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP4ss' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    expect(await screen.findByText('Missive expédiée !')).toBeInTheDocument();
  });

  it('ne montre pas Missive expédiée si session présente (nouvel utilisateur sans confirmation)', async () => {
    supabase.auth.signUp.mockResolvedValue({
      data: { user: { id: 'new', identities: [{ id: 'id1' }] }, session: { access_token: 'tok' } },
      error: null,
    });

    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: 'TestHeritier' } });
    fireEvent.change(emailInput, { target: { value: 'new@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP4ss' } });
    fireEvent.click(screen.getByText('Créer mon compte'));

    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalled();
    });
    expect(screen.queryByText('Missive expédiée !')).not.toBeInTheDocument();
  });
});

describe('Auth — Connexion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Auth />);
  });

  it('appelle signInWithPassword avec email et password', async () => {
    supabase.auth.signInWithPassword.mockResolvedValue({
      data: { user: { id: 'user-1' }, session: { access_token: 'tok' } },
      error: null,
    });

    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP4ss' } });
    fireEvent.click(screen.getByText('Se connecter'));

    await waitFor(() => {
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'test@test.com',
        password: 'ValidP4ss',
      });
    });
  });

  it('affiche une erreur traduite en cas d\'échec', async () => {
    supabase.auth.signInWithPassword.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'Invalid login credentials' },
    });

    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong' } });

    fireEvent.click(screen.getByText('Se connecter'));

    expect(await screen.findByText('Avertissement')).toBeInTheDocument();
  });
});

describe('Auth — Reset password', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Auth />);
  });

  it('bascule en mode reset et envoie le lien', async () => {
    supabase.auth.resetPasswordForEmail.mockResolvedValue({ data: {}, error: null });

    fireEvent.click(screen.getByText('Mot de passe oublié ?'));
    expect(screen.getByText('Envoyer le lien')).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Votre email');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.click(screen.getByText('Envoyer le lien'));

    await waitFor(() => {
      expect(supabase.auth.resetPasswordForEmail).toHaveBeenCalledWith(
        'test@test.com',
        expect.objectContaining({ redirectTo: expect.any(String) })
      );
    });
  });
});

describe('Auth — Username vide', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Auth />);
    switchToSignUp();
  });

  it('rejette un username vide', async () => {
    const usernameInput = screen.getByPlaceholderText("Nom d'utilisateur");
    const emailInput = screen.getByPlaceholderText('Votre email');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidP4ss' } });
    fireEvent.submit(usernameInput.closest('form'));

    const errorText = await screen.findByText(/nom d'utilisateur est requis/);
    expect(errorText).toBeInTheDocument();
    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });
});
