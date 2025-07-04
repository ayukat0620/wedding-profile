
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in-section');

  function checkVisibility() {
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        fader.classList.add('is-visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // 初期表示時のチェック
});

