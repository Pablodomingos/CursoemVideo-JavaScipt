var nome = window.prompt("Qual seu nome ?");
var trabalho = window.confirm(`${nome.toUpperCase()} Você trabalha ?`);
var salario;

document.write(`O nome ${nome.toUpperCase()} tem ${nome.length} letras!</br>`);

trabalho ? emprego() : document.write("Não desista você vai arrumar um trabalho.");

function emprego(){
    salario = Number(window.prompt("Qual seu salário ?").replace(',','.'))
    document.write(`Seu salário é ${salario.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}`);//Usando a  localidade dos EUA é o dolar.
}
