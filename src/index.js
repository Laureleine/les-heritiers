// 10.6.0

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { CharacterProvider } from './context/CharacterContext'; // 👈 NOUVEL IMPORT
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CharacterProvider>   {/* 👈 LE NUAGE ENVELOPPE L'APPLICATION */}
    <App />
  </CharacterProvider>
);

reportWebVitals();