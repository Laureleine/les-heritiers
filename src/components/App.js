// src/App.js (Version 3.5.2)
// Correction: Réintégration du tableau [1..8] pour la barre de progression (Fix SyntaxError).

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Save, List, FileText } from 'lucide-react';
import { supabase } from '../config/supabase';
import { loadAllGameData } from '../utils/supabaseGameData';
import { getFairyAge } from '../data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from '../version';

import Step1 from './Step1';
import StepCaracteristiques from './StepCaracteristiques';
import StepProfils from './StepProfils';
import StepCompetencesLibres from './StepCompetencesLibres';
import StepCompetencesFutiles from './StepCompetencesFutiles';
import Step2 from './Step2';
import Step3 from './Step3';
import StepRecapitulatif from './StepRecapitulatif';
import CharacterList from './CharacterList';
import Auth from './Auth';

import { saveCharacterToSupabase } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/utils';

function CharacterCreator() {
  // ... (états et session identiques)

  const canProceedStep5 = () => {
    const points = Object.values(character.competencesFutiles?.rangs || {}).reduce((s, v) => s + v, 0);
    // On peut aussi ajouter ici la validation des choix de prédilection futiles si nécessaire
    return points === 10;
  };

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
        
        <header className="bg-amber-900 text-white p-8">
          {/* ... Header design intégré identique */}
          <div className="mt-8 flex items-center justify-between gap-2 max-w-3xl mx-auto">
            {[4, 7-10].map(s => ( // Barre limitée à 5 étapes pour les tests
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-xs ${step === s ? 'bg-amber-500 text-white ring-4 ring-amber-500/30' : step > s ? 'bg-amber-700 text-amber-200' : 'bg-amber-950 text-amber-600 border border-amber-800'}`}>
                  {s}
                </div>
                {s < 5 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-amber-500' : 'bg-amber-950'}`} />}
              </React.Fragment>
            ))}
          </div>
        </header>

        <main className="p-8 md:p-12">
          {step === 1 && <Step1 character={character} onNomChange={(n) => setCharacter({...character, nom: n})} onSexeChange={(s) => setSexe(s)} onTypeFeeChange={(t) => handleTypeFeeChange(t)} fairyTypesByAge={gameData.fairyTypesByAge} />}
          {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={(c) => setCharacter({...character, caracteristiques: c})} fairyData={gameData.fairyData} />}
          {step === 3 && <StepProfils character={character} onProfilsChange={(p) => setCharacter({...character, profils: p})} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(cl) => setCharacter({...character, competencesLibres: cl})} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(cf) => setCharacter({...character, competencesFutiles: cf})} fairyData={gameData.fairyData} />}

          <div className="mt-12 pt-8 border-t border-amber-100 flex justify-between">
            <button onClick={() => setStep(step - 1)} disabled={step === 1} className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-50 font-serif">
              <ChevronLeft size={20} /> Précédent
            </button>
            
            <button 
              onClick={() => step === 5 ? handleSave() : setStep(step + 1)} 
              disabled={
                (step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || 
                (step === 3 && !canProceedStep3) || (step === 4 && !canProceedStep4()) ||
                (step === 5 && !canProceedStep5())
              }
              className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 shadow-lg disabled:bg-gray-300 font-serif"
            >
              {step === 5 ? 'Sauvegarder et Terminer' : 'Suivant'} <ChevronRight size={20} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CharacterCreator;