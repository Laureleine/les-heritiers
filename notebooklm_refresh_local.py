#!/usr/bin/env python3
import sys
import os
import subprocess
import json
import time

# Forçage UTF-8 pour Windows pour éviter les erreurs d'encodage (UnicodeDecodeError)
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

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
    """Vérifie la session et force le login si nécessaire."""
    print("🔐 Vérification de la session NotebookLM...")
    try:
        res = subprocess.run(["python", "-m", "notebooklm", "status"], 
                             capture_output=True, text=True, timeout=30, 
                             encoding="utf-8", errors="replace")
        stdout_safe = (res.stdout or "").lower()
        if res.returncode != 0 or "not logged in" in stdout_safe:
            print("⚠️ Session expirée. Reconnexion requise...")
            subprocess.run(["python", "-m", "notebooklm", "login"], check=True)
        else:
            print("✅ Session active.")
    except Exception:
        print("🕒 Timeout ou erreur status. Tentative de login...")
        subprocess.run(["python", "-m", "notebooklm", "login"], check=True)

def main():
    if len(sys.argv) < 2: return
    args = sys.argv[1:]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    # ÉTAPE 0 : Vérifier que le CLI est prêt
    check_session()

    # Détection des entrées (Dossier d'init ou liste de fichiers delta)
    if len(args) == 1 and os.path.isdir(args[0]):
        md_dir = args[0]
        local_filepaths = sorted([os.path.abspath(os.path.join(md_dir, f)) 
                                  for f in os.listdir(md_dir) if f.endswith(".md")])
    else:
        local_filepaths = [os.path.abspath(f) for f in args if f.endswith(".md")]

    if not local_filepaths: return

    # 1. Lister les sources pour trouver les IDs à supprimer
    print(f"🔍 Récupération des sources existantes...")
    try:
        result = subprocess.run(
            ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
            capture_output=True, text=True, timeout=60, encoding="utf-8", errors="replace"
        )
        sources = json.loads(result.stdout).get("sources", [])
    except Exception:
        sources = []

    # 2. Cycle de synchronisation
    total = len(local_filepaths)
    print(f"🚀 Synchronisation de {total} fichier(s)...")

    for i, filepath in enumerate(local_filepaths, 1):
        filename = os.path.basename(filepath)
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        try:
            # --- SUPPRESSION ---
            if existing:
                print(f"  [{i}/{total}] 🗑️  Suppression : {filename}...")
                # On utilise -y pour éviter la question "Delete source? [y/N]"
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "delete", 
                    existing["id"], "--notebook", notebook_id, "-y"
                ], timeout=60)
                time.sleep(2) # Pause de sécurité pour Google

            # --- AJOUT ---
            print(f"  [{i}/{total}] ➕ Ajout : {filename}...")
            res_add = subprocess.run([
                "python", "-m", "notebooklm", "source", "add", 
                filepath, "--notebook", notebook_id, "--type", "file"
            ], timeout=90)
            
            if res_add.returncode == 0:
                print(f"    ✅ Succès")
            else:
                print(f"    ❌ Échec de l'ajout")
                
        except subprocess.TimeoutExpired:
            print(f"    ⚠️ Timeout sur {filename}, passage au suivant.")
        
        time.sleep(1) # Pause entre deux fichiers

if __name__ == "__main__":
    main()