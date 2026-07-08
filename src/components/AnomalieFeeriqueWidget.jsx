// src/components/AnomalieFeeriqueWidget.jsx

import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Check } from '../config/icons';
import { useCharacter } from '../context/CharacterContext';
import { useGameDataContext } from '../context/GameDataContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { FIXED_XP_COSTS } from '../utils/xpCalculator';
import { isCharacterScelle } from '../utils/lockUtils';
import { getXpState, XP_CODES } from '../utils/xpActions';
import {
  computeExteriorPowers,
  deriveEspeceSeconde,
  hasAnomalieActive,
  hasSangMeleActive,
  canPurchaseSangMele,
  canPurchaseHybride,
  canPurgeAnomalie,
  canPurgeSangMele,
} from '../utils/anomalieChaining';

const MAX_ATOUTS_GLOBAL = 2;

const TIER_CONFIG = {
  sangMele: { atout: 'Sang-mêlé', code: XP_CODES.ANOMALIE_SANG_MELE, label: 'Sang-mêlé' },
  hybride: { atout: 'Hybride', code: XP_CODES.ANOMALIE_HYBRIDE, label: 'Hybride' },
};

export default function AnomalieFeeriqueWidget() {
  const { character, dispatchCharacter, isReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
  const [showCatalog, setShowCatalog] = useState(null); // null | 'anomalie' | 'sangMele' | 'hybride'
  const [draftEspece, setDraftEspece] = useState(null); // espèce choisie pendant la sélection du palier 1

  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const isScelle = isCharacterScelle(character);
  const innatePouvoirs = character.data?.stats_scellees?.pouvoirs || [];

  const currentFeerie = character.caracteristiques?.feerie || 3;
  const maxPouvoirs = currentFeerie;
  const countAtouts = character.atouts?.length || 0;

  const { xpDispo } = getXpState(character);

  const anomalieAtout = data?.atouts?.find(a => a.nom === 'Anomalie féérique');
  const anomalieId = anomalieAtout ? anomalieAtout.id : 'Anomalie féérique';
  const hasAnomalie = hasAnomalieActive(character);
  const hasSangMele = hasSangMeleActive(character);

  const exteriorPowers = useMemo(
    () => computeExteriorPowers(fairyData, character.typeFee),
    [fairyData, character.typeFee]
  );

  const chosenExteriorPowers = useMemo(
    () => (character.pouvoirs || []).filter(p => exteriorPowers.some(ep => ep.nom === p)),
    [character.pouvoirs, exteriorPowers]
  );

  const tier1Pouvoir = chosenExteriorPowers[0] || null;
  const tier2Pouvoir = chosenExteriorPowers[1] || null;
  const tier3Pouvoir = chosenExteriorPowers[2] || null;

  const especeSeconde = useMemo(
    () => deriveEspeceSeconde(character, exteriorPowers),
    [character, exteriorPowers]
  );

  // 🩹 AUTO-GUÉRISON : les personnages ayant déjà l'Anomalie féérique avant
  // l'introduction du champ `anomalie_espece_seconde` le reçoivent au premier rendu.
  useEffect(() => {
    if (tier1Pouvoir && especeSeconde && !character.data?.anomalie_espece_seconde) {
      dispatchCharacter({
        type: 'UPDATE_MULTIPLE',
        payload: { data: { ...(character.data || {}), anomalie_espece_seconde: especeSeconde } },
        gameData,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier1Pouvoir, especeSeconde]);

  const especesDisponibles = useMemo(
    () => [...new Set(exteriorPowers.map(p => p.origine))].sort(),
    [exteriorPowers]
  );

  const speciesPowerChoices = useMemo(
    () => exteriorPowers.filter(p => p.origine === (especeSeconde || draftEspece)),
    [exteriorPowers, especeSeconde, draftEspece]
  );

  // ⚡ PALIER 1 : ANOMALIE FÉÉRIQUE
  const handleAnomalieToggle = (pouvoirNom) => {
    if (isReadOnly) return;

    const isSelected = tier1Pouvoir === pouvoirNom;

    if (isScelle && isSelected && innatePouvoirs.includes(pouvoirNom)) {
      showInAppNotification("Cette Anomalie fait partie de votre Sceau originel. Impossible de la purger !", "warning");
      return;
    }

    if (isSelected && !canPurgeAnomalie(character)) {
      showInAppNotification("Retirez d'abord Sang-mêlé avant de purger l'Anomalie féérique.", "error");
      return;
    }

    let newPouvoirs = character.pouvoirs ? [...character.pouvoirs] : [];
    let newAtouts = character.atouts ? [...character.atouts] : [];
    let newData = { ...(character.data || {}) };
    let xpTransactionPayload = null;

    if (isSelected) {
      newPouvoirs = newPouvoirs.filter(p => p !== pouvoirNom);
      newAtouts = newAtouts.filter(a => a !== anomalieId && a !== 'Anomalie féérique');
      delete newData.anomalie_espece_seconde;

      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isAtoutInnate = innateAtouts.includes(anomalieId) || innateAtouts.includes('Anomalie féérique');

      if (isScelle && !isAtoutInnate) {
        xpTransactionPayload = { type: 'REMBOURSEMENT', code: XP_CODES.ANOMALIE_FEERIQUE, label: 'Acquisition : Atout Anomalie féérique', valeur: FIXED_XP_COSTS.nouvel_atout };
        showInAppNotification(`Anomalie purgée : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, "success");
      }
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
          xpTransactionPayload = { type: 'DEPENSE', code: XP_CODES.ANOMALIE_FEERIQUE, label: 'Acquisition : Atout Anomalie féérique', valeur: FIXED_XP_COSTS.nouvel_atout };
          showInAppNotification(`Anomalie activée pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
        } else {
          if (countAtouts >= MAX_ATOUTS_GLOBAL) {
            showInAppNotification(`Vous avez déjà ${MAX_ATOUTS_GLOBAL} Atouts.`, "error");
            return;
          }
        }
      }
      newPouvoirs.push(pouvoirNom);
      if (!newAtouts.includes(anomalieId)) newAtouts.push(anomalieId);
      const chosenPower = exteriorPowers.find(p => p.nom === pouvoirNom);
      if (chosenPower) newData.anomalie_espece_seconde = chosenPower.origine;
      setShowCatalog(null);
      setDraftEspece(null);
    }

    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { pouvoirs: newPouvoirs, atouts: newAtouts, data: newData }, gameData });
    if (xpTransactionPayload) {
      dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: xpTransactionPayload, gameData });
    }
  };

  // ⚡ PALIERS 2 & 3 : SANG-MÊLÉ ET HYBRIDE
  const handleTierToggle = (tierKey, pouvoirNom) => {
    if (isReadOnly) return;
    const config = TIER_CONFIG[tierKey];
    const currentTierPouvoir = tierKey === 'sangMele' ? tier2Pouvoir : tier3Pouvoir;
    const isSelected = currentTierPouvoir === pouvoirNom;

    if (isSelected && isScelle && innatePouvoirs.includes(pouvoirNom)) {
      showInAppNotification("Ce pouvoir fait partie de votre Sceau originel. Impossible de le purger !", "warning");
      return;
    }

    if (isSelected) {
      if (tierKey === 'sangMele' && !canPurgeSangMele(character)) {
        showInAppNotification("Retirez d'abord Hybride avant de purger Sang-mêlé.", "error");
        return;
      }

      const newPouvoirs = (character.pouvoirs || []).filter(p => p !== pouvoirNom);
      const newAtouts = (character.atouts || []).filter(a => a !== config.atout);
      const newData = { ...(character.data || {}) };
      if (tierKey === 'hybride') delete newData.hybride_capacite;

      dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { pouvoirs: newPouvoirs, atouts: newAtouts, data: newData }, gameData });
      dispatchCharacter({
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'REMBOURSEMENT', code: config.code, label: `Acquisition : Atout ${config.label}`, valeur: FIXED_XP_COSTS.nouvel_atout },
        gameData,
      });
      showInAppNotification(`${config.label} purgé : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !${tierKey === 'hybride' ? " L'échange de Capacité naturelle a été annulé." : ''}`, "success");
      return;
    }

    const canPurchase = tierKey === 'sangMele' ? canPurchaseSangMele(character) : canPurchaseHybride(character);
    if (!canPurchase) return;

    if ((character.pouvoirs?.length || 0) >= maxPouvoirs) {
      showInAppNotification("Vous avez atteint votre limite de pouvoirs maîtrisés.", "error");
      return;
    }
    if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
      showInAppNotification(`Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP pour débloquer ${config.label} !`, "error");
      return;
    }

    const newPouvoirs = [...(character.pouvoirs || []), pouvoirNom];
    const newAtouts = [...(character.atouts || []), config.atout];

    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { pouvoirs: newPouvoirs, atouts: newAtouts }, gameData });
    dispatchCharacter({
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'DEPENSE', code: config.code, label: `Acquisition : Atout ${config.label}`, valeur: FIXED_XP_COSTS.nouvel_atout },
      gameData,
    });
    showInAppNotification(`${config.label} activé pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
    setShowCatalog(null);
  };

  const renderTierPanel = (tierKey, title, description, chosenPouvoir, canOpen) => {
    const config = TIER_CONFIG[tierKey];
    const catalogKey = tierKey;
    const alreadyChosenNoms = chosenExteriorPowers.filter(p => p !== chosenPouvoir);
    const choices = speciesPowerChoices.filter(p => !alreadyChosenNoms.includes(p.nom));

    return (
      <div className="mt-6 border-t-2 border-dashed border-fuchsia-200 pt-6">
        <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
                <Sparkles size={20} className="text-fuchsia-600" />
                {title}
              </h4>
              <p className="text-sm text-fuchsia-800 mt-1">{description}</p>
            </div>

            {chosenPouvoir ? (
              <button
                onClick={() => handleTierToggle(tierKey, chosenPouvoir)}
                className="px-4 py-2 rounded-lg font-bold text-sm transition-colors border shrink-0 bg-red-100 text-red-700 hover:bg-red-200 border-red-200"
              >
                Purger {config.label}
              </button>
            ) : canOpen ? (
              <button
                onClick={() => setShowCatalog(showCatalog === catalogKey ? null : catalogKey)}
                disabled={xpDispo < FIXED_XP_COSTS.nouvel_atout}
                className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
              >
                {showCatalog === catalogKey ? 'Refermer le catalogue' : `Débloquer ${config.label} (${FIXED_XP_COSTS.nouvel_atout} XP)`}
              </button>
            ) : null}
          </div>

          {chosenPouvoir && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3">
              <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20} /></div>
              <div>
                <div className="font-bold text-fuchsia-900 text-lg">{chosenPouvoir}</div>
                <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé — {config.label}</div>
                <div className="text-sm text-stone-600 leading-relaxed">
                  {exteriorPowers.find(p => p.nom === chosenPouvoir)?.description}
                </div>
              </div>
            </div>
          )}

          {showCatalog === catalogKey && !chosenPouvoir && (
            <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar bg-white/60 rounded-xl border border-fuchsia-200 p-2 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-inner">
              {choices.map((pow, idx) => (
                <div
                  key={idx}
                  onClick={() => handleTierToggle(tierKey, pow.nom)}
                  className="p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-fuchsia-400 hover:shadow-md transition-all"
                >
                  <div className="font-bold font-serif text-gray-800">{pow.nom}</div>
                  <div className="text-xs text-gray-600 leading-relaxed line-clamp-3 mt-1">{pow.description}</div>
                </div>
              ))}
            </div>
          )}

          {tierKey === 'hybride' && chosenPouvoir && (
            <div className="mt-4 text-xs text-fuchsia-800 font-bold bg-fuchsia-50 p-2 rounded border border-fuchsia-200">
              🧬 Cela a débloqué l'échange définitif d'une Capacité naturelle de votre espèce d'origine contre une de {especeSeconde} — rendez-vous à l'Étape 2 (Capacités).
            </div>
          )}
        </div>
      </div>
    );
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
              Permet d'assimiler un pouvoir appartenant à une autre espèce. <br />
              <span className="font-bold text-fuchsia-900">(Coûte 1 emplacement d'Atout)</span>
            </p>
          </div>

          {(() => {
            const isAnomalieInnate = isScelle && innatePouvoirs.includes(tier1Pouvoir);
            if (tier1Pouvoir) {
              return (
                <button
                  onClick={() => handleAnomalieToggle(tier1Pouvoir)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors border shrink-0 ${isAnomalieInnate ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed' : 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200'}`}
                >
                  {isAnomalieInnate ? '🔒 Purge Impossible' : "Purger l'Anomalie"}
                </button>
              );
            } else {
              return (
                <button
                  onClick={() => {
                    const next = showCatalog === 'anomalie' ? null : 'anomalie';
                    setShowCatalog(next);
                    if (next === null) setDraftEspece(null);
                  }}
                  disabled={(character.pouvoirs?.length || 0) >= maxPouvoirs || (!isScelle && !hasAnomalie && countAtouts >= MAX_ATOUTS_GLOBAL)}
                  className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
                >
                  {showCatalog === 'anomalie' ? 'Refermer le catalogue' : "Déclencher l'Anomalie"}
                </button>
              );
            }
          })()}
        </div>

        {!tier1Pouvoir && !hasAnomalie && !isScelle && countAtouts >= MAX_ATOUTS_GLOBAL && (
          <div className="text-xs text-red-600 font-bold mt-3 bg-red-50 p-2 rounded border border-red-100">
            Vous avez déjà sélectionné tous vos Atouts ({MAX_ATOUTS_GLOBAL}/{MAX_ATOUTS_GLOBAL}) à l'étape suivante. Libérez de la place pour pouvoir déclencher cette anomalie !
          </div>
        )}

        {!tier1Pouvoir && !hasAnomalie && isScelle && (
          <div className="text-xs text-fuchsia-800 font-bold mt-3 bg-fuchsia-50 p-2 rounded border border-fuchsia-200">
            🪄 L'activation de l'Anomalie consommera un nouvel emplacement d'Atout et coûtera {FIXED_XP_COSTS.nouvel_atout} XP.
          </div>
        )}

        {tier1Pouvoir && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3">
            <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20} /></div>
            <div>
              <div className="font-bold text-fuchsia-900 text-lg flex items-center gap-2">
                {tier1Pouvoir}
                {isScelle && innatePouvoirs.includes(tier1Pouvoir) && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">🔒 Inné</span>
                )}
              </div>
              <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé par Anomalie — {especeSeconde}</div>
              <div className="text-sm text-stone-600 leading-relaxed">
                {exteriorPowers.find(p => p.nom === tier1Pouvoir)?.description}
              </div>
            </div>
          </div>
        )}

        {showCatalog === 'anomalie' && !tier1Pouvoir && !draftEspece && (
          <div className="mt-4 bg-white/60 rounded-xl border border-fuchsia-200 p-3 shadow-inner">
            <div className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">
              Choisissez d'abord l'espèce féérique étrangère (ce choix sera verrouillé pour les pouvoirs suivants) :
            </div>
            <div className="flex flex-wrap gap-2">
              {especesDisponibles.map(espece => (
                <button
                  key={espece}
                  onClick={() => setDraftEspece(espece)}
                  className="px-3 py-2 rounded-lg border-2 border-stone-200 bg-white text-sm font-bold text-gray-700 hover:border-fuchsia-300 transition-colors"
                >
                  {espece}
                </button>
              ))}
            </div>
          </div>
        )}

        {showCatalog === 'anomalie' && !tier1Pouvoir && draftEspece && (
          <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar bg-white/60 rounded-xl border border-fuchsia-200 p-2 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-inner">
            {speciesPowerChoices.map((pow, idx) => (
              <div
                key={idx}
                onClick={() => handleAnomalieToggle(pow.nom)}
                className="p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-fuchsia-400 hover:shadow-md transition-all"
              >
                <div className="font-bold font-serif text-gray-800">{pow.nom}</div>
                <div className="text-[10px] uppercase font-bold text-fuchsia-600 mt-1 mb-1 bg-fuchsia-50 inline-block px-2 py-0.5 rounded">
                  Origine : {pow.origine}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed line-clamp-3">{pow.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sang-mêlé/Hybride sont réservés au mode évolution (isScelle) — jamais
          affichés à la création, même si l'Anomalie féérique de base l'est. */}
      {isScelle && hasAnomalie && tier1Pouvoir && renderTierPanel(
        'sangMele',
        'Sang-mêlé',
        `Un second pouvoir de ${especeSeconde}, à la place d'un pouvoir standard.`,
        tier2Pouvoir,
        canPurchaseSangMele(character)
      )}

      {isScelle && hasSangMele && tier2Pouvoir && renderTierPanel(
        'hybride',
        'Hybride',
        `Un troisième pouvoir de ${especeSeconde}, à la place d'un pouvoir standard.`,
        tier3Pouvoir,
        canPurchaseHybride(character)
      )}
    </div>
  );
}
