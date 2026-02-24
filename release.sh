#!/bin/bash

echo "🚀 Release Les Héritiers - Build + SourcesTxt"

# 1/ BUILD ET VERSION
echo "📦 1. Build et livraison app..."
npm run prebuild
VERSION=$(grep -oP '✅ Build \K[v0-9]+\.[0-9]+\.[0-9]+' <(npm run prebuild) || echo "v$(date +%Y.%m.%d)")

echo "📤 Build OK - Version: $VERSION"

# Git pull + commit + push
git pull origin main --rebase || true
git add .
git commit -m "Les Héritiers $VERSION" || echo "Aucun changement"
git push -u origin main

echo "✅ 1/ App déployée v$VERSION"

# 2/ JS modifiés → SourcesTxt
echo "☁️ 2. JS modifiés → SourcesTxt..."
mkdir -p SourcesTxt
rm -f SourcesTxt/*.txt

# JS modifiés (git diff)
for jsfile in $(git diff --name-only HEAD~1 | grep '\.js$'); do
    if [ -f "$jsfile" ]; then
        timestamp=$(date +%Y%m%d_%H%M%S)
        cp "$jsfile" "SourcesTxt/$(basename "$jsfile")_$timestamp.txt"
        echo "✅ $(basename "$jsfile") → SourcesTxt/"
    fi
done

# 3+4/ Drive G: (TON CHEMIN EXACT)
echo "💾 3+4. SourcesTxt + Drive G:..."
DRIVE_PATH="G:/Mon Drive/-=- JdR -=--=- Les héritiers -=--=- App -=-/"

if [ -d "$DRIVE_PATH" ]; then
    for src in SourcesTxt/*.txt; do
        if [ -f "$src" ]; then
            cleanname=$(basename "$src" | sed 's/_[0-9]\{14\}\.txt/.txt/')
            cp "$src" "SourcesTxt/$cleanname"
            cp "SourcesTxt/$cleanname" "$DRIVE_PATH$cleanname"
            echo "✅ $cleanname → $DRIVE_PATH"
        fi
    done
    git add SourcesTxt/
    git commit -m "📚 SourcesTxt backup - v$VERSION" || echo "Pas de backup"
    git push
else
    echo "⚠️ Drive G: non trouvé. Vérifie: $DRIVE_PATH"
    echo "Alternative: SourcesTxt/ prêt pour upload manuel NotebookLM"
fi

echo "🎉 RELEASE TERMINÉ v$VERSION !"
echo "📱 App: GitHub v$VERSION"
echo "📚 SourcesTxt/ + Drive G: prêt pour NotebookLM"
read -p "Appuyez sur Entrée pour fermer..."
