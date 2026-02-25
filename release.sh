#!/bin/bash
# release.sh - Build, commit, push, and sync JS files to Google Drive
# Usage: ./release.sh

# Charger les variables depuis .env
source .env

CLIENT_ID="$GOOGLE_CLIENT_ID"
CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
REFRESH_TOKEN="$GOOGLE_REFRESH_TOKEN"
FOLDER_ID="$GOOGLE_FOLDER_ID"

set -e

# ── 1. Prebuild ───────────────────────────────────────────────────────────────
echo "🔨 npm run prebuild..."
PREBUILD_OUTPUT=$(npm run prebuild 2>&1)
echo "$PREBUILD_OUTPUT"

VERSION=$(echo "$PREBUILD_OUTPUT" | grep -oP 'Build v\K[0-9]+\.[0-9]+\.[0-9]+')
if [[ -z "$VERSION" ]]; then
  echo "❌ Impossible d'extraire le numéro de version."; exit 1
fi
echo "📦 Version détectée : $VERSION"

# ── 2. Git ────────────────────────────────────────────────────────────────────
echo ""
echo "📝 Git add..."
git add .

echo "💬 Git commit..."
if git diff --cached --quiet && git diff --quiet; then
  echo "   ✅ Rien à commiter, release annulée."
  exit 0
fi
git commit -m "Les Héritiers v${VERSION}"

echo "🚀 Git push..."
git push -u origin main

# ── 3. Récupérer les fichiers JS commités ─────────────────────────────────────
echo ""
echo "📂 Récupération des fichiers JS modifiés..."
JS_FILES=$(git diff-tree --no-commit-id -r --name-only HEAD | grep '\.js$')

if [[ -z "$JS_FILES" ]]; then
  echo "⚠️  Aucun fichier .js modifié dans ce commit."
  exit 0
fi

echo "Fichiers JS détectés :"
echo "$JS_FILES"

# ── 4. Token Google Drive ─────────────────────────────────────────────────────
echo ""
echo "🔑 Récupération du token Drive..."
RESPONSE=$(curl -s -X POST https://oauth2.googleapis.com/token \
  -d "client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token")

ACCESS_TOKEN=$(echo "$RESPONSE" | tr -d '\n\r ' | sed 's/.*"access_token":"\([^"]*\)".*/\1/')
if [[ -z "$ACCESS_TOKEN" || "$ACCESS_TOKEN" == "$RESPONSE" ]]; then
  echo "❌ Erreur token : $RESPONSE"; exit 1
fi
echo "Token OK."

# ── 5. Upload chaque fichier JS en Google Doc (écrasement si existant) ────────
upload_to_drive() {
  local FILE="$1"
  local DOC_TITLE="$(basename "$FILE" .js)"

  echo ""
  echo "📤 Sync : $FILE → '$DOC_TITLE'..."

  SEARCH_RESP=$(curl -s -G \
    "https://www.googleapis.com/drive/v3/files" \
    --data-urlencode "q=name='${DOC_TITLE}' and '${FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.document' and trashed=false" \
    -d "fields=files(id,webViewLink)" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}")

  EXISTING_ID=$(echo "$SEARCH_RESP" | tr -d '\n\r ' | sed 's/.*"id":"\([^"]*\)".*/\1/')

  if [[ -n "$EXISTING_ID" && "$EXISTING_ID" != "$SEARCH_RESP" ]]; then
    echo "   ♻️  Fichier existant trouvé, écrasement..."
    FILE_ID="$EXISTING_ID"
    FILE_URL=$(echo "$SEARCH_RESP" | tr -d '\n\r ' | sed 's/.*"webViewLink":"\([^"]*\)".*/\1/')
  else
    CREATE_RESP=$(curl -s -X POST \
      "https://www.googleapis.com/drive/v3/files?fields=id,webViewLink" \
      -H "Authorization: Bearer ${ACCESS_TOKEN}" \
      -H "Content-Type: application/json" \
      -d "{\"name\":\"${DOC_TITLE}\",\"mimeType\":\"application/vnd.google-apps.document\",\"parents\":[\"${FOLDER_ID}\"]}")

    FILE_ID=$(echo "$CREATE_RESP" | tr -d '\n\r ' | sed 's/.*"id":"\([^"]*\)".*/\1/')
    FILE_URL=$(echo "$CREATE_RESP" | tr -d '\n\r ' | sed 's/.*"webViewLink":"\([^"]*\)".*/\1/')

    if [[ -z "$FILE_ID" || "$FILE_ID" == "$CREATE_RESP" ]]; then
      echo "❌ Erreur création pour $FILE : $CREATE_RESP"; return 1
    fi
  fi

  curl -s --max-time 30 -X PATCH \
    "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: text/plain" \
    --data-binary "@${FILE}" > /dev/null || echo "   ⚠️  Timeout, fichier ignoré."

  echo "   ✅ $DOC_TITLE"
  echo "   URL : $FILE_URL"
}

while IFS= read -r FILE; do
  [[ -f "$FILE" ]] && upload_to_drive "$FILE"
done <<< "$JS_FILES"

echo ""
echo "🎉 Release v${VERSION} terminée !"