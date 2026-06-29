// src/components/admin/TabPnjPropositions.js
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../config/supabase';
import { CheckCircle, XCircle, Clock } from '../../config/icons';

const TABLE_LABELS = {
  traits: 'Trait',
  apparences: 'Apparence',
  motivations: 'Motivation',
  secrets: 'Secret',
  phobies: 'Phobie',
  hobbies: 'Hobby',
  comportements: 'Comportement',
  metiers: 'Métier',
};

const TRANCHE_LABELS = {
  jeune: '18–30', adulte: '31–50', mur: '51–70', age: '71+',
};

const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvées', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusées', icon: XCircle, color: 'text-red-600 border-red-500' },
];

export default function TabPnjPropositions({ session }) {
  const [statusFilter, setStatusFilter] = useState('pending');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rejectReasonFor, setRejectReasonFor] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [profiles, setProfiles] = useState({});

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('pnj_table_entries')
      .select('id, table_name, tranche_age, value_m, value_f, status, reject_reason, created_by, created_at')
      .eq('status', statusFilter)
      .order('created_at', { ascending: statusFilter === 'pending' });
    setEntries(data || []);

    // Charger les pseudos des proposeurs (dédupliqués)
    const ids = [...new Set((data || []).map(e => e.created_by).filter(Boolean))];
    if (ids.length > 0) {
      const { data: profs } = await supabase
        .from('profiles')
        .select('id, username')
        .in('id', ids);
      if (profs) {
        const map = {};
        profs.forEach(p => { map[p.id] = p.username; });
        setProfiles(prev => ({ ...prev, ...map }));
      }
    }
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  const approuve = async (entry) => {
    await supabase
      .from('pnj_table_entries')
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    load();
  };

  const rejette = async (entry, reason) => {
    await supabase
      .from('pnj_table_entries')
      .update({ status: 'rejected', reject_reason: reason || null })
      .eq('id', entry.id);
    setRejectReasonFor(null);
    setRejectReason('');
    load();
  };

  return (
    <div className="space-y-5">
      {/* Onglets de statut */}
      <div className="flex gap-4 border-b border-stone-200">
        {STATUS_TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setStatusFilter(id)}
            className={`pb-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 border-b-2 transition-colors ${statusFilter === id ? STATUS_TABS.find(t => t.id === id).color : 'text-stone-400 border-transparent hover:text-stone-600'}`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}

      {!loading && entries.length === 0 && (
        <p className="text-sm text-stone-400 font-serif text-center py-8">Aucune entrée dans cette catégorie.</p>
      )}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map(entry => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3 flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                    {TABLE_LABELS[entry.table_name]}{entry.tranche_age ? ` · ${TRANCHE_LABELS[entry.tranche_age]}` : ''}
                  </span>
                  {profiles[entry.created_by] && (
                    <span className="text-xs text-stone-400">— {profiles[entry.created_by]}</span>
                  )}
                </div>
                <p className="font-serif text-stone-800 mt-0.5">
                  {entry.value_m}
                  {entry.value_f && <span className="text-stone-400"> / {entry.value_f}</span>}
                </p>
                {entry.status === 'rejected' && entry.reject_reason && (
                  <p className="text-xs text-red-500 mt-1">{entry.reject_reason}</p>
                )}
              </div>

              {statusFilter === 'pending' && (
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => approuve(entry)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                  >
                    <CheckCircle size={13} /> Approuver
                  </button>

                  {rejectReasonFor === entry.id ? (
                    <div className="flex flex-col gap-1.5">
                      <input
                        autoFocus
                        value={rejectReason}
                        onChange={e => setRejectReason(e.target.value)}
                        placeholder="Raison (optionnel)"
                        className="text-xs border border-stone-200 rounded px-2 py-1 outline-none focus:border-red-300"
                      />
                      <div className="flex gap-1">
                        <button
                          onClick={() => rejette(entry, rejectReason)}
                          className="flex-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1 transition-colors"
                        >
                          Confirmer
                        </button>
                        <button
                          onClick={() => setRejectReasonFor(null)}
                          className="text-xs text-stone-400 hover:text-stone-600 px-2"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setRejectReasonFor(entry.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-red-50 text-red-600 border border-stone-200 hover:border-red-200 rounded-lg transition-colors"
                    >
                      <XCircle size={13} /> Refuser
                    </button>
                  )}
                </div>
              )}

              {statusFilter === 'approved' && (
                <button
                  onClick={() => rejette(entry, 'Révision après approbation')}
                  className="flex-shrink-0 text-xs text-stone-300 hover:text-red-500 transition-colors px-2"
                  title="Retirer l'approbation"
                >
                  <XCircle size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
