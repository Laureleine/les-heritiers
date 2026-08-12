import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { ForgeProvider } from './context/ForgeContext';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GameDataProvider } from './context/GameDataContext';
import { OfflineStatusProvider } from './context/OfflineStatusContext';
import { registerSW } from 'virtual:pwa-register';
import { initErrorMonitor } from './utils/errorMonitor';
import ErrorBoundary from './components/ErrorBoundary';

initErrorMonitor();

// Enregistrement SW PWA — autoUpdate : le rechargement est automatique.
registerSW({
  onOfflineReady() {
    console.log('[PWA] Prête pour utilisation hors ligne');
  },
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10 * 60 * 1000, gcTime: 30 * 60 * 1000 } }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <OfflineStatusProvider>
        <GameDataProvider>
          <CharacterProvider>
            <ForgeProvider>
              <App />
            </ForgeProvider>
          </CharacterProvider>
        </GameDataProvider>
        </OfflineStatusProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>
);
