// src/utils/anomalieChaining.js
// Logique pure pour la chaîne Anomalie féérique → Sang-mêlé → Hybride.
// Extrait pour être testable sans monter de composants React ; consommé par
// AnomalieFeeriqueWidget.jsx, StepCapacites.js et StepPouvoirs.js.

export function computeExteriorPowers(fairyData, typeFee) {
  if (!fairyData || !typeFee) return [];
  const others = [];
  const myFairyPowers = fairyData[typeFee]?.pouvoirs?.map(p => p.nom) || [];

  Object.keys(fairyData).forEach(fName => {
    if (fName === typeFee) return;
    const fData = fairyData[fName];
    if (!fData?.pouvoirs) return;
    fData.pouvoirs.forEach(p => {
      const isStandard = p.type_pouvoir === 'masque' || p.type_pouvoir === 'demasque';
      if (isStandard && !myFairyPowers.includes(p.nom) && !others.some(ex => ex.nom === p.nom)) {
        others.push({ ...p, origine: fName });
      }
    });
  });

  return others.sort((a, b) => a.nom.localeCompare(b.nom));
}

export function deriveEspeceSeconde(character, exteriorPowers) {
  const stored = character?.data?.anomalie_espece_seconde;
  if (stored) return stored;

  const chosenNom = (character?.pouvoirs || []).find(pNom =>
    exteriorPowers.some(ep => ep.nom === pNom)
  );
  if (!chosenNom) return null;

  const match = exteriorPowers.find(ep => ep.nom === chosenNom);
  return match ? match.origine : null;
}

export function hasAnomalieActive(character) {
  return (character?.atouts || []).includes('Anomalie féérique');
}

export function hasSangMeleActive(character) {
  return (character?.atouts || []).includes('Sang-mêlé');
}

export function hasHybrideActive(character) {
  return (character?.atouts || []).includes('Hybride');
}

export function canPurchaseSangMele(character) {
  return hasAnomalieActive(character) && !hasSangMeleActive(character);
}

export function canPurchaseHybride(character) {
  return hasSangMeleActive(character) && !hasHybrideActive(character);
}

export function canPurgeAnomalie(character) {
  return !hasSangMeleActive(character);
}

export function canPurgeSangMele(character) {
  return !hasHybrideActive(character);
}

export function isOwnSpeciesPowerAvailable(typePouvoir, currentFeerie, { isHybride = false } = {}) {
  const type = typePouvoir || '';
  if (type.includes('legendaire') || type.includes('légendaire')) {
    return isHybride ? false : currentFeerie >= 8;
  }
  if (type.includes('profond')) return currentFeerie >= 7;
  return type === 'masque' || type === 'demasque';
}

export function isSecondSpeciesProfondPowerAvailable(typePouvoir, currentFeerie) {
  const type = typePouvoir || '';
  const isProfond = type === 'profond_masque' || type === 'profond_demasque';
  return isProfond && currentFeerie >= 8;
}
