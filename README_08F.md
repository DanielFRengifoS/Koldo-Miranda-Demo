# Koldo Miranda · 08F Tripleta Atmosphere

Demo interna del 23 de noviembre de 2026. No publicar ni enviar.

Descomprimir el ZIP completo y abrir `index.html` para el recorrido normal, con las intros y el selector GTL AI. Abrir `atmosphere-review.html` para comparar la base 08E Bugfix02 con 08F, o elegir «Ver solo 08F», en escritorio y móvil. La comparación abre directamente la llegada de la intro para poder observar el ambiente.

También se puede servir por HTTP local: `python3 -m http.server 8000` desde la carpeta descomprimida y abrir `http://localhost:8000/index.html`. No se necesitan dependencias, backend ni instalación para utilizar la demo. La activación conserva la corrección para archivos locales de Bugfix01.

| Opción | Atmósfera | Cómo observarla |
|---|---|---|
| 01 · Margen y memoria | Fibras de papel quietas y luz cálida tenue | Desplazarse por el pliego; con ratón, moverlo sobre su superficie |
| 02 · Contrapunto | Presión de tinta en el borde de cada cartel | Enfocar, señalar o revelar un cartel; en móvil, usar su control normal |
| 03 · Atlas abierto | Profundidad leve en la retícula existente | Desplazarse por el hero del atlas |

La capa no mantiene un bucle en reposo. Durante las intros se suspende. Con movimiento reducido queda tranquila; fuera de vista o con la opción inactiva se detiene. Las fotos, texto, STAR, navegación e intros anteriores se conservan.

`intro-review.html` sigue disponible para revisar las intros: «Apertura» pausa intencionadamente su primer fotograma; «Reproducir completa» permite ver la secuencia libre.

Leer `HANDOFF_08.md`, `ATMOSPHERE_SYSTEM_08F.md` y `VERIFICACION_08F.md` para alcance y comprobaciones. `VALIDACION_ESTATICA_08F.json` y `MANIFEST_SHA256_08F.txt` identifican esta entrega. Los documentos e informes de etapas anteriores son históricos.
