let percent = document.querySelector('#percent')

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

let which = localStorage.getItem('which');

if (which == 1) {

} else if (which == 2) {

} else {
  console.log('ocorreu um erro')
}