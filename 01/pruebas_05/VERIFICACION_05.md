# Verificación 05 · Opción B03

**Fecha:** 23.11.2026

## Comprobaciones realizadas

- [x] `index.html` existe y declara `lang="es"`, viewport y título.
- [x] CSS y JavaScript locales enlazados con rutas relativas.
- [x] Los SVG de respaldo y la composición abstracta local existen.
- [x] Cada enlace interno `#...` tiene un destino en el documento.
- [x] Los IDs HTML son únicos.
- [x] Los enlaces externos de fuentes y fotografías usan `target="_blank"` con `rel="noopener"`.
- [x] No hay formularios, botones de reserva, mensajes de éxito ni integraciones simuladas.
- [x] H01 y H02 están dentro de sus respectivos capítulos y no se presentan como premios.
- [x] M007 lleva advertencia visible: no es una fotografía de Gallinas y Valientes.
- [x] No aparece el claim Michelin 2006.
- [x] Las imágenes remotas tienen respaldo local y texto de estado.
- [x] El menú móvil y la navegación por anclas están implementados en JS local.

## Pruebas no certificadas

- [ ] Captura real en navegador a 390 px.
- [ ] Captura real en navegador a 1440 px.
- [ ] Verificación de carga fotográfica dentro del navegador del paquete.

**Motivo:** Chromium devolvió `ERR_BLOCKED_BY_ADMINISTRATOR` al abrir tanto `file://` como `http://127.0.0.1`; no fue posible ejecutar la inspección visual en navegador. Las referencias M006, M001, M005 y M008 sí se inspeccionaron visualmente en la vista web de sus URLs originales; M007 agotó el tiempo de espera. Esta limitación se deja explícita y no se reemplaza por una afirmación de prueba exitosa.
