// var nome = prompt("Qual seu nome ?");
// var welcome = document.querySelectorAll("h2")[0].inputMode = `Bem vindo ${nome}`;

function mostrar(){
    var entrada = document.querySelector("#entrada").value;
    entrada ? ocorreuUmaEntrada(entrada) : location.reload();
}

function ocorreuUmaEntrada(entrada){
    document.querySelectorAll("h2")[1].innerHTML = "Resultado";
    document.querySelectorAll("p")[1].innerHTML = `Obrigado por ter digitado <strong>${entrada}<strong>.`;
}
