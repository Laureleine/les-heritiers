// src/components/StepPersonnalisation.js
// 10.1.0 // 10.6.0

import React from 'react';
import { User, Feather } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext'; // 👈 1. ON IMPORTE LE NUAGE

export default function StepPersonnalisation() { // 👈 2. PLUS AUCUN PARAMÈTRE ICI !
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter(); // 👈 3. ON SE SERT DANS LE NUAGE

  const updateField = (field, value) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { [field]: value }, gameData });
  };
  
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-amber-900 flex items-center justify-center gap-3">
          <Feather className="text-amber-600" /> Personnalisation du Masque
        </h2>
        <p className="text-gray-600 mt-2">Définissez l'identité sociale et l'apparence de votre personnage.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-amber-100 overflow-hidden">
        <div className="bg-amber-50 p-4 border-b border-amber-100">
          <h3 className="font-serif font-bold text-lg text-amber-900 flex items-center gap-2">
            <User size={20} /> Identité & Apparence
          </h3>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colonne Gauche */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nom Humain (Masque)</label>
              <input type="text" value={character.nom || ''} disabled className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-500 font-serif cursor-not-allowed" title="Modifiable à l'étape 1" />
            </div>
            <div>
              <label className="block text-xs font-bold text-purple-600 uppercase mb-1">Nom Féérique (Vrai Nom)</label>
              <input
                type="text"
                value={character.nomFeerique || ''}
                onChange={(e) => updateField('nomFeerique', e.target.value)}
                className="w-full p-2 border border-purple-200 rounded focus:ring-2 focus:ring-purple-500 outline-none font-serif text-purple-900 placeholder-purple-300"
                placeholder="Ex: Titania, Obéron..."
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Apparence Sociale (Genre)</label>
              <div className="flex rounded-md shadow-sm">
                {['Masculin', 'Féminin', 'Androgyne'].map(genre => (
                  <button key={genre} onClick={() => updateField('genreHumain', genre)}
                    className={`flex-1 py-2 text-xs font-bold border first:rounded-l-md last:rounded-r-md transition-colors ${
                      character.genreHumain === genre ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}>
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Droite */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Taille</label>
                <input
                  type="text" value={character.taille || ''} onChange={(e) => updateField('taille', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none" placeholder="ex: 1m75"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Poids</label>
                <input
                  type="text" value={character.poids || ''} onChange={(e) => updateField('poids', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none" placeholder="ex: 70kg"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description Physique</label>
              <textarea
                value={character.apparence || ''} onChange={(e) => updateField('apparence', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none text-sm resize-none custom-scrollbar"
                rows="3" placeholder="Description de l'apparence humaine ou féérique..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}