import React, { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, Activity, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle, Edit } from '../config/icons';
import { genererConsultation } from '../utils/cabinetGenerator';
import { useCabinetTableEntries } from '../hooks/useCabinetTableEntries';
import { isAdmin } from '../utils/authRoles';
import { useUserContext } from '../context/UserContext';
import { supabase } from '../config/supabase';

// ─── Constantes ──────────────────────────────────────────────────────────────

const DIFFICULTE_COLOR = {
  'Facile': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Moyen': 'text-amber-700 bg-amber-50 border-amber-200',
  'Difficile': 'text-orange-700 bg-orange-50 border-orange-200',
  'Très difficile': 'text-red-700 bg-red-50 border-red-200',
  'Impossible': 'text-purple-700 bg-purple-50 border-purple-200',
};

const TABLE_LABELS = {
  cabinet_noms: 'Noms & Prénoms',
  cabinet_backgrounds: 'Origines & Professions',
  cabinet_pathologies: 'Pathologies',
};

const TABLE_OPTIONS = [
  { id: 'cabinet_noms', label: 'Nom & Prénom' },
  { id: 'cabinet_backgrounds', label: 'Origine & Profession' },
  { id: 'cabinet_pathologies', label: 'Pathologie' },
];

const RARETE_OPTIONS = [
  { id: 'tres_frequent', label: 'Très fréquent' },
  { id: 'frequent', label: 'Fréquent' },
  { id: 'peu_frequent', label: 'Peu fréquent' },
  { id: 'rare', label: 'Rare' },
  { id: 'extremement_rare', label: 'Extrêmement rare' },
];

const DIFFICULTE_OPTIONS = ['Facile', 'Moyen', 'Difficile', 'Très difficile', 'Impossible'];
const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvés', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusés', icon: XCircle, color: 'text-red-600 border-red-500' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function entryLabel(tableName, entry) {
  if (tableName === 'cabinet_noms') return `${entry.prenom} ${entry.nom}`;
  if (tableName === 'cabinet_backgrounds') return `${entry.classe_sociale} — ${entry.profession}`;
  return entry.diagnostic;
}

function entrySubtitle(tableName, entry) {
  if (tableName === 'cabinet_noms') return entry.genre === 'M' ? 'Homme' : 'Femme';
  if (tableName === 'cabinet_backgrounds') return `${entry.genre} · ${entry.age_min}-${entry.age_max} ans`;
  return `${entry.difficulte} · ${entry.groupe_cible}`;
}

// ─── Composants partagés ─────────────────────────────────────────────────────

function Sel({ label, value, onChange, options, className = '' }) {
  return (
    <label className={`flex flex-col gap-1 text-sm font-serif text-stone-600 ${className}`}>
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5 bg-white">
        {options.map((o) => <option key={o.id ?? o} value={o.id ?? o}>{o.label ?? o}</option>)}
      </select>
    </label>
  );
}

function Inp({ label, value, onChange, required, className = '', type = 'text', placeholder = '' }) {
  return (
    <label className={`flex flex-col gap-1 text-sm font-serif text-stone-600 ${className}`}>
      {label}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} placeholder={placeholder}
        className="border border-stone-200 rounded-lg px-2 py-1.5" />
    </label>
  );
}

// ─── Formulaire de proposition ────────────────────────────────────────────────

const DEFAULT_FORM = {
  prenom: '', nom: '', genre: 'M',
  classe_sociale: '', profession: '', genre_bg: 'Mixte', age_min: '20', age_max: '50', rarete_bg: 'frequent',
  diagnostic: '', symptomes: '', difficulte: 'Moyen', notes_historiques: '',
  genre_autorise: 'Tous', groupe_cible: 'Adulte', rarete_patho: 'frequent',
};

function buildFields(tableName, form) {
  if (tableName === 'cabinet_noms') {
    return { prenom: form.prenom.trim(), nom: form.nom.trim(), genre: form.genre };
  }
  if (tableName === 'cabinet_backgrounds') {
    return {
      classe_sociale: form.classe_sociale.trim(),
      profession: form.profession.trim(),
      genre: form.genre_bg,
      age_min: Number(form.age_min),
      age_max: Number(form.age_max),
      rarete: form.rarete_bg,
    };
  }
  return {
    diagnostic: form.diagnostic.trim(),
    symptomes: form.symptomes.trim(),
    difficulte: form.difficulte,
    notes_historiques: form.notes_historiques.trim() || null,
    genre_autorise: form.genre_autorise,
    groupe_cible: form.groupe_cible,
    rarete: form.rarete_patho,
  };
}

function isFormValid(tableName, form) {
  if (tableName === 'cabinet_noms') return form.prenom.trim() && form.nom.trim();
  if (tableName === 'cabinet_backgrounds') return form.classe_sociale.trim() && form.profession.trim();
  return form.diagnostic.trim() && form.symptomes.trim();
}

function ProposerEntree({ session, userProfile, proposer, ajouterDirectement, myProposals, submitting, entryToEdit, onCancelEdit }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('cabinet_noms');
  const [form, setForm] = useState(DEFAULT_FORM);
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState(null);

  const canDirectSave = !!userProfile && isAdmin(userProfile);
  const set = (key) => (val) => setForm(f => ({ ...f, [key]: val }));

  useEffect(() => {
    if (!entryToEdit) return;
    const { _tableName, _dbId, ...data } = entryToEdit;
    setTableName(_tableName);
    setEditingId(_dbId);
    setOpen(true);
    if (_tableName === 'cabinet_noms') {
      setForm(f => ({ ...f, prenom: data.prenom || '', nom: data.nom || '', genre: data.genre || 'M' }));
    } else if (_tableName === 'cabinet_backgrounds') {
      setForm(f => ({ ...f, classe_sociale: data.classe_sociale || '', profession: data.profession || '', genre_bg: data.genre || 'Mixte', age_min: String(data.age_min ?? 20), age_max: String(data.age_max ?? 50), rarete_bg: data.rarete || 'frequent' }));
    } else {
      setForm(f => ({ ...f, diagnostic: data.diagnostic || '', symptomes: data.symptomes || '', difficulte: data.difficulte || 'Moyen', notes_historiques: data.notes_historiques || '', genre_autorise: data.genre_autorise || 'Tous', groupe_cible: data.groupe_cible || 'Adulte', rarete_patho: data.rarete || 'frequent' }));
    }
  }, [entryToEdit]);

  if (!session?.user) return null;

  const reset = () => { setForm(DEFAULT_FORM); setEditingId(null); onCancelEdit?.(); };

  const handleProposer = async (e) => {
    e.preventDefault();
    const { error } = await proposer({ tableName, ...buildFields(tableName, form) });
    if (error) { setMsg({ type: 'error', text: error.message }); }
    else { setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' }); setForm(DEFAULT_FORM); }
  };

  const handleDirect = async () => {
    const { error } = await ajouterDirectement({ tableName, editingId, ...buildFields(tableName, form) });
    if (error) { setMsg({ type: 'error', text: error.message }); }
    else { setMsg({ type: 'success', text: editingId ? 'Entrée modifiée !' : 'Entrée ajoutée !' }); reset(); }
  };

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen(v => !v)} className="flex items-center gap-2 text-sm font-bold text-red-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        {editingId ? 'Modifier une entrée' : 'Proposer une entrée'}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <form onSubmit={handleProposer} className="grid gap-3 sm:grid-cols-2">
            <Sel label="Table" value={tableName} onChange={t => { setTableName(t); setEditingId(null); }} options={TABLE_OPTIONS} className="sm:col-span-2" />

            {tableName === 'cabinet_noms' && (<>
              <Inp label="Prénom" value={form.prenom} onChange={set('prenom')} required />
              <Inp label="Nom" value={form.nom} onChange={set('nom')} required />
              <Sel label="Genre" value={form.genre} onChange={set('genre')} options={[{ id: 'M', label: 'Homme' }, { id: 'F', label: 'Femme' }]} />
            </>)}

            {tableName === 'cabinet_backgrounds' && (<>
              <Inp label="Classe sociale" value={form.classe_sociale} onChange={set('classe_sociale')} required />
              <Inp label="Profession" value={form.profession} onChange={set('profession')} required />
              <Sel label="Genre" value={form.genre_bg} onChange={set('genre_bg')} options={[{ id: 'M', label: 'Homme' }, { id: 'F', label: 'Femme' }, { id: 'Mixte', label: 'Mixte' }]} />
              <Sel label="Rareté" value={form.rarete_bg} onChange={set('rarete_bg')} options={RARETE_OPTIONS} />
              <Inp label="Âge min" value={form.age_min} onChange={set('age_min')} type="number" />
              <Inp label="Âge max" value={form.age_max} onChange={set('age_max')} type="number" />
            </>)}

            {tableName === 'cabinet_pathologies' && (<>
              <Inp label="Diagnostic" value={form.diagnostic} onChange={set('diagnostic')} required className="sm:col-span-2" />
              <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
                Symptômes <textarea rows={2} required value={form.symptomes} onChange={e => set('symptomes')(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5 resize-none" />
              </label>
              <Sel label="Difficulté" value={form.difficulte} onChange={set('difficulte')} options={DIFFICULTE_OPTIONS} />
              <Sel label="Rareté" value={form.rarete_patho} onChange={set('rarete_patho')} options={RARETE_OPTIONS} />
              <Sel label="Genre autorisé" value={form.genre_autorise} onChange={set('genre_autorise')} options={[{ id: 'M', label: 'Homme' }, { id: 'F', label: 'Femme' }, { id: 'Tous', label: 'Tous' }]} />
              <Sel label="Groupe cible" value={form.groupe_cible} onChange={set('groupe_cible')} options={['Adulte', 'Vieillard', 'Tous']} />
              <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
                Notes historiques (optionnel) <textarea rows={2} value={form.notes_historiques} onChange={e => set('notes_historiques')(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5 resize-none" />
              </label>
            </>)}

            <div className="sm:col-span-2 flex items-center gap-3 flex-wrap">
              {!canDirectSave && (
                <button type="submit" disabled={submitting || !isFormValid(tableName, form)} className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                  {submitting ? '…' : 'Proposer'}
                </button>
              )}
              {canDirectSave && (
                <button type="button" onClick={handleDirect} disabled={submitting || !isFormValid(tableName, form)} className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                  {editingId ? '✎ Modifier directement' : '✓ Ajouter directement'}
                </button>
              )}
              {editingId && (
                <button type="button" onClick={reset} className="text-xs text-stone-400 hover:text-stone-600">Annuler la modification</button>
              )}
            </div>
          </form>

          {msg && <p className={`text-sm ${msg.type === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>{msg.text}</p>}

          {myProposals.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Mes propositions</p>
              {myProposals.map((p) => (
                <div key={`${p._tableName}-${p.id}`} className="text-sm flex items-center gap-2 text-stone-600">
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

// ─── Onglet Tables ────────────────────────────────────────────────────────────

function TablesTab({ dbEntries, myProposals, session, userProfile, proposer, ajouterDirectement, submitting }) {
  const [entryToEdit, setEntryToEdit] = useState(null);
  const canEdit = !!userProfile && isAdmin(userProfile);

  return (
    <div className="space-y-6">
      {Object.entries(TABLE_LABELS).map(([tableName, tableLabel]) => {
        const entries = dbEntries[tableName] || [];
        return (
          <div key={tableName} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
            <p className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 text-xs font-bold text-stone-500 uppercase tracking-wider">
              {tableLabel} ({entries.length})
            </p>
            {entries.length === 0 && (
              <p className="px-4 py-3 text-sm text-stone-400 font-serif italic">Aucune entrée.</p>
            )}
            <div className="divide-y divide-stone-100">
              {entries.map((entry) => (
                <div key={entry._dbId} className="flex items-start justify-between gap-3 px-4 py-2.5">
                  <div className="min-w-0">
                    <p className="font-serif text-stone-800 text-sm">{entryLabel(tableName, entry)}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{entrySubtitle(tableName, entry)}</p>
                  </div>
                  {canEdit && (
                    <button
                      onClick={() => setEntryToEdit({ _tableName: tableName, _dbId: entry._dbId, ...entry })}
                      className="flex-shrink-0 p-1.5 rounded-lg text-stone-400 hover:text-red-700 hover:bg-red-50 transition-colors"
                      title="Modifier"
                    >
                      <Edit size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <ProposerEntree
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

// ─── Onglet Validation ────────────────────────────────────────────────────────

function ValidationTab({ session, approuver, refuser, ajouterDirectement }) {
  const [statusFilter, setStatusFilter] = useState('pending');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rejectReasonFor, setRejectReasonFor] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const load = useCallback(async () => {
    setLoading(true);
    const [{ data: noms }, { data: bgs }, { data: pathos }] = await Promise.all([
      supabase.from('cabinet_noms').select('id,prenom,nom,genre,is_official,status,reject_reason,created_at').eq('status', statusFilter).order('created_at', { ascending: statusFilter === 'pending' }),
      supabase.from('cabinet_backgrounds').select('id,classe_sociale,profession,genre,age_min,age_max,rarete,is_official,status,reject_reason,created_at').eq('status', statusFilter).order('created_at', { ascending: statusFilter === 'pending' }),
      supabase.from('cabinet_pathologies').select('id,diagnostic,symptomes,difficulte,notes_historiques,genre_autorise,groupe_cible,rarete,is_official,status,reject_reason,created_at').eq('status', statusFilter).order('created_at', { ascending: statusFilter === 'pending' }),
    ]);

    const merged = [
      ...(noms || []).map(r => ({ ...r, _tableName: 'cabinet_noms', _label: `${r.prenom} ${r.nom}`, _sub: r.genre === 'M' ? 'Homme' : 'Femme' })),
      ...(bgs || []).map(r => ({ ...r, _tableName: 'cabinet_backgrounds', _label: `${r.classe_sociale} — ${r.profession}`, _sub: `${r.genre} · ${r.age_min}-${r.age_max} ans` })),
      ...(pathos || []).map(r => ({ ...r, _tableName: 'cabinet_pathologies', _label: r.diagnostic, _sub: `${r.difficulte} · ${r.groupe_cible}` })),
    ].sort((a, b) => statusFilter === 'pending'
      ? new Date(a.created_at) - new Date(b.created_at)
      : new Date(b.created_at) - new Date(a.created_at)
    );
    setEntries(merged);
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  const handleApprouver = async (entry) => { await approuver(entry); load(); };
  const handleRefuser = async (entry, motif) => { await refuser(entry, motif); setRejectReasonFor(null); setRejectReason(''); load(); };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    if (entry._tableName === 'cabinet_noms') {
      setEditForm({ prenom: entry.prenom, nom: entry.nom, genre: entry.genre });
    } else if (entry._tableName === 'cabinet_backgrounds') {
      setEditForm({ classe_sociale: entry.classe_sociale, profession: entry.profession, genre: entry.genre, age_min: String(entry.age_min), age_max: String(entry.age_max), rarete: entry.rarete });
    } else {
      setEditForm({ diagnostic: entry.diagnostic, symptomes: entry.symptomes, difficulte: entry.difficulte, notes_historiques: entry.notes_historiques || '', genre_autorise: entry.genre_autorise, groupe_cible: entry.groupe_cible, rarete: entry.rarete });
    }
  };

  const saveEdit = async (entry) => {
    const fields = entry._tableName === 'cabinet_backgrounds'
      ? { ...editForm, age_min: Number(editForm.age_min), age_max: Number(editForm.age_max) }
      : editForm;
    await ajouterDirectement({ tableName: entry._tableName, editingId: entry.id, ...fields });
    setEditingId(null);
    load();
  };

  const setF = (key) => (e) => setEditForm(f => ({ ...f, [key]: e.target ? e.target.value : e }));

  return (
    <div className="space-y-5">
      <div className="flex gap-4 border-b border-stone-200">
        {STATUS_TABS.map(({ id, label, icon: Icon, color }) => (
          <button key={id} onClick={() => setStatusFilter(id)} className={`pb-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 border-b-2 transition-colors ${statusFilter === id ? color : 'text-stone-400 border-transparent hover:text-stone-600'}`}>
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucune entrée dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={`${entry._tableName}-${entry.id}`} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {entry._tableName === 'cabinet_noms' && (<>
                    <input value={editForm.prenom} onChange={setF('prenom')} placeholder="Prénom" className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                    <input value={editForm.nom} onChange={setF('nom')} placeholder="Nom" className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                    <select value={editForm.genre} onChange={setF('genre')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      <option value="M">Homme</option><option value="F">Femme</option>
                    </select>
                  </>)}
                  {entry._tableName === 'cabinet_backgrounds' && (<>
                    <input value={editForm.classe_sociale} onChange={setF('classe_sociale')} placeholder="Classe sociale" className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                    <input value={editForm.profession} onChange={setF('profession')} placeholder="Profession" className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                    <select value={editForm.genre} onChange={setF('genre')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      <option value="M">Homme</option><option value="F">Femme</option><option value="Mixte">Mixte</option>
                    </select>
                    <select value={editForm.rarete} onChange={setF('rarete')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      {RARETE_OPTIONS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                    </select>
                    <input type="number" value={editForm.age_min} onChange={setF('age_min')} placeholder="Âge min" className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                    <input type="number" value={editForm.age_max} onChange={setF('age_max')} placeholder="Âge max" className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                  </>)}
                  {entry._tableName === 'cabinet_pathologies' && (<>
                    <input value={editForm.diagnostic} onChange={setF('diagnostic')} placeholder="Diagnostic" className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                    <textarea rows={2} value={editForm.symptomes} onChange={setF('symptomes')} placeholder="Symptômes" className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2 resize-none" />
                    <select value={editForm.difficulte} onChange={setF('difficulte')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      {DIFFICULTE_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <select value={editForm.rarete} onChange={setF('rarete')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      {RARETE_OPTIONS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                    </select>
                    <select value={editForm.genre_autorise} onChange={setF('genre_autorise')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      <option value="M">Homme</option><option value="F">Femme</option><option value="Tous">Tous</option>
                    </select>
                    <select value={editForm.groupe_cible} onChange={setF('groupe_cible')} className="border border-stone-200 rounded-lg px-2 py-1 text-sm bg-white">
                      <option value="Adulte">Adulte</option><option value="Vieillard">Vieillard</option><option value="Tous">Tous</option>
                    </select>
                    <textarea rows={2} value={editForm.notes_historiques} onChange={setF('notes_historiques')} placeholder="Notes historiques (optionnel)" className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2 resize-none" />
                  </>)}
                  <div className="flex gap-2 sm:col-span-2">
                    <button onClick={() => saveEdit(entry)} className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded px-3 py-1.5">Enregistrer</button>
                    <button onClick={() => setEditingId(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">Annuler</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{TABLE_LABELS[entry._tableName]}</span>
                      {entry.is_official && <span className="text-xs text-red-600 font-bold">Canon</span>}
                    </div>
                    <p className="font-serif text-stone-800">{entry._label}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{entry._sub}</p>
                    {entry.status === 'rejected' && entry.reject_reason && (
                      <p className="text-xs text-red-500 mt-1">{entry.reject_reason}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {statusFilter === 'pending' && (<>
                      <button onClick={() => handleApprouver(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                        <CheckCircle size={13} /> Approuver
                      </button>
                      {rejectReasonFor === `${entry._tableName}-${entry.id}` ? (
                        <div className="flex flex-col gap-1.5">
                          <input autoFocus value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Raison (optionnel)" className="text-xs border border-stone-200 rounded px-2 py-1" />
                          <div className="flex gap-1">
                            <button onClick={() => handleRefuser(entry, rejectReason)} className="flex-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1">Confirmer</button>
                            <button onClick={() => setRejectReasonFor(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">✕</button>
                          </div>
                        </div>
                      ) : (
                        <button onClick={() => setRejectReasonFor(`${entry._tableName}-${entry.id}`)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-red-50 text-red-600 border border-stone-200 rounded-lg">
                          <XCircle size={13} /> Refuser
                        </button>
                      )}
                    </>)}
                    {statusFilter === 'approved' && (
                      <button onClick={() => startEdit(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-red-50 text-red-700 border border-stone-200 rounded-lg">
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

// ─── Composants du générateur ─────────────────────────────────────────────────

function Section({ titre, children }) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4 space-y-2">
      <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{titre}</h3>
      {children}
    </div>
  );
}

function Personne({ label, data }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{label}</span>
      <span className="font-serif font-bold text-stone-900">{data.nom}</span>
      <span className="text-xs text-stone-500">{data.age} ans · {data.classe} — {data.profession || data.statut}</span>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function CabinetGenerateur({ onBack }) {
  const { session, userProfile } = useUserContext();
  const { dbEntries, myProposals, submitting, proposer, ajouterDirectement, approuver, refuser } = useCabinetTableEntries(session);
  const [activeTab, setActiveTab] = useState('generateur');
  const [genreMedecin, setGenreMedecin] = useState('M');
  const [consultation, setConsultation] = useState(null);
  const [loading, setLoading] = useState(false);

  const estGardien = !!userProfile && isAdmin(userProfile);

  const generer = async () => {
    setLoading(true);
    try {
      const result = await genererConsultation(genreMedecin);
      setConsultation(result);
    } finally {
      setLoading(false);
    }
  };

  const diffClass = consultation ? (DIFFICULTE_COLOR[consultation.diagnostic?.difficulte] || 'text-stone-600 bg-stone-50 border-stone-200') : '';

  const tabs = [
    { id: 'generateur', label: 'Générateur' },
    { id: 'tables', label: 'Tables' },
    ...(estGardien ? [{ id: 'validation', label: 'Validation' }] : []),
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg print:hidden">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={onBack} className="p-1.5 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
              <ArrowLeft size={18} />
            </button>
            <Activity size={18} className="text-red-400 flex-shrink-0" />
            <h1 className="font-serif font-bold text-amber-100 text-base truncate">Cabinet Médical</h1>
          </div>
          <div className="flex flex-shrink-0 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold font-serif rounded-lg transition-colors ${activeTab === tab.id ? 'bg-amber-700/40 text-amber-200' : 'text-amber-200/50 hover:text-amber-200/80 hover:bg-white/5'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">

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

        {activeTab === 'generateur' && (<>

          {/* Formulaire */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Genre du médecin</span>
              <div className="flex gap-2">
                {[['M', 'Homme'], ['F', 'Femme']].map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setGenreMedecin(val)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-bold border transition-colors ${
                      genreMedecin === val
                        ? 'bg-red-700 text-white border-red-700'
                        : 'bg-white text-stone-600 border-stone-200 hover:border-red-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generer}
              disabled={loading}
              className="sm:ml-auto flex items-center gap-2 px-6 py-2.5 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white font-bold font-serif rounded-xl shadow-md transition-colors"
            >
              {loading ? <RotateCcw size={16} className="animate-spin" /> : <Activity size={16} />}
              {loading ? 'Tirage…' : 'Appeler le suivant'}
            </button>
          </div>

          {/* Résultat */}
          {consultation && (
            <div className="space-y-4 animate-in fade-in duration-300">

              <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">Type de consultation</span>
                <span className="font-serif font-bold text-red-900 text-lg">{consultation.type}</span>
              </div>

              <Section titre="Personnes présentes">
                <Personne label="Consultant" data={consultation.principal} />
                {consultation.secondaire && (
                  <div className="border-t border-stone-100 pt-2 mt-2">
                    <Personne label={consultation.secondaire.statut} data={consultation.secondaire} />
                  </div>
                )}
              </Section>

              <Section titre="Diagnostic médical">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className="text-xs text-stone-400 block mb-0.5">Malade : {consultation.diagnostic.malade}</span>
                    <p className="font-serif font-bold text-stone-900 text-base">{consultation.diagnostic.diagnostic}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border ${diffClass}`}>
                    {consultation.diagnostic.difficulte}
                  </span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed italic border-l-2 border-stone-200 pl-3">
                  {consultation.diagnostic.symptomes}
                </p>
                {consultation.diagnostic.notes_historiques && (
                  <p className="text-xs text-stone-400 leading-relaxed">
                    📜 {consultation.diagnostic.notes_historiques}
                  </p>
                )}
              </Section>

              <Section titre="Psychologie de la scène">
                {Object.entries(consultation.psychologie).map(([cle, texte]) => (
                  <p key={cle} className="text-sm text-stone-700 font-serif leading-relaxed">{texte}</p>
                ))}
              </Section>

              <button
                onClick={generer}
                disabled={loading}
                className="w-full py-2.5 border-2 border-dashed border-stone-300 hover:border-red-300 text-stone-400 hover:text-red-600 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={14} /> Prochain patient
              </button>

            </div>
          )}

          {!consultation && !loading && (
            <div className="text-center py-16 text-stone-400 font-serif italic text-sm">
              La salle d'attente est pleine. Le prochain patient attend votre signal.
            </div>
          )}

        </>)}
      </div>
    </div>
  );
}
