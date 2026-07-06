import {
  computeExteriorPowers,
  deriveEspeceSeconde,
  hasAnomalieActive,
  hasSangMeleActive,
  hasHybrideActive,
  canPurchaseSangMele,
  canPurchaseHybride,
  canPurgeAnomalie,
  canPurgeSangMele,
  isOwnSpeciesPowerAvailable,
  isSecondSpeciesProfondPowerAvailable,
} from '../anomalieChaining';

const FAIRY_DATA = {
  Phenix: {
    pouvoirs: [
      { nom: 'Souffle enflammé', type_pouvoir: 'masque' },
      { nom: 'Renaissance', type_pouvoir: 'demasque' },
    ],
  },
  Succube: {
    pouvoirs: [
      { nom: 'Pensées impures', type_pouvoir: 'masque' },
      { nom: 'Regard hypnotique', type_pouvoir: 'demasque' },
      { nom: 'Désir profond', type_pouvoir: 'profond_masque' },
    ],
  },
  Ondine: {
    pouvoirs: [
      { nom: 'Liquéfaction', type_pouvoir: 'masque' },
    ],
  },
};

describe('computeExteriorPowers', () => {
  it('retourne les pouvoirs masqués/démasqués des autres espèces, triés par nom', () => {
    const result = computeExteriorPowers(FAIRY_DATA, 'Phenix');
    expect(result.map(p => p.nom)).toEqual(['Liquéfaction', 'Pensées impures', 'Regard hypnotique']);
  });

  it('exclut les pouvoirs profond/légendaire des autres espèces', () => {
    const result = computeExteriorPowers(FAIRY_DATA, 'Phenix');
    expect(result.some(p => p.nom === 'Désir profond')).toBe(false);
  });

  it("attache l'origine de chaque pouvoir", () => {
    const result = computeExteriorPowers(FAIRY_DATA, 'Phenix');
    expect(result.find(p => p.nom === 'Pensées impures').origine).toBe('Succube');
  });

  it('retourne un tableau vide sans fairyData ou typeFee', () => {
    expect(computeExteriorPowers(null, 'Phenix')).toEqual([]);
    expect(computeExteriorPowers(FAIRY_DATA, null)).toEqual([]);
  });
});

describe('deriveEspeceSeconde', () => {
  const exteriorPowers = computeExteriorPowers(FAIRY_DATA, 'Phenix');

  it("retourne le champ persisté s'il existe", () => {
    const character = { data: { anomalie_espece_seconde: 'Ondine' }, pouvoirs: [] };
    expect(deriveEspeceSeconde(character, exteriorPowers)).toBe('Ondine');
  });

  it("dérive l'espèce depuis le pouvoir étranger choisi si le champ est absent (personnage existant)", () => {
    const character = { data: {}, pouvoirs: ['Pensées impures'] };
    expect(deriveEspeceSeconde(character, exteriorPowers)).toBe('Succube');
  });

  it("retourne null si aucun pouvoir étranger n'est choisi", () => {
    const character = { data: {}, pouvoirs: [] };
    expect(deriveEspeceSeconde(character, exteriorPowers)).toBeNull();
  });
});

describe('flags atouts', () => {
  it('détecte chaque palier actif indépendamment', () => {
    expect(hasAnomalieActive({ atouts: ['Anomalie féérique'] })).toBe(true);
    expect(hasSangMeleActive({ atouts: [] })).toBe(false);
    expect(hasHybrideActive({ atouts: ['Hybride'] })).toBe(true);
  });
});

describe('gating des paliers', () => {
  it("Sang-mêlé nécessite Anomalie féérique et n'est pas déjà actif", () => {
    expect(canPurchaseSangMele({ atouts: [] })).toBe(false);
    expect(canPurchaseSangMele({ atouts: ['Anomalie féérique'] })).toBe(true);
    expect(canPurchaseSangMele({ atouts: ['Anomalie féérique', 'Sang-mêlé'] })).toBe(false);
  });

  it("Hybride nécessite Sang-mêlé et n'est pas déjà actif", () => {
    expect(canPurchaseHybride({ atouts: ['Anomalie féérique'] })).toBe(false);
    expect(canPurchaseHybride({ atouts: ['Anomalie féérique', 'Sang-mêlé'] })).toBe(true);
    expect(canPurchaseHybride({ atouts: ['Anomalie féérique', 'Sang-mêlé', 'Hybride'] })).toBe(false);
  });

  it("purger l'Anomalie féérique est bloqué tant que Sang-mêlé est actif", () => {
    expect(canPurgeAnomalie({ atouts: ['Anomalie féérique', 'Sang-mêlé'] })).toBe(false);
    expect(canPurgeAnomalie({ atouts: ['Anomalie féérique'] })).toBe(true);
  });

  it("purger Sang-mêlé est bloqué tant qu'Hybride est actif", () => {
    expect(canPurgeSangMele({ atouts: ['Sang-mêlé', 'Hybride'] })).toBe(false);
    expect(canPurgeSangMele({ atouts: ['Sang-mêlé'] })).toBe(true);
  });
});

describe('isOwnSpeciesPowerAvailable', () => {
  it('masque/démasque toujours disponibles', () => {
    expect(isOwnSpeciesPowerAvailable('masque', 3)).toBe(true);
    expect(isOwnSpeciesPowerAvailable('demasque', 1)).toBe(true);
  });

  it('profond disponible à partir de Féérie 7', () => {
    expect(isOwnSpeciesPowerAvailable('profond_masque', 6)).toBe(false);
    expect(isOwnSpeciesPowerAvailable('profond_masque', 7)).toBe(true);
  });

  it('légendaire disponible à Féérie 8 pour un personnage normal', () => {
    expect(isOwnSpeciesPowerAvailable('legendaire_masque', 7)).toBe(false);
    expect(isOwnSpeciesPowerAvailable('legendaire_masque', 8)).toBe(true);
  });

  it('légendaire jamais disponible pour un Hybride, même à Féérie 8', () => {
    expect(isOwnSpeciesPowerAvailable('legendaire_masque', 8, { isHybride: true })).toBe(false);
  });
});

describe('isSecondSpeciesProfondPowerAvailable', () => {
  it('disponible seulement à Féérie 8 et seulement pour les types profond', () => {
    expect(isSecondSpeciesProfondPowerAvailable('profond_masque', 8)).toBe(true);
    expect(isSecondSpeciesProfondPowerAvailable('profond_masque', 7)).toBe(false);
    expect(isSecondSpeciesProfondPowerAvailable('masque', 8)).toBe(false);
    expect(isSecondSpeciesProfondPowerAvailable('legendaire_masque', 8)).toBe(false);
  });
});
