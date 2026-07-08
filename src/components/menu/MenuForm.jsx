import React from 'react';
import { Dices } from '../../config/icons';

const SAISONS = [
  { id: 'printemps', label: 'Printemps' },
  { id: 'ete', label: 'Été' },
  { id: 'automne', label: 'Automne' },
  { id: 'hiver', label: 'Hiver' },
];

const TYPES_REPAS = [
  { id: 'petit_dejeuner', label: 'Petit déjeuner' },
  { id: 'dejeuner', label: 'Déjeuner' },
  { id: 'diner', label: 'Dîner' },
  { id: 'souper', label: 'Souper' },
  { id: 'gouter', label: 'Goûter' },
  { id: 'banquet', label: 'Banquet' },
];

const NIVEAUX_FINANCIERS = [
  { id: 'populaire', label: 'Populaire' },
  { id: 'bourgeois', label: 'Bourgeois' },
  { id: 'grande_bourgeoisie', label: 'Grande bourgeoisie' },
  { id: 'aristocratie', label: 'Aristocratie' },
];

const TRANCHES_CONVIVES = [
  { id: 'intime', label: 'Intime (Tous les jours)' },
  { id: 'tablee', label: 'Tablée (Ordinaire)' },
  { id: 'banquet', label: 'Banquet (Réception)' },
];

const NIVEAUX_CUISINIER = [
  '1 — Marmiton débutant', '2', '3', '4 — Cuisinier compétent', '5', '6', '7 — Chef confirmé',
  '8', '9', '10 — Maître queux', '11', '12', '13', '14 — Toque légendaire',
];

function ToggleGroup({ label, options, value, onChange }) {
  return (
    <div>
      <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`px-2.5 py-1.5 text-xs font-bold font-serif rounded-lg border transition-colors ${
              value === opt.id
                ? 'bg-amber-700 border-amber-700 text-white'
                : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MenuForm({ params, onChange, onGenerer, loading }) {
  const set = (champ) => (valeur) => onChange({ ...params, [champ]: valeur });

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-4 shadow-sm">
      <ToggleGroup label="Saison" options={SAISONS} value={params.saison} onChange={set('saison')} />
      <ToggleGroup label="Type de repas" options={TYPES_REPAS} value={params.typeRepas} onChange={set('typeRepas')} />
      <ToggleGroup label="Niveau financier" options={NIVEAUX_FINANCIERS} value={params.niveauFinancier} onChange={set('niveauFinancier')} />
      <ToggleGroup label="Contexte / Tranche" options={TRANCHES_CONVIVES} value={params.trancheConvives} onChange={set('trancheConvives')} />

      <div>
        <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">Nombre exact de convives</span>
        <input
          type="number"
          min={1}
          value={params.nbConvives}
          onChange={(e) => set('nbConvives')(Math.max(1, parseInt(e.target.value, 10) || 1))}
          className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-serif text-stone-800 focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none"
        />
      </div>

      <div>
        <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
          Niveau du cuisinier — {params.niveauCuisinier}
        </span>
        <input
          type="range"
          min={1}
          max={14}
          value={params.niveauCuisinier}
          onChange={(e) => set('niveauCuisinier')(parseInt(e.target.value, 10))}
          className="w-full accent-amber-700"
        />
        <p className="text-xs text-stone-400 font-serif italic mt-0.5">{NIVEAUX_CUISINIER[params.niveauCuisinier - 1]}</p>
      </div>

      <button
        type="button"
        onClick={onGenerer}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-700 hover:bg-amber-800 disabled:opacity-50 text-white font-bold font-serif rounded-lg transition-colors"
      >
        <Dices size={16} /> {loading ? 'Génération…' : 'Générer le menu'}
      </button>
    </div>
  );
}
