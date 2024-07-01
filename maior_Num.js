const prompt = require("prompt-sync")();
while (true) {
    let numero = prompt("Digite um numero");
    if(isNaN(+numero)){
    console.log("Numero inválido")
    } else{
        console.log(numero);
        numero = numero.split("");
        for (let i = 0; i < numero.length; i++) {
            for(let j = i + 1; j < numero.length; j++) {
                let aux = numero[i];
                numero[i] = numero[j];
                numero[j] = aux;
            }
        }
        console.log("maior número: " + numero.join(""));
    }
}

