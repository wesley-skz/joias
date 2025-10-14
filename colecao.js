document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    // 2. Seleciona todos os cartões de produto
    const productCards = document.querySelectorAll('.product-card');

    // 3. Adiciona um "ouvinte de evento" de clique a cada botão de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            // Pega o valor do atributo 'data-filter' do botão clicado
            const filterValue = button.getAttribute('data-filter');
            
            // Chama a função para filtrar os produtos
            filterProducts(filterValue);
        });
    });

    /**
     * Função para filtrar os produtos com base no valor do filtro.
     * @param {string} filter - O valor da categoria ('anel', 'colar', 'all', etc.).
     */
    function filterProducts(filter) {
        productCards.forEach(card => {
            // Pega o valor da categoria de cada produto
            const category = card.getAttribute('data-category');

            // Lógica de Filtragem:
            // 1. Se o filtro for 'all', ou
            // 2. Se a categoria do produto for igual ao filtro,
            // então o produto deve ser mostrado.
            if (filter === 'all' || category === filter) {
                // Mostra o cartão (remove a classe 'hidden')
                card.classList.remove('hidden');
                // Adiciona um pequeno delay (opcional) para transição de opacidade
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10); 
            } else {
                // Esconde o cartão (adiciona a classe 'hidden')
                // Primeiro zera a opacidade para uma transição suave
                card.style.opacity = '0';
                // Depois adiciona 'hidden' para remover do layout
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 500); // Deve ser maior ou igual ao tempo de transição do CSS
            }
        });
    }

    // Opcional: Chama o filtro inicial para garantir que tudo está certo (por exemplo, ao carregar a página).
    // filterProducts('all'); 
});
