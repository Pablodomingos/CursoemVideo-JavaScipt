//Maneira Tradicional
function fatorial(n) {
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat;
}

/* 
Maneira Recursiva
let fat = 1;
function fatorial(n) {
    if(n == 1){return fat};    
    fat *= n;
    n--;
    return fatorial(n);
}

function fatorial(n) {
    if(n == 1){
        return 1;
    }else{
        return n * fatorial(n-1);
    }
}
*/

console.log(`A fatorial de 5 é ${fatorial(3)}`);
