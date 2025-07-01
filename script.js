document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO MENU HAMBÚRGUER (JÁ ESTAVA BOM) ---
    // ... (código do menu hambúrguer aqui) ...

    // --- NOVA LÓGICA PARA O ACORDEÃO DE SERVIÇOS ---
    const accordionItems = document.querySelectorAll('.service-accordion-item');

    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                // Fecha todos os outros itens
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                    }
                });

                // Abre ou fecha o item clicado
                item.classList.toggle('active');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = 0;
                }
            });
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (JÁ ESTAVA BOM) ---
    // ... (código do IntersectionObserver aqui) ...
});
