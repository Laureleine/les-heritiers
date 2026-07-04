import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Package, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle, Edit, Plus } from '../config/icons';
import { usePocheTableEntries } from '../hooks/usePocheTableEntries';
import { genererInventaire } from '../utils/pocheGenerator';
import { isAdmin } from '../utils/authRoles';
import { supabase } from '../config/supabase';

const SEXES = [
  { id: 'masculin', label: 'Masculin' },
  { id: 'feminin', label: 'Féminin' },
];

const CLASSES = [
  { id: 'populaire', label: 'Populaire' },
  { id: 'moyenne', label: 'Moyenne' },
  { id: 'aisee', label: 'Aisée' },
];

const MORALITES = [
  { id: 'honnete', label: 'Honnête' },
  { id: 'louche', label: 'Louche' },
];

const GENRES = [
  { id: 'standard', label: 'Standard' },
  { id: 'horror', label: 'Étrange / Merveilleux' },
  { id: 'espionage', label: 'Espionnage' },
  { id: 'pulp', label: 'Pulp / Interlope' },
];

const SAISONS = [
  { id: 'hiver', label: 'Hiver' },
  { id: 'printemps', label: 'Printemps' },
  { id: 'ete', label: 'Été' },
  { id: 'automne', label: 'Automne' },
];

const TABLE_LABELS = {
  fouille_ordinaire: 'Fouille ordinaire',
  fouille_mondaine: 'Fouille mondaine',
  fouille_secrets: 'Secrets génériques',
  fouille_horreur: 'Étrange / Merveilleux',
  fouille_espionnage: 'Espionnage',
  fouille_pulp: 'Pulp / Interlope',
  fouille_saisonniere: 'Objet saisonnier',
};

const TABLES_CIBLES = Object.entries(TABLE_LABELS).map(([id, label]) => ({ id, label }));

function labelForDbKey(key) {
  if (key.startsWith('fouille_saisonniere_')) {
    const saison = key.replace('fouille_saisonniere_', '');
    return `${TABLE_LABELS.fouille_saisonniere} · ${saison}`;
  }
  return TABLE_LABELS[key] || key;
}

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

function ProposerObjet({ session, userProfile, proposer, ajouterDirectement, myProposals, submitting, entryToEdit, onCancelEdit }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('fouille_ordinaire');
  const [saison, setSaison] = useState('hiver');
  const [valueM, setValueM] = useState('');
  const [valueF, setValueF] = useState('');
  const [weight, setWeight] = useState(10);
  const [msg, setMsg] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const canDirectSave = !!userProfile && isAdmin(userProfile);

  useEffect(() => {
    if (!entryToEdit) return;
    setTableName(entryToEdit.table_name);
    setSaison(entryToEdit.saison || 'hiver');
    setValueM(entryToEdit.value_m || '');
    setValueF(entryToEdit.value_f || '');
    setWeight(entryToEdit.weight ?? 10);
    setEditingId(entryToEdit._dbId);
    setOpen(true);
  }, [entryToEdit]);

  if (!session?.user) return null;

  const annulerEdition = () => {
    setValueM(''); setValueF(''); setWeight(10); setEditingId(null);
    onCancelEdit?.();
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!valueM.trim()) return;
    const { error } = await proposer({ tableName, saison, valueM: valueM.trim(), valueF: valueF.trim(), weight: Number(weight) || 1 });
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' });
      setValueM('');
      setValueF('');
    }
  };

  const handleSaveDirect = async () => {
    if (!valueM.trim()) return;
    const { error } = await ajouterDirectement({ tableName, saison, valueM: valueM.trim(), valueF: valueF.trim(), weight: Number(weight) || 1 }, editingId);
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: editingId ? 'Objet modifié directement !' : 'Objet ajouté directement !' });
      setValueM(''); setValueF(''); setWeight(10); setEditingId(null);
      onCancelEdit?.();
    }
  };

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-teal-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        {editingId ? 'Modifier un objet' : 'Proposer un objet'}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
            <Select label="Table cible" value={tableName} onChange={setTableName} options={TABLES_CIBLES} />
            {tableName === 'fouille_saisonniere' && (
              <Select label="Saison" value={saison} onChange={setSaison} options={SAISONS} />
            )}
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Texte (masculin / neutre)
              <input value={valueM} onChange={(e) => setValueM(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" required />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Texte féminin (optionnel — laisser vide si neutre)
              <input value={valueF} onChange={(e) => setValueF(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600">
              Poids
              <input type="number" min="1" value={weight} onChange={(e) => setWeight(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" />
            </label>
            <div className="sm:col-span-2 flex items-center gap-3 flex-wrap">
              <button type="submit" disabled={submitting} className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                {submitting ? '…' : 'Proposer'}
              </button>
              {canDirectSave && (
                <button type="button" onClick={handleSaveDirect} disabled={submitting || !valueM.trim()} className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
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
                  <span>{p.value_m}</span>
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
  const cles = Object.keys(dbEntries).sort();

  return (
    <div className="space-y-6">
      {cles.length === 0 && (
        <p className="text-sm text-stone-400 font-serif text-center py-6">Aucune entrée approuvée pour l'instant.</p>
      )}
      {cles.map((cle) => (
        <div key={cle} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
          <p className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 text-xs font-bold text-stone-500 uppercase tracking-wider">
            {labelForDbKey(cle)}
          </p>
          <div className="divide-y divide-stone-100">
            {dbEntries[cle].map((entry) => (
              <div key={entry._dbId} className="flex items-start justify-between gap-3 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="font-serif text-stone-800 text-sm">{entry.m}</p>
                  {entry.f && <p className="font-serif text-stone-500 text-xs">{entry.f}</p>}
                </div>
                {canDirectSave && (
                  <button
                    onClick={() => setEntryToEdit({ table_name: cle.startsWith('fouille_saisonniere_') ? 'fouille_saisonniere' : cle, saison: cle.startsWith('fouille_saisonniere_') ? cle.replace('fouille_saisonniere_', '') : undefined, value_m: entry.m, value_f: entry.f, weight: entry.weight, _dbId: entry._dbId })}
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

      <ProposerObjet
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
  const [editForm, setEditForm] = useState({ value_m: '', value_f: '', weight: 1 });

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('poche_table_entries')
      .select('id, table_name, saison, value_m, value_f, weight, is_official, status, reject_reason, created_at')
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
    setEditForm({ value_m: entry.value_m, value_f: entry.value_f || '', weight: entry.weight });
  };

  const enregistrerEdition = async (entry) => {
    await ajouterDirectement({ tableName: entry.table_name, saison: entry.saison, valueM: editForm.value_m.trim(), valueF: editForm.value_f.trim(), weight: Number(editForm.weight) || 1 }, entry.id);
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
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun objet dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input value={editForm.value_m} onChange={(e) => setEditForm((f) => ({ ...f, value_m: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                  <input value={editForm.value_f} onChange={(e) => setEditForm((f) => ({ ...f, value_f: e.target.value }))} placeholder="Texte féminin (optionnel)" className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                  <input type="number" min="1" value={editForm.weight} onChange={(e) => setEditForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
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
                        {TABLE_LABELS[entry.table_name]}{entry.saison ? ` · ${entry.saison}` : ''} · poids {entry.weight}
                      </span>
                      {entry.is_official && <span className="text-xs text-teal-600 font-bold">Canon</span>}
                    </div>
                    <p className="font-serif text-stone-800 mt-0.5">{entry.value_m}</p>
                    {entry.value_f && <p className="font-serif text-stone-500 text-sm">{entry.value_f}</p>}
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

export default function PocheGenerateur({ onBack, userProfile, session }) {
  const { dbEntries, myProposals, loaded, submitting, proposer, ajouterDirectement, approuver, refuser } = usePocheTableEntries(session);
  const [activeTab, setActiveTab] = useState('generateur');
  const [config, setConfig] = useState({
    sexe: 'masculin', classeSociale: 'moyenne', moralite: 'honnete', genre: 'standard', saison: 'hiver', forceSecret: false,
  });
  const [inventaire, setInventaire] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const fouiller = () => setInventaire(genererInventaire(config, dbEntries));

  const estGardien = !!userProfile && isAdmin(userProfile);

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </button>
            <h1 className="font-serif font-bold text-amber-100 text-lg truncate">Générateur de Poche</h1>
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
              Tirez au sort le contenu des poches d'un PNJ fouillé — Paris, 1899.
            </p>

            <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <Select label="Sexe" value={config.sexe} onChange={set('sexe')} options={SEXES} />
                <Select label="Classe sociale" value={config.classeSociale} onChange={set('classeSociale')} options={CLASSES} />
                <Select label="Moralité" value={config.moralite} onChange={set('moralite')} options={MORALITES} />
                <Select label="Genre littéraire" value={config.genre} onChange={set('genre')} options={GENRES} />
                <Select label="Saison" value={config.saison} onChange={set('saison')} options={SAISONS} />
                <label className="flex items-center gap-2 text-sm font-serif text-stone-600 mt-5">
                  <input type="checkbox" checked={config.forceSecret} onChange={(e) => set('forceSecret')(e.target.checked)} />
                  Forcer un objet de secret
                </label>
              </div>

              <button
                onClick={fouiller}
                disabled={!loaded}
                className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
              >
                <Package size={18} /> {loaded ? 'Fouiller les poches' : 'Chargement des tables…'}
              </button>

              {inventaire && (
                <div className="mt-5 space-y-2">
                  {inventaire.map((objet, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm font-serif text-stone-800 bg-stone-50 rounded-lg px-3 py-2 border border-stone-100">
                      <span>•</span><span>{objet}</span>
                    </div>
                  ))}
                  <button onClick={fouiller} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-teal-700 mt-2">
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
