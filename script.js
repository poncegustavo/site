document.addEventListener('DOMContentLoaded', function() {
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

    // --- NOVA LÓGICA PARA O ACORDEÃO DE SERVIÇOS ---
    const accordionItems = document.querySelectorAll('.service-accordion-item');
    if (accordionItems.length > 0) {
        // Abre o primeiro item por padrão para o visitante já ver um exemplo
        const firstItem = accordionItems[0];
        if (firstItem) {
            firstItem.classList.add('active');
            firstItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
            const firstContent = firstItem.querySelector('.accordion-content');
            firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
        }

        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Fecha todos os outros itens
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                        otherItem.querySelector('.accordion-content').style.maxHeight = '0px';
                    }
                });

                // Alterna (abre ou fecha) o item clicado
                if (!isActive) {
                    item.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    header.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = '0px';
                }
            });
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
