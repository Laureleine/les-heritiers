// src/components/cercle/GrimoirePersonnel.js
// 14.6.0

import React, { useState } from 'react';
import { BookOpen, Users, Plus, Share2, Lock, Tag, MapPin, Shield, Save, X } from 'lucide-react';
import { showInAppNotification } from '../../utils/SystemeServices';
import { useGrimoire } from '../../hooks/useGrimoire';

// ✨ FIX : On réceptionne le characterId
export default function GrimoirePersonnel({ characterId, cercleId, playerId }) {
  const [activeTab, setActiveTab] = useState('notes');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  // ✨ On passe la clé au Cerveau
  const { notes, contacts, loading, toggleShare, createEntry } = useGrimoire(characterId, cercleId, playerId);

  const handleOpenModal = () => {
    // 🧠 Logique de la PO : On pré-remplit les clés du JSONB selon l'onglet actif
    if (activeTab === 'notes') {
      setFormData({ titre: '', categorie: 'Lieu', contenu: '' });
    } else {
      setFormData({ nom: '', localisation: '', statut_relation: 'Neutre', description: '' });
    }
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    // 🛡️ Bouclier anti-vide
    if (activeTab === 'notes' && (!formData.titre || !formData.contenu)) {
      showInAppNotification("Une note nécessite au moins un titre et un contenu !", "warning");
      return;
    }
    if (activeTab === 'contacts' && !formData.nom) {
      showInAppNotification("Comment s'appelle ce contact ?", "warning");
      return;
    }

    setIsSubmitting(true);
    
    // ✨ FIX : Le Traducteur Singulier/Pluriel !
    // On convertit le nom de notre onglet en valeur stricte pour la base de données.
    const dbType = activeTab === 'notes' ? 'note' : 'contact';
    
    const success = await createEntry(dbType, formData);
    setIsSubmitting(false);

    if (success) setIsModalOpen(false);
  };

  return (
    <div className="bg-[#fdfbf7] rounded-xl shadow-md border-2 border-amber-900/20 overflow-hidden flex flex-col h-full animate-fade-in">
      
      {/* 1. L'EN-TÊTE ET LES ONGLETS */}
      <div className="bg-amber-900 p-4 text-amber-50 flex justify-between items-center">
        <h2 className="font-serif font-bold text-xl flex items-center gap-3">
          <BookOpen className="text-amber-300" />
          Mon Grimoire Personnel
        </h2>
        <button 
          onClick={handleOpenModal}
          className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-sm"
        >
          <Plus size={18} /> Écrire une pensée
        </button>
      </div>

      <div className="flex border-b border-amber-200 bg-amber-50">
        <button 
          onClick={() => setActiveTab('notes')}
          className={`flex-1 py-3 font-serif font-bold transition-colors ${activeTab === 'notes' ? 'bg-white text-amber-900 border-t-2 border-t-amber-600' : 'text-amber-700 hover:bg-amber-100'}`}
        >
          Notes Narratives
        </button>
        <button 
          onClick={() => setActiveTab('contacts')}
          className={`flex-1 py-3 font-serif font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'contacts' ? 'bg-white text-amber-900 border-t-2 border-t-amber-600' : 'text-amber-700 hover:bg-amber-100'}`}
        >
          <Users size={18} /> Visages Rencontrés
        </button>
      </div>

		{/* 2. LA ZONE DE CONTENU */}
		<div className="p-6 flex-1 overflow-y-auto relative min-h-[400px]">
			{loading ? (
				// ✨ L'OUBLI RÉPARÉ : L'écran de chargement immersif !
				<div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4 animate-pulse">
					<BookOpen size={48} className="opacity-20" />
					<p className="font-serif italic text-lg">Déchiffrage de l'encre sympathique...</p>
				</div>
			) : (
				<>
					{/* ONGLET 1 : LES NOTES */}
					{activeTab === 'notes' && (
						notes.length === 0 ? (
							<div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4">
								<BookOpen size={48} className="opacity-20" />
								<p className="font-serif italic text-lg">Vos pages sont encore vierges...</p>
							</div>
						) : (
							<div className="grid gap-4">
								{notes.map((note) => {
									// 🧠 On décode le propriétaire et le contenu JSONB
									const isMine = note.player_id === playerId;
									const data = note.content || {};

									return (
										<div key={note.id} className="p-5 border border-stone-200 rounded-xl bg-white shadow-sm flex flex-col gap-3 relative overflow-hidden hover:shadow-md transition-shadow">
											{/* 🛡️ Badge de provenance (Si la note appartient à un camarade) */}
											{!isMine && (
												<div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm">
													<Share2 size={10} /> Partagé par le Cercle
												</div>
											)}

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

											{/* 🧠 Bouton de partage conditionnel (Hybride Solo/Cercle) */}
											{isMine && cercleId && (
												<div className="mt-2 pt-3 border-t border-stone-100 flex justify-end">
													<button
														onClick={() => toggleShare(note.id, note.is_shared)}
														className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm border ${note.is_shared
																? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
																: 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'
															}`}
													>
														{note.is_shared ? <><Share2 size={14} /> Rendu public au Cercle</> : <><Lock size={14} /> Gardé secret</>}
													</button>
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
						contacts.length === 0 ? (
							<div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4">
								<Users size={48} className="opacity-20" />
								<p className="font-serif italic text-lg">Aucune rencontre consignée dans ce Cercle.</p>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{contacts.map((contact) => {
									// 🧠 On détermine si le contact appartient au joueur ou à un camarade
									const isMine = contact.player_id === playerId;
									const data = contact.content || {};

									return (
										<div key={contact.id} className="p-4 border border-stone-200 rounded-xl bg-white shadow-sm flex flex-col gap-3 relative overflow-hidden hover:shadow-md transition-shadow">
											{/* 🛡️ Badge de provenance (Si ça vient d'un autre joueur) */}
											{!isMine && (
												<div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm">
													<Share2 size={10} /> Partagé par le Cercle
												</div>
											)}

											<div className="flex justify-between items-start">
												<div className="pr-6">
													<h4 className="font-serif font-bold text-lg text-blue-900">{data.nom || 'Inconnu'}</h4>
													<div className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1 mt-1">
														<MapPin size={12} className="text-blue-500" /> {data.localisation || 'Lieu inconnu'}
													</div>
												</div>
												{/* Badge de Statut (Couleurs dynamiques) */}
												<span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider shrink-0 ${data.statut_relation === 'Allié' ? 'bg-green-100 text-green-800 border border-green-200' :
														data.statut_relation === 'Hostile' ? 'bg-red-100 text-red-800 border border-red-200' :
															'bg-stone-100 text-stone-600 border border-stone-200'
													}`}>
													{data.statut_relation || 'Neutre'}
												</span>
											</div>

											<p className="text-sm text-stone-600 italic line-clamp-3 flex-1 bg-stone-50 p-2 rounded border border-stone-100">
												{data.description || "Aucune description."}
											</p>

											{/* 🧠 Bouton de partage (Affiché UNIQUEMENT si le joueur est le propriétaire) */}
											{isMine && cercleId && (
												<div className="mt-2 pt-3 border-t border-stone-100 flex justify-end">
													<button
														onClick={() => toggleShare(contact.id, contact.is_shared)}
														className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm border ${contact.is_shared
																? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
																: 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'
															}`}
													>
														{contact.is_shared ? <><Share2 size={14} /> Rendu public au Cercle</> : <><Lock size={14} /> Gardé secret</>}
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
			
      {/* 3. MODALE IMMERSIVE DE CRÉATION (DYNAMIQUE) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-lg w-full rounded-2xl shadow-2xl border-4 border-amber-900/20 overflow-hidden transform animate-fade-in-up">
            
            <div className="bg-amber-900 text-amber-50 p-4 border-b-4 border-amber-700 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                {activeTab === 'notes' ? <BookOpen size={20}/> : <Users size={20}/>}
                {activeTab === 'notes' ? 'Consigner une pensée' : 'Archiver un contact'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="hover:text-red-400 transition-colors"><X size={20}/></button>
            </div>

            <div className="p-6 space-y-4">
              {activeTab === 'notes' ? (
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
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1"><MapPin size={12}/> Localisation</label>
                      <input type="text" value={formData.localisation || ''} onChange={e => setFormData({...formData, localisation: e.target.value})} className="w-full p-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 outline-none text-sm font-bold text-stone-700 bg-white" placeholder="Ex: Rive Gauche"/>
                    </div>
                    <div className="w-1/3">
                      <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1"><Shield size={12}/> Statut</label>
                      <select value={formData.statut_relation || 'Neutre'} onChange={e => setFormData({...formData, statut_relation: e.target.value})} className="w-full p-3 border-2 border-blue-200 rounded-xl outline-none font-bold text-stone-700 bg-blue-50 cursor-pointer">
                        <option value="Allié">Allié</option>
                        <option value="Neutre">Neutre</option>
                        <option value="Hostile">Hostile</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">Description</label>
                    <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full h-24 p-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 outline-none font-serif text-stone-700 resize-none custom-scrollbar bg-white" placeholder="Où l'avez-vous rencontré ? À quoi sert-il ?"/>
                  </div>
                </>
              )}

              <div className="mt-6 flex gap-3 pt-4 border-t border-stone-200">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-3 text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-xl font-bold transition-colors">Annuler</button>
                <button onClick={handleSave} disabled={isSubmitting} className="flex-1 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-bold transition-colors shadow-md disabled:opacity-50 flex items-center justify-center gap-2">
                  <Save size={18} /> {isSubmitting ? 'Gravure...' : 'Graver la page'}
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}
