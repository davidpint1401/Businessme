# TODO · datos pendientes

## Para publicar (prioridad)
- [ ] `[DOMINIO]`: reemplazarlo en todos los archivos (comando en README.md) y regenerar el inglés.
- [x] Contacto solo por WhatsApp Business: se quitó Calendly y el formulario abre WhatsApp (ya no usa Formspree).
- [x] Pasto Sintético: cifras del informe (9 oct – 17 nov).
- [x] Pasto Sintético: 2024, enlace wa.me/p/6743732579055610.
- [ ] Pasto Sintético y Fabiola Beauty usan el mismo enlace del catálogo (6743732579055610). Confirmar cuál es de cada uno.
- [x] PLAFAM febrero/marzo 2024: cifras publicadas.
- [ ] Rucha: `[CAPTURAS_RUCHA]` (capturas de los informes o de Ads Manager).

## Hecho en esta etapa
- [x] Manual de marca (desde $400 VE / $600 internacional), plan personalizado y bloque «Mi compromiso contigo».
- [x] Plan personalizado: sesión con costo, propuesta inicial adaptada al presupuesto (sin precio fijo publicado).
- [x] Versión en inglés (`/en/`), generada con `tools/gen_en.py`.
- [x] sitemap.xml con hreflang, robots.txt, imágenes para compartir (ES y EN), 404, vercel.json.
- [x] Fuentes servidas desde el sitio. Lighthouse: rendimiento 99–100, accesibilidad 100, buenas prácticas 100, SEO 100 con dominio real (85 mientras siga `[DOMINIO]`).
- [x] Casos web con capturas reales y descripciones.

## Historial y detalles

Cada marcador `[ASÍ]` del sitio aparece aquí. Búscalo en los HTML y reemplázalo.

## Contacto y servicios
- [x] Precios cargados (Venezuela / Internacional) y condiciones de pago
- [ ] Confirmar que el mantenimiento mensual ($350 USDT con hosting) aplica también en Venezuela
- [ ] Confirmar que "hasta 2–3 campañas + informe" aplica también a la mensualidad de Venezuela ($200)
- [ ] `[CALENDLY_LINK]`: enlace de Calendly
- [ ] `[FORMSPREE_ID]`: ID del formulario en formspree.io (va en `action="https://formspree.io/f/..."`)

## SEO
- [ ] `[DOMINIO]`: dominio final (canonical, hreflang, Open Graph, JSON-LD, sitemap)
- [x] `assets/img/og-image.jpg` y `og-image-en.jpg`: imágenes para compartir de 1200×630
- [ ] Confirmar los perfiles de Instagram del JSON-LD y del footer (@davidpint1401, @lanavemk)

## Imágenes (WebP con ancho y alto)
- [x] Foto de "Sobre mí" (desde Drive)
- [x] Guaroshop: captura del informe de reconocimiento en Acarigua (desde Drive)
- [ ] `[CAPTURAS_RUCHA]`: capturas de Ads Manager o de los informes de Rucha (en Drive solo hay documentos de texto)
- [x] Carátulas de las webs: maqueta de navegador con el nombre y la URL
- [ ] `[CAPTURAS_CENTRO_PLAZA]`, `[CAPTURAS_FUNDACION_UNITRANS]`, `[CAPTURAS_RUGGERI_PIZZERIA]`: capturas reales de cada web en móvil y escritorio. Desde aquí no se pueden abrir los sitios en vercel.app.

## Textos de casos web (casos/centro-plaza, casos/fundacion-unitrans, casos/ruggeri-pizzeria)
- [ ] `[AÑO_...]`, `[RETO_...]`, `[PASO_1_...]`, `[PASO_3_...]`, `[DETALLE_TECNICO]` y `[RESULTADOS_...]` en cada página
- [ ] `[DESCRIPCION_CENTRO_PLAZA]`: una línea sobre el proyecto
- [ ] `[DESCRIPCION_UNITRANS]`: una línea sobre el proyecto
- [ ] `[DESCRIPCION_RUGGERI]`: una línea sobre el proyecto conceptual

## Informes de resultados (catálogo de WhatsApp)
- [x] Fabiola Beauty: 6 campañas de jun 2025 a feb 2026, con enlace al catálogo `wa.me/p/6743732579055610`.
- [ ] `[LINK_PASTO_SINTETICO]`: el enlace que tenía Pasto Sintético en el Canva es en realidad el de Fabiola. Enviar el enlace correcto de Pasto Sintético.
- [ ] Cifras clave de cada informe (Castro, Pasto Sintético, Mogar Decor, Cabletoday, Unalivio, Fabiola Beauty y PLAFAM). Desde aquí no se pueden abrir los enlaces de WhatsApp. Con las cifras se pueden mostrar como tarjetas KPI.
- [x] Mogar Decor (México) agregado a clientes, porque hay informe real.
- [ ] Confirmar el nombre: "Castro Realty" (lista de clientes) o "Castro Inmobiliaria" (Canva)
- [ ] Confirmar "Pasto Sintético Tijuana" (lista) o "Pasto Sintético México" (Canva)

## Datos encontrados en Drive
- [x] Guaroshop: periodo 23 sep – 26 oct 2026 (un mes), confirmado en el resumen
- [ ] Rucha: el informe de octubre 2025 indica $460 de inversión para 556.010 de alcance y 34.466 visitas, y el de ago–sep 2025 indica $433,91. ¿De dónde salen los $1.029? Mientras tanto, la tarjeta no muestra la inversión.
- [x] Fabiola Beauty, "Tráfico junio": 3.570 visitas al perfil con $99,12 en 15 días (de "Post de resultados ads.pdf"). Falta confirmar el año.
- [x] Informes recibidos por el chat (lote 1): Cabletoday, Mogar Decor, PLAFAM abril, junio y julio. Cifras y carátula en `assets/img/informes/`.
- [x] Lote 2: Unalivio (may 2024) y PLAFAM septiembre (sep 2024). Cabletoday y Mogar llegaron repetidos (son los mismos archivos).
- [ ] Faltan: Castro Realty, Pasto Sintético, Fabiola Beauty (Cosmetrafabiola), PLAFAM feb/mar y PLAFAM (4_Informe). Sus tarjetas tienen `[PERIODO_...]` y `[CIFRAS_PENDIENTES]`.
- [x] Unalivio trabaja con público de Chile y de Venezuela (confirmado).
- [x] PLAFAM junio: las impresiones repetidas son un error de copia (confirmado). No se publican.
- [x] Mogar Decor: la inversión está en pesos mexicanos. Se publica "$2.841 MXN".
- [x] Los seguidores de los informes de PLAFAM son nuevos (confirmado). Se publican.
- [ ] "Post de resultados ads.pdf": varias campañas no dicen de qué cliente son (casa en Tijuana, higiene y desechables, artista, barbero/patillera y las campañas mensuales sep 2025 – sep 2026). Indicar el cliente de cada una para poder publicarlas.

## Casos de Ads (casos/guaroshop, casos/rucha)
- [x] Guaroshop: cifras, tabla por campaña y captura, tomadas del informe 23 sep – 26 oct 2026
- [x] Rucha: tabla mes a mes de sep 2025 a jun 2026, tomada de los informes de Drive
- [ ] Rucha, junio 2026: el informe dice $427,17 en total, pero sus 4 campañas suman $407,05. En la tabla puse solo las 2 campañas de WhatsApp e interacciones ($198,06).
- [ ] Rucha, mar–abr 2026: el informe dice $884,11, pero las 2 campañas suman $834,81. En la tabla aparecen por separado.
- [ ] El informe de Guaroshop dice −57% en Acarigua, pero el cálculo ($0,47 → $0,2055) da −56%. Se dejó −56%.
- [ ] "Cosméticos Paulita" en Drive es una propuesta, no resultados. No se publicó.

## Pendiente
- [x] Versión en inglés.
- [x] sitemap.xml, robots.txt, og-image.jpg y vercel.json
- [ ] Archivo vacío `Informes` en la raíz del repo: ¿era una carpeta para los informes? Git no guarda carpetas vacías.

## Guaroshop: historial de 11 meses
- [x] Las campañas de "Post de resultados ads.pdf" en la cuenta publicitaria 794012149193596 son de Guaroshop: los anuncios salen como @guaroshop2023, y el informe de sep–oct coincide con los datos del mes anterior. Se publicó la tabla mes a mes de dic 2025 a oct 2026 (17.560 conversaciones, $5.011,11, incluidas las 2 campañas de San Valentín).
- [x] Las campañas sin enlace también son de Guaroshop (confirmado).
- [x] "TRAFICO - DICIEMBRE" es de Todo Cosmético (@todocosmetico.detal; también existe @todocosmetico.mayor). Tarjeta publicada.
- [x] Todo Cosmético: 29 nov 2025 – 2 ene 2026.
- [ ] Páginas 1 a 13 de "Post de resultados ads.pdf" (casa en Tijuana, higiene y desechables, artista, barbero, tráfico sep/nov 2025 y ene 2026): ¿de qué cliente es cada una?

## Anuncios sueltos (imágenes del chat)
- [x] Castro Realty: el reel es del 19 sep 2024 y los posts de la casa en La Remosa son de Castro (confirmado).
- [x] Reinaldo Cejas: Venezuela.
- [x] Los posts "higiene y desechables" y "Llegando..." no se publican (decisión de David).
- [x] El reel de la patillera Kemei es de Guaroshop. Agregado a la galería del caso.
- [x] Posts de la casa en La Remosa: de Castro Realty. Publicados en su tarjeta (110 mensajes, 24.700 personas alcanzadas). Se publican como 2024 (confirmado).

## Mis inicios
- [x] 31 publicaciones promocionadas (PDF «Post Resultados»), en un desplegable cerrado bajo los informes.
- [ ] Las imágenes llevan la marca «Impulso Ads» y otro número (0426 788 4258). Confirmar si se pueden mostrar así.

## Branding
- [x] Manuales de Centro Plaza, Unitrans y Escape Tours, y portada de Arte Express Design.
- [x] Portadas de AE Galería, Mobiles Design y Ladybox.
- [x] Sección "Branding y manuales de marca" con AE Galería, Arte Express Design, Mobiles Design y Ladybox (enlaces del catálogo).
- [ ] Imagen de portada para cada manual (opcional): enviar una captura de cada uno.

## Portafolios comerciales (Business Manager)
- [x] Sección con los 10 portafolios del catálogo y la lámina del Canva como imagen.
- [ ] 67 capturas de Business Manager en Drive (2022–2024): no se publicaron tal cual porque muestran correos de terceros, métodos de pago, saldos e IDs de cuenta. Si David elige algunas, se recortan o difuminan esos datos antes de publicarlas.
- [x] Todo Cosmético: suma la campaña de @todocosmeticos.mayor (22 jul – 22 ago 2026).
