#!/usr/bin/env bash
# heritiers_init_drive.sh
# Upload TOUS les fichiers .js du projet vers Google Drive (initialisation)
set -euo pipefail

command -v jq >/dev/null 2>&1 || { echo "❌ jq requis"; exit 1; }
[ -f .env ] || { echo "❌ .env manquant"; exit 1; }

source .env

# ── Token ─────────────────────────────────────────────────────────────────────
echo "🔑 Token Drive..."
RESPONSE=$(curl -s -X POST \
  --data-urlencode "client_id=${GOOGLE_CLIENT_ID}" \
  --data-urlencode "client_secret=${GOOGLE_CLIENT_SECRET}" \
  --data-urlencode "refresh_token=${GOOGLE_REFRESH_TOKEN}" \
  --data-urlencode "grant_type=refresh_token" \
  https://oauth2.googleapis.com/token)

ACCESS_TOKEN=$(echo "$RESPONSE" | jq -r '.access_token')
[ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ] && { echo "❌ Token invalide"; exit 1; }
echo "🔓 Token OK"

# ── Collecte des fichiers JS ──────────────────────────────────────────────────
JS_FILES=$(find src \( -name "*.js" -o -name "*.jsx" \) | sort)
TOTAL=$(echo "$JS_FILES" | wc -l)
echo "📂 $TOTAL fichiers .js trouvés"
echo ""

COUNT=0
while IFS= read -r FILE; do
  COUNT=$((COUNT + 1))
  [ ! -f "$FILE" ] && { echo "[$COUNT/$TOTAL] ⏭️  $FILE (introuvable)"; continue; }

  REL_PATH="${FILE#src/}"
  NAME=$(echo "$REL_PATH" | sed 's|/|_|g' | sed 's|\.|_|g').gdoc
  echo "[$COUNT/$TOTAL] 📤 $FILE → '$NAME'"

  echo "  🔍 Recherche existant..."
  SEARCH_RESP=$(curl -s --max-time 10 -H "Authorization: Bearer $ACCESS_TOKEN" \
    "https://www.googleapis.com/drive/v3/files?q=name='${NAME}'%20and%20'${GOOGLE_FOLDER_ID}'%20in%20parents%20and%20mimeType='application/vnd.google-apps.document'&fields=files(id)")

  FILE_ID=$(echo "$SEARCH_RESP" | jq -r '.files[0].id // empty')

  if [ -n "$FILE_ID" ] && [ "$FILE_ID" != "null" ]; then
    echo "  ♻️  Existant (ID: $FILE_ID) → écrasement"
  else
    echo "  🆕 Création..."
    CREATE_RESP=$(curl -s --max-time 10 -X POST \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Content-Type: application/json" \
      -d "{\"name\":\"${NAME}\",\"mimeType\":\"application/vnd.google-apps.document\",\"parents\":[\"${GOOGLE_FOLDER_ID}\"]}" \
      "https://www.googleapis.com/drive/v3/files?fields=id")
    FILE_ID=$(echo "$CREATE_RESP" | jq -r '.id')
    echo "  🆕 ID: $FILE_ID"
  fi

  echo "  📤 Upload contenu..."
  curl -s --max-time 60 -X PATCH \
    "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    -H "Content-Type: text/plain" \
    --data-binary "@$FILE" >/dev/null

  echo "  ✅ OK"
  echo ""
done <<< "$JS_FILES"

echo "🎉 $COUNT/$TOTAL fichiers synchronisés sur Google Drive !"
