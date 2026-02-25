// src/components/EncyclopediaModal.js
import React from 'react';
import { X, Sparkles, Save, Star, Settings } from 'lucide-react';
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
  allCompetences // 👈 NOUVELLE PROP
}) {

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
        if (newMin !== (editingItem[`${stat.sql}_min`] || 1)) surgicalData[`${stat.sql}_min`] = newMin;
        if (newMax !== (editingItem[`${stat.sql}_max`] || 6)) surgicalData[`${stat.sql}_max`] = newMax;
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
      if (proposal.competencesUtiles !== oldUtiles) changedRelations.competencesUtiles = proposal.competencesUtiles;

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
      if (proposal.description !== (editingItem.description || editingItem.desc || '')) {
        surgicalData.description = proposal.description;
      }
    }

    // 2. GESTION DES BONUS (Capacités, Pouvoirs, Atouts)
    if (['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab)) {
      const finalBonus = {};
      
      if (proposal.bonusCaracs && Object.keys(proposal.bonusCaracs).length > 0) finalBonus.caracteristiques = proposal.bonusCaracs;
      if (proposal.bonusComps && Object.keys(proposal.bonusComps).length > 0) finalBonus.competences = proposal.bonusComps;

      // Re-formatage des Spécialités
      if (proposal.bonusSpecs && proposal.bonusSpecs.length > 0) {
        const validSpecs = proposal.bonusSpecs.filter(s => s.nom && s.nom.trim() !== '');
        if (validSpecs.length > 0) {
          if (activeTab === 'fairy_assets') {
            finalBonus.specialites = validSpecs; // Format Atout: [{competence: "x", nom: "y"}]
          } else {
            finalBonus.specialites = {}; // Format Capacité: {"x": ["y"]}
            validSpecs.forEach(spec => {
              if (!finalBonus.specialites[spec.competence]) finalBonus.specialites[spec.competence] = [];
              finalBonus.specialites[spec.competence].push(spec.nom.trim());
            });
          }
        }
      }

      // Comparaison avec l'existant
      const originalBonus = editingItem.bonus || editingItem.effets_techniques || {};
      if (JSON.stringify(finalBonus) !== JSON.stringify(originalBonus)) {
        const targetCol = activeTab === 'fairy_assets' ? 'effets_techniques' : 'bonus';
        surgicalData[targetCol] = finalBonus;
      }
    }

    if (Object.keys(surgicalData).length === 0) {
      alert("Aucune modification n'a été détectée par rapport à la version actuelle.");
      return;
    }

    try {
      const payload = {
        user_id: userProfile.id,
        table_name: activeTab,
        record_id: editingItem.id,
        record_name: isCreating ? proposal.name : (editingItem.name || editingItem.nom),
        new_data: surgicalData, 
        justification: justification,
        status: 'pending'
      };

      const { error } = await supabase.from('data_change_requests').insert([payload]);
      if (error) throw error;

      logger.info("✅ Proposition envoyée :", payload.record_name);
      alert("Votre proposition a été envoyée aux Gardiens du Savoir !");
      setEditingItem(null);
      
    } catch (error) {
      logger.error("❌ Erreur envoi proposition :", error);
      alert("Erreur lors de l'envoi : " + error.message);
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
              <div>
                <label className="block text-sm font-bold text-amber-900 mb-1">Description</label>
                <textarea
                  value={proposal.description || ''}
                  onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
                  className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 font-serif text-sm min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label className="block text-sm font-bold text-purple-900 mb-1">Compétences Utiles (Format texte provisoire)</label>
                <textarea value={proposal.competencesUtiles || ''} onChange={(e) => setProposal({ ...proposal, competencesUtiles: e.target.value })} className="w-full p-2 border border-purple-200 rounded-lg text-xs font-mono min-h-[80px] mb-4" />
                
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
                    {allCapacites.map(cap => (
                      <label key={cap.id} className="flex items-center space-x-2 text-xs cursor-pointer">
                        <input type="checkbox" checked={proposal.capacitesChoixIds?.includes(cap.id)} onChange={(e) => { const newIds = e.target.checked ? [...(proposal.capacitesChoixIds || []), cap.id] : (proposal.capacitesChoixIds || []).filter(id => id !== cap.id); setProposal({ ...proposal, capacitesChoixIds: newIds }); }} />
                        <span className="truncate">{cap.nom}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 mt-4">
                <label className="block text-sm font-bold text-rose-900 mb-3">Pouvoirs attachés</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-rose-200">
                  {allPouvoirs.map(pow => (
                    <label key={pow.id} className="flex items-center space-x-2 text-xs cursor-pointer">
                      <input type="checkbox" checked={proposal.pouvoirsIds?.includes(pow.id)} onChange={(e) => { const newIds = e.target.checked ? [...(proposal.pouvoirsIds || []), pow.id] : (proposal.pouvoirsIds || []).filter(id => id !== pow.id); setProposal({ ...proposal, pouvoirsIds: newIds }); }} />
                      <span className="truncate">{pow.nom}</span>
                    </label>
                  ))}
                </div>
              </div>
			
			  {/* NOUVEAU : SÉLECTION DES ATOUTS */}
              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 mt-4">
                <label className="block text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Star size={16} /> Atouts féériques attachés
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-amber-100 shadow-inner custom-scrollbar">
                  {allAtouts.map(atout => (
                    <label key={atout.id} className="flex items-center space-x-2 text-xs cursor-pointer hover:bg-amber-50 p-1 rounded transition-colors">
                      <input 
                        type="checkbox" 
                        className="rounded text-amber-600 focus:ring-amber-500"
                        checked={proposal.atoutsIds?.includes(atout.id)} 
                        onChange={(e) => { 
                          const newIds = e.target.checked 
                            ? [...(proposal.atoutsIds || []), atout.id] 
                            : (proposal.atoutsIds || []).filter(id => id !== atout.id); 
                          setProposal({ ...proposal, atoutsIds: newIds }); 
                        }} 
                      />
                      <span className="truncate font-medium text-gray-700">{atout.nom}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* === FORMULAIRE SIMPLE (Pour Compétences, Pouvoirs et Profils) === */
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nom de l'élément</label>
                {isCreating ? (
                  <input
                    type="text"
                    value={proposal.name || ''}
                    onChange={(e) => setProposal({ ...proposal, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 font-bold text-lg"
                    placeholder="Ex: Vol incangandescent..."
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

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Description / Contenu</label>
                <textarea
                  value={proposal.description || ''}
                  onChange={(e) => setProposal({...proposal, description: e.target.value})}
                  className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none font-serif text-gray-800"
                />
              </div>

              {/* 🛠️ NOUVEAU : CONSTRUCTEUR DE BONUS TECHNIQUES */}
              {['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab) && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-6 space-y-5">
                  <label className="block text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Settings size={16} className="text-slate-500" /> Effets Techniques (Mécaniques de jeu)
                  </label>

                  {/* 1. Bonus Caractéristiques */}
                  <div>
                    <span className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Caractéristiques (+1, +2...)</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white p-2 rounded-lg border border-slate-100">
                      {['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid'].map(stat => (
                        <div key={stat} className="flex items-center gap-2 text-xs">
                          <input
                            type="number" min="0" max="5"
                            value={proposal.bonusCaracs?.[stat] || ''}
                            placeholder="0"
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              const newCaracs = { ...proposal.bonusCaracs };
                              if (val > 0) newCaracs[stat] = val; else delete newCaracs[stat];
                              setProposal({ ...proposal, bonusCaracs: newCaracs });
                            }}
                            className="w-10 p-1 border border-slate-200 rounded text-center text-amber-700 font-bold focus:ring-1 focus:ring-amber-400"
                          />
                          <span className="capitalize text-slate-700">{stat === 'sangFroid' ? 'Sang-Froid' : stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 2. Bonus Compétences pures */}
                    <div>
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Bonus Compétences</span>
                         <button 
                           type="button"
                           onClick={(e) => {
                             e.preventDefault();
                             // Sécurité absolue : si la liste n'est pas chargée, on met 'Art de la guerre' par défaut
                             const defaultComp = (allCompetences && allCompetences.length > 0 && allCompetences.name) 
                               ? allCompetences.name 
                               : 'Art de la guerre';
                             
                             setProposal(prev => ({ 
                               ...prev, 
                               bonusComps: { ...(prev.bonusComps || {}), [defaultComp]: 1 } 
                             }));
                           }} 
                           className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold hover:bg-slate-300 transition-colors"
                         >
                           + Rangs
                         </button>
                       </div>
                       <div className="space-y-2 bg-white p-2 rounded-lg border border-slate-100 min-h-[60px]">
                         {Object.entries(proposal.bonusComps || {}).map(([compName, val], idx) => (
                           <div key={idx} className="flex gap-2 items-center">
                             <select
                               value={compName}
                               onChange={(e) => {
                                 const newComps = { ...proposal.bonusComps };
                                 delete newComps[compName];
                                 newComps[e.target.value] = val;
                                 setProposal({ ...proposal, bonusComps: newComps });
                               }}
                               className="p-1 text-xs border border-slate-200 rounded flex-1 bg-slate-50"
                             >
                               {/* 👈 UTILISATION DES DONNÉES DE LA BDD (c.name) */}
                               {allCompetences.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                             </select>
                             <input
                               type="number" min="1" max="5" value={val}
                               onChange={(e) => setProposal({ ...proposal, bonusComps: { ...proposal.bonusComps, [compName]: parseInt(e.target.value) || 1 } })}
                               className="w-10 p-1 text-xs border border-slate-200 rounded text-center font-bold text-amber-700"
                             />
                             <button onClick={() => { const newComps = { ...proposal.bonusComps }; delete newComps[compName]; setProposal({ ...proposal, bonusComps: newComps }); }} className="text-red-400 hover:text-red-600 font-bold px-1">×</button>
                           </div>
                         ))}
                         {Object.keys(proposal.bonusComps || {}).length === 0 && <span className="text-xs text-slate-400 italic block mt-1">Aucun rang brut offert.</span>}
                       </div>
                    </div>

                    {/* 3. Spécialités Gratuites */}
                    <div>
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Spécialités Offertes</span>
                         <button 
                           type="button"
                           onClick={(e) => {
                             e.preventDefault();
                             const defaultComp = (allCompetences && allCompetences.length > 0 && allCompetences.name) 
                               ? allCompetences.name 
                               : 'Art de la guerre';
                               
                             setProposal(prev => ({ 
                               ...prev, 
                               bonusSpecs: [...(prev.bonusSpecs || []), { competence: defaultComp, nom: '' }] 
                             }));
                           }} 
                           className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold hover:bg-slate-300 transition-colors"
                         >
                           + Spécialité
                         </button>
                       </div>
                       <div className="space-y-2 bg-white p-2 rounded-lg border border-slate-100 min-h-[60px]">
                         {(proposal.bonusSpecs || []).map((spec, idx) => (
                           <div key={idx} className="flex gap-2 items-center">
                             <select
                               value={spec.competence}
                               onChange={(e) => {
                                 const newSpecs = [...proposal.bonusSpecs];
                                 newSpecs[idx].competence = e.target.value;
                                 setProposal({ ...proposal, bonusSpecs: newSpecs });
                               }}
                               className="p-1 text-[11px] border border-slate-200 rounded w-24 bg-slate-50 truncate"
                             >
                               {/* 👈 UTILISATION DES DONNÉES DE LA BDD (c.name) */}
                               {allCompetences.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                             </select>
                             <input
                               type="text" placeholder="Ex: Politique..." value={spec.nom}
                               onChange={(e) => {
                                 const newSpecs = [...proposal.bonusSpecs];
                                 newSpecs[idx].nom = e.target.value;
                                 setProposal({ ...proposal, bonusSpecs: newSpecs });
                               }}
                               className="p-1 text-xs border border-slate-200 rounded flex-1 font-serif text-amber-900 placeholder:text-slate-300"
                             />
                             <button onClick={() => { const newSpecs = [...proposal.bonusSpecs]; newSpecs.splice(idx, 1); setProposal({ ...proposal, bonusSpecs: newSpecs }); }} className="text-red-400 hover:text-red-600 font-bold px-1">×</button>
                           </div>
                         ))}
                         {(!proposal.bonusSpecs || proposal.bonusSpecs.length === 0) && <span className="text-xs text-slate-400 italic block mt-1">Aucune spécialité dorée.</span>}
                       </div>
                    </div>
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