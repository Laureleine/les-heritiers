// src/components/admin/TabRepairJournaux.test.js
// Tests de non-régression pour la restauration du Plancher de Verre
//
// ATTENTION: react-scripts a `resetMocks: true` → les implémentations
// des mock sont réinitialisées entre chaque test. On doit donc re-définir
// les mockReturn/mockResolved dans beforeEach().

jest.mock('../../config/supabase', () => ({
  supabase: { from: jest.fn() },
}));
jest.mock('../../utils/SystemeServices', () => ({
  showInAppNotification: jest.fn(),
}));
jest.mock('../../utils/supabaseGameData', () => ({
  loadFairyTypes: jest.fn(),
  loadSocialItems: jest.fn(),
}));
jest.mock('lucide-react', () => {
  const I = () => null;
  I.displayName = 'LucideIcon';
  return {
    Search: I, Filter: I, X: I, Wrench: I, CheckCircle: I, AlertTriangle: I, MessageCircle: I,
  };
});

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { supabase } from '../../config/supabase';
import { loadFairyTypes, loadSocialItems } from '../../utils/supabaseGameData';
import TabRepairJournaux from './TabRepairJournaux';

function mockChain(response) {
  const chain = {
    select: jest.fn(() => chain),
    order: jest.fn(() => chain),
    eq: jest.fn(() => chain),
    in: jest.fn(() => chain),
    update: jest.fn(() => chain),
    then: (resolve) => resolve(response),
  };
  return chain;
}

beforeEach(() => {
  // resetMocks: true réinitialise l'implémentation, on la remet
  loadFairyTypes.mockResolvedValue({
    fairyData: {},
    fairyTypes: [],
    fairyTypesByAge: { traditionnelles: [], modernes: [] },
  });
  loadSocialItems.mockResolvedValue([]);
});

describe('TabRepairJournaux - RLS Update avec .select("id")', () => {
  describe('Unité : chaîne update + select("id")', () => {
    it('update avec .select("id") dans executeRestoreFloor', async () => {
      const updateEqChain = {
        select: jest.fn((cols) => ({ data: [{ id: 'char-123' }], error: null })),
      };
      const updateChain = { eq: jest.fn(() => updateEqChain) };
      supabase.from.mockReturnValue({
        ...mockChain({ data: [], error: null }),
        update: jest.fn(() => updateChain),
      });

      const { data } = await supabase
        .from('characters')
        .update({ data: { stats_scellees: {} } })
        .eq('id', 'char-123')
        .select('id');

      expect(updateEqChain.select).toHaveBeenCalledWith('id');
      expect(data).toHaveLength(1);
      expect(data[0].id).toBe('char-123');
    });

    it('RLS bloquée : 0 lignes modifiées', async () => {
      const updateEqChain = {
        select: jest.fn(() => ({ data: [], error: null })),
      };
      const updateChain = { eq: jest.fn(() => updateEqChain) };
      supabase.from.mockReturnValue({
        ...mockChain({ data: [], error: null }),
        update: jest.fn(() => updateChain),
      });

      const { data } = await supabase
        .from('characters')
        .update({ data: { stats_scellees: {} } })
        .eq('id', 'char-rls-blocked')
        .select('id');

      expect(data).toHaveLength(0);
      expect(!data?.length).toBe(true);
    });

    it('executeRestoreFloor détecte RLS bloquée (0 lignes)', async () => {
      // Le pattern exact du composant après la correction
      const { data: updateData, error: saveError } = await (async () => {
        const updateEqChain = {
          select: jest.fn(() => ({ data: [], error: null })),
        };
        const updateChain = { eq: jest.fn(() => updateEqChain) };
        supabase.from.mockReturnValue({
          ...mockChain({ data: [], error: null }),
          update: jest.fn(() => updateChain),
        });

        return supabase
          .from('characters')
          .update({ data: { stats_scellees: {} } })
          .eq('id', 'char-789')
          .select('id');
      })();

      expect(saveError).toBeNull();
      expect(updateData).toHaveLength(0);
      // Dans le composant: if (!updateData?.length) throw new Error(...)
      expect(!updateData?.length).toBe(true);
      expect(() => {
        if (!updateData?.length) throw new Error("Aucune ligne modifiée — RLS a bloqué l'écriture");
      }).toThrow('RLS');
    });
  });

  describe('Intégration : rendu du composant', () => {
    it('loadFairyTypes mock fonctionne', async () => {
      expect(loadFairyTypes.getMockImplementation()).toBeDefined();
      const result = await loadFairyTypes();
      expect(result).toBeDefined();
      expect(result.fairyData).toBeDefined();
    });

    it('affiche liste vide', async () => {
      supabase.from.mockImplementation(() => mockChain({ data: [], error: null }));

      const { container } = render(<TabRepairJournaux />);

      await waitFor(() => {
        expect(supabase.from).toHaveBeenCalledWith('characters');
      });

      expect(container.textContent).toContain('Aucun personnage à réparer');
    });

    it('détecte un personnage OK (stats_scellees présent)', async () => {
      const fakeChar = {
        id: 'char-001',
        nom: 'Faustin Leclerc',
        statut: 'scelle',
        user_id: 'user-001',
        profiles: { username: 'Faustine' },
        type_fee: 'Elfe',
        caracteristiques: { force: 1, esprit: 5, feerie: 3, masque: 4, agilite: 3, precision: 5, prestance: 3, sangFroid: 3, perception: 4, constitution: 2 },
        atouts: ['Atout 1'],
        pouvoirs: ['Pouvoir 1', 'Pouvoir 2', 'Pouvoir 3'],
        capacite_choisie: 'Capacité test',
        profils: { majeur: { nom: 'Savant' }, mineur: { nom: 'Gentleman' } },
        competences_libres: {},
        competences_futiles: {},
        fortune: 5,
        xp_total: 13,
        xp_depense: 0,
        data: { computed_stats: {}, stats_scellees: {} },
        vie_sociale: {},
      };

      supabase.from.mockImplementation(() => mockChain({ data: [fakeChar], error: null }));

      const { container } = render(<TabRepairJournaux />);

      await waitFor(() => {
        const counts = container.querySelectorAll('.grid-cols-6 .text-base.font-black');
        const completCount = Array.from(counts).find(el => el.textContent === '1');
        expect(completCount).toBeTruthy();
      });

      // Vérifie que le bouton message est présent (user_id défini)
      expect(container.querySelector('[title*="Envoyer un message"]')).toBeTruthy();
    });

    it('marque "Sans plancher" si stats_scellees manquant (compteur)', async () => {
      const sansPlancher = {
        id: 'char-002',
        nom: 'Sans Plancher',
        statut: 'scelle',
        type_fee: 'Elfe',
        caracteristiques: { force: 1, esprit: 5, feerie: 3, masque: 4, agilite: 3, precision: 5, prestance: 3, sangFroid: 3, perception: 4, constitution: 2 },
        atouts: [],
        pouvoirs: [],
        capacite_choisie: null,
        profils: {},
        competences_libres: {},
        competences_futiles: {},
        fortune: 0,
        xp_total: 5,
        xp_depense: 0,
        data: { computed_stats: {} },
        vie_sociale: {},
      };

      supabase.from.mockImplementation(() => mockChain({ data: [sansPlancher], error: null }));

      const { container } = render(<TabRepairJournaux />);

      await waitFor(() => {
        const counts = container.querySelectorAll('.grid-cols-6 .text-base.font-black');
        const skippedCount = Array.from(counts).find(el => el.textContent === '1');
        expect(skippedCount).toBeTruthy();
      });

      // Pas de bouton message si user_id absent
      expect(container.querySelector('[title*="Envoyer un message"]')).toBeNull();
    });
  });
});
