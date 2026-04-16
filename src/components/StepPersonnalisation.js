// src/components/StepPersonnalisation.js

import React from 'react';
import { User, Feather, Briefcase } from 'lucide-react'; 
import { useCharacter } from '../context/CharacterContext'; 
import WidgetLangues from './personnalisation/WidgetLangues';

export default function StepPersonnalisation() { 
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter(); 
  
  const { competences, socialItems, fairyData } = gameData;
  const feeData = fairyData?.[character.typeFee];  
  const usefulSkills = Object.keys(competences || {}).sort();

  // ✨ LA MAGIE EST ICI : On extrait les métiers acquis à l'Étape 9
  const boughtIds = Object.values(character.vieSociale || {}).flat();
  const boughtMetiers = (socialItems || []).filter(item => boughtIds.includes(item.id) && item.categorie === 'metier');

  const updateField = (field, value) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { [field]: value }, gameData });
  };

  const updateActiviteDomaine = (val) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: { ...character.profils, activiteDomaine: val } }, gameData });
  };

  const updateActivitePrecision = (val) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: { ...character.profils, activite: val } }, gameData });
  };

  const updateSpecialiteMetier = (comp, nom) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { competencesLibres: { ...character.competencesLibres, specialiteMetier: { comp, nom } } }, gameData });
  };

  const getSpecsDisponiblesPourMetier = (compNom) => {
    // Si pas de compétence sélectionnée ou pas de spécialités dans le catalogue, on coupe.
    if (!compNom || !competences[compNom]?.specialites) return [];

    const toutesLesSpecs = competences[compNom].specialites;

    // A. Les spécialités achetées à la main (Étape 7)
    const acquisesManuellement = character.competencesLibres?.choixSpecialiteUser?.[compNom] || [];

    // B. La spécialité innée (Prédilection de l'espèce)
    let specInnee = null;
    if (feeData?.competencesPredilection) {
      const predIndex = feeData.competencesPredilection.findIndex(p => p.nom === compNom);
      if (predIndex !== -1) {
        const pred = feeData.competencesPredilection[predIndex];
        specInnee = pred.specialite || (pred.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[predIndex] : null);
      }
    }

    // C. Les spécialités offertes par les Atouts
    const specsAtouts = [];
    (character.atouts || []).forEach(atoutId => {
      const atoutDef = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
      if (atoutDef?.effets_techniques) {
        try {
          const tech = typeof atoutDef.effets_techniques === 'string' 
            ? JSON.parse(atoutDef.effets_techniques) 
            : atoutDef.effets_techniques;
            
          if (tech.specialites) {
            tech.specialites.forEach(s => {
              if (s.competence === compNom) specsAtouts.push(s.nom);
            });
          }
        } catch(e) {}
      }
    });

    // D. La fusion sacrée de tout ce que possède le personnage
    const toutesMesSpecs = [
      ...acquisesManuellement,
      specInnee,
      ...specsAtouts
    ].filter(Boolean); // Le filter(Boolean) retire les null/undefined

    // E. On filtre le catalogue pour ne garder que ce qu'il n'a pas !
    return toutesLesSpecs.filter(spec => !toutesMesSpecs.includes(spec.nom));
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-12">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-amber-900 flex items-center justify-center gap-3">
          <Feather className="text-amber-600" /> Personnalisation du Masque
        </h2>
        <p className="text-gray-600 mt-2">Définissez l'identité sociale et l'apparence de votre personnage.</p>
      </div>

      {/* ✨ LE NOUVEL ENCART INTELLIGENT ✨ */}
      <div className="bg-white rounded-xl shadow-md border-2 border-emerald-300 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="flex items-center gap-2 mb-4 p-4 border-b border-emerald-200">
          <Briefcase className="text-emerald-600" size={24} />
          <h3 className="text-xl font-serif text-emerald-900 font-bold">
            Activité Principale & Spécialité offerte
          </h3>
        </div>
        <div className="p-6 pt-2">
          <p className="text-sm text-emerald-800 mb-6 italic">
            Sélectionnez votre métier (parmi ceux acquis dans votre Vie Sociale) et définissez votre spécialité gratuite associée.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Colonne Gauche : Choix du métier */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-emerald-900 mb-2">Activité de base (Acquise)</label>
                <select
                  value={character.profils?.activiteDomaine || ''}
                  onChange={(e) => updateActiviteDomaine(e.target.value)}
                  disabled={isReadOnly} // ✨ FIX
                  className="w-full p-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-serif text-emerald-900 shadow-sm bg-white disabled:opacity-60 disabled:bg-emerald-50 disabled:cursor-not-allowed"
                >
                  <option value="">Sélectionnez un métier...</option>
                  {boughtMetiers.map(m => (
                    <option key={m.id} value={m.nom}>{m.nom}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={character.profils?.activite || ''}
                  onChange={(e) => updateActivitePrecision(e.target.value)}
                  disabled={isReadOnly} // ✨ FIX
                  className="w-full p-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-serif text-emerald-900 shadow-sm bg-white disabled:opacity-60 disabled:bg-emerald-50 disabled:cursor-not-allowed"
                  placeholder="Ex: Chirurgien des bas-fonds..."
                />
              </div>
            </div>

            {/* Colonne Droite : Sélection de la Spécialité */}
            <div>
              <label className="block text-sm font-bold text-emerald-900 mb-2">Spécialité offerte</label>
              <div className="flex flex-col gap-3">
                <select
                  value={character.competencesLibres?.specialiteMetier?.comp || ''}
                  onChange={(e) => updateSpecialiteMetier(e.target.value, '')}
                  disabled={isReadOnly} // ✨ FIX
                  className="w-full p-3 border border-emerald-300 rounded-lg outline-none text-sm bg-white shadow-sm focus:border-emerald-500 disabled:opacity-60 disabled:bg-emerald-50 disabled:cursor-not-allowed"
                >
                  <option value="">Compétence...</option>
                  {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
				<select
				  value={character.competencesLibres?.specialiteMetier?.nom || ''}
				  onChange={(e) => updateSpecialiteMetier(character.competencesLibres?.specialiteMetier?.comp || '', e.target.value)}
				  disabled={isReadOnly || !character.competencesLibres?.specialiteMetier?.comp}
				  className="w-full p-3 border border-emerald-300 rounded-lg outline-none text-sm bg-white shadow-sm focus:border-emerald-500 disabled:opacity-60 disabled:bg-emerald-50 disabled:cursor-not-allowed"
				>
				  <option value="">Spécialité...</option>
				  {getSpecsDisponiblesPourMetier(character.competencesLibres?.specialiteMetier?.comp).map(spec => (
					<option key={spec.id || spec.nom} value={spec.nom}>{spec.nom}</option>
				  ))}
				</select>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ✨ L'INTEGRATION DU WIDGET DES LANGUES */}
      <WidgetLangues 
        character={character} 
        dispatchCharacter={dispatchCharacter} 
        gameData={gameData} 
        isReadOnly={isReadOnly} 
      />
	  
      {/* L'ENCART IDENTITÉ & APPARENCE (INTACT) */}
      <div className="bg-white rounded-xl shadow-md border border-amber-100 overflow-hidden">
        <div className="bg-amber-50 p-4 border-b border-amber-100">
          <h3 className="font-serif font-bold text-lg text-amber-900 flex items-center gap-2">
            <User size={20} /> Identité & Apparence
          </h3>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nom Humain (Masque)</label>
              <input type="text" value={character.nom || ''} disabled className="w-full p-2 bg-gray-50 border border-gray-200 rounded text-gray-500 font-serif cursor-not-allowed" title="Modifiable à l'étape 1" />
            </div>
            <div>
              <label className="block text-xs font-bold text-purple-600 uppercase mb-1">Nom Féérique (Vrai Nom)</label>
              <input type="text" value={character.nomFeerique || ''} onChange={(e) => updateField('nomFeerique', e.target.value)} disabled={isReadOnly} className="w-full p-2 border border-purple-200 rounded focus:ring-2 focus:ring-purple-500 outline-none font-serif text-purple-900 placeholder-purple-300 disabled:opacity-60 disabled:bg-purple-50 disabled:cursor-not-allowed" placeholder="Ex: Titania, Obéron..." />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Apparence Sociale (Genre)</label>
              <div className="flex rounded-md shadow-sm">
                {['Masculin', 'Féminin', 'Androgyne'].map(genre => (
                    <button key={genre} onClick={() => updateField('genreHumain', genre)} disabled={isReadOnly} className={`flex-1 py-2 text-xs font-bold border first:rounded-l-md last:rounded-r-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${character.genreHumain === genre ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}>
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Taille</label>
                <input type="text" value={character.taille || ''} onChange={(e) => updateField('taille', e.target.value)} disabled={isReadOnly} className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none disabled:opacity-60 disabled:bg-gray-50 disabled:cursor-not-allowed" placeholder="ex: 1m75" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Poids</label>
                <input type="text" value={character.poids || ''} onChange={(e) => updateField('poids', e.target.value)} disabled={isReadOnly} className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none disabled:opacity-60 disabled:bg-gray-50 disabled:cursor-not-allowed" placeholder="ex: 70kg" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description Physique</label>
              <textarea value={character.apparence || ''} onChange={(e) => updateField('apparence', e.target.value)} disabled={isReadOnly} className="w-full p-2 border border-gray-300 rounded focus:border-amber-500 outline-none text-sm resize-none custom-scrollbar disabled:opacity-60 disabled:bg-gray-50 disabled:cursor-not-allowed" rows="3" placeholder="Description de l'apparence humaine ou féérique..." />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}