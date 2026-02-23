// src/components/DataEditor.js
// Version: 3.0.0
// Build: 2026-02-04 01:10
// Migration: Données depuis props, plus de data.js

import React, { useState, useEffect } from 'react';
import { Save, Edit, Check, X, AlertTriangle, Shield } from 'lucide-react';
import { supabase } from '../config/supabase';

export default function DataEditor({ session, onBack, fairyData, competences }) {
  const [activeTab, setActiveTab] = useState('fairies');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [pendingChanges, setPendingChanges] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const ADMIN_EMAIL = 'amaranthe@free.fr';

  useEffect(() => {
    setIsAdmin(session?.user?.email === ADMIN_EMAIL);
    loadPendingChanges();
  }, [session]);

  const loadPendingChanges = async () => {
    const { data, error } = await supabase
      .from('data_change_requests')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setPendingChanges(data);
    }
  };

  const handleEdit = (category, key, item) => {
    setEditingItem({ category, key, original: item });
    setFormData(JSON.parse(JSON.stringify(item)));
  };

  const handleSubmitChange = async () => {
    const changeRequest = {
      user_id: session.user.id,
      user_email: session.user.email,
      category: editingItem.category,
      item_key: editingItem.key,
      original_data: editingItem.original,
      new_data: formData,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('data_change_requests')
      .insert([changeRequest]);

    if (!error) {
      alert('Modification soumise pour validation !');
      setEditingItem(null);
      loadPendingChanges();
    } else {
      alert('Erreur lors de la soumission');
    }
  };

  const handleApprove = async (changeId, newData, category, key) => {
    // Ici vous devrez implémenter la logique pour mettre à jour le fichier data.js
    // Pour l'instant on marque juste comme approuvé
    const { error } = await supabase
      .from('data_change_requests')
      .update({ status: 'approved', approved_at: new Date().toISOString() })
      .eq('id', changeId);

    if (!error) {
      alert('Modification approuvée ! Pensez à mettre à jour le fichier data.js manuellement.');
      loadPendingChanges();
    }
  };

  const handleReject = async (changeId) => {
    const { error } = await supabase
      .from('data_change_requests')
      .update({ status: 'rejected', approved_at: new Date().toISOString() })
      .eq('id', changeId);

    if (!error) {
      loadPendingChanges();
    }
  };

  const renderFairyEditor = () => {
    return (
      <div className="space-y-4">
        {Object.entries(fairyData).map(([key, fairy]) => (
          <div key={key} className="border-2 border-purple-200 rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-serif text-purple-900 font-bold">{key}</h3>
              <button
                onClick={() => handleEdit('fairy', key, fairy)}
                className="p-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200"
              >
                <Edit size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">{fairy.description?.substring(0, 150)}...</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>Ancienneté: <span className="font-bold">{fairy.anciennete}</span></div>
              <div>Compétences: <span className="font-bold">{fairy.competencesPredilection?.length || 0}</span></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCompetenceEditor = () => {
    return (
      <div className="space-y-4">
        {Object.entries(competences).map(([key, comp]) => (
          <div key={key} className="border-2 border-blue-200 rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-serif text-blue-900 font-bold">{key}</h3>
              <button
                onClick={() => handleEdit('competence', key, comp)}
                className="p-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
              >
                <Edit size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-600">{comp.description}</p>
            <div className="text-xs text-gray-500 mt-1">
              Spécialités: {comp.specialites?.join(', ')}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderEditModal = () => {
    if (!editingItem) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-serif text-purple-900">
              Modifier: {editingItem.key}
            </h2>
            <button onClick={() => setEditingItem(null)} className="p-2">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {editingItem.category === 'fairy' && (
              <>
                <div>
                  <label className="block text-sm font-bold mb-1">Description</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-2 border rounded"
                    rows="4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Ancienneté</label>
                  <select
                    value={formData.anciennete || ''}
                    onChange={(e) => setFormData({...formData, anciennete: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    <option value="ancienne">Ancienne</option>
                    <option value="moderne">Moderne</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Caractéristiques (JSON)</label>
                  <textarea
                    value={JSON.stringify(formData.caracteristiques, null, 2)}
                    onChange={(e) => {
                      try {
                        setFormData({...formData, caracteristiques: JSON.parse(e.target.value)});
                      } catch(err) {}
                    }}
                    className="w-full p-2 border rounded font-mono text-xs"
                    rows="8"
                  />
                </div>
              </>
            )}

            {editingItem.category === 'competence' && (
              <>
                <div>
                  <label className="block text-sm font-bold mb-1">Description</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-2 border rounded"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Spécialités (séparées par des virgules)</label>
                  <input
                    type="text"
                    value={formData.specialites?.join(', ') || ''}
                    onChange={(e) => setFormData({
                      ...formData, 
                      specialites: e.target.value.split(',').map(s => s.trim())
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={handleSubmitChange}
              className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <Save size={20} />
              Soumettre pour validation
            </button>
            <button
              onClick={() => setEditingItem(null)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPendingChanges = () => {
    if (!isAdmin) return null;

    return (
      <div className="mb-6 border-2 border-amber-300 rounded-lg p-4 bg-amber-50">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="text-amber-600" size={24} />
          <h3 className="text-xl font-serif text-amber-900 font-bold">
            Modifications en attente ({pendingChanges.filter(c => c.status === 'pending').length})
          </h3>
        </div>

        {pendingChanges.filter(c => c.status === 'pending').length === 0 ? (
          <p className="text-amber-700">Aucune modification en attente</p>
        ) : (
          <div className="space-y-3">
            {pendingChanges.filter(c => c.status === 'pending').map(change => (
              <div key={change.id} className="bg-white p-3 rounded border border-amber-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-bold text-amber-900">
                      {change.category}: {change.item_key}
                    </div>
                    <div className="text-xs text-gray-600">
                      Par: {change.user_email} • {new Date(change.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(change.id, change.new_data, change.category, change.item_key)}
                      className="p-2 bg-green-100 text-green-700 rounded hover:bg-green-200"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleReject(change.id)}
                      className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
                <details className="text-xs">
                  <summary className="cursor-pointer text-blue-600">Voir les modifications</summary>
                  <div className="mt-2 p-2 bg-gray-50 rounded font-mono">
                    <div className="mb-1 font-bold">Avant:</div>
                    <pre className="text-xs overflow-auto">{JSON.stringify(change.original_data, null, 2)}</pre>
                    <div className="mt-2 mb-1 font-bold">Après:</div>
                    <pre className="text-xs overflow-auto">{JSON.stringify(change.new_data, null, 2)}</pre>
                  </div>
                </details>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-serif text-purple-900 flex items-center gap-2">
                <Shield size={32} className={isAdmin ? 'text-yellow-500' : 'text-purple-600'} />
                Éditeur de Données
              </h1>
              {isAdmin && (
                <div className="text-sm text-yellow-600 mt-1">
                  ⚡ Mode Administrateur
                </div>
              )}
            </div>
            <button
              onClick={onBack}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-serif"
            >
              Retour
            </button>
          </div>

          {renderPendingChanges()}

          <div className="flex gap-2 mb-6 border-b-2 border-purple-200">
            <button
              onClick={() => setActiveTab('fairies')}
              className={`px-4 py-2 font-serif ${
                activeTab === 'fairies'
                  ? 'border-b-2 border-purple-600 text-purple-900 font-bold'
                  : 'text-gray-600'
              }`}
            >
              Types de Fées ({Object.keys(fairyData).length})
            </button>
            <button
              onClick={() => setActiveTab('competences')}
              className={`px-4 py-2 font-serif ${
                activeTab === 'competences'
                  ? 'border-b-2 border-purple-600 text-purple-900 font-bold'
                  : 'text-gray-600'
              }`}
            >
              Compétences ({Object.keys(competences).length})
            </button>
          </div>

          <div className="max-h-[600px] overflow-y-auto">
            {activeTab === 'fairies' && renderFairyEditor()}
            {activeTab === 'competences' && renderCompetenceEditor()}
          </div>
        </div>
      </div>

      {renderEditModal()}
    </div>
  );
}
