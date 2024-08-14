/*Scroll Reveal*/
ScrollReveal ({
    distance: '80px',
    duration: 600,
    delay: 600,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});


/*Typed Js*/
const typed = new Typed ('.multiple-text',{
    strings: ['Frontend Developer', 'Graphic Designer', 'Video Editor'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});