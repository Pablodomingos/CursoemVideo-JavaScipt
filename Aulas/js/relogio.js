const div = document.querySelector(".div");

div.addEventListener("click", function mostrar(){
    // var hora = `${agora.getHours()} : ${agora.getMinutes()} : ${agora.getSeconds()}`;
    const agora = new Date();
    const hora = `${agora.getHours()}h ${agora.getMinutes()}m `;
    const sec = agora.getSeconds();

    const p = document.querySelectorAll('p')[0];
    const horas = document.querySelector(".horas");
    
    horas.innerHTML = `${hora}<p class=sec>${sec}s</p>`;
    p.innerHTML = `Dê um duplo click!`;

    div.addEventListener("dblclick", function(){
        const dia = agora.getDay();
        p.innerHTML = ``;
        
        switch (dia){
            case 0:
                div.innerHTML = `<p class = horas> Domingo</p>`;
                break;
            case 1:
                div.innerHTML = `<p class = horas> Segunda</p>`;
                break;
            case 2:
                div.innerHTML = `<p class = horas> Terça</p>`;
                break;
            case 3:
                div.innerHTML = `<p class = horas> Quarta</p>`;
                break;
            case 4:
                div.innerHTML = `<p class = horas> Quinta</p>`;
                break;
            case 5:
                div.innerHTML = `<p class = horas> Sexta</p>`;
                break;
            case 6:
                div.innerHTML = `<p class = horas> Sabado</p>`;
                break;
        }
        
        clearInterval(clockCreate);
    });

    const clockCreate = setInterval(mostrar);
});

