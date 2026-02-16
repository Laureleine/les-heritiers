// src/components/StepPersonnalisation.js
import React from 'react';
import { User, Briefcase, Feather, Sparkles } from 'lucide-react';

export default function StepPersonnalisation({ character, onCharacterChange }) {
  
  const updateField = (field, value) => {
    onCharacterChange({ [field]: value });
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-12">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-amber-900 flex items-center justify-center gap-3">
            <Feather className="text-amber-600" /> Personnalisation du Masque
        </h2>
        <p className="text-gray-600 mt-2">Définissez l'identité sociale et l'apparence de votre personnage.</p>
      </div>

      {/* 1. BLOC IDENTITÉ SOCIALE & MASQUE (Déplacé de Step 1) */}
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
                    <input type="text" value={character.nom} disabled className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-500 font-serif cursor-not-allowed" title="Modifiable à l'étape 1" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-purple-600 uppercase mb-1">Nom Féérique (Vrai Nom)</label>
                    <input 
                        type="text" 
                        value={character.nomFeerique || ''} 
                        onChange={(e) => updateField('nomFeerique', e.target.value)}
                        className="w-full p-2 border border-purple-200 rounded focus:ring-2 focus:ring-purple-500 outline-none font-serif text-purple-900 placeholder-purple-300"
                        placeholder="Nom secret..."
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
                            className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none" placeholder="1m75"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Poids</label>
                        <input 
                            type="text" value={character.poids || ''} onChange={(e) => updateField('poids', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none" placeholder="70kg"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description Physique</label>
                    <textarea 
                        value={character.apparence || ''} onChange={(e) => updateField('apparence', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none text-sm resize-none"
                        rows="3" placeholder="Description du masque..."
                    />
                </div>
            </div>
        </div>
      </div>

      {/* 2. BLOC RESSOURCES (Placeholder amélioré) */}
      <div className="bg-white rounded-xl shadow-md border border-amber-100 overflow-hidden opacity-75">
         <div className="bg-green-50 p-4 border-b border-green-100 flex justify-between items-center">
            <h3 className="font-serif font-bold text-lg text-green-800 flex items-center gap-2">
                <Briefcase size={20} /> Ressources & Fortune
            </h3>
            <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded font-bold">À venir</span>
         </div>
         <div className="p-8 text-center text-gray-500 italic">
            <Sparkles className="mx-auto mb-2 text-green-300" size={32} />
            <p>La gestion de la Fortune, de l'Équipement et des Contacts sera disponible dans une prochaine mise à jour.</p>
            <p className="text-sm mt-2">Pour l'instant, ces éléments sont gérés de manière narrative par votre Maître de Jeu.</p>
         </div>
      </div>

    </div>
  );
}