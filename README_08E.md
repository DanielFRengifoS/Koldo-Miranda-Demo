# Koldo Miranda · 08E Tripleta Intros · Bugfix02

Demo interna. No publicar ni enviar. Entrega del 23 de noviembre de 2026.

Descomprimir el ZIP completo y abrir `index.html` en el navegador. Bugfix01 corrige el envío de activación al abrir archivos locales (`file://`), que dejaba las intros detenidas y exigía dos clics al cambiar de opción. También se puede servir por HTTP local: `python3 -m http.server 8000` y abrir `http://localhost:8000/index.html`. No requiere instalar dependencias.

`intro-review.html` es la vista de revisión: su botón «Apertura» pausa intencionadamente el primer fotograma. Para verla animada allí, usar «Reproducir completa». El recorrido normal por `index.html` reproduce automáticamente cada intro.

- `intro-review.html`: apertura, momento central y llegada de las tres opciones; tamaños 1440 × 1100 y 390 × 844, con escala de visualización cuando hace falta. «Reproducir completa» permite comprobar el ritmo real.
- `index.html`: bienvenida original y selector GTL AI. Cambiar de opción y regresar para repetir cada apertura una vez por activación.
- `01/index.html`, `02/index.html`, `03/index.html`: entrada directa con intro. Un enlace directo con ancla omite la intro y conserva el destino.
- `design-review.html`: comparación de la base STAR 08C con la entrega 08E.
- `brand-lab.html`: branding 08A conservado.
- `HANDOFF_08.md`: continuidad acumulada, alcance y restricciones.

Base efectiva: 08C, último ZIP disponible. No se recibió 08D y no se afirma haber implementado esa etapa. Se conserva la navegación de 08C.

Las fuentes y gráficos son locales; las imágenes de prensa continúan como referencias remotas atribuidas y pueden fallar o tardar. La intro no espera su descarga. No hay vídeo, audio, reservas, formularios ni servicios conectados.

Ver `BUGFIX01.md` para la causa, la corrección y las comprobaciones. Los informes 08E originales describen la entrega anterior; la validación de esa revisión está en `VALIDACION_BUGFIX01.json` y `MANIFEST_SHA256_BUGFIX01.txt`.

Bugfix02 suaviza los primeros instantes de 01 y 02: elimina la pausa temprana de la firma editorial y el avance por pasos de la firma de Contrapunto. Mantiene las duraciones de 4,1 / 3,7 / 4,2 s y la corrección de activación local. Ver `BUGFIX02.md`, `VALIDACION_BUGFIX02.json` y `MANIFEST_SHA256_BUGFIX02.txt` para esta revisión vigente.
