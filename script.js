document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO MENU HAMBÚRGUER (VERSÃO ROBUSTA E ISOLADA) ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNavPanel = document.querySelector('.mobile-nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // Função para abrir/fechar o menu
    function toggleMenu() {
        const isActive = hamburgerBtn.classList.contains('active');
        hamburgerBtn.setAttribute('aria-expanded', !isActive);
        hamburgerBtn.classList.toggle('active');
        mobileNavPanel.classList.toggle('active');
        body.classList.toggle('nav-open');
    }

    // Verifica se os elementos existem antes de adicionar os eventos
    if (hamburgerBtn && mobileNavPanel) {
        // Evento de clique no botão hambúrguer
        hamburgerBtn.addEventListener('click', toggleMenu);

        // Evento para fechar o menu ao clicar em um link
        navLinks.forEach((link, index) => {
            // Adiciona a variável --i para o delay da animação do CSS
            link.style.setProperty('--i', index);

            link.addEventListener('click', () => {
                if (mobileNavPanel.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (INTOCADA) ---
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
