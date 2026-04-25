// src/components/creator/CharacterCreator.jsx
import React, { useState, useMemo, useCallback, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Printer } from 'lucide-react';
import { exportToPDF } from '../../utils/pdfGenerator';
import { useCharacter } from '../../context/CharacterContext'; 
import { saveCharacterToSupabase } from '../../utils/supabaseStorage';
import { showInAppNotification } from '../../utils/SystemeServices';
import { STEP_CONFIG } from '../../data/DictionnaireJeu';
import { List, Save, Sparkles, BookOpen } from 'lucide-react';
import JournalAmeModal from '../JournalAmeModal';
import PixieAssistant from '../PixieAssistant';

// Code Splitting
const Step1 = lazy(() => import('../Step1'));
const StepCapacites = lazy(() => import('../StepCapacites'));
const StepPouvoirs = lazy(() => import('../StepPouvoirs'));
const StepAtouts = lazy(() => import('../StepAtouts'));
const StepCaracteristiques = lazy(() => import('../StepCaracteristiques'));
const StepProfils = lazy(() => import('../StepProfils'));
const StepCompetencesLibres = lazy(() => import('../competencesLibres/StepCompetencesLibres'));
const StepCompetencesFutiles = lazy(() => import('../StepCompetencesFutiles'));
const StepVieSociale = lazy(() => import('../vieSociale/StepVieSociale'));
const StepPersonnalisation = lazy(() => import('../StepPersonnalisation'));
const StepRecapitulatif = lazy(() => import('../StepRecapitulatif'));

export default function CharacterCreator({ session, userProfile }) {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const navigate = useNavigate();
  const location = useLocation();

  // ✨ LE VIDEUR INFAILLIBLE : Contrôle le laissez-passer
  useEffect(() => {
    if (!location.state?.legitAccess) {
      showInAppNotification("Les fluides mémoriels se sont dissipés. Veuillez rouvrir votre parchemin depuis les archives.", "warning");
      navigate('/', { replace: true });
    }
  }, [location.state, navigate]);

  const [step, setStep] = useState(() => {
    return (character?.statut === 'scelle' || character?.statut === 'scellé') ? 11 : 1;
  });

  const [showJournalAme, setShowJournalAme] = useState(false);

  const totalSteps = STEP_CONFIG.length;
  const canProceedStep1 = character?.nom && character?.sexe && character?.typeFee;

  const nextStep = () => {
    if (step === 1 && !canProceedStep1) {
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

  const handleSave = async () => {
    if (isReadOnly) return;
    if (!character?.nom?.trim() || !character?.sexe || !character?.typeFee) {
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

  const handleAdjustXP = useCallback((amount) => {
    const currentTotal = character?.xp_total || 0;
    const depense = character?.xp_depense || 0;
    const newTotal = Math.max(depense, currentTotal + amount);
    
    if (newTotal === currentTotal) {
      if (amount < 0) showInAppNotification("Vous ne pouvez pas réduire votre Expérience en dessous des points déjà dépensés !", "warning");
      return;
    }

    const typeMouvement = amount > 0 ? 'GAIN' : 'REMBOURSEMENT';
    const labelMouvement = amount > 0 ? 'Ajustement Manuel' : 'Correction Manuelle';

    dispatchCharacter({
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: typeMouvement, label: labelMouvement, valeur: Math.abs(amount) },
      gameData
    });

    if (amount > 0) showInAppNotification(`Gling ! +${amount} XP ajoutés au Journal.`, "success");
    else showInAppNotification(`Ajustement : ${Math.abs(amount)} XP retirés du Journal.`, "info");
  }, [character?.xp_total, character?.xp_depense, dispatchCharacter, gameData]);

  const handleBackToArchives = () => {
    dispatchCharacter({ type: 'RESET_CHARACTER', payload: {} });
    navigate('/');
  };

  const stepComponents = useMemo(() => ({
    1: <Step1 />, 2: <StepCapacites />, 3: <StepPouvoirs />, 4: <StepAtouts />,
    5: <StepCaracteristiques />, 6: <StepProfils />, 7: <StepCompetencesLibres />,
    8: <StepCompetencesFutiles />, 9: <StepVieSociale />, 10: <StepPersonnalisation />,
    11: <StepRecapitulatif />
  }), []);

  return (
    <div className="max-w-4xl mx-auto pb-8">
      {/* HEADER CRÉATEUR */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        
        {/* BOUTON GAUCHE : Retour */}
        <button onClick={handleBackToArchives} className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-serif font-bold text-sm shadow-sm">
          <List size={16} /> <span className="hidden sm:inline">Retour aux Archives</span>
        </button>

        {/* GROUPE DROITE : Actions globales */}
        <div className="flex items-center gap-3 ml-auto">
            
          {/* ✨ NOUVEAU BOUTON : IMPRIMER (Mauve) */}
          <button 
            onClick={() => exportToPDF(character, gameData)}
            className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-bold shadow-sm border border-purple-500" 
            title="Générer le parchemin PDF"
          >
            <Printer size={18} />
            <span className="hidden sm:inline">Imprimer</span>
          </button>

          {/* BOUTON SAUVEGARDER */}
          {!isReadOnly && (
            <button onClick={handleSave} className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold shadow-sm">
              <Save size={18} /> <span className="hidden sm:inline">Sauvegarder</span>
            </button>
          )}
        </div>
      </div>

      {/* LA BARRE DE PROGRESSION MAGIQUE */}
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
              >
                {s.icon || s.id}
              </button>
              <span className={`absolute top-12 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'text-amber-700 opacity-100' : 'text-stone-400 opacity-0 group-hover:opacity-100'}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* RUBAN DU PUITS DES ÂMES */}
      {(character?.statut === 'scelle' || character?.statut === 'scellé') && (
        <div className="mb-4 bg-gradient-to-r from-stone-900 to-stone-800 rounded-lg px-3 py-2 shadow-md border border-amber-700 flex flex-col md:flex-row justify-between items-center gap-3 text-amber-50 animate-fade-in">
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-400 animate-pulse" size={18} />
            <span className="font-serif font-bold text-amber-500">
              Le Puits des Âmes <span className="hidden sm:inline text-stone-400 font-sans font-normal text-sm ml-2">— Mode Évolution</span>
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 bg-stone-950 px-2 py-1.5 rounded-md border border-stone-700 shadow-inner">

            <button onClick={() => setShowJournalAme(true)} className="flex items-center gap-1.5 px-3 py-1 bg-stone-800 hover:bg-amber-900/40 text-amber-500 rounded transition-colors text-xs font-bold border border-amber-900/50 shadow-sm" title="Consulter le Journal des Flux de l'Âme">
              <BookOpen size={14} /> <span className="hidden sm:inline">Registre</span>
            </button>
            <div className="w-px h-6 bg-stone-700 mx-1"></div>
            <button onClick={() => handleAdjustXP(-1)} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-400 rounded transition-colors text-xs font-bold border border-stone-700 shadow-sm">-1</button>
            <div className="flex items-baseline gap-2 px-2">
              <span className="text-2xl font-black font-serif text-emerald-400">{(character?.xp_total || 0) - (character?.xp_depense || 0)}</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">XP</span>
            </div>
            <button onClick={() => handleAdjustXP(1)} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-emerald-400 rounded transition-colors text-xs font-bold border border-stone-700 shadow-sm">+1</button>
            <button onClick={() => handleAdjustXP(5)} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded transition-colors text-xs font-bold border border-amber-900 shadow-sm">+5</button>
          </div>
        </div>
      )}

      {/* CORPS DE L'ÉTAPE */}
      <main className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm min-h-[500px]">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center h-64 animate-pulse">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-4"></div>
            <p className="text-amber-900 font-serif text-lg font-bold">Dépliage du parchemin...</p>
          </div>
        }>
          {stepComponents[step]}
        </Suspense>
      </main>

      {/* NAVIGATION */}
      <div className="flex justify-between items-center mt-6">
        <button onClick={prevStep} disabled={step === 1} className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-bold disabled:opacity-50 shadow-sm">
          Précédent
        </button>
        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
          Étape {step} sur {totalSteps}
        </div>
        <button onClick={nextStep} disabled={step === totalSteps} className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all font-bold shadow-md disabled:opacity-50">
          Suivant
        </button>
      </div>

      <JournalAmeModal isOpen={showJournalAme} onClose={() => setShowJournalAme(false)} historiqueXp={character?.data?.historique_xp || []} />
      
      {userProfile?.profile?.show_pixie !== false && (
        <PixieAssistant
          character={character || {}}
          step={step}
          session={session}
          fairyData={gameData?.fairyData}
        />
      )}
    </div>
  );
}