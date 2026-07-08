// src/utils/tracasGenerator.js
// Génère un ou plusieurs tracas pondérés pour un personnage — Paris 1899.
// Toutes les tables viennent de Supabase (tracas_table_entries).
import { tiragePondere } from '../data/pnjTables';

const CATEGORIES = ['sante', 'logistique', 'social', 'technologie'];

/**
 * @param {Object} config
 * @param {'toutes'|'sante'|'logistique'|'social'|'technologie'} config.categorie
 * @param {number} config.nombre - 1, 2 ou 3
 * @param {Object} dbEntries - entrées approuvées groupées par table_name
 * @returns {{ categorie: string, titre: string, description: string, exemple: string|null }[]}
 */
export function genererTracas(config = {}, dbEntries = {}) {
  const { categorie = 'toutes', nombre = 1 } = config;

  const cats = categorie === 'toutes' ? CATEGORIES : [categorie];
  const pool = cats.flatMap(cat =>
    (dbEntries[cat] || []).map(e => ({ ...e, categorie: cat }))
  );

  if (!pool.length) return [];

  const results = [];
  const usedIds = new Set();

  for (let i = 0; i < nombre; i++) {
    const disponibles = pool.filter(e => !usedIds.has(e._dbId));
    if (!disponibles.length) break;

    const tracas = tiragePondere(disponibles);
    if (!tracas) break;
    usedIds.add(tracas._dbId);

    let exemple = null;
    if (tracas.exemple_key) {
      const exPool = dbEntries[`ex_${tracas.exemple_key}`] || [];
      const exEntry = tiragePondere(exPool);
      if (exEntry) exemple = exEntry.titre;
    }

    results.push({
      categorie: tracas.categorie,
      titre: tracas.titre,
      description: tracas.description,
      exemple,
    });
  }

  return results;
}
