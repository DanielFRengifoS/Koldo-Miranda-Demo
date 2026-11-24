# NOTAS_05 · Koldo Miranda · Opción 03

**Estado:** demo estática construida para inspección interna · **No publicar ni enviar**  
**Fecha de ejecución:** 23 de noviembre de 2026  
**Dirección aplicada:** Atlas de sobremesa  
**Recorrido:** C01 · «Elige primero el territorio que te interesa»

## 1. Resultado

Se construyó una experiencia editorial de una sola página con selector inicial de dos rutas equivalentes, bloque contextual posterior a la elección, comparación M02 y dos detalles independientes M03/M04. La primera acción es elegir qué territorio explorar; «Comparar primero» permanece como salida secundaria.

- La Favorita conserva un lenguaje de papel tostado, puerta editorial y estanterías dibujadas.
- Gallinas y Valientes conserva un campo verde profundo, óvalo abstracto y gesto diagonal.
- Ambas tarjetas tienen el mismo tamaño, peso y jerarquía; no hay ranking ni recomendación automatizada.
- «Koldo Miranda» aparece como texto tipográfico provisional, no como logotipo oficial.
- No se construyeron hub, STAR definitivo, navegación premium, marca final ni intro.

## 2. Inventario de medios y decisiones

El ZIP canónico recibido contiene `MANIFIESTO_MEDIOS.md`, `medios/README.md`, `medios/REFERENCIAS_VISUALES.md` y `medios/VER_FOTOS.html`, pero no contiene archivos binarios de fotografías. El manifiesto identifica M001–M006 y M008 como referencias de prensa remotas `solo_referencia`, y M007 como imagen de la tortilla de Sacha, no de Gallinas y Valientes. No hay fotografía propia verificada de Gallinas y Valientes ni originales del cliente.

La dirección de arte entregada para esta opción selecciona ilustración tipográfica original para La Favorita y geometría abstracta para Gallinas y Valientes. Por eso no se cargaron fotografías de prensa externas ni se presentan como activos cedidos por el cliente. M007 no se utiliza.

| Archivo original / procedencia | Ruta servida | Lugar en pantalla | Estado / autor |
|---|---|---|---|
| Ilustración vectorial original creada para esta demo | `assets/la-favorita-archivo.svg` | Tarjeta de La Favorita en hero; bloque contextual al elegir; detalle M03 | Arte original para demo, no representa el local ni funciona como logo. Autor: OpenAI para esta demo. |
| Geometría vectorial original creada para esta demo | `assets/gallinas-geometria.svg` | Tarjeta de Gallinas y Valientes en hero; bloque contextual al elegir; detalle M04 | Arte original para demo; no representa tortilla, receta, emplatado ni local. Autor: OpenAI para esta demo. |
| M001–M006 y M008, referencias remotas de prensa indexadas en `medios/REFERENCIAS_VISUALES.md` | No servidas | No se muestran | `solo_referencia`; derechos de publicación no confirmados. No son archivos originales del cliente. |
| M007, referencia visual de la tortilla vaga de Sacha | No servida | No se muestra | `solo_referencia`; no es foto de Gallinas y Valientes. |
| Logos oficiales | No recibidos | No se muestran | Pendiente de cliente. |

## 3. Contenido, atribución y límites

- **La Favorita:** se describe como cocina española y tapas; las crónicas de 2024 se presentan como contexto histórico del imaginario de ultramarinos. Evidencias conservadas: E001, E003 y E004.
- **Gallinas y Valientes:** se presenta únicamente como una propuesta asociada públicamente por Única FM (06.11.2026) a un homenaje a la tortilla vaga de Sacha Hormaechea. Se aclara que la nota consultada solo permite comprobar titular y bajada. E008 es la evidencia del vínculo; E009 aporta contexto sobre el antecedente de Sacha, no prueba qué sirve Gallinas y Valientes.
- Los enlaces de fuente se muestran junto al contenido que respaldan.
- Se excluyen biografía no sustentada, claim Michelin 2006, precios, horarios, carta vigente, disponibilidad, alérgenos, dirección exacta de Gallinas y Valientes y condiciones de reserva.
- No se muestran CTA de reserva, formularios, pagos, disponibilidad ni confirmaciones. Las acciones solo navegan dentro de la página.
- Los textos son síntesis editoriales provisionales basadas en fuentes públicas, no claims aprobados por el cliente.

## 4. Insumos recibidos y faltantes

**Recibidos:**
- `05_Prompt_HTML_Base.md`
- `DIRECCION 03.md` (dirección de arte Atlas de sobremesa)
- `03_OPCION.md` (C01, opción identificada como 03 por el nombre del archivo)
- `koldo_miranda_01_Paquete_Canonico(1).zip`

**No recibidos en esta conversación:**
- Último ZIP aceptado previo.
- ZIP 03 y ZIP 04 separados a los que alude el prompt 05.
- Capturas de referencia del stage 04 como archivos independientes.

No se inventó el contenido de esos paquetes ausentes. La composición se contrastó con la dirección de arte escrita entregada (`DIRECCION 03.md`).

## 5. Archivos de la entrega

- `index.html` — página completa, semántica y con contenido esencial visible sin JavaScript.
- `css/styles.css` — estilos locales, responsive y con soporte para reducción de movimiento.
- `js/app.js` — selección de ruta y actualización del bloque contextual; no hay backend.
- `assets/la-favorita-archivo.svg` — arte vectorial original.
- `assets/gallinas-geometria.svg` — arte vectorial original.
- `README.md` — instrucciones de apertura.
- `pruebas_05/` — capturas y registro de comprobaciones generados al validar desde extracción limpia.

## 6. Pruebas

Se extrajo el ZIP en una carpeta limpia. La política del navegador de este entorno bloqueó la navegación directa a `file://` y a direcciones loopback; para la inspección visual se cargaron en Chromium el HTML, CSS y JS exactos de esa extracción, con los SVG locales incorporados en la vista aislada. Las rutas relativas se comprobaron además contra los archivos reales de la extracción.

Resultados:
- 390 × 844: ambas tarjetas quedan completas dentro del primer viewport (su borde inferior está en y=570.5 px); no hay desbordamiento horizontal.
- 1440 × 1000: las tarjetas aparecen en dos columnas equivalentes; no hay desbordamiento horizontal.
- Las dos ilustraciones cargan; no se registraron errores de consola.
- La selección cambia correctamente el contexto a La Favorita o Gallinas y Valientes; el enlace de detalle y «Comparar primero» actualizan el ancla esperada.
- Sin JavaScript, M02, M03 y M04 siguen visibles; las tarjetas conservan enlaces de respaldo directos a los detalles.

Las capturas y el registro JSON están en `pruebas_05/`. La limitación de navegación directa del entorno queda registrada: no se afirma que el navegador haya abierto el archivo local mediante su URL original.
