/*Scroll Reveal*/
ScrollReveal({
  distance: "80px",
  duration: 600,
  delay: 600,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });
ScrollReveal().reveal(".footer-iconTop", { origin: "bottom", delay: 100 });

/*Typed Js*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Graphic Designer", "Video Editor"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*footer-iconTop JS*/
/*footer-iconTop JS*/
document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home");
  const footerIconTop = document.querySelector(".footer-iconTop");

  if (
    homeSection.offsetTop <= window.scrollY &&
    window.scrollY < homeSection.offsetTop + homeSection.offsetHeight
  ) {
    footerIconTop.style.opacity = 0;
  }
});

window.addEventListener("scroll", () => {
  const homeSection = document.getElementById("home");
  const footerIconTop = document.querySelector(".footer-iconTop");

  if (
    homeSection.offsetTop <= window.scrollY &&
    window.scrollY < homeSection.offsetTop + homeSection.offsetHeight
  ) {
    footerIconTop.style.opacity = 0;
  } else {
    footerIconTop.style.opacity = 1;
  }
});
