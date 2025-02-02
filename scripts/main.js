const button = document.getElementById("view-portfolio");
const screen = document.getElementById("loading-screen");

button.addEventListener("click", () => {
  screen.style.animation = "remove 1s ease forwards";
  setTimeout(() => {
    screen.style.display = "none";
  }, 1000);
});

// Active Button on Click

const btnHome = document.getElementById("home");
const btnProjects = document.getElementById("projects");
const btnExperience = document.getElementById("experience");
const btnContacts = document.getElementById("contact");

btnHome.addEventListener("onClick", () => {
  btnHome.classList.add("btnActive");
  btnProjects.classList.remove("btnActive");
  btnExperience.classList.remove("btnActive");
  btnContacts.classList.remove("btnActive");
});

btnProjects.addEventListener("onClick", () => {
  btnHome.classList.remove("btnActive");
  btnProjects.classList.add("btnActive");
  btnExperience.classList.remove("btnActive");
  btnContacts.classList.remove("btnActive");
});

btnExperience.addEventListener("onClick", () => {
  btnHome.classList.remove("btnActive");
  btnProjects.classList.remove("btnActive");
  btnExperience.classList.add("btnActive");
  btnContacts.classList.remove("btnActive");
});

btnContacts.addEventListener("onClick", () => {
  btnHome.classList.remove("btnActive");
  btnProjects.classList.remove("btnActive");
  btnExperience.classList.remove("btnActive");
  btnContacts.classList.add("btnActive");
});
