// src/components/StepCaracteristiques.js
// Version: 2.0
// Description: Étape 2 (Step 2 dans la séquence) - Répartition des caractéristiques
// Dernière modification: 2025-01-30

import React from 'react';
import { Minus, Plus, Info } from 'lucide-react';

const CARACTERISTIQUES = [
  { key: 'agilite', label: 'Agilité', icon: '🤸', description: 'Souplesse, rapidité, réflexes' },
  { key: 'constitution', label: 'Constitution', icon: '💪', description: 'Endurance, résistance, santé' },
  { key: 'force', label: 'Force', icon: '⚡', description: 'Puissance physique, capacité de charge' },
  { key: 'precision', label: 'Précision', icon: '🎯', description: 'Dextérité, coordination main-œil' },
  { key: 'esprit', label: 'Esprit', icon: '🧠', description: 'Intelligence, logique, mémoire' },
  { key: 'perception', label: 'Perception', icon: '👁️', description: 'Observation, sens aiguisés, intuition' },
  { key: 'prestance', label: 'Prestance', icon: '👑', description: 'Charisme, présence, influence' },
  { key: 'sangFroid', label: 'Sang-froid', icon: '🧊', description: 'Calme, maîtrise de soi, courage' }
];

const POINTS_TOTAUX = 10;

export default function StepCaracteristiques({ character, onCaracteristiquesChange, fairyData }) {
  const data = fairyData[character.typeFee];
  
  if (!data || !data.caracteristiques) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les caractéristiques pour {character.typeFee} n'ont pas encore été définies.
        </p>
      </div>
    );
  }

  const caracteristiques = character.caracteristiques || {};
  
  // Calculer les points déjà dépensés
  const pointsDepenses = Object.keys(caracteristiques).reduce((sum, key) => {
    const min = data.caracteristiques[key]?.min || 0;
    const current = caracteristiques[key] || min;
    return sum + (current - min);
  }, 0);
  
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  const handleChange = (key, delta) => {
    const min = data.caracteristiques[key].min;
    const max = data.caracteristiques[key].max;
    const current = caracteristiques[key] || min;
    const newValue = current + delta;

    // Vérifications
    if (newValue < min || newValue > max) return;
    if (delta > 0 && pointsRestants <= 0) return;

    const newCaracteristiques = {
      ...caracteristiques,
      [key]: newValue
    };

    onCaracteristiquesChange(newCaracteristiques);
  };

  const getPointsInvested = (key) => {
    const min = data.caracteristiques[key].min;
    const current = caracteristiques[key] || min;
    return current - min;
  };

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
        <h2 className="text-2xl font-serif text-amber-900 mb-2">
          Répartition des Caractéristiques
        </h2>
        <p className="text-amber-800 mb-4">
          Vous disposez de <span className="font-bold text-2xl text-amber-900">{pointsRestants}</span> points à répartir.
        </p>
        <div className="flex items-center gap-2 text-sm text-amber-700">
          <Info size={16} />
          <span>Chaque type de fée a des limites min/max pour chaque caractéristique.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CARACTERISTIQUES.map(({ key, label, icon, description }) => {
          const min = data.caracteristiques[key]?.min || 0;
          const max = data.caracteristiques[key]?.max || 6;
          const current = caracteristiques[key] || min;
          const invested = getPointsInvested(key);
          const canDecrease = current > min;
          const canIncrease = current < max && pointsRestants > 0;

          return (
            <div
              key={key}
              className="p-4 border-2 border-amber-200 rounded-lg bg-white hover:border-amber-400 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <h3 className="font-serif text-lg text-amber-900 font-semibold">
                      {label}
                    </h3>
                    <p className="text-xs text-amber-600">{description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-amber-700">
                  Limites: {min} - {max}
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleChange(key, -1)}
                    disabled={!canDecrease}
                    className={`p-2 rounded-lg transition-all ${
                      canDecrease
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={16} />
                  </button>

                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-bold text-amber-900">
                      {current}
                    </div>
                    {invested > 0 && (
                      <div className="text-xs text-green-600 font-semibold">
                        +{invested} {invested === 1 ? 'point' : 'points'}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleChange(key, 1)}
                    disabled={!canIncrease}
                    className={`p-2 rounded-lg transition-all ${
                      canIncrease
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Barre de progression */}
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-600 h-2 rounded-full transition-all"
                    style={{ width: `${((current - min) / (max - min)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {pointsRestants === 0 && (
        <div className="p-4 bg-green-100 border-2 border-green-400 rounded-lg text-center">
          <p className="text-green-800 font-serif text-lg">
            ✓ Tous les points ont été répartis !
          </p>
        </div>
      )}
    </div>
  );
}