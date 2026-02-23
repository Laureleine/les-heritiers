import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { Book, Feather, Search, Save, X, AlertCircle, Shield, Sparkles } from 'lucide-react';

export default function Encyclopedia({ userProfile, onBack, onOpenValidations }) {
  const [activeTab, setActiveTab] = useState('fairy_types'); // 'fairy_types', 'competences', 'profils'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // État pour la modification
  const [editingItem, setEditingItem] = useState(null); // L'objet en cours de modif
  const [proposal, setProposal] = useState({}); // Les changements proposés
  const [justification, setJustification] = useState(''); // Le "pourquoi"

  const [allCapacites, setAllCapacites] = useState([]);
  const [allPouvoirs, setAllPouvoirs] = useState([]);

  // Charger les listes de référence une seule fois au démarrage
  useEffect(() => {
    const fetchReferences = async () => {
      const [{ data: caps }, { data: pows }] = await Promise.all([
        supabase.from('fairy_capacites').select('id, nom').order('nom'),
        supabase.from('fairy_powers').select('id, nom').order('nom')
      ]);
      if (caps) setAllCapacites(caps);
      if (pows) setAllPouvoirs(pows);
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
        // On récupère la fée ET ses relations attachées
        query = supabase.from('fairy_types').select('*, fairy_capacites(id, nom), fairy_powers(id, nom)');
      } else {
        query = supabase.from(activeTab).select('*');
      }
      
      // Tris spécifiques
      if (activeTab === 'fairy_types') query = query.order('name');
      else if (activeTab === 'competences') query = query.order('nom');
      else if (activeTab === 'profils') query = query.order('nom');
      else if (activeTab === 'fairy_capacites') query = query.order('nom');
      else if (activeTab === 'fairy_powers') query = query.order('nom');
	  
      const { data: results, error } = await query;
      if (error) throw error;
      
      setData(results || []);
    } catch (error) {
      console.error("Erreur chargement Encyclopédie:", error);
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

  // Gestion de la proposition
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    
    // Initialisation dynamique selon le type d'onglet
    if (activeTab === 'fairy_types') {
      const defaultCaracs = {
        agilite: {min:1, max:6}, constitution: {min:1, max:6}, force: {min:1, max:6}, precision: {min:1, max:6},
        esprit: {min:1, max:6}, perception: {min:1, max:6}, prestance: {min:1, max:6}, sangFroid: {min:1, max:6}
      };

      setProposal({
        description: item.description || item.desc || '',
        taille: item.taille || item.taille_categorie || 'Moyenne',
        allowedGenders: item.allowed_genders || item.allowedGenders || ['Homme', 'Femme'],
        traits: item.traits ? item.traits.join(', ') : '',
        avantages: item.avantages ? item.avantages.join('\n') : '',
        desavantages: item.desavantages ? item.desavantages.join('\n') : '',
        // Copie profonde ou fallback sur les stats de base
        caracteristiques: item.caracteristiques ? JSON.parse(JSON.stringify(item.caracteristiques)) : defaultCaracs,
        capacitesIds: item.fairy_capacites ? item.fairy_capacites.map(c => c.id) : [],
        pouvoirsIds: item.fairy_powers ? item.fairy_powers.map(p => p.id) : [],
        competencesUtiles: item.competencesPredilection ? JSON.stringify(item.competencesPredilection, null, 2) : '',
        competencesFutiles: item.competencesFutilesPredilection ? JSON.stringify(item.competencesFutilesPredilection, null, 2) : ''
      });
    } else {
      // Pour les compétences et profils, on garde la forme simple (description uniquement pour l'instant)
      setProposal({
        description: item.description || item.desc || ''
      });
    }
    
    setJustification('');
  };

  const handleSubmitProposal = async () => {
    if (!justification.trim()) {
      alert("Veuillez expliquer brièvement la raison de cette modification.");
      return;
    }

    // 🛠️ LE CHIRURGIEN : L'objet qui ne contiendra QUE les différences
    const surgicalData = {};

    // Helper pour comparer facilement les tableaux (ignore les différences entre null et [])
    const arraysEqual = (a, b) => {
      const arrA = Array.isArray(a) && a.length > 0 ? a : [];
      const arrB = Array.isArray(b) && b.length > 0 ? b : [];
      return JSON.stringify(arrA) === JSON.stringify(arrB);
    };

    if (activeTab === 'fairy_types') {
      // 1. Reformatage des tableaux à partir des textes saisis
      const newTraits = proposal.traits ? proposal.traits.split(',').map(t => t.trim()).filter(Boolean) : [];
      const newAvantages = proposal.avantages ? proposal.avantages.split('\n').map(a => a.trim()).filter(Boolean) : [];
      const newDesavantages = proposal.desavantages ? proposal.desavantages.split('\n').map(d => d.trim()).filter(Boolean) : [];

      // 2. Comparaisons des champs simples
      if (proposal.description !== editingItem.description) surgicalData.description = proposal.description;
      if (proposal.taille !== (editingItem.taille_categorie || 'Moyenne')) surgicalData.taille_categorie = proposal.taille;
      
      // 3. Comparaison des tableaux
      if (!arraysEqual(proposal.allowedGenders, editingItem.allowed_genders)) surgicalData.allowed_genders = proposal.allowedGenders;
      if (!arraysEqual(newTraits, editingItem.traits)) surgicalData.traits = newTraits;
      if (!arraysEqual(newAvantages, editingItem.avantages)) surgicalData.avantages = newAvantages;
      if (!arraysEqual(newDesavantages, editingItem.desavantages)) surgicalData.desavantages = newDesavantages;

      // 4. Comparaison des Caractéristiques (Min/Max)
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

      // 5. Comparaison des Relations (IDs)
      const oldCapacites = (editingItem.fairy_capacites || []).map(c => c.id).sort();
      const newCapacites = [...(proposal.capacitesIds || [])].sort();
      const oldPouvoirs = (editingItem.fairy_powers || []).map(p => p.id).sort();
      const newPouvoirs = [...(proposal.pouvoirsIds || [])].sort();

      const changedRelations = {};
      if (!arraysEqual(newCapacites, oldCapacites)) changedRelations.capacites = newCapacites;
      if (!arraysEqual(newPouvoirs, oldPouvoirs)) changedRelations.pouvoirs = newPouvoirs;

      // 6. Comparaison des textes bruts (Compétences de prédilection JSON)
      const oldUtiles = editingItem.competencesPredilection ? JSON.stringify(editingItem.competencesPredilection, null, 2) : '';
      if (proposal.competencesUtiles !== oldUtiles) changedRelations.competencesUtiles = proposal.competencesUtiles;

      const oldFutiles = editingItem.competencesFutilesPredilection ? JSON.stringify(editingItem.competencesFutilesPredilection, null, 2) : '';
      if (proposal.competencesFutiles !== oldFutiles) changedRelations.competencesFutiles = proposal.competencesFutiles;

      // On n'intègre le sous-objet "relations" QUE s'il y a des modifications dedans
      if (Object.keys(changedRelations).length > 0) {
        surgicalData._relations = changedRelations;
      }

    } else {
      // Pour les autres onglets plus simples (Compétences, Profils)
      if (proposal.description !== (editingItem.description || editingItem.desc || '')) {
        surgicalData.description = proposal.description;
      }
    }

    // 🛡️ SÉCURITÉ : On bloque l'envoi si aucune modification n'a été détectée
    if (Object.keys(surgicalData).length === 0) {
      alert("Aucune modification n'a été détectée par rapport à la version actuelle.");
      return;
    }

    try {
      const payload = {
        user_id: userProfile.id,
        table_name: activeTab,
        record_id: editingItem.id,
        record_name: editingItem.name || editingItem.nom,
        new_data: surgicalData, // 🪄 Injection des données chirurgicales uniquement
        justification: justification,
        status: 'pending'
      };

      // Note : Utilisez bien le vrai nom de votre table (data_change_requests)
      const { error } = await supabase
        .from('data_change_requests') 
        .insert([payload]);

      if (error) throw error;

      alert("Votre proposition a été envoyée aux Gardiens du Savoir !");
      setEditingItem(null);
    } catch (error) {
      alert("Erreur lors de l'envoi : " + error.message);
    }
  };
  
  // --- RENDU DES CARTES (ADAPTATIF) ---
  const renderCard = (item) => {
    const title = item.name || item.nom;
    const desc = item.description || item.desc;
    const isRestricted = item.is_official === false;
    
    // Détection si c'est un pouvoir ou une capacité
    const typeBadge = item.type_pouvoir 
        ? (item.type_pouvoir === 'masque' ? '🎭 Masqué' : item.type_pouvoir === 'demasque' ? '🔥 Démasqué' : `✨ ${item.type_pouvoir}`)
        : item.capacite_type ? `🌟 Capacité` : null;

    return (
      <div key={item.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
        {activeTab === 'fairy_types' && <Feather className="text-amber-300 mb-3" size={24} />}
        
        <h3 className="font-serif font-bold text-lg text-amber-900 mb-2 flex items-center flex-wrap gap-2">
          {title}
          {isRestricted && <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold tracking-wider uppercase">Community</span>}
          {typeBadge && <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold">{typeBadge}</span>}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-1 whitespace-pre-wrap">
          {desc || <span className="italic text-gray-400">Aucune description disponible.</span>}
        </p>

        <div className="border-t border-gray-100 pt-3 mt-auto">
          <button 
            onClick={() => handleOpenEdit(item)}
            className="flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-amber-700 transition-colors bg-stone-50 hover:bg-amber-50 px-3 py-2 rounded-lg border border-transparent hover:border-amber-200"
          >
            Suggérer une modification
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-800 font-sans pb-20">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-3">
          <Book className="text-amber-600" size={28} />
          Encyclopédie
        </h2>
        <div className="flex gap-3">
          {/* Bouton visible uniquement pour les Gardiens et Super Admin */}
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
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
	  
        {/* CONTENU PRINCIPAL */}
        <div className="space-y-6">
          
          {/* Barre de recherche */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder={`Rechercher dans ${activeTab.replace('_', ' ')}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none bg-white shadow-sm"
            />
          </div>

          {/* Grille de résultats */}
          {loading ? (
            <div className="text-center py-20 text-stone-400 animate-pulse text-lg font-serif">
              Consultation des archives...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map(renderCard)}
              {filteredData.length === 0 && (
                <div className="col-span-full text-center py-10 text-gray-500 italic">
                  Aucune donnée trouvée pour cette recherche.
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* MODAL DE PROPOSITION */}
      {editingItem && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
            
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-stone-50">
              <div>
                <h2 className="text-xl font-serif font-bold text-amber-900">Proposition de modification</h2>
                <p className="text-sm text-gray-500 mt-1">Élément : <span className="font-bold text-gray-800">{editingItem.name || editingItem.nom}</span></p>
              </div>
              <button onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
              
              <div className="mb-6 p-4 bg-amber-50 text-amber-800 rounded-lg text-sm flex gap-3 items-start border border-amber-100">
                <Sparkles className="flex-shrink-0 mt-0.5 text-amber-500" size={18} />
                <p>Vos modifications ne seront pas immédiates. Elles seront soumises à la validation des <em>Gardiens du Savoir</em>. Soyez précis et respectueux du "Lore" du jeu.</p>
              </div>

              {/* === FORMULAIRE AVANCÉ POUR LES FÉES === */}
              {activeTab === 'fairy_types' ? (
                <div className="space-y-6">
                  {/* 1. DESCRIPTION */}
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-1">Description</label>
                    <textarea
                      value={proposal.description}
                      onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
                      className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 font-serif text-sm min-h-[100px]"
                      placeholder="Histoire et nature de la fée..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 2. TAILLE */}
                    <div>
                      <label className="block text-sm font-bold text-amber-900 mb-1">Taille</label>
                      <select
                        value={proposal.taille}
                        onChange={(e) => setProposal({ ...proposal, taille: e.target.value })}
                        className="w-full p-2 border border-amber-200 rounded-lg bg-white"
                      >
                        <option value="Petite">Petite (+1 Esquive)</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Grande">Grande (-1 Esquive)</option>
                        <option value="Très Grande">Très Grande (-2 Esquive)</option>
                      </select>
                    </div>

                    {/* 3. SEXE (Possibilités) */}
                    <div>
                      <label className="block text-sm font-bold text-amber-900 mb-1">Sexes possibles</label>
                      <div className="flex gap-4 p-2 border border-amber-200 rounded-lg bg-amber-50/50">
                        {['Homme', 'Femme', 'Androgyne'].map(genre => (
                          <label key={genre} className="flex items-center gap-1 text-sm cursor-pointer">
                            <input 
                              type="checkbox"
                              checked={proposal.allowedGenders.includes(genre)}
                              onChange={(e) => {
                                const newGenders = e.target.checked 
                                  ? [...proposal.allowedGenders, genre]
                                  : proposal.allowedGenders.filter(g => g !== genre);
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

                  {/* 4. TRAITS DE CARACTÈRE */}
                  <div>
                    <label className="block text-sm font-bold text-amber-900 mb-1">Traits de caractère dominants (séparés par des virgules)</label>
                    <input
                      type="text"
                      value={proposal.traits}
                      onChange={(e) => setProposal({ ...proposal, traits: e.target.value })}
                      className="w-full p-2 border border-amber-200 rounded-lg"
                      placeholder="Ex: Élégant, orgueilleux, raffiné..."
                    />
                  </div>

                  {/* 5. POTENTIELS (CARACTÉRISTIQUES MIN/MAX) */}
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <label className="block text-sm font-bold text-amber-900 mb-3">Potentiels (Min / Max)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid'].map((stat) => (
                        <div key={stat} className="bg-white p-2 rounded border border-amber-200 text-center shadow-sm">
                          <span className="block text-xs font-bold uppercase text-stone-500 mb-1">
                            {stat === 'sangFroid' ? 'Sang-Froid' : stat}
                          </span>
                          <div className="flex justify-center items-center gap-1">
                            <input 
                              type="number" min="1" max="9"
                              value={proposal.caracteristiques[stat]?.min || 1}
                              onChange={(e) => setProposal({
                                ...proposal,
                                caracteristiques: {
                                  ...proposal.caracteristiques,
                                  [stat]: { ...proposal.caracteristiques[stat], min: parseInt(e.target.value) }
                                }
                              })}
                              className="w-10 text-center border-b border-amber-300 focus:outline-none focus:border-amber-600 text-sm font-bold"
                            />
                            <span className="text-stone-300">/</span>
                            <input 
                              type="number" min="1" max="9"
                              value={proposal.caracteristiques[stat]?.max || 6}
                              onChange={(e) => setProposal({
                                ...proposal,
                                caracteristiques: {
                                  ...proposal.caracteristiques,
                                  [stat]: { ...proposal.caracteristiques[stat], max: parseInt(e.target.value) }
                                }
                              })}
                              className="w-10 text-center border-b border-amber-300 focus:outline-none focus:border-amber-600 text-sm font-bold text-amber-700"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6. AVANTAGES & DÉSAVANTAGES */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-green-800 mb-1">Avantages (1 par ligne)</label>
                      <textarea
                        value={proposal.avantages}
                        onChange={(e) => setProposal({ ...proposal, avantages: e.target.value })}
                        className="w-full p-2 border border-green-200 bg-green-50/30 rounded-lg text-sm min-h-[80px]"
                        placeholder="- Avantage 1 : description..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-red-800 mb-1">Désavantages (1 par ligne)</label>
                      <textarea
                        value={proposal.desavantages}
                        onChange={(e) => setProposal({ ...proposal, desavantages: e.target.value })}
                        className="w-full p-2 border border-red-200 bg-red-50/30 rounded-lg text-sm min-h-[80px]"
                        placeholder="- Désavantage 1 : description..."
                      />
                    </div>
                  </div>

                  {/* 7. COMPÉTENCES DE PRÉDILECTION */}
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <p className="text-xs text-purple-600 italic mb-3">
                      Note: Pour les compétences, utilisez le format texte ou JSON. L'intégration finale complexe sera gérée par les Gardiens.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-purple-900 mb-1">Compétences Utiles</label>
                        <textarea
                          value={proposal.competencesUtiles}
                          onChange={(e) => setProposal({ ...proposal, competencesUtiles: e.target.value })}
                          className="w-full p-2 border border-purple-200 rounded-lg text-xs font-mono min-h-[100px]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-purple-900 mb-1">Compétences Futiles</label>
                        <textarea
                          value={proposal.competencesFutiles}
                          onChange={(e) => setProposal({ ...proposal, competencesFutiles: e.target.value })}
                          className="w-full p-2 border border-purple-200 rounded-lg text-xs font-mono min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
				            {/* 8. SÉLECTION DES CAPACITÉS */}
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <label className="block text-sm font-bold text-indigo-900 mb-3">Capacités attachées</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-indigo-200">
              {allCapacites.map(cap => (
                <label key={cap.id} className="flex items-center space-x-2 text-xs cursor-pointer hover:bg-indigo-50 p-1 rounded">
                  <input
                    type="checkbox"
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                    checked={proposal.capacitesIds?.includes(cap.id)}
                    onChange={(e) => {
                      const newIds = e.target.checked
                        ? [...(proposal.capacitesIds || []), cap.id]
                        : (proposal.capacitesIds || []).filter(id => id !== cap.id);
                      setProposal({ ...proposal, capacitesIds: newIds });
                    }}
                  />
                  <span className="truncate">{cap.nom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 9. SÉLECTION DES POUVOIRS */}
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 mt-4">
            <label className="block text-sm font-bold text-rose-900 mb-3">Pouvoirs attachés</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-white rounded border border-rose-200">
              {allPouvoirs.map(pow => (
                <label key={pow.id} className="flex items-center space-x-2 text-xs cursor-pointer hover:bg-rose-50 p-1 rounded">
                  <input
                    type="checkbox"
                    className="rounded text-rose-600 focus:ring-rose-500"
                    checked={proposal.pouvoirsIds?.includes(pow.id)}
                    onChange={(e) => {
                      const newIds = e.target.checked
                        ? [...(proposal.pouvoirsIds || []), pow.id]
                        : (proposal.pouvoirsIds || []).filter(id => id !== pow.id);
                      setProposal({ ...proposal, pouvoirsIds: newIds });
                    }}
                  />
                  <span className="truncate">{pow.nom}</span>
                </label>
              ))}
            </div>
          </div>
		   </div>
              ) : (
                /* === FORMULAIRE SIMPLE (Pour Compétences et Profils) === */
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Description / Contenu</label>
                  <textarea
                    value={proposal.description}
                    onChange={(e) => setProposal({...proposal, description: e.target.value})}
                    className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-serif text-gray-800"
                  />
                </div>
              )}

              {/* Justification Commune */}
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
              <button 
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-200 rounded-lg transition-colors"
              >
                Annuler
              </button>
              <button 
                onClick={handleSubmitProposal}
                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm flex items-center gap-2 transition-all"
              >
                <Save size={18} /> Soumettre la proposition
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}