#!/bin/bash
# release.sh - Automatise prebuild + git commit avec version + AUTO-PULL

set -e  # Arrête sur erreur

echo "🚀 Début du release intelligent..."

# 1. AUTO-PULL avec merge message automatique
echo "🔄 Auto-pull origin main (backups GitHub Actions)..."
git -c core.editor=true pull origin main 2>/dev/null || \
git -c core.editor=true pull --rebase origin main
echo "✅ Sync GitHub OK"

# 2. Exécute prebuild et capture la sortie
BUILD_OUTPUT=$(npm run prebuild 2>&1)
echo "$BUILD_OUTPUT"

# 3. Extrait la version (NOUVELLE REGEX)
VERSION=$(echo "$BUILD_OUTPUT" | grep -oP 'v\K[0-9]+\.[0-9]+\.[0-9]+' || echo "UNKNOWN")

if [ "$VERSION" = "UNKNOWN" ]; then
  echo "❌ Erreur : version non trouvée dans le log prebuild"
  exit 1
fi

echo "📦 Version détectée : v$VERSION"

# 4. Git add des fichiers modifiés (scripts uniquement)
git add .

# 5. Commit avec message formaté
git commit -m "Les Héritiers v$VERSION"

# 6. Push final
git push -u origin main

echo "✅ Release terminé : v$VERSION poussée sur main"
echo "💾 Backups GitHub Actions préservés !"