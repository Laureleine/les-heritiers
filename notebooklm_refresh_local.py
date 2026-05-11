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
    if len(sys.argv) < 2: return
    args = sys.argv[1:]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    # Détection des fichiers
    if len(args) == 1 and os.path.isdir(args[0]):
        md_dir = args[0]
        local_filepaths = sorted([os.path.abspath(os.path.join(md_dir, f)) for f in os.listdir(md_dir) if f.endswith(".md")])
    else:
        local_filepaths = [os.path.abspath(f) for f in args if f.endswith(".md")]

    if not local_filepaths: return

    # 1. Lister les sources (on met un timeout court ici aussi)
    print(f"🔍 Récupération des sources...")
    try:
        result = subprocess.run(
            ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
            capture_output=True, text=True, encoding="utf-8", timeout=20
        )
        sources = json.loads(result.stdout).get("sources", [])
    except:
        sources = []

    total = len(local_filepaths)
    print(f"🚀 Synchronisation de {total} fichier(s)...")

    for i, filepath in enumerate(local_filepaths, 1):
        filename = os.path.basename(filepath)
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        try:
            if existing:
                print(f"  [{i}/{total}] ♻️  Remplacement : {filename}")
                # On utilise DEVNULL pour ne pas bloquer sur le flux de sortie
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "delete", existing["id"], "--notebook", notebook_id
                ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=15)
            
            # Pause d'une seconde pour laisser l'API respirer
            time.sleep(1)

            print(f"  [{i}/{total}] ➕ Ajout : {filename}")
            subprocess.run([
                "python", "-m", "notebooklm", "source", "add", filepath, "--notebook", notebook_id, "--type", "file"
            ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=20)
            
        except subprocess.TimeoutExpired:
            print(f"  ⚠️ Timeout sur {filename} (passé)")
        except Exception as e:
            print(f"  ❌ Erreur : {e}")

if __name__ == "__main__":
    main()