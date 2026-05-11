#!/usr/bin/env bash
# heritiers.sh
set -euo pipefail

[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
source .env

MD_DIR="markdown"
mkdir -p "$MD_DIR"

# ── 1. Identification du Delta Git ──────────────────────────────────────────
echo "🔍 Analyse des modifications Git dans src/..."

# Récupère les fichiers modifiés, ajoutés ou renommés
DELTA_FILES=$(git status --porcelain src/ | grep -E '^[MAR ]' | awk '{print $2}')

if [ -z "$DELTA_FILES" ]; then
    echo "✅ Aucun changement détecté dans src/. Travail terminé."
    exit 0
fi

TOTAL_DELTA=$(echo "$DELTA_FILES" | wc -l)
echo "📂 $TOTAL_DELTA fichier(s) modifié(s) détecté(s)."

# ── 2. Préparation des fichiers Markdown ────────────────────────────────────
echo "📝 Mise à jour du dossier /$MD_DIR..."

MD_DELTA_LIST=""
for FILE in $DELTA_FILES; do
    if [ -f "$FILE" ]; then
        REL_PATH="${FILE#src/}"
        # Format du nom : components_Auth_js.md
        NAME=$(echo "$REL_PATH" | tr '/' '_' | tr '.' '_').md
        cp "$FILE" "$MD_DIR/$NAME"
        MD_DELTA_LIST="$MD_DELTA_LIST $MD_DIR/$NAME"
        echo "  ✨ Préparé : $NAME"
    fi
done

# ── 3. Git Sync ─────────────────────────────────────────────────────────────
echo "💾 Git commit & push..."
git add .
git commit -m "Sync delta to NotebookLM: $TOTAL_DELTA files" || echo "Pas de changements git"
git push

# ── 4. Synchronisation NotebookLM ──────────────────────────────────────────
echo ""
echo "🔄 Refresh NotebookLM pour le delta..."
if [ -f "notebooklm_refresh_local.py" ]; then
    export PYTHONUNBUFFERED=1
    # On appelle uniquement le script Python avec la liste des fichiers
    python notebooklm_refresh_local.py $MD_DELTA_LIST
else
    echo "❌ notebooklm_refresh_local.py introuvable"
fi

echo "🏁 Terminé !"