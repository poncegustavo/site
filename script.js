document.addEventListener('DOMContentLoaded', function() {
    // --- EFEITO DE HEADER QUE APARECE AO ROLAR ---
    const header = document.querySelector('.main-header');
    if (header) {
        const handleScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
    }

    // --- LÓGICA DO MENU HAMBÚRGUER (ESTÁVEL) ---
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
            const isClickInsideNav = mobileNavPanel.contains(event.target);
            const isClickOnHamburger = hamburgerBtn.contains(event.target);
            if (!isClickInsideNav && !isClickOnHamburger && mobileNavPanel.classList.contains('active')) {
                toggleMenu();
            }
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mobileNavPanel.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (ESTÁVEL) ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const delay = entry.target.getAttribute('data-delay');
                    if (delay) {
                        entry.target.style.transitionDelay = `${delay}ms`;
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(element => observer.observe(element));
    }
});
