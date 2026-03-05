import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share, AlertCircle, CheckCircle, Info, BookOpen, Check } from 'lucide-react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

// ============================================================================
// --- 1. ALERTE SYSTÈME (Écoute la base de données) ---
// ============================================================================
export function AlertSystem({ userProfile }) {
  useEffect(() => {
    if (!userProfile) return;

    const isGardien = userProfile.profile?.role === 'gardien' || userProfile.profile?.role === 'super_admin';
    const userId = userProfile.id;

    const channel = supabase
      .channel('db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'data_change_requests' },
        (payload) => {
          if (isGardien && payload.new.user_id !== userId) {
            showInAppNotification(`🛡️ Nouvelle proposition à valider : ${payload.new.record_name}`, 'info');
          }
        }
      )
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'data_change_requests', filter: `user_id=eq.${userId}` },
        (payload) => {
          const oldStatus = payload.old.status;
          const newStatus = payload.new.status;
          const recordName = payload.new.record_name;

          if (oldStatus !== newStatus) {
            if (newStatus === 'approved') {
              showInAppNotification(`⏳ Votre proposition pour "${recordName}" a été pré-validée par le Conseil !`, 'info');
            } else if (newStatus === 'archived') {
              showInAppNotification(`✨ Félicitations ! Votre modification sur "${recordName}" est officiellement en ligne !`, 'success');
            } else if (newStatus === 'rejected') {
              showInAppNotification(`❌ Votre proposition pour "${recordName}" a été rejetée par les Gardiens.`, 'error');
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userProfile]);

  return <InAppNotification />;
}

// ============================================================================
// --- 2. NOTIFICATION VISUELLE IN-APP ---
// ============================================================================
export function InAppNotification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNotification = (event) => {
      const { message, type } = event.detail;
      const id = Date.now();
      
      setNotifications(prev => [...prev, { id, message, type }]);
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 5000);
    };

    window.addEventListener('app-notification', handleNotification);
    return () => window.removeEventListener('app-notification', handleNotification);
  }, []);

  const removeNotification = (id) => setNotifications(prev => prev.filter(n => n.id !== id));

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} />;
      case 'error': return <AlertCircle size={20} />;
      case 'warning': return <AlertCircle size={20} />;
      default: return <Info size={20} />;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-400 text-green-800';
      case 'error': return 'bg-red-50 border-red-400 text-red-800';
      case 'warning': return 'bg-yellow-50 border-yellow-400 text-yellow-800';
      default: return 'bg-blue-50 border-blue-400 text-blue-800';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {notifications.map(notif => (
        <div key={notif.id} className={`p-4 rounded-lg border-2 shadow-lg animate-slide-in ${getColors(notif.type)}`}>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">{getIcon(notif.type)}</div>
            <div className="flex-1 font-serif">{notif.message}</div>
            <button onClick={() => removeNotification(notif.id)} className="flex-shrink-0 hover:opacity-70 transition-opacity">
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// --- 3. PROMPT D'INSTALLATION PWA ---
// ============================================================================
export function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const hasDismissed = localStorage.getItem('pwa_prompt_dismissed');
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

    if (isStandalone || hasDismissed) return;

    const checkIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (checkIOS) {
      setIsIOS(true);
      setTimeout(() => setShowPrompt(true), 3000);
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') console.log('✅ PWA installée par le joueur !');
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-6 w-[90vw] md:w-80 bg-white p-5 rounded-2xl shadow-2xl border-2 border-amber-400 z-[6] animate-fade-in-up">
      <button onClick={handleDismiss} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 bg-gray-50 rounded-full p-1" title="Fermer">
        <X size={16} />
      </button>
      <div className="flex items-start gap-4">
        <div className="bg-amber-100 p-2 rounded-xl text-amber-700 shrink-0">
          <Smartphone size={24} />
        </div>
        <div>
          <h4 className="font-serif font-bold text-amber-900 mb-1 leading-tight">Installez le Grimoire !</h4>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">Profitez du mode hors-ligne, d'un accès rapide sans votre navigateur et d'une meilleure fluidité.</p>
          {isIOS ? (
            <div className="text-[10px] bg-stone-100 p-2 rounded border border-stone-200 text-stone-600 font-medium">
              Pour installer sur iPhone/iPad, touchez l'icône <Share size={12} className="inline mx-0.5"/> <b>Partager</b> puis sélectionnez <b>"Sur l'écran d'accueil"</b>.
            </div>
          ) : (
            <button onClick={handleInstallClick} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm shadow-sm">
              <Download size={16} /> Installer l'application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// --- 4. MENTIONS LÉGALES ---
// ============================================================================
export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('heritiers_disclaimer_accepted');
    if (!hasAccepted) setIsOpen(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('heritiers_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-amber-400">
        <div className="bg-amber-50 p-6 border-b border-amber-100 text-center">
          <BookOpen className="mx-auto text-amber-600 mb-3" size={32} />
          <h2 className="text-2xl font-serif font-bold text-amber-900">À propos de cette application</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed text-sm font-serif italic mb-6 bg-stone-50 p-4 rounded-lg border border-stone-200">
            "Cette application a été réalisée avec l'aval de l'équipe des Héritiers et se veut être un outil pour faciliter la gestion des Héritiers et des Doctes. Elle ne peut se substituer à l'usage des textes d'origines, que vous pouvez trouver à l'adresse suivante : <br/><br/>
            <a href="https://les-heritiers.metaplot.fr/" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:text-amber-800 hover:underline">
              https://les-heritiers.metaplot.fr/
            </a>"
          </p>
          <button onClick={handleAccept} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform active:scale-95">
            <Check size={20} /> J'ai compris et j'accepte
          </button>
        </div>
      </div>
    </div>
  );
}
