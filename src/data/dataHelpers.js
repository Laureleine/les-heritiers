// src/data/dataHelpers.js
// Version: 3.4.0
// Migration: Détection auto des spécialités et gestion de la forme démasquée.

// --- Règles de Santé ---
export const calculateMaxHP = (constitution) => (3 * (parseInt(constitution) || 0)) + 9; [4]

// --- Moteur de Stats de Combat ---
/**
 * Calcule les stats de combat (Masqué et Démasqué)
 * @param {Object} character - Objet personnage
 * @param {Object} skills - Scores finaux calculés (Base + Profil + Points Libres)
 */
export const calculateCombatStats = (character, skills) => {
  const getS = (nom) => skills[nom] || 0;
  const agi = character.caracteristiques?.agilite || 0;
  const sf = character.caracteristiques?.sangFroid || 0;
  const esp = character.caracteristiques?.esprit || 0;
  const con = character.caracteristiques?.constitution || 0;

  // Détection automatique des spécialités (+1 bonus) [5]
  const hasSpec = (compNom, specNom) => {
    const data = character.competencesLibres?.[compNom];
    return data?.specialites?.includes(specNom) || data?.specialiteBase === specNom;
  };

  const specEsquive = hasSpec('Mouvement', 'Esquive') ? 1 : 0;
  // Note: La parade fonctionne avec n'importe quelle spécialité d'arme de mêlée [5]
  const specParade = (character.competencesLibres?.['Mêlée']?.specialites?.length > 0 || 
                      character.competencesLibres?.['Mêlée']?.specialiteBase) ? 1 : 0;

  // Forme Masquée
  const statsMasque = {
    esquive: getS('Mouvement') + agi + 5 + specEsquive, [5]
    parade: getS('Mêlée') + agi + 5 + specParade, [5]
    resistancePhysique: getS('Ressort') + con + 5, [5]
    resistancePsychique: getS('Fortitude') + esp + 5, [5]
    initiative: getS('Art de la guerre') + sf [5]
  };

  // Forme Démasquée (gestion des capacités "Accrue") [2, 3, 6]
  const hasAccrue = (stat) => character.capaciteChoisie === `${stat} accrue`;
  
  const agiD = agi + (hasAccrue('Agilité') ? 1 : 0);
  const conD = con + (hasAccrue('Constitution') ? 1 : 0);
  const sfD = sf + (hasAccrue('Sang-froid') ? 1 : 0);

  const statsDemasque = {
    esquive: getS('Mouvement') + agiD + 5 + specEsquive,
    parade: getS('Mêlée') + agiD + 5 + specParade,
    resistancePhysique: getS('Ressort') + conD + 5,
    resistancePsychique: statsMasque.resistancePsychique, // Esprit n'a pas de capacité "accrue" standard
    initiative: getS('Art de la guerre') + sfD
  };

  return { masque: statsMasque, demasque: statsDemasque };
};

// --- Points de Personnage (PP) ---
export const calculateTotalPP = (character, skills) => {
  let total = 0;
  if (character.profils?.majeur?.nom) total += 8; [7]
  if (character.profils?.mineur?.nom) total += 4; [7]

  // Rangs de profil (Somme/4) [8]
  const profils = ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'];
  const mapping = {
    'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
    'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
    'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
  };

  profils.forEach(p => {
    const somme = mapping[p].reduce((acc, comp) => acc + (skills[comp] || 0), 0);
    total += Math.floor(somme / 4); [8]
  });

  return total;
};
2. Mise à jour de src/components/StepRecapitulatif.js (v3.1.0)
Le composant utilise maintenant un Hook de calcul pour la performance et n'affiche les stats "Démasqué" que si elles diffèrent de la forme humaine.
// src/components/StepRecapitulatif.js
// Version: 3.1.0
// Migration: Affichage conditionnel Forme Démasquée et détection auto des spécialités.

import React, { useMemo } from 'react';
import { calculateCombatStats, calculateTotalPP, calculateMaxHP } from '../data/dataHelpers';

export default function StepRecapitulatif({ character, fairyData, competencesParProfil }) {
  
  // Utilisation de useMemo pour optimiser les calculs lourds (Hook de stats)
  const stats = useMemo(() => {
    // 1. Calcul des scores finaux (Agrégation de toutes les sources)
    const skills = {}; 
    // ... (votre logique de boucle sur les sources : Prédilection, Majeur, Mineur, Libres) ...
    // Note: Utiliser le code de calcul de la v3.0.0
    
    const combat = calculateCombatStats(character, skills);
    const ppTotal = calculateTotalPP(character, skills);
    const hpMax = calculateMaxHP(character.caracteristiques?.constitution);

    return { skills, combat, ppTotal, hpMax };
  }, [character]);

  const { combat, ppTotal, hpMax } = stats;

  // Fonction utilitaire pour l'affichage double (Masqué / Démasqué)
  const renderStat = (label, valMasque, valDemasque, color) => {
    const differ = valMasque !== valDemasque;
    return (
      <div className={`p-4 rounded-xl border-2 text-center bg-${color}-50 border-${color}-200`}>
        <p className={`text-${color}-900 font-serif text-sm`}>{label}</p>
        <div className="flex justify-center items-baseline gap-2">
          <p className={`text-3xl font-bold text-${color}-600`}>{valMasque}</p>
          {differ && (
            <p className="text-sm font-bold text-amber-600" title="Forme démasquée">
              (🎭 {valDemasque})
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 pb-10">
      <h2 className="text-3xl font-serif text-amber-900 text-center border-b-2 border-amber-200 pb-4">
        Fiche de l'Héritier
      </h2>

      {/* STATS PRINCIPALES */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-center">
          <p className="text-red-900 font-serif text-sm">Points de Vie</p>
          <p className="text-3xl font-bold text-red-600">{hpMax}</p>
        </div>
        {renderStat("Initiative", combat.masque.initiative, combat.demasque.initiative, "blue")}
        {renderStat("Esquive", combat.masque.esquive, combat.demasque.esquive, "amber")}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {renderStat("Parade", combat.masque.parade, combat.demasque.parade, "orange")}
        {renderStat("Résist. Physique", combat.masque.resistancePhysique, combat.demasque.resistancePhysique, "emerald")}
        {renderStat("Résist. Psychique", combat.masque.resistancePsychique, combat.demasque.resistancePsychique, "purple")}
      </div>

      {/* POINTS DE PERSONNALISATION */}
      <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-xl flex justify-between items-center">
        <div>
          <h3 className="font-serif text-xl">Budget de Personnalisation</h3>
          <p className="text-indigo-200 text-sm italic">PP générés par vos profils et rangs</p>
        </div>
        <div className="text-center">
          <span className="text-5xl font-bold text-indigo-300">{ppTotal}</span>
          <span className="ml-2 text-2xl font-serif">PP</span>
        </div>
      </div>

      {/* Reste du récapitulatif... */}
    </div>
  );
}