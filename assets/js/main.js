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

  // Precios según el país del visitante (/api/geo, en Vercel).
  // Venezuela ve solo los precios nacionales; cualquier otro país, solo los
  // internacionales. Con el país detectado se quita el selector y los precios
  // del otro mercado. Si no hay país (en tu computadora o para buscadores),
  // se muestra el selector Venezuela / Internacional como respaldo.
  var root = document.documentElement;
  root.classList.add('js');
  var setRegion = function (region) {
    root.setAttribute('data-region', region);
    document.querySelectorAll('[data-set-region]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-region') === region));
    });
  };
  var lockRegion = function (region) {
    setRegion(region);
    document.querySelectorAll('.region-switch').forEach(function (el) { el.remove(); });
    document.querySelectorAll('[data-show]').forEach(function (el) {
      if (el.getAttribute('data-show') !== region) el.remove();
    });
    root.classList.remove('geo-pending');
  };
  var unlockRegion = function () {
    if (!root.classList.contains('geo-pending')) return;
    root.classList.remove('geo-pending');
    document.querySelectorAll('[data-set-region]').forEach(function (b) {
      b.addEventListener('click', function () { setRegion(b.getAttribute('data-set-region')); });
    });
  };

  // Idioma según el país: Venezuela y países de habla hispana en español,
  // el resto en inglés. Si la persona eligió ES / EN a mano, se respeta.
  var HISPANIC = ['ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ'];
  var stored = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  document.querySelectorAll('.lang-switch a[hreflang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('lang', a.getAttribute('hreflang')); } catch (e) {}
    });
  });
  if (/bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent)) {
    unlockRegion();
  } else {
    setTimeout(unlockRegion, 3000);
    fetch('/api/geo').then(function (r) { return r.ok ? r.json() : null; }).then(function (g) {
      if (!g || !g.country) { unlockRegion(); return; }
      if (!stored('lang')) {
        var want = HISPANIC.indexOf(g.country) >= 0 ? 'es' : 'en';
        var link = document.querySelector('.lang-switch a[hreflang="' + want + '"]');
        if (link) { location.replace(link.getAttribute('href') + location.hash); return; }
      }
      lockRegion(g.country === 'VE' ? 've' : 'int');
    }).catch(unlockRegion);
  }

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
