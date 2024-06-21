const ler = require('readline-sync');


    let numeros = []; 

    console.log("Digite cinco numeros:");

 
    for (let i = 0; i < 5; i++) {
        let numero = ler.questionInt(`Numero ${i + 1}: `);
        numeros.push(numero);
    }

  
    let maiorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }


    console.log(`O maior numero digitado é: ${maiorNumero}`);
