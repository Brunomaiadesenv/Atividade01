const ler = require('readline-sync');


function verificarDivisibilidade(numero) {
    if (numero % 10 === 0) {
        return numero + " é divisível por 10.";
    } else if (numero % 5 === 0) {
        return numero + " é divisível por 5.";
    } else if (numero % 2 === 0) {
        return numero + " é divisível por 2.";
    } else {
        return numero + " não é divisível por 10, 5 ou 2.";
    }
}


function main() {

    const numero = ler.questionInt("Digite um número: ");

  
    console.log(verificarDivisibilidade(numero));
}


main();