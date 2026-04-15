// src/components/AnomalieFeeriqueWidget.jsx

import React, { useState, useMemo } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { FIXED_XP_COSTS } from '../utils/xpCalculator';

const MAX_ATOUTS_GLOBAL = 2;

export default function AnomalieFeeriqueWidget() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const [showAnomalie, setShowAnomalie] = useState(false);

  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  // 🛡️ Variables de Sceaux et d'XP
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const innatePouvoirs = character.data?.stats_scellees?.pouvoirs || [];
  
  const currentFeerie = character.caracteristiques?.feerie || 3;
  const maxPouvoirs = currentFeerie;
  const countSelected = character.pouvoirs?.length || 0;
  const countAtouts = character.atouts?.length || 0;

  const xpTotal = character.xp_total || 0;
  const xpDepense = character.xp_depense || 0;
  const xpDispo = xpTotal - xpDepense;

  const anomalieAtout = data?.atouts?.find(a => a.nom === 'Anomalie féérique');
  const anomalieId = anomalieAtout ? anomalieAtout.id : 'Anomalie féérique';
  const hasAnomalie = character.atouts?.includes(anomalieId) || character.atouts?.includes('Anomalie féérique');

  // 🧠 Cerveau : Extraction des pouvoirs extérieurs
  const exteriorPowers = useMemo(() => {
    if (!fairyData || !character.typeFee) return [];
    const others = [];
    const myFairyPowers = fairyData[character.typeFee]?.pouvoirs?.map(p => p.nom) || [];

    Object.keys(fairyData).forEach(fName => {
      if (fName !== character.typeFee) {
        const fData = fairyData[fName];
        if (fData && fData.pouvoirs) {
          fData.pouvoirs.forEach(p => {
            const isStandard = p.type_pouvoir === 'masque' || p.type_pouvoir === 'demasque';
            if (isStandard && !myFairyPowers.includes(p.nom) && !others.some(ex => ex.nom === p.nom)) {
              others.push({ ...p, origine: fName });
            }
          });
        }
      }
    });
    return others.sort((a, b) => a.nom.localeCompare(b.nom));
  }, [fairyData, character.typeFee]);

  const selectedExterior = character.pouvoirs?.find(pNom => exteriorPowers.some(ep => ep.nom === pNom));

  // ⚡ Moteur de l'Anomalie
  const handleAnomalieToggle = (pouvoirNom) => {
    if (isReadOnly) return;

    const isSelected = selectedExterior === pouvoirNom;

    if (isScelle && isSelected && innatePouvoirs.includes(pouvoirNom)) {
      showInAppNotification("Cette Anomalie fait partie de votre Sceau originel. Impossible de la purger !", "warning");
      return;
    }

    let newPouvoirs = character.pouvoirs ? [...character.pouvoirs] : [];
    let newAtouts = character.atouts ? [...character.atouts] : [];
    let newXpDepense = xpDepense;

    if (isSelected) {
      // ♻️ PURGE ET REVENTE
      newPouvoirs = newPouvoirs.filter(p => p !== pouvoirNom);
      newAtouts = newAtouts.filter(a => a !== anomalieId && a !== 'Anomalie féérique');

      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isAtoutInnate = innateAtouts.includes(anomalieId) || innateAtouts.includes('Anomalie féérique');

      if (isScelle && !isAtoutInnate) {
        newXpDepense = Math.max(0, xpDepense - FIXED_XP_COSTS.nouvel_atout);
        showInAppNotification(`Anomalie purgée : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, "success");
      }
    } else {
      // 🛒 SÉLECTION ET ACHAT
      if (selectedExterior) {
        newPouvoirs = newPouvoirs.filter(p => p !== selectedExterior);
      } else {
        if (newPouvoirs.length >= maxPouvoirs) {
          showInAppNotification("Vous avez atteint votre limite de pouvoirs maîtrisés.", "error");
          return;
        }

        if (!hasAnomalie) {
          if (isScelle) {
            if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
              showInAppNotification(`L'Anomalie consomme un emplacement d'Atout. Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP !`, "error");
              return;
            }
            newXpDepense = xpDepense + FIXED_XP_COSTS.nouvel_atout;
            showInAppNotification(`Anomalie activée pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
          } else {
            if (countAtouts >= MAX_ATOUTS_GLOBAL) {
              showInAppNotification(`Vous avez déjà ${MAX_ATOUTS_GLOBAL} Atouts.`, "error");
              return;
            }
          }
        }
      }
      newPouvoirs.push(pouvoirNom);
      if (!newAtouts.includes(anomalieId)) newAtouts.push(anomalieId);
      setShowAnomalie(false);
    }

    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { pouvoirs: newPouvoirs, atouts: newAtouts, xp_depense: newXpDepense },
      gameData
    });
  };

  return (
    <div className="mt-8 border-t-2 border-dashed border-amber-200 pt-6">
      <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
              <Sparkles size={20} className="text-fuchsia-600" />
              Anomalie Féérique
            </h4>
            <p className="text-sm text-fuchsia-800 mt-1">
              Permet d'assimiler un pouvoir appartenant à une autre espèce. <br/>
              <span className="font-bold text-fuchsia-900">(Coûte 1 emplacement d'Atout)</span>
            </p>
          </div>

          {(() => {
            const isAnomalieInnate = isScelle && innatePouvoirs.includes(selectedExterior);
            if (selectedExterior) {
              return (
                <button
                  onClick={() => handleAnomalieToggle(selectedExterior)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors border shrink-0 ${isAnomalieInnate ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed' : 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200'}`}
                >
                  {isAnomalieInnate ? '🔒 Purge Impossible' : 'Purger l\'Anomalie'}
                </button>
              );
            } else {
              return (
                <button
                  onClick={() => setShowAnomalie(!showAnomalie)}
                  disabled={countSelected >= maxPouvoirs || (!isScelle && !hasAnomalie && countAtouts >= MAX_ATOUTS_GLOBAL)}
                  className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
                >
                  {showAnomalie ? 'Refermer le catalogue' : 'Déclencher l\'Anomalie'}
                </button>
              );
            }
          })()}
        </div>

        {!selectedExterior && !hasAnomalie && !isScelle && countAtouts >= MAX_ATOUTS_GLOBAL && (
          <div className="text-xs text-red-600 font-bold mt-3 bg-red-50 p-2 rounded border border-red-100 animate-fade-in">
            Vous avez déjà sélectionné tous vos Atouts ({MAX_ATOUTS_GLOBAL}/{MAX_ATOUTS_GLOBAL}) à l'étape suivante. Libérez de la place pour pouvoir déclencher cette anomalie !
          </div>
        )}

        {!selectedExterior && !hasAnomalie && isScelle && (
          <div className="text-xs text-fuchsia-800 font-bold mt-3 bg-fuchsia-50 p-2 rounded border border-fuchsia-200 animate-fade-in">
            🪄 L'activation de l'Anomalie consommera un nouvel emplacement d'Atout et coûtera {FIXED_XP_COSTS.nouvel_atout} XP.
          </div>
        )}

        {selectedExterior && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3 animate-fade-in">
            <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20}/></div>
            <div>
              <div className="font-bold text-fuchsia-900 text-lg flex items-center gap-2">
                {selectedExterior}
                {isScelle && innatePouvoirs.includes(selectedExterior) && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">🔒 Inné</span>
                )}
              </div>
              <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé par Anomalie</div>
              <div className="text-sm text-stone-600 leading-relaxed">
                {exteriorPowers.find(p => p.nom === selectedExterior)?.description}
              </div>
            </div>
          </div>
        )}

        {showAnomalie && !selectedExterior && (
          <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar bg-white/60 rounded-xl border border-fuchsia-200 p-2 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-inner animate-fade-in-up">
            {exteriorPowers.map((pow, idx) => (
              <div
                key={idx}
                onClick={() => handleAnomalieToggle(pow.nom)}
                className="p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-fuchsia-400 hover:shadow-md transition-all"
              >
                <div className="font-bold font-serif text-gray-800">{pow.nom}</div>
                <div className="text-[10px] uppercase font-bold text-fuchsia-600 mt-1 mb-1 bg-fuchsia-50 inline-block px-2 py-0.5 rounded">
                  Origine : {pow.origine}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {pow.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}