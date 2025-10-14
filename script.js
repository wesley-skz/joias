document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidade do Menu Responsivo (Hamburguer)
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    // Abre/Fecha o menu ao clicar no botão
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        // Oculta/Mostra o ícone de acordo com o estado (opcional)
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Fecha o menu ao clicar em um link (melhora a experiência no mobile)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se o menu está ativo antes de fechar
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    });

    // 2. Exemplo de Manipulação de Formulário (Apenas um alerta simulado)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            
            // Simulação de envio
            alert("Sua mensagem foi enviada para Brilhantes Joias! Em breve entraremos em contato.");
            
            // Resetar o formulário após o "envio"
            contactForm.reset();
        });
    }

    // Mensagem de console para depuração
    console.log("Brilhantes Joias: Scripts carregados com sucesso.");
});
