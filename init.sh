#!/bin/bash
# init.sh - Crée un Google Doc pour chaque fichier .js du projet
# Usage: ./init.sh

source .env

CLIENT_ID="$GOOGLE_CLIENT_ID"
CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
REFRESH_TOKEN="$GOOGLE_REFRESH_TOKEN"
FOLDER_ID="$GOOGLE_FOLDER_ID"

# Dossiers à exclure
EXCLUDES="node_modules|\.git|dist|build|coverage"

# ── Token ─────────────────────────────────────────────────────────────────────
echo "🔑 Récupération du token..."
RESPONSE=$(curl -s -X POST https://oauth2.googleapis.com/token \
  -d "client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token")

ACCESS_TOKEN=$(echo "$RESPONSE" | tr -d '\n\r ' | sed 's/.*"access_token":"\([^"]*\)".*/\1/')
if [[ -z "$ACCESS_TOKEN" || "$ACCESS_TOKEN" == "$RESPONSE" ]]; then
  echo "❌ Erreur token : $RESPONSE"; exit 1
fi
echo "Token OK."
echo ""

# ── Trouver tous les .js ──────────────────────────────────────────────────────
JS_FILES=$(find . -name "*.js" | grep -vE "$EXCLUDES" | sort)
TOTAL=$(echo "$JS_FILES" | wc -l)
echo "📂 $TOTAL fichiers .js trouvés."
echo ""

COUNT=0

# ── Upload ────────────────────────────────────────────────────────────────────
while IFS= read -r FILE; do
  DOC_TITLE="$(basename "$FILE" .js)"
  COUNT=$((COUNT + 1))
  echo "[$COUNT/$TOTAL] 📤 $FILE → '$DOC_TITLE'..."

  # Chercher si doc existant
  SEARCH_RESP=$(curl -s -G \
    "https://www.googleapis.com/drive/v3/files" \
    --data-urlencode "q=name='${DOC_TITLE}' and '${FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.document' and trashed=false" \
    -d "fields=files(id,webViewLink)" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}")

  EXISTING_ID=$(echo "$SEARCH_RESP" | tr -d '\n\r ' | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

  if [[ -n "$EXISTING_ID" ]]; then
    echo "   ♻️  Existant, écrasement..."
    FILE_ID="$EXISTING_ID"
  else
    CREATE_RESP=$(curl -s -X POST \
      "https://www.googleapis.com/drive/v3/files?fields=id,webViewLink" \
      -H "Authorization: Bearer ${ACCESS_TOKEN}" \
      -H "Content-Type: application/json" \
      -d "{\"name\":\"${DOC_TITLE}\",\"mimeType\":\"application/vnd.google-apps.document\",\"parents\":[\"${FOLDER_ID}\"]}")

    FILE_ID=$(echo "$CREATE_RESP" | tr -d '\n\r ' | sed 's/.*"id":"\([^"]*\)".*/\1/')

    if [[ -z "$FILE_ID" || "$FILE_ID" == "$CREATE_RESP" ]]; then
      echo "   ❌ Erreur création : $CREATE_RESP"; continue
    fi
  fi

  curl -s -X PATCH \
    "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: text/plain" \
    --data-binary "@${FILE}" > /dev/null

  echo "   ✅ OK"

done <<< "$JS_FILES"

echo ""
echo "🎉 Initialisation terminée ! $TOTAL fichiers synchronisés."