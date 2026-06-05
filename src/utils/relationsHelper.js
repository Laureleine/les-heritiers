// src/utils/relationsHelper.js
// 17.3.0 — Système de Relations & Faux-semblants

const CATEGORIES_SUGGESTIONS = ['Allié', 'Neutre', 'Famille', 'Hostile'];

const CATEGORY_COLORS = {
  allié: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', dot: 'bg-green-500' },
  neutre: { bg: 'bg-stone-100', text: 'text-stone-600', border: 'border-stone-200', dot: 'bg-stone-400' },
  famille: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200', dot: 'bg-amber-500' },
  hostile: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', dot: 'bg-red-500' },
};

function normalize(str) {
  return (str || '').toLowerCase().trim();
}

export function getCategoryStyle(categorie) {
  const key = normalize(categorie);
  for (const [prefix, style] of Object.entries(CATEGORY_COLORS)) {
    if (key.startsWith(prefix) || key.includes(prefix)) return style;
  }
  return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', dot: 'bg-blue-400' };
}

export function migrateContactContent(content) {
  if (!content) return content;
  if (content.relations) return content;

  const migrated = { ...content };
  const oldRelation = content.statut_relation || 'Neutre';
  migrated.relations = [{ categorie: oldRelation, sous_categorie: '', visibilite: 'prive' }];
  delete migrated.statut_relation;

  if (typeof content.localisation === 'string') {
    migrated.localisation = { texte: content.localisation, rue: '', quartier: '', ville: '', pays: '' };
  } else if (!content.localisation) {
    migrated.localisation = { texte: '', rue: '', quartier: '', ville: '', pays: '' };
  } else if (typeof content.localisation === 'object') {
    migrated.localisation = { texte: '', rue: '', quartier: '', ville: '', pays: '', ...content.localisation };
  }

  if (!migrated.faux_semblant) {
    migrated.faux_semblant = { actif: false, type_fee: '', publie: [], realite: [] };
  }

  return migrated;
}

export function getVisibleRelations(contactContent, isDocte = false) {
  if (!contactContent?.relations) return [];
  const fs = contactContent.faux_semblant;

  if (fs?.actif && isDocte) {
    return fs.realite?.length > 0 ? fs.realite : contactContent.relations;
  }

  if (fs?.actif && fs.publie?.length > 0) {
    return fs.publie;
  }

  return contactContent.relations;
}

export function hasActiveFauxSemblant(content) {
  return content?.faux_semblant?.actif === true;
}

export function getFauxSemblantTypeFee(content) {
  return content?.faux_semblant?.type_fee || '';
}

export { CATEGORIES_SUGGESTIONS, CATEGORY_COLORS };
