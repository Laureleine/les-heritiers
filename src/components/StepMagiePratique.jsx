// src/components/StepMagiePratique.jsx
// Step dédié à une pratique magique débloquée — affiche son CompetenceRow.
import React from 'react';
import { Wand2, Lock } from '../config/icons';
import { useCompetencesLibres } from './competencesLibres/useCompetencesLibres';

// Réutilise le CompetenceRow de StepCompetencesLibres via le hook
// (le hook expose getCompRowData + handlers + isScelle + creatingSpecFor)
export default function StepMagiePratique({ nomMagie }) {
  const {
    magiesEtat,
    getCompRowData,
    handlers,
    isScelle,
    creatingSpecFor,
    setCreatingSpecFor,
    character,
  } = useCompetencesLibres();

  const magie = magiesEtat.find(m => m.nom === nomMagie);

  if (!magie?.actif) {
    return (
      <div className="space-y-4">
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
          <Lock size={32} className="mx-auto text-stone-400 mb-3" />
          <p className="text-stone-600 font-serif">
            <strong>{nomMagie}</strong> n'est pas encore débloquée.<br />
            <span className="text-sm text-stone-500">Débloquez-la dans l'étape Magies pour y accéder.</span>
          </p>
        </div>
      </div>
    );
  }

  // Réimporte dynamiquement CompetenceRow depuis StepCompetencesLibres est complexe ;
  // on recrée le rendu minimal via getCompRowData qui expose toutes les données.
  const rowData = getCompRowData(nomMagie);

  return (
    <div className="space-y-4">
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-start gap-3">
        <Wand2 size={20} className="text-violet-700 shrink-0 mt-0.5" />
        <div>
          <h2 className="font-serif font-bold text-violet-900 text-base">{nomMagie}</h2>
          <p className="text-sm text-violet-800 mt-1">
            Investissez des rangs dans cette pratique magique. Coût : rang à atteindre × 2 XP.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-violet-200 shadow-sm overflow-hidden">
        <MagieCompRow
          data={rowData}
          handlers={handlers}
          isScelle={isScelle}
          creatingSpecFor={creatingSpecFor}
          setCreatingSpecFor={setCreatingSpecFor}
          character={character}
        />
      </div>
    </div>
  );
}

// Version simplifiée du CompetenceRow adaptée aux magies
function MagieCompRow({ data, handlers, isScelle, creatingSpecFor, setCreatingSpecFor, character }) {
  if (!data) return null;
  const {
    nomComp, scoreBase, totalScore, isEspritEligible,
    rangsInvestis, userSpecs, availableSpecs, hasMetierSpec,
  } = data;

  const plancher = isScelle
    ? (character?.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0)
    : 0;
  const canDecrement = isScelle && rangsInvestis > plancher;
  const canIncrement = totalScore < 7;

  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span className="font-medium text-sm text-violet-900">{nomComp}</span>
          {scoreBase > 0 && (
            <span className="ml-2 text-[10px] text-stone-400">base {scoreBase}</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handlers.handleRangChange(nomComp, -1)}
            disabled={!canDecrement}
            className="w-7 h-7 rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-sm transition-colors"
          >−</button>
          <div className="flex items-center bg-white rounded border border-stone-300 shadow-sm">
            <div className="px-2 py-1 text-xs text-stone-400 border-r border-stone-200 bg-stone-50 select-none">rang</div>
            <div className="px-3 py-1 font-bold text-amber-900 text-lg bg-amber-50 min-w-[2.5rem] text-center">{totalScore}</div>
          </div>
          <button
            onClick={() => handlers.handleRangChange(nomComp, 1)}
            disabled={!canIncrement}
            className="w-7 h-7 rounded-full border border-violet-300 text-violet-700 hover:bg-violet-50 disabled:opacity-30 disabled:cursor-not-allowed font-bold text-sm transition-colors"
          >+</button>
        </div>
      </div>

      {/* Spécialités */}
      {userSpecs?.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {userSpecs.map(spec => (
            <span key={spec} className="text-[10px] px-2 py-1 rounded bg-blue-100 text-blue-800 border border-blue-300 shadow-sm">
              {spec}
              {!isScelle && (
                <button onClick={() => handlers.handleRemoveSpecialiteUser(nomComp, spec)} className="ml-1 text-blue-500 hover:text-red-600 font-bold">×</button>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
