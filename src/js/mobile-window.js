const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const navLinks = document.querySelectorAll(".mobile-nav-list");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
