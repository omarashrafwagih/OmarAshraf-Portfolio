// Mobile Menu Button
const mobileMenuBtn = document.getElementById("menu-btn");
const myNav = document.querySelector("nav");
const myNavLinks = document.querySelectorAll(".menu ul a");

mobileMenuBtn.addEventListener("click", () => {
  myNav.classList.toggle("show");
  mobileMenuBtn.children[0].classList.toggle("fa-xmark");
  mobileMenuBtn.children[0].classList.toggle("fa-bars-staggered");
  document.body.classList.toggle("overflow-it");

  myNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.click();
    });
  });
});
