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

  // Selector de precios Venezuela / Internacional
  var root = document.documentElement;
  root.classList.add('js');
  var setRegion = function (region) {
    root.setAttribute('data-region', region);
    document.querySelectorAll('[data-set-region]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-region') === region));
    });
  };
  try {
    var saved = localStorage.getItem('region');
    if (saved === 've' || saved === 'int') setRegion(saved);
  } catch (e) {}
  document.querySelectorAll('[data-set-region]').forEach(function (b) {
    b.addEventListener('click', function () {
      var region = b.getAttribute('data-set-region');
      setRegion(region);
      try { localStorage.setItem('region', region); } catch (e) {}
    });
  });

  // Año actual en el footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Formulario: arma el mensaje y abre WhatsApp Business
  document.querySelectorAll('[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ''; };
      var lines = en
        ? ['Hi David, I am ' + v('nombre') + '.', v('negocio') && 'Business: ' + v('negocio'), 'I need: ' + v('servicio'), v('mensaje')]
        : ['Hola David, soy ' + v('nombre') + '.', v('negocio') && 'Negocio: ' + v('negocio'), 'Necesito: ' + v('servicio'), v('mensaje')];
      var text = lines.filter(Boolean).join('\n');
      window.open('https://wa.me/' + form.getAttribute('data-wa') + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  });
})();
