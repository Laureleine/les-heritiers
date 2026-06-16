import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../SystemeServices', () => ({
    showInAppNotification: vi.fn(),
}));

import { xpTransaction } from '../xpTransaction';
import { showInAppNotification } from '../SystemeServices';

describe('xpTransaction', () => {
    let dispatch;
    const gameData = { fairyData: {} };

    beforeEach(() => {
        dispatch = vi.fn();
        vi.clearAllMocks();
    });

    it('dispatche UPDATE_MULTIPLE en premier', () => {
        xpTransaction(dispatch, {
            updates: { caracteristiques: { force: 3 } },
            transaction: { type: 'DEPENSE', code: 'CARAC', label: 'Test', valeur: 2 },
            notification: { text: '2 XP dépensés !' }
        }, gameData);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'UPDATE_MULTIPLE',
            payload: { caracteristiques: { force: 3 } },
            gameData
        });
    });

    it('dispatche LOG_XP_TRANSACTION en second', () => {
        xpTransaction(dispatch, {
            updates: {},
            transaction: { type: 'DEPENSE', code: 'CARAC', label: 'Test', valeur: 2 },
            notification: { text: 'ok' }
        }, gameData);

        expect(dispatch).toHaveBeenNthCalledWith(2, expect.objectContaining({
            type: 'LOG_XP_TRANSACTION',
            transaction: expect.objectContaining({ type: 'DEPENSE', code: 'CARAC', valeur: 2 })
        }));
    });

    it('ajoute la date si absente', () => {
        xpTransaction(dispatch, {
            updates: {},
            transaction: { type: 'DEPENSE', code: 'X', label: 'Y', valeur: 5 },
            notification: { text: 'ok' }
        }, gameData);

        expect(dispatch.mock.calls[1][0].transaction.date).toBeDefined();
    });

    it('préserve la date si fournie', () => {
        const date = '2026-01-01T00:00:00.000Z';
        xpTransaction(dispatch, {
            updates: {},
            transaction: { type: 'DEPENSE', code: 'X', label: 'Y', valeur: 5, date },
            notification: { text: 'ok' }
        }, gameData);

        expect(dispatch.mock.calls[1][0].transaction.date).toBe(date);
    });

    it('appelle showInAppNotification avec texte et type', () => {
        xpTransaction(dispatch, {
            updates: {},
            transaction: { type: 'DEPENSE', code: 'X', label: 'Y', valeur: 0 },
            notification: { text: 'Bravo !', type: 'success' }
        }, gameData);

        expect(showInAppNotification).toHaveBeenCalledWith('Bravo !', 'success');
    });

    it('utilise "success" par défaut si notification.type absent', () => {
        xpTransaction(dispatch, {
            updates: {},
            transaction: { type: 'DEPENSE', code: 'X', label: 'Y', valeur: 0 },
            notification: { text: 'Ok' }
        }, gameData);

        expect(showInAppNotification).toHaveBeenCalledWith('Ok', 'success');
    });
});
