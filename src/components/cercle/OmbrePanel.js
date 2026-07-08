// src/components/cercle/OmbrePanel.js
// Modal Docte : écrire / révéler une Conséquence de l'Ombre pour un personnage
import React, { useState } from 'react';
import { X, Eye, Send, Trash2, Loader } from '../../config/icons';

export default function OmbrePanel({
  characterNom,
  sessionTitre = null,
  existingOmbre = null,    // { id, contenu, est_revelee } si déjà écrite
  onAdd,                   // async (contenu) → bool
  onUpdate,                // async (id, contenu) → bool
  onReveal,                // async (id) → bool
  onDelete,                // async (id) → void
  onClose,
}) {
  const [contenu, setContenu] = useState(existingOmbre?.contenu || '');
  const [saving, setSaving] = useState(false);
  const [confirmReveal, setConfirmReveal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleSave = async () => {
    if (!contenu.trim()) return;
    setSaving(true);
    let ok;
    if (existingOmbre) {
      ok = await onUpdate(existingOmbre.id, contenu.trim());
    } else {
      ok = await onAdd(contenu.trim());
    }
    setSaving(false);
    if (ok) onClose();
  };

  const handleReveal = async () => {
    if (!existingOmbre) return;
    setSaving(true);
    await onReveal(existingOmbre.id);
    setSaving(false);
    onClose();
  };

  const handleDelete = async () => {
    if (!existingOmbre) return;
    setSaving(true);
    await onDelete(existingOmbre.id);
    setSaving(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/70 backdrop-blur-sm p-4">
      <div className="bg-[#0e0e0e] max-w-lg w-full rounded-2xl shadow-2xl border-2 border-stone-700 overflow-hidden">

        {/* En-tête sombre */}
        <div className="px-5 py-4 border-b border-stone-700 flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-stone-100 text-base flex items-center gap-2">
              <span className="text-lg">🌑</span>
              Conséquence de l'Ombre
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {characterNom}
              {sessionTitre ? <span className="text-stone-500"> · session « {sessionTitre} »</span> : null}
            </p>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-100 transition-colors" aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Statut si révélée */}
          {existingOmbre?.est_revelee && (
            <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg px-4 py-2 text-amber-300 text-xs font-bold flex items-center gap-2">
              <Eye size={14} /> Révélée au Joueur
            </div>
          )}

          {/* Champ texte */}
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Texte secret
            </label>
            <textarea
              value={contenu}
              onChange={e => setContenu(e.target.value)}
              disabled={existingOmbre?.est_revelee}
              rows={6}
              className="w-full bg-stone-900 border border-stone-600 rounded-xl p-3 text-stone-100 text-sm font-serif resize-none outline-none focus:border-stone-400 placeholder:text-stone-600 disabled:opacity-60"
              placeholder="Ce que l'Ombre a laissé comme marque…"
            />
          </div>

          {/* Actions */}
          {confirmReveal ? (
            <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 space-y-3">
              <p className="text-sm text-amber-200 font-serif text-center">
                Révéler cette Conséquence au Joueur via le Télégraphe ?
              </p>
              <p className="text-xs text-stone-400 text-center italic">Cette action est irréversible.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmReveal(false)}
                  className="flex-1 py-2 text-sm bg-stone-700 hover:bg-stone-600 text-stone-100 rounded-lg font-bold transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleReveal}
                  disabled={saving}
                  className="flex-1 py-2 text-sm bg-amber-700 hover:bg-amber-700 text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {saving ? <Loader size={14} className="animate-spin" /> : <Eye size={14} />}
                  Oui, révéler
                </button>
              </div>
            </div>
          ) : confirmDelete ? (
            <div className="bg-red-900/20 border border-red-700/40 rounded-xl p-4 space-y-3">
              <p className="text-sm text-red-300 font-serif text-center">
                Supprimer cette Conséquence de l'Ombre ?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="flex-1 py-2 text-sm bg-stone-700 hover:bg-stone-600 text-stone-100 rounded-lg font-bold transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleDelete}
                  disabled={saving}
                  className="flex-1 py-2 text-sm bg-red-700 hover:bg-red-600 text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {saving ? <Loader size={14} className="animate-spin" /> : <Trash2 size={14} />}
                  Supprimer
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm bg-stone-700 hover:bg-stone-600 text-stone-100 rounded-lg font-bold transition-colors"
              >
                Annuler
              </button>

              {existingOmbre && !existingOmbre.est_revelee && (
                <button
                  onClick={() => setConfirmDelete(true)}
                  className="px-3 py-2 text-sm bg-stone-800 hover:bg-red-900/40 text-stone-400 hover:text-red-300 rounded-lg transition-colors border border-stone-700"
                  title="Supprimer"
                >
                  <Trash2 size={14} />
                </button>
              )}

              {!existingOmbre?.est_revelee && (
                <button
                  onClick={handleSave}
                  disabled={saving || !contenu.trim()}
                  className="flex-1 py-2 text-sm bg-stone-600 hover:bg-stone-500 text-stone-100 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  {saving ? <Loader size={14} className="animate-spin" /> : null}
                  {existingOmbre ? 'Modifier' : 'Sceller'}
                </button>
              )}

              {existingOmbre && !existingOmbre.est_revelee && (
                <button
                  onClick={() => setConfirmReveal(true)}
                  disabled={saving}
                  className="flex-1 py-2 text-sm bg-amber-700 hover:bg-amber-700 text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Eye size={14} /> Révéler au Joueur
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
