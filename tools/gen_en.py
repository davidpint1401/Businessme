# Genera /en/ y /en/cases/<slug>/ a partir de las páginas en español.
# Uso, desde la carpeta del proyecto:  python3 tools/gen_en.py
# Vuelve a correrlo cada vez que cambies una página en español. Si agregas un texto nuevo,
# añade su traducción en tools/en_dict.py; el script lista al final los textos que no encontró.
import re, sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from en_dict import T, URL

ROOT = pathlib.Path(__file__).resolve().parent.parent
MONTHS = {"enero": "January", "febrero": "February", "marzo": "March", "abril": "April", "mayo": "May", "junio": "June",
          "julio": "July", "agosto": "August", "septiembre": "September", "octubre": "October", "noviembre": "November", "diciembre": "December",
          "ene": "Jan", "feb": "Feb", "mar": "Mar", "abr": "Apr", "may": "May", "jun": "Jun", "jul": "Jul", "ago": "Aug",
          "sep": "Sep", "oct": "Oct", "nov": "Nov", "dic": "Dec"}
KEEP = {"ES", "EN", "article", "website", "summary_large_image", "English version"}
missing = set()

def numbers(s):
    # 3.875 -> 3,875 · $0,24 -> $0.24 · 5.011,11 -> 5,011.11
    return re.sub(r"\d+(?:[.,]\d+)+", lambda m: m.group(0).translate(str.maketrans(".,", ",.")), s)

def tr(text):
    core = text.strip()
    if not core or core in KEEP:
        return text
    if not re.search(r"[A-Za-zÁ-úñ]", core):
        return numbers(text)
    if core in T:
        out = T[core]
    else:
        out = re.sub(r"\b(" + "|".join(MONTHS) + r")\b", lambda m: MONTHS[m.group(1)], core)
        if re.search(r"[a-záéíóúñ]{4,}", re.sub(r"\b(" + "|".join(MONTHS.values()) + r")\b", "", out)) and not re.fullmatch(r"[\w.@-]+(\.[a-z]+)+|[A-Z][\w .&-]*", out):
            missing.add(core)
    return text.replace(core, numbers(out))

def es_to_en_path(href):
    if href == "/": return "/en/"
    m = re.match(r"^/casos/([\w-]+)/(.*)$", href)
    if m: return f"/en/cases/{m.group(1)}/{m.group(2)}"
    if href.startswith("/#"): return "/en/" + href[1:]
    return href

def convert(src, es_path, en_path):
    html = src.read_text(encoding="utf-8")
    # 1) separar <script> y comentarios para no traducirlos
    parts = re.split(r"(<script\b.*?</script>|<!--.*?-->)", html, flags=re.S)
    out = []
    for p in parts:
        if p.startswith("<script") or p.startswith("<!--"):
            out.append(p); continue
        p = re.sub(r'\b(alt|aria-label|title|content|placeholder|value)="([^"]*)"',
                   lambda m: f'{m.group(1)}="{tr(m.group(2))}"', p)
        p = re.sub(r">([^<]+)<", lambda m: ">" + tr(m.group(1)) + "<", p)
        out.append(p)
    html = "".join(out)

    # 2) estructura: idioma, rutas, canonical, selector de idioma
    html = html.replace('<html lang="es"', '<html lang="en"', 1)
    # en inglés se muestran primero los precios internacionales
    html = html.replace('data-region="ve"', 'data-region="int"', 1)
    html = html.replace('data-set-region="ve" aria-pressed="true"', 'data-set-region="ve" aria-pressed="false"').replace('data-set-region="int" aria-pressed="false"', 'data-set-region="int" aria-pressed="true"')
    html = html.replace('content="es_VE"', 'content="__ES__"').replace('content="en_US"', 'content="es_VE"').replace('content="__ES__"', 'content="en_US"')
    html = re.sub(r'(<link rel="canonical" href="https://\[DOMINIO\])[^"]*"', rf'\g<1>{en_path}"', html)
    html = re.sub(r'(<meta property="og:url" content="https://\[DOMINIO\])[^"]*"', rf'\g<1>{en_path}"', html)
    html = re.sub(r'href="(/[^"]*)"', lambda m: f'href="{es_to_en_path(m.group(1))}"' if not m.group(1).startswith(("/assets", "/en/")) else m.group(0), html)
    html = re.sub(r'<span aria-current="true" lang="es">ES</span>\s*<a href="[^"]*" hreflang="en" lang="en" aria-label="English version">EN</a>',
                  f'<a href="{es_path}" hreflang="es" lang="es" aria-label="Versión en español">ES</a>\n        <span aria-current="true" lang="en">EN</span>', html)
    for a, b in URL.items():
        html = html.replace(a, b)
    # 3) JSON-LD
    html = html.replace('"Gestión de Meta Ads, páginas web y landing pages, y configuración de Business Manager para negocios."',
                        '"Meta Ads management, websites and landing pages, and Business Manager setup for businesses."')
    html = html.replace('"jobTitle": "Meta Ads Manager y desarrollador front-end"', '"jobTitle": "Meta Ads Manager and front-end developer"')
    html = html.replace('"url": "https://[DOMINIO]/",', '"url": "https://[DOMINIO]/en/",')
    html = html.replace('"paymentAccepted": "USD, USDT, bolívares a tasa USDT"', '"paymentAccepted": "USD, USDT, bolívares at the USDT rate"')
    html = html.replace('aria-label="Escríbeme por WhatsApp"', 'aria-label="Message me on WhatsApp"')
    return html

pages = [(ROOT / "index.html", "/", "/en/", ROOT / "en/index.html")]
for d in sorted((ROOT / "casos").iterdir()):
    pages.append((d / "index.html", f"/casos/{d.name}/", f"/en/cases/{d.name}/", ROOT / f"en/cases/{d.name}/index.html"))
for src, es, en, dst in pages:
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(convert(src, es, en), encoding="utf-8")
    print("ok", dst.relative_to(ROOT))
if missing:
    print("\nSIN TRADUCIR:"); [print(" -", m) for m in sorted(missing)]
