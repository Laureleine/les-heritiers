#!/usr/bin/env bash
# heritiers.sh
set -euo pipefail

[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
source .env

# ── 1. Préparation du dossier Markdown ──────────────────────────────────────
MD_DIR="markdown"
mkdir -p "$MD_DIR"
rm -f "$MD_DIR"/*.md

echo "📝 Génération des fichiers Markdown locaux..."
# Utilisation de find -type f pour éviter de prendre des dossiers
JS_FILES=$(find src -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) | sort)

for FILE in $JS_FILES; do
    [ ! -f "$FILE" ] && continue
    REL_PATH="${FILE#src/}"
    # Remplacement des / et . par _
    NAME=$(echo "$REL_PATH" | tr '/' '_' | tr '.' '_').md
    cp "$FILE" "$MD_DIR/$NAME"
done
echo "✅ Dossier /$MD_DIR à jour."

# ── 2. Git ─────────────────────────────────────────────────────────────────
echo "💾 Git commit & push..."
git add .
git commit -m "Sync NotebookLM local files" || echo "Pas de changements git"
git push

# ── 3. Synchronisation NotebookLM ──────────────────────────────────────────
echo ""
echo "🔄 Synchronisation NotebookLM (Upload des contenus locaux)..."
if [ -f "notebooklm_refresh_local.py" ]; then
    export PYTHONUNBUFFERED=1
    # On lance le script de refresh
    python notebooklm_refresh_local.py "$MD_DIR"
else
    echo "❌ notebooklm_refresh_local.py introuvable"
fi

echo "🏁 Processus terminé !"