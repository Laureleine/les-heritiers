// src/App.js
// 8.25.0 // 8.26.0 
// 9.0.0 // 9.1.0 // 9.2.0 // 9.3.0 // 9.5.0 // 9.6.0 // 9.7.0 // 9.9.0 // 9.11.0
// 10.2.0 // 10.4.0 // 10.5.0

import React, { useState, useEffect, useReducer } from 'react';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { saveCharacterToSupabase } from './utils/supabaseStorage';
import { exportToPDF } from './utils/pdfGenerator';
import { useAutoUpdate } from './hooks/useAutoUpdate';
import Auth from './components/Auth';
import CharacterList from './components/CharacterList';
import AccountSettings from './components/AccountSettings';
import Encyclopedia from './components/Encyclopedia';
import AdminDashboard from './components/AdminDashboard';
import ValidationsPendantes from './components/ValidationsPendantes';
import Telegraphe from './components/Telegraphe';
import PixieAssistant from './components/PixieAssistant';
import DiceRoller from './components/DiceRoller';
import { AlertSystem, PWAPrompt, DisclaimerModal } from './components/SystemeModales';
import { AVAILABLE_BADGES, getFairyAge } from './data/DictionnaireJeu';
import { characterReducer } from './utils/characterEngine';
import BackgroundDecor from './components/BackgroundDecor';
import { APP_VERSION, BUILD_DATE, VERSION_HISTORY } from './version';

// --- IMPORTS DES ÉTAPES ---
import Step1 from './components/Step1';
import { Step2, Step3, StepAtouts } from './components/StepMagie';
import StepCaracteristiques from './components/StepCaracteristiques';
import StepProfils from './components/StepProfils';
import StepCompetencesLibres from './components/StepCompetencesLibres';
import StepCompetencesFutiles from './components/StepCompetencesFutiles';
import StepVieSociale from './components/StepVieSociale';
import StepPersonnalisation from './components/StepPersonnalisation';
import StepRecapitulatif from './components/StepRecapitulatif';

// --- ICONS ---
import { X, Save, ChevronRight, List, BookOpen, FileText, Crown, Shield } from 'lucide-react';
import { User, Sparkles, Zap, Star, Activity, Award, Feather, Briefcase, VenetianMask, CheckCircle } from 'lucide-react';

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
  const [showVersionModal, setShowVersionModal] = useState(false);

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
			.from('profiles').select('role, username, badges, show_pixie, active_badge, dice_theme')
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
      payload: { 
        ...initialCharacterState, 
        nom: character.nom, 
        sexe: character.sexe, 
        typeFee: t, 
        anciennete,
        traitsFeeriques: character.traitsFeeriques // ✨ LA CORRECTION EST ICI : On préserve les traits !
      },
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

  // =========================================================================
  // LE GABARIT GLOBAL : Gère le fond, le titre et les fameuses bandes latérales !
  // =========================================================================

  // 🌟 NOUVELLE BARRE DE NAVIGATION RICHE
  const STEP_CONFIG = [
    { id: 1, label: "Héritage", icon: <User size={18} /> },
    { id: 2, label: "Capacités", icon: <Sparkles size={18} /> },
    { id: 3, label: "Pouvoirs", icon: <Zap size={18} /> },
    { id: 4, label: "Atouts", icon: <Star size={18} /> },
    { id: 5, label: "Attributs", icon: <Activity size={18} /> },
    { id: 6, label: "Profils", icon: <Award size={18} /> },
    { id: 7, label: "Utiles", icon: <BookOpen size={18} /> },
    { id: 8, label: "Futiles", icon: <Feather size={18} /> },
    { id: 9, label: "Social & Richesse", icon: <Briefcase size={18} /> },
    { id: 10, label: "Masque", icon: <VenetianMask size={18} /> },
    { id: 11, label: "Bilan", icon: <CheckCircle size={18} /> }
  ];
  
  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-gray-800">
      
      <AlertSystem userProfile={userProfile} />

      <PWAPrompt />
	  
      <DisclaimerModal />
	  
	  <BackgroundDecor />

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
		  <button 
			onClick={() => setShowVersionModal(true)}
			className="text-xs text-amber-700 bg-amber-100/50 hover:bg-amber-200 hover:text-amber-900 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-widest font-bold transition-all shadow-sm flex items-center gap-2"
		  >
			Version {APP_VERSION} • {BUILD_DATE} <BookOpen size={12} />
		  </button>
        </div>
        
          {/* ZONE DES RÔLES ET BADGES */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-3 max-w-2xl mx-auto">
            {userProfile?.profile?.role === 'super_admin' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full border border-purple-200 shadow-sm">Super Admin</span>
            )}
            {userProfile?.profile?.role === 'gardien' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200 shadow-sm">Gardien du Savoir</span>
            )}
            
            {/* ✨ AFFICHAGE DE TOUS LES BADGES (ACTIF EN PREMIER ET PLUS GROS) ✨ */}
            {(() => {
              const userBadges = userProfile?.profile?.badges || [];
              const activeBadgeId = userProfile?.profile?.active_badge;

              // On trie le tableau pour forcer le badge actif à se mettre en première position
              const sortedBadges = [...userBadges].sort((a, b) => {
                if (a === activeBadgeId) return -1;
                if (b === activeBadgeId) return 1;
                return 0;
              });

              return sortedBadges.map((badgeId, index) => {
                const badgeDef = AVAILABLE_BADGES?.find(b => b.id === badgeId);
                if (!badgeDef) return null;

                // On considère le badge comme actif si c'est celui choisi, OU si aucun n'est choisi mais que c'est le premier de la liste
                const isActive = badgeId === activeBadgeId || (!activeBadgeId && index === 0);

                return (
                  <span 
                    key={badgeId} 
                    className={`inline-flex items-center border font-bold transition-all cursor-help ${badgeDef.color} ${
                      isActive 
                        ? 'text-sm px-3 py-1.5 rounded-full shadow-md ring-2 ring-offset-1 ring-amber-400 z-10 scale-105' 
                        : 'text-[10px] px-2 py-0.5 rounded-full shadow-sm opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    title={isActive ? "Titre honorifique actif (Modifiable dans le Grimoire)" : "Titre possédé"}
                  >
                    {badgeDef.label}
                  </span>
                );
              });
            })()}
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
			onOpenAdmin={() => setView('admin_dashboard')}

          />
        )}

        {/* VUE 2 : ENCYCLOPÉDIE & CONSEIL */}
        {view === 'encyclopedia' && <Encyclopedia userProfile={userProfile} onBack={() => setView('list')} onOpenValidations={() => setView('validations')} />}
        {view === 'validations' && <ValidationsPendantes session={session} onBack={() => setView('encyclopedia')} />}
        
        {/* VUE 3 : COMPTE & SYSTEME */}
		{view === 'account' && <AccountSettings session={session} userProfile={userProfile} onUpdateProfile={() => window.location.reload()} onBack={() => setView('list')} />}
		{view === 'admin_dashboard' && <AdminDashboard session={session} onBack={() => setView('list')} />}

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

          {/* BARRE DE PROGRESSION MAGIQUE ET CONNECTÉE */}
          <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto py-4 px-2 mb-10 mt-4">
            
            {/* 1. La ligne de fond (grise) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-stone-200 z-0 rounded-full"></div>
            
            {/* 2. La ligne de progression animée (dorée) */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-amber-500 z-0 transition-all duration-700 ease-in-out rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>

            {/* 3. Les Cercles (Icônes) */}
            {STEP_CONFIG.map((s) => {
              const isActive = step === s.id;
              const isPast = step > s.id;

              return (
                <div key={s.id} className="relative z-10 flex flex-col items-center group">
                  
                  {/* Le Cercle Cliquable */}
                  <button
                    onClick={() => {
                      setStep(s.id);
                      window.scrollTo(0,0);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 shadow-sm
                      ${isActive ? 'bg-amber-600 border-amber-600 text-white scale-110 shadow-md' : 
                        isPast ? 'bg-amber-100 border-amber-400 text-amber-700 hover:bg-amber-200' : 
                        'bg-white border-stone-300 text-stone-400 hover:border-amber-300 hover:text-amber-500'
                      }`}
                  >
                    {s.icon}
                  </button>

                  {/* Le texte actif permanent (visible uniquement sur l'étape en cours) */}
                  {isActive && (
                    <span className="absolute -bottom-8 font-serif font-bold text-amber-900 text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap animate-fade-in-up">
                      {s.label}
                    </span>
                  )}

                  {/* L'infobulle au survol (visible pour les autres étapes) */}
                  {!isActive && (
                    <span className="absolute -bottom-8 bg-stone-800 text-amber-100 text-[10px] md:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                      {s.label}
                    </span>
                  )}
                  
                </div>
              );
            })}
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
			  {step === 9 && <StepVieSociale character={character} onCharacterChange={handleCharacterChange} fairyData={gameData.fairyData} />}
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

      {/* 🎲 NOUVEAU : LA PISTE DE DÉ FLOTTANTE */}
      <DiceRoller />

        {/* ✨ 4. NOTRE PIXIE QUI VOLE PARTOUT */}
        {view === 'creator' && userProfile?.profile?.show_pixie !== false && (
          <PixieAssistant 
            character={character} 
            step={step} 
            session={session}
            onSleep={() => setUserProfile({ ...userProfile, profile: { ...userProfile.profile, show_pixie: false } })}
			fairyData={gameData.fairyData} /* 👈 LA CORRECTION EST ICI */
          />
        )}

      {/* ✨ 5. MODALE DU JOURNAL DES VERSIONS ✨ */}
      {showVersionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-2xl w-full max-h-[80vh] rounded-xl shadow-2xl border-2 border-amber-900/20 flex flex-col overflow-hidden animate-fade-in-up">
            <div className="bg-amber-900 text-amber-50 p-4 flex justify-between items-center shadow-md z-10">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <BookOpen size={18} className="text-amber-300" /> Registre des Mises à jour
              </h3>
              <button onClick={() => setShowVersionModal(false)} className="hover:text-red-400 bg-amber-800/50 p-1.5 rounded-lg transition-colors">
                <X size={20}/>
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              {VERSION_HISTORY.map((v, idx) => (
                <div key={idx} className="border-b border-amber-200/50 pb-4 last:border-0 relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-bold text-amber-900 text-xl">v{v.version}</h4>
                    <span className="text-xs text-amber-700 italic font-serif bg-amber-100/50 px-2 py-1 rounded-md">{v.date}</span>
                  </div>
                  <ul className="space-y-2">
                    {v.changes.map((change, cIdx) => (
                      <li key={cIdx} className="text-sm text-stone-700 flex items-start gap-2 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 shadow-sm" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

	</div>
  );
}

export default App;