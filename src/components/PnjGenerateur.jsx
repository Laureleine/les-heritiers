// src/components/PnjGenerateur.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, Dices, Wand2, Save, RotateCcw, ChevronDown, Plus, Clock, CheckCircle, XCircle, Edit } from '../config/icons';
import { supabase } from '../config/supabase';
import { genererPnj, rerollChamp, pnjVersPayloadFigure } from '../utils/pnjGenerator';
import {
  TRANCHES_AGE, SEXES, GENRES, NATIONALITES,
  SITUATIONS_MATRIMONIALES, SITUATIONS_FAMILIALES,
  TABLES_REEL, METIERS_PAR_TRANCHE_AGE,
  WEIGHT_LABELS, weightLabel,
  accordLabel, resolveText, getPolarity,
} from '../data/pnjTables';
import { usePnjTableEntries } from '../hooks/usePnjTableEntries';
import { isAdmin } from '../utils/authRoles';

// ─── CONFIGURATION DES TABLES ────────────────────────────────────────────────

const IDENTITY_TABLE_MAP = {
  tranches_age: TRANCHES_AGE,
  sexes: SEXES,
  genres: GENRES,
  nationalites: NATIONALITES,
  situations_matrimoniales: SITUATIONS_MATRIMONIALES,
  situations_familiales: SITUATIONS_FAMILIALES,
};

const TABLES_CONFIG = [
  { id: 'apparences',     label: 'Apparences',                tableName: 'apparences',    trancheAge: null },
  { id: 'comportements',  label: 'Comportements distinctifs', tableName: 'comportements', trancheAge: null },
  { id: 'genres',                     label: 'Genres & expressions',          tableName: 'genres',                     isIdentity: true },
  { id: 'metiers_jeune',  label: 'Métiers · 18–30 ans',       tableName: 'metiers',       trancheAge: 'jeune' },
  { id: 'metiers_adulte', label: 'Métiers · 31–50 ans',       tableName: 'metiers',       trancheAge: 'adulte' },
  { id: 'metiers_mur',    label: 'Métiers · 51–70 ans',       tableName: 'metiers',       trancheAge: 'mur' },
  { id: 'metiers_age',    label: 'Métiers · 71+ ans',         tableName: 'metiers',       trancheAge: 'age' },
  { id: 'motivations',    label: 'Motivations',               tableName: 'motivations',   trancheAge: null },
  { id: 'nationalites',               label: 'Nationalités',                  tableName: 'nationalites',               isIdentity: true },
  { id: 'phobies',        label: 'Phobies',                   tableName: 'phobies',       trancheAge: null },
  { id: 'hobbies',        label: 'Passions & passe-temps',    tableName: 'hobbies',       trancheAge: null },
  { id: 'secrets',        label: 'Secrets & accroches',       tableName: 'secrets',       trancheAge: null },
  { id: 'sexes',                      label: 'Sexes',                         tableName: 'sexes',                      isIdentity: true },
  { id: 'situations_familiales',      label: 'Situations familiales',        tableName: 'situations_familiales',      isIdentity: true },
  { id: 'situations_matrimoniales',   label: 'Situations matrimoniales',     tableName: 'situations_matrimoniales',   isIdentity: true },
  { id: 'tranches_age',              label: 'Tranches d\'âge',               tableName: 'tranches_age',              isIdentity: true },
  { id: 'traits',         label: 'Traits de caractère',      tableName: 'traits',        trancheAge: null },
];

function getHardcoded(config) {
  if (config.isIdentity) return IDENTITY_TABLE_MAP[config.tableName] || [];
  if (config.trancheAge) return METIERS_PAR_TRANCHE_AGE[config.trancheAge] || [];
  return TABLES_REEL[config.tableName] || [];
}

// Dots de polarité : ●/●● à gauche = clair, ●/●● à droite = sombre
const DOT_LEFT  = { l2: '●●', l1: '●', n: '', d1: '', d2: '' };
const DOT_RIGHT = { l2: '', l1: '', n: '', d1: '●', d2: '●●' };

function EntryCell({ entry, isDb, genderView = 'm', onEdit, isIdentity }) {
  if (isIdentity) {
    const weight = entry.weight ?? 'frequent';
    const weightDisplay = typeof weight === 'string' ? weightLabel(weight) : `×${weight}`;
    return (
      <div className={`flex items-center gap-1 px-2.5 py-2 group ${isDb ? 'bg-amber-50' : ''}`}>
        <span className="flex-1 text-sm font-serif leading-snug text-stone-700">{entry.label}</span>
        <span className="text-xs text-stone-400 bg-stone-100 rounded px-1.5 py-0.5 font-mono">{weightDisplay}</span>
        {onEdit && (
          <button onClick={onEdit} className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded text-stone-300 hover:text-amber-600" title="Proposer une correction">
            <Edit size={11} />
          </button>
        )}
      </div>
    );
  }
  const pol  = getPolarity(entry);
  const sexe = genderView === 'f' ? 'feminin' : 'masculin';
  const text = resolveText(entry, sexe) ?? (typeof entry === 'string' ? entry : entry?.m ?? '');
  const base = isDb ? 'text-amber-800' : 'text-stone-700';
  return (
    <div className={`flex items-center gap-1 px-2.5 py-2 group ${isDb ? 'bg-amber-50' : ''}`}>
      <span className="w-4 flex-shrink-0 text-right text-[9px] font-mono text-emerald-500 leading-none select-none">
        {DOT_LEFT[pol] || ''}
      </span>
      <span className={`flex-1 text-sm font-serif leading-snug ${base}`}>{text}</span>
      <span className="w-4 flex-shrink-0 text-left text-[9px] font-mono text-rose-500 leading-none select-none">
        {DOT_RIGHT[pol] || ''}
      </span>
      {onEdit && (
        <button
          onClick={onEdit}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 -mr-1 rounded text-stone-300 hover:text-amber-600"
          title="Proposer une correction"
        >
          <Edit size={11} />
        </button>
      )}
    </div>
  );
}

// ─── SOUS-COMPOSANTS ─────────────────────────────────────────────────────────

function SelectOuAleatoire({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">{label}</span>
      <div className="relative">
        <select
          value={value || ''}
          onChange={e => onChange(e.target.value || null)}
          className="w-full appearance-none bg-white border border-stone-200 rounded-lg px-3 py-2 pr-8 text-sm font-serif text-stone-800 focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none shadow-sm transition-all"
        >
          <option value="">Aléatoire</option>
          {options.map(opt => (
            <option key={opt.id} value={opt.id}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
      </div>
    </div>
  );
}

function ChampPnj({ label, valeur, onReroll, multiline = false, accent = 'stone' }) {
  const ringColors = {
    stone:  'hover:border-stone-400',
    amber:  'hover:border-amber-400',
    purple: 'hover:border-purple-400',
    rose:   'hover:border-rose-400',
  };
  return (
    <div className="group flex items-start gap-2">
      <div className="flex-1 min-w-0">
        <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-0.5">{label}</span>
        <p className={`text-sm font-serif text-stone-800 leading-snug ${multiline ? '' : 'truncate'}`}>
          {Array.isArray(valeur) ? valeur.join(' · ') : (valeur || '—')}
        </p>
      </div>
      <button
        onClick={onReroll}
        title={`Retirer ${label}`}
        className={`flex-shrink-0 mt-4 p-1.5 rounded-lg border border-transparent text-stone-300 transition-all ${ringColors[accent] || ringColors.stone} hover:text-stone-600 hover:bg-stone-50`}
      >
        <Dices size={14} />
      </button>
    </div>
  );
}

// ─── ACCORDION PAR TABLE ─────────────────────────────────────────────────────

const POLARITY_OPTIONS = [
  { value: 'n',  label: 'Neutre' },
  { value: 'l1', label: '● Positif' },
  { value: 'l2', label: '●● Très positif' },
  { value: 'd1', label: '● Négatif' },
  { value: 'd2', label: '●● Très négatif' },
];

function AccordionTable({ config, dbApproved, myProposals, session, proposer, submitting, genderView, userProfile }) {
  const [open, setOpen] = useState(false);
  const [valueM, setValueM] = useState('');
  const [gendered, setGendered] = useState(false);
  const [valueF, setValueF] = useState('');
  const [polarity, setPolarity] = useState('n');
  const [weight, setWeight] = useState('frequent');
  const [editPreset, setEditPreset] = useState(null);
  const [editingDbId, setEditingDbId] = useState(null);
  const [msg, setMsg] = useState(null);

  const isIdentity = !!config.isIdentity;
  const canDirectSave = !!userProfile && isAdmin(userProfile);
  const hardcoded = getHardcoded(config);
  const approved = dbApproved || [];
  const myPending = myProposals.filter(p =>
    p.table_name === config.tableName &&
    (p.tranche_age || null) === config.trancheAge
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valueM.trim()) return;
    const { error } = await proposer({
      tableName: config.tableName,
      trancheAge: config.trancheAge,
      valueM: valueM.trim(),
      valueF: isIdentity ? null : (gendered && valueF.trim() ? valueF.trim() : null),
      polarity: isIdentity ? 'n' : polarity,
      weight,
    });
    if (error) {
      setMsg(`Erreur : ${error.message}`);
    } else {
      setMsg(editPreset ? 'Correction soumise !' : 'Soumis !');
      setValueM(''); setValueF(''); setGendered(false); setPolarity('n'); setWeight('frequent'); setEditPreset(null); setEditingDbId(null);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  const handleSaveDirect = async (e) => {
    e.preventDefault();
    if (!valueM.trim() || !session?.user) return;
    setMsg(null);
    const payload = {
      table_name: config.tableName,
      tranche_age: config.tableName === 'metiers' ? config.trancheAge : null,
      value_m: valueM.trim(),
      value_f: isIdentity ? null : (gendered && valueF.trim() ? valueF.trim() : null),
      polarity: isIdentity ? 'n' : polarity,
      weight,
      status: 'approved',
      approved_by: session.user.id,
      approved_at: new Date().toISOString(),
    };
    const { error } = editingDbId
      ? await supabase.from('pnj_table_entries').update(payload).eq('id', editingDbId)
      : await supabase.from('pnj_table_entries').insert({ ...payload, created_by: session.user.id });
    if (error) {
      setMsg(`Erreur : ${error.message}`);
    } else {
      setMsg(editingDbId ? 'Entrée mise à jour !' : 'Entrée créée !');
      setValueM(''); setValueF(''); setGendered(false); setPolarity('n'); setWeight('frequent'); setEditPreset(null); setEditingDbId(null);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  const handleEdit = (entry, dbId) => {
    let label;
    if (isIdentity) {
      label = entry.label;
      setValueM(label);
      setWeight(entry.weight ?? 'frequent');
    } else {
      label = resolveText(entry, 'masculin') ?? (typeof entry === 'string' ? entry : entry?.m ?? '');
      const femText = typeof entry === 'object' ? (entry.f ?? '') : '';
      setValueM(label);
      setValueF(femText);
      setGendered(!!femText);
      setPolarity(getPolarity(entry));
    }
    setEditingDbId(dbId || null);
    setEditPreset(label || 'entrée');
    setOpen(true);
  };

  const inp = 'flex-1 bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-serif text-stone-800 focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none shadow-sm transition-all';

  const allEntries = [
    ...hardcoded.map(e => ({ e, isDb: false, dbId: null })),
    ...approved.map(e => ({ e, isDb: true, dbId: e._dbId || null })),
  ];

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="font-serif font-bold text-stone-800 text-sm">{config.label}</span>
          <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
            {hardcoded.length + approved.length}
          </span>
          {approved.length > 0 && (
            <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
              +{approved.length} communautaires
            </span>
          )}
          {myPending.length > 0 && (
            <span className="text-xs text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
              {myPending.length} en attente
            </span>
          )}
        </div>
        <ChevronDown size={14} className={`flex-shrink-0 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="border-t border-stone-100 pb-4 space-y-4">
          {/* Liste 2 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {allEntries.map(({ e, isDb, dbId }, i) => (
              <div
                key={i}
                className={`${isDb ? '' : Math.floor(i / 2) % 2 === 0 ? 'bg-stone-50/60' : 'bg-white'}`}
              >
                <EntryCell
                  entry={e}
                  isDb={isDb}
                  isIdentity={isIdentity}
                  genderView={genderView}
                  onEdit={session?.user ? () => handleEdit(e, dbId) : undefined}
                />
              </div>
            ))}
          </div>

          {/* Formulaire de proposition / correction */}
          {session?.user && (
            <form onSubmit={handleSubmit} className="mx-4 pt-3 border-t border-stone-100 space-y-2">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                {editPreset ? `✏ Corriger : ${valueM.slice(0, 40)}…` : '+ Proposer une entrée'}
              </p>
              <div className="flex gap-2 flex-wrap">
                <input
                  value={valueM}
                  onChange={e => setValueM(e.target.value)}
                  placeholder={isIdentity ? 'Nouvelle entrée…' : (gendered ? 'Forme masculine…' : 'Nouvelle entrée…')}
                  className={inp}
                />
                {!isIdentity && gendered && (
                  <input
                    value={valueF}
                    onChange={e => setValueF(e.target.value)}
                    placeholder="Forme féminine…"
                    className={inp}
                  />
                )}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {!isIdentity && (
                  <>
                    <label className="flex items-center gap-2 text-xs text-stone-500 cursor-pointer select-none">
                      <input type="checkbox" checked={gendered} onChange={e => setGendered(e.target.checked)} className="rounded border-stone-300 text-amber-600 focus:ring-amber-300" />
                      Forme féminine différente
                    </label>
                    <select
                      value={polarity}
                      onChange={e => setPolarity(e.target.value)}
                      className="text-xs border border-stone-200 rounded px-2 py-1 font-serif text-stone-700 bg-white outline-none focus:ring-1 focus:ring-amber-200"
                    >
                      {POLARITY_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </>
                )}
                {/* Fréquence */}
                <select
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  className="text-xs border border-stone-200 rounded px-2 py-1 font-serif text-stone-700 bg-white outline-none focus:ring-1 focus:ring-amber-200"
                >
                  {WEIGHT_LABELS.map(w => <option key={w.key} value={w.key}>{w.label}</option>)}
                </select>
                <button
                  type="submit"
                  disabled={submitting || !valueM.trim()}
                  className="px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-amber-50 font-bold text-xs transition-all disabled:opacity-60"
                >
                  {submitting ? '…' : editPreset ? 'Soumettre correction' : 'Proposer'}
                </button>
                {canDirectSave && (
                  <button
                    onClick={handleSaveDirect}
                    disabled={!valueM.trim()}
                    className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-emerald-50 font-bold text-xs transition-all disabled:opacity-60"
                    title={editingDbId ? "Modifier directement (approuvé)" : "Ajouter directement (approuvé)"}
                  >
                    {editingDbId ? '✎ Modifier directement' : '✓ Ajouter directement'}
                  </button>
                )}
                {editPreset && (
                  <button type="button" onClick={() => { setEditPreset(null); setValueM(''); setValueF(''); setPolarity('n'); setGendered(false); setWeight('frequent'); setEditingDbId(null); }} className="text-xs text-stone-400 hover:text-stone-600">
                    Annuler
                  </button>
                )}
              </div>
              {msg && (
                <p className={`text-xs font-serif ${msg.startsWith('Erreur') ? 'text-red-600' : 'text-emerald-600'}`}>{msg}</p>
              )}
            </form>
          )}

          {/* Mes propositions */}
          {myPending.length > 0 && (
            <div className="mx-4 pt-2 border-t border-stone-100 space-y-1.5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Mes propositions</p>
              {myPending.map(p => (
                <div key={p.id} className="flex items-start gap-2 text-xs">
                  {p.status === 'pending'
                    ? <Clock size={11} className="mt-0.5 flex-shrink-0 text-amber-500" />
                    : <XCircle size={11} className="mt-0.5 flex-shrink-0 text-red-500" />}
                  <span className="font-serif text-stone-600">{p.value_m}{p.value_f ? ` / ${p.value_f}` : ''}</span>
                  {p.weight && p.weight !== 'frequent' && <span className="text-stone-400 font-mono">{weightLabel(p.weight)}</span>}
                  {p.reject_reason && <span className="text-red-400">— {p.reject_reason}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── VUE VALIDATION (gardiens) ───────────────────────────────────────────────

const VALIDATION_TABLE_LABELS = {
  traits: 'Trait', apparences: 'Apparence', motivations: 'Motivation', secrets: 'Secret',
  phobies: 'Phobie', hobbies: 'Hobby', comportements: 'Comportement', metiers: 'Métier',
  tranches_age: 'Âge', sexes: 'Sexe', genres: 'Genre', nationalites: 'Nationalité',
  situations_matrimoniales: 'Situation matrim.', situations_familiales: 'Situation famil.',
};

const VALIDATION_TRANCHE_LABELS = { jeune: '18–30', adulte: '31–50', mur: '51–70', age: '71+' };

const VALIDATION_STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvées', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusées', icon: XCircle, color: 'text-red-600 border-red-500' },
];

function TabValidation({ session }) {
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
      .select('id, table_name, tranche_age, value_m, value_f, weight, status, reject_reason, created_by, created_at')
      .eq('status', statusFilter)
      .order('created_at', { ascending: statusFilter === 'pending' });
    setEntries(data || []);

    const ids = [...new Set((data || []).map(e => e.created_by).filter(Boolean))];
    if (ids.length > 0) {
      const { data: profs } = await supabase.from('profiles').select('id, username').in('id', ids);
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
      <div className="flex gap-4 border-b border-stone-200">
        {VALIDATION_STATUS_TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setStatusFilter(id)}
            className={`pb-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 border-b-2 transition-colors ${statusFilter === id ? VALIDATION_STATUS_TABS.find(t => t.id === id).color : 'text-stone-400 border-transparent hover:text-stone-600'}`}
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
                    {VALIDATION_TABLE_LABELS[entry.table_name]}{entry.tranche_age ? ` · ${VALIDATION_TRANCHE_LABELS[entry.tranche_age]}` : ''}
                  </span>
                  {profiles[entry.created_by] && (
                    <span className="text-xs text-stone-400">— {profiles[entry.created_by]}</span>
                  )}
                </div>
                <p className="font-serif text-stone-800 mt-0.5">
                  {entry.value_m}
                  {entry.value_f && <span className="text-stone-400"> / {entry.value_f}</span>}
                  {entry.weight && entry.weight !== 'frequent' && (
                    <span className="text-stone-400 font-mono ml-2">{weightLabel(entry.weight)}</span>
                  )}
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

// ─── VUE TABLES & PROPOSITIONS ───────────────────────────────────────────────

function TabTables({ dbEntries, myProposals, session, proposer, submitting, userProfile }) {
  const [genderView, setGenderView] = useState('m');

  return (
    <div className="space-y-3">
      {/* Slider masculin / féminin */}
      <div className="flex items-center justify-between">
        <div className="flex rounded-lg overflow-hidden border border-stone-200 text-xs">
          <button
            onClick={() => setGenderView('m')}
            className={`px-3 py-1.5 font-serif transition-colors ${genderView === 'm' ? 'bg-stone-700 text-stone-50' : 'bg-white text-stone-500 hover:bg-stone-50'}`}
          >
            Masculin
          </button>
          <button
            onClick={() => setGenderView('f')}
            className={`px-3 py-1.5 font-serif transition-colors border-l border-stone-200 ${genderView === 'f' ? 'bg-stone-700 text-stone-50' : 'bg-white text-stone-500 hover:bg-stone-50'}`}
          >
            Féminin
          </button>
        </div>
        <p className="text-[10px] text-stone-300 font-serif">
          <span className="text-emerald-400">●</span> clair&nbsp;&nbsp;<span className="text-rose-400">●</span> sombre
        </p>
      </div>

      {!session?.user && (
        <p className="text-sm font-serif text-stone-500 text-center py-4">
          Connecte-toi pour proposer des entrées.
        </p>
      )}
      {TABLES_CONFIG.map(config => (
        <AccordionTable
          key={config.id}
          config={config}
          dbApproved={dbEntries[config.id] || []}
          myProposals={myProposals}
          session={session}
          proposer={proposer}
          submitting={submitting}
          genderView={genderView}
          userProfile={userProfile}
        />
      ))}
    </div>
  );
}

// ─── COMPOSANT PRINCIPAL ─────────────────────────────────────────────────────

export default function PnjGenerateur({ onBack, userProfile, session }) {
  const [activeTab, setActiveTab] = useState('generateur');
  const [mode, setMode] = useState('reel');
  const [typeFee, setTypeFee] = useState(null);
  const [options, setOptions] = useState({
    sexe: null, genre: null, trancheAge: null,
    nationalite: null, situationMatrimoniale: null, situationFamiliale: null,
  });

  const [pnj, setPnj] = useState(null);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState(null);
  const [genKey, setGenKey] = useState(0);

  const { dbEntries, myProposals, submitting, proposer } = usePnjTableEntries(session);

  // Liste des types de fées depuis la base (chargée une seule fois)
  const [fairyTypes, setFairyTypes] = useState([]);
  React.useEffect(() => {
    supabase.from('fairy_types').select('id, name').order('name').then(({ data }) => {
      if (data) setFairyTypes(data);
    });
  }, []);

  const handleGenerer = useCallback(() => {
    const typeEffectif = mode === 'merveilleux' && !typeFee && fairyTypes.length > 0
      ? fairyTypes[Math.floor(Math.random() * fairyTypes.length)].name?.toLowerCase().replace(/[- ]/g, '_') || null
      : typeFee;
    const nouveau = genererPnj({ mode, typeFee: typeEffectif, ...options }, dbEntries);
    setPnj(nouveau);
    setSavedMsg(null);
    setGenKey(k => k + 1);
  }, [mode, typeFee, options, dbEntries, fairyTypes]);

  const handleReroll = useCallback((champ) => {
    if (!pnj) return;
    setPnj(prev => rerollChamp(prev, champ, dbEntries));
  }, [pnj, dbEntries]);

  const handleSauvegarder = async () => {
    if (!pnj) return;
    setSaving(true);
    try {
      const payload = pnjVersPayloadFigure(pnj);
      const { error } = await supabase.from('figures').insert([payload]);
      if (error) throw error;
      setSavedMsg('PNJ sauvegardé dans l\'Encyclopédie !');
    } catch (e) {
      setSavedMsg(`Erreur : ${e.message}`);
    } finally {
      setSaving(false);
    }
  };

  const estGardien = !!userProfile && isAdmin(userProfile);

  const trancheLabel = pnj ? TRANCHES_AGE.find(t => t.id === pnj.trancheAge)?.fourchette : null;
  const natObj       = pnj ? NATIONALITES.find(n => n.id === pnj.nationalite) : null;
  const genreObj     = pnj ? GENRES.find(g => g.id === pnj.genre) : null;
  const maritalObj   = pnj ? SITUATIONS_MATRIMONIALES.find(s => s.id === pnj.situationMatrimoniale) : null;
  const familleObj   = pnj ? SITUATIONS_FAMILIALES.find(s => s.id === pnj.situationFamiliale) : null;

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* ─── Header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={onBack}
              className="flex-shrink-0 p-1.5 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <Dices size={18} className="flex-shrink-0 text-amber-400" />
            <h1 className="font-serif font-bold text-amber-100 text-base truncate">Générateur de Personnages</h1>
          </div>
          <div className="flex flex-shrink-0 gap-1">
            {[
              { id: 'generateur', label: 'Générateur' },
              { id: 'tables',     label: 'Tables' },
              ...(estGardien ? [{ id: 'validation', label: 'Validation' }] : []),
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold font-serif rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-700/40 text-amber-200'
                    : 'text-amber-200/50 hover:text-amber-200/80 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">

        {/* ─── Onglet Tables ──────────────────────────────────────────── */}
        {activeTab === 'tables' && (
          <TabTables
            dbEntries={dbEntries}
            myProposals={myProposals}
            session={session}
            proposer={proposer}
            submitting={submitting}
            userProfile={userProfile}
          />
        )}

        {/* ─── Onglet Validation (gardiens) ──────────────────────────── */}
        {activeTab === 'validation' && estGardien && (
          <TabValidation session={session} />
        )}

        {activeTab === 'generateur' && <>

        {/* ─── Toggle Réel / Merveilleux ──────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Nature du personnage</p>
          <div className="flex gap-2 mb-4">
            {[
              { id: 'reel',       label: '🌍 Réel',       desc: 'Parisien·ne Belle Époque' },
              { id: 'merveilleux', label: '✨ Merveilleux', desc: 'Créature féérique' },
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => { setMode(opt.id); setPnj(null); setSavedMsg(null); }}
                className={`flex-1 py-2.5 px-3 rounded-xl border-2 text-sm font-bold font-serif transition-all ${
                  mode === opt.id
                    ? 'bg-amber-50 border-amber-400 text-amber-900'
                    : 'bg-white border-stone-200 text-stone-500 hover:border-stone-300'
                }`}
              >
                <div>{opt.label}</div>
                <div className="text-xs font-normal mt-0.5 opacity-70">{opt.desc}</div>
              </button>
            ))}
          </div>

          {/* Type de fée (mode merveilleux) */}
          {mode === 'merveilleux' && (
            <div className="bg-purple-50 rounded-xl border border-purple-200 p-4">
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">Type de fée</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <select
                    value={typeFee || ''}
                    onChange={e => setTypeFee(e.target.value || null)}
                    className="w-full appearance-none bg-white border border-purple-300 rounded-lg px-3 py-2 pr-8 text-sm font-serif text-stone-800 focus:ring-2 focus:ring-purple-200 outline-none shadow-sm"
                  >
                    <option value="">Aléatoire parmi tous les types</option>
                    {fairyTypes.map(f => (
                      <option key={f.id} value={f.name?.toLowerCase().replace(/[- ]/g,'_') || f.id}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none" />
                </div>
                <button
                  onClick={() => setTypeFee(null)}
                  title="Tirer au sort"
                  className="px-3 py-2 rounded-lg border border-purple-300 bg-white text-purple-600 hover:bg-purple-100 transition-all"
                >
                  <Dices size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ─── Sélecteurs d'identité ──────────────────────────────── */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <SelectOuAleatoire
              label="Tranche d'âge"
              options={TRANCHES_AGE.map(t => ({ id: t.id, label: `${t.label} (${t.fourchette})` }))}
              value={options.trancheAge}
              onChange={v => setOptions(o => ({ ...o, trancheAge: v }))}
            />
            <SelectOuAleatoire
              label="Sexe"
              options={SEXES}
              value={options.sexe}
              onChange={v => setOptions(o => ({ ...o, sexe: v }))}
            />
            <SelectOuAleatoire
              label="Genre / Expression"
              options={GENRES.filter(g => mode === 'merveilleux' ? true : g.id !== 'indetermine')}
              value={options.genre}
              onChange={v => setOptions(o => ({ ...o, genre: v }))}
            />
            {mode === 'reel' && (
              <SelectOuAleatoire
                label="Nationalité"
                options={NATIONALITES.map(n => ({ id: n.id, label: `${n.flag} ${n.label}` }))}
                value={options.nationalite}
                onChange={v => setOptions(o => ({ ...o, nationalite: v }))}
              />
            )}
            <SelectOuAleatoire
              label="Situation matrimoniale"
              options={SITUATIONS_MATRIMONIALES}
              value={options.situationMatrimoniale}
              onChange={v => setOptions(o => ({ ...o, situationMatrimoniale: v }))}
            />
            <SelectOuAleatoire
              label="Situation familiale"
              options={SITUATIONS_FAMILIALES}
              value={options.situationFamiliale}
              onChange={v => setOptions(o => ({ ...o, situationFamiliale: v }))}
            />
          </div>

          {/* ─── Bouton Générer ─────────────────────────────────────── */}
          <button
            onClick={handleGenerer}
            className="mt-5 w-full flex items-center justify-center gap-2 py-3 bg-amber-700 hover:bg-amber-800 text-amber-50 font-serif font-bold text-base rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            <Wand2 size={18} />
            Générer un personnage
          </button>
        </div>

        {/* ─── Résultat ──────────────────────────────────────────────── */}
        {pnj && (
          <div key={genKey} className="space-y-4">

            {/* Bandeau nom */}
            <div className={`rounded-2xl border-2 p-5 ${mode === 'merveilleux' ? 'bg-purple-50 border-purple-200' : 'bg-amber-50 border-amber-200'}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  {pnj.titre && (
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">{pnj.titre}</p>
                  )}
                  <h2 className="text-2xl font-serif font-bold text-stone-900 leading-tight">
                    {pnj.prenom} {pnj.nom}
                  </h2>
                  <p className="text-sm text-stone-600 mt-1 font-serif italic">
                    {pnj.metier}
                    {trancheLabel ? <span className="ml-2 text-stone-400">({trancheLabel})</span> : null}
                  </p>
                  {/* Badges identité */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {natObj && natObj.id !== 'francaise' && (
                      <span className="text-xs bg-white border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">
                        {natObj.flag} {natObj.label}
                      </span>
                    )}
                    {trancheLabel && (
                      <span className="text-xs bg-white border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">
                        {trancheLabel}
                      </span>
                    )}
                    {maritalObj && (
                      <span className="text-xs bg-white border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">
                        {accordLabel(maritalObj, pnj.sexe)}
                      </span>
                    )}
                    {familleObj && familleObj.id !== 'sans_enfants' && (
                      <span className="text-xs bg-white border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">
                        {accordLabel(familleObj, pnj.sexe)}
                      </span>
                    )}
                    {genreObj && genreObj.id !== 'conforme' && (
                      <span className="text-xs bg-amber-100 border border-amber-200 rounded-full px-2 py-0.5 text-amber-800 italic">
                        {genreObj.description}
                      </span>
                    )}
                    {mode === 'merveilleux' && pnj.typeFee && (
                      <span className="text-xs bg-purple-100 border border-purple-200 rounded-full px-2 py-0.5 text-purple-800">
                        ✦ {fairyTypes.find(f => (f.name?.toLowerCase().replace(/[- ]/g,'_') || f.id) === pnj.typeFee)?.name || pnj.typeFee.replace(/_/g, ' ')}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button onClick={() => handleReroll('prenom')} title="Retirer le prénom" className="p-1.5 rounded-lg text-stone-300 hover:text-stone-600 hover:bg-stone-100 transition-all"><Dices size={13} /></button>
                  <button onClick={() => handleReroll('nom')} title="Retirer le nom" className="p-1.5 rounded-lg text-stone-300 hover:text-stone-600 hover:bg-stone-100 transition-all"><Dices size={13} /></button>
                  <button onClick={() => handleReroll('titre')} title="Retirer le titre" className="p-1.5 rounded-lg text-stone-300 hover:text-stone-600 hover:bg-stone-100 transition-all"><Dices size={13} /></button>
                </div>
              </div>

              {pnj.raisonPresence && (
                <p className="mt-2 text-xs text-stone-500 italic border-t border-stone-200 pt-2">
                  {pnj.raisonPresence}
                </p>
              )}
            </div>

            {/* Grille des attributs */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 space-y-3 divide-y divide-stone-100">
              <ChampPnj label="Métier / Classe" valeur={pnj.metier}    onReroll={() => handleReroll('metier')} multiline />
              <div className="pt-3"><ChampPnj label="Traits de personnalité" valeur={pnj.traits} onReroll={() => handleReroll('traits')} multiline accent="amber" /></div>
              <div className="pt-3"><ChampPnj label="Apparence"         valeur={pnj.apparence}   onReroll={() => handleReroll('apparence')} multiline /></div>
              <div className="pt-3"><ChampPnj label="Motivation"        valeur={pnj.motivation}  onReroll={() => handleReroll('motivation')} multiline accent="amber" /></div>
              <div className="pt-3"><ChampPnj label="Relation aux joueurs" valeur={pnj.relation} onReroll={() => handleReroll('relation')} multiline /></div>
              <div className="pt-3"><ChampPnj label="Lieu de rencontre" valeur={pnj.lieu}        onReroll={() => handleReroll('lieu')} multiline /></div>
            </div>

            {/* Secret */}
            <div className="bg-[#1a0f0a] rounded-2xl border border-amber-900/30 p-5">
              <div className="flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Secret / Accroche narrative</p>
                  <p className="text-sm font-serif text-amber-100 italic leading-snug">{pnj.secret}</p>
                </div>
                <button onClick={() => handleReroll('secret')} title="Retirer le secret" className="flex-shrink-0 p-1.5 rounded-lg text-amber-800 hover:text-amber-400 hover:bg-white/5 transition-all mt-4">
                  <Dices size={14} />
                </button>
              </div>
            </div>

            {/* Phobie / Hobby / Comportement (mode réel uniquement) */}
            {mode === 'reel' && (pnj.phobie || pnj.hobby || pnj.comportement) && (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 space-y-3 divide-y divide-stone-100">
                {pnj.phobie && (
                  <ChampPnj label="Peur / Phobie" valeur={pnj.phobie} onReroll={() => handleReroll('phobie')} multiline accent="rose" />
                )}
                {pnj.hobby && (
                  <div className={pnj.phobie ? 'pt-3' : ''}>
                    <ChampPnj label="Passion / Passe-temps" valeur={pnj.hobby} onReroll={() => handleReroll('hobby')} multiline />
                  </div>
                )}
                {pnj.comportement && (
                  <div className={pnj.phobie || pnj.hobby ? 'pt-3' : ''}>
                    <ChampPnj label="Comportement distinctif" valeur={pnj.comportement} onReroll={() => handleReroll('comportement')} multiline accent="amber" />
                  </div>
                )}
              </div>
            )}

            {/* Mode merveilleux : double apparence */}
            {mode === 'merveilleux' && (
              <div className="bg-white rounded-2xl border border-purple-200 shadow-sm p-5 space-y-3 divide-y divide-purple-100">
                <ChampPnj label="Apparence masquée (publique)" valeur={pnj.apparenceMasquee} onReroll={() => handleReroll('apparenceMasquee')} multiline accent="purple" />
                <div className="pt-3"><ChampPnj label="Apparence démasquée (vraie nature)" valeur={pnj.apparenceDemasquee} onReroll={() => handleReroll('apparenceDemasquee')} multiline accent="purple" /></div>
              </div>
            )}

            {/* Identité détaillée (rerolls) */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Identité détaillée</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { champ: 'trancheAge', label: 'Tranche d\'âge', valeur: TRANCHES_AGE.find(t => t.id === pnj.trancheAge)?.label },
                  { champ: 'sexe', label: 'Sexe', valeur: SEXES.find(s => s.id === pnj.sexe)?.label },
                  { champ: 'genre', label: 'Genre', valeur: GENRES.find(g => g.id === pnj.genre)?.label },
                  ...(mode === 'reel' ? [{ champ: 'nationalite', label: 'Nationalité', valeur: natObj ? `${natObj.flag} ${natObj.label}` : null }] : []),
                  { champ: 'situationMatrimoniale', label: 'Situation', valeur: accordLabel(maritalObj, pnj.sexe) },
                  { champ: 'situationFamiliale', label: 'Famille', valeur: accordLabel(familleObj, pnj.sexe) },
                ].map(({ champ, label, valeur }) => (
                  <div key={champ} className="flex items-center justify-between gap-1 bg-stone-50 rounded-lg px-3 py-2">
                    <div className="min-w-0">
                      <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-serif text-stone-800">{valeur || '—'}</p>
                    </div>
                    <button onClick={() => handleReroll(champ)} className="flex-shrink-0 p-1 rounded text-stone-300 hover:text-stone-600 hover:bg-stone-200 transition-all">
                      <Dices size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Jauge de polarité */}
            {pnj.polariteScore != null && (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Tendance</p>
                  <span className="text-xs font-mono font-bold text-stone-500">{pnj.polariteScore}/10</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-rose-400 font-serif flex-shrink-0">Sombre</span>
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full rounded-full transition-all ${
                        pnj.polariteScore >= 7 ? 'bg-emerald-400' :
                        pnj.polariteScore >= 5 ? 'bg-amber-300' :
                        pnj.polariteScore >= 3 ? 'bg-orange-400' : 'bg-rose-500'
                      }`}
                      style={{ width: `${(pnj.polariteScore / 10) * 100}%` }}
                    />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-stone-200" />
                  </div>
                  <span className="text-[10px] text-emerald-500 font-serif flex-shrink-0">Lumineux</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleGenerer}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-stone-200 bg-white text-stone-700 font-bold font-serif text-sm hover:border-stone-300 hover:bg-stone-50 transition-all"
              >
                <RotateCcw size={16} />
                Tout regénérer
              </button>
              <button
                onClick={handleSauvegarder}
                disabled={saving}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-amber-50 font-bold font-serif text-sm transition-all disabled:opacity-60"
              >
                <Save size={16} />
                {saving ? 'Sauvegarde…' : 'Sauvegarder dans l\'Encyclopédie'}
              </button>
            </div>

            {savedMsg && (
              <p className={`text-sm font-serif text-center ${savedMsg.startsWith('Erreur') ? 'text-red-600' : 'text-emerald-700'}`}>
                {savedMsg}
              </p>
            )}
          </div>
        )}

        </>}
      </div>
    </div>
  );
}
