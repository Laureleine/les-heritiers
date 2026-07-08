// src/components/cercle/SessionForm.js
import React, { useState, useEffect } from 'react';
import { X, Calendar, Gift, Sparkles, Users, CheckCircle2, Globe, EyeOff } from '../../config/icons';

const TODAY = new Date().toISOString().split('T')[0];

function buildPresents(activeMembers) {
  return activeMembers
    .filter(m => m.characters?.id)
    .map(m => ({
      character_id: m.characters.id,
      user_id:      m.user_id,
      nom:          m.characters.nom,
      username:     m.profiles?.username || '',
      present:      true,
    }));
}

export default function SessionForm({ onClose, onSave, activeMembers, editSession }) {
  const isEdit = !!editSession;

  const [form, setForm] = useState({
    titre:        editSession?.titre        || '',
    date_partie:  editSession?.date_partie  || TODAY,
    resume:       editSession?.resume       || '',
    xp_distribue: editSession?.xp_distribue ?? 0,
    xp_auto:      editSession?.xp_auto      ?? true,
    xp_scope:     editSession?.xp_scope     || 'membres',
  });

  const [presents, setPresents] = useState(() => {
    const base = buildPresents(activeMembers);
    if (!editSession?.session_presents) return base;
    const presentIds = new Set(
      editSession.session_presents.filter(p => p.present).map(p => p.character_id)
    );
    return base.map(p => ({ ...p, present: presentIds.has(p.character_id) }));
  });

  // Met à jour xp_scope → 'membres' si tout le monde est présent
  useEffect(() => {
    const allPresent = presents.every(p => p.present);
    if (allPresent && form.xp_scope === 'presents') {
      setForm(f => ({ ...f, xp_scope: 'membres' }));
    }
  }, [presents, form.xp_scope]);

  const hasAbsent = presents.some(p => !p.present);

  const togglePresent = (character_id) => {
    setPresents(ps => ps.map(p => p.character_id === character_id ? { ...p, present: !p.present } : p));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titre.trim()) return;
    onSave(form, presents);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
      <div className="bg-[#fdfbf7] w-full max-w-xl rounded-xl shadow-2xl border-2 border-amber-900/20 overflow-hidden max-h-[90vh] flex flex-col">

        {/* ── En-tête ── */}
        <div className="px-5 py-4 bg-amber-50 border-b border-amber-200 flex justify-between items-center shrink-0">
          <h3 className="font-serif font-bold text-amber-900 text-lg">
            {isEdit ? 'Modifier la partie' : 'Nouvelle partie'}
          </h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1">
          <div className="p-5 space-y-5">

            {/* ── Titre + Date ── */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Titre *</label>
                <input
                  type="text"
                  required
                  value={form.titre}
                  onChange={e => setForm(f => ({ ...f, titre: e.target.value }))}
                  placeholder="Le Secret du Lac Noir…"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-1 focus:ring-amber-400 outline-none font-serif"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                  <Calendar size={11} className="inline mr-1" />Date
                </label>
                <input
                  type="date"
                  required
                  value={form.date_partie}
                  onChange={e => setForm(f => ({ ...f, date_partie: e.target.value }))}
                  className="px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-1 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>

            {/* ── Présents ── */}
            {presents.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                  <Users size={11} className="inline mr-1" />Héritiers présents
                </label>
                <div className="space-y-1.5">
                  {presents.map(p => (
                    <label
                      key={p.character_id}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg border cursor-pointer transition-colors select-none ${
                        p.present
                          ? 'bg-amber-50 border-amber-200 hover:bg-amber-100'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={p.present}
                        onChange={() => togglePresent(p.character_id)}
                        className="sr-only"
                      />
                      <CheckCircle2
                        size={18}
                        className={p.present ? 'text-amber-600 shrink-0' : 'text-stone-300 shrink-0'}
                      />
                      <span className={`text-sm font-bold font-serif ${p.present ? 'text-amber-900' : 'text-stone-400'}`}>
                        {p.nom}
                      </span>
                      <span className={`text-xs ml-auto ${p.present ? 'text-stone-400' : 'text-stone-300'}`}>
                        {p.username}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* ── XP ── */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Gift size={15} className="text-amber-700 shrink-0" />
                <span className="text-sm font-bold text-amber-900">Points d'expérience</span>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs text-stone-600 font-bold">XP accordés :</label>
                <div className="flex items-center gap-1">
                  <button type="button" onClick={() => setForm(f => ({ ...f, xp_distribue: Math.max(0, (f.xp_distribue || 0) - 1) }))}
                    className="w-7 h-7 rounded bg-white border border-amber-300 text-amber-800 font-bold hover:bg-amber-100 text-sm">−</button>
                  <input
                    type="number" min="0" max="100"
                    value={form.xp_distribue || ''}
                    onChange={e => setForm(f => ({ ...f, xp_distribue: parseInt(e.target.value) || 0 }))}
                    className="w-16 text-center px-2 py-1 border border-amber-300 rounded text-sm font-bold text-amber-900 outline-none focus:ring-1 focus:ring-amber-400"
                  />
                  <button type="button" onClick={() => setForm(f => ({ ...f, xp_distribue: (f.xp_distribue || 0) + 1 }))}
                    className="w-7 h-7 rounded bg-white border border-amber-300 text-amber-800 font-bold hover:bg-amber-100 text-sm">+</button>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {[3, 5, 10].map(n => (
                    <button key={n} type="button"
                      onClick={() => setForm(f => ({ ...f, xp_distribue: n }))}
                      className={`px-2 py-0.5 rounded text-xs font-bold border transition-colors ${form.xp_distribue === n ? 'bg-amber-700 text-white border-amber-700' : 'bg-white border-amber-300 text-amber-700 hover:bg-amber-100'}`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.xp_auto}
                  onChange={e => setForm(f => ({ ...f, xp_auto: e.target.checked }))}
                  className="w-4 h-4 rounded accent-amber-700"
                />
                <Sparkles size={13} className="text-amber-600" />
                <span className="text-sm text-amber-900">Attribution automatique à la validation</span>
              </label>

              {form.xp_auto && hasAbsent && (
                <label className="flex items-center gap-2 cursor-pointer select-none pl-6">
                  <input
                    type="checkbox"
                    checked={form.xp_scope === 'presents'}
                    onChange={e => setForm(f => ({ ...f, xp_scope: e.target.checked ? 'presents' : 'membres' }))}
                    className="w-4 h-4 rounded accent-amber-700"
                  />
                  <span className="text-xs text-stone-600">Distribuer aux présents uniquement (pas aux absents)</span>
                </label>
              )}

              {form.xp_auto && (form.xp_distribue || 0) === 0 && (
                <p className="text-[11px] text-stone-400 italic pl-1">Saisissez un montant supérieur à 0 pour activer la distribution.</p>
              )}

              {isEdit && editSession?.xp_attribue && (
                <p className="text-[11px] text-amber-700 bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200">
                  ⚠ XP déjà distribués. Une modification du montant appliquera un delta (±) sur chaque Héritier.
                </p>
              )}
            </div>

            {/* ── Résumé ── */}
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Résumé de la session</label>
              <textarea
                value={form.resume}
                onChange={e => setForm(f => ({ ...f, resume: e.target.value }))}
                rows={4}
                placeholder="Ce qui s'est passé lors de cette partie…"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-1 focus:ring-amber-400 outline-none resize-none font-serif leading-relaxed"
              />
            </div>
          </div>

          {/* ── Pied de formulaire ── */}
          <div className="px-5 py-4 bg-stone-50 border-t border-stone-200 flex justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-bold text-stone-600 hover:text-stone-900 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={!form.titre.trim()}
              className="px-5 py-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold rounded-lg transition-colors disabled:opacity-50 shadow-sm"
            >
              {isEdit ? 'Mettre à jour' : 'Enregistrer la partie'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
