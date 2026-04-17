// src/utils/encyclopediaEngine.js
import { supabase } from '../config/supabase';

// 🧠 Utilitaires isolés pour les calculs
const getDiff = (oldArr, newArr) => ({
  added: newArr.filter(x => !oldArr.includes(x)),
  removed: oldArr.filter(x => !newArr.includes(x))
});

const arraysEqual = (a, b) => {
  const arrA = Array.isArray(a) && a.length > 0 ? a : [];
  const arrB = Array.isArray(b) && b.length > 0 ? b : [];
  return JSON.stringify(arrA) === JSON.stringify(arrB);
};

// Parseur universel pour survivre aux tableaux stringifiés de Supabase
const parseSafeArray = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
      try { return JSON.parse(val); } catch(e) { return [val]; }
  }
  return [];
};

// Bouclier d'équivalence bilingue (Anti-Faux Positifs Unicode/Casse)
const safeNormalize = (str) => String(str || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

const generateId = () => typeof crypto !== 'undefined' && crypto.randomUUID
  ? crypto.randomUUID()
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16);
    });

// ✨ LE MOTEUR CENTRAL DE PROPOSITION
export const submitEncyclopediaProposal = async ({
  activeTab,
  isCreating,
  proposal,
  editingItem,
  justification,
  userProfile,
  parsedTech,
  allCompFutiles,
  gameData
}) => {
  try {
    const surgicalData = {};
    const changedRelations = {};

    // 1. GESTION DU NOM
    const nameColumn = activeTab === 'fairy_types' ? 'name' : 'nom';
    if (isCreating) {
      if (!proposal.name?.trim()) {
        return { warning: true, message: "Le nom de l'élément est obligatoire !" };
      }
      surgicalData[nameColumn] = proposal.name.trim();
      if (activeTab === 'fairy_powers') surgicalData.type_pouvoir = proposal.type_pouvoir;
    } else if (proposal.name && proposal.name !== (editingItem.name || editingItem.nom)) {
      surgicalData[nameColumn] = proposal.name;
    }

    if (activeTab === 'fairy_types') {
      if (proposal.description !== (editingItem.description || editingItem.desc || '')) surgicalData.description = proposal.description;
      if (proposal.era !== editingItem.era) surgicalData.era = proposal.era;
      if (proposal.taille_categorie !== editingItem.taille_categorie) surgicalData.taille_categorie = proposal.taille_categorie;

      const oldTraits = parseSafeArray(editingItem.traits);
      const newTraits = proposal.traits ? proposal.traits.split(',').map(t => t.trim()).filter(Boolean) : [];
      if (!arraysEqual(newTraits, oldTraits)) surgicalData.traits = newTraits;

      const oldAvantages = parseSafeArray(editingItem.avantages);
      const newAvantages = proposal.avantages ? proposal.avantages.split('\n').map(a => a.trim()).filter(Boolean) : [];
      if (!arraysEqual(newAvantages, oldAvantages)) surgicalData.avantages = newAvantages;

      const oldDesavantages = parseSafeArray(editingItem.desavantages);
      const newDesavantages = proposal.desavantages ? proposal.desavantages.split('\n').map(d => d.trim()).filter(Boolean) : [];
      if (!arraysEqual(newDesavantages, oldDesavantages)) surgicalData.desavantages = newDesavantages;

      // COMPARAISON DES CARACTÉRISTIQUES
      const checkAndAddCarac = (key, dbKey) => {
          const pMin = Number(proposal.caracteristiques?.[key]?.min || 1);
          const pMax = Number(proposal.caracteristiques?.[key]?.max || 6);
          
          const eMin = Number(editingItem[`${dbKey}_min`] !== undefined ? editingItem[`${dbKey}_min`] : (editingItem.caracteristiques?.[key]?.min || 1));
          const eMax = Number(editingItem[`${dbKey}_max`] !== undefined ? editingItem[`${dbKey}_max`] : (editingItem.caracteristiques?.[key]?.max || 6));

          if (pMin !== eMin) surgicalData[`${dbKey}_min`] = pMin;
          if (pMax !== eMax) surgicalData[`${dbKey}_max`] = pMax;
      };

      checkAndAddCarac('agilite', 'agilite');
      checkAndAddCarac('constitution', 'constitution');
      checkAndAddCarac('force', 'force');
      checkAndAddCarac('precision', 'precision');
      checkAndAddCarac('esprit', 'esprit');
      checkAndAddCarac('perception', 'perception');
      checkAndAddCarac('prestance', 'prestance');
      checkAndAddCarac('sangFroid', 'sang_froid');
      checkAndAddCarac('feerie', 'feerie');
      checkAndAddCarac('masque', 'masque');
      checkAndAddCarac('tricherie', 'tricherie');

      // 2. Relations (Capacités, Pouvoirs, Atouts)
      const newCapacites = [];
      if (proposal.capaciteFixe1) newCapacites.push({ id: proposal.capaciteFixe1, type: 'fixe1' });
      if (proposal.capaciteFixe2) newCapacites.push({ id: proposal.capaciteFixe2, type: 'fixe2' });
      (proposal.capacitesChoixIds || []).forEach(id => newCapacites.push({ id, type: 'choix' }));
      
      const oldCapacites = (editingItem.fairy_type_capacites || []).map(link => ({ id: link.capacite?.id, type: link.capacite_type }));
      const sortCaps = (a, b) => a.id.localeCompare(b.id);
      const isCapacitesEqual = JSON.stringify(oldCapacites.sort(sortCaps)) === JSON.stringify(newCapacites.sort(sortCaps));
      
      const oldPouvoirs = (editingItem.fairy_type_powers || []).map(link => link.power?.id).filter(Boolean).sort();
      const newPouvoirs = [...(proposal.pouvoirsIds || [])].sort();
      
      const oldAtouts = (editingItem.fairy_type_assets || []).map(link => link.asset?.id).filter(Boolean).sort();
      const newAtouts = [...(proposal.assetsIds || [])].sort();

      if (!isCapacitesEqual) changedRelations.capacites = newCapacites;
      if (!arraysEqual(newPouvoirs, oldPouvoirs)) changedRelations.pouvoirs = getDiff(oldPouvoirs, newPouvoirs);
      if (!arraysEqual(newAtouts, oldAtouts)) changedRelations.atouts = getDiff(oldAtouts, newAtouts);

      // ✨ LA RÉSOLUTION DU DICTIONNAIRE (Anti UUID)
      const fairyDbName = editingItem.name || editingItem.nom;
      const fairyCloudData = gameData?.fairyData?.[fairyDbName] || {};
      
      const allCompUtiles = Object.values(gameData.competences || {});
      
      let oldUtilesRaw = parseSafeArray(editingItem.competencesPredilection);
      if (oldUtilesRaw.length === 0 && fairyCloudData.competencesPredilection) {
          oldUtilesRaw = parseSafeArray(fairyCloudData.competencesPredilection);
      }
      
      const newUtilesArray = (parsedTech.predilections || []).map(p => {
        const compObj = typeof p === 'string' ? { nom: p } : { ...p };
        if (compObj.nom && !compObj.competence_id) {
          const searchName = safeNormalize(compObj.nom);
          const found = allCompUtiles.find(c => safeNormalize(c.nom) === searchName);
          if (found) {
            compObj.competence_id = found.id;
            compObj.nom = found.nom; 
          }
        }
        return {
          nom: compObj.nom,
          competence_id: compObj.competence_id,
          specialite: compObj.specialite || null,
          isChoix: compObj.isChoix || compObj.is_choice || false,
          isSpecialiteChoix: compObj.isSpecialiteChoix || compObj.is_specialite_choice || false,
          choice_options: compObj.options || compObj.choice_options || [],
          options: compObj.options || compObj.choice_options || [],
          isOnlySpecialty: compObj.isOnlySpecialty || false
        };
      });

      if (parsedTech.specialites) {
        parsedTech.specialites.forEach(s => {
          const searchName = safeNormalize(s.competence);
          const found = allCompUtiles.find(c => safeNormalize(c.nom) === searchName);
          newUtilesArray.push({
            nom: found ? found.nom : s.competence,
            competence_id: found ? found.id : null,
            specialite: s.nom,
            isChoix: false,
            isSpecialiteChoix: false,
            choice_options: [],
            options: [],
            isOnlySpecialty: true
          });
        });
      }

      const getUtilesSignature = (arr) => {
        return (arr || []).map(c => {
          if (typeof c === 'string') return `${safeNormalize(c)}||||false||false`;
          
          const isChoix = !!(c.isChoix || c.is_choice);
          if (isChoix) {
              const options = (c.options || c.choice_options || []).map(safeNormalize).sort();
              return `choix-[${options.join(',')}]`;
          }
          
          // ✨ LE FIX ULTIME : Si la donnée contient un ID Supabase (UUID), on cherche le vrai nom de la compétence !
          let rawName = c.nom || (c.competence && c.competence.name);
          if (!rawName && c.competence_id) {
             const found = allCompUtiles.find(comp => comp.id === c.competence_id);
             if (found) rawName = found.nom;
          }
          rawName = rawName || c.competence_id || 'inconnu';
          
          const nom = safeNormalize(rawName);
          const spe = safeNormalize(c.specialite);
          const isSpeChoix = !!(c.isSpecialiteChoix || c.is_specialite_choice);
          const isOnlySpe = !!c.isOnlySpecialty || (c.choice_options && c.choice_options.includes('PURE_SPEC'));
          
          return `${nom}||${spe}||${isSpeChoix}||${isOnlySpe}`;
        }).sort().join('###');
      };

      const oldUtilesSignature = getUtilesSignature(oldUtilesRaw);
      const newUtilesSignature = getUtilesSignature(newUtilesArray);
      
      if (oldUtilesSignature !== newUtilesSignature) {
        changedRelations.competencesUtiles = newUtilesArray;
      }

      // Compétences Futiles
      let oldFutilesRaw = parseSafeArray(editingItem.fairy_competences_futiles_predilection);
      if (oldFutilesRaw.length === 0 && fairyCloudData.competencesFutilesPredilection) {
          oldFutilesRaw = parseSafeArray(fairyCloudData.competencesFutilesPredilection);
      }
      
      const newFutiles = (parsedTech.futiles || []).map(f => {
        if (f.isChoix) return { is_choice: true, choice_options: f.options || [], competence_futile_id: null, competence_name: null };
        const found = allCompFutiles.find(c => safeNormalize(c.nom || c.name) === safeNormalize(f.nom));
        return { is_choice: false, choice_options: [], competence_futile_id: found ? found.id : null, competence_name: f.nom };
      });

      const formatFutilesForSignature = (arr) => {
         return arr.map(f => {
             if (f.is_choice || f.isChoix) {
                 const opts = (f.choice_options || f.options || []).map(safeNormalize).sort();
                 return `choix-[${opts.join(',')}]`;
             }
             // ✨ LE FIX ULTIME : Idem pour les compétences Futiles
             let rawName = f.competence_name || f.nom || f.name;
             if (!rawName && f.competence_futile_id) {
                const found = allCompFutiles.find(c => c.id === f.competence_futile_id);
                if (found) rawName = found.nom || found.name;
             }
             return safeNormalize(rawName || f.competence_futile_id || 'inconnu');
         }).sort().join('###');
      };

      if (formatFutilesForSignature(newFutiles) !== formatFutilesForSignature(oldFutilesRaw)) {
        changedRelations.competencesFutiles = newFutiles; 
      }

      const newEffetsTech = { ...parsedTech };
      delete newEffetsTech.predilections;
      delete newEffetsTech.specialites;
      delete newEffetsTech.futiles;

      const oldEffetsTech = { ...(editingItem.effets_techniques || {}) };
      delete oldEffetsTech.predilections;
      delete oldEffetsTech.specialites;
      delete oldEffetsTech.futiles;

      if (JSON.stringify(newEffetsTech) !== JSON.stringify(oldEffetsTech)) {
        surgicalData.effets_techniques = Object.keys(newEffetsTech).length > 0 ? newEffetsTech : null;
      }

      if (Object.keys(changedRelations).length > 0) {
        surgicalData._relations = changedRelations;
      }

    } else {
      // 3. GESTION DES AUTRES TYPES (Pouvoirs, Atouts, Capacités)
      if (proposal.description !== (editingItem.description || editingItem.desc || '')) {
        surgicalData.description = proposal.description;
      }
      
      if (activeTab === 'fairy_powers' && proposal.type_pouvoir !== editingItem.type_pouvoir) {
        surgicalData.type_pouvoir = proposal.type_pouvoir;
      }
      
      if (activeTab === 'fairy_assets' && proposal.effets !== editingItem.effets) {
        surgicalData.effets = proposal.effets;
      }
      
      if (['fairy_assets', 'fairy_capacites', 'fairy_powers'].includes(activeTab)) {
         if (proposal.effets_techniques && proposal.effets_techniques.trim() !== '') {
           try {
             const parsed = JSON.parse(proposal.effets_techniques);
             if (JSON.stringify(parsed) !== JSON.stringify(editingItem.effets_techniques || {})) {
               surgicalData.effets_techniques = parsed;
             }
           } catch (e) {
             return { warning: true, message: "Le champ 'Effets Techniques' doit être un format JSON valide !" };
           }
         } else {
           surgicalData.effets_techniques = null;
         }
      }
      
      // Relations inversées (Lier aux Fées)
      if (['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab)) {
        let oldIds = [];
        if (!isCreating && editingItem) {
          if (activeTab === 'fairy_capacites') oldIds = editingItem.fairy_type_capacites?.map(link => link.fairy_types?.id).filter(Boolean) || [];
          else if (activeTab === 'fairy_powers') oldIds = editingItem.fairy_type_powers?.map(link => link.fairy_types?.id).filter(Boolean) || [];
          else if (activeTab === 'fairy_assets') oldIds = editingItem.fairy_type_assets?.map(link => link.fairy_types?.id).filter(Boolean) || [];
        }
        const newIds = proposal.fairyIds || [];
        if (!arraysEqual(oldIds, newIds)) {
          surgicalData._relations = { fairyIds: getDiff(oldIds, newIds) };
        }
      }
    }

    if (!isCreating && Object.keys(surgicalData).length === 0) {
      return { warning: true, message: "Aucune modification détectée." };
    }

    // --- ENVOI DE LA REQUÊTE ---
    const changeRequest = {
      user_id: userProfile.id,
      table_name: activeTab,
      record_id: isCreating ? null : editingItem.id,
      record_name: isCreating ? proposal.name : (editingItem.name || editingItem.nom),
      new_data: surgicalData,
      justification: justification,
      status: 'pending'
    };

    const { error } = await supabase.from('data_change_requests').insert([changeRequest]);
    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error("Erreur Engine:", error);
    return { error: true, message: error.message };
  }
};