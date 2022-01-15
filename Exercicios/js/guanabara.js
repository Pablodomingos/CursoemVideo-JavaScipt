function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fAno.value.length == 0 || fAno.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        var fSex = document.getElementsByName('txtsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');//Anotar
        img.setAttribute('id', 'foto');//Anotar
        if(fSex[0].checked){
            genero = 'Homem';
            if(idade < 10){
                img.setAttribute('src', '/Exercicios/img/menino1.png');
            }else if(idade < 21){
                img.setAttribute('src', '/Exercicios/img/menino2.png')
            }else if(idade < 50){
                img.setAttribute('src', '/Exercicios/img/menino3.png')
            }else{
                img.setAttribute('src', '/Exercicios/img/menino4.png')
            }
        }else if(fSex[1].checked){
            genero = 'Mulher';
            if(idade < 10){
                img.setAttribute('src', '/Exercicios/img/menina1.png')
            }else if(idade < 21){
                img.setAttribute('src', '/Exercicios/img/menina2.png')
            }else if(idade < 50){
                img.setAttribute('src', '/Exercicios/img/menina3.png')
            }else{
                img.setAttribute('src', '/Exercicios/img/menina4.png')
            }
        }

        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);//Anotar
    }   

}


