const fs = require('fs');
const path = require('path');

const versionPath = path.join(__dirname, '../src/version.js');
const publicDestPath = path.join(__dirname, '../public/version.json');

// Extraction de la version depuis VERSION_HISTORY[0]
const content = fs.readFileSync(versionPath, 'utf8');
const match = content.match(/version:\s*['"]([0-9]+\.[0-9]+\.[0-9]+)/);
if (!match) { console.error('❌ Version introuvable'); process.exit(1); }

const version = match[1];
const today = new Date().toLocaleDateString('fr-FR');
const buildData = { version, buildDate: today };

fs.writeFileSync(publicDestPath, JSON.stringify(buildData, null, 2));
console.log(`✅ Build v${version} généré le ${today}`);