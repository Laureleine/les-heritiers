#!/bin/bash

echo "🚀 Release Les Héritiers - Build + Drive G:"

# 1/ BUILD ET VERSION
npm run prebuild
VERSION=$(grep -oP '✅ Build \K[v0-9]+\.[0-9]+\.[0-9]+' <(npm run prebuild) || echo "v$(date +%Y.%m.%d)")

echo "📤 Build OK - Version: $VERSION"

# Git sync
git stash push -m "release temp" 2>/dev/null || true
git pull origin main --rebase || git pull origin main
git stash pop 2>/dev/null || true

git add .
git commit -m "Les Héritiers $VERSION" || echo "Aucun changement"
git push -u origin main

echo "✅ 1/ App déployée v$VERSION"

# 2/ JS → Drive G: (dans le sous-dossier App)
echo "💾 2. JS → Drive G:/Mon Drive/-=- JdR -=-/-=- Les héritiers -=-/-=- App -=-/ ..."
DRIVE_PATH="/g/Mon Drive/-=- JdR -=-/-=- Les héritiers -=-/-=- App -=-/"

# Crée sous-dossier App si absent
mkdir -p "$DRIVE_PATH"

# TOUS les .js du projet → .txt
js_files=()
for jsfile in *.js src/*.js public/*.js; do
    if [ -f "$jsfile" ]; then
        js_files+=("$jsfile")
    fi
done

for jsfile in "${js_files[@]}"; do
    cleanname=$(basename "$jsfile" .js).txt
    cp "$jsfile" "$DRIVE_PATH/$cleanname"
    if [ $? -eq 0 ]; then
        echo "✅ $cleanname → $DRIVE_PATH/"
    else
        echo "⚠️ $cleanname (Drive KO)"
    fi
done

echo "📁 Drive G: $DRIVE_PATH ($(ls "$DRIVE_PATH" 2>/dev/null | wc -l) fichiers)"
echo "🎉 RELEASE TERMINÉ v$VERSION !"
echo "📱 App: GitHub v$VERSION"
echo "📚 Drive G:/Mon Drive/-=- JdR -=-/-=- Les héritiers -=-/-=- App -=-/ → NotebookLM"
read -p "Appuyez sur Entrée pour fermer..."
