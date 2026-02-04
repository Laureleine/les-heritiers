// src/utils/characterStorage.js
// Version: 3.0.3
// Build: 2026-02-04 04:20
// Description: Import et export de personnages au format JSON

/**
 * Exporte un personnage au format JSON
 */
export const exportCharacter = (character) => {
  try {
    const dataStr = JSON.stringify(character, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.nom || 'personnage'}_${new Date().toISOString().split('T')[0]}.json`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Erreur lors de l\'export:', error);
    alert('Erreur lors de l\'export du personnage');
  }
};

/**
 * Importe un personnage depuis un fichier JSON
 */
export const importCharacter = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('Aucun fichier fourni'));
      return;
    }

    if (!file.name.endsWith('.json')) {
      reject(new Error('Le fichier doit être au format JSON'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const character = JSON.parse(e.target.result);
        
        // Validation basique
        if (!character.nom || !character.typeFee) {
          reject(new Error('Fichier JSON invalide : données manquantes'));
          return;
        }

        // Supprimer l'ID pour créer un nouveau personnage
        const newCharacter = {
          ...character,
          id: undefined,
          created_at: undefined,
          updated_at: undefined,
          user_id: undefined
        };

        resolve(newCharacter);
      } catch (error) {
        reject(new Error('Erreur lors de la lecture du fichier JSON'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Erreur lors de la lecture du fichier'));
    };

    reader.readAsText(file);
  });
};
