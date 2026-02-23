#!/bin/bash
# release.sh - Automatise prebuild + git commit avec version

set -e  # Arrête sur erreur

echo "🚀 Début du release..."

# 1. Exécute prebuild et capture la sortie
BUILD_OUTPUT=$(npm run prebuild 2>&1)
echo "$BUILD_OUTPUT"

# 2. Extrait la version du log (regex pour "vX.Y.Z")
VERSION=$(echo "$BUILD_OUTPUT" | grep -oP '✅ Build \K[v0-9]+\.[0-9]+\.[0-9]+' || echo "UNKNOWN")

if [ "$VERSION" = "UNKNOWN" ]; then
  echo "❌ Erreur : version non trouvée dans le log prebuild"
  exit 1
fi

echo "📦 Version détectée : $VERSION"

# 3. Git add des fichiers modifiés (inclut version.json et build-info.json)
git add .

# 4. Commit avec message formaté
git commit -m "Les Héritiers $VERSION"

# 5. Push
git push -u origin main

echo "✅ Release terminé : v$VERSION poussée sur main"