// src/utils/ambianceGenerator.js
// Générateur d'ambiance de rue/voyage (décor, météo, événement, intrigue) — Paris et alentours 1899.
// Toutes les tables viennent de Supabase (ambiance_table_entries) — pas de données hardcodées.
import { tiragePondere } from '../data/pnjTables';

function pool(dbEntries, key) {
  return (dbEntries && dbEntries[key]) || [];
}

function groupeEvenement(zone) {
  return (zone === 'paris_populaire' || zone === 'paris_riche') ? 'paris' : zone;
}

/**
 * @param {Object} config
 * @param {'paris_populaire'|'paris_riche'|'banlieue_industrielle'|'campagne_rurale'} config.zone
 * @param {'jour'|'nuit'} config.moment
 * @param {'hiver'|'printemps'|'ete'|'automne'} config.saison
 * @param {'standard'|'horror'|'espionage'|'pulp'} config.genre
 * @param {Object} dbEntries - entrées approuvées groupées par table (voir useAmbianceTableEntries)
 * @returns {string[]}
 */
export function genererAmbianceVoyage(config = {}, dbEntries = {}) {
  const zone = config.zone || 'paris_populaire';
  const moment = config.moment || 'jour';
  const saison = config.saison || 'printemps';
  const genre = config.genre || 'standard';

  const scene = [];

  const decor = tiragePondere(pool(dbEntries, `decor_${zone}`));
  if (decor) scene.push(`[CADRE] ${decor.value}`);

  const groupe = groupeEvenement(zone);
  const evenement = tiragePondere(pool(dbEntries, `evenement_${groupe}_${moment}`));
  if (evenement) scene.push(`[VIE] ${evenement.value}`);

  const meteo = tiragePondere(pool(dbEntries, `meteo_${saison}`));
  if (meteo) scene.push(`[MÉTÉO] ${meteo.value}`);

  if (genre !== 'standard') {
    const intrigue = tiragePondere(pool(dbEntries, `intrigue_${genre}`));
    if (intrigue) scene.push(`[INTRIGUE - ${genre.toUpperCase()}] ${intrigue.value}`);
  }

  return scene;
}
