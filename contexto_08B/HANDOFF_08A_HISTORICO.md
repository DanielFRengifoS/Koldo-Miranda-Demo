# Handoff 08 · Koldo Miranda

**Etapa entregada:** 08A, Brand Lab. **Base:** 06 reparada por 07B. **Estado:** propuesta interna lista para revisión; no implica aprobación del cliente ni permiso de publicación.

## Abrir y revisar

1. Descomprimir el ZIP completo.
2. Abrir `brand-lab.html` para comparar firmas, símbolos, monocromo, reducción y las tres webs completas.
3. Abrir `index.html` para la portada, selector y marco GTL AI existentes.
4. Abrir `BRAND_OVERVIEW_08A.png` o `.svg` para una comparación estática.

HTML, CSS, JS, SVG y fuentes son locales. La portada y las opciones 01/02 conservan fotografías de prensa remotas: requieren internet y pueden fallar. En ese caso se usa arte original o el fallback existente. No contiene originales fotográficos del cliente. Si el navegador restringe iframes bajo `file://`, servir la carpeta con un servidor estático local; no hay backend ni instalación de paquetes.

## Cambios aplicados

| Ruta | Aplicación 08A | Herencia para 08B / 08E |
|---|---|---|
| 01 | Firma romana/cursiva, monograma KM, jerarquía editorial, dos nombres en entrada móvil, filetes y fondo tipográfico de espera | Desplegar la firma en dos voces; mantener capítulos y sus cierres independientes |
| 02 | Firma condensada, KM compacto, rojo/rosa/lima/negro, dos gramáticas tipográficas, muestra móvil de ambas marcas | Dos superficies de igual peso; revelación simultánea sin ranking |
| 03 | Firma geométrica, símbolo de dos marcos, cobalto, cubiertas originales LF/GV, mejora de lectura y selección | Abrir dos marcos hacia las rutas existentes; contexto elegido como continuación |

CSS de aplicación independiente: `01/assets/css/brand-08a.css`, `02/brand-08a.css`, `03/css/brand-08a.css`. Fuentes compartidas en `brand/type.css`. Los scripts existentes, el contrato `GTLActivation`, la portada y el selector no se modifican.

## Contrato de medios y evidencia

- La Favorita conserva M001/M005/M006/M008 donde se usaban, con fecha, fuente y créditos; estado `solo_referencia`.
- M007 sigue en 01, asociado explícitamente a Sacha y separado de Gallinas y Valientes. No aparece en 02 ni 03.
- Las ilustraciones heredadas no se sustituyen en su archivo ni se presentan como fotografía. Las nuevas cubiertas se identifican como tipografía/abstracción original.
- No usar el claim Michelin 2006, ni convertir H01/H02 en premios. No fabricar un tercer highlight.
- `contexto_08A/01_Paquete_Canonico/CONTENIDO.json` conserva el inventario E001–E018.
- H01/H02: módulos existentes en 01 y 02. En 03, `data-highlight="H01"` / `"H02"` identifican los bloques documentados de cada detalle; los títulos tienen IDs `h01-title` / `h02-title`.

## Movimiento futuro, todavía no implementado

08B puede ajustar el componente destacado desde los dos highlights documentados. 08E puede desarrollar la secuencia desde la geometría de cada marca. La identidad debe terminar en el hero y funcionar en su estado final sin reproducir movimiento.

Conservar `window.GTLActivation`: una futura intro solo debe actuar cuando su opción esté activa en el hub. Al salir, debe detenerse y limpiar sus estados. Mantener `prefers-reduced-motion`; nada de flashes ni loops necesarios para entender los nombres. No hay nuevos temporizadores ni intro final en esta entrega.

## Verificación y límites

Se abrió la tripleta en Chromium mediante viewports de iframe de 390 × 844 y 1440 × 1100 (el scrollbar reduce 15 px el área de contenido). Se revisaron legibilidad, diferencia de sistemas y el primer contacto móvil. Hay comprobación adicional de menú, rutas y selector; los resultados se describen en `VERIFICACION_08A.md`.

Los archivos `pruebas_05` y `07B_AUDITORIA` son evidencia histórica de entrada y se conservan como tal; sus capturas no son una verificación del branding 08A. Las capturas de QA de esta etapa se usaron internamente y no se presentan como nuevas capturas entregables.

Pruebas estáticas: recursos locales y anclas principales sin errores; SVG válidos; scripts con sintaxis válida. `VALIDACION_ESTATICA_08A.json` comprueba por SHA-256 que la portada, scripts y SVG originales continúan idénticos.

No se verifican publicación, reservas, datos operativos, disponibilidad actual de fuentes externas, lectores de pantalla reales ni una matriz de navegadores. La entrega permanece local y no publicada.
