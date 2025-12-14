const button = document.querySelector("#themeBtn");
const body = document.querySelector("body");

function toggleTheme() {
  body.classList.toggle("dark");
}

if (button) {
  button.addEventListener("click", toggleTheme);
}
