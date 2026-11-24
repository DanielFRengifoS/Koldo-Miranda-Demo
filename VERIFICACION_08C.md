# Verificación 08C

23.11.2026 · Chromium · Demo local. Sin publicación ni envío.

## Diseño y segunda pasada

Se abrieron las tres opciones en reposo y después de elegir, usando viewports de iframe de **1440 × 1100** y **390 × 844**. En este Chromium el scrollbar ocupa 15 px: el ancho útil observado fue 1425/375 px. Las dimensiones de la miniatura no sustituyen las del viewport interno.

- **01:** se revisaron H01 con M005 y H02 con arte original. La segunda pasada redujo el encabezado, dio prioridad al contenido, cambió la señal de selección a un subrayado editorial y mantuvo contraste completo en los dos controles. Se corrigió el espacio de lectura al ocultar saltos de línea y se contuvo la perspectiva dentro de la hoja.
- **02:** el primer montaje dejaba los controles por debajo de 1100 px. Se pasó a un frente visual y un reverso editorial en la misma posición del cartel. En la segunda pasada a 1440 px, ambos controles empezaron en y=665,89. Se revisaron frente, reverso, ambos relatos abiertos y retorno individual.
- **03:** se revisaron el conjunto y los focos. La segunda pasada amplía también la ilustración, no solo el ancho del territorio. En el foco H01 de escritorio se observaron una caja de ilustración activa de 340 px de alto y la otra de 240 px. En móvil se mantiene el control de ambos nombres y el regreso al conjunto; el territorio elegido utiliza una superficie completa.

Se comprobaron los anchos útiles sin desbordamiento horizontal en los estados móviles observados. También se observó ancho y scroll iguales durante una apertura de pliego en el hub después de contener la perspectiva (1348/1348 px en ese iframe).

## Estados intermedios

Para inspeccionar transiciones se utilizaron copias temporales con **30 s** de duración. La producción conserva **700 / 680 / 750 ms**. No se modificó el contenido para simular una captura; se ralentizó el movimiento del mismo componente. Las copias no se entregan.

Se observaron estados intermedios reales mediante imagen y estilos calculados:

- Pliego H02: `data-motion=changing`, opacidad aproximada 0,752 y matriz de perspectiva aún distinta de la final. En el reposo posterior: opacidad 1, transformación `none` y estado `idle`.
- Reverso H01: opacidad aproximada 0,977, recorte residual de 1,71 % y transformación todavía activa, antes de llegar al final.
- Atlas H02: columnas aproximadas 319,64/938,36 px y altura de ilustración activa de 315,73 px, entre los 240 px iniciales y los 340 px finales.

Son muestras intermedias, no una medición cuadro a cuadro ni una captura garantizada al 50 % exacto.

## Controles y teclado

- **01:** clic en H02; ArrowRight desde H01; Home desde H02. Se comprobaron selección, panel visible y ocultación del anterior. Hay pestañas, paneles asociados y foco visible.
- **02:** clic, Enter y Espacio. Se observaron `h01`, `h01+h02` y `h02`; cerrar uno no cerró el otro. El frente se oculta al revelar el reverso y reaparece al volver. Los controles identifican el restaurante en su nombre accesible.
- **03:** clic en H01/H02, End para pasar al último foco y Home para volver al conjunto. La lectura visible corresponde al foco seleccionado; el conjunto no se registra como un tercer highlight.

## Ciclo del hub y navegación

Se utilizó una copia temporal del hub que carga el pliego ralentizado, manteniendo el mismo `welcome.js` y puente de activación:

1. Se inició una transición de 01 y se observó `changing`.
2. Se cambió a la opción 02; el padre informó `frame-01=inactive` y `frame-02=active`.
3. Al regresar, 01 informó `motion=idle` y conservó `selection=h02`, sin reiniciar la apertura.

Se comprobó también el STAR de 03 dentro del hub. Después se utilizó su ruta existente de La Favorita: el contexto cambió a «La Favorita» y el detalle a `#detalle-favorita`, mientras el STAR conservó su foco H02. Esto verifica que selección editorial y navegación siguen separadas.

La comparación incluida identifica correctamente «08B / Composición base» y «08C / STAR». El iframe de 08C recibió activación `active`; elegir H02 cambió el pliego. No se registraron errores cuyo mensaje coincidiera con `star-08c` durante esa comprobación final. Las referencias externas pueden producir errores de red independientes.

## Reducción de movimiento, controlador y medios

Se usaron escenarios controlados de QA, sin cambiar las preferencias del navegador:

- **Reducción de movimiento simulada:** copias que fuerzan la respuesta de `matchMedia` para esa preferencia y desactivan animaciones/transiciones por CSS. En las tres opciones, el relato elegido fue visible y el componente quedó en `motion=idle`. No equivale a una prueba del ajuste nativo en todos los sistemas.
- **Sin controladores:** copias con los scripts retirados. Los relatos H01/H02 se observaron visibles en las tres opciones; los controles que requieren JavaScript no aparecieron como acciones sin función. Esto prueba la mejora progresiva del STAR, no una sesión completa de navegador con JavaScript deshabilitado.
- **Sin imágenes externas:** copias con URLs de imagen inexistentes. En el pliego se activó el SVG local y el aviso explícito de composición de demo. En el cartel M005/M001/M008 informaron `data-state=error`; el reverso editorial siguió abriéndose.

Todos estos archivos de QA se eliminan del ZIP. Las capturas se usaron para inspección interna; las capturas históricas de 05–08B no se presentan como evidencia nueva.

## Integridad y límites

`VALIDACION_ESTATICA_08C.json` registra conservación de IDs y párrafos originales, medios y fuentes, archivos protegidos por SHA-256, recursos locales, asociaciones ARIA y análisis de SVG. Se comprobó la sintaxis de los siete scripts de ejecución y la integridad del ZIP final.

No se comprueban Safari/Firefox, dispositivos físicos, lectores de pantalla reales, permisos de imágenes, hechos actuales, datos operativos, reservas ni publicación. No se añaden premios, preparaciones, fotografías o testimonios ficticios. La intro 08E permanece fuera de esta etapa.
