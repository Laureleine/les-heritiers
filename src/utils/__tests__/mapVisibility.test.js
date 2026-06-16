import { describe, it, expect } from 'vitest';
import { getDocteCircles, getVisiblePoints } from '../mapVisibility';

describe('getDocteCircles', () => {
  const cercles = [
    { id: 'c1', nom: 'Cercle A', docte_id: 'u1' },
    { id: 'c2', nom: 'Cercle B', docte_id: 'u2' },
    { id: 'c3', nom: 'Cercle C', docte_id: 'u1' },
  ];

  it('retourne les cercles dont userId est le docte_id', () => {
    expect(getDocteCircles(cercles, 'u1')).toEqual([cercles[0], cercles[2]]);
  });

  it('retourne un tableau vide si l\'utilisateur n\'est docte d\'aucun cercle', () => {
    expect(getDocteCircles(cercles, 'u3')).toEqual([]);
  });

  it('gère un tableau de cercles vide', () => {
    expect(getDocteCircles([], 'u1')).toEqual([]);
  });
});

describe('getVisiblePoints', () => {
  const points = [
    { id: 1, visibilite: 'public', visibilite_cercle_id: null, created_by: 'u1' },
    { id: 2, visibilite: 'cercle', visibilite_cercle_id: 'c1',  created_by: 'u2' },
    { id: 3, visibilite: 'cercle', visibilite_cercle_id: 'c2',  created_by: 'u2' },
    { id: 4, visibilite: 'prive',  visibilite_cercle_id: null, created_by: 'u1' },
    { id: 5, visibilite: 'prive',  visibilite_cercle_id: null, created_by: 'u2' },
    { id: 6, visibilite: 'admin',  visibilite_cercle_id: null, created_by: 'u1' },
  ];

  it('renvoie tous les points sans filtre si l\'utilisateur n\'est pas Docte', () => {
    const result = getVisiblePoints(points, { isDocte: false, docteViewMode: 'cercle', docteSelectedCercleId: 'c1', userId: 'u1' });
    expect(result).toBe(points);
  });

  it('Vue Cercle : montre le public + le cercle sélectionné uniquement', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'cercle', docteSelectedCercleId: 'c1', userId: 'u1' });
    expect(result.map(p => p.id)).toEqual([1, 2]);
  });

  it('Vue Cercle : changer de cercle sélectionné change le résultat', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'cercle', docteSelectedCercleId: 'c2', userId: 'u1' });
    expect(result.map(p => p.id)).toEqual([1, 3]);
  });

  it('Vue Cercle : aucun cercle sélectionné ne fait correspondre aucun point "cercle"', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'cercle', docteSelectedCercleId: null, userId: 'u1' });
    expect(result.map(p => p.id)).toEqual([1]);
  });

  it('Vue Cercle : n\'expose jamais les points "prive" ni "admin"', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'cercle', docteSelectedCercleId: 'c1', userId: 'u1' });
    expect(result.some(p => p.visibilite === 'prive' || p.visibilite === 'admin')).toBe(false);
  });

  it('Vue Privée : montre uniquement les points privés créés par l\'utilisateur courant', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'prive', docteSelectedCercleId: 'c1', userId: 'u1' });
    expect(result.map(p => p.id)).toEqual([4]);
  });

  it('Vue Privée : n\'expose jamais les points privés d\'un autre utilisateur', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'prive', docteSelectedCercleId: 'c1', userId: 'u1' });
    expect(result.some(p => p.created_by !== 'u1')).toBe(false);
  });

  it('Vue Privée : aucun point privé pour cet utilisateur -> tableau vide', () => {
    const result = getVisiblePoints(points, { isDocte: true, docteViewMode: 'prive', docteSelectedCercleId: 'c1', userId: 'u3' });
    expect(result).toEqual([]);
  });
});
