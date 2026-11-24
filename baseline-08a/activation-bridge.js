/* Contrato de activación del hub GTL AI para páginas 01/02/03 y futuras intros 08E. */
(function () {
  'use strict';
  var state = window.parent === window ? 'active' : 'inactive';
  var demo = null;

  function publish(nextState, nextDemo, reason) {
    if (nextState !== 'active' && nextState !== 'inactive') return;
    var changed = state !== nextState || demo !== nextDemo;
    state = nextState;
    demo = nextDemo || demo;
    document.documentElement.dataset.gtlActivation = state;
    if (!changed) return;
    window.dispatchEvent(new CustomEvent('gtlai:activationchange', {
      detail: { state: state, demo: demo, reason: reason || 'message' }
    }));
  }

  window.GTLActivation = Object.freeze({
    getState: function () { return state; },
    isActive: function () { return state === 'active'; },
    subscribe: function (callback) {
      if (typeof callback !== 'function') return function () {};
      var listener = function (event) { callback(event.detail); };
      window.addEventListener('gtlai:activationchange', listener);
      return function () { window.removeEventListener('gtlai:activationchange', listener); };
    }
  });
  document.documentElement.dataset.gtlActivation = state;

  window.addEventListener('message', function (event) {
    if (event.source !== window.parent || event.origin !== window.location.origin) return;
    var data = event.data;
    if (!data || data.type !== 'gtlai:activation' || data.version !== 1) return;
    publish(data.state, data.demo, data.reason);
  });

  window.dispatchEvent(new CustomEvent('gtlai:activationready', {
    detail: { state: state, demo: demo }
  }));
})();
