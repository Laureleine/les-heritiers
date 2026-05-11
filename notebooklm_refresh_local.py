#!/usr/bin/env python3
import sys
import os
import subprocess
import json

def load_env():
    env = {}
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def main():
    if len(sys.argv) < 2:
        return

    md_dir = sys.argv[1]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    # 1. Lister les sources actuelles
    print(f"🔍 Scan du notebook...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    
    try:
        data = json.loads(result.stdout)
        sources = data.get("sources", []) if isinstance(data, dict) else data
    except:
        sources = []

    # 2. Lister les fichiers locaux
    local_files = sorted([f for f in os.listdir(md_dir) if f.endswith(".md")])
    total = len(local_files)

    for i, filename in enumerate(local_files, 1):
        filepath = os.path.abspath(os.path.join(md_dir, filename))
        
        # Vérification si la source existe déjà
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        if existing:
            # On supprime pour mettre à jour
            subprocess.run(["python", "-m", "notebooklm", "source", "delete", existing["id"], "--notebook", notebook_id], capture_output=True)
            action = "♻️ Update"
        else:
            action = "➕ Add"

        # IMPORTATION DU CONTENU : 
        # On utilise explicitement le type 'file' pour que le CLI lise le contenu du fichier
        # au lieu de considérer le nom du fichier comme du texte inline.
        print(f"  [{i}/{total}] {action} : {filename}")
        subprocess.run(
            ["python", "-m", "notebooklm", "source", "add", filepath, "--notebook", notebook_id, "--type", "file"],
            capture_output=True
        )

if __name__ == "__main__":
    main()