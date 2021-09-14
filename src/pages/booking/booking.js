let printPercent = document.querySelector('#percent')
let button = document.querySelector('#cadastrar')

async function getSP() {
  let response = await fetch('../db/Matriz');
  let data = await response.json();
  let percent = (data.atual/data.total*100).toFixed(2);
  printPercent.innerHTML = percent+'%'
}

async function getST() {
  let response = await fetch('../db/Santos');
  let data = await response.json();
  let percent = (data.atual/data.total*100).toFixed(2);
  printPercent.innerHTML = percent+'%'
}

let which = localStorage.getItem('which');

if (which == 1) {
  getSP();
} else if (which == 2) {
  getST();
} else {
  console.log('ocorreu um erro')
}

button.addEventListener('click', () => {
  const options = {
    method: 'POST'
  }
  
  if (which == 1) {
    fetch('../db/Matriz', options);
    getSP();
    window.location.href = '/success';
  } else if (which == 2) {
    fetch('../db/Santos', options);
    getST();
    window.location.href = '/success';
  } else {
    console.log('ocorreu um erro')
  }
});