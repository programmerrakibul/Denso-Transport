const navBtn = document.querySelector("#mobile-btn");
const navMenu = document.querySelector("#navbar");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("showNav");
});
