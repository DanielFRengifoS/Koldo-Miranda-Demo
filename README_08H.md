# 08H — Curated media

Open `index.html` for the presentation, or `media-review.html` to compare all three updated designs at desktop and mobile widths.

## Selection
- 01 Editorial: wine selection in the opening folio, kitchen-team still for the second chapter, family promotional image in the people/story context. Golden coupe and Roda details reinforce the warm reading rhythm. La Favorita food reel and G&V team reel in their respective chapters.
- 02 Posters: amber cocktail, wine selection and mint/citrus mosaic against the G&V campaign illustration. Full videos in the detail panels.
- 03 Atlas: Roda detail against a still of the kitchen team. Hand-lettered social artwork on the G&V route. Golden and amber cocktails in a paired study; videos in detail sections. Dynamic route context also uses the new local images.
- RCN feature: closed-by-default optional press clip in each G&V section, preserving original third-party footage.

## Runtime
Local optimized WebP stills, local MP4 videos and extracted poster images. Native controls, no autoplay, preload=none, playsinline. Only one video plays per document; pause on inactive presentation, hidden document, closed press panel, page exit or offscreen. No automatic restart. All intro scripts, CSS and activation navigation are unchanged from Bugfix04, including main-page preload.

## Validation
- Browser: 01 editorial and 03 atlas desktop; all three at 375px content width with no horizontal overflow. 02 mobile mosaic images loaded and visible. Native La Favorita playback tested (readyState 4, advancing time). Poster and controls visible.
- Activation, atmosphere and media lifecycle regression scripts pass.
- All local image, poster, video, stylesheet and script paths checked. Nine video placements (three shared MP4 files, not duplicate copies).
- All three supplied MP4 files preserved byte-for-byte. Source selection and placement notes in `media/SELECTION.md`; original source manifest in `media/source-selection.csv`.

Original full-resolution photos and unused alternatives remain in the supplied source pack. This update includes the chosen optimized files. Internal demo status and original attribution limits preserved.


## 08H Bugfix01 — subtítulos, imagen y bucles
- Subtítulos de intro 01 ocultos también antes de iniciar JavaScript, coincidiendo con su primer fotograma: una única aparición.
- Retirado el primer plano de cocina rechazado. Sustituido por la toma del espacio a los 22s del mismo reel; actualizados textos, recortes, contexto dinámico y póster del video.
- Todos los videos con autoplay, muted, loop y playsinline. Se reproducen automáticamente cuando están visibles, tras la intro, y se reanudan al volver a la vista. Pausan al ocultarse o cambiar de propuesta; el clip de prensa arranca al desplegarse. Controles nativos conservados.
- Verificación en navegador: subtítulo a 0ms con opacidad 0; video reproduciendo sin clic, muted y loop activos, tiempo avanzando; nueva imagen revisada en atlas. Regresiones de activación y reproducción pasan; rutas locales y atributos de los nueve videos comprobados.
- Esta sección sustituye la descripción anterior de reproducción manual y una sola reproducción simultánea.


## 08H Bugfix02 — route photos and seamless video
- Replaced both illustrations in option 03’s route cards: golden cocktail for La Favorita, room still for G&V. Updated captions and image crop rules.
- Removed native video controls throughout all three live proposals; retained muted autoplay, loop and playsinline behavior.
- Browser verified route cards and video playing without controls (time advancing). Media lifecycle and navigation regressions pass. All nine live video placements checked for no controls and retained autoplay/loop/muted.


## 08H Bugfix03 — welcome portrait
Welcome page now uses the supplied family promotional image, framed on Koldo through a circular CSS crop. Original local image unchanged; source caption updated. Browser verified; presentation views and video behavior untouched.
