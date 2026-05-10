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

# ── 3. Token Google Drive ─────────────────────────────────────────────────────
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

# ── 4. Git ────────────────────────────────────────────────────────────────────
echo ""
echo "➕ git add ."
git add .
# On récupère la liste des fichiers modifiés AVANT le commit
CHANGED_FILES=$(git diff --name-only --cached 2>/dev/null || echo "")
[ -z "$CHANGED_FILES" ] && { echo "ℹ️ Rien à committer"; exit 0; }

echo "📝 git commit"
git commit -m "Les Héritiers v${VERSION}"

echo "⬇️ git pull origin main"
if ! git pull origin main; then
  echo "❌ Conflit lors du merge !"
  exit 1
fi

echo "🚀 git push origin main"
git push origin main

# ── 5. Sync fichiers vers Google Drive en Markdown ───────────────────────────
# Ajout de jsx et tsx
JS_FILES=$(echo "$CHANGED_FILES" | grep -E '\.(js|jsx|tsx)$' || true)

if [[ -z "$JS_FILES" ]]; then
  echo "⚠️  Aucun fichier de code modifié, sync Drive ignorée."
else
  COUNT=0
  TOTAL=$(echo "$JS_FILES" | wc -l)
  echo "📂 $TOTAL fichiers de code à synchroniser"

  while IFS= read -r FILE; do
    COUNT=$((COUNT + 1))
    [ ! -f "$FILE" ] && { echo "[$COUNT/$TOTAL] ⏭️ $FILE"; continue; }

    # Formatage du nom : src/auth/login.js -> auth_login_js.md
    REL_PATH="${FILE#src/}"
    NAME=$(echo "$REL_PATH" | sed 's|/|_|g' | sed 's|\.|_|g').md
    echo "[$COUNT/$TOTAL] 📤 $FILE → '$NAME'"

    echo "  🔍 Recherche existant..."
    # Correction : Recherche par mimeType text/markdown
    SEARCH_RESP=$(curl -s --max-time 10 -G \
      "https://www.googleapis.com/drive/v3/files" \
      --data-urlencode "q=name='${NAME}' and '${GOOGLE_FOLDER_ID}' in parents and mimeType='text/markdown' and trashed=false" \
      -d "fields=files(id)" \
      -H "Authorization: Bearer ${ACCESS_TOKEN}")

    FILE_ID=$(echo "$SEARCH_RESP" | jq -r '.files[0].id // empty')

    if [ -n "$FILE_ID" ] && [ "$FILE_ID" != "null" ]; then
      echo "  ♻️  Existant (ID: $FILE_ID) → écrasement"
    else
      echo "  🆕 Création..."
      CREATE_RESP=$(curl -s -X POST \
        "https://www.googleapis.com/drive/v3/files?fields=id" \
        -H "Authorization: Bearer ${ACCESS_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{\"name\":\"${NAME}\",\"mimeType\":\"text/markdown\",\"parents\":[\"${GOOGLE_FOLDER_ID}\"]}")
      FILE_ID=$(echo "$CREATE_RESP" | jq -r '.id')
      echo "  🆕 ID: $FILE_ID"
    fi

    echo "  📤 Upload contenu..."
    curl -s --max-time 60 -X PATCH \
      "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Content-Type: text/markdown" \
      --data-binary "@$FILE" >/dev/null

    echo "  ✅ OK"
  done <<< "$JS_FILES"

  echo "🎉 $TOTAL fichiers synchronisés en .md !"

	# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	# NOTEBOOKLM
	# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

	echo ""
	echo "🔄 NotebookLM..."
	if [ -f "notebooklm_refresh.py" ]; then
	  python notebooklm_refresh.py $CHANGED_FILES || echo "⚠️ Erreur NotebookLM (non bloquant)"
	else
	  echo "⚠️ notebooklm_refresh.py introuvable"
	fi
fi

echo ""
echo "🏁 Fin du processus !"