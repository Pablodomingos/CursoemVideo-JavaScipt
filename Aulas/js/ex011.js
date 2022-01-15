var idade = 66;

console.log(`Você tem ${idade} anos`);

//Primeira opção que faz a mesma coisa que a segunda porém utilizando condições ternárias.
idade < 16 ? console.log(`Não vota`) : idade < 18 || idade > 65 ? console.log(`Voto opcional`) : console.log(`Vota Obrigatório`);

//Segunda opção que faz a mesma coisa da primeira porém utiliza as condições convencionais.
/*
if(idade < 16){
    console.log(`Não vota`);
}else if(idade < 18 || idade > 65){
    console.log(`Voto opcional`);
}else{
    console.log(`Vota Obrigatório`);
}
*/