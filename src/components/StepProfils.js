// src/components/StepProfils.js
// 10.6.0
// 13.0.0 // 13.13.0

import React from 'react';
import { Info, Star, Award, Briefcase, Lock, CheckCircle } from 'lucide-react';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';

export default function StepProfils() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const { profils, competencesParProfil, competences } = gameData;

  // On extrait la liste de toutes les compétences existantes
  const usefulSkills = Object.keys(competences || {}).sort();

  // ✨ LE BOUCLIER DES PROFILS (Mode XP)
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
  const isLocked = isReadOnly || isScelle;

  const onProfilsChange = (p) => {
    if (isLocked) {
      if (isScelle) showInAppNotification("Vos profils fondateurs sont scellés et ne peuvent plus être modifiés !", "warning");
      return;
    }
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: p }, gameData });
  };

  // Créer un objet indexé par nom pour compatibilité avec le code existant
  const profilsObj = {};
  const profilNames = [];

  // 🛡️ SÉCURITÉ : On s'assure que "profils" existe bien avant de boucler dessus
  (profils || []).forEach(p => {
    profilsObj[p.nom] = {
      nom: p.nom,
      nomFeminin: p.nomFeminin,
      icon: p.icon || '👤',
      description: p.description,
      competences: (competencesParProfil[p.nom] || []).map(c => c.nom),
      traits: p.traits || []
    };
    profilNames.push(p.nom);
  });

  // Fonction pour obtenir le nom adapté au sexe
  const getProfilDisplayName = (profilName) => {
    const profil = profilsObj[profilName];
    if (!profil) return profilName;
    if (character.sexe === 'Femme') {
      return profil.nomFeminin || profilName;
    }
    return profil.nom || profilName;
  };

  const handleProfilMajeurChange = (profil) => {
    if (isLocked) return;
    onProfilsChange({
      ...character.profils,
      majeur: {
        nom: profil,
        trait: '', // Réinitialiser le trait
        competences: profilsObj[profil].competences
      }
    });
  };

  const handleProfilMineurChange = (profil) => {
    if (isLocked) return;
    onProfilsChange({
      ...character.profils,
      mineur: {
        nom: profil,
        trait: '', // Réinitialiser le trait
        competences: profilsObj[profil].competences
      }
    });
  };

  const handleTraitMajeurChange = (trait) => {
    if (isLocked) return;
    onProfilsChange({
      ...character.profils,
      majeur: {
        ...character.profils.majeur,
        trait
      }
    });
  };

  const handleTraitMineurChange = (trait) => {
    if (isLocked) return;
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
    
    // ✨ FIX : On bloque visuellement si le profil est déjà pris dans l'autre catégorie OU si le personnage est scellé
    const isDisabled = isLocked || (isMajeur ? profilName === profilMineur : profilName === profilMajeur);

    return (
      <button
        key={profilName}
        onClick={() => !isDisabled && onSelect(profilName)}
        disabled={isDisabled}
        className={`p-4 rounded-lg border-2 transition-all text-left ${
          isSelected
            ? isMajeur
              ? 'border-amber-600 bg-amber-50 shadow-md ring-2 ring-amber-400'
              : 'border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-400'
            : isDisabled
            ? 'border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed'
            : 'border-amber-200 bg-white hover:border-amber-400'
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{profilData.icon}</span>
            <h3 className="font-serif text-lg text-amber-900 font-semibold">
              {getProfilDisplayName(profilName)}
            </h3>
          </div>
          {isSelected && (
            isMajeur ? <Star className="text-amber-600" size={20} fill="currentColor" /> : <Award className="text-blue-600" size={20} />
          )}
        </div>
        <p className="text-sm text-amber-700 mb-3 italic">
          {profilData.description}
        </p>
        <div className="space-y-1">
          <div className="text-xs text-amber-600 font-semibold mb-1">
            Compétences ({isMajeur ? '+2' : '+1'}) :
          </div>
          {profilData.competences.map((comp, idx) => (
            <div key={idx} className="text-xs text-amber-800 pl-2">
              • {comp}
            </div>
          ))}
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* ✨ LE BANDEAU DE SCELLAGE */}
      {isScelle && (
        <div className="bg-amber-50 border border-amber-200 p-4 md:p-5 rounded-xl flex items-start gap-4 shadow-sm">
          <div className="bg-amber-200/50 p-2 rounded-lg shrink-0 text-amber-700 mt-0.5">
            <Lock size={24} />
          </div>
          <div>
            <h3 className="font-serif font-bold text-amber-900 text-lg">Profils Scellés</h3>
            <p className="text-sm text-amber-800 leading-relaxed mt-1">
              Vos vocations fondamentales (Profils Majeur et Mineur) ainsi que vos traits de personnalité sont définitivement gravés dans le marbre. L'évolution de votre Héritier se fera désormais en investissant de l'Expérience dans vos Compétences Utiles.
            </p>
          </div>
        </div>
      )}

      <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
        <h2 className="text-2xl font-serif text-amber-900 mb-3">
          Profils et Compétences
        </h2>
        <div className="space-y-2 text-amber-800">
          <p>
            Choisissez un <span className="font-bold text-amber-900">Profil majeur</span> (compétences +2) 
            et un <span className="font-bold text-blue-900">Profil mineur</span> (compétences +1).
          </p>
          <div className="flex items-start gap-2 text-sm">
            <Info size={16} className="mt-0.5 flex-shrink-0" />
            <span>Chaque profil s'accompagne d'un trait de caractère qui définit la personnalité de votre personnage.</span>
          </div>
        </div>
      </div>

      {/* Profil Majeur */}
      <div className="border-2 border-amber-300 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="flex items-center gap-2 mb-4">
          <Star className="text-amber-600" size={28} fill="currentColor" />
          <h3 className="text-2xl font-serif text-amber-900 font-bold">
            Profil Majeur
          </h3>
          <span className="ml-auto text-sm bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
            +2 aux compétences
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {profilNames.map(name => 
            renderProfilCard(name, profilMajeur === name, true, handleProfilMajeurChange)
          )}
        </div>

        {profilMajeur && (
          <div className="mt-4 p-4 bg-white rounded-lg border-2 border-amber-300">
            <h4 className="font-serif text-lg text-amber-900 mb-3 font-semibold">
              Choisissez un trait de caractère
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {profilsObj[profilMajeur].traits.map(trait => (
                <button
                  key={trait}
                  onClick={() => handleTraitMajeurChange(trait)}
                  disabled={isLocked}
                  className={`p-3 rounded-lg border-2 transition-all font-serif ${
                    traitMajeur === trait
                      ? 'border-amber-600 bg-amber-100 text-amber-900 font-semibold shadow-sm'
                      : isLocked
                      ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'border-amber-200 bg-white text-amber-800 hover:border-amber-400'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Profil Mineur */}
      <div className="border-2 border-blue-300 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="flex items-center gap-2 mb-4">
          <Award className="text-blue-600" size={28} />
          <h3 className="text-2xl font-serif text-blue-900 font-bold">
            Profil Mineur
          </h3>
          <span className="ml-auto text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
            +1 aux compétences
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {profilNames.map(name => 
            renderProfilCard(name, profilMineur === name, false, handleProfilMineurChange)
          )}
        </div>

        {profilMineur && (
          <div className="mt-4 p-4 bg-white rounded-lg border-2 border-blue-300">
            <h4 className="font-serif text-lg text-blue-900 mb-3 font-semibold">
              Choisissez un trait de caractère
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {profilsObj[profilMineur].traits.map(trait => (
                <button
                  key={trait}
                  onClick={() => handleTraitMineurChange(trait)}
                  disabled={isLocked}
                  className={`p-3 rounded-lg border-2 transition-all font-serif ${
                    traitMineur === trait
                      ? 'border-blue-600 bg-blue-100 text-blue-900 font-semibold shadow-sm'
                      : isLocked
                      ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'border-blue-200 bg-white text-blue-800 hover:border-blue-400'
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Récapitulatif */}
      {profilMajeur && traitMajeur && profilMineur && traitMineur && (
        <div className="p-6 bg-green-50 border-2 border-green-400 rounded-lg shadow-sm">
          <h4 className="font-serif text-xl text-green-900 mb-4 font-bold flex items-center gap-2">
            <CheckCircle size={20} /> Récapitulatif
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-3 rounded border border-green-200">
              <Star className="text-amber-600 flex-shrink-0 mt-1" size={20} fill="currentColor" />
              <div>
                <span className="font-semibold text-amber-900">{getProfilDisplayName(profilMajeur)}</span>
                <span className="text-amber-700"> - Trait : </span>
                <span className="font-semibold text-amber-900">{traitMajeur}</span>
                <div className="text-sm text-amber-700 mt-1">
                  Compétences à +2 : {profilsObj[profilMajeur].competences.join(', ')}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3 rounded border border-green-200">
              <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <span className="font-semibold text-blue-900">{getProfilDisplayName(profilMineur)}</span>
                <span className="text-blue-700"> - Trait : </span>
                <span className="font-semibold text-blue-900">{traitMineur}</span>
                <div className="text-sm text-blue-700 mt-1">
                  Compétences à +1 : {profilsObj[profilMineur].competences.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}