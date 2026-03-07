// 11.1.0 // 11.2.1

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { Shield, Users, Plus, Key, X, ArrowLeft, EyeOff, Eye, Check, LogOut } from 'lucide-react';
import { showInAppNotification, getCurrentUserFast } from '../utils/SystemeServices';
import ConfirmModal from './ConfirmModal';

export default function CerclesDashboard({ session, onBack }) {
  const [cercles, setCercles] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✨ NOUVEAU : Mémoire pour la modale de confirmation
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    action: null,
    title: '',
    message: '',
    confirmText: ''
  });
  
  // Modale d'ajout
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCircleName, setNewCircleName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [myCharacters, setMyCharacters] = useState([]);
  const [selectedCharId, setSelectedCharId] = useState('');

  // Membres du cercle actif
  const [activeMembers, setActiveMembers] = useState([]);

  useEffect(() => {
    loadCercles();
    loadMyCharacters();
  }, []);

  useEffect(() => {
    if (activeTab) loadMembers(activeTab);
  }, [activeTab]);

  const loadCercles = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('cercles').select('*').order('created_at');
    if (!error && data) {
      setCercles(data);
      if (data.length > 0 && !activeTab) setActiveTab(data.id);
    }
    setLoading(false);
  };

  const loadMyCharacters = async () => {
    const user = await getCurrentUserFast();
    if (!user) return;
    
    // ✨ LA CORRECTION EST ICI : typeFee:type_fee (Alias SQL)
    // On a aussi ajouté une petite gestion d'erreur pour ne plus être aveugle à l'avenir !
    const { data, error } = await supabase
      .from('characters')
      .select('id, nom, typeFee:type_fee')
      .eq('user_id', user.id);
      
    if (error) {
      console.error("Erreur lors de la récupération des Héritiers :", error.message);
    }
      
    if (data) setMyCharacters(data);
  };

  const loadMembers = async (cercleId) => {
    const { data, error } = await supabase
      .from('cercle_membres')
      .select(`
        id,
        user_id,
        joined_at,
        profiles ( username, unlocked_fairies ),
        characters ( nom, apparence, genreHumain:genre_humain, typeFee:type_fee )
      `)
      .eq('cercle_id', cercleId);
      
    if (error) {
      console.error("Erreur lors du chargement de la table :", error.message);
    }
      
    if (data) setActiveMembers(data);
  };
  
  // --- ACTIONS ---

  const handleCreateCercle = async () => {
    if (!newCircleName.trim()) return;
    // Génération d'un code aléatoire de 6 caractères (ex: PARIS-A7X9)
    const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    const finalCode = `TABLE-${randomCode}`;

    const { data, error } = await supabase.from('cercles').insert([{
      nom: newCircleName,
      docte_id: session.user.id,
      code_invitation: finalCode
    }]).select().single();

    if (error) {
      showInAppNotification("Erreur de création : " + error.message, "error");
    } else {
      showInAppNotification("Le Cercle a été fondé !", "success");
      setShowAddModal(false);
      setNewCircleName('');
      loadCercles();
      setActiveTab(data.id);
    }
  };

  const handleJoinCercle = async () => {
    if (!joinCode.trim() || !selectedCharId) {
      showInAppNotification("Il vous faut un code et un personnage prêt à jouer !", "warning");
      return;
    }
    try {
      // On appelle notre fonction secrète RPC
      const { error } = await supabase.rpc('join_cercle_by_code', {
        p_code: joinCode.trim(),
        p_character_id: selectedCharId
      });
      
      if (error) throw error;

      showInAppNotification("Vous avez rejoint la table !", "success");
      setShowAddModal(false);
      setJoinCode('');
      loadCercles();
    } catch (err) {
      showInAppNotification(err.message, "error");
    }
  };

  // --- ACTIONS DE DÉPART ET DISSOLUTION (Avec Modale Immersive) ---

  const handleLeaveCercle = (cercleId) => {
    setConfirmState({
      isOpen: true,
      title: "Quitter la Table",
      message: "Êtes-vous sûr de vouloir quitter cette campagne ? Votre place sera libérée.",
      confirmText: "Oui, quitter la table",
      action: () => executeLeaveCercle(cercleId)
    });
  };

  const executeLeaveCercle = async (cercleId) => {
    setConfirmState({ isOpen: false }); // On ferme le parchemin
    const { error } = await supabase
      .from('cercle_membres')
      .delete()
      .match({ cercle_id: cercleId, user_id: session.user.id });

    if (error) {
      showInAppNotification("Erreur lors du départ : " + error.message, "error");
    } else {
      showInAppNotification("Vous avez quitté la table avec succès.", "success");
      setActiveTab(null);
      loadCercles();
    }
  };

  const handleDeleteCercle = (cercleId) => {
    setConfirmState({
      isOpen: true,
      title: "Dissoudre le Cercle",
      message: "Attention Docte ! Voulez-vous vraiment DISSOUDRE ce Cercle ? Cette action est irréversible pour tous les joueurs.",
      confirmText: "Oui, dissoudre la campagne",
      action: () => executeDeleteCercle(cercleId)
    });
  };

  const executeDeleteCercle = async (cercleId) => {
    setConfirmState({ isOpen: false }); // On ferme le parchemin
    const { error } = await supabase
      .from('cercles')
      .delete()
      .eq('id', cercleId);

    if (error) {
      showInAppNotification("Erreur lors de la dissolution : " + error.message, "error");
    } else {
      showInAppNotification("Le Cercle a été totalement dissous.", "success");
      setActiveTab(null);
      loadCercles();
    }
  };
  
  // --- RENDU DU CERCLE ACTIF ---
  
  const renderActiveCercle = () => {
    const cercle = cercles.find(c => c.id === activeTab);
    if (!cercle) return null;

    const isDocte = cercle.docte_id === session.user.id;

    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 animate-fade-in">
        <div className="flex justify-between items-start mb-6 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-3xl font-serif text-amber-900 font-bold">{cercle.nom}</h2>
            <div className="flex items-center gap-2 mt-2">
              {isDocte ? (
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1"><Shield size={12}/> Vous êtes le Docte</span>
              ) : (
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1"><Users size={12}/> Vous êtes un Joueur</span>
              )}
            </div>
          </div>
          
          {isDocte ? (
            <div className="flex flex-col items-end gap-3">
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-center shadow-sm">
                <div className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-1">Code d'invitation</div>
                <div className="font-mono text-xl text-amber-900 font-black tracking-widest">{cercle.code_invitation}</div>
              </div>
              <button 
                onClick={() => handleDeleteCercle(cercle.id)} 
                className="text-xs text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition-colors"
              >
                <X size={14} /> Dissoudre le Cercle
              </button>
            </div>
          ) : (
            <button 
              onClick={() => handleLeaveCercle(cercle.id)} 
              className="text-sm bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors border border-red-200 shadow-sm"
            >
              <LogOut size={16} /> Quitter la table
            </button>
          )}
        </div>

        <h3 className="font-serif font-bold text-stone-700 mb-4 flex items-center gap-2">
          <Users size={18} /> Héritiers à la table ({activeMembers.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeMembers.map(member => (
            <div key={member.id} className="p-4 border-2 border-stone-100 rounded-lg flex gap-4 items-center bg-stone-50/50">
              <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-serif text-xl border-2 border-white shadow-sm">
                {member.characters?.nom?.charAt(0) || '?'}
              </div>
              <div className="flex-1">
                <div className="font-bold text-amber-900 font-serif">{member.characters?.nom}</div>
                <div className="text-xs text-stone-500">Joué par : {member.profiles?.username}</div>
                
                {/* L'ILLUSION DU MASQUE EN ACTION ! */}
                {isDocte ? (
                  <div className="mt-2 text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block font-bold">
                    Vraie nature : {member.characters?.typeFee || 'Inconnue'}
                  </div>
                ) : (
                  <div className="mt-2 text-xs text-stone-400 flex items-center gap-1 italic">
                    <EyeOff size={12} /> Nature féérique masquée
                  </div>
                )}
              </div>
            </div>
          ))}
          {activeMembers.length === 0 && (
            <div className="col-span-2 text-center text-stone-400 italic py-4">La table est encore vide.</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold text-amber-900 flex items-center gap-3">
          <Users className="text-amber-600" /> Mes Cercles de Jeu
        </h2>
        <button onClick={onBack} className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 flex items-center gap-2 font-bold font-serif transition-colors shadow-sm">
          <ArrowLeft size={16} /> Retour
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-stone-400 font-serif animate-pulse">Consultation des archives pneumatiques...</div>
      ) : (
        <>
          {/* ✨ LA BARRE D'ONGLETS ET LE BOUTON + ✨ */}
          <div className="flex gap-2 border-b border-stone-200 mb-6 overflow-x-auto hide-scrollbar pb-2 items-end">
            {cercles.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-4 py-2 rounded-t-lg font-serif font-bold whitespace-nowrap transition-colors border-b-4 ${
                  activeTab === c.id
                    ? 'bg-amber-50 text-amber-900 border-amber-600'
                    : 'bg-stone-50 text-stone-500 border-transparent hover:bg-stone-100'
                }`}
              >
                {c.nom}
              </button>
            ))}
            
            {/* Le fameux Bouton "+" */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3 py-2 bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-800 rounded-t-lg border-b-4 border-transparent transition-colors flex items-center justify-center"
              title="Rejoindre ou Fonder un Cercle"
            >
              <Plus size={20} />
            </button>
          </div>

          {cercles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-stone-300">
              <Shield size={48} className="mx-auto text-stone-300 mb-4" />
              <p className="text-stone-500 font-serif mb-4 text-lg">Vous n'êtes engagé dans aucune campagne.</p>
              <button onClick={() => setShowAddModal(true)} className="px-6 py-3 bg-amber-600 text-white rounded-xl font-bold shadow-md hover:bg-amber-700 transition-transform active:scale-95">
                Rejoindre ou Fonder une Table
              </button>
            </div>
          ) : (
            renderActiveCercle()
          )}
        </>
      )}

      {/* ✨ LA MODALE D'AJOUT ✨ */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-2xl w-full rounded-xl shadow-2xl border-2 border-amber-900/20 overflow-hidden transform animate-fade-in-up">
            <div className="p-4 bg-stone-100 border-b border-stone-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-stone-800">Les Tables du Grimoire</h3>
              <button onClick={() => setShowAddModal(false)} className="text-stone-400 hover:text-red-500"><X size={20}/></button>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              
              {/* Option A : Joueur */}
              <div className="space-y-4 md:pr-4">
                <div className="flex items-center gap-2 text-blue-900 font-serif font-bold text-xl">
                  <Key className="text-blue-600"/> Rejoindre (Joueur)
                </div>
                <p className="text-sm text-stone-500">Saisissez le code fourni par votre Docte et choisissez qui part à l'aventure.</p>
                <input type="text" placeholder="Ex: TABLE-A7X9" value={joinCode} onChange={e => setJoinCode(e.target.value)} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none uppercase font-mono" />
                <select value={selectedCharId} onChange={e => setSelectedCharId(e.target.value)} className="w-full p-3 border border-stone-300 rounded-lg bg-white">
                  <option value="">-- Choisir un Héritier --</option>
                  {myCharacters.map(char => (
                    <option key={char.id} value={char.id}>{char.nom} ({char.typeFee})</option>
                  ))}
                </select>
                <button onClick={handleJoinCercle} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">Entrer dans le Cercle</button>
              </div>

              {/* Option B : Docte */}
              <div className="space-y-4 md:pl-4 pt-6 md:pt-0">
                <div className="flex items-center gap-2 text-purple-900 font-serif font-bold text-xl">
                  <Shield className="text-purple-600"/> Fonder (Docte)
                </div>
                <p className="text-sm text-stone-500">Créez une nouvelle campagne. Vous pourrez ensuite distribuer le code à vos joueurs.</p>
                <input type="text" placeholder="Nom de la Campagne..." value={newCircleName} onChange={e => setNewCircleName(e.target.value)} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                <button onClick={handleCreateCercle} className="w-full py-3 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800">Générer la Table</button>
              </div>

            </div>
          </div>
        </div>
      )}
      {/* --- MODALE DE CONFIRMATION IMMERSIVE --- */}
      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        onConfirm={confirmState.action}
        onCancel={() => setConfirmState({ isOpen: false, action: null })}
        confirmText={confirmState.confirmText}
      />
    </div>
  );
}