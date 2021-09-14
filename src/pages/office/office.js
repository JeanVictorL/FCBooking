const proximo = document.querySelector('#btnProx');
const sp =  document.querySelector("#percentSP")
const st =  document.querySelector("#percentST")

async function get() {
    let a = await fetch('../db/Matriz');
    console.log(a.json());
}

get()
//sp.innerHTML = "testando se ta rolando"
//st.innerHTML = "testando se ta rolando"

proximo.addEventListener('click', () => {

    let empresas = document.querySelectorAll(".checkbox");

    let nome = [empresas[0].checked, empresas[1].checked];

    if (nome[0] == true) {
        console.log("Matriz");

    } else if (nome[1] == true) {
        console.log("Filial");

    } else {
        console.log("como vc fez isso?");
    }

});

//fetch na rota dentro do index.js