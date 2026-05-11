#!/usr/bin/env python3
import sys
import os
import subprocess
import json
import time

def load_env():
    env = {}
    if not os.path.exists(".env"): return None
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def check_session():
    """Vérifie si la session est active, sinon force le login."""
    print("🔐 Vérification de la session NotebookLM...")
    try:
        # On teste le status avec un timeout court
        res = subprocess.run(["python", "-m", "notebooklm", "status"], 
                             capture_output=True, text=True, timeout=10)
        if res.returncode != 0 or "not logged in" in res.stdout.lower():
            print("⚠️ Session expirée ou invalide. Ouverture du navigateur pour reconnexion...")
            subprocess.run(["python", "-m", "notebooklm", "login"], check=True)
        else:
            print("✅ Session active.")
    except subprocess.TimeoutExpired:
        print("🕒 Le service ne répond pas. Tentative de reconnexion forcée...")
        subprocess.run(["python", "-m", "notebooklm", "login"], check=True)

def main():
    if len(sys.argv) < 2: return
    args = sys.argv[1:]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    # --- ÉTAPE 0 : Sécurité Session ---
    check_session()

    # Détection des fichiers (Dossier ou liste)
    if len(args) == 1 and os.path.isdir(args[0]):
        md_dir = args[0]
        local_filepaths = sorted([os.path.abspath(os.path.join(md_dir, f)) for f in os.listdir(md_dir) if f.endswith(".md")])
    else:
        local_filepaths = [os.path.abspath(f) for f in args if f.endswith(".md")]

    if not local_filepaths: return

    # 1. Lister les sources
    print(f"🔍 Récupération des sources existantes...")
    try:
        result = subprocess.run(
            ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
            capture_output=True, text=True, encoding="utf-8", timeout=30
        )
        sources = json.loads(result.stdout).get("sources", [])
    except:
        sources = []

    # 2. Synchronisation
    total = len(local_filepaths)
    print(f"🚀 Synchronisation de {total} fichier(s)...")

    for i, filepath in enumerate(local_filepaths, 1):
        filename = os.path.basename(filepath)
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        try:
            if existing:
                print(f"  [{i}/{total}] 🗑️  Suppression : {filename}")
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "delete", existing["id"], "--notebook", notebook_id
                ], capture_output=True, timeout=30)
            
            # Petite pause pour laisser Google traiter la suppression
            time.sleep(2)

            print(f"  [{i}/{total}] ➕ Ajout : {filename}")
            res_add = subprocess.run([
                "python", "-m", "notebooklm", "source", "add", filepath, "--notebook", notebook_id, "--type", "file"
            ], capture_output=True, text=True, timeout=45)
            
            if res_add.returncode == 0:
                print(f"    ✅ Succès")
            else:
                print(f"    ❌ Erreur : {res_add.stderr.strip()}")
                
        except subprocess.TimeoutExpired:
            print(f"    ⚠️ Timeout sur {filename}. Le serveur est peut-être saturé.")

if __name__ == "__main__":
    main()