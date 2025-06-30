document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            // Alterna o estado 'active' do ícone
            this.classList.toggle('active');
            
            // Alterna a visibilidade do menu mobile
            mobileNav.classList.toggle('active');
            
            // Bloqueia a rolagem do body quando o menu está aberto
            body.classList.toggle('nav-open');
        });
    }

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL ---
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Quando o elemento está 10% visível na tela
                if (entry.isIntersecting) {
                    // Adiciona a classe 'visible' para ativar a animação CSS
                    entry.target.classList.add('visible');
                    
                    // (Opcional) Para de observar o elemento depois que ele foi animado
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento está visível
        });

        // Observa cada um dos elementos
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

});
