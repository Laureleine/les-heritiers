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
        print("Usage: python notebooklm_refresh_local.py <directory_or_files>")
        return

    args = sys.argv[1:]
    env = load_env()
    if not env:
        print("❌ Fichier .env introuvable.")
        return

    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")
    if not notebook_id:
        print("❌ NOTEBOOKLM_NOTEBOOK_ID non défini dans le .env")
        return

    # 1. Déterminer la liste des fichiers à traiter
    # Si le premier argument est un dossier, on prend tout ce qu'il contient
    if len(args) == 1 and os.path.isdir(args[0]):
        md_dir = args[0]
        local_filepaths = sorted([
            os.path.abspath(os.path.join(md_dir, f)) 
            for f in os.listdir(md_dir) if f.endswith(".md")
        ])
    else:
        # Sinon, on traite la liste de fichiers passée en arguments
        local_filepaths = [os.path.abspath(f) for f in args if f.endswith(".md")]

    if not local_filepaths:
        print("ℹ️ Aucun fichier .md à traiter.")
        return

    # 2. Lister les sources actuelles dans NotebookLM
    print(f"🔍 Récupération des sources existantes pour le notebook {notebook_id}...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    
    try:
        data = json.loads(result.stdout)
        sources = data.get("sources", []) if isinstance(data, dict) else data
    except:
        print("⚠️ Impossible de lire les sources existantes. Mode ajout forcé.")
        sources = []

    # 3. Synchronisation
    total = len(local_filepaths)
    print(f"🚀 Synchronisation de {total} fichier(s)...")

    for i, filepath in enumerate(local_filepaths, 1):
        filename = os.path.basename(filepath)
        
        # Identification par titre
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        try:
            if existing:
                # Mise à jour si la source existe déjà
                print(f"  [{i}/{total}] 🔄 Refresh : {filename}")
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "refresh", 
                    existing["id"], 
                    "--notebook", notebook_id
                ], capture_output=True, timeout=60)
            else:
                # Ajout si c'est une nouvelle source
                print(f"  [{i}/{total}] ➕ Add : {filename}")
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "add", 
                    filepath, 
                    "--notebook", notebook_id,
                    "--type", "file"
                ], capture_output=True, timeout=60)
        except subprocess.TimeoutExpired:
            print(f"  ⚠️ Timeout sur {filename}, passage au suivant.")
        except Exception as e:
            print(f"  ❌ Erreur sur {filename}: {e}")

if __name__ == "__main__":
    main()