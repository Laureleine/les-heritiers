import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { ForgeProvider } from './context/ForgeContext';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GameDataProvider } from './context/GameDataContext';

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