document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica de Filtro de Produtos ---
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                // Remove a classe 'hidden' para mostrar o card
                card.classList.remove('hidden');
            } else {
                // Adiciona a classe 'hidden' para ocultar o card (via CSS)
                card.classList.add('hidden');
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // 1. Atualiza o estado "active" dos botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 2. Aplica o filtro
            filterProducts(filterValue);
        });
    });

    // --- Lógica do Menu Hamburguer Responsivo ---
    
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' para mostrar/ocultar o menu (via CSS)
        mainNav.classList.toggle('active');
    });

    // --- Lógica de Atualização do Ano no Rodapé (Melhoria) ---
    
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) {
        // Cria uma expressão regular para encontrar o ano (ex: 2025)
        const currentYear = new Date().getFullYear();
        
        // Substitui o ano fixo na string pelo ano atual
        const newText = footerParagraph.textContent.replace(/\d{4}/, currentYear);
        footerParagraph.textContent = newText;
    }
});
