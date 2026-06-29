// src/components/PnjGenerateur.jsx
import React, { useState, useCallback } from 'react';
import { ArrowLeft, Dices, Wand2, Save, RotateCcw, ChevronDown, Plus, Clock, CheckCircle, XCircle } from '../config/icons';
import { supabase } from '../config/supabase';
import { genererPnj, rerollChamp, pnjVersPayloadFigure } from '../utils/pnjGenerator';
import {
  TRANCHES_AGE, SEXES, GENRES, NATIONALITES,
  SITUATIONS_MATRIMONIALES, SITUATIONS_FAMILIALES,
  TABLES_REEL, METIERS_PAR_TRANCHE_AGE,
  accordLabel,
} from '../data/pnjTables';
import { usePnjTableEntries } from '../hooks/usePnjTableEntries';

// ─── CONFIGURATION DES TABLES ────────────────────────────────────────────────

const TABLES_CONFIG = [
  { id: 'traits',         label: 'Traits de caractère',      tableName: 'traits',        trancheAge: null },
  { id: 'apparences',     label: 'Apparences',                tableName: 'apparences',    trancheAge: null },
  { id: 'motivations',    label: 'Motivations',               tableName: 'motivations',   trancheAge: null },
  { id: 'secrets',        label: 'Secrets & accroches',       tableName: 'secrets',       trancheAge: null },
  { id: 'phobies',        label: 'Phobies',                   tableName: 'phobies',       trancheAge: null },
  { id: 'hobbies',        label: 'Passions & passe-temps',    tableName: 'hobbies',       trancheAge: null },
  { id: 'comportements',  label: 'Comportements distinctifs', tableName: 'comportements', trancheAge: null },
  { id: 'metiers_jeune',  label: 'Métiers · 18–30 ans',       tableName: 'metiers',       trancheAge: 'jeune' },
  { id: 'metiers_adulte', label: 'Métiers · 31–50 ans',       tableName: 'metiers',       trancheAge: 'adulte' },
  { id: 'metiers_mur',    label: 'Métiers · 51–70 ans',       tableName: 'metiers',       trancheAge: 'mur' },
  { id: 'metiers_age',    label: 'Métiers · 71+ ans',         tableName: 'metiers',       trancheAge: 'age' },
];

function getHardcoded(config) {
  if (config.trancheAge) return METIERS_PAR_TRANCHE_AGE[config.trancheAge] || [];
  return TABLES_REEL[config.tableName] || [];
}

function formatEntry(e) {
  if (!e || typeof e === 'string') return e || '';
  return `${e.m} / ${e.f}`;
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

function AccordionTable({ config, dbApproved, myProposals, session, proposer, submitting }) {
  const [open, setOpen] = useState(false);
  const [valueM, setValueM] = useState('');
  const [gendered, setGendered] = useState(false);
  const [valueF, setValueF] = useState('');
  const [msg, setMsg] = useState(null);

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
      valueF: gendered && valueF.trim() ? valueF.trim() : null,
    });
    if (error) {
      setMsg(`Erreur : ${error.message}`);
    } else {
      setMsg('Soumis !');
      setValueM(''); setValueF(''); setGendered(false);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  const inp = 'flex-1 bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-serif text-stone-800 focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none shadow-sm transition-all';

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
        <div className="border-t border-stone-100 px-4 pb-4 pt-3 space-y-4">
          {/* Liste des entrées */}
          <div className="flex flex-wrap gap-1.5">
            {hardcoded.map((e, i) => (
              <span key={i} className="text-xs bg-stone-100 text-stone-700 font-serif px-2 py-1 rounded-md leading-snug">
                {formatEntry(e)}
              </span>
            ))}
            {approved.map((e, i) => (
              <span key={`db-${i}`} className="text-xs bg-amber-50 text-amber-800 border border-amber-200 font-serif px-2 py-1 rounded-md leading-snug">
                {formatEntry(e)}
              </span>
            ))}
          </div>

          {/* Formulaire de proposition (utilisateurs connectés) */}
          {session?.user && (
            <form onSubmit={handleSubmit} className="pt-3 border-t border-stone-100 space-y-2">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">+ Proposer une entrée</p>
              <div className="flex gap-2">
                <input
                  value={valueM}
                  onChange={e => setValueM(e.target.value)}
                  placeholder={gendered ? 'Forme masculine…' : 'Nouvelle entrée…'}
                  className={inp}
                />
                {gendered && (
                  <input
                    value={valueF}
                    onChange={e => setValueF(e.target.value)}
                    placeholder="Forme féminine…"
                    className={inp}
                  />
                )}
                <button
                  type="submit"
                  disabled={submitting || !valueM.trim()}
                  className="flex-shrink-0 px-3 py-2 rounded-lg bg-amber-700 hover:bg-amber-800 text-amber-50 font-bold text-xs transition-all disabled:opacity-60"
                >
                  {submitting ? '…' : 'Proposer'}
                </button>
              </div>
              <label className="flex items-center gap-2 text-xs text-stone-500 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={gendered}
                  onChange={e => setGendered(e.target.checked)}
                  className="rounded border-stone-300 text-amber-600 focus:ring-amber-300"
                />
                Forme féminine différente
              </label>
              {msg && (
                <p className={`text-xs font-serif ${msg.startsWith('Erreur') ? 'text-red-600' : 'text-emerald-600'}`}>{msg}</p>
              )}
            </form>
          )}

          {/* Mes propositions pour cette table */}
          {myPending.length > 0 && (
            <div className="pt-2 border-t border-stone-100 space-y-1.5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Mes propositions</p>
              {myPending.map(p => (
                <div key={p.id} className="flex items-start gap-2 text-xs">
                  {p.status === 'pending'
                    ? <Clock size={11} className="mt-0.5 flex-shrink-0 text-amber-500" />
                    : <XCircle size={11} className="mt-0.5 flex-shrink-0 text-red-500" />}
                  <span className="font-serif text-stone-600">{p.value_m}{p.value_f ? ` / ${p.value_f}` : ''}</span>
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

// ─── VUE TABLES & PROPOSITIONS ───────────────────────────────────────────────

function TabTables({ dbEntries, myProposals, session, proposer, submitting }) {
  return (
    <div className="space-y-2">
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
    const nouveau = genererPnj({ mode, typeFee, ...options }, dbEntries);
    setPnj(nouveau);
    setSavedMsg(null);
    setGenKey(k => k + 1);
  }, [mode, typeFee, options, dbEntries]);

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

  const trancheLabel = pnj ? TRANCHES_AGE.find(t => t.id === pnj.trancheAge)?.fourchette : null;
  const natObj       = pnj ? NATIONALITES.find(n => n.id === pnj.nationalite) : null;
  const genreObj     = pnj ? GENRES.find(g => g.id === pnj.genre) : null;
  const maritalObj   = pnj ? SITUATIONS_MATRIMONIALES.find(s => s.id === pnj.situationMatrimoniale) : null;
  const familleObj   = pnj ? SITUATIONS_FAMILIALES.find(s => s.id === pnj.situationFamiliale) : null;

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      {/* ─── Header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            <Dices size={20} className="text-amber-400" />
            <h1 className="font-serif font-bold text-amber-100 text-lg">Générateur de Personnages</h1>
          </div>
        </div>
        {/* Onglets */}
        <div className="max-w-3xl mx-auto px-4 flex gap-1">
          {[
            { id: 'generateur', label: 'Générateur' },
            { id: 'tables',     label: 'Tables & Propositions' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-bold font-serif border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-amber-300 border-amber-400'
                  : 'text-amber-200/50 border-transparent hover:text-amber-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
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
          />
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
            <div className="animate-fade-in bg-purple-50 rounded-xl border border-purple-200 p-4">
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
          <div key={genKey} className="animate-fade-in-up space-y-4">

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
              <ChampPnj label="Métier / Classe" valeur={pnj.metier}    onReroll={() => handleReroll('metier')} />
              <div className="pt-3"><ChampPnj label="Traits de personnalité" valeur={pnj.traits} onReroll={() => handleReroll('traits')} accent="amber" /></div>
              <div className="pt-3"><ChampPnj label="Apparence"         valeur={pnj.apparence}   onReroll={() => handleReroll('apparence')} /></div>
              <div className="pt-3"><ChampPnj label="Motivation"        valeur={pnj.motivation}  onReroll={() => handleReroll('motivation')} multiline accent="amber" /></div>
              <div className="pt-3"><ChampPnj label="Relation aux joueurs" valeur={pnj.relation} onReroll={() => handleReroll('relation')} /></div>
              <div className="pt-3"><ChampPnj label="Lieu de rencontre" valeur={pnj.lieu}        onReroll={() => handleReroll('lieu')} /></div>
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
                      <p className="text-sm font-serif text-stone-800 truncate">{valeur || '—'}</p>
                    </div>
                    <button onClick={() => handleReroll(champ)} className="flex-shrink-0 p-1 rounded text-stone-300 hover:text-stone-600 hover:bg-stone-200 transition-all">
                      <Dices size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

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
