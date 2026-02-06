// src/App.js
// Version: 3.5.4
// Build: 2026-02-06 23:33
// Adaptation: Design complet de la v2.15.0 avec spécialités + structure v3.5.4

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Save, List, FileText, BookOpen } from 'lucide-react';
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

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  const [view, setView] = useState('list');
  const [step, setStep] = useState(1);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  
  const [gameData, setGameData] = useState({
    profils: [],
    competences: {},
    competencesParProfil: {},
    competencesFutiles: [],
    fairyData: {},
    fairyTypes: [],
    fairyTypesByAge: { traditionnelles: [], modernes: [] }
  });

  const initialCharacterState = {
    id: null,
    nom: '',
    sexe: '',
    typeFee: '',
    anciennete: null,
    caracteristiques: {},
    profils: {
      majeur: { nom: '', trait: '' },
      mineur: { nom: '', trait: '' }
    },
    competencesLibres: {},
    competencesFutiles: {
      rangs: {},
      personnalisees: []
    },
    capaciteChoisie: '',
    pouvoirs: [],
    isPublic: false
  };

  const [character, setCharacter] = useState(initialCharacterState);

  useEffect(() => {
    const loadData = async () => {
      try {
        setGameDataLoading(true);
        const data = await loadAllGameData();
        setGameData(data);
      } catch (error) {
        console.error('Erreur chargement données:', error);
      } finally {
        setGameDataLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSave = async () => {
    if (!character.nom.trim()) {
      alert('Veuillez donner un nom à votre personnage');
      return;
    }
    if (!character.sexe || !character.typeFee) {
      alert('Veuillez compléter au moins le sexe et le type de fée');
      return;
    }

    try {
      const saved = await saveCharacterToSupabase(character);
      setCharacter({ ...character, id: saved.id });
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
    } catch (e) {
      alert('Erreur lors de la sauvegarde : ' + e.message);
    }
  };

  // Handlers individuels pour compatibilité composants v2.15
  const handleNomChange = (nom) => setCharacter({ ...character, nom });
  const handleSexeChange = (sexe) => setCharacter({ ...character, sexe });
  const handleTypeFeeChange = (typeFee) => {
    const anciennete = getFairyAge(typeFee, 'traditionnelle', gameData.fairyData);
    const feeData = gameData.fairyData[typeFee];
    const caracteristiques = {};
    if (feeData?.caracteristiques) {
      Object.keys(feeData.caracteristiques).forEach(key => {
        caracteristiques[key] = feeData.caracteristiques[key].min;
      });
    }
    setCharacter({ 
      ...character, 
      typeFee, 
      anciennete, 
      caracteristiques, 
      capaciteChoisie: '', 
      pouvoirs: [] 
    });
  };
  const handleCaracteristiquesChange = (caracteristiques) => 
    setCharacter({ ...character, caracteristiques });
  const handleProfilsChange = (profils) => 
    setCharacter({ ...character, profils });
  const handleCompetencesLibresChange = (competencesLibres) => 
    setCharacter({ ...character, competencesLibres });
  const handleCompetencesFutilesChange = (competencesFutiles) => 
    setCharacter({ ...character, competencesFutiles });
  const handleCapaciteChoice = (capacite) => 
    setCharacter({ ...character, capaciteChoisie: capacite });
  const handlePouvoirToggle = (pouvoir) => {
    const pouvoirs = character.pouvoirs.includes(pouvoir)
      ? character.pouvoirs.filter(p => p !== pouvoir)
      : character.pouvoirs.length < 3
      ? [...character.pouvoirs, pouvoir]
      : character.pouvoirs;
    setCharacter({ ...character, pouvoirs });
  };

  // Validations v2.15 avec support spécialités
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.majeur?.trait && 
                          character.profils?.mineur?.nom && character.profils?.mineur?.trait;
  
  const canProceedStep4 = () => {
    const pointsDepenses = Object.entries(character.competencesLibres || {}).reduce((sum, [comp, data]) => {
      let points = data.rangsSupplementaires || 0;
      if (data.specialites) points += data.specialites.length;
      return sum + points;
    }, 0);
    return pointsDepenses === 15;
  };
  
  const canProceedStep5 = () => {
    const pointsDepenses = Object.values(character.competencesFutiles?.rangs || {}).reduce((sum, rangs) => sum + rangs, 0);
    return pointsDepenses === 10;
  };
  
  const canProceedStep6 = character.capaciteChoisie;
  const canProceedStep7 = character.pouvoirs.length === 3;

  if (gameDataLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-900 mx-auto mb-4"></div>
          <div className="text-2xl font-serif text-amber-900">Chargement des données du jeu...</div>
          <div className="text-sm text-amber-700 mt-2">Profils, Compétences, Types de Fées</div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-2xl font-serif text-amber-900">Chargement...</div>
      </div>
    );
  }

  if (!session) return <Auth />;

  if (view === 'list') {
    return (
      <CharacterList 
        onSelectCharacter={(c) => {
          setCharacter(c);
          setStep(1);
          setView('creator');
        }}
        onNewCharacter={() => {
          setCharacter(initialCharacterState);
          setStep(1);
          setView('creator');
        }}
        onSignOut={() => supabase.auth.signOut()}
      />
    );
  }

  // DESIGN COMPLET v2.15.0
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header v2.15 */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-2">Les Héritiers</h1>
          <p className="text-xl text-amber-700 italic">Belle Époque • Paris</p>
          <div className="mt-3 text-sm text-amber-600">
            <span>Version {APP_VERSION}</span>
            <span className="mx-2">•</span>
            <span>{BUILD_DATE}</span>
          </div>
        </header>

        {/* Barre d'actions v2.15 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setView('list')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif"
            >
              <List size={20} />
              <span>Mes personnages</span>
            </button>
            <button
              onClick={() => {/* setView('changelog') */}}
              className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-purple-300 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif"
            >
              <BookOpen size={20} />
              <span>Changements</span>
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => exportToPDF(character, gameData.fairyData)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif"
              title="Exporter en PDF"
            >
              <FileText size={20} />
              <span>PDF</span>
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif"
            >
              <Save size={20} />
              <span>Sauvegarder</span>
            </button>
          </div>
        </div>

        {/* Notification v2.15 */}
        {showSaveNotification && (
          <div className="mb-4 p-4 bg-green-100 border-2 border-green-400 rounded-lg text-green-800 text-center font-serif">
            ✓ Personnage sauvegardé avec succès !
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-4 border-amber-200">
          {/* Barre de progression v2.15 avec spécialités support */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                  <React.Fragment key={s}>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-xs ${
                        step === s
                          ? 'bg-amber-600 text-white'
                          : step > s
                          ? 'bg-amber-400 text-white'
                          : 'bg-amber-100 text-amber-600'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 8 && (
                      <div
                        className={`flex-1 h-1 ${
                          step > s ? 'bg-amber-400' : 'bg-amber-100'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Étapes avec handlers v2.15 */}
          <div className="mb-8">
            {step === 1 && (
              <Step1
                character={character}
                onNomChange={handleNomChange}
                onSexeChange={handleSexeChange}
                onTypeFeeChange={handleTypeFeeChange}
                fairyTypes={gameData.fairyTypes}
                fairyTypesByAge={gameData.fairyTypesByAge}
              />
            )}
            {step === 2 && (
              <StepCaracteristiques
                character={character}
                onCaracteristiquesChange={handleCaracteristiquesChange}
                fairyData={gameData.fairyData}
              />
            )}
            {step === 3 && (
              <StepProfils
                character={character}
                onProfilsChange={handleProfilsChange}
                profils={gameData.profils}
                competencesParProfil={gameData.competencesParProfil}
              />
            )}
            {step === 4 && (
              <StepCompetencesLibres
                character={character}
                onCompetencesLibresChange={handleCompetencesLibresChange}
                profils={gameData.profils}
                fairyData={gameData.fairyData}
                competences={gameData.competences}
                competencesParProfil={gameData.competencesParProfil}
              />
            )}
            {step === 5 && (
              <StepCompetencesFutiles
                character={character}
                onCompetencesFutilesChange={handleCompetencesFutilesChange}
                fairyData={gameData.fairyData}
              />
            )}
            {step === 6 && (
              <Step2
                character={character}
                onCapaciteChoice={handleCapaciteChoice}
                fairyData={gameData.fairyData}
              />
            )}
            {step === 7 && (
              <Step3
                character={character}
                onPouvoirToggle={handlePouvoirToggle}
                fairyData={gameData.fairyData}
              />
            )}
            {step === 8 && (
              <StepRecapitulatif
                character={character}
                fairyData={gameData.fairyData}
                competences={gameData.competences}
              />
            )}
          </div>

          {/* Navigation v2.15 */}
          <div className="flex justify-between items-center pt-6 border-t-2 border-amber-200">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all ${
                step === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              <ChevronLeft size={20} />
              <span>Précédent</span>
            </button>

            <button
              onClick={() => {
                if (step === 8) {
                  handleSave();
                  setView('list');
                } else {
                  setStep(step + 1);
                }
              }}
              disabled={
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2) ||
                (step === 3 && !canProceedStep3) ||
                (step === 4 && !canProceedStep4()) ||
                (step === 5 && !canProceedStep5()) ||
                (step === 6 && !canProceedStep6) ||
                (step === 7 && !canProceedStep7)
              }
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all ${
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2) ||
                (step === 3 && !canProceedStep3) ||
                (step === 4 && !canProceedStep4()) ||
                (step === 5 && !canProceedStep5()) ||
                (step === 6 && !canProceedStep6) ||
                (step === 7 && !canProceedStep7)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              <span>{step === 8 ? 'Sauvegarder et Terminer' : 'Suivant'}</span>
              {step === 8 ? <Save size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
