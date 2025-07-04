/* 背景がフェードイン */
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

/* モーダル */
const buttons = document.querySelectorAll('.card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

// ボタンクリックで該当モーダルを表示
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-modal');
    document.getElementById(target).style.display = 'flex';
  });
});

// 閉じるボタンで非表示
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// モーダル背景クリックでも閉じる
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

