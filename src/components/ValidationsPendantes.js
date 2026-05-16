// src/components/ValidationsPendantes.js

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { X, ArrowLeft, Shield } from '../config/icons';
import { supabase } from '../config/supabase';
import { isAdmin, isSuperAdmin } from '../utils/authRoles';
import { invalidateAllCaches, loadCoreGameData, loadHeavyLoreData } from '../utils/supabaseGameData';
import ConfirmModal from './ConfirmModal';
import { showInAppNotification } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext';
import ChangeCard from './admin/ChangeCard';

const TABLE_NAME = 'data_change_requests';

// ======================================================================
// 🟡 Logique d'escalade isolée
// ======================================================================
const notifyEscalation = async (change, errorMsg, currentUserId) => {
  if (change.user_id) {
    const { data: tAuteur } = await supabase.from('support_tickets').insert({ user_id: change.user_id, sujet: `⚠️ Problème technique : ${change.record_name}` }).select().single();
    if (tAuteur) {
      await supabase.from('support_messages').insert({ ticket_id: tAuteur.id, user_id: currentUserId, is_admin: true, message: `Salutations.\nVotre proposition pour "${change.record_name}" a été acceptée par le Conseil, mais une puissante anomalie a empêché sa gravure finale dans les archives.\nLe Grand Architecte a été prévenu et va résoudre le problème manuellement.\n\nErreur base de données : ${errorMsg}` });
    }
  }
  if (currentUserId !== change.user_id) {
    const { data: tGardien } = await supabase.from('support_tickets').insert({ user_id: currentUserId, sujet: `🚨 Échec SQL escaladé : ${change.record_name}` }).select().single();
    if (tGardien) {
      await supabase.from('support_messages').insert({ ticket_id: tGardien.id, user_id: currentUserId, is_admin: true, message: `Gardien, l'incantation SQL que vous avez tentée de lancer a échoué.\n\nErreur de la base : ${errorMsg}\n\nLa requête a été placée dans le sas d'escalade du Super Admin.` });
    }
  }
};


// ======================================================================
// 🛡️ LE CONSEIL DES GARDIENS (Parent)
// ======================================================================
export default function ValidationsPendantes({ session, onBack }) {
  const { gameData, setGameData } = useCharacter(); 

  const [pendingChanges, setPendingChanges] = useState([]);
  const [approvedChanges, setApprovedChanges] = useState([]);
  const [historyChanges, setHistoryChanges] = useState([]);
  const [escalatedChanges, setEscalatedChanges] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [myRole, setMyRole] = useState(null);
  const [referenceNames, setReferenceNames] = useState({});
  const [originalRecords, setOriginalRecords] = useState({});

  const [confirmState, setConfirmState] = useState({ isOpen: false, action: null, title: '', message: '', confirmText: '' });
  
  // ✨ LA MÉMOIRE DE L'ÉTAT DE REJET ET LA BOÎTE MAGIQUE REF ✨
  const [rejectState, setRejectState] = useState({ isOpen: false, change: null, reason: '' });
  const rejectStateRef = useRef(rejectState);
  
  useEffect(() => {
    rejectStateRef.current = rejectState;
  }, [rejectState]);

  const isMounted = useRef(true);

  useEffect(() => {
    return () => { isMounted.current = false; };
  }, []);

  const loadDictionaries = useCallback(async () => {
    try {
      const [fees, pouvoirs, atouts, capacites] = await Promise.all([
        supabase.from('fairy_types').select('id, name'),
        supabase.from('fairy_powers').select('id, nom'),
        supabase.from('fairy_assets').select('id, nom'),
        supabase.from('fairy_capacites').select('id, nom')
      ]);

      const map = {};
      if (fees.data) fees.data.forEach(d => map[d.id] = d.name);
      if (pouvoirs.data) pouvoirs.data.forEach(d => map[d.id] = d.nom);
      if (atouts.data) atouts.data.forEach(d => map[d.id] = d.nom);
      if (capacites.data) capacites.data.forEach(d => map[d.id] = d.nom);

      if (isMounted.current) setReferenceNames(map);
    } catch (e) {
      console.error("Erreur loadDictionaries:", e);
    }
  }, []);

  const loadChanges = useCallback(async () => {
    if (isMounted.current) setLoading(true);
    try {
      const [pending, approved, history, escalated] = await Promise.all([
        supabase.from(TABLE_NAME).select('*, profiles(username, badges)').eq('status', 'pending').order('created_at', { ascending: false }),
        supabase.from(TABLE_NAME).select('*, profiles(username, badges)').eq('status', 'approved').order('created_at', { ascending: false }),
        supabase.from(TABLE_NAME).select('*, profiles(username, badges)').in('status', ['archived', 'rejected']).order('created_at', { ascending: false }).limit(50),
        supabase.from(TABLE_NAME).select('*, profiles(username, badges)').eq('status', 'escalated').order('created_at', { ascending: false })
      ]);

      const allActive = [...(pending.data || []), ...(approved.data || []), ...(escalated.data || [])];
      const grouped = {};
      allActive.forEach(c => {
        if (c.record_id && !(c.new_data && c.new_data.id)) {
          if (!grouped[c.table_name]) grouped[c.table_name] = [];
          if (!grouped[c.table_name].includes(c.record_id)) grouped[c.table_name].push(c.record_id);
        }
      });

      const recordsMap = {};
      for (const [table, ids] of Object.entries(grouped)) {
        if (ids.length > 0) {
          const { data } = await supabase.from(table).select('*').in('id', ids);
          if (data) data.forEach(item => recordsMap[item.id] = item);
        }
      }

      if (isMounted.current) {
        setOriginalRecords(recordsMap);
        if (pending.data) setPendingChanges(pending.data);
        if (approved.data) setApprovedChanges(approved.data);
        if (history.data) setHistoryChanges(history.data);
        if (escalated.data) setEscalatedChanges(escalated.data);
      }
    } catch (e) {
      console.error("Erreur loadChanges:", e);
      if (isMounted.current) showInAppNotification("Erreur lors de la lecture des archives.", "error");
    } finally {
      if (isMounted.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
        const role = data?.role;
        if (isMounted.current) setMyRole(role);

        if (isAdmin(role)) {
          await Promise.all([loadChanges(), loadDictionaries()]);
        } else {
          if (isMounted.current) setLoading(false);
        }
      } catch (e) {
        console.error(e);
        if (isMounted.current) setLoading(false);
      }
    };
    init();
  }, [session.user.id, loadChanges, loadDictionaries]);

  // ======================================================================
  // 🧠 MÉMOÏSATION DES ACTIONS POUR ÉVITER LE RE-RENDER DES CARTES
  // ======================================================================

  const executeApprove = useCallback(async (change, seal = false) => {
    setConfirmState(prev => ({ ...prev, isOpen: false }));
    try {
      showInAppNotification("Altération de la trame en cours via Edge Function...", "info");

      // ✨ L'APPEL ONE-CLICK : Validation, exécution et archivage simultanés !
      const { data, error } = await supabase.functions.invoke('apply-encyclopedia-change', {
        body: { requestId: change.id, sealRequested: seal }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      // ✨ LE VACCIN ANTI-F5 : On purge le cache local et on recharge le Cerveau
      invalidateAllCaches();
      const core = await loadCoreGameData();
      if (core) {
        const heavy = await loadHeavyLoreData(core);
        if (heavy) setGameData(heavy);
      }
      
      loadChanges();
      showInAppNotification("L'archive a été validée et intégrée avec succès !", "success");

    } catch (error) {
      console.error("Erreur Edge Function :", error);
      showInAppNotification("La magie a échoué ! Escalade au Super Architecte en cours...", "error");
      
      // On bascule le ticket en escalade
      await supabase.from('data_change_requests').update({
        status: 'escalated',
        rejection_reason: error.message || error.toString()
      }).eq('id', change.id);
      
      await notifyEscalation(change, error.message, session.user.id);
      loadChanges();
    }
  }, [session.user.id, loadChanges, setGameData]);

  const handleApproveClick = useCallback((change, seal = false) => {
    const isSelfApproval = change.user_id === session.user.id;
    let msg = seal ? "🛡️ Voulez-vous vraiment valider et SCELLER DÉFINITIVEMENT cet élément ?" : "Valider cette modification et générer l'ordre SQL ?";
    if (isSelfApproval) {
      msg = "Vous vous apprêtez à valider votre propre proposition. Êtes-vous réellement pressé, ou ne préféreriez-vous pas qu'un autre Gardien relise votre requête pour avoir un second coup d'œil averti ?\n\n" + msg;
    }
    setConfirmState({
      isOpen: true,
      title: seal ? "Apposer le Sceau" : "Valider la proposition",
      message: msg,
      confirmText: seal ? "Je suis pressé, valider" : "Générer SQL",
      action: () => executeApprove(change, seal)
    });
  }, [session.user.id, executeApprove]);

  const handleRestore = useCallback(async (changeId) => {
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'pending' }).eq('id', changeId);
    if (!error) loadChanges();
  }, [loadChanges]);

  const handleRejectClick = useCallback((change) => {
    setRejectState({ isOpen: true, change: change, reason: '' });
  }, []);

  // ✨ L'ARCHITECTURE ULTIME : useCallback avec Ref pour des dépendances parfaitement stables !
  const executeReject = useCallback(async () => {
    const { reason, change: targetChange } = rejectStateRef.current;

    if (!reason.trim()) {
      showInAppNotification("Les Gardiens doivent justifier leur refus !", "warning");
      return;
    }
    setConfirmState(prev => ({ ...prev, isOpen: false }));

    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ status: 'rejected', rejection_reason: reason })
      .eq('id', targetChange.id);

    if (!error) {
      try {
        const { data: ticketData, error: ticketError } = await supabase
          .from('support_tickets')
          .insert([{ user_id: targetChange.user_id, sujet: `Décision du Conseil : ${targetChange.record_name || 'Proposition'}` }])
          .select().single();
          
        if (ticketError) throw ticketError;

        if (ticketData) {
          const { error: msgError } = await supabase
            .from('support_messages')
            .insert([{ ticket_id: ticketData.id, user_id: session.user.id, message: `Salutations Héritier.\n\nVotre proposition a été examinée avec soin par le Conseil des Gardiens, mais n'a pas pu être retenue en l'état.\n\nMotif du Gardien :\n"${reason}"\n\nN'hésitez pas à corriger votre archive et à nous la soumettre à nouveau !`, is_admin: true }]);
            
          if (msgError) throw msgError;
        }
        showInAppNotification("La proposition a été rejetée et une missive pneumatique expédiée !", "success");
      } catch (missiveError) {
        console.error("Erreur d'envoi de la missive pneumatique :", missiveError);
        showInAppNotification("Proposition rejetée, mais le Télégraphe a échoué à prévenir l'Héritier.", "warning");
      }

      setRejectState({ isOpen: false, change: null, reason: '' });
      loadChanges();
    } else {
      console.error("Erreur fatale de rejet :", error);
      showInAppNotification("Le sortilège a échoué : " + error.message, "error");
    }
  }, [session.user.id, loadChanges]); // 👈 DÉPENDANCES STABLES !

  // ✨ On mémoïse les Props pour nos composants React.memo
  const cardContext = useMemo(() => ({
    originalRecords,
    referenceNames,
    myRole,
    currentUserId: session.user.id,
    dbBadges: gameData?.badges || [] // ✨ NOUVEAU : On transmet les badges du Nuage
  }), [originalRecords, referenceNames, myRole, session.user.id, gameData?.badges]);

  const cardActions = useMemo(() => ({
    onReject: handleRejectClick,
    onApprove: handleApproveClick,
    onRestore: handleRestore
  }), [handleRejectClick, handleApproveClick, handleRestore]);

  if (loading) return <div className="p-8 text-center text-gray-500 font-serif animate-pulse">Ouverture du Conseil...</div>;

  if (!isAdmin(myRole)) {
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24 text-center">
        <Shield size={64} className="mx-auto text-red-400 mb-6 opacity-50" />
        <h2 className="text-3xl font-serif font-bold text-red-900 mb-4">Accès Restreint</h2>
        <p className="text-gray-600 mb-8">Seuls les Gardiens du Savoir peuvent statuer sur l'évolution de l'Encyclopédie.</p>
        <button onClick={onBack} className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-bold">Retour aux Archives</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors">
          <ArrowLeft size={18} /> Retour
        </button>
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2">
          <Shield className="text-amber-600" /> Conseil des Gardiens
        </h2>
      </div>

      <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
        <button onClick={() => setActiveTab('pending')} className={`pb-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'pending' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400 hover:text-gray-600'}`}>
          1. En attente ({pendingChanges.length})
        </button>
        <button onClick={() => setActiveTab('approved')} className={`pb-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'approved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
          3. Historique ({historyChanges.length})
        </button>
        {isSuperAdmin(myRole) && (
          <button onClick={() => setActiveTab('escalated')} className={`pb-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'escalated' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400 hover:text-gray-600'}`}>
            🚨 Escalades ({escalatedChanges.length})
          </button>
        )}
      </div>

      <div>
        {activeTab === 'pending' && (
          pendingChanges.length > 0 ? pendingChanges.map(c => 
            <ChangeCard key={c.id} change={c} context={cardContext} actions={cardActions} />
          ) : <p className="text-gray-500 italic p-6 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white/50">Aucune nouvelle proposition à valider.</p>
        )}
        {activeTab === 'approved' && (
          approvedChanges.length > 0 ? approvedChanges.map(c => 
            <ChangeCard key={c.id} change={c} context={cardContext} actions={cardActions} />
          ) : <p className="text-blue-500 italic p-6 text-center border-2 border-dashed border-blue-200 rounded-xl bg-blue-50/50">Aucun code SQL en attente d'exécution.</p>
        )}
        {activeTab === 'history' && (
          historyChanges.length > 0 ? historyChanges.map(c => 
            <ChangeCard key={c.id} change={c} context={cardContext} actions={cardActions} />
          ) : <p className="text-gray-500 italic p-6 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white/50">L'historique est vide.</p>
        )}
        {activeTab === 'escalated' && isSuperAdmin(myRole) && (
          escalatedChanges.length > 0 ? escalatedChanges.map(c => 
            <ChangeCard key={c.id} change={c} context={cardContext} actions={cardActions} />
          ) : <p className="text-red-500 italic p-6 text-center border-2 border-dashed border-red-200 rounded-xl bg-red-50/50">Aucune anomalie magique à traiter, Architecte !</p>
        )}
      </div>

      {/* Modale de REJET */}
      {rejectState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 animate-fade-in-up border-2 border-red-900/20">
            <h3 className="text-xl font-serif font-bold text-red-900 mb-4 flex items-center gap-2">
              <X size={24} /> Rejeter la proposition
            </h3>
            <p className="text-sm text-gray-600 mb-4">Expliquez à l'Héritier pourquoi sa proposition ne peut être intégrée aux archives :</p>
            <textarea
              value={rejectState.reason}
              onChange={(e) => setRejectState({...rejectState, reason: e.target.value})}
              className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none mb-6 resize-none"
              rows="4" placeholder="Ex: Cette capacité existe déjà..." autoFocus
            />
            <div className="flex justify-end gap-3">
              <button onClick={() => setRejectState({isOpen: false, change: null, reason: ''})} className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors">Annuler</button>
              <button onClick={executeReject} className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-md transition-colors">Confirmer le Rejet</button>
            </div>
          </div>
        </div>
      )}

      {/* Modale de CONFIRMATION */}
      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        onConfirm={confirmState.action}
        onCancel={() => setConfirmState(prev => ({ ...prev, isOpen: false }))}
        confirmText={confirmState.confirmText}
        cancelText="Finalement, non"
      />
    </div>
  );
}
