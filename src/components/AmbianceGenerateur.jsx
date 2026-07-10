import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Route, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle, Edit, Plus } from '../config/icons';
import { useAmbianceTableEntries } from '../hooks/useAmbianceTableEntries';
import { genererAmbianceVoyage } from '../utils/ambianceGenerator';
import { WEIGHT_LABELS, weightLabel } from '../data/pnjTables';
import { isAdmin } from '../utils/authRoles';
import { useUserContext } from '../context/UserContext';
import { supabase } from '../config/supabase';

const ZONES = [
  { id: 'paris_populaire', label: 'Paris populaire' },
  { id: 'paris_riche', label: 'Paris riche' },
  { id: 'banlieue_industrielle', label: 'Banlieue industrielle' },
  { id: 'campagne_rurale', label: 'Campagne rurale' },
];

const MOMENTS = [
  { id: 'jour', label: 'Jour' },
  { id: 'nuit', label: 'Nuit' },
];

const SAISONS = [
  { id: 'hiver', label: 'Hiver' },
  { id: 'printemps', label: 'Printemps' },
  { id: 'ete', label: 'Été' },
  { id: 'automne', label: 'Automne' },
];

const GENRES = [
  { id: 'standard', label: 'Standard' },
  { id: 'horror', label: 'Étrange / Merveilleux' },
  { id: 'espionage', label: 'Espionnage' },
  { id: 'pulp', label: 'Pulp / Interlope' },
];

const TABLES_CIBLES = [
  { id: 'decor', label: 'Décor' },
  { id: 'evenement', label: 'Événement' },
  { id: 'meteo', label: 'Météo' },
  { id: 'intrigue', label: 'Intrigue' },
];

const TABLE_LABELS = Object.fromEntries(TABLES_CIBLES.map((t) => [t.id, t.label]));

const VARIANTES_PAR_TABLE = {
  decor: ZONES,
  evenement: [
    { id: 'paris_jour', label: 'Paris — Jour' },
    { id: 'paris_nuit', label: 'Paris — Nuit' },
    { id: 'banlieue_industrielle_jour', label: 'Banlieue industrielle — Jour' },
    { id: 'banlieue_industrielle_nuit', label: 'Banlieue industrielle — Nuit' },
    { id: 'campagne_rurale_jour', label: 'Campagne rurale — Jour' },
    { id: 'campagne_rurale_nuit', label: 'Campagne rurale — Nuit' },
  ],
  meteo: SAISONS,
  intrigue: [
    { id: 'horror', label: 'Étrange / Merveilleux' },
    { id: 'espionage', label: 'Espionnage' },
    { id: 'pulp', label: 'Pulp / Interlope' },
  ],
};

function Select({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-serif text-stone-600">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-stone-200 rounded-lg px-2 py-1.5 bg-white"
      >
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </label>
  );
}

function ProposerElement({ session, userProfile, proposer, ajouterDirectement, myProposals, submitting, entryToEdit, onCancelEdit }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('decor');
  const [variante, setVariante] = useState(VARIANTES_PAR_TABLE.decor[0].id);
  const [value, setValue] = useState('');
  const [weight, setWeight] = useState('frequent');
  const [msg, setMsg] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const canDirectSave = !!userProfile && isAdmin(userProfile);

  const changerTable = (t) => {
    setTableName(t);
    setVariante(VARIANTES_PAR_TABLE[t][0].id);
  };

  useEffect(() => {
    if (!entryToEdit) return;
    setTableName(entryToEdit.table_name);
    setVariante(entryToEdit.variante);
    setValue(entryToEdit.value || '');
    setWeight(entryToEdit.weight ?? 'frequent');
    setEditingId(entryToEdit._dbId);
    setOpen(true);
  }, [entryToEdit]);

  if (!session?.user) return null;

  const annulerEdition = () => {
    setValue(''); setWeight('frequent'); setEditingId(null);
    onCancelEdit?.();
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const { error } = await proposer({ tableName, variante, value: value.trim(), weight });
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' });
      setValue('');
    }
  };

  const handleSaveDirect = async () => {
    if (!value.trim()) return;
    const { error } = await ajouterDirectement({ tableName, variante, value: value.trim(), weight }, editingId);
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: editingId ? 'Élément modifié directement !' : 'Élément ajouté directement !' });
      setValue(''); setWeight('frequent'); setEditingId(null);
      onCancelEdit?.();
    }
  };

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-teal-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        {editingId ? 'Modifier un élément' : 'Proposer un élément'}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
            <Select label="Table cible" value={tableName} onChange={changerTable} options={TABLES_CIBLES} />
            <Select label="Variante" value={variante} onChange={setVariante} options={VARIANTES_PAR_TABLE[tableName]} />
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Texte
              <input value={value} onChange={(e) => setValue(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" required />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600">
              Fréquence
              <select value={weight} onChange={(e) => setWeight(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5 bg-white">
                {WEIGHT_LABELS.map((w) => <option key={w.key} value={w.key}>{w.label}</option>)}
              </select>
            </label>
            <div className="sm:col-span-2 flex items-center gap-3 flex-wrap">
              <button type="submit" disabled={submitting} className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                {submitting ? '…' : 'Proposer'}
              </button>
              {canDirectSave && (
                <button type="button" onClick={handleSaveDirect} disabled={submitting || !value.trim()} className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                  {editingId ? '✎ Modifier directement' : '✓ Ajouter directement'}
                </button>
              )}
              {editingId && (
                <button type="button" onClick={annulerEdition} className="text-xs text-stone-400 hover:text-stone-600">
                  Annuler la modification
                </button>
              )}
            </div>
          </form>

          {msg && <p className={`text-sm ${msg.type === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>{msg.text}</p>}

          {myProposals.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Mes propositions</p>
              {myProposals.map((p) => (
                <div key={p.id} className="text-sm flex items-center gap-2 text-stone-600">
                  {p.status === 'pending' && <Clock size={14} className="text-amber-500" />}
                  {p.status === 'approved' && <CheckCircle size={14} className="text-emerald-500" />}
                  {p.status === 'rejected' && <XCircle size={14} className="text-red-500" />}
                  <span>{p.value}</span>
                  {p.status === 'rejected' && p.reject_reason && <span className="text-xs text-red-400">— {p.reject_reason}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TablesTab({ dbEntries, myProposals, session, userProfile, proposer, ajouterDirectement, submitting }) {
  const [entryToEdit, setEntryToEdit] = useState(null);
  const canDirectSave = !!userProfile && isAdmin(userProfile);

  const sections = [];
  for (const table of TABLES_CIBLES) {
    for (const variante of VARIANTES_PAR_TABLE[table.id]) {
      const key = `${table.id}_${variante.id}`;
      if (dbEntries[key]?.length) sections.push({ key, tableId: table.id, label: `${table.label} · ${variante.label}`, entries: dbEntries[key] });
    }
  }

  return (
    <div className="space-y-6">
      {sections.length === 0 && (
        <p className="text-sm text-stone-400 font-serif text-center py-6">Aucune entrée approuvée pour l'instant.</p>
      )}
      {sections.map((section) => (
        <div key={section.key} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
          <p className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 text-xs font-bold text-stone-500 uppercase tracking-wider">
            {section.label}
          </p>
          <div className="divide-y divide-stone-100">
            {section.entries.map((entry) => (
              <div key={entry._dbId} className="flex items-start justify-between gap-3 px-4 py-2.5">
                <p className="font-serif text-stone-800 text-sm min-w-0">{entry.value}</p>
                {canDirectSave && (
                  <button
                    onClick={() => setEntryToEdit({ table_name: section.tableId, variante: section.key.slice(section.tableId.length + 1), value: entry.value, weight: entry.weight, _dbId: entry._dbId })}
                    className="flex-shrink-0 p-1.5 rounded-lg text-stone-400 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                    title="Modifier"
                  >
                    <Edit size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <ProposerElement
        session={session}
        userProfile={userProfile}
        proposer={proposer}
        ajouterDirectement={ajouterDirectement}
        myProposals={myProposals}
        submitting={submitting}
        entryToEdit={entryToEdit}
        onCancelEdit={() => setEntryToEdit(null)}
      />
    </div>
  );
}

const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvés', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusés', icon: XCircle, color: 'text-red-600 border-red-500' },
];

function ValidationTab({ session, approuver, refuser, ajouterDirectement }) {
  const [statusFilter, setStatusFilter] = useState('pending');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rejectReasonFor, setRejectReasonFor] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ value: '', weight: 'frequent' });

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

  const handleApprouver = async (entry) => { await approuver(entry); load(); };
  const handleRejeter = async (entry, motif) => { await refuser(entry, motif); setRejectReasonFor(null); setRejectReason(''); load(); };

  const commencerEdition = (entry) => {
    setEditingId(entry.id);
    setEditForm({ value: entry.value, weight: entry.weight });
  };

  const enregistrerEdition = async (entry) => {
    await ajouterDirectement({ tableName: entry.table_name, variante: entry.variante, value: editForm.value.trim(), weight: editForm.weight }, entry.id);
    setEditingId(null);
    load();
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-4 border-b border-stone-200">
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

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun élément dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input value={editForm.value} onChange={(e) => setEditForm((f) => ({ ...f, value: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                  <select value={editForm.weight} onChange={(e) => setEditForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                    {WEIGHT_LABELS.map((w) => <option key={w.key} value={w.key}>{w.label}</option>)}
                  </select>
                  <div className="flex gap-2">
                    <button onClick={() => enregistrerEdition(entry)} className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded px-3 py-1.5">Enregistrer</button>
                    <button onClick={() => setEditingId(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">Annuler</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                        {TABLE_LABELS[entry.table_name]} · {entry.variante} · {weightLabel(entry.weight)}
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
                        <button onClick={() => handleApprouver(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                          <CheckCircle size={13} /> Approuver
                        </button>
                        {rejectReasonFor === entry.id ? (
                          <div className="flex flex-col gap-1.5">
                            <input autoFocus value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Raison (optionnel)" className="text-xs border border-stone-200 rounded px-2 py-1" />
                            <div className="flex gap-1">
                              <button onClick={() => handleRejeter(entry, rejectReason)} className="flex-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1">Confirmer</button>
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

export default function AmbianceGenerateur({ onBack }) {
  const { userProfile, session } = useUserContext();
  const { dbEntries, myProposals, loaded, submitting, proposer, ajouterDirectement, approuver, refuser } = useAmbianceTableEntries(session);
  const [activeTab, setActiveTab] = useState('generateur');
  const [config, setConfig] = useState({
    zone: 'paris_populaire', moment: 'jour', saison: 'printemps', genre: 'standard',
  });
  const [scene, setScene] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const generer = () => setScene(genererAmbianceVoyage(config, dbEntries));

  const estGardien = !!userProfile && isAdmin(userProfile);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </button>
            <h1 className="font-serif font-bold text-amber-100 text-lg truncate">Générateur d'Ambiance</h1>
          </div>
          <div className="flex flex-shrink-0 gap-1">
            {[
              { id: 'generateur', label: 'Générateur' },
              { id: 'tables', label: 'Tables' },
              ...(estGardien ? [{ id: 'validation', label: 'Validation' }] : []),
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold font-serif rounded-lg transition-colors ${
                  activeTab === tab.id ? 'bg-amber-700/40 text-amber-200' : 'text-amber-200/50 hover:text-amber-200/80 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {activeTab === 'tables' && (
          <TablesTab
            dbEntries={dbEntries}
            myProposals={myProposals}
            session={session}
            userProfile={userProfile}
            proposer={proposer}
            ajouterDirectement={ajouterDirectement}
            submitting={submitting}
          />
        )}

        {activeTab === 'validation' && estGardien && (
          <ValidationTab session={session} approuver={approuver} refuser={refuser} ajouterDirectement={ajouterDirectement} />
        )}

        {activeTab === 'generateur' && (
          <>
            <p className="text-stone-500 font-serif italic mb-6 text-sm">
              Décor, météo et vie de rue pour planter une scène — Paris et alentours, 1899.
            </p>

            <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <Select label="Zone" value={config.zone} onChange={set('zone')} options={ZONES} />
                <Select label="Moment" value={config.moment} onChange={set('moment')} options={MOMENTS} />
                <Select label="Saison" value={config.saison} onChange={set('saison')} options={SAISONS} />
                <Select label="Genre littéraire" value={config.genre} onChange={set('genre')} options={GENRES} />
              </div>

              <button
                onClick={generer}
                disabled={!loaded}
                className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
              >
                <Route size={18} /> {loaded ? "Générer l'ambiance" : 'Chargement des tables…'}
              </button>

              {scene && (
                <div className="mt-5 space-y-2">
                  {scene.map((element, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm font-serif text-stone-800 bg-stone-50 rounded-lg px-3 py-2 border border-stone-100">
                      <span>•</span><span>{element}</span>
                    </div>
                  ))}
                  <button onClick={generer} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-teal-700 mt-2">
                    <RotateCcw size={12} /> Refaire un tirage
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
