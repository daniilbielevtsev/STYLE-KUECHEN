let isScrolling;
window.addEventListener(
  "scroll",
  () => {
    isScrolling = true;
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => (isScrolling = false), 100);
  },
  { passive: true }
);

window.addEventListener("resize", () => {
  if (!isScrolling) setVH();
});
