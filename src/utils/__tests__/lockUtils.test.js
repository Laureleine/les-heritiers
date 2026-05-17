import { isCharacterScelle, isCharacterLocked } from '../lockUtils';

describe('isCharacterScelle', () => {
  it('retourne true pour statut "scelle"', () => {
    expect(isCharacterScelle({ statut: 'scelle' })).toBe(true);
  });

  it('retourne true pour statut "scellé" (orthographe legacy)', () => {
    expect(isCharacterScelle({ statut: 'scellé' })).toBe(true);
  });

  it('retourne false pour statut "brouillon"', () => {
    expect(isCharacterScelle({ statut: 'brouillon' })).toBe(false);
  });

  it('retourne false si statut est undefined', () => {
    expect(isCharacterScelle({})).toBe(false);
  });

  it('retourne false si character est null', () => {
    expect(isCharacterScelle(null)).toBe(false);
  });

  it('retourne false si character est undefined', () => {
    expect(isCharacterScelle(undefined)).toBe(false);
  });

  it('retourne false pour statut chaîne vide', () => {
    expect(isCharacterScelle({ statut: '' })).toBe(false);
  });
});

describe('isCharacterLocked', () => {
  it('retourne true si isReadOnly est true', () => {
    expect(isCharacterLocked({ statut: 'brouillon' }, true)).toBe(true);
  });

  it('retourne true si le personnage est scellé', () => {
    expect(isCharacterLocked({ statut: 'scelle' }, false)).toBe(true);
  });

  it('retourne false si non scellé et non read-only', () => {
    expect(isCharacterLocked({ statut: 'brouillon' }, false)).toBe(false);
  });

  it('cumule scellé + read-only', () => {
    expect(isCharacterLocked({ statut: 'scelle' }, true)).toBe(true);
  });

  it('retourne false si character null et isReadOnly false', () => {
    expect(isCharacterLocked(null, false)).toBe(false);
  });
});
