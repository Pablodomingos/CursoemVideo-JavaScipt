function sexo(s){
    const ano = new Date().getFullYear();
    const btn = document.querySelector("button");
    const sexo = s.value;
    const img = document.querySelector("img");

    btn.addEventListener("click",function () {
        const anoIdade = document.querySelector(".anoIdade input").value;
        const h5 = document.querySelector("h5");
        const idade = ano - anoIdade;

        if(anoIdade >= ano || anoIdade == ''){
            h5.innerHTML = `Ano Do nascimento inválido`;
            h5.style.color = 'red';
            img.style.display = 'none';
        }else{
            h5.style.color = 'green';
            sexo == 'm' ? h5.innerHTML = `Detectamos um Homem com ${ano - anoIdade} anos de idade` : h5.innerHTML = `Detectamos uma Mulher com ${ano - anoIdade} anos de idade`;
            retorno(sexo, idade, img);
        }
        
    });

};

function retorno(s, idade, img) {

    switch (s){
        case 'm':
            img.style.display = 'unset';
            if(idade < 13){
                img.src = '/Exercicios/img/menino1.png';
            }else if(idade < 20){
                img.src = '/Exercicios/img/menino2.png';
            }else if(idade < 50){
                img.src = '/Exercicios/img/menino3.png';
            }else{
                img.src = '/Exercicios/img/menino4.png';
            }
            break;
            
        case 'f':
            img.style.display = 'unset';
            if(idade < 13){
                img.src = '/Exercicios/img/menina1.png';
            }else if(idade < 20){
                img.src = '/Exercicios/img/menina2.png';
            }else if(idade < 50){
                img.src = '/Exercicios/img/menina3.png';
            }else{
                img.src = '/Exercicios/img/menina4.png';
            }
            brreak;
    };
}


