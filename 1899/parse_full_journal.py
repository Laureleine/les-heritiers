#!/usr/bin/env python3
"""
Parser pour découper le texte de "le_petit_parisien_1899-11-26_propre.txt"
en articles structurés par page, générer des résumés automatiques
et exporter le tout dans un fichier de données JS.
"""

import re
import json
from pathlib import Path

# Définition des expressions régulières pour détecter les en-têtes d'articles
# par page pour le 26 novembre 1899.
ARTICLES_HEADERS = {
    1: [
        (r"RÉFORME DE LA JUSTICE MILITAIRE|Le projet de loi sur les modifications", "Éditorial (Jean Frollo)", "La Réforme de la Justice Militaire"),
        (r"INFORMATIONS POLITIQUES", "Informations Politiques", "Informations Politiques & Élections Sénatoriales"),
        (r"La Loi sur les Accidents", "Social & Économie", "Modifications de la Loi sur les Accidents du Travail"),
        (r"La Convention Franco-Américain", "Diplomatie", "Convention Commerciale Franco-Américaine"),
        (r"ESCROC ET MEURTRIER", "Faits Divers", "Agression Sanglante à Nogent-sur-Marne"),
        (r"GUIIUISE|Guillaume II", "Actualités Internationales", "Départ de l'Empereur d'Allemagne pour Sandringham"),
        (r"LE DISCOURS DE (?:1\.|M\.) DELCASSÉ", "Chronique Politique", "Le Discours de M. Delcassé devant la Chambre"),
        (r"LA FÊTE DES ÉTUDIANTS", "Vie Parisienne", "Inauguration de l'Association des Étudiants par le Président Loubet"),
        (r"LES EMPLOIES|LES EMPLOYÉS DE CHEMIN DE FER", "Social", "Réglementation de la Journée de Travail des Cheminots"),
        (r"UNE HAINE MORTELLE", "Faits Divers", "Meurtre par Voisinage à Reims"),
        (r"Les nouvelles du Natal", "Guerre du Transvaal", "Les Nouvelles Militaires du Natal"),
        (r"Les Afrikanders", "Guerre du Transvaal", "Risque de Soulèvement Général des Afrikanders"),
        (r"A propos du Combat de Belmont", "Guerre du Transvaal", "Analyses et Pertes du Combat de Belmont"),
        (r"L'Opinion en Allemagne", "Guerre du Transvaal", "L'État de l'Opinion Publique Allemande sur la Guerre"),
        (r"LES TRAGÉDIES DE L'AMOUR", "Feuilleton Littéraire", "Feuilleton : Les Tragédies de l'Amour (Jules Mary)")
    ],
    2: [
        (r"Devant Ladysmith", "Guerre du Transvaal", "Le Siège devant Ladysmith"),
        (r"Les Boërs et leurs Prisonniers", "Guerre du Transvaal", "Bons Traitements des Prisonniers par les Boërs"),
        (r"Trains Cuirassée|Trains Cuirassés", "Guerre du Transvaal", "Description Technique des Trains Cuirassés Anglais"),
        (r"NOUVELLES DE MADAGASCAR", "Actualités Coloniales", "Voyage du Gouverneur Général Pennequin à Madagascar"),
        (r"Anglais et Derviches", "Actualités Internationales", "Déroute Décisive des Derviches à Khartoum"),
        (r"A\. F ort-Said|A Port-Saïd", "Carnet de Voyage", "Chronique du Voyage de l'Indus vers l'Orient"),
        (r"LE MONUMENT|FERDINAND DE LE5SKPS", "Actualités Internationales", "Inauguration du Monument de Ferdinand de Lesseps à Port-Saïd"),
        (r"NOUVELLES MILITAIRES", "Armée & Défense", "Chronique des Mouvements et Nominations Militaires"),
        (r"NOUVELLES MARITIMES", "Chronique Maritime", "Mouvements des Escadres et Sinistres en Mer"),
        (r"EN CHAMBRE DU CONSEIL|LES PERQUISITIONS", "Haute Cour", "Les Délibérations et Perquisitions du Procès du Complot")
    ],
    3: [
        (r"BULLETIN DU TRAVAIL", "Mouvements Sociaux", "Le Bulletin du Travail : Grève des Maréchaux-Ferrants"),
        (r"NOUVELLES JUDICIAIRES", "Chronique Judiciaire", "Chronique des Tribunaux et Condamnations du Jour"),
        (r"VIOLENTS INCENDIES", "Faits Divers", "Violents Incendies à Stains et en Seine-et-Oise"),
        (r"SEUL CONTRE TOUS", "Feuilleton Littéraire", "Roman de l'Après-midi : Seul Contre Tous (Jean de la Brète)"),
        (r"AUTOUR DE PARIS", "Vie Parisienne", "Chronique Locale et Nouvelles de la Banlieue Parisienne"),
        (r"LES COURSES|AUTEUIL", "Hippisme", "Résultats des Courses de Vélocipèdes et Chevaux à Auteuil"),
        (r"DEPARTEMENTS|A NOS COKRSSPONOAKTS", "Nouvelles des Provinces", "Correspondances Régionales des Départements de France"),
        (r"BULLETIN FINANCIER", "Finance", "Bulletin Financier et Cours de la Bourse de Paris"),
        (r"LES SPORTS|MSUMSTO SPORTIF", "Sports", "Mouvement Sportif et Chroniques Athlétiques")
    ],
    4: [
        (r"DEMAIN PARIS GRANDS MAGASINS|SOLDES ET OCCASIONS", "Annonces d'Époque", "Réclames et Offres Spéciales des Grands Magasins du Louvre"),
        (r"L'AGRICULTURE NOUVELLE", "Chronique Agricole", "Agriculture Nouvelle, Élevage et Conseils Ruraux"),
        (r"SPECTACLES DU 26 NOVEMBRE|SPECTACLES & THÉÂTRES", "Loisirs & Culture", "Les Pièces de Théâtre et Spectacles de Paris Ce Soir")
    ]
}

def parse_full_journal():
    base_dir = Path(__file__).parent
    ocr_file = base_dir / "output" / "le_petit_parisien_1899-11-26_propre.txt"
    
    if not ocr_file.exists():
        print(f"Erreur : Le fichier {ocr_file} n'existe pas.")
        return
        
    text = ocr_file.read_text(encoding="utf-8")
    
    # Séparer le texte par page
    pages_raw = re.split(r'={39,}\s*PAGE\s+(\d+)\s*={39,}', text)
    
    pages = {}
    # pages_raw contient [avant_page_1, '1', texte_page_1, '2', texte_page_2, ...]
    for i in range(1, len(pages_raw), 2):
        page_num = int(pages_raw[i])
        page_text = pages_raw[i+1].strip()
        pages[page_num] = page_text
        
    all_articles = []
    
    # Parser chaque page
    for page_num, page_text in sorted(pages.items()):
        print(f"Parsing Page {page_num} ({len(page_text)} caractères)...")
        headers = ARTICLES_HEADERS.get(page_num, [])
        
        # Nous allons chercher les positions de chaque en-tête pour découper le texte de manière ordonnée
        positions = []
        for regex, category, clean_title in headers:
            # Recherche insensible à la casse
            match = re.search(regex, page_text, re.IGNORECASE)
            if match:
                positions.append({
                    "start": match.start(),
                    "end": match.end(),
                    "regex": regex,
                    "category": category,
                    "title": clean_title
                })
                
        # Trier les positions par ordre d'apparition dans le texte
        positions.sort(key=lambda x: x["start"])
        
        # Découper le texte
        for idx, pos in enumerate(positions):
            start_idx = pos["end"]
            # La fin est le début de l'article suivant ou la fin de la page
            end_idx = positions[idx+1]["start"] if idx + 1 < len(positions) else len(page_text)
            
            article_body = page_text[start_idx:end_idx].strip()
            
            # Nettoyer le corps de l'article des résidus de mise en page
            # Séparer en paragraphes propres
            paragraphs = [p.strip() for p in article_body.split("\n\n") if p.strip()]
            
            # Ne conserver que les articles ayant du contenu substantiel
            if not paragraphs or len(" ".join(paragraphs)) < 50:
                continue
                
            # Générer un résumé automatique (premières phrases jusqu'à ~200-250 caractères)
            full_text = " ".join(paragraphs)
            summary = ""
            sentences = re.split(r'(?<=[.!?])\s+', full_text)
            
            for s in sentences:
                if len(summary) < 220:
                    summary += (" " if summary else "") + s.strip()
                else:
                    break
            if not summary.endswith("."):
                summary += "..."
                
            all_articles.append({
                "id": len(all_articles) + 1,
                "page": page_num,
                "category": pos["category"],
                "title": pos["title"],
                "summary": summary,
                "paragraphs": paragraphs
            })
            
    print(f"\nExtraction terminée : {len(all_articles)} articles trouvés au total !")
    
    # Exporter les données au format Javascript pour journal_26_novembre.html
    js_output_path = base_dir / "output" / "journal_data.js"
    
    js_content = f"// Base de données complète des articles de presse du 26 Novembre 1899\n"
    js_content += f"const JOURNAL_ARTICLES = {json.dumps(all_articles, ensure_ascii=False, indent=2)};\n"
    
    js_output_path.write_text(js_content, encoding="utf-8")
    print(f"Fichier de données JS écrit : {js_output_path}")

if __name__ == '__main__':
    parse_full_journal()
