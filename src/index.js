// 10.6.0
// 12.0.0

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import { BrowserRouter } from 'react-router-dom'; 

// ✨ LE VOILÀ, NOTRE DISPARU !
import reportWebVitals from './reportWebVitals'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </BrowserRouter>
);

reportWebVitals();