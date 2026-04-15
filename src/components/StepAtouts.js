import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { FIXED_XP_COSTS } from '../utils/xpCalculator';

// 🛡️ Constante requise pour les Atouts
const MAX_ATOUTS_GLOBAL = 2;

// ============================================================================
// --- ÉTAPE 4 : ATOUTS --- (Garder ton code actuel pour StepAtouts ci-dessous !)
// ============================================================================

export default function StepAtouts() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const countSelected = character.atouts?.length || 0;
  
  // Variables XP
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const xpTotal = character.xp_total || 0;
  const xpDepense = character.xp_depense || 0;
  const xpDispo = xpTotal - xpDepense;

  const handleAtoutToggle = (atout) => {
    if (isReadOnly) return; // 🔒 FIX
    const isSelectedByName = character.atouts?.includes(atout.nom);
    const isSelectedById = character.atouts?.includes(atout.id);
    const isCurrentlySelected = isSelectedByName || isSelectedById;
    
    const valueToToggle = isSelectedById ? atout.id : atout.nom;

    // 🌟 COMPORTEMENT EN MODE ÉVOLUTION (XP)
    if (isScelle) {
      // 🛡️ LE PLANCHER DE VERRE (Lecture depuis le 'data' de Supabase)
      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isInnate = innateAtouts.includes(atout.nom) || innateAtouts.includes(atout.id);

      if (isCurrentlySelected) {
        if (isInnate) {
          showInAppNotification("Cet Atout fait partie du Sceau originel de votre Héritier. Impossible de l'oublier !", "warning");
          return;
        }
        
        // ✨ REVENTE DIRECTE ET INSTANTANÉE
        const newAtouts = character.atouts.filter(a => a !== valueToToggle);
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: {
            atouts: newAtouts,
            xp_depense: Math.max(0, xpDepense - FIXED_XP_COSTS.nouvel_atout)
          },
          gameData
        });
        showInAppNotification(`Atout désappris : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, "success");
        return;
      } else {
        // ✨ ACHAT DIRECT ET INSTANTANÉ
        if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
          showInAppNotification(`Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP pour débloquer cet Atout !`, "error");
          return;
        }
        const newAtouts = [...(character.atouts || []), atout.nom];
        dispatchCharacter({
          type: 'UPDATE_MULTIPLE',
          payload: {
            atouts: newAtouts,
            xp_depense: xpDepense + FIXED_XP_COSTS.nouvel_atout
          },
          gameData
        });
        showInAppNotification(`L'Atout "${atout.nom}" a été acquis pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
        return;
      }
    }

    // 🌟 COMPORTEMENT NORMAL (CRÉATION)
    if (!isReadOnly) {
      dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atouts', value: valueToToggle, max: MAX_ATOUTS_GLOBAL, gameData });
    }
  };

  if (!data || !data.atouts) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Atouts Féériques</h3>
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

      {/* LA GRILLE DES ATOUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {data.atouts.map((atout, idx) => {
          const isSelected = character.atouts?.includes(atout.nom) || character.atouts?.includes(atout.id);
          const isDisabled = isReadOnly || (!isScelle && !isSelected && countSelected >= MAX_ATOUTS_GLOBAL);
          const isAnomalie = atout.nom === 'Anomalie féérique';
          
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
                    🔒 Géré à l'Étape 3
                  </span>
                )}
                {isInnate && !isAnomalie && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création (Plancher de Verre)">
                    🔒 Inné
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
