var p1 = window.document.getElementsByTagName("p")[0];
var p2 = window.document.getElementsByTagName("p")[1];  

//Ambos fazem a mesma  coisa mas o querySelector é mais recomendado
var d1 = document.getElementById("msg").innerText = "Primeiro teste." //Selecionando por id 
// var d2 = document.querySelector("#msg").innerText = "Segundo teste." //Selecionando por class css

var seletor = document.querySelectorAll("p")[0].innerText;
console.log(seletor);


// window.document.getElementById("msg").innerText = "teste!";

// console.log(p1.innerHTML);

// d.style.background = "orange";
// d.innerText = "Estou aguardando..."

// p1.innerText = "Olá Pablo";
// p1.style.display = "inline-block";
// p2.style.color = "black";
// p2.style.display = "inline-block";

//window.confirm(p2.innerText);
