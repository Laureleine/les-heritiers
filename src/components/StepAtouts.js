import React from 'react';
import { Check, Sparkles } from '../config/icons';
import { useCharacter } from '../context/CharacterContext';
import { useGameDataContext } from '../context/GameDataContext';
import { useUserContext } from '../context/UserContext';
import { usePersonalCards } from '../hooks/usePersonalCards';
import { showInAppNotification } from '../utils/SystemeServices';
import { FIXED_XP_COSTS } from '../utils/xpCalculator';
import { isCharacterScelle } from '../utils/lockUtils';
import { getXpState, XP_CODES } from '../utils/xpActions';
import { xpTransaction } from '../utils/xpTransaction';

// 🛡️ Constante requise pour les Atouts
const MAX_ATOUTS_GLOBAL = 2;

// Atouts gérés exclusivement depuis le widget de l'Étape 3 (Pouvoirs) —
// jamais togglables directement dans cette grille.
const CHAINED_ATOUTS = ['Anomalie féérique', 'Sang-mêlé', 'Hybride'];

// ============================================================================
// --- ÉTAPE 4 : ATOUTS --- (Garder ton code actuel pour StepAtouts ci-dessous !)
// ============================================================================

export default function StepAtouts() {
  const { character, dispatchCharacter, isReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
  const { userProfile } = useUserContext();
  const { data: personalCards } = usePersonalCards(userProfile?.id, character.id);
  const personalAssets = personalCards?.assets || [];

  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const countSelected = character.atouts?.length || 0;
  
  // Variables XP
  const isScelle = isCharacterScelle(character);
  const { xpDispo } = getXpState(character);

  const handleAtoutToggle = (atout) => {
    if (isReadOnly) return; // 🔒 FIX
    const isSelected = character.atouts?.some(a => a === atout.nom || a === atout.id);
    if (atout.is_official === false && !isSelected) {
      if (!window.confirm(`⚠️ "${atout.nom}" est un atout non-officiel, créé par la Communauté.\n\nSouhaitez-vous vraiment l'utiliser ?`)) return;
    }
    const valueToToggle = atout.nom;

    // 🌟 COMPORTEMENT EN MODE ÉVOLUTION (XP)
    if (isScelle) {
      // 🛡️ LE PLANCHER DE VERRE (Lecture depuis le 'data' de Supabase)
      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isInnate = innateAtouts.includes(atout.nom) || innateAtouts.includes(atout.id);

      if (isSelected) {
        if (isInnate) {
          showInAppNotification("Cet Atout fait partie du Sceau originel de votre Héritier. Impossible de l'oublier !", "warning");
          return;
        }
        
        // ✨ REVENTE DIRECTE ET INSTANTANÉE
        const newAtouts = character.atouts.filter(a => a !== valueToToggle);
        xpTransaction(dispatchCharacter, {
            updates: { atouts: newAtouts },
            transaction: {
                type: 'REMBOURSEMENT',
                code: XP_CODES.ATOUT_ACQUISITION,
                label: `Acquisition : Atout ${atout.nom}`,
                valeur: FIXED_XP_COSTS.nouvel_atout
            },
            notification: { text: `Atout désappris : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, type: 'success' }
        }, gameData);
        return;
      } else {
        // ✨ ACHAT DIRECT ET INSTANTANÉ
        if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
          showInAppNotification(`Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP pour débloquer cet Atout !`, "error");
          return;
        }
        const newAtouts = [...(character.atouts || []), atout.nom];
        xpTransaction(dispatchCharacter, {
            updates: { atouts: newAtouts },
            transaction: {
                type: 'DEPENSE',
                code: XP_CODES.ATOUT_ACQUISITION,
                label: `Acquisition : Atout ${atout.nom}`,
                valeur: FIXED_XP_COSTS.nouvel_atout
            },
            notification: { text: `L'Atout "${atout.nom}" a été acquis pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, type: 'success' }
        }, gameData);
        return;
      }
    }

    // 🌟 COMPORTEMENT NORMAL (CRÉATION)
    if (!isReadOnly) {
      dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atouts', value: valueToToggle, max: MAX_ATOUTS_GLOBAL, gameData });
    }
  };

  const currentFeerie = character.caracteristiques?.feerie || 3;
  if (data?.isEnfoui && currentFeerie < 3) {
    return (
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
          <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
          <div>
            <h2 className="font-serif font-bold text-amber-900">Atouts Féériques</h2>
            <p className="text-sm text-amber-800">
              Le Faux-Semblant enfoui n'a pas d'atouts pour le moment. Ils se révèleront lorsque la Féérie atteindra 3.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!data || !data.atouts) return null;

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h2 className="font-serif font-bold text-amber-900">Atouts Féériques</h2>
          {isScelle ? (
            <p className="text-sm text-amber-800">
              Dépensez votre Expérience ({FIXED_XP_COSTS.nouvel_atout} XP) pour acquérir de nouveaux Atouts. Vous pouvez librement cliquer sur un Atout acquis pour le désapprendre et récupérer vos points.
            </p>
          ) : (
            <p className="text-sm text-amber-800">
              Votre nature vous octroie des avantages particuliers. Choisissez {MAX_ATOUTS_GLOBAL} atouts parmi la liste ci-dessous.
            </p>
          )}
          {!isScelle && (
            <div className="mt-3 inline-block px-3 py-1 bg-white rounded-full border border-amber-200 text-sm font-bold text-amber-700">
              Sélectionnés : {countSelected} / {MAX_ATOUTS_GLOBAL}
            </div>
          )}
        </div>
      </div>

      {/* ✦ DONS DU DOCTE */}
      {personalAssets.length > 0 && (
        <div className="mt-4 pt-4 border-t border-violet-100">
          <h3 className="text-sm font-bold text-violet-700 mb-3 flex items-center gap-2">
            <span>✦</span> Dons du Docte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalAssets.map((atout) => {
              const isSelected = character.atoutsPerso?.includes(atout.nom);
              const handlePersonalAtoutToggle = () => {
                if (isReadOnly) return;
                if (isScelle) {
                  const fortuneBonus = atout.effets_techniques?.fortune_bonus || 0;
                  if (isSelected) {
                    const newAtoutsPerso = (character.atoutsPerso || []).filter(a => a !== atout.nom);
                    const updates = { atoutsPerso: newAtoutsPerso };
                    if (fortuneBonus) updates.fortune = Math.max(0, (character.fortune || 0) - fortuneBonus);
                    xpTransaction(dispatchCharacter, {
                      updates,
                      transaction: { type: 'REMBOURSEMENT', code: XP_CODES.ATOUT_ACQUISITION, label: `Acquisition : Don du Docte ${atout.nom}`, valeur: FIXED_XP_COSTS.nouvel_atout },
                      notification: { text: `Don désappris : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, type: 'success' }
                    }, gameData);
                  } else {
                    if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
                      showInAppNotification(`Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP pour acquérir ce Don !`, 'error');
                      return;
                    }
                    const newAtoutsPerso = [...(character.atoutsPerso || []), atout.nom];
                    const updates = { atoutsPerso: newAtoutsPerso };
                    if (fortuneBonus) updates.fortune = Math.min(15, (character.fortune || 0) + fortuneBonus);
                    xpTransaction(dispatchCharacter, {
                      updates,
                      transaction: { type: 'DEPENSE', code: XP_CODES.ATOUT_ACQUISITION, label: `Acquisition : Don du Docte ${atout.nom}`, valeur: FIXED_XP_COSTS.nouvel_atout },
                      notification: { text: `Don acquis : "${atout.nom}" pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, type: 'success' }
                    }, gameData);
                  }
                } else {
                  dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atoutsPerso', value: atout.nom, max: Infinity, gameData });
                }
              };
              return (
                <div
                  key={atout.id}
                  onClick={handlePersonalAtoutToggle}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-violet-600 bg-violet-50 shadow-md ring-2 ring-violet-400'
                      : 'border-violet-200 bg-white hover:border-violet-400 hover:shadow-sm'
                  }`}
                >
                  {isScelle && !isSelected && (
                    <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[10px] uppercase font-bold px-2 py-1 rounded border border-amber-300 shadow-sm">
                      {FIXED_XP_COSTS.nouvel_atout} XP
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold font-serif flex items-center gap-2 text-violet-900">
                      {isSelected && <Check size={16} className="text-violet-600" />}
                      {atout.nom}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 font-bold border border-violet-200">✦ Don du Docte</span>
                  </div>
                  {atout.description && (
                    <div className="text-sm text-stone-600 leading-relaxed">{atout.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LA GRILLE DES ATOUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.atouts.map((atout, idx) => {
          const isSelected = character.atouts?.includes(atout.nom) || character.atouts?.includes(atout.id);
          const isDisabled = isReadOnly || (!isScelle && !isSelected && countSelected >= MAX_ATOUTS_GLOBAL);
          const isAnomalie = CHAINED_ATOUTS.includes(atout.nom);
          
          // 🛡️ Détection visuelle du Plancher de Verre
          const innateAtouts = character.data?.stats_scellees?.atouts || [];
          const isInnate = isScelle && (innateAtouts.includes(atout.nom) || innateAtouts.includes(atout.id));

          return (
            <div
              key={idx}
              onClick={() => {
                if (isAnomalie) {
                  showInAppNotification("🪄 Le pouvoir lié à l'Anomalie doit être modifié ou retiré depuis l'Étape 3 (Pouvoirs).", "warning");
                  return;
                }
                if (!isDisabled) handleAtoutToggle(atout);
              }}
              className={`relative p-4 rounded-xl border-2 text-left transition-all overflow-hidden ${
                isSelected
                  ? (isAnomalie ? 'border-fuchsia-600 bg-fuchsia-50 shadow-md ring-2 ring-fuchsia-400 cursor-pointer' : 'border-indigo-600 bg-indigo-50 shadow-md ring-2 ring-indigo-400 cursor-pointer')
                  : isDisabled
                  ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm cursor-pointer'
              } ${isAnomalie && !isSelected ? 'opacity-80 cursor-not-allowed hover:border-gray-200' : ''}`}
            >
              {/* Le prix en XP */}
              {isScelle && !isSelected && !isAnomalie && (
                <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[10px] uppercase font-bold px-2 py-1 rounded border border-amber-300 shadow-sm">
                  {FIXED_XP_COSTS.nouvel_atout} XP
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <div className={`font-bold font-serif flex items-center gap-2 ${isAnomalie ? 'text-fuchsia-900' : 'text-gray-800'}`}>
                  {isSelected && <Check size={16} className={isAnomalie ? "text-fuchsia-600" : "text-indigo-600"} />}
                  {atout.nom}
                </div>
                {isAnomalie && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase flex items-center gap-1">
                    <span aria-hidden="true">🔒</span> Géré à l'Étape 3
                  </span>
                )}
                {isInnate && !isAnomalie && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création (Plancher de Verre)">
                    <span aria-hidden="true">🔒</span> Inné
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed mt-2">
                {atout.description || "Aucune description."}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
