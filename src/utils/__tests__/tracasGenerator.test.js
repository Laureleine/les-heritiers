import { describe, it, expect } from 'vitest';
import { genererTracas } from '../tracasGenerator';

const DB_ENTRIES = {
  sante: [
    { _dbId: 1, titre: 'Rhume tenace', description: 'Desc', exemple_key: null, weight: 50 },
    { _dbId: 2, titre: 'Mal de dents', description: null, exemple_key: null, weight: 25 },
  ],
  logistique: [
    { _dbId: 3, titre: 'Loyer impayé', description: 'Desc', exemple_key: 'pli_officiel', weight: 50 },
  ],
  social: [
    { _dbId: 4, titre: 'Querelle de voisinage', description: null, exemple_key: null, weight: 25 },
  ],
  technologie: [
    { _dbId: 5, titre: 'Gaz éteint', description: null, exemple_key: null, weight: 5 },
  ],
  ex_pli_officiel: [
    { _dbId: 10, titre: 'Une mise en demeure du percepteur', weight: 10 },
    { _dbId: 11, titre: 'Une lettre du tribunal de commerce', weight: 10 },
  ],
};

describe('genererTracas', () => {
  it('retourne un tableau vide si dbEntries est vide', () => {
    expect(genererTracas({ categorie: 'toutes', nombre: 1 }, {})).toEqual([]);
  });

  it('retourne le bon nombre de résultats', () => {
    const r = genererTracas({ categorie: 'toutes', nombre: 3 }, DB_ENTRIES);
    expect(r).toHaveLength(3);
  });

  it('ne tire jamais le même tracas deux fois', () => {
    const r = genererTracas({ categorie: 'toutes', nombre: 3 }, DB_ENTRIES);
    const ids = r.map((t) => t.titre);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('filtre par catégorie quand spécifiée', () => {
    for (let i = 0; i < 10; i++) {
      const r = genererTracas({ categorie: 'sante', nombre: 1 }, DB_ENTRIES);
      expect(r[0].categorie).toBe('sante');
    }
  });

  it('chaque résultat a categorie, titre, description, exemple', () => {
    const r = genererTracas({ categorie: 'toutes', nombre: 1 }, DB_ENTRIES);
    expect(r[0]).toHaveProperty('categorie');
    expect(r[0]).toHaveProperty('titre');
    expect(r[0]).toHaveProperty('description');
    expect(r[0]).toHaveProperty('exemple');
  });

  it('tire un exemple depuis le sous-générateur quand exemple_key est défini', () => {
    let found = false;
    for (let i = 0; i < 30; i++) {
      const r = genererTracas({ categorie: 'logistique', nombre: 1 }, DB_ENTRIES);
      if (r[0]?.exemple) { found = true; break; }
    }
    expect(found).toBe(true);
  });

  it('exemple est null quand aucun sous-générateur', () => {
    for (let i = 0; i < 10; i++) {
      const r = genererTracas({ categorie: 'social', nombre: 1 }, DB_ENTRIES);
      expect(r[0].exemple).toBeNull();
    }
  });

  it('ne plante pas si nombre > pool disponible', () => {
    const r = genererTracas({ categorie: 'technologie', nombre: 5 }, DB_ENTRIES);
    expect(r).toHaveLength(1);
  });
});
