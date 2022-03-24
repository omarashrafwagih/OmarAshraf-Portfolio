// Animate Hero Section On Load
const heroHeading = document.querySelector(".hero h1");
const heroParagraph = document.querySelector(".hero p");

window.addEventListener("load", () => {
  heroHeading.classList.add("animate__animated", "animate__fadeInLeftBig");
  heroParagraph.classList.add("animate__animated", "animate__fadeInRightBig");
});

// Rubber Band Effect on h1
let spans = document.querySelectorAll("span");

spans.forEach((span) => {
  span.onmouseenter = function () {
    span.classList.add("animate__rubberBand");
    setTimeout(() => {
      span.classList.remove("animate__rubberBand");
    }, 1000);
  };
});

// Sound Button On & Off Music
const musicBtn = document.querySelector(".sound");
const myAudio = document.querySelector("audio");
musicBtn.addEventListener("click", () => {
  if (musicBtn.children[1].textContent == "ON") {
    musicBtn.children[1].textContent = "OFF";
    musicBtn.children[1].style.color = "#e94152";
    myAudio.pause();
  } else {
    musicBtn.children[1].textContent = "ON";
    musicBtn.children[1].style.color = "#00c9ab";
    myAudio.play();
  }
});

// Mobile Menu Button
const mobileMenuBtn = document.getElementById("menu-btn");
const myNav = document.querySelector("nav");

mobileMenuBtn.addEventListener("click", () => {
  myNav.classList.toggle("show");
  mobileMenuBtn.children[0].classList.toggle("fa-xmark");
  mobileMenuBtn.children[0].classList.toggle("fa-bars-staggered");
  document.body.classList.toggle("overflow-it");
});
