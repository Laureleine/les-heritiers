// src/components/StepProfils.js
// Version: 3.0.0
// Build: 2026-02-04 01:00
// Migration: 100% Supabase - Plus de data.js !

import React from 'react';
import { Info, Star, Award } from 'lucide-react';
import { getProfilNameBySexe } from '../data/dataHelpers';

export default function StepProfils({ character, onProfilsChange, profils }) {
  // Créer un objet indexé par nom pour compatibilité
  const profilsObj = {};
  profils.forEach(p => {
    profilsObj[p.nom] = {
      nom: p.nom,
      nomFeminin: p.nomFeminin,
      description: p.description
    };
  });

  const handleProfilMajeurChange = (profil) => {
    onProfilsChange({
      ...character.profils,
      majeur: {
        nom: profil,
        trait: ''
      }
    });
  };

  const handleProfilMineurChange = (profil) => {
    onProfilsChange({
      ...character.profils,
      mineur: {
        nom: profil,
        trait: ''
      }
    });
  };

  const handleTraitMajeurChange = (trait) => {
    onProfilsChange({
      ...character.profils,
      majeur: {
        ...character.profils.majeur,
        trait
      }
    });
  };

  const handleTraitMineurChange = (trait) => {
    onProfilsChange({
      ...character.profils,
      mineur: {
        ...character.profils.mineur,
        trait
      }
    });
  };

  const profilMajeur = character.profils?.majeur?.nom || '';
  const traitMajeur = character.profils?.majeur?.trait || '';
  const profilMineur = character.profils?.mineur?.nom || '';
  const traitMineur = character.profils?.mineur?.trait || '';

  const renderProfilCard = (profilName, isSelected, isMajeur, onSelect) => {
    const profilData = profilsObj[profilName];
    if (!profilData) return null;
    
    const isDisabled = isMajeur ? profilName === profilMineur : profilName === profilMajeur;
    
    const displayName = getProfilNameBySexe(profilName, character.sexe, profilData.nomFeminin);

    return (
      <button
        key={profilName}
        onClick={() => !isDisabled && onSelect(profilName)}
        disabled={isDisabled}
        className={`p-4 rounded-lg border-2 transition-all text-left ${
          isSelected
            ? 'border-amber-600 bg-amber-50 shadow-md ring-2 ring-amber-400'
            : isDisabled
            ? 'border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed'
            : 'border-amber-200 bg-white hover:border-amber-400'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {isMajeur ? <Star size={20} className="text-amber-600" /> : <Award size={20} className="text-blue-600" />}
          <span className="font-serif font-semibold text-amber-900">{displayName}</span>
        </div>
        <p className="text-sm text-gray-700">{profilData.description}</p>
      </button>
    );
  };

  return (
    <div className="space-y-8">
      {/* Profil Majeur */}
      <div>
        <h2 className="text-2xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2 flex items-center gap-2">
          <Star size={24} className="text-amber-600" />
          Profil Majeur
        </h2>
        <p className="text-gray-700 mb-4">
          Le profil majeur définit votre personnage. Vous obtiendrez le <strong>rang 3</strong> dans ses 4 compétences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profils.map(p => renderProfilCard(p.nom, profilMajeur === p.nom, true, handleProfilMajeurChange))}
        </div>

        {/* Sélection du trait majeur */}
        {profilMajeur && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
            <h3 className="text-lg font-serif text-amber-900 mb-3 flex items-center gap-2">
              <Info size={20} />
              Trait de personnalité (Profil Majeur)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['Trait 1', 'Trait 2', 'Trait 3'].map(trait => (
                <button
                  key={trait}
                  onClick={() => handleTraitMajeurChange(trait)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    traitMajeur === trait
                      ? 'border-amber-600 bg-white shadow-md'
                      : 'border-amber-300 bg-amber-50 hover:border-amber-500'
                  }`}
                >
                  <span className="font-serif text-amber-900">{trait}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Profil Mineur */}
      <div>
        <h2 className="text-2xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2 flex items-center gap-2">
          <Award size={24} className="text-blue-600" />
          Profil Mineur
        </h2>
        <p className="text-gray-700 mb-4">
          Le profil mineur complète votre personnage. Vous obtiendrez le <strong>rang 2</strong> dans ses 4 compétences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profils.map(p => renderProfilCard(p.nom, profilMineur === p.nom, false, handleProfilMineurChange))}
        </div>

        {/* Sélection du trait mineur */}
        {profilMineur && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
            <h3 className="text-lg font-serif text-blue-900 mb-3 flex items-center gap-2">
              <Info size={20} />
              Trait de personnalité (Profil Mineur)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['Trait 1', 'Trait 2', 'Trait 3'].map(trait => (
                <button
                  key={trait}
                  onClick={() => handleTraitMineurChange(trait)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    traitMineur === trait
                      ? 'border-blue-600 bg-white shadow-md'
                      : 'border-blue-300 bg-blue-50 hover:border-blue-500'
                  }`}
                >
                  <span className="font-serif text-blue-900">{trait}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Récapitulatif */}
      {profilMajeur && profilMineur && traitMajeur && traitMineur && (
        <div className="p-6 bg-gradient-to-r from-amber-100 to-blue-100 rounded-lg border-2 border-amber-300">
          <h3 className="text-xl font-serif text-amber-900 mb-4 text-center font-semibold">
            📋 Récapitulatif de vos profils
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-amber-300">
              <div className="flex items-center gap-2 mb-2">
                <Star size={20} className="text-amber-600" />
                <span className="font-serif font-semibold text-amber-900">Profil Majeur (Rang 3)</span>
              </div>
              <p className="text-lg text-amber-900">{getProfilNameBySexe(profilMajeur, character.sexe, profilsObj[profilMajeur]?.nomFeminin)}</p>
              <p className="text-sm text-gray-600 mt-1">Trait : {traitMajeur}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
              <div className="flex items-center gap-2 mb-2">
                <Award size={20} className="text-blue-600" />
                <span className="font-serif font-semibold text-blue-900">Profil Mineur (Rang 2)</span>
              </div>
              <p className="text-lg text-blue-900">{getProfilNameBySexe(profilMineur, character.sexe, profilsObj[profilMineur]?.nomFeminin)}</p>
              <p className="text-sm text-gray-600 mt-1">Trait : {traitMineur}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
