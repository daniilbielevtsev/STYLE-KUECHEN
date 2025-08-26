const modal = document.querySelector(".modal");
const btn = document.querySelector(".hero-info-btn");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
