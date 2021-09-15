let printPercent = document.querySelector('#percent');
let button = document.querySelector('#cadastrar');

async function getSP() {
  let response = await fetch('../db/Matriz');
  let data = await response.json();
  let percent = (data.atual / data.total * 100).toFixed(2);
  printPercent.innerHTML = percent + '%'
}

async function getST() {
  let response = await fetch('../db/Santos');
  let data = await response.json();
  let percent = (data.atual / data.total * 100).toFixed(2);
  printPercent.innerHTML = percent + '%'
}

let which = localStorage.getItem('which');


if (which == 1) {
  getSP();
} else if (which == 2) {
  getST();
} else {
  console.log('ocorreu um erro')
}

async function doStuff() {
  let dia = document.querySelector('.dia').value;
  let mes = document.querySelector('.mes').value;
  localStorage.setItem('dia', dia)
  localStorage.setItem('mes', mes)
  const options = {
    method: 'POST'
  }
  if (which == 1) {
    await fetch('../db/Matriz', options);
    getSP();
    window.location.href = '/success';
  } else if (which == 2) {
    await fetch('../db/Santos', options);
    getST();
    window.location.href = '/success';
  } else {
    console.log('ocorreu um erro')
  }
}

button.addEventListener('click', () => {
  doStuff();
});