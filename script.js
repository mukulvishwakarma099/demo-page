const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger_icon.innerText =
    hamburger_icon.innerText === "menu" ? "close" : "menu";
  mobile_menu.classList.toggle("is-open");

  hamburger_icon.innerText === "menu"
    ? (main.style.opacity = "1")
    : (main.style.opacity = ".5");
});
