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
                }
            </style>
        </head>
        <body>
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