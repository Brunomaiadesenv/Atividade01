const ler = require('readline-sync');


    let numeros = []; 

    console.log("Digite cinco numeros:");

 
    for (let i = 0; i < 5; i++) {
        let numero = ler.questionInt(`Numero ${i + 1}: `);
        numeros.push(numero);
    }

  
     console.log(numeros);