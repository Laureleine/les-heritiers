#!/usr/bin/env bash
set -euo pipefail

command -v jq >/dev/null 2>&1 || { echo "❌ jq requis"; exit 1; }
[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
[ -f metaversion.json ] || { echo "❌ metaversion.json manquant"; exit 1; }

source .env
VERSION=$(jq -r '.version' metaversion.json)
MESSAGE_MARIE=$(jq -r '.messageMarie // empty' metaversion.json)

VERCEL_STATUS="skip"
DEPLOYMENT_ID=""
READY_STATE="UNKNOWN"
COUNT=0
CHANGED_FILES=""

echo "🧾 diegesis v$VERSION"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# GIT - FIX: Détecter fichiers AVANT commit
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo "➕ git add ."
git add .

# ✅ FIX: Détecter AVANT le commit !
CHANGED_FILES=$(git diff --name-only --cached 2>/dev/null || echo "")

if [ -z "$CHANGED_FILES" ]; then
  echo "ℹ️ Aucun fichier modifié"
  exit 0
fi

echo "📂 Fichiers modifiés ($(echo "$CHANGED_FILES" | wc -l)):"
echo "$CHANGED_FILES" | head -10
[ $(echo "$CHANGED_FILES" | wc -l) -gt 10 ] && echo "   ..."
echo ""

echo "📝 git commit"
git commit -m "diegesis v$VERSION"

echo "⬇️ git pull origin main"
if ! git pull origin main; then
  echo "❌ Conflit détecté !"
  echo "   Résous manuellement puis relance le script"
  exit 1
fi

echo "🚀 git push origin main"
git push origin main
echo "✅ Git OK"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# VERCEL
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo ""
echo "🔄 Vérification Vercel (max 5min)..."

if [ -n "${VERCEL_TOKEN:-}" ] && [ -n "${VERCEL_PROJECT_ID:-}" ]; then
  echo "⏳ Attente déclenchement build (10s)..."
  sleep 10
  
  VERCEL_RESP=$(curl -s --max-time 15 \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    "https://api.vercel.com/v6/deployments?limit=1&projectId=$VERCEL_PROJECT_ID")
  
  DEPLOYMENT_ID=$(echo "$VERCEL_RESP" | jq -r '.deployments[0].uid // empty')
  DEPLOYMENT_URL=$(echo "$VERCEL_RESP" | jq -r '.deployments[0].url // empty')
  
  if [ -n "$DEPLOYMENT_ID" ]; then
    echo "📦 Déploiement: $DEPLOYMENT_ID"
    echo "🌐 URL: https://$DEPLOYMENT_URL"
    
    MAX_WAIT=300
    ELAPSED=0
    
    while [ $ELAPSED -lt $MAX_WAIT ]; do
      sleep 10
      ELAPSED=$((ELAPSED + 10))
      
      VERCEL_CHECK=$(curl -s --max-time 15 \
        -H "Authorization: Bearer $VERCEL_TOKEN" \
        "https://api.vercel.com/v13/deployments/$DEPLOYMENT_ID")
      
      READY_STATE=$(echo "$VERCEL_CHECK" | jq -r '.readyState // "BUILDING"')
      
      printf "   ⏳ [%3ds] %s\r" $ELAPSED "$READY_STATE"
      
      if [ "$READY_STATE" = "READY" ]; then
        VERCEL_STATUS="✅ Déploiement OK"
        break
      elif [ "$READY_STATE" = "ERROR" ]; then
        VERCEL_STATUS="❌ Erreur déploiement"
        break
      fi
    done
    
    echo ""  # Nouvelle ligne après le printf
    
    if [ "$READY_STATE" != "READY" ] && [ "$READY_STATE" != "ERROR" ]; then
      VERCEL_STATUS="⏳ Timeout (${MAX_WAIT}s)"
    fi
    
    echo "$VERCEL_STATUS"
  else
    VERCEL_STATUS="❓ Déploiement introuvable"
    echo "$VERCEL_STATUS"
  fi
else
  echo "⚠️ Vercel skip (VERCEL_TOKEN ou VERCEL_PROJECT_ID manquants)"
fi

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ALERT ONLY — Pas de rollback auto !
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo ""
if [[ "$VERCEL_STATUS" == *"Erreur"* ]] || [[ "$VERCEL_STATUS" == *"Timeout"* ]]; then
  echo "🚨 ❌ VERCEL ÉCHOUÉ : $VERCEL_STATUS"
  echo "   ${DEPLOYMENT_ID:+ID: $DEPLOYMENT_ID}"
  echo ""
  echo "⚠️  ROLLBACK MANUEL recommandé :"
  echo "     git revert HEAD --no-edit"
  echo "     git push origin main"
  echo ""
  echo "💬 Alertes Marie..."

  # Alerte Discord IMMÉDIATE
  if [ -n "${DISCORD_WEBHOOK_URL:-}" ]; then
    ERROR_MSG="🚨 **DIEGESIS v$VERSION - ÉCHEC**\n\nVercel: $VERCEL_STATUS\n${DEPLOYMENT_ID:+ID: $DEPLOYMENT_ID}\n\n**Action:** git revert HEAD && git push"
    
    cat > /tmp/diegesis-alert.json << EOF
{
  "content": "$ERROR_MSG"
}
EOF
    curl -s -X POST -H 'Content-Type: application/json' \
      --data-binary @/tmp/diegesis-alert.json \
      "$DISCORD_WEBHOOK_URL" >/dev/null 2>&1 || true
    rm -f /tmp/diegesis-alert.json
  fi

  exit 1
fi

echo "✅ Déploiement stable → continue..."
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# GOOGLE DRIVE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo ""
echo "📤 Synchronisation Google Drive..."

RESPONSE=$(curl -s -X POST \
  --data-urlencode "client_id=${GOOGLE_CLIENT_ID:-}" \
  --data-urlencode "client_secret=${GOOGLE_CLIENT_SECRET:-}" \
  --data-urlencode "refresh_token=${GOOGLE_REFRESH_TOKEN:-}" \
  --data-urlencode "grant_type=refresh_token" \
  https://oauth2.googleapis.com/token)

ACCESS_TOKEN=$(echo "$RESPONSE" | jq -r '.access_token // empty')

if [ -z "$ACCESS_TOKEN" ] || [ "$ACCESS_TOKEN" = "null" ]; then
  echo "❌ Token Google invalide"
  echo "   Relance: ./init_debug.sh"
else
  echo "🔓 Token OK"
  
  TOTAL=$(echo "$CHANGED_FILES" | wc -l)
  echo "📂 $TOTAL fichiers à synchroniser"
  
  while IFS= read -r FILE; do
    COUNT=$((COUNT + 1))
    
    # Skip si fichier supprimé
    [ ! -f "$FILE" ] && { 
      echo "[$COUNT/$TOTAL] ⏭️  $FILE (supprimé)"
      continue
    }
    
    # Nom du Google Doc
    REL_PATH="${FILE#src/}"
    NAME=$(echo "$REL_PATH" | sed 's|[/.]|_|g').gdoc
    
    echo "[$COUNT/$TOTAL] 📤 $FILE → $NAME"
    
    # Rechercher si existe
    SEARCH_RESP=$(curl -s --max-time 10 \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      "https://www.googleapis.com/drive/v3/files?q=name='${NAME}'+and+'${GOOGLE_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.document'&fields=files(id)")
    
    FILE_ID=$(echo "$SEARCH_RESP" | jq -r '.files[0].id // empty')
    
    # Créer si absent
    if [ -z "$FILE_ID" ] || [ "$FILE_ID" = "null" ]; then
      echo "   🆕 Création..."
      
      CREATE_RESP=$(curl -s --max-time 10 -X POST \
        -H "Authorization: Bearer $ACCESS_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{\"name\":\"${NAME}\",\"mimeType\":\"application/vnd.google-apps.document\",\"parents\":[\"${GOOGLE_FOLDER_ID}\"]}" \
        "https://www.googleapis.com/drive/v3/files?fields=id")
      
      FILE_ID=$(echo "$CREATE_RESP" | jq -r '.id // empty')
      
      if [ -z "$FILE_ID" ] || [ "$FILE_ID" = "null" ]; then
        echo "   ❌ Erreur création"
        continue
      fi
    else
      echo "   ♻️  Existe déjà (ID: ${FILE_ID:0:10}...)"
    fi
    
    # Upload/écrasement du contenu
    echo "   📤 Upload..."
    UPLOAD_RESP=$(curl -s --max-time 30 -X PATCH \
      "https://www.googleapis.com/upload/drive/v3/files/${FILE_ID}?uploadType=media" \
      -H "Authorization: Bearer $ACCESS_TOKEN" \
      -H "Content-Type: text/plain" \
      --data-binary "@$FILE")
    
    echo "   ✅ OK"
    
  done <<< "$CHANGED_FILES"
  
  echo "✅ Drive: $COUNT/$TOTAL synchronisés"
fi

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

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# DISCORD - MESSAGE MARIE
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo ""
if [ -n "${DISCORD_WEBHOOK_URL:-}" ] && [ -n "$MESSAGE_MARIE" ]; then
  echo "💬 Notification Discord..."
  
  # Message simple et sûr
  DISCORD_MSG="🚀 **diegesis v$VERSION**\n\n$MESSAGE_MARIE\n\n📊 **Statut:**\n• Vercel: $VERCEL_STATUS\n• Drive: $COUNT/$TOTAL fichiers\n• Durée: ${SECONDS}s"
  
  # Fichier temporaire pour éviter les problèmes d'échappement
  echo "{\"content\": \"$DISCORD_MSG\"}" > /tmp/discord-msg.json
  
  if curl -s -X POST \
    -H 'Content-Type: application/json' \
    --data-binary @/tmp/discord-msg.json \
    "$DISCORD_WEBHOOK_URL" >/dev/null 2>&1; then
    echo "✅ Message envoyé à Marie"
  else
    echo "⚠️ Erreur envoi Discord"
  fi
  
  rm -f /tmp/discord-msg.json
else
  [ -z "${DISCORD_WEBHOOK_URL:-}" ] && echo "ℹ️ DISCORD_WEBHOOK_URL non configuré"
  [ -z "$MESSAGE_MARIE" ] && echo "ℹ️ Pas de messageMarie dans metaversion.json"
fi

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# FIN
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo ""
echo "🎉 Déploiement terminé !"
echo "   Version: $VERSION"
echo "   Fichiers: $COUNT/$TOTAL"
echo "   Vercel: $VERCEL_STATUS"
echo "   Durée: ${SECONDS}s"