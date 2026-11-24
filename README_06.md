# Koldo Miranda · 06 Demo Tripleta Base

**Estado:** demo comercial interna desde placeholders. **No publicar ni enviar.**  
**Fecha de ensamblaje:** 23 de noviembre de 2026.  
**Entrega:** `koldo_miranda_06_Demo_Tripleta_Base.zip`.

## 1. Referencia recibida y técnica de reutilización

No se recibió un archivo independiente de portada/hub ni una URL/captura específica para esta etapa. Se reutilizó como base técnica el hub GTL AI que estaba en la raíz de `Gallinas-Valientes-Demo-main.zip`, concretamente:

- `index.html`: estructura de bienvenida, selector por pestañas y escenario de páginas.
- `welcome.css`: composición de bienvenida, retícula visual, apertura circular y comportamiento responsive.
- `welcome.js`: navegación por selector, hashes, teclado y transición de entrada.

La adaptación parte de ese código real; no es una recreación de memoria. Se reescribieron el HTML de portada, los textos, el selector, los estilos y la lógica de navegación/activación para Koldo Miranda. No se copiaron al resultado el vídeo de marca, el póster, las fotografías, los nombres de secciones ni los textos de la demo anterior. La marca GTL AI se conserva en el hub.

## 2. Qué se adaptó al cliente actual

- Portada y metadatos: Koldo Miranda; claim «Un hilo público. Dos casas distintas.»; descripción de las tres rutas y advertencia de demo interna.
- Selector: 01 «Un hilo público» (B03), 02 «Dos territorios» (A03) y 03 «Atlas de sobremesa» (C01).
- Títulos accesibles, textos alternativos, nombres de iframe, estados de pestañas, hash y destinos internos.
- Se conservan los tres documentos 05 como páginas independientes. No se rehacen ni se simplifican sus composiciones, contenido, CSS, JavaScript, medios, notas o capturas. La única adición dentro de cada página es la carga del puente no visual `../activation-bridge.js`.

## 3. Foto de portada y estado de medios

La portada usa M006: retrato contextual de Koldo Miranda en La Favorita, referencia de El Espectador publicada el 18.06.2024, con la misma URL y procedencia documentadas en la opción 01. No es un binario entregado ni un activo con autorización de publicación confirmada. Se muestra crédito y estado de referencia; si la URL no carga, aparece `01/assets/images/hero-archivo.svg`, que está rotulado como composición abstracta de respaldo y no como fotografía.

Las opciones 01 y 02 conservan sus referencias fotográficas remotas, créditos y fallbacks originales. Los paquetes 05 no contienen los binarios fotográficos y las notas de origen clasifican esas imágenes como `solo_referencia`, con permisos de publicación pendientes. La opción 03 conserva sus ilustraciones SVG originales y su dirección sin fotografía. No se inventaron fotografías ni se sustituyeron por stock.

## 4. Rutas y selector

Estructura de entrega:

- `index.html` — bienvenida GTL AI y selector.
- `01/index.html` — opción B03, «Un hilo público. Dos casas distintas».
- `02/index.html` — opción A03, «Dos territorios. Dos lenguajes».
- `03/index.html` — opción C01, «Atlas de sobremesa».

El selector usa `#01`, `#02` y `#03`; la portada usa `#home` solo como acción de retorno (la URL queda sin hash). Las rutas independientes son `/01/index.html`, `/02/index.html` y `/03/index.html`. Los iframes se crean bajo demanda al seleccionar una opción; no se precargan los tres documentos ocultos.

Para probar localmente, descomprime el ZIP, abre una terminal en la carpeta raíz y ejecuta:

```bash
python3 -m http.server 8765
```

Abre `http://localhost:8765/`. No hay build, npm, backend ni dependencias JS externas.

## 5. Protocolo de activación

El hub envía a cada iframe un `postMessage` del mismo origen con este contrato versionado:

```js
{
  type: 'gtlai:activation',
  version: 1,
  state: 'active' | 'inactive',
  demo: '01' | '02' | '03',
  reason: 'selection-change' | 'hub-visible' | 'iframe-load' | 'document-hidden' | 'document-visible' | 'pagehide' | 'pageshow' | 'window-focus' | 'return-to-welcome'
}
```

Reglas implementadas:

1. La opción seleccionada se carga bajo demanda; una carga de iframe oculta no activa nada.
2. En el primer acceso, `active` se envía después de terminar la transición de bienvenida y cuando el iframe ya está cargado y visible.
3. Al cambiar de opción, el iframe anterior recibe `inactive` antes de ocultarse. El nuevo recibe `active` después de quedar visible; si carga tarde, el evento `load` sincroniza su estado actual.
4. Al ocultarse la pestaña/ventana o salir de la página se informa `inactive`; al volver, se reevalúa la visibilidad y se reactiva solo la opción seleccionada. No se vuelve a reproducir la bienvenida GTL AI.
5. `activation-bridge.js` escucha solo mensajes del padre y del mismo origen. Expone `window.GTLActivation.getState()`, `window.GTLActivation.isActive()` y `window.GTLActivation.subscribe(fn)`, además del evento `gtlai:activationchange` en la página hija. Una página abierta directamente empieza en estado `active`.

Ejemplo de integración futura para una intro 08E:

```js
function onActivation({ state }) {
  if (state === 'active') startIntroIfNeeded();
  else stopIntroAndPreserveProgress();
}
window.GTLActivation?.subscribe(onActivation);
if (window.GTLActivation?.isActive()) startIntroIfNeeded();
```

La intro debe ser idempotente: reactivar no debe reiniciar la secuencia ya completada.

## 6. Pruebas realizadas

- Integridad del ZIP (`testzip`), estructura `01/02/03`, existencia de HTML/CSS/JS y comprobación estática de todas las rutas locales referenciadas: OK.
- `node --check` para `welcome.js` y `activation-bridge.js`: OK.
- Chromium headless con un harness offline: bienvenida → 01 → 02 → 03 → 01; selector con clic y teclado; hashes `#01/#02/#03`; retorno a portada; fallback de portada; estados `active/inactive`; simulación de pestaña oculta y retorno; `pagehide/pageshow`; iframes cargados bajo demanda y sincronización cuando disparan `load`.
- El harness confirmó que el hub no asigna `src` a los tres iframes al inicio; carga solo la opción elegida. No se registraron excepciones JavaScript.
- Hub y bienvenida sin desbordamiento horizontal en los viewports probados de 1440 px y 390 px.
- **Límite de la prueba de navegador:** la política del entorno bloquea la navegación Chromium a `file://`, `localhost`, loopback y la IP local (`ERR_BLOCKED_BY_ADMINISTRATOR`). Por ello el harness ejecutó el HTML/CSS/JS del hub en una página inline y usó `srcdoc` para simular iframes del mismo origen. No equivale a certificar la navegación HTTP real de cada documento 05. Las rutas directas `/01/index.html`, `/02/index.html` y `/03/index.html` se verificaron por existencia de archivos y referencias relativas; los informes/capturas originales de 05 se conservaron sin alteración.
- Las URLs fotográficas externas no se validaron en red. Se conserva el fallback local y el crédito; los binarios y permisos siguen pendientes.

## 7. Pendientes y límites

- Confirmar con el equipo si existe una referencia interna específica de hub/portada distinta de la base GTL AI encontrada. Si aparece, comparar y decidir si requiere una iteración.
- Confirmar permisos y disponibilidad de las fotografías de prensa antes de cualquier publicación; las URLs remotas dependen de terceros y no se certifica su carga en todos los navegadores/redes.
- Recibir originales fotográficos del cliente y datos/claims aprobados si se desea sustituir las referencias `solo_referencia`.
- La demo sigue siendo privada por instrucción editorial, pero `noindex` no equivale a autenticación. Configurar protección en el hosting antes de compartir una URL pública.
- El protocolo queda instalado; las propuestas 05 actuales no incluyen intros 08E, que deberán suscribirse al contrato al implementarse.

**No publicar ni enviar.** Esta entrega es la base de evidencia para el gate adversarial 07B; no constituye aprobación para iniciar 08A.
