document.addEventListener('DOMContentLoaded', function() {

    // --- EFEITO DE HEADER AO ROLAR ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNavPanel = document.querySelector('.mobile-nav');
    const body = document.body;
    function toggleMenu() {
        const isActive = hamburgerBtn.classList.contains('active');
        hamburgerBtn.setAttribute('aria-expanded', !isActive);
        hamburgerBtn.classList.toggle('active');
        mobileNavPanel.classList.toggle('active');
        body.classList.toggle('nav-open');
    }
    if (hamburgerBtn && mobileNavPanel) {
        hamburgerBtn.addEventListener('click', toggleMenu);
        document.addEventListener('click', function(event) {
            if (!mobileNavPanel.contains(event.target) && !hamburgerBtn.contains(event.target) && mobileNavPanel.classList.contains('active')) {
                toggleMenu();
            }
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mobileNavPanel.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // --- ANIMAÇÃO DE ENTRADA DE ELEMENTOS ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(element => {
            const delay = element.getAttribute('data-delay');
            if (delay) {
                element.style.transitionDelay = `${delay}ms`;
            }
            observer.observe(element);
        });
    }

    // --- EFEITO DE LUZ INTERATIVO NOS CARDS ---
    document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- INICIA O EFEITO DE PARTÍCULAS NA HERO SECTION ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle", },
                "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 2, "random": true, "anim": { "enable": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
            },
            "retina_detect": true
        });
    }
});
