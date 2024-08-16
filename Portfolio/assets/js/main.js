/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  if (navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    setTimeout(() => navbar.style.display = "none", 300); // Wait for the transition to finish before hiding
  } else {
    navbar.style.display = "block";
    setTimeout(() => navbar.classList.add('active'), 10); // Add the 'active' class after display block
  }
};

/* Ensure Navbar is visible on desktop after resizing */
window.onresize = () => {
  if (window.innerWidth > 768) {
    navbar.style.display = "";
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  }
};

/* Scroll Section Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /* Sticky Navbar */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);

  /* Remove Toggle Icon and Navbar */
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
  navbar.style.display = "none"; // Ensure the navbar is hidden when scrolling
};





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
  strings: ["Frontend Developer", "UI/UX Designer", "Video Editor"],
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
