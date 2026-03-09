// src/utils/utils.js
// 10.4.0
// 12.3.0

// ============================================================================
// PDF EXPORT (Fiche de Personnage Complète Recto/Verso)
// ============================================================================

import { supabase } from '../config/supabase';
import { CARAC_LIST } from '../data/DictionnaireJeu';

export const exportToPDF = (character, gameData = {}) => {
  // ✨ SÉCURITÉ : Rétrocompatibilité (au cas où le vieux code passerait encore par là)
  const fairyData = gameData.fairyData ? gameData.fairyData : gameData;
  const feeData = fairyData[character.typeFee] || {};

  // ✨ LE TRADUCTEUR UNIVERSEL (Identifiants -> Noms)
  const allBoughtIds = Object.values(character.vieSociale || {}).flat();
  const socialItems = gameData.socialItems || [];
  const boughtItems = socialItems.filter(item => allBoughtIds.includes(item.id));
  
  // On sépare intelligemment toutes les catégories pour les ranger dans les bonnes cases !
  const langues = boughtItems.filter(i => i.categorie === 'langue').map(i => i.nom);
  const equipements = boughtItems.filter(i => i.categorie !== 'langue' && i.categorie !== 'contact').map(i => i.nom);
  const contacts = boughtItems.filter(i => i.categorie === 'contact').map(i => i.nom);

  // 1. Calculs rapides des statistiques de combat et de santé
  const pvMax = (3 * (character.caracteristiques?.constitution || 1)) + 9;
  const skills = character.competencesLibres?.rangs || {};
  const getS = (nom) => skills[nom] || 0;
  const agi = character.caracteristiques?.agilite || 1;
  const con = character.caracteristiques?.constitution || 1;
  const esp = character.caracteristiques?.esprit || 1;
  const sf = character.caracteristiques?.sangFroid || 1;
  
  const esquive = getS('Mouvement') + agi + 5;
  const parade = getS('Mêlée') + agi + 5;
  const resPhys = getS('Ressort') + con + 5;
  const resPsych = getS('Fortitude') + esp + 5;
  const init = getS('Art de la guerre') + sf;

  // 2. Structuration des Compétences par Profil (comme sur la fiche officielle)
  const profilsMap = {
    'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
    'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
    'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
  };

  const printWindow = window.open('', '_blank');

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>${character.nom || 'Fiche_Personnage'} - Les Héritiers</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
		@page { size: A4; margin: 0; }
		body { margin: 0; padding: 0; font-family: 'Crimson Text', serif; color: #2b2824; background: #fdfbf7; }
        * { box-sizing: border-box; }
        
        body { 
          margin: 0; padding: 0; 
          font-family: 'Crimson Text', serif; 
          background: #524f4a;
          color: #2b2824;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

		.page { 
		  width: 210mm; 
		  min-height: 297mm; 
		  padding: 15mm; 
		  box-sizing: border-box; 
		  page-break-after: always; 
		  position: relative; 
		  background: #fdfbf7; 
		}

        /* Bordure ornementale Belle Époque */
        .page::before {
          content: "";
          position: absolute;
          top: 8mm; left: 8mm; right: 8mm; bottom: 8mm;
          border: 2px solid #8b7355;
          border-radius: 4px;
          pointer-events: none;
        }
        .page::after {
          content: "";
          position: absolute;
          top: 9mm; left: 9mm; right: 9mm; bottom: 9mm;
          border: 1px solid #b5a287;
          pointer-events: none;
        }

        .header { text-align: center; margin-bottom: 20px; position: relative; z-height: 10; }
        .logo-title { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 900; color: #4a3b2c; letter-spacing: 2px; text-transform: uppercase; margin: 0; line-height: 1; }
        .subtitle { font-size: 14px; letter-spacing: 5px; color: #8b7355; text-transform: uppercase; margin-bottom: 10px; }

		.section { 
		  margin-bottom: 15px; 
		  page-break-inside: avoid; 
		}
		.section-title { 
          font-family: 'Playfair Display', serif; 
          font-size: 16px; 
          font-weight: 700; 
          color: #fdfbf7; 
          background: #4a3b2c; 
          display: inline-block; 
          padding: 4px 15px; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          margin-bottom: 10px;
          border-radius: 2px;
        }

        /* Grilles & Encarts */
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        
		.box { 
		  background: #fff; 
		  border: 1px solid #b5a287; 
		  border-radius: 8px; 
		  padding: 12px; 
		  box-shadow: 2px 2px 0 rgba(139, 115, 85, 0.1); 
		  page-break-inside: avoid; /* Magie anti-superposition ! */
		}        
        .field { margin-bottom: 8px; font-size: 14px; }
        .field-label { font-weight: 600; color: #5a4b3c; text-transform: uppercase; font-size: 11px; display: block; margin-bottom: 2px;}
        .field-value { font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: #2b2824; border-bottom: 1px dotted #b5a287; padding-bottom: 2px; min-height: 22px; }
        .field-value.inline { display: inline-block; width: auto; min-width: 50px; }

        /* Caractéristiques */
        .carac-box { text-align: center; border: 1px solid #b5a287; background: #fff; padding: 8px; border-radius: 4px; box-shadow: 2px 2px 0 rgba(139, 115, 85, 0.1); }
        .carac-name { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #8b7355; margin-bottom: 5px; border-bottom: 1px solid #eee; padding-bottom: 4px;}
        .carac-score { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 900; color: #4a3b2c; }

        /* Compétences */
        .profil-block { margin-bottom: 10px; }
        .profil-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 15px; color: #4a3b2c; border-bottom: 2px solid #8b7355; margin-bottom: 5px; padding-bottom: 2px; }
        .skill-row { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 3px; align-items: baseline; }
        .skill-name { flex: 1; }
        .skill-dots { color: #b5a287; margin: 0 5px; flex: 2; overflow: hidden; white-space: nowrap; }
        .skill-score { font-weight: bold; width: 20px; text-align: center; font-size: 15px; }

        /* Combat */
        .combat-circle { border: 2px solid #4a3b2c; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 22px; font-weight: bold; margin: 0 auto 5px auto; background: #fff; }
        .combat-label { text-align: center; font-size: 11px; font-weight: 600; text-transform: uppercase; color: #5a4b3c; }

        /* Magie & Pouvoirs */
        .power-item { margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
        .power-title { font-weight: bold; font-size: 14px; color: #4a3b2c; display: flex; justify-content: space-between;}
        .power-desc { font-size: 12px; color: #666; font-style: italic; }
        .checkboxes { font-size: 16px; color: #8b7355; letter-spacing: 2px; }

        .list-items { font-size: 13px; line-height: 1.6; }
        .empty-lines { border-bottom: 1px dotted #b5a287; height: 20px; margin-bottom: 5px; }
      </style>
    </head>
    <body>

      <!-- ========================================== -->
      <!-- PAGE 1 : LE MASQUE (FORME HUMAINE)         -->
      <!-- ========================================== -->
      <div class="page">
        
        <div class="header">
          <h1 class="logo-title">Les Héritiers</h1>
          <div class="subtitle">Aventures féériques à la Belle Époque</div>
        </div>

        <!-- IDENTITÉ HUMAINE -->
        <div class="section box">
          <div class="grid-2">
            <div class="field">
              <span class="field-label">Nom humain</span>
              <div class="field-value">${character.nom || ''}</div>
            </div>
            <div class="field">
              <span class="field-label">Activités / Métier</span>
              <div class="field-value">${character.vieSociale?.Aventurier?.length ? 'Aventurier' : (character.vieSociale?.Gentleman?.length ? 'Gentleman' : 'Héritier')}</div>
            </div>
          </div>
          <div class="grid-3" style="margin-top: 10px;">
            <div class="field">
              <span class="field-label">Profil majeur</span>
              <div class="field-value">${character.profils?.majeur?.nom || ''}</div>
            </div>
            <div class="field">
              <span class="field-label">Profil mineur</span>
              <div class="field-value">${character.profils?.mineur?.nom || ''}</div>
            </div>
            <div class="field">
              <span class="field-label">Fortune</span>
              <div class="field-value">Rang ${character.fortune || 0}</div>
            </div>
          </div>
          <div class="field" style="margin-top: 10px;">
            <span class="field-label">Traits de caractère</span>
            <div class="field-value">${(character.traitsFeeriques || []).join(' • ') || character.profils?.majeur?.trait || ''}</div>
          </div>
          <div class="grid-3" style="margin-top: 10px;">
            <div class="field">
              <span class="field-label">Taille masquée</span>
              <div class="field-value">${character.taille || 'Moyenne'}</div>
            </div>
            <div class="field">
              <span class="field-label">Poids masqué</span>
              <div class="field-value">${character.poids || ''}</div>
            </div>
            <div class="field">
              <span class="field-label">Sexe apparent</span>
              <div class="field-value">${character.genreHumain || character.sexe || ''}</div>
            </div>
          </div>
        </div>

        <!-- CARACTÉRISTIQUES -->
        <div class="section">
          <div class="section-title">Caractéristiques</div>
          <div class="grid-4">
            ${['agilite', 'constitution', 'force', 'precision'].map(stat => `
              <div class="carac-box">
                <div class="carac-name">${stat === 'agilite' ? 'Agilité' : stat === 'precision' ? 'Précision' : stat}</div>
                <div class="carac-score">${character.caracteristiques?.[stat] || 1}</div>
              </div>
            `).join('')}
            ${['esprit', 'perception', 'prestance', 'sangFroid'].map(stat => `
              <div class="carac-box">
                <div class="carac-name">${stat === 'sangFroid' ? 'Sang-froid' : stat}</div>
                <div class="carac-score">${character.caracteristiques?.[stat] || 1}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- COMPÉTENCES UTILES -->
        <div class="section">
          <div class="section-title">Compétences Utiles</div>
          <div class="grid-2 box">
            ${Object.entries(profilsMap).map(([profil, comps]) => `
              <div class="profil-block">
                <div class="profil-title">${profil}</div>
                ${comps.map(comp => {
                  const score = getS(comp);
                  const isPred = feeData?.competencesPredilection?.some(p => p.nom === comp) || Object.values(character.competencesLibres?.choixPredilection || {}).includes(comp);
                  const specs = character.competencesLibres?.choixSpecialiteUser?.[comp] || [];
                  return `
                  <div class="skill-row">
                    <span class="skill-name ${isPred ? 'font-weight: bold;' : ''}">${comp}${isPred ? '*' : ''}</span>
                    <span class="skill-dots">......................................................</span>
                    <span class="skill-score">${score > 0 ? score : '-'}</span>
                  </div>
                  ${specs.length > 0 ? `<div style="font-size: 10px; color: #8b7355; margin-left: 10px; font-style: italic;">↳ ${specs.join(', ')}</div>` : ''}
                  `
                }).join('')}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- COMBAT & SANTÉ -->
        <div class="section">
          <div class="section-title">Combat & Santé</div>
          <div class="grid-4 box" style="background: #e6e1d8; border-color: #4a3b2c;">
            <div>
              <div class="combat-circle">${esquive}</div>
              <div class="combat-label">Esquive</div>
            </div>
            <div>
              <div class="combat-circle">${parade}</div>
              <div class="combat-label">Parade</div>
            </div>
            <div>
              <div class="combat-circle">${init}</div>
              <div class="combat-label">Initiative</div>
            </div>
            <div>
              <div class="combat-circle" style="border-color: #92400e; color: #92400e;">${pvMax}</div>
              <div class="combat-label" style="color: #92400e;">Points de Vie Max</div>
            </div>
          </div>
          
          <div class="grid-2" style="margin-top: 10px;">
            <div class="box">
              <div class="field-label">Armes & Attaques</div>
              <div class="empty-lines"></div>
              <div class="empty-lines"></div>
            </div>
            <div class="box">
              <div class="field-label">Blessures (Cases à cocher)</div>
              <div style="font-size: 18px; color: #92400e; letter-spacing: 3px; line-height: 1.5;">
                □ □ □ □ □ □ □ □ □ □<br/>
                □ □ □ □ □ □ □ □ □ □
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- PAGE 2 : LA FÉE (FORME DÉMASQUÉE)          -->
      <!-- ========================================== -->
      <div class="page">
        
        <!-- IDENTITÉ FÉÉRIQUE -->
        <div class="section box">
          <div class="grid-2">
            <div class="field">
              <span class="field-label">Nom féérique</span>
              <div class="field-value">${character.nomFeerique || ''}</div>
            </div>
            <div class="field">
              <span class="field-label">Type de Fée</span>
              <div class="field-value">${character.typeFee || ''} <span style="font-size:12px; font-weight:normal;">(${character.anciennete === 'traditionnelle' ? 'Traditionnelle' : 'Moderne'})</span></div>
            </div>
          </div>
          <div class="field" style="margin-top: 10px;">
            <span class="field-label">Apparence démasquée</span>
            <div class="field-value" style="min-height: 44px;">${character.apparence || feeData?.description || ''}</div>
          </div>
        </div>

        <!-- MAGIE & HÉRITAGE -->
        <div class="section">
          <div class="section-title" style="background: #1e3a8a;">Magie & Héritage</div>
          
          <div class="grid-3 box" style="margin-bottom: 15px; text-align: center; background: #e0e7ff; border-color: #1e3a8a;">
            <div>
              <span class="field-label">Féérie</span>
              <div class="combat-circle" style="border-color: #1e3a8a; color: #1e3a8a;">${character.caracteristiques?.feerie || 3}</div>
            </div>
            <div>
              <span class="field-label">Masque</span>
              <div class="combat-circle" style="border-color: #1e3a8a; color: #1e3a8a;">${character.caracteristiques?.masque || 4}</div>
            </div>
            <div>
              <span class="field-label">Tricherie</span>
              <div class="combat-circle" style="border-color: #7e22ce; color: #7e22ce;">${Math.floor(((character.caracteristiques?.feerie || 3) + (character.caracteristiques?.masque || 4))/2)}</div>
            </div>
          </div>

          <div class="grid-2">
            <!-- Colonne Capacités/Atouts -->
            <div class="box">
              <span class="field-label" style="color: #1e3a8a;">Capacités Naturelles</span>
              <ul class="list-items" style="margin-top: 5px; padding-left: 15px;">
                ${feeData?.capacites?.fixe1 ? `<li><b>${feeData.capacites.fixe1.nom}</b></li>` : ''}
                ${feeData?.capacites?.fixe2 ? `<li><b>${feeData.capacites.fixe2.nom}</b></li>` : ''}
                ${character.capaciteChoisie ? `<li><b>${character.capaciteChoisie}</b> (Choix)</li>` : ''}
              </ul>
              
              <span class="field-label" style="color: #d97706; margin-top: 15px;">Atouts Féériques</span>
              <ul class="list-items" style="margin-top: 5px; padding-left: 15px;">
                ${(character.atouts || []).map(a => `<li><b>${a}</b></li>`).join('') || '<li><i>Aucun atout</i></li>'}
              </ul>
            </div>

            <!-- Colonne Pouvoirs -->
            <div class="box">
              <span class="field-label" style="color: #9f1239;">Pouvoirs Maîtrisés</span>
              <div style="margin-top: 5px;">
                ${(character.pouvoirs || []).map(pName => {
                  const pData = feeData?.pouvoirs?.find(p => p.nom === pName);
                  const type = pData?.type_pouvoir?.includes('demasque') ? '🔥' : '🎭';
                  return `
                  <div class="power-item">
                    <div class="power-title">${type} ${pName} <span class="checkboxes">□ □ □ □ □</span></div>
                    <div class="power-desc">${pData?.description || ''}</div>
                  </div>
                  `;
                }).join('') || '<div class="power-desc">Aucun pouvoir sélectionné.</div>'}
              </div>
            </div>
          </div>
        </div>
<!-- COMPÉTENCES FUTILES & INVENTAIRE -->
<div class="section">
  <div class="section-title" style="background: #166534;">Détails & Inventaire</div>
  <div class="grid-2">
    <div class="box">
      <span class="field-label">Compétences Futiles</span>
      <ul class="list-items" style="margin-top: 5px; padding-left: 15px;">
        ${Object.entries(character.computedStats?.futilesTotal || {}).map(([nom, val]) => {
          const displayNom = nom.toLowerCase().includes('au choix') ? (character.competencesFutiles?.precisions?.[nom] || nom) : nom;
          return `<li>${displayNom} <b>(${val})</b></li>`;
        }).join('') || '<li><i>Aucune</i></li>'}
      </ul>

      <span class="field-label" style="margin-top: 15px;">Langues maîtrisées</span>
      <div class="list-items" style="margin-top: 5px;">
        Français (Maternelle)<br/>
        ${langues.length > 0 ? langues.join('<br/>') + '<br/>' : ''}
        <div class="empty-lines"></div>
      </div>
    </div>

    <div class="box">
      <span class="field-label">Équipement & Possessions</span>
      <div class="list-items" style="margin-top: 5px; line-height: 1.8;">
        ${equipements.length > 0 ? equipements.map(e => `- ${e}`).join('<br/>') : '<div class="empty-lines"></div><div class="empty-lines"></div><div class="empty-lines"></div>'}
      </div>

      <span class="field-label" style="margin-top: 15px;">Contacts & Alliés</span>
      <div class="list-items" style="margin-top: 5px; line-height: 1.8;">
        ${contacts.length > 0 ? contacts.map(c => `- ${c}`).join('<br/>') : '<div class="empty-lines"></div><div class="empty-lines"></div><div class="empty-lines"></div>'}
      </div>
    </div>
  </div>
</div>
</div>
</body>
</html>
`;

  // ✨ LES COMMANDES PERDUES SONT DE RETOUR ICI !
  printWindow.document.write(htmlContent);
  printWindow.document.close();

  // Déclenchement automatique de la fenêtre d'impression après chargement des polices
  setTimeout(() => {
    printWindow.print();
  }, 500);

}; // 👈 LA FAMEUSE ACCOLADE MANQUANTE !