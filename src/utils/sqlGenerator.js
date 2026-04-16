// src/utils/sqlGenerator.js

export const generateApprovalSQL = (change, seal = false) => {
  // ✨ L'OUBLI ÉTAIT ICI : On déballe toutes les variables nécessaires
  const proposedData = change.new_data || change.proposed_data || {};
  const { _relations, competencesPredilection, competencesFutilesPredilection, competencesUtiles, ...mainData } = proposedData;
  const isInsert = !!mainData.id;
  const targetId = isInsert ? mainData.id : change.record_id;
  
  let sqlQuery = `-- Action pour ${change.record_name} (${change.table_name})\nBEGIN;\n\n`;

  if (Object.keys(mainData).length > 0) {
    
    // ✨ NOUVEAU : Le formatteur intelligent qui distingue JSON et Tableaux SQL
    const formatSQLValue = (value) => {
      if (value === null) return 'NULL';
      if (Array.isArray(value)) {
        // Formatage spécifique pour les tableaux texte PostgreSQL (text[])
        const arrayVals = value.map(v => `'${String(v).replace(/'/g, "''")}'`).join(', ');
        return `ARRAY[${arrayVals}]::text[]`;
      }
      if (typeof value === 'object') return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
      if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
      return value;
    };

    if (isInsert) {
      const columns = Object.keys(mainData).join(', ');
      const values = Object.values(mainData).map(formatSQLValue).join(', ');
      sqlQuery += `INSERT INTO public.${change.table_name} (${columns}) VALUES (${values});\n`;
    } else {
      const setClauses = Object.entries(mainData).map(([key, value]) => {
        return `${key} = ${formatSQLValue(value)}`;
      }).join(',\n  ');

      // ✨ FIX 1 : On ne génère le UPDATE que s'il y a de vraies colonnes à modifier !
      if (setClauses.length > 0) {
        sqlQuery += `UPDATE public.${change.table_name}\nSET ${setClauses}\nWHERE id = '${targetId}';\n`;
      }
    }
  } // 👈 Fin stricte du grand bloc "if (Object.keys(mainData).length > 0)"

  if (_relations) {
    // 🔗 ICI on attaque directement les relations, SANS refaire d'UPDATE !
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
          
          // ✨ LE BLINDAGE : On s'assure que tout est un objet avant le filtre strict
          const normalizedUtiles = utilesList.map(comp => typeof comp === 'string' ? { nom: comp } : comp);

          const validUtiles = normalizedUtiles.filter(comp => {
            if (!comp.isChoix && !comp.nom) return false;
            if (comp.isChoix && (!comp.options || comp.options.length === 0)) return false;
            if (comp.isSpecialiteChoix && (!comp.nom || !comp.options || comp.options.length === 0)) return false;
            return true;
          });

          if (validUtiles.length > 0) {
            const utilesInserts = validUtiles.map(comp => {
              const isChoice = comp.isChoix ? 'true' : 'false';
              const isSpecChoice = comp.isSpecialiteChoix ? 'true' : 'false'; // ✨ LA PIÈCE MANQUANTE EST DE RETOUR !
              
              let compQuery = 'null';

              // ✨ LE BLINDAGE ABSOLU : Si on a l'ID (trouvé en RAM), on l'utilise direct !
              if (comp.competence_id) {
                compQuery = `'${comp.competence_id}'`;
              } else if (comp.nom) {
                // Fallback de survie (avec ILIKE pour tolérer la casse)
                const safeNom = comp.nom.replace(/'/g, "''");
                compQuery = `(SELECT id FROM public.competences WHERE name ILIKE '${safeNom}' LIMIT 1)`;
              }

              const specialite = comp.specialite ? `'${comp.specialite.replace(/'/g, "''")}'` : 'null';

              let choiceIds = 'null';
              let choiceOptions = 'null';

              if (comp.isChoix && comp.options && comp.options.length > 0) {
                const namesList = comp.options.map(o => `'${o.replace(/'/g, "''")}'`).join(', ');
                choiceIds = `ARRAY(SELECT id FROM public.competences WHERE name IN (${namesList}))::uuid[]`;
              } else if (comp.isSpecialiteChoix && comp.options && comp.options.length > 0) {
                const opts = comp.options.map(o => `'${o.replace(/'/g, "''")}'`).join(', ');
                choiceOptions = `ARRAY[${opts}]::text[]`;
              } else if (comp.isOnlySpecialty) {
                // ✨ LE DRAPEAU SECRET GRAVÉ DANS SUPABASE
                choiceOptions = `ARRAY['PURE_SPEC']::text[]`;
              }

              return `('${targetId}', ${compQuery}, ${specialite}, ${isChoice}, ${isSpecChoice}, ${choiceIds}, ${choiceOptions})`;
            }).join(',\n  ');

            sqlQuery += `INSERT INTO public.fairy_competences_predilection (fairy_type_id, competence_id, specialite, is_choice, is_specialite_choice, choice_ids, choice_options) VALUES \n  ${utilesInserts};\n`;
          }
        }
      } catch (e) {
        sqlQuery += `-- ERREUR PARSING JSON: ${e.message}\n`;
      }
    }

    if (_relations.competencesFutiles !== undefined) {
      sqlQuery += `\nDELETE FROM public.fairy_competences_futiles_predilection WHERE fairy_type_id = '${targetId}';\n`;

      // ✨ 3. LE FILTRE ANTI-VIDE (TOLÉRANT AU NOM)
      const validFutiles = _relations.competencesFutiles.filter(fut => {
        // On valide si on a soit l'ID soit le nom exact de la compétence !
        if (!fut.is_choice && !fut.competence_futile_id && !fut.competence_name) return false;
        if (fut.is_choice && (!fut.choice_options || fut.choice_options.length === 0)) return false;
        return true;
      });

      if (validFutiles.length > 0) {
        const futInserts = validFutiles.map(fut => {
          const isChoice = fut.is_choice ? 'true' : 'false';
          let compQuery = 'null';

          // 🧠 L'INTELLIGENCE SQL : Si on n'a pas l'ID, on dit à PostgreSQL de le trouver tout seul !
          if (fut.competence_futile_id) {
            compQuery = `'${fut.competence_futile_id}'`;
          } else if (fut.competence_name) {
            compQuery = `(SELECT id FROM public.competences_futiles WHERE name = '${fut.competence_name.replace(/'/g, "''")}' LIMIT 1)`;
          }

          const compNameSql = fut.competence_name ? `'${fut.competence_name.replace(/'/g, "''")}'` : 'null';
          const choiceOptions = fut.choice_options ? `'${JSON.stringify(fut.choice_options).replace(/'/g, "''")}'::jsonb` : 'null';
          
          return `('${targetId}', ${compQuery}, ${compNameSql}, ${isChoice}, ${choiceOptions})`;
        }).join(',\n  ');

        sqlQuery += `INSERT INTO public.fairy_competences_futiles_predilection (fairy_type_id, competence_futile_id, competence_name, is_choice, choice_options) VALUES \n  ${futInserts};\n`;
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
    // ✨ FIX 2 : On ajoute la prise en charge des Pouvoirs !
    else if (change.table_name === 'fairy_powers') {
      if (isArray) sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE power_id = '${targetId}';\n`;
      else if (removed.length > 0) sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE power_id = '${targetId}' AND fairy_type_id IN (${removed.map(id => `'${id}'`).join(', ')});\n`;

      if (added.length > 0) {
        const inserts = added.map(fId => `('${fId}', '${targetId}')`).join(', ');
        sqlQuery += `INSERT INTO public.fairy_type_powers (fairy_type_id, power_id) VALUES ${inserts};\n`;
      }
    }
    // ✨ FIX 3 : On ajoute la prise en charge des Atouts !
    else if (change.table_name === 'fairy_assets') {
      if (isArray) sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE asset_id = '${targetId}';\n`;
      else if (removed.length > 0) sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE asset_id = '${targetId}' AND fairy_type_id IN (${removed.map(id => `'${id}'`).join(', ')});\n`;

      if (added.length > 0) {
        const inserts = added.map(fId => `('${fId}', '${targetId}')`).join(', ');
        sqlQuery += `INSERT INTO public.fairy_type_assets (fairy_type_id, asset_id) VALUES ${inserts};\n`;
      }
    }
  }

  return sqlQuery;
};

  // 🛡️ Scellage de l'élément si demandé par le Conseil
  if (seal) {
	sqlQuery += `\n-- 🛡️ Scellage de l'élément par les Gardiens\nUPDATE public.${change.table_name} SET is_sealed = true WHERE id = '${targetId}';\n`;
  }

  sqlQuery += `\nCOMMIT;`;
  
  return sqlQuery;
};