document.addEventListener('DOMContentLoaded', function() {
    // --- EFEITO DE HEADER QUE APARECE AO ROLAR ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER (JÁ APROVADA) ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNavPanel = document.querySelector('.mobile-nav');
    const body = document.body;
    // ... (resto do código do menu que já estava bom) ...

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (JÁ APROVADA) ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    // ... (resto do código do IntersectionObserver que já estava bom) ...
});
