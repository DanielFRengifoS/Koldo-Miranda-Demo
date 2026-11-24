(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  document.querySelectorAll('img.remote-image').forEach((img) => {
    const status = img.closest('figure')?.querySelector('[data-image-status]');
    const applyFallback = () => {
      if (img.dataset.fallbackApplied === 'true' || !img.dataset.fallback) return;
      img.dataset.fallbackApplied = 'true';
      img.src = img.dataset.fallback;
      img.alt = 'Composición gráfica original de demo; la referencia fotográfica externa no pudo cargarse.';
      if (status) {
        status.textContent = 'La referencia remota no cargó en esta conexión; se muestra una composición gráfica de demo.';
        status.classList.add('status-fallback');
      }
    };
    img.addEventListener('error', applyFallback);
    if (img.complete && img.naturalWidth === 0) applyFallback();
  });
})();
