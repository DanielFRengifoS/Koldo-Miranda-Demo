# 08E · Bugfix02 · Movimiento continuo al comenzar

23.11.2026. Base: `koldo_miranda_08E_Tripleta_Intros_Bugfix01.zip`. Demo interna, sin publicar ni enviar.

## Ajuste

01 repetía la misma posición de su firma durante parte del comienzo; su easing global aceleraba la llegada a ese tramo. 02 usaba `steps(8,end)` para la firma principal y mantenía el símbolo en una pose repetida. Estos recursos se percibían como pequeños bloqueos al principio.

Se mantienen tres posiciones diferentes para el establecimiento y salida de la firma 01, con movimiento continuo y easing por tramo. Se elimina su blur animado para reducir trabajo de pintado. En 02, la firma se revela de forma continua y el símbolo sigue girando/creciendo suavemente mientras se establece. El gesto de impresión posterior de los carteles se conserva.

`intro/intro-08e.js` y `intro/intro-08e.css` son los únicos archivos de ejecución modificados. La duración sigue siendo 4,1 s / 3,7 s / 4,2 s. Los emisores de Bugfix01, el receptor, los HTML, los STAR, fuentes, SVG, fotos, navegación y la tercera coreografía son idénticos.

## Medición de interpolación en navegador

Se cargó el código anterior junto al nuevo en un fixture temporal. Se pausaron sus efectos WAAPI reales y se muestrearon estilos calculados a intervalos de 16 ms durante el primer 15% de cada secuencia. La pose compara translate, transform y clip-path de la firma principal. Se repitió a 1440 × 1100 y 390 × 844.

| Intro | Muestras por tamaño | Poses distintas antes | Poses distintas después | Repeticiones adyacentes antes / después |
|---|---:|---:|---:|---:|
| 01 · 16–608 ms | 38 | 20 | 38 | 18 / 0 |
| 02 · 16–544 ms | 34 | 3 | 34 | 31 / 0 |

Los resultados fueron iguales en ambos tamaños. Se inspeccionaron visualmente las poses de 300 y 600 ms. Las cuatro reproducciones libres de 01/02 × escritorio/móvil completaron con `status=ready`, `introEnd=complete`, `runs=1`. En el selector real, 01 completó y un solo clic activó 02, que también completó y ocultó la omisión.

La medición prueba continuidad de las poses diseñadas. No mide frames realmente presentados por la GPU ni garantiza un FPS en equipos distintos; no es un benchmark de Firefox en el dispositivo del usuario. La eliminación de blur y la promoción temporal de capas reducen fuentes de coste, pero no se atribuye una mejora numérica de rendimiento sin medirla.

La prueba de regresión de activación de Bugfix01 se vuelve a ejecutar. El controlador de activación y sus validaciones permanecen idénticos. Se comprueba por bytes que la rama de 03 y el código de ciclo de vida de la intro no cambian. Los fixtures comparativos se eliminan del ZIP. Las capturas de revisión se usaron solo para inspección y no forman parte de la entrega.

Validación vigente: `VALIDACION_BUGFIX02.json` y `MANIFEST_SHA256_BUGFIX02.txt`. Los informes anteriores describen sus respectivas revisiones históricas.
