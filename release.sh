#!/bin/bash

echo "🚀 Release Les Héritiers - Build + GOOGLE DOCS !"

# 1/ BUILD + GIT (PARFAIT)
npm run prebuild
VERSION=$(grep -oP '✅ Build \K[v0-9.]+\.[0-9]+' <(npm run prebuild) || echo "v$(date +%Y.%m.%d)")

git stash push -m "temp" 2>/dev/null || true
git pull origin main --rebase || git pull origin main  
git stash pop 2>/dev/null || true
git add . && git commit -m "Les Héritiers $VERSION" && git push -u origin main

echo "✅ App v$VERSION OK"

# 2/ GOOGLE DOCS (gcloud + chemin Windows)
echo "☁️ Création GOOGLE DOCS..."

# Chemin Drive Windows (Git Bash → Windows path)
DRIVE_PATH="/g/Mon Drive/-=- JdR -=-/-=- Les héritiers -=-/-=- App -=-"
WIN_DRIVE="G:\\Mon Drive\\-=- JdR -=-\\-=- Les héritiers -=-\\-=- App -=-"

# Vérifie gcloud (avec chemin Windows)
GCLOUD_PATH="/c/Users/amara/google-cloud-sdk/bin/gcloud"
if [ -f "$GCLOUD_PATH" ]; then
    GCLOUD_CMD="$GCLOUD_PATH"
else
    GCLOUD_CMD="gcloud"
fi

# Test gcloud
if ! "$GCLOUD_CMD" auth print-access-token >/dev/null 2>&1; then
    echo "❌ gcloud auth échoué → relance 'gcloud auth login'"
    exit 1
fi

TOKEN=$("$GCLOUD_CMD" auth print-access-token)

# CRÉE Google Docs (src/*.js UNIQUEMENT)
echo "📁 Dossier Drive: $WIN_DRIVE"
for jsfile in src/*.js; do
    if [ -f "$jsfile" ]; then
        filename=$(basename "$jsfile" .js)
        title="JS - $filename - v$VERSION"
        
        echo -n "📄 $filename... "
        
        # 1. CRÉE Google Doc
        response=$(curl -s -X POST \
            -H "Authorization: Bearer $TOKEN" \
            -H "Content-Type: application/json" \
            -d "{\"title\": \"$title\"}" \
            https://docs.googleapis.com/v1/documents)
        
        doc_id=$(echo "$response" | grep -o '"documentId":"[^"]*'
