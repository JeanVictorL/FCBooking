let office = document.querySelector('#office');
let inicio = document.querySelector('#btn1');
let sair = document.querySelector('#btn2');
let dia = document.querySelector('#dia');
let mes = document.querySelector('#mes');

inicio.addEventListener('click', () =>{
    window.location.href = '/';
});

sair.addEventListener('click', () =>{
    window.location.href = '/';
});

let which = localStorage.getItem('which');
dia.innerHTML = localStorage.getItem('dia');
mes.innerHTML = localStorage.getItem('mes');

if (which == 1) {
    office.innerHTML = "São Paulo";
} else if (which == 2) {
    office.innerHTML = "Santos"
} else {
    console.log('ocorreu um erro')
}