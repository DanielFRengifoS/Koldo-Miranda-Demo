# Verificación visual 05 — A03

Prueba en Chromium sobre HTML extraído del ZIP. CSS, JS y SVG locales se inyectaron inline porque la política del navegador bloqueó la navegación directa a file:// y localhost. Las peticiones de imágenes remotas se abortaron para comprobar el fallback.

## desktop-1440
- Viewport: 1440 × 1000 px
- Documento: 1440 × 3274 px
- Desbordamiento horizontal: no
- Estado de imágenes remotas: M005: fallback-visible, M001: fallback-visible, M008: fallback-visible
- Errores JavaScript: 0
- Anclas internas encontradas: 6/6

## mobile-390
- Viewport: 390 × 844 px
- Documento: 390 × 4468 px
- Desbordamiento horizontal: no
- Estado de imágenes remotas: M005: fallback-visible, M001: fallback-visible, M008: fallback-visible
- Errores JavaScript: 0
- Anclas internas encontradas: 6/6

## Resultado
- El díptico se mantiene en dos columnas en escritorio y se apila en móvil.
- Los CTA de ambos paneles cambian a sus anclas M03/M04; los retornos apuntan a la comparación.
- Los marcadores remotos permanecen visibles cuando no se cargan las fotografías.
- No se verificó la descarga real de imágenes por limitación de red/DNS del entorno.
