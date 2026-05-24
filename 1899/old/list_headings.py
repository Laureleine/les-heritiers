import re
from pathlib import Path

def main():
    ocr_file = Path("output/le_petit_parisien_1899-11-26_propre.txt")
    text = ocr_file.read_text(encoding="utf-8")
    
    pages_raw = re.split(r'={39,}\s*PAGE\s+(\d+)\s*={39,}', text)
    pages = {}
    for i in range(1, len(pages_raw), 2):
        pages[int(pages_raw[i])] = pages_raw[i+1].strip()
        
    for p_num in [2, 3, 4]:
        if p_num not in pages:
            print(f"Page {p_num} is missing!")
            continue
            
        print(f"\n--- ALL UPPERCASE HEADINGS ON PAGE {p_num} ---")
        p_text = pages[p_num]
        lines = p_text.split("\n")
        for idx, l in enumerate(lines):
            l_strip = l.strip()
            # Look for uppercase words/headings
            if len(l_strip) > 3 and len(l_strip) < 60 and re.match(r'^[A-Z0-9\s\.\'\-\!\,\(\)\&\?]+$', l_strip):
                print(f"Line {idx}: {l_strip}")

if __name__ == '__main__':
    main()
