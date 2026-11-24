# Sistema de apertura · 08E

## Dirección y continuidad

| Identidad | Planteamiento | Desarrollo y clímax | Llegada real | Duración |
|---|---|---|---|---|
| 01 · Margen y memoria | Firma romana/cursiva sobre tinta vino; nombres de las dos casas | Un hilo recorre la superficie y se vuelve lomo; el papel abre su plano en perspectiva y deja ver la lectura | El mismo `.star-folio`, con sus pestañas y panel seleccionado, queda en su geometría original | 4,1 s |
| 02 · Contrapunto | Campo negro, firma condensada y marcas rojas de registro | Impresión por pasos; los carteles emergen en direcciones opuestas y la tipografía se estampa con desfase | Los dos `.territory` del díptico real quedan listos para revelar el relato | 3,7 s |
| 03 · Atlas abierto | Firma geométrica, retícula cobalto y dos esquinas de la marca | Las esquinas recorren ejes ortogonales hacia los territorios; una ventana construye el atlas mientras se alinean arte y palabras | La misma `.star-atlas` conserva conjunto o foco H01/H02, controles y lectura | 4,2 s |

No hay una segunda copia del STAR, un vídeo del sitio ni una captura superpuesta. Las firmas vectoriales existentes se conservan; en 03, las dos piezas usan exactamente los trazados del símbolo aprobado. Las transformaciones, recortes y transparencias temporales se aplican a nodos reales. Cancelarlas al acabar devuelve sus estilos normales. La distinta coreografía reside en plegar / imprimir / trazar un espacio.

## Contrato de activación

`activation-bridge.js`, `welcome.css` e `index.html` permanecen idénticos a 08C. En Bugfix01, `welcome.js` admite `file://` al enviar activaciones y no deja que una excepción interrumpa el cambio de opción. El controlador nuevo `intro/intro-08e.js` se suscribe al puente y combina su estado con la visibilidad del documento.

1. Precarga de iframe: estado `armed`, cero ejecuciones y cero animaciones. No hay un temporizador de intro esperando en segundo plano. Solo existe un watchdog inicial de 2,2 s que libera la página si el controlador no carga; se limpia al construirlo.
2. Flanco inactivo → activo: se crea una secuencia finita. Un mensaje activo duplicado o una pulsación de la pestaña seleccionada no genera otra ejecución.
3. Desactivación: se cancelan animaciones y temporizadores. La cubierta inicial se rearma mientras la opción está oculta, evitando enseñar el estado final antes del siguiente comienzo. La selección de STAR se conserva.
4. Fin u omisión: estado `ready`, sin efectos de intro; controles originales utilizables. No hay reproducción en bucle ni reproducción de la bienvenida GTL AI.

La activación reposiciona el documento al inicio debajo de la cubierta opaca. La primera entrada directa con ancla se abre estática en su destino; los retornos desde el selector sí reproducen la apertura y regresan al inicio, manteniendo el estado elegido del STAR. Ocultar el documento y volver también crea una nueva activación visual. Una variación importante de viewport durante la secuencia la termina, sin reiniciarla.

## Omisión y lectura estática

«Omitir apertura» mide al menos 44 px, permanece por encima de los componentes y no requiere esperar. Escape omite. Tab, teclas de avance, gesto de desplazamiento o intención de clic terminan la secuencia y dejan continuar. No se mueve el foco automáticamente ni se atrapa; la cabecera sigue accesible. El primer clic sobre el campo de arte omite; una interacción con la cabecera omite y continúa su acción normal.

`prefers-reduced-motion: reduce` muestra la página estática completa. Si la preferencia cambia durante una secuencia, esta termina; quitar la preferencia no dispara una intro espontánea. Sin JS, no se arma la cubierta y el contenido estático conserva ambos relatos. La ausencia de Web Animations abre también el estado estático. Si el archivo del controlador no llega, el watchdog evita una cubierta permanente. Las fotos remotas no son condición de salida.

## Revisión

`intro-review.html` pausa las mismas animaciones reales a 800 ms en la apertura; en el desarrollo, a 2150 / 2150 / 2550 ms para 01 / 02 / 03. «Llegada» elimina todos los efectos y muestra el STAR real. Los parámetros internos son `intro-review=1&intro-frame=start|middle|end`; omitir `intro-frame` reproduce libremente. La vista fija es una herramienta de revisión, no la lógica de reproducción del hub.

Telemetría de inspección: `html[data-intro-id]`, `data-intro-status`, `data-intro-phase`, `data-intro-runs`, `data-intro-end`; `window.GTLIntro.getState()` solo informa del estado. No se expone una función de reproducción manual en producción.

## Transporte local · Bugfix01

`welcome.js` e `intro/intro-review.js` usan `*` como destino únicamente cuando la página se abre con protocolo `file:`. En HTTP/HTTPS se conserva el origen exacto. El mensaje se dirige al `contentWindow` del iframe conocido y el receptor no cambia sus validaciones. `activationState` se escribe tras un envío correcto. La animación y su contrato de una ejecución por activación no cambian.

## Fluidez inicial · Bugfix02

La firma de 01 ya no repite una pose durante el establecimiento temprano ni anima un filtro blur. La firma y el símbolo de 02 interpolan continuamente al principio; `steps(5,end)` se conserva únicamente en la estampación posterior de los titulares de los carteles. El easing se aplica por tramo con un reloj global lineal para evitar llegar demasiado pronto a una meseta. Solo las capas pequeñas de marca de 01/02 reciben `will-change` mientras la cubierta está armada o reproduciéndose. No cambian la duración total, los tiempos de pliegue/impresión ni la tercera opción.
