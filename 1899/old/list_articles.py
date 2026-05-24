import json
from pathlib import Path

def main():
    js_path = Path("output/journal_data.js")
    if not js_path.exists():
        print(f"Error: {js_path} does not exist.")
        return
        
    content = js_path.read_text(encoding="utf-8")
    parts = content.split("const JOURNAL_ARTICLES = ")
    if len(parts) < 2:
        print("Error: const JOURNAL_ARTICLES not found.")
        return
        
    json_str = parts[1].strip().rstrip(";")
    articles = json.loads(json_str)
    
    print(f"Total articles in regenerated database: {len(articles)}")
    for a in articles:
        print(f"ID: {a['id']}, Page: {a['page']}, Category: {a['category']}")
        print(f"  Title: {a['title']}")
        print(f"  Paragraphs: {len(a['paragraphs'])}")

if __name__ == '__main__':
    main()
