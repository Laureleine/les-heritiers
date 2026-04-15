import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';

// ============================================================================
// --- ÉTAPE 2 : CAPACITÉS ---
// ============================================================================

export default function StepCapacites() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const fairyData = gameData.fairyData;
  const data = fairyData[character.typeFee];

  // 🛡️ LE PLANCHER DE VERRE
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';

  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les capacités pour {character.typeFee} n'ont pas encore été définies.
        </p>
      </div>
    );
  }

  const handleCapaciteChoice = (c) => {
    if (isReadOnly) return;
    if (isScelle) {
      showInAppNotification("Votre Capacité a été scellée à la création. Impossible d'en changer !", "warning");
      return;
    }
    dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: c, gameData });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Capacités Naturelles</h3>
          <p className="text-sm text-amber-800">
            Voici les capacités inhérentes à votre nature. Vous devez choisir une 3ème capacité spécifique.
            {isScelle && " (Choix scellé)"}
          </p>
        </div>
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacités Innées (Acquises)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[data.capacites?.fixe1, data.capacites?.fixe2].filter(c => c && c.nom && c.nom !== 'Inconnu').map((cap, idx) => (
          <div key={`fixe-${idx}`} className="p-4 rounded-xl border-2 border-amber-200 bg-amber-100/50">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold font-serif text-amber-900 flex items-center gap-2">
                <Check size={16} className="text-amber-600" />
                {cap.nom}
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/50 text-amber-800 uppercase">
                Fixe
              </span>
            </div>
            <p className="text-sm text-amber-800 text-left mt-2 leading-relaxed">
              {cap.description || "Aucune description."}
            </p>
          </div>
        ))}
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacité Optionnelle (À choisir)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.capacites?.choix?.map((cap, idx) => {
          const isSelected = character.capaciteChoisie === cap.nom;
          // Si le personnage est scellé, les options non choisies sont grisées
          const isDisabled = (isReadOnly || isScelle) && !isSelected;

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
                    {cap.nom}
                  </div>
                  {isSelected && isScelle && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">
                      🔒 Inné
                    </span>
                  )}
                </div>
                <p className={`text-sm text-left mt-2 leading-relaxed ${isSelected ? 'text-amber-800' : 'text-gray-600'}`}>
                  {cap.description || "Aucune description."}
                </p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}