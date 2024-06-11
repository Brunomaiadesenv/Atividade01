const ler = require('readline-sync');


function adicaoECondicoes(numero1, numero2) {

    let soma = numero1 + numero2;

  
    if (soma > 20) {
      
        soma += 8;
    } else {
        
        soma -= 5;
    }

    
    return soma;
}


function main() {
 
    const numero1 = ler.questionFloat("Digite o primeiro número: ");
    const numero2 = ler.questionFloat("Digite o segundo número: ");


    const resultado = adicaoECondicoes(numero1, numero2);


    console.log("O resultado é: " + resultado);
}


main();