// src/utils/__tests__/ambianceGenerator.test.js
import { genererAmbianceVoyage } from '../ambianceGenerator';

const pool = (label) => [{ weight: 1, value: label }];

function dbEntriesFixture() {
  return {
    decor_paris_populaire: pool('decor paris populaire'),
    decor_paris_riche: pool('decor paris riche'),
    decor_banlieue_industrielle: pool('decor banlieue'),
    decor_campagne_rurale: pool('decor campagne'),
    evenement_paris_jour: pool('evenement paris jour'),
    evenement_paris_nuit: pool('evenement paris nuit'),
    evenement_banlieue_industrielle_jour: pool('evenement banlieue jour'),
    evenement_banlieue_industrielle_nuit: pool('evenement banlieue nuit'),
    evenement_campagne_rurale_jour: pool('evenement campagne jour'),
    evenement_campagne_rurale_nuit: pool('evenement campagne nuit'),
    meteo_hiver: pool('meteo hiver'),
    meteo_printemps: pool('meteo printemps'),
    meteo_ete: pool('meteo ete'),
    meteo_automne: pool('meteo automne'),
    intrigue_horror: pool('intrigue horror'),
    intrigue_espionage: pool('intrigue espionage'),
    intrigue_pulp: pool('intrigue pulp'),
  };
}

describe('genererAmbianceVoyage', () => {
  it('inclut toujours un élément [CADRE], [MÉTÉO] et [VIE]', () => {
    const scene = genererAmbianceVoyage({}, dbEntriesFixture());
    expect(scene.some((e) => e.startsWith('[CADRE]'))).toBe(true);
    expect(scene.some((e) => e.startsWith('[MÉTÉO]'))).toBe(true);
    expect(scene.some((e) => e.startsWith('[VIE]'))).toBe(true);
  });

  it('tire le décor de la zone demandée', () => {
    const scene = genererAmbianceVoyage({ zone: 'campagne_rurale' }, dbEntriesFixture());
    expect(scene.some((e) => e.includes('decor campagne'))).toBe(true);
  });

  it('regroupe paris_populaire et paris_riche sur le même pool événement', () => {
    const scenePopulaire = genererAmbianceVoyage({ zone: 'paris_populaire', moment: 'jour' }, dbEntriesFixture());
    const sceneRiche = genererAmbianceVoyage({ zone: 'paris_riche', moment: 'jour' }, dbEntriesFixture());
    expect(scenePopulaire.some((e) => e.includes('evenement paris jour'))).toBe(true);
    expect(sceneRiche.some((e) => e.includes('evenement paris jour'))).toBe(true);
  });

  it('utilise le pool événement dédié à la banlieue industrielle', () => {
    const scene = genererAmbianceVoyage({ zone: 'banlieue_industrielle', moment: 'nuit' }, dbEntriesFixture());
    expect(scene.some((e) => e.includes('evenement banlieue nuit'))).toBe(true);
  });

  it("ne déclenche pas d'intrigue quand genre = standard", () => {
    const scene = genererAmbianceVoyage({ genre: 'standard' }, dbEntriesFixture());
    expect(scene.some((e) => e.startsWith('[INTRIGUE'))).toBe(false);
  });

  it("déclenche l'intrigue du genre choisi quand genre !== standard", () => {
    const scene = genererAmbianceVoyage({ genre: 'pulp' }, dbEntriesFixture());
    expect(scene.some((e) => e.startsWith('[INTRIGUE') && e.includes('intrigue pulp'))).toBe(true);
  });

  it('ne plante pas quand les tables sont vides', () => {
    const scene = genererAmbianceVoyage({}, {});
    expect(Array.isArray(scene)).toBe(true);
  });

  it('respecte les poids sur un grand nombre de tirages', () => {
    const dbEntries = {
      ...dbEntriesFixture(),
      decor_paris_populaire: [
        { weight: 90, value: 'fréquent' },
        { weight: 10, value: 'rare' },
      ],
    };
    let frequent = 0;
    const total = 500;
    for (let i = 0; i < total; i++) {
      const scene = genererAmbianceVoyage({ zone: 'paris_populaire' }, dbEntries);
      if (scene.some((e) => e.includes('fréquent'))) frequent++;
    }
    expect(frequent / total).toBeGreaterThan(0.5);
  });
});
