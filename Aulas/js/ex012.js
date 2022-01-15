const agora = new Date();
const hora = agora.getHours();
const min = agora.getMinutes();
const sec = agora.getSeconds();

console.log(`Agora são exatamente ${hora}h ${min}m ${sec}s.`);
if(hora < 12){
    console.log(`Bom dia!`);
}else if(hora <= 18){
    console.log(`Bom tarde!`);
}else{
    console.log(`Boa noite!`);
}