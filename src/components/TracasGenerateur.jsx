import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, AlertTriangle, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle, Edit } from '../config/icons';
import { useTracasTableEntries } from '../hooks/useTracasTableEntries';
import { genererTracas } from '../utils/tracasGenerator';
import { isAdmin } from '../utils/authRoles';
import { supabase } from '../config/supabase';

const CATEGORIES = [
  { id: 'toutes', label: 'Toutes catégories' },
  { id: 'sante', label: 'Santé & Corps' },
  { id: 'logistique', label: 'Logistique & Budget' },
  { id: 'social', label: 'Social & Réputation' },
  { id: 'technologie', label: 'Modernité & Technique' },
];

const NOMBRE_OPTIONS = [
  { id: '1', label: '1 tracas' },
  { id: '2', label: '2 tracas' },
  { id: '3', label: '3 tracas' },
];

const POIDS_OPTIONS = [
  { id: '50', label: 'Fréquent (50)' },
  { id: '25', label: 'Modéré (25)' },
  { id: '5', label: 'Rare (5)' },
];

const TABLE_LABELS = {
  sante: 'Santé & Corps',
  logistique: 'Logistique & Budget',
  social: 'Social & Réputation',
  technologie: 'Modernité & Technique',
  ex_lettre_anonyme: 'Exemples · Lettre anonyme',
  ex_parent_eloigne: 'Exemples · Parent éloigné',
  ex_facheur: 'Exemples · Fâcheur',
  ex_rumeur_journal: 'Exemples · Rumeur de journal',
  ex_erreur_livraison: 'Exemples · Erreur de livraison',
  ex_pli_officiel: 'Exemples · Pli officiel',
  ex_gamin_rue: 'Exemples · Gamin de rue',
};

const CAT_COLORS = {
  sante: 'bg-rose-50 border-rose-200 text-rose-800',
  logistique: 'bg-stone-50 border-stone-200 text-stone-800',
  social: 'bg-amber-50 border-amber-200 text-amber-800',
  technologie: 'bg-sky-50 border-sky-200 text-sky-800',
};

const CAT_BADGE = {
  sante: 'bg-rose-100 text-rose-700',
  logistique: 'bg-stone-200 text-stone-600',
  social: 'bg-amber-100 text-amber-700',
  technologie: 'bg-sky-100 text-sky-700',
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

function ProposerTracas({ session, userProfile, proposer, ajouterDirectement, myProposals, submitting, entryToEdit, onCancelEdit }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('sante');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [exempleKey, setExempleKey] = useState('');
  const [weight, setWeight] = useState('25');
  const [msg, setMsg] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const canDirectSave = !!userProfile && isAdmin(userProfile);

  useEffect(() => {
    if (!entryToEdit) return;
    setTableName(entryToEdit.table_name);
    setTitre(entryToEdit.titre || '');
    setDescription(entryToEdit.description || '');
    setExempleKey(entryToEdit.exemple_key || '');
    setWeight(String(entryToEdit.weight ?? 25));
    setEditingId(entryToEdit._dbId);
    setOpen(true);
  }, [entryToEdit]);

  if (!session?.user) return null;

  const annulerEdition = () => {
    setTitre(''); setDescription(''); setExempleKey(''); setWeight('25'); setEditingId(null);
    onCancelEdit?.();
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!titre.trim()) return;
    const { error } = await proposer({ tableName, titre: titre.trim(), description: description.trim(), exempleKey: exempleKey || null, weight: Number(weight) });
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' });
      setTitre(''); setDescription('');
    }
  };

  const handleSaveDirect = async () => {
    if (!titre.trim()) return;
    const { error } = await ajouterDirectement({ tableName, titre: titre.trim(), description: description.trim(), exempleKey: exempleKey || null, weight: Number(weight) }, editingId);
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: editingId ? 'Tracas modifié !' : 'Tracas ajouté directement !' });
      setTitre(''); setDescription(''); setExempleKey(''); setWeight('25'); setEditingId(null);
      onCancelEdit?.();
    }
  };

  const CATEGORIES_PRINCIPALES = CATEGORIES.filter((c) => c.id !== 'toutes');

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-orange-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        {editingId ? 'Modifier un tracas' : 'Proposer un tracas'}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
            <Select
              label="Catégorie"
              value={tableName}
              onChange={setTableName}
              options={CATEGORIES_PRINCIPALES}
            />
            <Select
              label="Fréquence"
              value={weight}
              onChange={setWeight}
              options={POIDS_OPTIONS}
            />
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Titre du tracas
              <input value={titre} onChange={(e) => setTitre(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" required />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Description (optionnel)
              <textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5 resize-none" />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Sous-générateur (optionnel)
              <select value={exempleKey} onChange={(e) => setExempleKey(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5 bg-white">
                <option value="">— aucun —</option>
                <option value="lettre_anonyme">Lettre anonyme</option>
                <option value="parent_eloigne">Parent éloigné</option>
                <option value="facheur">Fâcheur</option>
                <option value="rumeur_journal">Rumeur de journal</option>
                <option value="erreur_livraison">Erreur de livraison</option>
                <option value="pli_officiel">Pli officiel</option>
                <option value="gamin_rue">Gamin de rue</option>
              </select>
            </label>
            <div className="sm:col-span-2 flex items-center gap-3 flex-wrap">
              <button type="submit" disabled={submitting} className="px-4 py-2 bg-orange-700 hover:bg-orange-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                {submitting ? '…' : 'Proposer'}
              </button>
              {canDirectSave && (
                <button type="button" onClick={handleSaveDirect} disabled={submitting || !titre.trim()} className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
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
                  <span>{p.titre}</span>
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
            {TABLE_LABELS[cle] || cle}
          </p>
          <div className="divide-y divide-stone-100">
            {dbEntries[cle].map((entry) => (
              <div key={entry._dbId} className="flex items-start justify-between gap-3 px-4 py-2.5">
                <div className="min-w-0">
                  <p className="font-serif text-stone-800 text-sm">{entry.titre}</p>
                  {entry.description && <p className="font-serif text-stone-500 text-xs mt-0.5">{entry.description}</p>}
                  {entry.exemple_key && (
                    <p className="text-xs text-orange-600 mt-0.5">↳ {TABLE_LABELS[`ex_${entry.exemple_key}`] || entry.exemple_key}</p>
                  )}
                </div>
                {canDirectSave && (
                  <button
                    onClick={() => setEntryToEdit({ table_name: cle, titre: entry.titre, description: entry.description, exemple_key: entry.exemple_key, weight: entry.weight, _dbId: entry._dbId })}
                    className="flex-shrink-0 p-1.5 rounded-lg text-stone-400 hover:text-orange-700 hover:bg-orange-50 transition-colors"
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

      <ProposerTracas
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
  const [editForm, setEditForm] = useState({ titre: '', description: '', weight: 25 });

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('tracas_table_entries')
      .select('id, table_name, titre, description, exemple_key, weight, is_official, status, reject_reason, created_at')
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
    setEditForm({ titre: entry.titre, description: entry.description || '', weight: entry.weight });
  };

  const enregistrerEdition = async (entry) => {
    await ajouterDirectement({ tableName: entry.table_name, titre: editForm.titre.trim(), description: editForm.description.trim(), exempleKey: entry.exemple_key || null, weight: Number(editForm.weight) || 1 }, entry.id);
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
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun tracas dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input value={editForm.titre} onChange={(e) => setEditForm((f) => ({ ...f, titre: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" placeholder="Titre" />
                  <textarea rows={2} value={editForm.description} onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))} placeholder="Description (optionnel)" className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2 resize-none" />
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
                        {TABLE_LABELS[entry.table_name] || entry.table_name} · poids {entry.weight}
                      </span>
                      {entry.is_official && <span className="text-xs text-orange-600 font-bold">Canon</span>}
                    </div>
                    <p className="font-serif text-stone-800 mt-0.5">{entry.titre}</p>
                    {entry.description && <p className="font-serif text-stone-500 text-sm">{entry.description}</p>}
                    {entry.exemple_key && <p className="text-xs text-orange-600 mt-0.5">↳ {TABLE_LABELS[`ex_${entry.exemple_key}`] || entry.exemple_key}</p>}
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
                      <button onClick={() => commencerEdition(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-orange-50 text-orange-700 border border-stone-200 rounded-lg">
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

export default function TracasGenerateur({ onBack, userProfile, session }) {
  const { dbEntries, myProposals, loaded, submitting, proposer, ajouterDirectement, approuver, refuser } = useTracasTableEntries(session);
  const [activeTab, setActiveTab] = useState('generateur');
  const [config, setConfig] = useState({ categorie: 'toutes', nombre: '1' });
  const [resultats, setResultats] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const tirer = () => setResultats(genererTracas({ categorie: config.categorie, nombre: Number(config.nombre) }, dbEntries));

  const estGardien = !!userProfile && isAdmin(userProfile);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </button>
            <h1 className="font-serif font-bold text-amber-100 text-lg truncate">Générateur de Tracas</h1>
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
              Tirez au sort les tracas du quotidien qui pèsent sur vos personnages — Paris, 1899.
            </p>

            <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <Select label="Catégorie" value={config.categorie} onChange={set('categorie')} options={CATEGORIES} />
                <Select label="Nombre de tracas" value={config.nombre} onChange={set('nombre')} options={NOMBRE_OPTIONS} />
              </div>

              <button
                onClick={tirer}
                disabled={!loaded}
                className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-700 hover:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
              >
                <AlertTriangle size={18} /> {loaded ? 'Tirer un tracas' : 'Chargement des tables…'}
              </button>

              {resultats && (
                <div className="mt-5 space-y-3">
                  {resultats.map((t, i) => (
                    <div key={i} className={`rounded-xl border-2 px-4 py-3 ${CAT_COLORS[t.categorie] || 'bg-stone-50 border-stone-200 text-stone-800'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${CAT_BADGE[t.categorie] || 'bg-stone-200 text-stone-600'}`}>
                          {TABLE_LABELS[t.categorie] || t.categorie}
                        </span>
                      </div>
                      <p className="font-serif font-bold text-sm">{t.titre}</p>
                      {t.description && <p className="font-serif text-sm mt-0.5 opacity-80">{t.description}</p>}
                      {t.exemple && <p className="text-xs italic mt-1 opacity-70">↳ {t.exemple}</p>}
                    </div>
                  ))}
                  <button onClick={tirer} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-orange-700 mt-1">
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
