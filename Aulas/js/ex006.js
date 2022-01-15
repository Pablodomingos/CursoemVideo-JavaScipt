var a = document.querySelector("#area");

a.addEventListener("click", function clicar(){
    var clicar = document.querySelector("#area");
    clicar.innerText = "Clicou!";
    clicar.style.background = "red";    
});

a.addEventListener("mouseover", function entrar(){
    var entrar = document.querySelector("#area");
    entrar.innerText = "Entrou!";
    entrar.style.background = "#ff7f50";
});

a.addEventListener("mouseout", function sair(){
    var sair = document.querySelector("#area");
    sair.innerText = "Saiu!";
    sair.style.background = "#48ff00";
});


