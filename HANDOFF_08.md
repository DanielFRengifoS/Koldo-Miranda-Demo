# Handoff 08 · Koldo Miranda

**Entrega vigente:** 08G · Tripleta God Tier. Base inmediata: 08F. **Base:** `koldo_miranda_08E_Tripleta_Intros_Bugfix02.zip`. **Estado:** demo interna pendiente de validación del cliente. No publicar ni enviar.

## Abrir

Descomprimir el ZIP completo. `index.html` conserva la bienvenida y selector GTL AI con las tres propuestas. `atmosphere-review.html` permite comparar 08E Bugfix02 / 08F en escritorio y móvil, o revisar solo 08F. La comparación abre directamente la llegada para observar el ambiente; los enlaces a las propuestas completas y el hub reproducen las intros normales.

Se puede abrir como archivo local, con el arreglo de mensajería de Bugfix01 conservado, o servir por HTTP: `python3 -m http.server 8000`. No requiere dependencias para utilizar la demo. Las fotos de prensa continúan remotas; su carga no bloquea la intro ni la atmósfera. `intro-review.html`, `design-review.html` y `brand-lab.html` conservan las revisiones anteriores.

## Continuidad acumulada

| Etapa | Resultado que se conserva |
|---|---|
| 08A | Tres identidades: Margen y memoria, Contrapunto y Atlas abierto; firmas, símbolos y fuentes locales |
| 08B | Composición editorial, carteles y atlas, con arte original y referencias de prensa atribuidas |
| 08C | STAR reales de dos highlights: pliego con pestañas, carteles con reverso y atlas con focos |
| 08D | No se recibió esta etapa; se conserva la navegación disponible, sin atribuirle implementación o aprobación |
| 08E | Tres aperturas distintas que se convierten en sus STAR, con omisión, reducción de movimiento y activación desde el hub |
| Bugfix01 | Activación file: válida, estado de envío coherente y cambio de opción con un clic |
| Bugfix02 | Inicio continuo de 01/02; duraciones y ciclo de vida de las intros conservados |
| 08F | Atmósfera sutil detrás del contenido y activada solo cuando corresponde |

## Decisiones atmosféricas

| Opción | Gesto | Respuesta | En reposo o movimiento reducido |
|---|---|---|---|
| 01 · Margen y memoria | Fibras quietas y transparencia cálida sobre papel | Desplazamiento pequeño con scroll; seguimiento de atención con ratón fino | Papel y luz estáticos, sin bucle |
| 02 · Contrapunto | Tinta marginal y marcas de registro discretas | Presión leve al enfocar, señalar o abrir el cartel | Borde tenue estático, sin RAF |
| 03 · Atlas abierto | Plano de la retícula aceptada | Profundidad leve ligada al scroll del hero | Retícula estática, sin bucle |

Las capas tienen `aria-hidden=true` y `pointer-events:none`. Se mantienen debajo del contenido, sin modificar fotos, textos, foco ni colores tipográficos. No simulan fenómenos reales de cocina o local. No hay partículas, audio, vídeo, filtros blur ni imágenes nuevas.

## Activación y rendimiento

Los archivos de hub, puente, intro y STAR son idénticos a Bugfix02. El controlador atmosférico observa sus estados sin modificarlos. Mientras hay intro, opción inactiva, documento oculto, pagehide o zona fuera de vista, queda suspendido y cancela su RAF pendiente. Durante una transición de STAR o con movimiento reducido queda tranquilo y desconecta las entradas de movimiento.

01 y 03 actualizan solo ante entradas, agrupadas en un RAF pendiente; update no programa otro. 02 responde con CSS a los controles existentes. En móvil no se depende de hover. Sin scripts no se monta ninguna capa y se conserva la lectura estática anterior. La retícula de 03 no crea un contexto de apilamiento nuevo durante la intro; se comprobó que la llegada original sigue funcionando.

## Contenido y medios

Solo se conservan H01 y H02, narrativos y sin presentarlos como premios. El conjunto del atlas no añade un highlight. Koldo Miranda sigue como firma editorial; no se afirma una marca paraguas, propiedad común, carta, equipo o local compartidos.

H01 mantiene E001–E004/E013/E014 y el territorio documentado de cocina española, tapas y ultramarinos. H02 mantiene E007–E009 y una asociación periodística limitada con la tortilla vaga. No se añaden receta, colaboración, carta actual, ingredientes, precios, horarios, reservas, premios, Michelin, servicios ni testimonios.

M001/M005/M006/M008 conservan URLs, créditos, fechas y límites. M007 sigue únicamente en su bloque externo de Sacha; no se incorpora al STAR o a las capas. Los SVG abstractos anteriores siguen identificados como arte de demo. No se descargaron ni redistribuyeron fotografías remotas como activos del cliente.

## Archivos y revisión

Nuevos recursos: `atmosphere/atmosphere-08f.css`, `atmosphere/atmosphere-08f.js`, `atmosphere/atmosphere-review.js` y `atmosphere-review.html`. Los tres HTML añaden únicamente las dos referencias a la mejora. `baseline-08e/` conserva una copia exacta y suficiente de la base para la comparación, sin baselines recursivos.

Leer `README_08F.md`, `ATMOSPHERE_SYSTEM_08F.md`, `VERIFICACION_08F.md`, `VALIDACION_ESTATICA_08F.json` y `MANIFEST_SHA256_08F.txt`. `contexto_08F/` conserva el encargo y el handoff anterior. Los informes y capturas de etapas anteriores son históricos. El inventario de evidencia original sigue en `contexto_08A/01_Paquete_Canonico/`.

Se revisaron las tres atmósferas en escritorio/móvil, el reposo, estados abiertos, scroll, entradas directas con intro y retorno desde el hub. Reducción de movimiento, entrada sin puntero fino y ausencia de scripts se comprobaron con fixtures controlados; no equivalen a preferencias nativas o dispositivos físicos. Las dos regresiones ejecutables se entregan y pasan. No se publica ni se envía a terceros.

## 08G · Pasada editorial acotada

Se refinan los estados de los controles: pestañas del pliego con respuesta tenue, cartel abierto con botón de tinta sobre papel y foco visible, selección del atlas con filete ámbar. Se equilibran titulares y medidas de lectura sin añadir contenido. El recurso nuevo es `polish/polish-08g.css`; los HTML solo añaden su referencia.

Primera pasada aplicada y estado abierto de 02 inspeccionado en Chromium. Segunda pasada refuerza la especificidad del estado abierto para que no dependa de estilos anteriores. El alcance visual de esta revisión es acotado: no se presenta como una nueva comprobación exhaustiva de todos los dispositivos o estados. Las regresiones técnicas de atmósfera y activación pasan. Los informes 08F describen la revisión visual amplia anterior. No cambian intro, STAR JS, ambiente, hub, medios, hechos ni duraciones.


## 08G Bugfix01 — intro details
- Intro 01: hold the title at its starting position during its reveal; hide the armed signature to avoid a pre-animation flash.
- Intro 02: complete the title exit at 1100ms, before paper panels enter at 1150ms. Overall intro duration unchanged.
- Checked the opening and middle review frames in browser. Activation and atmosphere regression scripts pass.


## 08G Bugfix02 — first-load title flash
- Give intro 02’s signature the same clipped CSS baseline as its first animation keyframe, preventing visibility before JavaScript starts.
- Playback keyframes and timings unchanged.


## 08G Bugfix03 — prepare views from the cover
- Load all three iframe documents as soon as welcome.js initializes, rather than waiting for selection.
- Existing activation bridge keeps hidden intros armed; they play only when shown.
- Activation regressions now also verify cover preloading without hidden playback under file: and https:. Activation and atmosphere suites pass.


## 08G Bugfix04 — visible first pose
- Intro 01 title is fully visible in both the armed state and animation time zero, at the same fixed position. Removes the empty initial fade rather than changing load timing again. Later exit and overall duration preserved.
- Added intro-frame=first review pose at 0ms. Static state assertions and activation regression pass. Browser preview was unavailable in this session.


## 08H — Curated media update
See README_08H.md for placements, validation and playback behavior. This update supersedes earlier placeholder/absence notes for the replaced media only; all canonical historical evidence remains attributed.


## 08H Bugfix01 — subtítulos, imagen y bucles
- Subtítulos de intro 01 ocultos también antes de iniciar JavaScript, coincidiendo con su primer fotograma: una única aparición.
- Retirado el primer plano de cocina rechazado. Sustituido por la toma del espacio a los 22s del mismo reel; actualizados textos, recortes, contexto dinámico y póster del video.
- Todos los videos con autoplay, muted, loop y playsinline. Se reproducen automáticamente cuando están visibles, tras la intro, y se reanudan al volver a la vista. Pausan al ocultarse o cambiar de propuesta; el clip de prensa arranca al desplegarse. Controles nativos conservados.
- Verificación en navegador: subtítulo a 0ms con opacidad 0; video reproduciendo sin clic, muted y loop activos, tiempo avanzando; nueva imagen revisada en atlas. Regresiones de activación y reproducción pasan; rutas locales y atributos de los nueve videos comprobados.
- Esta sección sustituye la descripción anterior de reproducción manual y una sola reproducción simultánea.


## 08H Bugfix02 — route photos and seamless video
- Replaced both illustrations in option 03’s route cards: golden cocktail for La Favorita, room still for G&V. Updated captions and image crop rules.
- Removed native video controls throughout all three live proposals; retained muted autoplay, loop and playsinline behavior.
- Browser verified route cards and video playing without controls (time advancing). Media lifecycle and navigation regressions pass. All nine live video placements checked for no controls and retained autoplay/loop/muted.
