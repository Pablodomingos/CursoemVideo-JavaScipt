let array = [];
let p = document.querySelector("p");
let res = document.querySelector("select");

function Adicionar() {
    const entrada = document.querySelector(".inputEntrada");
    const valor = Number(document.getElementById("entrada").value);
    const encontrar = array.indexOf(valor);

    if (valor < 1 || valor > 100 || encontrar > -1) {
        alert('Valor inválido ou já encontrado na lista.');
    } else {
        array.push(valor);
        let option = document.createElement('option');
        option.innerHTML = `Valor ${valor} adicionado.`;
        res.appendChild(option);
        p.innerHTML = '';
    }

    entrada.value = '';
    entrada.focus();
}

const finalizar = document.querySelector(".finalizar");

finalizar.addEventListener("click", function () {
    if (array.length == []) {
        alert('Adicione valores antes de finalizar!');
    } else {
        var max = Math.max.apply(null, array);//Poder colocar null ou [] tanto faz.
        const min = Math.min.apply([], array);
        const quaçq = array.reduce((num, currentElement) => num + currentElement);
        p.innerHTML = `Ao todo, temos ${array.length} números cadastrados.<br>`;
        p.innerHTML += `O maior valor informado foi ${max}.<br>`;
        p.innerHTML += `O menor valor informado foi ${min}.<br>`;
        p.innerHTML += `Somando todos os valores, temos ${quaçq}<br>`;
        p.innerHTML += `A média dos valores digitados é ${(quaçq / array.length).toFixed(2)}`;
        console.log(array.sort());
    }
});

function limpar() {
    array = [];
    p.innerHTML = '';
    res.innerHTML = '';
}