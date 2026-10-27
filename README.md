# David Pinto · La Nave Marketing

Portafolio profesional bilingüe (español en `/`, inglés en `/en/`). Es HTML, CSS y JavaScript sin frameworks y sin paso de build: lo que ves en el repositorio es lo que se publica.

## Estructura

```
index.html                  Portada en español
casos/<cliente>/index.html  Casos en español (guaroshop, rucha, centro-plaza, fundacion-unitrans, ruggeri-pizzeria)
en/                         Versión en inglés (se genera, ver abajo)
404.html                    Página de error, bilingüe
assets/css/styles.css       Todos los estilos y los colores de marca (variables al inicio)
assets/js/main.js           Menú móvil, selector de precios y formulario
assets/fonts/               Bebas Neue y Poppins (Google Fonts, servidas desde el sitio)
assets/img/                 Imágenes en WebP: logos, clientes, casos, informes
assets/brand/               Logos originales en alta resolución (no se publican)
tools/                      Generador de la versión en inglés (no se publica)
sitemap.xml, robots.txt     SEO
vercel.json                 Configuración de Vercel
TODO.md                     Datos pendientes
```

## Editar textos

1. Cambia el texto en la página en español (`index.html` o `casos/<cliente>/index.html`).
2. Regenera el inglés desde la carpeta del proyecto:
   ```
   python3 tools/gen_en.py
   ```
3. Si al final aparece «SIN TRADUCIR», agrega esas frases con su traducción en `tools/en_dict.py` y vuelve al paso 2. Las cifras se convierten solas (3.875 → 3,875).

No edites los archivos de `en/` a mano: se sobrescriben cada vez que corres el generador.

## Agregar un caso

1. Copia una carpeta de `casos/`, por ejemplo `casos/rucha/`, con el nombre del cliente nuevo.
2. Cambia los textos, las cifras y las imágenes. Las imágenes van en `assets/img/casos/` en WebP, con `width` y `height`.
3. Agrega la tarjeta del caso en `index.html` (sección «Casos destacados»).
4. Agrega las dos URL (español e inglés) en `sitemap.xml`.
5. Corre `python3 tools/gen_en.py`.

## Cambiar precios

En `index.html` cada precio tiene dos versiones: `<span data-show="ve">` para Venezuela y `<span data-show="int">` para internacional.

## Antes de publicar

- **Dominio:** reemplaza `[DOMINIO]` en todos los archivos por tu dominio (por ejemplo `lanavemarketing.com`):
  ```
  grep -rl "\[DOMINIO\]" --exclude-dir=.git . | xargs sed -i 's/\[DOMINIO\]/tudominio.com/g'
  ```
- **Formulario:** no necesita servicio externo. Al enviarlo se abre tu WhatsApp Business (+58 414 130 5217) con el mensaje armado. El número está en el atributo `data-wa` del formulario.
- Después corre `python3 tools/gen_en.py`.

## Idioma y precios automáticos

`api/geo.js` es una función de Vercel que devuelve el país del visitante según su IP. `assets/js/main.js` la usa así:

- **Precios:** Venezuela ve los precios nacionales; cualquier otro país, los internacionales.
- **Idioma:** Venezuela y los países de habla hispana van al español; el resto, al inglés.
- **Elección manual:** si la persona toca ES / EN o Venezuela / Internacional, se respeta su elección y la detección no vuelve a cambiarla.
- **Buscadores:** Google y otros robots no son redirigidos, para que indexen las dos versiones.

En tu computadora (sin Vercel) la detección no corre y la web funciona igual.

## Píxel de Meta y Google Analytics

Están comentados en el `<head>` de cada página. Para activarlos, quita los comentarios y pon tu ID (`[PIXEL_ID]`, `[GA_ID]`). Hazlo en las páginas en español y regenera el inglés.

## Desplegar en Vercel

1. Entra a vercel.com e inicia sesión con tu cuenta de GitHub.
2. **Add New… → Project**, elige el repositorio `Businessme` y pulsa **Import**.
3. En **Framework Preset** elige **Other**. Deja vacíos el comando de build y el directorio de salida.
4. Pulsa **Deploy**. En un minuto tendrás una dirección `*.vercel.app`.
5. Cada vez que subas cambios a la rama principal, Vercel publica la nueva versión sola.

## Conectar tu dominio

1. En el proyecto de Vercel: **Settings → Domains → Add**, escribe tu dominio (por ejemplo `lanavemarketing.com`) y agrega también `www.lanavemarketing.com`.
2. Vercel te muestra los registros DNS. En el panel de tu proveedor de dominio (GoDaddy, Namecheap, Hostinger…):
   - Registro **A** para `@` apuntando a la IP que indica Vercel.
   - Registro **CNAME** para `www` apuntando al valor que indica Vercel.
3. Espera a que Vercel marque el dominio como válido (de minutos a unas horas). El certificado HTTPS se crea solo.
4. Reemplaza `[DOMINIO]` (ver «Antes de publicar»), regenera el inglés y sube el cambio.
5. En Google Search Console agrega tu dominio y envía `https://tudominio.com/sitemap.xml`.
