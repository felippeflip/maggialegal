document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations utilizing IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const nav = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinksList = document.querySelectorAll('.nav-links a');

    // Menu toggle logic for mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.style.clipPath = navMenu.classList.contains('active') ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
            navMenu.classList.toggle('active');
            let isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu on link click
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    });

    // Shrink navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.padding = '15px 0';
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
    });

    // Reveal animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // stop observing once visible (one-time animation)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
});
