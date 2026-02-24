#!/bin/bash

echo "🚀 Release Les Héritiers - Build + GOOGLE DOCS !"

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

# 2/ JS → GOOGLE DOCS via gcloud API
echo "☁️ 2. Création GOOGLE DOCS..."
DRIVE_PATH="/g/Mon Drive/-=- JdR -=-/-=- Les héritiers -=-/-=- App -=-/"

# Crée dossier App
mkdir -p "$DRIVE_PATH"

# Token gcloud pour API
gcloud auth print-access-token > /dev/null || echo "⚠️ gcloud auth requis"

# TOUS les .js → Google Docs
for jsfile in src/*.js *.js public/*.js; do
    if [ -f "$jsfile" ]; then
        filename=$(basename "$jsfile" .js)
        doc_title="JS - $filename - v$VERSION"
        
        echo "📄 Création Google Doc: $doc_title"
        
        # Crée Google Doc via API
        response=$(curl -s -X POST \
            -H "Authorization: Bearer $(gcloud auth print-access-token)" \
            -H "Content-Type: application/json" \
            -d "{\"title\": \"$doc_title\"}" \
            "https://docs.googleapis.com/v1/documents")
        
        doc_id=$(echo "$response" | grep -o '"documentId":"[^"]*' | cut -d'"' -f4)
        
        if [ -n "$doc_id" ]; then
            # Ajoute contenu JS au Doc
            curl -s -X POST \
                -H "Authorization: Bearer $(gcloud auth print-access-token)" \
                -H "Content-Type: application/json" \
                -d "{
                    \"requests\": [{
                        \"insertText\": {
                            \"location\": {\"index\": 1},
                            \"text\": \"$(cat \"$jsfile\" | head -c 45000)\"
                        }
                    }]
                }" \
                "https://docs.googleapis.com/v1/documents/$doc_id:batchUpdate"
            
            # Partage public pour NotebookLM
            curl -s -X POST \
                -H "Authorization: Bearer $(gcloud auth print-access-token)" \
                -H "Content-Type: application/json" \
                -d "{\"role\": \"reader\", \"type\": \"anyone\"}" \
                "https://www.googleapis.com/drive/v3/files/$doc_id/permissions"
            
            echo "✅ $filename → Google Doc: https://docs.google.com/document/d/$doc_id"
        else
            echo "⚠️ $filename (API erreur)"
        fi
    fi
done

echo "🎉 GOOGLE DOCS créés v$VERSION !"
echo "📱 App: GitHub v$VERSION"
echo "📚 Drive G:/Mon Drive/-=- JdR -=-/-=- Les héritiers -=-/-=- App -=-/ → NotebookLM AUTO !"
read -p "Appuyez sur Entrée pour fermer..."
