import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GrimoirePersonnel from '../GrimoirePersonnel';
import { usePersonalCards } from '../../../hooks/usePersonalCards';

vi.mock('../../../config/supabase', () => ({ supabase: { from: vi.fn() } }));
vi.mock('../../../hooks/usePersonalCards', () => ({ usePersonalCards: vi.fn() }));
vi.mock('../../../hooks/useGrimoire', () => ({
    useGrimoire: () => ({
        notes: [], contacts: [], possessions: [], loading: false,
        toggleShare: vi.fn(), addNote: vi.fn(), updateNote: vi.fn(), deleteNote: vi.fn(),
    }),
}));
vi.mock('../../../context/UserContext', () => ({
    useUserContext: () => ({ userProfile: { id: 'joueur-1', profile: {} } }),
}));
vi.mock('../TabChroniques', () => ({ default: () => null }));

const gifts = {
    assets: [], powers: [], capacites: [],
    socialItems: [
        { id: 'i1', nom: 'Malette à piques', categorie: 'objet', description: 'Une mallette hérissée', _grant: { id: 'g1' } },
        { id: 'i2', nom: 'Léon Dacier', categorie: 'contact', _grant: { id: 'g2' } },
    ],
};

function renderGrimoire(props = {}) {
    return render(
        <QueryClientProvider client={new QueryClient()}>
            <GrimoirePersonnel characterId="char-1" cercleId={null} playerId="joueur-1" {...props} />
        </QueryClientProvider>
    );
}

describe('GrimoirePersonnel — dons du Docte', () => {
    beforeEach(() => usePersonalCards.mockReturnValue({ data: gifts }));

    it('charge les cartes du joueur pour son personnage, même sans être Docte', () => {
        renderGrimoire();
        expect(usePersonalCards).toHaveBeenCalledWith('joueur-1', 'char-1');
    });

    it('affiche les objets donnés dans Trésors & Possessions', () => {
        renderGrimoire();
        fireEvent.click(screen.getByRole('tab', { name: /Trésors & Possessions/ }));
        expect(screen.getByText('Malette à piques')).toBeInTheDocument();
        expect(screen.getByText('✦ Don du Docte')).toBeInTheDocument();
        expect(screen.queryByText('Léon Dacier')).not.toBeInTheDocument();
        expect(screen.queryByText('Aucune possession consignée.')).not.toBeInTheDocument();
    });

    it('affiche les contacts donnés dans Visages Rencontrés', () => {
        renderGrimoire();
        fireEvent.click(screen.getByRole('tab', { name: /Visages Rencontrés/ }));
        expect(screen.getByText('Léon Dacier')).toBeInTheDocument();
        expect(screen.queryByText('Malette à piques')).not.toBeInTheDocument();
        expect(screen.queryByText('Aucune rencontre consignée dans ce Cercle.')).not.toBeInTheDocument();
    });

    it('garde l\'état vide quand aucun don n\'a été reçu', () => {
        usePersonalCards.mockReturnValue({ data: undefined });
        renderGrimoire();
        fireEvent.click(screen.getByRole('tab', { name: /Trésors & Possessions/ }));
        expect(screen.getByText('Aucune possession consignée.')).toBeInTheDocument();
    });
});
