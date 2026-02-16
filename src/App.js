// src/App.js
// Version: 3.12.0 (Step 10 = Personnalisation Complète)

import React, { useState, useEffect } from 'react';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { getFairyAge } from './data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from './version';
import AccountSettings from './components/AccountSettings';

// Imports des composants
import Step1 from './components/Step1';
import StepCaracteristiques from './components/StepCaracteristiques';
import StepProfils from './components/StepProfils';
import StepCompetencesLibres from './components/StepCompetencesLibres';
import StepCompetencesFutiles from './components/StepCompetencesFutiles';
import Step2 from './components/Step2'; // Capacité
import Step3 from './components/Step3'; // Pouvoirs
import StepAtouts from './components/StepAtouts';
import StepPersonnalisation from './components/StepPersonnalisation'; // NOUVEAU COMPOSANT
import StepRecapitulatif from './components/StepRecapitulatif';
import CharacterList from './components/CharacterList';
import Changelog from './components/Changelog';
import Auth from './components/Auth';

// Utilitaires
import { saveCharacterToSupabase } from './utils/supabaseStorage';
import { exportToPDF } from './utils/utils';

// Icônes
import { List, Save, FileText, BookOpen, ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';

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
    
    // Identité & Apparence (Gérés en Step 1 et Step 10)
    nomFeerique: '',
    genreHumain: '',
    taille: '',
    poids: '',
    apparence: '', 
    traitsFeeriques: [],

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
    
    // Champs Placeholder
    atouts: [],
    rangsProfil: {},
    fortune: 0,
    equipement: [],
    contacts: [],

    isPublic: false
  };

  const [character, setCharacter] = useState(initialCharacterState);

  // --- 1. Chargement des données ---
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

  // --- 2. Gestion Session (CORRIGÉ) ---
  useEffect(() => {
    // On demande à Supabase : "Est-ce qu'on est déjà connecté ?"
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false); // <--- C'est CETTE ligne qui débloque l'écran "Chargement..."
    });

    // On écoute les changements (Connexion / Déconnexion)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  
  // --- 3. Sauvegarde ---
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

  // --- 4. Handlers Principaux ---
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
    // Calcul dynamique du max selon la Féérie (ou 3 par défaut)
    const maxPouvoirs = character.caracteristiques?.feerie || 3;

    const pouvoirs = character.pouvoirs.includes(pouvoir)
      ? character.pouvoirs.filter(p => p !== pouvoir)
      : character.pouvoirs.length < maxPouvoirs // <-- C'est ici la correction
      ? [...character.pouvoirs, pouvoir]
      : character.pouvoirs;

    setCharacter({ ...character, pouvoirs });
  };

  // --- 5. Validations (11 Étapes) ---
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.capaciteChoisie;
  const maxPouvoirs = character.caracteristiques?.feerie || 3;
  const canProceedStep3 = character.pouvoirs.length === maxPouvoirs;  
  const canProceedStep4 = (character.atouts || []).length === 2;
  const canProceedStep5 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep6 = character.profils?.majeur?.nom && character.profils?.majeur?.trait && character.profils?.mineur?.nom && character.profils?.mineur?.trait;
  const canProceedStep7 = () => {
    const pointsDepenses = Object.values(character.competencesLibres?.rangs || {}).reduce((sum, val) => sum + val, 0)
      + Object.values(character.competencesLibres?.choixSpecialiteUser || {}).flat().length;
    return pointsDepenses === 15;
  };
  const canProceedStep8 = () => {
    const pointsDepenses = Object.values(character.competencesFutiles?.rangs || {}).reduce((sum, rangs) => sum + rangs, 0);
    return pointsDepenses === 10;
  };
  const canProceedStep9 = true;
  const canProceedStep10 = true; // Personnalisation (toujours valide)

  // --- RENDU ---
  if (gameDataLoading) return <div className="min-h-screen flex items-center justify-center font-serif text-amber-900">Chargement des données du jeu...</div>;
  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif text-amber-900">Chargement...</div>;
  if (!session) return <Auth />;

  if (view === 'list') {
    return (
      <CharacterList
        profils={gameData.profils} 
        onSelectCharacter={(c, readOnly = false) => {
          setCharacter(c);
          setIsReadOnly(readOnly);
          setStep(1);
          setView('creator');
        }}
        onNewCharacter={() => {
          setCharacter(initialCharacterState);
          setIsReadOnly(false);
          setStep(1);
          setView('creator');
        }}
        onSignOut={() => supabase.auth.signOut()}
		onOpenAccount={() => setView('account')}
      />
    );
  }

  if (view === 'changelog') {
    return <Changelog onBack={() => setView('list')} />;
  }

  if (view === 'account') {
    return <AccountSettings session={session} onBack={() => setView('list')} />;
  }
  
  const totalSteps = 11;
  const stepsArray = Array.from({length: totalSteps}, (_, i) => i + 1);

  // Gestion des Atouts (Step 4)
  const handleAtoutToggle = (atoutNom) => {
    const currentAtouts = character.atouts || [];
    const maxAtouts = 2; // Règle standard [Source 24]

    let newAtouts;
    if (currentAtouts.includes(atoutNom)) {
      newAtouts = currentAtouts.filter(a => a !== atoutNom);
    } else {
      if (currentAtouts.length >= maxAtouts) return; // Bloquer si max atteint
      newAtouts = [...currentAtouts, atoutNom];
    }
    setCharacter({ ...character, atouts: newAtouts });
  };
  
  return (
    <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b-2 border-amber-200 pb-6">
          <div className="flex justify-center md:justify-start"></div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 tracking-wide" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>
              Les Héritiers
            </h1>
          </div>
          <div className="text-center md:text-right text-xs text-amber-900/40 font-mono uppercase tracking-widest">
            Version {APP_VERSION} • {BUILD_DATE}
          </div>
        </header>

        {/* Barre d'actions */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-amber-100">
          <div className="flex gap-3">
            <button onClick={() => setView('list')} className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif">
              <List size={18} /> <span>Mes personnages</span>
            </button>
            <button onClick={() => setView('changelog')} className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-purple-300 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif">
              <BookOpen size={18} /> <span>Changements</span>
            </button>
          </div>
          <div className="flex gap-3">
            <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif" title="Exporter en PDF">
              <FileText size={18} /> <span>PDF</span>
            </button>
            {!isReadOnly && (
              <button onClick={handleSave} className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif">
                <Save size={18} /> <span>Sauvegarder</span>
              </button>
            )}
          </div>
        </div>

        {/* Notification */}
        {showSaveNotification && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce flex items-center gap-2 font-bold">
            <Save size={20} /> ✓ Personnage sauvegardé avec succès !
          </div>
        )}

        {/* Barre de progression (11 étapes) */}
        <div className="mb-8 relative overflow-hidden">
          {/* MODIFICATION ICI : Suppression de 'overflow-x-auto' et 'pb-2' */}
          <div className="flex justify-between items-center relative z-10 md:pb-0">
            {stepsArray.map(s => (
              <div 
                key={s} 
                className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-300 border-4 mx-1 ${
                  step === s ? 'bg-amber-600 text-white ring-4 ring-amber-100 scale-110 border-white' 
                    : step > s ? 'bg-amber-400 text-white border-white' : 'bg-white text-amber-200 border-amber-100'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-amber-100 -z-10 rounded"></div>
          <div className="hidden md:block absolute top-1/2 left-0 h-1 bg-amber-400 -z-0 transition-all duration-500 rounded" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>
        </div>

        {/* Rendu des Étapes */}
        <div className="mb-12 min-h-[400px]">
          {step === 1 && (
            <Step1 
              character={character}
              onNomChange={handleNomChange}
              onSexeChange={handleSexeChange}
              onTypeFeeChange={handleTypeFeeChange}
              onCharacterChange={(fields) => setCharacter(prev => ({ ...prev, ...fields }))}
              onTraitsFeeriquesChange={(v) => setCharacter(prev => ({ ...prev, traitsFeeriques: v }))}
              fairyData={gameData.fairyData}
              fairyTypes={gameData.fairyTypes}
              fairyTypesByAge={gameData.fairyTypesByAge}
            />
          )}
          
          {step === 2 && <Step2 character={character} onCapaciteChoice={handleCapaciteChoice} fairyData={gameData.fairyData} />}
          {step === 3 && <Step3 character={character} onPouvoirToggle={handlePouvoirToggle}   fairyData={gameData.fairyData} />}		  
          {step === 4 && <StepAtouts character={character} onAtoutToggle={handleAtoutToggle}  fairyData={gameData.fairyData} />}  
          {step === 5 && <StepCaracteristiques character={character} onCaracteristiquesChange={handleCaracteristiquesChange} fairyData={gameData.fairyData} />}
          {step === 6 && <StepProfils character={character} onProfilsChange={handleProfilsChange} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 7 && <StepCompetencesLibres character={character} onCompetencesLibresChange={handleCompetencesLibresChange} profils={gameData.profils} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}
          {step === 8 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={handleCompetencesFutilesChange} fairyData={gameData.fairyData} />}
          {step === 9 && (
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md border border-amber-100 text-center">
              <h2 className="text-3xl font-serif text-amber-900 mb-6 flex items-center justify-center gap-3"><TrendingUp className="text-blue-500" size={32} /> Rangs de Profil</h2>
              <p className="text-gray-600 italic text-lg mb-8">Calcul des Rangs de Profil et Points de Personnage.<br /><span className="text-sm text-gray-400 block mt-2">(Fonctionnalité à venir)</span></p>
              <div className="flex justify-center"><div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-100"><TrendingUp size={48} className="text-blue-200" /></div></div>
            </div>
          )}

          {/* STEP 10 : PERSONNALISATION (AVEC FORMULAIRE) */}
          {step === 10 && (
            <StepPersonnalisation 
              character={character}
              onCharacterChange={(fields) => setCharacter(prev => ({ ...prev, ...fields }))}
            />
          )}

          {/* STEP 11 : RÉCAPITULATIF (READ-ONLY) */}
          {step === 11 && (
            <StepRecapitulatif 
              character={character}
              fairyData={gameData.fairyData}
              competences={gameData.competences}
              competencesParProfil={gameData.competencesParProfil}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-amber-200">
          <button onClick={() => setStep(step - 1)} disabled={step === 1} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all ${step === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-amber-600 text-white hover:bg-amber-700'}`}>
            <ChevronLeft size={20} /> <span>Précédent</span>
          </button>
          {!isReadOnly && (
            <button
              // 1. Ajoutez 'async' ici
              onClick={async () => {
                if (step === 11) { // Si c'est la dernière étape
                  await handleSave(); // 2. Ajoutez 'await' pour forcer l'attente
                  setView('list');    // 3. La vue ne change qu'une fois la sauvegarde finie
                } else { 
                  setStep(step + 1); 
                  window.scrollTo(0, 0); 
                }
              }}
              disabled={
				 (step === 1 && !canProceedStep1) 
			  || (step === 2 && !canProceedStep2) 
			  || (step === 3 && !canProceedStep3) 
			  || (step === 5 && !canProceedStep5) 
			  || (step === 6 && !canProceedStep6) 
			  || (step === 7 && !canProceedStep7()) 
			  || (step === 8 && !canProceedStep8())
			  }
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all ${((step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || (step === 3 && !canProceedStep3) || (step === 5 && !canProceedStep5) || (step === 6 && !canProceedStep6) || (step === 7 && !canProceedStep7()) || (step === 8 && !canProceedStep8())) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
            >
              <span>{step === 11 ? 'Sauvegarder et Terminer' : 'Suivant'}</span>
              {step === 11 ? <Save size={20} /> : <ChevronRight size={20} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;