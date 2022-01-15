let array = [];
let p = document.querySelector("p");
const entrada = document.querySelector(".inputEntrada");
const select = document.querySelector("select");

function isNumber(n) {
    if(n > 0 && n < 101){
        return true
    }else{
        return false
    }
}

function numberIsRept(n) {
    let encontrou = array.indexOf(n);
    if(encontrou == -1){
        array.push(n);
        return true
    }else{
        return false;
    } 
}

function Adicionar() {
    if(isNumber(Number(entrada.value)) && numberIsRept(Number(entrada.value))){
        let item = document.createElement('option');
        item.innerHTML = `Valor ${entrada.value} adicionado.`;
        select.appendChild(item);
        p.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista.');
    }
    
    entrada.value = '';
    entrada.focus();
}

const finalizar = document.querySelector(".finalizar");

finalizar.addEventListener("click", function () {
    if(array.length == 0){
        alert('Adicione valores antes de finalizar!');
    }else{
        p.innerHTML = `Ao todo, temos ${array.length} números cadastrados.<br>`;
        let soma = 0;
        let max = array[0];
        let min = array[0];
        for(let i in array){
            soma += array[i]
            if(array[i] > max){
                max = array[i];
            }
            if(array[i] < min){
                min = array[i];
            }
        }
        p.innerHTML += `O maior valor informado foi ${max}.<br>`;
        p.innerHTML += `O menor valor informado foi ${min}.<br>`;
        p.innerHTML += `Somando todos os valores, temos ${soma}<br>`;
        p.innerHTML += `A média dos valores digitados é ${(soma / array.length).toFixed(2)}`
    }
});

function limpar() {
    array = [];
    p.innerHTML = '';
    select.innerHTML = '';
}