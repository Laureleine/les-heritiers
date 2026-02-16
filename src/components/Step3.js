// src/components/Step3.js
import React, { useState } from 'react';
import { Info, Check, Sparkles } from 'lucide-react';

export default function Step3({ character, onPouvoirToggle, fairyData }) {
  const [showInfo, setShowInfo] = useState(null);
  
  // Sécurité
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  // Si pas de données, on affiche le placeholder (qui ne devrait plus apparaître si la DB est remplie)
  if (!data || !data.pouvoirs || data.pouvoirs.length === 0) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
        <Sparkles className="mx-auto h-12 w-12 text-gray-400 mb-3" />
        <h3 className="text-lg font-serif font-bold text-gray-500">Aucun pouvoir disponible</h3>
        <p className="text-sm text-gray-400">Les pouvoirs pour {character.typeFee || 'cette fée'} n'ont pas encore été encodés.</p>
      </div>
    );
  }

  // Calcul du nombre de pouvoirs max (égal au score de Féérie initial, souvent 3)
  // On prend 3 par défaut si la stat n'est pas encore calculée
  const maxPouvoirs = character.caracteristiques?.feerie || 3;
  const countSelected = character.pouvoirs.length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* En-tête explicatif */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Héritage Féérique</h3>
          <p className="text-sm text-amber-800">
            Votre niveau de Féérie ({maxPouvoirs}) détermine le nombre de pouvoirs que vous pouvez maîtriser.
            Choisissez judicieusement entre pouvoirs <strong>Masqués</strong> (discrets) et <strong>Démasqués</strong> (puissants).
          </p>
        </div>
        <div className="ml-auto bg-white px-3 py-1 rounded border border-amber-200 font-bold text-amber-900 whitespace-nowrap">
          {countSelected} / {maxPouvoirs}
        </div>
      </div>

      {/* Grille des pouvoirs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.pouvoirs.map((pouvoir, idx) => {
          const isSelected = character.pouvoirs.includes(pouvoir.nom);
          const isDisabled = !isSelected && countSelected >= maxPouvoirs;
          const isMasque = pouvoir.type_pouvoir === 'masque';

          return (
            <div 
              key={idx}
              onClick={() => !isDisabled && onPouvoirToggle(pouvoir.nom)}
              className={`
                relative p-4 rounded-xl border-2 transition-all cursor-pointer group
                ${isSelected 
                  ? 'border-amber-600 bg-amber-50 shadow-md ring-1 ring-amber-200' 
                  : isDisabled
                    ? 'border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed'
                    : 'border-white bg-white shadow-sm hover:border-amber-300 hover:shadow-md'
                }
              `}
            >
              {/* En-tête Carte */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className={`font-serif font-bold text-lg ${isSelected ? 'text-amber-900' : 'text-gray-700'}`}>
                    {pouvoir.nom}
                  </span>
                  
                  {/* Badge Type */}
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded w-max mt-1 ${
                    isMasque 
                      ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                      : 'bg-orange-100 text-orange-700 border border-orange-200'
                  }`}>
                    {isMasque ? '🎭 Masqué' : '🔥 Démasqué'}
                  </span>
                </div>

                {isSelected && <div className="bg-amber-600 text-white rounded-full p-1"><Check size={14} /></div>}
              </div>

              {/* Description (avec toggle pour mobile ou survol pour desktop) */}
              <div className="text-sm text-gray-600 leading-relaxed mt-2">
                {pouvoir.description || "Aucune description."}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}