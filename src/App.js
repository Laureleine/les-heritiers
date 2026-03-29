// src/App.js
// 8.25.0 // 8.26.0 
// 9.0.0 // 9.1.0 // 9.2.0 // 9.3.0 // 9.5.0 // 9.6.0 // 9.7.0 // 9.9.0 // 9.11.0
// 10.2.0 // 10.4.0 // 10.5.0 // 10.6.0 // 10.8.0
// 11.0.0 // 11.1.0 // 11.4.0
// 12.0.0 // 12.1.0 // 12.3.0 // 12.4.0
// 13.1.0 // 13.8.0 // 13.12.0
// 14.0.0 // 14.3.0 // 14.5.0 // 14.9.0 // 14.10.0 // 14.12.0
// Optimisé
// 15.0.0

import React, { useState, useEffect, useRef, useMemo, useCallback, lazy, Suspense } from 'react';
import { useCharacter } from './context/CharacterContext';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { saveCharacterToSupabase, toggleCharacterVisibility } from './utils/supabaseStorage';
import { useAutoUpdate } from './hooks/useAutoUpdate'; 
import { showInAppNotification } from './utils/SystemeServices'; 
import { InAppNotification as AlertSystem, PWAPrompt, DisclaimerModal } from './components/SystemeModales';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';

// --- IMPORTS STATIQUES (Essentiels au démarrage) ---
import Auth from './components/Auth';
import CharacterList from './components/CharacterList';
import Telegraphe from './components/Telegraphe';
import DiceRoller from './components/DiceRoller';
import PixieAssistant from './components/PixieAssistant';
import BackgroundDecor from './components/BackgroundDecor';

import { exportToPDF } from './utils/pdfGenerator';
import { AVAILABLE_BADGES, STEP_CONFIG } from './data/DictionnaireJeu';
import { APP_VERSION, BUILD_DATE, VERSION_HISTORY } from './version';

import { Sparkles, List, FileText, Globe, Save, ArrowLeft, ArrowRight, BookOpen, X, Lock, Bug } from 'lucide-react';

// ✨ FIX : LE CODE SPLITTING (Lazy Loading)
// Ces composants lourds ne seront téléchargés par le navigateur QUE lorsque le joueur cliquera dessus !
const Encyclopedia = lazy(() => import('./components/Encyclopedia'));
const ValidationsPendantes = lazy(() => import('./components/ValidationsPendantes'));
const AccountSettings = lazy(() => import('./components/AccountSettings'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const CerclesDashboard = lazy(() => import('./components/CerclesDashboard'));
const MesPropositions = lazy(() => import('./components/MesPropositions'));
const BureauAnomalies = lazy(() => import('./components/BureauAnomalies'));

// --- IMPORTS DES ÉTAPES ---
// ✨ NOUVEAU : LE CHARGEMENT PARESSEUX DES ÉTAPES
const Step1 = lazy(() => import('./components/Step1'));

// 💡 Astuce de Senior : Comment Lazy Loader des exports nommés !
const Step2 = lazy(() => import('./components/StepMagie').then(module => ({ default: module.Step2 })));
const Step3 = lazy(() => import('./components/StepMagie').then(module => ({ default: module.Step3 })));
const StepAtouts = lazy(() => import('./components/StepMagie').then(module => ({ default: module.StepAtouts })));

const StepCaracteristiques = lazy(() => import('./components/StepCaracteristiques'));
const StepProfils = lazy(() => import('./components/StepProfils'));
const StepCompetencesLibres = lazy(() => import('./components/competencesLibres/StepCompetencesLibres'));
const StepCompetencesFutiles = lazy(() => import('./components/StepCompetencesFutiles'));
const StepVieSociale = lazy(() => import('./components/vieSociale/StepVieSociale'));
const StepPersonnalisation = lazy(() => import('./components/StepPersonnalisation'));
const StepRecapitulatif = lazy(() => import('./components/StepRecapitulatif'));

function App() {

  // --- 1. ÉTATS GLOBAUX DU NUAGE (CONTEXT API) ---
  const { character, dispatchCharacter, gameData, setGameData, isReadOnly, setIsReadOnly, initialCharacterState } = useCharacter();

  // --- 2. ÉTATS DE L'APPLICATION ---
  const [session, setSession] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState('Démarrage...');
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // ✨ FIX : L'Interrupteur et le Bouclier (Anti-Boucle Infinie)
  const [initTrigger, setInitTrigger] = useState(0);
  const sessionRef = useRef(null);

  // ✨ FIX : Le Bouclier anti-démarrages concurrents (Sémaphore)
  const isInitializingRef = useRef(false);

  // ✨ FIX : La fonction douce pour rafraîchir le profil sans recharger la page
  const refreshUserProfile = async () => {
    if (!session?.user?.id) return;
    const { data: profile } = await supabase
      .from('profiles').select('*')
      .eq('id', session.user.id).single();
    if (profile) setUserProfile({ ...session.user, profile });
  };
  
  // --- SYSTÈME DE MISE À JOUR AUTOMATIQUE ---
  const { updateAvailable, applyUpdate } = useAutoUpdate(60000);

  useEffect(() => {
    if (updateAvailable) {
      console.log("Nouvelle version détectée ! Déclenchement de la purge...");
      applyUpdate();
    }
  }, [updateAvailable, applyUpdate]);

  // ✨ FIX : Maintien du bouclier mémoriel
  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  useEffect(() => {
    // ✨ FIX : Si on est déjà initialisé, OU si une initialisation est DÉJÀ en cours, on stoppe tout !
    if (isInitialized || isInitializingRef.current) return;
    
    let mounted = true;
    isInitializingRef.current = true; // 🔴 On allume le feu rouge !

    const safetyTimer = setTimeout(() => {
      if (mounted && globalLoading) {
        setGlobalLoading(false);
        isInitializingRef.current = false; // 🟢 Sécurité : on libère le feu
      }
    }, 30000);

    const initializeApp = async () => {
      try {
        setLoadingStep("Vérification connexion...");
        const { data: { session: activeSession } } = await supabase.auth.getSession();
        
        if (!activeSession) {
          if (mounted) setGlobalLoading(false);
          isInitializingRef.current = false; // 🟢 LE COUPABLE ÉTAIT ICI ! On libère le feu si personne n'est connecté.
          return;
        }
		
        setLoadingStep("Chargement Grimoire...");
        const data = await loadAllGameData();
        
        if (mounted) {
          setGameData(data);
          setSession(activeSession); 

          const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', activeSession.user.id)
            .single();

          if (profileData) {
            // ✨ FIX : On structure la mémoire du joueur avec le tiroir 'profile', 
            // exactement de la même manière que dans 'refreshUserProfile' !
            setUserProfile({ ...activeSession.user, profile: profileData }); 
          }
          
          setIsInitialized(true);
          setGlobalLoading(false);
        }

        // ✨ FIX : LE COUP DE GÉNIE EST ICI !
        // On libère le feu vert ABSOLUMENT TOUT LE TEMPS, même si la fonction a été 
        // court-circuitée par un re-render (mounted === false).
        isInitializingRef.current = false;

      } catch (error) {
        console.error("❌ Init failed:", error);
        if (mounted) {
          setGlobalLoading(false);
          setIsInitialized(false);
        }
        // ✨ Le verrou de sécurité du catch reste en place
        isInitializingRef.current = false;
      }
    };

    initializeApp();

    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
    };
  // Notre interrupteur est toujours là, prêt à fonctionner !
  }, [isInitialized, setGameData, initTrigger]); 

  // --- ÉCOUTEUR D'AUTHENTIFICATION ---
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, currentSession) => {
        if (!currentSession) {
          setSession(null);
          setUserProfile(null);
          setGlobalLoading(false);
          setIsInitialized(false);
          isInitializingRef.current = false; // 🟢 SÉCURITÉ ABSOLUE : On force le feu vert à la déconnexion !
        } else if (_event === 'SIGNED_IN') {
   		  // ✨ FIX : Vérification via le bouclier
          if (!sessionRef.current) {
            setIsInitialized(false);
            setGlobalLoading(true);
            setInitTrigger(prev => prev + 1); // 👈 Le clic magique !
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // --- TRAQUEUR D'ACTIVITÉ ---
  useEffect(() => {
    if (!session?.user?.id) return;
    let lastActivity = Date.now();
    let isThrottled = false; // ✨ FIX : Notre modérateur d'événements

    const handleActivity = () => {
      if (!isThrottled) {
        lastActivity = Date.now();
        isThrottled = true;
        // On ignore les mouvements de souris pendant 2 secondes !
        setTimeout(() => { isThrottled = false; }, 2000); 
      }
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);

    const updatePresence = async () => {
      if (Date.now() - lastActivity < 5 * 60 * 1000) {
        await supabase.from('profiles').update({ last_seen: new Date() }).eq('id', session.user.id);
      }
    };

    updatePresence();
    const interval = setInterval(updatePresence, 3 * 60 * 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      clearInterval(interval);
    };
  }, [session]);
  
  // --- SAUVEGARDE GLOBALE ---
  const handleSave = async () => {
    if (isReadOnly) return;

    if (!character.nom.trim() || !character.sexe || !character.typeFee) {
      showInAppNotification("Impossible de sauvegarder : votre Héritier a besoin d'un Nom, d'un Sexe et d'un Héritage (Étape 1) !", "warning");
      return;
    }

    try {
      const saved = await saveCharacterToSupabase(character);
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'id', value: saved.id, gameData });
      showInAppNotification("✓ L'Héritier a été sauvegardé avec succès !", "success");
      
    } catch (e) {
      showInAppNotification("Les fluides éthérés refusent l'enregistrement : " + e.message, "error");
    }
  };

  // --- VALIDATIONS DE NAVIGATION ---
  const canProceedStep1 = character.nom && character.sexe && character.typeFee;
  const totalSteps = STEP_CONFIG.length;

  const nextStep = () => {
    if (step === 1 && !canProceedStep1) {
      // ✨ Une phrase plus lore-friendly
      showInAppNotification("Les pages suivantes sont scellées. Renseignez d'abord votre Nom, Sexe et Héritage féérique !", "warning");
      return;
    }
    setStep(s => Math.min(totalSteps, s + 1));
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(s => Math.max(1, s - 1));
    window.scrollTo(0, 0);
  };

  // 🌟 LE DICTIONNAIRE DES ÉTAPES (Protégé par useMemo)
  const stepComponents = useMemo(() => ({
    1: <Step1 />, 2: <Step2 />, 3: <Step3 />, 4: <StepAtouts />,
    5: <StepCaracteristiques />, 6: <StepProfils />, 7: <StepCompetencesLibres />,
    8: <StepCompetencesFutiles />, 9: <StepVieSociale />, 10: <StepPersonnalisation />,
    11: <StepRecapitulatif />
  }), [
    Step1, Step2, Step3, StepAtouts, StepCaracteristiques, 
    StepProfils, StepCompetencesLibres, StepCompetencesFutiles, 
    StepVieSociale, StepPersonnalisation, StepRecapitulatif
  ]);
  
  // ========================================================================
  // ✨ GESTION MANUELLE DE L'EXPÉRIENCE (LE PUITS DES ÂMES)
  // ========================================================================
  const handleAdjustXP = useCallback((amount) => {
    const currentTotal = character.xp_total || 0;
    const depense = character.xp_depense || 0;
    const newTotal = Math.max(depense, currentTotal + amount);

    if (newTotal === currentTotal) {
      if (amount < 0) showInAppNotification("Vous ne pouvez pas réduire votre Expérience en dessous des points déjà dépensés !", "warning");
      return;
    }

    dispatchCharacter({
      type: 'UPDATE_FIELD',
      field: 'xp_total',
      value: newTotal,
      gameData
    });

    if (amount > 0) showInAppNotification(`Gling ! +${amount} XP ajoutés.`, "success");
    else showInAppNotification(`Ajustement : ${amount} XP retirés.`, "info");
  }, [character.xp_total, character.xp_depense, dispatchCharacter, gameData]);
  
  // --- RENDU ÉCRAN DE CHARGEMENT ---
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

  // --- RENDU AUTHENTIFICATION ---
  if (!session || !userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <Auth />
      </div>
    );
  }

  // --- RENDU DE L'APPLICATION ---
  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-gray-800">
      <AlertSystem userProfile={userProfile} />
      <PWAPrompt />
      <DisclaimerModal />
      <BackgroundDecor />

      {/* 1. L'EN-TÊTE GLOBAL FIXE */}
      <div className="pt-6 pb-4 text-center animate-fade-in relative z-10">
        <div className="flex flex-wrap justify-center items-baseline gap-4">
          <h1
            className="text-5xl font-serif text-amber-900 cursor-pointer hover:text-amber-700 transition-colors m-0"
            onClick={() => navigate('/')}
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
          {(() => {
            const userBadges = userProfile?.profile?.badges || [];
            const activeBadgeId = userProfile?.profile?.active_badge;
            const sortedBadges = [...userBadges].sort((a, b) => {
              if (a === activeBadgeId) return -1;
              if (b === activeBadgeId) return 1;
              return 0;
            });
            return sortedBadges.map((badgeId, index) => {
              const badgeDef = AVAILABLE_BADGES?.find(b => b.id === badgeId);
              if (!badgeDef) return null;
              const isActive = badgeId === activeBadgeId || (!activeBadgeId && index === 0);
              return (
                <span
                  key={badgeId}
                  className={`inline-flex items-center border font-bold transition-all cursor-help ${badgeDef.color} ${isActive ? 'px-3 py-1 text-xs rounded-full shadow-sm ring-2 ring-offset-1 ring-amber-400 scale-105' : 'px-2 py-0.5 text-[10px] rounded-full opacity-60 hover:opacity-100'}`}
                  title={isActive ? "Titre Actif" : "Titre Possédé"}
                >
                  {badgeDef.label}
                </span>
              );
            });
          })()}
        </div>
      </div>

        {/* 2. LE CONTENEUR CENTRAL */}
        <div className="max-w-5xl mx-auto px-4 w-full animate-fade-in relative z-10">

          {/* ✨ FIX : Le filet de sécurité Suspense pour les chargements paresseux */}
          <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-32 animate-pulse">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-600 mb-4"></div>
              <p className="text-amber-900 font-serif font-bold text-lg">Dépliage des parchemins...</p>
            </div>
          }>
            {/* ✨ LE NOUVEAU MOTEUR DE ROUTAGE ✨ */}
            <Routes>

			  {/* ROUTE 1 : ACCUEIL (LISTE) */}
			  <Route path="/" element={
				<CharacterList
				  session={session}
				  userProfile={userProfile}
				  profils={gameData.profils}
				  gameData={gameData}
				  onSelectCharacter={(c, readOnly = false) => {
					
					// ✨ FIX : On injecte "gameData" dans la charge utile ! 
					// Le super-calculateur du characterEngine s'allumera instantanément au chargement.
					dispatchCharacter({ type: 'LOAD_CHARACTER', payload: c, gameData });
					
					// ✨ Le statut "Scellé" ne déclenche PLUS la lecture seule globale !
					// La lecture seule n'est activée que par le paramètre readOnly (ex: vue d'un profil communautaire).
					setIsReadOnly(readOnly);
					
					setStep(1);
					navigate('/creator'); 
					window.scrollTo(0, 0);
				  }}
				  onNewCharacter={() => {
					dispatchCharacter({ type: 'RESET_CHARACTER', payload: initialCharacterState });
					setIsReadOnly(false);
					setStep(1);
					navigate('/creator');
				  }}
				  onSignOut={() => supabase.auth.signOut()}
				  onOpenAccount={() => navigate('/account')}
				  onOpenEncyclopedia={() => navigate('/encyclopedia')}
				  onOpenAdmin={() => navigate('/admin_dashboard')}
				  onOpenCercles={() => navigate('/cercles')}
                  onOpenBureau={() => navigate('/bureau_anomalies')} /* ✨ NOUVEAU CÂBLAGE */
				/>
			  } />

			  {/* ROUTE 2 : ENCYCLOPÉDIE (Avec protection Docte) */}
			  <Route path="/encyclopedia" element={
				userProfile?.profile?.is_docte ? (
				  <Encyclopedia 
					userProfile={userProfile} 
					onBack={() => navigate('/')} 
					onOpenValidations={() => navigate('/validations')} 
					onOpenMesPropositions={() => navigate('/mes_propositions')} // ✨ NOUVEAU
				  />
				) : (
				  <div className="max-w-2xl mx-auto p-8 mt-12 bg-[#2a1313] rounded-2xl border-2 border-red-900/50 shadow-2xl text-center animate-fade-in-up relative overflow-hidden">
					<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent pointer-events-none"></div>
					<div className="relative z-10 flex flex-col items-center">
					  <Lock size={64} className="text-red-500 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
					  <h2 className="text-3xl font-serif text-red-100 mb-4">Savoir sous le Sceau du Silence</h2>
					  <p className="text-red-200/80 mb-8 italic font-serif leading-relaxed">
						Ce pan de la Féérie échappe à votre compréhension et l'accès à ces archives vous est interdit.<br/>
						Seul un Docte peut vous y initier en vous invitant dans son Cercle.
					  </p>
					  <div className="bg-red-950/50 p-6 rounded-xl border border-red-900/50 w-full">
						<p className="text-sm text-red-300 mb-4 font-bold uppercase tracking-wider">Êtes-vous vous-même un Docte ?</p>
						<button onClick={() => navigate('/account')} className="bg-red-900 hover:bg-red-800 text-red-100 px-6 py-3 rounded-lg font-serif font-bold transition-colors shadow-md">
						  Révélez votre Voie dans Mon Grimoire
						</button>
					  </div>
					  <button onClick={() => navigate('/')} className="mt-8 text-gray-400 hover:text-white transition-colors text-sm">
						← Retourner à l'accueil
					  </button>
					</div>
				  </div>
				)
			  } />

			  {/* ROUTE 3 : AUTRES PAGES */}
			  <Route path="/validations" element={<ValidationsPendantes session={session} onBack={() => navigate('/encyclopedia')} />} />
			  <Route path="/account" element={<AccountSettings session={session} userProfile={userProfile} onUpdateProfile={refreshUserProfile} onBack={() => navigate('/')} />} />
			  <Route path="/admin_dashboard" element={<AdminDashboard session={session} onBack={() => navigate('/')} />} />
			  {/* ROUTE 3 : CERCLES (Avec inspection du Docte) */}
			  <Route path="/cercles" element={
				<CerclesDashboard 
				  session={session} 
				  onBack={() => navigate('/')} 
				  onViewCharacter={(c) => {
					// ✨ FIX : Le Docte ouvre le dossier d'un de ses joueurs en Lecture Seule
					dispatchCharacter({ type: 'LOAD_CHARACTER', payload: c, gameData });
					setIsReadOnly(true);
					setStep(1);
					navigate('/creator');
					window.scrollTo(0, 0);
				  }}
				/>
			  } />			  
			  <Route path="/mes_propositions" element={<MesPropositions session={session} onBack={() => navigate('/encyclopedia')} />} />

			  {/* ROUTE 4 : CRÉATEUR DE PERSONNAGE */}
			  <Route path="/creator" element={
				<div className="max-w-4xl mx-auto pb-8">
				  <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
					<button onClick={() => navigate('/')} className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-serif font-bold text-sm shadow-sm">
					  <List size={16} /> <span className="hidden sm:inline">Retour aux Archives</span>
					</button>

					<div className="flex flex-wrap gap-2">
						<button onClick={() => exportToPDF(character, gameData)} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif font-bold text-sm shadow-sm" title="Exporter en PDF">
						  <FileText size={16} /> <span className="hidden sm:inline">Exporter PDF</span>
						</button>
					  <button
						onClick={async () => {
						  const wasPublic = character.isPublic;
						  const newPublic = !wasPublic;
						  dispatchCharacter({ type: 'UPDATE_FIELD', field: 'isPublic', value: newPublic, gameData });
						  if (character.id && !character.id.toString().startsWith('temp_')) {
							await toggleCharacterVisibility(character.id, newPublic);
						  }
						}}
						className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all font-serif font-bold text-sm shadow-sm border ${character.isPublic ? 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200' : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'}`}
						title={character.isPublic ? "Rendre Privé" : "Rendre Public"}
					  >
						<Globe size={16} /> <span className="hidden sm:inline">{character.isPublic ? 'Public' : 'Privé'}</span>
					  </button>
					  {!isReadOnly && (
						<button onClick={handleSave} className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold shadow-sm">
						  <Save size={18} /> <span className="hidden sm:inline">Sauvegarder</span>
						</button>
					  )}
					</div>
				  </div>

				  {/* BARRE DE PROGRESSION MAGIQUE ET CONNECTÉE */}
				  <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto py-4 px-2 mb-10 mt-4">
					<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-stone-200 z-0 rounded-full"></div>
					<div
					  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-amber-500 z-0 transition-all duration-700 ease-in-out rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"
					  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
					></div>
					{STEP_CONFIG.map((s) => {
					  const isActive = step === s.id;
					  const isPast = step > s.id;
					  return (
						<div key={s.id} className="relative z-10 flex flex-col items-center group">
						  <button
							onClick={() => {
							  if (s.id > 1 && !canProceedStep1) {
								showInAppNotification("La magie bloque le passage. Terminez l'Étape 1 (Nom, Sexe, Fée) avant de sauter les pages.", "warning");
								return;
							  }
							  setStep(s.id);
							  window.scrollTo(0, 0);
							}}
							className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${isActive ? 'bg-amber-500 text-white scale-125 ring-4 ring-amber-200' : isPast ? 'bg-amber-100 text-amber-700 border-2 border-amber-300 hover:bg-amber-200' : 'bg-white border-stone-300 text-stone-400 hover:border-amber-300 hover:text-amber-500'}`}
							title={s.label}
						  >
							{s.icon}
						  </button>
						  {isActive && (
							<span className="absolute top-12 font-serif font-bold text-amber-900 text-xs uppercase tracking-widest whitespace-nowrap animate-fade-in-up">
							  {s.label}
							</span>
						  )}
						</div>
					  );
					})}
				  </div>

				  {/* ✨ LA JAUGE D'XP GLOBALE INTERACTIVE (RUBAN COMPACT) ✨ */}
				  {(character.statut === 'scelle' || character.statut === 'scellé') && (
					<div className="mb-4 bg-gradient-to-r from-stone-900 to-stone-800 rounded-lg px-3 py-2 shadow-md border border-amber-700 flex flex-col md:flex-row justify-between items-center gap-3 text-amber-50 animate-fade-in">
					  
					  <div className="flex items-center gap-2">
						<Sparkles className="text-amber-400 animate-pulse" size={18} />
						<span className="font-serif font-bold text-amber-500">
						  Le Puits des Âmes
						  <span className="hidden sm:inline text-stone-400 font-sans font-normal text-sm ml-2">
							— Mode Évolution
						  </span>
						</span>
					  </div>

					  {/* ✨ NOUVEAU : LES CONTRÔLES INTÉGRÉS AU RUBAN ! */}
					  <div className="flex items-center gap-2 sm:gap-4 bg-stone-950 px-2 py-1.5 rounded-md border border-stone-700 shadow-inner">
						
						<button onClick={() => handleAdjustXP(-1)} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-400 rounded transition-colors text-xs font-bold border border-stone-700 shadow-sm" title="Retirer 1 XP">-1</button>
						
						<div className="flex items-baseline gap-2 px-2">
						  <span className="hidden sm:inline text-xs uppercase tracking-widest font-bold text-stone-400">Disponible :</span>
						  <span className="text-2xl font-black font-serif text-amber-400 leading-none mt-0.5">
							{(character.xp_total || 0) - (character.xp_depense || 0)}
						  </span>
						</div>

						<div className="flex gap-1.5">
						  <button onClick={() => handleAdjustXP(1)} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded transition-colors text-xs font-bold border border-stone-700 shadow-sm" title="Ajouter 1 XP">+1</button>
						  <button onClick={() => handleAdjustXP(5)} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded transition-colors text-xs font-bold border border-amber-900 shadow-sm" title="Ajouter 5 XP">+5</button>
						</div>

					  </div>
					</div>
				  )}

				  {/* LE CORPS DE L'ÉTAPE */}
				  <main className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm min-h-[500px]">
					{/* ✨ FIX : Le filet de sécurité local pour que la page ne clignote pas au changement d'étape ! */}
					<Suspense fallback={
					  <div className="flex flex-col items-center justify-center h-64 animate-pulse">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-4"></div>
						<p className="text-amber-900 font-serif text-lg font-bold">Dépliage du parchemin...</p>
					  </div>
					}>
					  {stepComponents[step]}
					</Suspense>
				  </main>

				  {/* BOUTONS PRÉCÉDENT / SUIVANT */}
				  <div className="flex justify-between mt-8">
					<button
					  onClick={prevStep}
					  disabled={step === 1}
					  className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-serif font-bold shadow-sm"
					>
					  <ArrowLeft size={18} /> <span>Précédent</span>
					</button>
					<button
					  onClick={nextStep}
					  disabled={step === totalSteps}
					  className="flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-serif font-bold shadow-sm"
					>
					  <span>Suivant</span> <ArrowRight size={18} />
					</button>
				  </div>
				</div>
			  } />

			  {/* ROUTE DE SÉCURITÉ */}
			  <Route path="*" element={<Navigate to="/" replace />} />

            {/* ✨ NOUVELLE ROUTE : LE BUREAU DES ANOMALIES PUBLIQUE */}
            <Route path="/bureau_anomalies" element={
              <BureauAnomalies 
                session={session} 
                onBack={() => navigate('/')} 
              />
            } />

			</Routes>
		</Suspense>
      </div>

      {/* 3. TÉLÉGRAPHE PNEUMATIQUE */}
      {session && userProfile && <Telegraphe session={session} userProfile={userProfile} />}

      {/* 🎲 PISTE DE DÉ FLOTTANTE */}
      <DiceRoller use3DDice={userProfile?.profile?.use_3d_dice} diceTheme={userProfile?.profile?.dice_theme} />

      {/* ✨ 4. NOTRE PIXIE QUI VOLE PARTOUT */}
      {location.pathname === '/creator' && userProfile?.profile?.show_pixie !== false && (
        <PixieAssistant
          character={character}
          step={step}
          session={session}
          onSleep={() => setUserProfile({ ...userProfile, profile: { ...userProfile.profile, show_pixie: false } })}
          fairyData={gameData.fairyData}
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
						  <span dangerouslySetInnerHTML={{__html: change
							.replace(/</g, '&lt;').replace(/>/g, '&gt;') /* ✨ FIX : Bouclier anti-XSS */
							.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
							.replace(/`(.*?)`/g, '<code class="bg-amber-100 text-amber-900 px-1 rounded">$1</code>')
						  }} />
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