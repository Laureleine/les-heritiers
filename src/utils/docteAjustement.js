// src/utils/docteAjustement.js
// Calculs du panneau « Ajustement du Docte » (spec 2026-11-15-ajustements-sous-socle).
import { getCaracCost, getUtileCost, getFutileCost, getFortuneCost, getFortuneSpecialites } from './xpCalculator';

/** Somme des coûts des rangs franchis entre deux scores (dans un sens ou l'autre). */
export function sumStepCosts(costFn, fromScore, toScore) {
  let total = 0;
  for (let r = Math.min(fromScore, toScore); r < Math.max(fromScore, toScore); r++) {
    total += costFn(r) || 0;
  }
  return total;
}

/**
 * Coût XP des rangs franchis. Pour comp/futile, `from`/`to` sont des scores
 * totaux (base + rangs), car le coût dépend du score.
 */
export function computeAjustementXp(kind, from, to, character) {
  if (kind === 'carac') return sumStepCosts(getCaracCost, from, to);
  if (kind === 'comp') return sumStepCosts(getUtileCost, from, to);
  if (kind === 'futile') return sumStepCosts(getFutileCost, from, to);
  const specs = getFortuneSpecialites(character);
  return sumStepCosts(r => getFortuneCost(r, character?.computedStats, specs), from, to);
}

/** Modes XP proposés selon le sens de l'ajustement. */
export function xpModesFor(isRetrait) {
  return isRetrait
    ? [{ id: 'aucun', label: 'Perte sèche' }, { id: 'rembourse', label: 'Rembourser les XP' }]
    : [{ id: 'aucun', label: 'Offert' }, { id: 'paye', label: "Payé avec l'XP du joueur" }];
}

/** Avertissements à afficher au Docte avant validation. */
export function ajustementWarnings({ kind, key, from, to, plancherFortune }) {
  const warnings = [];
  if (to >= from) return warnings;
  if (kind === 'carac' && key === 'esprit') {
    warnings.push("Baisser l'Esprit peut laisser la fiche avec trop de rangs gratuits en compétences d'Érudit et de Savant : rien n'est recalculé automatiquement.");
  }
  if (kind === 'fortune' && to < plancherFortune) {
    warnings.push(`Le métier et l'espèce assurent normalement une Fortune de rang ${plancherFortune} : descendre en dessous signifie une ruine véritable.`);
  }
  return warnings;
}
