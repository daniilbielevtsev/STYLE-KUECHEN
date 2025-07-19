window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.querySelector("#preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => preloader.remove(), 500);
  }, 700);
});
