// src/App.js
// Version: 3.7.5 (Moteur v3.7 + Design v2.5 Strict)
// Build: 2026-02-07 12:00
// Description: Restauration exacte du style visuel v2.5 demandé.

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { loadAllGameData } from '../utils/supabaseGameData';
import { getFairyAge } from '../data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from '../version';

// Imports des composants
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

// Utilitaires
import { saveCharacterToSupabase } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/utils';
import { List, Save, FileText, BookOpen, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

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

  // Chargement des données
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

  // Gestion Session
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

  // Sauvegarde
  const handleSave = async () => {
    if (isReadOnly) return;
    if (!character.nom.trim() || !character.sexe || !character.typeFee) {
      alert('Veuillez compléter les informations de base (Nom, Sexe, Type de Fée).');
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

  // Handlers Principaux
  const handleNomChange = (n) => !isReadOnly && setCharacter({ ...character, nom: n });
  const handleSexeChange = (s) => !isReadOnly && setCharacter({ ...character, sexe: s });
  const handleTypeFeeChange = (t) => {
    if (isReadOnly) return;
    const anciennete = getFairyAge(t, 'traditionnelle', gameData.fairyData);
    setCharacter({
      ...character,
      typeFee: t,
      anciennete,
      caracteristiques: {},
      capaciteChoisie: '',
      pouvoirs: [],
      competencesLibres: initialCharacterState.competencesLibres,
      competencesFutiles: initialCharacterState.competencesFutiles
    });
  };

  // Validations pour navigation (Moteur v3.5+)
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.mineur?.nom;
  const canProceedStep4 = () => true; // La validation se fait dans le composant visuellement
  const canProceedStep5 = () => true; 
  const canProceedStep6 = !!character.capaciteChoisie;
  const canProceedStep7 = character.pouvoirs.length === 3;

  // Affichages conditionnels (Loading / Auth)
  if (gameDataLoading || loading) return <div className="p-20 text-center font-serif text-amber-900">Chargement de la Féérie...</div>;
  if (!session) return <Auth />;

  // Vue Changelog
  if (view === 'changelog') return <Changelog onBack={() => setView('list')} />;

  // Vue Liste (Moteur v3.7 avec gestion ReadOnly)
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

  // --- RENDU PRINCIPAL (DESIGN STYLE V2.5) ---
  return (
    <div className="min-h-screen bg-amber-50 p-8 font-sans text-gray-800">
      
      {/* HEADER v2.5 : Simple et Blanc */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="font-serif text-4xl text-amber-900 flex items-center gap-2">
            Les Héritiers
            {isReadOnly && <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded uppercase font-sans tracking-widest border">Lecture Seule</span>}
          </h1>
          <p className="text-amber-700 italic mt-1 text-sm">Belle Époque • Paris | v{APP_VERSION}</p>
        </div>
        
        {/* Barre d'actions v2.5 */}
        <div className="flex gap-3">
          <button onClick={() => setView('list')} className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif">
            <List size={18} /> Mes personnages
          </button>
          <button onClick={() => setView('changelog')} className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-purple-300 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif">
            <BookOpen size={18} /> Changements
          </button>
          <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif">
            <FileText size={18} /> PDF
          </button>
          {!isReadOnly && (
            <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif">
              <Save size={18} /> Sauvegarder
            </button>
          )}
        </div>
      </div>

      {/* Notification v2.5 */}
      {showSaveNotification && (
        <div className="max-w-4xl mx-auto mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded shadow-sm flex items-center gap-3">
          <Save size={20} /> Personnage sauvegardé avec succès !
        </div>
      )}

      {/* BARRE DE PROGRESSION v2.5 (Cercles simples) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center relative px-4">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-100 -z-10 rounded"></div>
        {[1-8].map(s => (
          <button 
            key={s}
            onClick={() => setStep(s)}
            disabled={isReadOnly && s !== 8}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-all border-2 ${
              step === s 
                ? 'bg-amber-600 text-white border-amber-600 scale-110 shadow-lg' 
                : step > s 
                  ? 'bg-amber-400 text-white border-amber-400' 
                  : 'bg-white text-amber-300 border-amber-200'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* CONTENU PRINCIPAL (Sans gros conteneur ombré) */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl border border-amber-100 shadow-sm min-h-[400px]">
        {step === 1 && <Step1 character={character} onNomChange={handleNomChange} onSexeChange={handleSexeChange} onTypeFeeChange={handleTypeFeeChange} fairyTypesByAge={gameData.fairyTypesByAge} />}
        {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={(c) => !isReadOnly && setCharacter({...character, caracteristiques: c})} fairyData={gameData.fairyData} />}
        {step === 3 && <StepProfils character={character} onProfilsChange={(p) => !isReadOnly && setCharacter({...character, profils: p})} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
        {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(cl) => !isReadOnly && setCharacter({...character, competencesLibres: cl})} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
        {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(cf) => !isReadOnly && setCharacter({...character, competencesFutiles: cf})} fairyData={gameData.fairyData} />}
        {step === 6 && <Step2 character={character} onCapaciteChoice={(c) => !isReadOnly && setCharacter({...character, capaciteChoisie: c})} fairyData={gameData.fairyData} />}
        {step === 7 && <Step3 character={character} onPouvoirToggle={(p) => {
            if (isReadOnly) return;
            const current = character.pouvoirs || [];
            const exists = current.includes(p);
            let newPouvoirs = exists ? current.filter(x => x !== p) : (current.length < 3 ? [...current, p] : current);
            setCharacter({...character, pouvoirs: newPouvoirs});
        }} fairyData={gameData.fairyData} />}
        {step === 8 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}
      </div>

      {/* NAVIGATION BASSE v2.5 */}
      <div className="max-w-4xl mx-auto mt-8 flex justify-between">
        <button 
          onClick={() => setStep(step - 1)} 
          disabled={step === 1} 
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-serif transition-all ${
            step === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-amber-200 text-amber-800 hover:bg-amber-50'
          }`}
        >
          <ChevronLeft size={20} /> Précédent
        </button>
        
        {isReadOnly ? (
          <button 
            onClick={() => step === 8 ? setView('list') : setStep(step + 1)}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-serif"
          >
            {step === 8 ? 'Retour liste' : 'Suivant (Lecture)'} <ChevronRight size={20} />
          </button>
        ) : (
          <button 
            onClick={() => step === 8 ? handleSave() : setStep(step + 1)} 
            disabled={
              (step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || 
              (step === 3 && !canProceedStep3) || (step === 4 && !canProceedStep4()) ||
              (step === 5 && !canProceedStep5()) || (step === 6 && !canProceedStep6) ||
              (step === 7 && !canProceedStep7)
            }
            className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-md disabled:bg-gray-300 font-serif"
          >
            {step === 8 ? 'Terminer' : 'Suivant'} <ChevronRight size={20} />
          </button>
        )}
      </div>

      <p className="text-center mt-12 text-amber-900/30 text-xs font-serif">
        Les Héritiers • Système 3D • {BUILD_DATE}
      </p>
    </div>
  );
}

export default App;