const button = document.getElementById("view-portfolio");
const screen = document.getElementById("loading-screen");

button.addEventListener("click", () => {
  btnHome.classList.add("btnActive");
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

const homeText = document.getElementById("home-button-text");
const projectsText = document.getElementById("project-list");
const experienceText = document.getElementById("experience-text");
const contactsText = document.getElementById("contact-me");

btnHome.addEventListener("click", () => {
  btnHome.classList.add("btnActive");
  btnProjects.classList.remove("btnActive");
  btnExperience.classList.remove("btnActive");
  btnContacts.classList.remove("btnActive");

  homeText.style.display = "block";
  projectsText.style.display = "none";
  experienceText.style.display = "none";
  contactsText.style.display = "none";
});

btnProjects.addEventListener("click", () => {
  btnHome.classList.remove("btnActive");
  btnProjects.classList.add("btnActive");
  btnExperience.classList.remove("btnActive");
  btnContacts.classList.remove("btnActive");

  homeText.style.display = "none";
  projectsText.style.display = "flex";
  experienceText.style.display = "none";
  contactsText.style.display = "none";
});

btnExperience.addEventListener("click", () => {
  btnHome.classList.remove("btnActive");
  btnProjects.classList.remove("btnActive");
  btnExperience.classList.add("btnActive");
  btnContacts.classList.remove("btnActive");

  homeText.style.display = "none";
  projectsText.style.display = "none";
  experienceText.style.display = "flex";
  contactsText.style.display = "none";
});

btnContacts.addEventListener("click", () => {
  btnHome.classList.remove("btnActive");
  btnProjects.classList.remove("btnActive");
  btnExperience.classList.remove("btnActive");
  btnContacts.classList.add("btnActive");

  homeText.style.display = "none";
  projectsText.style.display = "none";
  experienceText.style.display = "none";
  contactsText.style.display = "flex";
});
