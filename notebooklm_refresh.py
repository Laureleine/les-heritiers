#!/usr/bin/env python3
"""
Rafraîchit ou ajoute les sources NotebookLM correspondant aux fichiers modifiés.
Version corrigée pour Windows (UTF-8) avec gestion robuste des erreurs de décodage.
"""

import sys
import json
import subprocess
import urllib.request
import urllib.parse
import os

def load_env():
    env = {}
    if not os.path.exists(".env"):
        print("❌ Erreur : Fichier .env introuvable.")
        sys.exit(1)
    with open(".env", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def get_access_token(env):
    try:
        data = urllib.parse.urlencode({
            "client_id": env["GOOGLE_CLIENT_ID"],
            "client_secret": env["GOOGLE_CLIENT_SECRET"],
            "refresh_token": env["GOOGLE_REFRESH_TOKEN"],
            "grant_type": "refresh_token"
        }).encode()
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
        with urllib.request.urlopen(req) as r:
            return json.loads(r.read())["access_token"]
    except KeyError as e:
        print(f"❌ Variable manquante dans .env : {e}")
        sys.exit(1)

def find_drive_id(token, folder_id, name):
    q = urllib.parse.quote(
        f"name='{name}' and '{folder_id}' in parents"
    )
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name,mimeType)"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    try:
        with urllib.request.urlopen(req) as r:
            files = json.loads(r.read()).get("files", [])
        return files[0]["id"] if files else None
    except Exception as e:
        print(f" ⚠️ Erreur recherche Drive ({name}): {e}")
        return None

def ensure_authenticated():
    # On force l'encodage utf-8 et on remplace les caractères problématiques
    result = subprocess.run(
        ["python", "-m", "notebooklm", "auth", "check"],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    
    stdout = (result.stdout or "").lower()
    stderr = (result.stderr or "").lower()
    
    if result.returncode != 0 or "expired" in stdout or "expired" in stderr:
        print("⚠️ Session expirée ou inexistante — login requis...")
        subprocess.run(["python", "-m", "notebooklm", "login"], encoding="utf-8", errors="replace")
        print("✅ Login OK, on reprend...")

def get_sources(notebook_id):
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "list", "--json", "--notebook", notebook_id],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    
    stdout = result.stdout or ""
    stderr = (result.stderr or "").lower()

    if result.returncode != 0:
        if "expired" in stderr or "authentication" in stderr:
            ensure_authenticated()
            return get_sources(notebook_id)
        print(f"❌ Erreur liste sources: {result.stderr}")
        sys.exit(1)
    
    try:
        return json.loads(stdout)["sources"]
    except json.JSONDecodeError:
        print("❌ Erreur de lecture du JSON de NotebookLM")
        sys.exit(1)

def refresh_source(source_id, title, notebook_id):
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "refresh", source_id, "--notebook", notebook_id],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    
    stderr = (result.stderr or "").lower()
    
    if result.returncode != 0:
        if "expired" in stderr or "authentication" in stderr:
            ensure_authenticated()
            refresh_source(source_id, title, notebook_id)
            return
        print(f" ⚠️ Refresh échoué ({title}): {result.stderr.strip()}")
    else:
        print(f" 🔄 Refreshed: {title}")

def add_source(drive_doc_id, title, notebook_id):
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "add-drive", drive_doc_id, title, "--notebook", notebook_id],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    
    stderr = (result.stderr or "").lower()
    
    if result.returncode != 0:
        if "expired" in stderr or "authentication" in stderr:
            ensure_authenticated()
            add_source(drive_doc_id, title, notebook_id)
            return
        print(f" ⚠️ Ajout échoué ({title}): {result.stderr.strip()}")
    else:
        print(f" ➕ Ajouté: {title}")

def file_to_title(filepath):
    """Convertit un chemin de fichier en titre attendu par NotebookLM."""
    # Nettoyage pour correspondre à votre logique de nommage sur Drive
    rel = filepath.replace("src/", "", 1)
    return rel.replace("/", "_").replace("\\", "_")

def main():
    files = sys.argv[1:]
    if not files:
        print("ℹ️ Aucun fichier à traiter.")
        return

    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")
    folder_id = env.get("GOOGLE_FOLDER_ID")
    
    if not notebook_id or not folder_id:
        print("❌ Variables NOTEBOOKLM_NOTEBOOK_ID ou GOOGLE_FOLDER_ID manquantes dans .env")
        sys.exit(1)

    token = get_access_token(env)
    ensure_authenticated()

    print("🔍 Récupération des sources NotebookLM...")
    sources = get_sources(notebook_id)
    source_map = {s["title"]: s["id"] for s in sources}

    for filepath in files:
        # On ne traite que les fichiers Markdown (ou JS/TS selon vos besoins)
        if not (filepath.endswith(".md") or filepath.endswith(".js") or filepath.endswith(".jsx")):
            continue

        title = file_to_title(filepath)
        source_id = source_map.get(title)

        if source_id:
            refresh_source(source_id, title, notebook_id)
        else:
            drive_id = find_drive_id(token, folder_id, title)
            if drive_id:
                add_source(drive_id, title, notebook_id)
            else:
                print(f" ⏭️ Document Drive introuvable pour : {title}")

if __name__ == "__main__":
    try:
        main()
        print("\n🏁 Fin du processus !")
    except KeyboardInterrupt:
        print("\n🛑 Interrompu par l'utilisateur.")
        sys.exit(0)