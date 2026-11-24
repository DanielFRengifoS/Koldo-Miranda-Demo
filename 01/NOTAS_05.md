# NOTAS_05 · Koldo Miranda · Opción B03

**Estado:** demo interna de alta fidelidad · no publicar ni enviar  
**Fecha de construcción:** 23 de noviembre de 2026  
**Dirección:** «Un hilo público. Dos casas distintas»  
**Base:** `05_Prompt_HTML_Base.md`, `DIRECCION 01.md`, `01_OPCION.md` y `koldo_miranda_01_Paquete_Canonico(1).zip`.

## 1. Composición implementada

- Hero editorial asimétrico: titular y texto a la izquierda; retrato contextual M006 a la derecha. En móvil se apila titular, texto, CTA, retrato y crédito.
- Primer bloque «El hilo» antes de los capítulos; la línea vertical es un recurso de lectura, no una cronología ni una relación empresarial.
- Capítulo 01 · La Favorita: fotografía de comedor M001, rótulo M005 y ambiente M008, cada uno con pie, fuente, fecha y estado de referencia.
- Highlight H01 al cierre del capítulo de La Favorita; se identifica como síntesis narrativa, no premio.
- Capítulo 02 · Gallinas y Valientes: composición geométrica original, abstracta y declarada como no representativa de plato, local o proceso real. Se incluye M007 solo como referencia externa de la tortilla de Sacha, con advertencia visible de que no es una foto de Gallinas y Valientes.
- Highlight H02 al cierre del capítulo de Gallinas y Valientes; se explicita la verificación limitada y que no es un premio.
- Comparación M02 después de ambos capítulos, con estados de evidencia diferenciados y enlaces de regreso.
- Fuentes y límites al final. No hay reservas, formularios, precios, horarios, alérgenos, carta vigente, disponibilidad ni claim Michelin 2006.

## 2. Medios · archivo original → ruta servida → lugar en pantalla → estado / autoría

> El ZIP canónico no contiene los binarios fotográficos: `MANIFIESTO_MEDIOS.md` indica que son referencias externas remotas `solo_referencia`, sin originales del cliente y sin autorización de publicación confirmada. La red del entorno de construcción no permitió descargar esos binarios. Por ello las fotografías se solicitan desde sus URLs originales al abrir la demo con conexión; los SVG locales son respaldos gráficos originales para el caso de fallo de red. No se ha transformado una referencia externa en un supuesto activo propio.

| Archivo / ID original | Ruta servida en esta demo | Lugar en pantalla | Estado / autoría |
|---|---|---|---|
| M006 · retrato de Koldo en contexto de La Favorita | URL remota de El Espectador en `index.html`; respaldo `assets/images/hero-archivo.svg` | Hero principal | `solo_referencia`; El Espectador, crédito Oscar Perez, 18.06.2024. El respaldo es composición abstracta original de demo, no fotografía ni retrato. |
| M001 · comedor de La Favorita | URL remota de 7 Caníbales en `index.html`; respaldo `assets/images/favorita-comedor-fallback.svg` | Capítulo 01, imagen principal | `solo_referencia`; 7 Caníbales, artículo de Daniel Guerrero, 17.10.2024; crédito individual no visible. El respaldo no representa el comedor real. |
| M005 · rótulo ilustrado La Favorita / Coloniales y Ultramarinos | URL remota de 7 Caníbales en `index.html`; respaldo `assets/images/favorita-rotulo-fallback.svg` | Capítulo 01, imagen secundaria | `solo_referencia`; 7 Caníbales, 17.10.2024; crédito individual no visible. El respaldo tipográfico no es un logo ni un rótulo oficial. |
| M008 · ambiente de La Favorita con rótulo de vinos y licores | URL remota de La República en `index.html`; respaldo `assets/images/favorita-ambiente-fallback.svg` | Capítulo 01, bloque de ambiente | `solo_referencia`; La República, crédito The Boy Agency, 26.07.2024. El respaldo es abstracto, no representa el local. |
| M007 · tortilla vaga de Sacha | URL remota de EL PAÍS en `index.html`; respaldo `assets/images/sacha-referencia-fallback.svg` | Bloque secundario del capítulo 02 | `solo_referencia`; EL PAÍS, Inma Flores, 14.01.2025. Se rotula como Sacha y se advierte que NO es foto de Gallinas y Valientes. El respaldo no representa un plato. |
| — · geometría editorial de Gallinas y Valientes | `assets/images/gallinas-geometria.svg` | Imagen principal del capítulo 02 | SVG original de esta demo; abstracción geométrica, no representa plato, local ni proceso real. |

**Referencias inspeccionadas visualmente durante esta ejecución:** M006, M001, M005 y M008 cargaron en la vista web de sus URLs originales. M007 no pudo recuperarse en esa inspección (timeout); en el sitio queda con fallback local. La carga en la demo depende de que el navegador del usuario tenga conexión y de que los editores mantengan disponibles las imágenes.

## 3. Rutas y dependencias

- Documento: `index.html`.
- CSS local: `assets/css/styles.css`.
- JavaScript local: `assets/js/main.js`.
- Imágenes gráficas locales: `assets/images/*.svg`.
- No hay librerías, fuentes, frameworks ni dependencias JS de terceros.
- Las rutas de dependencias y respaldos locales son relativas. Las cinco referencias de prensa conservan sus URLs externas de origen, con crédito y enlace visibles, porque los binarios no fueron entregados en el ZIP canónico y no se pudieron descargar desde el entorno.

## 4. Interacciones

- Navegación por anclas a cada capítulo y a la comparación.
- Menú móvil desplegable con estado accesible `aria-expanded`.
- Si una imagen remota falla, el JavaScript sustituye esa imagen por su SVG local de respaldo y actualiza el estado visible.
- No hay acciones que aparenten enviar datos, reservar o consultar disponibilidad.

## 5. Límites de validación

- El ZIP fuente no incluía los archivos fotográficos como binarios.
- La herramienta de descarga del entorno no pudo resolver/descargar los hosts de prensa; las URLs de M006, M001, M005 y M008 sí se pudieron inspeccionar visualmente en la vista web de referencias.
- El navegador Chromium del entorno bloqueó la apertura local/localhost (`ERR_BLOCKED_BY_ADMINISTRATOR`), por lo que no se certifica una prueba real de navegador a 390 px y 1440 px. Se incluyen comprobaciones estáticas y una verificación de rutas; no se inventan capturas de navegador.
- M007 quedó con fallback local porque la inspección remota agotó el tiempo de espera.
- Antes de publicación, reemplazar las referencias remotas por archivos originales con permisos y créditos confirmados, validar el texto con el cliente y recibir fuente primaria / datos operativos de Gallinas y Valientes.

## 6. Contenido que se ha evitado

No se añade biografía, CV, filosofía personal, Michelin 2006, premios, precios, horarios, direcciones operativas, cartas actuales, alérgenos, disponibilidad, reservas, marca paraguas ni relación empresarial no confirmada. No se atribuye M006 a Gallinas y Valientes ni se presenta M007 como imagen de ese restaurante.
