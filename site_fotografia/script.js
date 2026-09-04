const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove ('active-popup');
});


const form = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById('person').value;
    const email = document.getElementById('email_register').value;
    const senha = document.getElementById('password_register').value;

    // Cria um objeto com os dados
    const usuario = { nome, email, senha };

    // Salva no localStorage do navegador convertendo para texto
    localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
        mensagem.style.color = 'green';
        mensagem.textContent = 'Cadastro realizado com sucesso!';

    setTimeout(() => {
        mensagem.textContent = ''
        wrapper.classList.remove('active');
    }, 3000);

    form.reset(); // Limpa o formulário
});
