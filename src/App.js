// src/App.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, X } from './config/icons';
import { isSuperAdmin } from './utils/authRoles';
import { useAppInit } from './hooks/useAppInit';
import { showInAppNotification } from './utils/SystemeServices';
import AppRouter from './AppRouter';

import Auth from './components/Auth';
import BackgroundDecor from './components/BackgroundDecor';
import Telegraphe from './components/Telegraphe';
import DiceRoller from './components/DiceRoller';
import WidgetAnomalie from './components/forge/WidgetAnomalie';
import { InAppNotification as AlertSystem, PWAPrompt, DisclaimerModal } from './components/SystemeModales';
import { APP_VERSION, BUILD_DATE } from './version';
import { UserContext } from './context/UserContext';
import { useOfflineStatus } from './context/OfflineStatusContext';
import { useCorrectionCheck } from './hooks/useCorrectionCheck';
import CorrectionRequestModal from './components/CorrectionRequestModal';
import AdminCorrectionWidget from './components/AdminCorrectionWidget';
import ResetPasswordForm from './components/ResetPasswordForm';
import OfflineBanner from './components/OfflineBanner';
import PendingValidationsAlert from './components/PendingValidationsAlert';
import { usePendingValidationsAlert } from './hooks/usePendingValidationsAlert';
import PendingGrantsAlert from './components/PendingGrantsAlert';
import GrantAcceptanceModal from './components/GrantAcceptanceModal';
import { usePendingGrants } from './hooks/usePendingGrants';

export default function App() {
  const { session, userProfile, refreshUserProfile, globalLoading, loadingStep, isRecoveryMode } = useAppInit();
  const [showVersionModal, setShowVersionModal] = useState(false);
  const [versionHistory, setVersionHistory] = useState(null);

  // Système de correction : joueur + admin
  const { pendingCorrections, adminQueue, respondToCorrection, markCorrected } = useCorrectionCheck(userProfile);
  const { pendingCount, isVisible: showValidationsAlert, dismiss: dismissValidationsAlert } = usePendingValidationsAlert(userProfile);
  const { pendingGrants, setPendingGrants } = usePendingGrants(userProfile);
  const handleGrantResponded = React.useCallback((grantId) => {
    setPendingGrants(prev => prev.filter(g => g.id !== grantId));
  }, [setPendingGrants]);
  const [showGrantsModal, setShowGrantsModal] = React.useState(false);
  const [grantsAlertDismissed, setGrantsAlertDismissed] = React.useState(false);
  const navigate = useNavigate();
  const { isOnline, hasCachedData } = useOfflineStatus();

  // Chargement différé de l'historique des versions (103 KB économisés du bundle initial)
  React.useEffect(() => {
    if (showVersionModal && !versionHistory) {
      import('./version').then(m => setVersionHistory(m.VERSION_HISTORY));
    }
  }, [showVersionModal, versionHistory]);


  if (!isOnline && !hasCachedData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lh-nuit p-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-2xl font-serif font-bold text-lh-or mb-4">
            Le Grimoire n'est pas encore ouvert
          </h1>
          <p className="text-lh-parchemin/70 leading-relaxed">
            Votre Grimoire n'a pas encore été chargé. Connectez-vous une première fois en ligne pour activer le mode hors ligne.
          </p>
        </div>
      </div>
    );
  }

  if (globalLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lh-parchemin p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lh-or mx-auto mb-4"></div>
          <p className="text-lg text-lh-encre font-serif">{loadingStep}</p>
        </div>
      </div>
    );
  }

  if (isRecoveryMode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lh-parchemin p-4">
        <main>
          <ResetPasswordForm />
        </main>
      </div>
    );
  }

  if (!session || !userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lh-parchemin p-4">
        <main>
          <Auth />
        </main>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ session, userProfile, refreshUserProfile }}>
    <div className="min-h-screen bg-lh-parchemin pb-24 text-lh-encre">
      <OfflineBanner />


      <AlertSystem />
      <PWAPrompt />
      <DisclaimerModal />

      {/* Modale de demande d'autorisation de correction (joueur) */}
      {pendingCorrections.length > 0 && (
        <CorrectionRequestModal
          corrections={pendingCorrections}
          onRespond={respondToCorrection}
        />
      )}

      {/* Alerte validations en attente (admin seulement) */}
      {showValidationsAlert && (
        <PendingValidationsAlert
          count={pendingCount}
          onNavigate={() => { dismissValidationsAlert(); navigate('/validations'); }}
          onDismiss={dismissValidationsAlert}
        />
      )}

      {/* Alerte cartes personnelles en attente */}
      {pendingGrants.length > 0 && !showGrantsModal && !grantsAlertDismissed && (
        <PendingGrantsAlert
          count={pendingGrants.length}
          onView={() => { setGrantsAlertDismissed(true); setShowGrantsModal(true); }}
          onDismiss={() => setGrantsAlertDismissed(true)}
        />
      )}

      {showGrantsModal && pendingGrants.length > 0 && (
        <GrantAcceptanceModal
          grants={pendingGrants}
          onClose={() => { setShowGrantsModal(false); setGrantsAlertDismissed(false); }}
          onDone={() => setShowGrantsModal(false)}
          onResponded={handleGrantResponded}
        />
      )}

      {/* Widget Docte : personnages autorisés à corriger (admin seulement) */}
      <AdminCorrectionWidget
        adminQueue={adminQueue}
        onMarkCorrected={markCorrected}
      />
      <BackgroundDecor />

      <header className="pt-4 pb-3 text-center relative z-10 bg-lh-nuit border-b-2 border-lh-or">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <img
            src="/assets/logo/logo-heritiers-soustitre.png"
            alt="Les Héritiers — Aventures féeriques à la Belle Époque"
            className="h-20 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => navigate('/')}
            title="Retour à l'accueil"
          />
          <button
            onClick={() => setShowVersionModal(true)}
            className="text-xs text-lh-or bg-lh-nuit/50 hover:bg-lh-nuit border border-lh-or/40 px-3 py-1 rounded-full uppercase tracking-widest font-bold transition-all shadow-sm flex items-center gap-2"
            aria-label={`Journal des mises à jour, version ${APP_VERSION}`}
          >
            Version {APP_VERSION} • {BUILD_DATE} <BookOpen size={12} />
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2 max-w-2xl mx-auto">
          {isSuperAdmin(userProfile) && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-lh-bordeaux/20 text-lh-or text-xs font-bold rounded-full border border-lh-or/30 shadow-sm">
              Super Admin
            </span>
          )}
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 w-full relative z-10">
        <AppRouter />
      </main>

      {session && userProfile && <Telegraphe />}
      {session && <WidgetAnomalie />}
      <DiceRoller use3DDice={userProfile?.profile?.use_3d_dice} diceTheme={userProfile?.profile?.dice_theme} />

      {/* 4. MODALE DU JOURNAL DES VERSIONS */}
      {showVersionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-lh-nuit/70 backdrop-blur-sm p-4">
          <div className="bg-lh-parchemin max-w-2xl w-full max-h-[80vh] rounded-xl shadow-2xl border-2 border-lh-or/20 flex flex-col overflow-hidden">
            <div className="bg-lh-nuit text-lh-parchemin p-4 flex justify-between items-center shadow-md z-10 shrink-0">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <BookOpen size={18} className="text-lh-or" /> Registre des Mises à jour
              </h3>
              <button onClick={() => setShowVersionModal(false)} className="hover:text-lh-bordeaux bg-lh-or/10 p-1.5 rounded-lg transition-colors" aria-label="Fermer le registre des mises à jour">
                <X size={18} />
              </button>
            </div>
            
            {/* ✨ LE FIX : On ouvre le parchemin et on affiche le vrai historique ! */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              {versionHistory ? versionHistory.map((entry, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="text-lg font-bold text-lh-encre font-serif border-b border-lh-gris-parchemin pb-1 mb-3">
                    {entry.version} <span className="text-sm font-normal text-lh-or-sombre italic ml-2">({entry.date})</span>
                  </h4>
                  <ul className="space-y-3">
                    {entry.changes.map((change, i) => {
                      // Mini-parseur pour transformer nos "**" en texte gras 
                      const parts = change.split('**');
                      return (
                        <li key={i} className="text-sm text-lh-encre/80 leading-relaxed flex items-start gap-2">
                          <span className="mt-0.5 text-lh-or shrink-0">✦</span>
                          <span>
                            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-lh-encre font-bold">{part}</strong> : part)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )) : (
                <div className="flex items-center justify-center py-12 text-lh-gris-parchemin">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lh-or mr-3"></div>
                  Chargement du registre...
                </div>
              )}
            </div>
            
          </div>
        </div>
      )}
    </div>
    </UserContext.Provider>
  );
}