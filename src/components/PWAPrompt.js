// 10.2.0

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share } from 'lucide-react';

export default function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // 1. On vérifie si l'utilisateur a déjà fermé ce popup dans le passé
    const hasDismissed = localStorage.getItem('pwa_prompt_dismissed');
    
    // 2. On vérifie si l'app est DÉJÀ installée et s'exécute en mode PWA
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    // Si c'est déjà une PWA ou s'il a refusé, on ne fait rien
    if (isStandalone || hasDismissed) return;

    // 3. Détection spécifique pour les utilisateurs Apple (iOS ne supporte pas l'installation automatique)
    const checkIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (checkIOS) {
      setIsIOS(true);
      // On attend quelques secondes pour ne pas agresser l'utilisateur dès l'ouverture
      setTimeout(() => setShowPrompt(true), 3000);
    }

    // 4. Capture de l'événement standard pour Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Empêche le mini-bandeau natif de Chrome d'apparaître
      setDeferredPrompt(e); // On sauvegarde l'événement
      
      // On affiche notre beau popup au bout de 3 secondes
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // On déclenche l'invite d'installation native du navigateur
    deferredPrompt.prompt();

    // On attend le choix de l'utilisateur
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('✅ PWA installée par le joueur !');
    }
    
    // Quoi qu'il arrive, on cache le popup
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // On sauvegarde le refus pour ne plus l'embêter
    localStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-6 w-[90vw] md:w-80 bg-white p-5 rounded-2xl shadow-2xl border-2 border-amber-400 z-[1] animate-fade-in-up">
      <button 
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 bg-gray-50 rounded-full p-1"
        title="Fermer"
      >
        <X size={16} />
      </button>

      <div className="flex items-start gap-4">
        <div className="bg-amber-100 p-2 rounded-xl text-amber-700 shrink-0">
          <Smartphone size={24} />
        </div>
        
        <div>
          <h4 className="font-serif font-bold text-amber-900 mb-1 leading-tight">
            Installez le Grimoire !
          </h4>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            Profitez du mode hors-ligne, d'un accès rapide sans votre navigateur et d'une meilleure fluidité.
          </p>

          {isIOS ? (
            <div className="text-[10px] bg-stone-100 p-2 rounded border border-stone-200 text-stone-600 font-medium">
              Pour installer sur iPhone/iPad, touchez l'icône <Share size={12} className="inline mx-0.5"/> <b>Partager</b> puis sélectionnez <b>"Sur l'écran d'accueil"</b>.
            </div>
          ) : (
            <button 
              onClick={handleInstallClick}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm shadow-sm"
            >
              <Download size={16} /> Installer l'application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}