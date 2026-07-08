// src/components/cercle/GrimoirePersonnel.js
// 15.17.8

import React, { useState, useMemo } from 'react';
import { BookOpen, BookMarked, Users, Package, Plus, Share2, Lock, Tag, MapPin, Shield, Save, X, Edit, Trash2, AlertTriangle, VenetianMask, Eye, EyeOff, Search } from '../../config/icons';
import { EmptyState } from '../ui/EmptyState';
import { showInAppNotification } from '../../utils/SystemeServices';
import { useGrimoire } from '../../hooks/useGrimoire';
import TabChroniques from './TabChroniques';
import { migrateContactContent, getCategoryStyle, getVisibleRelations, hasActiveFauxSemblant, getFauxSemblantTypeFee, CATEGORIES_SUGGESTIONS } from '../../utils/relationsHelper';

const FAIRY_TYPES = [
  'Ange', 'Bastet', 'Elfe', 'Farfadet', 'Gnome', 'Gobelin', 'Korrigan',
  'Léporide', 'Loup-Garou', 'Ogre', 'Ondine', 'Orc', 'Phénix', 'Succube',
  'Sylve', 'Troll', 'Vampyr',
  'Fée Électricité', 'Fleur de Métal', 'Fouinard', 'Gargouille',
  'Golem', 'Gremelin', 'Protys', 'Smog',
  'Faux-Semblant Enfoui',
];

function parseLocalisation(loc) {
  if (!loc) return { texte: '', rue: '', quartier: '', ville: '', pays: '' };
  if (typeof loc === 'string') return { texte: loc, rue: '', quartier: '', ville: '', pays: '' };
  return { texte: loc.texte || '', rue: loc.rue || '', quartier: loc.quartier || '', ville: loc.ville || '', pays: loc.pays || '' };
}

function formatLocalisation(loc) {
  const p = parseLocalisation(loc);
  return p.texte || [p.ville, p.pays].filter(Boolean).join(', ') || 'Lieu inconnu';
}

export default function GrimoirePersonnel({ characterId, cercleId, playerId, isAdmin = false, userProfile, characterNom = '' }) {
  const [activeTab, setActiveTab] = useState('notes');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingEntry, setEditingEntry] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [contactFilter, setContactFilter] = useState('');
  const [showReality, setShowReality] = useState(false);

  const GRIMOIRE_TABS = ['notes', 'contacts', 'possessions', 'chroniques'];
  const handleTabKeyDown = (e) => {
    const idx = GRIMOIRE_TABS.indexOf(activeTab);
    let next = null;
    if (e.key === 'ArrowRight') { e.preventDefault(); next = GRIMOIRE_TABS[(idx + 1) % GRIMOIRE_TABS.length]; }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); next = GRIMOIRE_TABS[(idx - 1 + GRIMOIRE_TABS.length) % GRIMOIRE_TABS.length]; }
    else if (e.key === 'Home') { e.preventDefault(); next = GRIMOIRE_TABS[0]; }
    else if (e.key === 'End') { e.preventDefault(); next = GRIMOIRE_TABS[GRIMOIRE_TABS.length - 1]; }
    if (next) { setActiveTab(next); setTimeout(() => document.getElementById(`tab-grimoire-${next}`)?.focus(), 0); }
  };

  const isDocte = userProfile?.profile?.is_docte === true || isAdmin;

  const { notes, contacts, possessions, loading, toggleShare, createEntry, updateEntry, deleteEntry } = useGrimoire(characterId, cercleId, playerId, isAdmin);

  const migratedContacts = useMemo(() =>
    contacts.map(c => ({ ...c, content: migrateContactContent(c.content) })),
    [contacts]
  );

  const filteredContacts = useMemo(() => {
    if (!contactFilter) return migratedContacts;
    const f = contactFilter.toLowerCase();
    return migratedContacts.filter(c => {
      const content = c.content || {};
      if ((content.nom || '').toLowerCase().includes(f)) return true;
      if ((content.description || '').toLowerCase().includes(f)) return true;
      const loc = formatLocalisation(content.localisation).toLowerCase();
      if (loc.includes(f)) return true;
      const visible = getVisibleRelations(content, showReality && isDocte);
      if (visible.some(r => (r.categorie || '').toLowerCase().includes(f))) return true;
      return false;
    });
  }, [migratedContacts, contactFilter, showReality, isDocte]);

  const handleOpenModal = (entry = null) => {
    if (entry) {
      setEditingEntry({ id: entry.id, type: entry.type });
      const content = migrateContactContent(entry.content);
      setFormData({ ...content });
    } else {
      setEditingEntry(null);
      if (activeTab === 'notes') {
        setFormData({ titre: '', categorie: 'Lieu', contenu: '' });
      } else if (activeTab === 'contacts') {
        setFormData({
          nom: '', description: '',
          localisation: { texte: '', rue: '', quartier: '', ville: '', pays: '' },
          relations: [{ categorie: 'Neutre', sous_categorie: 'Connaissance', visibilite: 'prive' }],
          faux_semblant: { actif: false, type_fee: '', publie: [], realite: [] },
        });
      } else {
        setFormData({ nom: '', description: '' });
      }
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEntry(null);
    setFormData({});
  };

  const handleAddRelation = () => {
    setFormData(prev => ({
      ...prev,
      relations: [...(prev.relations || []), { categorie: 'Neutre', sous_categorie: '', visibilite: 'prive' }],
    }));
  };

  const handleRemoveRelation = (index) => {
    setFormData(prev => ({
      ...prev,
      relations: (prev.relations || []).filter((_, i) => i !== index),
    }));
  };

  const handleRelationChange = (index, field, value) => {
    setFormData(prev => {
      const relations = [...(prev.relations || [])];
      relations[index] = { ...relations[index], [field]: value };
      return { ...prev, relations };
    });
  };

  const handleSave = async () => {
    const activeType = editingEntry ? editingEntry.type : (activeTab === 'notes' ? 'note' : activeTab === 'contacts' ? 'contact' : 'possession');
    const isNoteMode = activeType === 'note';

    if (isNoteMode && (!formData.titre || !formData.contenu)) {
      showInAppNotification("Une note nécessite au moins un titre et un contenu !", "warning");
      return;
    }
    if (!isNoteMode && !formData.nom) {
      showInAppNotification(activeType === 'contact' ? "Comment s'appelle ce contact ?" : "Comment s'appelle cet objet ?", "warning");
      return;
    }

    setIsSubmitting(true);

    let success;
    if (editingEntry) {
      success = await updateEntry(editingEntry.id, editingEntry.type, formData);
    } else {
      success = await createEntry(activeType, formData);
    }

    setIsSubmitting(false);
    if (success) handleCloseModal();
  };

  const handleDeleteClick = (entry, name) => {
    const isLinkedToSocialItem = entry.content?.source_social_item_id != null;
    setDeleteConfirm({ id: entry.id, type: entry.type, name, isLinkedToSocialItem });
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirm) return;

    setIsSubmitting(true);
    await deleteEntry(deleteConfirm.id, deleteConfirm.type);
    setIsSubmitting(false);
    setDeleteConfirm(null);
  };

  return (
    <div className="bg-[#fdfbf7] rounded-xl shadow-md border-2 border-amber-900/20 overflow-hidden flex flex-col h-full">
      
      {/* 1. L'EN-TÊTE ET LES ONGLETS */}
      <div className="bg-amber-900 p-4 text-amber-50 flex justify-between items-center">
        <h2 className="font-serif font-bold text-xl flex items-center gap-3">
          <BookOpen className="text-amber-300" />
          Mon Grimoire Personnel
        </h2>
        {activeTab !== 'chroniques' && (
          <button
            onClick={() => handleOpenModal()}
            className="bg-amber-700 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-sm"
          >
            <Plus size={18} /> Écrire une pensée
          </button>
        )}
      </div>

      <div role="tablist" aria-label="Sections du Grimoire" className="flex border-b border-amber-200 bg-amber-50" onKeyDown={handleTabKeyDown}>
        <button
          role="tab"
          id="tab-grimoire-notes"
          aria-selected={activeTab === 'notes'}
          aria-controls="panel-grimoire"
          tabIndex={activeTab === 'notes' ? 0 : -1}
          onClick={() => setActiveTab('notes')}
          className={`flex-1 py-3 font-serif font-bold transition-colors ${activeTab === 'notes' ? 'bg-white text-amber-900 border-t-2 border-t-amber-600' : 'text-amber-700 hover:bg-amber-100'}`}
        >
          Notes Narratives
        </button>
        <button
          role="tab"
          id="tab-grimoire-contacts"
          aria-selected={activeTab === 'contacts'}
          aria-controls="panel-grimoire"
          tabIndex={activeTab === 'contacts' ? 0 : -1}
          onClick={() => setActiveTab('contacts')}
          className={`flex-1 py-3 font-serif font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'contacts' ? 'bg-white text-amber-900 border-t-2 border-t-amber-600' : 'text-amber-700 hover:bg-amber-100'}`}
        >
          <Users size={18} /> Visages Rencontrés
        </button>
        <button
          role="tab"
          id="tab-grimoire-possessions"
          aria-selected={activeTab === 'possessions'}
          aria-controls="panel-grimoire"
          tabIndex={activeTab === 'possessions' ? 0 : -1}
          onClick={() => setActiveTab('possessions')}
          className={`flex-1 py-3 font-serif font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'possessions' ? 'bg-white text-amber-900 border-t-2 border-t-amber-600' : 'text-amber-700 hover:bg-amber-100'}`}
        >
          <Package size={18} /> Trésors & Possessions
        </button>
        <button
          role="tab"
          id="tab-grimoire-chroniques"
          aria-selected={activeTab === 'chroniques'}
          aria-controls="panel-grimoire"
          tabIndex={activeTab === 'chroniques' ? 0 : -1}
          onClick={() => setActiveTab('chroniques')}
          className={`flex-1 py-3 font-serif font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'chroniques' ? 'bg-white text-amber-900 border-t-2 border-t-amber-600' : 'text-amber-700 hover:bg-amber-100'}`}
        >
          <BookMarked size={18} /> Chroniques
        </button>
      </div>

		{/* 2. LA ZONE DE CONTENU */}
		<div
          id="panel-grimoire"
          role="tabpanel"
          aria-labelledby={`tab-grimoire-${activeTab}`}
          className="p-6 flex-1 overflow-y-auto relative min-h-[400px]"
        >
			{loading ? (
				// ✨ L'OUBLI RÉPARÉ : L'écran de chargement immersif !
				<EmptyState icon={BookOpen} message="Déchiffrage de l'encre sympathique..." pulse />
			) : (
				<>
					{/* ONGLET 1 : LES NOTES */}
					{activeTab === 'notes' && (
						notes.length === 0 ? (
							<EmptyState icon={BookOpen} message="Vos pages sont encore vierges..." />
						) : (
							<div className="grid gap-4">
								{notes.map((note) => {
									// 🧠 On décode le propriétaire et le contenu JSONB
									const isMine = note.player_id === playerId;
									const data = note.content || {};

									return (
										<div key={note.id} className="p-5 border border-stone-200 rounded-xl bg-white shadow-sm flex flex-col gap-3 relative overflow-hidden hover:shadow-md transition-shadow">

											{/* EN-TÊTE DE LA NOTE */}
											<div className="flex justify-between items-start">
												<div className="pr-6">
													<h4 className="font-serif font-bold text-xl text-amber-900">{data.titre || 'Pensée sans titre'}</h4>
													<div className="text-xs font-bold text-stone-500 mt-1 flex items-center gap-2">
														<span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
															<Tag size={10} className="inline mr-1 mb-0.5" />
															{data.categorie || 'Savoir'}
														</span>
														{data.date_creation && (
															<span className="italic">
																{new Date(data.date_creation).toLocaleDateString('fr-FR')}
															</span>
														)}
													</div>
												</div>
											</div>

											{/* CONTENU (Avec préservation des sauts de ligne) */}
											<p className="text-sm text-stone-700 leading-relaxed font-serif whitespace-pre-wrap bg-amber-50/50 p-4 rounded-lg border border-amber-100/50">
												{data.contenu || "Le texte s'est effacé..."}
											</p>

											{/* 🧠 Boutons d'action (Édition, Suppression, Partage) */}
											{isMine && (
												<div className="mt-2 pt-3 border-t border-stone-100 flex justify-between items-center">
													<div className="flex gap-2">
														<button
															onClick={() => handleOpenModal(note)}
															className="text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm border bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
														>
															<Edit size={14} /> Modifier
														</button>
														<button
															onClick={() => handleDeleteClick(note, data.titre)}
															className="text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm border bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
														>
															<Trash2 size={14} /> Supprimer
														</button>
													</div>
													{cercleId && (
														<button
															onClick={() => toggleShare(note.id, note.is_shared)}
															className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm border ${note.is_shared
																	? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
																	: 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'
																}`}
														>
															{note.is_shared ? <><Share2 size={14} /> Public</> : <><Lock size={14} /> Secret</>}
														</button>
													)}
												</div>
											)}
										</div>
									);
								})}
							</div>
						)
					)}

					{/* ONGLET 2 : LES CONTACTS */}
					{activeTab === 'contacts' && (
						<>
							{/* Barre de recherche et filtres */}
							<div className="flex flex-wrap items-center gap-3 mb-4">
								<div className="relative flex-1 min-w-[200px]">
									<Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
									<input
										type="text" value={contactFilter}
										onChange={e => setContactFilter(e.target.value)}
										placeholder="Filtrer par nom, lieu, catégorie..."
										className="w-full pl-9 pr-3 py-2 border-2 border-stone-200 rounded-xl text-sm outline-none focus:border-blue-400 bg-white"
									/>
								</div>
								{isDocte && migratedContacts.some(c => hasActiveFauxSemblant(c.content)) && (
									<button
										onClick={() => setShowReality(v => !v)}
										className={`text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors border-2 ${showReality
											? 'bg-purple-100 text-purple-800 border-purple-300'
											: 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'
										}`}
									>
										{showReality ? <EyeOff size={14} /> : <Eye size={14} />}
										{showReality ? 'Masquer la réalité' : 'Voir la réalité'}
									</button>
								)}
							</div>

							{filteredContacts.length === 0 ? (
								<EmptyState
								icon={Users}
								message={contactFilter ? 'Aucun contact ne correspond à ce filtre.' : 'Aucune rencontre consignée dans ce Cercle.'}
							/>
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{filteredContacts.map((contact) => {
										const isMine = contact.player_id === playerId;
										const data = migrateContactContent(contact.content || {});
										const visibleRelations = getVisibleRelations(data, showReality && isDocte);
										const hasFs = hasActiveFauxSemblant(data);
										const fsType = getFauxSemblantTypeFee(data);

										return (
											<div key={contact.id} className="p-4 border border-stone-200 rounded-xl bg-white shadow-sm flex flex-col gap-3 relative overflow-hidden hover:shadow-md transition-shadow">
												{/* Indicateur de faux-semblant */}
												{hasFs && (
													<div className="absolute top-2 right-2 text-purple-400" title={`Faux-semblant (${fsType || 'type inconnu'})`}>
														<VenetianMask size={16} />
													</div>
												)}

												<div className="flex justify-between items-start">
													<div className="pr-6">
														<h4 className="font-serif font-bold text-lg text-blue-900">{data.nom || 'Inconnu'}</h4>
														<div className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1 mt-1">
															<MapPin size={12} className="text-blue-500" /> {formatLocalisation(data.localisation)}
														</div>
													</div>
												</div>

												{/* Badges de relation */}
												{visibleRelations.length > 0 && (
													<div className="flex flex-wrap gap-1.5">
														{visibleRelations.map((r, i) => {
															const style = getCategoryStyle(r.categorie);
															return (
																<span key={i} className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider shrink-0 border ${style.bg} ${style.text} ${style.border}`}>
																	{r.categorie || '?'}
																	{r.sous_categorie && <span className="font-normal lowercase ml-0.5 opacity-75">· {r.sous_categorie}</span>}
																</span>
															);
														})}
													</div>
												)}

												<p className="text-sm text-stone-600 italic line-clamp-3 flex-1 bg-stone-50 p-2 rounded border border-stone-100">
													{data.description || "Aucune description."}
												</p>

												{/* Boutons d'action */}
												{isMine && (
													<div className="mt-2 pt-3 border-t border-stone-100 flex justify-between items-center">
														<div className="flex gap-2">
															<button
																onClick={() => handleOpenModal(contact)}
																className="text-xs font-bold px-2 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-sm border bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
																aria-label="Modifier ce contact"
															>
																<Edit size={12} />
															</button>
															<button
																onClick={() => handleDeleteClick(contact, data.nom)}
																className="text-xs font-bold px-2 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-sm border bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
																aria-label="Supprimer ce contact"
															>
																<Trash2 size={12} />
															</button>
														</div>
														{cercleId && (
															<button
																onClick={() => toggleShare(contact.id, contact.is_shared)}
																className={`text-xs font-bold px-2 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-sm border ${contact.is_shared
																		? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
																		: 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'
																	}`}
																aria-label={contact.is_shared ? "Rendre ce contact secret" : "Partager ce contact"}
															>
																{contact.is_shared ? <Share2 size={12} /> : <Lock size={12} />}
															</button>
														)}
													</div>
												)}
											</div>
										);
									})}
								</div>
							)}
						</>
					)}
						{/* ONGLET 4 : CHRONIQUES D'HÉRITAGE */}
						{activeTab === 'chroniques' && (
							<TabChroniques
								characterId={characterId}
								characterNom={characterNom}
								cercleId={cercleId}
								isOwner={!isAdmin}
								isDocte={isDocte}
							/>
						)}

						{/* ONGLET 3 : LES POSSESSIONS */}
						{activeTab === 'possessions' && (
							possessions.length === 0 ? (
								<EmptyState icon={Package} message="Aucune possession consignée." />
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{possessions.map((possession) => {
										const isMine = possession.player_id === playerId;
										const data = possession.content || {};
										return (
											<div key={possession.id} className="p-4 border border-stone-200 rounded-xl bg-white shadow-sm flex flex-col gap-3 relative overflow-hidden hover:shadow-md transition-shadow">
												<h4 className="font-serif font-bold text-lg text-amber-900">{data.nom || 'Objet sans nom'}</h4>
												{data.description && (
													<p className="text-sm text-stone-600 italic flex-1 bg-stone-50 p-2 rounded border border-stone-100">
														{data.description}
													</p>
												)}
												{isMine && (
													<div className="mt-2 pt-3 border-t border-stone-100 flex gap-2">
														<button
															onClick={() => handleOpenModal(possession)}
															className="text-xs font-bold px-2 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-sm border bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
															aria-label="Modifier cette possession"
														>
															<Edit size={12} />
														</button>
														<button
															onClick={() => handleDeleteClick(possession, data.nom)}
															className="text-xs font-bold px-2 py-1.5 rounded-lg flex items-center gap-1 transition-colors shadow-sm border bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
															aria-label="Supprimer cette possession"
														>
															<Trash2 size={12} />
														</button>
													</div>
												)}
											</div>
										);
									})}
								</div>
							)
						)}
				</>
			)}
		</div>

      {/* 3. MODALE IMMERSIVE DE CRÉATION/ÉDITION (DYNAMIQUE) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
          <div className="bg-[#fdfbf7] max-w-lg w-full rounded-2xl shadow-2xl border-4 border-amber-900/20 overflow-hidden transform">

            <div className="bg-amber-900 text-amber-50 p-4 border-b-4 border-amber-700 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                {(editingEntry?.type === 'note' || (!editingEntry && activeTab === 'notes')) ? <BookOpen size={20}/> : (editingEntry?.type === 'possession' || (!editingEntry && activeTab === 'possessions')) ? <Package size={20}/> : <Users size={20}/>}
                {editingEntry
                  ? (editingEntry.type === 'note' ? 'Modifier la note' : editingEntry.type === 'possession' ? 'Modifier la possession' : 'Modifier le contact')
                  : (activeTab === 'notes' ? 'Consigner une pensée' : activeTab === 'possessions' ? 'Archiver une possession' : 'Archiver un contact')
                }
              </h3>
              <button onClick={handleCloseModal} className="hover:text-red-400 transition-colors" aria-label="Fermer la fenêtre"><X size={20}/></button>
            </div>

            <div className="p-6 space-y-4">
              {(editingEntry?.type === 'possession' || (!editingEntry && activeTab === 'possessions')) ? (
                <>
                  <div>
                    <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Nom de l'objet</label>
                    <input type="text" autoFocus value={formData.nom || ''} onChange={e => setFormData({...formData, nom: e.target.value})} className="w-full p-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 outline-none font-bold text-stone-800 bg-white" placeholder="Ex: Revolver à barillet, Grimoire d'alchimie..."/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Description</label>
                    <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full h-28 p-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 outline-none font-serif text-stone-700 resize-none custom-scrollbar bg-white" placeholder="Décrivez cet objet, son origine, ses particularités..."/>
                  </div>
                </>
              ) : (editingEntry?.type === 'note' || (!editingEntry && activeTab === 'notes')) ? (
                <>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Titre de la note</label>
                      <input type="text" autoFocus value={formData.titre || ''} onChange={e => setFormData({...formData, titre: e.target.value})} className="w-full p-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 outline-none font-bold text-stone-800 bg-white" placeholder="Ex: Les souterrains de Paris"/>
                    </div>
                    <div className="w-1/3">
                      <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Catégorie</label>
                      <select value={formData.categorie || 'Lieu'} onChange={e => setFormData({...formData, categorie: e.target.value})} className="w-full p-3 border-2 border-amber-200 rounded-xl outline-none font-bold text-stone-700 bg-amber-50 cursor-pointer">
                        <option value="Lieu">Lieu</option>
                        <option value="Quête">Quête</option>
                        <option value="Rumeur">Rumeur</option>
                        <option value="PNJ">PNJ</option>
                        <option value="Lore">Savoir</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Détails</label>
                    <textarea value={formData.contenu || ''} onChange={e => setFormData({...formData, contenu: e.target.value})} className="w-full h-32 p-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 outline-none font-serif text-stone-700 resize-none custom-scrollbar bg-white" placeholder="Écrivez vos pensées ici..."/>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Nom du Contact</label>
                    <input type="text" autoFocus value={formData.nom || ''} onChange={e => setFormData({...formData, nom: e.target.value})} className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 outline-none font-bold text-stone-800 bg-white" placeholder="Ex: Archibald, chef des Mendiants"/>
                  </div>

                  {/* Localisation structurée */}
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1"><MapPin size={12}/> Localisation</label>
                    <input type="text" value={parseLocalisation(formData.localisation).texte} onChange={e => setFormData({...formData, localisation: { ...parseLocalisation(formData.localisation), texte: e.target.value }})} className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 outline-none text-sm font-bold text-stone-700 bg-white" placeholder="Ex: Rive Gauche, Paris"/>
                    <div className="flex gap-2 mt-2">
                      <input type="text" value={parseLocalisation(formData.localisation).ville} onChange={e => setFormData({...formData, localisation: { ...parseLocalisation(formData.localisation), ville: e.target.value }})} className="flex-1 p-2 border-2 border-stone-200 rounded-lg outline-none text-xs font-bold text-stone-700 bg-white" placeholder="Ville"/>
                      <input type="text" value={parseLocalisation(formData.localisation).pays} onChange={e => setFormData({...formData, localisation: { ...parseLocalisation(formData.localisation), pays: e.target.value }})} className="flex-1 p-2 border-2 border-stone-200 rounded-lg outline-none text-xs font-bold text-stone-700 bg-white" placeholder="Pays"/>
                    </div>
                  </div>

                  {/* Relations multiples */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1"><Shield size={12}/> Relations</label>
                      <button onClick={handleAddRelation} className="text-[10px] font-bold px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors flex items-center gap-1">
                        <Plus size={10} /> Ajouter
                      </button>
                    </div>
                    <div className="space-y-2">
                      {(formData.relations || []).map((rel, i) => (
                        <div key={i} className="flex gap-2 items-start p-2 bg-blue-50/50 rounded-lg border border-blue-100">
                          <div className="flex-1 space-y-1.5">
                            <div className="flex gap-1.5">
                              <input
                                type="text" value={rel.categorie || ''}
                                onChange={e => handleRelationChange(i, 'categorie', e.target.value)}
                                list="categories-suggestions"
                                className="flex-1 p-2 border-2 border-blue-200 rounded-lg outline-none text-xs font-bold text-stone-700 bg-white"
                                placeholder="Allié, Neutre..."
                              />
                              <input
                                type="text" value={rel.sous_categorie || ''}
                                onChange={e => handleRelationChange(i, 'sous_categorie', e.target.value)}
                                className="flex-1 p-2 border-2 border-blue-200 rounded-lg outline-none text-xs font-bold text-stone-700 bg-white"
                                placeholder="Sous-catégorie"
                              />
                            </div>
                            <select
                              value={rel.visibilite || 'prive'}
                              onChange={e => handleRelationChange(i, 'visibilite', e.target.value)}
                              className="w-full p-1.5 border-2 border-stone-200 rounded-lg outline-none text-[10px] font-bold text-stone-600 bg-white cursor-pointer"
                            >
                              <option value="prive">Privé</option>
                              <option value="cercle">Cercle</option>
                              <option value="public">Public</option>
                            </select>
                          </div>
                          <button onClick={() => handleRemoveRelation(i)} className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors mt-0.5" aria-label="Supprimer cette relation">
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <datalist id="categories-suggestions">
                      {CATEGORIES_SUGGESTIONS.map(cat => <option key={cat} value={cat} />)}
                    </datalist>
                  </div>

                  {/* Faux-semblant */}
                  <div className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50/30">
                    <div className="flex items-center justify-between mb-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.faux_semblant?.actif || false}
                          onChange={e => setFormData({
                            ...formData,
                            faux_semblant: {
                              ...(formData.faux_semblant || {}),
                              actif: e.target.checked,
                              type_fee: formData.faux_semblant?.type_fee || '',
                              publie: formData.faux_semblant?.publie || [],
                              realite: formData.faux_semblant?.realite || [],
                            }
                          })}
                          className="w-4 h-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-xs font-bold text-purple-800 uppercase tracking-wider flex items-center gap-1">
                          <VenetianMask size={14} /> Faux-semblant actif
                        </span>
                      </label>
                    </div>

                    {formData.faux_semblant?.actif && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-purple-800 uppercase tracking-wider mb-1">Type de fée</label>
                          <input
                            type="text" value={formData.faux_semblant?.type_fee || ''}
                            onChange={e => setFormData({ ...formData, faux_semblant: { ...formData.faux_semblant, type_fee: e.target.value } })}
                            list="fairy-types"
                            className="w-full p-2 border-2 border-purple-200 rounded-lg outline-none text-xs font-bold text-stone-700 bg-white"
                            placeholder="Songeuse, Sirène..."
                          />
                          <datalist id="fairy-types">
                            {FAIRY_TYPES.map(ft => <option key={ft} value={ft} />)}
                          </datalist>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                            <p className="text-[10px] font-bold text-green-700 uppercase tracking-wider mb-1">Publié (visible)</p>
                            <div className="text-[10px] text-stone-500 italic">
                              Les relations définies plus haut sont celles visibles par les autres.
                            </div>
                          </div>
                          <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                            <p className="text-[10px] font-bold text-red-700 uppercase tracking-wider mb-1">Réalité (caché)</p>
                            <div className="text-[10px] text-stone-500 italic">
                              Seul vous et le Docte voyez la réalité.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Description</label>
                    <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full h-24 p-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 outline-none font-serif text-stone-700 resize-none custom-scrollbar bg-white" placeholder="Où l'avez-vous rencontré ? À quoi sert-il ?"/>
                  </div>
                </>
              )}

              <div className="mt-6 flex gap-3 pt-4 border-t border-stone-200">
                <button onClick={handleCloseModal} className="flex-1 py-3 text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-xl font-bold transition-colors">Annuler</button>
                <button onClick={handleSave} disabled={isSubmitting} className="flex-1 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-bold transition-colors shadow-md disabled:opacity-50 flex items-center justify-center gap-2">
                  <Save size={18} /> {isSubmitting ? 'Gravure...' : (editingEntry ? 'Enregistrer' : 'Graver la page')}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. MODALE DE CONFIRMATION DE SUPPRESSION */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-2xl shadow-2xl border-4 border-red-200 overflow-hidden transform">

            <div className="bg-red-700 text-red-50 p-4 border-b-4 border-red-800 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <AlertTriangle size={20} /> Confirmer la suppression
              </h3>
              <button onClick={() => setDeleteConfirm(null)} className="hover:text-red-200 transition-colors" aria-label="Annuler la suppression"><X size={20}/></button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-stone-700 font-serif text-center">
                Êtes-vous certain de vouloir arracher cette page du Grimoire ?
              </p>
              <p className="text-center font-bold text-red-800 bg-red-50 p-3 rounded-lg border border-red-200">
                "{deleteConfirm.name}"
              </p>

              {/* ⚠️ Avertissement si lié à un achat Vie Sociale */}
              {deleteConfirm.isLinkedToSocialItem && (
                <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-3 text-center">
                  <p className="text-amber-800 font-bold text-sm flex items-center justify-center gap-2">
                    <AlertTriangle size={16} /> Contact lié à un achat
                  </p>
                  <p className="text-amber-700 text-xs mt-1">
                    Ce contact a été créé automatiquement depuis la Vie Sociale.
                    Il sera recréé si vous sauvegardez à nouveau le personnage avec cet achat.
                  </p>
                </div>
              )}

              <p className="text-xs text-stone-500 text-center italic">
                Cette action est irréversible.
              </p>

              <div className="mt-6 flex gap-3 pt-4 border-t border-stone-200">
                <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-3 text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-xl font-bold transition-colors">
                  Annuler
                </button>
                <button onClick={handleConfirmDelete} disabled={isSubmitting} className="flex-1 py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl font-bold transition-colors shadow-md disabled:opacity-50 flex items-center justify-center gap-2">
                  <Trash2 size={18} /> {isSubmitting ? 'Suppression...' : 'Supprimer'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
