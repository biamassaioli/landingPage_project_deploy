const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
});

const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let email = document.getElementById('email').value;
    
    let data = {
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let emailcontainer = getElementById('email-container');

    let agradecimento = `<p> Email cadastrado com sucesso!</p>`;

    emailcontainer.innerHTML = agradecimento;
});