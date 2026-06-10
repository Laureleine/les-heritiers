import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { ForgeProvider } from './context/ForgeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CharacterProvider>
      <ForgeProvider>
        <App />
      </ForgeProvider>
    </CharacterProvider>
  </BrowserRouter>
);