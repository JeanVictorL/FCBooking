//pega o input submit
const enviar = document.querySelector('#enviarAutenticacao');

//verifica o click no submit
enviar.addEventListener('click', () => {
    //pega o input de nome
    const nome = document.querySelector('.inputNome');
    const valorNome = nome.value;
    if (valorNome == "") {
        alert("Digite seu nome");
    } else {
        console.log(valorNome);
    }

    //pega o input de email
    const email = document.querySelector('#emailAutenticacao');
    const valorEmail = email.value;
    if (valorEmail == "") {
        alert("Digite seu email");
    } else {
        console.log(valorEmail);
    }

    if (valorEmail != "" && valorNome != "") {
        //redirecionamento
        console.log("redirecionamento efetuado")
        window.location.href = '/office';
    }
});