const darkTheme = {
  "--text-color-header": "#000000be",
  "--header-button-color": "#fff",
  "--main-titel-color": "#e9dfd6ff",
  "--main-text-color": "rgba(255, 255, 255, 0.85)",
  "--body-bg-color": "#2D261F",
  "--titel-header": "#d6d0c8ff",
  "--team-card-bg": "#231909",
};

const lightTheme = {
  "--text-color-header": "#ffffff",
  "--header-button-color": "#000",
  "--main-titel-color": "#453030",
  "--main-subtitel-color": "#957d62",
  "--main-text-color": "rgba(0, 0, 0, 0.75)",
  "--footer-bg-color": "#372626",
  "--body-bg-color": "#f8f5f2",
  "--titel-header": "#ffffffff",
  "--team-card-bg": "#E6D5C0",
};

const toggleButton = document.querySelector("#toggleTheme");
let dark = false;

toggleButton.addEventListener("click", () => {
  const theme = dark ? lightTheme : darkTheme;
  for (const key in theme) {
    document.documentElement.style.setProperty(key, theme[key]);
  }
  dark = !dark;
});
// ======================
const btn = document.querySelector("#toggleTheme");

btn.addEventListener("click", () => {
  if (btn.classList.contains("light-mode")) {
    btn.classList.remove("light-mode");
    btn.classList.add("dark-mode");
    document.body.classList.add("dark");
  } else {
    btn.classList.remove("dark-mode");
    btn.classList.add("light-mode");
    document.body.classList.remove("dark");
  }
});

// начальное состояние
btn.classList.add("light-mode");
