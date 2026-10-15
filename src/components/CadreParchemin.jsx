// src/components/CadreParchemin.jsx
import React from 'react';

/**
 * Cadre parchemin 3 bandes pour les pages de création de personnage et la feuille.
 * Props :
 *   children  — contenu de l'étape
 *   baseUrl   — préfixe pour les assets (laisser vide en dev/prod normal,
 *               passer window.location.origin pour la fenêtre PDF)
 *   className — classe optionnelle sur le wrapper externe
 */
export default function CadreParchemin({ children, baseUrl = '', className = '' }) {
    const haut   = `url(${baseUrl}/assets/cadre3-haut.png)`;
    const milieu = `url(${baseUrl}/assets/cadre3-milieu.png)`;
    const bas    = `url(${baseUrl}/assets/cadre-bas.png)`;

    return (
        <div className={className}>
            {/* Bande HAUTE fixe — 300px = 11.55% de la largeur */}
            <div style={{ paddingBottom: '11.55%', backgroundImage: haut, backgroundSize: '100% 100%' }} />

            {/* Bande MILIEU élastique */}
            <div style={{ backgroundImage: milieu, backgroundSize: '100% 100%' }}>
                <div style={{
                    paddingLeft:  'calc(8% + 2px)',
                    paddingRight: 'calc(8% + 2px)',
                    paddingTop:   '3%',
                    paddingBottom: '0',
                }}>
                    {children}
                </div>
            </div>

            {/* Bande BAS fixe — 500px = 19.24% de la largeur */}
            <div style={{ paddingBottom: '19.24%', backgroundImage: bas, backgroundSize: '100% 100%' }} />
        </div>
    );
}
