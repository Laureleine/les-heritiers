#!/bin/bash

echo "🚀 Release Les Héritiers - Build + Drive G:"

# 1/ BUILD ET VERSION
echo "📦 1. Build et livraison app..."
npm run prebuild
VERSION=$(grep -oP '✅ Build \K[v0-9]+\.[0-9]+\.[0-9]+' <(npm run prebuild) || echo "v$(date +%Y.%m.%d)")

echo "📤 Build OK - Version: $VERSION"

# Git pull + commit + push (app SEULEMENT)
echo "🔄 Git sync app..."
git stash push -m "release temp" 2>/dev/null || true
git pull origin main --rebase || git pull origin main
git stash pop 2>/dev/null || true

git add . # SourcesTxt/ ignoré (.gitignore)
git commit -m "Les Héritiers $VERSION" || echo "Aucun changement"
git push -u origin main

echo "✅ 1/ App déployée v$VERSION"

# 2/ JS → Drive G: DIRECT (pas de SourcesTxt local)
echo "💾 2. JS → Drive G:..."
DRIVE_PATH="G:/Mon Drive/-=- JdR -=--=- Les héritiers -=--=- App -=-/"

# TOUS les .js du projet
for jsfile in *.js src/*.js public/*.js; do
    if [ -f "$jsfile" ]; then
        cleanname=$(basename "$jsfile" .js).txt
        cp "$jsfile" "$DRIVE_PATH$cleanname"
        echo "✅ $cleanname → $DRIVE_PATH"
    fi
done

# Vérification Drive
if [ -d "$DRIVE_PATH" ]; then
    echo "📁 Drive OK: $(ls "$DRIVE_PATH" | head -5)"
else
    echo "⚠️ Drive G: non trouvé: $DRIVE_PATH"
    echo "Vérifie ton chemin exact avec: ls \"G:/Mon Drive/\""
fi

echo "🎉 RELEASE TERMINÉ v$VERSION !"
echo "📱 App: GitHub v$VERSION"
echo "📚 Drive G:/Mon Drive/-=- JdR -=--=- Les héritiers -=--=- App -=-/ → NotebookLM"
read -p "Appuyez sur Entrée pour fermer..."
