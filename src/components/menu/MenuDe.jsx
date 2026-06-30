import React, { useState } from 'react';
import { Dices } from '../../config/icons';

const ISSUE_STYLES = {
  reussite_critique: { label: '✦ Réussite critique', badge: 'bg-amber-100 text-amber-800 border-amber-300' },
  reussite:           { label: '✓ Réussite',           badge: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  echec:              { label: '✗ Échec',               badge: 'bg-orange-100 text-orange-800 border-orange-300' },
  echec_critique:     { label: '✦ Échec critique',      badge: 'bg-red-100 text-red-800 border-red-300' },
};

const DESCRIPTION_FIELD = {
  reussite_critique: 'description_reussite_critique',
  reussite: null,
  echec: 'description_echec_partiel',
  echec_critique: 'description_echec_critique',
};

export default function MenuDe({ plat, resoudre }) {
  const [resultat, setResultat] = useState(null);

  const lancer = () => setResultat(resoudre(plat.difficulte));

  if (!resultat) {
    return (
      <button
        onClick={lancer}
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-800 rounded-lg transition-colors"
      >
        <Dices size={13} /> Tenter le sort
      </button>
    );
  }

  const style = ISSUE_STYLES[resultat.issue];
  const champ = DESCRIPTION_FIELD[resultat.issue];
  const texte = champ ? plat[champ] : null;

  return (
    <div className="mt-1.5 space-y-1">
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${style.badge}`}>{style.label}</span>
        <span className="text-xs text-stone-400 font-mono">
          🎲{resultat.de} + {resultat.total - resultat.de} = {resultat.total} (seuil {resultat.seuil})
        </span>
      </div>
      {texte && <p className="text-xs text-stone-500 font-serif italic">{texte}</p>}
      <button onClick={lancer} className="text-xs text-stone-400 hover:text-amber-700 underline underline-offset-2">
        Retenter
      </button>
    </div>
  );
}
