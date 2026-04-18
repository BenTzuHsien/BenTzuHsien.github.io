function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  const overlay = document.getElementById('lightbox-overlay');
  const box = document.getElementById('lightbox-box');

  document.body.appendChild(overlay);
  overlay.style.display = 'flex';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.background = 'rgba(0,0,0,0.75)';
      box.style.transform = 'scale(1)';
      box.style.opacity = '1';
    });
  });
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  const box = document.getElementById('lightbox-box');
  overlay.style.background = 'rgba(0,0,0,0)';
  box.style.transform = 'scale(0.85)';
  box.style.opacity = '0';

  setTimeout(() => { overlay.style.display = 'none'; }, 250);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});