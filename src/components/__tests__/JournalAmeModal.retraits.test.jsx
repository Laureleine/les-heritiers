import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const rows = [
  { type: 'GAIN', code: 'DOCTE_RETRAIT', label: 'Ajustement du Docte : Fortune 6 → 4 — Krach', valeur: 0, rang_final: 4, date_mouvement: '2026-11-15T10:00:00Z' },
  { type: 'GAIN', code: 'SOCLE_CORRECTION', label: 'Correction du socle : Agilité', valeur: 16, rang_final: 3, date_mouvement: '2026-11-14T10:00:00Z' },
  { type: 'GAIN', code: 'SESSION_XP', label: 'Séance du mardi', valeur: 10, date_mouvement: '2026-11-13T10:00:00Z' },
];

vi.mock('../../config/supabase', () => ({
  supabase: { from: () => ({ select: () => ({ eq: () => ({ order: () => Promise.resolve({ data: rows, error: null }) }) }) }) },
}));

import JournalAmeModal from '../JournalAmeModal';
import { getEntryPresentation } from '../JournalAmeModal';

describe('Journal des Âmes — retraits', () => {
  it('présente un retrait comme une perte, jamais comme un gain', () => {
    expect(getEntryPresentation(rows[0])).toMatchObject({ isRetrait: true, valueText: 'Rang perdu' });
    expect(getEntryPresentation(rows[1])).toMatchObject({ isRetrait: true, valueText: 'Rang perdu · +16 XP rendus' });
    expect(getEntryPresentation(rows[2])).toMatchObject({ isRetrait: false });
  });

  it('affiche les retraits et ne les fond pas dans le total des gains', async () => {
    render(<JournalAmeModal isOpen onClose={() => {}} characterId="c1" />);
    expect(await screen.findByText(/Fortune 6 → 4/)).toBeInTheDocument();
    expect(screen.getByText('↓ Rang perdu')).toBeInTheDocument();
    expect(screen.getByText('↓ Rang perdu · +16 XP rendus')).toBeInTheDocument();
    expect(screen.queryByText('🧠 Gratuit')).toBeNull();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText(/Fortune 6 → 4/)).toBeInTheDocument();
    expect(screen.getByText(/Correction du socle : Agilité/)).toBeInTheDocument();
    expect(screen.getByText(/Total des gains \(1 entrées\)/)).toBeInTheDocument();
  });
});
