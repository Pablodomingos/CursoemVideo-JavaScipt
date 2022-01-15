const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    let numero = document.getElementById("numeros").value;
    let res = document.querySelector("select");
    if(numero == ''){
        alert('Por favor digite um número!');
    }else{
        // option.remove(); Remove um campo.
        res.innerHTML = '';
        numero = Number(numero);
        for(let i = 1; i < 11; i++){
            let option = document.createElement('option')
            option.innerHTML = `${numero} X ${i} = ${numero*i}`;
            // option.value = `valor${i}`; Essa linha faz mais sentido em linguagens como PHP.
            res.append(option);        
        }
    }
});
