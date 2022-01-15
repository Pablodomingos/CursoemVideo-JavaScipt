function contar() {
    let inicio = document.querySelector("#inicio").value;
    let fim = document.querySelector("#fim").value;
    let passo = document.querySelector("#passo").value;
    const res = document.querySelector(".resultado");
    const array = [];

    if (inicio == '' || fim == '' || passo === '') {
        res.innerHTML = '[ERRO] Falta valores. Impossível contar!';
    } else {
        inicio = Number(inicio); fim = Number(fim); passo = Number(passo);
        if (passo <= 0) {
            alert(`Impossivel contar com passo ${passo} considere PASSO = 1`);
            passo = 1;
        }
        if (inicio <= fim) {
            while (inicio <= fim) {
                array.push(inicio);
                inicio += passo;
            }
        } else {
            while (inicio >= fim) {
                array.push(inicio);
                inicio -= passo;
            }
        }
        res.innerHTML = 'Contador: '
        res.innerHTML += `<br>${array.join(String.fromCodePoint('128073'))} 🏴</br>`;
        // res.innerHTML += `<br>${array.join(`\u{1F449}`)} 🏴</br>`; Outro metodos de mostrar emojis.
    }
}

