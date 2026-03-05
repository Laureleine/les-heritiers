// src/utils/sqlGenerator.js
// 10.5.0

export const generateApprovalSQL = (change, seal = false) => {
  // ✨ L'OUBLI ÉTAIT ICI : On déballe toutes les variables nécessaires
  const proposedData = change.new_data || change.proposed_data || {};
  const { _relations, competencesPredilection, competencesFutilesPredilection, competencesUtiles, ...mainData } = proposedData;
  const isInsert = !!mainData.id;
  const targetId = isInsert ? mainData.id : change.record_id;
  
  let sqlQuery = `-- Action pour ${change.record_name} (${change.table_name})\nBEGIN;\n\n`;

  if (Object.keys(mainData).length > 0) {
	if (isInsert) {
	  const columns = Object.keys(mainData).join(', ');
	  const values = Object.values(mainData).map(value => {
		if (value === null) return 'NULL';
		if (typeof value === 'object') return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
		if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
		return value;
	  }).join(', ');
	  sqlQuery += `INSERT INTO public.${change.table_name} (${columns}) VALUES (${values});\n`;
	} else {
	  const setClauses = Object.entries(mainData).map(([key, value]) => {
		if (value === null) return `${key} = NULL`;
		if (typeof value === 'object') return `${key} = '${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
		if (typeof value === 'string') return `${key} = '${value.replace(/'/g, "''")}'`;
		return `${key} = ${value}`;
	  }).join(',\n  ');
	  sqlQuery += `UPDATE public.${change.table_name}\nSET ${setClauses}\nWHERE id = '${targetId}';\n`;
	}
  }

  if (_relations) {
	// ... Fées -> Relations sortantes ...
	if (_relations.capacites) {
	  sqlQuery += `\nDELETE FROM public.fairy_type_capacites WHERE fairy_type_id = '${targetId}';\n`;
	  if (_relations.capacites.length > 0) {
		const inserts = _relations.capacites.map(c => `('${targetId}', '${c.id}', '${c.type}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_capacites (fairy_type_id, capacite_id, capacite_type) VALUES ${inserts};\n`;
	  }
	}

  if (_relations.pouvoirs) {
	if (Array.isArray(_relations.pouvoirs)) {
	  // VIEUX FORMAT (Rétrocompatibilité) : Annule et remplace
	  sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE fairy_type_id = '${targetId}';\n`;
	  if (_relations.pouvoirs.length > 0) {
		const inserts = _relations.pouvoirs.map(id => `('${targetId}', '${id}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_powers (fairy_type_id, power_id) VALUES ${inserts};\n`;
	  }
	} else {
	  // NOUVEAU FORMAT CHIRURGICAL : On ajoute et on retire uniquement ce qu'il faut !
	  if (_relations.pouvoirs.removed && _relations.pouvoirs.removed.length > 0) {
		const removedIds = _relations.pouvoirs.removed.map(id => `'${id}'`).join(', ');
		sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE fairy_type_id = '${targetId}' AND power_id IN (${removedIds});\n`;
	  }
	  if (_relations.pouvoirs.added && _relations.pouvoirs.added.length > 0) {
		const inserts = _relations.pouvoirs.added.map(id => `('${targetId}', '${id}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_powers (fairy_type_id, power_id) VALUES ${inserts};\n`;
	  }
	}
  }

  if (_relations.atouts) {
	if (Array.isArray(_relations.atouts)) {
	  // VIEUX FORMAT
	  sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE fairy_type_id = '${targetId}';\n`;
	  if (_relations.atouts.length > 0) {
		const inserts = _relations.atouts.map(id => `('${targetId}', '${id}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_assets (fairy_type_id, asset_id) VALUES ${inserts};\n`;
	  }
	} else {
	  // NOUVEAU FORMAT CHIRURGICAL
	  if (_relations.atouts.removed && _relations.atouts.removed.length > 0) {
		const removedIds = _relations.atouts.removed.map(id => `'${id}'`).join(', ');
		sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE fairy_type_id = '${targetId}' AND asset_id IN (${removedIds});\n`;
	  }
	  if (_relations.atouts.added && _relations.atouts.added.length > 0) {
		const inserts = _relations.atouts.added.map(id => `('${targetId}', '${id}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_assets (fairy_type_id, asset_id) VALUES ${inserts};\n`;
	  }
	}
  }
  
	if (_relations.competencesUtiles !== undefined) {
	  sqlQuery += `\nDELETE FROM public.fairy_competences_predilection WHERE fairy_type_id = '${targetId}';\n`;
	  try {
		const utilesList = typeof _relations.competencesUtiles === 'string' ? JSON.parse(_relations.competencesUtiles) : _relations.competencesUtiles;
		if (utilesList && utilesList.length > 0) {
		  const utilesInserts = utilesList.map(comp => {
			const isChoice = comp.isChoix ? 'true' : 'false';
			const isSpecChoice = comp.isSpecialiteChoix ? 'true' : 'false';
			const compQuery = comp.nom ? `(SELECT id FROM public.competences WHERE name = '${comp.nom.replace(/'/g, "''")}' LIMIT 1)` : 'null';
			const specialite = comp.specialite ? `'${comp.specialite.replace(/'/g, "''")}'` : 'null';
			let choiceIds = 'null';
			let choiceOptions = 'null';

			if (comp.isChoix && comp.options && comp.options.length > 0) {
			  const namesList = comp.options.map(o => `'${o.replace(/'/g, "''")}'`).join(', ');
			  choiceIds = `ARRAY(SELECT id FROM public.competences WHERE name IN (${namesList}))::uuid[]`;
			} else if (comp.isSpecialiteChoix && comp.options && comp.options.length > 0) {
			  choiceOptions = `'${JSON.stringify(comp.options).replace(/'/g, "''")}'::jsonb`;
			}

			return `('${targetId}', ${compQuery}, ${specialite}, ${isChoice}, ${isSpecChoice}, ${choiceIds}, ${choiceOptions})`;
		  }).join(',\n  ');
		  sqlQuery += `INSERT INTO public.fairy_competences_predilection (fairy_type_id, competence_id, specialite, is_choice, is_specialite_choice, choice_ids, choice_options) VALUES \n  ${utilesInserts};\n`;
		}
	  } catch (e) {
		sqlQuery += `-- ERREUR PARSING JSON: ${e.message}\n`;
	  }
	}

	if (_relations.competencesFutiles !== undefined) {
	  sqlQuery += `\nDELETE FROM public.fairy_competences_futiles_predilection WHERE fairy_type_id = '${targetId}';\n`;
	  if (_relations.competencesFutiles.length > 0) {
		const futInserts = _relations.competencesFutiles.map(fut => {
		  const isChoice = fut.is_choice ? 'true' : 'false';
		  const compQuery = fut.competence_futile_id ? `'${fut.competence_futile_id}'` : 'null';
		  const choiceOptions = fut.choice_options ? `'${JSON.stringify(fut.choice_options).replace(/'/g, "''")}'::jsonb` : 'null';
		  return `('${targetId}', ${compQuery}, ${isChoice}, ${choiceOptions})`;
		}).join(',\n  ');
		sqlQuery += `INSERT INTO public.fairy_competences_futiles_predilection (fairy_type_id, competence_futile_id, is_choice, choice_options) VALUES \n  ${futInserts};\n`;
	  }
	}

	// 🔗 NOUVEAU : GESTION DES RELATIONS INVERSÉES (Lier à une Fée)
  if (_relations.fairyIds !== undefined) {
	const isArray = Array.isArray(_relations.fairyIds);
	const removed = isArray ? [] : (_relations.fairyIds.removed || []);
	const added = isArray ? _relations.fairyIds : (_relations.fairyIds.added || []);

	if (change.table_name === 'fairy_capacites') {
	  if (isArray) sqlQuery += `\nDELETE FROM public.fairy_type_capacites WHERE capacite_id = '${targetId}';\n`;
	  else if (removed.length > 0) sqlQuery += `\nDELETE FROM public.fairy_type_capacites WHERE capacite_id = '${targetId}' AND fairy_type_id IN (${removed.map(id => `'${id}'`).join(', ')});\n`;
	  
	  if (added.length > 0) {
		const inserts = added.map(fId => `('${fId}', '${targetId}', 'choix')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_capacites (fairy_type_id, capacite_id, capacite_type) VALUES ${inserts};\n`;
	  }
	}

	if (change.table_name === 'fairy_powers') {
	  if (isArray) sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE power_id = '${targetId}';\n`;
	  else if (removed.length > 0) sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE power_id = '${targetId}' AND fairy_type_id IN (${removed.map(id => `'${id}'`).join(', ')});\n`;
	  
	  if (added.length > 0) {
		const inserts = added.map(fId => `('${fId}', '${targetId}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_powers (fairy_type_id, power_id) VALUES ${inserts};\n`;
	  }
	}

	if (change.table_name === 'fairy_assets') {
	  if (isArray) sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE asset_id = '${targetId}';\n`;
	  else if (removed.length > 0) sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE asset_id = '${targetId}' AND fairy_type_id IN (${removed.map(id => `'${id}'`).join(', ')});\n`;
	  
	  if (added.length > 0) {
		const inserts = added.map(fId => `('${fId}', '${targetId}')`).join(', ');
		sqlQuery += `INSERT INTO public.fairy_type_assets (fairy_type_id, asset_id) VALUES ${inserts};\n`;
	  }
	}
  }
}

  // 🛡️ Scellage de l'élément si demandé par le Conseil
  if (seal) {
	sqlQuery += `\n-- 🛡️ Scellage de l'élément par les Gardiens\nUPDATE public.${change.table_name} SET is_sealed = true WHERE id = '${targetId}';\n`;
  }

  sqlQuery += `\nCOMMIT;`;
  
  return sqlQuery;
};