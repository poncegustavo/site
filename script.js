document.addEventListener('DOMContentLoaded', function() {

    // --- EFEITO DE LUZ (SPOTLIGHT) ---
    const spotlight = document.querySelector('.spotlight');
    if (spotlight) {
        document.addEventListener('mousemove', (e) => {
            // Atualiza as variáveis CSS --x e --y com a posição do mouse
            spotlight.style.setProperty('--x', e.clientX + 'px');
            spotlight.style.setProperty('--y', e.clientY + 'px');
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

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL ---
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
