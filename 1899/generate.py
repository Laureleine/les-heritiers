#!/usr/bin/env python3
"""
Génère un éphéméride romancé pour Paris, fin 1899.
  - Météo : scrapée sur historique-meteo.net (année 2009, affichée 1899)
  - Lune  : calculée avec Skyfield (année 1899 réelle)
  - Actu  : base d'événements historiques locaux
  - Sortie : fichiers Markdown mois par mois
"""

import json
import math
import re
import time
import sys
import os
import tempfile
from datetime import datetime, timedelta, timezone
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from PIL import Image
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

try:
    import pytesseract
    HAS_TESSERACT = True
except ImportError:
    HAS_TESSERACT = False

# ─── FRENCH OCR POST-PROCESSING ───────────────────────────────────────────────

import difflib
import unicodedata

FRENCH_LEXICON: set[str] | None = None
ACCENT_MAP: dict[str, str] | None = None  # ascii -> accented French word

def _load_french_lexicon() -> tuple[set[str], dict[str, str]]:
    """Return (set of ASCII words, map of ASCII -> accented word)."""
    raw = """
le la les un une des du de d je tu il elle nous vous ils elles ce cet cette ces
mon ton son ma ta sa mes tes ses notre votre leur nos vos leurs
qui que quoi dont où pourquoi comment quand si comme
et ou mais donc car ni or
dans sur avec pour par sans sous entre parmi
être avoir faire dire pouvoir voir savoir vouloir mettre devoir
venir aller prendre donner trouver parler aimer penser croire
appeler répondre ouvrir offrir découvrir couvrir souffrir
mourir vivre suivre servir partir sentir sortir dormir
naître connaître paraître apparaître disparaître
temps jour an année homme femme enfant monde vie
grand petit bon mauvais beau jeune vieux nouveau
tout autre même tel quel
ci là en y au aux
ce que ne pas plus moins très bien beaucoup assez trop
si oui non merci s'il vous plaît
premier deuxième troisième quatrième cinquième
dix vingt trente quarante cinquante soixante cent mille million
janvier février mars avril mai juin juillet août septembre octobre novembre décembre
lundi mardi mercredi jeudi vendredi samedi dimanche
paris france allemagne angleterre espagne italie russie autriche prusse
roi reine empereur empereur président ministre général colonel capitaine
loi décret arrêté décision ordre autorisation interdiction
guerre paix bataille armée marine cavalerie infanterie artillerie
justice tribunal cour juge avocat procès peine condamnation acquittement
chambre député sénat élection scrutin vote majorité opposition
conseil municipal préfet maire adjoint fonctionnaire employé ouvrier
chemin fer train gare locomotive wagon voyageur
journal presse article nouvelle information dépêche
rue place boulevard avenue quartier pont église hôpital école
matin midi soir nuit aube crépuscule aurore
ciel nuage pluie vent neige brouillard tempête orage éclair tonnerre
chaud froid température degré soleil lune étoile
amour joie peur tristesse colère haine bonheur malheur
corps tête main pied bras jambe œil yeux bouche nez oreille cheveux
pain vin eau lait viande poisson fruit légume sucre sel
table chaise lit porte fenêtre mur toit maison jardin
livre page chapitre ligne mot lettre phrase histoire
art musique peinture théâtre danse chant poème roman
hier aujourd'hui demain maintenant toujours jamais souvent parfois
ici là-bas dedans dehors devant derrière dessus dessous
même aussi encore déjà environ presque seulement
soudain brusquement lentement rapidement doucement
fort faible haut bas long court large étroit
plein vide clair sombre ouvert fermé dur mou
frais sec humide sale propre
ancien moderne récent futur passé actuel
français anglais allemand italien espagnol russe autrichien
parlement gouvernement assemblée commission ministère
administration service bureau direction secrétariat
église catholique protestant juif musulman
société association club cercle groupe parti
république monarchie empire État nation peuple citoyen
droit devoir liberté égalité fraternité justice ordre
séance session réunion assemblée conférence congrès
déclaration discours proclamation manifeste pétition
révolte révolution émeute grève manifestation soulèvement
enquête rapport étude analyse examen observation
résultat suite conséquence cause origine source
question problème difficulté obstacle solution
changement modification transformation évolution
accord traité convention pacte alliance
commerce industrie agriculture banque bourse crédit
transport navigation aviation poste télégraphe téléphone
science recherche découverte invention progrès
médecine maladie santé remède traitement hôpital
éducation enseignement université collège lycée école
religion foi croyance prière culte cérémonie
nature campagne forêt bois champ fleuve rivière mer océan
montagne colline val plaine terre sol
soleil lune étoile planète comète
matière corps élément air feu eau
animal cheval chien chat oiseau poisson vache bœuf
arbre fleur fruit feuille branche racine
couleur blanc noir rouge bleu vert jaune brun gris rose
nombre chiffre figure forme mesure poids volume
longueur largeur hauteur profondeur épaisseur distance
surface volume capacité masse densité vitesse
énergie force puissance résistance pression
action mouvement repos équilibre stabilité
début fin commencement conclusion suite continuation
milieu centre bord extrémité pointe base sommet
entrée sortie issue passage ouverture fermeture
cause effet raison motif prétexte excuse
vérité mensonge erreur faute défaut qualité mérite
âge naissance vie mort enterrement deuil
mariage divorce séparation union alliance
famille parent père mère frère sœur fils fille
ami camarade compagnon collègue voisin
maître élève étudiant professeur savant auteur
artiste peintre sculpteur musicien poète écrivain journaliste
lecteur spectateur auditeur témoin
acteur personnage héros victime témoin
voyage route chemin sentier voie rue
porte fenêtre mur toit plancher escalier
salle cuisine chambre salon cave grenier
meuble armoire buffet lit table chaise
vêtement habit robe manteau chapeau chaussure
argent monnaie pièce billet banque crédit dette
prix coût valeur dépense économie revenu
travail emploi métier profession carrière
salaire traitement pension allocation subside
impôt taxe douane contribution redevance
récompense prix médaille décoration honneur
cadeau don présent offrande aumône
chance hasard occasion opportunité risque
danger péril menace sécurité protection
secours aide assistance soutien appui
force courage audace prudence sagesse
intelligence esprit raison mémoire attention
volonté désir envie passion sentiment émotion
plaisir joie bonheur satisfaction contentement
tristesse chagrin douleur souffrance peine
peur crainte frayeur terreur panique
colère rage fureur emportement irritation
surprise étonnement admiration respect
mépris dédain haine aversion dégoût
Espoir attente confiance espoir illusion
doute incertitude hésitation perplexité
ennui fatigue paresse négligence indifférence
curiosité intérêt attention soin exactitude
habitude coutume tradition usage pratique
loi règle principe maxime précepte
devoir obligation nécessité contrainte sujétion
liberté indépendance autonomie affranchissement
égalité parité uniformité similitude analogie
fraternité solidarité union communauté
justice équité impartialité droiture honnêteté
vérité sincérité franchise loyauté bonne foi
paix concorde harmonie accord entente
guerre conflit lutte combat bataille querelle
discorde désaccord division séparation rupture
procès litige contestation opposition dispute
débat discussion conversation entretien dialogue
argument raison preuve objection réfutation
jugement opinion pensée idée conception notion
principe fondement base source origine
système méthode procédé technique procédure
règle norme critère mesure étalon modèle
exemple modèle type genre catégorie espèce
forme figure aspect apparence dehors extérieur
nature essence caractère propriété qualité attribut
état condition situation position circonstance
fait événement incident accident phénomène
chose objet matière corps substance
partie morceau fragment parcelle division
ensemble totalité généralité universalité
nombre quantité grandeur dimension mesure
ordre disposition arrangement classement série
suite succession continuité séquence chaîne
groupe masse foule multitude attroupement
espèce variété sorte genre catégorie
degré échelon niveau rang classe
moyen instrument outil machine appareil outillage
matériel équipement installation dispositif mécanisme
procédé technique méthode système procédure
opération manipulation manœuvre conduite gestion
direction administration gouvernement conduite
autorité pouvoir commandement maîtrise empire
influence ascendant prestige crédit considération
réputation renom célébrité gloire illustration
gloire honneur louange éloge admiration
blâme critique reproche censure condamnation
punition châtiment correction discipline
prix valeur mérite importance intérêt
avantage profit bénéfice utilité service
désavantage inconvénient dommage préjudice tort
perte privation manque défaut insuffisance
abondance profusion excès surabondance superflu
économie épargne réserve provision stock
production fabrication création confection construction
consommation usage emploi utilisation application
distribution répartition partage allocation assignation
échange troc commerce trafic négoce transaction
vente achat acquisition emplette fourniture
location fermage bail loyer redevance
entreprise société compagnie maison firme
association club cercle ligue union fédération
comité bureau commission conseil assemblée
réunion séance session assemblée congrès conférence
délibération discussion débat consultation assemblée
élection scrutin vote suffrage plébiscite
candidat concurrent rival adversaire compétiteur
nomination désignation choix sélection élection
fonction charge emploi poste place situation
titre grade dignité rang qualité condition
profession métier état carrière vocation
travail ouvrage besogne tâche labeur
peine fatigue effort labeur travail
repos détente loisir distraction amusement
plaisir jouissance satisfaction contentement
peine chagrin tristesse affliction douleur
bonheur félicité prospérité chance veine
malheur infortune adversité misère calamité
danger péril risque hasard aventure
prudence précaution circonspection réserve discrétion
audace hardiesse courage bravoure intrépidité
crainte peur frayeur effroi terreur
espérance attente confiance foi optimisme
désespoir abattement découragement résignation
passion amour affection tendresse attachement indulgence
amitié sympathie attrait inclination attirance
haine aversion antipathie répulsion horreur détestation
désir envie convoitise appétit passion instinct
volonté intention propos dessein projet résolution
décision arrêt jugement détermination fermeté
hésitation indécision incertitude perplexité doute
caprice fantaisie lubie extravagance bizarrerie
humeur caractère tempérament naturel disposition
patience endurance tolérance résignation constance
impatience vivacité pétulance ardeur feu
sagesse prudence raison jugement circonspection
folie démence aliénation égarement déraison
génie talent aptitude capacité don faculté
esprit intelligence raison entendement compréhension
mémoire souvenir rappel réminiscence commémoration
imagination création invention fiction fantaisie
science savoir connaissance étude érudition
instruction éducation enseignement formation apprentissage
lecture étude examen recherche investigation
observation examen analyse critique expérience
expérience essai tentative épreuve pratique
théorie doctrine système hypothèse spéculation
loi règle principe axiome postulat théorème
méthode ordre système plan procédé procédure
raison cause motif mobile prétexte excuse
argument preuve raisonnement déduction induction
conclusion conséquence suite résultat aboutissement
définition détermination explication interprétation éclaircissement
librairie bibliothèque collection série publication
livre volume tome ouvrage brochure fascicule
page feuille folio colonne ligne paragraphe
titre chapitre section article alinéa clause
note remarque observation annotation scolie
préface introduction avant-propos avertissement prologue
table matière index sommaire contenu table
appendice supplément addition annexe complément
tome volume partie section chapitre chapitre
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


def _get_lexicon() -> set[str]:
    global FRENCH_LEXICON, ACCENT_MAP
    if FRENCH_LEXICON is None:
        FRENCH_LEXICON, ACCENT_MAP = _load_french_lexicon()
    return FRENCH_LEXICON

def _get_accents() -> dict[str, str]:
    _get_lexicon()
    return ACCENT_MAP or {}


# Common OCR error patterns for French (applied in order, word-level)
OCR_SUBSTITUTIONS: list[tuple[str, str]] = [
    # Number-to-letter fixes
    (r'(?<=\w)1(?=\w)', 'l'),        # 1 → l (intraword)
    (r'(?<=\w)0(?=\w)', 'o'),        # 0 → o
    # Restore numbers (digit sequences corrupted by l→1 reversal)
    (r'(\d)l(\d)', r'\g<1>1\g<2>'),
    # Broken hyphenation at line end
    (r'\b\w{1,3}-\s*$', ''),
    # Specific recurring errors in this newspaper corpus
    (r'\bdécoinbre\b', 'décembre'),
    (r'\bdecoinbre\b', 'décembre'),
    (r'\bEtecteurs?\b', 'Électeurs'),
    (r'\bconsoits?\b', 'conseils'),
    (r'\bélait\b', 'était'),
    (r'\bminitres?\b', 'ministre'),
    (r'\bocmpercor\b', 'empereur'),
    (r'\b18[o0]0\b', '1899'),
    (r'\b18oo\b', '1899'),
    (r'\bVINGT-QUATRI[E]ME\b', 'VINGT-QUATRIÈME'),
    (r'\bD[E]PARTEMENTS\b', 'DÉPARTEMENTS'),
    # Recurring OCR errors observed in Le Petit Parisien / L'Aurore
    (r'\bsommission\b', 'commission'),
    (r'\b[ée]ommission\b', 'commission'),
    (r'\bunaniroit[ée]\b', 'unanimité'),
    (r'\bunanimiot[ée]\b', 'unanimité'),
    (r'\bJes\b', 'Les'),
    (r'\bcilement\b', 'difficilement'),
    (r'\bmodiff\b', 'modificatifs'),
    # Number patterns: o→0 in numeric contexts (1,5o0,0o0 → 1,500,000)
    (r'(?<=[\d,])o(?=[\d,])', '0'),
    (r'(?<=[\d])l(?=[\d])', '1'),  # l→1 within digits
    # Specific word-level fixes
    (r'\bIa\b', 'la'),
    (r'\bcos\b', 'ces'),
    (r'\bavéc\b', 'avec'),
    (r'\bdoeument\b', 'document'),
    (r'\bvitation\b', 'invitation'),
    (r'\bo[ô]lés?\b', 'côtés'),
    (r'\bZe\b', 'Le'),
    (r'\bLè\b', 'Le'),
    (r'\bTe\b', 'les'),
    (r'\bletfet\b', "l'effet"),
    (r'\bTarn-et-Garonn\b', 'Tarn-et-Garonne'),
    (r'\bSeine-et-Oisé\b', 'Seine-et-Oise'),
    (r'\bHauteSavoie\b', 'Haute-Savoie'),
    (r'\bFivist[èe]re\b', 'Finistère'),
    (r'\bGeLoire\b', 'la Loire'),
    (r"\bl'Yonne e\b", "l'Yonne et"),
]


def ocr_correct_word(word: str) -> str:
    """Correct a single word using the French lexicon and common OCR patterns."""
    if not word:
        return word
    lower = word.lower().strip(".,;:!?«»\"'()-")
    if not lower:
        return word

    plain = unicodedata.normalize("NFD", lower).encode("ascii", "ignore").decode("ascii")
    lexicon = _get_lexicon()
    accents = _get_accents()

    def _restore(word: str, candidate: str) -> str:
        """Re‑apply original casing and restore accents from the map."""
        accented = accents.get(candidate, candidate)
        if word[0].isupper():
            return accented.capitalize()
        return accented

    # Try direct lexicon match (ascii-folded)
    if plain in lexicon:
        return word

    # Try substitution patterns
    for pattern, repl in OCR_SUBSTITUTIONS:
        candidate = re.sub(pattern, repl, plain)
        if candidate != plain and candidate in lexicon:
            return _restore(word, candidate)

    # Try difflib closest match (more permissive for OCR noise)
    close = difflib.get_close_matches(plain, lexicon, n=1, cutoff=0.7)
    if close:
        return _restore(word, close[0])

    return word


def ocr_correct_line(line: str) -> str:
    """Post-process an OCR line: apply safe regex corrections only."""
    for pattern, repl in OCR_SUBSTITUTIONS:
        line = re.sub(pattern, repl, line, flags=re.IGNORECASE)
    return line

if HAS_TESSERACT:
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    _tessdata_dir = str(Path(__file__).parent / "tessdata")
    if _tessdata_dir and os.path.isdir(_tessdata_dir):
        os.environ.setdefault("TESSDATA_PREFIX", _tessdata_dir)

from skyfield.api import load as sky_load

# ─── CONFIG ───────────────────────────────────────────────────────────────────

MONTHS_FR = {
    1: "janvier", 2: "février", 3: "mars", 4: "avril",
    5: "mai", 6: "juin", 7: "juillet", 8: "août",
    9: "septembre", 10: "octobre", 11: "novembre", 12: "décembre",
}

WEATHER_DESC = {
    "couvert":                     "le ciel est resté couvert, uniforme et bas",
    "nuageux":                     "les nuages dominaient le ciel parisien",
    "soleil et partiellement nuageux": "le soleil a joué avec les nuages tout au long de la journée",
    "ciel dégagé, pleinement ensoleillé": "le ciel était d'un bleu éclatant, sans un nuage",
    "ciel dégagé":                 "le ciel est resté parfaitement dégagé",
    "pluie modérée en continue":   "la pluie est tombée sans discontinuer, modérée mais obstinée",
    "faible pluie en continue":    "une pluie fine et continue a habillé la ville de gris",
    "pluie légère et soleil":      "le soleil perçait entre des averses légères et brèves",
    "bruine légère":               "une bruine légère flottait dans l'air, sans vraiment tomber",
    "bruine légère partielle":     "la matinée a commencé sous une bruine légère, avant de s'éclaircir",
    "averses de pluie légère":     "des averses légères et brèves ont ponctué la journée",
    "orage":                       "le tonnerre a grondé sur Paris",
    "brouillard":                  "un épais brouillard a enveloppé la capitale",
}

EVOLUTION_MAP = {
    "couvert":                     ("couvert et gris", "le ciel est resté obstinément couvert", "la nuit est tombée sur un ciel toujours voilé"),
    "nuageux":                     ("les nuages dominaient dès l'aube", "l'après-midi est restée sous les nuages", "le soir a vu quelques éclaircies timides"),
    "soleil et partiellement nuageux": ("le matin alternait éclaircies et passages nuageux", "l'après-midi a offert de belles plages de soleil", "la soirée s'est achevée dans un ciel partagé"),
    "ciel dégagé, pleinement ensoleillé": ("le soleil brillait dès les premières heures", "l'après-midi a été radieuse", "le soir est resté clair et lumineux"),
    "ciel dégagé":                 ("le ciel était limpide au réveil", "la journée fut d'un calme ensoleillé", "la soirée est restée douce et dégagée"),
    "pluie modérée en continue":   ("la pluie tombait déjà au petit matin", "elle n'a cessé de l'après-midi", "le soir, la pluie persistait, tenace"),
    "faible pluie en continue":    ("une pluie fine tombait dès l'aube", "elle s'est poursuivie tout l'après-midi", "la soirée est restée sous la pluie légère"),
    "pluie légère et soleil":      ("le matin hésitait entre averses et éclaircies", "l'après-midi a alterné soleil timide et petites pluies", "le soir est tombé sur une accalmie"),
    "bruine légère":               ("la matinée était brumeuse et humide", "l'après-midi n'a pas vraiment dissipé la grisaille", "le soir, l'air restait chargé d'humidité"),
    "bruine légère partielle":     ("la bruine s'est atténuée en cours de matinée", "l'après-midi était plus clémente", "le soir est revenu au sec"),
    "averses de pluie légère":     ("des averses brèves ont marqué le début de journée", "l'après-midi a connu des passages pluvieux espacés", "la soirée s'est calmée"),
    "orage":                       ("le ciel s'est chargé dès le matin", "l'après-midi a éclaté en violents orages", "le soir, le calme est revenu lentement"),
    "brouillard":                  ("un brouillard épais noyait la ville au réveil", "il s'est dissipé lentement dans l'après-midi", "le soir est revenu, enveloppant tout de son voile"),
}

WIND_ADJECTIVES = {
    "calme":       "à peine sensible",
    "faible":      "léger",
    "modéré":      "modéré, soulevant les feuilles mortes",
    "assez fort":  "soutenu, fouettant le visage",
    "fort":        "violent, faisant claquer les enseignes",
    "très fort":   "tempétueux, secouant les arbres des boulevards",
}

WIND_THRESHOLDS = [(5, "calme"), (15, "faible"), (25, "modéré"), (35, "assez fort"), (50, "fort")]

PRECIP_ADJECTIVES = {
    "fine":       ("fine", "imperceptible"),
    "légère":     ("légère", "discrete"),
    "modérée":    ("modérée", "régulière"),
    "forte":      ("forte", "abondante"),
    "très forte": ("très forte", "diluvienne"),
}

PRECIP_THRESHOLDS = [(1, "fine"), (5, "légère"), (15, "modérée"), (30, "forte")]

# ─── GALLICA SCRAPER ──────────────────────────────────────────────────────────

class GallicaScraper:
    SERIALS = {
        "Le Petit Parisien": "cb34419111x",
        "L'Aurore":         "cb32706846t",
    }

    def __init__(self, delay=1.5, raw_dir=None):
        self.delay = delay
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"})
        from requests.adapters import HTTPAdapter
        from urllib3.util.retry import Retry
        retry_strategy = Retry(total=3, backoff_factor=3, status_forcelist=[500, 502, 503, 504])
        adapter = HTTPAdapter(max_retries=retry_strategy)
        self.session.mount("https://", adapter)
        self.session.mount("http://", adapter)
        if raw_dir is None:
            raw_dir = Path(__file__).parent / "output" / "raw"
        self.raw_dir = Path(raw_dir)
        self.raw_dir.mkdir(parents=True, exist_ok=True)

    def _date_url(self, serial_ark, year, month, day):
        return f"https://gallica.bnf.fr/ark:/12148/{serial_ark}/date{year}{month:02d}{day:02d}?mode=1"

    def _resolve_issue_ark(self, serial_ark, year, month, day):
        url = self._date_url(serial_ark, year, month, day)
        resp = self.session.get(url, allow_redirects=True, timeout=30)
        resp.raise_for_status()
        m = re.search(r'bpt6k[a-z0-9]+', resp.url)
        return m.group(0) if m else None

    def _fetch_ocr(self, issue_ark):
        url = f"https://gallica.bnf.fr/services/ajax/mode/SINGLE/ark:/12148/{issue_ark}/f1.texteImage"
        resp = self.session.get(url, timeout=30)
        resp.raise_for_status()
        return resp.json()

    def _extract_date(self, data):
        try:
            return data["fragment"]["contenu"]["IssuePaginationFragment"]["currentPage"]["contenu"]
        except (KeyError, TypeError):
            return None

    def _extract_ocr_text(self, data):
        try:
            return data["fragment"]["contenu"]["Visualizer"]["affichage"]["contenu"]["renderModel"]["contenu"]["currentPage"]["contenu"][0]["options"][0]["data"]["stringOCR"]
        except (KeyError, TypeError, IndexError):
            return None

    def _extract_previous_next(self, data):
        try:
            pag = data["fragment"]["contenu"]["IssuePaginationFragment"]
            prev_url = pag.get("previousPage", {}).get("url", "")
            next_url = pag.get("nextPage", {}).get("url", "")
            prev_ark = re.search(r'bpt6k[a-z0-9]+', prev_url).group(0) if prev_url else None
            next_ark = re.search(r'bpt6k[a-z0-9]+', next_url).group(0) if next_url else None
            return prev_ark, next_ark
        except (KeyError, TypeError, AttributeError):
            return None, None

    def _raw_path(self, newspaper, issue_ark, kind):
        safe = newspaper.replace(" ", "_").replace("'", "_").lower()
        d = self.raw_dir / safe / issue_ark
        d.mkdir(parents=True, exist_ok=True)
        return d / kind

    def _fetch_image(self, issue_ark, page=1, newspaper=""):
        cache_path = self._raw_path(newspaper, issue_ark, f"page{page}.jpg") if newspaper else None
        if cache_path and cache_path.exists():
            print(f"      [cache] image {cache_path.name}")
            return cache_path.read_bytes()
        url = f"https://gallica.bnf.fr/iiif/ark:/12148/{issue_ark}/f{page}/full/2400,/0/default.jpg"
        for attempt in range(3):
            try:
                resp = self.session.get(url, timeout=120)
                if resp.status_code == 200 and resp.headers.get("Content-Type", "").startswith("image/"):
                    data = resp.content
                    if cache_path:
                        cache_path.write_bytes(data)
                        print(f"      [save] image -> {cache_path}")
                    return data
                if attempt < 2:
                    time.sleep(3 * (attempt + 1))
            except requests.RequestException:
                if attempt < 2:
                    time.sleep(3 * (attempt + 1))
        return None

    def _fetch_ocr(self, issue_ark, newspaper=""):
        cache_path = self._raw_path(newspaper, issue_ark, "ocr.json") if newspaper else None
        if cache_path and cache_path.exists():
            print(f"      [cache] OCR JSON {cache_path.name}")
            return json.loads(cache_path.read_bytes())
        url = f"https://gallica.bnf.fr/services/ajax/mode/SINGLE/ark:/12148/{issue_ark}/f1.texteImage"
        resp = self.session.get(url, timeout=30)
        resp.raise_for_status()
        data = resp.json()
        if cache_path:
            cache_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"      [save] OCR JSON -> {cache_path}")
        return data

    def _ocr_tesseract(self, image_data):
        if not HAS_TESSERACT:
            return None
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as f:
            f.write(image_data)
            img_path = f.name
        try:
            img = Image.open(img_path)

            # Get per-word data with bounding boxes
            data = pytesseract.image_to_data(
                img, lang="fra",
                config="--oem 1 --psm 3",
                output_type=pytesseract.Output.DICT,
            )

            # Group words by block_num
            blocks = {}
            for i in range(len(data["text"])):
                text = data["text"][i].strip()
                if not text:
                    continue
                block = data["block_num"][i]
                if block not in blocks:
                    blocks[block] = {
                        "x": data["left"][i],
                        "y": data["top"][i],
                        "lines": [],
                    }
                blocks[block]["lines"].append({
                    "par": data["par_num"][i],
                    "line": data["line_num"][i],
                    "text": text,
                    "x": data["left"][i],
                    "y": data["top"][i],
                })

            if not blocks:
                return ""

            # Cluster blocks by x-position (column detection)
            block_xs = [(bid, info["x"]) for bid, info in blocks.items()]
            block_xs.sort(key=lambda bx: bx[1])

            # Simple clustering: gap > 80px = new column
            columns_blocks = []
            current_col = [block_xs[0][0]]
            for i in range(1, len(block_xs)):
                gap = block_xs[i][1] - block_xs[i-1][1]
                if gap > 80:
                    columns_blocks.append(current_col)
                    current_col = []
                current_col.append(block_xs[i][0])
            if current_col:
                columns_blocks.append(current_col)

            # Reconstruct text: for each column (left to right),
            # output lines top to bottom
            out_lines = []
            for col_bids in columns_blocks:
                # Gather all lines in this column, sorted top to bottom
                col_lines = []
                for bid in col_bids:
                    info = blocks[bid]
                    # Group by par+line within block
                    line_groups = {}
                    for w in info["lines"]:
                        key = (w["par"], w["line"])
                        if key not in line_groups:
                            line_groups[key] = []
                        line_groups[key].append(w)

                    for key in sorted(line_groups.keys()):
                        words = line_groups[key]
                        words.sort(key=lambda w: w["x"])
                        text = " ".join(w["text"] for w in words)
                        col_lines.append((info["y"], text))

                col_lines.sort(key=lambda cl: cl[0])
                for _, text in col_lines:
                    out_lines.append(text)

            return "\n".join(out_lines)

        finally:
            try:
                os.unlink(img_path)
            except OSError:
                pass

    def extract_all_lines(self, ocr_text):
        """Return all non-garbage lines in reading order, classified by type."""
        if not ocr_text:
            return {"ordered": [], "headlines": [], "articles": [], "snippets": []}
        lines = [l.strip() for l in ocr_text.split("\n") if l.strip()]

        # Rejoin hyphenated line breaks first, then correct
        joined = []
        buf = ""
        for l in lines:
            if buf:
                buf += l
                joined.append(buf)
                buf = ""
            elif l.endswith("-") and not l.endswith("--"):
                buf = l[:-1]
            else:
                joined.append(l)
        lines = [ocr_correct_line(l) for l in joined if len(l) >= 3]

        ordered = []
        headlines = []
        articles = []
        snippets = []

        for line in lines:
            clean = re.sub(r'[^\w\s\-\'\u00C0-\u00FF]', '', line).strip()
            if not clean or len(clean) < 15:
                continue
            if METADATA_PATTERNS.search(clean):
                continue
            alpha_ratio = sum(1 for c in clean if c.isalpha()) / max(len(clean), 1)
            if alpha_ratio < 0.4:
                continue

            upper_count = sum(1 for c in clean if c.isalpha() and c.isupper())
            total_alpha = sum(1 for c in clean if c.isalpha())
            is_allcaps = total_alpha > 5 and upper_count == total_alpha
            is_short = len(clean) < 80
            has_upper = upper_count > 0

            item = line[:400]
            if is_allcaps and is_short:
                ordered.append({"type": "headline", "text": item})
                headlines.append(item)
            elif is_short and has_upper:
                ordered.append({"type": "article", "text": item})
                articles.append(item)
            else:
                ordered.append({"type": "snippet", "text": item})
                snippets.append(item)

        # Deduplicate
        def dedup(items):
            seen = set()
            result = []
            for item in items:
                key = re.sub(r'\s+', ' ', item[:100]).lower()[:100]
                if key in seen:
                    continue
                seen.add(key)
                result.append(item)
            return result

        seen = set()
        clean_ordered = []
        for item in ordered:
            key = re.sub(r'\s+', ' ', item["text"][:100]).lower()[:100]
            if key in seen:
                continue
            seen.add(key)
            clean_ordered.append(item)

        # Keep all headlines + up to 50 items after each headline
        # to capture full articles (especially feuilletons)
        max_per_hl = 50
        truncated = []
        pre_pool = []
        current_hl_items = []
        for item in clean_ordered:
            if item["type"] == "headline":
                if not truncated:
                    truncated.extend(pre_pool[:25])
                elif current_hl_items:
                    truncated.extend(current_hl_items[:max_per_hl])
                current_hl_items = []
                truncated.append(item)
            else:
                if not truncated:
                    pre_pool.append(item)
                else:
                    current_hl_items.append(item)
        if current_hl_items:
            truncated.extend(current_hl_items[:max_per_hl])

        return {
            "ordered": truncated,
            "headlines": dedup(headlines)[:20],
            "articles": dedup(articles)[:20],
            "snippets": dedup(snippets)[:20],
        }

    def fetch_newspaper(self, name, year, month, day):
        serial_ark = self.SERIALS.get(name)
        if not serial_ark:
            return None
        time.sleep(self.delay)
        try:
            issue_ark = self._resolve_issue_ark(serial_ark, year, month, day)
            if not issue_ark:
                return None

            date_text = None
            ocr_text = None

            # Try Tesseract first (better quality)
            try:
                img_data = self._fetch_image(issue_ark, newspaper=name)
                if img_data:
                    ocr_text = self._ocr_tesseract(img_data)
            except Exception:
                pass

            # Fallback to Gallica OCR
            if not ocr_text:
                data = self._fetch_ocr(issue_ark, newspaper=name)
                date_text = self._extract_date(data)
                ocr_text = self._extract_ocr_text(data)
            else:
                # Extract date from OCR text itself
                m = re.search(r'(\d{1,2})\s+(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s+(\d{4})', ocr_text, re.IGNORECASE)
                if m:
                    date_text = f"{m.group(1)} {m.group(2)} {m.group(3)}"

            all_lines = self.extract_all_lines(ocr_text)

            # Get date + prev/next from Gallica API (already cached from the call above if fallback ran)
            prev_ark, next_ark = None, None
            try:
                data = self._fetch_ocr(issue_ark, newspaper=name)
                date_text = date_text or self._extract_date(data)
                prev_ark, next_ark = self._extract_previous_next(data)
            except Exception:
                pass

            return {
                "newspaper": name,
                "issue_ark": issue_ark,
                "date": date_text,
                "lines": all_lines,
                "ocr_length": len(ocr_text) if ocr_text else 0,
                "ocr_source": "tesseract" if ocr_text and HAS_TESSERACT else "gallica",
                "prev_ark": prev_ark,
                "next_ark": next_ark,
            }
        except Exception as e:
            return {"newspaper": name, "error": str(e)}


# ─── EVENT LOADING ────────────────────────────────────────────────────────────

def load_events():
    events_path = Path(__file__).parent / "events_1899_nov_dec.py"
    ns = {}
    exec(events_path.read_text(encoding="utf-8"), ns)
    return ns["events"]


METADATA_PATTERNS = re.compile(
    r'(abonne|tirage|directeur|rédacteur|gérant|prix|numéro|annonce|rédaction|'
    r'administration|bureaux|boulevard|rue|place|impression|typographie|'
    r'cette|feuille|journal|petit parisien|l\'aurore|dépôt|chemin de fer|'
    r'année|année|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|'
    r'janvier|février|mars|avril|mai|juin|juillet|août|septembre|'
    r'octobre|novembre|décembre|lettre|mandat|adresser|'
    r'grand roman inédit|vingt.?quatrième|vingt.?quatrieme|'
    r'n[º°]\s*\d{3,4}|troisième année)',
    re.IGNORECASE,
)


def looks_like_garbage(text):
    text = text.strip()
    if len(text) < 20:
        return True
    if METADATA_PATTERNS.search(text):
        return True
    alpha_ratio = sum(1 for c in text if c.isalpha()) / max(len(text), 1)
    if alpha_ratio < 0.4:
        return True
    return False


def clean_text(text):
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', text)
    text = re.sub(r'[^\w\s\-\'.,;:!?À-ÿ«»°]', '', text)
    return text.strip()


_CACHE_DIR = Path(__file__).parent / "output"


def _cache_path(year, month):
    return _CACHE_DIR / f"gallica_{year}_{month:02d}.json"


def scrape_events(year, month, events_static, days=None, force_refresh=False, detail_level="normal"):
    cache_file = _cache_path(year, month)

    if not force_refresh and cache_file.exists():
        print(f"    Cache trouve : {cache_file.name}")
        data = json.loads(cache_file.read_text(encoding="utf-8"))
        # Backward compat: old cache without version → convert
        for key, val in data.items():
            if val.get("_version") != 2:
                val.setdefault("per_np", {})
                val.setdefault("paris_all", {"headlines": [], "articles": [], "snippets": []})
                # Rebuild paris_all from paris string if needed
                if not val["paris_all"]["headlines"] and val.get("paris"):
                    parts = [p.strip() for p in val["paris"].split("|")]
                    val["paris_all"]["headlines"] = [p for p in parts if p]
        return data

    scraper = GallicaScraper(delay=1.5)
    newspapers = ["Le Petit Parisien", "L'Aurore"]
    if days is None:
        days = list(range(1, 32))
    results = {}
    for day in days:
        try:
            dt = datetime(year, month, day)
        except ValueError:
            break
        key = f"{year}-{month:02d}-{day:02d}"
        base = events_static.get((year, month, day), {})
        per_np = {}
        all_headlines = []
        all_articles = []
        all_snippets = []
        for np_name in newspapers:
            info = scraper.fetch_newspaper(np_name, year, month, day)
            if not info or info.get("error"):
                continue
            lines = info.get("lines", {})
            h = [clean_text(l) for l in lines.get("headlines", []) if not looks_like_garbage(clean_text(l))]
            a = [clean_text(l) for l in lines.get("articles", []) if not looks_like_garbage(clean_text(l))]
            s = [clean_text(l) for l in lines.get("snippets", []) if not looks_like_garbage(clean_text(l))]
            ordered = []
            for item in lines.get("ordered", []):
                t = item["type"]
                txt = clean_text(item["text"])
                if txt and not looks_like_garbage(txt):
                    ordered.append({"type": t, "text": txt})
            per_np[np_name] = {
                "headlines": [f"[{np_name}] {x}" for x in h],
                "articles": [f"[{np_name}] {x}" for x in a],
                "snippets": [f"[{np_name}] {x}" for x in s],
                "ordered": [{"type": x["type"], "text": f"[{np_name}] {x['text']}"} for x in ordered],
                "source": info.get("ocr_source", "?"),
            }
            all_headlines.extend(per_np[np_name]["headlines"])
            all_articles.extend(per_np[np_name]["articles"])
            all_snippets.extend(per_np[np_name]["snippets"])

        # Fallback
        if not all_headlines and not all_articles and not all_snippets:
            for np_name in newspapers:
                info = scraper.fetch_newspaper(np_name, year, month, day)
                if not info or info.get("error"):
                    continue
                lines = info.get("lines", {})
                for cat in ["headlines", "articles", "snippets"]:
                    for l in lines.get(cat, []):
                        c = clean_text(l)
                        if c:
                            all_snippets.append(f"[{np_name}] {c}")

        results[key] = {
            "_version": 2,
            "per_np": per_np,
            "paris": " | ".join(all_headlines[:3]) if all_headlines else
                     " | ".join(all_articles[:3]) if all_articles else
                     base.get("paris", "La vie parisienne suit son cours habituel."),
            "paris_all": {
                "headlines": all_headlines,
                "articles": all_articles,
                "snippets": all_snippets,
            },
            "france": base.get("france", "Aucun événement politique majeur connu."),
            "monde": base.get("monde", "Aucun événement mondial notable."),
        }
        print(f"    Jour {day:>2}/{month:>02}: {len(all_headlines)} titres, {len(all_articles)} articles, {len(all_snippets)} extraits")

    cache_file.parent.mkdir(exist_ok=True)
    cache_file.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"    Cache ecrit : {cache_file.name}")
    return results

# ─── MOON PHASE ───────────────────────────────────────────────────────────────

_sky_loaded = False
_sky_eph = None
_sky_ts = None
_sky_earth = None
_sky_sun = None
_sky_moon = None

def _ensure_sky():
    global _sky_loaded, _sky_eph, _sky_ts, _sky_earth, _sky_sun, _sky_moon
    if not _sky_loaded:
        _sky_ts = sky_load.timescale()
        _sky_eph = sky_load(str(Path(__file__).parent / "de421.bsp"))
        _sky_earth = _sky_eph["earth"]
        _sky_sun = _sky_eph["sun"]
        _sky_moon = _sky_eph["moon"]
        _sky_loaded = True

def calc_moon(year, month, day):
    _ensure_sky()
    dt = datetime(year, month, day, 12, 0, 0, tzinfo=timezone.utc)
    t = _sky_ts.from_datetime(dt)

    sun_pos = _sky_earth.at(t).observe(_sky_sun).apparent().ecliptic_latlon()
    moon_pos = _sky_earth.at(t).observe(_sky_moon).apparent().ecliptic_latlon()

    elong = (moon_pos[1].radians - sun_pos[1].radians) % (2 * math.pi)
    illuminated = (1 - math.cos(elong)) / 2
    rising = elong < math.pi  # true = between new and full

    return illuminated, rising, elong

MOON_META = {
    "Nouvelle Lune": [
        "La lune etait absente du ciel, invisible, comme si la nuit s'etait refermee sur elle-meme.",
        "Aucun eclat lunaire ne venait troubler l'obscurite ; la lune avait deserte le ciel.",
    ],
    "Premier Croissant": [
        "Un mince croissant de lune argente flottait dans le ciel, tel un sourcil pose sur la nuit.",
        "Un croissant de lune, fin comme une lame, eclairant timidement les toits de Paris.",
    ],
    "Premier Quartier": [
        "La lune montrait son premier quartier, suspendue dans le ciel comme une moitie de piece d'argent.",
        "Un demi-disque lunaire eclairait la cite, partageant le ciel entre lumiere et tenebres.",
    ],
    "Gibbeuse croissante": [
        "La lune, presque pleine, gonflait sa lumiere au-dessus de Paris, comme une voile prete a prendre le vent.",
        "Gibbeuse et lumineuse, la lune approchait de sa plenitude, inondant la ville d'une clarte laiteuse.",
    ],
    "Pleine Lune": [
        "La pleine lune regnait sur Paris, ronde et souveraine, versant sa lumiere froide sur les pierres de la ville.",
        "Un disque parfait eclairait la capitale : la lune etait pleine, genereuse, presque theatrale.",
    ],
    "Gibbeuse decroissante": [
        "La lune, deja entamee, perdait de sa superbe, mais eclairait encore les quais de sa lumiere declinante.",
        "Gibbeuse mais decroissante, la lune semblait se retirer lentement, emportant un peu de clarte.",
    ],
    "Dernier Quartier": [
        "La lune en dernier quartier montrait un visage a demi ronge par l'ombre, melancolique au-dessus de Paris.",
        "Une demi-lune pale et declinante veillait sur la ville, comme une bougie qui s'eteint.",
    ],
    "Dernier Croissant": [
        "Un fin croissant decroissant flottait a l'aube, ultime eclat avant le silence lunaire.",
        "La lune n'etait plus qu'un mince sourire argente, prete a disparaitre dans la lumiere du jour.",
    ],
}

def get_moon_phase_name(elongation):
    deg = elongation * 180 / math.pi
    if deg < 15 or deg >= 345:
        return "Nouvelle Lune"
    if deg < 82:
        return "Premier Croissant"
    if deg < 105:
        return "Premier Quartier"
    if deg < 165:
        return "Gibbeuse croissante"
    if deg < 195:
        return "Pleine Lune"
    if deg < 262:
        return "Gibbeuse decroissante"
    if deg < 288:
        return "Dernier Quartier"
    return "Dernier Croissant"

def get_moon_line(year, month, day):
    illuminated, rising, elong = calc_moon(year, month, day)
    phase_name = get_moon_phase_name(elong)
    options = MOON_META.get(phase_name, ["La lune eclairait discretement le ciel parisien."])
    # Pick deterministically by day-of-month
    line = options[day % len(options)]
    pct = round(illuminated * 100)
    return f"{line} Elle n'était visible qu'à environ {pct} % de sa surface.", phase_name, pct

# ─── WEATHER SCRAPING ─────────────────────────────────────────────────────────

def fetch_month_html(year, month):
    url = f"https://www.historique-meteo.net/france/ile-de-france/paris/{year}/{month:02d}/"
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    resp = requests.get(url, headers=headers, timeout=30)
    resp.encoding = "utf-8"
    resp.raise_for_status()
    return resp.text

def parse_daily_table(html):
    soup = BeautifulSoup(html, "html.parser")
    rows = soup.select("table.calendar-grid tbody tr, table tr.calendar-row, div.calendar table tr")
    if not rows:
        rows = soup.find_all("tr")
    data = {}

    for tr in soup.find_all("tr"):
        tds = tr.find_all("td")
        if len(tds) < 7:
            continue

        day_text = tds[0].get_text(strip=True)
        day_match = re.search(r"(\d+)", day_text)
        if not day_match:
            continue
        day = int(day_match.group(1))

        condition = tds[1].get_text(" ", strip=True).lower()
        condition = re.sub(r"\s+", " ", condition)

        tmax_text = tds[2].get_text(strip=True)
        tmin_text = tds[3].get_text(strip=True)
        precip_text = tds[4].get_text(strip=True)
        wind_text = tds[5].get_text(strip=True)

        def parse_temp(t):
            nums = re.findall(r"[-]?\d+[.,]?\d*", t)
            if nums:
                return float(nums[0].replace(",", "."))
            return None

        def parse_precip(t):
            nums = re.findall(r"[\d.]+", t.replace(",", "."))
            return float(nums[0]) if nums else 0.0

        def parse_wind(t):
            nums = re.findall(r"[\d.]+", t.replace(",", "."))
            return float(nums[0]) if nums else None

        data[day] = {
            "condition": condition,
            "tmax": parse_temp(tmax_text),
            "tmin": parse_temp(tmin_text),
            "precip_mm": parse_precip(precip_text),
            "wind_kmh": parse_wind(wind_text),
        }

    return data

def classify_wind(speed):
    if speed is None:
        return "modéré"
    for threshold, label in reversed(WIND_THRESHOLDS):
        if speed >= threshold:
            return label
    return "calme"

def classify_precip(mm):
    if mm is None or mm == 0:
        return None
    for threshold, label in reversed(PRECIP_THRESHOLDS):
        if mm >= threshold:
            return label
    return "fine"

def filter_paris_line(text):
    """Remove individual headlines that look like metadata/garbage."""
    parts = [p.strip() for p in text.split("|")]
    clean_parts = []
    for p in parts:
        # Remove newspaper prefix for checking
        body = re.sub(r'^\[(Le Petit Parisien|L\'Aurore)\]\s*', '', p)
        if looks_like_garbage(body):
            continue
        clean_parts.append(p)
    return " | ".join(clean_parts) if clean_parts else "La vie parisienne suit son cours habituel."

# ─── PARAGRAPH GENERATION ─────────────────────────────────────────────────────

def normalize_condition(cond):
    cond = cond.strip().lower()
    cond = re.sub(r"\s+", " ", cond)
    for key in sorted(WEATHER_DESC, key=len, reverse=True):
        if key in cond:
            return key
    return cond

def generate_weather_line(month, day, year_display, condition, tmin, tmax, precip_mm, wind_kmh):
    month_name = MONTHS_FR[month]
    normalized = normalize_condition(condition)
    desc = WEATHER_DESC.get(normalized, "le temps etait variable, entre nuages et eclaircies")
    line1 = f"Le {day} {month_name} {year_display}, a Paris, {desc}."

    if tmin is not None and tmax is not None:
        line2 = f"Les temperatures ont oscille entre {tmin:.0f} C au petit matin et {tmax:.0f} C dans l'apres-midi."
    elif tmax is not None:
        line2 = f"La temperature maximale a atteint {tmax:.0f} C dans l'apres-midi."
    else:
        line2 = ""

    evo = EVOLUTION_MAP.get(normalized, ("le temps est reste stable toute la journee", "sans grand changement dans l'apres-midi", "la soiree n'a pas apporte d'amelioration"))
    line3 = f"Le matin, {evo[0]} ; {evo[1]} ; {evo[2]}."

    precip_label = classify_precip(precip_mm)
    if precip_label and precip_mm and precip_mm > 0.5:
        adj = PRECIP_ADJECTIVES.get(precip_label, ("moderee", "reguliere"))
        line4 = f"Les precipitations, {adj[0]}, ont cumule environ {precip_mm:.1f} mm, suffisamment pour alourdir l'air et mouiller les paves."
    elif precip_mm and precip_mm > 0:
        line4 = "Quelques gouttes a peine ont mouille les trottoirs, sans vraiment deranger les passants."
    else:
        line4 = "Aucune precipitation n'est venue troubler la journee."

    wind_label = classify_wind(wind_kmh)
    wind_desc = WIND_ADJECTIVES.get(wind_label, "modere")
    atmospheric = "feuilles mortes et de cheminees"
    if precip_mm and precip_mm > 1:
        atmospheric = "bitume mouille et de terre humide"
    if wind_kmh is not None:
        line5 = f"Le vent, {wind_desc}, soufflait a environ {wind_kmh:.0f} km/h, portant les odeurs de {atmospheric}."
    else:
        line5 = f"Le vent, {wind_desc}, accompagnait la journee sans exces."

    return [line1, line2, line3, line4, line5]

def generate(month, year_display=1899, year_weather=2009, events_db=None, force_refresh=False):
    print(f"  Recuperation des donnees meteo pour {year_weather}...")
    html = fetch_month_html(year_weather, month)
    daily = parse_daily_table(html)

    if events_db is None:
        events_db = {}

    print(f"  Scraping des journaux Gallica...")
    scraped = scrape_events(year_display, month, events_db, days=list(daily.keys()), force_refresh=force_refresh)

    lines_out = []
    for day in sorted(daily.keys()):
        w = daily[day]
        cond = w["condition"]
        tmin = w["tmin"]
        tmax = w["tmax"]
        precip = w["precip_mm"]
        wind = w["wind_kmh"]

        weather_lines = generate_weather_line(month, day, year_display, cond, tmin, tmax, precip, wind)

        moon_line, phase_name, pct = get_moon_line(year_display, month, day)

        key = f"{year_display}-{month:02d}-{day:02d}"
        ev = scraped.get(key, {})
        paris_ev = filter_paris_line(ev.get("paris", "La vie parisienne suit son cours habituel."))
        france_ev = ev.get("france", "Aucun événement politique majeur connu.")
        monde_ev = ev.get("monde", "Aucun événement mondial notable.")

        lines_out.append({
            "day": day,
            "phase_name": phase_name,
            "weather_lines": weather_lines,
            "moon_line": moon_line,
            "paris": paris_ev,
            "france": france_ev,
            "monde": monde_ev,
            "paris_all": ev.get("paris_all", {}),
            "per_np": ev.get("per_np", {}),
        })

    return lines_out

# ─── MARKDOWN RENDERING ───────────────────────────────────────────────────────

def render_paris_detail(paris_all, per_np, indent=""):
    """Render hierarchical detail per newspaper: headlines → articles (proper HTML).
       The [journal] prefix is stripped from nested text for fluid reading."""
    lines = []
    prefix_re = re.compile(r'^\[(Le Petit Parisien|L\'Aurore)\]\s*')

    for np_name in ["Le Petit Parisien", "L'Aurore"]:
        np_data = per_np.get(np_name, {}) if per_np else {}
        ordered_raw = np_data.get("ordered", [])
        if not ordered_raw:
            continue
        source = np_data.get("source", "?")

        ordered = []
        for item in ordered_raw:
            body = prefix_re.sub('', item["text"])
            if looks_like_garbage(body):
                continue
            ordered.append({**item, "text": body})

        if not ordered:
            continue

        lines.append(f"{indent}<details>")
        lines.append(f"{indent}<summary><b>{np_name}</b> <small>(OCR\u00a0: {source})</small></summary>")
        lines.append(f"{indent}")

        first_headline_idx = None
        for i, item in enumerate(ordered):
            if item["type"] == "headline":
                first_headline_idx = i
                break

        if first_headline_idx is None:
            lines.append(f"{indent}<p><em>Pas de titre clair détecté pour ce jour</em></p>")
            lines.append(f"{indent}</details>")
            lines.append(f"{indent}")
            continue

        current_headline = None
        hl_items = []

        def flush_headline():
            nonlocal current_headline, hl_items, lines
            if current_headline is None:
                return
            lines.append(f"{indent}  <details>")
            lines.append(f"{indent}  <summary><b>{current_headline[:100]}</b></summary>")
            lines.append(f"{indent}  ")
            if hl_items:
                lines.append(f"{indent}  <blockquote>")
                for item in hl_items:
                    lines.append(f"{indent}    {item['text'][:200]}")
                lines.append(f"{indent}  </blockquote>")
            else:
                lines.append(f"{indent}  <p><em>titre seul, texte non disponible</em></p>")
            lines.append(f"{indent}  </details>")
            lines.append(f"{indent}  ")
            hl_items = []

        for item in ordered:
            if item["type"] == "headline":
                flush_headline()
                current_headline = item["text"]
            elif current_headline:
                hl_items.append(item)

        flush_headline()
        lines.append(f"{indent}</details>")
        lines.append(f"{indent}")

    return "\n".join(lines)


def render_markdown_month(month, year_display, data, events_db=None):
    month_name = MONTHS_FR[month].capitalize()
    lines = [f"# {month_name} {year_display}\n"]

    # Summary table
    lines.append("| Jour  | Météo | Temp. | Lune |")
    lines.append("|-------|-------|-------|------|")
    for entry in data:
        d = entry["day"]
        wl = entry["weather_lines"]
        first = wl[0] if wl else ""
        short = first.split("à Paris,")[-1].strip().rstrip(".") if "à Paris" in first else first[:60]
        lines.append(f"| {d:>2}  | {short[:50]}… | {wl[1].split('ont oscillé entre ')[-1].split('.')[0] if len(wl)>1 else ''} | {entry['phase_name']} |")

    lines.append("")
    lines.append("---")
    lines.append("")

    for entry in data:
        d = entry["day"]
        wl = entry["weather_lines"]
        moon = entry["moon_line"]
        date_str = f"{d} {month_name.lower()} {year_display}"

        lines.append(f'<details>')
        lines.append(f'<summary><b>📅 {date_str}</b> — {wl[0].split("à Paris,")[-1].strip().rstrip(".").capitalize()[:60]}… <span style="color:gray">🌙 {entry["phase_name"]}</span></summary>')
        lines.append("")
        lines.append("**Météo**")
        for l in wl:
            lines.append(f"> {l}")
        lines.append("")
        lines.append("**Lune**")
        lines.append(f"> {moon}")
        lines.append("")
        lines.append("**Actualité**")
        lines.append(f"- 🏛️ Paris : {entry['paris']}")
        lines.append(f"- 🇫🇷 France : {entry['france']}")
        lines.append(f"- 🌍 Monde : {entry['monde']}")
        lines.append("")
        # Nested detail blocks
        detail_html = render_paris_detail(entry.get("paris_all", {}), entry.get("per_np", {}), indent="")
        if detail_html.strip():
            lines.append(detail_html)
        lines.append("</details>")
        lines.append("")

    return "\n".join(lines)

# ─── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    force_refresh = "--refresh" in sys.argv
    print(f"[Ephemeride 1899 - Paris] {'(rafraichissement force)' if force_refresh else ''}")
    events_db = load_events()
    out_dir = Path(__file__).parent / "output"
    out_dir.mkdir(exist_ok=True)

    for month in [11, 12]:
        month_name = MONTHS_FR[month].capitalize()
        print(f"  Generation de {month_name} 1899...")
        data = generate(month, year_display=1899, year_weather=2009, events_db=events_db, force_refresh=force_refresh)

        md = render_markdown_month(month, 1899, data, events_db)
        out_path = out_dir / f"{MONTHS_FR[month]}-1899.md"
        out_path.write_text(md, encoding="utf-8")
        print(f"  -> Ecrit : {out_path}")
        print(f"     {len(data)} jours generes")

    print("Termine ! Fichiers dans le dossier output/")


if __name__ == "__main__":
    main()
