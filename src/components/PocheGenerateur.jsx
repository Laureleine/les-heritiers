import React, { useState } from 'react';
import { ArrowLeft, Package, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle } from '../config/icons';
import { usePocheTableEntries } from '../hooks/usePocheTableEntries';
import { genererInventaire } from '../utils/pocheGenerator';

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

const TABLES_CIBLES = [
  { id: 'fouille_ordinaire', label: 'Fouille ordinaire' },
  { id: 'fouille_mondaine', label: 'Fouille mondaine' },
  { id: 'fouille_secrets', label: 'Secrets génériques' },
  { id: 'fouille_horreur', label: 'Étrange / Merveilleux' },
  { id: 'fouille_espionnage', label: 'Espionnage' },
  { id: 'fouille_pulp', label: 'Pulp / Interlope' },
  { id: 'fouille_saisonniere', label: 'Objet saisonnier' },
];

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

function ProposerObjet({ session, proposer, myProposals, submitting }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('fouille_ordinaire');
  const [saison, setSaison] = useState('hiver');
  const [valueM, setValueM] = useState('');
  const [valueF, setValueF] = useState('');
  const [weight, setWeight] = useState(10);
  const [msg, setMsg] = useState(null);

  if (!session?.user) return null;

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

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-teal-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        Proposer un objet
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

export default function PocheGenerateur({ onBack, session }) {
  const { dbEntries, myProposals, loaded, submitting, proposer } = usePocheTableEntries(session);
  const [config, setConfig] = useState({
    sexe: 'masculin', classeSociale: 'moyenne', moralite: 'honnete', genre: 'standard', saison: 'hiver', forceSecret: false,
  });
  const [inventaire, setInventaire] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const fouiller = () => setInventaire(genererInventaire(config, dbEntries));

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Générateur de Poche</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
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

        <ProposerObjet session={session} proposer={proposer} myProposals={myProposals} submitting={submitting} />
      </div>
    </div>
  );
}
