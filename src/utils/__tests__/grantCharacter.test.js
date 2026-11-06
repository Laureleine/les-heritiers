import { resolveGrantCharacterId } from '../grantCharacter';
import { supabase } from '../../config/supabase';

vi.mock('../../config/supabase', () => ({ supabase: { from: vi.fn() } }));

function mockMembre(membre) {
    const chain = {
        select: vi.fn(() => chain),
        eq: vi.fn(() => chain),
        maybeSingle: vi.fn(() => Promise.resolve({ data: membre, error: null })),
    };
    supabase.from.mockReturnValue(chain);
    return chain;
}

describe('resolveGrantCharacterId', () => {
    beforeEach(() => vi.clearAllMocks());

    it('prend le personnage inscrit dans le cercle du don, même sans personnage chargé', async () => {
        const chain = mockMembre({ character_id: 'char-cercle' });
        const id = await resolveGrantCharacterId({ cercle_id: 'c1' }, 'u1', null);
        expect(id).toBe('char-cercle');
        expect(supabase.from).toHaveBeenCalledWith('cercle_membres');
        expect(chain.eq).toHaveBeenCalledWith('cercle_id', 'c1');
        expect(chain.eq).toHaveBeenCalledWith('user_id', 'u1');
    });

    it('le personnage du cercle prime sur le personnage courant', async () => {
        mockMembre({ character_id: 'char-cercle' });
        expect(await resolveGrantCharacterId({ cercle_id: 'c1' }, 'u1', 'char-courant')).toBe('char-cercle');
    });

    it('retombe sur le personnage courant si le joueur n\'a pas de personnage dans le cercle', async () => {
        mockMembre(null);
        expect(await resolveGrantCharacterId({ cercle_id: 'c1' }, 'u1', 'char-courant')).toBe('char-courant');
    });

    it('renvoie null sans cercle ni personnage courant', async () => {
        expect(await resolveGrantCharacterId({}, 'u1', undefined)).toBeNull();
        expect(supabase.from).not.toHaveBeenCalled();
    });
});
