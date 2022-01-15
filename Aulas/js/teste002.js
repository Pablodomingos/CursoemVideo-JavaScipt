function fundo() {
    const sec = new Date().getSeconds();
    const documento = document.querySelector("html");
    if (sec <= 10) {
        documento.style.background = "#55efc4";
    } else if (sec <= 20) {
        documento.style.background = "#00cec9";
    } else if (sec <= 30) {
        documento.style.background = "#fab1a0";
    } else if (sec <= 40) {
        documento.style.background = "#636e72";
    } else if (sec <= 50) {
        documento.style.background = "#6c5ce7";
    } else {
        documento.style.background = "#e17055"
    }
};

const tempo = setInterval(fundo);