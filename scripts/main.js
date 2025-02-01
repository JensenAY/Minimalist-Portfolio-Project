const button = document.getElementById("view-portfolio");
const screen = document.getElementById("loading-screen");

button.addEventListener("click", () => {
  screen.style.animation = "remove 1s ease forwards";
  setTimeout(() => {
    screen.style.display = "none";
  }, 1000);
});
