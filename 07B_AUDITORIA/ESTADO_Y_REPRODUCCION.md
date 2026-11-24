# Estado y reproducción · 07B

## Actualización recibida del usuario

El usuario indicó que no hace falta solicitar material adicional del B y que la aceptación humana ya está disponible. Esta actualización se registra como información proporcionada por el usuario; no se inventa ni se reproduce una nota de aprobación que no esté incorporada al ZIP de entrada.

## Estado de esta reparación

- Reparación concreta aplicada: enlace «Portada» corregido de `#home` a `#bienvenida`.
- Integridad de los archivos originales: conservada salvo el cambio explícito del `index.html` del hub.
- Aceptación humana: el usuario confirma que ya está disponible; no se vuelve a solicitar.
- Capturas nuevas de navegador: no generadas.
- Navegación HTTP en Chromium: no verificada en este entorno por `net::ERR_BLOCKED_BY_ADMINISTRATOR`.

## Reproducción

1. Descomprimir el ZIP.
2. Abrir una terminal en la carpeta raíz.
3. Ejecutar `python3 -m http.server 8765`.
4. Abrir `http://127.0.0.1:8765/` en un navegador de desarrollo autorizado.
5. Pulsar «Entrar a la demo» y seleccionar 01, 02 y 03.
6. Pulsar «Portada» y confirmar que se vuelve a la bienvenida.
7. Abrir directamente `/01/index.html`, `/02/index.html` y `/03/index.html`.
8. Repetir las capturas de B03 a 1440 px y 390 px y guardar evidencia del hub.

## Pruebas ejecutadas en esta reparación

Los resultados concretos están en `RESUMEN_CHECKS_FINAL.json`. Las pruebas estáticas y de servidor no deben confundirse con una prueba de renderizado real.
