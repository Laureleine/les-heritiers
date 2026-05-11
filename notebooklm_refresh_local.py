#!/usr/bin/env python3
import sys
import os
import subprocess
import json
import time

# On force l'encodage de la sortie standard pour éviter les crashs d'affichage
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
    """Vérifie si la session est active en ignorant les erreurs d'encodage."""
    print("🔐 Vérification de la session NotebookLM...")
    try:
        # On utilise errors="replace" pour ne pas crash sur des caractères bizarres
        res = subprocess.run(["python", "-m", "notebooklm", "status"], 
                             capture_output=True, text=True, timeout=15, 
                             encoding="utf-8", errors="replace")
        
        stdout_safe = res.stdout.lower() if res.stdout else ""
        
        if res.returncode != 0 or "not logged in" in stdout_safe:
            print("⚠️ Session expirée. Reconnexion...")
            subprocess.run(["python", "-m", "notebooklm", "login"], check=True)
        else:
            print("✅ Session active.")
    except Exception as e:
        print(f"🕒 Erreur ou timeout lors du check session. Tentative de login préventif...")
        subprocess.run(["python", "-m", "notebooklm", "login"], check=True)

def main():
    if len(sys.argv) < 2: return
    args = sys.argv[1:]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    # ÉTAPE 0 : Sécurité Session
    check_session()

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
            capture_output=True, text=True, timeout=30, encoding="utf-8", errors="replace"
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
            
            time.sleep(2)

            print(f"  [{i}/{total}] ➕ Ajout : {filename}")
            # On utilise errors="replace" ici aussi pour l'ajout
            res_add = subprocess.run([
                "python", "-m", "notebooklm", "source", "add", filepath, "--notebook", notebook_id, "--type", "file"
            ], capture_output=True, text=True, timeout=45, encoding="utf-8", errors="replace")
            
            if res_add.returncode == 0:
                print(f"    ✅ Succès")
            else:
                print(f"    ❌ Erreur : {res_add.stderr.strip() if res_add.stderr else 'Inconnue'}")
                
        except subprocess.TimeoutExpired:
            print(f"    ⚠️ Timeout sur {filename}.")

if __name__ == "__main__":
    main()