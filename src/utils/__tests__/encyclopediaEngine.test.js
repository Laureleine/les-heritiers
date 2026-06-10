import { submitEncyclopediaProposal } from '../encyclopediaEngine';
import { supabase } from '../../config/supabase';

// Mock minimal de base pour le hoisting
vi.mock('../../config/supabase', () => ({
    supabase: {
        from: vi.fn()
    }
}));

describe('encyclopediaEngine - submitEncyclopediaProposal', () => {
    const defaultGameData = {
        competences: {},
        fairyData: {}
    };

    let mockInsert;
    let mockSelect;
    let mockLimit;

    beforeEach(() => {
        vi.clearAllMocks();
        
        mockLimit = vi.fn().mockResolvedValue({ data: [{ id: 'req-123' }], error: null });
        mockSelect = vi.fn(() => ({ limit: mockLimit }));
        mockInsert = vi.fn(() => ({ select: mockSelect }));
        
        supabase.from.mockReturnValue({
            insert: mockInsert
        });
    });

    it('détecte le changement des traits de caractère et les envoie sous forme de tableau', async () => {
        const payload = {
            activeTab: 'fairy_types',
            isCreating: false,
            proposal: {
                traits: 'Amusant, Curieux',
                description: 'Une fée',
                allowed_genders: ['Homme', 'Femme']
            },
            editingItem: {
                id: 'fairy-1',
                traits: 'Amusant',
                description: 'Une fée',
                allowed_genders: ['Homme', 'Femme']
            },
            justification: 'Ajout du trait Curieux',
            userProfile: { id: 'user-1' },
            parsedTech: {},
            gameData: defaultGameData
        };

        const result = await submitEncyclopediaProposal(payload);

        expect(result.success).toBe(true);
        expect(result.requestId).toBe('req-123');

        // Vérification de l'appel Supabase
        expect(supabase.from).toHaveBeenCalledWith('data_change_requests');
        expect(mockInsert).toHaveBeenCalledWith([
            expect.objectContaining({
                table_name: 'fairy_types',
                record_id: 'fairy-1',
                new_data: expect.objectContaining({
                    traits: ['Amusant', 'Curieux']
                }),
                justification: 'Ajout du trait Curieux'
            })
        ]);
    });

    it('ne détecte aucune modification si les traits sont identiques', async () => {
        const payload = {
            activeTab: 'fairy_types',
            isCreating: false,
            proposal: {
                traits: 'Amusant, Curieux',
                description: 'Une fée',
                allowed_genders: ['Homme', 'Femme']
            },
            editingItem: {
                id: 'fairy-1',
                traits: 'Amusant, Curieux',
                description: 'Une fée',
                allowed_genders: ['Homme', 'Femme']
            },
            justification: 'Pas de changement',
            userProfile: { id: 'user-1' },
            parsedTech: {},
            gameData: defaultGameData
        };

        const result = await submitEncyclopediaProposal(payload);

        expect(result.warning).toBe(true);
        expect(result.message).toBe('Aucune modification détectée.');
        expect(mockInsert).not.toHaveBeenCalled();
    });

    it('gère le nettoyage des espaces blancs et des virgules superflues', async () => {
        const payload = {
            activeTab: 'fairy_types',
            isCreating: false,
            proposal: {
                traits: '  Amusant  , Curieux,  ',
                description: 'Une fée',
                allowed_genders: ['Homme', 'Femme']
            },
            editingItem: {
                id: 'fairy-1',
                traits: 'Amusant,Curieux',
                description: 'Une fée',
                allowed_genders: ['Homme', 'Femme']
            },
            justification: 'Nettoyage des espaces',
            userProfile: { id: 'user-1' },
            parsedTech: {},
            gameData: defaultGameData
        };

        const result = await submitEncyclopediaProposal(payload);

        expect(result.warning).toBe(true);
        expect(result.message).toBe('Aucune modification détectée.');
        expect(mockInsert).not.toHaveBeenCalled();
    });
});
