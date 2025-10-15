document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('form-status');
    const submitButton = document.getElementById('submitButton');

    // Função auxiliar para mostrar erros de validação
    function displayError(id, message) {
        const errorElement = document.getElementById(id + '-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Função auxiliar para limpar erros
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.textContent = '');
        statusMessage.textContent = '';
        statusMessage.className = 'status-message';
    }

    // Função de Validação do Formulário
    function validateForm(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        clearErrors();

        let isValid = true;

        // 1. Validação do Nome
        const name = document.getElementById('name').value.trim();
        if (name.length < 3) {
            displayError('name', 'Por favor, insira seu nome completo.');
            isValid = false;
        }

        // 2. Validação do E-mail (formato básico)
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            displayError('email', 'Por favor, insira um e-mail válido.');
            isValid = false;
        }

        // 3. Validação do Assunto
        const subject = document.getElementById('subject').value;
        if (subject === '') {
            displayError('subject', 'Por favor, selecione um assunto.');
            isValid = false;
        }

        // 4. Validação da Mensagem
        const message = document.getElementById('message').value.trim();
        if (message.length < 10) {
            displayError('message', 'A mensagem deve ter pelo menos 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            // Se a validação passar, simula o envio do formulário
            simulateFormSubmission(name, email, subject, message);
        }
    }

    // Função para simular o envio (pois não há um backend real)
    function simulateFormSubmission(name, email, subject, message) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Simula um delay de rede de 2 segundos
        setTimeout(() => {
            // Lógica de envio (aqui você enviaria os dados para um servidor real)

            // Exemplo de como os dados seriam capturados:
            console.log('--- Dados do Formulário ---');
            console.log(`Nome: ${name}`);
            console.log(`E-mail: ${email}`);
            console.log(`Assunto: ${subject}`);
            console.log(`Mensagem: ${message}`);
            console.log('---------------------------');

            // Simulação de Sucesso
            statusMessage.className = 'status-message success';
            statusMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';

            form.reset(); // Limpa o formulário após o "envio"

            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensagem';

        }, 2000); // 2 segundos de simulação
    }

    // Adiciona o listener de evento ao formulário
    form.addEventListener('submit', validateForm);

    // Adiciona listener para limpar erro ao digitar
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', () => {
                displayError(id, ''); // Limpa o erro ao digitar/mudar
            });
        }
    });

});
