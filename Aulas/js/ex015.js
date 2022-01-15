var num = [5, 8, 2, 4, 5, 6];
let valor = 19;
let i = 0;
while(i<2){
    num.push(valor);
    i++
    valor += i;
}

function ordena(a,b){
    return (a-b);
}

console.log(`Quantidade de elementos do vetor ${num.length}`);
console.log(`Nosso vetor é ${num}`);
console.log(`Vetor ordenado ${num.sort(ordena)}`);
