(function () {
  function initLightbox() {
    var ov = document.createElement('div');
    ov.id = 'lb-ov';
    var img = document.createElement('img');
    var cap = document.createElement('div');
    cap.id = 'lb-cap';
    ov.appendChild(img);
    ov.appendChild(cap);
    document.body.appendChild(ov);

    ov.addEventListener('click', function () {
      ov.classList.remove('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') ov.classList.remove('open');
    });
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'IMG' && t.closest('table.wiki-table')) {
        img.src = t.src;
        img.alt = t.alt || '';
        img.classList.toggle('lb-hd', t.classList.contains('card-hd'));
        cap.textContent = t.getAttribute('title') || t.alt || '';
        ov.classList.add('open');
      }
    });
  }

  function initCopy() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('button.copy-id');
      if (!btn) return;
      var text = btn.getAttribute('data-copy') || '';
      if (!text) return;
      var finish = function () {
        btn.classList.add('copied');
        var prev = btn.textContent;
        btn.textContent = '✓';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.textContent = prev;
        }, 900);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(finish, finish);
      } else {
        finish();
      }
    });
  }

  function initCatalog() {
    var root = document.getElementById('catalog-root');
    if (!root) return;

    var searchInput = document.getElementById('wiki-search');
    var clearBtn = document.getElementById('wiki-clear');
    var countEl = document.getElementById('result-count');
    var emptyEl = document.getElementById('empty-state');
    var sections = Array.prototype.slice.call(root.querySelectorAll('.cat-section'));
    var rows = Array.prototype.slice.call(root.querySelectorAll('tbody tr[data-search]'));
    var totalRows = rows.length;

    var state = { q: '', cat: 'ALL', sub: 'ALL', rarity: 'ALL', flag: 'ALL' };

    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        if (searchInput) searchInput.focus();
      }
    });

    function applyFilters() {
      var q = state.q.trim().toLowerCase();
      var tokens = q ? q.split(/\s+/) : [];
      var visibleTotal = 0;

      for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        var ok = true;
        if (state.cat !== 'ALL' && r.getAttribute('data-cat') !== state.cat) ok = false;
        if (ok && state.sub !== 'ALL' && r.getAttribute('data-sub') !== state.sub) ok = false;
        if (ok && state.rarity !== 'ALL' && r.getAttribute('data-rarity') !== state.rarity) ok = false;
        if (ok && state.flag !== 'ALL') {
          var flags = (r.getAttribute('data-flag') || '').split(',');
          if (flags.indexOf(state.flag) === -1) ok = false;
        }
        if (ok && tokens.length) {
          var hay = r.getAttribute('data-search') || '';
          for (var j = 0; j < tokens.length; j++) {
            if (hay.indexOf(tokens[j]) === -1) {
              ok = false;
              break;
            }
          }
        }
        r.classList.toggle('is-hidden', !ok);
        if (ok) visibleTotal++;
      }

      for (var s = 0; s < sections.length; s++) {
        var sec = sections[s];
        var secVisible = sec.querySelectorAll('tbody tr:not(.is-hidden)').length;
        sec.classList.toggle('is-hidden', secVisible === 0);
        var sc = sec.querySelector('.cat-count');
        if (sc) sc.textContent = '(' + secVisible + ')';
      }

      if (countEl) {
        var tpl = countEl.getAttribute('data-tpl') || 'Mostrando {n} de {total}';
        countEl.textContent = tpl.replace('{n}', visibleTotal).replace('{total}', totalRows);
      }
      if (emptyEl) {
        emptyEl.style.display = visibleTotal === 0 ? 'block' : 'none';
      }

      var subBar = document.getElementById('weapon-sub-filters');
      if (subBar) {
        subBar.style.display = (state.cat === 'ALL' || state.cat === 'WEAPON2') ? 'flex' : 'none';
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.q = searchInput.value;
        applyFilters();
      });
    }

    document.addEventListener('click', function (e) {
      var pill = e.target.closest('.pill[data-filter]');
      if (!pill) return;
      var group = pill.getAttribute('data-filter');
      var val = pill.getAttribute('data-val');
      state[group] = val;
      if (group === 'cat' && val !== 'ALL' && val !== 'WEAPON2') {
        state.sub = 'ALL';
        var subPills = document.querySelectorAll('.pill[data-filter="sub"]');
        for (var k = 0; k < subPills.length; k++) {
          subPills[k].classList.toggle('active', subPills[k].getAttribute('data-val') === 'ALL');
        }
      }
      var peers = document.querySelectorAll('.pill[data-filter="' + group + '"]');
      for (var p = 0; p < peers.length; p++) {
        peers[p].classList.toggle('active', peers[p] === pill);
      }
      applyFilters();
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        state = { q: '', cat: 'ALL', sub: 'ALL', rarity: 'ALL', flag: 'ALL' };
        if (searchInput) searchInput.value = '';
        var allPills = document.querySelectorAll('.pill[data-filter]');
        for (var i = 0; i < allPills.length; i++) {
          allPills[i].classList.toggle('active', allPills[i].getAttribute('data-val') === 'ALL');
        }
        applyFilters();
      });
    }

    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLightbox();
    initCopy();
    initCatalog();
  });
})();
