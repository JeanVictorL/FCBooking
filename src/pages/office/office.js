const proximo = document.querySelector('#btnProx');
const voltar = document.querySelector('#voltar')


const sp = document.querySelector("#percentSP")
const st = document.querySelector("#percentST")

async function getSP() {
    let response = await fetch('../db/Matriz');
    let data = await response.json();
    let percent = `${(data.atual/data.total*100).toFixed(2)}% de ocupação`;
    sp.innerHTML = percent
}

async function getST() {
    let response = await fetch('../db/Santos');
    let data = await response.json();
    let percent = `${(data.atual/data.total*100).toFixed(2)}% de ocupação`;
    st.innerHTML = percent
}

getSP();
getST();

let which;

proximo.addEventListener('click', () => {

    let empresas = document.querySelectorAll(".checkbox");

    let nome = [empresas[0].checked, empresas[1].checked];

    if (nome[0] == true) {
        which = 1;
        localStorage.setItem('which', which);
        window.location.href = '/booking'

    } else if (nome[1] == true) {
        which = 2;
        localStorage.setItem('which', which);
        window.location.href = '/booking';
    } else {
        console.log("como vc fez isso?");
    }

});

voltar.addEventListener('click', () => {
    window.location.href = '/login'
})


//fetch na rota dentro do index.js