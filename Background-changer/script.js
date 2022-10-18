const button = document.getElementById('btn');
const body = document.getElementById('body');

button.addEventListener("click", ()=>{
    button.classList.toggle('active');
    body.classList.toggle('active');
 })