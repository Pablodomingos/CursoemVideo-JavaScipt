var clicou = document.querySelectorAll("input")[2];
var i = 0;

clicou.addEventListener("click", function somar(){
    var n1 = Number(document.querySelector("#txtn1").value);
    var n2 = Number(document.querySelector("#txtn2").value);
    // document.querySelectorAll("input")[2].value = `${n1+n2}`;
    document.querySelector("#txt").innerHTML = `O valor da soma de ${n1} e ${n2} é igual a <strong>${n1+n2}!</strong>`;

    i++
    i == 3 ? mensagem() : null;
});

function mensagem(){
    var confirmacao = confirm("Está gostando da calculadora ?");
    confirmacao ? alert("Obrigado!!") : prompt("Por quê ?");
}
