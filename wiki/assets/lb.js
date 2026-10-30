document.addEventListener('DOMContentLoaded', () => {
  const ov = document.createElement('div');
  ov.id = 'lbOverlay';
  const im = document.createElement('img');
  const cap = document.createElement('div');
  cap.id = 'lbCap';
  ov.appendChild(im); ov.appendChild(cap);
  document.body.appendChild(ov);
  const close = () => { ov.classList.remove('on'); document.body.style.overflow = ''; };
  ov.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.querySelectorAll('section img').forEach(el => {
    el.addEventListener('click', () => {
      im.src = el.src;
      cap.textContent = el.title || el.alt || '';
      const small = el.naturalWidth <= 192;
      im.style.height = small ? '72vh' : '';
      im.style.width = small ? 'auto' : '';
      ov.classList.toggle('px', el.naturalWidth <= 256);
      ov.classList.add('on');
      document.body.style.overflow = 'hidden';
    });
  });
});
