// src/App.js
// 8.25.0 // 8.26.0 
// 9.0.0 // 9.1.0 // 9.2.0 // 9.3.0 // 9.5.0 // 9.6.0 // 9.7.0 // 9.9.0 // 9.11.0
// 10.2.0 // 10.4.0 // 10.5.0 // 10.6.0

import React, { useState, useEffect } from 'react';
import { useCharacter } from './context/CharacterContext';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { saveCharacterToSupabase, toggleCharacterVisibility } from './utils/supabaseStorage';
import { useAutoUpdate } from './hooks/useAutoUpdate'; // Ajustez le chemin si nécessaire

// --- IMPORTS DES COMPOSANTS ---
import Auth from './components/Auth';
import CharacterList from './components/CharacterList';
import Encyclopedia from './components/Encyclopedia';
import ValidationsPendantes from './components/ValidationsPendantes';
import AccountSettings from './components/AccountSettings';
import AdminDashboard from './components/AdminDashboard';
import Telegraphe from './components/Telegraphe';
import DiceRoller from './components/DiceRoller';
import PixieAssistant from './components/PixieAssistant';
import BackgroundDecor from './components/BackgroundDecor';
import { InAppNotification as AlertSystem, PWAPrompt, DisclaimerModal } from './components/SystemeModales';

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

import { exportToPDF } from './utils/pdfGenerator';
import { AVAILABLE_BADGES, STEP_CONFIG } from './data/DictionnaireJeu';
import { APP_VERSION, BUILD_DATE, VERSION_HISTORY } from './version';

import { List, FileText, Globe, Save, ArrowLeft, ArrowRight, BookOpen, X } from 'lucide-react';

function App() {
  // --- 1. ÉTATS GLOBAUX DU NUAGE (CONTEXT API) ---
  const { character, dispatchCharacter, gameData, setGameData, isReadOnly, setIsReadOnly, initialCharacterState } = useCharacter();

  // --- 2. ÉTATS DE L'APPLICATION ---
  const [session, setSession] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState('Démarrage...');
  const [view, setView] = useState('list');
  const [step, setStep] = useState(1);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // --- SYSTÈME DE MISE À JOUR AUTOMATIQUE ---
  const { updateAvailable, applyUpdate } = useAutoUpdate(60000);

  useEffect(() => {
    if (updateAvailable) {
      console.log("Nouvelle version détectée ! Déclenchement de la purge...");
      applyUpdate();
    }
  }, [updateAvailable, applyUpdate]);

  // --- 3. INITIALISATION (UNE SEULE FOIS) ---
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
          setIsInitialized(true);
        }
      } catch (error) {
        console.error("❌ Init failed:", error);
        if (mounted) {
          setGlobalLoading(false);
          setIsInitialized(false);
        }
      }
    };

    initializeApp();

    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
    };
  }, [isInitialized, setGameData]);

  // --- ÉCOUTEUR D'AUTHENTIFICATION ---
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          setSession(null);
          setUserProfile(null);
          setGlobalLoading(false);
          setIsInitialized(false);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  // --- TRAQUEUR D'ACTIVITÉ ---
  useEffect(() => {
    if (!session?.user?.id) return;
    let lastActivity = Date.now();
    
    const handleActivity = () => { lastActivity = Date.now(); };
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

  // --- VALIDATIONS DE NAVIGATION ---
  const canProceedStep1 = character.nom && character.sexe && character.typeFee;
  const totalSteps = STEP_CONFIG.length;

  const nextStep = () => {
    if (step === 1 && !canProceedStep1) {
      alert('Veuillez compléter les informations de base.');
      return;
    }
    setStep(s => Math.min(totalSteps, s + 1));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(s => Math.max(1, s - 1));
    window.scrollTo(0, 0);
  };

  // 🌟 LE DICTIONNAIRE DES ÉTAPES (Purifié grâce au Context API)
  const stepComponents = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <StepAtouts />,
    5: <StepCaracteristiques />,
    6: <StepProfils />,
    7: <StepCompetencesLibres />,
    8: <StepCompetencesFutiles />,
    9: <StepVieSociale />,
    10: <StepPersonnalisation />,
    11: <StepRecapitulatif />
  };

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
                  className={`inline-flex items-center border font-bold transition-all cursor-help ${badgeDef.color} ${
                    isActive ? 'px-3 py-1 text-xs rounded-full shadow-sm ring-2 ring-offset-1 ring-amber-400 scale-105' : 'px-2 py-0.5 text-[10px] rounded-full opacity-60 hover:opacity-100'
                  }`}
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

        {/* GESTIONNAIRE DE VUES PRINCIPALES */}
        {view === 'list' && (
          <CharacterList
            session={session}
            userProfile={userProfile}
            profils={gameData.profils}
            onSelectCharacter={(c, readOnly = false) => {
              dispatchCharacter({ type: 'LOAD_CHARACTER', payload: c });
              setIsReadOnly(readOnly);
              setStep(1);
              setView('creator');
            }}
            onNewCharacter={() => {
              dispatchCharacter({ type: 'RESET_CHARACTER', payload: initialCharacterState });
              setIsReadOnly(false);
              setStep(1);
              setView('creator');
            }}
            onSignOut={() => supabase.auth.signOut()}
            onOpenAccount={() => setView('account')}
            onOpenEncyclopedia={() => setView('encyclopedia')}
            onOpenAdmin={() => setView('admin_dashboard')}
          />
        )}

        {view === 'encyclopedia' && <Encyclopedia userProfile={userProfile} onBack={() => setView('list')} onOpenValidations={() => setView('validations')} />}
        {view === 'validations' && <ValidationsPendantes session={session} onBack={() => setView('encyclopedia')} />}
        {view === 'account' && <AccountSettings session={session} userProfile={userProfile} onUpdateProfile={() => window.location.reload()} onBack={() => setView('list')} />}
        {view === 'admin_dashboard' && <AdminDashboard session={session} onBack={() => setView('list')} />}

        {/* VUE : LE CRÉATEUR DE PERSONNAGE */}
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

                <button
                  onClick={async () => {
                    const wasPublic = character.isPublic;
                    const newPublic = !wasPublic;
                    dispatchCharacter({ type: 'UPDATE_FIELD', field: 'isPublic', value: newPublic, gameData });
                    if (character.id && !character.id.toString().startsWith('temp_')) {
                      await toggleCharacterVisibility(character.id, newPublic);
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all font-serif font-bold text-sm shadow-sm border ${
                    character.isPublic ? 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200' : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                  }`}
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

            {showSaveNotification && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-center font-bold font-serif animate-fade-in border border-green-200">
                ✓ Sauvegardé avec succès !
              </div>
            )}

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
                          alert('Veuillez compléter les informations de base (Étape 1).');
                          return;
                        }
                        setStep(s.id);
                        window.scrollTo(0, 0);
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-amber-500 text-white scale-125 ring-4 ring-amber-200'
                          : isPast
                          ? 'bg-amber-100 text-amber-700 border-2 border-amber-300 hover:bg-amber-200'
                          : 'bg-white border-stone-300 text-stone-400 hover:border-amber-300 hover:text-amber-500'
                      }`}
                    >
                      {s.icon}
                    </button>
                    {isActive && (
                      <span className="absolute -bottom-8 font-serif font-bold text-amber-900 text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap animate-fade-in-up">
                        {s.label}
                      </span>
                    )}
                    {!isActive && (
                      <span className="absolute -bottom-8 bg-stone-800 text-amber-100 text-[10px] md:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                        {s.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* LE CORPS DE L'ÉTAPE */}
            <main className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm min-h-[500px]">
              {stepComponents[step]}
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
                        {/* Optionnel : Rendu Markdown rudimentaire pour afficher les étoiles en gras */}
                        <span dangerouslySetInnerHTML={{__html: change.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code class="bg-amber-100 text-amber-900 px-1 rounded">$1</code>')}} />
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