#!/usr/bin/env python3
import sys
import os
import subprocess
import json
import time

# Forçage UTF-8 pour Windows
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
    print("🔐 Vérification de la session NotebookLM...")
    try:
        res = subprocess.run(["python", "-m", "notebooklm", "status"], 
                             capture_output=True, text=True, timeout=30, 
                             encoding="utf-8", errors="replace")
        if res.returncode != 0 or "not logged in" in (res.stdout or "").lower():
            print("⚠️ Reconnexion nécessaire...")
            subprocess.run(["python", "-m", "notebooklm", "login"], check=True)
        else:
            print("✅ Session active.")
    except:
        subprocess.run(["python", "-m", "notebooklm", "login"], check=True)

def main():
    if len(sys.argv) < 2: return
    args = sys.argv[1:]
    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")

    check_session()

    if len(args) == 1 and os.path.isdir(args[0]):
        md_dir = args[0]
        local_filepaths = sorted([os.path.abspath(os.path.join(md_dir, f)) for f in os.listdir(md_dir) if f.endswith(".md")])
    else:
        local_filepaths = [os.path.abspath(f) for f in args if f.endswith(".md")]

    if not local_filepaths: return

    print(f"🔍 Récupération des sources...")
    try:
        result = subprocess.run(
            ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"],
            capture_output=True, text=True, timeout=60, encoding="utf-8", errors="replace"
        )
        sources = json.loads(result.stdout).get("sources", [])
    except:
        sources = []

    total = len(local_filepaths)
    print(f"🚀 Synchronisation de {total} fichier(s)...")

    for i, filepath in enumerate(local_filepaths, 1):
        filename = os.path.basename(filepath)
        existing = next((s for s in sources if s.get("title") == filename), None)
        
        # --- PHASE 1 : SUPPRESSION ---
        if existing:
            print(f"  [{i}/{total}] 🗑️  Suppression : {filename}...")
            try:
                # On augmente le timeout à 120s pour la suppression
                subprocess.run([
                    "python", "-m", "notebooklm", "source", "delete", existing["id"], "--notebook", notebook_id
                ], timeout=120)
                time.sleep(3) # Pause généreuse pour Google
            except subprocess.TimeoutExpired:
                print(f"    ⏳ Timeout suppression (on continue quand même...)")

        # --- PHASE 2 : AJOUT ---
        print(f"  [{i}/{total}] ➕ Ajout : {filename}...")
        try:
            res_add = subprocess.run([
                "python", "-m", "notebooklm", "source", "add", filepath, "--notebook", notebook_id, "--type", "file"
            ], timeout=120)
            print(f"    ✅ Terminé")
        except subprocess.TimeoutExpired:
            print(f"    ❌ Timeout critique sur l'ajout de {filename}")
        
        time.sleep(2) # Pause entre les fichiers

if __name__ == "__main__":
    main()