#!/usr/bin/env bash
# heritiers.sh
set -euo pipefail

[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
source .env

# ── 1. Préparation du dossier Markdown ──────────────────────────────────────
MD_DIR="markdown"
mkdir -p "$MD_DIR"
# Nettoyage pour éviter d'envoyer des fichiers supprimés côté src
rm -f "$MD_DIR"/*.md

echo "📝 Génération des fichiers Markdown locaux..."
JS_FILES=$(find src \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) | sort)
for FILE in $JS_FILES; do
    [ ! -f "$FILE" ] && continue
    REL_PATH="${FILE#src/}"
    # Convention de nommage : components_Modale_js.md
    NAME=$(echo "$REL_PATH" | sed 's|/|_|g' | sed 's|\.|_|g').md
    cp "$FILE" "$MD_DIR/$NAME"
done
echo "✅ Dossier /markdown à jour."

# ── 2. Git & Build (Optionnel, selon votre flux) ───────────────────────────
echo "💾 Git commit & push..."
git add .
git commit -m "Sync NotebookLM local files" || echo "Pas de changements git"
git push

# ── 3. Synchronisation NotebookLM ──────────────────────────────────────────
echo ""
echo "🔄 Synchronisation NotebookLM (Direct Local -> Notebook)..."
if [ -f "notebooklm_refresh_local.py" ]; then
    export PYTHONUNBUFFERED=1
    python notebooklm_refresh_local.py "$MD_DIR"
else
    echo "❌ notebooklm_refresh_local.py introuvable"
fi

echo "🏁 Processus terminé !"