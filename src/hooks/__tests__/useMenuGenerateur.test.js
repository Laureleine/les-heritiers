import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

class MockChain {
  constructor(resolveValue) {
    this._resolveValue = resolveValue;
  }
  select() { return this; }
  eq() { return this; }
  then(resolve, reject) { return Promise.resolve(this._resolveValue).then(resolve, reject); }
}

const structureMock = {
  id: 'struct-1',
  type_repas: 'diner',
  niveau_financier: 'bourgeois',
  tranche_convives: 'tablee',
  services: [{ id: 'potage', label: 'Potage', categorie: 'potage', nb_plats: 1 }],
  textes_intro: ['La cuisine embaume.'],
};

let fromMock;

vi.mock('../../config/supabase', () => ({
  supabase: { from: (...args) => fromMock(...args) },
}));

import { useMenuGenerateur } from '../useMenuGenerateur';

const platsApprouves = [
  { id: 'p1', categorie: 'potage', niveaux: ['bourgeois'], saisons: ['hiver'], nb_convives_min: null, nb_convives_max: null, difficulte: 2 },
];

describe('useMenuGenerateur', () => {
  beforeEach(() => {
    fromMock = vi.fn(() => new MockChain({ data: [structureMock], error: null }));
  });

  it('génère un menu à partir de la structure trouvée', async () => {
    const { result } = renderHook(() => useMenuGenerateur(platsApprouves));

    await act(async () => {
      await result.current.generer({
        saison: 'hiver', typeRepas: 'diner', niveauFinancier: 'bourgeois', nbConvives: 6, niveauCuisinier: 4,
      });
    });

    expect(result.current.erreur).toBeNull();
    expect(result.current.menu.texteIntro).toBe('La cuisine embaume.');
    expect(result.current.menu.services).toHaveLength(1);
    expect(result.current.menu.services[0].plats[0].id).toBe('p1');
  });

  it('signale une erreur quand aucune structure ne correspond aux critères', async () => {
    fromMock = vi.fn(() => new MockChain({ data: [], error: null }));
    const { result } = renderHook(() => useMenuGenerateur(platsApprouves));

    await act(async () => {
      await result.current.generer({
        saison: 'hiver', typeRepas: 'banquet', niveauFinancier: 'populaire', nbConvives: 2, niveauCuisinier: 4,
      });
    });

    expect(result.current.menu).toBeNull();
    expect(result.current.erreur).toMatch(/Aucune structure/);
  });

  it('rerollGlobal régénère le menu avec les mêmes paramètres', async () => {
    const { result } = renderHook(() => useMenuGenerateur(platsApprouves));

    await act(async () => {
      await result.current.generer({
        saison: 'hiver', typeRepas: 'diner', niveauFinancier: 'bourgeois', nbConvives: 6, niveauCuisinier: 4,
      });
    });

    act(() => {
      result.current.rerollGlobal();
    });

    expect(result.current.menu.services[0].plats[0].id).toBe('p1');
  });
});
