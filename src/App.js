// src/App.js
// Version: 4.6.0 (Barre de progression liée et espacée)

import React, { useState, useEffect } from 'react';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { getFairyAge } from './data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from './version';
import { saveCharacterToSupabase } from './utils/supabaseStorage';
import { exportToPDF } from './utils/utils';
import { useAutoUpdate } from './hooks/useAutoUpdate';

// --- IMPORTS DES COMPOSANTS ---
import Auth from './components/Auth';
import CharacterList from './components/CharacterList';
import AccountSettings from './components/AccountSettings';
import Encyclopedia from './components/Encyclopedia';
import Changelog from './components/Changelog';
import AdminUserList from './components/AdminUserList';
import ValidationsPendantes from './components/ValidationsPendantes';

// --- IMPORTS DES ÉTAPES ---
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import StepAtouts from './components/StepAtouts';
import StepCaracteristiques from './components/StepCaracteristiques';
import StepProfils from './components/StepProfils';
import StepCompetencesLibres from './components/StepCompetencesLibres';
import StepCompetencesFutiles from './components/StepCompetencesFutiles';
import StepVieSociale from './components/StepVieSociale';
import StepPersonnalisation from './components/StepPersonnalisation';
import StepRecapitulatif from './components/StepRecapitulatif';

// --- ICONS ---
import { Save, ChevronRight, List, BookOpen, FileText } from 'lucide-react';

function App() {
  // --- 1. ÉTATS GLOBAUX ---
  const [session, setSession] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState('Démarrage...');
  
  const [view, setView] = useState('list');
  const [step, setStep] = useState(1);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  // --- SYSTÈME DE MISE À JOUR AUTOMATIQUE ---
  const { updateAvailable, applyUpdate } = useAutoUpdate(60000);

  useEffect(() => {
    if (updateAvailable) {
      console.log("Nouvelle version détectée ! Déclenchement de la purge...");
      applyUpdate();
    }
  }, [updateAvailable, applyUpdate]);
  // ------------------------------------------
  
  // Données du jeu
  const [gameData, setGameData] = useState({
    profils: [],
    competences: {},
    competencesParProfil: {},
    competencesFutiles: [],
    fairyData: {},
    fairyTypes: [],
    fairyTypesByAge: { traditionnelles: [], modernes: [] }
  });

  // État initial
  const initialCharacterState = {
    id: null,
    nom: '', sexe: '', typeFee: '', anciennete: null,
    nomFeerique: '', genreHumain: '', taille: '', poids: '', apparence: '',
    traitsFeeriques: [],
    caracteristiques: {},
    profils: { majeur: { nom: '', trait: '', competences: [] }, mineur: { nom: '', trait: '', competences: [] } },
    competencesLibres: { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} },
    competencesFutiles: { rangs: {}, choixPredilection: {}, personnalisees: [] },
    capaciteChoisie: '',
    pouvoirs: [],
    vieSociale: {}, fortune: 0,
    atouts: [],
    isPublic: false
  };

  const [character, setCharacter] = useState(initialCharacterState);

 // --- 2. INITIALISATION ROBUSTE ---
  useEffect(() => {
    let mounted = true;

    // Timer de sécurité : Force l'affichage après 3s si le réseau est lent
    const safetyTimer = setTimeout(() => {
      if (mounted && globalLoading) {
        console.warn("⚠️ Délai d'attente dépassé. Forçage de l'interface.");
        setGlobalLoading(false);
      }
    }, 10000);

	const initializeApp = async () => {
	  try {
		setLoadingStep("Ouverture du Grimoire...");
		const data = await loadAllGameData();  // SEUL await nécessaire
		if (mounted) setGameData(data);
	  } catch (error) {
        if (error.name === 'AbortError' || error.message.includes('aborted')) {
          console.log("Initialisation interrompue - Ignoré.");
        } else {
          console.error("Erreur d'initialisation :", error);
        }
      } finally {
        if (mounted) {
          setGlobalLoading(false);
          clearTimeout(safetyTimer);
        }
      }
    };

    initializeApp();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      if (mounted) {
        setSession(newSession);
        if (newSession?.user) {
          try {
            const { data } = await supabase.from('profiles').select('*').eq('id', newSession.user.id).single();
            setUserProfile(data);
          } catch (error) {
            // On ignore l'erreur silencieuse liée au rechargement strict de React
            if (error.name !== 'AbortError' && !error.message?.includes('aborted')) {
              console.error("Erreur de profil dans onAuthStateChange :", error);
            }
          }
        } else {
          setUserProfile(null);
        }
      }
    });

    // C'est souvent cette partie qui a été effacée par erreur lors du collage !
    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
      subscription.unsubscribe();
    };
  }, []);

  // --- 3. HANDLERS ---
  const handleSave = async () => {
    if (isReadOnly) return;
    if (!character.nom.trim() || !character.sexe || !character.typeFee) {
      alert('Veuillez compléter les informations de base (Nom, Sexe, Type de Fée).');
      return;
    }
    try {
      const saved = await saveCharacterToSupabase(character);
      setCharacter(prev => ({ ...prev, id: saved.id }));
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
    } catch (e) {
      alert('Erreur sauvegarde : ' + e.message);
    }
  };

  const handleNomChange = (n) => !isReadOnly && setCharacter({ ...character, nom: n });
  const handleSexeChange = (s) => !isReadOnly && setCharacter({ ...character, sexe: s });
  const handleTypeFeeChange = (t) => {
    if (isReadOnly) return;
    const anciennete = getFairyAge(t, 'traditionnelle', gameData.fairyData);
    setCharacter({ ...initialCharacterState, nom: character.nom, sexe: character.sexe, typeFee: t, anciennete });
  };
  const handleCapaciteChoice = (c) => setCharacter({ ...character, capaciteChoisie: c });
  const handlePouvoirToggle = (pouvoir) => {
    const max = character.caracteristiques?.feerie || 3;
    const current = character.pouvoirs || [];
    if (current.includes(pouvoir)) setCharacter({ ...character, pouvoirs: current.filter(p => p !== pouvoir) });
    else if (current.length < max) setCharacter({ ...character, pouvoirs: [...current, pouvoir] });
  };
  const handleAtoutToggle = (atout) => {
    const current = character.atouts || [];
    if (current.includes(atout)) setCharacter({ ...character, atouts: current.filter(a => a !== atout) });
    else if (current.length < 2) setCharacter({ ...character, atouts: [...current, atout] });
  };

  // --- VALIDATIONS ---
  const canProceedStep1 = character.nom && character.sexe && character.typeFee;

  // --- RENDU ---
  if (globalLoading) return <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-amber-900 font-serif"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mb-4"></div><p className="text-lg animate-pulse">{loadingStep}</p></div>;
  if (!session) return <Auth />;
  if (view === 'encyclopedia') return <Encyclopedia userProfile={userProfile} onBack={() => setView('list')} onOpenValidations={() => setView('validations')} />;
  if (view === 'validations') return <ValidationsPendantes session={session} onBack={() => setView('encyclopedia')} />;
  if (view === 'account') return <AccountSettings session={session} onBack={() => setView('list')} />;
  if (view === 'changelog') return <Changelog onBack={() => setView('list')} />;
  if (view === 'admin_users') return <AdminUserList session={session} onBack={() => setView('list')} />;

  if (view === 'list') {
    return (
      <CharacterList
        session={session}
        userProfile={userProfile}
        profils={gameData.profils}
        onSelectCharacter={(c, readOnly = false) => { setCharacter(c); setIsReadOnly(readOnly); setStep(1); setView('creator'); }}
        onNewCharacter={() => { setCharacter(initialCharacterState); setIsReadOnly(false); setStep(1); setView('creator'); }}
        onOpenEncyclopedia={() => setView('encyclopedia')}
        onOpenAccount={() => setView('account')}
		onSignOut={async () => {
		  try {
			// On essaie de prévenir le serveur poliment
			await supabase.auth.signOut();
		  } catch (e) {
			console.error("Supabase a bloqué la déconnexion, passage en force !");
		  } finally {
			// QUOI QU'IL ARRIVE, on lance la frappe nucléaire locale
			localStorage.clear();
			sessionStorage.clear();
			window.location.reload();
		  }
		}}
		onOpenAdminUsers={() => setView('admin_users')}
      />
    );
  }

  // --- VUE CRÉATEUR UNIFIÉE ---
  const totalSteps = 11;
  const stepsArray = Array.from({length: totalSteps}, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-24 font-sans text-gray-900 pt-8">
      
      {/* CADRE PRINCIPAL */}
      <div className="max-w-4xl mx-auto px-4">
        
        {/* BLOC EN-TÊTE + BOUTONS + CERCLES */}
        <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-amber-900 leading-tight">Les Héritiers</h1>
                    <div className="text-xs text-amber-700 opacity-60 font-serif">v{APP_VERSION} • {BUILD_DATE}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => setView('list')} className="flex items-center space-x-2 px-3 py-2 bg-white border border-amber-200 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif text-sm shadow-sm">
                        <List size={16} /> <span className="hidden sm:inline">Liste</span>
                    </button>
                    <button onClick={() => setView('changelog')} className="flex items-center space-x-2 px-3 py-2 bg-white border border-purple-200 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif text-sm shadow-sm">
                        <BookOpen size={16} /> <span className="hidden sm:inline">News</span>
                    </button>
                    <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif text-sm shadow-sm" title="Exporter en PDF">
                        <FileText size={16} /> <span className="hidden sm:inline">PDF</span>
                    </button>
                    {!isReadOnly && (
                        <button onClick={handleSave} className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors shadow-sm">
                            <Save size={16}/> <span className="hidden sm:inline">Sauver</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Notification de sauvegarde */}
            {showSaveNotification && (
                <div className="mb-4 bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2 justify-center animate-fade-in shadow-sm">
                    <Save size={18} /> ✓ Sauvegardé avec succès !
                </div>
            )}

            {/* BARRE DE PROGRESSION AVEC LIAISONS */}
            <div className="relative flex justify-between items-center w-full py-4 px-2 mb-4">
                
                {/* Ligne de fond grise (incomplète) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-amber-100 z-0 rounded-full"></div>
                
                {/* Ligne de progression dorée (calculée dynamiquement) */}
                <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-amber-400 z-0 transition-all duration-500 ease-in-out rounded-full"
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>

                {/* Cercles des étapes */}
                {stepsArray.map(s => (
                    <button
                        key={s}
                        onClick={() => { setStep(s); window.scrollTo(0,0); }}
                        disabled={step === 1 && !canProceedStep1 && s > 1}
                        className={`
                            relative z-10 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-300 border-4
                            ${step === s 
                                ? 'bg-amber-600 text-white border-white scale-110 shadow-md ring-2 ring-amber-200' 
                                : step > s 
                                ? 'bg-amber-400 text-white border-white' 
                                : 'bg-white text-gray-400 border-amber-100 hover:border-amber-300'
                            }
                        `}
                    >
                        {s}
                    </button>
                ))}
            </div>
        </div>

        {/* CONTENU DES ÉTAPES */}
        <main className="bg-white/50 rounded-xl p-2 md:p-6 border border-amber-50 shadow-sm min-h-[500px]">
            {step === 1 && <Step1 character={character} onNomChange={handleNomChange} onSexeChange={handleSexeChange} onTypeFeeChange={handleTypeFeeChange} onTraitsFeeriquesChange={(v) => setCharacter(prev => ({ ...prev, traitsFeeriques: v }))} onCharacterChange={(updates) => setCharacter(prev => ({ ...prev, ...updates }))} fairyData={gameData.fairyData} fairyTypesByAge={gameData.fairyTypesByAge} />}
            {step === 2 && <Step2 character={character} onCapaciteChoice={handleCapaciteChoice} fairyData={gameData.fairyData} />}
            {step === 3 && <Step3 character={character} onPouvoirToggle={handlePouvoirToggle} fairyData={gameData.fairyData} />}
            {step === 4 && <StepAtouts character={character} onAtoutToggle={handleAtoutToggle} fairyData={gameData.fairyData} />}
            {step === 5 && <StepCaracteristiques character={character} onCaracteristiquesChange={(c) => setCharacter({ ...character, caracteristiques: c })} fairyData={gameData.fairyData} />}
            {step === 6 && <StepProfils character={character} onProfilsChange={(p) => setCharacter({ ...character, profils: p })} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
            {step === 7 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(c) => setCharacter({ ...character, competencesLibres: c })} profils={gameData.profils} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} fairyData={gameData.fairyData} />}
            {step === 8 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(c) => setCharacter({ ...character, competencesFutiles: c })} fairyData={gameData.fairyData} />}
            {step === 9 && <StepVieSociale character={character} onCharacterChange={(updates) => setCharacter(prev => ({ ...prev, ...updates }))} />}
            {step === 10 && <StepPersonnalisation character={character} onCharacterChange={(updates) => setCharacter(prev => ({ ...prev, ...updates }))} />}
            {step === 11 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}
        </main>

      </div>

      {/* FOOTER NAVIGATION */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={() => { setStep(s => Math.max(1, s - 1)); window.scrollTo(0,0); }}
            disabled={step === 1}
            className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-lg font-serif transition-all bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Précédent
          </button>

          {!isReadOnly && (
            <button
              onClick={async () => {
                if (step === 11) {
                  await handleSave();
                  setView('list');
                } else {
                  setStep(s => Math.min(totalSteps, s + 1));
                  window.scrollTo(0,0);
                }
              }}
              disabled={step === 1 && !canProceedStep1}
              className={`flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-lg font-serif transition-all ${step === 1 && !canProceedStep1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
            >
              <span className="font-bold">{step === 11 ? 'Sauvegarder et Terminer' : 'Suivant'}</span>
              {step !== 11 && <ChevronRight size={20} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;