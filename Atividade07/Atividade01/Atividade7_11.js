const ler = require('readline-sync');

const numero = ler.questionInt("Digite um numero: ");


function divisao(numero) {
    if (numero % 10 === 0) {
        return numero + " e divisivel por 10.";
    } else if (numero % 5 === 0) {
        return numero + " e divisivel por 5.";
    } else if (numero % 2 === 0) {
        return numero + " e divisivel por 2.";
    } else {
        return numero + " nao e divisivel por 10, 5 ou 2.";
    }
}

    console.log(divisao(numero));


