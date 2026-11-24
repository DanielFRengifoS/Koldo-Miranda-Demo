/* STAR 08C. Local selection only; no carousel, autoplay, network request or business simulation. */
(() => {
  'use strict';
  const roots = [...document.querySelectorAll('[data-star]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const timers = new Map();
  const active = () => !document.hidden && (!window.GTLActivation || window.GTLActivation.isActive());
  function settle(root) {
    clearTimeout(timers.get(root)); timers.delete(root);
    root.getAnimations?.({subtree:true}).forEach(animation => {
      try { animation.finish(); } catch (_) { animation.cancel(); }
    });
    root.dataset.motion = 'idle';
  }
  function motion(root) {
    clearTimeout(timers.get(root));
    if (reduced.matches || !active()) { settle(root); return; }
    root.dataset.motion = 'changing';
    const duration = Number.parseFloat(getComputedStyle(root).getPropertyValue('--star-time')) || 700;
    timers.set(root, setTimeout(() => { root.dataset.motion = 'idle'; timers.delete(root); }, duration + 60));
  }
  function tabKeyboard(buttons, select) {
    buttons.forEach((button, index) => button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      else if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      else return;
      event.preventDefault(); buttons[next].focus(); select(buttons[next]);
    }));
  }
  roots.forEach(root => {
    root.dataset.enhanced = 'true';
    if (root.dataset.star === 'folio') {
      const controls = root.querySelector('.star-controls');
      const buttons = [...root.querySelectorAll('[data-star-choice]')];
      const panels = [...root.querySelectorAll('[data-star-panel]')];
      controls.hidden = false; controls.setAttribute('role', 'tablist');
      buttons.forEach(button => button.setAttribute('role', 'tab'));
      panels.forEach(panel => { panel.setAttribute('role', 'tabpanel'); panel.setAttribute('tabindex', '0'); panel.setAttribute('aria-labelledby', `folio-tab-${panel.dataset.starPanel}`); });
      function select(button, animate = true) {
        const key = button.dataset.starChoice;
        const changed = root.dataset.starState !== key;
        if (changed) settle(root);
        root.dataset.starState = key;
        buttons.forEach(control => { const selected = control === button; control.setAttribute('aria-selected', String(selected)); control.tabIndex = selected ? 0 : -1; });
        panels.forEach(panel => { panel.hidden = panel.dataset.starPanel !== key; });
        if (changed && animate) motion(root);
      }
      buttons.forEach(button => button.addEventListener('click', () => select(button)));
      tabKeyboard(buttons, select); select(buttons[0], false);
    }
    if (root.dataset.star === 'posters') {
      root.querySelectorAll('[data-star-unfold]').forEach(button => {
        const key = button.dataset.starUnfold;
        const poster = root.querySelector(`[data-star-poster="${key}"]`);
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        const label = button.querySelector('[data-star-trigger-label]');
        const front = poster.querySelector('.star-print-front');
        const name = key === 'h01' ? 'La Favorita' : 'Gallinas y Valientes';
        button.hidden = false; button.setAttribute('aria-expanded', 'false'); panel.hidden = true;
        button.addEventListener('click', () => {
          const open = button.getAttribute('aria-expanded') !== 'true';
          button.setAttribute('aria-expanded', String(open)); panel.hidden = !open; front.hidden = open; poster.dataset.open = String(open);
          label.textContent = open ? 'Volver a la lámina' : 'Revelar el relato';
          button.setAttribute('aria-label', `${open ? 'Volver a la lámina' : 'Revelar el relato'} de ${name}`);
          root.dataset.starState = [...root.querySelectorAll('[data-star-poster][data-open="true"]')].map(p => p.dataset.starPoster).join('+') || 'closed';
          if (open) motion(root); else settle(root);
        });
      });
    }
    if (root.dataset.star === 'atlas') {
      const controls = root.querySelector('.star-controls');
      const buttons = [...root.querySelectorAll('[data-star-focus]')];
      const readings = [...root.querySelectorAll('[data-star-reading]')];
      controls.hidden = false;
      function select(button, animate = true) {
        const key = button.dataset.starFocus;
        const changed = root.dataset.starState !== key;
        if (changed) settle(root);
        root.dataset.starState = key;
        buttons.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
        readings.forEach(reading => { reading.hidden = reading.dataset.starReading !== key; });
        if (changed && animate) motion(root);
      }
      buttons.forEach(button => button.addEventListener('click', () => select(button)));
      tabKeyboard(buttons, select); select(buttons[0], false);
    }
  });
  const settleAll = () => roots.forEach(settle);
  window.GTLActivation?.subscribe(detail => { if (detail.state !== 'active') settleAll(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) settleAll(); });
  reduced.addEventListener('change', () => { if (reduced.matches) settleAll(); });
  window.addEventListener('pagehide', settleAll);
})();
