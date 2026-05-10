#!/usr/bin/env bash
set -euo pipefail

command -v jq >/dev/null 2>&1 || { echo "❌ jq requis"; exit 1; }
[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
[ -f src/version.js ] || { echo "❌ src/version.js manquant"; exit 1; }

source .env

# ── 1. Version ────────────────────────────────────────────────────────────────
VERSION=$(grep -m1 "version:" src/version.js | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+' | head -1)
echo "📦 Les Héritiers v$VERSION"

# ── 2. Prebuild ───────────────────────────────────────────────────────────────
echo "🔨 npm run prebuild..."
npm run prebuild

# ── 2. Token Google Drive ─────────────────────────────────────────────────────
echo ""
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

# ── 3. Git ────────────────────────────────────────────────────────────────────
echo ""
echo "➕ git add ."
git add .
CHANGED_FILES=$(git diff --name-only --cached 2>/dev/null || echo "")
[ -z "$CHANGED_FILES" ] && { echo "ℹ️ Rien à committer"; exit 0; }

echo "📝 git commit"
git commit -m "Les Héritiers v${VERSION}"

echo "⬇️ git pull origin main"
if ! git pull origin main; then
  echo "❌ Conflit lors du merge !"
  echo "   Résous les conflits manuellement (ex: 'code .' dans VS Code),"
  echo "   puis 'git add .' et relance le script."
  exit 1
fi

echo "🚀 git push origin main"
git push origin main
echo "✅ Push OK → Google Docs..."

# ── 4. Sync fichiers JS vers Google Drive ─────────────────────────────────────
JS_FILES=$(echo "$CHANGED_FILES" | grep -E '\.(js|jsx)$' || true)

if [[ -z "$JS_FILES" ]]; then
  echo "⚠️  Aucun fichier .js modifié, sync Drive ignorée."
else
  COUNT=0
  TOTAL=$(echo "$JS_FILES" | wc -l)
  echo "📂 $TOTAL fichiers JS"

  while IFS= read -r FILE; do
    COUNT=$((COUNT + 1))
    [ ! -f "$FILE" ] && { echo "[$COUNT/$TOTAL] ⏭️ $FILE"; continue; }

    REL_PATH="${FILE#src/}"
    NAME=$(echo "$REL_PATH" | sed 's|/|_|g' | sed 's|\.|_|g').md
    echo "[$COUNT/$TOTAL] 📤 $FILE → '$NAME'"

    echo "  🔍 Recherche existant..."
    SEARCH_RESP=$(curl -s --max-time 10 -G \
    "https://www.googleapis.com/drive/v3/files" \
    --data-urlencode "q=name='${NAME}' and '${GOOGLE_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.document' and trashed=false" \
    -d "fields=files(id,webViewLink)" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}")

    EXISTING_ID=$(echo "$SEARCH_RESP" | tr -d '\n\r ' | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

    if [ -n "$FILE_ID" ] && [ "$FILE_ID" != "null" ]; then
      echo "  ♻️  Existant (ID: $FILE_ID) → écrasement"
    else
      echo "  🆕 Création..."
      CREATE_RESP=$(curl -s -X POST \
	  "https://www.googleapis.com/drive/v3/files?fields=id,webViewLink" \
      -H "Authorization: Bearer ${ACCESS_TOKEN}" \
      -H "Content-Type: application/json" \
      -d "{\"name\":\"${NAME}\",\"mimeType\":\"application/vnd.google-apps.document\",\"parents\":[\"${GOOGLE_FOLDER_ID}\"]}")

       FILE_ID=$(echo "$CREATE_RESP" | tr -d '\n\r ' | sed 's/.*"id":"\([^"]*\)".*/\1/')
      echo "  🆕 ID: $FILE_ID"
    fi

    echo "  📤 Écrasement contenu..."
    curl -s --max-time 60 -X PATCH \
      "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Content-Type: text/plain" \
      --data-binary "@$FILE" >/dev/null

    echo "  ✅ OK"
    echo ""
  done <<< "$JS_FILES"

  echo "🎉 $COUNT/$TOTAL synchronisés !"

  echo "🔄 Refresh NotebookLM..."
  python notebooklm_refresh.py $JS_FILES
fi

echo ""
echo "🏁 Les Héritiers v${VERSION} terminé !"
