#!/usr/bin/env bash
set -euo pipefail

# --- Vérifications de sécurité ---
command -v jq >/dev/null 2>&1 || { echo "❌ jq requis"; exit 1; }
[ -f .env ] || { echo "❌ .env manquant"; exit 1; }

source .env

# ── 1. Authentification Google Drive ──────────────────────────────────────────
echo "🔑 Génération du token d'accès..."
RESPONSE=$(curl -s -X POST \
  --data-urlencode "client_id=${GOOGLE_CLIENT_ID}" \
  --data-urlencode "client_secret=${GOOGLE_CLIENT_SECRET}" \
  --data-urlencode "refresh_token=${GOOGLE_REFRESH_TOKEN}" \
  --data-urlencode "grant_type=refresh_token" \
  https://oauth2.googleapis.com/token)

ACCESS_TOKEN=$(echo "$RESPONSE" | jq -r '.access_token')
[ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ] && { echo "❌ Token invalide"; exit 1; }

# ── 2. Identification de tous les fichiers à synchroniser ─────────────────────
# On liste tous les fichiers .js et .jsx du dossier src/
ALL_FILES=$(find src -type f -regex ".*\.\(js\|jsx\)$")
TOTAL=$(echo "$ALL_FILES" | wc -l)
COUNT=0

echo "📂 Analyse de $TOTAL fichiers sources..."

# ── 3. Boucle de synchronisation forcée ───────────────────────────────────────
while IFS= read -r FILE; do
    COUNT=$((COUNT + 1))
    
    # Formatage du nom identique à heritiers.sh
    REL_PATH="${FILE#src/}"
    NAME=$(echo "$REL_PATH" | sed 's|/|_|g' | sed 's|\.|_|g').gdoc
    
    echo "[$COUNT/$TOTAL] 📤 Synchronisation : $NAME"

    # Recherche de l'ID du fichier existant sur le Drive
    SEARCH_RESP=$(curl -s -H "Authorization: Bearer $ACCESS_TOKEN" \
      "https://www.googleapis.com/drive/v3/files?q=name='${NAME}'%20and%20'${GOOGLE_FOLDER_ID}'%20in%20parents%20and%20mimeType='application/vnd.google-apps.document'&fields=files(id)")

    FILE_ID=$(echo "$SEARCH_RESP" | jq -r '.files[0].id // empty')

    if [ -n "$FILE_ID" ]; then
        # Mise à jour du contenu sur Drive
        curl -s -X PATCH \
          "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
          -H "Authorization: Bearer $ACCESS_TOKEN" \
          -H "Content-Type: text/plain" \
          --data-binary "@$FILE" >/dev/null
        echo "  ✅ Contenu mis à jour"
    else
        echo "  ⚠️ Fichier absent sur Drive (vérifiez l'ID du dossier)"
    fi
done <<< "$ALL_FILES"

# ── 4. Appel du script Python de rafraîchissement ───────────────────────────
echo ""
echo "🔄 Appel de notebooklm_refresh.py pour la synchronisation finale..."
# On passe la liste de tous les fichiers pour forcer NotebookLM à tout vérifier
python notebooklm_refresh.py $ALL_FILES

echo ""
echo "🏁 Rafraîchissement complet terminé !"