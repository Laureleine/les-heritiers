// src/utils/__tests__/relationsHelper.test.js
// Tests de non-régression pour le système de Relations & Faux-semblants

import {
  migrateContactContent,
  getCategoryStyle,
  getVisibleRelations,
  hasActiveFauxSemblant,
  getFauxSemblantTypeFee,
  CATEGORIES_SUGGESTIONS,
} from '../relationsHelper';

// ============================================================================
// migrateContactContent
// ============================================================================
describe('migrateContactContent', () => {
  it('retourne le contenu inchangé si déjà au nouveau format', () => {
    const input = {
      nom: 'Test',
      relations: [{ categorie: 'Allié', sous_categorie: 'Confiance', visibilite: 'prive' }],
      faux_semblant: { actif: false, type_fee: '', publie: [], realite: [] },
      localisation: { texte: 'Paris', rue: '', quartier: '', ville: 'Paris', pays: 'France' },
    };
    expect(migrateContactContent(input)).toBe(input);
  });

  it('migre un ancien contact avec statut_relation string', () => {
    const input = { nom: 'Archibald', statut_relation: 'Hostile', localisation: 'Rive Gauche', description: 'Un type louche' };
    const result = migrateContactContent(input);
    expect(result.nom).toBe('Archibald');
    expect(result.relations).toEqual([{ categorie: 'Hostile', sous_categorie: '', visibilite: 'prive' }]);
    expect(result.statut_relation).toBeUndefined();
    expect(result.faux_semblant).toEqual({ actif: false, type_fee: '', publie: [], realite: [] });
    expect(result.localisation.texte).toBe('Rive Gauche');
  });

  it('migre un contact sans statut_relation (Neutre par défaut)', () => {
    const input = { nom: 'Inconnu', description: '?' };
    const result = migrateContactContent(input);
    expect(result.relations).toEqual([{ categorie: 'Neutre', sous_categorie: '', visibilite: 'prive' }]);
  });

  it('gère le cas où localisation est un objet partiel', () => {
    const input = { nom: 'Test', statut_relation: 'Allié', localisation: { ville: 'Lyon' } };
    const result = migrateContactContent(input);
    expect(result.localisation.texte).toBe('');
    expect(result.localisation.ville).toBe('Lyon');
  });

  it('retourne null/undefined inchangé', () => {
    expect(migrateContactContent(null)).toBeNull();
    expect(migrateContactContent(undefined)).toBeUndefined();
  });

  it('préserve la description et autres champs', () => {
    const input = { nom: 'Baron', description: 'Un noble', statut_relation: 'Allié', localisation: 'Château' };
    const result = migrateContactContent(input);
    expect(result.description).toBe('Un noble');
    expect(result.nom).toBe('Baron');
  });
});

// ============================================================================
// getCategoryStyle
// ============================================================================
describe('getCategoryStyle', () => {
  it('retourne le style vert pour Allié', () => {
    const style = getCategoryStyle('Allié');
    expect(style.bg).toContain('green');
  });

  it('retourne le style rouge pour Hostile', () => {
    const style = getCategoryStyle('Hostile');
    expect(style.bg).toContain('red');
  });

  it('retourne le style ambre pour Famille', () => {
    const style = getCategoryStyle('Famille');
    expect(style.bg).toContain('amber');
  });

  it('retourne le style bleu par défaut pour une catégorie inconnue', () => {
    const style = getCategoryStyle('Mystery');
    expect(style.bg).toContain('blue');
  });

  it('est insensible à la casse', () => {
    expect(getCategoryStyle('allié').bg).toContain('green');
    expect(getCategoryStyle('ALLIÉ').bg).toContain('green');
    expect(getCategoryStyle('hostile').bg).toContain('red');
  });
});

// ============================================================================
// getVisibleRelations
// ============================================================================
describe('getVisibleRelations', () => {
  const relations = [
    { categorie: 'Allié', sous_categorie: 'Confiance', visibilite: 'prive' },
  ];

  it('retourne les relations normales si pas de faux-semblant', () => {
    const content = { relations, faux_semblant: { actif: false } };
    expect(getVisibleRelations(content)).toEqual(relations);
  });

  it('retourne les relations publiées si faux-semblant actif (non Docte)', () => {
    const content = {
      relations,
      faux_semblant: {
        actif: true,
        publie: [{ categorie: 'Neutre', sous_categorie: 'Connaissance' }],
        realite: [{ categorie: 'Hostile', sous_categorie: 'Ennemi' }],
      },
    };
    expect(getVisibleRelations(content)).toEqual([{ categorie: 'Neutre', sous_categorie: 'Connaissance' }]);
  });

  it('retourne la réalité si faux-semblant actif et isDocte=true', () => {
    const content = {
      relations,
      faux_semblant: {
        actif: true,
        publie: [{ categorie: 'Neutre', sous_categorie: 'Connaissance' }],
        realite: [{ categorie: 'Hostile', sous_categorie: 'Ennemi' }],
      },
    };
    expect(getVisibleRelations(content, true)).toEqual([{ categorie: 'Hostile', sous_categorie: 'Ennemi' }]);
  });

  it('retourne relations normales si faux-semblant actif mais publie vide', () => {
    const content = {
      relations,
      faux_semblant: { actif: true, publie: [], realite: [{ categorie: 'Hostile', sous_categorie: 'Ennemi' }] },
    };
    expect(getVisibleRelations(content)).toEqual([{ categorie: 'Allié', sous_categorie: 'Confiance', visibilite: 'prive' }]);
  });

  it('retourne tableau vide si pas de relations', () => {
    expect(getVisibleRelations({})).toEqual([]);
    expect(getVisibleRelations(null)).toEqual([]);
  });
});

// ============================================================================
// hasActiveFauxSemblant / getFauxSemblantTypeFee
// ============================================================================
describe('hasActiveFauxSemblant', () => {
  it('retourne true si faux_semblant.actif === true', () => {
    expect(hasActiveFauxSemblant({ faux_semblant: { actif: true } })).toBe(true);
  });

  it('retourne false si faux_semblant.actif === false', () => {
    expect(hasActiveFauxSemblant({ faux_semblant: { actif: false } })).toBe(false);
  });

  it('retourne false si pas de faux_semblant', () => {
    expect(hasActiveFauxSemblant({})).toBe(false);
    expect(hasActiveFauxSemblant(null)).toBe(false);
  });
});

describe('getFauxSemblantTypeFee', () => {
  it('retourne le type de fée', () => {
    expect(getFauxSemblantTypeFee({ faux_semblant: { type_fee: 'Songeuse' } })).toBe('Songeuse');
  });

  it('retourne chaîne vide si pas de type', () => {
    expect(getFauxSemblantTypeFee({})).toBe('');
    expect(getFauxSemblantTypeFee(null)).toBe('');
  });
});

// ============================================================================
// CATEGORIES_SUGGESTIONS
// ============================================================================
describe('CATEGORIES_SUGGESTIONS', () => {
  it('contient les 4 catégories de base', () => {
    expect(CATEGORIES_SUGGESTIONS).toContain('Allié');
    expect(CATEGORIES_SUGGESTIONS).toContain('Neutre');
    expect(CATEGORIES_SUGGESTIONS).toContain('Famille');
    expect(CATEGORIES_SUGGESTIONS).toContain('Hostile');
  });
});
