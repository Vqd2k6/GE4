(() => {
  const stage = document.getElementById('deckStage');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const slideCounter = document.getElementById('slideCounter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const notesBtn = document.getElementById('notesBtn');
  const notesDrawer = document.getElementById('notesDrawer');
  const notesClose = document.getElementById('notesClose');
  const notesBody = document.getElementById('notesBody');
  const notesSlideNum = document.getElementById('notesSlideNum');
  const fullscreenBtn = document.getElementById('fullscreenBtn');

  let current = 0;

  // Responsive 16:9 Stage Scaling
  function scaleStage() {
    const pad = 20;
    const scaleX = (window.innerWidth - pad) / 1280;
    const scaleY = (window.innerHeight - pad) / 720;
    const scale = Math.min(scaleX, scaleY, 1.4);
    stage.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', scaleStage);
  scaleStage();

  function padTwo(n) {
    return String(n).padStart(2, '0');
  }

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides[current].classList.remove('active');

    current = index;
    slides[current].classList.add('active');

    slideCounter.textContent = `${padTwo(current + 1)} / ${padTwo(slides.length)}`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;

    notesSlideNum.textContent = current + 1;
    notesBody.textContent =
      slides[current].dataset.notes || 'No speaker notes for this slide.';
  }

  goToSlide(0);

  prevBtn.addEventListener('click', () => goToSlide(current - 1));
  nextBtn.addEventListener('click', () => goToSlide(current + 1));

  document.querySelectorAll('[data-goto]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.goto);
      if (!Number.isNaN(target)) goToSlide(target);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.target.isContentEditable) return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      goToSlide(current + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToSlide(current - 1);
    } else if (e.key.toLowerCase() === 'n') {
      notesDrawer.classList.toggle('open');
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullscreen();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) {
      goToSlide(dx < 0 ? current + 1 : current - 1);
    }
  }, { passive: true });

  notesBtn.addEventListener('click', () => notesDrawer.classList.toggle('open'));
  notesClose.addEventListener('click', () => notesDrawer.classList.remove('open'));

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullscreen);
})();
