#!/bin/bash
# txt_to_gdoc.sh - Converts a .txt file to a Google Doc
# Usage: ./txt_to_gdoc.sh <file.txt> ["Titre du doc"]

# Charger les variables depuis .env
source .env

CLIENT_ID="$GOOGLE_CLIENT_ID"
CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
REFRESH_TOKEN="$GOOGLE_REFRESH_TOKEN"
FOLDER_ID="$GOOGLE_FOLDER_ID"

[[ $# -lt 1 ]] && { echo "Usage: $0 <file.txt> [titre]"; exit 1; }
[[ ! -f "$1" ]] && { echo "Erreur : fichier '$1' introuvable."; exit 1; }

TXT_FILE="$1"
DOC_TITLE="${2:-$(basename "$TXT_FILE" .txt)}"

echo "🔑 Récupération du token..."
RESPONSE=$(curl -s -X POST https://oauth2.googleapis.com/token \
  -d "client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token")

ACCESS_TOKEN=$(echo "$RESPONSE" | tr -d '\n\r ' | sed 's/.*"access_token":"\([^"]*\)".*/\1/')
if [[ -z "$ACCESS_TOKEN" || "$ACCESS_TOKEN" == "$RESPONSE" ]]; then
  echo "Erreur token : $RESPONSE"; exit 1
fi

echo "📄 Création du Google Doc dans Drive/App..."
CREATE_RESP=$(curl -s -X POST \
  "https://www.googleapis.com/drive/v3/files?fields=id,webViewLink" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"${DOC_TITLE}\",\"mimeType\":\"application/vnd.google-apps.document\",\"parents\":[\"${FOLDER_ID}\"]}")

FILE_ID=$(echo "$CREATE_RESP" | tr -d '\n\r ' | sed 's/.*"id":"\([^"]*\)".*/\1/')
FILE_URL=$(echo "$CREATE_RESP" | tr -d '\n\r ' | sed 's/.*"webViewLink":"\([^"]*\)".*/\1/')

if [[ -z "$FILE_ID" || "$FILE_ID" == "$CREATE_RESP" ]]; then
  echo "Erreur création : $CREATE_RESP"; exit 1
fi

echo "📤 Injection du contenu..."
curl -s -X PATCH \
  "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: text/plain" \
  --data-binary "@${TXT_FILE}" > /dev/null

echo ""
echo "✅ Terminé !"
echo "   Titre : $DOC_TITLE"
echo "   ID    : $FILE_ID"
echo "   URL   : $FILE_URL"