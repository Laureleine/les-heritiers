import React from 'react';
import { Star, Check, Info } from 'lucide-react';

export default function StepAtouts({ character, onAtoutToggle, fairyData }) {
  // Récupération des données de la fée
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;
  
  // Limite fixée par les règles [Source 24]
  const MAX_ATOUTS = 2;
  const countSelected = character.atouts ? character.atouts.length : 0;

  if (!data || !data.atouts || data.atouts.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-gray-500">Aucun atout disponible pour ce type de fée.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* En-tête */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Star className="text-amber-600 shrink-0 mt-1" size={24} />
        <div className="flex-1">
          <h3 className="font-serif font-bold text-amber-900">Atouts Féériques</h3>
          <p className="text-sm text-amber-800">
            Personnalisez votre Héritier en choisissant <strong>{MAX_ATOUTS} Atouts</strong> parmi la liste ci-dessous.
            Ces avantages reflètent votre histoire, votre rang social ou des particularités de votre nature.
          </p>
        </div>
        <div className={`px-3 py-1 rounded border font-bold whitespace-nowrap ${
            countSelected === MAX_ATOUTS 
            ? 'bg-green-100 text-green-800 border-green-200' 
            : 'bg-white text-amber-900 border-amber-200'
        }`}>
          {countSelected} / {MAX_ATOUTS}
        </div>
      </div>

      {/* Grille des Atouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.atouts.map((atout) => {
          const isSelected = character.atouts?.includes(atout.nom);
          // Désactivé si non sélectionné ET qu'on a atteint la limite
          const isDisabled = !isSelected && countSelected >= MAX_ATOUTS;

          return (
            <div
              key={atout.id}
              onClick={() => !isDisabled && onAtoutToggle(atout.nom)}
              className={`
                relative p-4 rounded-xl border-2 transition-all cursor-pointer group flex flex-col gap-2
                ${isSelected 
                  ? 'border-amber-600 bg-amber-50 shadow-md' 
                  : isDisabled
                    ? 'border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed'
                    : 'border-white bg-white shadow-sm hover:border-amber-300 hover:shadow-md'
                }
              `}
            >
              <div className="flex justify-between items-start">
                <span className={`font-serif font-bold text-lg ${isSelected ? 'text-amber-900' : 'text-gray-700'}`}>
                  {atout.nom}
                </span>
                {isSelected && (
                  <div className="bg-amber-600 text-white rounded-full p-1 shadow-sm">
                    <Check size={14} />
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {atout.description}
              </p>

              {atout.effets && (
                <div className="mt-auto pt-2 border-t border-dashed border-gray-200 text-xs font-medium text-amber-700 flex items-center gap-1">
                  <Info size={12} />
                  <span>{atout.effets}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}