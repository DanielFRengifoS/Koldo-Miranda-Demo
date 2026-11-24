> Historial de la revisión inicial 08E. Bugfix01 corrige la cobertura incompleta de apertura local: consultar `BUGFIX01.md` y `VALIDACION_BUGFIX01.json` para la comprobación vigente. La ejecución por HTTP de la revisión inicial no verificaba el transporte `file://`.

# Verificación · 08E

23.11.2026 · Chromium de revisión. Resultado: tres aperturas implementadas y revisadas visualmente. Demo interna; no publicar ni enviar.

## Pantalla y reproducción

Se inspeccionaron en navegador apertura, desarrollo y llegada de 01, 02 y 03 a 1440 × 1100 y 390 × 844: 18 combinaciones. Los iframes usan ese viewport de contenido; la vista puede escalarlos para caber en la pantalla de revisión. La barra vertical reduce el área interior disponible, como en el hub. Los fotogramas se obtienen pausando los efectos reales de cada página, no mediante ilustraciones sustitutivas.

Hubo una segunda pasada: se hizo más gradual el pliego para que el desarrollo mostrara un plano parcial en perspectiva; se ajustaron las esquinas/contraste del atlas; se mantuvo la omisión sobre los componentes y se contuvo el desbordamiento horizontal durante el movimiento de carteles. Se volvieron a inspeccionar los estados afectados. Las capturas usadas para la inspección son internas, no archivos entregados.

Se reprodujeron libremente las seis combinaciones identidad/tamaño. Todas comenzaron en `brand`, terminaron en `ready` con `introEnd=complete` y registraron una ejecución. También se completaron las tres entradas directas sin hub, con una ejecución por página. La llegada conserva los componentes originales y su contenido.

## Precarga, salida y regreso

Un fixture temporal precargó los tres iframes antes de activarlos. Observación inicial en los tres: `status=armed`, `runs=0`, `active=false`, `effects=0`. Al activar 01, completó con `runs=1` y cero efectos pendientes.

Después se eligió H02 en el pliego, se abrió 02 y se regresó a 01 mientras 02 seguía en su apertura. 01 volvió a `playing`, `runs=2`, conservando H02; 02 quedó `armed`, inactivo, con cero efectos. En 01, pulsar otra vez la opción ya activa mantuvo `runs=2` y no reinició la secuencia.

En 02 se omitió mediante botón y se abrió H01. Al salir conservó H01 y quedó sin efectos. En 03 se omitió mediante Escape, se seleccionó H02, se desactivó y se regresó; conservó H02. Tab terminó la segunda apertura con `introEnd=keyboard-intent`. Tras desactivar todas, las tres quedaron sin efectos.

También se probó el hub original: entrar desde «Empezar demo» activó 01 después de la apertura GTL AI; 01 → 02 → 01 elevó el contador de 01 a dos; otra pulsación de 01 no lo elevó. La bienvenida permaneció oculta y 02 pasó a inactivo. 03 permitió omitir y seleccionar H02 normalmente.

## Variantes estáticas y enlaces

Se comprobaron las tres opciones con fixtures que simulan `matchMedia(...reduce).matches=true`; el resultado fue estático, con cubierta y omisión ocultas. Esta prueba no cambió la preferencia nativa del sistema. Se revisó además la regla CSS de reducción de movimiento.

Se comprobaron copias temporales sin scripts de autor: ambos highlights quedaron en el DOM estático y la cubierta oculta. El servidor de revisión inyecta su cliente de recarga; no se presenta esta prueba como un navegador con JavaScript deshabilitado globalmente. Los archivos HTML de los fixtures contenían cero scripts de autor.

Las entradas directas `01/#la-favorita`, `02/#relatos` y `03/#comparar` omitieron la apertura (`introEnd=direct-anchor`, sin contador de ejecuciones), conservando sus destinos.

Los fixtures de QA se eliminaron antes de empaquetar. `intro-review.html` sí se entrega como herramienta de revisión. No se han probado todos los navegadores, teléfonos físicos, la preferencia nativa de movimiento ni una desconexión real de red en esta etapa. Las referencias remotas conservan los mecanismos alternativos y límites de 08C.

## Integridad

`VALIDACION_ESTATICA_08E.json` registra los archivos protegidos comparados por SHA-256, la conservación de párrafos/IDs/URLs de prensa/fuentes, los destinos ARIA y los recursos locales. `MANIFEST_SHA256_08E.txt` identifica la entrega completa. Los informes 05–08C y sus imágenes son históricos, no pruebas de 08E.
