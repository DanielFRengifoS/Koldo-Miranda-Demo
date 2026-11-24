# Verificación 08B

23.11.2026 · Revisión local en Chromium. No se publicó ni se enviaron materiales a terceros.

## Comparación visual y segunda pasada

Se abrieron 08A y 08B a los mismos viewports internos: **1440 × 1100** y **390 × 844**. Se usaron tanto una vista de QA como la comparación incluida en `design-review.html`. Las miniaturas se escalan para caber en pantalla; el viewport interno conserva el tamaño seleccionado. En este Chromium el scrollbar ocupa 15 px, por lo que el ancho útil medido fue 1425/375 px.

Se compararon las tres entradas en reposo, antes y después, en escritorio y móvil. También se abrieron las zonas editoriales posteriores al hero de las tres opciones. No se depende de una animación para explicar el contenido.

### Ajustes de la segunda pasada

- **01:** el primer montaje móvil dejaba los nombres después del pie del retrato. Se adelantaron antes de la imagen. La tira de ambos nombres quedó aproximadamente en y=387,63–466,22 dentro del viewport de 844 px. El retrato usa `contain` en proporción 920/613, conserva su fuente y su pie completo.
- **02:** se alinearon las cajas de título y los visuales. En la revisión final a 1440 px, los carteles midieron 676,5 px de ancho y 1048,19 px de alto cada uno. El mosaico y la gráfica comenzaron ambos en y=568,89 y midieron 365 px de alto. Se mantuvo la muestra móvil de los dos nombres (aprox. y=424,28–532,28). El texto central de la gráfica se cambió a «Tortilla / Vaga» como referencia pública, sin repetir el nombre principal ni representar un plato.
- **03:** se redujeron la altura de las cubiertas y algunos espacios móviles para conservar la comparación secundaria en la entrada. Las dos tarjetas finales midieron 163 × 397,09 px, de y=311,63 a 708,72. «Comparar primero» quedó en y=800,31–831,11, visible dentro de 844 px. Las dos rutas permanecen equivalentes.

Estas medidas registran el estado observado; no son garantías de posición con cualquier fuente, navegador, zoom o traducción.

## Interacciones

- **Menú 01:** al abrir, `aria-expanded=true`; al elegir La Favorita, `false`. Se conservan sus anclas.
- **Ruta Gallinas 03:** contexto con título «Gallinas y Valientes», `aria-expanded=true` en la ruta elegida y `false` en La Favorita.
- **Ruta La Favorita 03:** contexto correcto y enlace de detalle `#detalle-favorita`.
- **Comparación 08A/08B:** botones de propuesta y ancho actualizan el estado visible, las fuentes de ambos iframes y la anchura de comparación. Se probaron las tres opciones y ambos modos.
- **Hub:** después de terminar la transición inicial y retirar el estado `inert`, las pestañas 02 y 03 quedaron seleccionadas al pulsarlas (`aria-selected=true`). El documento 03 informó `data-gtl-activation=active`. En una recarga directa de `#03`, los iframes no abiertos permanecían sin cargar, como en la base.

## Fallo de imágenes externas

Se crearon copias temporales de QA de 01 y 02 que reemplazaban las URLs de imagen por una ruta inexistente; esas copias se eliminaron del ZIP.

- En 01 se observó `data-fallback-applied=true`, SVG local cargado y aviso: «La referencia remota no cargó en esta conexión; se muestra una composición gráfica de demo». La alternativa conserva el texto y se identifica como arte tipográfico, sin simular un retrato.
- En 02, M005, M001 y M008 informaron `data-state=error`. Sus bloques mostraron el contexto de referencia y los enlaces de fuente. La composición de Gallinas y Valientes siguió siendo local y abstracta.

No se descargaron imágenes de prensa para incluirlas como archivos. Las capturas de navegador se utilizaron para QA interno; las capturas históricas incluidas en carpetas 05/07 no son evidencia nueva de 08B.

## Integridad estática

`VALIDACION_ESTATICA_08B.json` comprueba:

- IDs originales conservados y sin duplicados en cada página de opción.
- Recursos locales y anclas de páginas principales y de comparación resueltos.
- SVG válidos como XML.
- URLs originales de imágenes remotas y enlaces de fuente conservados.
- Firmas, símbolos, fuentes, ilustraciones y CSS/JS anteriores sin cambios por SHA-256.
- Una zona `star` y otra `navigation` por opción, separadas y documentadas.
- Párrafos originales de las tres opciones conservados.

Los cinco scripts originales y el nuevo `design-review.js` pasan `node --check`. El ZIP final tiene comprobación de integridad y un manifiesto SHA-256.

## Límites

No se validan hechos actuales, permisos fotográficos, datos operativos, reservas, publicación, Safari/Firefox, dispositivos físicos ni lectores de pantalla reales. El soporte de movimiento reducido se conserva por código; no se hizo emulación de esa preferencia en esta revisión. No hay intro 08E ni nuevo componente STAR final.
