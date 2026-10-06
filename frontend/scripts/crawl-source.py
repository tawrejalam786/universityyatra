"""Read-only crawl of the user-authorized University Yatra content source."""
from pathlib import Path
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor
import subprocess
import json
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'migration' / 'source'
DEST.mkdir(parents=True, exist_ok=True)
home = html.fromstring((DEST / 'home.html').read_bytes())
routes = set()
for link in home.xpath('//a[@href]'):
    url = urlparse(link.get('href'))
    if url.netloc == 'universityyatra.com' and url.path.count('/') <= 2 and not url.path.startswith('/wp-'):
        slug = url.path.strip('/')
        if slug and '.' not in slug:
            routes.add(slug)
routes.update(['study-in-uae', 'terms-and-conditions'])

def fetch(slug):
    url = f'https://universityyatra.com/{slug}/'
    result = subprocess.run(['curl.exe', '-L', '--silent', '--show-error', '--max-time', '45', '-w', '%{http_code}|%{url_effective}', url, '-o', str(DEST / f'{slug}.html')], capture_output=True, text=True)
    print(slug, result.stdout, flush=True)
    return {'slug': slug, 'url': url, 'result': result.stdout, 'error': result.stderr}

with ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(fetch, sorted(routes)))
(DEST.parent / 'inventory.json').write_text(json.dumps(results, indent=2), encoding='utf-8')
