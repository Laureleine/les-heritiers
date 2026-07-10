// src/components/StepMagies.jsx
import React from 'react';
import { Sparkles, Lock } from '../config/icons';
import { useCompetencesLibres } from './competencesLibres/useCompetencesLibres';

export default function StepMagies() {
  const { magiesEtat, handlers, isScelle } = useCompetencesLibres();

  if (!isScelle) {
    return (
      <div className="space-y-4">
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
          <Lock size={32} className="mx-auto text-stone-400 mb-3" />
          <p className="text-stone-600 font-serif">
            Les Pratiques Magiques sont accessibles après le scellage de l'Héritier.<br />
            <span className="text-sm text-stone-500">Revenez ici une fois le Puits des Âmes activé.</span>
          </p>
        </div>
      </div>
    );
  }

  const magiesVerrouillees = magiesEtat.filter(m => !m.actif);
  const magiesActives = magiesEtat.filter(m => m.actif);

  return (
    <div className="space-y-4">
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-start gap-3">
        <Sparkles size={20} className="text-violet-700 shrink-0 mt-0.5" />
        <div>
          <h2 className="font-serif font-bold text-violet-900 text-base">Pratiques Magiques</h2>
          <p className="text-sm text-violet-800 mt-1 leading-relaxed">
            Débloquez une pratique magique pour 5 XP. Chaque pratique débloquée ouvre un step dédié pour y investir des rangs.
          </p>
        </div>
      </div>

      {magiesActives.length > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2">Pratiques actives</p>
          <div className="flex flex-wrap gap-2">
            {magiesActives.map(m => (
              <span key={m.nom} className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded-full font-bold">
                ✓ {m.nom}
              </span>
            ))}
          </div>
        </div>
      )}

      {magiesVerrouillees.length > 0 ? (
        <div className="bg-white rounded-xl border border-violet-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-violet-50">
            {magiesVerrouillees.map(magie => (
              <div key={magie.nom} className={`px-4 py-3 flex justify-between items-center gap-3 ${magie.prereqsOk ? 'bg-violet-50/40' : ''}`}>
                <div className="min-w-0">
                  <span className={`font-medium text-sm ${magie.prereqsOk ? 'text-violet-900' : 'text-stone-400'}`}>
                    {magie.nom}
                  </span>
                  {magie.prereqsDetails.length > 0 && (
                    <ul className="mt-1 space-y-0.5">
                      {magie.prereqsDetails.map((d, i) => (
                        <li key={i} className={`flex items-center gap-1 text-[11px] ${d.met ? 'text-emerald-600' : 'text-red-500'}`}>
                          <span className="shrink-0">{d.met ? '✓' : '✗'}</span>
                          <span>{d.label}</span>
                          {!d.met && d.val !== undefined && <span className="text-stone-400 ml-0.5">({d.val}/{d.need})</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {magie.prereqsOk ? (
                  <button
                    onClick={() => handlers.handleDebloquerMagie(magie.nom)}
                    className="shrink-0 text-xs bg-violet-600 hover:bg-violet-700 text-white px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    Débloquer — 5 XP
                  </button>
                ) : (
                  <span className="shrink-0 text-[10px] text-stone-400 bg-stone-100 px-2 py-1 rounded-full">
                    Prérequis manquants
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center text-sm text-stone-500">
          Toutes les pratiques magiques disponibles sont déjà actives.
        </div>
      )}
    </div>
  );
}
