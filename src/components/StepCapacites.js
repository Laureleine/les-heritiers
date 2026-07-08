import React from 'react';
import { Check, Sparkles } from '../config/icons';
import { useCharacter } from '../context/CharacterContext';
import { useGameDataContext } from '../context/GameDataContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { isCharacterScelle } from '../utils/lockUtils';
import { computeExteriorPowers, deriveEspeceSeconde, hasHybrideActive } from '../utils/anomalieChaining';

// ============================================================================
// --- ÉTAPE 2 : CAPACITÉS ---
// ============================================================================

const CAPACITE_SLOTS = ['fixe1', 'fixe2', 'choix'];

export default function StepCapacites() {
  const { character, dispatchCharacter, isReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
  const fairyData = gameData?.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const isScelle = isCharacterScelle(character);
  const isHybride = hasHybrideActive(character);

  const exteriorPowers = fairyData && character.typeFee
    ? computeExteriorPowers(fairyData, character.typeFee)
    : [];
  const especeSeconde = isHybride ? deriveEspeceSeconde(character, exteriorPowers) : null;
  const secondSpeciesData = especeSeconde ? fairyData[especeSeconde] : null;

  const hybrideCapacite = character.data?.hybride_capacite || null;

  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les capacités pour {character.typeFee} n'ont pas encore été définies.
        </p>
      </div>
    );
  }

  if (data.isEnfoui && (character.caracteristiques?.feerie || 3) < 3) {
    return (
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
          <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
          <div>
            <h2 className="font-serif font-bold text-amber-900">Capacités Naturelles</h2>
            <p className="text-sm text-amber-800">
              Le Faux-Semblant enfoui n'a pas de capacités naturelles pour le moment. Elles se révèleront lorsque la Féérie atteindra 3.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleCapaciteChoice = (c) => {
    if (isReadOnly) return;
    if (isScelle) {
      showInAppNotification("Votre Capacité a été scellée à la création. Impossible d'en changer !", "warning");
      return;
    }
    const foundCap = data.capacites?.choix?.find(cap => cap.nom === c);
    if (foundCap && foundCap.is_official === false) {
      if (!window.confirm(`⚠️ "${c}" est une capacité non-officielle, créée par la Communauté.\n\nSouhaitez-vous vraiment l'utiliser ?`)) return;
    }
    dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: c, gameData });
  };

  const handleHybrideSlotChoice = (slot) => {
    if (isReadOnly) return;
    const newHybrideCapacite = { slot, capacite: hybrideCapacite?.capacite || null };
    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { data: { ...(character.data || {}), hybride_capacite: newHybrideCapacite } },
      gameData,
    });
  };

  const handleHybrideCapaciteChoice = (capaciteNom) => {
    if (isReadOnly || !hybrideCapacite?.slot) return;
    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { data: { ...(character.data || {}), hybride_capacite: { ...hybrideCapacite, capacite: capaciteNom } } },
      gameData,
    });
    showInAppNotification(`Capacité naturelle échangée contre "${capaciteNom}" (${especeSeconde}) !`, "success");
  };

  const ownSlotLabel = {
    fixe1: data.capacites?.fixe1?.nom,
    fixe2: data.capacites?.fixe2?.nom,
    choix: character.capaciteChoisie,
  };

  const secondSpeciesChoices = secondSpeciesData
    ? [secondSpeciesData.capacites?.fixe1, secondSpeciesData.capacites?.fixe2, ...(secondSpeciesData.capacites?.choix || [])]
        .filter(c => c && c.nom && c.nom !== 'Inconnu')
    : [];

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h2 className="font-serif font-bold text-amber-900">Capacités Naturelles</h2>
          <p className="text-sm text-amber-800">
            Voici les capacités inhérentes à votre nature. Vous devez choisir une 3ème capacité spécifique.
            {isScelle && " (Choix scellé)"}
          </p>
        </div>
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacités Innées (Acquises)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { slot: 'fixe1', cap: data.capacites?.fixe1 },
          { slot: 'fixe2', cap: data.capacites?.fixe2 },
        ].filter(({ cap }) => cap && cap.nom && cap.nom !== 'Inconnu').map(({ slot, cap }) => {
          const isSwapped = hybrideCapacite?.slot === slot && hybrideCapacite?.capacite;
          const displayCap = isSwapped
            ? secondSpeciesChoices.find(c => c.nom === hybrideCapacite.capacite) || cap
            : cap;
          return (
            <div key={`fixe-${slot}`} className="p-4 rounded-xl border-2 border-amber-200 bg-amber-100/50">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold font-serif text-amber-900 flex items-center gap-2">
                  <Check size={16} className="text-amber-600" />
                  {displayCap.nom}
                </div>
                {isSwapped ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase" title="Échange Hybride">
                    <span aria-hidden="true">🧬</span> Hybride — {especeSeconde}
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/50 text-amber-800 uppercase">
                    Fixe
                  </span>
                )}
              </div>
              <p className="text-sm text-amber-800 text-left mt-2 leading-relaxed">
                {displayCap.description || "Aucune description."}
              </p>
            </div>
          );
        })}
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacité Optionnelle (À choisir)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.capacites?.choix?.map((cap, idx) => {
          const isSelected = character.capaciteChoisie === cap.nom;
          const isDisabled = (isReadOnly || isScelle) && !isSelected;
          const isSwapped = hybrideCapacite?.slot === 'choix' && hybrideCapacite?.capacite && isSelected;
          const displayCap = isSwapped
            ? secondSpeciesChoices.find(c => c.nom === hybrideCapacite.capacite) || cap
            : cap;

          return (
            <div key={idx} className="flex flex-col gap-2">
              <button
                disabled={isReadOnly || isScelle}
                onClick={() => handleCapaciteChoice(cap.nom)}
                className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-200 ring-offset-2'
                    : isDisabled
                    ? 'border-stone-200 bg-stone-50 opacity-50 cursor-not-allowed'
                    : 'border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className={`font-bold font-serif flex items-center gap-2 ${isSelected ? 'text-amber-900' : 'text-gray-800'}`}>
                    {isSelected && <Check size={16} className="text-amber-600" />}
                    {displayCap.nom}
                  </div>
                  {isSwapped ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase" title="Échange Hybride">
                      <span aria-hidden="true">🧬</span> Hybride — {especeSeconde}
                    </span>
                  ) : isSelected && isScelle && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">
                      <span aria-hidden="true">🔒</span> Inné
                    </span>
                  )}
                </div>
                <p className={`text-sm text-left mt-2 leading-relaxed ${isSelected ? 'text-amber-800' : 'text-gray-600'}`}>
                  {displayCap.description || "Aucune description."}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {isHybride && (
        <div className="mt-8 border-t-2 border-dashed border-fuchsia-200 pt-6">
          <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
            <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
              <Sparkles size={20} className="text-fuchsia-600" />
              Échange Hybride — Capacité naturelle
            </h4>
            <p className="text-sm text-fuchsia-800 mt-1">
              Choisissez la Capacité naturelle de votre espèce d'origine à remplacer, puis celle de{' '}
              <strong>{especeSeconde || 'votre seconde espèce'}</strong> qui la remplace.
            </p>

            <div className="mt-4">
              <div className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">1. Capacité à remplacer</div>
              <div className="flex flex-wrap gap-2">
                {CAPACITE_SLOTS.filter(slot => ownSlotLabel[slot]).map(slot => (
                  <button
                    key={slot}
                    disabled={isReadOnly}
                    onClick={() => handleHybrideSlotChoice(slot)}
                    className={`px-3 py-2 rounded-lg border-2 text-sm font-bold transition-colors ${
                      hybrideCapacite?.slot === slot
                        ? 'border-fuchsia-600 bg-fuchsia-100 text-fuchsia-900'
                        : 'border-stone-200 bg-white text-gray-700 hover:border-fuchsia-300'
                    }`}
                  >
                    {ownSlotLabel[slot]}
                  </button>
                ))}
              </div>
            </div>

            {hybrideCapacite?.slot && (
              <div className="mt-4">
                <div className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">
                  2. Capacité de remplacement ({especeSeconde || '…'})
                </div>
                <div className="flex flex-wrap gap-2">
                  {secondSpeciesChoices.map((cap, idx) => (
                    <button
                      key={idx}
                      disabled={isReadOnly}
                      onClick={() => handleHybrideCapaciteChoice(cap.nom)}
                      className={`px-3 py-2 rounded-lg border-2 text-sm font-bold transition-colors ${
                        hybrideCapacite?.capacite === cap.nom
                          ? 'border-fuchsia-600 bg-fuchsia-100 text-fuchsia-900'
                          : 'border-stone-200 bg-white text-gray-700 hover:border-fuchsia-300'
                      }`}
                    >
                      {cap.nom}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
