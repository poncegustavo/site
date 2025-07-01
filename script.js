document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO MENU HAMBÚRGUER (JÁ APROVADA) ---
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
        // ... (código do menu que já estava bom, omitido por brevidade) ...
    }

    // --- NOVA LÓGICA PARA O ACORDEÃO DE SERVIÇOS ---
    const accordionItems = document.querySelectorAll('.service-accordion-item');

    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Fecha todos os outros itens para um comportamento de acordeão clássico
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = '0px';
                        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                    }
                });

                // Alterna o item clicado
                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    header.setAttribute('aria-expanded', 'true');
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = '0px';
                    header.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (JÁ APROVADA) ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length > 0) {
       // ... (código do IntersectionObserver que já estava bom) ...
    }
});
