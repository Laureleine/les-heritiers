import React from 'react';
import { AlertTriangle, CheckCircle } from '../../config/icons';
import { computeXpDepenseFromJournal } from '../../utils/repairJournaux';

export default function RepairConfirmModal({ target, onConfirm, onCancel }) {
  if (!target) return null;
  const { row, preview } = target;
  const oldJournal   = row.dbChar.data?.historique_xp || [];
  const gainsBefore  = oldJournal.filter(t => t.type === 'GAIN').length;
  const depBefore    = oldJournal.filter(t => t.type === 'DEPENSE').length;
  const gainsAfter   = preview.filter(t => t.type === 'GAIN').length;
  const depAfter     = preview.filter(t => t.type === 'DEPENSE').length;
  const newXpDepense = computeXpDepenseFromJournal(preview);
  const oldXpTotal   = row.dbChar.xp_total || 0;
  const newXpTotal   = Math.max(oldXpTotal, newXpDepense);
  const xpTotalBumped = newXpTotal > oldXpTotal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={22} />
          <div>
            <h3 className="font-serif font-bold text-gray-900 text-lg leading-tight">
              Reconstruire le journal de<br />
              <span className="text-amber-800">{row.dbChar.nom}</span> ?
            </h3>
            <p className="text-sm text-gray-500 mt-1">Les dépenses actuelles seront remplacées.</p>
          </div>
        </div>

        <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden mb-4">
          <div className="grid grid-cols-3 text-[11px] font-bold text-stone-500 uppercase tracking-wider border-b border-stone-200">
            <div className="p-2 border-r border-stone-200">Données</div>
            <div className="p-2 text-center border-r border-stone-200">Avant</div>
            <div className="p-2 text-center text-blue-700">Après</div>
          </div>
          <div className="grid grid-cols-3 text-sm divide-y divide-stone-100">
            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Entrées GAIN</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{gainsBefore}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{gainsAfter}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Entrées DÉPENSE</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{depBefore}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{depAfter}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Total entrées</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{oldJournal.length}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{preview.length}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">XP dépensé</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{row.dbChar.xp_depense}</div>
            <div className="p-2 text-center text-blue-700 font-bold">{newXpDepense}</div>

            <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">XP total</div>
            <div className="p-2 text-center text-stone-700 border-r border-stone-200">{oldXpTotal}</div>
            <div className={`p-2 text-center font-bold ${xpTotalBumped ? 'text-amber-600' : 'text-blue-700'}`}>
              {newXpTotal}{xpTotalBumped && ' ↑'}
            </div>
          </div>
        </div>

        {xpTotalBumped && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 mb-4 flex items-start gap-2">
            <AlertTriangle size={14} className="shrink-0 mt-0.5 text-amber-600" />
            <span>
              Le XP total sera relevé de <strong>{oldXpTotal}</strong> à <strong>{newXpTotal}</strong> pour rester cohérent avec les dépenses reconstruites (contrainte de base de données).
            </span>
          </div>
        )}

        <p className="text-xs text-stone-500 mb-5">
          Les entrées <strong>GAIN</strong> sont préservées. Les <strong>DÉPENSES</strong> sont recalculées depuis le Plancher de Verre.
        </p>

        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-stone-100 text-stone-700 rounded-lg font-bold hover:bg-stone-200 transition-colors">
            Annuler
          </button>
          <button onClick={onConfirm} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <CheckCircle size={16} /> Reconstruire
          </button>
        </div>
      </div>
    </div>
  );
}
