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

/*Typed Js*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Graphic Designer", "Video Editor"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*footer-iconTop JS*/
document.addEventListener("DOMContentLoaded", function () {
  const footerIconTop = document.querySelector('.footer-iconTop');

  function updateIconVisibility() {
      const isHomeSection = window.location.hash === "" || window.location.hash === "#home";
      const isScrolled = window.scrollY > 100;

      footerIconTop.style.display = (isHomeSection && !isScrolled) ? 'none' : 'block';
  }

  // Initial check on page load
  updateIconVisibility();

  // Update icon visibility on hash change and scroll
  window.addEventListener("hashchange", updateIconVisibility);
  window.addEventListener("scroll", updateIconVisibility);
});



/*Loader*/
document.addEventListener("DOMContentLoaded", function() {

  document.body.classList.add("no-scroll");
  
  // show loader initially
  document.getElementById("loader").classList.add("show");

  // hide loader after 5 seconds
  setTimeout(function() {
    document.getElementById("loader").style.opacity = 0;
  }, 3000);

  // show main content after loader is hidden
  setTimeout(function() {
    document.getElementById("loader").remove();
    document.body.classList.add("loaded");
  }, 3000);
});
