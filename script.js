document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO MENU HAMBÚRGUER (JÁ ESTAVA BOM) ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNavPanel = document.querySelector('.mobile-nav');
    const body = document.body;

    if (hamburgerBtn && mobileNavPanel) {
        // ... (código do menu que já estava bom) ...
    }

    // --- NOVA LÓGICA PARA O ACORDEÃO DE SERVIÇOS ---
    const accordionItems = document.querySelectorAll('.service-accordion-item');

    if (accordionItems.length > 0) {
        // Abre o primeiro item por padrão
        const firstItem = accordionItems[0];
        firstItem.classList.add('active');
        firstItem.querySelector('.accordion-content').style.maxHeight = firstItem.querySelector('.accordion-content').scrollHeight + 'px';

        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Fecha todos os itens
                accordionItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                });

                // Se o item clicado não estava ativo, abre ele
                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (JÁ ESTAVA BOM) ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length > 0) {
        // ... (código do IntersectionObserver que já estava bom) ...
    }
});
