// src/components/EncyclopediaModal.js
// 8.20.0 // 8.21.0 // 8.29.0

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Save, Star } from 'lucide-react';
import { supabase } from '../config/supabase';
import { logger } from '../utils/logger';

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

  // 🌟 NOUVEAU : Liste dynamique depuis la base de données
  const [usefulSkills, setUsefulSkills] = useState([]);

  React.useEffect(() => {
    // Si on édite une Fée, on va chercher le vrai nom de toutes les compétences utiles
    if (activeTab === 'fairy_types') {
      const fetchSkills = async () => {
        const { data, error } = await supabase.from('competences').select('name').order('name');
        if (!error && data) {
          setUsefulSkills(data.map(c => c.name)); // 'name' est le nom de la colonne dans Supabase
        }
      };
      fetchSkills();
    }
  }, [activeTab]);

  // --- LA FONCTION CHIRURGIEN ---
  const handleSubmitProposal = async () => {
    if (!justification.trim()) {
      alert("Veuillez expliquer brièvement la raison de cette modification.");
      return;
    }

    const surgicalData = {};

    const arraysEqual = (a, b) => {
      const arrA = Array.isArray(a) && a.length > 0 ? a : [];
      const arrB = Array.isArray(b) && b.length > 0 ? b : [];
      return JSON.stringify(arrA) === JSON.stringify(arrB);
    };

    // 1. GESTION DU NOM (Adaptatif : name vs nom)
    const nameColumn = activeTab === 'fairy_types' ? 'name' : 'nom';

    if (isCreating) {
      if (!proposal.name?.trim()) return alert("Le nom est obligatoire !");
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
      // 👈 NOUVEAU : On enregistre l'ancienneté (era)
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
        
        // 👈 NOUVEAU : Si on crée une Fée, on force l'enregistrement de TOUTES les stats
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
      if (!arraysEqual(newPouvoirs, oldPouvoirs)) changedRelations.pouvoirs = newPouvoirs;
      if (!arraysEqual(newAtouts, oldAtouts)) changedRelations.atouts = newAtouts;

      const oldUtiles = editingItem.competencesPredilection ? JSON.stringify(editingItem.competencesPredilection, null, 2) : '';
      
      if (proposal.competencesUtiles !== oldUtiles) {
        if (proposal.competencesUtiles && proposal.competencesUtiles.trim() !== '') {
          try {
            // 🛡️ On tente de lire le JSON. Si ça plante, c'est que c'est du simple texte !
            JSON.parse(proposal.competencesUtiles);
            changedRelations.competencesUtiles = proposal.competencesUtiles;
          } catch (e) {
            alert("❌ ERREUR : La case 'Compétences Utiles' doit être au format JSON valide (avec les crochets et accolades), pas du texte normal !");
            return; // Bloque l'envoi au Conseil
          }
        } else {
          changedRelations.competencesUtiles = "[]"; // Si le champ est vidé, on envoie un tableau JSON vide
        }
      }
	  
      const newFutiles = [];
      if (proposal.futileFixe1) newFutiles.push({ is_choice: false, competence_futile_id: proposal.futileFixe1 });
      if (proposal.futileFixe2) newFutiles.push({ is_choice: false, competence_futile_id: proposal.futileFixe2 });
      if (proposal.futileChoix1 && proposal.futileChoix1.length > 0) newFutiles.push({ is_choice: true, choice_options: proposal.futileChoix1 });
      if (proposal.futileChoix2 && proposal.futileChoix2.length > 0) newFutiles.push({ is_choice: true, choice_options: proposal.futileChoix2 });

      const oldFutiles = (editingItem.fairy_competences_futiles_predilection || []).map(f => ({
        is_choice: f.is_choice, competence_futile_id: f.competence_futile_id || null, choice_options: f.choice_options || null
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
             surgicalData._relations.fairyIds = newIds;
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
      alert("Aucune modification n'a été détectée par rapport à la version actuelle.");
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
      alert("Votre proposition a été envoyée aux Gardiens du Savoir !");
    
      // 👈 NOUVEAU : On utilise onSuccess s'il existe pour mettre à jour les cadenas
      if (onSuccess) {
        onSuccess();
      } else {
        setEditingItem(null);
      }
    } catch (error) {
      logger.error("❌ Erreur envoi proposition :", error);
      alert("Erreur lors de l'envoi : " + error.message);
    }
  };

  // 🧠 NOUVEAU : PARSING DES COMPÉTENCES UTILES (Builder Visuel)
  let parsedUtiles = [];
  if (activeTab === 'fairy_types') {
    try {
      parsedUtiles = JSON.parse(proposal.competencesUtiles || '[]');
      if (!Array.isArray(parsedUtiles)) parsedUtiles = [];
    } catch(e) {
      parsedUtiles = []; // Sécurité anti-crash
    }
  }

  // Cette fonction met à jour le JSON caché à chaque clic sur l'interface
  const updateUtiles = (newArray) => {
    setProposal({ ...proposal, competencesUtiles: JSON.stringify(newArray, null, 2) });
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
                {isCreating ? (
                  <input
                    type="text"
                    value={proposal.name || ''}
                    onChange={(e) => setProposal({ ...proposal, name: e.target.value })}
                    className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-bold text-lg bg-white"
                    placeholder="Ex: Phénix, Salamandre, Automate..."
                  />
                ) : (
                  <div className="p-3 bg-amber-100/50 rounded-lg text-amber-900 font-bold border border-amber-200">
                    {editingItem.name || editingItem.nom}
                  </div>
                )}
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

              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">

				{/* 🌟 NOUVEAU CONSTRUCTEUR DE COMPÉTENCES UTILES 🌟 */}
				<div className="mb-6">
				  <div className="flex justify-between items-center mb-3">
					<label className="block text-sm font-bold text-purple-900">🌟 Compétences Utiles (Prédilection)</label>
					<div className="flex gap-1">
					  <button type="button" onClick={() => updateUtiles([...parsedUtiles, { nom: 'Observation', specialite: null }])} className="text-[10px] bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded font-bold shadow-sm">+ Fixe</button>
					  <button type="button" onClick={() => updateUtiles([...parsedUtiles, { isChoix: true, options: [] }])} className="text-[10px] bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded font-bold shadow-sm">+ Choix Comp.</button>
					  <button type="button" onClick={() => updateUtiles([...parsedUtiles, { nom: 'Conduite', isSpecialiteChoix: true, options: [] }])} className="text-[10px] bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded font-bold shadow-sm">+ Choix Spé.</button>
					</div>
				  </div>
				  
				  <div className="space-y-2 bg-white p-3 rounded shadow-inner border border-purple-100 min-h-[80px]">
					{parsedUtiles.length === 0 && <div className="text-xs text-gray-400 italic text-center mt-4">Aucune compétence configurée...</div>}
					
					{parsedUtiles.map((item, idx) => (
					  <div key={idx} className="relative p-2 bg-purple-50/50 rounded border border-purple-100 flex flex-col gap-2 transition-all">
						<button type="button" onClick={() => updateUtiles(parsedUtiles.filter((_, i) => i !== idx))} className="absolute top-1 right-2 text-red-400 hover:text-red-600 font-bold text-lg leading-none" title="Supprimer">&times;</button>
						
						{item.isChoix ? (
						  <>
							<span className="text-[10px] uppercase font-bold text-purple-800 tracking-wider">Choix de Compétence</span>
							<div className="flex gap-2 items-center pr-6">
							  <select 
								onChange={(e) => {
								  const val = e.target.value;
								  if (val && !item.options?.includes(val)) {
									const newArr = [...parsedUtiles];
									newArr[idx] = { ...item, options: [...(item.options || []), val] };
									updateUtiles(newArr);
								  }
								  e.target.value = "";
								}} 
								className="p-1.5 border border-purple-200 rounded text-xs flex-shrink-0 bg-white focus:ring-purple-500"
							  >
								<option value="">+ Ajouter au choix...</option>
								{usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
							  </select>
							  <div className="flex flex-wrap gap-1">
								{(item.options || []).map(opt => (
								  <span key={opt} className="bg-purple-200 text-purple-900 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
									{opt} 
									<button type="button" onClick={() => {
									  const newArr = [...parsedUtiles];
									  newArr[idx] = { ...item, options: item.options.filter(o => o !== opt) };
									  updateUtiles(newArr);
									}} className="hover:text-red-600">&times;</button>
								  </span>
								))}
							  </div>
							</div>
						  </>
						) : item.isSpecialiteChoix ? (
						  <>
							<span className="text-[10px] uppercase font-bold text-purple-800 tracking-wider">Choix de Spécialité</span>
							<div className="flex gap-2 items-center pr-6">
							  <select 
								value={item.nom || ''} 
								onChange={(e) => {
								  const newArr = [...parsedUtiles];
								  newArr[idx] = { ...item, nom: e.target.value };
								  updateUtiles(newArr);
								}} 
								className="p-1.5 border border-purple-200 rounded text-xs font-bold bg-white text-purple-900"
							  >
								{usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
							  </select>
							  <input 
								type="text" 
								placeholder="Ex: Arc, Arbalète (séparés par virgules)" 
								value={item.options ? item.options.join(', ') : ''} 
								onChange={(e) => {
								  const newArr = [...parsedUtiles];
								  newArr[idx] = { ...item, options: e.target.value.split(',').map(s => s.trim()).filter(Boolean) };
								  updateUtiles(newArr);
								}} 
								className="p-1.5 border border-purple-200 rounded text-xs flex-1 placeholder-purple-300" 
							  />
							</div>
						  </>
						) : (
						  <>
							<span className="text-[10px] uppercase font-bold text-purple-800 tracking-wider">Compétence Fixe</span>
							<div className="flex gap-2 items-center pr-6">
							  <select 
								value={item.nom || ''} 
								onChange={(e) => {
								  const newArr = [...parsedUtiles];
								  newArr[idx] = { ...item, nom: e.target.value };
								  updateUtiles(newArr);
								}} 
								className="p-1.5 border border-purple-200 rounded text-xs font-bold bg-white text-purple-900"
							  >
								<option value="">-- Choisir --</option>
								{usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
							  </select>
							  <input 
								type="text" 
								placeholder="Spécialité imposée (optionnel)" 
								value={item.specialite || ''} 
								onChange={(e) => {
								  const newArr = [...parsedUtiles];
								  newArr[idx] = { ...item, specialite: e.target.value };
								  updateUtiles(newArr);
								}} 
								className="p-1.5 border border-purple-200 rounded text-xs flex-1 placeholder-purple-300" 
							  />
							</div>
						  </>
						)}
					  </div>
					))}
				  </div>
				</div>
				{/* 🌟 FIN DU CONSTRUCTEUR 🌟 */}

                <label className="block text-sm font-bold text-emerald-900 mb-2 border-t border-purple-200 pt-4">🌟 Compétences Futiles</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3 bg-white p-3 rounded shadow-sm border border-emerald-100">
                    <label className="block text-xs font-bold text-emerald-800 border-b pb-1">Spécifiques (Fixes)</label>
                    <select value={proposal.futileFixe1 || ''} onChange={(e) => setProposal({ ...proposal, futileFixe1: e.target.value })} className="w-full p-2 border rounded text-sm bg-emerald-50/30">
                      <option value="">-- Emplacement vide --</option>
                      {allCompFutiles.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <select value={proposal.futileFixe2 || ''} onChange={(e) => setProposal({ ...proposal, futileFixe2: e.target.value })} className="w-full p-2 border rounded text-sm bg-emerald-50/30">
                      <option value="">-- Emplacement vide --</option>
                      {allCompFutiles.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-3 bg-white p-3 rounded shadow-sm border border-emerald-100">
                    <label className="block text-xs font-bold text-emerald-800 border-b pb-1">Choix multiples</label>
                    <div className="bg-emerald-50/30 p-2 rounded border border-emerald-100">
                      <select onChange={(e) => { if (!e.target.value) return; const current = proposal.futileChoix1 || []; if (!current.includes(e.target.value)) setProposal({ ...proposal, futileChoix1: [...current, e.target.value] }); }} value="" className="w-full p-1.5 border border-emerald-200 rounded text-xs bg-white focus:ring-emerald-500 mb-1">
                        <option value="">+ Ajouter au Choix 1...</option>
                        {allCompFutiles.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                      <div className="flex flex-wrap gap-1">{(proposal.futileChoix1 || []).map(opt => <span key={opt} className="bg-emerald-200 text-emerald-900 text-[10px] px-2 py-1 rounded-full flex items-center">{opt} <button onClick={() => setProposal({...proposal, futileChoix1: proposal.futileChoix1.filter(o => o !== opt)})} className="ml-1 font-bold">×</button></span>)}</div>
                    </div>
                    <div className="bg-emerald-50/30 p-2 rounded border border-emerald-100">
                      <select onChange={(e) => { if (!e.target.value) return; const current = proposal.futileChoix2 || []; if (!current.includes(e.target.value)) setProposal({ ...proposal, futileChoix2: [...current, e.target.value] }); }} value="" className="w-full p-1.5 border border-emerald-200 rounded text-xs bg-white focus:ring-emerald-500 mb-1">
                        <option value="">+ Ajouter au Choix 2...</option>
                        {allCompFutiles.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                      <div className="flex flex-wrap gap-1">{(proposal.futileChoix2 || []).map(opt => <span key={opt} className="bg-emerald-200 text-emerald-900 text-[10px] px-2 py-1 rounded-full flex items-center">{opt} <button onClick={() => setProposal({...proposal, futileChoix2: proposal.futileChoix2.filter(o => o !== opt)})} className="ml-1 font-bold">×</button></span>)}</div>
                    </div>
                  </div>
                </div>
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
                {isCreating ? (
                  <input
                    type="text"
                    value={proposal.name || ''}
                    onChange={(e) => setProposal({ ...proposal, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-bold text-lg"
                    placeholder="Ex: Vol incandescent..."
                  />
                ) : (
                  <div className="p-3 bg-gray-100 rounded-lg text-gray-600 font-bold border border-gray-200">
                    {editingItem.name || editingItem.nom}
                  </div>
                )}
              </div>

              {activeTab === 'fairy_powers' && (isCreating || editingItem.type_pouvoir) && (
                <div>
                  <label className="block text-sm font-bold text-rose-800 mb-1">Type de Pouvoir</label>
                  <select
                    value={proposal.type_pouvoir || editingItem.type_pouvoir || 'masque'}
                    onChange={(e) => setProposal({ ...proposal, type_pouvoir: e.target.value })}
                    className="w-full p-2 border border-rose-200 rounded-lg bg-rose-50 text-rose-900 font-medium"
                    disabled={!isCreating}
                  >
                    <option value="masque">🎭 Masqué</option>
                    <option value="demasque">🔥 Démasqué</option>
                    <option value="profond">✨ Profond</option>
                    <option value="legendaire">👑 Légendaire</option>
                  </select>
                </div>
              )}

              {/* Si vous aviez votre constructeur de Bonus ici, il sera toujours fonctionnel via le JSON, sinon ajoutez-le ici ! */}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Description / Contenu</label>
                <textarea
                  value={proposal.description || ''}
                  onChange={(e) => setProposal({...proposal, description: e.target.value})}
                  className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-serif text-gray-800"
                />
              </div>

              {/* 👈 NOUVEAU : SÉLECTION DES FÉES POUR L'ÉLÉMENT */}
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
                          checked={proposal.fairyIds?.includes(fairy.id)}
                          onChange={(e) => {
                            const newIds = e.target.checked
                              ? [...(proposal.fairyIds || []), fairy.id]
                              : (proposal.fairyIds || []).filter(id => id !== fairy.id);
                            setProposal({ ...proposal, fairyIds: newIds });
                          }}
                          className="text-indigo-600 focus:ring-indigo-500 rounded border-gray-300 mt-0.5 shrink-0"
                        />
                        <span className="line-clamp-2 leading-tight font-medium text-gray-700">{fairy.name}</span>
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
