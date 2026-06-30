import React, { useState } from 'react';
import { ChevronDown, Clock, XCircle, CheckCircle } from '../../config/icons';
import { isAdmin } from '../../utils/authRoles';

const CATEGORIES = [
  { id: 'boisson_chaude', label: 'Boisson chaude' },
  { id: 'viennoiserie', label: 'Viennoiserie' },
  { id: 'potage', label: 'Potage' },
  { id: 'hors_d_oeuvre', label: "Hors-d'œuvre" },
  { id: 'poisson', label: 'Poisson' },
  { id: 'viande', label: 'Viande' },
  { id: 'volaille', label: 'Volaille' },
  { id: 'gibier', label: 'Gibier' },
  { id: 'abats', label: 'Abats' },
  { id: 'legume', label: 'Légume' },
  { id: 'entremets', label: 'Entremets' },
  { id: 'fromage', label: 'Fromage' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'patisserie', label: 'Pâtisserie' },
];

const NIVEAUX = [
  { id: 'populaire', label: 'Populaire' },
  { id: 'bourgeois', label: 'Bourgeois' },
  { id: 'grande_bourgeoisie', label: 'Gde bourgeoisie' },
  { id: 'aristocratie', label: 'Aristocratie' },
];

const SAISONS = [
  { id: 'printemps', label: 'Printemps' },
  { id: 'ete', label: 'Été' },
  { id: 'automne', label: 'Automne' },
  { id: 'hiver', label: 'Hiver' },
];

function MultiToggle({ options, values, onChange }) {
  const toggle = (id) => {
    onChange(values.includes(id) ? values.filter((v) => v !== id) : [...values, id]);
  };
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => toggle(opt.id)}
          className={`px-2 py-1 text-xs font-serif rounded-lg border transition-colors ${
            values.includes(opt.id) ? 'bg-amber-700 border-amber-700 text-white' : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

const initialForm = {
  nom: '', categorie: 'potage', niveaux: [], saisons: [], difficulte: 1,
  accord_vin: '', description_narrative: '', description_reussite_critique: '',
  description_echec_partiel: '', description_echec_critique: '',
};

export default function ProposerPlat({ session, userProfile, mesPropositions, proposer, ajouterDirectement, submitting }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [msg, setMsg] = useState(null);

  if (!session?.user) return null;

  const canDirectSave = !!userProfile && isAdmin(userProfile);
  const set = (champ) => (valeur) => setForm((f) => ({ ...f, [champ]: valeur }));

  const champs = () => ({
    nom: form.nom.trim(),
    categorie: form.categorie,
    niveaux: form.niveaux,
    saisons: form.saisons,
    difficulte: form.difficulte,
    accord_vin: form.accord_vin.trim() || null,
    description_narrative: form.description_narrative.trim() || null,
    description_reussite_critique: form.description_reussite_critique.trim() || null,
    description_echec_partiel: form.description_echec_partiel.trim() || null,
    description_echec_critique: form.description_echec_critique.trim() || null,
  });

  const valide = form.nom.trim() && form.niveaux.length > 0 && form.saisons.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valide) return;
    const { error } = await proposer(champs());
    if (error) setMsg(`Erreur : ${error.message}`);
    else {
      setMsg('Plat soumis pour validation !');
      setForm(initialForm);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  const handleSaveDirect = async () => {
    if (!valide) return;
    const { error } = await ajouterDirectement(champs());
    if (error) setMsg(`Erreur : ${error.message}`);
    else {
      setMsg('Plat ajouté directement !');
      setForm(initialForm);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  const inp = 'w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-serif text-stone-800 focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none';

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden mt-4">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-stone-50 transition-colors">
        <span className="font-serif font-bold text-stone-800 text-sm">+ Proposer un plat au corpus</span>
        <ChevronDown size={14} className={`text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <form onSubmit={handleSubmit} className="border-t border-stone-100 p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input value={form.nom} onChange={(e) => set('nom')(e.target.value)} placeholder="Nom du plat" className={inp} />
            <select value={form.categorie} onChange={(e) => set('categorie')(e.target.value)} className={inp}>
              {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>

          <div>
            <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Niveaux financiers</span>
            <MultiToggle options={NIVEAUX} values={form.niveaux} onChange={set('niveaux')} />
          </div>

          <div>
            <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Saisons</span>
            <MultiToggle options={SAISONS} values={form.saisons} onChange={set('saisons')} />
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-stone-500">
              Difficulté
              <input
                type="number" min={1} max={5}
                value={form.difficulte}
                onChange={(e) => set('difficulte')(Math.max(1, Math.min(5, parseInt(e.target.value, 10) || 1)))}
                className="w-14 border border-stone-200 rounded px-1.5 py-1 text-xs font-mono text-stone-700 bg-white text-center outline-none"
              />
            </label>
            <input value={form.accord_vin} onChange={(e) => set('accord_vin')(e.target.value)} placeholder="Accord vin (optionnel)" className={`${inp} flex-1`} />
          </div>

          <input value={form.description_narrative} onChange={(e) => set('description_narrative')(e.target.value)} placeholder="Description narrative (optionnel)" className={inp} />
          <input value={form.description_reussite_critique} onChange={(e) => set('description_reussite_critique')(e.target.value)} placeholder="Description réussite critique (optionnel)" className={inp} />
          <input value={form.description_echec_partiel} onChange={(e) => set('description_echec_partiel')(e.target.value)} placeholder="Description échec partiel (optionnel)" className={inp} />
          <input value={form.description_echec_critique} onChange={(e) => set('description_echec_critique')(e.target.value)} placeholder="Description échec critique (optionnel)" className={inp} />

          <div className="flex items-center gap-3 flex-wrap">
            <button type="submit" disabled={submitting || !valide} className="px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-amber-50 font-bold text-xs transition-all disabled:opacity-60">
              {submitting ? '…' : 'Proposer'}
            </button>
            {canDirectSave && (
              <button type="button" onClick={handleSaveDirect} disabled={!valide} className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-emerald-50 font-bold text-xs transition-all disabled:opacity-60">
                ✓ Ajouter directement
              </button>
            )}
            {msg && <p className={`text-xs font-serif ${msg.startsWith('Erreur') ? 'text-red-600' : 'text-emerald-600'}`}>{msg}</p>}
          </div>

          {mesPropositions.length > 0 && (
            <div className="pt-2 border-t border-stone-100 space-y-1.5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Mes propositions</p>
              {mesPropositions.map((p) => (
                <div key={p.id} className="flex items-start gap-2 text-xs">
                  {p.statut === 'en_attente'
                    ? <Clock size={11} className="mt-0.5 flex-shrink-0 text-amber-500" />
                    : p.statut === 'refuse'
                      ? <XCircle size={11} className="mt-0.5 flex-shrink-0 text-red-500" />
                      : <CheckCircle size={11} className="mt-0.5 flex-shrink-0 text-emerald-500" />}
                  <span className="font-serif text-stone-600">{p.nom}</span>
                  {p.motif_refus && <span className="text-red-400">— {p.motif_refus}</span>}
                </div>
              ))}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
