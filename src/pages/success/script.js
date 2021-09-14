let office = document.querySelector('#office');
let inicio = document.querySelector('#btn1')
let sair = document.querySelector('#btn2')

inicio.addEventListener('click', () =>{
    window.location.href = '/';
});

sair.addEventListener('click', () =>{
    window.location.href = '/';
});

let which = localStorage.getItem('which');

if (which == 1) {
    office.innerHTML = "São Paulo";
} else if (which == 2) {
    office.innerHTML = "Santos"
} else {
    console.log('ocorreu um erro')
}