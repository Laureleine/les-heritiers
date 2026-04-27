// src/utils/pdfGenerator.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import FicheParchemin from '../components/recap/FicheParchemin';

export const exportToPDF = (character, gameData = {}) => {
    // 1. On transforme notre composant pur en chaîne HTML
    const htmlContent = renderToString(<FicheParchemin character={character} gameData={gameData} />);

    // 2. On prépare la fenêtre d'impression
    const printWindow = window.open('', '_blank');

    // 3. On injecte le HTML + Tailwind CSS (pour que les grilles et couleurs fonctionnent à l'impression)
    const fullHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Fiche_${character.nom || 'Heritier'}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                body { background: #5c4d3c; padding: 20px; }
                @media print {
                    body { background: white; padding: 0; margin: 0; }
                    .no-print { display: none !important; }
                }
            </style>
        </head>
        <body>
            <!-- ✨ LE RETOUR DU BOUTON D'ÉVASION MOBILE (Invisible à l'impression) -->
            <button 
                onclick="window.close()" 
                class="no-print" 
                style="position: fixed; top: 15px; right: 15px; background: #b45309; color: white; padding: 12px 20px; border-radius: 8px; font-weight: bold; border: 2px solid #78350f; box-shadow: 0 4px 6px rgba(0,0,0,0.4); z-index: 1000; cursor: pointer; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 14px;"
            >
                ✕ Fermer le Parchemin
            </button>

            ${htmlContent}

            <script>
                // On laisse une seconde magique à Tailwind pour analyser et générer son CSS
                setTimeout(() => {
                    window.print();
                }, 1200);
            </script>
        </body>
        </html>
    `;

    printWindow.document.write(fullHtml);
    printWindow.document.close();
};