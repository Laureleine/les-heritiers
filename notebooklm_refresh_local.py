#!/usr/bin/env python3
import sys
import os
import subprocess
import json

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
        return

    args = sys.argv[1:]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    if len(args) == 1 and os.path.isdir(args[0]):
        md_dir = args[0]
        local_filepaths = sorted([
            os.path.abspath(os.path.join(md_dir, f)) 
            for f in os.listdir(md_dir) if f.endswith(".md")
        ])
    else:
        local_filepaths = [os.path.abspath(f) for f in args if f.endswith(".md")]

    if not local_filepaths:
        return

    print(f"🔍 Récupération des sources existantes...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    
    try:
        data = json.loads(result.stdout)
        sources = data.get("sources", []) if isinstance(data, dict) else data
    except:
        sources = []

    total = len(local_filepaths)
    print(f"🚀 Synchronisation de {total} fichier(s)...")

    for i, filepath in enumerate(local_filepaths, 1):
        filename = os.path.basename(filepath)
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        try:
            if existing:
                # IMPORTANT : On supprime l'ancien pour forcer l'IA à lire le nouveau contenu
                print(f"  [{i}/{total}] ♻️  Remplacement : {filename}")
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "delete", 
                    existing["id"], 
                    "--notebook", notebook_id
                ], capture_output=True)
            else:
                print(f"  [{i}/{total}] ➕ Ajout : {filename}")

            # On ajoute le fichier (qu'il soit nouveau ou qu'on vienne de supprimer l'ancien)
            subprocess.run([
                "python", "-m", "notebooklm", "source", "add", 
                filepath, 
                "--notebook", notebook_id,
                "--type", "file"
            ], capture_output=True)
            
        except Exception as e:
            print(f"  ❌ Erreur sur {filename}: {e}")

if __name__ == "__main__":
    main()