// src/components/ValidationsPendantes.js
// Version: 2.10.0
// Build: 2026-01-31 21:00

import React, { useState, useEffect } from 'react';
import { Check, X, AlertTriangle, Clock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { supabase } from '../config/supabase';

export default function ValidationsPendantes({ session, onBack, isAdmin }) {
  const [pendingChanges, setPendingChanges] = useState([]);
  const [historyChanges, setHistoryChanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');

  useEffect(() => {
    loadChanges();
    // Rafraîchir toutes les 30 secondes
    const interval = setInterval(loadChanges, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadChanges = async () => {
    setLoading(true);
    try {
      // Charger les demandes en attente
      const { data: pending } = await supabase
        .from('data_change_requests')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      // Charger l'historique (approuvées + rejetées)
      const { data: history } = await supabase
        .from('data_change_requests')
        .select('*')
        .in('status', ['approved', 'rejected'])
        .order('approved_at', { ascending: false })
        .limit(20);

      setPendingChanges(pending || []);
      setHistoryChanges(history || []);
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (changeId) => {
    const { error } = await supabase
      .from('data_change_requests')
      .update({ 
        status: 'approved', 
        approved_at: new Date().toISOString(),
        approved_by: session.user.id
      })
      .eq('id', changeId);

    if (!error) {
      alert('✓ Modification approuvée !');
      loadChanges();
    } else {
      alert('Erreur lors de l\'approbation');
    }
  };

  const handleReject = async (changeId) => {
    const { error } = await supabase
      .from('data_change_requests')
      .update({ 
        status: 'rejected', 
        approved_at: new Date().toISOString(),
        approved_by: session.user.id
      })
      .eq('id', changeId);

    if (!error) {
      alert('✗ Modification rejetée');
      loadChanges();
    } else {
      alert('Erreur lors du rejet');
    }
  };

  const renderChange = (change, showActions = true) => {
    const isApproved = change.status === 'approved';
    const isRejected = change.status === 'rejected';

    return (
      <div key={change.id} className="bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-amber-300 transition-all">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-lg text-amber-900">
                {change.category}: {change.item_key}
              </span>
              {isApproved && <CheckCircle size={20} className="text-green-600" />}
              {isRejected && <XCircle size={20} className="text-red-600" />}
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div>👤 Par: <span className="font-semibold">{change.user_email}</span></div>
              <div>📅 Le: {new Date(change.created_at).toLocaleString('fr-FR')}</div>
              {change.approved_at && (
                <div className={isApproved ? 'text-green-700' : 'text-red-700'}>
                  {isApproved ? '✓ Approuvé' : '✗ Rejeté'} le {new Date(change.approved_at).toLocaleString('fr-FR')}
                </div>
              )}
            </div>
          </div>

          {showActions && (
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => handleApprove(change.id)}
                className="p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-all"
                title="Approuver"
              >
                <Check size={20} />
              </button>
              <button
                onClick={() => handleReject(change.id)}
                className="p-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all"
                title="Rejeter"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </div>

        <details className="text-sm">
          <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold mb-2">
            📋 Voir les modifications proposées
          </summary>
          <div className="mt-3 p-3 bg-gray-50 rounded border border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-bold text-red-700 mb-2">❌ Avant (original):</div>
                <pre className="text-xs overflow-auto bg-white p-2 rounded border border-red-200">
                  {JSON.stringify(change.original_data, null, 2)}
                </pre>
              </div>
              <div>
                <div className="font-bold text-green-700 mb-2">✓ Après (proposé):</div>
                <pre className="text-xs overflow-auto bg-white p-2 rounded border border-green-200">
                  {JSON.stringify(change.new_data, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </details>
      </div>
    );
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 p-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg border-2 border-red-300 text-center max-w-md">
          <AlertTriangle className="mx-auto text-red-600 mb-4" size={64} />
          <h2 className="text-2xl font-serif text-red-900 mb-2">Accès refusé</h2>
          <p className="text-red-700 mb-4">Vous devez être administrateur pour accéder à cette page.</p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 border-4 border-amber-200">
          {/* En-tête */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-amber-200">
            <div>
              <h1 className="text-3xl font-serif text-amber-900 font-bold flex items-center gap-3">
                <AlertTriangle className="text-amber-600" size={36} />
                Validations en attente
              </h1>
              <p className="text-amber-700 mt-1">
                Gérer les demandes de modification des données du jeu
              </p>
            </div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-serif"
            >
              <ArrowLeft size={20} />
              Retour
            </button>
          </div>

          {/* Onglets */}
          <div className="flex gap-2 mb-6 border-b-2 border-amber-200">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-3 font-serif transition-all ${
                activeTab === 'pending'
                  ? 'border-b-4 border-amber-600 text-amber-900 font-bold'
                  : 'text-gray-600 hover:text-amber-800'
              }`}
            >
              <Clock className="inline mr-2" size={20} />
              En attente ({pendingChanges.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 font-serif transition-all ${
                activeTab === 'history'
                  ? 'border-b-4 border-amber-600 text-amber-900 font-bold'
                  : 'text-gray-600 hover:text-amber-800'
              }`}
            >
              <CheckCircle className="inline mr-2" size={20} />
              Historique ({historyChanges.length})
            </button>
          </div>

          {/* Contenu */}
          {loading ? (
            <div className="text-center py-16">
              <div className="text-amber-800 text-lg font-serif">Chargement...</div>
            </div>
          ) : activeTab === 'pending' ? (
            pendingChanges.length === 0 ? (
              <div className="text-center py-16">
                <CheckCircle className="mx-auto text-green-400 mb-4" size={64} />
                <p className="text-green-800 text-lg font-serif">
                  ✓ Aucune modification en attente !
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingChanges.map(change => renderChange(change, true))}
              </div>
            )
          ) : (
            historyChanges.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg font-serif">
                  Aucun historique
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {historyChanges.map(change => renderChange(change, false))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
