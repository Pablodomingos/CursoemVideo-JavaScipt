var click = document.querySelectorAll("input")[1];

click.addEventListener("click", function verificar(){
    var velocidade = Number(document.getElementById("txtvel").value);
    var mensagem =  document.getElementById("mensagem");
    mensagem.innerHTML = `<p>Sua velocidade é <strong>${velocidade}</strong>Km/h!</p>`;
    if(velocidade > 60){
        mensagem.innerHTML += `<p>Você está acima do limite de velocidade. <strong>MULTADO!</strong></p>`;
    }else{
        mensagem.innerHTML += "<p></p> ";
    }
    mensagem.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`; 
});
