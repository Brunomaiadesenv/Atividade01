const ler = require('readline-sync');


function verificarMultiploDeTres(numero) {
  
    if (numero % 3 === 0) {
        return "é múltiplo de 3";
    } else {
        return "não é múltiplo de 3";
    }
}


function main() {
    
    const numero = ler.questionInt("Digite um número: ");

   
    console.log("O número " + numero + " " + verificarMultiploDeTres(numero));
}


main();