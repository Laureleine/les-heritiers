// src/components/StepRecapitulatif.js
// 8.23.0 // 8.32.0
// 9.11.0
// 10.1.0 // 10.4.0

import React from 'react';
import { User, Star, Award, Sparkles, Shield, Zap, CheckCircle } from 'lucide-react';
import { CARAC_LIST, accorderTexte } from '../data/DictionnaireJeu';

export default function StepRecapitulatif({ character }) {
  
  // ✨ DRY : On récupère simplement les clés du dictionnaire des totaux
  const uniqueFutiles = Object.keys(character.computedStats?.futilesTotal || {}).sort((a, b) => a.localeCompare(b));

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-12">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-amber-900 flex items-center justify-center gap-3">
          <CheckCircle className="text-amber-600" /> Bilan du Personnage
        </h2>
        <p className="text-gray-600 mt-2">Vérifiez les statistiques de {character.nom || 'votre Héritier'} avant l'exportation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* === COLONNE GAUCHE (Caracs, Profils & Futiles) === */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-amber-900 border-b border-amber-100 pb-2 flex items-center gap-2">
              <Shield size={18} /> Caractéristiques
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {CARAC_LIST.map(c => (
                <div key={c.key} className="bg-stone-50 p-2 rounded-lg border border-stone-100 text-center">
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider truncate" title={c.label}>
                    {c.label.substring(0, 3)}
                  </div>
                  <div className="text-xl font-bold text-amber-900 mt-1">
                    {character.caracteristiques?.[c.key] || 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-amber-900 border-b border-amber-100 pb-2 flex items-center gap-2">
              <User size={18} /> Profils d'Héritier
            </h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-amber-600 fill-amber-600" />
                  <span className="font-bold text-amber-900">Majeur : {accorderTexte(character.profils?.majeur?.nom, character.genreHumain || character.sexe) || 'Aucun'}</span>
                </div>
                <div className="text-sm text-amber-700 italic pl-6">
                  Trait : {character.profils?.majeur?.trait ? accorderTexte(character.profils.majeur.trait, character.genreHumain || character.sexe) : 'Non défini'}
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-blue-600" />
                  <span className="font-bold text-blue-900">Mineur : {accorderTexte(character.profils?.mineur?.nom, character.genreHumain || character.sexe) || 'Aucun'}</span>
                </div>
                <div className="text-sm text-blue-700 italic pl-6">
                  Trait : {character.profils?.mineur?.trait ? accorderTexte(character.profils.mineur.trait, character.genreHumain || character.sexe) : 'Non défini'}
                </div>
              </div>
            </div>
          </div>

          {/* LISTE DES COMPÉTENCES FUTILES */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-emerald-900 border-b border-emerald-100 pb-2 flex items-center gap-2">
              <Sparkles size={18} className="text-emerald-600" /> Compétences Futiles
            </h3>
            {uniqueFutiles.length > 0 ? (
              <ul className="space-y-2">
                {uniqueFutiles.map(nomComp => {
                  const isChoiceRelated = nomComp.toLowerCase().includes('au choix');
                  const displayNom = isChoiceRelated 
                    ? (character.competencesFutiles?.precisions?.[nomComp] || nomComp)
                    : nomComp;
                  
                  const total = character.computedStats?.futilesTotal?.[nomComp] || 0;

                  return (
                    <li key={nomComp} className="flex justify-between items-center bg-emerald-50/30 p-2 rounded border border-emerald-100 text-sm">
                      <span className="font-semibold text-emerald-900 truncate pr-2">
                        {displayNom}
                        {isChoiceRelated && <span className="text-[10px] text-emerald-500 ml-2 italic">(Personnalisé)</span>}
                      </span>
                      <span className="text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">{total}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-gray-400 italic text-center">Aucune compétence futile.</p>
            )}
          </div>
        </div>

        {/* === COLONNE DROITE (Magie, Atouts & Utiles) === */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-purple-900 border-b border-purple-100 pb-2 flex items-center gap-2">
              <Zap size={18} className="text-purple-600" /> Magie & Héritage ({accorderTexte(character.typeFee, character.genreHumain || character.sexe) || 'Fée'})
            </h3>
            <div className="space-y-4">
              {character.capaciteChoisie && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Capacité Optionnelle</h4>
                  <div className="bg-purple-50 text-purple-900 p-2 rounded-lg border border-purple-200 text-sm font-semibold">
                    ✨ {character.capaciteChoisie}
                  </div>
                </div>
              )}

              {character.pouvoirs && character.pouvoirs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pouvoirs maîtrisés</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.pouvoirs.map((p, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-800 border border-stone-300 px-3 py-1 rounded-full text-sm font-serif shadow-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {character.atouts && character.atouts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Atouts Féériques</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.atouts.map((a, idx) => (
                      <span key={idx} className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-sm font-serif shadow-sm flex items-center gap-1">
                        <Star size={12} className="fill-amber-600" /> {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-blue-900 border-b border-blue-100 pb-2 flex items-center gap-2">
              <User size={18} className="text-blue-600" /> Compétences Utiles
            </h3>
            
            {character.computedStats?.competencesTotal && Object.values(character.computedStats.competencesTotal).some(v => v > 0) ? (
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(character.computedStats.competencesTotal)
                  .filter(([nom, total]) => total > 0)
                  .sort(([nomA], [nomB]) => nomA.localeCompare(nomB))
                  .map(([nom, total]) => (
                  <div key={nom} className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-200 text-sm shadow-sm">
                    <span className="font-semibold text-gray-700 truncate pr-2" title={nom}>{nom}</span>
                    <span className="text-blue-800 font-bold bg-blue-100 px-2 py-0.5 rounded border border-blue-200">{total}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic text-center">Aucune compétence utile acquise.</p>
            )}

            {character.competencesLibres?.choixSpecialiteUser && Object.keys(character.competencesLibres.choixSpecialiteUser).length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Spécialités acquises</h4>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(character.competencesLibres.choixSpecialiteUser).map(([nomComp, specs]) => 
                    specs.map(spec => (
                      <span key={`${nomComp}-${spec}`} className="text-[11px] bg-blue-50 text-blue-800 border border-blue-200 px-2 py-1 rounded-full">
                        {nomComp} : <strong>{spec}</strong>
                      </span>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}