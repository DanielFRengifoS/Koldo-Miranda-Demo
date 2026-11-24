(() => {
  const media = document.querySelectorAll('[data-remote-media] img');
  media.forEach((img) => {
    const frame = img.closest('[data-remote-media]');
    const markLoaded = () => frame.setAttribute('data-state', 'loaded');
    const markError = () => frame.setAttribute('data-state', 'error');
    img.addEventListener('load', markLoaded, { once: true });
    img.addEventListener('error', markError, { once: true });
    if (img.complete) {
      if (img.naturalWidth > 0) markLoaded();
      else markError();
    }
  });
})();
