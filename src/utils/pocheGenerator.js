// src/utils/pocheGenerator.js
// Générateur d'inventaire de poche (objets trouvés sur un PNJ fouillé) — Paris 1899.
// Toutes les tables viennent de Supabase (poche_table_entries) — pas de données hardcodées.
import { tiragePondere, resolveText } from '../data/pnjTables';

function pool(dbEntries, key) {
  return (dbEntries && dbEntries[key]) || [];
}

/**
 * @param {Object} config
 * @param {'masculin'|'feminin'} config.sexe
 * @param {'populaire'|'moyenne'|'aisee'} config.classeSociale
 * @param {'honnete'|'louche'} config.moralite
 * @param {'standard'|'horror'|'espionage'|'pulp'} config.genre
 * @param {'hiver'|'printemps'|'ete'|'automne'} config.saison
 * @param {boolean} config.forceSecret
 * @param {Object} dbEntries - entrées approuvées groupées par table (voir usePocheTableEntries)
 * @returns {string[]}
 */
export function genererInventaire(config = {}, dbEntries = {}) {
  const sexe = config.sexe || 'masculin';
  const classeSociale = config.classeSociale || 'moyenne';
  const moralite = config.moralite || 'honnete';
  const genre = config.genre || 'standard';
  const saison = config.saison || 'hiver';
  const forceSecret = config.forceSecret || false;

  const poolOrdinaire = pool(dbEntries, 'fouille_ordinaire');
  const poolMondaine = pool(dbEntries, 'fouille_mondaine');

  const inventaire = [];
  const nombreObjets = Math.floor(Math.random() * 2) + 2;

  for (let i = 0; i < nombreObjets; i++) {
    let ligneTiree;
    if (classeSociale === 'aisee') {
      ligneTiree = Math.random() < 0.75 ? tiragePondere(poolMondaine) : tiragePondere(poolOrdinaire);
    } else if (classeSociale === 'populaire') {
      ligneTiree = tiragePondere(poolOrdinaire);
    } else {
      ligneTiree = Math.random() < 0.5 ? tiragePondere(poolMondaine) : tiragePondere(poolOrdinaire);
    }
    if (!ligneTiree) continue;
    const nomObjet = resolveText(ligneTiree, sexe);
    if (nomObjet && !inventaire.includes(nomObjet)) inventaire.push(nomObjet);
  }

  const rowSaison = tiragePondere(pool(dbEntries, `fouille_saisonniere_${saison}`));
  if (rowSaison) {
    inventaire.push(`[Météo / ${saison.toUpperCase()}] ${resolveText(rowSaison, sexe)}`);
  }

  let bourse;
  if (classeSociale === 'populaire') {
    const sous = Math.floor(Math.random() * 12) + 2;
    bourse = `Quelques pièces de bronze sales (${sous} sous au fond des poches).`;
  } else if (classeSociale === 'aisee') {
    const louis = Math.floor(Math.random() * 4) + 1;
    const francs = Math.floor(Math.random() * 15) + 5;
    bourse = `Un porte-monnaie en cuir fin contenant ${louis} Louis d'or et ${francs} Francs de germinal.`;
  } else {
    const francs = Math.floor(Math.random() * 8) + 2;
    bourse = `Une bourse en toile contenant ${francs} Francs et quelques centimes de cuivre.`;
  }
  inventaire.push(bourse);

  const declencherSecret = forceSecret || (moralite === 'louche' && Math.random() < 0.5) || Math.random() < 0.15;
  if (declencherSecret) {
    let poolGenreChoisi;
    let prefixe;
    if (genre === 'horror') {
      poolGenreChoisi = pool(dbEntries, 'fouille_horreur');
      prefixe = '[Étrange / Merveilleux]';
    } else if (genre === 'espionage') {
      poolGenreChoisi = pool(dbEntries, 'fouille_espionnage');
      prefixe = '[Compromettant / Espionnage]';
    } else if (genre === 'pulp') {
      poolGenreChoisi = pool(dbEntries, 'fouille_pulp');
      prefixe = '[Milieu / Interlope]';
    } else {
      poolGenreChoisi = pool(dbEntries, 'fouille_secrets');
      prefixe = '[Secret]';
    }
    const ligneGenre = tiragePondere(poolGenreChoisi);
    if (ligneGenre) inventaire.push(`${prefixe} ${resolveText(ligneGenre, sexe)}`);
  }

  return inventaire;
}
