// src/components/StepRecapitulatif.js
// Version: 3.0.0
// Build: 2026-02-04 01:00
// Migration: 100% Supabase - Plus de data.js !

import React from 'react';
import { User, Star, Award, Sparkles } from 'lucide-react';
import { getProfilNameBySexe } from '../data/dataHelpers';

export default function StepRecapitulatif({ character, fairyData, competences, competencesParProfil }) {
  const feeData = fairyData[character.typeFee];
  
  // Calculer toutes les compétences avec leurs scores
  const calculerCompetences = () => {
    const competencesMap = new Map();
    
    // 1. Compétences de prédilection de la fée (+2)
    if (feeData?.competencesPredilection) {
      feeData.competencesPredilection.forEach(comp => {
        const key = comp.specialite ? `${comp.nom} (${comp.specialite})` : comp.nom;
        competencesMap.set(key, {
          nom: comp.nom,
          specialite: comp.specialite,
          score: 2,
          sources: ['🧚 Prédilection de fée']
        });
      });
    }
    
    // 2. Compétences du profil majeur (+2)
    if (character.profils?.majeur?.nom) {
      const comps = competencesParProfil[character.profils.majeur.nom] || [];
      comps.forEach(compData => {
        const comp = compData.nom;
        if (competencesMap.has(comp)) {
          const existing = competencesMap.get(comp);
          existing.score += 2;
          existing.sources.push('⭐ Profil majeur');
        } else {
          competencesMap.set(comp, {
            nom: comp,
            specialite: null,
            score: 2,
            sources: ['⭐ Profil majeur']
          });
        }
      });
    }
    
    // 3. Compétences du profil mineur (+1)
    if (character.profils?.mineur?.nom) {
      const comps = competencesParProfil[character.profils.mineur.nom] || [];
      comps.forEach(compData => {
        const comp = compData.nom;
        if (competencesMap.has(comp)) {
          const existing = competencesMap.get(comp);
          existing.score += 1;
          existing.sources.push('🏅 Profil mineur');
        } else {
          competencesMap.set(comp, {
            nom: comp,
            specialite: null,
            score: 1,
            sources: ['🏅 Profil mineur']
          });
        }
      });
    }
    
    // 4. Points libres
    if (character.competencesLibres) {
      Object.entries(character.competencesLibres).forEach(([compNom, data]) => {
        const rangsSupp = data.rangsSupplementaires || 0;
        const specialitesSupp = data.specialites || [];
        
        if (rangsSupp > 0) {
          if (competencesMap.has(compNom)) {
            const existing = competencesMap.get(compNom);
            existing.score += rangsSupp;
            existing.sources.push(`💎 Points libres (+${rangsSupp})`);
          } else {
            competencesMap.set(compNom, {
              nom: compNom,
              specialite: null,
              score: rangsSupp,
              sources: [`💎 Points libres (+${rangsSupp})`]
            });
          }
        }
        
        // Spécialités supplémentaires
        specialitesSupp.forEach(spec => {
          const key = `${compNom} (${spec})`;
          if (!competencesMap.has(key)) {
            competencesMap.set(key, {
              nom: compNom,
              specialite: spec,
              score: 0,
              sources: ['💎 Spécialité (points libres)']
            });
          }
        });
      });
    }
    
    return Array.from(competencesMap.values()).sort((a, b) => b.score - a.score);
  };
  
  const toutesCompetences = calculerCompetences();
  
  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="text-center p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-2 border-amber-300">
        <h2 className="text-3xl font-serif text-amber-900 mb-2">
          ✨ Récapitulatif Final ✨
        </h2>
        <p className="text-gray-700">Votre personnage est complet et prêt à vivre ses aventures !</p>
      </div>

      {/* Informations de base */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border-2 border-amber-300">
          <div className="flex items-center gap-2 mb-4">
            <User size={24} className="text-amber-600" />
            <h3 className="text-xl font-serif text-amber-900">Identité</h3>
          </div>
          <div className="space-y-2">
            <div>
              <span className="text-sm text-gray-600">Nom :</span>
              <div className="text-lg font-semibold text-amber-900">{character.nom}</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Sexe :</span>
              <div className="text-lg text-amber-900">{character.sexe}</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Type de Fée :</span>
              <div className="text-lg text-amber-900">{character.typeFee}</div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Ancienneté :</span>
              <div className="text-lg text-amber-900 capitalize">{feeData?.anciennete || character.anciennete}</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-amber-300">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={24} className="text-amber-600" />
            <h3 className="text-xl font-serif text-amber-900">Caractéristiques</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(character.caracteristiques || {}).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-2 bg-amber-50 rounded">
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {key === 'sangFroid' ? 'Sang-froid' : key}
                </span>
                <span className="text-lg font-bold text-amber-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profils */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border-2 border-amber-300">
          <div className="flex items-center gap-2 mb-4">
            <Star size={24} className="text-amber-600" />
            <h3 className="text-xl font-serif text-amber-900">Profil Majeur</h3>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-amber-900">
              {character.profils?.majeur?.nom || '-'}
            </div>
            <div className="text-sm text-gray-600">
              Trait : {character.profils?.majeur?.trait || '-'}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
          <div className="flex items-center gap-2 mb-4">
            <Award size={24} className="text-blue-600" />
            <h3 className="text-xl font-serif text-blue-900">Profil Mineur</h3>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-blue-900">
              {character.profils?.mineur?.nom || '-'}
            </div>
            <div className="text-sm text-gray-600">
              Trait : {character.profils?.mineur?.trait || '-'}
            </div>
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="bg-white p-6 rounded-lg border-2 border-amber-300">
        <h3 className="text-xl font-serif text-amber-900 mb-4 border-b-2 border-amber-200 pb-2">
          📚 Compétences
        </h3>
        <div className="space-y-3">
          {toutesCompetences.map((comp, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <div className="flex-1">
                <div className="font-semibold text-amber-900">
                  {comp.nom}
                  {comp.specialite && (
                    <span className="text-sm font-normal text-gray-600 ml-2">
                      ({comp.specialite})
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {comp.sources.join(' • ')}
                </div>
              </div>
              <div className="text-2xl font-bold text-amber-600 ml-4">
                {comp.score}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compétences futiles */}
      {character.competencesFutiles && (
        <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
          <h3 className="text-xl font-serif text-purple-900 mb-4 border-b-2 border-purple-200 pb-2">
            🎨 Compétences Futiles
          </h3>
          <div className="space-y-2">
            {Object.entries(character.competencesFutiles.rangs || {}).map(([comp, rang]) => (
              rang > 0 && (
                <div key={comp} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-semibold text-purple-900">{comp}</span>
                  <span className="text-2xl font-bold text-purple-600">{rang}</span>
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {/* Capacité et pouvoirs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border-2 border-green-300">
          <h3 className="text-xl font-serif text-green-900 mb-4">⚡ Capacité Choisie</h3>
          <div className="text-lg font-semibold text-green-900">
            {character.capaciteChoisie || '-'}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
          <h3 className="text-xl font-serif text-blue-900 mb-4">✨ Pouvoirs</h3>
          <div className="space-y-2">
            {character.pouvoirs?.map((pouvoir, index) => (
              <div key={index} className="p-2 bg-blue-50 rounded text-blue-900">
                {pouvoir}
              </div>
            )) || <div className="text-gray-500">-</div>}
          </div>
        </div>
      </div>

      {/* Message final */}
      <div className="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border-2 border-green-300">
        <p className="text-lg font-serif text-gray-800">
          🎉 Votre personnage <strong>{character.nom}</strong> est prêt pour l'aventure !
        </p>
        <p className="text-sm text-gray-600 mt-2">
          N'oubliez pas de sauvegarder ou d'exporter en PDF pour conserver cette fiche.
        </p>
      </div>
    </div>
  );
}
