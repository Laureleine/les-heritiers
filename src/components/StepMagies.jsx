// src/components/StepMagies.jsx
import React from 'react';
import { Sparkles, Lock } from '../config/icons';
import { useCompetencesLibres } from './competencesLibres/useCompetencesLibres';
import { useGameDataContext } from '../context/GameDataContext';

const PROFILS_DRUIDISME = ['Érudit', 'Aventurier'];

export default function StepMagies() {
  const { magiesEtat, handlers, isScelle, isDruidisme, character } = useCompetencesLibres();
  const { gameData } = useGameDataContext();

  if (!isScelle) {
    const profilMajeur = character.profils?.majeur?.nom;
    const ct = character.computedStats?.competencesTotal || {};
    const survie = ct['Survie'] || 0;
    const occultisme = ct['Occultisme'] || 0;

    // PP restants pour le profil majeur (hors Druidisme déjà déduit)
    const budgetTotal = character.computedStats?.budgetsPP?.[profilMajeur] || 0;
    const isModerne = character.typeFee?.toLowerCase().includes('moderne');
    const depensesProfil = (character.viaSociale?.[profilMajeur] || []).reduce((sum, id) => {
      const item = (gameData.socialItems || []).find(i => i.id === id);
      if (!item) return sum;
      return sum + (Number((isModerne && item.cout_moderne != null) ? item.cout_moderne : item.cout) || 0);
    }, 0);
    const ppRestants = budgetTotal - depensesProfil - (character.data?.druidismeCreationPP || 0);
    const ppOk = ppRestants >= 5;

    const prereqs = [
      { label: 'Profil majeur : Érudit ou Aventurier', met: PROFILS_DRUIDISME.includes(profilMajeur), val: profilMajeur || '—', need: null },
      { label: 'Survie ≥ 4', met: survie >= 4, val: survie, need: 4 },
      { label: 'Occultisme ≥ 4', met: occultisme >= 4, val: occultisme, need: 4 },
      { label: 'Budget PP suffisant (5 PP requis)', met: ppOk, val: ppRestants, need: 5 },
    ];
    const prereqsOk = prereqs.every(p => p.met);

    return (
      <div className="space-y-4">
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-start gap-3">
          <Sparkles size={20} className="text-violet-700 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-serif font-bold text-violet-900 text-base">Pratiques Magiques</h2>
            <p className="text-sm text-violet-800 mt-1 leading-relaxed">
              Les Pratiques Magiques s'ouvrent après le scellage. Le Druidisme seul peut être acquis à la création.
            </p>
          </div>
        </div>

        {isDruidisme ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2">Pratique acquise à la création</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded-full font-bold">
                ✓ Druidisme
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-violet-200 shadow-sm overflow-hidden">
            <div className="px-3 py-2 bg-violet-50 border-b border-violet-100">
              <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wide">Druidisme — Prérequis de création</span>
            </div>
            <div className="divide-y divide-stone-50">
              {prereqs.map((p, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 text-xs ${p.met ? 'text-emerald-700' : 'text-red-500'}`}>
                  <span className="shrink-0 font-bold">{p.met ? '✓' : '✗'}</span>
                  <span className="flex-1">{p.label}</span>
                  {!p.met && p.need !== null && (
                    <span className="text-stone-400 tabular-nums">{p.val}/{p.need}</span>
                  )}
                  {!p.met && p.need === null && (
                    <span className="text-stone-400">{p.val}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="px-3 py-2.5 border-t border-violet-100 flex justify-between items-center">
              <span className="text-[11px] text-stone-500">Coût : 5 PP (Profil {profilMajeur || '—'})</span>
              {prereqsOk ? (
                <button
                  onClick={() => handlers.handleDebloquerMagie('Druidisme')}
                  className="text-xs bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-lg font-bold transition-colors"
                >
                  Acquérir à la création
                </button>
              ) : (
                <span className="text-[10px] text-stone-400 bg-stone-100 px-2 py-1 rounded-full">Prérequis manquants</span>
              )}
            </div>
          </div>
        )}

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center">
          <Lock size={20} className="mx-auto text-stone-400 mb-2" />
          <p className="text-sm text-stone-500">Les autres pratiques sont accessibles après le scellage du Puits des Âmes.</p>
        </div>
      </div>
    );
  }

  const magiesVerrouillees = [
    ...(!isDruidisme ? [{ nom: 'Druidisme', prereqsOk: true, prereqsDetails: [] }] : []),
    ...magiesEtat.filter(m => !m.actif),
  ];
  const magiesActives = [
    ...(isDruidisme ? [{ nom: 'Druidisme' }] : []),
    ...magiesEtat.filter(m => m.actif),
  ];

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
