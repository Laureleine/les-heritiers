import { isCacheFresh, CACHE_TTL_MS } from '../supabaseGameData';

describe('isCacheFresh', () => {
    it('retourne true pour un cache chargé à l\'instant', () => {
        expect(isCacheFresh({ _loadedAt: Date.now() })).toBe(true);
    });

    it('retourne true pour un cache chargé il y a 1 minute', () => {
        expect(isCacheFresh({ _loadedAt: Date.now() - 60_000 })).toBe(true);
    });

    it('retourne true juste avant la limite du TTL', () => {
        expect(isCacheFresh({ _loadedAt: Date.now() - CACHE_TTL_MS + 1000 })).toBe(true);
    });

    it('retourne false exactement à la limite du TTL', () => {
        expect(isCacheFresh({ _loadedAt: Date.now() - CACHE_TTL_MS })).toBe(false);
    });

    it('retourne false pour un cache plus vieux que le TTL', () => {
        expect(isCacheFresh({ _loadedAt: Date.now() - CACHE_TTL_MS - 1 })).toBe(false);
    });

    it('retourne false quand _loadedAt est absent', () => {
        expect(isCacheFresh({ fairyTypes: ['Lutin'], _version: '1.0' })).toBe(false);
    });

    it('retourne false pour null', () => {
        expect(isCacheFresh(null)).toBe(false);
    });

    it('retourne false pour undefined', () => {
        expect(isCacheFresh(undefined)).toBe(false);
    });

    it('retourne false pour un objet vide', () => {
        expect(isCacheFresh({})).toBe(false);
    });
});
