// src/components/Encyclopedia.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { Book, Search, X, Shield, Plus, FileText } from 'lucide-react';
import EncyclopediaModal from './EncyclopediaModal'; 
import EncyclopediaViewModal from './EncyclopediaViewModal'; // ✨ NOUVEAU
import EncyclopediaCard from './EncyclopediaCard';
import { invalidateAllCaches } from '../utils/supabaseGameData';
import ConfirmModal from './ConfirmModal';
import { logger, showInAppNotification } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';

export default function Encyclopedia({ userProfile, onBack, onOpenValidations, onOpenMesPropositions }) {
  // Charger les listes de référence une seule fois au démarrage
  const { gameData } = useCharacter(); // ✨ CONNEXION AU NUAGE
  const { encyclopediaRefs, competencesFutiles } = gameData;

  const [activeTab, setActiveTab] = useState('fairy_types');
  const [data, setData] = useState([]);
  const [selectedFairyFilter, setSelectedFairyFilter] = useState(''); 
  const [viewingItem, setViewingItem] = useState(null); // ✨ LE NOUVEAU CERVEAU DE LECTURE

  useEffect(() => {
    fetchData();
    fetchPendingLocks(); 
    setSelectedFairyFilter(''); 
  }, [activeTab]);
  
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [proposal, setProposal] = useState({});
  const [justification, setJustification] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [pendingLocks, setPendingLocks] = useState([]);
  const [confirmState, setConfirmState] = useState({ isOpen: false, action: null, message: '' });

  // Chargement des données selon l'onglet
  useEffect(() => {
    fetchData();
    fetchPendingLocks(); // 👈 On charge aussi les verrous
  }, [activeTab]);

  // 👈 NOUVELLE FONCTION : Va chercher les IDs des éléments en cours de modification
  const fetchPendingLocks = async () => {
    const { data } = await supabase.from('data_change_requests').select('record_id').eq('status', 'pending');
    if (data) {
      setPendingLocks(data.map(req => req.record_id).filter(Boolean));
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      let query;
	if (activeTab === 'fairy_types') {
	  query = supabase.from('fairy_types').select(`
		*,
		fairy_type_capacites(capacite_type, capacite:fairy_capacites(id, nom)),
		fairy_type_powers(power:fairy_powers(id, nom)),
		fairy_type_assets(asset:fairy_assets(id, nom)),
		fairy_competences_futiles_predilection(is_choice, competence_futile_id, choice_options)
	  `);
	} else if (activeTab === 'fairy_capacites') {
        query = supabase.from('fairy_capacites').select('*, fairy_type_capacites(fairy_types(id, name))'); // 👈 Ajout de id
      } else if (activeTab === 'fairy_powers') {
        query = supabase.from('fairy_powers').select('*, fairy_type_powers(fairy_types(id, name))'); // 👈 Ajout de id
      } else if (activeTab === 'fairy_assets') {
        query = supabase.from('fairy_assets').select('*, fairy_type_assets(fairy_types(id, name))'); // 👈 Ajout de id
      } else {
        query = supabase.from(activeTab).select('*');
      }

      // Tris spécifiques
      if (activeTab === 'fairy_types') query = query.order('name');
      else if (['competences', 'profils', 'fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab)) query = query.order('nom');

      const { data: results, error } = await query;
      if (error) throw error;

      logger.info(`📚 Encyclopédie [${activeTab}] chargée :`, results?.length, "éléments");
      setData(results || []);
    } catch (error) {
      logger.error("❌ Erreur chargement Encyclopédie:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🧠 LE MOTEUR DE FILTRAGE COMBINÉ (Texte + Boutons)
  const filteredData = data.filter(item => {
    const matchesSearch = (item.name || item.nom || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (item.description || item.desc || '').toLowerCase().includes(searchTerm.toLowerCase());

    // ✨ Le nouveau filtre par Fée avec prise en charge des Éléments Génériques
    let matchesFairy = true;
    if (selectedFairyFilter !== '') {
      if (selectedFairyFilter === '__UNLINKED__') {
        // Le joueur cherche les éléments qui n'appartiennent à AUCUNE fée (Génériques/Universels)
        if (activeTab === 'fairy_capacites') matchesFairy = !item.fairy_type_capacites || item.fairy_type_capacites.length === 0;
        else if (activeTab === 'fairy_powers') matchesFairy = !item.fairy_type_powers || item.fairy_type_powers.length === 0;
        else if (activeTab === 'fairy_assets') matchesFairy = !item.fairy_type_assets || item.fairy_type_assets.length === 0;
      } else {
        // Recherche classique d'une fée spécifique
        if (activeTab === 'fairy_capacites') matchesFairy = item.fairy_type_capacites?.some(link => link.fairy_types?.name === selectedFairyFilter);
        else if (activeTab === 'fairy_powers') matchesFairy = item.fairy_type_powers?.some(link => link.fairy_types?.name === selectedFairyFilter);
        else if (activeTab === 'fairy_assets') matchesFairy = item.fairy_type_assets?.some(link => link.fairy_types?.name === selectedFairyFilter);
      }
    }
    return matchesSearch && matchesFairy;
  });
  
  // ----------------------------------------------------------------------
  // 🛡️ LE MARTEAU DES GARDIENS (Préparation de la modale)
  // ----------------------------------------------------------------------
  const handleToggleSealClick = (item, tabName) => {
    const action = item.is_sealed ? 'briser le sceau de' : 'sceller définitivement';
    setConfirmState({
      isOpen: true,
      title: item.is_sealed ? "Briser le Sceau" : "Apposer le Sceau", // ✨ NOUVEAU
      message: `En tant que Gardien, voulez-vous vraiment ${action} "${item.name || item.nom}" ?`,
      action: () => executeToggleSeal(item, tabName),
      confirmText: "Que ma volonté soit faite" // ✨ NOUVEAU
    });
  };

  // ----------------------------------------------------------------------
  // ✨ LA DESTRUCTION ABSOLUE (Privilège Admin)
  // ----------------------------------------------------------------------
  const handleDeleteClick = (item, tabName) => {
    setConfirmState({
      isOpen: true,
      title: "Destruction d'Archive",
      message: `Gardien, êtes-vous absolument certain de vouloir éradiquer "${item.name || item.nom}" ? Cette action pulvérisera l'élément et rompra instantanément tous les liens avec les Fées associées. C'est irréversible.`,
      action: () => executeDelete(item, tabName),
      confirmText: "Oui, éradiquer définitivement"
    });
  };

  const executeDelete = async (item, tabName) => {
    setConfirmState({ isOpen: false, action: null, message: '', title: '', confirmText: '' });
    setLoading(true);
    try {
      // 1. Purge chirurgicale des relations (On évite l'Erreur 23503)
      if (['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(tabName)) {
        const relationTable = tabName === 'fairy_capacites' ? 'fairy_type_capacites' :
                              tabName === 'fairy_powers' ? 'fairy_type_powers' : 'fairy_type_assets';
        const idColumn = tabName === 'fairy_capacites' ? 'capacite_id' :
                         tabName === 'fairy_powers' ? 'power_id' : 'asset_id';
        await supabase.from(relationTable).delete().eq(idColumn, item.id);
      } else if (tabName === 'fairy_types') {
        // En cas de suppression d'une fée complète, on purge toutes ses tables de liaison !
        await Promise.all([
          supabase.from('fairy_type_capacites').delete().eq('fairy_type_id', item.id),
          supabase.from('fairy_type_powers').delete().eq('fairy_type_id', item.id),
          supabase.from('fairy_type_assets').delete().eq('fairy_type_id', item.id),
          supabase.from('fairy_competences_predilection').delete().eq('fairy_type_id', item.id),
          supabase.from('fairy_competences_futiles_predilection').delete().eq('fairy_type_id', item.id)
        ]);
      }

      // 2. Destruction de l'entité mère avec renvoi obligatoire des données (.select)
      const { data, error } = await supabase.from(tabName).delete().eq('id', item.id).select();
      
      if (error) throw error;

      // 🛡️ LE DÉTECTEUR DE FAUX SUCCÈS (RLS)
      if (!data || data.length === 0) {
        throw new Error("Action bloquée par la base de données (RLS). Vous n'avez pas les droits de destruction (DELETE) sur cette table !");
      }

      showInAppNotification("L'archive a été effacée de la trame temporelle.", "success");
      invalidateAllCaches(); // Force le rafraîchissement global du Nuage
      fetchData(); // Recharge la vue actuelle
    } catch (err) {
      logger.error("Erreur de suppression:", err);
      showInAppNotification("La destruction a échoué : " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };
  
  // ----------------------------------------------------------------------
  // ✨ L'EXÉCUTION (Si le Gardien confirme)
  // ----------------------------------------------------------------------
  const executeToggleSeal = async (item, tabName) => {
    setConfirmState({ isOpen: false }); // On ferme la modale

    try {
      const { error } = await supabase.rpc('toggle_item_seal', {
        p_table_name: tabName,
        p_record_id: item.id,
        p_new_status: !item.is_sealed
      });

      if (error) throw error;

      // Adieu le vilain alert() ! Bonjour la jolie notification glissante !
      showInAppNotification(`✨ Le savoir a été ${item.is_sealed ? 'libéré' : 'cristallisé'} avec succès !`, 'success');
      
      invalidateAllCaches();
      fetchData(); 
      
    } catch (err) {
      console.error("Erreur lors du scellage :", err);
      showInAppNotification("Une interférence magique a empêché le scellage : " + err.message, "error");
    }
  };
  
  // 🌟 Ouvrir le modal en mode CRÉATION 
  const handleCreate = () => {
    setIsCreating(true);
    setEditingItem({ id: null, name: '', description: '' });

    if (activeTab === 'fairy_types') {
      setProposal({
        name: '',
        description: '',
        era: 'traditionnelle',
        taille_categorie: 'Moyenne',
        is_secret: false, // ✨ FIX : Initialisation pour une nouvelle fée
        traits: '',
        avantages: '',
        desavantages: '',
        caracteristiques: {
          agilite: {min:1, max:6}, constitution: {min:1, max:6}, force: {min:1, max:6}, precision: {min:1, max:6},
          esprit: {min:1, max:6}, perception: {min:1, max:6}, prestance: {min:1, max:6}, sangFroid: {min:1, max:6}
        },
        capaciteFixe1: '',
        capaciteFixe2: '',
        capacitesChoixIds: [],
        pouvoirsIds: [],
        assetsIds: [],
        techData: JSON.stringify({ predilections: [], futiles: [] }, null, 2)
      });
    } else {
      // 🔮 Structure par défaut pour les autres éléments (Pouvoirs, Capacités, Atouts)
      setProposal({
        name: '', 
        description: '',
        type_pouvoir: activeTab === 'fairy_powers' ? 'masque' : null,
        bonusCaracs: {}, 
        bonusComps: {}, 
        bonusSpecs: [],
        fairyIds: [] // 👈 Relation inversée pour attacher l'élément aux fées
      });
    }
    
    setJustification('Nouvelle création');
  };

  // 📝 Gestion de l'édition d'un élément existant
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setIsCreating(false);

    if (activeTab === 'fairy_types') {
      
      const fairyCloudData = gameData.fairyData?.[item.name || item.nom];

      // 🛡️ SÉPARATION DES PRÉDILECTIONS ET DES SPÉCIALITÉS PURES
      const vraiesPredilections = (fairyCloudData?.competencesPredilection || []).filter(p => !p.isOnlySpecialty);
      const specialitesPures = (fairyCloudData?.competencesPredilection || [])
        .filter(p => p.isOnlySpecialty)
        .map(p => ({ competence: p.nom, nom: p.specialite })); // Format attendu par la brique dorée

      const futilesFormatees = (fairyCloudData?.competencesFutilesPredilection || []).map(f => {
        if (typeof f === 'string') return { isChoix: false, nom: f }; 
        return { isChoix: true, options: f.options || [] };
      });

      setProposal({
        name: item.name || item.nom || '', 
        description: item.description || item.desc || '',
        taille: item.taille || item.taille_categorie || 'Moyenne',
        era: item.era || 'traditionnelle',
        is_secret: item.is_secret || false, // ✨ FIX : Lecture depuis la base
        allowedGenders: item.allowed_genders || item.allowedGenders || ['Homme', 'Femme'],
        traits: item.traits ? (Array.isArray(item.traits) ? item.traits.join(', ') : item.traits) : '',
        avantages: item.avantages ? (Array.isArray(item.avantages) ? item.avantages.join('\n') : item.avantages) : '',
        desavantages: item.desavantages ? (Array.isArray(item.desavantages) ? item.desavantages.join('\n') : item.desavantages) : '',
        
        // ✨ CORRECTION : Le bon nom de variable, et on lit directement les colonnes SQL exactes !
        caracteristiques: {
          agilite: { min: item.agilite_min || 1, max: item.agilite_max || 6 },
          constitution: { min: item.constitution_min || 1, max: item.constitution_max || 6 },
          force: { min: item.force_min || 1, max: item.force_max || 6 },
          precision: { min: item.precision_min || 1, max: item.precision_max || 6 },
          esprit: { min: item.esprit_min || 1, max: item.esprit_max || 6 },
          perception: { min: item.perception_min || 1, max: item.perception_max || 6 },
          prestance: { min: item.prestance_min || 1, max: item.prestance_max || 6 },
          sangFroid: { min: item.sang_froid_min || 1, max: item.sang_froid_max || 6 }
        },
        
        capaciteFixe1: item.fairy_type_capacites?.find(l => l.capacite_type === 'fixe1')?.capacite?.id || '',
        capaciteFixe2: item.fairy_type_capacites?.find(l => l.capacite_type === 'fixe2')?.capacite?.id || '',
        capacitesChoixIds: item.fairy_type_capacites?.filter(l => l.capacite_type === 'choix').map(l => l.capacite?.id).filter(Boolean) || [],
        pouvoirsIds: item.fairy_type_powers ? item.fairy_type_powers.map(link => link.power?.id).filter(Boolean) : [],
        assetsIds: item.fairy_type_assets ? item.fairy_type_assets.map(link => link.asset?.id).filter(Boolean) : [],
        
        // ✨ ON INJECTE LES BRIQUES DORÉES ET L'ADN BRUT
        techData: JSON.stringify({
          ...(item.effets_techniques || {}), // 👈 FIX : L'ADN DE BASE (Fortune, etc) EST LÀ !
          predilections: vraiesPredilections,
          specialites: specialitesPures,
          futiles: futilesFormatees
        }, null, 2)
      });
      } else {
        // Extraire les fées déjà liées pour les Capacités, Pouvoirs et Atouts
        let existingFairyIds = [];
        if (activeTab === 'fairy_capacites') existingFairyIds = item.fairy_type_capacites?.map(link => link.fairy_types?.id).filter(Boolean) || [];
        if (activeTab === 'fairy_powers') existingFairyIds = item.fairy_type_powers?.map(link => link.fairy_types?.id).filter(Boolean) || [];
        if (activeTab === 'fairy_assets') existingFairyIds = item.fairy_type_assets?.map(link => link.fairy_types?.id).filter(Boolean) || [];

        setProposal({
          name: item.name || item.nom || '',
          description: item.description || item.desc || '',
          type_pouvoir: item.type_pouvoir || 'masque',
          // 👇 NOUVEAU : Les champs spécifiques aux Atouts
          effets: item.effets || '',
          effets_techniques: item.effets_techniques ? JSON.stringify(item.effets_techniques, null, 2) : '',
          // ✨ FIX 1 : On initialise le tuyau de communication du BonusBuilder !
          techData: item.effets_techniques ? JSON.stringify(item.effets_techniques, null, 2) : '{}',
          fairyIds: existingFairyIds
        });
      }
    setJustification('Mise à jour suite à...');
  };
  
  // --- RENDU DES CARTES ---
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-800 font-sans pb-20">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 p-6 bg-white border-b border-gray-200">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-3">
          <Book className="text-amber-600" size={28} />
          Encyclopédie
        </h2>
        <div className="flex gap-3">
            {(userProfile?.profile?.role === 'gardien' || userProfile?.profile?.role === 'super_admin') && (
              <button
                onClick={onOpenValidations}
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200 font-bold rounded-xl transition-colors border border-purple-200"
              >
                <Shield size={18} />
                Conseil des Gardiens
              </button>
            )}

            {/* ✨ NOUVEAU : LE BOUTON SUIVI UTILISATEUR */}
            <button
              onClick={onOpenMesPropositions}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 font-bold rounded-xl transition-colors border border-blue-200"
            >
              <FileText size={18} />
              <span className="hidden md:inline">Mes Propositions</span>
            </button>

          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-serif"
          >
            <X size={18} /> Fermer
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* NAVIGATION TABS */}
        <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
          {[
            { id: 'fairy_types', label: 'Types de Fées' },
            { id: 'fairy_capacites', label: 'Capacités' },
            { id: 'fairy_powers', label: 'Pouvoirs' },
            { id: 'fairy_assets', label: 'Atouts' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearchTerm(''); }}
              className={`pb-3 font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? 'text-amber-900 border-amber-600'
                  : 'text-gray-400 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENU PRINCIPAL : Barre de Recherche + Bouton Créer */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={`Rechercher dans ${activeTab.replace('_', ' ')}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none bg-white shadow-sm"
            />
          </div>

            {/* Bouton CRÉER (Autorisé pour TOUT maintenant) */}
            {['fairy_types', 'fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab) && (
              <button
                onClick={handleCreate}
                className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-sm flex items-center gap-2 font-bold transition-all shrink-0"
              >
                <Plus size={20} /> <span className="hidden md:inline">Créer</span>
              </button>
            )}
          </div> 

          {/* ✨ NOUVEAU : LE NUAGE D'ÉTIQUETTES ✨ */}
          {['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab) && (
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
              <button
              onClick={() => setSelectedFairyFilter('')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all border shadow-sm ${
                selectedFairyFilter === '' 
                  ? 'bg-amber-600 text-white border-amber-700' 
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
              }`}
            >
              Toutes les fées
            </button>

			  {/* 👈 LE BOUTON GÉNÉRIQUE EST ICI */}
			  <button
				onClick={() => setSelectedFairyFilter('__UNLINKED__')}
				className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all border shadow-sm ${
				  selectedFairyFilter === '__UNLINKED__'
					? 'bg-purple-600 text-white border-purple-700'
					: 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
				}`}
			  >
				Aucune fée (Non lié)
			  </button>
            
            {/* On boucle sur toutes les fées de la base de données */}
            {gameData.encyclopediaRefs?.fairies?.map(fairy => (
              <button
                key={fairy.id}
                onClick={() => setSelectedFairyFilter(fairy.name)}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all border shadow-sm ${
                  selectedFairyFilter === fairy.name 
                    ? 'bg-amber-600 text-white border-amber-700' 
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                }`}
              >
                {fairy.name}
              </button>
            ))}
          </div>
        )}

        {/* Grille de résultats */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden animate-pulse flex flex-col h-[180px]">
                {/* En-tête et Icône */}
                <div className="p-5 flex justify-between items-start border-b border-stone-100">
                  <div className="flex-1 pr-4">
                    <div className="h-6 w-3/4 bg-stone-200 rounded-md mb-3"></div>
                    <div className="h-4 w-1/2 bg-stone-100 rounded-md"></div>
                  </div>
                  <div className="h-10 w-10 bg-stone-200 rounded-xl shrink-0"></div>
                </div>
                {/* Description fantôme */}
                <div className="p-5 space-y-3 flex-1">
                  <div className="h-3 w-full bg-stone-100 rounded-md"></div>
                  <div className="h-3 w-5/6 bg-stone-100 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(item => (
              <EncyclopediaCard
                key={item.id}
                item={item}
                activeTab={activeTab}
                onOpenEdit={handleOpenEdit}
				onView={setViewingItem} 
                isLocked={pendingLocks.includes(item.id)}
                onToggleSeal={handleToggleSealClick}
				onDeleteClick={handleDeleteClick}
                userProfile={userProfile} 
              />
            ))}
            {filteredData.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500 italic">
                Aucune donnée trouvée pour cette recherche.
              </div>
            )}
          </div>
        )}
      </div>

      {/* MODAL DE PROPOSITION (Composant séparé) */}
      {editingItem && (
        <EncyclopediaModal
          activeTab={activeTab}
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          isCreating={isCreating}
          proposal={proposal}
          setProposal={setProposal}
          justification={justification}
          setJustification={setJustification}
          userProfile={userProfile}
          allCapacites={encyclopediaRefs.capacites}
          allPouvoirs={encyclopediaRefs.pouvoirs}
          allAtouts={encyclopediaRefs.atouts}
          allCompFutiles={competencesFutiles}
          allFairyTypes={encyclopediaRefs.fairies} 
          onSuccess={() => {          // 👈 NOUVEAU
          setEditingItem(null);
          fetchPendingLocks();      // Rafraîchit les cadenas instantanément !
          }}
        />
      )}

      {/* ✨ NOUVELLE MODALE : LECTURE PURE */}
      {viewingItem && (
        <EncyclopediaViewModal
          item={viewingItem}
          activeTab={activeTab}
          onClose={() => setViewingItem(null)}
        />
      )}
	  
	  {/* LA MODALE DE CONFIRMATION DES GARDIENS */}
      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title || "Apposer le Sceau"}
        message={confirmState.message}
        onConfirm={confirmState.action}
        onCancel={() => setConfirmState({ isOpen: false, action: null, message: '', title: '', confirmText: '' })}
        confirmText={confirmState.confirmText || "Que ma volonté soit faite"}
        cancelText="Annuler"
      />
    </div>
  );
}
