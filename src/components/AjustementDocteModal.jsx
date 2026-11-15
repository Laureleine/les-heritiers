// src/components/AjustementDocteModal.jsx
// Panneau « Ajustement du Docte » : modifier une valeur de la fiche d'un membre
// de son cercle, avec motif (spec 2026-11-15-ajustements-sous-socle).
// L'écriture passe par la fonction SQL docte_ajuster_fiche (contrôle Docte côté base).
import React, { useMemo, useState } from 'react';
import { supabase } from '../config/supabase';
import { CARAC_LIST } from '../data/DictionnaireJeu';
import { showInAppNotification } from '../utils/SystemeServices';
import { computeAjustementXp, xpModesFor, ajustementWarnings } from '../utils/docteAjustement';
import ModalShell, { ModalHeader } from './ui/ModalShell';

const KINDS = [
  { id: 'fortune', label: 'Fortune' },
  { id: 'carac', label: 'Caractéristique' },
  { id: 'comp', label: 'Compétence' },
  { id: 'futile', label: 'Compétence futile' },
];

/** Construit la liste des valeurs ajustables : { key, nom, score, min, max, base }. */
export function buildAjustables(kind, character, gameData) {
  const stats = character.computedStats || {};
  if (kind === 'fortune') {
    return [{ key: null, nom: 'Fortune', score: character.fortune || 0, min: 0, max: 15, base: 0 }];
  }
  if (kind === 'carac') {
    const feeData = gameData?.fairyData?.[character.typeFee];
    const isHumain = character.typePersonnage === 'humain';
    return CARAC_LIST.map(c => {
      const min = isHumain ? 1 : (feeData?.caracteristiques?.[c.key]?.min || 1);
      const max = isHumain ? 6 : (feeData?.caracteristiques?.[c.key]?.max || 6);
      return { key: c.key, nom: c.label, score: character.caracteristiques?.[c.key] || min, min, max, base: 0 };
    });
  }
  if (kind === 'comp') {
    const preds = stats.predFinales || [];
    return Object.keys(gameData?.competences || {}).sort().map(nom => {
      const base = stats.competencesBase?.[nom] ?? 0;
      const rangs = character.competencesLibres?.rangs?.[nom] || 0;
      return { key: nom, nom, score: stats.competencesTotal?.[nom] ?? base + rangs, min: base, max: preds.includes(nom) ? 7 : 6, base };
    });
  }
  const preds = stats.futilesPredFinales || [];
  const noms = new Set([
    ...(gameData?.competencesFutiles || []).map(f => f.nom || f.name).filter(Boolean),
    ...Object.keys(character.competencesFutiles?.rangs || {}),
  ]);
  return [...noms].sort().map(nom => {
    const base = stats.futilesBase?.[nom] ?? 0;
    const rangs = character.competencesFutiles?.rangs?.[nom] || 0;
    return { key: nom, nom, score: stats.futilesTotal?.[nom] ?? base + rangs, min: base, max: preds.includes(nom) ? 7 : 6, base };
  });
}

export default function AjustementDocteModal({ character, gameData, onClose, onDone }) {
  const [kind, setKind] = useState('fortune');
  const ajustables = useMemo(() => buildAjustables(kind, character, gameData), [kind, character, gameData]);
  const [key, setKey] = useState(null);
  const item = ajustables.find(a => a.key === key) || ajustables[0];
  const [target, setTarget] = useState(null);
  const to = target ?? item?.score ?? 0;
  const [motif, setMotif] = useState('');
  const [xpMode, setXpMode] = useState('aucun');
  const [saving, setSaving] = useState(false);

  const from = item?.score ?? 0;
  const isRetrait = to < from;
  const modes = xpModesFor(isRetrait);
  const mode = modes.some(m => m.id === xpMode) ? xpMode : 'aucun';
  const xp = mode === 'aucun' ? 0 : computeAjustementXp(kind, from, to, character);
  const plancherFortune = character.data?.stats_scellees?.fortune ?? 0;
  const warnings = ajustementWarnings({ kind, key: item?.key, from, to, plancherFortune });

  const selectKind = (k) => { setKind(k); setKey(null); setTarget(null); };
  const selectKey = (k) => { setKey(k); setTarget(null); };

  const submit = async () => {
    if (!motif.trim()) { showInAppNotification('Le motif est obligatoire.', 'warning'); return; }
    if (to === from) return;
    setSaving(true);
    const { error } = await supabase.rpc('docte_ajuster_fiche', {
      p_character_id: character.id,
      p_kind: kind,
      p_key: item.key,
      p_new_value: kind === 'comp' || kind === 'futile' ? to - item.base : to,
      p_motif: motif.trim(),
      p_xp_mode: mode,
      p_xp_valeur: xp,
      p_label: `${item.nom} ${from} → ${to}`,
    });
    setSaving(false);
    if (error) { showInAppNotification(`Ajustement refusé : ${error.message}`, 'error'); return; }
    showInAppNotification(`${item.nom} : ${from} → ${to}. Le joueur sera prévenu à sa prochaine connexion.`, 'success');
    onDone?.();
  };

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-lg" labelledBy="ajustement-docte-title">
      <ModalHeader id="ajustement-docte-title" title={`Ajustement du Docte — ${character.nom || ''}`} onClose={onClose} />
      <div className="p-5 overflow-y-auto space-y-4 text-stone-800">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Type de valeur">
          {KINDS.map(k => (
            <button key={k.id} onClick={() => selectKind(k.id)} aria-pressed={kind === k.id}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold border ${kind === k.id ? 'bg-amber-800 text-white border-amber-800' : 'bg-white border-stone-300'}`}>
              {k.label}
            </button>
          ))}
        </div>

        {kind !== 'fortune' && (
          <label className="block text-sm font-bold">
            Valeur
            <select value={item?.key || ''} onChange={e => selectKey(e.target.value)} className="mt-1 w-full border border-stone-300 rounded-lg p-2 bg-white font-normal">
              {ajustables.map(a => <option key={a.key} value={a.key}>{a.nom} ({a.score})</option>)}
            </select>
          </label>
        )}

        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setTarget(Math.max(item.min, to - 1))} disabled={to <= item?.min} aria-label="Diminuer"
            className="h-10 w-10 rounded-lg bg-stone-100 hover:bg-red-100 font-bold text-lg disabled:opacity-30">−</button>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-900">{from} → {to}</div>
            <div className="text-xs text-stone-500">Min {item?.min} / Max {item?.max}</div>
          </div>
          <button onClick={() => setTarget(Math.min(item.max, to + 1))} disabled={to >= item?.max} aria-label="Augmenter"
            className="h-10 w-10 rounded-lg bg-amber-100 hover:bg-green-100 font-bold text-lg disabled:opacity-30">+</button>
        </div>

        {to !== from && (
          <fieldset className="space-y-1">
            <legend className="text-sm font-bold">XP du joueur</legend>
            {modes.map(m => (
              <label key={m.id} className="flex items-center gap-2 text-sm">
                <input type="radio" name="xp-mode" checked={mode === m.id} onChange={() => setXpMode(m.id)} />
                {m.label}{m.id !== 'aucun' && ` (${computeAjustementXp(kind, from, to, character)} XP)`}
              </label>
            ))}
          </fieldset>
        )}

        <label className="block text-sm font-bold">
          Motif (visible par le joueur)
          <textarea value={motif} onChange={e => setMotif(e.target.value)} rows={2} placeholder="Ex. Krach de la Bourse, commotion…"
            className="mt-1 w-full border border-stone-300 rounded-lg p-2 font-normal" />
        </label>

        {warnings.map(w => (
          <p key={w} className="text-sm bg-amber-50 border border-amber-300 text-amber-900 rounded-lg p-2">⚠️ {w}</p>
        ))}

        <div className="flex justify-end gap-2 pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-stone-300 font-bold text-sm">Annuler</button>
          <button onClick={submit} disabled={saving || to === from || !motif.trim()}
            className="px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-700 text-white font-bold text-sm disabled:opacity-40">
            Appliquer l'ajustement
          </button>
        </div>
      </div>
    </ModalShell>
  );
}
