// src/components/ValidationsPendantes.js
import React, { useState, useEffect } from 'react';
import { Check, X, AlertTriangle, Clock, ArrowLeft, Shield } from 'lucide-react';
import { supabase } from '../config/supabase';

export default function ValidationsPendantes({ session, onBack }) {
  const [pendingChanges, setPendingChanges] = useState([]);
  const [historyChanges, setHistoryChanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [myRole, setMyRole] = useState(null);

  // Nom de la table utilisé (modifiez si vous utilisez encore dca_data_change_requests)
  const TABLE_NAME = 'data_change_requests';

  useEffect(() => {
    const init = async () => {
      // 1. Vérification du rôle
      const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
      const role = data?.role || 'user';
      setMyRole(role);

      // 2. Si autorisé, on charge les requêtes
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
    const [pending, history] = await Promise.all([
      supabase.from(TABLE_NAME).select('*').eq('status', 'pending').order('created_at', { ascending: false }),
      supabase.from(TABLE_NAME).select('*').in('status', ['approved', 'rejected']).order('created_at', { ascending: false }).limit(50)
    ]);

    if (pending.data) setPendingChanges(pending.data);
    if (history.data) setHistoryChanges(history.data);
    setLoading(false);
  };

  const handleApprove = async (change) => {
    if (!window.confirm("Valider cette modification et générer l'ordre SQL (sans l'exécuter) ?")) return;

    try {
      // 1. On sépare les données principales des relations (notre "bouclier")
      const { _relations, ...mainData } = change.new_data;

      // 2. Génération dynamique des clauses SET pour le SQL
      const setClauses = Object.entries(mainData).map(([key, value]) => {
        if (typeof value === 'string') return `${key} = '${value.replace(/'/g, "''")}'`;
        if (Array.isArray(value) || typeof value === 'object') return `${key} = '${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
        return `${key} = ${value}`;
      }).join(',\n  ');

      // 3. Construction de la requête principale
      let sqlQuery = `UPDATE public.${change.table_name}\nSET\n  ${setClauses}\nWHERE id = '${change.record_id}';`;

      // 4. Ajout de notes en commentaire
      if (_relations && Object.keys(_relations).length > 0) {
        sqlQuery += `\n\n-- ⚠️ RELATIONS COMPLEXES (À traiter manuellement via les tables de jointure) :`;
        if (_relations.capacites?.length) sqlQuery += `\n-- Capacités (fairy_type_capacites) : ${JSON.stringify(_relations.capacites)}`;
        if (_relations.pouvoirs?.length) sqlQuery += `\n-- Pouvoirs (fairy_type_powers) : ${JSON.stringify(_relations.pouvoirs)}`;
      }

      // 5. Sauvegarde de la requête SQL dans la proposition
      const { error } = await supabase
        .from(TABLE_NAME)
        .update({ 
          status: 'approved',
          generated_sql: sqlQuery 
        })
        .eq('id', change.id);

      if (error) throw error;

      alert('✓ Proposition validée et ordre SQL généré avec succès !');
      loadChanges();

    } catch (error) {
      alert("Erreur lors de la validation : " + error.message);
    }
  };

  const handleReject = async (changeId) => {
    if (!window.confirm("Rejeter cette proposition ?")) return;
    const { error } = await supabase.from(TABLE_NAME).update({ status: 'rejected' }).eq('id', changeId);
    if (!error) loadChanges();
  };

  const handleResetPending = async (changeId) => {
    if (!window.confirm("Repasser cette proposition en attente ?")) return;
    const { error } = await supabase
      .from(TABLE_NAME)
      .update({ status: 'pending', generated_sql: null })
      .eq('id', changeId);
    if (!error) loadChanges();
  };

  // 🧹 SCRIPT TEMPORAIRE DE MIGRATION VERS LE "DIFF"
  const handleRetroactiveDiff = async () => {
    if (!window.confirm("Lancer le nettoyage rétroactif de toutes les propositions en attente ?")) return;

    try {
      const { data: requests, error: fetchError } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .eq('status', 'pending');

      if (fetchError) throw fetchError;

      let updatedCount = 0;
      let rejectedCount = 0;

      for (const req of requests) {
        const { data: originalItem } = await supabase
          .from(req.table_name)
          .select('*, fairy_capacites(id), fairy_powers(id)')
          .eq('id', req.record_id)
          .single();

        if (!originalItem) continue;

        const proposal = req.new_data;
        const surgicalData = {};
        const arraysEqual = (a, b) => JSON.stringify(Array.isArray(a) && a.length > 0 ? a : []) === JSON.stringify(Array.isArray(b) && b.length > 0 ? b : []);

        if (req.table_name === 'fairy_types') {
          const newTraits = proposal.traits ? proposal.traits.split(',').map(t => t.trim()).filter(Boolean) : [];
          const newAvantages = proposal.avantages ? proposal.avantages.split('\n').map(a => a.trim()).filter(Boolean) : [];
          const newDesavantages = proposal.desavantages ? proposal.desavantages.split('\n').map(d => d.trim()).filter(Boolean) : [];

          if (proposal.description !== originalItem.description && proposal.description !== undefined) surgicalData.description = proposal.description;
          if (proposal.taille !== (originalItem.taille_categorie || 'Moyenne') && proposal.taille !== undefined) surgicalData.taille_categorie = proposal.taille;
          if (proposal.allowedGenders && !arraysEqual(proposal.allowedGenders, originalItem.allowed_genders)) surgicalData.allowed_genders = proposal.allowedGenders;
          if (proposal.traits !== undefined && !arraysEqual(newTraits, originalItem.traits)) surgicalData.traits = newTraits;
          if (proposal.avantages !== undefined && !arraysEqual(newAvantages, originalItem.avantages)) surgicalData.avantages = newAvantages;
          if (proposal.desavantages !== undefined && !arraysEqual(newDesavantages, originalItem.desavantages)) surgicalData.desavantages = newDesavantages;

          const stats = [
            { sql: 'agilite', ui: 'agilite' }, { sql: 'constitution', ui: 'constitution' },
            { sql: 'force', ui: 'force' }, { sql: 'precision', ui: 'precision' },
            { sql: 'esprit', ui: 'esprit' }, { sql: 'perception', ui: 'perception' },
            { sql: 'prestance', ui: 'prestance' }, { sql: 'sang_froid', ui: 'sangFroid' }
          ];

          stats.forEach(stat => {
            const newMin = proposal.caracteristiques?.[stat.ui]?.min || 1;
            const newMax = proposal.caracteristiques?.[stat.ui]?.max || 6;
            if (newMin !== (originalItem[`${stat.sql}_min`] || 1)) surgicalData[`${stat.sql}_min`] = newMin;
            if (newMax !== (originalItem[`${stat.sql}_max`] || 6)) surgicalData[`${stat.sql}_max`] = newMax;
          });

          const oldCapacites = (originalItem.fairy_capacites || []).map(c => c.id).sort();
          const newCapacites = [...(proposal.capacitesIds || [])].sort();
          const oldPouvoirs = (originalItem.fairy_powers || []).map(p => p.id).sort();
          const newPouvoirs = [...(proposal.pouvoirsIds || [])].sort();

          const changedRelations = {};
          if (proposal.capacitesIds && !arraysEqual(newCapacites, oldCapacites)) changedRelations.capacites = newCapacites;
          if (proposal.pouvoirsIds && !arraysEqual(newPouvoirs, oldPouvoirs)) changedRelations.pouvoirs = newPouvoirs;

          if (Object.keys(changedRelations).length > 0) surgicalData._relations = changedRelations;

        } else {
          if (proposal.description !== (originalItem.description || originalItem.desc || '')) {
            surgicalData.description = proposal.description;
          }
        }

        if (Object.keys(surgicalData).length > 0) {
          await supabase.from(TABLE_NAME).update({ new_data: surgicalData }).eq('id', req.id);
          updatedCount++;
        } else {
          await supabase.from(TABLE_NAME).update({ status: 'rejected', justification: '(Rejet Automatique) Aucune différence avec l\'existant.' }).eq('id', req.id);
          rejectedCount++;
        }
      }

      alert(`Nettoyage terminé ! \n- ${updatedCount} propositions allégées.\n- ${rejectedCount} propositions fantômes rejetées.`);
      loadChanges();
    } catch (error) {
      alert("Erreur lors du nettoyage : " + error.message);
    }
  };

  const renderChange = (change, isPending = true) => (
    <div key={change.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-amber-900">{change.record_name || 'Élément inconnu'}</h3>
          <p className="text-sm text-gray-500">Table ciblée : {change.table_name}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          isPending ? 'bg-orange-100 text-orange-800' :
          change.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isPending ? 'En attente' : change.status === 'approved' ? 'Approuvé' : 'Rejeté'}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700 mb-1">Justification du joueur :</p>
        <p className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded border border-gray-100">
          "{change.justification}"
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-gray-700">Modifications proposées :</p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg font-mono text-xs overflow-x-auto">
          <pre>{JSON.stringify(change.new_data, null, 2)}</pre>
        </div>
      </div>

      {change.generated_sql && (
        <div className="mt-4 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg overflow-x-auto whitespace-pre-wrap">
          <p className="text-gray-400 mb-2 select-none">/* Ordre SQL généré (Copiez-collez dans Supabase) */</p>
          {change.generated_sql}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {isPending ? (
          <>
            <button onClick={() => handleReject(change.id)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
              <X size={18} /> Rejeter
            </button>
            
            <button onClick={() => handleApprove(change)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm">
              <Check size={18} /> Valider & Générer SQL
            </button>
          </>
        ) : (
          <button onClick={() => handleResetPending(change.id)} className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg font-bold flex items-center gap-2 transition-colors text-sm">
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
        <p className="text-gray-600 mb-8">Seuls les Gardiens du Savoir peuvent accéder à ce sanctuaire.</p>
        <button onClick={onBack} className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-serif">
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24">
      <button onClick={onBack} className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-serif">
        <ArrowLeft size={18} /> Retour
      </button>

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-serif font-bold text-amber-900">Conseil des Gardiens</h2>
        
        {myRole === 'super_admin' && (
          <button onClick={handleRetroactiveDiff} className="px-4 py-2 bg-orange-100 text-orange-800 border border-orange-300 rounded-lg text-sm font-bold shadow-sm">
            🧹 Appliquer le "Diff" aux anciennes propositions
          </button>
        )}
      </div>

      <p className="text-gray-600 mb-8">Validation des propositions de la communauté</p>

      <div className="flex gap-6 border-b border-gray-200 mb-6">
        <button onClick={() => setActiveTab('pending')} className={`pb-3 font-bold ${activeTab === 'pending' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400'}`}>
          En attente ({pendingChanges.length})
        </button>
        <button onClick={() => setActiveTab('history')} className={`pb-3 font-bold ${activeTab === 'history' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400'}`}>
          Historique ({historyChanges.length})
        </button>
      </div>

      <div>
        {activeTab === 'pending' ? (
          pendingChanges.length > 0 ? pendingChanges.map(c => renderChange(c, true)) : 
          <p className="text-gray-500 italic p-6 text-center border-2 border-dashed border-gray-200 rounded-xl">Aucune proposition en attente.</p>
        ) : (
          historyChanges.length > 0 ? historyChanges.map(c => renderChange(c, false)) : 
          <p className="text-gray-500 italic p-6 text-center border-2 border-dashed border-gray-200 rounded-xl">L'historique est vide.</p>
        )}
      </div>
    </div>
  );
}