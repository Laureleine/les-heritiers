#!/usr/bin/env bash
# heritiers.sh
set -euo pipefail

[ -f .env ] || { echo "❌ .env manquant"; exit 1; }
source .env

MD_DIR="markdown"
mkdir -p "$MD_DIR"

# ── 1. Identification du Delta ──────────────────────────────────────────────
echo "🔍 Analyse des modifications Git..."

# Récupère les fichiers modifiés (M), ajoutés (A) ou renommés (R) dans src/
# On exclut les suppressions (D) car on ne peut pas copier un fichier supprimé
DELTA_FILES=$(git status --porcelain src/ | grep -E '^[MAR ]' | awk '{print $2}')

if [ -z "$DELTA_FILES" ]; then
    echo "✅ Aucun changement détecté dans src/. Travail terminé."
    exit 0
fi

TOTAL_DELTA=$(echo "$DELTA_FILES" | wc -l)
echo "📂 $TOTAL_DELTA fichier(s) modifié(s) détecté(s)."

# ── 2. Mise à jour sélective du dossier Markdown ───────────────────────────
echo "📝 Mise à jour du dossier /$MD_DIR..."

for FILE in $DELTA_FILES; do
    if [ -f "$FILE" ]; then
        REL_PATH="${FILE#src/}"
        NAME=$(echo "$REL_PATH" | tr '/' '_' | tr '.' '_').md
        cp "$FILE" "$MD_DIR/$NAME"
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
    # On ne passe PAS tout le dossier, mais seulement les fichiers modifiés
    # Pour cela, on recrée la liste des noms .md correspondants au delta
    MD_DELTA_LIST=""
    for FILE in $DELTA_FILES; do
        REL_PATH="${FILE#src/}"
        NAME=$(echo "$REL_PATH" | tr '/' '_' | tr '.' '_').md
        MD_DELTA_LIST="$MD_DELTA_LIST $MD_DIR/$NAME"
    done
    
    # On appelle le script python (il faudra une micro-ajustement pour qu'il accepte des fichiers précis)
    python notebooklm_refresh_local.py $MD_DELTA_LIST
else
    echo "❌ notebooklm_refresh_local.py introuvable"
fi

echo "🏁 Delta synchronisé !"