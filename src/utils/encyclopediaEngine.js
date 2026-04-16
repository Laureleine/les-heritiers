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

const generateId = () => typeof crypto !== 'undefined' && crypto.randomUUID 
  ? crypto.randomUUID() 
  : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { 
      const r = Math.random() * 16 | 0; 
      // ✨ FIX : On encadre le (r & 0x3) avec des parenthèses pour apaiser le linter !
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
  
  const surgicalData = {};

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

  // 2. GESTION DES FÉES (COMPLEXE)
  if (activeTab === 'fairy_types') {
    const newTraits = proposal.traits ? proposal.traits.split(',').map(t => t.trim()).filter(Boolean) : [];
    const newAvantages = proposal.avantages ? proposal.avantages.split('\n').map(a => a.trim()).filter(Boolean) : [];
    const newDesavantages = proposal.desavantages ? proposal.desavantages.split('\n').map(d => d.trim()).filter(Boolean) : [];

    if (proposal.description !== editingItem.description) surgicalData.description = proposal.description;
    if (proposal.taille !== (editingItem.taille_categorie || 'Moyenne')) surgicalData.taille_categorie = proposal.taille;
    if (proposal.era !== editingItem.era) surgicalData.era = proposal.era || 'traditionnelle';
    if (proposal.is_secret !== (editingItem.is_secret || false)) surgicalData.is_secret = proposal.is_secret;
    if (!arraysEqual(proposal.allowedGenders, editingItem.allowed_genders)) surgicalData.allowed_genders = proposal.allowedGenders;
    if (!arraysEqual(newTraits, editingItem.traits)) surgicalData.traits = newTraits;
    if (!arraysEqual(newAvantages, editingItem.avantages)) surgicalData.avantages = newAvantages;
    if (!arraysEqual(newDesavantages, editingItem.desavantages)) surgicalData.desavantages = newDesavantages;

    const stats = [
      { sql: 'agilite', ui: 'agilite' }, { sql: 'constitution', ui: 'constitution' },
      { sql: 'force', ui: 'force' }, { sql: 'precision', ui: 'precision' },
      { sql: 'esprit', ui: 'esprit' }, { sql: 'perception', ui: 'perception' },
      { sql: 'prestance', ui: 'prestance' }, { sql: 'sang_froid', ui: 'sangFroid' }
    ];

    stats.forEach(stat => {
      const newMin = proposal.caracteristiques?.[stat.ui]?.min || 1;
      const newMax = proposal.caracteristiques?.[stat.ui]?.max || 6;
      if (isCreating) {
        surgicalData[`${stat.sql}_min`] = newMin;
        surgicalData[`${stat.sql}_max`] = newMax;
      } else {
        if (newMin !== (editingItem[`${stat.sql}_min`] || 1)) surgicalData[`${stat.sql}_min`] = newMin;
        if (newMax !== (editingItem[`${stat.sql}_max`] || 6)) surgicalData[`${stat.sql}_max`] = newMax;
      }
    });

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
    const newAtouts = [...(proposal.atoutsIds || [])].sort();

    const changedRelations = {};

    if (!isCapacitesEqual) changedRelations.capacites = newCapacites;
    if (!arraysEqual(newPouvoirs, oldPouvoirs)) changedRelations.pouvoirs = getDiff(oldPouvoirs, newPouvoirs);
    if (!arraysEqual(newAtouts, oldAtouts)) changedRelations.atouts = getDiff(oldAtouts, newAtouts);

      // Compétences Utiles
      const oldUtiles = editingItem.competencesPredilection ? JSON.stringify(editingItem.competencesPredilection) : '[]';
      
      // ✨ LE BOUCLIER ANTI-UNICODE : On charge le dictionnaire de la RAM
      const allCompUtiles = Object.values(gameData.competences || {}); 
      const normalizeStr = (str) => str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

      const newUtilesArray = (parsedTech.predilections || []).map(p => {
        const compObj = typeof p === 'string' ? { nom: p } : { ...p };

        // 🧠 L'Intelligence Artificielle : On trouve l'ID exact sans se soucier des accents !
        if (compObj.nom && !compObj.competence_id) {
          const searchName = normalizeStr(compObj.nom);
          const found = allCompUtiles.find(c => normalizeStr(c.nom) === searchName);
          
          if (found) {
            compObj.competence_id = found.id;
            compObj.nom = found.nom; // On force l'orthographe stricte de la base (NFC/NFD)
          }
        }
        return compObj;
      });

      if (parsedTech.specialites) {
        parsedTech.specialites.forEach(s => {
          const searchName = normalizeStr(s.competence);
          const found = allCompUtiles.find(c => normalizeStr(c.nom) === searchName);
          
          newUtilesArray.push({ 
            nom: found ? found.nom : s.competence, 
            competence_id: found ? found.id : null,
            specialite: s.nom, 
            isChoix: false, 
            isOnlySpecialty: true 
          });
        });
      }

      const newUtilesStr = JSON.stringify(newUtilesArray);
      if (newUtilesStr !== oldUtiles) changedRelations.competencesUtiles = newUtilesArray; 

      // Compétences Futiles
    // Compétences Futiles
    const newFutiles = (parsedTech.futiles || []).map(f => {
        if (f.isChoix) return { is_choice: true, choice_options: f.options || [], competence_futile_id: null, competence_name: null };
        const found = allCompFutiles.find(c => c.nom === f.nom || c.name === f.nom);
        return { is_choice: false, choice_options: [], competence_futile_id: found ? found.id : null, competence_name: f.nom };
    });

    const oldFutilesRaw = editingItem.fairy_competences_futiles_predilection || [];
    const oldFutiles = oldFutilesRaw.map(f => ({
        is_choice: f.is_choice, choice_options: f.choice_options || [], competence_futile_id: f.competence_futile_id
    }));

      // ✨ LE BOUCLIER D'ÉQUIVALENCE : On crée un clone sans le nom pour comparer proprement les deltas
    const compareNewFutiles = newFutiles.map(f => ({
        is_choice: f.is_choice, choice_options: f.choice_options, competence_futile_id: f.competence_futile_id
    }));

    if (JSON.stringify(compareNewFutiles) !== JSON.stringify(oldFutiles)) {
        changedRelations.competencesFutiles = newFutiles; // On transmet la version complète avec le Nom au générateur SQL !
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

    if (activeTab === 'fairy_assets') {
      if (proposal.effets !== (editingItem.effets || '')) surgicalData.effets = proposal.effets;
      
      const oldTech = editingItem.effets_techniques ? JSON.stringify(editingItem.effets_techniques, null, 2) : '';
      if (proposal.effets_techniques !== oldTech) {
        if (proposal.effets_techniques && proposal.effets_techniques.trim() !== '') {
          try {
            surgicalData.effets_techniques = JSON.parse(proposal.effets_techniques);
          } catch (e) {
            return { warning: true, message: "Le champ 'Effets Techniques' doit être un format JSON valide !" };
          }
        } else {
          surgicalData.effets_techniques = null;
        }
      }
    }

    // Relations inversées (Lier aux Fées)
    if (['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab)) {
      let oldIds = [];
      if (!isCreating && editingItem) {
        if (activeTab === 'fairy_capacites') oldIds = editingItem.fairy_type_capacites?.map(link => link.fairy_types?.id).filter(Boolean) || [];
        if (activeTab === 'fairy_powers') oldIds = editingItem.fairy_type_powers?.map(link => link.fairy_types?.id).filter(Boolean) || [];
        if (activeTab === 'fairy_assets') oldIds = editingItem.fairy_type_assets?.map(link => link.fairy_types?.id).filter(Boolean) || [];
      }
      const newIds = [...(proposal.fairyIds || [])].sort();
      oldIds = oldIds.sort();

      if (JSON.stringify(oldIds) !== JSON.stringify(newIds)) {
        if (!surgicalData._relations) surgicalData._relations = {};
        surgicalData._relations.fairyIds = getDiff(oldIds, newIds);
      }
    }
  }

  let finalRecordId = isCreating ? null : editingItem.id;
  if (isCreating) {
    const newId = generateId();
    surgicalData.id = newId;
    finalRecordId = newId;
  }

  if (Object.keys(surgicalData).length === 0) {
    return { warning: true, message: "Aucune modification n'a été détectée par rapport à la version actuelle." };
  }

  try {
    const payload = {
      user_id: userProfile?.id,
      table_name: activeTab,
      record_id: finalRecordId,
      record_name: isCreating ? (proposal.name || proposal.nom) : (editingItem.name || editingItem.nom),
      new_data: surgicalData,
      justification: justification,
      status: 'pending'
    };

    const { error } = await supabase.from('data_change_requests').insert([payload]);
    if (error) throw error;

    return { success: true, recordName: payload.record_name };
  } catch (error) {
    return { success: false, error };
  }
};
