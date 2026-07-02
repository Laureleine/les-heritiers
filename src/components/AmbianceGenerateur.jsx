import React, { useState } from 'react';
import { ArrowLeft, Route, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle } from '../config/icons';
import { useAmbianceTableEntries } from '../hooks/useAmbianceTableEntries';
import { genererAmbianceVoyage } from '../utils/ambianceGenerator';

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

function ProposerElement({ session, proposer, myProposals, submitting }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('decor');
  const [variante, setVariante] = useState(VARIANTES_PAR_TABLE.decor[0].id);
  const [value, setValue] = useState('');
  const [weight, setWeight] = useState(25);
  const [msg, setMsg] = useState(null);

  if (!session?.user) return null;

  const changerTable = (t) => {
    setTableName(t);
    setVariante(VARIANTES_PAR_TABLE[t][0].id);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const { error } = await proposer({ tableName, variante, value: value.trim(), weight: Number(weight) || 1 });
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' });
      setValue('');
    }
  };

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-teal-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        Proposer un élément
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
              Poids
              <input type="number" min="1" value={weight} onChange={(e) => setWeight(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" disabled={submitting} className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                {submitting ? '…' : 'Proposer'}
              </button>
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

export default function AmbianceGenerateur({ onBack, session }) {
  const { dbEntries, myProposals, loaded, submitting, proposer } = useAmbianceTableEntries(session);
  const [config, setConfig] = useState({
    zone: 'paris_populaire', moment: 'jour', saison: 'printemps', genre: 'standard',
  });
  const [scene, setScene] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const generer = () => setScene(genererAmbianceVoyage(config, dbEntries));

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Générateur d'Ambiance</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
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

        <ProposerElement session={session} proposer={proposer} myProposals={myProposals} submitting={submitting} />
      </div>
    </div>
  );
}
