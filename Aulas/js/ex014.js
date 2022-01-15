let i = 0;

//loops.
while(i < 2){
    console.log(`while = ${i}`);
    i++;    
}

i = 0;
do{
    console.log(`do while = ${i}`);
    i++;
}while(!(i < 2));//Sé liga!

for(i = 0; i < 2; ++i){
    console.log(`for = ${i}`);
}

//função recursiva.
i = 0;
repeticao(i);

function repeticao(i){
    console.log(`função recursiva = ${i}`);
    if(i === 1){return 0;}//Se i for identico a 1. 
    i++;
    return repeticao(i);
}
