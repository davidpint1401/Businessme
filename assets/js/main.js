// David Pinto · La Nave Marketing
// Menú móvil, año del footer y envío del formulario a Formspree.
(function () {
  var en = document.documentElement.lang === 'en';

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? (en ? 'Close menu' : 'Cerrar menú') : (en ? 'Open menu' : 'Abrir menú'));
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Año actual en el footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Formulario: envío sin recargar la página
  document.querySelectorAll('[data-form]').forEach(function (form) {
    var status = form.querySelector('.form__status');
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form__status';
      status.textContent = en ? 'Sending…' : 'Enviando…';
      button.disabled = true;
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.classList.add('is-ok');
        status.textContent = en
          ? 'Thanks! I will get back to you soon.'
          : '¡Gracias! Te respondo muy pronto.';
      }).catch(function () {
        status.classList.add('is-error');
        status.textContent = en
          ? 'It could not be sent. Please write to me on WhatsApp.'
          : 'No se pudo enviar. Escríbeme por WhatsApp, por favor.';
      }).finally(function () {
        button.disabled = false;
      });
    });
  });
})();
