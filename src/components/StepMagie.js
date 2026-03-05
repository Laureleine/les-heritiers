// 10.4.0

import { Star, Info, Check, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

export function Step2({ character, onCapaciteChoice, fairyData }) {
  const [showInfo, setShowInfo] = useState(null);
  
  const data = fairyData[character.typeFee];
  
  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les capacités pour {character.typeFee} n'ont pas encore été définies.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
        <h2 className="text-2xl font-serif text-amber-900 mb-2">
          {character.typeFee}
        </h2>
		{data.description && (
		  <div className="text-amber-800 italic">
			{Array.isArray(data.description) 
			  ? data.description.map((line, i) => (
				  <p key={i} className="mb-1">{line}</p>
				))
			  : <p>{data.description}</p>
			}
		  </div>
		)}
      </div>

	{/* Capacités Naturelles Fixes */}
	<div className="mb-6">
		<h3 className="font-bold text-amber-900 mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
			<Sparkles size={16} /> Capacités Innées
		</h3>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			{[data.capacites.fixe1, data.capacites.fixe2].map((cap, idx) => {
				// SÉCURITÉ : Si la capacité est null ou mal définie, on ne l'affiche pas ou on affiche un placeholder
				if (!cap) return null; 

				return (
					<div key={`fixe-${idx}`} className="p-4 rounded-lg border border-amber-200 bg-amber-50/50 flex flex-col gap-1">
						<div className="font-bold text-amber-900 flex justify-between items-start">
							{cap.nom || 'Capacité inconnue'}
							{cap.description && (
								<button
									onClick={() => setShowInfo(showInfo === `fixe${idx}` ? null : `fixe${idx}`)}
									className="text-amber-600 hover:text-amber-800 transition-colors"
								>
									<Info size={16} />
								</button>
							)}
						</div>
						{/* Affichage description : soit direct, soit via le bouton info */}
						<div className={`text-sm text-gray-600 mt-1 ${showInfo === `fixe${idx}` ? 'block' : 'hidden md:block'}`}>
							{cap.description}
						</div>
					</div>
				);
			})}
		</div>
	</div>
	
      <div>
        <h3 className="text-xl font-serif text-amber-900 mb-4">
          Choisissez une Capacité
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.capacites.choix.map((cap, idx) => (
            <button
              key={idx}
              onClick={() => onCapaciteChoice(cap.nom)}
              className={`p-4 rounded-lg border-2 transition-all ${
                character.capaciteChoisie === cap.nom
                  ? 'border-amber-600 bg-amber-50 shadow-md'
                  : 'border-amber-200 bg-white hover:border-amber-400'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-serif text-amber-900">{cap.nom || `Option ${idx + 1}`}</h4>
                {cap.description && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInfo(showInfo === `choix${idx}` ? null : `choix${idx}`);
                    }}
                    className="text-amber-600 hover:text-amber-800 cursor-pointer"
                  >
                    <Info size={18} />
                  </div>
                )}
              </div>
              {showInfo === `choix${idx}` && cap.description && (
                <p className="text-sm text-amber-800 text-left">{cap.description}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Step3({ character, onPouvoirToggle, fairyData }) {
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
                  Votre niveau de Féérie ({maxPouvoirs}) détermine le nombre de pouvoirs que vous pouvez maîtriser. Vous pouvez choisir parmi les Pouvoirs <strong>Masqués</strong> (utilisables sous forme masquée) et les Pouvoirs <strong>Démasqués</strong> (utilisables uniquement sous forme de Fée).
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

export function StepAtouts({ character, onAtoutToggle, fairyData }) {
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