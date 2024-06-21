const ler = require('readline-sync');


    let tamanhoArray = 10;
    let numeros = []; 
    let countPares = 0; 

    console.log(`Digite ${tamanhoArray} numeros:`);

 
    for (let i = 0; i < tamanhoArray; i++) {
        let numero = ler.questionInt(`Numero ${i + 1}: `);
        numeros.push(numero);
    }

   
    for (let i = 0; i < tamanhoArray; i++) {
        if (numeros[i] % 2 === 0) {
            countPares++;
        }
    }

   
    console.log(`O array possui ${countPares} numeros pares.`);