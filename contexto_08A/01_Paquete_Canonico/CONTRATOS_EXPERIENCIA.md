# CONTRATOS DE EXPERIENCIA — Koldo Miranda

**Versión:** 0.1 · **Fecha:** 23 de noviembre de 2026  
**Entorno:** demo comercial interna, estática y sin integraciones · **No publicar ni enviar.**

## 1. Destinatario y tarea

**Destinatario provisional:** persona interesada en comer en Bogotá que necesita entender qué diferencia a La Favorita de Gallinas y Valientes. Es una hipótesis de diseño, no un público validado por el cliente.

**Tarea:** comparar dos conceptos gastronómicos vinculados públicamente a Koldo Miranda y profundizar en el que le interese.

**Resultado que debe conseguir la experiencia:** la persona puede identificar las dos propuestas como restaurantes distintos, entender el territorio documentado de cada uno y abrir el detalle de cualquiera sin perder la posibilidad de volver a comparar.

## 2. Contrato de navegación

### Entrada / díptico

- Presenta La Favorita y Gallinas y Valientes con el mismo peso visual.
- Deja claro que son dos conceptos diferentes, no dos nombres para el mismo local.
- La conexión común puede ser Koldo Miranda, con atribución a las fuentes públicas.
- No usar el claim Michelin 2006.
- Para demo interna, puede mostrar M001–M006 y M008 como referencias de prensa de La Favorita, con crédito y enlace visible, etiquetadas “referencia de prensa 2024; derechos de publicación pendientes”. No son activos cedidos por el cliente.
- En el panel de Gallinas y Valientes puede aparecer M007 únicamente como “referencia externa: tortilla vaga de Sacha; no es foto de Gallinas y Valientes”. No debe parecer foto del restaurante.
- No publicar estas imágenes ni tratarlas como material autorizado; para publicación u operación offline, pedir originales y permisos.

### Comparación

Cada concepto muestra, como mínimo:

- nombre del restaurante;
- una frase descriptiva breve con el nivel de certeza correcto;
- territorio gastronómico y referencia documentada;
- estado de verificación;
- enlace interno al detalle.

La comparación no debe inventar precios, horarios, distancia, disponibilidad, tipo de servicio, capacidad ni similitudes de carta.

### Detalle de La Favorita

Puede profundizar en cocina española/tapas y en el imaginario de ultramarinos, citando E001–E004 y E013–E014. Los platos que aparecen en artículos de 2024 se deben rotular como referencias de prensa de esa fecha, no como carta vigente. La dirección y teléfono de ICEX pueden mostrarse solo si el agente responsable los presenta como datos públicos por reconfirmar; no mostrar horarios ni reserva directa sin validación.

### Detalle de Gallinas y Valientes

Puede profundizar en la asociación pública con la tortilla vaga, siempre con atribución a E008 y con la explicación gastronómica de E009 claramente separada. No mostrar menú, toppings, precios, dirección, teléfono, horarios ni política de reservas hasta contar con fuente primaria o confirmación del cliente. No hay foto propia verificada de Gallinas y Valientes. M007 puede mostrarse solo como referencia externa de la tortilla de Sacha, con rótulo explícito; no como fotografía del restaurante. La inscripción de la sociedad (E007) sirve para documentar la relación corporativa registrada, no para describir el menú o la experiencia del restaurante.

## 3. Acciones y CTA

| Acción | Texto visible posible | Destino | Estado / resultado observable |
|---|---|---|---|
| Explorar La Favorita | “Conocer La Favorita” | Sección interna de detalle | Funcional dentro de la demo |
| Explorar Gallinas y Valientes | “Conocer Gallinas y Valientes” | Sección interna de detalle | Funcional dentro de la demo |
| Comparar | “Comparar propuestas” | Vista/sección comparativa | Funcional dentro de la demo |
| Reservar La Favorita | “Reservar” o “Consultar disponibilidad” | URL oficial de reservas por recibir | CTA conceptual; no enviar ni confirmar reserva |
| Reservar Gallinas y Valientes | “Reservar” o “Consultar disponibilidad” | URL oficial de reservas por recibir | CTA conceptual; no enviar ni confirmar reserva |

No se dispone de un destino de reserva verificado para ninguno de los dos restaurantes. El CTA de reserva no debe aparentar estar operativo. No crear formularios que recojan datos personales ni simular confirmaciones, turnos, pagos o disponibilidad.

## 4. Estados de interfaz

- **Contenido disponible:** mostrar únicamente hechos vinculados a sus IDs de evidencia.
- **Dato pendiente:** omitir el campo o marcarlo “Por confirmar”; nunca rellenarlo con valores plausibles.
- **Medios:** mostrar M001–M006 y M008 como referencias de prensa de La Favorita con créditos/enlaces; M007 solo como referencia gastronómica externa de Sacha, nunca como foto de Gallinas. Si no cargan las imágenes remotas, usar alternativa tipográfica. No dibujar marcos que aparenten contener fotos propias.
- **Reserva no conectada:** CTA deshabilitado o claramente identificado como conceptual; no mostrar un estado de éxito.
- **Fuentes / atribución:** mostrar atribución cerca de cada claim sensible y mantener acceso a la fuente.
- **Michelin bloqueado:** no representar el claim ni siquiera como badge, cifra o microcopy promocional.

## 5. Datos que necesita el sistema

- `cliente`: nombre del chef y contexto de demo, con estado de confirmación.
- `evidencias[]`: IDs, hechos, fuentes, fechas, certeza, atribución, confirmación del cliente y límites probatorios.
- `highlights[]`: H01 La Favorita y H02 Gallinas y Valientes; no crear un tercero.
- `modulos[]`: díptico, comparación y dos detalles independientes.
- `acciones[]`: navegación interna y CTAs conceptuales sin destino real.
- medios: `medios/VER_FOTOS.html` y `medios/REFERENCIAS_VISUALES.md` para referencias remotas `solo_referencia`; rutas relativas a originales autorizados, si se reciben en una versión posterior.

El archivo `CONTENIDO.json` es la fuente estructurada de datos para este contrato.

## 6. Backend y simulación honesta

No existe backend conectado en este paquete. No hay API de reservas, disponibilidad, CRM, pagos, formularios, mapa de mesas ni gestión de usuarios.

La demo puede simular únicamente navegación local entre vistas. La acción de reservar no se simula: permanece conceptual hasta recibir un enlace real y validar qué servicio gestiona la reserva. Si se agrega una URL más adelante, registrar fuente, propietario, fecha de comprobación y resultado esperado.

## 7. Accesibilidad básica

- Usar jerarquía semántica de encabezados y nombres de enlace descriptivos.
- Permitir navegación por teclado y foco visible en todos los controles.
- No depender solo del color para diferenciar los dos restaurantes o el estado de verificación.
- Mantener contraste suficiente y tamaños legibles.
- Añadir texto alternativo contextual a cada fotografía autorizada; si la imagen es decorativa, marcarla como tal.
- Respetar reducción de movimiento y evitar animaciones que bloqueen la lectura.
- Mantener lenguaje claro, español de Colombia y términos gastronómicos explicados cuando sea necesario.
- Las citas y los estados “por confirmar” deben ser accesibles también para lectores de pantalla.

## 8. Criterios de aceptación

1. Se reconocen dos restaurantes distintos y se pueden comparar.
2. Cada restaurante tiene un detalle propio.
3. La Favorita se describe como cocina española/tapas y territorio de ultramarinos, con fuentes.
4. Gallinas y Valientes se describe con cautela como asociado públicamente a la tortilla vaga, no como carta verificada.
5. No se inventan fotos, logos, cartas, precios, horarios, direcciones ni disponibilidad; las fotos de prensa llevan atribución y no se confunden con material propio.
6. No se publica el claim Michelin 2006.
7. La reserva no aparenta funcionar mientras no haya destino real.
8. La navegación permite volver desde cada detalle a la comparación.
9. Todo claim importante mantiene su ID de evidencia.
