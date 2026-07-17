import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { ForgeProvider } from './context/ForgeContext';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GameDataProvider } from './context/GameDataContext';
import { registerSW } from 'virtual:pwa-register';

// Enregistrement SW PWA (distinct de sw.js pour les notifs push)
registerSW({
  onNeedRefresh() {
    // Géré en Task 13 — stocker dans window pour que le composant le lise
    window.__pwaUpdateAvailable = true;
    window.dispatchEvent(new Event('pwa-update-available'));
  },
  onOfflineReady() {
    console.log('[PWA] Prête pour utilisation hors ligne');
  },
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10 * 60 * 1000, gcTime: 30 * 60 * 1000 } }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GameDataProvider>
        <CharacterProvider>
          <ForgeProvider>
            <App />
          </ForgeProvider>
        </CharacterProvider>
      </GameDataProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
