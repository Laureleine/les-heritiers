#!/usr/bin/env python3
"""
Script pour télécharger, scraper et OCRiser "Le Petit Parisien" depuis Gallica.
Prend en compte le cache local pour éviter les téléchargements inutiles.
"""

import os
import sys
import re
import json
import time
import argparse
import tempfile
import unicodedata
import difflib
from pathlib import Path
import requests
from PIL import Image

# Configuration Tesseract
try:
    import pytesseract
    HAS_TESSERACT = True
except ImportError:
    HAS_TESSERACT = False

if HAS_TESSERACT:
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    _tessdata_dir = str(Path(__file__).parent / "tessdata")
    if _tessdata_dir and os.path.isdir(_tessdata_dir):
        os.environ.setdefault("TESSDATA_PREFIX", _tessdata_dir)

# ─── DICTIONNAIRE & CORRECTIONS OCR ──────────────────────────────────────────

FRENCH_LEXICON: set[str] | None = None
ACCENT_MAP: dict[str, str] | None = None

def _load_french_lexicon() -> tuple[set[str], dict[str, str]]:
    """Retourne (ensemble de mots en ASCII, mapping ASCII -> mot accentué)."""
    # Mots courants du français pour la correction
    raw = """
    le la les un une des du de d je tu il elle nous vous ils elles ce cet cette ces
    mon ton son ma ta sa mes tes ses notre votre leur nos vos leurs
    qui que quoi dont où pourquoi comment quand si comme et ou mais donc car ni or
    dans sur avec pour par sans sous entre parmi être avoir faire dire pouvoir voir
    savoir vouloir mettre devoir venir aller prendre donner trouver parler aimer
    penser croire appeler répondre ouvrir offrir découvrir couvrir souffrir mourir
    vivre suivre servir partir sentir sortir dormir naître connaître paraître
    apparaître disparaître temps jour an année homme femme enfant monde vie grand
    petit bon mauvais beau jeune vieux nouveau tout autre même tel quel ci là en y
    au aux ce que ne pas plus moins très bien beaucoup assez trop si oui non merci
    s'il vous plaît premier deuxième troisième quatrième cinquième dix vingt trente
    quarante cinquante soixante cent mille million janvier février mars avril mai
    juin juillet août septembre octobre novembre décembre lundi mardi mercredi jeudi
    vendredi samedi dimanche paris france allemagne angleterre espagne italie russie
    autriche prusse roi reine empereur président ministre général colonel capitaine
    loi décret arrêté décision ordre autorisation interdiction guerre paix bataille
    armée marine cavalerie infanterie artillerie justice tribunal cour juge avocat
    procès peine condamnation acquittement chambre député sénat élection scrutin
    vote majorité opposition conseil municipal préfet maire adjoint fonctionnaire
    employé ouvrier chemin fer train gare locomotive wagon voyageur journal presse
    article nouvelle information dépêche rue place boulevard avenue quartier pont
    église hôpital école matin midi soir nuit aube crépuscule aurore ciel nuage
    pluie vent neige brouillard tempête orage éclair tonnerre chaud froid
    température degré soleil lune étoile amour joie peur tristesse colère haine
    bonheur malheur corps tête main pied bras jambe œil yeux bouche nez oreille
    cheveux pain vin eau lait viande poisson fruit légume sucre sel table chaise
    lit porte fenêtre mur toit maison jardin livre page chapitre ligne mot lettre
    phrase histoire art musique peinture théâtre danse chant poème roman hier
    aujourd'hui demain maintenant toujours jamais souvent parfois ici là-bas
    dedans dehors devant derrière dessus dessous même aussi encore déjà environ
    presque seulement soudain brusquement lentement rapidement doucement fort
    faible haut bas long court large étroit plein vide clair sombre ouvert fermé
    dur mou frais sec humide sale propre ancien moderne récent futur passé actuel
    français anglais allemand italien espagnol russe autrichien parlement
    gouvernement assemblée commission ministère administration service bureau
    direction secrétariat église catholique protestant juif musulman société
    association club cercle groupe parti république monarchie empire État nation
    peuple citoyen droit devoir liberté égalité fraternité justice ordre séance
    session réunion assemblée conférence congrès déclaration discours proclamation
    manifeste pétition révolte révolution émeute grève manifestation soulèvement
    enquête rapport étude analyse examen observation résultat suite conséquence
    cause origine source question problème difficulté obstacle solution changement
    modification transformation évolution accord traité convention pacte alliance
    commerce industrie agriculture banque bourse crédit transport navigation
    aviation poste télégraphe téléphone science recherche découverte invention
    progrès médecine maladie santé remède traitement hôpital éducation enseignement
    université collège lycée école religion foi croyance prière culte cérémonie
    nature campagne forêt bois champ fleuve rivière mer océan montagne colline val
    plaine terre sol animal cheval chien chat oiseau poisson vache bœuf arbre
    fleur fruit feuille branche racine couleur blanc noir rouge bleu vert jaune
    brun gris rose nombre chiffre figure forme mesure poids volume longueur
    largeur hauteur profondeur épaisseur distance surface volume capacité masse
    densité vitesse énergie force puissance résistance pression action mouvement
    repos équilibre stabilité début fin commencement conclusion suite continuation
    milieu centre bord extrémité pointe base sommet entrée sortie issue passage
    ouverture fermeture cause effet raison motif prétexte excuse vérité mensonge
    erreur faute défaut qualité mérite âge naissance vie mort enterrement deuil
    mariage divorce séparation union alliance famille parent père mère frère sœur
    fils fille ami camarade compagnon voisin maître élève étudiant professeur
    savant auteur artiste peintre sculpteur musicien poète écrivain journaliste
    lecteur spectateur auditeur témoin acteur personnage héros victime voyage
    route chemin sentier voie rue porte fenêtre mur toit plancher escalier salle
    cuisine chambre salon cave grenier meuble armoire buffet lit table chaise
    vêtement habit robe manteau chapeau chaussure argent monnaie pièce billet
    banque crédit dette prix coût valeur dépense économie revenu travail emploi
    métier profession carrière salaire traitement pension allocation subside impôt
    taxe douane contribution redevance récompense prix médaille décoration honneur
    cadeau don présent offrande aumône chance hasard occasion opportunité risque
    danger péril menace sécurité protection secours aide assistance soutien appui
    force courage audace prudence sagesse intelligence esprit raison mémoire
    attention volonté désir envie passion sentiment émotion plaisir joie bonheur
    satisfaction contentement tristesse chagrin douleur souffrance peine peur
    crainte frayeur terreur panique colère rage fureur emportement irritation
    surprise étonnement admiration respect mépris dédain haine aversion dégoût
    espoir attente confiance illusion doute incertitude hésitation perplexité
    ennui fatigue paresse négligence indifférence curiosité intérêt attention soin
    exactitude habitude coutume tradition usage pratique loi règle principe maxime
    précepte devoir obligation nécessité contrainte sujétion liberté indépendance
    autonomie affranchissement égalité parité uniformité similitude analogie
    fraternité solidarité union communauté justice équité impartialité droiture
    honnêteté vérité sincérité franchise loyauté bonne foi paix concorde harmonie
    accord entente guerre conflit lutte combat bataille querelle discorde
    désaccord division séparation rupture procès litige contestation opposition
    dispute débat discussion conversation entretien dialogue argument raison
    preuve raisonnement déduction induction conclusion conséquence suite résultat
    aboutissement définition détermination explication interprétation
    éclaircissement librairie bibliothèque collection série publication livre
    volume tome ouvrage brochure fascicule page feuille folio colonne ligne
    paragraphe titre chapitre section article alinéa clause note remarque
    observation annotation scolie préface introduction avant-propos avertissement
    prologue table matière index sommaire contenu appendice supplément addition
    annexe complément
    """.strip()

    words: set[str] = set()
    amap: dict[str, str] = {}
    for line in raw.split("\n"):
        for w in line.strip().split():
            plain = unicodedata.normalize("NFD", w.lower().strip(".,;:!?«»\"'()-")).encode("ascii", "ignore").decode("ascii")
            words.add(plain)
            if plain != w.lower():
                amap[plain] = w.lower()
    return words, amap

def get_lexicon() -> set[str]:
    global FRENCH_LEXICON, ACCENT_MAP
    if FRENCH_LEXICON is None:
        FRENCH_LEXICON, ACCENT_MAP = _load_french_lexicon()
    return FRENCH_LEXICON

def get_accents() -> dict[str, str]:
    get_lexicon()
    return ACCENT_MAP or {}

# Remplacements de motifs d'erreurs OCR typiques
OCR_SUBSTITUTIONS: list[tuple[str, str]] = [
    (r'(?<=\w)1(?=\w)', 'l'),
    (r'(?<=\w)0(?=\w)', 'o'),
    (r'(\d)l(\d)', r'\g<1>1\g<2>'),
    (r'\b18[o0]0\b', '1899'),
    (r'\b18oo\b', '1899'),
    (r'(?<=[\d,])o(?=[\d,])', '0'),
    (r'(?<=[\d])l(?=[\d])', '1'),
    (r'\bIe\b', 'le'),
    (r'\bIa\b', 'la'),
    (r'\bJes\b', 'Les'),
    (r'\bZe\b', 'Le'),
    (r'\bLè\b', 'Le'),
    (r'\bTe\b', 'les'),
    (r'\bcos\b', 'ces'),
    (r'\bavéc\b', 'avec'),
    (r'\bbe\b', 'de'),
    (r'\bsommission\b', 'commission'),
    (r'\b[ée]ommission\b', 'commission'),
    (r'\bunaniroit[ée]\b', 'unanimité'),
    (r'\bunanimiot[ée]\b', 'unanimité'),
    (r'\bcilement\b', 'difficilement'),
    (r'\bdoeument\b', 'document'),
    (r'\bvitation\b', 'invitation'),
    (r'\bletfet\b', "l'effet"),
]

def correct_line(line: str) -> str:
    """Applique les corrections regex de base sur une ligne."""
    for pattern, repl in OCR_SUBSTITUTIONS:
        line = re.sub(pattern, repl, line, flags=re.IGNORECASE)
    return line

def clean_ocr_text(text: str) -> str:
    """Nettoie le texte OCR brut, recolle les mots coupés en fin de ligne."""
    if not text:
        return ""
    
    lines = [l.strip() for l in text.split("\n") if l.strip()]
    
    # Étape 1 : recoller les césures de fin de ligne (mots coupés par un tiret)
    rejoined = []
    buf = ""
    for l in lines:
        l_clean = l.strip().strip("★|»«")
        if not l_clean:
            continue
            
        clean_tail = l_clean.rstrip(" .|»«\u2502,;:!?")
        if buf:
            rejoined.append(buf + l_clean.lstrip(" |»«\u2502.,;:!?"))
            buf = ""
        elif clean_tail.endswith("-") and not clean_tail.endswith("---"):
            buf = clean_tail[:-1].rstrip(" .|»«\u2502")
        else:
            rejoined.append(l_clean)
            
    if buf:
        rejoined.append(buf)

    # Étape 2 : Joindre les lignes qui continuent la même phrase (commence par une minuscule)
    final_lines = []
    for l in rejoined:
        # Nettoyage des caractères parasites de mise en page
        l = re.sub(r'[|»«\u2502★*\u2500-\u257F]', ' ', l)
        l = re.sub(r'[ \t]+', ' ', l).strip()
        l = re.sub(r'^[\W\d_]+', '', l)
        l = re.sub(r'[\W\d_]+$', '', l)
        l = l.strip()
        
        if not l:
            continue
            
        # Détection de continuation
        if final_lines and l[0].islower() and final_lines[-1][-1:] not in ".!?":
            final_lines[-1] += " " + l
        else:
            final_lines.append(l)

    # Étape 3 : Application des corrections orthographiques Regex
    corrected = [correct_line(l) for l in final_lines]
    
    return "\n\n".join(corrected)

# ─── ENTRÉES/SORTIES ET TÉLÉCHARGEMENT ────────────────────────────────────────

class GallicaDownloader:
    """Gère le téléchargement et le cache des fichiers Gallica."""
    
    def __init__(self, output_dir: Path):
        self.output_dir = output_dir
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        })
        
    def resolve_issue_ark(self, serial_ark: str, date_str: str) -> str:
        """Trouve l'identifiant (ARK) correspondant à une date donnée."""
        # Format de date : YYYYMMDD ou YYYY-MM-DD
        clean_date = date_str.replace("-", "")
        url = f"https://gallica.bnf.fr/ark:/12148/{serial_ark}/date{clean_date}?mode=1"
        print(f"Résolution de la date sur Gallica: {url}")
        
        resp = self.session.get(url, allow_redirects=True, timeout=30)
        resp.raise_for_status()
        
        # Recherche du pattern de l'ARK dans l'URL de redirection
        m = re.search(r'bpt6k[a-z0-9]+', resp.url)
        if m:
            ark = m.group(0)
            print(f"ARK résolu avec succès : {ark}")
            return ark
        else:
            # Exit code 2 = date absente de Gallica (pas une erreur technique)
            print(f"Date absente de Gallica : {date_str} (URL finale : {resp.url})")
            sys.exit(2)

    def fetch_page_ocr_api(self, issue_ark: str, page: int) -> str:
        """Télécharge l'OCR brut officiel BnF d'une page via l'API AJAX texteImage."""
        url = f"https://gallica.bnf.fr/services/ajax/mode/SINGLE/ark:/12148/{issue_ark}/f{page}.texteImage"
        print(f"  [API] Requête AJAX OCR page {page} : {url}")
        
        resp = self.session.get(url, timeout=30)
        resp.raise_for_status()
        
        try:
            data = resp.json()
        except Exception as e:
            print(f"  [ATTENTION] La réponse n'est pas du JSON valide, tentative de lecture brute.")
            if not ("<html>" in resp.text.lower()):
                return resp.text
            raise e
        
        # Extraction récursive robuste de la chaîne stringOCR
        def find_string_ocr(obj):
            if isinstance(obj, dict):
                if "stringOCR" in obj:
                    return obj["stringOCR"]
                for v in obj.values():
                    res = find_string_ocr(v)
                    if res:
                        return res
            elif isinstance(obj, list):
                for item in obj:
                    res = find_string_ocr(item)
                    if res:
                        return res
            return None
            
        ocr_text = find_string_ocr(data)
        if ocr_text:
            # Remplacement des balises <br/> par des sauts de ligne réels
            ocr_text = ocr_text.replace("<br/>", "\n").replace("<br />", "\n")
            # Décoder les entités HTML éventuelles (ex: &amp; -> &, &lt; -> <)
            import html
            ocr_text = html.unescape(ocr_text)
            return ocr_text
        else:
            # Fallback sur texteBrut au cas où
            fallback_url = f"https://gallica.bnf.fr/ark:/12148/{issue_ark}/f{page}.texteBrut"
            print(f"  [API] stringOCR non trouvé dans le JSON, fallback sur : {fallback_url}")
            fallback_resp = self.session.get(fallback_url, timeout=30)
            if fallback_resp.status_code == 200 and not ("<html>" in fallback_resp.text.lower()):
                return fallback_resp.text
            raise ValueError(f"Impossible de trouver le texte OCR pour la page {page} dans les réponses Gallica.")

    def fetch_page_image(self, issue_ark: str, page: int) -> bytes:
        """Télécharge l'image haute résolution d'une page."""
        url = f"https://gallica.bnf.fr/iiif/ark:/12148/{issue_ark}/f{page}/full/2400,/0/default.jpg"
        print(f"  [IIIF] Requête Image haute résolution page {page} : {url}")
        
        resp = self.session.get(url, timeout=120)
        resp.raise_for_status()
        return resp.content

    def ocr_tesseract_local(self, image_data: bytes) -> str:
        """Exécute l'OCR localement via Tesseract sur l'image fournie."""
        if not HAS_TESSERACT:
            raise RuntimeError("Tesseract-OCR n'est pas disponible sur ce système.")
            
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as temp_img:
            temp_img.write(image_data)
            temp_img_path = Path(temp_img.name)
            
        try:
            img = Image.open(temp_img_path)
            # Utilisation de la langue française
            text = pytesseract.image_to_string(img, lang="fra")
            return text
        finally:
            if temp_img_path.exists():
                os.unlink(temp_img_path)

# ─── PIPELINE PRINCIPAL ──────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description='Télécharge, scrape et OCRise "Le Petit Parisien".')
    parser.add_argument('--date', type=str, default='1899-11-26', help='Date du journal (AAAA-MM-JJ)')
    parser.add_argument('--ark', type=str, default=None, help='ARK Gallica spécifique si déjà connu (sinon résolu auto depuis la date)')
    parser.add_argument('--method', type=str, choices=['api', 'tesseract'], default='api', 
                        help='Méthode OCR : "api" (BnF officiel, rapide) ou "tesseract" (OCR local sur image)')
    parser.add_argument('--pages', type=str, default='1,2,3,4', help='Liste des pages à extraire (ex: 1,2,3,4)')
    parser.add_argument('--force', action='store_true', help='Forcer le retéléchargement (ignorer le cache)')
    
    args = parser.parse_args()
    
    # Définition des chemins
    workspace_dir = Path(__file__).parent
    output_dir = workspace_dir / "output"
    raw_dir = output_dir / "raw" / "le_petit_parisien"
    
    raw_dir.mkdir(parents=True, exist_ok=True)
    
    # Résolution de l'ARK si nécessaire
    serial_ark = "cb34419111x"  # Le Petit Parisien
    issue_ark = args.ark
    
    downloader = GallicaDownloader(output_dir)
    
    if not issue_ark:
        try:
            issue_ark = downloader.resolve_issue_ark(serial_ark, args.date)
        except Exception as e:
            print(f"Erreur de résolution de l'ARK pour la date {args.date} : {e}")
            sys.exit(1)
            
    issue_cache_dir = raw_dir / issue_ark
    issue_cache_dir.mkdir(parents=True, exist_ok=True)
    
    pages_to_process = [int(p.strip()) for p in args.pages.split(",")]
    
    print(f"\n=== DÉBUT DU TRAITEMENT : Le Petit Parisien du {args.date} ===")
    print(f"ARK Gallica : {issue_ark}")
    print(f"Méthode OCR : {args.method.upper()}")
    print(f"Pages demandées : {pages_to_process}")
    print(f"Dossier cache : {issue_cache_dir}\n")
    
    pages_content = {}
    
    for page in pages_to_process:
        print(f"--- Traitement de la Page {page} ---")
        
        # Fichiers de cache local
        txt_cache_file = issue_cache_dir / f"page{page}.txt"
        img_cache_file = issue_cache_dir / f"page{page}.jpg"
        tess_cache_file = issue_cache_dir / f"page{page}_tesseract.txt"
        
        page_text = ""
        
        if args.method == 'api':
            # Utilisation de l'API Gallica
            if txt_cache_file.exists() and not args.force:
                print(f"  [CACHE] Utilisation de l'OCR BnF en cache : {txt_cache_file.name}")
                page_text = txt_cache_file.read_text(encoding="utf-8")
            else:
                try:
                    page_text = downloader.fetch_page_ocr_api(issue_ark, page)
                    txt_cache_file.write_text(page_text, encoding="utf-8")
                    print(f"  [SAUVEGARDE] OCR BnF enregistré : {txt_cache_file.name}")
                except Exception as e:
                    print(f"  [ERREUR] Impossible de télécharger l'OCR pour la page {page} : {e}")
                    continue
        else:
            # Utilisation de Tesseract Local sur Image haute résolution
            image_data = None
            
            # Étape 1 : Obtenir l'image (depuis cache ou téléchargement)
            if img_cache_file.exists() and not args.force:
                print(f"  [CACHE] Utilisation de l'image en cache : {img_cache_file.name}")
                image_data = img_cache_file.read_bytes()
            else:
                try:
                    image_data = downloader.fetch_page_image(issue_ark, page)
                    img_cache_file.write_bytes(image_data)
                    print(f"  [SAUVEGARDE] Image haute résolution enregistrée : {img_cache_file.name}")
                except Exception as e:
                    print(f"  [ERREUR] Impossible de télécharger l'image de la page {page} : {e}")
                    continue
            
            # Étape 2 : Faire tourner l'OCR local
            if tess_cache_file.exists() and not args.force:
                print(f"  [CACHE] Utilisation de l'OCR Tesseract local en cache : {tess_cache_file.name}")
                page_text = tess_cache_file.read_text(encoding="utf-8")
            else:
                try:
                    print(f"  [OCR TESSERACT] Lancement de l'OCR local sur l'image...")
                    page_text = downloader.ocr_tesseract_local(image_data)
                    tess_cache_file.write_text(page_text, encoding="utf-8")
                    print(f"  [SAUVEGARDE] OCR Tesseract enregistré : {tess_cache_file.name}")
                except Exception as e:
                    print(f"  [ERREUR] Échec de l'OCR Tesseract local : {e}")
                    continue
                    
        pages_content[page] = page_text

    # Nettoyage et Assemblage des résultats
    if not pages_content:
        print("\n[ERREUR] Aucun contenu OCR n'a pu être récupéré.")
        sys.exit(1)
        
    print("\n--- Assemblage et Nettoyage de l'OCR Complet ---")
    
    full_raw_lines = []
    full_clean_lines = []
    
    for page in sorted(pages_content.keys()):
        raw_text = pages_content[page]
        clean_text = clean_ocr_text(raw_text)
        
        # Enregistrer la page individuelle nettoyée pour inspection
        clean_page_file = issue_cache_dir / f"page{page}_clean.txt"
        clean_page_file.write_text(clean_text, encoding="utf-8")
        print(f"Page {page} nettoyée enregistrée : {clean_page_file.name}")
        
        full_raw_lines.append(f"\n\n=======================================\nPAGE {page} (BRUTE)\n=======================================\n\n" + raw_text)
        full_clean_lines.append(f"\n\n=======================================\nPAGE {page}\n=======================================\n\n" + clean_text)

    # Écriture du fichier complet brut
    raw_complet_file = output_dir / f"le_petit_parisien_{args.date}_brut.txt"
    raw_complet_file.write_text("".join(full_raw_lines), encoding="utf-8")
    print(f"\nFichier OCR complet Brut écrit : {raw_complet_file}")

    # Écriture du fichier complet nettoyé
    clean_complet_file = output_dir / f"le_petit_parisien_{args.date}_propre.txt"
    clean_complet_file.write_text("".join(full_clean_lines), encoding="utf-8")
    print(f"Fichier OCR complet Propre écrit : {clean_complet_file}")
    
    print("\n=== TRAITEMENT TERMINÉ AVEC SUCCÈS ===")

if __name__ == '__main__':
    main()
