const modal = document.querySelector("#myModal");
const btn = document.querySelector(".hero-info-btn");
const span = document.querySelector(".close");

// Открыть модал при клике на кнопку
btn.onclick = function () {
  modal.style.display = "block";
};

// Закрыть модал при клике на крестик
span.onclick = function () {
  modal.style.display = "none";
};

// Закрыть модал при клике вне модального окна
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
