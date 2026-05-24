import re
from pathlib import Path

def main():
    ocr_file = Path("output/le_petit_parisien_1899-11-26_propre.txt")
    text = ocr_file.read_text(encoding="utf-8")
    
    pages_raw = re.split(r'={39,}\s*PAGE\s+(\d+)\s*={39,}', text)
    pages = {}
    for i in range(1, len(pages_raw), 2):
        pages[int(pages_raw[i])] = pages_raw[i+1].strip()
        
    p1_text = pages[1]
    
    headers_p1 = [
        (r"RÉFORME DE LA JUSTICE MILITAIRE", "Éditorial (Jean Frollo)", "La Réforme de la Justice Militaire"),
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
    ]
    
    print("Page 1 Matches:")
    for regex, cat, title in headers_p1:
        match = re.search(regex, p1_text, re.IGNORECASE)
        if match:
            print(f"  MATCH: {regex} -> start={match.start()}, end={match.end()} (text matched: '{match.group(0)}')")
        else:
            print(f"  NO MATCH: {regex}")

if __name__ == '__main__':
    main()
