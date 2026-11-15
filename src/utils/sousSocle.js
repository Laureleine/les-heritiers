// src/utils/sousSocle.js
// Ajustements sous le socle de scellement (stats_scellees).
// Spec : docs/superpowers/specs/2026-11-15-ajustements-sous-socle.md
//
// Le socle fige les valeurs de création. Le joueur (correction d'erreur, avec
// remboursement XP) et le Docte (ajustement narratif) peuvent descendre sous ce
// socle, jamais sous la borne de création (min d'espèce / base), sauf la Fortune
// qui peut aller jusqu'à 0 (ruine, avec avertissement).

const PATHS = {
  carac:   (s) => s.caracteristiques,
  comp:    (s) => s.competencesLibres?.rangs,
  futile:  (s) => s.competencesFutiles?.rangs,
};

/** Valeur du socle pour un champ (undefined si absent). */
export function getSocleValue(statsScellees, kind, key) {
  if (!statsScellees) return undefined;
  if (kind === 'fortune') return statsScellees.fortune;
  return PATHS[kind]?.(statsScellees)?.[key];
}

/** Retourne une copie de stats_scellees avec la valeur du socle remplacée. */
export function setSocleValue(statsScellees, kind, key, value) {
  const s = { ...(statsScellees || {}) };
  if (kind === 'fortune') { s.fortune = value; return s; }
  if (kind === 'carac') { s.caracteristiques = { ...(s.caracteristiques || {}), [key]: value }; return s; }
  const branch = kind === 'comp' ? 'competencesLibres' : 'competencesFutiles';
  s[branch] = { ...(s[branch] || {}), rangs: { ...(s[branch]?.rangs || {}), [key]: value } };
  return s;
}

/** Abaisse le socle à `newValue` s'il est au-dessus ; sinon inchangé. */
export function lowerSocle(statsScellees, kind, key, newValue) {
  const current = getSocleValue(statsScellees, kind, key);
  if (current === undefined || current <= newValue) return statsScellees;
  return setSocleValue(statsScellees, kind, key, newValue);
}

/** Le passage à `newValue` descend-il sous le socle ? */
export function isSousSocle(statsScellees, kind, key, newValue) {
  const socle = getSocleValue(statsScellees, kind, key);
  return socle !== undefined && newValue < socle;
}

/** Texte de la confirmation joueur. */
export function buildSousSocleMessage({ nom, refund, ruine = false, plancherFortune = 0 }) {
  if (ruine) {
    return `Votre métier et votre espèce vous assurent normalement une Fortune de rang ${plancherFortune}. `
      + `Descendre en dessous signifie une ruine véritable : ce rang n'avait pas été payé en XP, `
      + `vous ne récupérerez donc rien. Ce choix est définitif.`;
  }
  return `« ${nom} » fait partie de votre personnage scellé. Le retirer est définitif : `
    + `le socle de création sera abaissé et vous récupérerez ${refund} XP à réinvestir ailleurs.`;
}

// --- Confirmation globale (appelable depuis des hooks) ----------------------
export const SOUS_SOCLE_EVENT = 'sous-socle-confirm';

/** Demande confirmation via SousSocleConfirmHost : { title, message, warnings, onConfirm }. */
export function requestSousSocleConfirm(detail) {
  window.dispatchEvent(new CustomEvent(SOUS_SOCLE_EVENT, { detail }));
}

/**
 * Applique une correction joueur sous le socle : met à jour la valeur, abaisse le
 * socle et inscrit le remboursement (GAIN, car ce rang n'avait pas été payé en XP).
 */
export function applySousSocleCorrection(dispatchCharacter, character, { kind, key, newValue, updates, label, refund }, gameData) {
  const stats = lowerSocle(character.data?.stats_scellees, kind, key, newValue);
  dispatchCharacter({
    type: 'UPDATE_MULTIPLE',
    payload: { ...updates, data: { ...(character.data || {}), stats_scellees: stats } },
    gameData,
  });
  dispatchCharacter({
    type: 'LOG_XP_TRANSACTION',
    transaction: { type: 'GAIN', code: 'SOCLE_CORRECTION', label, valeur: refund, rang_final: newValue },
    gameData,
  });
}
