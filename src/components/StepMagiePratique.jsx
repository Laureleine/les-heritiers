// src/components/StepMagiePratique.jsx
import React, { useMemo } from 'react';
import { Wand2, Lock, Plus, BookOpen } from '../config/icons';
import { useCompetencesLibres } from './competencesLibres/useCompetencesLibres';
import { useGameDataContext } from '../context/GameDataContext';
import { TITRES_MAGIE } from '../data/DictionnaireJeu';

// Paliers universels (rangs 1-2, 3-4, 5-6, 7)
const PALIERS = [
  { label: 'Novice',       min: 1, max: 2, color: 'bg-stone-100 text-stone-700 border-stone-400' },
  { label: 'Adepte',       min: 3, max: 4, color: 'bg-blue-100 text-blue-900 border-blue-400' },
  { label: 'Maître',       min: 5, max: 6, color: 'bg-violet-100 text-violet-900 border-violet-400' },
  { label: 'Grand Maître', min: 7, max: 7, color: 'bg-amber-100 text-amber-900 border-amber-400' },
];
const PALIER_KEYS = ['novice', 'adepte', 'maitre', 'grandMaitre'];

function getPalier(score) {
  return PALIERS.find(p => score >= p.min && score <= p.max) || null;
}

// Niveaux de sort accessibles selon le rang actuel
const NIVEAUX_ACCESSIBLES = (rang) => {
  const niveaux = [];
  if (rang >= 1) niveaux.push('Novice');
  if (rang >= 3) niveaux.push('Adepte');
  if (rang >= 5) niveaux.push('Maître');
  if (rang >= 7) niveaux.push('Grand Maître');
  return niveaux;
};

// Prérequis avant d'apprendre un sort d'un niveau donné
function checkPrerequisSort(niveauSort, sortsConnus, sortsCatalog) {
  if (niveauSort === 'Novice') return { ok: true };
  const niveauPrecedent = { 'Adepte': 'Novice', 'Maître': 'Adepte', 'Grand Maître': 'Maître' }[niveauSort];
  const connus = sortsCatalog.filter(s => s.niveau === niveauPrecedent && sortsConnus.includes(s.id));
  if (connus.length < 2) return { ok: false, msg: `Connaître 2 sorts de niveau ${niveauPrecedent} (${connus.length}/2)` };
  return { ok: true };
}

export default function StepMagiePratique({ nomMagie }) {
  const { character, magiesEtat, getCompRowData, handlers, isScelle, getPremiereMagie } = useCompetencesLibres();
  const { gameData } = useGameDataContext();

  const magie = magiesEtat.find(m => m.nom === nomMagie);
  const isActif = magie?.actif || !!character?.data?.magies?.[nomMagie]?.actif;

  if (!isActif) {
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

  const rowData = getCompRowData(nomMagie);
  const palierActuel = rowData ? getPalier(rowData.totalScore) : null;
  const titres = TITRES_MAGIE[nomMagie] || null;
  const titreActuel = titres && palierActuel
    ? titres[PALIER_KEYS[PALIERS.indexOf(palierActuel)]]
    : null;

  const rang = rowData?.totalScore || 0;
  const sortsConnus = character?.data?.magies?.[nomMagie]?.sortsConnus || [];
  const sortsCatalog = useMemo(
    () => (gameData?.sorts || []).filter(s => s.magie === nomMagie),
    [gameData?.sorts, nomMagie]
  );
  const niveauxAccessibles = NIVEAUX_ACCESSIBLES(rang);

  return (
    <div className="space-y-4">
      {/* En-tête */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-start gap-3">
        <Wand2 size={20} className="text-violet-700 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-serif font-bold text-violet-900 text-base">{nomMagie}</h2>
            {palierActuel && (
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${palierActuel.color}`}>
                {titreActuel ? `${titreActuel} — ${palierActuel.label}` : palierActuel.label}
              </span>
            )}
          </div>
          <p className="text-sm text-violet-800 mt-1">
            Investissez des rangs dans cette pratique magique. Coût : rang à atteindre × 2 XP.
          </p>
        </div>
      </div>

      {/* Tableau des paliers */}
      <div className="bg-white rounded-xl border border-violet-100 shadow-sm overflow-hidden">
        <div className="px-3 py-1.5 bg-violet-50 border-b border-violet-100">
          <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wide">Paliers de maîtrise</span>
        </div>
        <div className="divide-y divide-violet-50">
          {PALIERS.map((p, idx) => {
            const isAtteint = rang >= p.min;
            const isCurrent = palierActuel?.label === p.label;
            const titre = titres?.[PALIER_KEYS[idx]] || null;
            return (
              <div key={p.label} className={`flex items-center gap-3 px-3 py-1.5 ${isCurrent ? 'bg-violet-50' : ''}`}>
                <span className={`w-2 h-2 rounded-full shrink-0 ${isAtteint ? 'bg-violet-500' : 'bg-stone-200'}`} />
                <span className={`text-xs font-semibold flex-1 ${isAtteint ? 'text-stone-800' : 'text-stone-400'}`}>
                  {titre ? <><span className="font-bold">{titre}</span><span className="font-normal text-stone-400 ml-1">— {p.label}</span></> : p.label}
                </span>
                <span className={`text-[10px] tabular-nums ${isAtteint ? 'text-stone-500' : 'text-stone-300'}`}>Rang {p.min}{p.min !== p.max ? `–${p.max}` : ''}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Widget rang — même style que CompetenceRow */}
      <div className="bg-white rounded-xl border border-violet-200 shadow-sm overflow-hidden">
        <MagieCompRow data={rowData} handlers={handlers} isScelle={isScelle} />
      </div>

      {/* Sorts */}
      {sortsCatalog.length > 0 && (
        <SortsSection
          nomMagie={nomMagie}
          rang={rang}
          sortsCatalog={sortsCatalog}
          sortsConnus={sortsConnus}
          niveauxAccessibles={niveauxAccessibles}
          handlers={handlers}
          isScelle={isScelle}
          coutSort={getPremiereMagie() === nomMagie ? 5 : 8}
        />
      )}
    </div>
  );
}

function SortsSection({ nomMagie, rang, sortsCatalog, sortsConnus, niveauxAccessibles, handlers, isScelle, coutSort }) {
  const sortsConnus_set = new Set(sortsConnus);
  const niveaux = ['Novice', 'Adepte', 'Maître', 'Grand Maître'];

  return (
    <div className="bg-white rounded-xl border border-violet-200 shadow-sm overflow-hidden">
      <div className="px-3 py-2 bg-violet-50 border-b border-violet-100 flex items-center gap-2">
        <BookOpen size={14} className="text-violet-600" />
        <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wide">Sorts</span>
        {sortsConnus.length > 0 && (
          <span className="ml-auto text-[10px] font-bold text-violet-600 bg-violet-100 border border-violet-200 px-2 py-0.5 rounded-full">
            {sortsConnus.length} connu{sortsConnus.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="divide-y divide-stone-50">
        {niveaux.map(niveau => {
          const sortsNiveau = sortsCatalog.filter(s => s.niveau === niveau);
          if (sortsNiveau.length === 0) return null;
          const accessible = niveauxAccessibles.includes(niveau);
          const prereq = checkPrerequisSort(niveau, sortsConnus, sortsCatalog);

          return (
            <div key={niveau} className={`px-3 py-2 ${!accessible ? 'opacity-40' : ''}`}>
              <div className="text-[10px] font-bold text-stone-500 uppercase tracking-wide mb-1.5">{niveau}</div>
              {!accessible && (
                <p className="text-[10px] text-stone-400 italic mb-1">
                  Rang {niveau === 'Adepte' ? '3' : niveau === 'Maître' ? '5' : '7'} requis
                </p>
              )}
              {accessible && !prereq.ok && (
                <p className="text-[10px] text-amber-600 italic mb-1">{prereq.msg}</p>
              )}
              <div className="space-y-1">
                {sortsNiveau.map(sort => {
                  const connu = sortsConnus_set.has(sort.id);
                  const apprenableIci = accessible && (prereq.ok || connu);
                  return (
                    <div key={sort.id} className={`flex items-center gap-2 py-1 px-2 rounded-lg ${connu ? 'bg-emerald-50 border border-emerald-200' : 'bg-stone-50 border border-stone-100'}`}>
                      <span className={`text-sm font-serif flex-1 ${connu ? 'text-emerald-800 font-bold' : 'text-stone-700'}`}>
                        {connu && <span className="text-emerald-500 mr-1">✓</span>}
                        {sort.nom}
                      </span>
                      {!connu && isScelle && apprenableIci && (
                        sort.cout_xp === 0
                          ? <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-700 border border-emerald-300 shrink-0">Offert</span>
                          : <button
                              onClick={() => handlers.handleApprendreSortMagie(nomMagie, sort)}
                              className="text-[10px] font-bold px-2 py-1 rounded bg-violet-600 text-white hover:bg-violet-700 transition-colors shrink-0"
                            >
                              Apprendre — {coutSort} XP
                            </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Widget +/- rang — même style que CompetenceRow
function MagieCompRow({ data, handlers, isScelle }) {
  if (!data) return null;
  const {
    nomComp, scoreBase, totalScore,
    isMinusDisabled, isPlusDisabled, utileCost, rangEspritGratuitDispo,
    userSpecs,
  } = data;

  return (
    <div className="flex flex-col py-1.5 px-2 hover:bg-stone-50 transition-colors">
      <div className="flex justify-between items-center mb-0.5">
        <span className="font-bold text-stone-800 text-sm">{nomComp}</span>
        <div className="flex items-center bg-white rounded border border-stone-300 shadow-sm scale-95 origin-right">
          <div className="px-2 py-0.5 text-xs text-stone-400 border-r border-stone-200 bg-stone-50" title="Base calculée">{scoreBase}</div>
          <button onClick={() => handlers.handleRangChange(nomComp, -1)} disabled={isMinusDisabled} className="px-2 py-0.5 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-stone-300 font-bold">-</button>
          <div className="px-3 py-0.5 font-bold text-amber-900 min-w-[28px] text-center bg-amber-50">{totalScore}</div>
          <button onClick={() => handlers.handleRangChange(nomComp, 1)} disabled={isPlusDisabled} aria-label={`Augmenter ${nomComp}`} className="p-0.5 px-1 hover:bg-emerald-50 text-emerald-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <div className="flex items-center gap-1">
              <Plus size={16} />
              {isScelle && rangEspritGratuitDispo && <span className="text-[10px] font-bold text-purple-600">🧠 Gratuit</span>}
              {isScelle && !rangEspritGratuitDispo && utileCost > 0 && <span className="text-[10px] font-bold text-emerald-700">({utileCost} XP)</span>}
            </div>
          </button>
        </div>
      </div>

      {userSpecs?.length > 0 && (
        <div className="flex flex-wrap gap-1 pl-4 border-l-2 border-stone-200 ml-1 mt-0.5">
          {userSpecs.map(spec => (
            <span key={spec} className="text-[10px] px-2 py-1 rounded bg-blue-100 text-blue-800 border border-blue-300 shadow-sm">{spec}</span>
          ))}
        </div>
      )}
    </div>
  );
}
