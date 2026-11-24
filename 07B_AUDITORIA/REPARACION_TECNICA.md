# Reparación técnica · ZIP 06 · actualización 07B

## Cambio aplicado

Se corrigió un destino de fragmento roto en el hub:

- Archivo: `index.html`
- Antes: `href="#home"`
- Después: `href="#bienvenida"`
- Destino real: `<section id="bienvenida">`

El enlace «Portada» ya era interceptado por `welcome.js` cuando JavaScript estaba activo. Sin embargo, el fragmento `#home` no correspondía a ningún elemento del documento, por lo que el enlace no tenía un destino nativo válido si el manejador no se ejecutaba. Ahora apunta a la sección de bienvenida existente. El manejador actual sigue controlando el retorno visual y el historial como antes.

## Alcance y conservación

- Cambio de una sola cadena en el HTML del hub.
- No se modificaron B03, A03 ni C01.
- No se modificaron CSS, JS, SVG, medios, claims, textos editoriales, créditos ni advertencias `solo_referencia`.
- No se alteró la identidad visual.
- Los otros 40 archivos del ZIP de entrada se conservaron byte por byte; el `index.html` del hub contiene únicamente el cambio descrito.

## Comprobaciones posteriores

- El enlace `#bienvenida` resuelve a un ID existente.
- No quedan fragmentos locales sin destino en los cuatro HTML.
- Los recursos locales referenciados por HTML existen.
- Los cinco JavaScript pasan `node --check`.
- Las cuatro hojas CSS pasan el análisis sintáctico de `tinycss2` sin errores de nivel superior.
- El ZIP supera `testzip()`.

## Límites

Esta reparación no certifica el renderizado visual ni las interacciones en Chromium. La navegación real sigue sin poder repetirse en este entorno por la política administrada del navegador. No se han creado capturas nuevas ni se ha usado un harness inline como sustituto de la navegación HTTP.
