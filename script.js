// Importa a biblioteca GSAP para animações avançadas
// (O link para ela já está no HTML)

document.addEventListener('DOMContentLoaded', function() {

    // --- ANIMAÇÕES DE TEXTO CINEMATOGRÁFICAS ---
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(elem => {
        gsap.from(elem.children, {
            y: '100%',
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // --- EFEITO DE BOTÃO MAGNÉTICO ---
    const magneticButtons = document.querySelectorAll('.magnetic-button');
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;

            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.5,
                ease: 'power3.out'
            });
        });

        btn.addEventListener('mouseout', function() {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

    // --- EFEITO DE HEADER ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    // ... (código do menu que já estava bom) ...

    // --- LÓGICA DA ANIMAÇÃO DE SCROLL (PARA OUTROS ELEMENTOS) ---
    // ... (código do IntersectionObserver que já estava bom) ...
});

// Incluir o plugin ScrollTrigger do GSAP
gsap.registerPlugin(ScrollTrigger);
