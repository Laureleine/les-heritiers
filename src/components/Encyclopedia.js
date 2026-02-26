// src/components/Encyclopedia.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { logger } from '../utils/logger'; 
import { Book, Search, X, Shield, Sparkles, Plus } from 'lucide-react';
import EncyclopediaModal from './EncyclopediaModal'; 
import EncyclopediaCard from './EncyclopediaCard';

export default function Encyclopedia({ userProfile, onBack, onOpenValidations }) {
  const [activeTab, setActiveTab] = useState('fairy_types'); // 'fairy_types', 'fairy_capacites', etc.
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // État pour la modification
  const [editingItem, setEditingItem] = useState(null); 
  const [proposal, setProposal] = useState({}); 
  const [justification, setJustification] = useState(''); 
  const [isCreating, setIsCreating] = useState(false); 

  const [allCapacites, setAllCapacites] = useState([]);
  const [allPouvoirs, setAllPouvoirs] = useState([]);
  const [allCompFutiles, setAllCompFutiles] = useState([]);
  const [allAtouts, setAllAtouts] = useState([]); 
  const [allFairyTypes, setAllFairyTypes] = useState([]); // 👈 Liste des Fées pour la relation inversée

  // Charger les listes de référence une seule fois au démarrage
  useEffect(() => {
    const fetchReferences = async () => {
      const [{ data: caps }, { data: pows }, { data: futiles }, { data: atouts }, { data: fairies }] = await Promise.all([
        supabase.from('fairy_capacites').select('id, nom').order('nom'),
        supabase.from('fairy_powers').select('id, nom').order('nom'),
        supabase.from('competences_futiles').select('id, name').order('name'),
        supabase.from('fairy_assets').select('id, nom').order('nom'),
        supabase.from('fairy_types').select('id, name').order('name') // 👈 Récupération des Fées
      ]);

      if (caps) setAllCapacites(caps);
      if (pows) setAllPouvoirs(pows);
      if (futiles) setAllCompFutiles(futiles);
      if (atouts) setAllAtouts(atouts);
      if (fairies) setAllFairyTypes(fairies); // 👈 Sauvegarde des Fées
    };

    fetchReferences();
  }, []);

  // Chargement des données selon l'onglet
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let query;
      if (activeTab === 'fairy_types') {
        query = supabase.from('fairy_types').select('*, fairy_type_capacites(capacite_type, capacite:fairy_capacites(id, nom)), fairy_type_powers(power:fairy_powers(id, nom)), fairy_type_assets(asset:fairy_assets(id, nom)), fairy_competences_futiles_predilection(is_choice, choice_options, competence_futile_id)');
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

  // Filtrage recherche
  const filteredData = data.filter(item => {
    const searchStr = searchTerm.toLowerCase();
    const name = item.name || item.nom || '';
    const desc = item.description || item.desc || '';
    return name.toLowerCase().includes(searchStr) || desc.toLowerCase().includes(searchStr);
  });

  // 🌟 Ouvrir le modal en mode CRÉATION 
  const handleCreate = () => {
    setIsCreating(true);
    setEditingItem({ id: null, name: '', description: '' }); 

    if (activeTab === 'fairy_types') {
      // 🧚 STRUCTURE COMPLÈTE D'UNE FÉE VIDE
      setProposal({
        name: '',
        description: '',
        era: 'traditionnelle',
        taille_categorie: 'Moyenne',
        traits: '',
        avantages: '',
        desavantages: '',
        caracs: {
          agilite: {min:1, max:6}, constitution: {min:1, max:6}, force: {min:1, max:6}, precision: {min:1, max:6},
          esprit: {min:1, max:6}, perception: {min:1, max:6}, prestance: {min:1, max:6}, sangFroid: {min:1, max:6}
        },
        capaciteFixe1: '',
        capaciteFixe2: '',
        capacitesChoixIds: [],
        pouvoirsIds: [],
        atoutsIds: [],
        futileChoix1: [],
        futileChoix2: []
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
      const futilesList = item.fairy_competences_futiles_predilection || [];
      const fixedFutiles = futilesList.filter(f => !f.is_choice);

      setProposal({
        description: item.description || item.desc || '',
        taille: item.taille || item.taille_categorie || 'Moyenne',
        allowedGenders: item.allowed_genders || item.allowedGenders || ['Homme', 'Femme'],
        traits: item.traits ? item.traits.join(', ') : '',
        avantages: item.avantages ? item.avantages.join('\n') : '',
        desavantages: item.desavantages ? item.desavantages.join('\n') : '',
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
        atoutsIds: item.fairy_type_assets ? item.fairy_type_assets.map(link => link.asset?.id).filter(Boolean) : [],
        competencesUtiles: item.competencesPredilection ? JSON.stringify(item.competencesPredilection, null, 2) : '',
        futileFixe1: fixedFutiles?.competence_futile_id || '',
        futileFixe2: fixedFutiles?.competence_futile_id || '',
      });
    } else {
      // 👈 Extraire les fées déjà liées pour les Capacités, Pouvoirs et Atouts
      let existingFairyIds = [];
      if (activeTab === 'fairy_capacites') existingFairyIds = item.fairy_type_capacites?.map(link => link.fairy_types?.id).filter(Boolean) || [];
      if (activeTab === 'fairy_powers') existingFairyIds = item.fairy_type_powers?.map(link => link.fairy_types?.id).filter(Boolean) || [];
      if (activeTab === 'fairy_assets') existingFairyIds = item.fairy_type_assets?.map(link => link.fairy_types?.id).filter(Boolean) || [];

      setProposal({
        description: item.description || item.desc || '',
        type_pouvoir: item.type_pouvoir || 'masque',
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

        {/* Grille de résultats */}
        {loading ? (
          <div className="text-center py-20 text-stone-400 animate-pulse text-lg font-serif">
            Consultation des archives...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(item => (
              <EncyclopediaCard
                key={item.id}
                item={item}
                activeTab={activeTab}
                onOpenEdit={handleOpenEdit}
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
          allCapacites={allCapacites}
          allPouvoirs={allPouvoirs}
          allAtouts={allAtouts}
          allCompFutiles={allCompFutiles}
          allFairyTypes={allFairyTypes} // 👈 NOUVEAU ! Transmission vitale
        />
      )}
    </div>
  );
}