// src/App.js
// Version: 3.4.0
// Build: 2026-02-04 17:00
// Migration: Validation Step 4 (Choix Predilection + Points) et initialisation structurelle.

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Save, List, FileText, BookOpen, Database } from 'lucide-react';
import { supabase } from '../config/supabase';
import { loadAllGameData } from '../utils/supabaseGameData';
import { getFairyAge } from '../data/dataHelpers';
import { APP_VERSION, BUILD_DATE, VERSION_HISTORY } from '../version';

import Step1 from './Step1';
import StepCaracteristiques from './StepCaracteristiques';
import StepProfils from './StepProfils';
import StepCompetencesLibres from './StepCompetencesLibres';
import StepCompetencesFutiles from './StepCompetencesFutiles';
import Step2 from './Step2'; // Choix de capacité
import Step3 from './Step3'; // Choix de pouvoirs
import StepRecapitulatif from './StepRecapitulatif';
import CharacterList from './CharacterList';
import Auth from './Auth';
import DataEditor from './DataEditor';
import ValidationsPendantes from './ValidationsPendantes';

import { saveCharacterToSupabase, exportToPDF } from '../utils/utils';
import { registerServiceWorker, checkForUpdates } from '../utils/notificationSystem';

function CharacterCreator() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  const [view, setView] = useState('list');
  const [step, setStep] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);
  const ADMIN_EMAIL = 'amaranthe@free.fr';

  const [gameData, setGameData] = useState({
    profils: [],
    competences: {},
    competencesParProfil: {},
    competencesFutiles: [],
    fairyData: {},
    fairyTypes: [],
    fairyTypesByAge: { traditionnelles: [], modernes: [] }
  });

  // ============================================================================
  // ÉTAT INITIAL DU PERSONNAGE (STRUCTURE V3.4.0)
  // ============================================================================
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
      rangs: {},              // Les 15 points investis
      choixPredilection: {},  // Ex: { 2: "Mêlée" }
      choixSpecialite: {}     // Ex: { 1: "Explosifs" }
    },
    competencesFutiles: {
      rangs: {},
      choixPredilection: {},
      personnalisees: []
    },
    capaciteChoisie: '',
    pouvoirs: [],
    isPublic: false,
    createdAt: new Date().toISOString()
  };

  const [character, setCharacter] = useState(initialCharacterState);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  // ============================================================================
  // CHARGEMENT DES DONNÉES ET AUTH
  // ============================================================================

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
      if (session?.user?.email === ADMIN_EMAIL) setIsAdmin(true);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  // ============================================================================
  // GESTIONNAIRES D'ÉVÉNEMENTS
  // ============================================================================

  const handleNewCharacter = () => {
    setCharacter(initialCharacterState);
    setStep(1);
    setView('creator');
  };

  const handleTypeFeeChange = (typeFee) => {
    const anciennete = getFairyAge(typeFee);
    const feeData = gameData.fairyData[typeFee];
    const caracteristiques = {};
    if (feeData?.caracteristiques) {
      Object.keys(feeData.caracteristiques).forEach(key => {
        caracteristiques[key] = feeData.caracteristiques[key].min;
      });
    }
    // Reset partiel pour éviter les conflits de prédilections entre espèces
    setCharacter({
      ...character,
      typeFee,
      anciennete,
      caracteristiques,
      competencesLibres: initialCharacterState.competencesLibres,
      capaciteChoisie: '',
      pouvoirs: []
    });
  };

  const handleSave = async () => {
    if (!character.nom.trim()) {
      alert('Veuillez donner un nom à votre personnage');
      return;
    }
    try {
      const savedChar = await saveCharacterToSupabase(character);
      setCharacter({ ...character, id: savedChar.id });
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
    } catch (error) {
      alert('Erreur sauvegarde: ' + error.message);
    }
  };

  // ============================================================================
  // LOGIQUE DE VALIDATION (RULES ENGINE)
  // ============================================================================

  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.mineur?.nom;

  /**
   * Validation Step 4 : 15 points dépensés + tous les choix de prédilection faits.
   */
  const canProceedStep4 = () => {
    const lib = character.competencesLibres || {};
    const pointsDepenses = Object.values(lib.rangs || {}).reduce((sum, val) => sum + val, 0);
    
    const feeData = gameData.fairyData[character.typeFee];
    const predOK = feeData?.competencesPredilection?.every((c, i) => {
      const compOK = !c.isChoix || lib.choixPredilection?.[i];
      const specOK = !c.isSpecialiteChoix || lib.choixSpecialite?.[i];
      return compOK && specOK;
    }) ?? true;

    return pointsDepenses === 15 && predOK;
  };

  const canProceedStep5 = () => {
    const pointsDepenses = Object.values(character.competencesFutiles?.rangs || {}).reduce((sum, r) => sum + r, 0);
    return pointsDepenses === 10;
  };

  // ============================================================================
  // RENDU PRINCIPAL
  // ============================================================================

  if (gameDataLoading || loading) return <div className="p-20 text-center">Chargement...</div>;
  if (!session) return <Auth />;
  if (view === 'list') return <CharacterList onSelectCharacter={(c) => { setCharacter(c); setView('creator'); }} onNewCharacter={handleNewCharacter} onSignOut={() => supabase.auth.signOut()} />;

  return (
    <div className="min-h-screen bg-amber-50 pb-20">
      {/* Header & Barre d'actions */}
      <header className="bg-amber-900 text-white p-4 shadow-lg flex justify-between items-center">
        <h1 className="font-serif text-2xl">Les Héritiers</h1>
        <div className="flex gap-2">
          <button onClick={() => setView('list')} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 flex items-center gap-2">
            <List size={18} /> Mes personnages
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 flex items-center gap-2">
            <Save size={18} /> Sauvegarder
          </button>
          <button onClick={() => exportToPDF(character, gameData.fairyData)} className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <FileText size={18} /> PDF
          </button>
        </div>
      </header>

      {/* Barre de progression [1] */}
      <div className="max-w-5xl mx-auto px-4 mt-8 flex items-center justify-between">
        {[2-9].map(s => (
          <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-serif ${step === s ? 'bg-amber-600 text-white ring-4 ring-amber-200' : step > s ? 'bg-amber-400 text-white' : 'bg-white text-amber-900 border-2 border-amber-200'}`}>
            {s}
          </div>
        ))}
      </div>

      {/* Contenu des Étapes [10-12] */}
      <main className="max-w-5xl mx-auto px-4 mt-10 bg-white p-8 rounded-2xl shadow-xl border border-amber-100">
        {step === 1 && <Step1 character={character} onNomChange={(nom) => setCharacter({...character, nom})} onSexeChange={(sexe) => setCharacter({...character, sexe})} onTypeFeeChange={handleTypeFeeChange} fairyTypesByAge={gameData.fairyTypesByAge} />}
        {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={(caracteristiques) => setCharacter({...character, caracteristiques})} fairyData={gameData.fairyData} />}
        {step === 3 && <StepProfils character={character} onProfilsChange={(profils) => setCharacter({...character, profils})} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
        {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(c) => setCharacter({...character, competencesLibres: c})} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
        {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(f) => setCharacter({...character, competencesFutiles: f})} fairyData={gameData.fairyData} />}
        {step === 6 && <Step2 character={character} onCapaciteChoice={(cap) => setCharacter({...character, capaciteChoisie: cap})} fairyData={gameData.fairyData} />}
        {step === 7 && <Step3 character={character} onPouvoirToggle={(p) => setCharacter({...character, pouvoirs: character.pouvoirs.includes(p) ? character.pouvoirs.filter(x => x !== p) : [...character.pouvoirs, p]})} fairyData={gameData.fairyData} />}
        {step === 8 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competencesParProfil={gameData.competencesParProfil} />}
      </main>

      {/* Navigation Bas de Page [12, 13] */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-amber-100 flex justify-center gap-10 shadow-2xl">
        <button onClick={() => setStep(step - 1)} disabled={step === 1} className="px-8 py-3 bg-gray-200 text-gray-600 rounded-xl disabled:opacity-50 flex items-center gap-2 font-serif">
          <ChevronLeft /> Précédent
        </button>
        <button 
          onClick={() => step === 8 ? handleSave() : setStep(step + 1)} 
          disabled={
            (step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || 
            (step === 3 && !canProceedStep3) || (step === 4 && !canProceedStep4()) ||
            (step === 5 && !canProceedStep5()) || (step === 6 && !character.capaciteChoisie) ||
            (step === 7 && character.pouvoirs.length !== 3)
          }
          className="px-8 py-3 bg-amber-600 text-white rounded-xl disabled:bg-gray-300 font-serif flex items-center gap-2"
        >
          {step === 8 ? 'Terminer' : 'Suivant'} <ChevronRight />
        </button>
      </footer>
    </div>
  );
}

export default CharacterCreator;