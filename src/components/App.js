// src/App.js
// Adaptation: Intégration Lecture Seule, Admin View et Changelog actif.

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
import Changelog from './Changelog'; // Nouveau composant
import Auth from './Auth';

import { saveCharacterToSupabase } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/utils';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list', 'creator', 'changelog'
  const [step, setStep] = useState(1);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  
  // Nouvel état pour gérer la lecture seule (Public / Admin)
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
    if (isReadOnly) return; // Sécurité

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
    // Réinitialisation partielle lors du changement de fée
    setCharacter({
      ...character,
      typeFee,
      anciennete,
      caracteristiques: {}, // Reset caracs car min/max changent
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
      if (current.length >= 3) return; // Max 3
      newPouvoirs = [...current, p];
    }
    setCharacter({...character, pouvoirs: newPouvoirs});
  };

  // Validation
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.mineur?.nom;
  const canProceedStep4 = () => {
    // Validation simplifiée pour UX fluide, le composant gère les budgets
    return true; 
  };
  const canProceedStep5 = () => true; 

  if (gameDataLoading || loading) return <div className="p-20 text-center font-serif text-amber-900">Chargement de la Féérie...</div>;
  if (!session) return <Auth />;

  // Vue Changelog
  if (view === 'changelog') return <Changelog onBack={() => setView('list')} />;

  // Vue Liste des personnages
  if (view === 'list') return (
    <CharacterList 
      onSelectCharacter={(c, readOnlyMode = false) => { 
        setCharacter(c); 
        setIsReadOnly(readOnlyMode);
        // Si lecture seule, on va directement au récapitulatif (Step 8) pour une vue d'ensemble propre
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
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
        
        {/* HEADER */}
        <header className="bg-amber-900 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="font-serif text-4xl flex items-center gap-3">
                Les Héritiers
                {isReadOnly && (
                  <span className="text-xs bg-amber-700 border border-amber-500 px-2 py-1 rounded uppercase tracking-widest flex items-center gap-1">
                    <Eye size={12} /> Lecture Seule
                  </span>
                )}
              </h1>
              <p className="text-amber-200 italic mt-1 text-sm">Belle Époque • Paris | v{APP_VERSION}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setView('list')} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all font-serif text-sm border border-white/20">
                <List size={16} /> Mes personnages
              </button>
              
              {/* Bouton Changements ACTIF */}
              <button onClick={() => setView('changelog')} className="flex items-center gap-2 px-4 py-2 bg-purple-900/50 rounded-lg hover:bg-purple-900 transition-all font-serif text-sm border border-purple-500/30">
                <BookOpen size={16} /> Changements
              </button>

              <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 font-serif text-sm">
                <FileText size={16} /> PDF
              </button>
              
              {/* Sauvegarde masquée en lecture seule */}
              {!isReadOnly && (
                <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 shadow-lg font-serif text-sm">
                  <Save size={16} /> Sauvegarder
                </button>
              )}
            </div>
          </div>

          {/* BARRE DE PROGRESSION */}
          <div className="mt-8 flex items-center justify-between gap-2 max-w-3xl mx-auto">
            {[1-8].map(s => (
              <React.Fragment key={s}>
                <button 
                  onClick={() => setStep(s)}
                  disabled={isReadOnly && s !== 8} // En lecture seule, on favorise le récap (8), mais on laisse libre si besoin
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-xs transition-all
                    ${step === s ? 'bg-amber-500 text-white ring-4 ring-amber-500/30 scale-110' : 
                      step > s ? 'bg-amber-700 text-amber-200' : 
                      'bg-amber-950 text-amber-600 border border-amber-800'}
                  `}
                >
                  {s}
                </button>
                {s < 8 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-amber-500' : 'bg-amber-950'}`} />}
              </React.Fragment>
            ))}
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="p-8 md:p-12">
          {showSaveNotification && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <Save size={20} /> Personnage sauvegardé avec succès
            </div>
          )}

          {step === 1 && <Step1 character={character} onNomChange={handleNomChange} onSexeChange={handleSexeChange} onTypeFeeChange={handleTypeFeeChange} fairyTypesByAge={gameData.fairyTypesByAge} />}
          {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={handleCaracteristiquesChange} fairyData={gameData.fairyData} />}
          {step === 3 && <StepProfils character={character} onProfilsChange={handleProfilsChange} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={handleCompetencesLibresChange} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={handleCompetencesFutilesChange} fairyData={gameData.fairyData} />}
          {step === 6 && <Step2 character={character} onCapaciteChoice={handleCapaciteChoice} fairyData={gameData.fairyData} />}
          {step === 7 && <Step3 character={character} onPouvoirToggle={handlePouvoirToggle} fairyData={gameData.fairyData} />}
          {step === 8 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}

          {/* NAVIGATION FOOTER */}
          <div className="mt-12 pt-8 border-t border-amber-100 flex justify-between">
            <button 
              onClick={() => setStep(step - 1)} 
              disabled={step === 1} 
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-serif transition-all ${step === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <ChevronLeft size={20} /> Précédent
            </button>
            
            {/* Bouton Suivant ou Retour selon mode */}
            {isReadOnly ? (
              <button 
                onClick={() => step === 8 ? setView('list') : setStep(step + 1)}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg font-serif"
              >
                {step === 8 ? 'Retour à la liste' : 'Suivant (Lecture)'} <ChevronRight size={20} />
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
                {step === 8 ? 'Terminer et Sauver' : 'Suivant'} <ChevronRight size={20} />
              </button>
            )}
          </div>
        </main>
      </div>
      <p className="text-center mt-6 text-amber-900/40 text-xs font-serif uppercase tracking-widest">
        Les Héritiers • Système 3D • Build {BUILD_DATE}
      </p>
    </div>
  );
}

export default App;