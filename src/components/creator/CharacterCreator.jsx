// src/components/creator/CharacterCreator.jsx
import React, { useState, useMemo, useCallback, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Printer, List, Save, Sparkles, BookOpen, BookMarked } from '../../config/icons';
import { exportToPDF } from '../../utils/pdfGenerator';
import { useCharacter } from '../../context/CharacterContext';
import { useGameDataContext } from '../../context/GameDataContext';
import { saveCharacterToSupabase } from '../../utils/supabaseStorage';
import { showInAppNotification } from '../../utils/SystemeServices';
import { flushContactsToGrimoire, clearContactSyncQueue } from '../../utils/contactSyncQueue';
import { getXpState } from '../../utils/xpActions';
import { STEP_CONFIG } from '../../data/DictionnaireJeu';
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
const StepDruidisme = lazy(() => import('../StepDruidisme'));
const StepPersonnalisation = lazy(() => import('../StepPersonnalisation'));
const StepRecapitulatif = lazy(() => import('../StepRecapitulatif'));
const TabChroniques = lazy(() => import('../cercle/TabChroniques'));

export default function CharacterCreator({ session, userProfile }) {
  const { character, dispatchCharacter, isReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
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
    return (character?.statut === 'scelle' || character?.statut === 'scellé') ? STEP_CONFIG.length : 1;
  });

  const [showJournalAme, setShowJournalAme] = useState(false);
  const [showChroniques, setShowChroniques] = useState(false);

  const cercleId = location.state?.cercleId;
  const isDocteConsulting = isReadOnly && character?.userId !== session?.user?.id;

  const totalSteps = STEP_CONFIG.length;
  const isHumain = character?.typePersonnage === 'humain';
  const HUMAN_SKIPPED_STEPS = [2, 3, 4];

  const isEubage = !!character?.data?.eubage?.actif ||
    Object.values(character?.vieSociale || {}).flat().some(id =>
      (gameData.socialItems || []).find(i => i.id === id && i.nom?.includes('Eubage'))
    );

  const canProceedStep1 = character?.nom && character?.sexe && (
    isHumain ? !!character?.rangHumain : !!character?.typeFee
  );

  const nextStep = () => {
    if (step === 1 && !canProceedStep1) {
      showInAppNotification(
        isHumain
          ? "Les pages suivantes sont scellées. Renseignez d'abord votre Nom, Sexe et Rang !"
          : "Les pages suivantes sont scellées. Renseignez d'abord votre Nom, Sexe et Héritage féérique !",
        "warning"
      );
      return;
    }
    let next = step + 1;
    if (isHumain) while (HUMAN_SKIPPED_STEPS.includes(next) && next <= totalSteps) next++;
    if (next === 10 && !isEubage) next++;
    setStep(Math.min(totalSteps, next));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    let prev = step - 1;
    if (isHumain) while (HUMAN_SKIPPED_STEPS.includes(prev) && prev >= 1) prev--;
    if (prev === 10 && !isEubage) prev--;
    setStep(Math.max(1, prev));
    window.scrollTo(0, 0);
  };

  const handleSave = async () => {
    if (isReadOnly) return;
    const step1Valid = isHumain
      ? character?.nom?.trim() && character?.sexe && character?.rangHumain
      : character?.nom?.trim() && character?.sexe && character?.typeFee;
    if (!step1Valid) {
      showInAppNotification(
        isHumain
          ? "Impossible de sauvegarder : votre personnage a besoin d'un Nom, d'un Sexe et d'un Rang (Étape 1) !"
          : "Impossible de sauvegarder : votre Héritier a besoin d'un Nom, d'un Sexe et d'un Héritage (Étape 1) !",
        "warning"
      );
      return;
    }
    try {
      const saved = await saveCharacterToSupabase(character);
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'id', value: saved.id, gameData });
      showInAppNotification("✓ L'Héritier a été sauvegardé avec succès !", "success");

      // 📓 Synchronisation des contacts vers le Grimoire Personnel
      await flushContactsToGrimoire(saved.id, character.userId);
    } catch (e) {
      showInAppNotification("Les fluides éthérés refusent l'enregistrement : " + e.message, "error");
    }
  };

  const handleAdjustXP = useCallback((amount) => {
    if (isReadOnly || character?.userId !== session?.user?.id) return;
    const currentTotal = character?.xp_total || 0;
    const { xpDepense: depense } = getXpState(character);
    const newTotal = Math.max(depense, currentTotal + amount);
    
    if (newTotal === currentTotal) {
      if (amount < 0) showInAppNotification("Vous ne pouvez pas réduire votre Expérience en dessous des points déjà dépensés !", "warning");
      return;
    }

    dispatchCharacter({
      type: 'LOG_XP_TRANSACTION',
      transaction: {
        type: 'GAIN',
        code: amount > 0 ? 'XP_GAIN' : 'XP_AJUSTEMENT',
        label: amount > 0 ? 'Ajustement Manuel' : 'Correction Manuelle',
        valeur: amount,
      },
      gameData
    });

    if (amount > 0) showInAppNotification(`Gling ! +${amount} XP ajoutés au Journal.`, "success");
    else showInAppNotification(`Ajustement : ${Math.abs(amount)} XP retirés du Journal.`, "info");
  }, [character, dispatchCharacter, gameData, isReadOnly, session]);

  const handleBackToArchives = () => {
    clearContactSyncQueue(); // 📓 Vider la queue si on quitte sans sauvegarder
    dispatchCharacter({ type: 'RESET_CHARACTER', payload: {} });
    navigate(location.state?.from || '/');
  };

  // 📓 Nettoyage de la queue si le composant se démonte sans sauvegarde
  useEffect(() => {
    return () => clearContactSyncQueue();
  }, []);

  const stepComponents = useMemo(() => ({
    1: <Step1 />, 2: <StepCapacites />, 3: <StepPouvoirs />, 4: <StepAtouts />,
    5: <StepCaracteristiques />, 6: <StepProfils />, 7: <StepCompetencesLibres />,
    8: <StepCompetencesFutiles />, 9: <StepVieSociale />, 10: <StepDruidisme />,
    11: <StepPersonnalisation />, 12: <StepRecapitulatif />
  }), []);

  return (
    <div className="max-w-4xl mx-auto pb-8">
      {/* HEADER CRÉATEUR */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        
        {/* BOUTON GAUCHE : Retour */}
        <button onClick={handleBackToArchives} className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-serif font-bold text-sm shadow-sm">
          <List size={16} /> <span className="hidden sm:inline">{location.state?.from === '/cercles' ? 'Retour aux Cercles' : 'Retour aux Archives'}</span>
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

          {/* BOUTON CHRONIQUES (Docte en consultation) */}
          {isDocteConsulting && (
            <button
              onClick={() => setShowChroniques(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-700 hover:bg-stone-600 text-amber-100 rounded-lg transition-colors text-sm font-bold shadow-sm border border-stone-600"
              title="Chroniques d'Héritage"
            >
              <BookMarked size={18} />
              <span className="hidden sm:inline">Chroniques</span>
            </button>
          )}

          {/* BOUTON SAUVEGARDER */}
          {!isReadOnly && (
            <button onClick={handleSave} className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold shadow-sm">
              <Save size={18} /> <span className="hidden sm:inline">Sauvegarder</span>
            </button>
          )}
        </div>
      </div>

      {/* BANNIÈRE DETTE XP */}
      {character?.xp_dette === true && !isReadOnly && (
        <div className="mb-4 bg-red-50 border-2 border-red-300 rounded-xl p-4 flex items-start gap-3">
          <span className="text-red-500 text-xl shrink-0">⚠️</span>
          <div>
            <p className="font-serif font-bold text-red-800 text-sm">Dette en Points d'Expérience</p>
            <p className="text-red-700 text-xs mt-1">
              Suite à la reconstruction du journal, les XP dépensés dépassent votre total actuel.
              Vous ne pourrez pas dépenser de nouveaux XP tant que votre total n'aura pas rattrapé vos dépenses.
            </p>
          </div>
        </div>
      )}

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
          const isSkipped = isHumain && HUMAN_SKIPPED_STEPS.includes(s.id);
          return (
            <div key={s.id} className="relative z-10 flex flex-col items-center group">
              <button
                onClick={() => {
                  if (isSkipped) return;
                  if (s.id > 1 && !canProceedStep1) {
                    showInAppNotification("La magie bloque le passage. Terminez l'Étape 1 avant de sauter les pages.", "warning");
                    return;
                  }
                  setStep(s.id);
                  window.scrollTo(0, 0);
                }}
                disabled={isSkipped}
                aria-label={`${s.label}${isActive ? ' (étape en cours)' : isPast ? ' (terminée)' : ''}`}
                aria-current={isActive ? 'step' : undefined}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                  isSkipped
                    ? 'bg-stone-100 text-stone-300 border-2 border-stone-200 cursor-not-allowed opacity-40'
                    : isActive
                    ? 'bg-amber-500 text-white scale-125 ring-4 ring-amber-200'
                    : isPast
                    ? 'bg-amber-100 text-amber-700 border-2 border-amber-300 hover:bg-amber-200'
                    : 'bg-white border-stone-300 text-stone-400 hover:border-amber-300 hover:text-amber-500'
                }`}
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
            <button onClick={() => handleAdjustXP(-1)} disabled={isReadOnly || character?.userId !== session?.user?.id} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-400 rounded transition-colors text-xs font-bold border border-stone-700 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed" title={isReadOnly || character?.userId !== session?.user?.id ? 'Consultation seule — le Puits des Âmes appartient à l\'Héritier' : 'Retirer 1 XP'}>-1</button>
            <div className="flex items-baseline gap-2 px-2">
              <span className="text-2xl font-black font-serif text-emerald-400">{getXpState(character).xpDispo}</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">XP</span>
            </div>
            <button onClick={() => handleAdjustXP(1)} disabled={isReadOnly || character?.userId !== session?.user?.id} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-emerald-400 rounded transition-colors text-xs font-bold border border-stone-700 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed" title={isReadOnly || character?.userId !== session?.user?.id ? 'Consultation seule' : 'Ajouter 1 XP'}>+1</button>
            <button onClick={() => handleAdjustXP(5)} disabled={isReadOnly || character?.userId !== session?.user?.id} className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded transition-colors text-xs font-bold border border-amber-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed" title={isReadOnly || character?.userId !== session?.user?.id ? 'Consultation seule' : 'Ajouter 5 XP'}>+5</button>
          </div>
        </div>
      )}

      {/* CORPS DE L'ÉTAPE */}
      <section aria-label="Corps de l'étape" className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm min-h-[500px]">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center h-64 animate-pulse">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-4"></div>
            <p className="text-amber-900 font-serif text-lg font-bold">Dépliage du parchemin...</p>
          </div>
        }>
          {stepComponents[step]}
        </Suspense>
      </section>

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

      {showChroniques && isDocteConsulting && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-start justify-center pt-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl mx-4 mb-8">
            <button
              onClick={() => setShowChroniques(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors text-lg leading-none"
              aria-label="Fermer les Chroniques"
            >✕</button>
            <Suspense fallback={<div className="p-8 text-center text-stone-400">Chargement des chroniques…</div>}>
              <TabChroniques
                characterId={character?.id}
                characterNom={character?.nom || ''}
                isOwner={false}
                isDocte={true}
                cercleId={cercleId}
              />
            </Suspense>
          </div>
        </div>
      )}
      
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