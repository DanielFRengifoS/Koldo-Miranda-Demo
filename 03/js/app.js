(() => {
  const routes = {
    favorita: {
      code: 'DESPUÉS DE ELEGIR / M03',
      title: 'La Favorita',
      summary: 'Cocina española y tapas; un territorio de ultramarinos descrito en fuentes públicas.',
      documented: 'ICEX clasifica La Favorita como cocina española y tapas. Crónicas de 2024 describen el concepto desde el imaginario de los ultramarinos.',
      sources: 'E001 · E003 · E004',
      pending: 'La documentación consultada no confirma la carta actual, platos disponibles, precios, horarios ni disponibilidad.',
      image: '../media/wine-roda.webp',
      imageAlt: 'Botella de vino Roda junto a detalles dorados en La Favorita.',
      artNote: 'Fotografía del archivo social de La Favorita; no confirma inventario actual.',
      detail: '#detalle-favorita'
    },
    gallinas: {
      code: 'DESPUÉS DE ELEGIR / M04',
      title: 'Gallinas y Valientes',
      summary: 'Una asociación pública con la tortilla vaga, presentada con un alcance de verificación limitado.',
      documented: 'Única FM (06.11.2026) presenta Gallinas y Valientes como nueva propuesta gastronómica de Koldo Miranda y la asocia a un homenaje a la tortilla vaga de Sacha Hormaechea. La nota disponible se limita al titular y la bajada.',
      sources: 'E008 · E009 (contexto)',
      pending: 'La nota no confirma receta, ingredientes, carta, precios, dirección exacta, horarios ni experiencia actual.',
      image: '../media/gallinas-room.webp',
      imageAlt: 'Mesas y vegetación en un fotograma del reel de apertura de Gallinas y Valientes.',
      artNote: 'Fotograma del espacio en el reel de apertura de Gallinas y Valientes.',
      detail: '#detalle-gallinas'
    }
  };

  const panel = document.getElementById('contexto');
  const routeLinks = document.querySelectorAll('[data-route]');
  const fields = {
    code: document.getElementById('context-code'),
    title: document.getElementById('context-title'),
    summary: document.getElementById('context-summary'),
    documented: document.getElementById('context-documented'),
    sources: document.getElementById('context-source'),
    pending: document.getElementById('context-pending'),
    image: document.getElementById('context-image'),
    artNote: document.getElementById('context-art-note'),
    detail: document.getElementById('context-detail')
  };

  if (!panel || !routeLinks.length) return;

  function selectRoute(key) {
    const route = routes[key];
    if (!route) return;

    fields.code.textContent = route.code;
    fields.title.textContent = route.title;
    fields.summary.textContent = route.summary;
    fields.documented.textContent = route.documented;
    fields.sources.textContent = route.sources;
    fields.pending.textContent = route.pending;
    fields.image.src = route.image;
    fields.image.alt = route.imageAlt;
    fields.artNote.textContent = route.artNote;
    fields.detail.href = route.detail;

    routeLinks.forEach((link) => {
      const active = link.dataset.route === key;
      link.setAttribute('aria-expanded', String(active));
      link.closest('.route-card')?.classList.toggle('is-selected', active);
    });

    panel.hidden = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    panel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  routeLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      selectRoute(link.dataset.route);
    });
  });
})();
