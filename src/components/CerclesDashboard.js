// 11.1.0 // 11.2.1
// 13.13.0
// 14.10.0 // 14.11.0
// Optimisé
// 15.1.0 // 15.2.0

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../config/supabase';
import { Shield, Users, Plus, Key, X, ArrowLeft } from '../config/icons';
import { showInAppNotification } from '../utils/SystemeServices';
import ConfirmModal from './ConfirmModal';
import { getFullCharacter } from '../utils/supabaseStorage';
import ActiveCercleView from './cercle/ActiveCercleView';

// ============================================================================
// ✨ LE COMPOSANT PRINCIPAL
// ============================================================================


// ✨ LE COMPOSANT PRINCIPAL
// ============================================================================

export default function CerclesDashboard({ session, onBack, onViewCharacter }) {
  const [cercles, setCercles] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    action: null,
    title: '',
    message: '',
    confirmText: ''
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCircleName, setNewCircleName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [myCharacters, setMyCharacters] = useState([]);
  const [selectedCharId, setSelectedCharId] = useState('');
  const [activeMembers, setActiveMembers] = useState([]);
  const [isCreatingCercle, setIsCreatingCercle] = useState(false);
  const [xpSubmitting, setXpSubmitting] = useState(false);

  // 🧠 FIX : Mémoïsation pure du chargement
  const loadCercles = useCallback(async () => {
    setLoading(true);
    try {
      // ✨ FIX : On fait une jointure pour récupérer le pseudo du Docte dans la table profiles !
      const { data, error } = await supabase
        .from('cercles')
        .select('*, profiles(username)')
        .order('created_at');
        
      if (error) throw error;
      if (data) setCercles(data);
    } catch (err) {
      showInAppNotification("Impossible de charger vos Cercles : " + err.message, "error");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initialisation de l'onglet
  useEffect(() => {
    if (cercles.length > 0 && !activeTab) {
      setActiveTab(cercles.at(0).id);
    }
  }, [cercles, activeTab]);

  const loadMyCharacters = useCallback(async () => {
    if (!session?.user?.id) return;
    try {
      const { data, error } = await supabase
        .from('characters')
        .select('id, nom, typeFee:type_fee')
        .eq('user_id', session.user.id);
      if (error) throw error;
      if (data) setMyCharacters(data);
    } catch (err) {
      showInAppNotification("Erreur lors de la récupération de vos Héritiers : " + err.message, "error");
    }
  }, [session?.user?.id]);

  useEffect(() => {
    loadCercles();
    loadMyCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMembers = useCallback(async (cercleId) => {
    setActiveMembers([]);
    try {
      const { data, error } = await supabase
        .rpc('get_cercle_members', { p_cercle_id: cercleId });
      if (error) throw error;
      if (data) setActiveMembers(data);
    } catch (err) {
      showInAppNotification("Erreur lors de l'inspection de la table : " + err.message, "error");
    }
  }, []);

  useEffect(() => {
    if (activeTab) loadMembers(activeTab);
  }, [activeTab, loadMembers]);

  // --- ACTIONS ---

  const handleCreateCercle = async () => {
    if (!newCircleName.trim() || isCreatingCercle) return;
    setIsCreatingCercle(true);
    try {
      const randomSegment = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID().split('-').at(0).toUpperCase()
        : Math.random().toString(36).substring(2, 10).toUpperCase();
      const finalCode = `TABLE-${randomSegment}`;

      const { data, error } = await supabase.from('cercles').insert([{
        nom: newCircleName,
        docte_id: session.user.id,
        code_invitation: finalCode
      }]).select().single();

      if (error) throw error;

      showInAppNotification("Le Cercle a été fondé !", "success");
      setShowAddModal(false);
      setNewCircleName('');
      loadCercles();
      setActiveTab(data.id);
    } catch (err) {
      showInAppNotification("Erreur de création : " + err.message, "error");
    } finally {
      setIsCreatingCercle(false);
    }
  };

  const handleJoinCercle = async () => {
    if (!joinCode.trim() || !selectedCharId) {
      showInAppNotification("Il vous faut un code et un personnage prêt à jouer !", "warning");
      return;
    }
    try {
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

  const executeLeaveCercle = useCallback(async (cercleId) => {
    setConfirmState(prev => ({ ...prev, isOpen: false }));
    try {
      const { error } = await supabase
        .from('cercle_membres')
        .delete()
        .match({ cercle_id: cercleId, user_id: session.user.id });
      if (error) throw error;

      showInAppNotification("Vous avez quitté la table avec succès.", "success");
      setActiveTab(null);
      loadCercles();
    } catch (err) {
      showInAppNotification("Erreur lors du départ : " + err.message, "error");
    }
  }, [session?.user?.id, loadCercles]);

  const handleLeaveCercle = useCallback((cercleId) => {
    setConfirmState({
      isOpen: true,
      title: "Quitter la Table",
      message: "Êtes-vous sûr de vouloir quitter cette campagne ? Votre place sera libérée.",
      confirmText: "Oui, quitter la table",
      action: () => executeLeaveCercle(cercleId)
    });
  }, [executeLeaveCercle]);

  const executeDeleteCercle = useCallback(async (cercleId) => {
    setConfirmState(prev => ({ ...prev, isOpen: false }));
    try {
      const { error } = await supabase
        .from('cercles')
        .delete()
        .eq('id', cercleId);
      if (error) throw error;

      showInAppNotification("Le Cercle a été totalement dissous.", "success");
      setActiveTab(null);
      loadCercles();
    } catch (err) {
      showInAppNotification("Erreur lors de la dissolution : " + err.message, "error");
    }
  }, [loadCercles]);

  const handleDeleteCercle = useCallback((cercleId) => {
    setConfirmState({
      isOpen: true,
      title: "Dissoudre le Cercle",
      message: "Attention Docte ! Voulez-vous vraiment DISSOUDRE ce Cercle ? Cette action est irréversible pour tous les joueurs.",
      confirmText: "Oui, dissoudre la campagne",
      action: () => executeDeleteCercle(cercleId)
    });
  }, [executeDeleteCercle]);

  const activeCercleObj = useMemo(() => {
    return cercles.find(c => c.id === activeTab);
  }, [cercles, activeTab]);

  // ✨ L'INCISION 3 : L'intercepteur qui charge le lourd lore
  const handleInspectCharacter = async (lightChar) => {
    if (!lightChar?.id) {
      showInAppNotification("La fiche de cet Héritier n'est pas encore liée à ce Cercle. Le joueur doit choisir son Héritier.", "error");
      return;
    }
    try {
      showInAppNotification("Ouverture des archives secrètes...", "info");
      // On télécharge la fiche complète (pouvoirs, XP, atouts...)
      const fullChar = await getFullCharacter(lightChar.id);
      // On passe la vraie fiche complète à App.js !
      onViewCharacter(fullChar);
    } catch (error) {
      showInAppNotification("Le parchemin est illisible : " + error.message, "error");
    }
  };

  // 🎁 Distribution d'XP par le Docte
  const handleDistributeXp = async (amounts, motif) => {
    const recipients = activeMembers.filter(m => (amounts[m.user_id] || 0) !== 0 && m.characters?.id);
    if (recipients.length === 0) return;

    const hasNegative = recipients.some(m => (amounts[m.user_id] || 0) < 0);
    if (hasNegative) {
      setConfirmState({
        isOpen: true,
        title: 'Retrait d\'XP',
        message: `Tu t'apprêtes à retirer des XP à ${recipients.filter(m => amounts[m.user_id] < 0).length} Héritier(s). Cette action est irréversible. Confirmer ?`,
        confirmText: 'Oui, retirer les XP',
        action: () => { setConfirmState(prev => ({ ...prev, isOpen: false })); executeDistributeXp(amounts, motif, recipients); }
      });
      return;
    }
    executeDistributeXp(amounts, motif, recipients);
  };

  const executeDistributeXp = async (amounts, motif, recipients) => {
    setXpSubmitting(true);
    const notSealed = [];
    try {
      const results = await Promise.all(recipients.map(member => {
        const amount = amounts[member.user_id];
        return supabase.rpc('award_xp', {
          p_character_id: member.characters.id,
          p_amount: amount,
          p_motif: motif,
        }).then(({ error }) => {
          if (error) throw error;
          if (member.characters?.statut && member.characters.statut !== 'scelle') {
            notSealed.push(member.characters.nom || member.profiles?.username);
          }
        });
      }));

      let msg = `🎁 ${recipients.length} Héritier(s) ont reçu leurs XP !`;
      if (notSealed.length > 0) {
        msg += ` ${notSealed.join(', ')} ne pourront pas les dépenser tant que leur personnage n'est pas scellé.`;
      }
      showInAppNotification(msg, "success");
      loadMembers(activeTab);
    } catch (err) {
      showInAppNotification("Erreur lors de la distribution : " + err.message, "error");
    } finally {
      setXpSubmitting(false);
    }
  };
  
  // ✨ Permet à un joueur de changer l'Héritier qu'il présente dans ce Cercle
  const handleUpdateMyCharacter = async (charId) => {
    if (!charId || !activeTab) return;
    try {
      const { error } = await supabase
        .from('cercle_membres')
        .update({ character_id: charId })
        .match({ cercle_id: activeTab, user_id: session.user.id });
      if (error) throw error;
      showInAppNotification("Votre Héritier a été mis à jour dans ce Cercle.", "success");
      loadMembers(activeTab);
    } catch (err) {
      showInAppNotification("Erreur lors de la mise à jour : " + err.message, "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 font-serif min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold text-amber-900 flex items-center gap-3">
          <Users className="text-amber-600" /> Mes Cercles de Jeu
        </h2>
        <button onClick={onBack} className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 flex items-center gap-2 font-bold font-serif transition-colors shadow-sm">
          <ArrowLeft size={16} /> Retour
        </button>
      </div>

      {loading && cercles.length === 0 ? (
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
              <p className="text-stone-500 font-serif mb-4 text-lg">Vous n'avez pas encore fondé ou rejoint de Cercle.</p>
              <button onClick={() => setShowAddModal(true)} className="px-6 py-3 bg-amber-600 text-white rounded-xl font-bold shadow-md hover:bg-amber-700 transition-transform active:scale-95">
                Rejoindre ou Fonder une Table
              </button>
            </div>
          ) : (
            <ActiveCercleView
              cercle={activeCercleObj}
              session={session}
              activeMembers={activeMembers}
              onDelete={handleDeleteCercle}
              onLeave={handleLeaveCercle}
              onViewCharacter={handleInspectCharacter}
              myCharacters={myCharacters}
              onUpdateMyCharacter={handleUpdateMyCharacter}
              onDistributeXp={handleDistributeXp}
              xpSubmitting={xpSubmitting}
            />
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
                
                <button onClick={handleJoinCercle} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">Entrer dans le Cercle</button>
              </div>

              {/* Option B : Docte */}
              <div className="space-y-4 md:pl-4 pt-6 md:pt-0">
                <div className="flex items-center gap-2 text-purple-900 font-serif font-bold text-xl">
                  <Shield className="text-purple-600"/> Fonder (Docte)
                </div>
                <p className="text-sm text-stone-500">Créez une nouvelle campagne. Vous pourrez ensuite distribuer le code à vos joueurs.</p>
                <input type="text" placeholder="Nom de la Campagne..." value={newCircleName} onChange={e => setNewCircleName(e.target.value)} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" />
                <button onClick={handleCreateCercle} disabled={isCreatingCercle} className="w-full py-3 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 disabled:opacity-50 transition-colors">Générer la Table</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        onConfirm={confirmState.action}
        onCancel={() => setConfirmState(prev => ({ ...prev, isOpen: false, action: null }))}
        confirmText={confirmState.confirmText}
      />
    </div>
  );
}