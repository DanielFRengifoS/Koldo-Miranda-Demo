# Verificación · 08F

23.11.2026 · base: 08E Bugfix02. Demo interna; no publicar ni enviar.

## Revisión visual realizada

En Chromium se observaron las tres atmósferas en escritorio y en viewports móviles de 390 × 844, a página quieta y después de la intro. La vista de comparación mantiene el viewport de contenido; puede reducir su escala para caber en la pantalla. Esto no equivale a una prueba en un teléfono físico.

01 se comprobó con H01 y H02: papel, fondo claro, tipografía vino, imagen remota y geometría abstracta. El puntero actualizó las variables de desplazamiento y la capa se mantuvo detrás del texto. Una lectura observada fue x=-3,80 px / y=-5,59 px; en la variante sin puntero fino, x permaneció en 0 px.

02 se observó sobre rosa y lima, con frente visual y relato abierto. El control original siguió abriendo el relato. La línea marginal pasó de opacidad .18/escala .55 a .30/escala .9 al recibir atención. No se añadió textura ni reflejo sobre las fotos.

03 se observó en conjunto y en foco H02, incluido el formato móvil. El scroll modificó la posición del plano de retícula sin desplazar controles ni ilustraciones. Al salir del hero, su rectángulo terminó con bottom=-87,75 px y se observó `suspended`, sin variables de desplazamiento. El retorno restableció el seguimiento.

Se inspeccionaron los colores de mayor contraste de cada marca. No se modifican los colores tipográficos ni los estilos de controles anteriores. Las capas son decorativas, no reciben eventos y se sitúan por debajo del contenido; no se afirma aquí una auditoría completa de accesibilidad.

## Intro, selector y reposo

Las tres entradas directas reprodujeron las intros hasta `introEnd=complete`. Durante las tres secuencias, la atmósfera permaneció `suspended` y sus capas tuvieron opacidad 0; después pasó a `active`. Se inspeccionó visualmente el momento central de 03 y se confirmó `isolation=auto` en el hero durante la intro, preservando el apilamiento del STAR original.

En el hub se recorrió 01 → 02 → 01. El cambio con un clic se conservó, el regreso dejó `introRuns=2`, y omitir devolvió 01 a `ready` con la atmósfera activa. No se reinició la bienvenida.

Un inspector temporal observó 01 activo con un solo update inicial, sin RAF pendiente. La comprobación automatizada del ciclo de vida confirma que los eventos se agrupan, que update no inicia un bucle y que 02 no necesita RAF. No se atribuye un FPS, un consumo de batería o una mejora de tiempo de render sin medirlos en el dispositivo.

## Variantes controladas

En las tres opciones se simularon respuestas de matchMedia con movimiento reducido: resultado `quiet`, intro `ready` y sin variables de desplazamiento. No se cambió la preferencia nativa del sistema; se inspeccionó además la regla CSS correspondiente. La variante de puntero grueso de 01 mantuvo el desplazamiento horizontal en cero y no dependió de hover.

Copias temporales sin scripts de autor mostraron los dos highlights en cada opción, con cero capas atmosféricas. El servidor de revisión puede inyectar su cliente de recarga; esto no se presenta como desactivar globalmente JavaScript en el navegador. Los fixtures se eliminan antes del ZIP.

## Pruebas ejecutables e integridad

- `node tests/atmosphere-regression.cjs`: ejecuta el controlador real en un DOM controlado. Comprueba las tres identidades, suspensión durante intro/inactividad/documento oculto/fuera de vista, modo tranquilo durante STAR, reducción de movimiento, puntero grueso, coalescencia de eventos, ausencia de bucle en reposo y pagehide/pageshow.
- `node tests/activation-regression.cjs`: conserva y vuelve a comprobar el arreglo de activación local, cambio con un clic, deduplicación y validaciones del receptor.
- `VALIDACION_ESTATICA_08F.json`: conservación de archivos por SHA-256, contenido, IDs, enlaces, destinos ARIA, referencias locales, XML de SVG y sintaxis JS.
- `MANIFEST_SHA256_08F.txt`: inventario de la entrega vigente. Los manifiestos anteriores son históricos.

Las capturas se utilizaron para inspección interna y no se entregan como archivos nuevos. No se ha repetido aquí una prueba visual nativa file:// ni una prueba en Firefox local; se conserva el código de activación corregido y su regresión. Las referencias de prensa siguen remotas y sujetas a sus límites. La revisión no concede aprobación del cliente ni permisos de publicación.
