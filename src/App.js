// src/App.js
// 8.25.0 // 8.26.0 // 9.0.0 // 9.1.0 // 9.2.0 // 9.3.0

import React, { useState, useEffect, useReducer } from 'react';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { getFairyAge } from './data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from './version';
import { saveCharacterToSupabase } from './utils/supabaseStorage';
import { exportToPDF } from './utils/utils';
import { useAutoUpdate } from './hooks/useAutoUpdate';
import { AVAILABLE_BADGES } from './data/badges';
import Auth from './components/Auth';
import CharacterList from './components/CharacterList';
import AccountSettings from './components/AccountSettings';
import Encyclopedia from './components/Encyclopedia';
import Changelog from './components/Changelog';
import AdminUserList from './components/AdminUserList';
import ValidationsPendantes from './components/ValidationsPendantes';
import AlertSystem from './components/AlertSystem';
import Telegraphe from './components/Telegraphe';
import PixieAssistant from './components/PixieAssistant';

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
import { Save, ChevronRight, List, BookOpen, FileText, Crown, Shield, TestTubeDiagonal, Bug, Bomb } from 'lucide-react';

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

  // 🔥 1. LE NOUVEAU MOTEUR D'ÉTAT CENTRALISÉ (REDUCER)
	function characterReducer(state, action) {
	  let newState = { ...state }; // On clone l'état pour pouvoir le modifier librement

	  switch (action.type) {
		case 'LOAD_CHARACTER':
		case 'RESET_CHARACTER':
		  newState = { ...action.payload };
		  break;
		case 'UPDATE_FIELD':
		  newState[action.field] = action.value;
		  break;
		case 'UPDATE_MULTIPLE':
		  newState = { ...newState, ...action.payload };
		  break;
		case 'TOGGLE_ARRAY_ITEM':
		  const currentArray = newState[action.field] || [];
		  if (currentArray.includes(action.value)) {
			newState[action.field] = currentArray.filter(item => item !== action.value);
		  } else if (currentArray.length < action.max) {
			newState[action.field] = [...currentArray, action.value];
		  }
		  break;
		default:
		  return state;
	  }

	  // ⚙️ LE CALCULATEUR AUTOMATIQUE INTÉGRÉ
	  // Si le jeu a bien chargé ses données, on déclenche les calculs :
	  if (action.gameData && action.gameData.fairyData && newState.typeFee) {
		const feeData = action.gameData.fairyData[newState.typeFee];

		// --- A. Calcul de l'Entregent Total ---
		let entregent = newState.competencesLibres?.rangs?.['Entregent'] || 0;

		// 1. Bonus de Profil
		if (newState.profils?.majeur?.nom === 'Gentleman') entregent += 2;
		if (newState.profils?.mineur?.nom === 'Gentleman') entregent += 1;

		// 2. Bonus de Prédilection (Si inné à la fée OU choisi par le joueur)
		const hasEntregentPredilection = 
		  feeData?.competencesPredilection?.some(p => p.nom === 'Entregent' && !p.isChoix) ||
		  Object.values(newState.competencesLibres?.choixPredilection || {}).includes('Entregent');

		if (hasEntregentPredilection) entregent += 2;

		// --- B. Calcul des Bourses de Contacts Gratuits ---
		const prestance = newState.caracteristiques?.prestance || 0;
		const bonusPrestance = Math.max(0, prestance - 3);
		const bonusEntregent = Math.max(0, entregent - 3);

		// --- C. Enregistrement des Totaux ---
		newState.computedStats = {
		  entregentTotal: Math.min(8, entregent),
		  contactsGratuits: bonusPrestance + bonusEntregent
		};
	  }

	  return newState;
	}

  const [character, dispatchCharacter] = useReducer(characterReducer, initialCharacterState);

  // 🔥 ÉTAT NOUVEAU
  const [isInitialized, setIsInitialized] = useState(false);

  // 🔥 1. INITIALISATION (UNE SEULE FOIS)
  useEffect(() => {
    if (isInitialized) return;
    let mounted = true;

    const safetyTimer = setTimeout(() => {
      if (mounted && globalLoading) setGlobalLoading(false);
    }, 30000);

    const initializeApp = async () => {
      try {
        setLoadingStep("Vérification connexion...");
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          if (mounted) setGlobalLoading(false);
          return;
        }

        setLoadingStep("Chargement Grimoire...");
        const data = await loadAllGameData();
        if (mounted) {
          setGameData(data);
  		  const { data: profile } = await supabase
			.from('profiles').select('role, username, badges') // 👈 On charge les badges ici !
            .eq('id', session.user.id).single();
          
          setSession(session);
          setUserProfile({ ...session.user, profile });
          console.log(`✅ Connecté: ${session.user.email} Rôle: ${profile?.role}`);
          setGlobalLoading(false);
          setIsInitialized(true);  // 🔥 FIN !
        }
      } catch (error) {
        console.error("❌ Init failed:", error);
        if (mounted) setGlobalLoading(false);
      } finally {
        if (mounted) clearTimeout(safetyTimer);
      }
    };

    initializeApp();
    return () => { mounted = false; clearTimeout(safetyTimer); };
  }, [isInitialized]);

  // 🔥 2. AUTH LISTENER (SEULEMENT déconnexion)
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        if (event === 'SIGNED_OUT') {
          setSession(null);
          setUserProfile(null);
          setGlobalLoading(false);
          setIsInitialized(false);  // 🔥 Permet reconnexion
        }
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  // 🔥 2.5 NOUVEAU : Traqueur d'activité (En ligne / Absent)
  useEffect(() => {
    if (!session?.user?.id) return;

    let lastActivity = Date.now();

    // 1. Détecter l'activité locale
    const handleActivity = () => { lastActivity = Date.now(); };
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);

    // 2. Ping Supabase (toutes les 5 minutes)
    const pingInterval = setInterval(async () => {
      const now = Date.now();
      // Si l'utilisateur a été actif dans les 5 dernières minutes
      if (now - lastActivity < 300000) {
        await supabase.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', session.user.id);
      }
    }, 300000); // 300 000 ms = 5 minutes

    // 3. Nettoyage
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      clearInterval(pingInterval);
    };
  }, [session?.user?.id]);
  
  // --- 3. HANDLERS ---
  const handleSignOut = async () => {
    try {
      console.log("🚪 Déconnexion demandée...");
      await supabase.auth.signOut();
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/';
    } catch (error) {
      console.error("❌ Erreur déconnexion:", error.message);
    }
  };  
  const handleSave = async () => {
    if (isReadOnly) return;
    if (!character.nom.trim() || !character.sexe || !character.typeFee) {
      alert('Veuillez compléter les informations de base (Nom, Sexe, Type de Fée).');
      return;
    }
    try {
      const saved = await saveCharacterToSupabase(character);
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'id', value: saved.id, gameData });
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
    } catch (e) {
      alert('Erreur sauvegarde : ' + e.message);
    }
  };

  const handleNomChange = (n) => !isReadOnly && dispatchCharacter({ type: 'UPDATE_FIELD', field: 'nom', value: n, gameData });
  const handleSexeChange = (s) => !isReadOnly && dispatchCharacter({ type: 'UPDATE_FIELD', field: 'sexe', value: s, gameData });
  
  const handleTypeFeeChange = (t) => {
    if (isReadOnly) return;
    const anciennete = getFairyAge(t, 'traditionnelle', gameData.fairyData);
    dispatchCharacter({ 
      type: 'UPDATE_MULTIPLE', 
      payload: { ...initialCharacterState, nom: character.nom, sexe: character.sexe, typeFee: t, anciennete },
      gameData
    });
  };

  const handleCapaciteChoice = (c) => !isReadOnly && dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: c, gameData });
  
  const handlePouvoirToggle = (pouvoir) => {
    if (isReadOnly) return;
    const max = character.caracteristiques?.feerie || 3;
    dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'pouvoirs', value: pouvoir, max, gameData });
  };

  const handleAtoutToggle = (atout) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'TOGGLE_ARRAY_ITEM', field: 'atouts', value: atout, max: 2, gameData });
  };

  const handleCharacterChange = (updates) => {
    if (isReadOnly) return;
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: updates, gameData });
  };
  
  // --- VALIDATIONS ---
  const canProceedStep1 = character.nom && character.sexe && character.typeFee;

  // --- RENDU COMPLET ---

  if (globalLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-amber-900 font-serif">{loadingStep}</p>
        </div>
      </div>
    );
  }

  if (!session || !userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <Auth />
      </div>
    );
  }

  const totalSteps = 11;
  const stepsArray = Array.from({length: totalSteps}, (_, i) => i + 1);

  // =========================================================================
  // LE GABARIT GLOBAL : Gère le fond, le titre et les fameuses bandes latérales !
  // =========================================================================
  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-gray-800">
      
      <AlertSystem userProfile={userProfile} />

      {/* ================= DÉCORATIONS D'ANGLES (Esotérisme & Steampunk) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] text-amber-950">
        
        {/* HAUT GAUCHE : Grand Pentacle & Cercle Magique */}
        <div className="absolute -top-32 -left-32">
          <svg width="500" height="500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[spin_200s_linear_infinite]">
            <circle cx="50" cy="50" r="45"/>
            <circle cx="50" cy="50" r="38"/>
            <path d="M50 12 L61.75 38.08 L88.04 38.08 L66.75 54.91 L74.89 80.99 L50 64.16 L25.1 80.99 L33.24 54.91 L11.95 38.08 L38.24 38.08 Z"/>
            <circle cx="50" cy="50" r="15"/>
            <circle cx="50" cy="50" r="5"/>
          </svg>
        </div>

        {/* BAS GAUCHE : Grand Engrenage Industriel */}
        <div className="absolute -bottom-32 -left-20">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="animate-[spin_120s_linear_infinite]">
            <circle cx="50" cy="50" r="35"/>
            <circle cx="50" cy="50" r="25"/>
            <circle cx="50" cy="50" r="10"/>
            <path d="M45 5 L55 5 L53 15 L47 15 Z M45 95 L55 95 L53 85 L47 85 Z M5 45 L5 55 L15 53 L15 47 Z M95 45 L95 55 L85 53 L85 47 Z M19.64 16.81 L26.71 23.88 L23.88 26.71 L16.81 19.64 Z M83.18 80.35 L76.11 73.28 L78.94 70.45 L86.01 77.52 Z M19.64 83.18 L26.71 76.11 L23.88 73.28 L16.81 80.35 Z M83.18 16.81 L76.11 23.88 L78.94 26.71 L86.01 19.64 Z"/>
          </svg>
        </div>
        
        {/* BAS GAUCHE : Petit Engrenage imbriqué */}
        <div className="absolute bottom-40 left-32">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[spin_80s_linear_infinite_reverse]">
            <circle cx="50" cy="50" r="35"/>
            <circle cx="50" cy="50" r="15"/>
            <path d="M45 5 L55 5 L53 15 L47 15 Z M45 95 L55 95 L53 85 L47 85 Z M5 45 L5 55 L15 53 L15 47 Z M95 45 L95 55 L85 53 L85 47 Z M19.64 16.81 L26.71 23.88 L23.88 26.71 L16.81 19.64 Z M83.18 80.35 L76.11 73.28 L78.94 70.45 L86.01 77.52 Z M19.64 83.18 L26.71 76.11 L23.88 73.28 L16.81 80.35 Z M83.18 16.81 L76.11 23.88 L78.94 26.71 L86.01 19.64 Z"/>
          </svg>
        </div>

        {/* HAUT DROIT : Astrolabe / Symbole Cosmique */}
        <div className="absolute -top-48 -right-48">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="animate-[spin_300s_linear_infinite_reverse]">
            <circle cx="50" cy="50" r="48"/>
            <circle cx="50" cy="50" r="30"/>
            <circle cx="50" cy="50" r="28"/>
            <path d="M50 2 L50 98 M2 50 L98 50 M16 16 L84 84 M16 84 L84 16 M26 10 L74 90 M10 26 L90 74 M10 74 L90 26 M26 90 L74 10"/>
          </svg>
        </div>
        
        {/* Note pour plus tard : Si vous découpez les vraies images du PDF (en PNG transparent), 
            vous pourrez les mettre ici à la place des SVG de cette façon : 
            <img src="/engrenages.png" className="absolute bottom-0 left-0 w-96 opacity-10" alt="" />
        */}
      </div>
      
      {/* 1. L'EN-TÊTE GLOBAL FIXE (Le même pour tout le monde) */}
      <div className="pt-6 pb-4 text-center animate-fade-in relative z-10">
        
        {/* LIGNE DU TITRE ET DE LA VERSION */}
        <div className="flex flex-wrap justify-center items-baseline gap-4">
          <h1 
            className="text-5xl font-serif text-amber-900 cursor-pointer hover:text-amber-700 transition-colors m-0" 
            onClick={() => setView('list')}
            title="Retour à l'accueil"
          >
            Les Héritiers
          </h1>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">
            Version {APP_VERSION} • {BUILD_DATE}
          </span>
        </div>
        
        {/* ZONE DES RÔLES ET BADGES */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-3 max-w-2xl mx-auto">
          {userProfile?.profile?.role === 'super_admin' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full border border-purple-200 shadow-sm">Super Admin</span>
          )}
          {userProfile?.profile?.role === 'gardien' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200 shadow-sm">Gardien du Savoir</span>
          )}
          {userProfile?.profile?.badges?.map(badgeId => {
            const badgeDef = AVAILABLE_BADGES?.find(b => b.id === badgeId);
            if (!badgeDef) return null;
            return (
              <span key={badgeId} className={`inline-flex items-center text-[11px] px-3 py-1 rounded-full border font-bold shadow-sm ${badgeDef.color}`}>
                {badgeDef.label}
              </span>
            );
          })}
        </div>
      </div>
	  
      {/* 2. LE CONTENEUR CENTRAL (C'est lui qui crée les bandes sur TOUTES les vues !) */}
      <div className="max-w-5xl mx-auto px-4 w-full animate-fade-in relative z-10">
        
        {/* VUE 1 : LA LISTE DES PERSONNAGES */}
        {view === 'list' && (
          <CharacterList
            session={session}
            userProfile={userProfile}
            profils={gameData.profils}
			onSelectCharacter={(c, readOnly = false) => { 
			   dispatchCharacter({ type: 'LOAD_CHARACTER', payload: c, gameData }); 
			   setIsReadOnly(readOnly); setStep(1); setView('creator'); 
			}}
			onNewCharacter={() => { 
			   dispatchCharacter({ type: 'RESET_CHARACTER', payload: initialCharacterState, gameData }); 
			   setIsReadOnly(false); setStep(1); setView('creator'); 
			}}
			onOpenEncyclopedia={() => setView('encyclopedia')}
            onOpenAccount={() => setView('account')}
            onSignOut={handleSignOut}
            onOpenAdminUsers={() => setView('admin_users')}
          />
        )}

        {/* VUE 2 : ENCYCLOPÉDIE & CONSEIL */}
        {view === 'encyclopedia' && <Encyclopedia userProfile={userProfile} onBack={() => setView('list')} onOpenValidations={() => setView('validations')} />}
        {view === 'validations' && <ValidationsPendantes session={session} onBack={() => setView('encyclopedia')} />}
        
        {/* VUE 3 : COMPTE & SYSTEME */}
        {view === 'account' && <AccountSettings session={session} onBack={() => setView('list')} />}
        {view === 'changelog' && <Changelog onBack={() => setView('list')} />}
        {view === 'admin_users' && <AdminUserList session={session} userProfile={userProfile} onBack={() => setView('list')} />}

        {/* VUE 4 : LE CRÉATEUR DE PERSONNAGE */}
        {view === 'creator' && (
          <div className="max-w-4xl mx-auto pb-8">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <button onClick={() => setView('list')} className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-serif font-bold text-sm shadow-sm">
                <List size={16} /> <span className="hidden sm:inline">Retour aux Archives</span>
              </button>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif font-bold text-sm shadow-sm" title="Exporter en PDF">
                  <FileText size={16} /> <span className="hidden sm:inline">Exporter PDF</span>
                </button>
                {!isReadOnly && (
                  <button onClick={handleSave} className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold text-sm shadow-sm">
                    <Save size={16}/> <span className="hidden sm:inline">Sauvegarder</span>
                  </button>
                )}
              </div>
            </div>

            {showSaveNotification && (
              <div className="mb-4 bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2 justify-center animate-fade-in shadow-sm font-bold">
                ✓ Sauvegardé avec succès !
              </div>
            )}

            {/* BARRE DE PROGRESSION */}
            <div className="relative flex justify-between items-center w-full py-4 px-2 mb-6">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded-full"></div>
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-amber-500 z-0 transition-all duration-500 ease-in-out rounded-full"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
              {stepsArray.map(s => (
                <button
                  key={s}
                  onClick={() => { setStep(s); window.scrollTo(0,0); }}
                  disabled={step === 1 && !canProceedStep1 && s > 1}
                  className={`relative z-10 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-300 border-4
                    ${step === s ? 'bg-amber-600 text-white border-white scale-110 shadow-md ring-2 ring-amber-200' : step > s ? 'bg-amber-400 text-white border-white' : 'bg-white text-gray-400 border-gray-200 hover:border-amber-300'}
                  `}
                >
                  {s}
                </button>
              ))}
            </div>

			<main className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm min-h-[500px]">
			  {step === 1 && <Step1 character={character} onNomChange={handleNomChange} onSexeChange={handleSexeChange} onTypeFeeChange={handleTypeFeeChange} onTraitsFeeriquesChange={(v) => handleCharacterChange({ traitsFeeriques: v })} onCharacterChange={handleCharacterChange} fairyData={gameData.fairyData} fairyTypesByAge={gameData.fairyTypesByAge} />}
			  {step === 2 && <Step2 character={character} onCapaciteChoice={handleCapaciteChoice} fairyData={gameData.fairyData} />}
			  {step === 3 && <Step3 character={character} onPouvoirToggle={handlePouvoirToggle} fairyData={gameData.fairyData} />}
			  {step === 4 && <StepAtouts character={character} onAtoutToggle={handleAtoutToggle} fairyData={gameData.fairyData} />}
			  {step === 5 && <StepCaracteristiques character={character} onCaracteristiquesChange={(c) => handleCharacterChange({ caracteristiques: c })} fairyData={gameData.fairyData} />}
			  {step === 6 && <StepProfils character={character} onProfilsChange={(p) => handleCharacterChange({ profils: p })} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
			  {step === 7 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(c) => handleCharacterChange({ competencesLibres: c })} profils={gameData.profils} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} fairyData={gameData.fairyData} />}
			  {step === 8 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(c) => handleCharacterChange({ competencesFutiles: c })} fairyData={gameData.fairyData} />}
			  {step === 9 && <StepVieSociale character={character} onCharacterChange={handleCharacterChange} />}
			  {step === 10 && <StepPersonnalisation character={character} onCharacterChange={handleCharacterChange} />}
			  {step === 11 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} />}
			</main>

            {/* NAVIGATION INTÉGRÉE (Suivant / Précédent) */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm mt-6 mb-8">
              <button
                onClick={() => { setStep(s => Math.max(1, s - 1)); window.scrollTo(0,0); }}
                disabled={step === 1}
                className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-lg font-serif transition-all bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed font-bold"
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
                  className={`flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-lg font-serif transition-all shadow-sm ${step === 1 && !canProceedStep1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
                >
                  <span className="font-bold">{step === 11 ? 'Sauvegarder et Terminer' : 'Suivant'}</span>
                  {step !== 11 && <ChevronRight size={20} />}
                </button>
              )}
            </div>

          </div>
        )}

      </div>

      {/* 3. TÉLÉGRAPHE PNEUMATIQUE */}
      {session && userProfile && <Telegraphe session={session} userProfile={userProfile} />}

      {/* ✨ 4. NOTRE PIXIE QUI VOLE PARTOUT (Seulement dans le créateur) */}
      {view === 'creator' && <PixieAssistant character={character} step={step} />}

    </div>
  );
}

export default App;