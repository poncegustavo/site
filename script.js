document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a'); // Todos os links do menu móvel

    // Função para fechar o menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflowY = 'auto'; // Habilita o scroll do body
    }

    // Toggle do menu ao clicar no hambúrguer
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active'); // Anima o hambúrguer
        mobileNav.classList.toggle('active'); // Mostra/Esconde o menu
        
        // Impede o scroll do body quando o menu está aberto
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    });

    // Fecha o menu móvel ao clicar em um link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Fecha o menu móvel ao redimensionar a tela (caso o usuário mude de orientação, etc.)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) { // Tamanho onde o menu hamburguer desaparece no CSS
            closeMobileMenu();
        }
    });
});
