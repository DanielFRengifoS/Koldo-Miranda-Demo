# Koldo Miranda · STAR System 08C

23.11.2026 · Demo interna. Base: `koldo_miranda_08B_Tripleta_Design.zip`. No publicar ni enviar.

## El inventario manda

El contrato y `CONTENIDO.json` permiten **dos** highlights narrativos:

- **H01 / La Favorita:** ultramarinos y cocina española de raíz. Evidencias E001–E004, E013 y E014. La cobertura de 2024 no confirma carta, inventario ni estado actuales.
- **H02 / Gallinas y Valientes:** la tortilla vaga como referencia. Evidencias E007–E009. La nota de Única FM del 06.11.2026 se limita al titular y la bajada; no confirma receta, ingredientes, colaboración con Sacha, fotografías propias ni servicio.

No se añade un tercer highlight. El conjunto del atlas es un estado de lectura, no un tercer elemento del inventario. No se utiliza Michelin, ni se convierten los candidatos en premios o méritos.

## Tres experiencias distintas

| Opción | Idea del STAR | Estado inicial | Qué revela una elección | Regreso |
|---|---|---|---|---|
| 01 · Margen y memoria | Un pliego vivo: una hoja editorial completa por capítulo | H01 / La Favorita | Cambian imagen, titular, síntesis, fuente y alcance; H02 utiliza arte abstracto y declara la evidencia limitada | Elegir el otro capítulo; controles permanentes y teclado con flechas/Home/End |
| 02 · Contrapunto | Dos carteles con frente visual y reverso editorial | Ambas láminas visibles | Cada control revela el relato y las pruebas del mismo cartel en la posición de su imagen; el otro conserva su estado | «Volver a la lámina»; se pueden abrir los dos relatos simultáneamente |
| 03 · Atlas abierto | Un atlas continuo, con conjunto y focos espaciales | Dos territorios equivalentes | Cambia el equilibrio de la composición y se amplía la ilustración; aparece la lectura documentada del territorio | «Ver el conjunto», siempre visible |

### 01 · Pliego vivo

La hoja seleccionada reúne imagen y texto como una unidad. H01 utiliza M005: fotografía de un rótulo ilustrado publicada por 7 Caníbales el 17.10.2024. Se contiene completa y conserva fuente, crédito disponible, fecha y advertencia: **no es un logo maestro ni un activo autorizado**. H02 utiliza la geometría original de demo, identificada como abstracción, no como plato o local.

La firma y la paleta 08A se conservan. Se compactó el encabezado 08B para que el highlight ocupe la entrada; el retrato M006 y la lectura contextual siguen completos después del STAR. Los capítulos, highlights de cierre y comparación existentes permanecen en la página.

En la segunda pasada se redujo el encabezado del componente, se sustituyó el bloque de pestaña relleno por un subrayado editorial y se dio contraste completo al capítulo inactivo. El cambio de hoja utiliza una transición breve de opacidad y perspectiva. El borde de papel contiene la transformación para evitar desbordamiento horizontal.

### 02 · Carteles con reverso

El díptico aceptado de 08B se convierte en el componente protagonista; no se añade otra galería por encima. Cada cartel mantiene nombre, frase del highlight, imagen/gráfica, fuentes y límites.

La primera prueba colocaba el control demasiado abajo. La segunda pasada adelantó **«Revelar el relato»**: al activarlo, la imagen deja su lugar al reverso editorial, con texto documentado, límites y acceso a la fuente. Se puede volver al frente. Cada cartel conserva su estado independientemente; esto permite leer ambos reversos sin imponer una secuencia.

H01 conserva M005/M001/M008 como referencias de prensa. H02 conserva la elipse y los planos originales alrededor de «Tortilla / Vaga», con aclaración de que no representan un plato. Los créditos generales de las referencias permanecen fuera del cambio de frente/reverso. Los enlaces de detalle originales se sitúan después del componente, separados de la interacción del STAR.

### 03 · Atlas de foco

Las ilustraciones originales de archivo y geometría forman un campo continuo. La Favorita se reconoce como un imaginario de ultramarinos; Gallinas y Valientes como una referencia pública con otra gramática. No son planos de ubicación, fotografías de los locales ni imágenes de preparaciones reales.

En escritorio, el foco amplía el territorio elegido y su ilustración, manteniendo el otro como contexto. En móvil, el foco ofrece una superficie completa para la ilustración elegida, mientras los tres controles siguen visibles. La lectura inferior cambia con la elección y conserva fuente y alcance. «Ver el conjunto» restituye las superficies equivalentes.

Las tarjetas de ruta de 08B, su selección contextual, detalles y comparación se trasladan más abajo. Conservan el comportamiento existente. Elegir un highlight en el STAR no ejecuta la navegación, no reserva y no fuerza una ruta.

## Movimiento y accesibilidad

- Sin autoplay, carrusel, temporizador de avance, scroll obligatorio, arrastre obligatorio ni intro 08E.
- Duraciones de producción: pliego 700 ms, reverso 680 ms, foco 750 ms. Solo tras una elección del visitante.
- 01 usa pestañas y paneles asociados, con `aria-selected`, foco visible, flechas, Home y End.
- 02 usa botones nativos con `aria-expanded`, `aria-controls` y regiones nombradas. Enter/Espacio abren y cierran.
- 03 usa botones de estado `aria-pressed`, selección por toque/clic y flechas/Home/End.
- `prefers-reduced-motion` desactiva animaciones/transiciones y la lógica deja el componente en estado estable.
- Al quedar inactiva la opción en el hub o al ocultarse el documento, se terminan las transiciones y se limpian los temporizadores. La elección se conserva; al volver no se reproduce de nuevo.
- Si el controlador no se ejecuta, los dos relatos quedan en el HTML, visibles, y no se muestran controles sin función. Los enlaces de detalle existentes siguen disponibles.

## Medios y protección

Se conservan los medios, fuentes y créditos de 08B, las firmas/fuentes/SVG de 08A, los CSS anteriores, scripts de opción y contrato de activación. No se descargan ni redistribuyen imágenes de prensa. M007 sigue únicamente en su contexto externo de Sacha en 01; no se usa como imagen del STAR ni de Gallinas y Valientes.

Las síntesis nuevas proceden del inventario canónico. No hay nuevos hechos investigados, carta actual, horarios, precios, ingredientes, testimonios, equipo, dirección operativa ni reservas funcionales.

## Archivos

- `star/star-08c.css`: los tres sistemas visuales y movimiento reducido.
- `star/star-08c.js`: selección local, revelación, teclado y ciclo de activación.
- `design-review.html`: comparación interactiva 08B / 08C, a 1440 y 390 px.
- `baseline-08b/`: fuente de la versión base para esa comparación; no es otra propuesta.
- `HANDOFF_08.md` y `VERIFICACION_08C.md`: continuidad, integración y resultados observados.
