// src/components/EncyclopediaModal.js
// 8.20.0 // 8.21.0 // 8.29.0 
// 9.4.0 // 9.10.0
// 10.0.0 // 10.2.0 // 10.3.0 // 10.4.0 // 10.7.0 // 10.8.0 // 10.9.0
// 11.1.0 // 11.2.0
// 12.5.0
// 13.0.3 // 13.0.4

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Save, Star, TestTubeDiagonal } from 'lucide-react';
import { supabase } from '../config/supabase';
import BonusBuilder from './BonusBuilder';
import { logger, showInAppNotification, translateError } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';

export default function EncyclopediaModal({
  activeTab,
  editingItem,
  setEditingItem,
  isCreating,
  proposal,
  setProposal,
  justification,
  setJustification,
  userProfile,
  allCapacites,
  allPouvoirs,
  allAtouts,
  allCompFutiles,
  allFairyTypes,
  onSuccess // 👈 NOUVELLE PROP
}) {

  const { gameData } = useCharacter(); // ✨ CONNEXION AU NUAGE

  // 🧠 On extrait et formate instantanément les données du Nuage pour le BonusBuilder
  const competencesData = Object.values(gameData.competences || {}).map(c => ({
    id: c.id,
    name: c.nom, // On renomme 'nom' en 'name' pour la compatibilité
    specialites: c.specialites
  }));
  const usefulSkills = Object.keys(gameData.competences || {});
  
  // --- LA FONCTION CHIRURGIEN ---
  const handleSubmitProposal = async () => {
    if (!justification.trim()) {
      showInAppNotification("Veuillez expliquer brièvement la raison de cette modification.", "warning");
      return;
    }

    const surgicalData = {};

    // 🧠 NOUVEAU : Helper pour calculer le "Delta" (ce qu'on ajoute, ce qu'on retire)
    const getDiff = (oldArr, newArr) => ({
      added: newArr.filter(x => !oldArr.includes(x)),
      removed: oldArr.filter(x => !newArr.includes(x))
    });

    const arraysEqual = (a, b) => {
      const arrA = Array.isArray(a) && a.length > 0 ? a : [];
      const arrB = Array.isArray(b) && b.length > 0 ? b : [];
      return JSON.stringify(arrA) === JSON.stringify(arrB);
    };

    // 1. GESTION DU NOM (Adaptatif : name vs nom)
    const nameColumn = activeTab === 'fairy_types' ? 'name' : 'nom';

    if (isCreating) {
      if (!proposal.name?.trim()) {
        showInAppNotification("Le nom de l'élément est obligatoire !", "warning");
        return;
      }
      surgicalData[nameColumn] = proposal.name.trim();
      if (activeTab === 'fairy_powers') surgicalData.type_pouvoir = proposal.type_pouvoir;
    } else if (proposal.name && proposal.name !== (editingItem.name || editingItem.nom)) {
      surgicalData[nameColumn] = proposal.name;
    }

    if (activeTab === 'fairy_types') {
      const newTraits = proposal.traits ? proposal.traits.split(',').map(t => t.trim()).filter(Boolean) : [];
      const newAvantages = proposal.avantages ? proposal.avantages.split('\n').map(a => a.trim()).filter(Boolean) : [];
      const newDesavantages = proposal.desavantages ? proposal.desavantages.split('\n').map(d => d.trim()).filter(Boolean) : [];

      if (proposal.description !== editingItem.description) surgicalData.description = proposal.description;
      if (proposal.taille !== (editingItem.taille_categorie || 'Moyenne')) surgicalData.taille_categorie = proposal.taille;
      if (proposal.era !== editingItem.era) surgicalData.era = proposal.era || 'traditionnelle';
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

    // Pour les capacités, on garde l'ancien système car il gère aussi les notions de "fixe1", "fixe2", etc.
    if (!isCapacitesEqual) changedRelations.capacites = newCapacites;

    // ✨ MAGIE : On n'envoie plus tout le tableau, on envoie uniquement les Différences !
    if (!arraysEqual(newPouvoirs, oldPouvoirs)) changedRelations.pouvoirs = getDiff(oldPouvoirs, newPouvoirs);
    if (!arraysEqual(newAtouts, oldAtouts)) changedRelations.atouts = getDiff(oldAtouts, newAtouts);

	  // --- C. COMPÉTENCES UTILES (Via le BonusBuilder) ---
		const oldUtiles = editingItem.competencesPredilection ? JSON.stringify(editingItem.competencesPredilection) : '[]';
		
		// ✨ MAGIE : On fusionne les briques fuchsia et dorées !
		const newUtilesArray = [...(parsedTech.predilections || [])];
		if (parsedTech.specialites) {
		  parsedTech.specialites.forEach(s => {
			newUtilesArray.push({
			  nom: s.competence,
			  specialite: s.nom,
			  isChoix: false,
			  isOnlySpecialty: true // 👈 LE DRAPEAU SECRET
			});
		  });
		}
		
		const newUtiles = JSON.stringify(newUtilesArray);
		if (newUtiles !== oldUtiles) {
		  changedRelations.competencesUtiles = newUtiles;
		}
		
	  // --- D. COMPÉTENCES FUTILES (Via le BonusBuilder) ---
		const newFutiles = (parsedTech.futiles || []).map(f => {
		  if (f.isChoix) return { is_choice: true, choice_options: f.options || [], competence_futile_id: null };
		  
		  // ✨ LE CORRECTIF EST ICI : Le Nuage parle français (c.nom), mais on garde c.name par sécurité !
		  const found = allCompFutiles.find(c => c.nom === f.nom || c.name === f.nom);
		  
		  return { is_choice: false, choice_options: null, competence_futile_id: found ? found.id : null };
		});

	  const oldFutiles = (editingItem.fairy_competences_futiles_predilection || []).map(f => ({
		is_choice: f.is_choice, competence_futile_id: f.competence_futile_id || null, choice_options: f.choice_options || []
	  }));

	  const normalizeFutiles = (arr) => arr.map(a => JSON.stringify(a)).sort().join('|');

	  if (normalizeFutiles(newFutiles) !== normalizeFutiles(oldFutiles)) {
		changedRelations.competencesFutiles = newFutiles;
	  }
		  
      if (Object.keys(changedRelations).length > 0) {
        surgicalData._relations = changedRelations;
      }

    } else {
      // Formulaire simple (Capacités, Pouvoirs, Atouts)
      if (proposal.description !== (editingItem.description || editingItem.desc || '')) {
        surgicalData.description = proposal.description;
      }

      // 👇 NOUVEAU : Sauvegarde intelligente des champs Atouts
      if (activeTab === 'fairy_assets') {
        if (proposal.effets !== (editingItem.effets || '')) {
          surgicalData.effets = proposal.effets;
        }
        
        // Vérification et parsing du JSON
        const oldTech = editingItem.effets_techniques ? JSON.stringify(editingItem.effets_techniques, null, 2) : '';
        if (proposal.effets_techniques !== oldTech) {
          if (proposal.effets_techniques && proposal.effets_techniques.trim() !== '') {
            try {
              surgicalData.effets_techniques = JSON.parse(proposal.effets_techniques);
            } catch (e) {
			  showInAppNotification("Le champ 'Effets Techniques' doit être un format JSON valide !", "error");
              return; // On bloque l'envoi
            }
          } else {
            surgicalData.effets_techniques = null; // Si on vide la case
          }
        }
      }
      
      // 👈 NOUVEAU : Relations Inversées (Lier aux Fées directement)
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
          // ✨ MAGIE : On utilise aussi le Delta ici !
          surgicalData._relations.fairyIds = getDiff(oldIds, newIds);
        }
      }
    }

    // 💡 LE COUP DE GÉNIE ÉTENDU : Générer l'ID pour TOUTES les nouvelles créations !
    const generateId = () => typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); });
    
    let finalRecordId = isCreating ? null : editingItem.id;

    if (isCreating) {
      const newId = generateId();
      surgicalData.id = newId;  
      finalRecordId = newId;    
    }

    if (Object.keys(surgicalData).length === 0) {
      showInAppNotification("Aucune modification n'a été détectée par rapport à la version actuelle.", "warning");
      return;
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

      logger.info("✅ Proposition envoyée :", payload.record_name);
      showInAppNotification("Votre proposition a été envoyée aux Gardiens du Savoir !", "success");
    
      // 👈 NOUVEAU : On utilise onSuccess s'il existe pour mettre à jour les cadenas
      if (onSuccess) {
        onSuccess();
      } else {
        setEditingItem(null);
      }
    } catch (error) {
      logger.error("❌ Erreur envoi proposition :", error);
      showInAppNotification(translateError(error), "error");
    }
  };

  // 🧠 NOUVEAU : PARSING UNIFIÉ POUR LE BUILDER
  let parsedTech = {};
  if (['fairy_assets', 'fairy_powers', 'fairy_capacites', 'fairy_types'].includes(activeTab)) {
    try {
      const sourceData = activeTab === 'fairy_assets' ? proposal.effets_techniques : proposal.techData;
      parsedTech = JSON.parse(sourceData || '{}');
    } catch(e) {
      parsedTech = {};
    }
  }

  const updateTech = (newObj) => {
    if (activeTab === 'fairy_assets') {
      setProposal({ ...proposal, effets_techniques: JSON.stringify(newObj, null, 2) });
    } else {
      setProposal({ ...proposal, techData: JSON.stringify(newObj, null, 2) });
    }
  };

  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
        
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-stone-50">
          <div>
            <h2 className="text-xl font-serif font-bold text-amber-900">
              {isCreating ? 'Proposition de création' : 'Proposition de modification'}
            </h2>
            {!isCreating && <p className="text-sm text-gray-500 mt-1">Élément : <span className="font-bold text-gray-800">{editingItem.name || editingItem.nom}</span></p>}
          </div>
          <button onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
          <div className="mb-6 p-4 bg-amber-50 text-amber-800 rounded-lg text-sm flex gap-3 items-start border border-amber-100">
            <Sparkles className="flex-shrink-0 mt-0.5 text-amber-500" size={18} />
            <p>Vos propositions ne seront pas immédiates. Elles seront soumises à la validation des <em>Gardiens du Savoir</em>.</p>
          </div>

          {activeTab === 'fairy_types' ? (
            /* FORMULAIRE FÉES (COMPLEXE) */
            <div className="space-y-6">

              {/* 👈 LE CHAMP NOM (ENFIN !) */}
              <div>
                <label className="block text-sm font-bold text-amber-900 mb-1">Nom de la Fée</label>
                <input
                  type="text"
                  value={proposal.name || ''}
                  onChange={(e) => setProposal({...proposal, name: e.target.value})}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-bold text-lg bg-white"
                  placeholder="Ex: Phénix, Salamandre, Automate..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-amber-900 mb-1">Description</label>
                <textarea
                  value={proposal.description || ''}
                  onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
                  className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 font-serif text-sm min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold text-amber-900 mb-1">Taille</label>
                  <select
                    value={proposal.taille || 'Moyenne'}
                    onChange={(e) => setProposal({ ...proposal, taille: e.target.value })}
                    className="w-full p-2 border border-amber-200 rounded-lg bg-white"
                  >
                    <option value="Petite">Petite (+1 Esquive)</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Grande">Grande (-1 Esquive)</option>
                    <option value="Très Grande">Très Grande (-2 Esquive)</option>
                  </select>
                </div>

                {/* 👈 NOUVEAU : SÉLECTEUR D'ANCIENNETÉ */}
                <div>
                  <label className="block text-sm font-bold text-amber-900 mb-1">Ancienneté</label>
                  <select
                    value={proposal.era || 'traditionnelle'}
                    onChange={(e) => setProposal({ ...proposal, era: e.target.value })}
                    className="w-full p-2 border border-amber-200 rounded-lg bg-white"
                  >
                    <option value="traditionnelle">Traditionnelle</option>
                    <option value="moderne">Moderne</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-amber-900 mb-1">Sexes possibles</label>
                  <div className="flex gap-4 p-2 border border-amber-200 rounded-lg bg-amber-50/50">
                    {['Homme', 'Femme'].map(genre => (
                      <label key={genre} className="flex items-center gap-1 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={proposal.allowedGenders?.includes(genre)}
                          onChange={(e) => {
                            const newGenders = e.target.checked
                              ? [...(proposal.allowedGenders || []), genre]
                              : (proposal.allowedGenders || []).filter(g => g !== genre);
                            setProposal({ ...proposal, allowedGenders: newGenders });
                          }}
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        {genre}
                      </label>
                    ))}
                  </div>
                </div>
              </div>


              <div>
                <label className="block text-sm font-bold text-amber-900 mb-1">Traits de caractère (séparés par des virgules)</label>
                <input
                  type="text"
                  value={proposal.traits || ''}
                  onChange={(e) => setProposal({ ...proposal, traits: e.target.value })}
                  className="w-full p-2 border border-amber-200 rounded-lg"
                />
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <label className="block text-sm font-bold text-amber-900 mb-3">Potentiels (Min / Max)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid'].map((stat) => (
                    <div key={stat} className="bg-white p-2 rounded border border-amber-200 text-center shadow-sm">
                      <span className="block text-xs font-bold uppercase text-stone-500 mb-1">{stat === 'sangFroid' ? 'Sang-Froid' : stat}</span>
                      <div className="flex justify-center items-center gap-1">
                        <input
                          type="number" min="1" max="9"
                          value={proposal.caracteristiques?.[stat]?.min || 1}
                          onChange={(e) => setProposal({...proposal, caracteristiques: {...proposal.caracteristiques, [stat]: { ...proposal.caracteristiques?.[stat], min: parseInt(e.target.value) } }})}
                          className="w-10 text-center border-b border-amber-300 focus:outline-none focus:border-amber-600 text-sm font-bold"
                        />
                        <span className="text-stone-300">/</span>
                        <input
                          type="number" min="1" max="9"
                          value={proposal.caracteristiques?.[stat]?.max || 6}
                          onChange={(e) => setProposal({...proposal, caracteristiques: {...proposal.caracteristiques, [stat]: { ...proposal.caracteristiques?.[stat], max: parseInt(e.target.value) } }})}
                          className="w-10 text-center border-b border-amber-300 focus:outline-none focus:border-amber-600 text-sm font-bold text-amber-700"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-green-800 mb-1">Avantages</label>
                    <textarea value={proposal.avantages || ''} onChange={(e) => setProposal({ ...proposal, avantages: e.target.value })} className="w-full p-2 border border-green-200 bg-green-50/30 rounded-lg text-sm min-h-[80px]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-red-800 mb-1">Désavantages</label>
                    <textarea value={proposal.desavantages || ''} onChange={(e) => setProposal({ ...proposal, desavantages: e.target.value })} className="w-full p-2 border border-red-200 bg-red-50/30 rounded-lg text-sm min-h-[80px]" />
                  </div>
                </div>

                {/* 🌟 LE GRAND CONSTRUCTEUR DE COMPÉTENCES (OPTION A) 🌟 */}
                <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 my-4 shadow-sm">
                  <label className="block text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Star size={16} className="text-amber-500 fill-amber-500" /> Héritage & Compétences (Utiles et Futiles)
                  </label>
					<BonusBuilder
					  parsedTech={parsedTech}
					  updateTech={updateTech}
					  competencesData={competencesData}
					  usefulSkills={usefulSkills}
					  futilesSkills={allCompFutiles ? allCompFutiles.map(c => c.nom || c.name) : []}
					/>
                </div>

                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <label className="block text-sm font-bold text-indigo-900 mb-4">Capacités attachées</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
                      <label className="block text-xs font-bold text-indigo-800 mb-2">🌟 Capacité Fixe 1</label>
                      <select value={proposal.capaciteFixe1 || ''} onChange={(e) => setProposal({ ...proposal, capaciteFixe1: e.target.value })} className="w-full p-2 border border-indigo-200 rounded text-sm bg-indigo-50/30">
                        <option value="">-- Sélectionner --</option>
                        {allCapacites.map(cap => <option key={cap.id} value={cap.id}>{cap.nom}</option>)}
                      </select>
                    </div>
                    <div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
                      <label className="block text-xs font-bold text-indigo-800 mb-2">🌟 Capacité Fixe 2</label>
                      <select value={proposal.capaciteFixe2 || ''} onChange={(e) => setProposal({ ...proposal, capaciteFixe2: e.target.value })} className="w-full p-2 border border-indigo-200 rounded text-sm bg-indigo-50/30">
                        <option value="">-- Sélectionner --</option>
                        {allCapacites.map(cap => <option key={cap.id} value={cap.id}>{cap.nom}</option>)}
                      </select>
                    </div>
                  </div>
				  
                <div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
                  <label className="block text-xs font-bold text-indigo-800 mb-2">⭐ Capacités au Choix</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2">
                    {[...allCapacites].sort((a, b) => {
                      const aSel = proposal.capacitesChoixIds?.includes(a.id);
                      const bSel = proposal.capacitesChoixIds?.includes(b.id);
                      if (aSel && !bSel) return -1;
                      if (!aSel && bSel) return 1;
                      return a.nom.localeCompare(b.nom);
                    }).map(cap => (
                      <label key={cap.id} className="flex items-start space-x-2 text-xs cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={proposal.capacitesChoixIds?.includes(cap.id)} 
                          onChange={(e) => { const newIds = e.target.checked ? [...(proposal.capacitesChoixIds || []), cap.id] : (proposal.capacitesChoixIds || []).filter(id => id !== cap.id); setProposal({ ...proposal, capacitesChoixIds: newIds }); }} 
                          className="mt-0.5 shrink-0"
                        />
                        <span className="line-clamp-2 leading-tight">{cap.nom}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 mt-4">
                <label className="block text-sm font-bold text-rose-900 mb-3">Pouvoirs attachés</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-rose-200">
                  {[...allPouvoirs].sort((a, b) => {
                    const aSel = proposal.pouvoirsIds?.includes(a.id);
                    const bSel = proposal.pouvoirsIds?.includes(b.id);
                    if (aSel && !bSel) return -1;
                    if (!aSel && bSel) return 1;
                    return a.nom.localeCompare(b.nom);
                  }).map(pow => (
                    <label key={pow.id} className="flex items-start space-x-2 text-xs cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={proposal.pouvoirsIds?.includes(pow.id)} 
                        onChange={(e) => { const newIds = e.target.checked ? [...(proposal.pouvoirsIds || []), pow.id] : (proposal.pouvoirsIds || []).filter(id => id !== pow.id); setProposal({ ...proposal, pouvoirsIds: newIds }); }} 
                        className="mt-0.5 shrink-0"
                      />
                      <span className="line-clamp-2 leading-tight">{pow.nom}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SÉLECTION DES ATOUTS */}
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 mt-4">
                <label className="block text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Star size={16} /> Atouts féériques attachés
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-amber-100 shadow-inner custom-scrollbar">
                  {[...allAtouts].sort((a, b) => {
                    const aSel = proposal.atoutsIds?.includes(a.id);
                    const bSel = proposal.atoutsIds?.includes(b.id);
                    if (aSel && !bSel) return -1;
                    if (!aSel && bSel) return 1;
                    return a.nom.localeCompare(b.nom);
                  }).map(atout => (
                    <label key={atout.id} className="flex items-start space-x-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={proposal.atoutsIds?.includes(atout.id)}
                        onChange={(e) => {
                          const newIds = e.target.checked
                            ? [...(proposal.atoutsIds || []), atout.id]
                            : (proposal.atoutsIds || []).filter(id => id !== atout.id);
                          setProposal({ ...proposal, atoutsIds: newIds });
                        }}
                        className="mt-0.5 shrink-0"
                      />
                      <span className="line-clamp-2 leading-tight font-medium text-gray-700">{atout.nom}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
          /* === FORMULAIRE SIMPLE (Pour Capacités, Pouvoirs, Atouts) === */
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nom de l'élément</label>
              <input
                type="text"
                value={proposal.name || ''}
                onChange={(e) => setProposal({...proposal, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none font-bold text-gray-800 bg-white"
                placeholder="Ex: Vision nocturne..."
              />
            </div>

            {activeTab === 'fairy_powers' && (isCreating || editingItem.type_pouvoir) && (
              <div>
                <label className="block text-xs font-bold text-rose-800 uppercase mb-1">Type de Pouvoir</label>
                <select 
                  value={proposal.type_pouvoir || 'masque'} 
                  onChange={(e) => setProposal({ ...proposal, type_pouvoir: e.target.value })} 
                  className="w-full p-2 border border-rose-200 bg-white rounded-lg text-sm"
                >
                  <option value="masque">🎭 Standard - Masqué</option>
                  <option value="demasque">🔥 Standard - Démasqué</option>
                  <option value="profond_masque">🔮 Profond - Masqué</option>
                  <option value="profond_demasque">🌋 Profond - Démasqué</option>
                  <option value="legendaire_masque">👑 Légendaire - Masqué</option>
                  <option value="legendaire_demasque">☄️ Légendaire - Démasqué</option>
                </select>
              </div>
              )}

            {/* CHAMP DESCRIPTION NARRATIVE */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {activeTab === 'fairy_assets' ? 'Description narrative' : 'Description / Contenu'}
              </label>
              <textarea
                value={proposal.description || ''}
                onChange={(e) => setProposal({...proposal, description: e.target.value})}
                className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none font-serif text-gray-800 ${activeTab === 'fairy_assets' ? 'h-24' : 'h-40'}`}
              />
            </div>

            {/* Champ texte exclusif aux Atouts */}
            {activeTab === 'fairy_assets' && (
              <div className="mt-4">
                <label className="block text-sm font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <Star size={16} /> Effets en jeu (Texte affiché au joueur)
                </label>
                <textarea
                  value={proposal.effets || ''}
                  onChange={(e) => setProposal({...proposal, effets: e.target.value})}
                  className="w-full h-24 p-3 border border-amber-300 bg-amber-50/50 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-sm text-gray-800"
                  placeholder="Ex: +1 en Fortune. Débloque la spécialité Politique..."
                />
              </div>
            )}

            {/* 🌟 LE CONSTRUCTEUR DE BONUS UNIFIÉ (Autonome & DRY) 🌟 */}
            {['fairy_assets', 'fairy_powers', 'fairy_capacites'].includes(activeTab) && (
              <div className="mt-4">
				<BonusBuilder
				  parsedTech={parsedTech}
				  updateTech={updateTech}
				  rawJson={proposal.techData}
				  onJsonChange={(val) => setProposal({...proposal, techData: val})}
				  competencesData={competencesData}
				  usefulSkills={usefulSkills}
                  futilesSkills={allCompFutiles ? allCompFutiles.map(c => c.nom || c.name) : []}
				/>
			</div>
            )}

            {/* 👆 FIN DES CHAMPS ATOUTS 👆 */}

            {/* SÉLECTION DES FÉES POUR L'ÉLÉMENT */}
              {['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab) && (
                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-200 mt-4">
                  <label className="block text-sm font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <Sparkles size={16} /> Fées possédant cet élément (Optionnel)
                  </label>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-indigo-100 shadow-inner custom-scrollbar">
                    {[...(allFairyTypes || [])].sort((a, b) => {
                      const aSel = proposal.fairyIds?.includes(a.id);
                      const bSel = proposal.fairyIds?.includes(b.id);
                      if (aSel && !bSel) return -1;
                      if (!aSel && bSel) return 1;
                      return a.name.localeCompare(b.name);
                    }).map(fairy => (
                      <label key={fairy.id} className="flex items-start gap-2 text-xs p-1 hover:bg-indigo-50 rounded cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          checked={proposal.fairyIds?.includes(fairy.id) || false}
                          onChange={(e) => {
                            const currentIds = proposal.fairyIds || [];
                            if (e.target.checked) {
                              setProposal({ ...proposal, fairyIds: [...currentIds, fairy.id] });
                            } else {
                              setProposal({ ...proposal, fairyIds: currentIds.filter(id => id !== fairy.id) });
                            }
                          }}
                          className="mt-0.5 accent-indigo-600"
                        />
                        <span className="font-medium text-indigo-900">{fairy.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 border-t border-gray-100 pt-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Pourquoi cette modification ? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              placeholder="Ex: Erreur de frappe, rééquilibrage selon la page 112..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none"
            />
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end gap-3">
          <button onClick={() => setEditingItem(null)} className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-200 rounded-lg transition-colors">
            Annuler
          </button>
          <button onClick={handleSubmitProposal} className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm flex items-center gap-2 transition-all">
            <Save size={18} /> Soumettre
          </button>
        </div>
      </div>
    </div>
  );
}