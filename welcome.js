/* Hub GTL AI · navegación diferida y puente de activación para 01/02/03. */
'use strict';
(function () {
  var welcome = document.getElementById('bienvenida');
  var hub = document.querySelector('.hub');
  var start = document.getElementById('empezar-demo');
  var aperture = document.getElementById('demo-aperture');
  var cover = document.getElementById('cover-photo');
  var photoStatus = document.getElementById('photo-status');
  var home = document.getElementById('volver-portada');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var buttons = Array.from(document.querySelectorAll('.switch button'));
  var frames = new Map(buttons.map(function (button) {
    return [button.dataset.demo, document.getElementById(button.getAttribute('aria-controls'))];
  }));
  var launched = false;
  var currentId = null;
  var launchToken = 0;
  var cleanup = function () {};

  function sendActivation(frame, state, reason) {
    if (!frame || frame.dataset.loaded !== 'true' || !frame.contentWindow) return;
    if (frame.dataset.activationState === state) return;
    // file:// has the opaque origin "null", which is not a valid targetOrigin.
    // Only the three known iframe windows receive these lifecycle messages.
    var targetOrigin = window.location.protocol === 'file:' ? '*' : window.location.origin;
    try {
      frame.contentWindow.postMessage({
        type: 'gtlai:activation', version: 1, state: state,
        demo: frame.dataset.demo, reason: reason || 'sync'
      }, targetOrigin);
      // Cache only successful sends; a failed send must not poison the next click.
      frame.dataset.activationState = state;
      delete frame.dataset.activationError;
    } catch (error) {
      frame.dataset.activationError = 'postmessage-failed';
      // A transport error must not interrupt select() before the view changes.
    }
  }

  function frameShouldBeActive(frame) {
    return launched && welcome.hidden && !hub.hidden && !document.hidden &&
      !document.body.classList.contains('launching') &&
      !document.body.classList.contains('revealing') &&
      frame.classList.contains('is-on');
  }

  function syncFrame(frame, reason) {
    if (frame.dataset.loaded !== 'true') return;
    sendActivation(frame, frameShouldBeActive(frame) ? 'active' : 'inactive', reason);
  }

  function syncAll(reason) {
    frames.forEach(function (frame) { syncFrame(frame, reason); });
  }

  function scheduleSync(reason) {
    window.requestAnimationFrame(function () { syncAll(reason); });
  }

  frames.forEach(function (frame, id) {
    frame.dataset.demo = id;
    frame.addEventListener('load', function () {
      frame.dataset.loaded = 'true';
      syncFrame(frame, 'iframe-load');
    });
  });

  function select(id) {
    if (!frames.has(id)) return;
    if (currentId && currentId !== id) {
      sendActivation(frames.get(currentId), 'inactive', 'selection-change');
    }
    currentId = id;
    buttons.forEach(function (button) {
      var active = button.dataset.demo === id;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    frames.forEach(function (frame, key) {
      var active = key === id;
      frame.classList.toggle('is-on', active);
      if (active && !frame.getAttribute('src')) frame.setAttribute('src', frame.dataset.src);
    });
    scheduleSync('selection-change');
  }

  function commit(id, method) {
    if (window.location.hash !== '#' + id) window.history[method](null, '', '#' + id);
  }

  function finish(id, focus) {
    cleanup();
    ++launchToken;
    launched = true;
    document.body.classList.remove('launching', 'revealing');
    welcome.hidden = true;
    hub.hidden = false;
    hub.removeAttribute('inert');
    hub.removeAttribute('aria-hidden');
    select(id);
    start.removeAttribute('aria-busy');
    scheduleSync('hub-visible');
    if (focus) document.getElementById('tab-' + id).focus({ preventScroll: true });
  }

  function reset() {
    cleanup();
    ++launchToken;
    frames.forEach(function (frame) { sendActivation(frame, 'inactive', 'return-to-welcome'); });
    launched = false;
    currentId = null;
    document.body.classList.remove('launching', 'revealing');
    welcome.hidden = false;
    hub.hidden = true;
    start.removeAttribute('aria-busy');
    buttons.forEach(function (button) {
      button.setAttribute('aria-selected', String(button.dataset.demo === '01'));
      button.tabIndex = button.dataset.demo === '01' ? 0 : -1;
    });
    frames.forEach(function (frame) { frame.classList.remove('is-on'); });
    start.focus({ preventScroll: true });
  }

  function enter() {
    var id = '01';
    var token = ++launchToken;
    launched = true;
    commit(id, 'pushState');
    if (reduced.matches) { finish(id, true); return; }

    var rect = aperture.getBoundingClientRect();
    var cta = start.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
      x = cta.left + cta.width / 2;
      y = cta.top + cta.height / 2;
    }
    document.body.style.setProperty('--door-x', x + 'px');
    document.body.style.setProperty('--door-y', y + 'px');
    start.setAttribute('aria-busy', 'true');
    hub.hidden = false;
    hub.setAttribute('inert', '');
    hub.setAttribute('aria-hidden', 'true');
    document.body.classList.add('launching');

    var frame = frames.get(id);
    var started = false;
    var waitTimer;
    var endTimer;
    var warmTimer;
    var complete = function (event) {
      if (event && (event.target !== hub || event.animationName !== 'open-demo')) return;
      if (token === launchToken) finish(id, true);
    };

    function reveal() {
      if (started || token !== launchToken) return;
      started = true;
      window.clearTimeout(waitTimer);
      frame.removeEventListener('load', reveal);
      if (reduced.matches) { finish(id, true); return; }
      document.body.classList.add('revealing');
      hub.addEventListener('animationend', complete);
      endTimer = window.setTimeout(complete, 1200);
    }

    cleanup = function () {
      window.clearTimeout(waitTimer);
      window.clearTimeout(warmTimer);
      window.clearTimeout(endTimer);
      frame.removeEventListener('load', reveal);
      hub.removeEventListener('animationend', complete);
    };

    select(id);
    warmTimer = window.setTimeout(function () {
      if (frame.dataset.loaded === 'true') reveal();
      else {
        frame.addEventListener('load', reveal);
        waitTimer = window.setTimeout(reveal, 500);
      }
    }, 100);
  }

  start.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (!launched) enter();
  });

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      select(button.dataset.demo);
      commit(button.dataset.demo, 'replaceState');
    });
  });

  document.querySelector('.switch').addEventListener('keydown', function (event) {
    var index = buttons.findIndex(function (button) { return button.getAttribute('aria-selected') === 'true'; });
    var next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
    else if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = buttons.length - 1;
    else return;
    event.preventDefault();
    buttons[next].click();
    buttons[next].focus({ preventScroll: true });
  });

  home.addEventListener('click', function (event) {
    event.preventDefault();
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    reset();
  });

  function syncHash(focus) {
    var id = window.location.hash.slice(1);
    if (frames.has(id)) finish(id, focus);
    else if (launched) reset();
  }

  function handleHash() {
    var id = window.location.hash.slice(1);
    var active = buttons.find(function (button) { return button.getAttribute('aria-selected') === 'true'; });
    if (frames.has(id) && welcome.hidden && active && active.dataset.demo === id) return;
    syncHash(true);
  }

  window.addEventListener('popstate', handleHash);
  window.addEventListener('hashchange', handleHash);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) syncAll('document-hidden');
    else scheduleSync('document-visible');
  });
  window.addEventListener('pagehide', function () {
    frames.forEach(function (frame) { sendActivation(frame, 'inactive', 'pagehide'); });
  });
  window.addEventListener('pageshow', function () { scheduleSync('pageshow'); });
  window.addEventListener('focus', function () { scheduleSync('window-focus'); });

  if (cover) {
    function applyCoverFallback() {
      if (cover.dataset.fallbackApplied === 'true' || !cover.dataset.fallback) return;
      cover.dataset.fallbackApplied = 'true';
      cover.src = cover.dataset.fallback;
      cover.alt = 'Composición gráfica abstracta de respaldo para la portada; no es un retrato.';
      if (photoStatus) {
        photoStatus.textContent = 'La referencia fotográfica externa no cargó; se muestra una composición gráfica de respaldo.';
        photoStatus.classList.add('is-fallback');
      }
    }
    cover.addEventListener('error', applyCoverFallback);
    if (cover.complete && cover.naturalWidth === 0) applyCoverFallback();
  }

  // Prepare all three documents and their local intro assets behind the cover.
  // The activation bridge keeps their animations armed until the view is shown.
  frames.forEach(function (frame) {
    if (!frame.getAttribute('src')) frame.setAttribute('src', frame.dataset.src);
  });

  syncHash(false);
})();
