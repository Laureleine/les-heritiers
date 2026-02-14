const fs = require('fs');
const path = require('path');

// 1. Configuration des chemins
const metadataPath = path.join(__dirname, '../src/metadata.json');
const publicDestPath = path.join(__dirname, '../public/version.json');
const srcDestPath = path.join(__dirname, '../src/build-info.json');

// 2. Lecture de la version manuelle
const metadata = require(metadataPath);

// 3. Génération de la Date du Jour (Réelle)
const today = new Date().toLocaleDateString('fr-FR'); // Ex: "07/02/2026"

// 4. Création de l'objet final
const buildData = {
    version: metadata.version,
    buildDate: today
};

// 5. Écriture des fichiers
const content = JSON.stringify(buildData, null, 2);

// A. Pour le système de mise à jour (Public)
fs.writeFileSync(publicDestPath, content);

// B. Pour l'affichage dans l'App (Src)
fs.writeFileSync(srcDestPath, content);

console.log(`✅ Build v${buildData.version} généré le ${buildData.buildDate}`);