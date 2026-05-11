#!/usr/bin/env python3
import sys
import os
import subprocess
import json
import time

def load_env():
    env = {}
    if not os.path.exists(".env"):
        return None
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def main():
    if len(sys.argv) < 2:
        print("Usage: python notebooklm_refresh_local.py <directory>")
        return

    md_dir = sys.argv[1]
    env = load_env()
    if not env:
        print("❌ Fichier .env introuvable.")
        return

    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")
    if not notebook_id:
        print("❌ NOTEBOOKLM_NOTEBOOK_ID non défini dans le .env")
        return

    # 1. Lister les sources actuelles pour éviter les doublons
    print(f"🔍 Scan du notebook {notebook_id}...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    
    try:
        data = json.loads(result.stdout)
        sources = data.get("sources", []) if isinstance(data, dict) else data
    except:
        print("⚠️ Impossible de lire les sources existantes. On continue en mode ajout.")
        sources = []

    # 2. Lister les fichiers locaux à traiter
    local_files = sorted([f for f in os.listdir(md_dir) if f.endswith(".md")])
    total = len(local_files)
    
    print(f"🚀 Traitement de {total} fichiers...")

    for i, filename in enumerate(local_files, 1):
        filepath = os.path.join(md_dir, filename)
        
        # Identification par titre (le nom du fichier .md)
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        if existing:
            # Suppression pour garantir une mise à jour propre du contenu
            print(f"  [{i}/{total}] ♻️  Maj : {filename}")
            subprocess.run(["python", "-m", "notebooklm", "source", "delete", existing["id"], "--notebook", notebook_id], capture_output=True)
        else:
            print(f"  [{i}/{total}] ➕ Add : {filename}")

        # Upload du fichier local en tant que texte
        # On force --type text car NotebookLM le traite mieux pour le code
        subprocess.run(
            ["python", "-m", "notebooklm", "source", "add", filepath, "--notebook", notebook_id, "--type", "text"],
            capture_output=True
        )

if __name__ == "__main__":
    main()