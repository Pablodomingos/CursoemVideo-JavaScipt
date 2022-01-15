const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");

const modal = document.querySelector(".modal");
const invisivel = document.querySelector(".invisivel");

let idx = 0;
let ix = 0;

imgs.addEventListener("wheel", function(){
    ix++;
    // console.log(img.length); 
    if(ix > img.length - 1){
        ix = 0;
    }
    imgs.style.transform = `translateX(${ix * -81}vw)`;
});

imgs.addEventListener("touchstart", function(){
    idx++;
    // console.log(img.length);
    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${idx * -81}vw)`;
});

function mostrar(e){
    modal.style.display = 'unset';
    invisivel.innerHTML = `<p class= 'paragrafo-modal'>Bandeira <strong>${e}</strong></p>`;
};

fechar.addEventListener("click", function(){
    modal.style.display = `none`;
});
