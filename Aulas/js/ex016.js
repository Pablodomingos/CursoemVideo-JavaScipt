let valores = [8, 9, 10, 3];

//Ambos os FORS são a mesma coisa para arrays e objects.
/*
for(let i in valores){
    console.log(`A posição ${i} tem o valor ${valores[i]}`);
}

for(let i = 0 ; i < valores.length; ++i){
    console.log(`A posição ${i} tem o valor ${valores[i]}`);
}
*/

console.log(valores);

const valor = 11;
const pos = valores.indexOf(valor);

pos == -1 ? console.log(`O valor ${valor} não foi encontrado`) : console.log(`O valor ${valor} está na posição ${pos}`);

