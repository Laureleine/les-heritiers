// src/App.js
// Version: 3.4.2
// Build: 2026-02-04 23:55
// Correction: Restauration du design "intégré" (bandeaux non fixes) conforme à la v2.15.0.

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Save, List, FileText, BookOpen, Clock } from 'lucide-react';
import { supabase } from '../config/supabase';
import { loadAllGameData } from '../utils/supabaseGameData';
import { getFairyAge } from '../data/dataHelpers';
import { APP_VERSION, BUILD_DATE } from '../version';

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

import { saveCharacterToSupabase } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/utils';

function CharacterCreator() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameDataLoading, setGameDataLoading] = useState(true);
  const [view, setView] = useState('list');
  const [step, setStep] = useState(1);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  const [gameData, setGameData] = useState({
    profils: [],
    competences: {},
    competencesParProfil: {},
    competencesFutiles: [],
    fairyData: {},
    fairyTypes: [],
    fairyTypesByAge: { traditionnelles: [], modernes: [] }
  });

  // Structure de données v3.4 (Choix de prédilections inclus)
  const [character, setCharacter] = useState({
    id: null,
    nom: '',
    sexe: '',
    typeFee: '',
    anciennete: null,
    caracteristiques: {},
    profils: { majeur: { nom: '', trait: '' }, mineur: { nom: '', trait: '' } },
    competencesLibres: { rangs: {}, choixPredilection: {}, choixSpecialite: {} },
    competencesFutiles: { rangs: {}, choixPredilection: {}, personnalisees: [] },
    capaciteChoisie: '',
    pouvoirs: [],
    isPublic: false
  });

  // Chargement des données
  useEffect(() => {
    const loadData = async () => {
      try {
        setGameDataLoading(true);
        const data = await loadAllGameData();
        setGameData(data);
      } catch (error) {
        console.error('Erreur données:', error);
      } finally {
        setGameDataLoading(false);
      }
    };
    loadData();
  }, []);

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

  // Logique de validation renforcée (v3.4.0)
  const canProceedStep1 = character.nom.trim() && character.sexe && character.typeFee;
  const canProceedStep2 = Object.keys(character.caracteristiques).length > 0;
  const canProceedStep3 = character.profils?.majeur?.nom && character.profils?.mineur?.nom;

  const canProceedStep4 = () => {
    const lib = character.competencesLibres || {};
    const points = Object.values(lib.rangs || {}).reduce((sum, val) => sum + val, 0);
    const feeData = gameData.fairyData[character.typeFee];
    const predOK = feeData?.competencesPredilection?.every((c, i) => {
      const compOK = !c.isChoix || lib.choixPredilection?.[i];
      const specOK = !c.isSpecialiteChoix || lib.choixSpecialite?.[i];
      return compOK && specOK;
    }) ?? true;
    return points === 15 && predOK;
  };

  const handleSave = async () => {
    try {
      const saved = await saveCharacterToSupabase(character);
      setCharacter({ ...character, id: saved.id, updated_at: saved.updated_at });
      setShowSaveNotification(true);
      setTimeout(() => setShowSaveNotification(false), 3000);
    } catch (e) { alert(e.message); }
  };

  if (gameDataLoading || loading) return <div className="p-20 text-center font-serif text-amber-900">Chargement de la Féérie...</div>;
  if (!session) return <Auth />;
  if (view === 'list') return <CharacterList onSelectCharacter={(c) => { setCharacter(c); setView('creator'); }} onNewCharacter={() => { setCharacter({...character, id: null, nom: ''}); setStep(1); setView('creator'); }} onSignOut={() => supabase.auth.signOut()} />;

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
        
        {/* BANDEAU HAUT (Intégré au conteneur) */}
        <header className="bg-amber-900 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="font-serif text-4xl">Les Héritiers</h1>
              <p className="text-amber-200 italic mt-1 text-sm">Belle Époque • Paris | v{APP_VERSION}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={() => setView('list')} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all font-serif text-sm border border-white/20">
                <List size={16} /> Mes personnages
              </button>
              <button onClick={() => exportToPDF(character, gameData.fairyData)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all font-serif text-sm">
                <FileText size={16} /> PDF
              </button>
              <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-all font-serif text-sm shadow-lg">
                <Save size={16} /> Sauvegarder
              </button>
            </div>
          </div>

          {/* Barre de progression intégrée */}
          <div className="mt-8 flex items-center justify-between gap-2 max-w-3xl mx-auto">
            {[3-10].map(s => (
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-xs transition-all ${step === s ? 'bg-amber-500 text-white ring-4 ring-amber-500/30' : step > s ? 'bg-amber-700 text-amber-200' : 'bg-amber-950 text-amber-600 border border-amber-800'}`}>
                  {s}
                </div>
                {s < 8 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-amber-500' : 'bg-amber-950'}`} />}
              </React.Fragment>
            ))}
          </div>
        </header>

        {/* CONTENU CENTRAL (Scrolling naturel) */}
        <main className="p-8 md:p-12">
          {showSaveNotification && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
              <Save size={20} /> Personnage synchronisé avec succès
            </div>
          )}

          {step === 1 && <Step1 character={character} onNomChange={(n) => setCharacter({...character, nom: n})} onSexeChange={(s) => setCharacter({...character, sexe: s})} onTypeFeeChange={(t) => setCharacter({...character, typeFee: t, anciennete: getFairyAge(t)})} fairyTypesByAge={gameData.fairyTypesByAge} />}
          {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={(c) => setCharacter({...character, caracteristiques: c})} fairyData={gameData.fairyData} />}
          {step === 3 && <StepProfils character={character} onProfilsChange={(p) => setCharacter({...character, profils: p})} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(cl) => setCharacter({...character, competencesLibres: cl})} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(cf) => setCharacter({...character, competencesFutiles: cf})} fairyData={gameData.fairyData} />}
          {step === 6 && <Step2 character={character} onCapaciteChoice={(c) => setCharacter({...character, capaciteChoisie: c})} fairyData={gameData.fairyData} />}
          {step === 7 && <Step3 character={character} onPouvoirToggle={(p) => setCharacter({...character, pouvoirs: character.pouvoirs.includes(p) ? character.pouvoirs.filter(x => x !== p) : [...character.pouvoirs, p]})} fairyData={gameData.fairyData} />}
          {step === 8 && <StepRecapitulatif character={character} fairyData={gameData.fairyData} competencesParProfil={gameData.competencesParProfil} />}

          {/* NAVIGATION BAS (Intégrée au flux) */}
          <div className="mt-12 pt-8 border-t border-amber-100 flex justify-between items-center">
            <button 
              onClick={() => setStep(step - 1)} 
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-50 transition-all font-serif"
            >
              <ChevronLeft size={20} /> Précédent
            </button>
            
            <button 
              onClick={() => step === 8 ? handleSave() : setStep(step + 1)} 
              disabled={
                (step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || 
                (step === 3 && !canProceedStep3) || (step === 4 && !canProceedStep4()) ||
                (step === 6 && !character.capaciteChoisie) || (step === 7 && character.pouvoirs.length !== 3)
              }
              className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 shadow-lg shadow-amber-200 disabled:bg-gray-300 disabled:shadow-none transition-all font-serif"
            >
              {step === 8 ? 'Terminer et Sauver' : 'Suivant'} <ChevronRight size={20} />
            </button>
          </div>
        </main>
      </div>
      
      <p className="text-center mt-6 text-amber-900/40 text-xs font-serif uppercase tracking-widest">
        Les Héritiers • Système 3D • Build {BUILD_DATE}
      </p>
    </div>
  );
}

export default CharacterCreator;