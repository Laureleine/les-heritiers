// src/components/ValidationsPendantes.js
// 8.23.0 // 8.26.0 // 8.29.0 // 8.32.0 // 8.33.0 // 9.3.0 // 9.6.0 // 9.7.0 // 9.8.0

import React, { useState, useEffect } from 'react';
import { Check, X, ArrowLeft, Shield, Copy, User, TestTubeDiagonal, Bug, Bomb } from 'lucide-react';
import { supabase } from '../config/supabase';
import { invalidateAllCaches } from '../utils/supabaseGameData';
import { AVAILABLE_BADGES } from '../data/badges';
import ConfirmModal from './ConfirmModal'; // 👈 NOTRE NOUVELLE MODALE !

const TABLE_NAME = 'data_change_requests';

export default function ValidationsPendantes({ session, onBack }) {
  const [pendingChanges, setPendingChanges] = useState([]);
  const [approvedChanges, setApprovedChanges] = useState([]);
  const [historyChanges, setHistoryChanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [myRole, setMyRole] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // 🛡️ MÉMOIRE DE LA MODALE DE CONFIRMATION
  const [confirmState, setConfirmState] = useState({ 
    isOpen: false, 
    action: null, 
    title: '', 
    message: '', 
    confirmText: '' 
  });

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
      const role = data?.role;
      setMyRole(role);

      if (role === 'gardien' || role === 'super_admin') {
        loadChanges();
      } else {
        setLoading(false);
      }
    };
    init();
  }, [session.user.id]);

  const loadChanges = async () => {
    setLoading(true);
    const [pending, approved, history] = await Promise.all([
      supabase.from(TABLE_NAME).select('*, profiles(username, badges)').eq('status', 'pending').order('created_at', { ascending: false }),
      supabase.from(TABLE_NAME).select('*, profiles(username, badges)').eq('status', 'approved').order('created_at', { ascending: false }),
      supabase.from(TABLE_NAME).select('*, profiles(username, badges)').in('status', ['archived', 'rejected']).order('created_at', { ascending: false }).limit(50)
    ]);

    if (pending.data) setPendingChanges(pending.data);
    if (approved.data) setApprovedChanges(approved.data);
    if (history.data) setHistoryChanges(history.data);
    setLoading(false);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ======================================================================
  // 🛡️ PRÉPARATION DES MODALES (Les Clics)
  // ======================================================================

  const handleApproveClick = (change, seal = false) => {
    const msg = seal 
      ? "🛡️ Voulez-vous vraiment valider et SCELLER DÉFINITIVEMENT cet élément ?" 
      : "Valider cette modification et générer l'ordre SQL ?";

    setConfirmState({
      isOpen: true,
      title: seal ? "Apposer le Sceau" : "Valider la proposition",
      message: msg,
      confirmText: seal ? "Approuver et Sceller" : "Générer SQL",
      action: () => executeApprove(change, seal)
    });
  };

  const handleArchiveClick = (changeId) => {
    setConfirmState({
      isOpen: true,
      title: "Archiver la proposition",
      message: "Avez-vous bien exécuté ce code SQL dans Supabase ? L'application va se synchroniser automatiquement.",
      confirmText: "Oui, c'est exécuté",
      action: () => executeArchive(changeId)
    });
  };

  const handleRejectClick = (changeId) => {
    setConfirmState({
      isOpen: true,
      title: "Rejeter la proposition",
      message: "Voulez-vous rejeter définitivement cette proposition ?",
      confirmText: "Rejeter sans pitié",
      action: () => executeReject(changeId)
    });
  };

  const handleRestore = async (changeId) => {
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'pending' }).eq('id', changeId);
    if (!error) loadChanges();
  };

  // ======================================================================
  // ✨ EXÉCUTION DES ACTIONS (Après Confirmation)
  // ======================================================================

  const executeArchive = async (changeId) => {
    setConfirmState({ isOpen: false });
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'archived' }).eq('id', changeId);
    if (!error) {
      invalidateAllCaches(); 
      loadChanges();         
    }
  };

  const executeReject = async (changeId) => {
    setConfirmState({ isOpen: false });
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'rejected' }).eq('id', changeId);
    if (!error) loadChanges();
  };

  // LE CHIRURGIEN SQL (Générateur)
  const executeApprove = async (change, seal = false) => {
    setConfirmState({ isOpen: false });

    try {
      const proposedData = change.new_data || change.proposed_data || {};
      const { _relations, competencesPredilection, competencesFutilesPredilection, competencesUtiles, ...mainData } = proposedData;
      const isInsert = !!mainData.id;
      const targetId = isInsert ? mainData.id : change.record_id;

      let sqlQuery = `-- Action pour ${change.record_name} (${change.table_name})\nBEGIN;\n\n`;

      if (Object.keys(mainData).length > 0) {
        if (isInsert) {
          const columns = Object.keys(mainData).join(', ');
          const values = Object.values(mainData).map(value => {
            if (value === null) return 'NULL';
            if (typeof value === 'object') return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
            if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
            return value;
          }).join(', ');
          sqlQuery += `INSERT INTO public.${change.table_name} (${columns}) VALUES (${values});\n`;
        } else {
          const setClauses = Object.entries(mainData).map(([key, value]) => {
            if (value === null) return `${key} = NULL`;
            if (typeof value === 'object') return `${key} = '${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
            if (typeof value === 'string') return `${key} = '${value.replace(/'/g, "''")}'`;
            return `${key} = ${value}`;
          }).join(',\n  ');
          sqlQuery += `UPDATE public.${change.table_name}\nSET ${setClauses}\nWHERE id = '${targetId}';\n`;
        }
      }

      if (_relations) {
        // ... Fées -> Relations sortantes ...
        if (_relations.capacites) {
          sqlQuery += `\nDELETE FROM public.fairy_type_capacites WHERE fairy_type_id = '${targetId}';\n`;
          if (_relations.capacites.length > 0) {
            const inserts = _relations.capacites.map(c => `('${targetId}', '${c.id}', '${c.type}')`).join(', ');
            sqlQuery += `INSERT INTO public.fairy_type_capacites (fairy_type_id, capacite_id, capacite_type) VALUES ${inserts};\n`;
          }
        }

        if (_relations.pouvoirs) {
          sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE fairy_type_id = '${targetId}';\n`;
          if (_relations.pouvoirs.length > 0) {
            const inserts = _relations.pouvoirs.map(id => `('${targetId}', '${id}')`).join(', ');
            sqlQuery += `INSERT INTO public.fairy_type_powers (fairy_type_id, power_id) VALUES ${inserts};\n`;
          }
        }

        if (_relations.atouts) {
          sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE fairy_type_id = '${targetId}';\n`;
          if (_relations.atouts.length > 0) {
            const inserts = _relations.atouts.map(id => `('${targetId}', '${id}')`).join(', ');
            sqlQuery += `INSERT INTO public.fairy_type_assets (fairy_type_id, asset_id) VALUES ${inserts};\n`;
          }
        }

        if (_relations.competencesUtiles !== undefined) {
          sqlQuery += `\nDELETE FROM public.fairy_competences_predilection WHERE fairy_type_id = '${targetId}';\n`;
          try {
            const utilesList = typeof _relations.competencesUtiles === 'string' ? JSON.parse(_relations.competencesUtiles) : _relations.competencesUtiles;
            if (utilesList && utilesList.length > 0) {
              const utilesInserts = utilesList.map(comp => {
                const isChoice = comp.isChoix ? 'true' : 'false';
                const isSpecChoice = comp.isSpecialiteChoix ? 'true' : 'false';
                const compQuery = comp.nom ? `(SELECT id FROM public.competences WHERE name = '${comp.nom.replace(/'/g, "''")}' LIMIT 1)` : 'null';
                const specialite = comp.specialite ? `'${comp.specialite.replace(/'/g, "''")}'` : 'null';
                let choiceIds = 'null';
                let choiceOptions = 'null';

                if (comp.isChoix && comp.options && comp.options.length > 0) {
                  const namesList = comp.options.map(o => `'${o.replace(/'/g, "''")}'`).join(', ');
                  choiceIds = `ARRAY(SELECT id FROM public.competences WHERE name IN (${namesList}))::uuid[]`;
                } else if (comp.isSpecialiteChoix && comp.options && comp.options.length > 0) {
                  choiceOptions = `'${JSON.stringify(comp.options).replace(/'/g, "''")}'::jsonb`;
                }

                return `('${targetId}', ${compQuery}, ${specialite}, ${isChoice}, ${isSpecChoice}, ${choiceIds}, ${choiceOptions})`;
              }).join(',\n  ');
              sqlQuery += `INSERT INTO public.fairy_competences_predilection (fairy_type_id, competence_id, specialite, is_choice, is_specialite_choice, choice_ids, choice_options) VALUES \n  ${utilesInserts};\n`;
            }
          } catch (e) {
            sqlQuery += `-- ERREUR PARSING JSON: ${e.message}\n`;
          }
        }

        if (_relations.competencesFutiles !== undefined) {
          sqlQuery += `\nDELETE FROM public.fairy_competences_futiles_predilection WHERE fairy_type_id = '${targetId}';\n`;
          if (_relations.competencesFutiles.length > 0) {
            const futInserts = _relations.competencesFutiles.map(fut => {
              const isChoice = fut.is_choice ? 'true' : 'false';
              const compQuery = fut.competence_futile_id ? `'${fut.competence_futile_id}'` : 'null';
              const choiceOptions = fut.choice_options ? `'${JSON.stringify(fut.choice_options).replace(/'/g, "''")}'::jsonb` : 'null';
              return `('${targetId}', ${compQuery}, ${isChoice}, ${choiceOptions})`;
            }).join(',\n  ');
            sqlQuery += `INSERT INTO public.fairy_competences_futiles_predilection (fairy_type_id, competence_futile_id, is_choice, choice_options) VALUES \n  ${futInserts};\n`;
          }
        }

        // 🔗 NOUVEAU : GESTION DES RELATIONS INVERSÉES (Lier à une Fée)
        if (_relations.fairyIds !== undefined) {
          if (change.table_name === 'fairy_capacites') {
            sqlQuery += `\nDELETE FROM public.fairy_type_capacites WHERE capacite_id = '${targetId}';\n`;
            if (_relations.fairyIds.length > 0) {
              const inserts = _relations.fairyIds.map(fId => `('${fId}', '${targetId}', 'choix')`).join(', ');
              sqlQuery += `INSERT INTO public.fairy_type_capacites (fairy_type_id, capacite_id, capacite_type) VALUES ${inserts};\n`;
            }
          }

          if (change.table_name === 'fairy_powers') {
            sqlQuery += `\nDELETE FROM public.fairy_type_powers WHERE power_id = '${targetId}';\n`;
            if (_relations.fairyIds.length > 0) {
              const inserts = _relations.fairyIds.map(fId => `('${fId}', '${targetId}')`).join(', ');
              sqlQuery += `INSERT INTO public.fairy_type_powers (fairy_type_id, power_id) VALUES ${inserts};\n`;
            }
          }

          if (change.table_name === 'fairy_assets') {
            sqlQuery += `\nDELETE FROM public.fairy_type_assets WHERE asset_id = '${targetId}';\n`;
            if (_relations.fairyIds.length > 0) {
              const inserts = _relations.fairyIds.map(fId => `('${fId}', '${targetId}')`).join(', ');
              sqlQuery += `INSERT INTO public.fairy_type_assets (fairy_type_id, asset_id) VALUES ${inserts};\n`;
            }
          }
        }
      }

      // 🛡️ Scellage de l'élément si demandé par le Conseil
      if (seal) {
        sqlQuery += `\n-- 🛡️ Scellage de l'élément par les Gardiens\nUPDATE public.${change.table_name} SET is_sealed = true WHERE id = '${targetId}';\n`;
      }

      sqlQuery += `\nCOMMIT;`;

      const { error } = await supabase
        .from(TABLE_NAME)
        .update({ status: 'approved', generated_sql: sqlQuery })
        .eq('id', change.id);

      if (error) throw error;
      
      loadChanges();

    } catch (error) {
      alert("Erreur lors de la validation : " + error.message);
    }
  };

  // ======================================================================
  // 🎨 AFFICHAGE (Rendu des propositions)
  // ======================================================================

  const renderChange = (change) => (
    <div key={change.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
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
          change.status === 'archived' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {change.status === 'pending' ? 'En attente' :
           change.status === 'approved' ? 'À Exécuter (SQL)' :
           change.status === 'archived' ? 'Archivé (Appliqué)' : 'Rejeté'}
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
                const badgeDef = AVAILABLE_BADGES?.find(b => b.id === badgeId);
                if (!badgeDef) return null;
                return (
                  <span key={badgeId} className={`inline-flex items-center text-[10px] px-2 py-0.5 rounded-full border font-bold ${badgeDef.color}`}>
                    {badgeDef.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute top-0 left-4 -mt-2 w-4 h-4 bg-gray-50 border-t border-l border-gray-100 transform rotate-45"></div>
          <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg border border-gray-100 relative z-10 shadow-sm">
            "{change.justification}"
          </p>
        </div>
      </div>

      {change.status === 'approved' && change.generated_sql && (
        <div className="mt-4 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg overflow-x-auto relative group">
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => copyToClipboard(change.generated_sql, change.id)}
              className={`px-3 py-1 rounded text-xs font-bold flex items-center gap-1 transition-colors ${
                copiedId === change.id ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {copiedId === change.id ? <><Check size={14} /> Copié !</> : <><Copy size={14} /> Copier</>}
            </button>
          </div>
          {change.generated_sql}
        </div>
      )}

      {/* BOUTONS D'ACTION AVEC MODALES */}
      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
        
        {change.status === 'pending' && (
          <>
            <button onClick={() => handleRejectClick(change.id)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <X size={18} /> Rejeter
            </button>
            <button onClick={() => handleApproveClick(change, false)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm ml-auto">
              <Check size={18} /> Valider
            </button>
            <button onClick={() => handleApproveClick(change, true)} className="flex items-center gap-2 px-4 py-2 bg-amber-700 text-white hover:bg-amber-800 font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(180,83,9,0.4)] border border-amber-900 group">
              <Shield size={18} className="text-amber-300 group-hover:scale-110 transition-transform" /> 
              Approuver & Sceller
            </button>
          </>
        )}

        {change.status === 'approved' && (
          <>
            <button onClick={() => handleArchiveClick(change.id)} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm animate-pulse ml-auto">
              <Check size={18} /> J'ai exécuté le SQL (Archiver)
            </button>
            <button onClick={() => handleRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <ArrowLeft size={16} /> Remettre en attente
            </button>
          </>
        )}

        {(change.status === 'archived' || change.status === 'rejected') && (
          <button onClick={() => handleRestore(change.id)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-bold flex items-center gap-2 transition-colors ml-auto">
            <ArrowLeft size={16} /> Remettre en attente
          </button>
        )}
      </div>
    </div>
  );

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
      </div>

      <div>
        {activeTab === 'pending' && (
          pendingChanges.length > 0 ? pendingChanges.map(c => renderChange(c)) :
          <p className="text-gray-500 italic p-6 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white/50">Aucune nouvelle proposition à valider.</p>
        )}

        {activeTab === 'approved' && (
          approvedChanges.length > 0 ? approvedChanges.map(c => renderChange(c)) :
          <p className="text-blue-500 italic p-6 text-center border-2 border-dashed border-blue-200 rounded-xl bg-blue-50/50">Aucun code SQL en attente d'exécution.</p>
        )}

        {activeTab === 'history' && (
          historyChanges.length > 0 ? historyChanges.map(c => renderChange(c)) :
          <p className="text-gray-500 italic p-6 text-center border-2 border-dashed border-gray-200 rounded-xl bg-white/50">L'historique est vide.</p>
        )}
      </div>

      {/* ✨ LA MODALE DE CONFIRMATION DES GARDIENS */}
      <ConfirmModal 
        isOpen={confirmState.isOpen}
        title={confirmState.title}
        message={confirmState.message}
        onConfirm={confirmState.action}
        onCancel={() => setConfirmState({ isOpen: false })}
        confirmText={confirmState.confirmText}
        cancelText="Finalement, non"
      />
    </div>
  );
}