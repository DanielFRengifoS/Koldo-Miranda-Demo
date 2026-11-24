# Handoff 08 · Koldo Miranda

**Entrega vigente:** 08C · Tripleta STAR. **Base:** la tripleta 08B entregada en esta conversación. **Estado:** demo interna con dos highlights narrativos; pendiente de validación del cliente. No publicar ni enviar.

## Abrir

1. Descomprimir el ZIP completo.
2. `design-review.html`: comparar **08B / 08C** con las tres opciones a 1440 × 1100 o 390 × 844. En la versión 08C, cambiar capítulos, revelar reversos o acercar territorios.
3. `index.html`: portada y selector GTL AI conservados, con las tres opciones 08C.
4. `brand-lab.html`: identidad 08A conservada; enlaces a las webs vigentes.

Web estática, sin backend ni dependencias por instalar. SVG, fuentes y controladores son locales. Las fotos de prensa continúan remotas y pueden mostrar su alternativa gráfica. Si el navegador restringe iframes o fuentes en `file://`, servir la carpeta con un servidor estático local.

## Continuidad acumulada 08A → 08B → 08C

| Opción | Marca 08A | Composición 08B conservada | STAR 08C | Navegación conservada para 08D |
|---|---|---|---|---|
| 01 / B03 | Margen y memoria: tinta vino, romana/cursiva, KM abierto | Titular editorial y retrato M006; contexto, capítulos y comparación | Pliego vivo en el hero; H01 con M005 y H02 con geometría original | Cabecera, `#la-favorita`, `#gallinas-y-valientes`, `#comparar` y sus retornos |
| 02 / A03 | Contrapunto: condensada, rosa/lima/rojo/negro | Díptico de carteles, trama, archivo y gráfica | El propio díptico muestra frente visual o reverso documental por cartel | Enlaces originales en `.poster-more`; `#comparacion`, detalles y retorno |
| 03 / C01 | Atlas abierto: cobalto, geometría y marcos | Arte original, tarjetas LF/GV, selección contextual y detalles | Atlas continuo con conjunto y focos H01/H02 | `.atlas-routes`, `#contexto`, `#comparar`, `#detalle-favorita`, `#detalle-gallinas` |

El STAR celebra y revela contenido. La navegación permite continuar hacia comparación y detalles. Los controles del STAR no son enlaces de reserva ni sustituyen las rutas.

## Inventario y trazabilidad

Solo hay H01 y H02; ambos son narrativos y no representan premios. El conjunto del atlas es un estado, no un tercer highlight.

- **H01:** E001–E004, E013 y E014, territorio público de cocina española/tapas y ultramarinos. La prensa histórica no confirma el estado actual.
- **H02:** E007–E009; asociación periodística con la tortilla vaga y verificación limitada. No se confirma receta ni colaboración con Sacha.
- Los componentes conservan `data-highlight` y `data-evidence-ids` donde corresponde. En 01, paneles `folio-panel-h01/h02`; en 02, carteles `data-star-poster=h01/h02`; en 03, lecturas `atlas-reading-h01/h02`.
- El inventario completo E001–E018 sigue en `contexto_08A/01_Paquete_Canonico/CONTENIDO.json`.

## Contrato técnico para 08D/08E

Los componentes se identifican con `[data-star="folio"]`, `[data-star="posters"]` y `[data-star="atlas"]`. Cada uno registra `data-star-state` y `data-motion` (`idle` / `changing`). Son atributos de interfaz, no datos de negocio.

- **Pliego:** estado `h01` o `h02`; pestaña y panel asociados; selección automática al usar flechas/Home/End.
- **Carteles:** `closed`, `h01`, `h02` o `h01+h02`; cada botón revela su región y alterna con el frente visual. Se mantienen fuentes y créditos.
- **Atlas:** `overview`, `h01` o `h02`; el conjunto no es un nuevo highlight. Los controles cambian foco y lectura, sin ejecutar una ruta.

`star/star-08c.js` respeta `window.GTLActivation`. Al salir de una opción u ocultarse el documento, termina las animaciones y limpia los temporizadores; al volver conserva la elección y no repite la transición. La comparación interna envía la activación mediante el puente existente al cargar sus iframes. Los scripts del hub y el puente no se modifican.

Duraciones de producción: 700 / 680 / 750 ms. La reducción de movimiento conserva el cambio de contenido y evita la transformación. No hay autoplay ni intro de marca final. 08E debe partir de estas composiciones de reposo.

## Protección de contenido y medios

La reorganización conserva párrafos, IDs originales, enlaces de fuentes y medios de 08B. Los CSS/JS anteriores, portada, selector, firmas, fuentes y SVG existentes permanecen sin cambios de archivo. Los estilos e interacción de esta etapa están aislados en `star/` y en la estructura de los tres HTML.

- M005 sigue siendo fotografía de un rótulo ilustrado, no logo maestro; se muestra con fecha, fuente y límite. M001/M008 conservan su atribución en el cartel.
- M006 y su pie continúan completos después del STAR de 01.
- M007 permanece en el bloque externo de Sacha de 01, con advertencia. No aparece en el STAR.
- El arte de Gallinas y Valientes y del atlas es abstracto, original y explícitamente no fotográfico. No representa platos, recetas, interiores o planos reales.
- No se descargaron imágenes remotas para redistribuirlas.
- No se añadieron méritos, Michelin, carta vigente, ingredientes, precios, horarios, equipo, testimonios, servicios ni reservas conectadas. No se afirma una marca comercial compartida.

## Archivos históricos y revisión

`contexto_08C/HANDOFF_08_08B_HISTORICO.md` conserva el handoff anterior. Los archivos de código de la revisión anterior se guardan como texto histórico, no como páginas ejecutables. `baseline-08a/` y `baseline-08b/` son fuentes identificadas de etapas previas, no opciones adicionales.

Leer `STAR_SYSTEM_08C.md`, `VERIFICACION_08C.md`, `VALIDACION_ESTATICA_08C.json` y `MANIFEST_SHA256_08C.txt` para esta entrega. Los informes/capturas 05–08B son históricos; no se presentan como pruebas nuevas de 08C.

Sin publicación ni envío. La revisión Chromium y los escenarios controlados de QA no equivalen a aprobación del cliente, permisos de imágenes ni comprobación exhaustiva de todos los navegadores y dispositivos.
