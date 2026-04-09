// src/utils/pdfGenerator.js
import { supabase } from '../config/supabase';
import { CARAC_LIST, accorderTexte } from '../data/DictionnaireJeu';

export const exportToPDF = (character, gameData = {}) => {
  const genreActuel = character.genreHumain || character.sexe;

  // 1. L'ADN de la fée
  const feeData = gameData?.fairyData?.[character.typeFee] || {};

  // 2. Le Super-Extracteur Génétique (Caractéristiques)
  const getCarac = (key) => {
    return character.caracteristiques?.[key] 
        || character.data?.stats_scellees?.caracteristiques?.[key] 
        || feeData?.caracteristiques?.[key]?.min 
        || 1;
  };

  const agi = getCarac('agilite');
  const con = getCarac('constitution');
  const esp = getCarac('esprit');
  const sf = getCarac('sangFroid');

  // 3. L'Extracteur Social (Les JSONB d'équipement)
  const allBoughtIds = Object.values(character.vieSociale || {}).flat();
  const socialItems = gameData?.socialItems || [];
  const boughtItems = socialItems.filter(item => allBoughtIds.includes(item.id));

  const langues = boughtItems.filter(i => i.categorie === 'langue').map(i => i.nom);
  const equipements = boughtItems.filter(i => i.categorie !== 'langue' && i.categorie !== 'contact').map(i => i.nom);
  const contacts = boughtItems.filter(i => i.categorie === 'contact').map(i => i.nom);

  // 4. La Map des Profils
  const profilsMap = {
    'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
    'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
    'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
  };

  // 5. Calculs rapides des points de vie
  const pvMax = (3 * con) + 9;

  // 6. L'Extracteur Autonome de Compétences (Bonus complets)
  const getS = (nomComp) => {
    const rangInvesti = character.competencesLibres?.rangs?.[nomComp] || 0;
    
    let bonusProfil = 0;
    Object.entries(profilsMap).forEach(([pName, comps]) => {
      if (comps.includes(nomComp)) {
        if (character.profils?.majeur?.nom === pName) bonusProfil = 2;
        if (character.profils?.mineur?.nom === pName) bonusProfil = 1;
      }
    });

    const isPred = feeData?.competencesPredilection?.some(p => p.nom === nomComp) || Object.values(character.competencesLibres?.choixPredilection || {}).includes(nomComp);
    const bonusPred = isPred ? 2 : 0;

    let bonusAtout = 0;
    (character.atouts || []).forEach(atoutId => {
      const atoutDef = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
      if (atoutDef?.effets_techniques) {
        try {
          const tech = typeof atoutDef.effets_techniques === 'string' ? JSON.parse(atoutDef.effets_techniques) : atoutDef.effets_techniques;
          if (tech.competences && tech.competences[nomComp]) bonusAtout += tech.competences[nomComp];
        } catch(e) {}
      }
    });

    return rangInvesti + bonusProfil + bonusPred + bonusAtout;
  };

  const esquive = getS('Mouvement') + agi + 5;
  const parade = getS('Mêlée') + agi + 5;
  const resPhys = getS('Ressort') + con + 5;
  const resPsych = getS('Fortitude') + esp + 5;
  const init = getS('Art de la guerre') + sf;

  const printWindow = window.open('', '_blank');

  const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>${character.nom || 'Fiche_Personnage'} - Les Héritiers</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
<style>
  body { background: #5c4d3c; margin: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; font-family: 'Georgia', serif; }
  .no-print { margin-bottom: 20px; }
  @media print {
    body { background: none; padding: 0; display: block; }
    .no-print { display: none !important; }
    @page { margin: 0; size: A4; }
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
    margin-bottom: 20px;
  }
  .page::before {
    content: "";
    position: absolute;
    top: 8mm; left: 8mm; right: 8mm; bottom: 8mm;
    border: 2px solid #8b7355;
    pointer-events: none;
  }
  .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #8b7355; padding-bottom: 10px; }
  .char-name { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 900; color: #4a3b2c; text-transform: uppercase; letter-spacing: 2px; }
  .section { margin-bottom: 15px; }
  .section-title { font-family: 'Playfair Display', serif; background: #4a3b2c; color: white; padding: 4px 10px; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; border-radius: 3px; }
  .box { border: 1px solid #b5a287; padding: 10px; border-radius: 4px; background: rgba(255,255,255,0.5); }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  .grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; }
  .field { margin-bottom: 4px; }
  .field-label { font-size: 10px; text-transform: uppercase; color: #8b7355; font-weight: bold; display: block; }
  .field-value { font-size: 14px; color: #333; font-weight: bold; }
  
  /* Caractéristiques (Optimisées A4) */
  .carac-box { text-align: center; border: 1px solid #b5a287; background: #fff; padding: 4px 8px; border-radius: 4px; box-shadow: 2px 2px 0 rgba(139, 115, 85, 0.1); }
  .carac-name { font-size: 10px; font-weight: 600; text-transform: uppercase; color: #8b7355; margin-bottom: 2px; border-bottom: 1px solid #eee; padding-bottom: 2px; letter-spacing: 0.5px; }
  .carac-score { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: #4a3b2c; line-height: 1; margin-top: 2px; }
  
  .profil-block { margin-bottom: 10px; }
  .profil-title { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 15px; color: #4a3b2c; border-bottom: 2px solid #8b7355; margin-bottom: 5px; padding-bottom: 2px; }
  .skill-row { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 3px; align-items: baseline; }
  .skill-name { flex: 1; }
  
  .combat-circle { width: 40px; height: 40px; border-radius: 50%; border: 2px solid #4a3b2c; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; margin: 0 auto 5px; background: #fff; color: #4a3b2c; font-family: 'Playfair Display', serif; }
  .combat-label { text-align: center; font-size: 10px; font-weight: bold; text-transform: uppercase; color: #4a3b2c; }
  
  .power-item { margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
  .power-title { font-weight: bold; font-size: 14px; color: #4a3b2c; display: flex; justify-content: space-between;}
  .power-desc { font-size: 12px; color: #666; font-style: italic; }
  .checkboxes { font-size: 16px; color: #8b7355; letter-spacing: 2px; }
  .list-items { font-size: 13px; line-height: 1.6; }
  .empty-lines { border-bottom: 1px dotted #b5a287; height: 20px; margin-bottom: 5px; }
  .mobile-back-btn { padding: 10px 20px; background: #fff; border: 2px solid #8b7355; border-radius: 8px; font-family: 'Georgia', serif; font-weight: bold; color: #4a3b2c; cursor: pointer; }
</style>
</head>
<body>

  <button class="no-print mobile-back-btn" onclick="window.close(); window.history.back();">
    ⬅ Retour à l'application
  </button>

  <!-- ========================================== -->
  <!-- PAGE 1 : LE MASQUE (FORME HUMAINE)         -->
  <!-- ========================================== -->
  <div class="page">
    <div class="header">
      <div class="char-name">${character.nom || 'Inconnu'}</div>
    </div>

    <div class="section box">
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
        <div class="field-value">
          ${[...(character.traitsFeeriques || []), character.profils?.majeur?.trait, character.profils?.mineur?.trait]
            .filter(Boolean)
            .map(t => accorderTexte(t, genreActuel))
            .join(' • ')}
        </div>
      </div>	  
    </div>
    <!-- CARACTÉRISTIQUES -->
    <div class="section">
      <div class="section-title">Caractéristiques</div>
      <div class="grid-4">
        ${['agilite', 'constitution', 'force', 'precision'].map(stat => `
        <div class="carac-box">
          <div class="carac-name">${stat === 'agilite' ? 'Agilité' : stat === 'precision' ? 'Précision' : (stat.charAt(0).toUpperCase() + stat.slice(1))}</div>
          <div class="carac-score">${getCarac(stat)}</div>
        </div>
        `).join('')}
        ${['esprit', 'perception', 'prestance', 'sangFroid'].map(stat => `
        <div class="carac-box">
          <div class="carac-name">${stat === 'sangFroid' ? 'Sang-froid' : (stat.charAt(0).toUpperCase() + stat.slice(1))}</div>
          <div class="carac-score">${getCarac(stat)}</div>
        </div>
        `).join('')}
      </div>
    </div>

    <!-- COMPÉTENCES UTILES -->
    <div class="section">
      <div class="section-title">Compétences Utiles</div>
      <div class="grid-2 box">
        ${Object.entries(profilsMap).map(([profil, comps]) => {
          let htmlBloc = '<div class="profil-block"><div class="profil-title">' + profil + '</div>';
          htmlBloc += comps.map(comp => {
            const scoreTotal = getS(comp);
            const isPred = feeData?.competencesPredilection?.some(p => p.nom === comp) || Object.values(character.competencesLibres?.choixPredilection || {}).includes(comp);
            const specs = character.competencesLibres?.choixSpecialiteUser?.[comp] || [];
            const finalSpecs = [...specs];

            // Métier
            const specMetier = character.competencesLibres?.specialiteMetier;
            if (specMetier && specMetier.comp === comp && specMetier.nom) {
              if (!finalSpecs.includes(specMetier.nom)) finalSpecs.push(specMetier.nom + " (Métier)");
            }

            // Inné
            if (feeData && feeData.competencesPredilection) {
              const predIndex = feeData.competencesPredilection.findIndex(p => p.nom === comp);
              if (predIndex !== -1) {
                const pred = feeData.competencesPredilection[predIndex];
                const feeSpec = pred.specialite || (pred.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[predIndex] : null);
                if (feeSpec && !finalSpecs.includes(feeSpec)) finalSpecs.push(feeSpec + " (Inné)");
              }
            }

            // Atouts
            const atoutsIds = character.atouts || [];
            atoutsIds.forEach(atoutId => {
              const atoutDef = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
              if (atoutDef && atoutDef.effets_techniques) {
                try {
                  const tech = typeof atoutDef.effets_techniques === 'string' ? JSON.parse(atoutDef.effets_techniques) : atoutDef.effets_techniques;
                  if (tech.specialites) {
                    tech.specialites.forEach(s => {
                      if (s.competence === comp && !finalSpecs.includes(s.nom)) {
                        finalSpecs.push(s.nom + " (Atout)");
                      }
                    });
                  }
                } catch(e) {}
              }
            });

            const predHtml = isPred ? '<span style="font-size:10px; color:#d97706; margin-left:4px;">★</span>' : '';
            
            const specsText = finalSpecs.length > 0 ? finalSpecs.join(' • ') : '';

            return '<div style="margin-bottom: 2px;">' +
              '<div class="skill-row" style="display:flex; justify-content:space-between; align-items:baseline;">' +
              '<span class="skill-name" style="white-space:nowrap; flex-shrink:0;">' + comp + predHtml + '</span>' +
              '<span style="flex-grow:1; border-bottom: 2px dotted #b5a287; margin: 0 6px; text-align:center; font-size:9px; color:#8b7355; font-style:italic; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; position:relative; top:-2px;">' + specsText + '</span>' +
              '<span style="font-weight: bold; color: #4a3b2c; white-space:nowrap; flex-shrink:0;">' + scoreTotal + '</span>' +
              '</div>' +
              '</div>';
          }).join('');
          htmlBloc += '</div>';
          return htmlBloc;
        }).join('')}
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
          <span class="field-label">Apparence démasquée</span>
          <div class="field-value" style="min-height: 44px;">${character.apparence || feeData?.description || ''}</div>
        </div>
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
            ${(character.atouts || []).map(a => {
              const atoutObj = feeData?.atouts?.find(at => at.id === a || at.nom === a);
              const displayName = atoutObj ? atoutObj.nom : a;
              return `<li><b>${displayName}</b></li>`;
            }).join('') || '<li><i>Aucun atout</i></li>'}
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

  printWindow.document.write(htmlContent);
  printWindow.document.close();

  setTimeout(() => {
    printWindow.print();
  }, 500);
};
