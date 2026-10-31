// Menu burger (mobile / tablette)
(function () {
  var nav = document.querySelector('nav');
  var btn = document.querySelector('.nav-toggle');
  if (!nav || !btn) return;

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Ferme le menu après un clic sur un lien
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();