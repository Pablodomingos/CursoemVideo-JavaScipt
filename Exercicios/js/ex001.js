const img = document.querySelector("img");
const div = document.querySelector(".msg");

function carregar() {
    let Horas = new Date().getHours();
    
    if(Horas < 13){
        div.innerHTML = `<h3>São<p>${Horas}</p>Horas da Manhã</h3>`;
        img.src = '/Exercicios/img/dia.jpg';
        document.body.style.background = 'linear-gradient(to top, #fffa65, #ffd32a )';
    }else if(Horas < 18){
        div.innerHTML = `<h3>São<p>${Horas}</p>Horas da Tarde</h3>`;
        img.src = '/Exercicios/img/tarde.jpg';
        document.body.style.background = 'linear-gradient(to top, #e58e26, #ffc048)';
    }else if(Horas <= 23){
        div.innerHTML = `<h3>São<p>${Horas}</p>Horas da Noite</h3>`;
        img.src = '/Exercicios/img/noite.jpg';
        document.body.style.background = 'linear-gradient(to top, #1e3799 30%, #0c2461)';
    }

};

