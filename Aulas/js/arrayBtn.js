const c = 0;
var randomicos = [];
var randomicos2 = [];
var valoresGerados = 0;
var copy;

for(let i = 0; i < 10; i++){
    valoresGerados = parseInt(Math.random()*10);
    copy = randomicos.indexOf(valoresGerados);
    if(copy != -1){
        randomicos.splice(copy, 1);
        i -= 2;
    }else{
        randomicos.push(valoresGerados);
    }
}

valoresGerados = 0;
copy = 0

for(let i = 0; i < 10; i++){
    valoresGerados = parseInt(Math.random()*10);
    copy = randomicos2.indexOf(valoresGerados);
    if(copy != -1){
        randomicos2.splice(copy, 1);
        i -= 2;
    }else{
        randomicos2.push(valoresGerados);
    }
}

let pontos = 0;

for(let i = 0; i < randomicos.length; i++){
    for(let j = 0; j < randomicos2.length; j++){
        if(randomicos[i] == randomicos2[j]){
            pontos++;
        }
    }
}

console.log(randomicos);
console.log(randomicos2);
pontos === 10 ? console.log(`Ganhador com ${pontos}`) : console.log('impossivel');


// let i = 0;
// setTimeout(function teste() {
//     if(i === 50){
//         mensagem1.style.opacity = 0;
//         return 0;
//     }
//     i++
//     setTimeout(teste, 100)
// }, 100); 