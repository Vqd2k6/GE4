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
  const versionBtn = document.getElementById('versionBtn');
  const partSteps = Array.from(document.querySelectorAll('[data-part-goto]'));

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

    // Highlight the current part in the 4-part progress bar (improved version only)
    const part = slides[current].dataset.part;
    partSteps.forEach((step) => {
      step.classList.toggle('is-active', step.dataset.partGoto === part);
      step.classList.toggle('is-done', Number(step.dataset.partGoto) < Number(part));
    });

    // Remember the position in the URL so switching versions keeps the same slide
    history.replaceState(null, '', `#slide=${current + 1}`);
  }

  function slideFromHash() {
    const match = location.hash.match(/slide=(\d+)/);
    if (!match) return 0;
    return Math.min(Math.max(Number(match[1]) - 1, 0), slides.length - 1);
  }

  goToSlide(slideFromHash());

  // Switch between the original deck and the improved deck, keeping the slide number
  function switchVersion() {
    if (!versionBtn) return;
    window.location.href = `${versionBtn.dataset.target}#slide=${current + 1}`;
  }

  versionBtn?.addEventListener('click', switchVersion);

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
    } else if (e.key.toLowerCase() === 'v') {
      switchVersion();
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
