// src/components/ValidationsPendantes.js
// 8.23.0 // 8.26.0 // 8.29.0 // 8.32.0 // 8.33.0 
// 9.3.0 // 9.6.0 // 9.7.0 // 9.8.0
// 10.0.0 // 10.2.0 // 10.4.0 // 10.5.0 // 10.7.0
// 11.1.0 // 11.3.0 // 11.4.0
// 12.1.0 // 12.2.0 // 12.3.0 // 12.4.0
// 13.1.0 // 13.10.0
// 15.1.0

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Check, X, ArrowLeft, Shield, User, Plus, Minus, TestTubeDiagonal, ShieldAlert } from 'lucide-react';
import { supabase } from '../config/supabase';
import { invalidateAllCaches } from '../utils/supabaseGameData';
import ConfirmModal from './ConfirmModal';
import { generateApprovalSQL } from '../utils/sqlGenerator';
import { showInAppNotification } from '../utils/SystemeServices';

// ✨ NOUVEAU : On branche le Cerveau et le générateur d'icônes
import { useCharacter } from '../context/CharacterContext';
import * as LucideIcons from 'lucide-react';

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
// 🟠 LE COMPOSANT ENFANT ÉPURÉ ET MÉMOÏSÉ (React.memo)
// ======================================================================
const ChangeCard = React.memo(({ change, context, actions }) => {
  // ✨ FIX : On récupère dbBadges du contexte
  const { originalRecords, referenceNames, myRole, currentUserId, dbBadges } = context;
  const { onReject, onApprove, onArchive, onRestore } = actions;

  const pData = change.new_data || change.proposed_data || {};
  const standardFields = Object.keys(pData).filter(k => k !== '_relations' && k !== 'id');
  const hasStandardChanges = standardFields.length > 0;
  const hasRelations = pData._relations && Object.keys(pData._relations).length > 0;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-serif font-bold text-xl text-gray-800">Cible : {change.record_name || 'Inconnue'}</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide mt-1 font-bold">
            Table : {change.table_name} • Action : {change.new_data?.id ? 'Création 🌟' : 'Modification 📝'}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          change.status === 'pending' ? 'bg-amber-100 text-amber-800' :
          change.status === 'approved' ? 'bg-blue-100 text-blue-800' :
          change.status === 'archived' ? 'bg-green-100 text-green-800' :
          change.status === 'escalated' ? 'bg-red-900 text-red-100 animate-pulse shadow-md' :
          'bg-red-100 text-red-800'
        }`}>
          {change.status === 'pending' ? 'En attente' :
           change.status === 'approved' ? 'À Exécuter (SQL)' :
           change.status === 'archived' ? 'Archivé (Appliqué)' :
           change.status === 'escalated' ? '🚨 Escaladé (Erreur SQL)' :
           'Rejeté'}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <User size={16} className="text-gray-400" />
          <span className="text-sm font-bold text-gray-700">
            {change.profiles?.username || 'Héritier Anonyme'}
          </span>
		{change.profiles?.badges && change.profiles.badges.length > 0 && (
		  <div className="flex flex-wrap gap-1 border-l border-gray-200 pl-2 ml-1">
			{change.profiles.badges.map(badgeId => {
			  // ✨ FIX : Lecture pure depuis la base de données !
			  const badgeDef = dbBadges.find(b => b.id === badgeId);
			  if (!badgeDef) return null;
			  
			  const DynamicIcon = badgeDef.icon_name && LucideIcons[badgeDef.icon_name] ? LucideIcons[badgeDef.icon_name] : null;

			  return (
				<span key={badgeId} className={`inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full border ${badgeDef.color_classes} font-bold`} title={badgeDef.label}>
				  {DynamicIcon && <DynamicIcon size={10} />}
				  {badgeDef.label}
				</span>
			  );
			})}
		  </div>
		)}
		</div>
        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
          "{change.justification}"
        </p>
      </div>

      {/* DELTA VISUEL */}
      {(hasStandardChanges || hasRelations) && (
        <div className="mt-4 bg-slate-50 p-3 rounded-lg border border-slate-200 shadow-inner space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
            <TestTubeDiagonal size={14} /> Différences (Delta)
          </h4>

          {hasStandardChanges && (
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-700">
                {pData.id ? 'Contenu de la création :' : 'Champs textuels modifiés :'}
              </span>
              <ul className="mt-2 space-y-3">
                {standardFields.map(key => {
                  const isCreation = !!pData.id;
                  const originalItem = originalRecords[change.record_id] || {};
                  
                  const formatValue = (val) => {
                    if (val === undefined || val === null || val === '') return "— vide —";
                    if (typeof val === 'object') return JSON.stringify(val);
                    return String(val);
                  };

                  const displayNew = formatValue(pData[key]);
                  const displayOld = formatValue(originalItem[key]);

                  return (
                    <li key={key} className="text-sm">
                      {isCreation ? (
                        <div className="leading-relaxed">
                          <span className="font-mono bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-800 font-bold mr-2">
                            {key}
                          </span>
                          <span className="font-medium text-green-900 whitespace-pre-wrap">"{displayNew}"</span>
                        </div>
                      ) : (
                        <>
                          <span className="font-mono bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-blue-800 font-bold mb-2 inline-block">
                            {key}
                          </span>
                          <div className="grid grid-cols-2 gap-3 mt-1">
                            <div className="bg-green-50/50 border border-green-200 text-green-900 p-2 rounded">
                              <span className="block text-[9px] uppercase font-bold text-green-600 mb-1 tracking-wider">Proposition (Nouveau)</span>
                              <span className="font-medium whitespace-pre-wrap leading-relaxed">"{displayNew}"</span>
                            </div>
                            <div className="bg-red-50/50 border border-red-200 text-red-900 p-2 rounded">
                              <span className="block text-[9px] uppercase font-bold text-red-600 mb-1 tracking-wider">Actuel (Ancien)</span>
                              <span className="italic opacity-80 whitespace-pre-wrap leading-relaxed">"{displayOld}"</span>
                            </div>
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {hasRelations && (
            <div className="mt-4 border-t border-dashed border-gray-200 pt-4">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <TestTubeDiagonal size={14} />
                Relations modifiées :
              </span>
              <ul className="mt-2 space-y-2">
                {Object.keys(pData._relations).map((relName) => {
                  const relData = pData._relations[relName];
                  if (Array.isArray(relData)) {
                    return (
                      <li key={relName} className="text-sm p-2 bg-gray-50 rounded border border-gray-200">
                        <span className="font-bold capitalize">{relName} :</span> Mise à jour complète (Ancien format)
                      </li>
                    );
                  }

                  const added = relData.added || [];
                  const removed = relData.removed || [];
                  if (added.length === 0 && removed.length === 0) return null;

                  return (
                    <li key={relName} className="text-sm p-2 bg-gray-50 rounded border border-gray-200 flex flex-col gap-1">
                      <span className="font-bold capitalize text-slate-800 mb-1">{relName} :</span>
                      {added.length > 0 && (
                        <div className="text-green-700 flex items-start gap-2 bg-green-50/70 p-1.5 rounded">
                          <Plus size={14} className="mt-0.5 flex-shrink-0" />
                          <span><strong className="text-[10px] uppercase">Ajout :</strong> {added.map(id => referenceNames[id] || id).join(', ')}</span>
                        </div>
                      )}
                      {removed.length > 0 && (
                        <div className="text-red-700 flex items-start gap-2 mt-1 bg-red-50/70 p-1.5 rounded">
                          <Minus size={14} className="mt-0.5 flex-shrink-0" />
                          <span className="line-through"><strong className="text-[10px] uppercase">Retrait :</strong> {removed.map(id => referenceNames[id] || id).join(', ')}</span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* L'erreur SQL pour l'Admin avec affichage de l'incantation */}
      {change.status === 'escalated' && change.rejection_reason && (
        <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-600 rounded text-sm text-red-900 shadow-inner">
          <strong className="flex items-center gap-2 mb-1"><ShieldAlert size={16}/> Rapport d'Anomalie :</strong>
          <p className="font-mono mb-2">{change.rejection_reason}</p>
          
          {change.generated_sql && (
            <div className="mt-3 pt-3 border-t border-red-200">
              <strong className="text-[10px] uppercase font-bold text-red-800 tracking-wider block mb-1">
                Incantation SQL fautive :
              </strong>
              <pre className="bg-red-900/10 p-2 rounded-lg overflow-x-auto text-[11px] font-mono text-red-950 whitespace-pre-wrap border border-red-900/20">
                {change.generated_sql}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* BOUTONS D'ACTION AVEC MODALES */}
      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
        {change.status === 'pending' && (
          <>
            <button onClick={() => onReject(change)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <X size={18} /> Rejeter
            </button>
            <button onClick={() => onApprove(change, false)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm ml-auto">
              <Check size={18} /> Valider
            </button>
            <button onClick={() => onApprove(change, true)} className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white hover:bg-amber-800 font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(180,83,9,0.4)] border border-amber-900 group">
              <Shield size={18} className="text-amber-300 group-hover:scale-110 transition-transform" />
              Approuver & Sceller
            </button>
          </>
        )}
        {change.status === 'approved' && (
          <>
            <button onClick={() => onArchive(change)} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm animate-pulse ml-auto">
              <Check size={18} /> Exécuter le SQL (Archiver)
            </button>
            <button onClick={() => onRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <ArrowLeft size={16} /> Remettre en attente
            </button>
          </>
        )}
        {change.status === 'escalated' && myRole === 'super_admin' && (
          <>
            <button onClick={() => onArchive(change)} className="px-6 py-2 bg-red-800 text-white hover:bg-red-900 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm ml-auto">
              <TestTubeDiagonal size={18} /> Retenter le SQL
            </button>
            <button onClick={() => onReject(change)} className="px-4 py-2 bg-gray-100 text-red-600 hover:bg-red-50 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <X size={16} /> Rejeter définitivement
            </button>
            <button onClick={() => onRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <ArrowLeft size={16} /> Remettre en attente
            </button>
          </>
        )}
        {(change.status === 'archived' || change.status === 'rejected') && (
          <button onClick={() => onRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors ml-auto">
            <ArrowLeft size={16} /> Remettre en attente
          </button>
        )}
      </div>
    </div>
  );
});

// ======================================================================
// 🛡️ LE CONSEIL DES GARDIENS (Parent)
// ======================================================================
export default function ValidationsPendantes({ session, onBack }) {
  const { gameData } = useCharacter(); // ✨ LE CERVEAU

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

        if (role === 'gardien' || role === 'super_admin') {
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
      const sqlQuery = generateApprovalSQL(change, seal);
      if (!sqlQuery) throw new Error("Le générateur SQL n'a retourné aucune incantation valide.");

      const { error } = await supabase
        .from(TABLE_NAME)
        .update({ status: 'approved', generated_sql: sqlQuery })
        .eq('id', change.id);

      if (error) throw error;
      loadChanges();
    } catch (error) {
      showInAppNotification("Erreur lors de la validation : " + error.message, "error");
    }
  }, [loadChanges]);

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

  const executeArchive = useCallback(async (change) => {
    setConfirmState(prev => ({ ...prev, isOpen: false }));
    try {
      const cleanSQL = change.generated_sql.replaceAll('BEGIN;', '').replaceAll('COMMIT;', '').trim();
      const { error: sqlError } = await supabase.rpc('execute_dynamic_sql', { sql_query: cleanSQL });
      if (sqlError) throw sqlError;

      const { error: archiveError } = await supabase
        .from('data_change_requests')
        .update({ status: 'archived', approved_by: session.user.id, approved_at: new Date().toISOString() })
        .eq('id', change.id);

      if (archiveError) throw archiveError;

      invalidateAllCaches();
      loadChanges();
      showInAppNotification("L'incantation SQL a été exécutée et archivée avec succès !", "success");
    } catch (error) {
      console.error("Erreur lors de l'exécution SQL :", error);
      showInAppNotification("La magie a échoué ! Escalade au Super Architecte en cours...", "error");
      
      await supabase.from('data_change_requests').update({
        status: 'escalated',
        rejection_reason: error.message
      }).eq('id', change.id);

      await notifyEscalation(change, error.message, session.user.id);
      loadChanges();
    }
  }, [session.user.id, loadChanges]);

  const handleArchiveClick = useCallback((change) => {
    setConfirmState({
      isOpen: true,
      title: "Exécuter et Archiver",
      message: "Voulez-vous lancer l'incantation SQL directement dans la base de données ? Si une erreur survient, la proposition sera escaladée au Super Admin.",
      confirmText: "Oui, exécuter l'incantation",
      action: () => executeArchive(change)
    });
  }, [executeArchive]);

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
    onArchive: handleArchiveClick,
    onRestore: handleRestore
  }), [handleRejectClick, handleApproveClick, handleArchiveClick, handleRestore]);

  if (loading) return <div className="p-8 text-center text-gray-500 font-serif animate-pulse">Ouverture du Conseil...</div>;

  if (myRole !== 'gardien' && myRole !== 'super_admin') {
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
          2. À Exécuter ({approvedChanges.length})
        </button>
        <button onClick={() => setActiveTab('history')} className={`pb-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'history' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-400 hover:text-gray-600'}`}>
          3. Historique ({historyChanges.length})
        </button>
        {myRole === 'super_admin' && (
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
        {activeTab === 'escalated' && myRole === 'super_admin' && (
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
