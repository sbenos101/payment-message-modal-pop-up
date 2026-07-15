(function () {
  var STORAGE_KEY = 'pnm_payment_notice_shown';

  if (window.__pnmScriptRan) return;
  window.__pnmScriptRan = true;

  var overlays = document.querySelectorAll('.pnm-overlay');

  if (!overlays.length) return;

  if (window.location.pathname.replace(/\/+$/, '') === '/contact-us') {
    overlays.forEach(function (overlay) {
      overlay.classList.add('pnm-overlay-hidden');
    });
    return;
  }

  function closeOverlay(overlay) {
    overlay.classList.add('pnm-overlay-hidden');
  }

  if (sessionStorage.getItem(STORAGE_KEY) === '1') {
    overlays.forEach(function (overlay) {
      overlay.classList.add('pnm-overlay-hidden');
    });
    return;
  }

  overlays.forEach(function (overlay) {

    overlay.classList.remove('pnm-overlay-hidden');

    sessionStorage.setItem(STORAGE_KEY, '1');

    var closeBtn = overlay.querySelector('.pnm-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        closeOverlay(overlay);
      });
    }

    var contactLink = overlay.querySelector('.pnm-link');
    if (contactLink) {
      contactLink.addEventListener('click', function () {
        closeOverlay(overlay);
      });
    }
  });
})();
