// src/components/StepRecapitulatif.js
// Version: 2.9.4
// Build: 2026-01-31 20:52
// Description: Étape 8 - Récapitulatif final du personnage
// Dernière modification: 2026-01-31

import React from 'react';
import { User, Star, Award, Sparkles } from 'lucide-react';
import { profils } from '../data/data';

export default function StepRecapitulatif({ character, fairyData }) {
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
      const profilMajeur = profils[character.profils.majeur.nom];
      profilMajeur?.competences.forEach(comp => {
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
      const profilMineur = profils[character.profils.mineur.nom];
      profilMineur?.competences.forEach(comp => {
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
        
        // Ajouter les spécialités achetées
        specialitesSupp.forEach(spec => {
          const key = `${compNom} (${spec})`;
          if (!competencesMap.has(key)) {
            // Si la compétence de base existe, copier son score
            const base = competencesMap.get(compNom);
            competencesMap.set(key, {
              nom: compNom,
              specialite: spec,
              score: base ? base.score : 0,
              sources: base ? [...base.sources, '💎 Spécialité achetée'] : ['💎 Spécialité achetée']
            });
          }
        });
      });
    }
    
    // Convertir en tableau et trier par score décroissant
    return Array.from(competencesMap.values()).sort((a, b) => b.score - a.score);
  };
  
  const competences = calculerCompetences();
  
  if (!feeData) return null;
  
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 p-6 rounded-lg border-2 border-amber-300">
        <div className="flex items-center gap-3 mb-4">
          <User size={32} className="text-amber-700" />
          <div>
            <h2 className="text-3xl font-serif text-amber-900 font-bold">
              {character.nom || 'Sans nom'}
            </h2>
            <p className="text-amber-700">
              {character.typeFee} • {character.sexe} • 
              {character.anciennete === 'traditionnelle' ? ' 🏛️ Fée Traditionnelle' : ' ⚡ Fée Moderne'}
            </p>
          </div>
        </div>
      </div>

      {/* Caractéristiques */}
      <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
        <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold flex items-center gap-2">
          <Sparkles className="text-amber-600" />
          Caractéristiques
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(character.caracteristiques || {}).map(([key, value]) => {
            const labels = {
              agilite: 'Agilité',
              constitution: 'Constitution',
              force: 'Force',
              precision: 'Précision',
              esprit: 'Esprit',
              perception: 'Perception',
              prestance: 'Prestance',
              sangFroid: 'Sang-froid'
            };
            return (
              <div key={key} className="bg-amber-50 p-3 rounded-lg text-center border border-amber-200">
                <div className="text-sm text-amber-700">{labels[key]}</div>
                <div className="text-2xl font-bold text-amber-900">{value}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Profils */}
      {character.profils?.majeur?.nom && (
        <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
          <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold">
            Profils
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <Star className="text-amber-600 flex-shrink-0 mt-1" size={24} fill="currentColor" />
              <div className="flex-1">
                <div className="font-serif text-lg text-amber-900 font-semibold">
                  {character.profils.majeur.nom}
                </div>
                <div className="text-sm text-amber-700">
                  Trait : <span className="font-semibold">{character.profils.majeur.trait}</span>
                </div>
              </div>
            </div>
            
            {character.profils.mineur?.nom && (
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Award className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <div className="font-serif text-lg text-blue-900 font-semibold">
                    {character.profils.mineur.nom}
                  </div>
                  <div className="text-sm text-blue-700">
                    Trait : <span className="font-semibold">{character.profils.mineur.trait}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Compétences */}
      <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
        <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold">
          Compétences ({competences.length})
        </h3>
        <div className="space-y-2">
          {competences.map((comp, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200 hover:border-amber-400 transition-all">
              <div className="flex-1">
                <div className="font-serif text-amber-900 font-semibold">
                  {comp.nom}
                  {comp.specialite && (
                    <span className="text-sm text-amber-700 font-normal ml-2">
                      ({comp.specialite})
                    </span>
                  )}
                </div>
                <div className="text-xs text-amber-600 mt-1">
                  {comp.sources.join(' • ')}
                </div>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <div className="text-2xl font-bold text-amber-900">
                  {comp.score}
                </div>
                <div className="text-xs text-amber-600">
                  rangs
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compétences futiles */}
      {character.competencesFutiles && Object.keys(character.competencesFutiles.rangs || {}).length > 0 && (
        <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
          <h3 className="text-xl font-serif text-purple-900 mb-4 font-bold flex items-center gap-2">
            <Sparkles className="text-purple-600" />
            Compétences Futiles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(character.competencesFutiles.rangs || {}).map(([compNom, rangs]) => {
              const isPredilection = feeData?.competencesFutilesPredilection?.includes(compNom) || false;
              const scoreBase = isPredilection ? 2 : 0;
              const scoreTotal = scoreBase + rangs;
              
              return (
                <div key={compNom} className="bg-purple-50 p-3 rounded-lg text-center border border-purple-200">
                  <div className="text-sm text-purple-700 font-semibold flex items-center justify-center gap-1">
                    {compNom}
                    {isPredilection && <Star size={12} className="text-purple-600" fill="currentColor" />}
                  </div>
                  <div className="text-2xl font-bold text-purple-900">{scoreTotal}</div>
                  {scoreBase > 0 && (
                    <div className="text-xs text-purple-600">
                      (Base {scoreBase} + {rangs})
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Capacités */}
      {character.capaciteChoisie && (
        <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
          <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold">
            Capacités Naturelles
          </h3>
          <div className="space-y-2">
            <div className="p-3 bg-amber-100 rounded-lg border-2 border-amber-300">
              <div className="font-serif text-amber-900 font-semibold">
                {feeData.capacites.fixe1.nom}
              </div>
              <div className="text-sm text-amber-700">{feeData.capacites.fixe1.description}</div>
            </div>
            <div className="p-3 bg-amber-100 rounded-lg border-2 border-amber-300">
              <div className="font-serif text-amber-900 font-semibold">
                {feeData.capacites.fixe2.nom}
              </div>
              <div className="text-sm text-amber-700">{feeData.capacites.fixe2.description}</div>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border-2 border-amber-400">
              <div className="font-serif text-amber-900 font-semibold flex items-center gap-2">
                <span className="text-amber-600">✦</span>
                {character.capaciteChoisie}
              </div>
              <div className="text-sm text-amber-700">
                {feeData.capacites.choix.find(c => c.nom === character.capaciteChoisie)?.description}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pouvoirs */}
      {character.pouvoirs && character.pouvoirs.length > 0 && (
        <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
          <h3 className="text-xl font-serif text-amber-900 mb-4 font-bold">
            Pouvoirs ({character.pouvoirs.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {character.pouvoirs.map((pouvoirNom, idx) => {
              const pouvoir = feeData.pouvoirs.find(p => p.nom === pouvoirNom);
              return pouvoir ? (
                <div key={idx} className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border-2 border-amber-300">
                  <div className="font-serif text-amber-900 font-semibold mb-1">
                    {pouvoir.nom}
                  </div>
                  <div className="text-xs text-amber-700">
                    {pouvoir.description}
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* Message de validation */}
      <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400 text-center">
        <p className="text-green-900 font-serif text-lg font-bold mb-2">
          ✓ Personnage complet !
        </p>
        <p className="text-green-700">
          Votre personnage est prêt à vivre ses aventures dans le Paris de la Belle Époque.
        </p>
      </div>
    </div>
  );
}