const hamburguer = document.querySelector(".bloco-hamburguer");
const bloco = document.querySelector(".bloco1");

hamburguer.addEventListener("click", function(){
    if(bloco.className == 'bloco1'){
        bloco.classList.remove('bloco1')
        bloco.classList.add('bloco2');
    }else{
        bloco.classList.remove('bloco2');
        bloco.classList.add('bloco1')
    }
});
