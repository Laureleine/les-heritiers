#!/bin/bash
# refresh_token.sh - Régénère le refresh token Google Drive et met à jour .env
# Usage: ./refresh_token.sh

source .env

CLIENT_ID="$GOOGLE_CLIENT_ID"
CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"

# ── 1. Générer l'URL d'autorisation ──────────────────────────────────────────
echo ""
echo "🔑 Régénération du token Google Drive"
echo "══════════════════════════════════════"
echo ""
echo "1️⃣  Ouvre ce lien dans ton navigateur :"
echo ""
echo "https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=https://www.googleapis.com/auth/drive&access_type=offline&prompt=consent"
echo ""

# ── 2. Demander le code ───────────────────────────────────────────────────────
read -p "2️⃣  Colle le code d'autorisation ici : " AUTH_CODE

if [[ -z "$AUTH_CODE" ]]; then
  echo "❌ Aucun code fourni. Abandon."; exit 1
fi

# ── 3. Échanger le code contre un refresh token ───────────────────────────────
echo ""
echo "🔄 Échange du code contre un token..."
RESPONSE=$(curl -s -X POST https://oauth2.googleapis.com/token \
  -d "client_id=${CLIENT_ID}" \
  -d "client_secret=${CLIENT_SECRET}" \
  -d "code=${AUTH_CODE}" \
  -d "redirect_uri=urn:ietf:wg:oauth:2.0:oob" \
  -d "grant_type=authorization_code")

if echo "$RESPONSE" | grep -q '"error"'; then
  ERROR_MSG=$(echo "$RESPONSE" | tr -d '\n\r ' | sed 's/.*"error":"\([^"]*\)".*/\1/')
  echo "❌ Erreur : $ERROR_MSG"
  echo "👉 Le code a peut-être expiré (valable ~1 minute). Relance le script."
  exit 1
fi

NEW_REFRESH_TOKEN=$(echo "$RESPONSE" | tr -d '\n\r ' | sed 's/.*"refresh_token":"\([^"]*\)".*/\1/')
if [[ -z "$NEW_REFRESH_TOKEN" || "$NEW_REFRESH_TOKEN" == "$RESPONSE" ]]; then
  echo "❌ Impossible d'extraire le refresh token : $RESPONSE"; exit 1
fi

# ── 4. Mettre à jour le .env ──────────────────────────────────────────────────
sed -i "s/^GOOGLE_REFRESH_TOKEN=.*/GOOGLE_REFRESH_TOKEN=${NEW_REFRESH_TOKEN}/" .env

echo ""
echo "✅ Nouveau refresh token enregistré dans .env !"
echo "🚀 Tu peux relancer ton release.sh"