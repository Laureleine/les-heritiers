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
    // On pointe sur la table utilisée par l'Encyclopédie
    const [pending, history] = await Promise.all([
      supabase.from('dca_data_change_requests').select('*').eq('status', 'pending').order('created_at', { ascending: false }),
      supabase.from('dca_data_change_requests').select('*').in('status', ['approved', 'rejected']).order('created_at', { ascending: false }).limit(50)
    ]);

    if (pending.data) setPendingChanges(pending.data);
    if (history.data) setHistoryChanges(history.data);
    setLoading(false);
  };

  const handleApprove = async (changeId) => {
    if (!window.confirm("Valider cette modification et l'intégrer à la base de données ?")) return;
    
    // Note : Dans une V2, c'est ici qu'on fera l'UPDATE réel dans la table des fées/pouvoirs.
    // Pour l'instant, on marque la requête comme validée.
    const { error } = await supabase.from('dca_data_change_requests').update({ status: 'approved' }).eq('id', changeId);
    if (!error) {
      alert('✓ Proposition validée ! (Pensez à mettre à jour la base principale manuellement pour l\'instant)');
      loadChanges();
    }
  };

  const handleReject = async (changeId) => {
    if (!window.confirm("Rejeter cette proposition ?")) return;
    const { error } = await supabase.from('dca_data_change_requests').update({ status: 'rejected' }).eq('id', changeId);
    if (!error) loadChanges();
  };

  const renderChange = (change, isPending = true) => (
    <div key={change.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-4">
      <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-3">
        <div>
          <h3 className="font-bold text-amber-900 text-lg">{change.record_name || 'Élément inconnu'}</h3>
          <p className="text-sm text-gray-500 font-mono">Table ciblée : {change.table_name}</p>
        </div>
        <div className="text-right">
          <span className={`px-2 py-1 rounded text-xs font-bold ${isPending ? 'bg-amber-100 text-amber-800' : change.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isPending ? 'En attente' : change.status === 'approved' ? 'Approuvé' : 'Rejeté'}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700 mb-1">Justification du joueur :</p>
        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded italic border border-gray-100">"{change.justification}"</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-bold text-gray-700 mb-1">Modifications proposées :</p>
        <pre className="text-xs bg-stone-900 text-green-400 p-3 rounded overflow-x-auto">
          {JSON.stringify(change.new_data, null, 2)}
        </pre>
      </div>

      {isPending && (
        <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
          <button onClick={() => handleReject(change.id)} className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg font-bold flex items-center gap-2 transition-colors">
            <X size={16} /> Rejeter
          </button>
          <button onClick={() => handleApprove(change.id)} className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm">
            <Check size={16} /> Valider la proposition
          </button>
        </div>
      )}
    </div>
  );

  if (loading) return <div className="p-10 text-center text-amber-600">Ouverture du Conseil...</div>;

  if (myRole !== 'gardien' && myRole !== 'super_admin') {
    return (
      <div className="max-w-2xl mx-auto p-10 text-center">
        <Shield size={48} className="mx-auto text-red-400 mb-4" />
        <h2 className="text-2xl font-serif text-gray-800 mb-2">Accès Restreint</h2>
        <p className="text-gray-600 mb-6">Seuls les Gardiens du Savoir peuvent accéder à ce sanctuaire.</p>
        <button onClick={onBack} className="px-6 py-2 bg-amber-600 text-white rounded-lg">Retour</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between bg-amber-900 p-4 rounded-xl shadow-md text-amber-50">
        <div className="flex items-center gap-3">
          <Shield size={28} className="text-amber-400" />
          <div>
            <h1 className="text-xl font-serif font-bold">Conseil des Gardiens</h1>
            <p className="text-xs text-amber-200/80">Validation des propositions de la communauté</p>
          </div>
        </div>
        <button onClick={onBack} className="px-4 py-2 bg-amber-800 hover:bg-amber-700 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors border border-amber-700/50">
          <ArrowLeft size={16} /> Retour
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-200">
        <button onClick={() => setActiveTab('pending')} className={`pb-3 font-bold ${activeTab === 'pending' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400'}`}>
          En attente ({pendingChanges.length})
        </button>
        <button onClick={() => setActiveTab('history')} className={`pb-3 font-bold ${activeTab === 'history' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400'}`}>
          Historique ({historyChanges.length})
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'pending' ? (
          pendingChanges.length > 0 ? pendingChanges.map(c => renderChange(c, true)) : <p className="text-center text-gray-500 py-10">Aucune proposition en attente.</p>
        ) : (
          historyChanges.length > 0 ? historyChanges.map(c => renderChange(c, false)) : <p className="text-center text-gray-500 py-10">L'historique est vide.</p>
        )}
      </div>
    </div>
  );
}