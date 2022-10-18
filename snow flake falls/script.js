function creatSnow(){
    const Snow = document.createElement('div');
    Snow.classList.add('snow');
     
    Snow.style.left = Math.random() * 100 + "vw";
    Snow.style.animationDuration = Math.random() * 2 + 3 + "s"
    Snow.innerText = '❄️';
    document.body.appendChild(Snow);

    setTimeout(() => {
        Snow.remove(); 
     }, 5000);
}
setInterval(creatSnow, 300)