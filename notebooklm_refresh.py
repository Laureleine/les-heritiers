#!/usr/bin/env python3
"""
Rafraîchit ou ajoute les sources NotebookLM correspondant aux fichiers modifiés.
Version finale corrigée :
- Gestion de l'encodage UTF-8 (évite UnicodeDecodeError sur Windows)
- Détection robuste des sessions expirées (via JSON ou texte brut)
- Reconnexion interactive si nécessaire
- Support des titres Drive avec extension .md
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
    """Récupère le token pour l'API Google Drive."""
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
    except Exception as e:
        print(f"❌ Erreur lors de la récupération du token Drive : {e}")
        sys.exit(1)

def find_drive_id(token, folder_id, name):
    """Cherche un fichier sur Google Drive par son nom exact."""
    q = urllib.parse.quote(f"name='{name}' and '{folder_id}' in parents and trashed=false")
    url = f"https://www.googleapis.com/drive/v3/files?q={q}&fields=files(id,name)"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    try:
        with urllib.request.urlopen(req) as r:
            files = json.loads(r.read()).get("files", [])
        return files[0]["id"] if files else None
    except Exception as e:
        print(f" ⚠️ Erreur recherche Drive ({name}): {e}")
        return None

def ensure_authenticated():
    """Vérifie si la session NotebookLM CLI est active, sinon lance le login."""
    # On utilise 'status' car c'est rapide et renvoie l'état de session
    result = subprocess.run(
        ["python", "-m", "notebooklm", "status"],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    
    output = (result.stdout or "") + (result.stderr or "")
    
    # Détection de l'expiration (via texte ou JSON d'erreur)
    if "error" in output.lower() or "expired" in output.lower() or result.returncode != 0:
        print("\n🔐 Session NotebookLM expirée ou inexistante.")
        print("🌍 Ouverture du navigateur pour reconnexion...")
        # Lancement interactif pour que l'utilisateur puisse agir
        subprocess.run(["python", "-m", "notebooklm", "login"])
        print("✅ Authentification réussie. Reprise du script...\n")

def get_sources(notebook_id):
    """Récupère la liste des sources du notebook."""
    cmd = ["python", "-m", "notebooklm", "source", "list", "--notebook", notebook_id, "--json"]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    
    stdout = result.stdout or ""
    stderr = (result.stderr or "").lower()

    if result.returncode != 0:
        # Si c'est une erreur d'auth, on réessaie après login
        if "expired" in stdout.lower() or "authentication" in stderr:
            ensure_authenticated()
            return get_sources(notebook_id)
            
        print(f"❌ Erreur critique lors de la récupération des sources :")
        print(f"STDOUT: {stdout}")
        sys.exit(1)
    
    try:
        data = json.loads(stdout)
        # Gère le cas où le CLI renvoie directement une liste ou un objet avec une clé 'sources'
        return data["sources"] if isinstance(data, dict) and "sources" in data else data
    except Exception as e:
        print(f"❌ Erreur de parsing JSON NotebookLM : {e}")
        sys.exit(1)

def refresh_source(source_id, title, notebook_id):
    """Rafraîchit une source existante."""
    print(f" 🔄 Rafraîchissement : {title}...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "refresh", source_id, "--notebook", notebook_id],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    if result.returncode != 0:
        print(f"  ⚠️ Échec du rafraîchissement : {result.stderr.strip()}")

def add_source(drive_id, title, notebook_id):
    """Ajoute un nouveau document Drive comme source."""
    print(f" ➕ Ajout d'une nouvelle source : {title}...")
    result = subprocess.run(
        ["python", "-m", "notebooklm", "source", "add-drive", drive_id, "--notebook", notebook_id],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    if result.returncode != 0:
        print(f"  ⚠️ Échec de l'ajout : {result.stderr.strip()}")
    else:
        print(f"  ✅ Source ajoutée avec succès.")

def file_to_title(filepath):
    """
    Transforme un chemin local en nom de fichier tel qu'il apparaît sur Drive.
    Ex: src/hooks/useTelegraphe.js -> hooks_useTelegraphe_js.md
    """
    rel = filepath.replace("src/", "", 1)
    # On remplace les slashs et les points par des underscores, puis on ajoute .md
    clean_name = rel.replace("/", "_").replace("\\", "_").replace(".", "_")
    return f"{clean_name}.md"

def main():
    files = sys.argv[1:]
    if not files:
        return

    env = load_env()
    notebook_id = env.get("NOTEBOOKLM_NOTEBOOK_ID")
    folder_id = env.get("GOOGLE_FOLDER_ID")

    if not notebook_id or not folder_id:
        print("❌ NOTEBOOKLM_NOTEBOOK_ID ou GOOGLE_FOLDER_ID manquant dans .env")
        sys.exit(1)

    # 1. Vérification Auth NotebookLM
    ensure_authenticated()

    # 2. Récupération Token Drive
    token = get_access_token(env)

    # 3. Récupération des sources actuelles
    print(f"🔍 Connexion au Notebook : {notebook_id}")
    sources = get_sources(notebook_id)
    
    # Création du map { "titre": "id_source" }
    source_map = {}
    for s in sources:
        # Le CLI peut utiliser 'title' ou 'name' selon les versions
        name = s.get("title") or s.get("name")
        if name and "id" in s:
            source_map[name] = s["id"]

    # 4. Traitement des fichiers
    for filepath in files:
        # On ne traite que les fichiers de code ou markdown
        if not any(filepath.endswith(ext) for ext in [".js", ".jsx", ".ts", ".tsx", ".md"]):
            continue

        title = file_to_title(filepath)
        source_id = source_map.get(title)

        if source_id:
            refresh_source(source_id, title, notebook_id)
        else:
            # Si pas dans NotebookLM, on cherche sur Drive pour l'ajouter
            drive_id = find_drive_id(token, folder_id, title)
            if drive_id:
                add_source(drive_id, title, notebook_id)
            else:
                print(f" ⏭️ Document Drive introuvable (attendu: {title})")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n🛑 Opération annulée.")
        sys.exit(0)