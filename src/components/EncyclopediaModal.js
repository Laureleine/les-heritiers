// src/components/EncyclopediaModal.js

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Save, Star, Search, Plus } from 'lucide-react';
import QuickForgeModal from './QuickForgeModal';
import BonusBuilder from './BonusBuilder';
import { logger, showInAppNotification, translateError } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';
import { submitEncyclopediaProposal } from '../utils/encyclopediaEngine';

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

  // ✨ INCISION : Les barres de recherche et la gestion de la Poupée Russe
  const [searchPouvoirs, setSearchPouvoirs] = useState('');
  const [searchAtouts, setSearchAtouts] = useState('');
  const [searchCapacites, setSearchCapacites] = useState('');
  const [hasPendingTech, setHasPendingTech] = useState(false);

  // ✨ LE CERVEAU SÉPARÉ : On copie les listes globales pour pouvoir y injecter nos nouvelles créations en temps réel !
  const [localPouvoirs, setLocalPouvoirs] = useState(allPouvoirs || []);
  const [localAtouts, setLocalAtouts] = useState(allAtouts || []);
  const [localCapacites, setLocalCapacites] = useState(allCapacites || []);

  const [quickForge, setQuickForge] = useState({ isOpen: false, type: null });
 
  useEffect(() => { setLocalPouvoirs(allPouvoirs || []); }, [allPouvoirs]);
  useEffect(() => { setLocalAtouts(allAtouts || []); }, [allAtouts]);
  useEffect(() => { setLocalCapacites(allCapacites || []); }, [allCapacites]);

  const handleQuickForgeSuccess = (newItem, type) => {
    if (type === 'fairy_powers') {
      setLocalPouvoirs(prev => [...prev, newItem]);
      setProposal(prev => ({ ...prev, pouvoirsIds: [...(prev.pouvoirsIds || []), newItem.id] }));
    } else if (type === 'fairy_assets') {
      setLocalAtouts(prev => [...prev, newItem]);
      setProposal(prev => ({ ...prev, assetsIds: [...(prev.assetsIds || []), newItem.id] }));
    } else if (type === 'fairy_capacites') {
      // ✨ L'INCISION : Gestion des Capacités
      setLocalCapacites(prev => [...prev, newItem]);
      setProposal(prev => ({ ...prev, capacitesChoixIds: [...(prev.capacitesChoixIds || []), newItem.id] }));
    }
  };
  
  // 🧠 On extrait et formate instantanément les données du Nuage pour le BonusBuilder
  const competencesData = Object.values(gameData.competences || {}).map(c => ({
    id: c.id,
    name: c.nom, // On renomme 'nom' en 'name' pour la compatibilité
    specialites: c.specialites
  }));
  const usefulSkills = Object.keys(gameData.competences || {});
  
  // --- LA FONCTION CHIRURGIEN (Déléguée au Cerveau Séparé) ---
  const handleSubmitProposal = async () => {

    // ✨ LE GARDE-FOU ANTI-BOULET
    if (hasPendingTech) {
      showInAppNotification("⚠️ Modifications en attente : Veuillez cliquer sur 'Compiler les Effets' dans les règles techniques avant de valider votre proposition !", "error");
      return;
    }

    if (!justification.trim()) {
      showInAppNotification("Veuillez expliquer brièvement la raison de cette modification.", "warning");
      return;
    }

    // ✨ MAGIE : On délègue tout le travail algorithmique au Cerveau Séparé !
    const result = await submitEncyclopediaProposal({
      activeTab,
      isCreating,
      proposal,
      editingItem,
      justification,
      userProfile,
      parsedTech,
      allCompFutiles
    });

    if (result.success) {
      logger.info("✅ Proposition envoyée :", result.recordName);
      showInAppNotification("Votre proposition a été envoyée aux Gardiens du Savoir !", "success");
      
      // On met à jour les cadenas si besoin
      if (onSuccess) {
        onSuccess();
      } else {
        setEditingItem(null);
      }
    } else if (result.warning) {
      showInAppNotification(result.message, "warning");
    } else {
      logger.error("❌ Erreur envoi proposition :", result.error);
      showInAppNotification(translateError(result.error), "error");
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

			  {/* ✨ NOUVEAU : LE SCEAU DU SILENCE (FÉE SECRÈTE) */}
			  <div className="bg-red-50 p-4 rounded-xl border border-red-200 mt-2 mb-6 shadow-sm">
				<label className="flex items-center gap-3 cursor-pointer">
				  <input
					type="checkbox"
					checked={proposal.is_secret || false}
					onChange={(e) => setProposal({ ...proposal, is_secret: e.target.checked })}
					className="w-5 h-5 accent-red-600"
				  />
				  <div>
					<span className="font-bold text-red-900 text-sm flex items-center gap-2">
					   Savoir sous le Sceau du Silence (Fée Secrète)
					</span>
					<span className="text-xs text-red-700 italic block mt-1">
					  Cochez cette case pour masquer cette fée aux simples Héritiers dans la création de personnage.
					</span>
				  </div>
				</label>
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
					  onPendingChanges={setHasPendingTech}
					/>
                </div>

				{/* ✨ LE BLOC DES CAPACITÉS AUGMENTÉ ✨ */}
				<div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mt-4">
				  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
					<label className="block text-sm font-bold text-indigo-900">Capacités attachées</label>
					<button onClick={() => setQuickForge({ isOpen: true, type: 'fairy_capacites' })} className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm transition-colors shrink-0">
					  <Plus size={14} /> Créer à la volée
					</button>
				  </div>

				  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
					<div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
					  <label className="block text-xs font-bold text-indigo-800 mb-2">🌟 Capacité Fixe 1</label>
					  <select value={proposal.capaciteFixe1 || ''} onChange={(e) => setProposal({ ...proposal, capaciteFixe1: e.target.value })} className="w-full p-2 border border-indigo-200 rounded text-sm bg-indigo-50/30">
						<option value="">-- Sélectionner --</option>
						{localCapacites.map(cap => <option key={cap.id} value={cap.id}>{cap.nom}</option>)}
					  </select>
					</div>
					<div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
					  <label className="block text-xs font-bold text-indigo-800 mb-2">🌟 Capacité Fixe 2</label>
					  <select value={proposal.capaciteFixe2 || ''} onChange={(e) => setProposal({ ...proposal, capaciteFixe2: e.target.value })} className="w-full p-2 border border-indigo-200 rounded text-sm bg-indigo-50/30">
						<option value="">-- Sélectionner --</option>
						{localCapacites.map(cap => <option key={cap.id} value={cap.id}>{cap.nom}</option>)}
					  </select>
					</div>
				  </div>

				  <div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
					<label className="block text-xs font-bold text-indigo-800 mb-2">⭐ Capacités au Choix</label>
					
					<div className="relative mb-3">
					  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
					  <input type="text" placeholder="Rechercher une capacité..." value={searchCapacites} onChange={e => setSearchCapacites(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-sm border border-indigo-200 rounded-lg outline-none focus:border-indigo-400 bg-indigo-50/30" />
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
					  {[...localCapacites]
						.filter(c => c.nom.toLowerCase().includes(searchCapacites.toLowerCase()))
						.sort((a, b) => {
						  const aSel = proposal.capacitesChoixIds?.includes(a.id);
						  const bSel = proposal.capacitesChoixIds?.includes(b.id);
						  if (aSel && !bSel) return -1;
						  if (!aSel && bSel) return 1;
						  return a.nom.localeCompare(b.nom);
						}).map(cap => (
						<label key={cap.id} className="flex items-start space-x-2 text-xs cursor-pointer p-1 hover:bg-indigo-50 rounded transition-colors">
						  <input
							type="checkbox"
							checked={proposal.capacitesChoixIds?.includes(cap.id) || false}
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
				  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
					<label className="block text-sm font-bold text-rose-900">Pouvoirs attachés</label>
					<button onClick={() => setQuickForge({ isOpen: true, type: 'fairy_powers' })} className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm transition-colors shrink-0">
					  <Plus size={14} /> Créer à la volée
					</button>
				  </div>
				  
				  <div className="relative mb-3">
					<Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-300" />
					<input type="text" placeholder="Rechercher un pouvoir par nom..." value={searchPouvoirs} onChange={e => setSearchPouvoirs(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-sm border border-rose-200 rounded-lg outline-none focus:border-rose-400 bg-white" />
				  </div>

				  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-rose-200 custom-scrollbar">
					{[...localPouvoirs]
					  .filter(p => p.nom.toLowerCase().includes(searchPouvoirs.toLowerCase()))
					  .sort((a, b) => {
						const aSel = proposal.pouvoirsIds?.includes(a.id);
						const bSel = proposal.pouvoirsIds?.includes(b.id);
						if (aSel && !bSel) return -1;
						if (!aSel && bSel) return 1;
						return a.nom.localeCompare(b.nom);
					  }).map(pow => (
					  <label key={pow.id} className="flex items-start space-x-2 text-xs cursor-pointer p-1 hover:bg-rose-100 rounded transition-colors">
						<input
						  type="checkbox"
						  checked={proposal.pouvoirsIds?.includes(pow.id) || false}
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
				  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
					<label className="block text-sm font-bold text-amber-900 flex items-center gap-2">
					  <Star size={16} /> Atouts féériques attachés
					</label>
					<button onClick={() => setQuickForge({ isOpen: true, type: 'fairy_assets' })} className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm transition-colors shrink-0">
					  <Plus size={14} /> Créer à la volée
					</button>
				  </div>

				  <div className="relative mb-3">
					<Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-300" />
					<input type="text" placeholder="Rechercher un atout par nom..." value={searchAtouts} onChange={e => setSearchAtouts(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-sm border border-amber-200 rounded-lg outline-none focus:border-amber-400 bg-white" />
				  </div>

				  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-amber-100 shadow-inner custom-scrollbar">
					{[...localAtouts]
					  .filter(a => a.nom.toLowerCase().includes(searchAtouts.toLowerCase()))
					  .sort((a, b) => {
						const aSel = proposal.assetsIds?.includes(a.id);
						const bSel = proposal.assetsIds?.includes(b.id);
						if (aSel && !bSel) return -1;
						if (!aSel && bSel) return 1;
						return a.nom.localeCompare(b.nom);
					  }).map(atout => (
					  <label key={atout.id} className="flex items-start space-x-2 text-xs cursor-pointer p-1 hover:bg-amber-100 rounded transition-colors">
						<input
						  type="checkbox"
						  checked={proposal.assetsIds?.includes(atout.id) || false}
						  onChange={(e) => { const newIds = e.target.checked ? [...(proposal.assetsIds || []), atout.id] : (proposal.assetsIds || []).filter(id => id !== atout.id); setProposal({ ...proposal, assetsIds: newIds }); }}
						  className="mt-0.5 shrink-0"
						/>
						<span className="line-clamp-2 leading-tight">{atout.nom}</span>
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
                  onJsonChange={(val) => setProposal({...proposal, techData: val, effets_techniques: val})}
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
      {/* L'INCISION : La modale Poupée Russe ! */}
      <QuickForgeModal
        isOpen={quickForge.isOpen}
        type={quickForge.type}
        onClose={() => setQuickForge({ isOpen: false, type: null })}
        onSuccess={handleQuickForgeSuccess}
      />
    </div>
  );
}