// Version: 2.10.0
// Build: 2026-01-31 21:00
// Description: Composant principal de l'application Les Héritiers
// Dernière modification: 2026-01-31

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Save, List, FileText, BookOpen, Database } from 'lucide-react';
import { supabase } from '../config/supabase';
import { fairyData } from '../data/data';
import { getFairyAge } from '../data/dataHelpers';
import { APP_VERSION, BUILD_DATE, VERSION_HISTORY } from '../version';
import Step1 from './Step1';
import StepCaracteristiques from './StepCaracteristiques';
import StepProfils from './StepProfils';
import StepCompetencesLibres from './StepCompetencesLibres';
import StepCompetencesFutiles from './StepCompetencesFutiles';
import Step2 from './Step2';
import Step3 from './Step3';
import StepRecapitulatif from './StepRecapitulatif';
import CharacterList from './CharacterList';
import Auth from './Auth';
import DataEditor from './DataEditor';
import ValidationsPendantes from './ValidationsPendantes';
import InAppNotification from './InAppNotification';
import { saveCharacterToSupabase } from '../utils/utils';
import { exportToPDF } from '../utils/utils';
import { registerServiceWorker, checkForUpdates } from '../utils/notificationSystem';

function CharacterCreator() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');
  const [step, setStep] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  
  const ADMIN_EMAIL = 'votre-email@example.com'; // À remplacer
  
  useEffect(() => {
    // Initialiser Service Worker et vérifier updates
    registerServiceWorker();
    checkForUpdates(APP_VERSION);
    
    // Vérifier admin
    if (session?.user?.email === ADMIN_EMAIL) {
      setIsAdmin(true);
      checkPendingChanges();
      // Polling toutes les 30s
      const interval = setInterval(checkPendingChanges, 30000);
      return () => clearInterval(interval);
    }
  }, [session]);

  const checkPendingChanges = async () => {
    const { count } = await supabase
      .from('data_change_requests')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');
    setPendingCount(count || 0);
  };
  const [character, setCharacter] = useState({
    id: null,
    nom: '',
    sexe: '',
    typeFee: '',
    anciennete: null,
    caracteristiques: {},
    profils: {
      majeur: { nom: '', trait: '' },
      mineur: { nom: '', trait: '' }
    },
    competencesLibres: {},
    competencesFutiles: {
      rangs: {},
      personnalisees: []
    },
    capaciteChoisie: '',
    pouvoirs: [],
    isPublic: false,
    createdAt: new Date().toISOString()
  });
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  useEffect(() => {
    // Vérifier la session au chargement
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Écouter les changements d'authentification
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setView('list');
  };

  const handleNewCharacter = () => {
    setCharacter({
      id: null,
      nom: '',
      sexe: '',
      typeFee: '',
      anciennete: null,
      caracteristiques: {},
      profils: {
        majeur: { nom: '', trait: '' },
        mineur: { nom: '', trait: '' }
      },
      competencesLibres: {},
      competencesFutiles: {
        rangs: {},
        personnalisees: []
      },
      capaciteChoisie: '',
      pouvoirs: [],
      isPublic: false,
      createdAt: new Date().toISOString()
    });
    setStep(1);
    setView('creator');
  };

  const handleSelectCharacter = (char) => {
    setCharacter(char);
    setStep(1);
    setView('creator');
  };

  const handleSave = async () => {
    if (!character.nom.trim()) {
      alert('Veuillez donner un nom à votre personnage');
      return;
    }
    if (!character.sexe || !character.typeFee) {
      alert('Veuillez compléter au moins le sexe et le type de fée');
      return;
    }

    try {
      const savedChar = await saveCharacterToSupabase(character);
      setCharacter({ ...character, id: savedChar.id });
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
    } catch (error) {
      alert('Erreur lors de la sauvegarde : ' + error.message);
    }
  };

  const handleNomChange = (nom) => {
    setCharacter({ ...character, nom });
  };

  const handleSexeChange = (sexe) => {
    setCharacter({ ...character, sexe });
  };

  const handleTypeFeeChange = (typeFee) => {
    const anciennete = getFairyAge(typeFee);
    // Initialiser les caractéristiques au minimum
    const feeData = fairyData[typeFee];
    const caracteristiques = {};
    if (feeData && feeData.caracteristiques) {
      Object.keys(feeData.caracteristiques).forEach(key => {
        caracteristiques[key] = feeData.caracteristiques[key].min;
      });
    }
    setCharacter({ 
      ...character, 
      typeFee,
      anciennete,
      caracteristiques, 
      capaciteChoisie: '', 
      pouvoirs: [] 
    });
  };

  const handleCaracteristiquesChange = (caracteristiques) => {
    setCharacter({ ...character, caracteristiques });
  };

  const handleProfilsChange = (profils) => {
    setCharacter({ ...character, profils });
  };

  const handleCompetencesLibresChange = (competencesLibres) => {
    setCharacter({ ...character, competencesLibres });
  };

  const handleCompetencesFutilesChange = (competencesFutiles) => {
    setCharacter({ ...character, competencesFutiles });
  };

  const handleCapaciteChoice = (capacite) => {
    setCharacter({ ...character, capaciteChoisie: capacite });
  };

  const handlePouvoirToggle = (pouvoir) => {
    const pouvoirs = character.pouvoirs.includes(pouvoir)
      ? character.pouvoirs.filter(p => p !== pouvoir)
      : character.pouvoirs.length < 3
      ? [...character.pouvoirs, pouvoir]
      : character.pouvoirs;
    setCharacter({ ...character, pouvoirs });
  };

  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = character.caracteristiques && Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.majeur?.trait && 
                          character.profils?.mineur?.nom && character.profils?.mineur?.trait;
  
  // Validation Step4 : Vérifier que les 15 points ont été dépensés
  const canProceedStep4 = () => {
    const pointsDepenses = Object.entries(character.competencesLibres || {}).reduce((sum, [comp, data]) => {
      let points = data.rangsSupplementaires || 0;
      if (data.specialites) {
        points += data.specialites.length;
      }
      return sum + points;
    }, 0);
    return pointsDepenses === 15;
  };
  
  // Validation Step5 : Vérifier que les 10 points ont été dépensés pour les compétences futiles
  const canProceedStep5 = () => {
    const pointsDepenses = Object.values(character.competencesFutiles?.rangs || {}).reduce((sum, rangs) => sum + rangs, 0);
    return pointsDepenses === 10;
  };
  
  const canProceedStep6 = character.capaciteChoisie;
  const canProceedStep7 = character.pouvoirs.length === 3;
  // Step 8 (Récapitulatif) toujours accessible

  // Afficher l'écran de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-2xl font-serif text-amber-900">Chargement...</div>
      </div>
    );
  }

  // Si pas de session, afficher l'authentification
  if (!session) {
    return <Auth />;
  }

  // Liste des personnages
  if (view === 'list') {
    return (
      <CharacterList
        onSelectCharacter={handleSelectCharacter}
        onNewCharacter={handleNewCharacter}
        onSignOut={handleSignOut}
        onDataEditor={() => setView('data-editor')}
        session={session}
        setView={setView}
        isAdmin={isAdmin}
        pendingCount={pendingCount}
      />
    );
  }
  
  // Éditeur de données
  if (view === 'data-editor') {
    return (
      <DataEditor
        session={session}
        onBack={() => setView('creation')}
      />
    );
  }
  
  // Validations pendantes
  if (view === 'validations') {
    return (
      <ValidationsPendantes
        session={session}
        onBack={() => setView('list')}
        isAdmin={isAdmin}
      />
    );
  }
  
  // Changelog
  if (view === 'changelog') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-serif text-purple-900">Changements</h1>
              <button
                onClick={() => setView('creation')}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-serif"
              >
                Retour
              </button>
            </div>
            
            <div className="space-y-6">
              {VERSION_HISTORY.map((version, idx) => {
                const colors = {
                  major: { border: 'border-red-600', text: 'text-red-900', subtext: 'text-red-600', bg: 'text-red-800' },
                  minor: { border: 'border-purple-600', text: 'text-purple-900', subtext: 'text-purple-600', bg: 'text-purple-800' },
                  patch: { border: 'border-blue-600', text: 'text-blue-900', subtext: 'text-blue-600', bg: 'text-blue-800' }
                };
                const color = colors[version.type] || colors.patch;
                
                return (
                  <div key={idx} className={`border-l-4 ${color.border} pl-4`}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-lg font-bold ${color.text}`}>v{version.version}</span>
                      <span className={`text-sm ${color.subtext}`}>{version.date}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${color.subtext} bg-opacity-20 bg-current`}>
                        {version.type}
                      </span>
                    </div>
                    <ul className={`${color.bg} space-y-1 text-sm`}>
                      {version.changes.map((change, changeIdx) => (
                        <li key={changeIdx}>• {change}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Créateur de personnage
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-2">
            Les Héritiers
          </h1>
          <p className="text-xl text-amber-700 italic">Création de Personnage</p>
          <div className="mt-2 flex items-center justify-center gap-4 text-sm text-amber-600">
            <span>Belle Époque • Paris</span>
            <span>•</span>
            <span>v{APP_VERSION}</span>
            <span>•</span>
            <span>{BUILD_DATE}</span>
          </div>
        </header>

        {/* Barre d'actions */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setView('list')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-amber-300 text-amber-900 rounded-lg hover:bg-amber-50 transition-all font-serif"
            >
              <List size={20} />
              <span>Mes personnages</span>
            </button>
            
            <button
              onClick={() => setView('data-editor')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-green-300 text-green-900 rounded-lg hover:bg-green-50 transition-all font-serif"
            >
              <Database size={20} />
              <span>Données</span>
            </button>
            
            <button
              onClick={() => setView('changelog')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-purple-300 text-purple-900 rounded-lg hover:bg-purple-50 transition-all font-serif"
            >
              <BookOpen size={20} />
              <span>Changements</span>
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => exportToPDF(character)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-serif"
              title="Exporter en PDF"
            >
              <FileText size={20} />
              <span>PDF</span>
            </button>

            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif"
            >
              <Save size={20} />
              <span>Sauvegarder</span>
            </button>
          </div>
        </div>

        {/* Notification de sauvegarde */}
        {showSaveNotification && (
          <div className="mb-4 p-4 bg-green-100 border-2 border-green-400 rounded-lg text-green-800 text-center font-serif">
            ✓ Personnage sauvegardé avec succès !
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-4 border-amber-200">
          {/* Barre de progression */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                  <React.Fragment key={s}>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-xs ${
                        step === s
                          ? 'bg-amber-600 text-white'
                          : step > s
                          ? 'bg-amber-400 text-white'
                          : 'bg-amber-100 text-amber-600'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 8 && (
                      <div
                        className={`flex-1 h-1 ${
                          step > s ? 'bg-amber-400' : 'bg-amber-100'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Étapes */}
          <div className="mb-8">
            {step === 1 && (
              <Step1
                character={character}
                onNomChange={handleNomChange}
                onSexeChange={handleSexeChange}
                onTypeFeeChange={handleTypeFeeChange}
              />
            )}
            {step === 2 && (
              <StepCaracteristiques
                character={character}
                onCaracteristiquesChange={handleCaracteristiquesChange}
                fairyData={fairyData}
              />
            )}
            {step === 3 && (
              <StepProfils
                character={character}
                onProfilsChange={handleProfilsChange}
              />
            )}
            {step === 4 && (
              <StepCompetencesLibres
                character={character}
                onCompetencesLibresChange={handleCompetencesLibresChange}
                fairyData={fairyData}
              />
            )}
            {step === 5 && (
              <StepCompetencesFutiles
                character={character}
                onCompetencesFutilesChange={handleCompetencesFutilesChange}
                fairyData={fairyData}
              />
            )}
            {step === 6 && (
              <Step2
                character={character}
                onCapaciteChoice={handleCapaciteChoice}
                fairyData={fairyData}
              />
            )}
            {step === 7 && (
              <Step3
                character={character}
                onPouvoirToggle={handlePouvoirToggle}
                fairyData={fairyData}
              />
            )}
            {step === 8 && (
              <StepRecapitulatif
                character={character}
                fairyData={fairyData}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t-2 border-amber-200">
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

            <button
              onClick={() => {
                if (step === 8) {
                  handleSave();
                  setView('list');
                } else {
                  setStep(step + 1);
                }
              }}
              disabled={
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2) ||
                (step === 3 && !canProceedStep3) ||
                (step === 4 && !canProceedStep4()) ||
                (step === 5 && !canProceedStep5()) ||
                (step === 6 && !canProceedStep6) ||
                (step === 7 && !canProceedStep7)
              }
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-serif transition-all ${
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2) ||
                (step === 3 && !canProceedStep3) ||
                (step === 4 && !canProceedStep4()) ||
                (step === 5 && !canProceedStep5()) ||
                (step === 6 && !canProceedStep6) ||
                (step === 7 && !canProceedStep7)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              <span>{step === 8 ? 'Sauvegarder et Terminer' : 'Suivant'}</span>
              {step === 8 ? <Save size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>
      <InAppNotification />
    </div>
  );
}

export default CharacterCreator;