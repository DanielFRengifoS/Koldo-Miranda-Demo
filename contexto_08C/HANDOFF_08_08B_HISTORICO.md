# Handoff 08 · Koldo Miranda

**Entrega vigente:** 08B · Tripleta Design. **Base utilizada:** `koldo_miranda_08A_Tripleta_Brand.zip`, la última tripleta entregada en esta conversación. **Estado:** demo interna pendiente de validación del cliente. No publicar ni enviar.

## Abrir

- `index.html`: portada y selector GTL AI conservados; las tres opciones cargan las composiciones 08B.
- `design-review.html`: comparación interactiva **08A / 08B** a la misma anchura, con las tres opciones y modos 1440 / 390 px.
- `brand-lab.html`: identidad 08A conservada; sus enlaces llevan a las webs actuales 08B.
- `README_08B.md`, `DESIGN_SYSTEM_08B.md` y `VERIFICACION_08B.md`: alcance, decisiones y pruebas de esta etapa.

Descomprimir el ZIP completo. Es una web estática con SVG y fuentes locales. Las fotografías siguen siendo remotas y pueden mostrar las alternativas gráficas si no cargan. Si el navegador restringe los iframes bajo `file://`, servir la carpeta con un servidor estático local. No requiere backend ni instalación de dependencias.

## Composiciones y continuidad

| Opción | 08B | Zona para el futuro STAR | Navegación secundaria, más abajo |
|---|---|---|---|
| 01 · Margen y memoria / B03 | Portada en tinta vino; titular de revista a todo el ancho; retrato horizontal sin recorte y lectura lateral; capítulos posteriores con escalas propias | `#hilo`, inmediatamente después del hero: la frase editorial y el contexto existente, sin galería nueva | `#comparar`, después de ambos capítulos; enlaces de retorno y capítulos conservados |
| 02 · Contrapunto / A03 | Dos carteles enfrentados: archivo en rosa/cursiva frente a gráfica lima/condensada; trama original; visuales alineados y superficies equivalentes | `.highlights#relatos`, inmediatamente después del díptico: se movió íntegro el bloque aceptado H01/H02 | `.details`, con sus rutas `#la-favorita` y `#gallinas-y-valientes` y salida a `#comparacion` |
| 03 · Atlas abierto / C01 | Atlas desplegado: pregunta lateral, dos cubiertas equivalentes, planos cobalto y papel; en móvil las rutas se muestran en paralelo | `.atlas-interlude`, después del hero: síntesis tipográfica de los dos territorios; sin galería, premio ni interacción nueva | `#comparar`, tras el interludio y el contexto de la ruta elegida; detalles y retorno conservados |

Las tres zonas de continuidad llevan `data-future-slot="star"`; las tres zonas secundarias llevan `data-future-slot="navigation"`. Son puntos de integración para las etapas siguientes, no componentes finales nuevos. No se añade una etiqueta de placeholder vacía a la interfaz.

## Qué cambió y qué se protege

Se modificaron los tres HTML de opción para reorganizar el contenido y añadir las hojas de composición `design-08b.css`. Se mantuvieron intactos los archivos de identidad 08A: firmas, símbolos, fuentes, variaciones monocromas y cubiertas. También siguen idénticos los CSS previos, scripts de opción, portada, CSS/JS del hub, SVG heredados y `activation-bridge.js`.

- **01:** la imagen M006 y su pie completo se movieron juntos. El encuadre usa la proporción 920/613 y `object-fit:contain`. El titular tiene el protagonismo inicial; la firma es parte de la cabecera editorial. En móvil ambos nombres aparecen antes de la imagen. H01/H02 permanecen en sus capítulos.
- **02:** se adelantaron las imágenes/ilustración dentro de los carteles; ambos visuales tienen la misma altura y posición de inicio en escritorio. Se conserva la muestra móvil inicial de ambos nombres. El texto «TORTILLA / VAGA» de la composición es una referencia tipográfica pública con E008 y aclaración abstracta; no representa receta ni plato. El bloque de highlights existente se mueve sin reescribir sus contenidos.
- **03:** las cubiertas LF/GV de 08A se muestran completas con `contain`; sus acciones y selección conservan el comportamiento anterior. El interludio recupera la síntesis canónica, con H01/H02 y evidencias en atributos de trazabilidad. Las ilustraciones heredadas siguen en contexto y detalle.

No se recibieron aparte objetivos 04 adicionales; se trabajó con el prompt 08B, la tripleta 08A y los documentos canónicos/07B/scouting incluidos. No se añadieron nuevos hechos públicos.

## Medios y verdad del cliente

Se conservan todos los `src` de imágenes de prensa, enlaces de atribución, créditos, fechas y nombres presentes en 08A. M001/M005/M006/M008 siguen siendo `solo_referencia`, no medios cedidos por el cliente. M005 nunca se convierte en logo maestro. M007 continúa únicamente en 01, como fotografía externa de Sacha y con su advertencia; no se integra en 02/03.

No se descargaron fotografías externas para redistribuirlas. La trama de imprenta y los planos diagonales son geometría original local en `design/`, no fotografías generadas. Las referencias de Gallinas y Valientes mantienen su verificación limitada.

No se añaden premios, claim Michelin 2006, carta, ingredientes, precios, horarios, dirección operativa, disponibilidad, reservas ni formularios conectados. No se afirma una marca comercial común, equipo, carta o sociedad compartidos. La firma Koldo Miranda sigue siendo un tratamiento editorial de la demo.

## Próximas etapas

- El futuro STAR puede ocupar los puntos de integración señalados, conservando los dos highlights documentados y sus límites. No fabricar un tercero.
- La futura navegación puede intervenir los módulos secundarios identificados sin absorber el STAR ni eliminar la tarea central de cada opción.
- La intro 08E deberá terminar en estas composiciones de reposo. No está desarrollada aquí.
- Conservar `GTLActivation`: una opción inactiva en el hub no debe reproducir una futura intro. Respetar `prefers-reduced-motion`.

## Validación y archivos históricos

`VERIFICACION_08B.md` detalla la comparación a igual viewport, segunda pasada, pruebas de navegación, fallback e integridad. `VALIDACION_ESTATICA_08B.json` y `MANIFEST_SHA256_08B.txt` describen los archivos de esta entrega.

`baseline-08a/` contiene solo las fuentes necesarias para comparar visualmente 08A; no es una cuarta propuesta. Los informes 05/06/07B/08A y sus capturas son históricos, no capturas nuevas de 08B. El handoff anterior se conserva como `contexto_08B/HANDOFF_08A_HISTORICO.md`.

Sin publicación. La revisión se realizó en Chromium; no implica validación del cliente, permisos fotográficos ni comprobación de todas las plataformas o dispositivos.
