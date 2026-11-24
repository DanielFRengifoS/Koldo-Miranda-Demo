# 08E · Bugfix01 · Activación local y cambio con un clic

23.11.2026. Base: `koldo_miranda_08E_Tripleta_Intros.zip`.

## Causa compartida

Al abrir `index.html` como archivo local, `window.location.origin` es la cadena `"null"`. El emisor la usaba como `targetOrigin` de `postMessage`, donde no es un destino válido. La excepción impedía que el iframe recibiera el mensaje activo y dejaba su cubierta en `armed`.

El emisor también guardaba `activationState` antes de enviar. Al intentar cambiar de opción, el primer clic guardaba el estado inactivo y fallaba antes de cambiar la vista; el segundo evitaba ese envío por la deduplicación y alcanzaba el cambio. La prueba de regresión reproduce ambas condiciones con el `welcome.js` original.

## Corrección

- `welcome.js`: destino `*` solo para `file:`, origen exacto para HTTP/HTTPS. Se escribe el estado después del envío. Si el transporte lanza una excepción, queda registrada en el iframe y no interrumpe `select()`.
- `intro/intro-review.js`: el mismo destino válido para su emisor de archivos locales.
- `activation-bridge.js`: idéntico; sigue exigiendo la ventana padre y el origen esperado. No se amplía la aceptación de mensajes HTTP de terceros.

Los HTML, estilos, contenido, marcas, recursos, navegación visual, las tres coreografías y el controlador de intro permanecen idénticos. Los baselines históricos no se reescriben.

## Comprobaciones

Prueba ejecutable: `node tests/activation-regression.cjs` desde la carpeta del ZIP, sin dependencias externas. Ejecuta el código real del emisor y receptor en un entorno DOM controlado.

- El emisor original reproduce cero mensajes activos locales y cambio solo en el segundo clic.
- Con la corrección, los contratos de `file:` y HTTPS pasan doce cambios de opción con un clic, sin repetir al clicar la activa.
- Se simula un fallo de transporte para confirmar que no bloquea la selección ni guarda éxito inexistente.
- Se verifica que el receptor rechaza una ventana distinta o un origen incorrecto; acepta al padre y deduplica mensajes repetidos.
- Se comprueban también el emisor local y los controles de cambio/reproducción de `intro-review.html`.

Revisión en Chromium por HTTP desde `index.html`: bienvenida → 01 → 02 → 03 → 01. Las tres intros llegan a `introEnd=complete` sin omitir; todos los cambios requieren un clic. Al volver a 01 registra dos ejecuciones; pulsar la pestaña activa conserva dos. Otros cambios rápidos 02 → 03 → 01 activan correctamente cada opción y Escape sigue omitiendo. La bienvenida permanece oculta.

Límite preciso: el navegador de revisión permite HTTP/HTTPS y rechazó navegar a `file://`; no se intentó eludir esa restricción. La ruta local se cubre mediante las pruebas controladas del código de mensajería, no mediante una afirmación de prueba visual nativa de archivos locales. La revisión visual de las tres intros se mantiene por HTTP. No se hizo una prueba en Firefox local en esta sesión.

El ZIP es completo. No se publica ni se envía a terceros. Los informes previos y sus manifiestos son históricos; la validación vigente es `VALIDACION_BUGFIX01.json` y `MANIFEST_SHA256_BUGFIX01.txt`.
