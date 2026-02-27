// src/components/ValidationsPendantes.js
// 8.23.0 // 8.26.0 // 8.29.0

import React, { useState, useEffect } from 'react';
import { Check, X, ArrowLeft, Shield, Copy, User, TestTubeDiagonal, Bug, Bomb } from 'lucide-react';
import { supabase } from '../config/supabase';
import { invalidateAllCaches } from '../utils/supabaseGameData';

const TABLE_NAME = 'data_change_requests';

// 🏆 LE CATALOGUE DES BADGES (Identique à l'Admin)
const AVAILABLE_BADGES = [
  { id: 'beta', label: 'Bêta-Testeur 🐛', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { id: 'lore', label: 'Archiviste 📚', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { id: 'creator', label: 'Créateur ✨', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { id: 'vip', label: 'VIP 💎', color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { id: 'crash', label: <span className="flex items-center gap-1"><TestTubeDiagonal size={12}/><Bug size={12}/><Bomb size={12}/> Crash Testeuse</span>, color: 'bg-stone-900 text-red-400 border-stone-700 shadow-md animate-pulse' }  
];

export default function ValidationsPendantes({ session, onBack }) {
  const [pendingChanges, setPendingChanges] = useState([]);
  const [approvedChanges, setApprovedChanges] = useState([]); 
  const [historyChanges, setHistoryChanges] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [myRole, setMyRole] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [activeTab, setActiveTab] = useState('pending');

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
    // 👈 NOUVEAU : On demande à Supabase de joindre les infos du profil (username et badges) !
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

  // ----------------------------------------------------------------------
  // LE CHIRURGIEN SQL (Générateur)
  // ----------------------------------------------------------------------
  const handleApprove = async (change) => {
    if (!window.confirm("Valider cette modification et générer l'ordre SQL ?")) return;

    try {
      const proposedData = change.new_data || change.proposed_data || {};
	  // 🛡️ SÉCURITÉ ANTI-FANTÔMES : On filtre les vieilles colonnes supprimées pour qu'elles ne génèrent plus d'erreur SQL
	  const { _relations, competencesPredilection, competencesFutilesPredilection, competencesUtiles, ...mainData } = proposedData;

      const isInsert = !!mainData.id;
      const targetId = isInsert ? mainData.id : change.record_id;

      let sqlQuery = `-- Action pour ${change.record_name} (${change.table_name})\nBEGIN;\n\n`;

      if (Object.keys(mainData).length > 0) {
        if (isInsert) {
          const columns = Object.keys(mainData).join(', ');
          const values = Object.values(mainData).map(value => {
            if (typeof value === 'string') return `'${value.replace(/'/g, "''")}'`;
            if (Array.isArray(value)) {
               const elements = value.map(v => `'${String(v).replace(/'/g, "''")}'`).join(', ');
               return `ARRAY[${elements}]::text[]`;
            }
            if (typeof value === 'object' && value !== null) return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
            return value;
          }).join(', ');
          sqlQuery += `INSERT INTO public.${change.table_name} (${columns}) VALUES (${values});\n`;
        } else {
          const setClauses = Object.entries(mainData).map(([key, value]) => {
            if (typeof value === 'string') return `${key} = '${value.replace(/'/g, "''")}'`;
            if (Array.isArray(value)) {
              const elements = value.map(v => `'${String(v).replace(/'/g, "''")}'`).join(', ');
              return `${key} = ARRAY[${elements}]::text[]`;
            }
            if (typeof value === 'object' && value !== null) return `${key} = '${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
            return `${key} = ${value}`;
          }).join(',\n  ');
          sqlQuery += `UPDATE public.${change.table_name}\nSET ${setClauses}\nWHERE id = '${targetId}';\n`;
        }
      }

      if (_relations) {
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
            const utilesList = JSON.parse(_relations.competencesUtiles);
            if (utilesList && utilesList.length > 0) {
              const utilesInserts = utilesList.map(comp => {
                const isChoice = comp.isChoix ? 'true' : 'false';
                const isSpecChoice = comp.isSpecialiteChoix ? 'true' : 'false';
                
                // Sous-requête magique pour trouver l'ID de la compétence à partir de son nom
                const compQuery = comp.nom ? `(SELECT id FROM public.competences WHERE name = '${comp.nom.replace(/'/g, "''")}' LIMIT 1)` : 'null';
                
                const specialite = comp.specialite ? `'${comp.specialite.replace(/'/g, "''")}'` : 'null';
                const choiceOptions = comp.options && comp.options.length > 0 ? `'${JSON.stringify(comp.options).replace(/'/g, "''")}'::jsonb` : 'null';

                return `('${targetId}', ${compQuery}, ${specialite}, ${isChoice}, ${isSpecChoice}, ${choiceOptions})`;
              }).join(',\n  ');

              sqlQuery += `INSERT INTO public.fairy_competences_predilection (fairy_type_id, competence_id, specialite, is_choice, is_specialite_choice, choice_options) VALUES \n  ${utilesInserts};\n`;
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
              const compId = fut.competence_futile_id ? `'${fut.competence_futile_id}'` : 'null';
              const choiceOptions = fut.choice_options ? `'${JSON.stringify(fut.choice_options).replace(/'/g, "''")}'::jsonb` : 'null';
              return `('${targetId}', ${compId}, ${isChoice}, ${choiceOptions})`;
            }).join(',\n  ');
            sqlQuery += `INSERT INTO public.fairy_competences_futiles_predilection (fairy_type_id, competence_futile_id, is_choice, choice_options) VALUES ${futInserts};\n`;
          }
        }
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

  const handleArchive = async (changeId) => {
    if (!window.confirm("Avez-vous bien exécuté ce code SQL dans Supabase ? L'application va se synchroniser automatiquement.")) return;
    
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'archived' }).eq('id', changeId);
    
    if (!error) {
      invalidateAllCaches(); // 1. On purge la mémoire temporaire
      window.location.reload(); // 2. On force l'application à se rafraîchir d'un coup !
    }
  };

  const handleReject = async (changeId) => {
    if (!window.confirm("Rejeter définitivement cette proposition ?")) return;
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'rejected' }).eq('id', changeId);
    if (!error) loadChanges();
  };

  const handleRestore = async (changeId) => {
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'pending', generated_sql: null }).eq('id', changeId);
    if (!error) loadChanges();
  };

  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ----------------------------------------------------------------------
  // RENDU UI
  // ----------------------------------------------------------------------
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

      {/* 🌟 NOUVEAU : AFFICHAGE DU PROFIL DU JOUEUR ET SES BADGES */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <User size={16} className="text-gray-400" />
          <span className="text-sm font-bold text-gray-700">
            {change.profiles?.username || 'Héritier Anonyme'}
          </span>
          
          {change.profiles?.badges && change.profiles.badges.length > 0 && (
            <div className="flex flex-wrap gap-1 border-l border-gray-200 pl-2 ml-1">
              {change.profiles.badges.map(badgeId => {
                const badgeDef = AVAILABLE_BADGES.find(b => b.id === badgeId);
                if (!badgeDef) return null;
                return (
                  <span key={badgeId} className={`inline-flex items-center text-[10px] px-2 py-0.5 rounded-full border font-bold shadow-sm ${badgeDef.color}`}>
                    {badgeDef.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        
        {/* LA JUSTIFICATION (La Bulle de dialogue) */}
        <div className="relative">
          <div className="absolute top-0 left-4 -mt-2 w-4 h-4 bg-gray-50 border-t border-l border-gray-100 transform rotate-45"></div>
          <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg border border-gray-100 relative z-10 shadow-sm">
            "{change.justification}"
          </p>
        </div>
      </div>

      {change.status === 'approved' && change.generated_sql && (
        <div className="mt-4 bg-stone-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre-wrap relative shadow-inner">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => copyToClipboard(change.id, change.generated_sql)}
              className={`px-3 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                copiedId === change.id ? 'bg-green-600 text-white' : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
              }`}
            >
              {copiedId === change.id ? <><Check size={14} /> Copié !</> : <><Copy size={14} /> Copier</>}
            </button>
          </div>
          {change.generated_sql}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
        {change.status === 'pending' && (
          <>
            <button onClick={() => handleReject(change.id)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <X size={18} /> Rejeter
            </button>
            <button onClick={() => handleApprove(change)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm ml-auto">
              <Check size={18} /> Valider & Générer SQL
            </button>
          </>
        )}

        {change.status === 'approved' && (
          <>
            <button onClick={() => handleArchive(change.id)} className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm animate-pulse ml-auto">
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
        <button onClick={onBack} className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold">Retour à l'encyclopédie</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-amber-700 font-serif mb-6 transition-colors">
        <ArrowLeft size={18} /> Retour
      </button>

      <div className="mb-6 flex justify-between items-center">
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
    </div>
  );
}