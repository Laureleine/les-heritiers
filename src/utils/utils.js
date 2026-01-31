// src/utils/utils.js
// Version: 2.0
// Description: Fichier consolidé de tous les utilitaires (storage, PDF export, Supabase)
// Dernière modification: 2025-01-30

import { supabase } from '../config/supabase';
import { fairyData } from '../data/data';

// ============================================================================
// CHARACTER STORAGE (LocalStorage - Legacy)
// ============================================================================

export const saveCharacter = (character) => {
  const characters = getAllCharacters();
  const existingIndex = characters.findIndex(c => c.id === character.id);
  
  const characterToSave = {
    ...character,
    lastModified: new Date().toISOString()
  };
  
  if (existingIndex >= 0) {
    characters[existingIndex] = characterToSave;
  } else {
    characters.push(characterToSave);
  }
  
  localStorage.setItem('heritiers_characters', JSON.stringify(characters));
  return characterToSave;
};

export const getAllCharacters = () => {
  const stored = localStorage.getItem('heritiers_characters');
  return stored ? JSON.parse(stored) : [];
};

export const getCharacterById = (id) => {
  const characters = getAllCharacters();
  return characters.find(c => c.id === id);
};

export const deleteCharacter = (id) => {
  const characters = getAllCharacters();
  const filtered = characters.filter(c => c.id !== id);
  localStorage.setItem('heritiers_characters', JSON.stringify(filtered));
};

export const exportCharacter = (character) => {
  const dataStr = JSON.stringify(character, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${character.nom || 'personnage'}_heritiers.json`;
  link.click();
  URL.revokeObjectURL(url);
};

export const importCharacter = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const character = JSON.parse(e.target.result);
        character.id = Date.now().toString();
        character.lastModified = new Date().toISOString();
        resolve(character);
      } catch (error) {
        reject(new Error('Fichier invalide'));
      }
    };
    reader.onerror = () => reject(new Error('Erreur de lecture'));
    reader.readAsText(file);
  });
};

export const generateId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// ============================================================================
// SUPABASE STORAGE
// ============================================================================

export const saveCharacterToSupabase = async (character) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Non connecté');

  const characterData = {
    user_id: user.id,
    nom: character.nom,
    sexe: character.sexe,
    type_fee: character.typeFee,
    anciennete: character.anciennete,
    caracteristiques: character.caracteristiques,
    profils: character.profils,
    competences_libres: character.competencesLibres,
    competences_futiles: character.competencesFutiles,
    capacite_choisie: character.capaciteChoisie,
    pouvoirs: character.pouvoirs,
    is_public: character.isPublic || false,
    data: {
      ...character,
      createdAt: character.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  };

  if (character.id && character.id.length > 20) {
    // Mise à jour
    const { data, error } = await supabase
      .from('characters')
      .update(characterData)
      .eq('id', character.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } else {
    // Création
    const { data, error } = await supabase
      .from('characters')
      .insert([characterData])
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};

export const getUserCharacters = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return [];

  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false });

  if (error) throw error;

  return data.map(char => ({
    id: char.id,
    nom: char.nom,
    sexe: char.sexe,
    typeFee: char.type_fee,
    anciennete: char.anciennete,
    caracteristiques: char.caracteristiques || {},
    profils: char.profils || { majeur: { nom: '', trait: '' }, mineur: { nom: '', trait: '' } },
    competencesLibres: char.competences_libres || {},
    competencesFutiles: char.competences_futiles || { rangs: {}, personnalisees: [] },
    capaciteChoisie: char.capacite_choisie,
    pouvoirs: char.pouvoirs || [],
    isPublic: char.is_public,
    createdAt: char.created_at,
    lastModified: char.updated_at,
    ...char.data
  }));
};

export const getPublicCharacters = async () => {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('is_public', true)
    .order('updated_at', { ascending: false });

  if (error) throw error;

  return data.map(char => ({
    id: char.id,
    nom: char.nom,
    sexe: char.sexe,
    typeFee: char.type_fee,
    anciennete: char.anciennete,
    caracteristiques: char.caracteristiques || {},
    profils: char.profils || { majeur: { nom: '', trait: '' }, mineur: { nom: '', trait: '' } },
    competencesLibres: char.competences_libres || {},
    competencesFutiles: char.competences_futiles || { rangs: {}, personnalisees: [] },
    capaciteChoisie: char.capacite_choisie,
    pouvoirs: char.pouvoirs || [],
    isPublic: char.is_public,
    createdAt: char.created_at,
    lastModified: char.updated_at,
    userId: char.user_id,
    ...char.data
  }));
};

export const deleteCharacterFromSupabase = async (id) => {
  const { error } = await supabase
    .from('characters')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const toggleCharacterVisibility = async (id, isPublic) => {
  const { data, error } = await supabase
    .from('characters')
    .update({ is_public: isPublic })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// ============================================================================
// PDF EXPORT
// ============================================================================

export const exportToPDF = (character) => {
  const feeData = fairyData[character.typeFee];
  
  const printWindow = window.open('', '_blank');
  
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>${character.nom || 'Personnage'} - Les Héritiers</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Crimson+Text:wght@400;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Crimson Text', serif;
          background: linear-gradient(to bottom, #fffbeb, #fed7aa);
          padding: 40px;
          color: #78350f;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          padding: 50px;
          border: 8px solid #d97706;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .header {
          text-align: center;
          border-bottom: 4px double #d97706;
          padding-bottom: 30px;
          margin-bottom: 40px;
        }
        
        .title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          color: #92400e;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .subtitle {
          font-size: 24px;
          font-style: italic;
          color: #b45309;
        }
        
        .character-name {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 600;
          color: #92400e;
          text-align: center;
          margin: 30px 0;
          padding: 20px;
          background: linear-gradient(to right, #fef3c7, #fde68a, #fef3c7);
          border-radius: 8px;
          border: 2px solid #d97706;
        }
        
        .section {
          margin-bottom: 35px;
          page-break-inside: avoid;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 600;
          color: #92400e;
          border-bottom: 2px solid #f59e0b;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .info-item {
          background: #fef3c7;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #f59e0b;
        }
        
        .info-label {
          font-weight: 600;
          color: #92400e;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        
        .info-value {
          font-size: 20px;
          color: #78350f;
        }
        
        .description {
          background: #fffbeb;
          padding: 20px;
          border-radius: 8px;
          border: 2px solid #fde68a;
          font-size: 16px;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 20px;
        }
        
        .capacite-box {
          background: #fef3c7;
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 2px solid #f59e0b;
        }
        
        .capacite-title {
          font-weight: 600;
          color: #92400e;
          font-size: 18px;
          margin-bottom: 8px;
        }
        
        .capacite-desc {
          color: #78350f;
          font-size: 15px;
          line-height: 1.6;
        }
        
        .capacite-fixed {
          background: #fed7aa;
          border-color: #d97706;
        }
        
        .capacite-chosen {
          background: #fde68a;
          border-color: #f59e0b;
          border-width: 3px;
        }
        
        .pouvoirs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 15px;
        }
        
        .pouvoir-box {
          background: #fef3c7;
          padding: 12px;
          border-radius: 8px;
          border: 2px solid #f59e0b;
        }
        
        .pouvoir-title {
          font-weight: 600;
          color: #92400e;
          font-size: 16px;
          margin-bottom: 6px;
        }
        
        .pouvoir-desc {
          color: #78350f;
          font-size: 13px;
          line-height: 1.5;
        }
        
        .footer {
          margin-top: 50px;
          text-align: center;
          padding-top: 20px;
          border-top: 2px solid #fde68a;
          font-size: 14px;
          color: #b45309;
          font-style: italic;
        }
        
        .ornament {
          text-align: center;
          font-size: 24px;
          color: #d97706;
          margin: 30px 0;
        }
        
        @media print {
          body { background: white; padding: 0; }
          .container { border: none; box-shadow: none; padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="title">Les Héritiers</div>
          <div class="subtitle">Fiche de Personnage</div>
          <div style="font-size: 14px; margin-top: 10px; color: #b45309;">Belle Époque • Paris</div>
        </div>
        
        <div class="character-name">${character.nom || 'Sans nom'}</div>
        
        <div class="section">
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Sexe</div>
              <div class="info-value">${character.sexe || 'Non défini'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Type de Fée</div>
              <div class="info-value">${character.typeFee || 'Non défini'}</div>
            </div>
            ${character.anciennete ? `
            <div class="info-item" style="grid-column: span 2;">
              <div class="info-label">Ancienneté</div>
              <div class="info-value">
                ${character.anciennete === 'ancienne' ? '🏛️ Fée Ancienne' : '⚡ Fée Moderne'}
              </div>
            </div>
            ` : ''}
          </div>
        </div>
        
        ${character.caracteristiques && Object.keys(character.caracteristiques).length > 0 ? `
          <div class="section">
            <div class="section-title">Caractéristiques</div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
              ${Object.entries(character.caracteristiques).map(([key, value]) => {
                const labels = {
                  agilite: '🤸 Agilité', constitution: '💪 Constitution', force: '⚡ Force', precision: '🎯 Précision',
                  esprit: '🧠 Esprit', perception: '👁️ Perception', prestance: '👑 Prestance', sangFroid: '🧊 Sang-froid'
                };
                return `
                  <div class="capacite-box">
                    <div class="capacite-title">${labels[key] || key}</div>
                    <div class="capacite-desc" style="font-size: 28px; font-weight: bold; color: #92400e;">${value}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}
        
        ${character.profils && character.profils.majeur?.nom ? `
          <div class="section">
            <div class="section-title">Profils et Compétences</div>
            
            <div class="capacite-box" style="background: #fef3c7; border-color: #f59e0b; margin-bottom: 15px;">
              <div class="capacite-title" style="color: #92400e; font-size: 20px;">
                ⭐ Profil Majeur : ${character.profils.majeur.nom}
              </div>
              ${character.profils.majeur.trait ? `
                <div class="capacite-desc" style="margin-bottom: 10px;">
                  <strong>Trait de caractère :</strong> ${character.profils.majeur.trait}
                </div>
              ` : ''}
              <div class="capacite-desc" style="font-size: 13px;">
                Compétences à +2
              </div>
            </div>
            
            ${character.profils.mineur?.nom ? `
              <div class="capacite-box" style="background: #dbeafe; border-color: #3b82f6;">
                <div class="capacite-title" style="color: #1e3a8a; font-size: 20px;">
                  🏅 Profil Mineur : ${character.profils.mineur.nom}
                </div>
                ${character.profils.mineur.trait ? `
                  <div class="capacite-desc" style="margin-bottom: 10px;">
                    <strong>Trait de caractère :</strong> ${character.profils.mineur.trait}
                  </div>
                ` : ''}
                <div class="capacite-desc" style="font-size: 13px;">
                  Compétences à +1
                </div>
              </div>
            ` : ''}
          </div>
        ` : ''}
        
        ${feeData && feeData.description ? `
          <div class="section">
            <div class="section-title">Description</div>
            <div class="description">${feeData.description}</div>
          </div>
        ` : ''}
        
        ${feeData ? `
          <div class="section">
            <div class="section-title">Capacités Naturelles</div>
            
            <div class="capacite-box capacite-fixed">
              <div class="capacite-title">🌟 ${feeData.capacites.fixe1.nom}</div>
              <div class="capacite-desc">${feeData.capacites.fixe1.description}</div>
            </div>
            
            <div class="capacite-box capacite-fixed">
              <div class="capacite-title">🌟 ${feeData.capacites.fixe2.nom}</div>
              <div class="capacite-desc">${feeData.capacites.fixe2.description}</div>
            </div>
            
            ${character.capaciteChoisie ? `
              <div class="capacite-box capacite-chosen">
                <div class="capacite-title">⭐ ${character.capaciteChoisie} (Choix)</div>
                <div class="capacite-desc">${
                  feeData.capacites.choix.find(c => c.nom === character.capaciteChoisie)?.description || ''
                }</div>
              </div>
            ` : ''}
          </div>
        ` : ''}
        
        ${character.pouvoirs && character.pouvoirs.length > 0 && feeData ? `
          <div class="ornament">▪ ▪ ▪</div>
          
          <div class="section">
            <div class="section-title">Pouvoirs Choisis</div>
            <div class="pouvoirs-grid">
              ${character.pouvoirs.map(pouvoirNom => {
                const pouvoir = feeData.pouvoirs.find(p => p.nom === pouvoirNom);
                return pouvoir ? `
                  <div class="pouvoir-box">
                    <div class="pouvoir-title">✦ ${pouvoir.nom}</div>
                    <div class="pouvoir-desc">${pouvoir.description}</div>
                  </div>
                ` : '';
              }).join('')}
            </div>
          </div>
        ` : ''}
        
        <div class="footer">
          Créé le ${new Date(character.createdAt).toLocaleDateString('fr-FR')}
          ${character.lastModified ? ` • Modifié le ${new Date(character.lastModified).toLocaleDateString('fr-FR')}` : ''}
        </div>
      </div>
      
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(htmlContent);
  printWindow.document.close();
};
