/* Shared progressive enhancements. Every page works without this file;
   it only adds menu, motion, gallery and filter behaviour on top. */
(function () {
  var motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  /* Mobile menu */
  var menuBtn = document.querySelector('.menu-btn');
  var header = document.querySelector('header.site');
  if (menuBtn && header) {
    menuBtn.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }

  /* Header: solid background once scrolled, hides on scroll down, returns on scroll up */
  if (header) {
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      header.classList.toggle('scrolled', y > 8);
      if (!header.classList.contains('open')) {
        header.classList.toggle('hide', y > lastY && y > 240);
      }
      lastY = y;
    }, { passive: true });
  }

  /* Scroll reveal: added by JS so content stays visible if this file fails */
  if (motionOK && 'IntersectionObserver' in window) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.card, .sec-head, .values .v, .review, .two-col > *, .plate, .notes')
      .forEach(function (el) { el.classList.add('reveal'); revealIO.observe(el); });
  }

  /* Product gallery: swipeable track, thumbnails scroll to their slide */
  var track = document.getElementById('track');
  if (track) {
    var slides = Array.prototype.slice.call(track.querySelectorAll('img'));
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('#thumbs button'));
    var count = document.getElementById('count');
    var go = function (i) {
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: motionOK ? 'smooth' : 'auto' });
    };
    var setCurrent = function (i) {
      if (count) count.textContent = i + 1;
      thumbs.forEach(function (t, j) { t.setAttribute('aria-current', i === j ? 'true' : 'false'); });
    };
    thumbs.forEach(function (t, i) { t.addEventListener('click', function () { go(i); }); });
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var currentIndex = function () { return Math.round(track.scrollLeft / track.clientWidth); };
    if (prev) prev.addEventListener('click', function () { go(Math.max(0, currentIndex() - 1)); });
    if (next) next.addEventListener('click', function () { go(Math.min(slides.length - 1, currentIndex() + 1)); });
    var shown = 0;
    track.addEventListener('scroll', function () {
      var i = currentIndex();
      if (i !== shown) { shown = i; setCurrent(i); }
    }, { passive: true });
  }

  /* Sticky buy bar on phones once the inline buttons have scrolled away */
  var bar = document.getElementById('buybar');
  var inlineActions = document.querySelector('.pinfo .actions');
  if (bar && inlineActions && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      bar.classList.toggle('show', !e.isIntersecting && e.boundingClientRect.top < 0);
    }).observe(inlineActions);
  }

  /* Copy e-mail address (for visitors without a mail app) */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(btn.dataset.copy).then(function () {
        var label = btn.textContent;
        btn.textContent = 'Kopiert ✓';
        setTimeout(function () { btn.textContent = label; }, 1800);
      }, function () { btn.textContent = 'Bitte manuell kopieren'; });
    });
  });

  /* Category filter, kept in the URL hash so the browser's back button restores it */
  var filterBtns = document.querySelectorAll('#filters button');
  if (filterBtns.length) {
    var apply = function (cat) {
      filterBtns.forEach(function (b) {
        var on = b.dataset.cat === cat;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on);
      });
      document.querySelectorAll('#products .card').forEach(function (card) {
        card.style.display = (cat === 'alle' || card.dataset.cat === cat) ? '' : 'none';
      });
    };
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.dataset.cat);
        history.replaceState(null, '', btn.dataset.cat === 'alle' ? location.pathname : '#' + encodeURIComponent(btn.dataset.cat));
      });
    });
    var fromHash = decodeURIComponent(location.hash.slice(1));
    var known = Array.prototype.some.call(filterBtns, function (b) { return b.dataset.cat === fromHash; });
    apply(known ? fromHash : 'alle');
  }
})();
