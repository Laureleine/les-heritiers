// src/App.js
// Version: 3.7.0
// Build: 2026-02-07 10:00
// Description: Restauration du style visuel "Classic" (v3.0) sans le gros bandeau marron, tout en gardant les fonctionnalités v3.6.

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Save, List, FileText, BookOpen, Eye } from 'lucide-react';
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
import Changelog from './Changelog';
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
  
  const [isReadOnly, setIsReadOnly] = useState(false);

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
      majeur: { nom: '', trait: '', competences: [] }, 
      mineur: { nom: '', trait: '', competences: [] } 
    },
    competencesLibres: { 
      rangs: {}, 
      choixPredilection: {}, 
      choixSpecialite: {},
      choixSpecialiteUser: {}
    },
    competencesFutiles: { 
      rangs: {}, 
      choixPredilection: {}, 
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
    if (isReadOnly) return;

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

  // Handlers
  const handleNomChange = (nom) => !isReadOnly && setCharacter({ ...character, nom });
  const handleSexeChange = (sexe) => !isReadOnly && setCharacter({ ...character, sexe });
  
  const handleTypeFeeChange = (typeFee) => {
    if (isReadOnly) return;
    const anciennete = getFairyAge(typeFee, 'traditionnelle', gameData.fairyData);
    setCharacter({
      ...character,
      typeFee,
      anciennete,
      caracteristiques: {},
      capaciteChoisie: '',
      pouvoirs: [],
      competencesLibres: { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} },
      competencesFutiles: { rangs: {}, choixPredilection: {}, personnalisees: [] }
    });
  };

  const handleCaracteristiquesChange = (c) => !isReadOnly && setCharacter({...character, caracteristiques: c});
  const handleProfilsChange = (p) => !isReadOnly && setCharacter({...character, profils: p});
  const handleCompetencesLibresChange = (cl) => !isReadOnly && setCharacter({...character, competencesLibres: cl});
  const handleCompetencesFutilesChange = (cf) => !isReadOnly && setCharacter({...character, competencesFutiles: cf});
  const handleCapaciteChoice = (c) => !isReadOnly && setCharacter({...character, capaciteChoisie: c});
  const handlePouvoirToggle = (p) => {
    if (isReadOnly) return;
    const current = character.pouvoirs || [];
    const exists = current.includes(p);
    let newPouvoirs;
    if (exists) {
      newPouvoirs = current.filter(x => x !== p);
    } else {
      if (current.length >= 3) return;
      newPouvoirs = [...current, p];
    }
    setCharacter({...character, pouvoirs: newPouvoirs});
  };

  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.mineur?.nom;
  const canProceedStep4 = () => true;
  const canProceedStep5 = () => true; 

  if (gameDataLoading || loading) return <div className="p-20 text-center font-serif text-amber-900">Chargement de la Féérie...</div>;
  if (!session) return <Auth />;

  if (view === 'changelog') return <Changelog onBack={() => setView('list')} />;

  if (view === 'list') return (
    <CharacterList 
      onSelectCharacter={(c, readOnlyMode = false) => { 
        setCharacter(c); 
        setIsReadOnly(readOnlyMode);
        setStep(readOnlyMode ? 8 : 1); 
        setView('creator'); 
      }} 
      onNewCharacter={() => { 
        setCharacter(initialCharacterState); 
        setIsReadOnly(false);
        setStep(1); 
        setView('creator'); 
      }} 
      onSignOut={() => supabase.auth.signOut()} 
    />
  );

  return (
    <div className="min-h-screen bg-amber-50 p-6 font-sans text-gray-800">
      
      {/* HEADER CLASSIQUE (Retour au style précédent) */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="font-serif text-4xl text-amber-900 flex items-center gap-3">
            Les Héritiers
            {isReadOnly && <span className="text-xs bg-amber-200 text-amber-900 px-2 py-1 rounded uppercase tracking-widest border border-amber-300">Lecture Seule</span>}
          </h1>
          <p className="text-amber-700 italic mt-1 text-sm">Créateur de Faux-Semblants • v{APP_VERSION}</p>
        </div>
        
        <div className="flex gap-2">
          <button onClick={() => setView('list')} className="flex items-center gap-2 px-4 py-2 bg-white text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-50 font-serif shadow-sm">
            <List size={16} /> Liste
          </button>
          <button onClick={() => setView('changelog')} className="flex items-center gap-2 px-4 py-2 bg-white text-purple-900 border border-purple-300 rounded-lg hover:bg-purple-50 font-serif shadow-sm">
            <BookOpen size={16} />
          </button>
          <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-serif shadow-sm">
            <FileText size={16} /> PDF
          </button>
          {!isReadOnly && (
            <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-serif shadow-md">
              <Save size={16} /> Sauver
            </button>
          )}
        </div>
      </div>

      {showSaveNotification && (
        <div className="max-w-5xl mx-auto mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 shadow-sm">
          <Save size={20} /> Personnage sauvegardé avec succès !
        </div>
      )}

      {/* BARRE DE PROGRESSION FLOTTANTE */}
      <div className="max-w-3xl mx-auto mb-8 flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-200 -z-10 rounded"></div>
        {[1-8].map(s => (
          <button 
            key={s}
            onClick={() => setStep(s)}
            disabled={isReadOnly && s !== 8}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-all border-4 ${
              step === s 
                ? 'bg-amber-600 text-white border-amber-100 scale-110 shadow-lg' 
                : step > s 
                  ? 'bg-amber-400 text-white border-amber-50' 
                  : 'bg-white text-amber-300 border-amber-100'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* CONTENEUR PRINCIPAL */}
      <main className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-amber-100 min-h-[500px]">
        {step === 1 && <Step1 character={character} onNomChange={handleNomChange} onSexeChange={handleSexeChange} onTypeFeeChange={handleTypeFeeChange} fairyTypesByAge={gameData.fairyTypesByAge} />}
        {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={handleCaracteristiquesChange} fairyData={gameData.fairyData} />}
        {step === 3 && <StepProfils character={character} onProfilsChange={handleProfilsChange} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
        {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={handleCompetencesLibresChange} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
        {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={handleCompetencesFutilesChange} fairyData={gameData.fairyData} />}
        {step === 6 && <Step2 character={character} onCapaciteChoice={handleCapaciteChoice} fairyData={gameData.fairyData} />}
        {step === 7 && <Step3 character={character} onPouvoirToggle={handlePouvoirToggle} fairyData={gameData.fairyData} />}
        {step === 8 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}
      </main>

      {/* NAVIGATION BASSE */}
      <div className="max-w-5xl mx-auto mt-8 flex justify-between">
        <button 
          onClick={() => setStep(step - 1)} 
          disabled={step === 1} 
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-serif transition-all ${step === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-amber-50 border border-amber-200 shadow-sm'}`}
        >
          <ChevronLeft size={20} /> Précédent
        </button>
        
        {isReadOnly ? (
          <button 
            onClick={() => step === 8 ? setView('list') : setStep(step + 1)}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg font-serif"
          >
            {step === 8 ? 'Retour liste' : 'Suivant (Lecture)'} <ChevronRight size={20} />
          </button>
        ) : (
          <button 
            onClick={() => step === 8 ? handleSave() : setStep(step + 1)} 
            disabled={
              (step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || 
              (step === 3 && !canProceedStep3) || (step === 4 && !canProceedStep4()) ||
              (step === 5 && !canProceedStep5()) || (step === 6 && !character.capaciteChoisie) ||
              (step === 7 && character.pouvoirs.length !== 3)
            }
            className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 shadow-lg disabled:bg-gray-300 font-serif"
          >
            {step === 8 ? 'Terminer' : 'Suivant'} <ChevronRight size={20} />
          </button>
        )}
      </div>

      <p className="text-center mt-12 text-amber-900/30 text-xs font-serif uppercase tracking-widest">
        Les Héritiers • Système 3D • {BUILD_DATE}
      </p>
    </div>
  );
}

export default App;