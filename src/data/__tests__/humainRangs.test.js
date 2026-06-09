// src/data/__tests__/humainRangs.test.js
// Tests de non-régression pour la feature Humain pur

import { HUMAIN_RANGS } from '../DictionnaireJeu';

describe('HUMAIN_RANGS', () => {
    test('contient les 4 rangs attendus', () => {
        expect(Object.keys(HUMAIN_RANGS)).toEqual(['larbin', 'acolyte', 'pointure', 'cador']);
    });

    test('chaque rang a les 3 budgets requis', () => {
        Object.entries(HUMAIN_RANGS).forEach(([key, rang]) => {
            expect(rang).toHaveProperty('carac');
            expect(rang).toHaveProperty('utiles');
            expect(rang).toHaveProperty('futiles');
            expect(rang).toHaveProperty('label');
        });
    });

    test('valeurs exactes des budgets par rang', () => {
        expect(HUMAIN_RANGS.larbin).toMatchObject({ carac: 8,  utiles: 10, futiles: 10 });
        expect(HUMAIN_RANGS.acolyte).toMatchObject({ carac: 10, utiles: 15, futiles: 12 });
        expect(HUMAIN_RANGS.pointure).toMatchObject({ carac: 12, utiles: 20, futiles: 14 });
        expect(HUMAIN_RANGS.cador).toMatchObject({ carac: 14, utiles: 25, futiles: 16 });
    });

    test('les budgets croissent strictement du larbin au cador', () => {
        const rangs = ['larbin', 'acolyte', 'pointure', 'cador'];
        for (let i = 1; i < rangs.length; i++) {
            const prev = HUMAIN_RANGS[rangs[i - 1]];
            const curr = HUMAIN_RANGS[rangs[i]];
            expect(curr.carac).toBeGreaterThan(prev.carac);
            expect(curr.utiles).toBeGreaterThan(prev.utiles);
            expect(curr.futiles).toBeGreaterThan(prev.futiles);
        }
    });
});

describe('canProceedStep1 logic (humain)', () => {
    const canProceed = (character) => {
        const isHumain = character?.typePersonnage === 'humain';
        return !!(character?.nom && character?.sexe && (
            isHumain ? !!character?.rangHumain : !!character?.typeFee
        ));
    };

    test('fée valide passe', () => {
        expect(canProceed({ nom: 'Ada', sexe: 'Femme', typeFee: 'Lutin', typePersonnage: 'fee' })).toBe(true);
    });

    test('fée sans typeFee bloque', () => {
        expect(canProceed({ nom: 'Ada', sexe: 'Femme', typeFee: '', typePersonnage: 'fee' })).toBe(false);
    });

    test('humain avec rang passe', () => {
        expect(canProceed({ nom: 'Bob', sexe: 'Homme', typePersonnage: 'humain', rangHumain: 'acolyte' })).toBe(true);
    });

    test('humain sans rang bloque', () => {
        expect(canProceed({ nom: 'Bob', sexe: 'Homme', typePersonnage: 'humain', rangHumain: null })).toBe(false);
    });

    test('humain sans nom bloque', () => {
        expect(canProceed({ nom: '', sexe: 'Homme', typePersonnage: 'humain', rangHumain: 'cador' })).toBe(false);
    });
});

describe('step-skipping logic (humain)', () => {
    const HUMAN_SKIPPED_STEPS = [2, 3, 4];
    const totalSteps = 11;

    const nextStep = (step, isHumain) => {
        let next = step + 1;
        if (isHumain) while (HUMAN_SKIPPED_STEPS.includes(next) && next <= totalSteps) next++;
        return Math.min(totalSteps, next);
    };

    const prevStep = (step, isHumain) => {
        let prev = step - 1;
        if (isHumain) while (HUMAN_SKIPPED_STEPS.includes(prev) && prev >= 1) prev--;
        return Math.max(1, prev);
    };

    test('fée : étape 1 → 2', () => expect(nextStep(1, false)).toBe(2));
    test('humain : étape 1 → 5 (saute 2/3/4)', () => expect(nextStep(1, true)).toBe(5));
    test('humain : étape 5 → 4 → saute jusqu\'à 1', () => expect(prevStep(5, true)).toBe(1));
    test('humain : retour de l\'étape 6 → 5', () => expect(prevStep(6, true)).toBe(5));
    test('humain : aller de l\'étape 5 → 6', () => expect(nextStep(5, true)).toBe(6));
});
