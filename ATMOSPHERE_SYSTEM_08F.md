# Sistema atmosférico · 08F

## Tres sensibilidades

**01 · Papel y luz.** Se conserva el color base del pliego. Dos patrones de líneas con alfa muy bajo sugieren fibras quietas. Una gradación cálida transparente ocupa el fondo del papel y acompaña ligeramente la atención: hasta ±10 px en horizontal con ratón, ±5 px por posición vertical del ratón y ±6 px por recorrido de scroll. Las figuras tienen fondos propios y conservan sus fotografías sin efectos añadidos.

**02 · Presión de tinta.** Cada cartel recibe una línea de tinta con pequeñas marcas de registro en su margen. La capa tiene 3 px de ancho en escritorio y 2 px en móvil, antes de su escala horizontal. Su opacidad de reposo es .18; pasa suavemente a .30–.32 con atención o apertura. El tramado 08B ya existente se conserva. No hay temporizadores ni actualizaciones RAF para esta opción; responde mediante CSS a foco, puntero y estado del propio cartel.

**03 · Plano de retícula.** Se reutiliza el patrón aceptado de 64 px y su blanco #ffffff0a. Un plano de fondo se desplaza verticalmente hasta ±10 px en función del recorrido del hero. No mueve texto, ilustraciones, columnas ni controles. Un contenedor propio recorta el plano; no se añade overflow global que pueda cortar el foco de los controles.

Los tres gestos son gráficos abstractos. No simulan vapor, fuego, interiores, platos ni iluminación real de un restaurante. No se añade material fotográfico.

## Estado y trabajo

`atmosphere/atmosphere-08f.js` lee el puente de activación y los atributos de la intro y del STAR; no escribe sus estados. Añade únicamente capas decorativas con `aria-hidden=true` y `pointer-events:none`, por debajo del contenido. No añade controles a la experiencia del visitante ni cambia el foco.

- `suspended`: intro aún no terminada, iframe inactivo, documento oculto, pagehide o zona fuera de vista. Capas ocultas, entradas de movimiento desconectadas y RAF pendiente cancelado.
- `quiet`: movimiento reducido o transición del STAR. Se conserva el tratamiento estático y se retiran las entradas de movimiento.
- `active`: página lista, visible y en reposo de STAR. 01 escucha scroll y ratón solo cuando existe puntero fino; 03 escucha scroll. 02 utiliza sus estados CSS.

Las entradas se agrupan en como máximo un RAF pendiente; actualizar no programa otro. No hay `setInterval`, secuencia por tiempo ni bucle RAF permanente. El seguimiento se limita al pliego o hero observado con IntersectionObserver. Las transiciones CSS son finitas y actúan únicamente sobre transform/opacity de las capas decorativas. No se utilizan canvas, filtros blur, partículas ni nuevas descargas externas.

La retícula de 03 solo crea su aislamiento de fondo cuando la intro está en `ready`. Durante la intro conserva la composición de apilamiento anterior: el STAR puede seguir elevándose por encima de la cubierta. Los archivos de intro, incluido Bugfix02, permanecen idénticos.

Diagnóstico de solo lectura: `html[data-atmosphere]`, `data-atmosphere-state` y `window.GTLAtmosphere.getState()`. La API no expone comandos de reproducción ni modifica el producto.

## Reducción de movimiento y ausencia de JS

Con `prefers-reduced-motion: reduce` el controlador entra en `quiet`, elimina listeners de movimiento y variables de desplazamiento. CSS elimina transiciones y transformaciones. La textura y los bordes quedan estáticos. Al cambiar la preferencia se recalcula el estado sin reiniciar la intro.

Sin scripts no se montan capas ni se activan los selectores de mejora. Se conserva la lectura estática de los dos highlights, como en 08E. No se depende de hover en móvil: 01/03 admiten scroll y 02 usa apertura o foco del control existente.

## Comparación y mantenimiento

`atmosphere-review.html` abre 08E Bugfix02 a la izquierda y 08F a la derecha. `baseline-08e/` contiene el código exacto necesario para mostrar esa base sin copiar sus baselines recursivamente. Los iframes usan 1440 × 1100 o 390 × 844 y se escalan visualmente si hace falta. El modo de una sola propuesta desactiva la base oculta. Los envíos de activación usan origen exacto por HTTP/HTTPS y el tratamiento file: de las correcciones previas.

Los recursos nuevos de producción están aislados en `atmosphere/`; retirar sus dos referencias de cada HTML devuelve el comportamiento 08E. El contenido y el código anterior no necesitan reescribirse para ello.
