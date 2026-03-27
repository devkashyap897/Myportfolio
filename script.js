// 1. SCROLL REVEAL ANIMATION
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if(elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
reveal(); // Trigger once on load

// 2. MOBILE MENU TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Hamburger Animation Logic can be added here
});

// Close menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

// 3. ACTIVE LINK HIGHLIGHTER (SCROLL SPY)
// Highlights the navbar link based on which section you are viewing
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
