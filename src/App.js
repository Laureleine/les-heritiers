// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, X, Sparkles } from 'lucide-react';
import { useAppInit } from './hooks/useAppInit';
import AppRouter from './AppRouter';

import Auth from './components/Auth';
import BackgroundDecor from './components/BackgroundDecor';
import Telegraphe from './components/Telegraphe';
import DiceRoller from './components/DiceRoller';
import WidgetAnomalie from './components/forge/WidgetAnomalie';
import { InAppNotification as AlertSystem, PWAPrompt, DisclaimerModal } from './components/SystemeModales';
import { APP_VERSION, BUILD_DATE, VERSION_HISTORY } from './version';

export default function App() {
  const { session, userProfile, refreshUserProfile, globalLoading, loadingStep, updateAvailable, applyUpdate } = useAppInit();
  const [showVersionModal, setShowVersionModal] = useState(false);
  const navigate = useNavigate();

  if (globalLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-amber-900 font-serif">{loadingStep}</p>
        </div>
      </div>
    );
  }

  if (!session || !userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <Auth />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-gray-800">
      
      {updateAvailable && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in-down w-11/12 max-w-md">
          <button
            onClick={applyUpdate}
            className="w-full bg-amber-600 text-white px-4 py-3 rounded-xl shadow-2xl font-serif font-bold flex items-center justify-center gap-3 hover:bg-amber-700 transition-all border-2 border-amber-300"
          >
            <Sparkles size={20} /> Savoir mis à jour ! Cliquez ici pour recharger le Grimoire.
          </button>
        </div>
      )}

      <AlertSystem userProfile={userProfile} />
      <PWAPrompt />
      <DisclaimerModal />
      <BackgroundDecor />

      <div className="pt-6 pb-4 text-center animate-fade-in relative z-10">
        <div className="flex flex-wrap justify-center items-baseline gap-4">
          <h1
            className="text-5xl font-serif text-amber-900 cursor-pointer hover:text-amber-700 transition-colors m-0"
            onClick={() => navigate('/')}
            title="Retour à l'accueil"
          >
            Les Héritiers
          </h1>
          <button
            onClick={() => setShowVersionModal(true)}
            className="text-xs text-amber-700 bg-amber-100/50 hover:bg-amber-200 hover:text-amber-900 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-widest font-bold transition-all shadow-sm flex items-center gap-2"
          >
            Version {APP_VERSION} • {BUILD_DATE} <BookOpen size={12} />
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-3 max-w-2xl mx-auto">
          {userProfile?.profile?.role === 'super_admin' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full border border-purple-200 shadow-sm">Super Admin</span>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 w-full animate-fade-in relative z-10">
        <AppRouter session={session} userProfile={userProfile} refreshUserProfile={refreshUserProfile} />
      </div>

      {session && userProfile && <Telegraphe session={session} userProfile={userProfile} />}
      {session && <WidgetAnomalie userProfile={userProfile} />}
      <DiceRoller use3DDice={userProfile?.profile?.use_3d_dice} diceTheme={userProfile?.profile?.dice_theme} />

      {/* 4. MODALE DU JOURNAL DES VERSIONS */}
      {showVersionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-2xl w-full max-h-[80vh] rounded-xl shadow-2xl border-2 border-amber-900/20 flex flex-col overflow-hidden animate-fade-in-up">
            <div className="bg-amber-900 text-amber-50 p-4 flex justify-between items-center shadow-md z-10 shrink-0">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <BookOpen size={18} className="text-amber-300" /> Registre des Mises à jour
              </h3>
              <button onClick={() => setShowVersionModal(false)} className="hover:text-red-400 bg-amber-800/50 p-1.5 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>
            
            {/* ✨ LE FIX : On ouvre le parchemin et on affiche le vrai historique ! */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              {VERSION_HISTORY.map((entry, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="text-lg font-bold text-amber-900 font-serif border-b border-amber-200 pb-1 mb-3">
                    {entry.version} <span className="text-sm font-normal text-amber-700 italic ml-2">({entry.date})</span>
                  </h4>
                  <ul className="space-y-3">
                    {entry.changes.map((change, i) => {
                      // Mini-parseur pour transformer nos "**" en texte gras 
                      const parts = change.split('**');
                      return (
                        <li key={i} className="text-sm text-stone-700 leading-relaxed flex items-start gap-2">
                          <span className="mt-0.5 text-amber-600 shrink-0">✦</span>
                          <span>
                            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-stone-900 font-bold">{part}</strong> : part)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
