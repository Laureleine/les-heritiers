// src/utils/utils.js
// 8.32.0 
// 9.6.0 // 9.11.0
// 10.4.0

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