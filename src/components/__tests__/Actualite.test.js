vi.mock('../../config/supabase', () => ({
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

vi.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: jest.fn(),
}));

vi.mock('../../config/icons', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual };
});

vi.mock('../../utils/authRoles', () => ({
  isSuperAdmin: jest.fn(() => false),
}));

import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { supabase } from '../../config/supabase';
import Actualite from '../Actualite';

function makeChain(returnData = []) {
  const chain = { then: undefined };
  chain.select = jest.fn(() => chain);
  chain.eq = jest.fn(() => chain);
  chain.neq = jest.fn(() => chain);
  chain.in = jest.fn(() => chain);
  chain.single = jest.fn(() => Promise.resolve({ data: null, error: { code: 'PGRST116' } }));
  chain.order = jest.fn(() => chain);
  chain.insert = jest.fn(() => chain);
  chain.delete = jest.fn(() => chain);
  chain.gte = jest.fn(() => chain);
  chain.limit = jest.fn(() => chain);
  chain.update = jest.fn(() => Promise.resolve({ data: null, error: null }));
  chain.then = jest.fn((res) => {
    res({ data: returnData, error: null });
    return Promise.resolve();
  });
  chain.catch = jest.fn();
  return chain;
}

beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
  supabase.from.mockReturnValue(makeChain());
});

describe('Actualite', () => {
  it('rend sans planter', async () => {
    const { container } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });

  it('affiche le titre Le Petit Parisien', async () => {
    const { findAllByText } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    const titles = await findAllByText('Le Petit Parisien');
    expect(titles.length).toBeGreaterThanOrEqual(1);
  });

  it('affiche le bouton retour', async () => {
    const { findByText } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    const btn = await findByText("Retour à l'accueil");
    expect(btn).toBeTruthy();
  });

  it('affiche le bouton de bascule mode nuit', async () => {
    const { container } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    await waitFor(() => {
      const toggle = container.querySelector('button[title*="mode sombre"]');
      expect(toggle).toBeTruthy();
    });
  });

  it('rend la section sommaire avec les entrées attendues', async () => {
    const { findByText } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    expect(await findByText('Sommaire')).toBeTruthy();
    expect(await findByText('Météo de Paris')).toBeTruthy();
    expect(await findByText('Influence Lunaire')).toBeTruthy();
    expect(await findByText('Chronique Historique')).toBeTruthy();
    expect(await findByText('Fêtes & Traditions')).toBeTruthy();
    expect(await findByText('Page 1 — Une & Éditorial')).toBeTruthy();
  });

  it('passe en mode nuit au clic sur le toggle et persiste dans localStorage', async () => {
    const { container } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    await waitFor(() => {
      const toggle = container.querySelector('button[title*="mode sombre"]');
      expect(toggle).toBeTruthy();
    });

    expect(container.querySelector('.dark')).toBeFalsy();

    const toggle = container.querySelector('button[title*="mode sombre"]');
    fireEvent.click(toggle);

    await waitFor(() => {
      expect(localStorage.getItem('journal-dark-mode')).toBe('enabled');
      const sunToggle = container.querySelector('button[title*="mode clair"]');
      expect(sunToggle).toBeTruthy();
      expect(container.querySelector('.dark')).toBeTruthy();
    });
  });

  it('restaure le mode nuit depuis localStorage', async () => {
    localStorage.setItem('journal-dark-mode', 'enabled');
    const { container } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );
    await waitFor(() => {
      const toggle = container.querySelector('button[title*="mode clair"]');
      expect(toggle).toBeTruthy();
      expect(container.querySelector('.dark')).toBeTruthy();
    });
  });

  it('affiche les saints du jour dans Fêtes & Traditions', async () => {
    const mockHolidays = [
      {
        date: '1899-11-26',
        name: 'Saint Sylvestre Gozzolini — Fondateur des Sylvestrins',
        type: 'chrétien',
        description: 'Saint Sylvestre Gozzolini — Abbés, Fondateurs. Fondateur de la congrégation bénédictine des Sylvestrins au XIIIe siècle.',
        traditions: 'Fête traditionnelle de Saint Sylvestre.'
      },
      {
        date: '1899-11-26',
        name: 'Sainte Catherine d\'Alexandrie',
        type: 'chrétien',
        description: 'Sainte Catherine d\'Alexandrie — Vierges, Martyres. Vierge savante d\'Égypte, martyrisée au IVe siècle sur une roue.',
        traditions: 'Fête traditionnelle de Sainte Catherine.'
      }
    ];

    const chain = makeChain();
    // Premier appel = journal_articles (vide)
    // Deuxième appel = journal_holidays → retourne les saints
    let holidayCall = false;
    chain.then = jest.fn((res) => {
      if (!holidayCall) {
        holidayCall = true;
        // second call: journal_daily_info
        setTimeout(() => res({ data: null, error: { code: 'PGRST116' } }), 0);
        return Promise.resolve();
      }
      res({ data: mockHolidays, error: null });
      return Promise.resolve();
    });
    chain.single = jest.fn(() => Promise.resolve({ data: null, error: { code: 'PGRST116' } }));
    supabase.from.mockReturnValue(chain);

    const { findByText } = render(
      <Actualite onBack={() => {}} userProfile={{ profile: { role: 'user' } }} />
    );

    // Ouvrir Fêtes & Traditions
    const fetesBtn = await findByText('Fêtes & Traditions');
    fireEvent.click(fetesBtn);

    expect(await findByText('Saint Sylvestre Gozzolini — Fondateur des Sylvestrins')).toBeTruthy();
    expect(await findByText('Sainte Catherine d\'Alexandrie')).toBeTruthy();
  });
});
