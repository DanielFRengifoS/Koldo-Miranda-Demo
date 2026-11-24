# Verificación 08A

23.11.2026 · Chromium · revisión local, sin publicación.

## Viewports y composición

Se abrieron las tres opciones dentro de viewports de iframe de 390 × 844 y 1440 × 1100. El scrollbar del navegador ocupa 15 px; el ancho útil medido fue 375/1425 px. La comprobación no equivale a un teléfono físico ni a una matriz multinavegador.

- **01:** firma completa, dos nombres presentes en la entrada móvil, retrato contextual con fuente y crédito. En escritorio, retrato M006 y dos imágenes de 7 Caníbales cargaron durante la revisión; otras referencias permanecían pendientes de red. Sin desbordamiento horizontal en los anchos revisados.
- **02:** los dos nombres aparecen en la muestra inicial móvil. En escritorio, los dos paneles midieron 712,5 px de ancho y 1008,16 px de alto en la revisión; no se da mayor superficie a uno. No se observó desbordamiento horizontal.
- **03:** las dos tarjetas móviles midieron 339 px de ancho. Sus cajas ocuparon aproximadamente y=316,88–497,88 y y=509,88–690,88 dentro del viewport de 844 px. Son equivalentes y visibles completas. La versión de escritorio conserva dos tarjetas paralelas y la salida «Comparar primero».

## Interacciones comprobadas

- Menú móvil 01: `aria-expanded` pasó a `true` al abrir y a `false` al elegir La Favorita.
- Ruta 03 Gallinas y Valientes: panel contextual visible, título correcto y enlace seleccionado con `aria-expanded=true`.
- Ruta 03 La Favorita: título contextual correcto y enlace seleccionado con `aria-expanded=true`.
- Hub: la portada abrió el selector; se cambiaron las pestañas 02 y 03. La 03 quedó seleccionada. El contrato indicó 01/02 `inactive` y 03 `active`; el documento de 03 informó `data-gtl-activation=active`.
- Fallback 01: se creó una copia temporal de QA con URLs de imagen inexistentes. Se observó `data-fallback-applied=true`, arte local completo sin recorte y el aviso «La referencia remota no cargó en esta conexión; se muestra una composición gráfica de demo». El rótulo de imagen cambia visualmente a arte tipográfico. La copia temporal se elimina del entregable.
- Lámina web: los tres símbolos de reducción se cargaron a 24 × 24 px. La página permite comparar color, negro, blanco, 40/96 px y estudios previos.

## Integridad y entrega

- Los recursos locales y anclas de las páginas principales se comprobaron por resolución de rutas.
- Todos los SVG de la entrega se analizaron como XML.
- Los cinco scripts existentes pasaron `node --check`.
- Se contrastaron SHA-256 de portada, CSS/JS del hub, activación, JS de las opciones y SVG originales: sin cambios. Resultado en `VALIDACION_ESTATICA_08A.json`.
- La lámina PNG es un render del SVG original, no una captura de navegador ni una imagen de prensa descargada.
- Los documentos canónicos y de scouting se incluyen como contexto; sus capturas son históricas de la base.

## Alcance pendiente

No se comprueban permisos fotográficos, hechos actuales, datos operativos, reservas, lectores de pantalla reales ni Safari/Firefox. Las fotos externas pueden dejar de cargar. Las firmas y cubiertas son propuestas originales de demo pendientes de validación; no son logos oficiales del cliente. Sin intro 08E, publicación ni envío a terceros.
