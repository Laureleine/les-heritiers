// src/utils/__tests__/pocheGenerator.test.js
import { genererInventaire } from '../pocheGenerator';

const poolNeutre = (label) => [{ weight: 1, m: `${label} neutre` }];
const poolGenre = (label) => [{ weight: 1, m: `${label} masculin`, f: `${label} féminin` }];

function dbEntriesFixture() {
  return {
    fouille_ordinaire: poolNeutre('objet ordinaire'),
    fouille_mondaine: poolGenre('objet mondain'),
    fouille_secrets: poolNeutre('secret'),
    fouille_horreur: poolNeutre('horreur'),
    fouille_espionnage: poolNeutre('espionnage'),
    fouille_pulp: poolNeutre('pulp'),
    fouille_saisonniere_hiver: poolGenre('hiver'),
    fouille_saisonniere_printemps: poolNeutre('printemps'),
    fouille_saisonniere_ete: poolNeutre('ete'),
    fouille_saisonniere_automne: poolNeutre('automne'),
  };
}

describe('genererInventaire', () => {
  it('injecte toujours un objet saisonnier préfixé par la saison', () => {
    const inv = genererInventaire({ saison: 'hiver' }, dbEntriesFixture());
    expect(inv.some((o) => o.startsWith('[Météo / HIVER]'))).toBe(true);
  });

  it('résout la forme féminine quand sexe = feminin', () => {
    const inv = genererInventaire({ sexe: 'feminin', saison: 'hiver' }, dbEntriesFixture());
    expect(inv.some((o) => o.includes('hiver féminin'))).toBe(true);
  });

  it('résout la forme masculine par défaut', () => {
    const inv = genererInventaire({ sexe: 'masculin', saison: 'hiver' }, dbEntriesFixture());
    expect(inv.some((o) => o.includes('hiver masculin'))).toBe(true);
  });

  it('déclenche toujours un secret quand forceSecret est vrai', () => {
    const inv = genererInventaire({ forceSecret: true, genre: 'standard' }, dbEntriesFixture());
    expect(inv.some((o) => o.startsWith('[Secret]'))).toBe(true);
  });

  it('pioche dans le pool du genre littéraire choisi quand un secret est forcé', () => {
    const inv = genererInventaire({ forceSecret: true, genre: 'horror' }, dbEntriesFixture());
    expect(inv.some((o) => o.startsWith('[Étrange / Merveilleux]'))).toBe(true);
  });

  it('calcule une bourse populaire en sous', () => {
    const inv = genererInventaire({ classeSociale: 'populaire' }, dbEntriesFixture());
    expect(inv.some((o) => /sous au fond des poches/.test(o))).toBe(true);
  });

  it('calcule une bourse aisée en Louis et Francs', () => {
    const inv = genererInventaire({ classeSociale: 'aisee' }, dbEntriesFixture());
    expect(inv.some((o) => /Louis d'or/.test(o))).toBe(true);
  });

  it('ne plante pas quand les tables sont vides', () => {
    const inv = genererInventaire({ saison: 'hiver' }, {});
    expect(Array.isArray(inv)).toBe(true);
  });

  it('respecte les poids sur un grand nombre de tirages', () => {
    const dbEntries = {
      ...dbEntriesFixture(),
      fouille_ordinaire: [
        { weight: 90, m: 'fréquent' },
        { weight: 10, m: 'rare' },
      ],
    };
    let frequent = 0;
    const total = 500;
    for (let i = 0; i < total; i++) {
      const inv = genererInventaire({ classeSociale: 'populaire' }, dbEntries);
      if (inv.includes('fréquent')) frequent++;
    }
    expect(frequent / total).toBeGreaterThan(0.5);
  });
});
