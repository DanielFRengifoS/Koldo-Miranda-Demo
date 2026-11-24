# Handoff 08 · Koldo Miranda

**Entrega vigente:** 08F · Tripleta Atmosphere. **Base:** `koldo_miranda_08E_Tripleta_Intros_Bugfix02.zip`. **Estado:** demo interna pendiente de validación del cliente. No publicar ni enviar.

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
