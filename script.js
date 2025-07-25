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

const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-button');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
  hamburger.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburger.style.display = 'flex';
  closeBtn.style.display = 'none';
});

// 🔽 追加する部分：リンククリックで自動的に閉じる
const navLinks = navMenu.querySelectorAll('a'); // メニュー内のすべてのリンク

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

const modal = document.getElementById("imageModal");
const img = document.getElementById("seatingImage");
const modalImg = document.getElementById("modalImage");
const closeButton = document.getElementById("modalClose");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

closeButton.onclick = function () {
  modal.style.display = "none";
}

// 背景クリックでも閉じる
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}