# Koldo Miranda · Design System 08B

23.11.2026 · Composición de reposo. Base: tripleta 08A entregada, con identidad y restricciones conservadas.

## Una identidad por opción; una composición distinta

08A estableció tres lenguajes. 08B modifica la forma de leerlos: relación de escala, orden de descubrimiento, encuadre, retícula y alternancia entre imagen y texto. Las tres páginas no comparten un hero de texto a la izquierda y foto a la derecha.

| | 01 · Portada editorial | 02 · Carteles enfrentados | 03 · Atlas desplegado |
|---|---|---|---|
| Primer descubrimiento | Titular, nombres y retrato contextual | Dos nombres y dos visuales contrapuestos | Pregunta y elección entre dos rutas |
| Retícula inicial | Titular a todo el ancho; imagen horizontal + columna de lectura | Dos carteles de superficie equivalente | Rail de lectura + dos cubiertas verticales |
| Materialidad | Tinta vino, papel y filetes | Negro, rosa/lima, puntos de imprenta y planos | Cobalto, papel y trama de cuadrícula |
| Escala protagonista | Titular y presencia humana | Nombres de los dos conceptos | Pregunta y las dos superficies de elección |
| Recorrido | Contexto → capítulos autónomos → comparar | Díptico → cierres H01/H02 → evidencia → detalles | Elegir → síntesis editorial → contexto seleccionado → comparar/detalle |
| Imagen | M006 horizontal completo; archivo contextual en capítulos | M005/M001/M008 en mosaico frente a geometría y tipografía abstractas | Cubiertas locales LF/GV; ilustraciones originales en contexto y detalle |

## 01 · Abrir una revista

La portada coloca el titular en una franja amplia de tinta vino y baja el retrato a un plano horizontal. La escala ya no depende de repetir la firma en grande. La imagen no se recorta para adaptarse a una caja vertical: usa la relación de aspecto de la referencia y `contain`. Pie, crédito, fecha, estado y enlace acompañan la imagen.

La columna lateral conserva la distinción entre La Favorita y Gallinas y Valientes. En móvil sus nombres se adelantan al retrato. Después del hero, la frase «La conexión no borra las diferencias» conserva la función de bisagra; esa composición es el lugar de continuidad para el futuro STAR.

Los capítulos cambian de ritmo: La Favorita alterna archivo y texto, con una imagen secundaria desplazada; el contexto de Gallinas y Valientes se presenta sobre un plano vino con arte original y verificación limitada. No se fusionan los conceptos.

## 02 · Enfrentar dos carteles

La introducción se hace más compacta y se convierte en una franja roja. Los nombres de los restaurantes y sus visuales ocupan el primer plano del díptico. La Favorita utiliza cursiva, rosa y archivo atribuido; Gallinas y Valientes utiliza tipografía condensada, lima y planos geométricos originales. La retícula mantiene la misma anchura y altura de cartel.

La fotografía M005 se contiene completa dentro del mosaico; los otros dos encuadres siguen siendo referencias de prensa. El tratamiento tipográfico «Tortilla / Vaga» contextualiza la asociación pública de E008; su leyenda conserva que la composición es abstracta, no una imagen de un plato.

La trama es un patrón vectorial de puntos, no ruido descargado ni fotografía. Los dos visuales se alinearon en la segunda pasada. Los highlights existentes H01/H02 se movieron íntegros a continuación del díptico, sobre una pausa negra; no se creó una galería ni un highlight adicional.

## 03 · Desplegar un atlas

La pregunta ocupa un rail lateral en escritorio, mientras que las dos rutas forman una doble página. Las cubiertas 08A se ven completas; debajo, nombre, contexto y acción mantienen la misma jerarquía. La elección sigue siendo real: abre el contexto existente y conserva la salida al detalle y a la comparación.

En móvil, las rutas se muestran en paralelo y mantienen la misma altura. La segunda pasada reduce las cubiertas y algunos espacios para acercar «Comparar primero» al primer viewport, sin reducir el cuerpo de lectura ni ocultar una ruta.

Un interludio tipográfico presenta los dos territorios desde la síntesis canónica y prepara el futuro STAR. La comparación y los detalles conservan sus rutas en una zona posterior. No se dibujan mapas reales, ubicaciones, platos ni recetas.

## Reglas de uso

- Las firmas, símbolos, paletas y fuentes de 08A siguen siendo la identidad de referencia. No se redibujaron los logos ni se añadieron marcas de restaurantes como si fueran oficiales.
- El texto de lectura principal usa 16 px; los pies y metadatos secundarios, normalmente 12–14 px. Los nombres de las rutas son legibles sin hover ni animación.
- No hay nuevas animaciones, autoplay, librerías de motion, canvas, vídeo ni loaders. Se conserva el soporte de movimiento reducido y las interacciones existentes.
- Las fotografías permanecen remotas y acreditadas. Los fondos e ilustraciones locales sostienen la composición cuando la conexión falla.
- El STAR futuro y la navegación secundaria tienen zonas diferentes. No se añade una reserva simulada ni un control sin función.

## Archivos

Las nuevas capas son `01/assets/css/design-08b.css`, `02/design-08b.css`, `03/css/design-08b.css`. `design/halftone.svg` y `design/02/gesto.svg` aportan material gráfico original. Los archivos 08A previos permanecen intactos.

La revisión comparativa está en `design-review.html`, con CSS/JS locales. Permite ver el antes/después a 1440 × 1100 o 390 × 844; la miniatura puede escalarse para caber en la ventana, pero el viewport interno conserva esas dimensiones. El scrollbar del navegador reduce el ancho útil de contenido en 15 px durante la revisión Chromium.
