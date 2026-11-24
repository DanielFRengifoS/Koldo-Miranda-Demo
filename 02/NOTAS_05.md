# NOTAS 05 — Koldo Miranda · Opción A03

**Entrega:** `koldo_miranda_05_Opcion_A03.zip`  
**Dirección:** A03 · «Dos territorios, dos lenguajes»  
**Estado:** demo comercial interna · no publicar ni enviar  
**Fecha de construcción:** 23 de noviembre de 2026

## 1. Alcance ejecutado

- HTML base responsive para escritorio (~1440 px) y móvil (~390 px).
- Hero editorial en díptico 50/50: La Favorita y Gallinas y Valientes con jerarquía equivalente.
- Primer bloque comparativo: «Dos vocabularios. Dos niveles de evidencia».
- Cierres H01 y H02 separados como highlights narrativos, no premios.
- Entradas internas a M03/M04 y retorno a la comparación.
- Contenido esencial disponible sin JavaScript; JS solo controla el estado de carga/error de las imágenes remotas.
- Tipografías locales del sistema: Georgia y Arial. Sin fuentes descargadas.

## 2. Medios: archivo original → ruta servida → lugar en pantalla → estado/autor

| Archivo / ID original | Ruta servida | Lugar en pantalla | Estado / autor / crédito |
|---|---|---|---|
| M005 · `La-Favorita-copia-353x400.webp` | URL remota 7 Caníbales incluida en `index.html` | Hero La Favorita, mosaico principal | `solo_referencia`; rótulo ilustrado publicado por 7 Caníbales, 17/10/2024; crédito individual no visible. No es logo maestro. |
| M001 · `La-Favorita-en-Bogota-356x400.webp` | URL remota 7 Caníbales incluida en `index.html` | Hero La Favorita, apoyo superior | `solo_referencia`; comedor de La Favorita, 7 Caníbales, 17/10/2024; crédito individual no visible en el pie consultado. |
| M008 · `La-Favorita-un-restaurante-con-cocina-espanola-autentica-para-disfrutar-todo-el-dia.jpg` | URL remota La República incluida en `index.html` | Hero La Favorita, apoyo inferior | `solo_referencia`; La República, 26/07/2024; crédito The Boy Agency. |
| M007 | No se sirve ni se copia | No aparece | Excluida por la dirección A03 y `02_OPCION.md`; la imagen de Sacha no representa a Gallinas y Valientes. |
| Foto de Gallinas y Valientes | No existe ruta | No aparece | No localizada en el paquete canónico; no se inventa una imagen. |
| `assets/elipse-abierta.svg` | `assets/elipse-abierta.svg` | Hero Gallinas y Valientes | Gráfico vectorial original creado para esta demo; metáfora abstracta, no plato ni identidad oficial. |

### Nota sobre las imágenes remotas

El ZIP canónico no contiene archivos binarios de fotografía: las tres referencias elegidas están clasificadas `solo_referencia`, alojadas en servidores editoriales y sin autorización de publicación confirmada. Por respeto a esa condición no se descargaron, incrustaron ni redistribuyeron dentro del ZIP. El HTML conserva las URL originales, los créditos, la fecha y los enlaces a las fuentes. Si el navegador no tiene conexión o el editor bloquea la carga, aparece un marcador de referencia transparente en el mismo espacio del mosaico. No se usan fotografías de stock ni se presenta el marcador como foto real.

## 3. Dependencias y rutas

- `index.html` carga `styles.css` y `script.js` mediante rutas relativas.
- El gesto elíptico se carga desde `assets/elipse-abierta.svg` mediante ruta relativa.
- Las únicas dependencias remotas son las tres imágenes de prensa de La Favorita y los enlaces a las fuentes; no hay CDN, librerías, fuentes externas ni servicios de terceros ejecutables.

## 4. Límites editoriales respetados

- No se usa M007 ni se atribuye a Gallinas y Valientes.
- No se presenta M005 como logo oficial.
- No se inventan fotos, carta, ingredientes, platos actuales, precios, horarios, dirección operativa, reservas ni disponibilidad.
- La asociación con la tortilla vaga se atribuye a Única FM (E008), con verificación limitada.
- E007 se limita al registro mercantil; E009 al contexto gastronómico sobre la tortilla vaga y Sacha.
- No se usa el claim Michelin 2006.
- No se afirma que ambos conceptos compartan carta, local, equipo o identidad comercial.
- Los CTA de navegación son anclas locales de la demo; no existe reserva operativa.

## 5. Verificación

Las capturas y el informe técnico se guardan en `pruebas_05/`. Se extrajo el ZIP en una carpeta limpia y se renderizó el HTML extraído en Chromium a 390 px y 1440 px. La navegación directa a `file://` y a `localhost` fue bloqueada por la política del navegador del entorno; para la prueba visual se cargó el HTML extraído con CSS, JS y SVG locales inline.

**Limitación de entorno:** las solicitudes a las imágenes remotas se bloquearon durante la prueba para comprobar el estado de fallback; además, el entorno no resuelve DNS hacia 7 Caníbales ni La República. Por ello no se pudo verificar la descarga efectiva de las fotografías. Sí se verificaron composición responsive, ausencia de desbordamiento horizontal, destinos de los enlaces internos, ausencia de errores JavaScript y estado de los marcadores de referencia. En un navegador con conexión, las imágenes remotas se mostrarán si los editores permiten la carga.

## 6. Contenido del paquete

- `index.html`
- `styles.css`
- `script.js`
- `assets/elipse-abierta.svg`
- `NOTAS_05.md`
- `pruebas_05/` — capturas de escritorio y móvil e informe de validación
