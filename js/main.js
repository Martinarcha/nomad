console.log("NOMAD Connected");

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header")

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-hidden");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navMenu.classList.add("nav-menu-hidden");
    }
});

document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
        navMenu.classList.add("nav-menu-hidden");
    }
});
