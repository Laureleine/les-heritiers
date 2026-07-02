import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../config/supabase';
import { CheckCircle, XCircle, Clock, Edit, Plus } from '../../config/icons';

const TABLE_LABELS = {
  decor: 'Décor',
  evenement: 'Événement',
  meteo: 'Météo',
  intrigue: 'Intrigue',
};

const VARIANTES_PAR_TABLE = {
  decor: ['paris_populaire', 'paris_riche', 'banlieue_industrielle', 'campagne_rurale'],
  evenement: ['paris_jour', 'paris_nuit', 'banlieue_industrielle_jour', 'banlieue_industrielle_nuit', 'campagne_rurale_jour', 'campagne_rurale_nuit'],
  meteo: ['hiver', 'printemps', 'ete', 'automne'],
  intrigue: ['horror', 'espionage', 'pulp'],
};

const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvés', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusés', icon: XCircle, color: 'text-red-600 border-red-500' },
];

const emptyForm = { table_name: 'decor', variante: 'paris_populaire', value: '', weight: 25 };

export default function TabAmbiancePropositions({ session }) {
  const [statusFilter, setStatusFilter] = useState('pending');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rejectReasonFor, setRejectReasonFor] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState(emptyForm);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('ambiance_table_entries')
      .select('id, table_name, variante, value, weight, is_official, status, reject_reason, created_at')
      .eq('status', statusFilter)
      .order('created_at', { ascending: statusFilter === 'pending' });
    setEntries(data || []);
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  const approuver = async (entry) => {
    await supabase.from('ambiance_table_entries')
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    load();
  };

  const rejeter = async (entry, motif) => {
    await supabase.from('ambiance_table_entries').update({ status: 'rejected', reject_reason: motif || null }).eq('id', entry.id);
    setRejectReasonFor(null);
    setRejectReason('');
    load();
  };

  const commencerEdition = (entry) => {
    setEditingId(entry.id);
    setEditForm({ table_name: entry.table_name, variante: entry.variante, value: entry.value, weight: entry.weight });
  };

  const enregistrerEdition = async (id) => {
    await supabase.from('ambiance_table_entries').update({
      value: editForm.value.trim(),
      weight: Number(editForm.weight) || 1,
    }).eq('id', id);
    setEditingId(null);
    load();
  };

  const creerDirectement = async () => {
    if (!createForm.value.trim()) return;
    await supabase.from('ambiance_table_entries').insert({
      table_name: createForm.table_name,
      variante: createForm.variante,
      value: createForm.value.trim(),
      weight: Number(createForm.weight) || 1,
      is_official: true,
      status: 'approved',
      created_by: session?.user?.id,
      approved_by: session?.user?.id,
      approved_at: new Date().toISOString(),
    });
    setCreating(false);
    setCreateForm(emptyForm);
    if (statusFilter === 'approved') load();
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4 border-b border-stone-200">
        <div className="flex gap-4">
          {STATUS_TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setStatusFilter(id)}
              className={`pb-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 border-b-2 transition-colors ${statusFilter === id ? STATUS_TABS.find((t) => t.id === id).color : 'text-stone-400 border-transparent hover:text-stone-600'}`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>
        <button onClick={() => setCreating((v) => !v)} className="mb-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-lg">
          <Plus size={14} /> Ajouter un élément
        </button>
      </div>

      {creating && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 grid gap-3 sm:grid-cols-2">
          <select
            value={createForm.table_name}
            onChange={(e) => setCreateForm((f) => ({ ...f, table_name: e.target.value, variante: VARIANTES_PAR_TABLE[e.target.value][0] }))}
            className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm"
          >
            {Object.entries(TABLE_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
          <select value={createForm.variante} onChange={(e) => setCreateForm((f) => ({ ...f, variante: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm">
            {VARIANTES_PAR_TABLE[createForm.table_name].map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
          <input placeholder="Texte" value={createForm.value} onChange={(e) => setCreateForm((f) => ({ ...f, value: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm sm:col-span-2" />
          <input type="number" min="1" placeholder="Poids" value={createForm.weight} onChange={(e) => setCreateForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm" />
          <button onClick={creerDirectement} className="text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-lg px-3 py-1.5">Créer</button>
        </div>
      )}

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun élément dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input value={editForm.value} onChange={(e) => setEditForm((f) => ({ ...f, value: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                  <input type="number" min="1" value={editForm.weight} onChange={(e) => setEditForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                  <div className="flex gap-2">
                    <button onClick={() => enregistrerEdition(entry.id)} className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded px-3 py-1.5">Enregistrer</button>
                    <button onClick={() => setEditingId(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">Annuler</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                        {TABLE_LABELS[entry.table_name]} · {entry.variante} · poids {entry.weight}
                      </span>
                      {entry.is_official && <span className="text-xs text-teal-600 font-bold">Canon</span>}
                    </div>
                    <p className="font-serif text-stone-800 mt-0.5">{entry.value}</p>
                    {entry.status === 'rejected' && entry.reject_reason && (
                      <p className="text-xs text-red-500 mt-1">{entry.reject_reason}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {statusFilter === 'pending' && (
                      <>
                        <button onClick={() => approuver(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                          <CheckCircle size={13} /> Approuver
                        </button>
                        {rejectReasonFor === entry.id ? (
                          <div className="flex flex-col gap-1.5">
                            <input autoFocus value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Raison (optionnel)" className="text-xs border border-stone-200 rounded px-2 py-1" />
                            <div className="flex gap-1">
                              <button onClick={() => rejeter(entry, rejectReason)} className="flex-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1">Confirmer</button>
                              <button onClick={() => setRejectReasonFor(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">✕</button>
                            </div>
                          </div>
                        ) : (
                          <button onClick={() => setRejectReasonFor(entry.id)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-red-50 text-red-600 border border-stone-200 rounded-lg">
                            <XCircle size={13} /> Refuser
                          </button>
                        )}
                      </>
                    )}
                    {statusFilter === 'approved' && (
                      <button onClick={() => commencerEdition(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-teal-50 text-teal-700 border border-stone-200 rounded-lg">
                        <Edit size={13} /> Éditer
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
