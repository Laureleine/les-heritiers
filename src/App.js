// src/App.js
// Version: 3.7.1
// Correction: Chemins d'imports ajustés pour la structure src/App.js

import React, { useState, useEffect } from 'react';
import { supabase } from './config/supabase';
import { loadAllGameData } from './utils/supabaseGameData';
import { getFairyAge } from './data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from './version';

// Imports des composants (Chemins corrigés vers ./components/)
import Step1 from './components/Step1';
import StepCaracteristiques from './components/StepCaracteristiques';
import StepProfils from './components/StepProfils';
import StepCompetencesLibres from './components/StepCompetencesLibres';
import StepCompetencesFutiles from './components/StepCompetencesFutiles';
import Step2 from './components/Step2'; // Capacité
import Step3 from './components/Step3'; // Pouvoirs
import StepRecapitulatif from './components/StepRecapitulatif';
import CharacterList from './components/CharacterList';
import Changelog from './components/Changelog';
import Auth from './components/Auth';

// Utilitaires
import { saveCharacterToSupabase } from './utils/supabaseStorage'; // Corrigé : utilise saveCharacterToSupabase
import { exportToPDF } from './utils/utils';

// Icônes
import { 
    List, Save, FileText, BookOpen, ChevronLeft, ChevronRight, // Existants
    Home, PlusCircle, User, Settings // Nouveaux pour le mobile
} from 'lucide-react';

function App() {
  // --- CONFIGURATION ---
  const LAST_STEP = 5; // Variable qui détermine la fin du formulaire (Mettre 8 quand tout sera codé)
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list', 'creator', 'changelog'
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

  // --- 2. Gestion Session ---
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

  // --- 3. Sauvegarde ---
	const handleSave = async () => {
		if (isReadOnly) return;
		if (!character.nom.trim() || !character.sexe || !character.typeFee) {
			alert('Veuillez compléter les informations de base (Nom, Sexe, Type de Fée).');
			return;
		}

		try {
			const saved = await saveCharacterToSupabase(character);
			
			// === CORRECTION ICI ===
			// On met à jour l'ID ET la date de modification (updated_at)
			// Sinon le prochain clic déclenchera une erreur "Conflit"
			setCharacter(prev => ({ 
				...prev, 
				id: saved.id,
				updated_at: saved.updated_at // <--- C'est cette ligne qui manquait !
			}));
			// ======================

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
    const pouvoirs = character.pouvoirs.includes(pouvoir)
      ? character.pouvoirs.filter(p => p !== pouvoir)
      : character.pouvoirs.length < 3
        ? [...character.pouvoirs, pouvoir]
        : character.pouvoirs;
    setCharacter({ ...character, pouvoirs });
  };

  // --- 5. Validations ---
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.majeur?.trait && 
                          character.profils?.mineur?.nom && character.profils?.mineur?.trait;
  
  const canProceedStep4 = () => {
    const pointsDepenses = Object.values(character.competencesLibres?.rangs || {}).reduce((sum, val) => sum + val, 0)
        + Object.values(character.competencesLibres?.choixSpecialiteUser || {}).flat().length;
    return pointsDepenses === 15;
  };

  const canProceedStep5 = () => {
    const pointsDepenses = Object.values(character.competencesFutiles?.rangs || {}).reduce((sum, rangs) => sum + rangs, 0);
    return pointsDepenses === 10;
  };

  const canProceedStep6 = character.capaciteChoisie;
  const canProceedStep7 = character.pouvoirs.length === 3;


  // --- RENDU ---

  if (gameDataLoading) return <div className="min-h-screen flex items-center justify-center font-serif text-amber-900">Chargement des données du jeu...</div>;
  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif text-amber-900">Chargement...</div>;
  if (!session) return <Auth />;

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800 font-sans pb-24 md:pb-0 transition-colors duration-500">
            {/* 1. VUE LISTE (Intégrée) */}
            {view === 'list' && (
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
                />
            )}

            {/* 2. VUE CHANGELOG (Intégrée) */}
            {view === 'changelog' && (
                <div className="p-4 pt-8 max-w-3xl mx-auto">
                    <Changelog onBack={() => setView('list')} />
                </div>
            )}

            {/* 3. VUE CRÉATEUR (Affichée seulement si view === 'creator') */}
            {view === 'creator' && (
                <>
      {/* ICI COMMENCE VOTRE ANCIEN CODE (Header, Titre, etc.) */}    
      {/* 1. CONTENEUR PRINCIPAL CENTRÉ */}
      <div className="max-w-4xl mx-auto p-4 md:p-8">

            {/* Header v3.7.2 - Centrage Parfait via Grille 3 colonnes */}
            <div className="mb-8 border-b border-amber-200/50 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-3 items-end">
                    
                    {/* 1. Bloc Gauche (Équilibre) */}
                    <div className="hidden md:block"></div>

                    {/* 2. Bloc Central (Le Titre) */}
                    <h1 className="text-4xl font-serif font-bold text-amber-900 text-center whitespace-nowrap">
                        Les Héritiers
                    </h1>

                    {/* 3. Bloc Droite (La Version) */}
                    <div className="text-center md:text-right mt-2 md:mt-0">
                        <span className="text-xs text-amber-500 font-mono">
                            Version {APP_VERSION} • {BUILD_DATE}
                        </span>
                    </div>
                    
                </div>
            </div>

            {/* B. BARRE D'ACTIONS (Version Desktop uniquement) */}
            <div className="hidden md:flex flex-wrap justify-between items-center gap-4 mb-8">
                <div className="flex gap-2">
                    <button 
                        onClick={() => setView('list')}
                        className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif"
                    >
                        <List size={18} />
                        <span>Mes personnages</span>
                    </button>

                    <button 
                        onClick={() => {setView('changelog')}}
                        className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-purple-300 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif"
                    >
                        <BookOpen size={18} />
                        <span>Changements</span>
                    </button>
                </div>

                <div className="flex gap-2">
                    <button 
                        onClick={() => exportToPDF(character, gameData.fairyData)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif"
                        title="Exporter en PDF"
                    >
                        <FileText size={18} />
                        <span>PDF</span>
                    </button>

                    {!isReadOnly && (
                        <button 
                            onClick={handleSave}
                            className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif"
                        >
                            <Save size={18} />
                            <span>Sauvegarder</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Notification */}
            {showSaveNotification && (
                <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up flex items-center gap-2 z-50">
                    <Save size={18} />
                    <span>✓ Personnage sauvegardé avec succès !</span>
                </div>
            )}

			{/* Barre de progression DYNAMIQUE */}
			<div className="relative flex justify-between items-center mb-8 px-4">
				{/* Ligne de fond */}
				<div className="absolute top-1/2 left-0 w-full h-1 bg-amber-100 -z-10"></div>
				
				{/* Ligne de progression active */}
				<div 
					className="absolute top-1/2 left-0 h-1 bg-amber-400 -z-0 transition-all duration-500"
					style={{ width: `${((step - 1) / (LAST_STEP - 1)) * 100}%` }} 
				></div>

				{/* Boucle générant les étapes de 1 à LAST_STEP */}
				{Array.from({ length: LAST_STEP }, (_, i) => i + 1).map(s => (
					<button
						key={s}
						onClick={() => setStep(s)}
						className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all z-10 cursor-pointer ${
							step === s 
							? 'bg-amber-600 text-white ring-4 ring-amber-100 scale-110' 
							: step > s 
							? 'bg-amber-400 text-white hover:bg-amber-500' 
							: 'bg-amber-100 text-amber-600 hover:bg-amber-200'
						}`}
					>
						{s}
					</button>
				))}
			</div>

            {/* Rendu des Étapes */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-amber-100 min-h-[400px] animate-fade-in">
                {step === 1 && (
					<Step1 
						character={character} 
						onNomChange={handleNomChange} 
						onSexeChange={handleSexeChange} 
						onTypeFeeChange={handleTypeFeeChange}
						fairyTypes={gameData.fairyTypes}
						fairyTypesByAge={gameData.fairyTypesByAge}
						fairyData={gameData.fairyData}  // <--- CETTE LIGNE EST CRUCIALE
					/>				
                )}
                {step === 2 && (
                    <StepCaracteristiques 
                        character={character} 
                        onCaracteristiquesChange={handleCaracteristiquesChange}
                        fairyData={gameData.fairyData}
                    />
                )}
                {step === 3 && (
                    <StepProfils 
                        character={character} 
                        onProfilsChange={handleProfilsChange}
                        profils={gameData.profils}
                        competencesParProfil={gameData.competencesParProfil}
                    />
                )}
                {step === 4 && (
                    <StepCompetencesLibres 
                        character={character} 
                        onCompetencesLibresChange={handleCompetencesLibresChange}
                        profils={gameData.profils}
                        fairyData={gameData.fairyData}
                        competences={gameData.competences}
                        competencesParProfil={gameData.competencesParProfil}
                    />
                )}
                {step === 5 && (
                    <StepCompetencesFutiles 
                        character={character} 
                        onCompetencesFutilesChange={handleCompetencesFutilesChange}
                        fairyData={gameData.fairyData}
                    />
                )}
                {step === 6 && (
                    <Step2 
                        character={character} 
                        onCapaciteChoice={handleCapaciteChoice}
                        fairyData={gameData.fairyData}
                    />
                )}
                {step === 7 && (
                    <Step3 
                        character={character} 
                        onPouvoirToggle={handlePouvoirToggle}
                        fairyData={gameData.fairyData}
                    />
                )}
                {step === 8 && (
                    <StepRecapitulatif 
                        character={character} 
                        fairyData={gameData.fairyData}
                        competences={gameData.competences}
                        competencesParProfil={gameData.competencesParProfil}
                    />
                )}
            </div>

            {/* Navigation Bas de page */}
            <div className="flex justify-between mt-8">
                <button 
                    onClick={() => setStep(step - 1)} 
                    disabled={step === 1}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all ${
                        step === 1 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-amber-600 text-white hover:bg-amber-700'
                    }`}
                >
                    <ChevronLeft size={20} />
                    <span>Précédent</span>
                </button>

				{!isReadOnly && (
				<button
					onClick={async () => {
						if (step === LAST_STEP) { await handleSave(); setView('list'); }
						else { setStep(step + 1); window.scrollTo(0, 0); }
					}}
					className="flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all bg-amber-600 text-white hover:bg-amber-700">
							<span>{step === LAST_STEP ? 'Sauvegarder et Terminer' : 'Suivant'}</span>
							{step === LAST_STEP ? <Save size={20} /> : <ChevronRight size={20} />}
				</button>
			)}
		</div>
      </div>
	  
                    {/* Fin des boutons de navigation du créateur */}
                </>
            )} {/* <--- AJOUTEZ CECI POUR FERMER LE BLOC {view === 'creator' && ( */}

            {/* === BARRE DE NAVIGATION MOBILE (Bottom Bar) === */}

		<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-amber-200 px-2 py-1 flex justify-around items-center z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
			
			{/* 1. Accueil / Liste */}
			<button 
				onClick={() => setView('list')}
				className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
					view === 'list' ? 'text-amber-600' : 'text-gray-400 hover:text-amber-500'
				}`}
			>
				<Home size={24} strokeWidth={view === 'list' ? 2.5 : 2} />
				<span className="text-[10px] font-bold mt-1">Accueil</span>
			</button>

			{/* 2. Édition / Nouveau (Active l'étape en cours) */}
			<button 
				onClick={() => {
					// Si on n'est pas en création, on initialise un nouveau perso (ou on reprend le dernier)
					if (view !== 'creator') {
						if (!character.id) {
							// Pas de perso en cours -> Nouveau
							setCharacter(initialCharacterState);
							setIsReadOnly(false);
							setStep(1);
						}
						setView('creator');
					}
				}}
				className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
					view === 'creator' ? 'text-amber-600' : 'text-gray-400 hover:text-amber-500'
				}`}
			>
				<PlusCircle size={24} strokeWidth={view === 'creator' ? 2.5 : 2} />
				<span className="text-[10px] font-bold mt-1">
					{character.id ? 'Édition' : 'Nouveau'}
				</span>
			</button>

			{/* 3. Sauvegarder (Bouton d'action central) */}
			{view === 'creator' && !isReadOnly && (
				<button 
					onClick={handleSave}
					className="flex flex-col items-center justify-center p-2 -mt-6"
				>
					<div className="bg-amber-600 text-white p-3 rounded-full shadow-lg border-4 border-stone-50 hover:bg-amber-700 hover:scale-105 transition-all">
						<Save size={24} />
					</div>
					<span className="text-[10px] font-bold mt-1 text-amber-600">Sauver</span>
				</button>
			)}

			{/* 4. Changements / Infos */}
			<button 
				onClick={() => setView('changelog')}
				className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
					view === 'changelog' ? 'text-purple-600' : 'text-gray-400 hover:text-purple-500'
				}`}
			>
				<FileText size={24} strokeWidth={view === 'changelog' ? 2.5 : 2} />
				<span className="text-[10px] font-bold mt-1">Infos</span>
			</button>

			{/* 5. Compte (Déconnexion ou paramètres) */}
			<button 
				onClick={() => {
					// Logique simple pour l'instant : toggle ou alert
					if (window.confirm("Se déconnecter ?")) {
						supabase.auth.signOut();
					}
				}}
				className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-400 hover:text-red-500 transition-all"
			>
				<User size={24} />
				<span className="text-[10px] font-bold mt-1">Compte</span>
			</button>
		</div>
    </div>
  );
}

export default App;