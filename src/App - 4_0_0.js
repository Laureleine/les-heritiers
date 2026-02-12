// src/components/App.js
// Version: 3.9.6
// CORRECTION DESIGN : Retour à la mise en page "Ok.png" (Pas de sticky header)
// + Correction syntaxe barre de progression

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
import AdminUserList from './AdminUserList';
import AccountSettings from './AccountSettings';

// Utilitaires
import { saveCharacterToSupabase } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/utils';

// Imports Icônes
import { List, Save, FileText, BookOpen, ChevronLeft, ChevronRight, Eye, User, Shield, History } from 'lucide-react';

const ADMIN_EMAIL = 'amaranthe@free.fr';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  
  const [view, setView] = useState('list'); // 'list', 'creator', 'changelog', 'account', 'admin_users'
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

  // Variable Admin
  const isAdmin = session?.user?.email === ADMIN_EMAIL;

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
    const pouvoirs = character.pouvoirs.includes(pouvoir)
      ? character.pouvoirs.filter(p => p !== pouvoir)
      : character.pouvoirs.length < 3 
        ? [...character.pouvoirs, pouvoir]
        : character.pouvoirs;
    setCharacter({ ...character, pouvoirs });
  };

  // Validations
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.majeur?.trait && 
                          character.profils?.mineur?.nom && character.profils?.mineur?.trait;
  
  const canProceedStep4 = () => {
    const lib = character.competencesLibres || {};
    let depense = 0;
    Object.values(lib.rangs || {}).forEach(r => depense += r);
    return depense > 0; 
  };

  const canProceedStep5 = () => {
    const pointsDepenses = Object.values(character.competencesFutiles?.rangs || {}).reduce((sum, rangs) => sum + rangs, 0);
    return pointsDepenses === 10;
  };

  const canProceedStep6 = character.capaciteChoisie;
  const canProceedStep7 = character.pouvoirs.length === 3;

  if (gameDataLoading) return <div className="min-h-screen flex items-center justify-center font-serif text-amber-900">Chargement des données du jeu...</div>;
  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif text-amber-900">Chargement session...</div>;
  if (!session) return <Auth />;

  // --- GESTION DES VUES ---

  if (view === 'list') {
    return (
      <CharacterList 
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
        onOpenAdmin={() => setView('admin_users')} 
        onOpenAccount={() => setView('account')}
      />
    );
  }

  // VUE ADMIN
  if (view === 'admin_users') {
    return <AdminUserList onBack={() => setView('list')} />;
  }

  // VUE COMPTE
  if (view === 'account') {
    return <AccountSettings session={session} onBack={() => setView('list')} />;
  }

  if (view === 'changelog') {
    return <Changelog onBack={() => setView('list')} />;
  }

  // VUE CRÉATEUR (Mode édition)
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      
      {/* 1. TITRE PRINCIPAL (Comme Ok.png) */}
      <div className="pt-8 text-center">
        <h1 className="text-5xl font-serif text-amber-900 mb-2">Les Héritiers</h1>
        <div className="text-amber-700 italic font-serif text-lg">Belle Époque • Paris</div>
        <div className="text-xs text-gray-400 mt-2 font-sans uppercase tracking-widest">
            Version {APP_VERSION} • {BUILD_DATE}
        </div>
      </div>

      {/* Contenu Principal Centré */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">

        {/* 2. BARRE D'ACTIONS (Juste au-dessus des étapes) */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            
            {/* Groupe Gauche : Navigation */}
            <div className="flex gap-2">
                <button 
                    onClick={() => setView('list')}
                    className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif"
                >
                    <List size={18}/> <span>Mes personnages</span>
                </button>

                <button 
                    onClick={() => setView('account')}
                    className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-serif"
                    title="Mon Compte"
                >
                    <User size={18}/> <span className="hidden sm:inline">Compte</span>
                </button>

				{/* BOUTON CHANGEMENTS RÉTABLI */}
                <button onClick={() => setView('changelog')} className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-purple-300 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif font-bold">
                    <History size={18}/> <span>Changements</span>
                </button>
				
                {isAdmin && (
                  <button
                    onClick={() => setView('admin_users')}
                    className="flex items-center space-x-2 px-3 py-2 bg-red-50 border-2 border-red-200 text-red-800 rounded-lg hover:bg-red-100 transition-all font-serif"
                    title="Administration"
                  >
                    <Shield size={18} />
                  </button>
                )}
            </div>

            {/* Groupe Droite : Actions Fiche */}
            <div className="flex gap-2">
                <button 
                    onClick={() => exportToPDF(character, gameData.fairyData)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif shadow-sm"
                >
                    <FileText size={18}/> <span>PDF</span>
                </button>

                {!isReadOnly && (
                    <button 
                        onClick={handleSave}
                        className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif shadow-sm"
                    >
                        <Save size={18}/> <span>Sauvegarder</span>
                    </button>
                )}
            </div>
        </div>
        
        {/* Notification Sauvegarde (Intégrée) */}
        {showSaveNotification && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-sm flex items-center gap-2 animate-fade-in">
            <Save size={16}/> Personnage sauvegardé avec succès !
          </div>
        )}

        {/* 3. BARRE DE PROGRESSION [1..8] */}
        <div className="flex items-center justify-between mb-8 px-1">
			{[1, 2, 3, 4, 5].map(s => (
                <React.Fragment key={s}>
                    {/* Le Cercle Numéroté */}
                    <div 
                        onClick={() => { if(!isReadOnly) setStep(s); }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm font-bold border-2 cursor-pointer transition-all shrink-0
                            ${step === s 
                                ? 'bg-amber-600 border-amber-600 text-white scale-110 shadow-lg' // Actif : Orange Foncé
                                : step > s 
                                    ? 'bg-amber-400 border-amber-400 text-white' // Passé : Orange Moyen (Texte lisible !)
                                    : 'bg-white border-amber-200 text-amber-300' // Futur : Blanc (Texte lisible !)
                            }`}
                    >
                        {s}
                    </div>

                    {/* La Ligne de connexion (sauf après le dernier chiffre 5) */}
                    {s < 5 && (
                        <div className={`flex-1 h-1 mx-1 rounded transition-colors duration-300
                            ${step > s ? 'bg-amber-400' : 'bg-amber-100'}`} 
                        />
                    )}
                </React.Fragment>
            ))}
        </div>

        {/* 4. CONTENU DES ÉTAPES */}
        <div className="bg-white rounded-2xl shadow-xl border border-amber-100 p-6 md:p-8 min-h-[600px]">
            {step === 1 && <Step1 character={character} onNomChange={handleNomChange} onSexeChange={handleSexeChange} onTypeFeeChange={handleTypeFeeChange} fairyTypesByAge={gameData.fairyTypesByAge} fairyData={gameData.fairyData} />}
            {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={handleCaracteristiquesChange} fairyData={gameData.fairyData} />}
            {step === 3 && <StepProfils character={character} onProfilsChange={handleProfilsChange} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
            {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={handleCompetencesLibresChange} profils={gameData.profils} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}
            {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={handleCompetencesFutilesChange} fairyData={gameData.fairyData} />}
            /* {step === 6 && <Step2 character={character} onCapaciteChoice={handleCapaciteChoice} fairyData={gameData.fairyData} />}
            {step === 7 && <Step3 character={character} onPouvoirToggle={handlePouvoirToggle} fairyData={gameData.fairyData} />}
            {step === 8 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competences={gameData.competences} competencesParProfil={gameData.competencesParProfil} />}*/
        </div>

        {/* Navigation Bas de Page */}
        <div className="flex justify-between mt-8">
            <button 
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className={`flex items-center px-6 py-3 rounded-xl font-serif transition-all ${
                    step === 1 ? 'opacity-0 pointer-events-none' : 'bg-white border-2 border-amber-200 text-amber-800 hover:bg-amber-50 hover:border-amber-300 shadow-sm'
                }`}
            >
                <ChevronLeft size={20} className="mr-1"/> Précédent
            </button>

            <button 
                onClick={() => {
                    if (step === 5) { handleSave(); setView('list'); } 
                    else { setStep(step + 1); }
                }}
                className="flex items-center px-8 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-all font-serif shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                {step === 5 ? (isReadOnly ? 'Fermer' : 'Terminer') : 'Suivant'} <ChevronRight size={20} className="ml-1"/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;